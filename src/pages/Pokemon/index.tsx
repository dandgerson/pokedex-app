import React from 'react'
import cl from 'classnames'
import { useParams } from 'react-router-dom'

import s from './Pokemon.module.scss'
// import t from './main-theme.module.scss'

const Pokemon: React.FC = () => {
  const { id } = useParams()

  return (
    <div className={cl(s.root)}>
      <h1>Pokemon {id}</h1>
    </div>
  )
}

export default Pokemon
