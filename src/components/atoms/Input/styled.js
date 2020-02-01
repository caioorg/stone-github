import styled from 'styled-components'
import { media } from '@/helpers/styles'

export const Wrapper = styled.div`
  display: inline-block;
  width: ${({ width = '100%' }) => `${width}%`};
  position: relative;
  vertical-align: top;

  ${media.mobile`
    width: 100%;
  `}

  ${media.tablet`
    width: 70%;
  `}
`

export const Label = styled.label`
  font-size: 12px;
  display: block;
  margin-bottom: 10px;
  position: relative;
`
export const InputWrapper = styled.input`
  width: 100%;
  padding: 20px 40px;
  background: #ffffff;
  border-radius: 10px;
  border: 0;
  font-size: 20px;
  color: #5e5e6a;
  font-family: 'PT Sans Narrow', sans-serif;

  &::placeholder {
    color: #5e5e6a61;
    opacity: 1;
    font-weight: bold;
  }

  &:focus {
    border: 0;
  }
`
