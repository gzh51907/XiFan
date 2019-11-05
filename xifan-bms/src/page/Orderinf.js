import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import axios from 'axios';
import './Orderinf.scss'

class Orderinf extends Component {
  state = {
    infoData: []
  }
  del = () => {
    console.log(66)
  }
  async componentDidMount() {

    let { data: { data } } = await axios.get("http://10.3.133.163:8827/myorder", {
      params: {}
    });

    this.setState({
      infoData: data
    })
  }
  render() {
    let { infoData } = this.state;
    // console.log(infoData);
    if (infoData.length) {
      return (
        <div className="orderinf">
          <Row>
            <Col span={2} style={{ textAlign: "center" }}>用户</Col>
            <Col span={7} style={{ textAlign: "center" }}>商品</Col>
            <Col span={3} style={{ textAlign: "center" }}>图片</Col>
            <Col span={3} style={{ textAlign: "center" }}>价格</Col>
            <Col span={3} style={{ textAlign: "center" }}>联系人</Col>
            <Col span={4} style={{ textAlign: "center" }}>电话</Col>
          </Row>
          {
            infoData.map(item => {
              return (
                <Row className="showinfo">
                  <Col span={2} style={{ textAlign: "center" }}>{item.username}</Col>
                  <Col span={7} style={{ textAlign: "center" }}>{item.goods_name}</Col>
                  <Col span={3} style={{ textAlign: "center" }}>
                    <img src={item.imgurl}
                      alt=""
                      style={{ width: "100%", height: "90px" }}
                    />
                  </Col>
                  <Col span={3} style={{ textAlign: "center", color: 'red', fontWeight: 'bold' }}>￥{item.adduserData}</Col>
                  <Col span={3} style={{ textAlign: "center" }}>{item.user}</Col>
                  <Col span={4} style={{ textAlign: "center" }}>{item.tel}</Col>
                  <Col span={2} style={{ textAlign: "center" }}>
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