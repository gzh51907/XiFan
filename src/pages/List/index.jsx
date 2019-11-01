import React from 'react';
import './List.scss';
import axios from 'axios'
import { Layout, Menu, Row, Col, Card, Tabs, Tag } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content } = Layout;
const { TabPane } = Tabs;

class List extends React.Component {
    state = {
        current: 'tuijian',
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    callback = key => {
        console.log(key);
    }

    async componentDidMount() {
        let data = await axios.post("https://m.tourscool.com/api/products", {
            params: {
                t: 1572608005,
                type: 2,
                page: 1,
                page_size: 9,

            }
        });
        // return data;

        console.log(data);
    }

    render() {
        return (
            <div className="list">
                <Layout>
                    <Header style={{ backgroundColor: 'white', padding: 0, height: 44 }}>

                        {/* <Menu onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            forceSubMenuRender='true'
                            inlineIndent="100"
                            style={{ paddingLeft: '10px;' }}
                        >
                            <Menu.Item key="tuijian">
                                稀饭推荐
                            </Menu.Item>
                            <Menu.Item key="gentuan">
                                当地跟团
                            </Menu.Item>
                            <Menu.Item key="wanle">
                                当地玩乐
                            </Menu.Item>
                            <Menu.Item key="xiaotuan">
                                精品小团
                            </Menu.Item>
                            <Menu.Item key="youlun">
                                邮轮
                            </Menu.Item>
                        </Menu> */}
                        {/* <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
                            <Col span={5}>
                            </Col>
                            <Col span={5}>
                            </Col>
                            <Col span={5}>
                            </Col>
                            <Col span={5}>
                            </Col>
                            <Col span={4}>
                            </Col>
                        </Row> */}
                        <Tabs defaultActiveKey="1"
                            onChange={this.callback}
                            size="small"

                        >
                            <TabPane tab="稀饭推荐" key="1">

                            </TabPane>
                            <TabPane tab="当地跟团" key="2">

                            </TabPane>
                            <TabPane tab="当地玩乐" key="3">

                            </TabPane>
                            <TabPane tab="精品小团" key="4">

                            </TabPane>
                            <TabPane tab="邮轮" key="5">

                            </TabPane>
                        </Tabs>

                    </Header>
                    <Content>
                        <Card style={{ width: '100%', height: 150 }}
                            bodyStyle={{ padding: 10 }}
                        >
                            <Row>
                                <Col span={8}>
                                    <img src={require('./1.jpg')} alt="" />
                                </Col>
                                <Col span={16} className="goods_content">
                                    <h3>2020新年悉尼海港跨年烟花船(含晚餐+两场烟花表演)</h3>
                                    <h5>
                                        <Tag className="goods_content_tag1">热门推荐</Tag>
                                        <Tag className="goods_content_tag1">畅销行程</Tag>
                                        <Tag className="goods_content_tag2">当地特色体验</Tag>
                                    </h5>
                                    <h6>
                                        <span className="sell_price">
                                            <strong>
                                                ￥1,814
                                            </strong>
                                            /起
                                        </span>
                                        <span className="market_price">
                                            原价：￥1,880
                                        </span>
                                    </h6>
                                </Col>
                            </Row>
                        </Card>


                        <Card style={{ width: '100%', height: 150 }}
                            bodyStyle={{ padding: 10 }}
                        >
                            <Row>
                                <Col span={8}>
                                    <img src="https://img.tourscool.com/images/product/75151f8af25acfbd424d66cb6d04f442.jpg" alt="" />
                                </Col>
                                <Col span={16} className="goods_content">
                                    <h3>2020新年悉尼海港跨年烟花船(含晚餐+两场烟花表演)</h3>
                                    <h5>
                                        <Tag className="goods_content_tag1">热门推荐</Tag>
                                        <Tag className="goods_content_tag1">畅销行程</Tag>
                                        <Tag className="goods_content_tag2">当地特色体验</Tag>
                                    </h5>
                                    <h6>
                                        <span className="sell_price">
                                            <strong>
                                                ￥1,814
                                            </strong>
                                            /起
                                        </span>
                                        <span className="market_price">
                                            原价：￥1,880
                                        </span>
                                    </h6>
                                </Col>
                            </Row>
                        </Card>


                        <Card style={{ width: '100%', height: 150 }}
                            bodyStyle={{ padding: 10 }}
                        >
                            <Row>
                                <Col span={8}>
                                    <img src={require('./1.jpg')} alt="" />
                                </Col>
                                <Col span={16} className="goods_content">
                                    <h3>2020新年悉尼海港跨年烟花船(含晚餐+两场烟花表演)</h3>
                                    <h5>
                                        <Tag className="goods_content_tag1">热门推荐</Tag>
                                        <Tag className="goods_content_tag1">畅销行程</Tag>
                                        <Tag className="goods_content_tag2">当地特色体验</Tag>
                                    </h5>
                                    <h6>
                                        <span className="sell_price">
                                            <strong>
                                                ￥1,814
                                            </strong>
                                            /起
                                        </span>
                                        <span className="market_price">
                                            原价：￥1,880
                                        </span>
                                    </h6>
                                </Col>
                            </Row>
                        </Card>


                        <Card style={{ width: '100%', height: 150 }}
                            bodyStyle={{ padding: 10 }}
                        >
                            <Row>
                                <Col span={8}>
                                    <img src={require('./1.jpg')} alt="" />
                                </Col>
                                <Col span={16} className="goods_content">
                                    <h3>2020新年悉尼海港跨年烟花船(含晚餐+两场烟花表演)</h3>
                                    <h5>
                                        <Tag className="goods_content_tag1">热门推荐</Tag>
                                        <Tag className="goods_content_tag1">畅销行程</Tag>
                                        <Tag className="goods_content_tag2">当地特色体验</Tag>
                                    </h5>
                                    <h6>
                                        <span className="sell_price">
                                            <strong>
                                                ￥1,814
                                            </strong>
                                            /起
                                        </span>
                                        <span className="market_price">
                                            原价：￥1,880
                                        </span>
                                    </h6>
                                </Col>
                            </Row>
                        </Card>


                        <Card style={{ width: '100%', height: 150 }}
                            bodyStyle={{ padding: 10 }}
                        >
                            <Row>
                                <Col span={8}>
                                    <img src={require('./1.jpg')} alt="" />
                                </Col>
                                <Col span={16} className="goods_content">
                                    <h3>2020新年悉尼海港跨年烟花船(含晚餐+两场烟花表演)</h3>
                                    <h5>
                                        <Tag className="goods_content_tag1">热门推荐</Tag>
                                        <Tag className="goods_content_tag1">畅销行程</Tag>
                                        <Tag className="goods_content_tag2">当地特色体验</Tag>
                                    </h5>
                                    <h6>
                                        <span className="sell_price">
                                            <strong>
                                                ￥1,814
                                            </strong>
                                            /起
                                        </span>
                                        <span className="market_price">
                                            原价：￥1,880
                                        </span>
                                    </h6>
                                </Col>
                            </Row>
                        </Card>


                        <Card style={{ width: '100%', height: 150 }}
                            bodyStyle={{ padding: 10 }}
                        >
                            <Row>
                                <Col span={8}>
                                    <img src={require('./1.jpg')} alt="" />
                                </Col>
                                <Col span={16} className="goods_content">
                                    <h3>2020新年悉尼海港跨年烟花船(含晚餐+两场烟花表演)</h3>
                                    <h5>
                                        <Tag className="goods_content_tag1">热门推荐</Tag>
                                        <Tag className="goods_content_tag1">畅销行程</Tag>
                                        <Tag className="goods_content_tag2">当地特色体验</Tag>
                                    </h5>
                                    <h6>
                                        <span className="sell_price">
                                            <strong>
                                                ￥1,814
                                            </strong>
                                            /起
                                        </span>
                                        <span className="market_price">
                                            原价：￥1,880
                                        </span>
                                    </h6>
                                </Col>
                            </Row>
                        </Card>
                    </Content>
                </Layout>
            </div >
        )
    }
}

export default List;