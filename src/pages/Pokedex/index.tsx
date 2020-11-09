import React from 'react'
import cl from 'classnames'

import Dropdown from 'components/Dropdown'

import s from './Pokedex.module.scss'
import t from './main-theme.module.scss'

import pokemons from './pokemons'

const Pokedex = () => {
  return (
    <div className={cl(s.root, t.root)}>
      <div className={cl(s.layout)}>
        <div className={cl(s.header)}>
          800 <span className={cl('bold')}>Pokemons</span> for you to choose your favorite
        </div>

        <form className={cl(s.search, t.search)}>
          <input type='text' placeholder='Encuentra tu pokémon...' />
        </form>

        <div className={cl(s.filters)}>
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Pokedex
