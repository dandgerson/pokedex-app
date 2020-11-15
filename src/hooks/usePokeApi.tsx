import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'
// const baseUrlV1 = 'https://pokeapi.co/api/v1/'
// const zarUrl = 'http://zar.hosthot.ru/api/v1/'

export interface IError {
  message: string
}

const usePokeApi = ({ params = '' } = {}): [
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
        const pokemonsRes = await axios(`${baseUrl}${params}`)

        Promise.all(
          pokemonsRes.data.results.map(async ({ url }) => {
            const detailsRes = await axios(url)
            const speciesRes = await axios(detailsRes.data.species.url)

            return {
              ...detailsRes.data,
              color: speciesRes.data.color.name,
            }
          }),
        ).then(result =>
          setData({
            total: pokemonsRes.data.count,
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
  }, [params, isLoading])

  return [{ data, isLoading, error }, doFetch]
}

export default usePokeApi
