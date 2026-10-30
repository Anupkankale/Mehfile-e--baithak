<template>
<section id="nishist">
  <div class="wrap">
    <div class="sec-head">
      <div class="rule"><b>❖</b></div>
      <p class="eyebrow-s">आमंत्रण • COME SIT WITH US • स्नेहबंध</p><h2 data-split>Request an Invitation</h2>
      <p>Whether you want to join an evening, perform as an artist, host us at a venue, or just say hello over tea.</p>
    </div>
    <div class="nishist">
      <div class="detail">
        <div><b>PHONE</b><span><a href="tel:+919326869492" style="text-decoration:none">+91 9326869492</a></span></div>
        <div><b>EMAIL</b><span><a href="mailto:mehfilebaithak@gmail.com" style="text-decoration:none">mehfilebaithak@gmail.com</a></span></div>
        <div><b>LOCATION</b><span>Kalyan, Maharashtra</span></div>
      </div>
      <div class="form" id="form">
        <div id="formBody">
          <div class="field"><label for="nm">Your Name</label><input id="nm" type="text" autocomplete="name"></div>
          <div class="two">
            <div class="field"><label for="ph">Phone Number</label><input id="ph" type="tel" placeholder="+91" autocomplete="tel"></div>
            <div class="field"><label for="em">Email Address</label><input id="em" type="email" autocomplete="email"></div>
          </div>
          <div class="field"><label for="msg">What is on your heart? (Message)</label><textarea id="msg"></textarea></div>
          <button class="btn solid" id="send" style="width:100%;justify-content:center">Send Invitation Inquiry</button>
          <p class="note" id="note">This opens WhatsApp with your message ready to send.</p>
        </div>
        <div class="done" id="done">
          <h3>धन्यवाद</h3>
          <p id="doneMsg">WhatsApp has opened with your message. We'll reply soon.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
