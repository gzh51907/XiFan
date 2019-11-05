import React, { Component } from "react";
import "./css/Searchs.scss"
import {
    HashRouter,
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link,
    NavLink,
    withRouter
} from 'react-router-dom';
import List from './pages/List';
import json from './pages/s.json';
import Lists from './pages/Lists'
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';

class Searchs extends Component {
    constructor(props) {
        super()
        this.state = {
            selected: ['/search/0']
        }
    }
    componentWillMount() {
        let { location: { pathname } } = this.props;
        console.log('pathname :' + pathname)
        this.setState({
            selected: [pathname]

        })
        // { console.log(pathname) }
    }
    // btn(a) {
    //     this.props.history.push({ pathname:  this.state.selected, query: a })
        
    //     console.log( this.state.selected , a )
    // }


    
    goto = e => {
        console.log(e)
        this.props.history.push({
            pathname: '/mylist',
            state: {
                e
            }
        });
    }

    render() {
        // json.data.map(item => console.log(item))
        // console.log(json)
        let { history } = this.props
        let { selected } = this.state
        // console.log(history)
        return (

            <div className=''>
                {/* 搜索栏 */}
                <div className='van-nav-bar--fixed dbyy layout-header van-nav-bar'>
                    <div className='van-nav-bar__left' >
                        <Icon type="left" className=' searchIcon ' style={{ color: '#404040 ', }} />
                    </div>
                    <div className='van-nav-bar__right' >
                        <div className='search-box'>
                            <Icon type="search" style={{ marginRight: '10px', color: '#404040 ' }} />
                            <input className='box'
                                placeholder="城市/景点/产品/关键字" >
                            </input>
                        </div>
                    </div>
                </div>
                {/* 搜索栏 */}


                <div className='search-wrap'>
                    {/* 列表 */}
                    <div>
                        {/* {console.log(this.state.selected[0])} */}
                        <Menu className='badge-bar' theme='light' onSelect={(obj) => console.log(obj)} defaultSelectedKeys={this.state.selected}  >
                            {
                                json.data.map((item, index) =>

                                    <Menu.Item className='van-badge' key={'/search/' + index} style={{
                                        margin: 0,
                                        padding: 0
                                    }}>
                                        {/* to={{ pathname: '/search/' + index, state: json.data[index] }} */}
                                       
                                        <li  onClick={this.goto.bind(null, item.category + '/' + item.start_city)} style={{ paddingLeft: '0.426667rem' }}> <div>{item.cityName}</div>    </li>
                                    </Menu.Item>
                                )
                            }
                        </Menu>
                    </div>
                    {/* 列表 */}
                    <div className='search-main'>

                        <Switch>

                            <Route path="/search" component={List} exact />
                            <Route path="/search/0" component={List} exact />
                            <Route  component={Lists} exact />

                        </Switch>


                        {/* <List key='list'></List> */}
                    </div>
                </div>
            </div>

        );
    }
}
Searchs = withRouter(Searchs);
export default Searchs;