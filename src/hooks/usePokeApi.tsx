import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'
const baseUrlV1 = 'https://pokeapi.co/api/v1/'
const zarUrl = 'http://zar.hosthot.ru/api/v1/'

const usePokeApi = ({ request = '' } = {}) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(`${zarUrl}${request}`)
        setData(response.data)

        console.log({ response })
      } catch (e) {
        setError({
          message: e.message,
        })
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [request])

  return [data, isLoading, error]
}

export default usePokeApi
