export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '')
  if (!cleanNumber || cleanNumber.includes('XXXX') || cleanNumber.length < 10) {
    console.warn('WhatsApp: invalid phone number placeholder — replace 91XXXXXXXXXX with real number in data.ts')
    return '#whatsapp-not-configured'
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`
}
