<template>
  <div>
    <div class="jaali" />
    <div id="notes" class="notes" />
    <div class="grain" />
    <AppHeader />
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
    <AppFooter />
    <MusicToggle />
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/main.css'

onMounted(async () => {
  const { initMehfil } = await import('~/composables/useMehfil')
  initMehfil()
})
</script>
