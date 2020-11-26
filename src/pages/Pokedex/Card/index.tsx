import React from 'react'
import cl from 'classnames'
// import { useHistory, useLocation } from 'react-router-dom'

import s from './Card.module.scss'
import t from './main-theme.module.scss'

const Card = ({ data }) => {
  // const history = useHistory()
  // const location = useLocation()

  // console.log({ data })
  return (
    <div
      className={cl(s.root)}
      // onClick={() => history.push(`${location.pathname}${data.id}`)}
    >
      <div className={s.infoWrap}>
        <div className={cl('h3', s.titleName)}>{data.name}</div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats[1].base_stat}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats[2].base_stat}</div>
            Defense
          </div>
        </div>
        <div className={cl(s.labelWrap)}>
          {data.types.map(slot => (
            <span key={slot.type.name} className={cl(s.label, t[`label-${slot.type.name}`])}>
              {slot.type.name}
            </span>
          ))}
        </div>
      </div>
      <div
        className={s.pictureWrap}
        style={{
          background: `linear-gradient(270deg, ${data.color} 15%, transparent 100%)`,
        }}>
        <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
      </div>
    </div>
  )
}

export default Card
