import styled from 'styled-components'
import bg from '@/assets/images/bg.jpg'

export const Container = styled.section`
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const First = styled.div`
  width: calc(30% - 180px);
  display: inline-block;
  margin-right: 20px;
  vertical-align: text-top;
`

export const Second = styled.div`
  width: calc(70% - 10px);
  display: inline-block;
  vertical-align: top;
`
