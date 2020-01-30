import React from 'react'
import { Wrapper, Label, InputWrapper } from './styled'

const Input = ({ label, id, children, onChange, target, width, className, ...props }) => {
  const onUpdate = e => {
    if (!onChange) return false

    if (target) onChange(e)
    else onChange.bind(this)(e.target.value)
  }

  return (
    <Wrapper width={width} className={className}>
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper {...props} id={id} onChange={onUpdate} />
      {children}
    </Wrapper>
  )
}

export default Input
