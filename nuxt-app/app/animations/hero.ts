// @ts-nocheck -- ported unchanged from the static page's inline script
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { splitText } from '~/utils/splitText'

export function initHero(reduce: boolean) {
  var keyTimer
  /* ---------- hero opening sequence ---------- */
  var chars = splitText(document.getElementById('title'));
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
    var keyTimer; var allKeys = gsap.utils.toArray('#keys .key');
    keyTimer = setInterval(function(){
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

  return () => clearInterval(keyTimer)
}
