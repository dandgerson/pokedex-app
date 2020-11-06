import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import cl from 'classnames'
import SVG from 'react-inlinesvg'

import logo from 'images/logo.svg'

import s from './Header.module.scss'
import t from './main-theme.module.scss'

const Header = () => {
  // const [activeRoute, setActiveRoute] = useState('Home')
  const routesMap = {
    home: {
      id: 1,
      title: 'Home',
      path: '/',
    },
    pokedex: {
      id: 2,
      title: 'Pokédex',
      path: '/pokedex',
    },
    legendaries: {
      id: 3,
      title: 'Legendaries',
      path: '/legendaries',
    },
    documentation: {
      id: 4,
      title: 'Documentation',
      path: '/documentation',
    },
  }

  const history = useHistory()
  const location = useLocation()

  console.log({ location })

  return (
    <div className={cl(s.root, t.root)}>
      <div
        className={cl(
          s.logo,
          // t.logo,
        )}
        onClick={() => {
          history.push(routesMap.home.path)
        }}>
        <SVG src={logo} height='64px' width='158px' />
      </div>

      <div
        className={cl(
          s.nav,
          // t.nav,
        )}>
        {Object.entries(routesMap).map(([, { id, path, title }]) => (
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
