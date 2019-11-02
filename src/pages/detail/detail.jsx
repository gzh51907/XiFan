import React, { Component } from 'react';
import './detail.scss';
import { Layout, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
const { Header, Footer, Content } = Layout;

class detail extends Component {
    state = {

    }
    render() {
        return <div >
            <Layout>
                <Header style={{ background: '#fff', padding: 0, height: '46px', lineHeight: '46px', }}>
                    <Row>
                        <Col span={6}>
                            <Icon type="left" style={{ fontSize: '16px', marginLeft: '15px' }} />
                        </Col>
                        <Col span={12} style={{ textAlign: 'center', fontSize: '18px' }} className='tit'>（7天）【含接送机】美国旧金山+洛杉矶跟团游·三晚入住云霄赌场酒店一睹城市夜景+第三人同房价格钜惠+射击等多种行程任选+人间仙境优胜美地</Col>
                        <Col span={6} style={{ textAlign: 'right', paddingRight: '15px', color: 'blue', fontSize: '16px', lineHeight: '46px' }}>  <Icon type="ellipsis" style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.65)' }} /></Col>
                    </Row>
                </Header>
                <Content>

                    <div className='tu'>
                    </div>
                    <div className='product'>
                        <p className='tuij'>
                            <span>4.6分 </span>
                            &nbsp;&nbsp;
                            <span>出行人数：71</span>
                        </p>
                        <p className='name'>（7天）【含接送机】美国旧金山+洛杉矶跟团游·三晚入住云霄赌场酒店一睹城市夜景+第三人同房价格钜惠+射击等多种行程任选+人间仙境优胜美地</p>
                        <p className='price-wrap'>
                            <span className='price'>￥2010</span>
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
                        <button>立即预定</button>
                    </div>
                </Footer>
            </Layout>
        </div>
    }
}

export default detail;