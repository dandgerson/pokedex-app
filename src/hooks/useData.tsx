import { useEffect, useState } from 'react'

import PokeApiHandler from 'api/pokeApiHandler'

export interface IError {
  message: string
}

const pokeApiHandler = new PokeApiHandler()

const useData = (): [
  {
    data: object | []
    isLoading: boolean
    error: IError | null
  },
  (arg0: object) => void,
] => {
  const [data, setData] = useState(null)
  const [endpoint, setEndpoint] = useState('')
  const [query, setQuery] = useState(null)
  const [uriSuffix, setUriSuffix] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<IError | null>(null)

  const doFetch = ({
    endpoint: currentEndpoint = '',
    query: currentQuery = null,
    uriSuffix: currentUriSuffix = '',
  } = {}): void => {
    currentEndpoint && setEndpoint(currentEndpoint)
    currentQuery && setQuery(currentQuery)
    currentUriSuffix && setUriSuffix(currentUriSuffix)
    setIsLoading(true)
  }

  useEffect(() => {
    const getData = () => {
      try {
        pokeApiHandler[endpoint]({
          setData,
          query,
          uriSuffix,
        })
      } catch (e) {
        setError({
          message: e.message,
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (isLoading) {
      getData()
    }
  }, [endpoint, isLoading, query, uriSuffix])

  return [{ data, isLoading, error }, doFetch]
}

export default useData
