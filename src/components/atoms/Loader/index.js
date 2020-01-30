import React from 'react'
import { appMessages } from '@/helpers'
import { Container } from './styled'

const Loader = () => (
  <Container>
    <div id="loading-wrapper">
      <div id="loading-text">{appMessages.loading}</div>
      <div id="loading-content"></div>
    </div>
  </Container>
)

export default Loader
