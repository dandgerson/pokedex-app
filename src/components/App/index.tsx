import React from 'react'
import cl from 'classnames'

import s from './App.module.scss'
import t from './main-theme.module.scss'

import Header from '../Header'
import Footer from '../Footer'

const App = () => (
  <div className={cl(s.root, t.root)}>
    <Header />
    <div
      style={{
        flex: '1 0 0',
        display: 'flex',
        alignItems: 'center',
      }}>
      <div>Content</div>
    </div>
    <Footer />
  </div>
)

export default App
