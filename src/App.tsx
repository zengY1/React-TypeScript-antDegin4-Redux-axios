import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ConfigProvider} from 'antd'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunk from "redux-thunk";
import Loading from './components/loading'
import zhCN from 'antd/es/locale/zh_CN'


const { lazy, Suspense } = React
const DivLayout = lazy(() => import( /* webpackChunkName:"DivLayout" */'./pages/layout'))
const Login = lazy(() => import( /* webpackChunkName:"login" */'./pages/login'))

// 1、创建 store
let middleware = [thunk];
let store = createStore(reducer, applyMiddleware(...middleware));

function App() {
  return (
    <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Suspense fallback={<Loading size="large" />}>
          <Switch>
            <Route path="/" component={(props: any) => <DivLayout {...props} />} />
            <Route path="/login" exact component={(props: any) => <Login {...props} />} />
            <Redirect to="/home" />
          </Switch>
        </Suspense>
      </Router>
    </ConfigProvider>
    </Provider>
  );
}

export default App;
