import React from 'react'
import {Icon,Button,Input } from 'antd'
import axios from 'axios'
import './updata.css'
class UpdateUser extends React.Component{

    chuanUser =async (e) => {
        let val = e.target.value;
       if(val){
        let {data} = await axios.post('http://localhost:3233/login/login',{
            username:val
        })
       if(data.code==1){
           alert('此用户不存在')
       }
       }else{
           console.log('你没输入')
       }
    }

    update=async()=>{
        let username = this.num1.state.value
        let password = this.num2.state.value
        let {data} = await axios.post('http://localhost:3233/login/repair',{
            username,
            password
        })
        console.log(data)
       if(data=='success'){
        //    console.log(this.num1.state)
           this.num1.state.value = ''
           this.num2.state.value = ''
           alert('修改成功')
       }else{
           alert('修改失败')
       }
    }

    joinUser=async()=>{
        let username = this.num1.state.value
        let password = this.num2.state.value
        if(username,password){
            let {data} = await axios.post('http://localhost:3233/login/reg',{
                username,
                password
            })
            console.log(data)
            if(data==true){
                alert('添加成功')
            }else{
                alert('添加失败')
            }
        }else{
            alert('用户名密码不能为空')
        }
    }

    render(){
        return(<div>
            <form className='updata'>
                <div className='shuru'>
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)', margin: '5px' }} />
                    <Input type='text' placeholder='请输入需修改的用户名' ref={el=>this.num1=el} style={{boxShadow: 'none'}} onBlur={this.chuanUser} id='userName' />
                </div>
                <div className='psw'>
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', margin: '5px' }} />
                    <Input type="password" placeholder='输入6位数新密码' id='password' ref={el=>this.num2=el} style={{boxShadow: 'none'}}/>
                </div>
                <div>
                    <Button style={{margin:'10px auto', background:'#ff4d4f', color:'#fff'}} onClick={this.update}>修改密码</Button>
                    <Button style={{margin:'10px auto', background:'#1890ff', color:'#fff'}} onClick={this.joinUser}>添加用户</Button>
                </div>
            </form>
        </div>)
    }
}

export default UpdateUser