export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    console.log(error)
  }
}
