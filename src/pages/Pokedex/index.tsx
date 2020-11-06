import React from 'react'
import cl from 'classnames'

import s from './Pokedex.module.scss'
import t from './main-theme.module.scss'

const Pokedex = () => {
  return (
    <div className={cl(s.root)}>
      <h1>pokedex</h1>
    </div>
  )
}

export default Pokedex
