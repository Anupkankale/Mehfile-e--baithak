import { site } from '~/data/site'

/** wa.me link that opens WhatsApp to the Mehfil number with the message prefilled. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
