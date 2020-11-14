import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'
// const baseUrlV1 = 'https://pokeapi.co/api/v1/'
// const zarUrl = 'http://zar.hosthot.ru/api/v1/'

export interface IError {
  message: string
}

const usePokeApi = ({ request = '' } = {}): [
  {
    data: object | []
    isLoading: boolean
    error: IError | null
  },
  () => void,
] => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<IError | null>(null)

  const doFetch = () => {
    console.log('doFetch')
    setIsLoading(true)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(`${baseUrl}${request}`)
        Promise.all(
          response.data.results.map(async (pokemon: { url: string }) => ({
            ...pokemon,
            details: await axios(pokemon.url),
          })),
        ).then(result =>
          setData({
            total: response.data.count,
            pokemons: result,
          }),
        )
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
  }, [request, isLoading])

  return [{ data, isLoading, error }, doFetch]
}

export default usePokeApi
