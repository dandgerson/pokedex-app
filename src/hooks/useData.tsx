import { useEffect, useState } from 'react'
import axios from 'axios'
import request from 'utils/request'

export interface IError {
  message: string
}

const useData = ({ endpoint = '' } = {}): [
  {
    data: object | []
    isLoading: boolean
    error: IError | null
  },
  () => void,
] => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<IError | null>(null)

  const doFetch = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await request(endpoint)

        Promise.all(
          response.data.results.map(async ({ url }) => {
            const detailsRes = await axios(url)
            const speciesRes = await axios(detailsRes.data.species.url)

            return {
              ...detailsRes.data,
              color: speciesRes.data.color.name,
            }
          }),
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
  }, [endpoint, isLoading])

  return [{ data, isLoading, error }, doFetch]
}

export default useData
