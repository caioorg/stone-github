import styled from 'styled-components'
import { media } from '@/helpers/styles'
import bg from '@/assets/images/bg.jpg'

export const Container = styled.div`
  height: 100%;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  .icon-github {
    fill: #fff;
    margin-bottom: 50px;
  }
`

export const FormWrapper = styled.form`
  margin-bottom: 20px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  ${media.mobile`
    width: 100%;
    padding: 0 10px;

    input {
      padding: 20px;
    }
  `}

  ${media.tablet`
    width: 70%;
  `}

  ${media.desktop`
    width: 60%;

    input {
      padding: 20px 40px;
    }
  `}

  ${media.monitor`
    width: 40%;
  `}
`

export const Button = styled.button`
  margin-left: 20px;
  padding: 20px 40px;
  border-radius: 10px;
  border: 0;
  background-color: #6557a2;
  cursor: pointer;

  ${media.mobile`
    width: 100%;
    margin: 0;
    margin-top: 20px;
  `}

  ${media.tablet`
    width: auto;
    margin-left: 10px;
    margin-top: 0;
  `}

  &:hover {
    background: #e5af8b;
  }

  svg {
    fill: #fff;
  }
`
