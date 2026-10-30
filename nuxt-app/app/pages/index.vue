<template>
  <main id="top">
    <SectionHero />
    <SectionBaithak />
    <SectionMehfil />
    <SectionBand />
    <SectionFankaar />
    <SectionSafar />
    <SectionGallery />
    <SectionUpcoming />
    <SectionNumbers />
    <SectionPrivate />
    <SectionTeam />
    <SectionGuestbook />
    <SectionPartner />
    <SectionContact />
  </main>
</template>

<script setup lang="ts">
import { featuredEvent as ev, site } from '~/data/site'

useSiteAnimations()

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MusicEvent',
      'name': ev.name,
      'description': `${ev.tagline} Limited to 25 guests.`,
      'image': `${site.url}og-image.jpg`,
      'url': site.url,
      'startDate': ev.startISO,
      'endDate': ev.endISO,
      'eventStatus': 'https://schema.org/EventScheduled',
      'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
      'location': { '@type': 'Place', 'name': 'Page 2', 'address': { '@type': 'PostalAddress', 'addressLocality': 'Thakurli', 'addressRegion': 'Maharashtra', 'addressCountry': 'IN' } },
      'organizer': { '@type': 'Organization', 'name': 'Mehfil-E-Baithak', 'url': site.url, 'telephone': '+919326869492', 'email': site.email },
      'offers': { '@type': 'Offer', 'price': String(ev.price), 'priceCurrency': 'INR', 'availability': 'https://schema.org/LimitedAvailability', 'url': `${site.url}#upcoming` }
    })
  }]
})
</script>
