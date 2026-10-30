// Scroll, hero and form behaviour ported unchanged from the static page.
// The page script expects `gsap` and `ScrollTrigger` as globals, so expose the npm builds first.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initMehfil() {
  const w = window as any
  w.gsap = gsap;
  w.ScrollTrigger = ScrollTrigger;
  (function(){
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!window.gsap){ document.getElementById('nav').style.transform='none'; return; }
    gsap.registerPlugin(ScrollTrigger);

    /* ---------- split into syllable clusters (Devanagari safe) ---------- */
    function isMark(ch){
      var x = ch.charCodeAt(0);
      return (x >= 0x0900 && x <= 0x0903) ||   // anusvara, chandrabindu, visarga
             (x >= 0x093A && x <= 0x094F) ||   // matras + virama + nukta
             (x >= 0x0951 && x <= 0x0957) ||
             (x >= 0x0962 && x <= 0x0963) ||
             (x >= 0x0300 && x <= 0x036F) ||   // generic combining marks
             x === 0x200C || x === 0x200D ||   // ZWNJ / ZWJ
             x === 0xFE0E || x === 0xFE0F;
    }
    function clusterize(str){
      var out = [], i = 0, L = str.length;
      while(i < L){
        var c = str[i++];
        if(/[\uD800-\uDBFF]/.test(c) && i < L) c += str[i++];   // surrogate pair
        while(i < L && isMark(str[i])){
          var m = str[i++];
          c += m;
          if(m === '\u094D' && i < L) c += str[i++];            // virama binds the next consonant
        }
        out.push(c);
      }
      return out;
    }
    function split(el){
      var parts = clusterize(el.textContent), out = '';
      for(var i = 0; i < parts.length; i++){
        out += parts[i] === ' '
          ? '<span class="ch sp">&nbsp;</span>'
          : '<span class="ch">' + parts[i] + '</span>';
      }
      el.innerHTML = out;
      return el.querySelectorAll('.ch');
    }

    /* ---------- drifting music icons ---------- */
    var icons = [
      // single note
      '<svg width="100%" height="100%" viewBox="0 0 24 24"><circle cx="8" cy="18" r="3.4"/><path d="M11.4 18V4.5l6.5 2"/></svg>',
      // beamed pair
      '<svg width="100%" height="100%" viewBox="0 0 24 24"><circle cx="6" cy="17.5" r="2.8"/><circle cx="16.5" cy="15.5" r="2.8"/><path d="M8.8 17.5V6l10.5-2.2v11.7M8.8 9.2l10.5-2.2"/></svg>',
      // tabla
      '<svg width="100%" height="100%" viewBox="0 0 24 24"><ellipse cx="12" cy="7.5" rx="6.2" ry="2.5"/><path d="M5.8 7.5v7.8c0 2 2.8 3.4 6.2 3.4s6.2-1.4 6.2-3.4V7.5"/><path d="M8.5 20h7"/></svg>',
      // tanpura / sitar
      '<svg width="100%" height="100%" viewBox="0 0 24 24"><circle cx="7.5" cy="16.5" r="4.4"/><path d="M10.6 13.4L19 5M16.4 3.2l4.4 4.4"/></svg>',
      // harmonium
      '<svg width="100%" height="100%" viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="9" rx="1.4"/><path d="M6 9V6h12v3M7.5 12v3M10.5 12v3M13.5 12v3M16.5 12v3"/></svg>',
      // rhythm curve (alaap)
      '<svg width="100%" height="100%" viewBox="0 0 24 24"><path d="M3 16c4 0 4-9 8-9s4 9 8 9"/><circle cx="3" cy="16" r="1.6"/><circle cx="19" cy="16" r="1.6"/></svg>'
    ];
    var sargam = ['सा','रे','ग','म','प','ध','नि','ॐ'];

    var stage = document.getElementById('notes');
    if(!reduce && stage){
      var COUNT = window.innerWidth < 700 ? 14 : 24;
      for(var e=0; e<COUNT; e++){
        (function(){
          var el = document.createElement('div');
          el.className = 'mnote';
          var size = gsap.utils.random(13, 30);
          el.style.width = size + 'px';
          el.style.height = size + 'px';
          el.style.fontSize = size + 'px';
          if(Math.random() < 0.34){
            el.innerHTML = '<span class="sa">' + sargam[Math.floor(Math.random()*sargam.length)] + '</span>';
          }else{
            el.innerHTML = icons[Math.floor(Math.random()*icons.length)];
          }
          stage.appendChild(el);

          var peak = gsap.utils.random(.16, .5);
          var span = window.innerHeight + 260;

          function place(){
            el.style.left = gsap.utils.random(0, window.innerWidth - size) + 'px';
            el.style.top  = (window.innerHeight + gsap.utils.random(20, 240)) + 'px';
          }
          place();

          var rise = gsap.to(el, {
            y: -span,
            duration: gsap.utils.random(17, 34),
            delay: gsap.utils.random(0, 16),
            repeat: -1,
            ease: 'none',
            onUpdate: function(){ el.style.opacity = peak * Math.sin(Math.PI * rise.progress()); },
            onRepeat: place
          });

          gsap.to(el, {x: gsap.utils.random(-70, 70), duration: gsap.utils.random(4, 9),
            repeat: -1, yoyo: true, ease: 'sine.inOut'});
          gsap.to(el, {rotation: gsap.utils.random(-28, 28), duration: gsap.utils.random(5, 11),
            repeat: -1, yoyo: true, ease: 'sine.inOut'});
        })();
      }
    }

    /* ---------- hero opening sequence ---------- */
    var chars = split(document.getElementById('title'));
    var paths = document.querySelectorAll('#mehrab path, #mehrab circle');
    paths.forEach(function(p){
      var len = (p.getTotalLength ? p.getTotalLength() : 600);
      gsap.set(p,{strokeDasharray:len,strokeDashoffset:len,opacity:.9});
    });

    /* ---------- build the harmonium keyboard ---------- */
    var NS = 'http://www.w3.org/2000/svg';
    var keysG = document.getElementById('keys');
    // keyboard sits on the angled top surface: front edge y=284 (x 130..492), back edge y=252 (x 162..524)
    var KN = 17, kx0 = 140, kx1 = 482, kw = (kx1 - kx0) / KN;
    var blackAfter = [0,1,3,4,5,7,8,10,11,12,14];
    for(var k=0;k<KN;k++){
      var x = kx0 + k*kw;
      var p = document.createElementNS(NS,'path');
      p.setAttribute('class','key');
      p.setAttribute('d','M'+x+' 284 L'+(x+kw-1.5)+' 284 L'+(x+kw-1.5+32)+' 252 L'+(x+32)+' 252 Z');
      keysG.appendChild(p);
    }
    blackAfter.forEach(function(k){
      var x = kx0 + (k+1)*kw - kw*0.3;
      var b = document.createElementNS(NS,'path');
      b.setAttribute('class','key blk');
      b.setAttribute('d','M'+x+' 268 L'+(x+kw*0.6)+' 268 L'+(x+kw*0.6+20)+' 248 L'+(x+20)+' 248 Z');
      keysG.appendChild(b);
    });

    /* ---------- hero opening: the room, then the instruments ---------- */
    var tl = gsap.timeline({defaults:{ease:'power3.out'}});
    tl.to(paths,{strokeDashoffset:0,duration:2.1,stagger:.09,ease:'power2.inOut'})
      .from('.eyebrow',{opacity:0,y:14,duration:.9},'-=1.5')
      .from(chars,{opacity:0,yPercent:120,rotateX:-70,filter:'blur(12px)',duration:1.15,stagger:.055},'-=1.1')
      .fromTo('#title',{backgroundPositionX:'190%'},{backgroundPositionX:'-60%',duration:2.4,ease:'power2.inOut'},'-=.7')
      .from('.roman',{opacity:0,letterSpacing:'1.1em',duration:1.2},'-=1.9')
      .from('#urdu',{opacity:0,y:18,duration:1.1},'-=1.1')
      .from('.hero-actions .btn',{opacity:0,y:20,duration:.8,stagger:.12},'-=.8')
      .to('#nav',{y:0,duration:.8},'-=.6')
      .from('#floor',{opacity:0,scaleX:.82,transformOrigin:'50% 100%',duration:1.1},'-=1.1')
      .from('#harmonium',{opacity:0,y:52,duration:1,ease:'power2.out'},'-=.75')
      .from('#tabla',{opacity:0,y:52,duration:1,ease:'power2.out'},'-=.85')
      .from('#lamp',{opacity:0,y:24,duration:.8},'-=.7')
      .from('#flame',{scaleY:0,transformOrigin:'50% 100%',duration:.7,ease:'back.out(2)'},'-=.4')
      .fromTo('#lampGlow',{attr:{r:8},opacity:0},{attr:{r:62},opacity:.13,duration:1.2},'-=.6');

    if(!reduce){
      gsap.to('#mehrab',{y:-70,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.6}});
      gsap.to('#scene',{y:40,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.6}});
      gsap.to('#title',{backgroundPositionX:'-260%',repeat:-1,duration:7,ease:'none',delay:3});

      /* lamp keeps burning */
      gsap.to('#flame',{scaleX:1.2,scaleY:.9,skewX:6,transformOrigin:'50% 100%',repeat:-1,yoyo:true,duration:.5,ease:'sine.inOut'});
      gsap.to('#lampGlow',{opacity:.22,attr:{r:70},repeat:-1,yoyo:true,duration:2.3,ease:'sine.inOut'});

      /* bellows breathing */
      gsap.to('#bellows',{scaleY:.9,scaleX:.985,transformOrigin:'50% 100%',repeat:-1,yoyo:true,duration:1.9,ease:'sine.inOut'});

      /* a hand on the keys */
      var allKeys = gsap.utils.toArray('#keys .key');
      setInterval(function(){
        var n = 1 + Math.floor(Math.random()*3);
        for(var i=0;i<n;i++){
          var key = allKeys[Math.floor(Math.random()*allKeys.length)];
          gsap.fromTo(key,{y:0},{y:4,duration:.16,yoyo:true,repeat:1,ease:'power2.inOut',delay:i*0.07});
        }
      }, 1200);

      /* tabla: a teentaal-shaped pattern, dha dhin dhin dha */
      function strike(head, rip, size, force){
        gsap.fromTo(head,{scaleY:1,scaleX:1},
          {scaleY:1-0.12*force,scaleX:1+0.02*force,transformOrigin:'50% 50%',duration:.07,yoyo:true,repeat:1,ease:'power2.out'});
        gsap.fromTo(rip,{attr:{r:12},opacity:.5*force},{attr:{r:size},opacity:0,duration:.95,ease:'power2.out'});
      }
      var beat = 0.42;
      var taal = [[0,'d',1],[1,'b',.8],[2,'d',.7],[3,'d',1],[4,'b',.9],[5,'d',.7],[6,'b',1],[7,'d',.8],
                  [8,'d',1],[9,'b',.7],[10,'d',.9],[11,'d',.6],[12,'b',1],[13,'d',.8],[14,'d',.7],[15,'b',.9]];
      var rhythm = gsap.timeline({repeat:-1});
      taal.forEach(function(s){
        rhythm.call(function(){
          if(s[1]==='d') strike('#dayanHead','#rip1',58,s[2]);
          else strike('#bayanHead','#rip2',74,s[2]);
        }, null, s[0]*beat);
      });
      rhythm.to({}, {duration: 16*beat}, 0);
    }

    /* ---------- section headings ---------- */
    document.querySelectorAll('[data-split]').forEach(function(h){
      var cs = split(h);
      gsap.from(cs,{
        opacity:0,yPercent:80,filter:'blur(8px)',duration:.9,stagger:.03,ease:'power3.out',
        scrollTrigger:{trigger:h,start:'top 82%'}
      });
    });

    /* ---------- intro + diya ---------- */
    gsap.from('#baithak .copy > *',{opacity:0,y:26,duration:.9,stagger:.12,scrollTrigger:{trigger:'#baithak',start:'top 72%'}});
    gsap.from('#diya',{opacity:0,scale:.86,duration:1.3,ease:'power2.out',scrollTrigger:{trigger:'#baithak',start:'top 72%'}});
    if(!reduce){
      gsap.to('#diyaFlame',{scaleX:1.06,scaleY:.96,svgOrigin:'150 193',repeat:-1,yoyo:true,duration:2.8,ease:'sine.inOut'});
      gsap.to('#diyaFlame',{rotation:2.2,svgOrigin:'150 193',repeat:-1,yoyo:true,duration:4.6,ease:'sine.inOut'});
      gsap.to('#diyaFlameIn',{scaleY:.93,scaleX:1.04,svgOrigin:'150 189',repeat:-1,yoyo:true,duration:2.1,ease:'sine.inOut'});
      gsap.to('#diyaGlow',{opacity:.22,attr:{r:88},repeat:-1,yoyo:true,duration:4.5,ease:'sine.inOut'});
      gsap.to('#diya .halo',{rotation:360,svgOrigin:'150 172',repeat:-1,duration:120,ease:'none'});
    }

    /* counters */
    document.querySelectorAll('[data-count]').forEach(function(n){
      var end = +n.getAttribute('data-count'), o = {v:0};
      gsap.to(o,{v:end,duration:1.8,ease:'power2.out',
        scrollTrigger:{trigger:n,start:'top 88%'},
        onUpdate:function(){ n.textContent = Math.round(o.v) + (n.getAttribute('data-suffix')||''); }});
    });

    /* ---------- arches: lift out of the floor ---------- */
    gsap.from('.arch',{
      opacity:0,yPercent:18,clipPath:'inset(100% 0 0 0)',duration:1.05,stagger:.1,ease:'power3.out',
      scrollTrigger:{trigger:'.arches',start:'top 78%'}
    });

    /* ---------- couplet rotator ---------- */
    var couplets = [
      ['कुछ महफ़िलें सिर्फ़ सजती नहीं<br>दिलों में बस जाती हैं...','SOME EVENINGS DO NOT JUST HAPPEN... THEY RESIDE IN HEARTS'],
      ['सिर्फ़ आवाज़ नहीं<br>एक एहसास है महफ़िल...','NOT JUST A VOICE, THE GATHERING IS AN EMOTION'],
      ['वो बात जो लफ़्ज़ों में बयाँ ना हो सके<br>संगीत कह देता है।','WHAT WORDS FAIL TO EXPLAIN, MUSIC WHISPERS'],
      ['जहां अजनबी हमसफ़र बनें<br>और सुर यादें बन जाएं।','WHERE STRANGERS BECOME FAMILY, AND MUSIC BECOMES A MEMORY']
    ];
    var idx = 0, line = document.getElementById('cLine'), by = document.getElementById('cBy');
    function rotate(){
      idx = (idx+1) % couplets.length;
      gsap.timeline()
        .to([line,by],{opacity:0,y:-16,filter:'blur(7px)',duration:.7,ease:'power2.in'})
        .add(function(){ line.innerHTML = couplets[idx][0]; by.textContent = couplets[idx][1]; })
        .fromTo([line,by],{opacity:0,y:16,filter:'blur(7px)'},{opacity:1,y:0,filter:'blur(0px)',duration:.9,stagger:.08,ease:'power2.out'});
    }
    if(!reduce) setInterval(rotate, 6500);

    /* marquee */
    var words = ['ग़ज़ल','WAH','शायरी','SUR','बांसुरी','TABLA','हारमोनियम','WAH','सूफ़ी','SAMA'];
    var mq = document.getElementById('marquee'), strip = '';
    words.concat(words).concat(words).forEach(function(w){ strip += '<span>'+w+'</span><span>❖</span>'; });
    mq.innerHTML = strip;
    if(!reduce) gsap.to(mq,{xPercent:-33.33,repeat:-1,duration:34,ease:'none'});

    /* ---------- artists ---------- */
  

    /* ---------- timeline thread ---------- */
    document.querySelectorAll('.thread').forEach(function(t){
      gsap.to(t.querySelector('.lit'),{scaleY:1,ease:'none',scrollTrigger:{trigger:t,start:'top 70%',end:'bottom 75%',scrub:.5}});
      gsap.from(t.querySelectorAll('.step'),{opacity:0,x:-22,duration:.75,stagger:.14,ease:'power2.out',scrollTrigger:{trigger:t,start:'top 72%'}});
    });
    gsap.utils.toArray('.voices,.team,.gallery,.perks,.stats3,.quotes,.event,.diary,.partners').forEach(function(g){
      gsap.from(g.children,{opacity:0,y:30,duration:.8,stagger:.08,ease:'power3.out',scrollTrigger:{trigger:g,start:'top 85%'}});
    });
    gsap.from('.aadaab div',{opacity:0,duration:.8,stagger:.1,scrollTrigger:{trigger:'.aadaab',start:'top 80%'}});
  

    /* ---------- contact: opens WhatsApp with the message ---------- */
    var send = document.getElementById('send'), note = document.getElementById('note');
    send.addEventListener('click', function(){
      var nm = document.getElementById('nm'), ph = document.getElementById('ph'), em = document.getElementById('em'), msg = document.getElementById('msg');
      if(!nm.value.trim() || !msg.value.trim()){
        note.textContent = 'Add your name and a short message so we know how to help.';
        note.style.color = 'var(--gold-lit)';
        gsap.fromTo('#form',{x:-7},{x:0,duration:.5,ease:'elastic.out(1,.35)'});
        return;
      }
      var text = 'Hi Mehfil-E-Baithak, I am ' + nm.value.trim() + (ph.value.trim() ? ' (' + ph.value.trim() + ')' : '') + (em.value.trim() ? ', ' + em.value.trim() : '') + '.\n' + msg.value.trim();
      window.open('https://wa.me/919326869492?text=' + encodeURIComponent(text), '_blank', 'noopener');
      gsap.timeline()
        .to('#formBody',{opacity:0,y:-14,duration:.45,ease:'power2.in'})
        .set('#formBody',{display:'none'})
        .set('#done',{display:'block'})
        .fromTo('#done',{opacity:0,y:16},{opacity:1,y:0,duration:.7,ease:'power3.out'});
    });

    /* ---------- gallery filter ---------- */
    var shots = document.querySelectorAll('#galleryGrid .shot');
    document.querySelectorAll('#filters button').forEach(function(btn){
      btn.addEventListener('click', function(){
        document.querySelectorAll('#filters button').forEach(function(x){ x.classList.remove('on'); });
        btn.classList.add('on');
        var f = btn.getAttribute('data-f');
        shots.forEach(function(sh){ sh.classList.toggle('hide', f !== 'all' && sh.getAttribute('data-cat') !== f); });
        ScrollTrigger.refresh();
      });
    });

    /* ---------- guestbook (kept on this device) ---------- */
    var board = document.getElementById('board'), pinNote = document.getElementById('pinNote');
    function esc(t){ var d = document.createElement('div'); d.textContent = t; return d.innerHTML; }
    function addNote(n, l, t, first){
      var b = document.createElement('blockquote');
      b.innerHTML = esc(t) + '<cite>' + esc(n) + (l ? '<small>' + esc(l.toUpperCase()) + '</small>' : '') + '</cite>';
      first ? board.insertBefore(b, board.firstChild) : board.appendChild(b);
    }
    try{ JSON.parse(localStorage.getItem('baithak-board') || '[]').forEach(function(x){ addNote(x.n, x.l, x.t, true); }); }catch(err){}
    document.getElementById('pin').addEventListener('click', function(){
      var n = document.getElementById('gn'), l = document.getElementById('gl'), t = document.getElementById('gt');
      if(!n.value.trim() || !t.value.trim()){ pinNote.textContent = 'Please add your name and a thought.'; return; }
      addNote(n.value.trim(), l.value.trim(), t.value.trim(), true);
      try{
        var all = JSON.parse(localStorage.getItem('baithak-board') || '[]');
        all.unshift({n:n.value.trim(), l:l.value.trim(), t:t.value.trim()});
        localStorage.setItem('baithak-board', JSON.stringify(all));
      }catch(err){}
      n.value = l.value = t.value = '';
      pinNote.textContent = 'Pinned. Thank you for the memory.';
    });

    /* ---------- tanpura drone (Web Audio, nothing loaded) ---------- */
    var ctx, master, loop, playing = false;
    var sur = document.getElementById('sur'), label = document.getElementById('surLabel');
    var cycle = [196.00, 261.63, 261.63, 130.81]; // Pa Sa Sa Sa(low)
    var step = 0;

    function pluck(freq, at){
      for(var h=1; h<=7; h++){
        var osc = ctx.createOscillator(), g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq * h * (1 + (h-1)*0.0012);
        var amp = 0.10 / (h*h*0.55 + 1);
        g.gain.setValueAtTime(0.0001, at);
        g.gain.linearRampToValueAtTime(amp, at + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, at + 3.6/(1 + (h-1)*0.34));
        osc.connect(g); g.connect(master);
        osc.start(at); osc.stop(at + 4);
      }
    }

    function startDrone(){
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if(ctx.state === 'suspended') ctx.resume();
      master = ctx.createGain();
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.32, ctx.currentTime + 2.5);
      var lp = ctx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value = 2100;
      var dl = ctx.createDelay(); dl.delayTime.value = 0.28;
      var fb = ctx.createGain(); fb.gain.value = 0.22;
      master.connect(lp); lp.connect(ctx.destination);
      lp.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(ctx.destination);
      step = 0;
      pluck(cycle[0], ctx.currentTime + 0.1);
      loop = setInterval(function(){
        step = (step + 1) % cycle.length;
        pluck(cycle[step], ctx.currentTime + 0.02);
      }, 1450);
    }

    function stopDrone(){
      clearInterval(loop);
      if(master){ master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
        master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2); }
    }

    sur.addEventListener('click', function(){
      playing = !playing;
      sur.classList.toggle('on', playing);
      sur.setAttribute('aria-pressed', playing ? 'true' : 'false');
      label.textContent = playing ? 'सुर चालू' : 'तानपुरा';
      try{ playing ? startDrone() : stopDrone(); }
      catch(err){ label.textContent = 'सुर बंद'; playing = false; sur.classList.remove('on'); }
    });

    window.addEventListener('resize', function(){ ScrollTrigger.refresh(); });

    /* ---------- footer credit ---------- */
    gsap.from('footer .craft',{opacity:0,y:14,duration:.9,scrollTrigger:{trigger:'footer',start:'top 92%'}});
    if(!reduce){
      gsap.to('#heart',{scale:1.25,duration:.34,repeat:-1,yoyo:true,repeatDelay:.85,ease:'power2.out',transformOrigin:'50% 50%'});
    }
  })();
}
