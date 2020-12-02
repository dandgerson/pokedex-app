import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import cl from 'classnames'

import Header from 'components/Header'
import Footer from 'components/Footer'

import routes from 'routes'

import s from './App.module.scss'
// import t from './main-theme.module.scss'

const App = () => (
  <BrowserRouter>
    <div className={cl(s.root)}>
      <Header />

      <div className={cl(s.layout)}>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.id}
              exact={route.isExact}
              path={route.path}
              render={() => route.render()}
            />
          ))}
        </Switch>
      </div>

      <div className={cl(s.footer)}>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
)

export default App
