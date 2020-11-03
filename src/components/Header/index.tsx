import React, { useState } from 'react'
import cl from 'classnames'
import SVG from 'react-inlinesvg'
// import PropTypes from 'prop-types'

import s from './Header.module.scss'
import t from './main-theme.module.scss'

import logo from '../../images/logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState('home')
  const routes = ['Home', 'Pokédex', 'Legendaries', 'Documentation']

  return (
    <div className={cl(s.root, t.root)}>
      <div
        className={cl(
          s.logo,
          // t.logo,
        )}
        onClick={() => setIsActive('Home')}>
        <SVG src={logo} height='64px' width='158px' />
      </div>

      <div
        className={cl(
          s.nav,
          // t.nav,
        )}>
        {routes.map(route => (
          <div
            key={route}
            className={cl(s.nav_item, t.nav_item, {
              [s['nav_item-active']]: route === isActive,
              [t['nav_item-active']]: route === isActive,
            })}
            onClick={() => setIsActive(route)}>
            {route}
          </div>
        ))}
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
