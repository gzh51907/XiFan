import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; 
import './login.css';
import axios from 'axios';
import App from '../app'


let bjStyle = {
    // backgroundImage : `url(${bj})`,
    width:"100%",
    height:"100%",
    backgroundRepeat: 'repeat',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#eee',
    position:'fixed',
    top:0,
    bottom:0,
    left:0,
    right:0
}
class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            let {username,password} = values;
            let {data} = await axios.get('http://localhost:5200/admin/login',{
                params:{
                    username,
                    password
                }
            })
            if(data.code === 1) {
                localStorage.setItem('username',username);
                // console.log(this.props)
                this.props.history.push('/app')

            }
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={bjStyle}>
               <div style={{
                   display:'flex',
                   justifyContent:'center',
                   alignItems:'center',
                   background:'#ddd',
                   opacity:'0.8',
                   width:500,
                   height:300
               }}>
               <Form onSubmit={this.handleSubmit} className="login-form" style={{
                   width: 300
               }}>
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        立即登录
                    </Button>
                    </Form.Item>
                </Form>
               </div>
               <Route path='/app' component={App}/>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;