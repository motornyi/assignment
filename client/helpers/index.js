export const debounce = (cb, t) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => cb(...args), t)
  }
}
