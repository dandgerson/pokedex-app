import React, { useState } from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'
// import PropTypes from 'prop-types'

import logo from 'images/logo.svg'

import s from './Header.module.scss'
import t from './main-theme.module.scss'

const Header = () => {
  const [activeRoute, setActiveRoute] = useState('Home')
  const routes = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'Pokédex',
    },
    {
      id: 3,
      link: 'Legendaries',
    },
    {
      id: 4,
      link: 'Documentation',
    },
  ]

  return (
    <div className={cl(s.root, t.root)}>
      <div
        className={cl(
          s.logo,
          // t.logo,
        )}
        onClick={() => setActiveRoute('Home')}>
        <SVG src={logo} height='64px' width='158px' />
      </div>

      <div
        className={cl(
          s.nav,
          // t.nav,
        )}>
        {routes.map(route => (
          <div
            key={route.id}
            className={cl(s.nav_item, t.nav_item, {
              [s['nav_item-active']]: route.link === activeRoute,
              [t['nav_item-active']]: route.link === activeRoute,
            })}
            onClick={() => setActiveRoute(route.link)}>
            {route.link}
          </div>
        ))}
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
