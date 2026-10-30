// @ts-nocheck -- ported unchanged from the static page's inline script
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initFloatingNotes(reduce: boolean) {
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

}
