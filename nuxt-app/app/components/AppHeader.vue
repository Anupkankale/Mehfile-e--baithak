<template>
  <header id="nav" class="nav">
    <div class="wrap">
      <a class="brand" href="#top">महफ़िल-ए-बैठक<small>MEHFIL-E-BAITHAK</small></a>
      <ul>
        <li v-for="l in navLinks" :key="l.href"><a class="lnk" :href="l.href">{{ l.label }}</a></li>
      </ul>
      <a class="btn" href="#upcoming">Reserve Seat</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navLinks } from '~/data/site'
</script>
