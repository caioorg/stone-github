import React from 'react'
import { Container, First, Second } from './styled'

const TwoColumn = ({ columnOne, columnTwo }) => (
  <Container>
    <First>{columnOne}</First>
    <Second>{columnTwo}</Second>
  </Container>
)

export default TwoColumn
