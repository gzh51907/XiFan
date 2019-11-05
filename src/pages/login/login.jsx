import React, { Component } from 'react'
import './login.scss';
import { Button, Radio, Icon, Tabs, Input, Form, Checkbox, Select } from 'antd';
import axios from 'axios';
const { TabPane } = Tabs;

class Login extends Component {
    constructor() {
        super();
        this.state = {

            size: 'large',


            data: []
        }
    }


async componentWillMount() {
    var Authorization = window.localStorage.getItem('Authorization');

    if (Authorization) {
        this.props.history.push({
            pathname: '/home'
        })
    }
}

callback = async (username, password, remember) => {
    let { data: { data, code } } = await axios.post("http://193.112.4.47:3233/login/login", {
        username: username,
        password: password
    });

    this.setState({
        data: data,

    });
    if (code) {
        this.props.history.push({
            pathname: '/home',

        })
        var storage = window.localStorage;

        storage.Authorization = data;
    }else{
        
    }

}

handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
            // console.log('Received values of form: ', values);
            let { username, password, remember } = values;
            this.callback(username, password, remember)
        } else {

        }
    });
};
goto = () => {
    console.log()
    this.props.history.push({
        pathname: '/reg',

    });
}

render() {
    let { data } = this.state
    const { getFieldDecorator } = this.props.form;
    const { size } = this.state;
    function callback(key) {
        // console.log(key);
    }




    return (

        <div>

            <div className='login-page'>
                <div className='login-header tours-no-bb van-nav-bar van-hairline--bottom' style={{ zIndex: 999 }}>
                    <div className='van-nav-bar__left'>
                        <Icon type="left" className='van-icon' />
                    </div>
                    <div className='van-ellipsis van-nav-bar__title'></div>
                    <div className='van-nav-bar__right'>
                        <Button type="primary" shape="round" size={size} className='search'
                            onClick={this.goto}>
                            注册
                            </Button>
                    </div>
                </div>
                <div className='login-all-comp'>
                    <div className='login-page-comp'>
                        <div className='login-comp login-comp-wrap'>
                            <h1 className='title'>稀饭旅行账号登录</h1>





                            <Tabs defaultActiveKey="1" onChange={callback}
                                style={{
                                    width: '100%', marginTop: '1.333333rem'
                                }}
                            >
                                <TabPane tab="普通登录" key="1">


                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Form.Item>
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: '请输入正确的账号!' }],
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="用户名/邮箱"

                                                />,
                                            )}

                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入正确的密码!' }],
                                            })(
                                                <Input
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    placeholder="用户密码"
                                                    suffix={<button className='btn'> 忘记密码</button>}
                                                /> ,

                                            )}

                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true,
                                            })}

                                            <Button type="primary" htmlType="submit" className="login-form-button"

                                            >
                                                登录
                                                 </Button>
                                            <p>登录即代表您已同意我们的 <a href=""> 服务协议!</a></p>
                                        </Form.Item>
                                    </Form>


                                </TabPane>
                                <TabPane tab="手机验证码登录" key="2">



                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Form.Item>
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: '请输入正确的账号!' }],
                                            })(
                                                <Input

                                                    placeholder="手机号码"

                                                />,
                                            )}


                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入正确的密码!' }],
                                            })(
                                                <Input
                                                    // prefix={}
                                                    type="password"
                                                    placeholder="验证码"
                                                    suffix={<button className='btn'> 获取验证码</button>}
                                                /> ,

                                            )}

                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true,
                                            })}

                                            <Button type="primary" htmlType="submit" className="login-form-button"

                                            >
                                                登录
                                                 </Button>
                                            <p>登录即代表您已同意我们的 <a href=""> 服务协议!</a></p>
                                        </Form.Item>
                                    </Form>
                                </TabPane>

                            </Tabs>









                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;
// export default Login;