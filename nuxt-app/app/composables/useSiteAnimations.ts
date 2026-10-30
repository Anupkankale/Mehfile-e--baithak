import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initFloatingNotes } from '~/animations/floatingNotes'
import { initHero } from '~/animations/hero'
import { initReveals } from '~/animations/reveals'
import { initCouplet } from '~/animations/couplet'

/** Runs every scroll/hero animation once the page is mounted and reverts them on unmount. */
export function useSiteAnimations() {
  let ctx: gsap.Context | undefined
  const stops: Array<() => void> = []
  const refresh = () => ScrollTrigger.refresh()

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ctx = gsap.context(() => {
      initFloatingNotes(reduce)
      stops.push(initHero(reduce))
      initReveals(reduce)
      stops.push(initCouplet(reduce))
    })
    window.addEventListener('resize', refresh)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', refresh)
    stops.forEach(stop => stop())
    ctx?.revert()
  })
}
