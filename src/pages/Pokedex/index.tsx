import React from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import ellipse from 'images/ellipse.svg'

import usePokeApi from 'hooks/usePokeApi'

import Dropdown from 'components/Dropdown'
import Card from './Card'

import s from './Pokedex.module.scss'
import t from './main-theme.module.scss'

import pokemons from './pokemons'

const Pokedex = () => {
  const [pokemonData, isLoading, error] = usePokeApi({
    request: 'pokemon?limit=20',
  })

  console.log({ pokemonData, error })

  return (
    <div className={cl(s.root, t.root)}>
      <div className={cl(s.layout)}>
        <div className={cl(s.header)}>
          {pokemonData.total} <span className={cl('bold')}>Pokemons</span> for you to choose your
          favorite
        </div>

        <form className={cl(s.search, t.search)}>
          <input type='text' placeholder='Encuentra tu pokémon...' />
        </form>

        <div className={cl(s.filters)}>
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>

        <div className={cl(s.cards)}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            pokemonData.pokemons.map(pokemon => <Card key={pokemon.id} data={pokemon} />)
          )}
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
