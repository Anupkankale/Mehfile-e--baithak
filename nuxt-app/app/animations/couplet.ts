// @ts-nocheck -- ported unchanged from the static page's inline script
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { couplets } from '~/data/site'

export function initCouplet(reduce: boolean) {
  /* ---------- couplet rotator ---------- */
  var idx = 0, line = document.getElementById('cLine'), by = document.getElementById('cBy');
  function rotate(){
    idx = (idx+1) % couplets.length;
    gsap.timeline()
      .to([line,by],{opacity:0,y:-16,filter:'blur(7px)',duration:.7,ease:'power2.in'})
      .add(function(){ line.innerHTML = couplets[idx][0]; by.textContent = couplets[idx][1]; })
      .fromTo([line,by],{opacity:0,y:16,filter:'blur(7px)'},{opacity:1,y:0,filter:'blur(0px)',duration:.9,stagger:.08,ease:'power2.out'});
  }
  var timer;
  if(!reduce) timer = setInterval(rotate, 6500);

  /* marquee: the spans are rendered by the component, only the drift is animated */
  var mq = document.getElementById('marquee');
  if(mq && !reduce) gsap.to(mq,{xPercent:-33.33,repeat:-1,duration:34,ease:'none'});
  return () => clearInterval(timer);
}
