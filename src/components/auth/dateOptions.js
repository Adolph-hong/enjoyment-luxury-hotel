export const years = Array.from({ length: 101 }, (_, i) => {
  const y = 1925 + i
  return { value: y, label: `${y} 年` }
})

export const months = Array.from({ length: 12 }, (_, i) => {
  const m = i + 1
  return { value: m, label: `${m} 月` }
})

export const days = Array.from({ length: 31 }, (_, i) => {
  const d = i + 1
  return { value: d, label: `${d} 日` }
})
