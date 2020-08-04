import { useEffect, useState } from 'react'
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../utils/handleLocalStorage'

export const useLocalStorageState = (key) => {
  const [value, setValue] = useState(getFromLocalStorage(key) || [])

  useEffect(() => {
    saveToLocalStorage(key, value)
  }, [value, key])
  return [value, setValue]
}
