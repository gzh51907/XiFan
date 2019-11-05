import React from 'react'
import {Table,Button } from 'antd'
import axios from 'axios'

class SearchUser extends React.Component{
    state = {
        data:[]
    }

   async componentDidMount(){
        let {data} = await axios.get('http://127.0.0.1:3233/login/all')
        console.log(data)
        
        this.setState({
            data
        })
    }


    async deleteuser(username){
        // console.log(username,this)
        let a = this.state.data
        a.splice(a.indexOf(username),1)
        this.setState({
            data:a
        })
        await axios.post('http://127.0.0.1:3233/login/deleteUser',{
            username
        })
    }


    render(){
        let {data}=this.state
        return(
            <div>
                <table style={{width:'80vw',border:'1px solid #99999'}}>
                    <thead style={{marginBottom: '10px'}}>
                        <tr>
                            <td>用户名</td>
                            <td>密码</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(item=>(
                            <tr key={item.regtime}>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td><Button onClick={this.deleteuser.bind(this,item.username)}>删除</Button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchUser