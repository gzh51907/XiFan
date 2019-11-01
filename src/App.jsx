import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import Home from './pages/Home'
import List from './pages/List'


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    <Redirect from="/" to="/home" exact />
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>
            </div>
        )
    }
}

export default App
