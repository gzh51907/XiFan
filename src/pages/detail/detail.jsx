import React, { Component } from 'react';
import './detail.scss';
import { Layout, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
const { Header, Footer, Content } = Layout;

class detail extends Component {
    constructor() {
        super();
        this.state = {
            detailData: []
        }
    }


    async componentDidMount() {
        let gid = Number(this.props.match.params.id)
        let { data: { data } } = await axios.post("http://10.3.133.163:8827/mygoods/list", {
            gid
        });
        this.setState({
            detailData: data,
        });
    }

    goto = id => {
        // this.props.history.push(`/adduser/${id}`);
        this.props.history.push({
            pathname: '/adduser',
            state: {
                id
            }
        })
    }

    goback = () => {
        this.props.history.push('/mylist');
    }

    render() {
        let { detailData } = this.state;
        if (detailData.length) {
            return (
                <div className="detail">
                    {
                        <Layout key={detailData[0].gid}>
                            <Header style={{ background: '#fff', padding: 0, height: '46px', lineHeight: '46px', }}>
                                <Row>
                                    <Col span={6}>
                                        <Icon type="left" style={{ fontSize: '16px', marginLeft: '15px' }} onClick={this.goback} />
                                    </Col>
                                    <Col span={12} style={{ textAlign: 'center', fontSize: '18px' }} className='tit'>{detailData[0].name}</Col>
                                    <Col span={6} style={{ textAlign: 'right', paddingRight: '15px', color: 'blue', fontSize: '16px', lineHeight: '46px' }}>  <Icon type="ellipsis" style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.65)' }} /></Col>
                                </Row>
                            </Header>
                            <Content>

                                <div className='tu'>
                                    <img src={detailData[0].imgurl} alt="" style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className='product'>
                                    <p className='tuij'>
                                        <span>{detailData[0].score}分 </span>
                                        &nbsp;&nbsp;
                                    <span>出行人数：{detailData[0].sales}</span>
                                    </p>
                                    <p className='name'>{detailData[0].name}</p>
                                    <p className='price-wrap'>
                                        <span className='price'>￥{detailData[0].sell_price}</span>
                                        <span> 起</span>
                                    </p>
                                    <div className='showapp'>
                                        <img src={require('./shouj.png')} alt="" />
                                        App下单立减￥24.15起,更有新人优惠等你拿
                                    </div>
                                </div>
                            </Content>
                            <Footer style={{ background: '#fff', padding: '0' }}>
                                <div className='f-l'>
                                    <div>
                                        <img src={require('./star.png')} alt="" />
                                        <p>收藏</p>
                                    </div>
                                    <div>
                                        <img src={require('./phone.png')} alt="" />
                                        <p>电话咨询</p>
                                    </div>
                                    <div>
                                        <img src={require('./mes.png')} alt="" />
                                        <p>在线咨询</p>
                                    </div>
                                </div>
                                <div className='f-r'>
                                    <button onClick={this.goto.bind(null, detailData[0].gid)}>立即预定</button>
                                </div>
                            </Footer>
                        </Layout>
                    }
                </div>
            )
        } else {
            return (
                <div>
                    正在请求数据，请稍等
                </div>
            )
        }


    }
}



export default detail;