export function saveToSessionStorage(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data))
}

export function getFromSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key))
}
