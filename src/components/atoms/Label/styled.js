import styled from 'styled-components'

export const Item = styled.span`
  display: ${({ display }) => (display ? `${display}` : 'block')};
  vertical-align: ${({ display }) => (display ? 'middle' : 'initial')};
  font-size: ${({ size }) => (size ? `${size}px` : '10px')};
  font-weight: ${({ weight }) => weight || 'normal'};
  color: ${({ color }) => color || '#aaaaaa'};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : 'initial')};
  font-family: 'PT Sans Narrow', sans-serif;
  margin-right: ${({ display }) => (display ? `5px` : 'auto')};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 'auto')};
`
