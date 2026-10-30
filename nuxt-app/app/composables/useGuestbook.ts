import { seedMemories, type Memory } from '~/data/site'

const KEY = 'baithak-board'

/** Candle-lit board: seeded memories plus notes pinned on this device (kept in localStorage). */
export function useGuestbook() {
  const mine = ref<Memory[]>([])
  const memories = computed(() => [...mine.value, ...seedMemories])

  onMounted(() => {
    try {
      mine.value = JSON.parse(localStorage.getItem(KEY) || '[]')
    } catch { /* storage unavailable: the board just starts empty */ }
  })

  function pin(entry: Memory) {
    mine.value.unshift(entry)
    try {
      localStorage.setItem(KEY, JSON.stringify(mine.value))
    } catch { /* ignore */ }
  }

  return { memories, pin }
}
