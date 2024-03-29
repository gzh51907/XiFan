import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Layout, Breadcrumb, Menu, Icon } from 'antd';
import SearchUser from './searchuser'
import UpdataUser from './updateuser'
import 'antd/dist/antd.css';
import Allshop from './allshop'
import Addgoods from './addgoods'
import Login from './login/Login';
import Orderinf from './Orderinf';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class sApp extends React.Component {

  //         shouldComponentUpdate() {
  //   let user = localStorage.getItem('username');
  //   if(user) {
  //     return true;
  //   }else{
  //     let {history} = this.props;
  //     history.push('/login')
  //   }
  // }
  // 退出登录
  loginOut = () => {
    // localStorage.setItem('username','');
    // this.props.history.push('/login')
    console.log('signout');
  }
  render() {
    let username = localStorage.getItem('username');
    let { history } = this.props;

    return (
      <div>
        <Layout>
          <Header className="header" style={{ background: '#fff', paddingLeft: '10px' }}>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px', }}>
              <Menu.Item key="1" style={{ color: "#58bc58", fontSize: "28px", fontWigth: "bold" }}>稀饭旅行后台管理系统</Menu.Item>
              <Menu.Item key="2">{username}欢迎您</Menu.Item>
              <Menu.Item key="3" onClick={this.loginOut}>退出登录</Menu.Item>
              {/* <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
          </Header>
          <Layout>
            <Sider width={200}>
              <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="sub1" title={
                  <span>
                    <Icon type="github" />
                    用户管理
              </span>
                }
                >
                  <Menu.Item key="1" onClick={() => {
                    history.push('/searchuser')
                  }}>查询用户信息</Menu.Item>
                  <Menu.Item key="2" onClick={() => { history.push('/updata') }}>修改用户密码</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={
                  <span>
                    <Icon type="codepen" />
                    商品管理
              </span>
                }
                >
                  <Menu.Item key="5" onClick={() => {
                    history.push('/allshop')
                  }}>查询所有商品</Menu.Item>
                  <Menu.Item key="6" onClick={() => {
                    history.push('/addgoods')
                  }}>添加商品</Menu.Item>
                  <Menu.Item key="7">修改商品信息</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="file-text" />
                      订单管理
              </span>
                  }
                >
                  <Menu.Item key="9" onClick={() => {
                    history.push('/orderinfo')
                  }}>查看所有订单</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px', height: '98vh' }}>
              <Breadcrumb style={{ margin: '15px 0' }}></Breadcrumb>

              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Route path='/searchuser' component={SearchUser} />
                  <Route path='/updata' component={UpdataUser} />
                  <Route path='/orderinfo' component={Orderinf} />
                  <Route path="/allshop" component={Allshop}></Route>
                  <Route path="/addgoods" component={Addgoods}></Route>
                  <Route path='/' component={SearchUser} exact />
                </Switch>
              </Content>
            </Layout>
          </Layout>


          {/* <Route path='/login' component={Login} /> */}
          {/* <Route path='/orderinfo' component={Orderinfo} /> */}

        </Layout>

      </div>
    )
  }
}
sApp = withRouter(sApp);


export default sApp