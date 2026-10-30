<template>
  <section id="nishist">
    <div class="wrap">
      <SectionHead eyebrow="आमंत्रण • COME SIT WITH US • स्नेहबंध" title="Request an Invitation" text="Whether you want to join an evening, perform as an artist, host us at a venue, or just say hello over tea." />
      <div class="nishist">
        <div class="detail">
          <div><b>PHONE</b><span><a :href="site.phoneHref" style="text-decoration:none">{{ site.phone }}</a></span></div>
          <div><b>EMAIL</b><span><a :href="`mailto:${site.email}`" style="text-decoration:none">{{ site.email }}</a></span></div>
          <div><b>LOCATION</b><span>{{ site.location }}</span></div>
        </div>
        <div id="form" class="form">
          <form v-if="!sent" @submit.prevent="send">
            <div class="field"><label for="nm">Your Name</label><input id="nm" v-model="form.name" type="text" autocomplete="name"></div>
            <div class="two">
              <div class="field"><label for="ph">Phone Number</label><input id="ph" v-model="form.phone" type="tel" placeholder="+91" autocomplete="tel"></div>
              <div class="field"><label for="em">Email Address</label><input id="em" v-model="form.email" type="email" autocomplete="email"></div>
            </div>
            <div class="field"><label for="msg">What is on your heart? (Message)</label><textarea id="msg" v-model="form.message" /></div>
            <button class="btn solid" type="submit" style="width:100%;justify-content:center">Send Invitation Inquiry</button>
            <p class="note" :style="error ? 'color:var(--gold-lit)' : ''">{{ error || 'This opens WhatsApp with your message ready to send.' }}</p>
          </form>
          <div v-else class="done" style="display:block">
            <h3>धन्यवाद</h3>
            <p>WhatsApp has opened with your message. We'll reply soon.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { site } from '~/data/site'

const form = reactive({ name: '', phone: '', email: '', message: '' })
const sent = ref(false)
const error = ref('')

function send() {
  if (!form.name.trim() || !form.message.trim()) {
    error.value = 'Add your name and a short message so we know how to help.'
    return
  }
  const text = `Hi Mehfil-E-Baithak, I am ${form.name.trim()}`
    + (form.phone.trim() ? ` (${form.phone.trim()})` : '')
    + (form.email.trim() ? `, ${form.email.trim()}` : '')
    + `.\n${form.message.trim()}`
  window.open(whatsappLink(text), '_blank', 'noopener')
  error.value = ''
  sent.value = true
}
</script>
