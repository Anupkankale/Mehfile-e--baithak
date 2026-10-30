<template>
<section class="hero">
  <svg class="mehrab" id="mehrab" viewBox="0 0 560 640" aria-hidden="true">
    <path d="M60 620 V300 C60 160 155 60 280 60 C405 60 500 160 500 300 V620"/>
    <path d="M92 620 V302 C92 178 176 92 280 92 C384 92 468 178 468 302 V620"/>
    <path d="M280 60 L280 22"/>
    <circle cx="280" cy="14" r="8"/>
    <path d="M150 300 C150 228 208 172 280 172 C352 172 410 228 410 300"/>
    <path d="M196 620 V330 C196 284 233 248 280 248 C327 248 364 284 364 330 V620"/>
    <path d="M60 620 H500"/>
    <path d="M118 372 h-28 M470 372 h-28 M118 452 h-28 M470 452 h-28"/>
  </svg>

  <div class="wrap">
    <p class="eyebrow">क्षण सुरांचे, नाते मनाचे · Kalyan</p>
    <h1 class="title" id="title">महफ़िल-ए-बैठक</h1>
    <p class="roman">GHAZAL · SHAYARI · ACOUSTIC</p>
    <p class="urdu" id="urdu">"हम अजनबी थे, सुरों ने पहचान कराई..."</p>
    <div class="hero-actions">
      <a class="btn solid" href="#baithak">प्रवेश करा · Enter Mehfil</a>
      <a class="btn" href="#upcoming">Upcoming sittings</a>
    </div>
  </div>

  <div class="stage">
    <svg class="scene" id="scene" viewBox="0 0 1200 470" preserveAspectRatio="xMidYMax meet" aria-label="A harmonium, an oil lamp and a pair of tabla on the baithak floor">

      <!-- floor -->
      <g id="floor">
        <path class="red" d="M150 398 H1060 L1140 452 H70 Z" opacity=".5"/>
        <path class="ln" d="M150 398 H1060 M70 452 H1140 M150 398 L70 452 M1060 398 L1140 452"/>
        <path class="hair" d="M120 425 H1090 M188 398 L122 452 M1022 398 L1088 452"/>
      </g>

      <!-- harmonium -->
      <g id="harmonium">
        <g id="bellows">
          <path class="red" d="M206 252 H498 V168 H238 Z"/>
          <path class="ln" d="M206 252 H498 V168 H238 Z"/>
          <path class="hair" d="M246 252 V170 M286 252 V172 M326 252 V174 M366 252 V176 M406 252 V178 M446 252 V180"/>
          <path class="ln" d="M330 168 v-16 h44 v16"/>
        </g>
        <path class="dark" d="M130 284 H492 V398 H130 Z"/>
        <path class="ln" d="M130 284 H492 V398 H130 Z"/>
        <path class="red" d="M130 284 L492 284 L524 252 L162 252 Z"/>
        <path class="ln" d="M130 284 L492 284 L524 252 L162 252 Z"/>
        <g id="keys"></g>
        <!-- front grille: three small arches -->
        <g class="hair">
          <path d="M156 384 V332 C156 314 168 302 184 302 C200 302 212 314 212 332 V384"/>
          <path d="M222 384 V332 C222 314 234 302 250 302 C266 302 278 314 278 332 V384"/>
          <path d="M288 384 V332 C288 314 300 302 316 302 C332 302 344 314 344 332 V384"/>
        </g>
        <path class="ln" d="M146 384 H354 M146 296 H354"/>
        <!-- stop knobs -->
        <g>
          <circle class="ln" cx="392" cy="322" r="9"/><circle class="ln" cx="428" cy="322" r="9"/>
          <circle class="ln" cx="464" cy="322" r="9"/><circle class="ln" cx="392" cy="362" r="9"/>
          <circle class="ln" cx="428" cy="362" r="9"/><circle class="ln" cx="464" cy="362" r="9"/>
        </g>
      </g>

      <!-- diya between the instruments -->
      <g id="lamp">
        <circle id="lampGlow" cx="614" cy="352" r="62" fill="var(--gold)" opacity=".13"/>
        <g id="flame">
          <ellipse cx="614" cy="344" rx="11" ry="26" fill="var(--ember)" opacity=".7"/>
          <ellipse cx="614" cy="350" rx="5.5" ry="15" fill="var(--gold-lit)"/>
        </g>
        <path class="red" d="M580 370 C580 388 594 398 614 398 C634 398 648 388 648 370 Z"/>
        <path class="ln" d="M580 370 C580 388 594 398 614 398 C634 398 648 388 648 370 Z M574 370 H654 M614 370 v-8"/>
      </g>

      <!-- tabla: dayan (wood) + bayan (metal) -->
      <g id="tabla">
        <!-- dayan -->
        <path class="dark" d="M764 272 C758 320 772 362 782 398 L858 398 C868 362 882 320 876 272 Z"/>
        <path class="ln" d="M764 272 C758 320 772 362 782 398 M876 272 C882 320 868 362 858 398"/>
        <g class="hair" id="lace1">
          <path d="M770 286 L784 392 M790 282 L798 394 M812 280 L812 396 M834 280 L832 396 M856 282 L848 394 M872 286 L860 392"/>
        </g>
        <g class="ln">
          <rect x="776" y="326" width="9" height="24" rx="2"/><rect x="799" y="330" width="9" height="24" rx="2"/>
          <rect x="824" y="332" width="9" height="24" rx="2"/><rect x="849" y="330" width="9" height="24" rx="2"/>
        </g>
        <ellipse class="ln" cx="820" cy="398" rx="44" ry="11"/>
        <g id="dayanHead">
          <ellipse class="skin" cx="820" cy="272" rx="58" ry="17"/>
          <ellipse class="ln" cx="820" cy="272" rx="58" ry="17"/>
          <ellipse class="hair" cx="820" cy="272" rx="46" ry="13"/>
          <ellipse class="syahi" cx="820" cy="272" rx="21" ry="6.5"/>
        </g>
        <circle id="rip1" class="ln" cx="820" cy="272" r="10" opacity="0"/>

        <!-- bayan -->
        <path class="dark" d="M922 296 C912 356 942 400 992 400 C1042 400 1072 356 1062 296 Z"/>
        <path class="ln" d="M922 296 C912 356 942 400 992 400 C1042 400 1072 356 1062 296"/>
        <g class="hair">
          <path d="M932 310 C930 350 948 382 976 392 M956 302 C950 348 962 386 986 396 M992 300 V398 M1028 302 C1034 348 1022 386 998 396 M1052 310 C1054 350 1036 382 1008 392"/>
        </g>
        <path class="hair" d="M926 336 C960 352 1024 352 1058 336"/>
        <g id="bayanHead">
          <ellipse class="skin" cx="992" cy="296" rx="72" ry="21"/>
          <ellipse class="ln" cx="992" cy="296" rx="72" ry="21"/>
          <ellipse class="hair" cx="992" cy="296" rx="58" ry="16"/>
          <ellipse class="syahi" cx="976" cy="294" rx="25" ry="8"/>
        </g>
        <circle id="rip2" class="ln" cx="992" cy="296" r="10" opacity="0"/>
      </g>
    </svg>
  </div>
</section>
</template>
