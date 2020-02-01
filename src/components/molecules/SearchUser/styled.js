import styled from 'styled-components'
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
  width: 40%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

export const Button = styled.button`
  margin-left: 20px;
  padding: 20px 40px;
  border-radius: 10px;
  border: 0;
  background-color: #6557a2;
  cursor: pointer;

  &:hover {
    background: #e5af8b;
  }

  svg {
    fill: #fff;
  }
`
