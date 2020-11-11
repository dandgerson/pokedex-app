import React from 'react'
import cl from 'classnames'

import s from './Card.module.scss'
import t from './main-theme.module.scss'

const Card = ({ data: { name, details } }) => {
  return (
    <div className={cl(s.root)}>
      <div className={s.infoWrap}>
        <div className={cl('h3', s.titleName)}>{name}</div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{details.data.stats[1].base_stat}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{details.data.stats[2].base_stat}</div>
            Defense
          </div>
        </div>
        <div className={cl(s.labelWrap)}>
          {details.data.types.map(slot => (
            <span key={slot.type.name} className={cl(s.label, t[`label-${slot.type.name}`])}>
              {slot.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={details.data.sprites.other['official-artwork'].front_default} alt={name} />
      </div>
    </div>
  )
}

export default Card
