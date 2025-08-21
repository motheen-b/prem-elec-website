import uvicorn
import aiohttp
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from square import Square, environment
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:4173",
        "http://localhost",     
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",

        "https://theliquidation.group",
        "https://www.theliquidation.group",
        "https://api.theliquidation.group",
        "https://www.api.theliquidation.group",

        "http://theliquidation.group",
        "http://www.theliquidation.group",
        "http://159.89.123.156",
        "https://159.89.123.156"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


client = Square(
    token=os.getenv("SQUARE_ACCESS_TOKEN"),
    environment=environment.SquareEnvironment.PRODUCTION
)


async def get_images():
    image_urls = {}
    API_URL = f'https://connect.squareup.com/v2/catalog/list?types=image'
    HEADERS = {
        'Square-Version': '2025-07-16',
        'Authorization': f'Bearer {os.getenv("SQUARE_ACCESS_TOKEN")}',
        'Content-Type': 'application/json'
    }
    async with aiohttp.ClientSession() as session:
        async with session.get(API_URL, headers=HEADERS) as response:
            assert response.status == 200
            data = await response.json()
            objects = data['objects']
            for object in objects:
                image_urls[object['id']] = object['image_data']['url']

    return image_urls


@app.get("/catalog")
async def get_products():

    CATEGORIES = {
        'M4SO6XG4F4SU3MJASFTTIQY4': 'Pallets',
        '7RZ5KU26Z2BTFLDTPSDWWZ7B': 'Electronics',
        'WCN4HVAR5KDQ4XID42XSSOTF': 'Furniture',
        'X4Z5PFZOWEGKUWHJPXI4O3WR': 'Appliances'
    }

    response = {
        'products': [],
        'categories': list(CATEGORIES.values())
    }


    try:
        image_urls = await get_images()
        print(image_urls)

        result = client.catalog.list(types='ITEM,IMAGE')
        items = result.items

        for item in items[::-1]:

            item_type = item.type

            # if item_type == 'CATEGORY':
            #     categories[item.id] = item.category_data.name
            #     response['categories'].append(item.category_data.name)
            
            # if item_type == 'IMAGE':
            #     image_urls[item.id] = item.image_data.url

            

            if item_type == 'ITEM':
                data = item.item_data

                name = data.name
                description = data.description_plaintext or data.description or ""
                image_url = data.ecom_image_uris[0] if data.ecom_image_uris else None

                var = data.variations[0] if data.variations else  []

                var_data = var.item_variation_data
                price_cents = var_data.price_money.amount if var_data.price_money else 0
                price = price_cents / 100
                currency = var_data.price_money.currency if var_data.price_money else "USD"

                stock = var.item_variation_data.location_overrides[0].sold_out
                in_stock = False if stock else True

                image_id = data.image_ids[0]

                try:
                    image_url = image_urls[image_id]
                    print(image_url)
                except KeyError:
                    image_url = None
  

                category_id = data.categories[0].id

                response['products'].append({
                    "id": var.id,
                    "name": name,
                    "description": description,
                    "price": price,
                    "currency": currency,
                    "image_url": image_url,
                    "in-stock": in_stock,
                    "category": CATEGORIES[category_id]
                })


        return {"result": response}

    except Exception as e:
        print("❌ Error:", e)
        return {"error": "Unable to fetch products"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
