<template>
  <footer>
    <div class="wrap">
      <img class="logo" :src="asset('images/logo.png')" alt="Mehfil-E-Baithak logo">
      <div class="om">महफ़िल-ए-बैठक</div>
      <p style="max-width:56ch">An independent cultural community based in Kalyan, Maharashtra, dedicated to live soulful ghazals, shayari, organic acoustic instruments, and genuine human sittings.</p>
      <p style="max-width:56ch;font-family:var(--deva);color:var(--gold-lit)">दिवे मंद झाले, शेवटचा सूर विरला, संवाद अजून चालू आहेत. पुन्हा भेटू पुढील मैफिलीत...</p>
      <div class="footgrid">
        <div>
          <h5>QUICK LINKS</h5>
          <a v-for="l in navLinks" :key="l.href" :href="l.href">{{ l.label }}</a>
        </div>
        <div>
          <h5>CONNECT</h5>
          <a :href="whatsappLink('Hi Mehfil-E-Baithak')" target="_blank" rel="noopener">WhatsApp</a>
          <a :href="`mailto:${site.email}`">Email</a>
          <a :href="site.phoneHref">{{ site.phone }}</a>
        </div>
      </div>
      <p style="opacity:.6">© {{ new Date().getFullYear() }} Mehfil-E-Baithak Kalyan. All Rights Reserved.</p>
      <p class="craft">Web craft by <span id="heart" class="heart">💗</span> <a href="https://anupkankale.com" target="_blank" rel="noopener">Anup Kankale</a></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navLinks, site } from '~/data/site'
</script>
