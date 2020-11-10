import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import logo from 'images/logo.svg'

import routes from 'routes'

import s from './Header.module.scss'
import t from './main-theme.module.scss'

const Header = () => {
  const history = useHistory()
  const location = useLocation()

  return (
    <div className={cl(s.root, t.root)}>
      <div
        className={cl(
          s.logo,
          // t.logo,
        )}
        onClick={() => {
          history.push('/')
        }}>
        <SVG src={logo} height='64px' width='158px' />
      </div>

      <div
        className={cl(
          s.nav,
          // t.nav,
        )}>
        {routes.map(
          route =>
            !['Page404'].includes(route.title) && (
              <div
                key={route.id}
                className={cl(s.nav_item, t.nav_item, {
                  [s['nav_item-active']]: route.path === location.pathname,
                  [t['nav_item-active']]: route.path === location.pathname,
                })}
                onClick={() => {
                  history.push(route.path)
                }}>
                {route.title}
              </div>
            ),
        )}
      </div>
    </div>
  )
}

export default Header
