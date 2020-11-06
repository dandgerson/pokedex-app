import React from 'react'
import cl from 'classnames'

import s from './Page404.module.scss'
import t from './main-theme.module.scss'

const Page404 = () => {
  return (
    <div className={cl(s.root, t.root)}>
      <h1>Page404</h1>
    </div>
  )
}

export default Page404
