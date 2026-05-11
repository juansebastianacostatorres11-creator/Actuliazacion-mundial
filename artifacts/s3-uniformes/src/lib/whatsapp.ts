export function buildWhatsAppLink(message: string, phone: string = "573012515695") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
