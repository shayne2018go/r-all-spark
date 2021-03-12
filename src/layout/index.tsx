import React, { Component, Dispatch } from 'react'
import { routes } from '@router/index'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom'
import { StaticContext } from 'react-router'
import { connect } from 'react-redux'

class Layout extends Component<RouteComponentProps<any, StaticContext>, any> {
  render() {
    return (
      <Switch>
        {routes.map((route: any, index: number) => {
          return (
            <Route
              path={route.path}
              key={index}
              exact={route.exact || false}
              render={(props: RouteComponentProps<any, StaticContext>) => (
                <route.component {...props} routes={route.children} />
              )}
            />
          )
        })}
      </Switch>
    )
  }
}

const mapStateToProps = (state: any): any => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<any>, props: any): any => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout))
