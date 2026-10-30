// Splits text into Devanagari-safe syllable clusters wrapped in <span class="ch"> for per-letter animation.
function isMark(ch: string) {
  const x = ch.charCodeAt(0);
  return (x >= 0x0900 && x <= 0x0903) ||   // anusvara, chandrabindu, visarga
         (x >= 0x093A && x <= 0x094F) ||   // matras + virama + nukta
         (x >= 0x0951 && x <= 0x0957) ||
         (x >= 0x0962 && x <= 0x0963) ||
         (x >= 0x0300 && x <= 0x036F) ||   // generic combining marks
         x === 0x200C || x === 0x200D ||   // ZWNJ / ZWJ
         x === 0xFE0E || x === 0xFE0F;
}
function clusterize(str: string) {
  const out: string[] = []; let i = 0; const L = str.length;
  while(i < L){
    let c = str[i++];
    if(/[\uD800-\uDBFF]/.test(c) && i < L) c += str[i++];   // surrogate pair
    while(i < L && isMark(str[i])){
      const m = str[i++];
      c += m;
      if(m === '\u094D' && i < L) c += str[i++];            // virama binds the next consonant
    }
    out.push(c);
  }
  return out;
}
export function splitText(el: Element): NodeListOf<Element> {
  const parts = clusterize(el.textContent || ''); let out = '';
  for(let i = 0; i < parts.length; i++){
    out += parts[i] === ' '
      ? '<span class="ch sp">&nbsp;</span>'
      : '<span class="ch">' + parts[i] + '</span>';
  }
  el.innerHTML = out;
  return el.querySelectorAll('.ch');
}

