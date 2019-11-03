import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List/index.jsx'
import Adduser from './pages/adduser/adduser.jsx'
import Detail from './pages/detail/detail.jsx'
import 'antd/dist/antd.css'


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/adduser" component={Adduser} />
                    <Redirect from="/" to="/home" exact />
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>
            </div>
        )
    }
}

export default App
