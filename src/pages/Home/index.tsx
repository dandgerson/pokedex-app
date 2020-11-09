import React, { useState, useEffect } from 'react'
import cl from 'classnames'
import { useHistory } from 'react-router-dom'

// import bannerImg from 'images/BannerComplete.png'
import cloudBig from 'images/cloudBig.png'
import cloudSmall from 'images/cloudSmall.png'
import pikachu from 'images/Pikachu.png'
import pokeball1 from 'images/PokeBall1.png'
import pokeball2 from 'images/PokeBall2.png'

import Button from 'components/Button'

import s from './Home.module.scss'
import t from './main-theme.module.scss'

const Home = () => {
  const history = useHistory()

  const [screenX, setSreenX] = useState(0)
  const [screenY, setSreenY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setSreenX(Math.abs(event.screenX))
      setSreenY(Math.abs(event.screenY))
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [screenX, screenY])

  return (
    <div className={cl(s.root, t.root)}>
      <div className={cl(s.cover)}>
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

        <Button onClick={() => history.push('/pokedex')}>See pokemons</Button>
      </div>

      <div
        className={cl(s.cloudBig)}
        style={{
          transform: `translate(${screenX * 0.003}%, ${screenY * 0.003}%)`,
        }}>
        <img src={cloudBig} alt='' />
      </div>

      <div
        className={cl(s.cloudSmall)}
        style={{
          transform: `translate(${screenX * 0.003}%, ${screenY * 0.003}%)`,
        }}>
        <img src={cloudSmall} alt='' />
      </div>

      <div
        className={cl(s.pikachu)}
        style={{
          transform: `translate(${screenX * -0.009}%, ${screenY * -0.01}%)`,
        }}>
        <img src={pikachu} alt='' />
      </div>

      <div
        className={cl(s.pokeball1)}
        style={{
          transform: `translate(${screenX * 0.003}%, ${screenY * 0.003}%)`,
        }}>
        <img src={pokeball1} alt='' />
      </div>

      <div
        className={cl(s.pokeball2)}
        style={{
          transform: `translateY(${screenY * -0.005}%)`,
        }}>
        <img src={pokeball2} alt='' />
      </div>
    </div>
  )
}

export default Home
