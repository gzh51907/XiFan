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
import json from './/pages/s.json';
import Lists from './pages/Lists'
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';

class Searchs extends Component {
    constructor(props) {
        super()
        this.state = {
            selected: ['/0']
        }
    }
    componentWillMount() {
        let { location: { pathname } } = this.props;
        console.log('pathname :' + pathname)
        this.setState({
            selected: [pathname]
        })
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
                        <Icon type="left" style={{ color: '#404040 ' }} />
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
                        <Menu className='badge-bar' theme='light' onSelect={(obj) => console.log(obj)} defaultSelectedKeys={selected}  >
                            {
                                json.data.map((item, index) =>

                                    <Menu.Item className='van-badge' key={'/' + index} style={{
                                        margin: 0,
                                        padding: 0
                                    }}>

                                        <Link to={{ pathname: '/' + index, state: json.data[index] }} style={{ paddingLeft: '0.426667rem' }}> <div>{item.cityName}</div>    </Link>
                                    </Menu.Item>
                                )
                            }
                        </Menu>
                    </div>
                    {/* 列表 */}
                    <div className='search-main'>
                        <HashRouter>
                            <Switch>
                                {/* <Redirect from='/' to="/0"  component={List}/> */}
                                <Route path="/0" component={List} exact />
                                <Route render component={Lists} exact />
                                {/* <Route path='/添加用户' component={login} />
                            <Redirect from='/' to="/用户列表" />
                            <Route render={() => <div><h1>404</h1></div>}></Route> */}
                            </Switch>
                        </HashRouter>

                        {/* <List key='list'></List> */}
                    </div>
                </div>
            </div>

            // <Layout style={{ height: '100%' }}>
            //     <Header className="header">
            //         <div className="logo" />

            //     </Header>

            //     <Layout>

            //         <Sider width={'2.4rem'} style={{ background: '#fff' }}>

            //             <Menu
            //                 onSelect={({ key }) => {
            //                     console.log(key)
            //                     this.props.history.push(key)
            //                 }}
            //                 mode="inline"
            //                 // defaultSelectedKeys={['用户列表']}
            //                 defaultOpenKeys={['sub1']}
            //                 style={{ height: '100%', borderRight: 0 }}
            //             >

            //                 {
            //                     this.state.list.map(item =>
            //                         <SubMenu key={item.name} title={<span>
            //                             <Icon type="user" />
            //                             {item.name}
            //                         </span>} >
            //                             {/* <Menu.Item key={item.name}> {item.name} </Menu.Item> */}
            //                             {item.childList.map(item =>
            //                                 //  { console.log(item)} 
            //                                 <Menu.Item key={item.path}>
            //                                     <Link to={item.path}>
            //                                         {item.text}
            //                                     </Link>
            //                                 </Menu.Item>
            //                             )}
            //                         </SubMenu>
            //                     )
            //                 }


            //             </Menu>
            //         </Sider>
            //         <Layout style={{ padding: '0 24px 24px' }}>

            //             <Content
            //                 style={{
            //                     background: '#fff',
            //                     padding: 24,
            //                     margin: 0,
            //                     minHeight: 280,
            //                 }}
            //             >
            //                 <Switch>
            //                     <Route path="/用户列表" component={Home} exact />
            //                     <Route path='/添加用户' component={login} />
            //                     <Redirect from='/' to="/用户列表" />
            //                     <Route render={() => <div><h1>404</h1></div>}></Route>
            //                 </Switch>
            //             </Content>
            //         </Layout>
            //     </Layout>
            // </Layout>
        );
    }
}
Searchs = withRouter(Searchs);
export default Searchs;