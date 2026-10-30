<template>
<section id="guestbook">
  <div class="wrap">
    <div class="sec-head">
      <div class="rule"><b>❖</b></div>
      <p class="eyebrow-s">यादें • MEMORIES LEFT BEHIND • सही और कलम</p><h2 data-split>The Digital Guestbook</h2>
      <p>Have a thought, a sufi couplet, or a sweet memory from your time in our circle? Write it down and pin it on our candle-lit board.</p>
    </div>
    <div class="guest">
      <div class="form">
        <div class="field"><label for="gn">Your Name *</label><input id="gn" type="text" autocomplete="name"></div>
        <div class="field"><label for="gl">Your Location</label><input id="gl" type="text" placeholder="Kalyan West"></div>
        <div class="field"><label for="gt">Your Thought or Couplet (Sher) *</label><textarea id="gt"></textarea></div>
        <button class="btn solid" id="pin" style="width:100%;justify-content:center">Pin to Board</button>
        <p class="note" id="pinNote">Pinned notes stay on this device.</p>
      </div>
      <div>
        <p class="eyebrow-s">रंग-ए-महफ़िल • THE PINNED MEMORIES • आठवणींचे पान</p>
        <h3 style="font-family:var(--deva);font-weight:400;color:var(--gold-lit);font-size:1.6rem;margin:0 0 20px">The Candle-Lit Board</h3>
        <div class="quotes" id="board" style="grid-template-columns:1fr">
          <blockquote>I didn't attend a show. I experienced a feeling that stayed with me for weeks. In a crowded city, it felt like a warm embrace.<cite>Rahul Deshmukh<small>KALYAN WEST</small></cite></blockquote>
          <blockquote>Finding a place where strangers sit on carpets together, share deep emotions, and cry to soulful ghazals is purely magical. Pure sufi vibration.<cite>Priyanka Joshi<small>DOMBIVLI</small></cite></blockquote>
          <blockquote>The acoustic sounds, the candlelight, the complete silence of the room when the shayar reads... it is a premium spiritual experience.<cite>Adnan Sheikh<small>KHADAKPADA</small></cite></blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
