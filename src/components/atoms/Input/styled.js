import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  width: ${({ width = '100%' }) => width};
  position: relative;
  border-bottom: 2px solid #34303f;
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
