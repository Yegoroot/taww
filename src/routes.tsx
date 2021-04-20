import React, {
  Suspense,
  Fragment,
  ElementType,
  lazy,
} from 'react'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import HomeLayout from './layouts/HomeLayout'
import EmptyLayout from './layouts/EmptyLayout'
import LoadingScreen from './components/LoadingScreen'
import AuthGuard from './components/AuthGuard'
import GuestGuard from './components/GuestGuard'

type RouteR = {
  exact?: boolean;
  path?: string;
  component? : any;
  layout? : ElementType,
  routes? : Array<RouteR>,
  guard?: ElementType
}

export const renderRoutes = (routes: Array<RouteR> = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment
        const Layout = route.layout || Fragment
        const Component = route.component

        return (
          <Route
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>

                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}

                </Layout>
              </Guard>
            )}
          />
        )
      })}
    </Switch>
  </Suspense>
)

const routes = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/app" />
  },
  {
    exact: true,
    path: '/temp',
    component: () => <Redirect to="/app" />
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    layout: EmptyLayout,
    component: lazy(() => import('./views/Login'))
  },
  {
    path: '/app',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/app',
        component: () => <Redirect to="/app/home" />
      },
      {
        exact: true,
        path: '/app/home',
        layout: HomeLayout,
        component: lazy(() => import('./views/Home'))
      },
      {
        exact: true,
        path: '/app/services',
        component: lazy(() => import('./views/Services'))
      },
      {
        component: () => <Redirect to="/404" />
      },
    ]
  },
  {
    path: '*',
    layout: DashboardLayout,
    routes: [
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }
]

export default routes
