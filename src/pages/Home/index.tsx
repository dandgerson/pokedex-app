import React from 'react'
import cl from 'classnames'

import s from './Home.module.scss'
import t from './main-theme.module.scss'

const Home = () => {
  return (
    <div className={cl(s.root, t.root)}>
      <h1>home</h1>
    </div>
  )
}

export default Home
