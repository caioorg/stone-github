import React from 'react'
import { Item } from './styled'

const Label = ({ size, weight, color, width, lineHeight, display, bottom, ...props }) => (
  <Item
    size={size}
    weight={weight}
    width={width}
    lineHeight={lineHeight}
    color={color}
    display={display}
    bottom={bottom}
  >
    {props.children}
  </Item>
)

export default Label
