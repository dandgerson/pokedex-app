import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import cl from 'classnames'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Home from 'pages/Home'
import Pokedex from 'pages/Pokedex'
import Legendaries from 'pages/Legendaries'
import Page404 from 'pages/Page404'

import s from './App.module.scss'
import t from './main-theme.module.scss'

const App = () => (
  <BrowserRouter>
    <div className={cl(s.root, t.root)}>
      <Header />

      <div
        className={cl(
          s.layout,
          // t.layout,
        )}>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/legendaries' render={() => <Legendaries />} />
          <Route path='/pokedex' render={() => <Pokedex />} />
          <Route path='*' render={() => <Page404 />} />
        </Switch>
      </div>

      <Footer />
    </div>
  </BrowserRouter>
)

export default App
