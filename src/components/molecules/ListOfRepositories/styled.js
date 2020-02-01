import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 55px;
`
export const Card = styled.a`
  width: calc(100% / 3 - 40px);
  margin: 0 20px 20px;
  display: inline-block;
  vertical-align: top;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.68);
  border-radius: 5px;
  padding: 20px;
  border: 0;
  transition: all 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
  min-height: 310px;
  text-decoration: none;
  background: #ffffff;

  .icon-star {
    fill: #ffcc00;
  }

  .icon-fork {
    fill: #e02e41;
  }

  &:hover {
    position: relative;
    z-index: 1;
    transform: translateY(-10px);
    cursor: pointer;
    box-shadow: 0 15px 15px -5px rgba(102, 102, 102, 0.1);
  }
`

export const Header = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #aaaa;
`

export const HeaderIndicators = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const HeaderTitle = styled.div`
  width: 60%;
  display: inline-block;
  vertical-align: middle;
  text-transform: capitalize;
`

export const Content = styled.div``
