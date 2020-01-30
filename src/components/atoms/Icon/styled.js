import styled from 'styled-components'

export const SVG = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: ${({ small, middle, big }) => (small && '20px') || (middle && '40px') || (big && '80px')};
  height: ${({ small, middle, big }) => (small && '20px') || (middle && '40px') || (big && '80px')};
`

SVG.defaultProps = {
  closed: false,
  active: true
}
