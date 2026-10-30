/** Synthesised tanpura drone (Web Audio, nothing downloaded). */
const cycle = [196.0, 261.63, 261.63, 130.81] // Pa Sa Sa Sa(low)

export function useTanpura() {
  const playing = ref(false)
  const failed = ref(false)
  let ctx: AudioContext | undefined
  let master: GainNode | undefined
  let loop: ReturnType<typeof setInterval> | undefined
  let step = 0

  function pluck(freq: number, at: number) {
    if (!ctx || !master) return
    for (let h = 1; h <= 7; h++) {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq * h * (1 + (h - 1) * 0.0012)
      const amp = 0.1 / (h * h * 0.55 + 1)
      g.gain.setValueAtTime(0.0001, at)
      g.gain.linearRampToValueAtTime(amp, at + 0.03)
      g.gain.exponentialRampToValueAtTime(0.0001, at + 3.6 / (1 + (h - 1) * 0.34))
      osc.connect(g)
      g.connect(master)
      osc.start(at)
      osc.stop(at + 4)
    }
  }

  function start() {
    ctx = ctx || new (window.AudioContext || (window as any).webkitAudioContext)()
    if (ctx.state === 'suspended') ctx.resume()
    master = ctx.createGain()
    master.gain.setValueAtTime(0.0001, ctx.currentTime)
    master.gain.linearRampToValueAtTime(0.32, ctx.currentTime + 2.5)
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 2100
    const dl = ctx.createDelay()
    dl.delayTime.value = 0.28
    const fb = ctx.createGain()
    fb.gain.value = 0.22
    master.connect(lp)
    lp.connect(ctx.destination)
    lp.connect(dl)
    dl.connect(fb)
    fb.connect(dl)
    dl.connect(ctx.destination)
    step = 0
    pluck(cycle[0]!, ctx.currentTime + 0.1)
    loop = setInterval(() => {
      step = (step + 1) % cycle.length
      pluck(cycle[step]!, ctx!.currentTime + 0.02)
    }, 1450)
  }

  function stop() {
    clearInterval(loop)
    if (ctx && master) {
      master.gain.cancelScheduledValues(ctx.currentTime)
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime)
      master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2)
    }
  }

  function toggle() {
    playing.value = !playing.value
    try {
      playing.value ? start() : stop()
    } catch {
      failed.value = true
      playing.value = false
    }
  }

  onBeforeUnmount(() => {
    stop()
    ctx?.close()
  })

  return { playing, failed, toggle }
}
