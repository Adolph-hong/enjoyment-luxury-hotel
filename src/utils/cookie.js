// Cookie utility functions
export const setCookie = (name, value) => {
  document.cookie = `${name}=${value}; path=/`
}

export const getCookie = (name) => {
  const token = document.cookie.replace(
    new RegExp(`(?:^|.*;\\s*)${name}\\s*=\\s*([^;]*).*$|^.*$`, 'i'),
    '$1'
  )
  return token || null
}

export const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}
