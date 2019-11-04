import React from 'react'
import Api from '../Api'
import axios from 'axios'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { verify } from 'crypto';


class Allshop extends React.Component {
    state = {
        data: []
    }
    async  componentDidMount() {
        let { data } = await axios('http://127.0.0.1:3233/home/goods',{
            params:{
                num:0
            }
        })
        // console.log(data)
        
        this.setState({
            data: data
        })
        
    }
     onChange=(pageNumber)=> {
    console.log('Page: ', pageNumber);
}
    render() {
        let { data } = this.state


        let goods = []
        data.forEach(item => {
            goods.push(item[0])
        })
        console.log(goods)
        return (
            <div>
                <Row>
                    <Col span={6} style={{ textAlign: "center" }}>id</Col>
                    <Col span={6} style={{ textAlign: "center" }}>商品图片</Col>
                    <Col span={6} style={{ textAlign: "center" }}>描述</Col>
                    <Col span={6} style={{ textAlign: "center" }}>价格</Col>
                </Row>
                <div>
                 {goods.map(item=>{
                     return <Row style={{ height: 80, borderBottom: '1px solid black' }} key={item.product_id}>
                      <Col span={6} style={{ height:'100%'}}>{item.product_id}</Col>
                         <Col span={6} style={{ height: '100%' }}><span style={{ height: '100%',width:'50%',display:'block' }}>
                             <img src={item.image} style={{ height: '80%', width: '100%', display: 'block',margin:'10px 0px 0px 50%',  }}/>
                         </span> </Col>
                         <Col span={6} style={{ height: '100%' }} style={{overflow: 'hidden',maxHeight: '79px',textOverflow: 'ellipsis',display: '-webkit-box',WebkitLineClamp:3,WebkitBoxOrient: 'vertical'}}>{item.name}</Col>
                         <Col span={6} style={{ height: '100%',textAlign:"center" }}>{item.default_price}</Col>
                         
                     </Row>
                    
                 })}
                </div>
                   
                   
               
            </div>
        )
    }
}

export default Allshop