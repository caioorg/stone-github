import React from 'react'
import ImageNotFound from './404.png'
import { Container, Describe } from './styled'

export default function NotFound() {
  return (
    <Container>
      <img src={ImageNotFound} alt="Page Not Found" />
      <Describe>Hey! Page Not Found</Describe>
    </Container>
  )
}
