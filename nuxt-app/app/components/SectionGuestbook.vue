<template>
  <section id="guestbook">
    <div class="wrap">
      <SectionHead eyebrow="यादें • MEMORIES LEFT BEHIND • सही और कलम" title="The Digital Guestbook" text="Have a thought, a sufi couplet, or a sweet memory from your time in our circle? Write it down and pin it on our candle-lit board." />
      <div class="guest">
        <form class="form" @submit.prevent="submit">
          <div class="field"><label for="gn">Your Name *</label><input id="gn" v-model="name" type="text" autocomplete="name"></div>
          <div class="field"><label for="gl">Your Location</label><input id="gl" v-model="place" type="text" placeholder="Kalyan West"></div>
          <div class="field"><label for="gt">Your Thought or Couplet (Sher) *</label><textarea id="gt" v-model="text" /></div>
          <button class="btn solid" type="submit" style="width:100%;justify-content:center">Pin to Board</button>
          <p class="note">{{ note }}</p>
        </form>
        <div>
          <p class="eyebrow-s">रंग-ए-महफ़िल • THE PINNED MEMORIES • आठवणींचे पान</p>
          <h3 style="font-family:var(--deva);font-weight:400;color:var(--gold-lit);font-size:1.6rem;margin:0 0 20px">The Candle-Lit Board</h3>
          <TransitionGroup tag="div" name="pin" class="quotes" style="grid-template-columns:1fr">
            <blockquote v-for="m in memories" :key="m.name + m.text">
              {{ m.text }}
              <cite>{{ m.name }}<small v-if="m.place">{{ m.place.toUpperCase() }}</small></cite>
            </blockquote>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { memories, pin } = useGuestbook()
const name = ref('')
const place = ref('')
const text = ref('')
const note = ref('Pinned notes stay on this device.')

function submit() {
  if (!name.value.trim() || !text.value.trim()) {
    note.value = 'Please add your name and a thought.'
    return
  }
  pin({ name: name.value.trim(), place: place.value.trim(), text: text.value.trim() })
  name.value = place.value = text.value = ''
  note.value = 'Pinned. Thank you for the memory.'
}
</script>

<style scoped>
.pin-enter-active{transition:opacity .6s,transform .6s}
.pin-enter-from{opacity:0;transform:translateY(-14px)}
</style>
