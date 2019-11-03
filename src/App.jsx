import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import MyList from './pages/myList'
import Adduser from './pages/adduser/adduser'
import Detail from './pages/detail/detail'
import Search from './search'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/search" component={Search} />
                    <Route path="/mylist" component={MyList} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/adduser" component={Adduser} />
                    {/* <Route path="/search/0" component={List} exact /> */}
                    <Redirect from="/" to="/home" exact />
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>
            </div>
        )
    }
}

export default App
