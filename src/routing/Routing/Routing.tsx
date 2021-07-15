import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { RouteItem, routes } from '../routes'

const Routing = (): JSX.Element => {
  const allRoutes = routes.map((routeData: RouteItem) => {
    const { component, path } = routeData

    return <Route key={path} exact path={path} component={component} />
  })

  return (
    <BrowserRouter>
      <Switch>
        {allRoutes}
        <Redirect to='/home' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routing
