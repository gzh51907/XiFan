import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import axios from 'axios';
import './allshop.scss'

class Orderinf extends Component {
    state = {
        goodsData: []
    }
    del = () => {
        console.log(66)
    }
    async componentDidMount() {


        let { data: { data } } = await axios.post("http://10.3.133.163:8827/mygoods/list", {
            type: 'tuijian'
        });

        this.setState({
            goodsData: data.reverse()
        })
    }
    render() {
        let { goodsData } = this.state;
        console.log(goodsData);
        if (goodsData.length) {
            return (
                <div className="orderinf">
                    <Row>
                        <Col span={2} style={{ textAlign: "center" }}>ID</Col>
                        <Col span={7} style={{ textAlign: "center" }}>标题</Col>
                        <Col span={2} style={{ textAlign: "center" }}>图片</Col>
                        <Col span={2} style={{ textAlign: "center" }}>现价</Col>
                        <Col span={2} style={{ textAlign: "center" }}>原价</Col>
                        <Col span={2} style={{ textAlign: "center" }}>已售出</Col>
                        <Col span={2} style={{ textAlign: "center" }}>标签</Col>
                        <Col span={2} style={{ textAlign: "center" }}>城市</Col>
                        <Col span={2} style={{ textAlign: "center" }}>评分</Col>
                    </Row>
                    {
                        goodsData.map(item => {
                            return (
                                <Row className="showinfo" key={item._id}>
                                    <Col span={2} style={{ textAlign: "center" }}>{item.gid}</Col>
                                    <Col span={7} style={{ textAlign: "center" }}>{item.name}</Col>
                                    <Col span={2} style={{ textAlign: "center" }}>
                                        <img src={item.imgurl}
                                            alt=""
                                            style={{ width: "100%", height: "90px" }}
                                        />
                                    </Col>
                                    <Col span={2} style={{ textAlign: "center", color: 'red', fontWeight: 'bold' }}>￥{item.sell_price}</Col>
                                    <Col span={2} style={{ textAlign: "center", color: 'red', fontWeight: 'bold' }}>￥{item.market_price}</Col>
                                    <Col span={2} style={{ textAlign: "center" }}>{item.sales}</Col>
                                    <Col span={2} style={{ textAlign: "center" }}>{item.icons_show}</Col>
                                    <Col span={2} style={{ textAlign: "center" }}>{item.city}</Col>
                                    <Col span={2} style={{ textAlign: "center" }}>{item.score}</Col>
                                    <Col span={1} style={{ textAlign: "center" }}>
                                        <Icon type="delete"
                                            style={{ color: 'red', cursor: 'pointer', fontSize: 24 }}
                                            onClick={this.del}
                                        />
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </div>
            )
        } else {
            return <div>正确请求数据，请稍等。。。</div>
        }
    }
}

export default Orderinf;