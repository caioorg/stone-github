import React from 'react'
import sprite from './sprite.svg'
import { SVG } from './styled'

const Icon = ({ id, className, ...props }) => (
  <SVG
    small={props.small}
    middle={props.middle}
    big={props.big}
    className={`icon icon-${id}${!!className ? ` ${className}` : ''}`}
    {...props}
  >
    <use xlinkHref={`${sprite}#${id}`} />
  </SVG>
)

export default Icon
