import styled from 'styled-components'

export const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

export const FormWrapper = styled.form`
  position: relative;
  margin-bottom: 20px;
`

export const Button = styled.button`
  width: 60px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: #e02e41;
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    background: #bb2939;
  }

  svg {
    fill: #fff;
  }
`
