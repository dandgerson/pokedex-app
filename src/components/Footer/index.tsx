import React from 'react'
import cl from 'classnames'
// import PropTypes from 'prop-types'

import s from './Footer.module.scss'
import t from './main-theme.module.scss'

const Footer = () => {
  const items = ['Make with ❤️', 'Ours Team']

  return (
    <div
      className={cl(
        s.root,
        // t.root,
      )}>
      {items.map(item => (
        <div key={item} className={cl(s.item, t.item)}>
          {item}
        </div>
      ))}
    </div>
  )
}

Footer.propTypes = {}

export default Footer
