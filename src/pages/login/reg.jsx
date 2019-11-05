import React, { Component } from 'react'
import './login.scss';
import { Button, Radio, Icon, Tabs, Input, Form, Checkbox, Select } from 'antd';
import axios from 'axios';
const { TabPane } = Tabs;

class Login extends Component {
    constructor() {
        super()
        this.state = {
            size: 'large',
        };

    }
    async componentWillMount() {
        var Authorization=window.localStorage.getItem('Authorization');
    
        if(Authorization){
            this.props.history.push({
                pathname: '/home'
            })
        }
    }

    callback = async (username, password, remember) => {
        let { data } = await axios.post("http://193.112.4.47:3233/login/reg", {
            username: username,
            password: password
        });
        console.log(data)
        if (data) {
            this.props.history.push({
                pathname: '/login',
            })
        }else{

        }
    
    }
    goto = () => {
        console.log()
        this.props.history.push({
            pathname: '/login',
    
        });
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
    render() {
        const { getFieldDecorator } = this.props.form;
        const { size } = this.state;
        function callback(key) {
            console.log(key);
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
                            >
                                登录
                            </Button>
                        </div>
                    </div>
                    <div className='login-all-comp'>
                        <div className='login-page-comp'>
                            <div className='login-comp login-comp-wrap'>
                                <h1 className='title'>稀饭旅行账号注册</h1>





                                <Tabs defaultActiveKey="1" onChange={callback}
                                    style={{
                                        width: '100%', marginTop: '1.333333rem'
                                    }}
                                >
                                    <TabPane tab="手机号注册" key="1">


                                        <Form onSubmit={this.handleSubmit} className="login-form">
                                            <Form.Item>
                                                {getFieldDecorator('username', {
                                                    rules: [{ required: true, message: '请输入正确的手机号!' }],
                                                })(
                                                    <Input
                                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                        placeholder="手机号码"

                                                    />,
                                                )}

                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator('password', {
                                                    rules: [{ required: true, message: '请输入验证码!' }],
                                                })(
                                                    <Input
                                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                        type="password"
                                                        placeholder="登录密码"
                                                        // suffix={<button className='btn'> 获取验证码</button>}
                                                    /> ,

                                                )}

                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator('verification', {
                                                    rules: [{ required: true, message: '请输入正确的密码!' }],
                                                })(
                                                    <Input
                                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                        type="text"
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
                                                    注册
                                                 </Button>
                                                <p>登录即代表您已同意我们的 <a href=""> 服务协议!</a></p>
                                            </Form.Item>
                                        </Form>


                                    </TabPane>
                                    <TabPane tab="邮箱注册" key="2">



                                   
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                            <Form.Item>
                                                {getFieldDecorator('username', {
                                                    rules: [{ required: true, message: '请输入正确的邮箱号码!' }],
                                                })(
                                                    <Input
                                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                        placeholder="邮箱号码"

                                                    />,
                                                )}

                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator('password', {
                                                    rules: [{ required: true, message: '请输入验证码!' }],
                                                })(
                                                    <Input
                                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                        type="password"
                                                        placeholder="登录密码"
                                                        // suffix={<button className='btn'> 获取验证码</button>}
                                                    /> ,

                                                )}

                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator('verification', {
                                                    rules: [{ required: true, message: '请输入正确的密码!' }],
                                                })(
                                                    <Input
                                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                        type="text"
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
                                                    注册
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