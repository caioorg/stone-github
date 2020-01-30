import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import GlobalStyles from '@/components/styles/GlobalStyles'
import { ErrorBoundary } from '@/components/molecules'
import Routes from '@/routes'

ReactDOM.render(
  <Router>
    <ErrorBoundary>
      <GlobalStyles />
      <Notifications />
      <Routes />
    </ErrorBoundary>
  </Router>,
  document.getElementById('root')
)
