import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './adduser.scss';
import { Layout, Icon, Row, Col, Collapse, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
const { Header, Footer, Content } = Layout;
const { Panel } = Collapse;

// function onChange(e) {
//     console.log(`checked = ${e.target.checked}`);
// }

class adduser extends Component {

    onChange = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    // onChange(e) {
    //     console.log(`checked = ${e.target.checked}`);
    // }

    onInputChange = (e) => {
        let inputValue = e.target.value,
            inputName = e.target.name
        this.setState({
            [inputName]: inputValue
        })
        // console.log(this.state)
    }
    getInputValue = async () => {
        // let username = 'xiaobai'
        this.state.username = 'xiaobai';
        if (this.state.Cname && this.state.Ename && this.state.HZH && this.state.tel && this.state.email && this.state.user) {
            await axios.post("http://10.3.133.163:8827/myorder/add", this.state);
            alert('提交订单成功！enjoy your time！');
            this.props.history.push(`/detail/${this.props.match.params.id}`);
        } else {
            alert('请输入完整信息！！！')
        }
    }
    state = {

        checked: '',
        Cname: '',
        Ename: '',
        HZH: '',
        user: '',
        tel: '',
        email: '',

    }

    goback = id => {
        this.props.history.push(`/detail/${id}`);
    }

    async componentDidMount() {
        let gid = Number(this.props.match.params.id)
        let { data: { data } } = await axios.post("http://10.3.133.163:8827/mygoods/list", {
            gid
        });
        this.setState({
            adduserData: data[0].sell_price,
            gid: data[0].gid,
            imgurl: data[0].imgurl,
            goods_name: data[0].name
        });
    }

    render() {
        let { adduserData, checked } = this.state;
        if (this.props.match.params && adduserData) {
            return <div className='adduser'>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0, height: '58px', lineHeight: '58px' }}>
                        <Row>
                            <Col span={6}>
                                <Icon type="left" style={{ fontSize: '16px', marginLeft: '15px' }} onClick={this.goback.bind(null, this.props.match.params.id)} />
                            </Col>
                            <Col span={12} style={{ textAlign: 'center', fontSize: '18px' }}>确认订单</Col>
                            <Col span={6} style={{ textAlign: 'right', paddingRight: '15px', color: 'blue', fontSize: '16px' }}></Col>
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
                                        <input type="text" placeholder="请输入中文名" name='Cname' onChange={e => this.onInputChange(e)} />
                                    </form><form action="" >
                                        <label htmlFor="">英文名:</label>
                                        <input type="text" placeholder="请输入英文名" name='Ename' onChange={(e) => this.onInputChange(e)} />
                                    </form>
                                    <p>证件信息</p>
                                    <form action="" >
                                        <label htmlFor="">证件类型:</label>
                                        <input type="text" placeholder="护照" disabled />
                                    </form><form action="" >
                                        <label htmlFor="">护照号:</label>
                                        <input type="text" placeholder="护照号" name='HZH' onChange={(e) => this.onInputChange(e)} />
                                    </form>
                                    <form action="" >
                                        <label htmlFor="">国籍:</label>
                                        <input type="text" placeholder="中国" disabled />
                                    </form>
                                </div>

                            </Panel>
                        </Collapse>
                        <div className='biao2'>
                            <p>联系人信息</p>
                            <form action="" >
                                <label htmlFor="">联系人:</label>
                                <input type="text" placeholder="请输入联系人姓名" name='user' onChange={(e) => this.onInputChange(e)} />
                            </form><form action="" >
                                <label htmlFor="">手机号码:</label>
                                <input type="text" placeholder="必填，用于接收信息" name='tel' onChange={(e) => this.onInputChange(e)} />
                            </form>
                            <form action="" >
                                <label htmlFor="">邮箱:</label>
                                <input type="text" placeholder="必填，用于接收电子客票" name='email' onChange={(e) => this.onInputChange(e)} />
                            </form>
                        </div>
                        <div className='check'>
                            <Checkbox onChange={this.onChange}></Checkbox>
                            <span className='jies'>
                                我已阅读并接受</span>
                            <a href="">《旅行合同等内容》</a>
                        </div>
                    </Content>
                    <Footer style={{ background: '#fff ', padding: '12px' }}>
                        <div className='price' style={{ float: "left", lineHeight: '48px' }}>￥{adduserData}</div>
                        {
                            checked &&
                            <div className='next' onClick={e => this.getInputValue(e)}>提交订单</div>
                        }
                    </Footer>
                </Layout>
            </div >
        } else {
            return (
                <div>
                    订单不存在，<NavLink to={'/home'}>返回主页</NavLink>
                </div>
            )
        }





    }
}
export default adduser;
