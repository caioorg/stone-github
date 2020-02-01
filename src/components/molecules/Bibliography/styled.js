import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;

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
  width: 15%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.68);
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`
