// All page content lives here so sections stay plain templates.

export const site = {
  url: 'https://anupkankale.github.io/Mehfile-e--baithak/',
  phone: '+91 9326869492',
  phoneHref: 'tel:+919326869492',
  whatsapp: '919326869492',
  email: 'mehfilebaithak@gmail.com',
  location: 'Kalyan, Maharashtra'
}

export const navLinks = [
  { href: '#baithak', label: 'Experience' },
  { href: '#fankaar', label: 'Voices & Chords' },
  { href: '#safar', label: 'Story' },
  { href: '#gallery', label: 'Moments' },
  { href: '#upcoming', label: 'Upcoming' },
  { href: '#partner', label: 'Partner' },
  { href: '#nishist', label: 'Contact' }
]

const svg = (d: string) => d
export const elements = [
  { icon: svg('<path d="M4 20c4 0 6-3 6-7s2-9 7-9"/><circle cx="6" cy="18" r="3"/><path d="M17 4l3 2"/>'), hi: 'लाइव गजल', en: 'LIVE GHAZALS', text: 'Timeless classical compositions and acoustic sittings performed by trained vocalists, breathing new life into traditional verse.' },
  { icon: svg('<path d="M5 4h11l3 3v13H5z"/><path d="M8 10h8M8 14h6"/>'), hi: 'शायरी बैठक', en: 'SOULFUL SHAYARI', text: 'Evocative Hindi poetry read under soft candlelight. Beautiful couplets, moving nazms, and storytelling that speak directly to the heart.' },
  { icon: svg('<circle cx="7.5" cy="16.5" r="4.4"/><path d="M10.6 13.4L19 5M16.4 3.2l4.4 4.4"/>'), hi: 'पारंपरिक साज', en: 'ACOUSTIC TONES', text: 'Pure, organic acoustics. Unplugged sitar, bansuri, hand percussion, and classical guitar with no synthetic layers.' },
  { icon: svg('<path d="M12 3c2 3 3 5 3 7a3 3 0 01-6 0c0-2 1-4 3-7z"/><path d="M6 21h12M9 21v-4h6v4"/>'), hi: 'शमां और उजाला', en: 'PREMIUM AMBIENCE', text: 'An escape from the modern hustle. Traditional floor sittings, soft carpets, hanging lanterns, and hundreds of warm flickering candles.' },
  { icon: svg('<circle cx="8" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M2 20c0-3.5 2.7-6 6-6s6 2.5 6 6M14.5 15.2c.8-.4 1.6-.6 2.5-.6 2.5 0 4.5 2 4.5 5"/>'), hi: 'रूहानी गुफ़्तगू', en: 'COMMUNITY SITTINGS', text: 'Not a passive show. Share conversation, emotions and genuine heart-to-heart connections with people who feel music as deeply as you do.' },
  { icon: svg('<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>'), hi: 'सुर-संगम', en: 'ARTISTE SYNERGY', text: 'A canvas for master instrumentalists, independent songwriters, and rising shayars. We curate raw talent for fresh textures each evening.' }
]

export const couplets: [string, string][] = [
  ['कुछ महफ़िलें सिर्फ़ सजती नहीं<br>दिलों में बस जाती हैं...', 'SOME EVENINGS DO NOT JUST HAPPEN... THEY RESIDE IN HEARTS'],
  ['सिर्फ़ आवाज़ नहीं<br>एक एहसास है महफ़िल...', 'NOT JUST A VOICE, THE GATHERING IS AN EMOTION'],
  ['वो बात जो लफ़्ज़ों में बयाँ ना हो सके<br>संगीत कह देता है।', 'WHAT WORDS FAIL TO EXPLAIN, MUSIC WHISPERS'],
  ['जहां अजनबी हमसफ़र बनें<br>और सुर यादें बन जाएं।', 'WHERE STRANGERS BECOME FAMILY, AND MUSIC BECOMES A MEMORY']
]
export const marqueeWords = ['ग़ज़ल', 'WAH', 'शायरी', 'SUR', 'बांसुरी', 'TABLA', 'हारमोनियम', 'WAH', 'सूफ़ी', 'SAMA']

export const voices = [
  { img: 'rahul.webp', name: 'Rahul', role: 'Lead Vocalist' },
  { img: 'kedar.webp', name: 'Kedar', role: 'Bansuri Artiste' },
  { img: 'ashutosh.webp', name: 'Ashutosh', role: 'Tabla Master' },
  { img: 'bhavesh.webp', name: 'Bhavesh', role: 'Grand Pianist' },
  { img: 'bhushan.webp', name: 'Bhushan', role: 'Acoustic Guitar' }
]

export const journey = [
  { time: '2023 · THE CHORDS', title: 'Cozy Balcony', hi: 'सुरीली बालकनी • मैत्र आणि सूर', text: '8 friends. 1 guitar. Unfiltered emotions. It began on an autumn evening with eight friends, an old acoustic guitar, and pure acoustic chords in the background. We spoke in couplets and sang till midnight.' },
  { time: '2024', title: 'Expanding Circle', hi: 'दायरा बढ़ता गया • भावनांचा प्रवास', text: 'Where strangers became companions. Word of mouth carried the aroma of our evenings. We moved to a cozy candle-lit terrace in Kalyan. Strangers began to join, bringing their own stories and shayaris.' },
  { time: '2025', title: 'First Public Baithak', hi: 'पहली सार्वजनिक बैठक • स्वर-मंच', text: 'A beautiful validation of pure feeling. We officially launched Mehfil-E-Baithak as a public movement. In partnership with intimate spaces, we hosted our first ticketed gathering. It sold out in just under four hours.' },
  { time: '2026', title: 'Intimate Auditoriums', hi: 'अंतरंग सभागृह • मनाचे सूर', text: 'A growing community bound by poetry and strings. Today, we curate soulful candle-lit musical sittings across premium venues in Kalyan and Dombivli. While the spaces are larger, the heart remains as intimate as that first balcony.' }
]

export const galleryFilters = ['all', 'events', 'audience', 'artists', 'backstage', 'moments'] as const
export type GalleryFilter = typeof galleryFilters[number]
export const gallery: { img: string, cat: Exclude<GalleryFilter, 'all'>, title: string, text: string }[] = [
  { img: 'stageteam.webp', cat: 'events', title: 'The Stage Team Bow', text: 'The entire Mehfil-E-Baithak team bowing after a sold-out acoustic concert under deep red spotlights.' },
  { img: 'rahul.webp', cat: 'artists', title: 'Lost in the Melody', text: 'Rahul, our lead vocalist, losing himself in the deep ragas of a classical ghazal under a warm spotlight.' },
  { img: 'public_crowd.webp', cat: 'audience', title: 'An Intimate Connection', text: 'Classical music lovers sitting close together on floor rugs under the warm candlelight in Kalyan.' },
  { img: 'bhushan.webp', cat: 'backstage', title: 'Plucking the Strings', text: 'Bhushan fine-tuning the chords of his acoustic guitar backstage minutes before the baithak starts.' },
  { img: 'public.webp', cat: 'moments', title: 'Sharing Chords and Emotions', text: 'Cozy crowd conversations. Strangers sharing smiles and warm emotions during the acoustic melodies.' },
  { img: 'kedar.webp', cat: 'artists', title: 'Blowing the Wind of Longing', text: 'Kedar casting a spell of absolute silence over the room with the warm, breathing notes of his bansuri.' }
]

export const featuredEvent = {
  name: 'Page 2 × Mehfil-e Baithak · Pre-Diwali Night',
  tagline: 'A curated pre-Diwali evening of ghazals, Bollywood and a DJ finale.',
  startISO: '2026-11-06T20:00+05:30',
  endISO: '2026-11-06T23:00+05:30',
  date: 'Friday, 6 November 2026',
  time: '8:00 PM onwards · 3 hours',
  timeNote: 'Timings to be finalised',
  venue: 'Page 2, Thakurli',
  format: 'Music & DJ Night',
  price: 499,
  priceNote: 'Per person · food not included in entry',
  badges: ['Maximum 25 Guests', 'Curated Guest List'],
  note: 'An intimate, premium, carefully curated evening rather than a large-scale party.',
  cta: 'Register Interest',
  ctaMessage: 'Hi, I want to register for the Pre-Diwali Night at Page 2, 6 November',
  segments: [
    { title: 'MEHFIL-E BAITHAK', text: 'A peaceful, intimate musical experience featuring ghazals.' },
    { title: 'BOLLYWOOD NIGHT', text: 'For Bollywood music lovers and sing-along moments.' },
    { title: 'DJ NIGHT', text: 'Ending the evening on an upbeat note with a DJ session.' }
  ]
}

export const numbers = [
  { value: 8, hi: '८+ महफ़िल', label: 'MEHFILS HOSTED' },
  { value: 750, hi: '७५०+ हमसफ़र', label: 'GUESTS WELCOMED' },
  { value: 7, hi: '७+ कलाकार', label: 'ARTISTS FEATURED' }
]

export const privateCurations = [
  { title: 'HOME SITTINGS (निजी बैठक)', text: 'Balconies, cozy living rooms, or terraces transformed under candles.' },
  { title: 'CORPORATE EVENINGS (कॉर्पोरेट संवाद)', text: 'Pure unplugged chamber music sittings to deeply connect teams.' },
  { title: 'SPIRITUAL GATHERINGS (रूहानी कव्वाली)', text: 'Meditative Sufi, Kabir, and ghazal sittings centered on inner peace.' }
]

export const team = [
  { name: 'Avinash AP', role: 'FOUNDER & CURATOR', text: 'The vision behind Mehfil-E-Baithak, creating evenings where music, emotions and people come together.' },
  { name: 'Kaustubh K', role: 'GROWTH & BRAND STRATEGIST', text: 'Driving partnerships, audience growth and the creative direction that helps Mehfil reach more hearts.' },
  { name: 'Aditya Sonawane', role: 'EXPERIENCE & OPERATIONS LEAD', text: 'Ensuring every Mehfil runs seamlessly, from planning and logistics to the audience experience.' },
  { name: 'Vikas Patel', role: 'CONTENT HEAD', text: 'Curating high-quality poetic content, coordinating shayari circles, and designing soulful sittings copy.' }
]

export interface Memory { name: string, place: string, text: string }
export const seedMemories: Memory[] = [
  { name: 'Rahul Deshmukh', place: 'Kalyan West', text: "I didn't attend a show. I experienced a feeling that stayed with me for weeks. In a crowded city, it felt like a warm embrace." },
  { name: 'Priyanka Joshi', place: 'Dombivli', text: 'Finding a place where strangers sit on carpets together, share deep emotions, and cry to soulful ghazals is purely magical. Pure sufi vibration.' },
  { name: 'Adnan Sheikh', place: 'Khadakpada', text: 'The acoustic sounds, the candlelight, the complete silence of the room when the shayar reads... it is a premium spiritual experience.' }
]

export const perks = [
  { title: 'BRAND VISIBILITY', text: 'Thoughtful logo and physical placement woven naturally into candle-lit setups without looking corporate.' },
  { title: 'PREMIUM AUDIENCE REACH', text: 'Speak directly to an educated, luxury-oriented local demographic of artists, professionals, and tastemakers.' },
  { title: 'VENUE & EXPERIENCE BRANDING', text: 'Customized experience integration, from tailored setups to sponsoring custom floral sit-ins.' },
  { title: 'SOCIAL MEDIA PROMOTION', text: 'Collaborate via high-production aesthetic reel captures, stories, and posts with our digital community.' }
]
export const partners = ['Kanha by Masala Craft', 'The Brewtique', 'SortMyScene', 'Acoustic Craft', 'Kalyan Arts Union', 'Strings & Chords']
