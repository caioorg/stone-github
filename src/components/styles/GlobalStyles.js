import { createGlobalStyle, css } from 'styled-components'

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    overflow: visible;
    scroll-behavior: smooth;
    min-height: 100%;
    height: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  #notification-wrapper .toast-notification {
    right: 50px !important;
    text-align: right !important;
    top: 50px !important;
    left: auto !important;
  }

  #notification-wrapper .toast-notification span {
    border-radius: 10px !important;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
`

export default createGlobalStyle`
  ${styles}
`
