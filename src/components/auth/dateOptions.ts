// dateOptions.ts
import type { Option } from '../ui/form/Select' // 或者自己定義相同型別

export const years: Option[] = Array.from({ length: 101 }, (_, i) => {
  const y = 1925 + i
  return { value: String(y), label: `${y} 年` }
})

export const months: Option[] = Array.from({ length: 12 }, (_, i) => {
  const m = i + 1
  return { value: String(m), label: `${m} 月` }
})

export const days: Option[] = Array.from({ length: 31 }, (_, i) => {
  const d = i + 1
  return { value: String(d), label: `${d} 日` }
})
