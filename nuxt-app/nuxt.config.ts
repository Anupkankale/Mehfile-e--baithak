// https://nuxt.com/docs/api/configuration/nuxt-config
const site = 'https://anupkankale.github.io/Mehfile-e--baithak/'
const ld = {
  "@context":"https://schema.org",
  "@type":"MusicEvent",
  "name":"Page 2 × Mehfil-e Baithak · Pre-Diwali Night",
  "description":"A curated pre-Diwali evening of ghazals, Bollywood and a DJ finale. Limited to 25 guests.",
  "image":"https://anupkankale.github.io/Mehfile-e--baithak/og-image.jpg",
  "url":"https://anupkankale.github.io/Mehfile-e--baithak/",
  "startDate":"2026-11-06T20:00+05:30",
  "endDate":"2026-11-06T23:00+05:30",
  "eventStatus":"https://schema.org/EventScheduled",
  "eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode",
  "location":{"@type":"Place","name":"Page 2","address":{"@type":"PostalAddress","addressLocality":"Thakurli","addressRegion":"Maharashtra","addressCountry":"IN"}},
  "organizer":{"@type":"Organization","name":"Mehfil-E-Baithak","url":"https://anupkankale.github.io/Mehfile-e--baithak/","telephone":"+919326869492","email":"mehfilebaithak@gmail.com"},
  "offers":{"@type":"Offer","price":"499","priceCurrency":"INR","availability":"https://schema.org/LimitedAvailability","url":"https://anupkankale.github.io/Mehfile-e--baithak/#upcoming"}
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: [],
  nitro: { prerender: { routes: ['/'] } },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: "Mehfil-E-Baithak | Live Ghazals, Shayari & Acoustic Melodies in Kalyan",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "Experience a soulful evening of live ghazals, warm shayari, acoustic performances and meaningful human connections. A premium, intimate baithak in Kalyan, Maharashtra." },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#1F0408' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mehfil-e-Baithak' },
        { property: 'og:locale', content: 'en_IN' },
        { property: 'og:title', content: "Mehfil-E-Baithak | Live Ghazals, Shayari & Acoustic Melodies in Kalyan" },
        { property: 'og:description', content: "Live ghazals, shayari and acoustic melodies by candlelight in Kalyan, Maharashtra." },
        { property: 'og:url', content: site },
        { property: 'og:image', content: site + 'og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "Mehfil-E-Baithak | Live Ghazals, Shayari & Acoustic Melodies in Kalyan" },
        { name: 'twitter:description', content: "Live ghazals, shayari and acoustic melodies by candlelight in Kalyan, Maharashtra." },
        { name: 'twitter:image', content: site + 'og-image.jpg' }
      ],
      link: [
        { rel: 'canonical', href: site },
        { rel: 'icon', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%AA%94%3C/text%3E%3C/svg%3E" },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Marcellus&family=Tiro+Devanagari+Hindi:ital@0;1&family=Noto+Nastaliq+Urdu:wght@400;600&family=Jost:wght@200;300;400&display=swap' }
      ],
      script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(ld) }]
    }
  }
})
