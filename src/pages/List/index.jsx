import React from 'react';
import './List.scss';
import axios from 'axios'
import { Layout, Row, Col, Card, Tabs, Tag } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content } = Layout;
const { TabPane } = Tabs;

class List extends React.Component {
    state = {
        list_goods: []
    }

    callback = async key => {
        // console.log(key);
        let { data: { data } } = await axios.post("http://127.0.0.1:8827/mygoods/list", {
            type: key
        });
        // console.log(data);
        this.setState({
            list_goods: data,
        });
    }

    async componentDidMount() {
        let { data: { data } } = await axios.post("http://127.0.0.1:8827/mygoods/list", {
            type: "tuijian"
        });
        // return data;
        // console.log(data);
        // this.state.list_goods = data;
        this.setState({
            list_goods: data,
        });
    }

    render() {
        let { list_goods } = this.state;
        return (
            <div className="list">
                <Layout>
                    <Header style={{ backgroundColor: 'white', padding: 0, height: 44 }}>
                        <Tabs defaultActiveKey="1"
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