import { useEffect, useState } from 'react'

const useDebounce = (value, timeout = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), timeout)

    return () => {
      clearTimeout(timer)
    }
  }, [value, timeout])

  return [debouncedValue]
}

export default useDebounce
