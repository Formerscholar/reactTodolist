import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Lists from './Lists'
import { Route, Link, Redirect, BrowserRouter, Switch,} from 'react-router-dom'
import '../assets/style/app.less'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
  render() {
    return (
      <div className="app_page">
        <div className="content_box">
          <Link to="/home">添加操作</Link>
          <Link to="/list">列表展示</Link>
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={Lists} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
