export function saveToSessionStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getFromSessionStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
