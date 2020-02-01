import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }

  componentDidCatch(error) {
    this.setState({ error: true })
  }

  render() {
    const { error } = this.state
    return error ? <div>Aplicação Indisponivel</div> : this.props.children
  }
}

export default ErrorBoundary
