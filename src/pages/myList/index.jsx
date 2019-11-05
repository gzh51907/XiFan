import React from 'react';
import './myList.scss';
import axios from 'axios'
import { Layout, Row, Col, Card, Tabs, Tag, Icon } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content } = Layout;
const { TabPane } = Tabs;

class List extends React.Component {
    state = {
        list_goods: [],
        tab_key: (this.props.location.state) ? this.props.location.state.type : 'tuijian'
    }

    callback = async key => {
        // console.log(key);
        let { data: { data } } = await axios.post("http://193.112.4.47:3233/mygoods/list", {
            type: key
        });
        this.setState({
            list_goods: data.reverse(),
        });
    }

    async componentDidMount() {
        if (this.props.location.state) {
            let { data: { data: data1 } } = await axios.post("http://193.112.4.47:3233/mygoods/list", {
                type: this.props.location.state.type
            });
            this.setState({
                list_goods: data1.reverse(),
            });
        } else {
            let { data: { data } } = await axios.post("http://193.112.4.47:3233/mygoods/list", {
                type: 'tuijian'
            });
            // return data;
            // this.state.list_goods = data;
            this.setState({
                list_goods: data.reverse(),
            });
        }
    }

    goto = id => {
        this.props.history.push(`/detail/${id}`);
        // this.props.history.push({
        //     pathname: '/detail',
        //     state: {
        //         id
        //     }
        // })
    }

    goback = () => {
        this.props.history.push('/home');
    }

    render() {
        let { list_goods } = this.state;
        return (
            <div className="list">
                <Layout>
                    <Header style={{ backgroundColor: 'white', padding: 0 }}>
                        <Row>
                            <Col>
                                <div className="search" onClick={this.goback}>
                                    <Icon type="left" className="goback"></Icon>
                                </div>
                            </Col>
                        </Row>
                        <Tabs defaultActiveKey={this.state.tab_key}
                            onChange={this.callback}
                            size="small"
                        >
                            <TabPane tab="稀饭推荐" key="tuijian"></TabPane>
                            <TabPane tab="当地跟团" key="gentuan"></TabPane>
                            <TabPane tab="当地玩乐" key="wanle"></TabPane>
                            <TabPane tab="精品小团" key="xiaotuan"></TabPane>
                            <TabPane tab="邮轮" key="youlun"></TabPane>
                        </Tabs>
                    </Header>
                    <Content>
                        {
                            list_goods.map(item => {
                                return (
                                    <Card style={{ width: '100%', height: 150 }}
                                        bodyStyle={{ padding: 10 }}
                                        key={item.gid}
                                        onClick={this.goto.bind(null, item.gid)}
                                    >
                                        <Row>
                                            <Col span={8}>
                                                <img src={item.imgurl} alt="" />
                                            </Col>
                                            <Col span={16} className="goods_content">
                                                <h3>{item.name}</h3>
                                                <h5>
                                                    {/* {
                                                        if(item.icons_show.length){
                                                            item.icons_show.map(item=>{

                                                            })
                                                        }
                                                    } */}
                                                    <Tag className="goods_content_tag1">热门推荐</Tag>
                                                    <Tag className="goods_content_tag1">畅销行程</Tag>
                                                    {/* <Tag className="goods_content_tag2">当地特色体验</Tag> */}
                                                </h5>
                                                <h6>
                                                    <span className="sell_price">
                                                        <strong>
                                                            ￥{item.sell_price}
                                                        </strong>
                                                        /起
                                                    </span>
                                                    <span className="market_price">
                                                        原价：￥{item.market_price}
                                                    </span>
                                                </h6>
                                            </Col>
                                        </Row>
                                    </Card>
                                )
                            })
                        }
                    </Content>
                </Layout>
            </div >
        )
    }
}

export default List;