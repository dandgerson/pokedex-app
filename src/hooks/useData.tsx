import { useEffect, useState } from 'react'
import axios from 'axios'
import request from 'utils/request'

import PokeApiHandler from 'api/pokeApiHandler'

export interface IError {
  message: string
}

const pokeApiHandler = new PokeApiHandler()

const useData = ({ endpoint = '', query = {}, pathname = '' } = {}): [
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

  // sad;lfasdf;lkjsdfaa

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await request({ endpoint })
        pokeApiHandler[endpoint]({ setData, response })
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
