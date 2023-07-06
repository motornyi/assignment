import { useLocalObservable } from 'mobx-react'
import { useCallback } from 'react'
import { debounce } from '../../helpers'

const useHomeStore = () => {
  const store = useLocalObservable(() => ({
    data: null,
    filters: {},
  }))

  const getData = async (filters) => {
    const normalizedFilters = Object.entries(filters).reduce((res, [key, arr]) => {
      if (arr.length) {
        res[key] = arr
      }
      return res
    }, {})
    const params = new URLSearchParams(normalizedFilters).toString()

    const data = await fetch(`/api${params ? `?${params}` : ''}`).then((response) =>
      response.json(),
    )
    store.data = data
  }
  const getDataDebounced = useCallback(debounce(getData, 500), [])

  const onFilterChange = (key, value, checked) => {
    store.filters = {
      ...store.filters,
      [key]: checked
        ? (store.filters[key] || []).concat(value)
        : store.filters[key].filter((val) => val !== value),
    }
  }

  return [store, { getDataDebounced, onFilterChange }]
}

export default useHomeStore
