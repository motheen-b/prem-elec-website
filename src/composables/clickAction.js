import { useScreen } from './useScreen'
import { useToast } from './useToast'

const { isMobile } = useScreen()
const { success, error } = useToast()

export function clickToCopy(phoneNumber) {
    navigator.clipboard.writeText(phoneNumber)
        .then(() => success('Phone number copied to clipboard!', 'Copied'))
        .catch(err => {
            console.error('Failed to copy', err)
            error('Failed to copy phone number', 'Copy Error')
        })
}

export function clickToCall(phoneNumber) {
    if (isMobile.value) {
        window.location.href = `tel:${phoneNumber}`
    } else {
        clickToCopy(phoneNumber)
    }
}

export function openMap(warehouseAddress = "724 Caledonia Rd, North York, ON, M6B 3X7") {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(warehouseAddress)}`
  window.open(url, '_blank', 'noopener')
}
