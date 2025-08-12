<template>
    <div class="contact-container">

        <div class="contact-content">
            <SectionHeader title="Contact Us" subtitle="We’d love to hear from you! Reach us by phone, email, or by sending us a message directly." />

            <div class="contact-left">
                <h2>Our Location</h2>
                <p class="address">
                    724 Caledonia Rd, North York, Ontario M6B 3X7, Canada
                </p>

                <div class="phones">
                    <p>📞 (647) 901-7565 - Motheen</p>
                    <!-- <p>📞 (416) 555-5678</p>
                    <p>📞 (416) 555-9012</p> -->
                </div>

                <p>📧 contact@premiumelectronics.ca</p>
                <h4>We are open by appointment only, contact us prior to arrival.</h4>

                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.565808313008!2d-79.46279992377443!3d43.691597851612404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33d52c481b37%3A0xb78e9e2852b2d3d6!2s724%20Caledonia%20Rd%2C%20North%20York%2C%20ON%20M6B%203X7%2C%20Canada!5e0!3m2!1sen!2sca!4v1691771586789!5m2!1sen!2sca"
                        width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>


            <div class="contact-right">
                <h2>Send Us a Message</h2>
                <form @submit.prevent="sendEmail">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input v-model="form.name" type="text" id="name" required />
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input v-model="form.email" type="email" id="email" required />
                    </div>

                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea v-model="form.message" id="message" rows="5" required></textarea>
                    </div>

                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import { reactive } from "vue";

const form = reactive({
    name: "",
    email: "",
    message: "",
});

function sendEmail() {
    console.log("📨 Sending email...", form);
    alert("Your message has been sent! We'll get back to you soon.");
    form.name = "";
    form.email = "";
    form.message = "";
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display:wght@400;700&family=Work+Sans:wght@400;600&display=swap');
.contact-container {
    padding: 2rem;
    max-width: 1200px;
    margin: auto;
    font-family: 'Work Sans', 'sans-serif';
}

.title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
}

.contact-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
}

.contact-left,
.contact-right {
    flex: 1 1 45%;
    line-height: 1.5;
    background: #fafafa;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
}

.address {
    font-weight: 500;
}

.phones p {
    margin: 0.25rem 0;
}

.map-container {
    margin-top: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

input,
textarea {
    padding: 0.75rem;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.submit-btn {
    background: #222;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;
}

.submit-btn:hover {
    background: #444;
}
</style>
