const baseUrl = import.meta.env.VITE_API_BASE

const fetchWithSignal = async (path, signal) => {
  const res = await fetch(`${baseUrl}${path}`, { signal })
  const { result } = await res.json()
  return result
}

export function getCulinary(signal) {
  return fetchWithSignal('/api/v1/home/culinary', signal)
}

export function getNews(signal) {
  return fetchWithSignal('/api/v1/home/news/', signal)
}
export function getRooms(signal) {
  return fetchWithSignal('/api/v1/rooms/', signal)
}

export function getRoomById(roomId, signal) {
  return fetchWithSignal(`/api/v1/rooms/${roomId}`, signal)
}
