import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Adduser from './pages/adduser/adduser'
import Detail from './pages/detail/detail'


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/adduser" component={Adduser} />
                    <Redirect from="/" to="/home" exact />
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>
            </div>
        )
    }
}

export default App
