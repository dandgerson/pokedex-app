import React from 'react'
import cl from 'classnames'
import { useParams, useLocation } from 'react-router-dom'

import s from './Pokemon.module.scss'
// import t from './main-theme.module.scss'

const Pokemon: React.FC = () => {
  const location = useLocation()
  const { id } = useParams()
  console.log({ id })

  return (
    <div className={cl(s.root)}>
      <h1>Pokemon {id}</h1>
    </div>
  )
}

export default Pokemon
