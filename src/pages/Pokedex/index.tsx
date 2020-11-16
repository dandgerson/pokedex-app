import React, { useEffect } from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import ellipse from 'images/ellipse.svg'

import useData from 'hooks/useData'

import Dropdown from 'components/Dropdown'
import Card from './Card'

import s from './Pokedex.module.scss'
import t from './main-theme.module.scss'

const Pokedex = () => {
  const [{ data, isLoading, error }, doFetch] = useData({ endpoint: 'getPokemons' })

  console.log({ data })
  useEffect(() => {
    doFetch()
  }, [])

  return (
    <div className={cl(s.root, t.root)}>
      <div className={cl(s.layout)}>
        <div className={cl(s.header)}>
          {data?.total} <span className={cl('bold')}>Pokemons</span> for you to choose your favorite
        </div>

        <form className={cl(s.search, t.search)}>
          <input type='text' placeholder='Encuentra tu pokémon...' />
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
