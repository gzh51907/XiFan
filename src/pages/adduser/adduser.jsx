import React, { Component } from 'react';
import './adduser.scss';
import { Layout, Icon, Row, Col, Collapse, Checkbox } from 'antd';
import 'antd/dist/antd.css';
const { Header, Footer, Content } = Layout;
const { Panel } = Collapse;

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
class adduser extends Component {

    state = {

    }
    render() {
        return <div className='adduser'>
            <Layout>
                <Header style={{ background: '#fff', padding: 0, height: '58px', lineHeight: '58px' }}>
                    <Row>
                        <Col span={6}>
                            <Icon type="left" style={{ fontSize: '16px', marginLeft: '15px' }} />
                        </Col>
                        <Col span={12} style={{ textAlign: 'center', fontSize: '18px' }}>确认订单</Col>
                        <Col span={6} style={{ textAlign: 'right', paddingRight: '15px', color: 'blue', fontSize: '16px' }}>登录</Col>
                    </Row>
                </Header>
                <Content style={{ marginLeft: '20px', marginRight: '20px' }}>
                    <div className='tour'>
                        游客信息
                    </div>
                    <Collapse accordion defaultActiveKey={['1']} >
                        <Panel header="游客" style={{ background: '#fff' }} key="1">
                            <div className='biao1'>
                                <p>顾客姓名</p>
                                <form action="" >
                                    <label htmlFor="">中文名:</label>
                                    <input type="text" placeholder="请输入中文名" />
                                </form><form action="" >
                                    <label htmlFor="">英文名:</label>
                                    <input type="text" placeholder="请输入英文名" />
                                </form>
                                <form action="" >
                                    <label htmlFor="">英文姓:</label>
                                    <input type="text" placeholder="请输入英文姓" />
                                </form>
                                <p>证件信息</p>
                                <form action="" >
                                    <label htmlFor="">证件类型:</label>
                                    <input type="text" placeholder="护照" />
                                </form><form action="" >
                                    <label htmlFor="">护照号:</label>
                                    <input type="text" placeholder="请输入用户名" />
                                </form>
                                <form action="" >
                                    <label htmlFor="">国籍:</label>
                                    <input type="text" placeholder="中国" />
                                </form>
                            </div>

                        </Panel>
                    </Collapse>
                    <div className='biao2'>
                        <p>联系人信息</p>
                        <form action="" >
                            <label htmlFor="">联系人:</label>
                            <input type="text" placeholder="请输入联系人姓名" />
                        </form><form action="" >
                            <label htmlFor="">手机号码:</label>
                            <input type="text" placeholder="必填，用于接收信息" />
                        </form>
                        <form action="" >
                            <label htmlFor="">邮箱:</label>
                            <input type="text" placeholder="必填，用于接收电子客票" />
                        </form>
                    </div>
                    <div className='check'>
                        <Checkbox onChange={onChange}></Checkbox>
                        <span className='jies'>
                            我已阅读并接受</span>
                        <a href="">《旅行合同等内容》</a>
                    </div>
                </Content>
                <Footer style={{ background: '#fff ' }}>
                    <div className='price'>￥1000</div>
                    <div className='next'>下一步</div>
                </Footer>
            </Layout>
        </div >
    }
}
export default adduser;
