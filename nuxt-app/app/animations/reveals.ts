// @ts-nocheck -- ported unchanged from the static page's inline script
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { splitText } from '~/utils/splitText'

export function initReveals(reduce: boolean) {
  /* ---------- section headings ---------- */
  document.querySelectorAll('[data-split]').forEach(function(h){
    var cs = splitText(h);
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



  /* ---------- footer credit ---------- */
  gsap.from('footer .craft',{opacity:0,y:14,duration:.9,scrollTrigger:{trigger:'footer',start:'top 92%'}});
  if(!reduce){
    gsap.to('#heart',{scale:1.25,duration:.34,repeat:-1,yoyo:true,repeatDelay:.85,ease:'power2.out',transformOrigin:'50% 50%'});
  }
}
