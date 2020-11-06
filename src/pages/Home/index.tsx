import React from 'react'
import cl from 'classnames'

import bannerImg from 'images/BannerComplete.png'

import s from './Home.module.scss'
import t from './main-theme.module.scss'

const Home = () => {
  return (
    <div
      className={cl(
        s.root,
        // t.root,
      )}>
      <div>
        <h1
          className={cl(
            s.title,
            // t.title,
          )}>
          <span className={cl(s.bold)}>Find</span> all your favorite{' '}
          <span className={cl(s.bold)}>Pokemon</span>
        </h1>

        <h2 className={cl(s.title)}>
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </h2>
      </div>
      <div>
        <div
          className={cl(
            s.banner,
            // t.banner,
          )}>
          <img src={bannerImg} alt='banner' />
        </div>
      </div>
    </div>
  )
}

export default Home
