import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import cl from 'classnames'

import Header from 'components/Header'
import Footer from 'components/Footer'

import routes from 'routes'

import s from './App.module.scss'
import t from './main-theme.module.scss'

console.log({ routes })

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
          {routes.map(route => (
            <Route
              key={route.id}
              exact={route.path === '/'}
              path={route.path}
              render={() => route.render()}
            />
          ))}
          {/* <Route path='*' render={() => routes.page404.render()} /> */}
        </Switch>
      </div>

      <Footer />
    </div>
  </BrowserRouter>
)

export default App
