export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
