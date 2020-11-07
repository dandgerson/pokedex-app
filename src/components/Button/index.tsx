import React from 'react'
import cl from 'classnames'

import s from './Button.module.scss'
import t from './main-theme.module.scss'

interface ButtonProps {
  styles: {}
  classes: string[]
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ styles, classes, children, onClick }) => {
  return (
    <button
      type='button'
      className={cl(s.root, t.root, ...classes)}
      style={{
        ...styles,
      }}
      onClick={onClick}>
      <div>{children}</div>
    </button>
  )
}

Button.defaultProps = {
  styles: {},
  classes: [],
}

export default Button
