import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Repo, NotFound } from '@/pages'

export const routes = {
  HOME: {
    path: '/',
    component: Home,
    exact: true
  },
  DETAILS: {
    path: '/usuario/:user/repositorio',
    component: Repo,
    exact: true
  }
}

export default function() {
  return (
    <Switch>
      {Object.keys({ ...routes }).map((route, index) => {
        return <Route key={index} {...routes[route]} />
      })}
      <Route component={NotFound} />
    </Switch>
  )
}
