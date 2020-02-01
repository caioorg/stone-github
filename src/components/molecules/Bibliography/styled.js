import styled from 'styled-components'
import { media } from '@/helpers/styles'

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;

  ${media.mobile`
    width: 100%;
  `}

  a {
    margin-top: 20px;
    color: #fff;
    text-decoration: none;
    font-family: 'PT Sans Narrow', sans-serif;
    font-weight: bold;
    display: inline-block;

    svg {
      fill: #ffffff;
      margin-right: 10px;
    }
  }
`

export const Container = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.68);
  border-radius: 10px;
  padding: 20px;
  background: #ffffff;

  ${media.mobile`
    width: 100%;
    position: relative;
    top: 0;
    transform: initial;
    margin-top: 20px;
  `}

  ${media.tablet`
    width: 60%;
    margin: 20px auto;
  `}

  ${media.desktop`
    width: 50%;
  `}

  ${media.monitor`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 20%;
  `}
  
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`
