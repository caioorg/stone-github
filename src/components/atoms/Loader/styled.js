import styled, { css } from 'styled-components'

const styles = css`
  #loading-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(138, 138, 138, 0.73));
    z-index: 1;
  }

  #loading-text {
    display: block;
    position: absolute;
    top: 52%;
    left: 50%;
    color: #000000;
    width: 100px;
    height: 30px;
    margin: -7px 0 0 -45px;
    text-align: center;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 20px;
  }

  #loading-content {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 200px;
    height: 200px;
    margin: -85px 0 0 -85px;
    border: 3px solid #f00;
  }

  #loading-content:after {
    content: '';
    position: absolute;
    border: 3px solid #0f0;
    left: 15px;
    right: 15px;
    top: 15px;
    bottom: 15px;
  }

  #loading-content:before {
    content: '';
    position: absolute;
    border: 3px solid #00f;
    left: 5px;
    right: 5px;
    top: 5px;
    bottom: 5px;
  }

  #loading-content {
    border: 3px solid transparent;
    border-top-color: #aaaaaa;
    border-bottom-color: #aaaaaa;
    border-radius: 50%;
    -webkit-animation: loader 2s linear infinite;
    -moz-animation: loader 2s linear infinite;
    -o-animation: loader 2s linear infinite;
    animation: loader 2s linear infinite;
  }

  #loading-content:before {
    border: 3px solid transparent;
    border-top-color: #6557a2;
    border-bottom-color: #6557a2;
    border-radius: 50%;
    -webkit-animation: loader 3s linear infinite;
    -moz-animation: loader 2s linear infinite;
    -o-animation: loader 2s linear infinite;
    animation: loader 3s linear infinite;
  }

  #loading-content:after {
    border: 3px solid transparent;
    border-top-color: #e5af8b;
    border-bottom-color: #e5af8b;
    border-radius: 50%;
    -webkit-animation: loader 1.5s linear infinite;
    animation: loader 1.5s linear infinite;
    -moz-animation: loader 2s linear infinite;
    -o-animation: loader 2s linear infinite;
  }

  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
export const Container = styled.div`
  ${styles}
`
