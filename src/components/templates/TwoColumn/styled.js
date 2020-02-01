import styled from 'styled-components'
import bg from '@/assets/images/bg.jpg'
import { media } from '@/helpers/styles'

export const Container = styled.section`
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const First = styled.div`
  display: inline-block;
  vertical-align: text-top;

  ${media.mobile`
    width: 100%;
    padding: 0 20px;
    margin: 0;
  `}

  ${media.monitor`
    width: calc(30% - 180px);
    margin-right: 20px;
  `}
`

export const Second = styled.div`
  width: calc(70% - 10px);
  display: inline-block;
  vertical-align: top;

  ${media.mobile`
    width: 100%;
    padding: 0 20px;
  `}

  ${media.monitor`
    width: calc(70% - 10px);
  `}
`
