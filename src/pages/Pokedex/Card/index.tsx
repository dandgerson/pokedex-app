import React from 'react'
import cl from 'classnames'

import s from './Card.module.scss'
import t from './main-theme.module.scss'

const Card = ({ data: { stats, types, img, name } }) => {
  return (
    <div className={cl(s.root)}>
      <div className={s.infoWrap}>
        <div className={cl('h3', s.titleName)}>{name}</div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={cl(s.labelWrap)}>
          {types.map(type => (
            <span key={type} className={cl(s.label, t[`label-${type}`])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  )
}

export default Card
