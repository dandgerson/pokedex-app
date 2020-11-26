import React, { useEffect } from 'react'
import cl from 'classnames'
import { useParams } from 'react-router-dom'

import useData from 'hooks/useData'

import Card from 'components/Card'
import s from './Pokemon.module.scss'
// import t from './main-theme.module.scss'


const Pokemon: React.FC = () => {
  const { id } = useParams()
  const [{ data, isLoading, error }, doFetch] = useData()

  useEffect(() => {
    doFetch({
      endpoint: 'getPokemonByNameOrId',
      uriSuffix: id,
    })
  }, [id])

  console.log(data)

  console.log(isLoading)

  return (
    <div className={cl(s.root)}>
      {data?.pokemons.length > 0 ? <Card data={data?.pokemons?.[0]} /> : <div>Is Loading...</div>}
    </div>
  )
}

export default Pokemon
