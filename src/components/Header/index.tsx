import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import logo from 'images/logo.svg'

import * as c from 'constants'

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
          history.push(c.routesMap.home.path)
        }}>
        <SVG src={logo} height='64px' width='158px' />
      </div>

      <div
        className={cl(
          s.nav,
          // t.nav,
        )}>
        {Object.entries(c.routesMap).map(([, { id, path, title }]) => (
          <div
            key={id}
            className={cl(s.nav_item, t.nav_item, {
              [s['nav_item-active']]: path === location.pathname,
              [t['nav_item-active']]: path === location.pathname,
            })}
            onClick={() => {
              history.push(path)
            }}>
            {title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
