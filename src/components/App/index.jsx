import React from 'react'
import cl from 'classnames'

import s from './App.module.scss'
import t from './dark-theme.module.scss'

const App = () => (
  <div className={cl(
    s.root,
    t.root,
  )}>Pokedex App test</div>
)

export default App
