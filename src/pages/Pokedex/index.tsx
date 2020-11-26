import React, { useEffect, useState } from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import ellipse from 'images/ellipse.svg'

import useData from 'hooks/useData'

import Dropdown from 'components/Dropdown'
import Card from 'components/Card'

import s from './Pokedex.module.scss'
import t from './main-theme.module.scss'

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('')
  const [{ data, isLoading, error }, doFetch] = useData()
  const [total, setTotal] = useState('')

  // console.log({ data })
  useEffect(() => {
    doFetch({
      endpoint: searchValue ? 'getPokemonByNameOrId' : 'getPokemons',
      uriSuffix: searchValue.toLowerCase() || '',
    })
  }, [searchValue])

  useEffect(() => {
    data?.total && setTotal(data?.total)
  }, [data])

  return (
    <div className={cl(s.root, t.root)}>
      <div className={cl(s.layout)}>
        <div className={cl(s.header)}>
          {total} <span className={cl('bold')}>Pokemons</span> for you to choose your favorite
        </div>

        <form className={cl(s.search, t.search)}>
          <input
            type='text'
            placeholder='Encuentra tu pokémon...'
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(e.target.value)
            }}
          />
        </form>

        <div className={cl(s.filters)}>
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>

        {isLoading && <div>Loading...</div>}
        {error?.message && <div>{error.message}</div>}

        <div className={cl(s.cards)}>
          {data?.pokemons?.map(pokemon => (
            <Card key={pokemon.name} data={pokemon} />
          ))}
        </div>

        <div className={cl(s.loader, t.loader)}>
          {Array.from({ length: 3 }, (_, i) => i).map(v => (
            <SVG key={v} src={ellipse} width={8} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pokedex
