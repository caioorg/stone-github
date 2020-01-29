import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from '@/molecules'
import Routes from '@/routes'

ReactDOM.render(
  <Router>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Router>,
  document.getElementById('root')
)
