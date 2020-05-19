import * as React from 'react'
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import NotFound from '../components/notFound'
import Loading from '../components/loading'
const { lazy, Suspense } = React
const Home = lazy(() => import( /* webpackChunkName:"home" */ '../pages/home'))
const Demo = lazy(() => import( /* webpackChunkName:"home" */ '../pages/demo'))
export const routes: RouteProps[] = [
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/demo',
    exact: true,
    component: Demo
  },
  {
    path: '*',
    component: NotFound
  },
]

const Routes = (authorized: boolean) => <Suspense fallback={<Loading />}>
  <Switch>
    {
      routes.map(r => {
        const { path, exact, component } = r
        const LazyCom: keyof JSX.IntrinsicElements | any = component
        return <Route key={path + ''} exact={!!exact} path={path} render={(props: any) => (authorized ? <LazyCom {...props} /> : <Redirect to="/login" />)} />
      })
    }
  </Switch>
</Suspense>

export default Routes