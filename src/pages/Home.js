import React, { Component } from 'react'
import { Carousel, Icon } from 'antd';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import '../css/home.css'
import Axios from '../../node_modules/axios';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            banner: [],
            HotDestination: [],
            sale: [],
            homeicon: [],
            goods: [],
            show: false,
        }
    }
    async componentWillMount() {
        let { data } = await Axios({
            baseURL: 'http://193.112.4.47:3233/home/home'
        })
        this.setState({
            banner: data[0].indexData[0].data,
            HotDestination: data[0].indexData[1].data,
            sale: data[0].indexData[2].data,
            homeicon: data[0].indexData[3].data,
            goods: data[0].goods,
        })
        // console.log(this.state.goods)
    }

    componentDidMount() {
        new Swiper('.swiper-container-destination', {
            slidesPerView: 5,
            spaceBetween: 10,
            observer: true,
            observeParents: true,
        })
        new Swiper('.swiper-container-sale', {
            slidesPerView: 1,
            spaceBetween: 10,
            observer: true,
            observeParents: true,
        })
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 600) {
                this.setState({
                    show: true
                })
            } else {
                this.setState({
                    show: false
                })
            }
        })
    }


    goTop() {
        let scrollToTop = window.setInterval(function () {
            let pos = window.pageYOffset
            if (pos > 0) {
                window.scrollTo(0, pos - 30);
            } else {
                window.clearInterval(scrollToTop)
            }
        }, 2)
    }

    goto = type => {
        this.props.history.push({
            pathname: '/mylist',
            state: {
                type
            }
        });
    }

    render() {
        let { goods, sale, HotDestination, homeicon, banner, show } = this.state
        return (
            <div className="home">
                <header className="header">
                    <div className="search-box">
                        <div className="left">
                            <Icon type="search" className="van-icon" />
                            <span>目的地/关键词</span>
                        </div>
                        <div className="right">
                            <Icon type="user" className="van-icon" />
                        </div>
                    </div>
                </header>

                <div className="banner">
                    <Carousel autoplay>
                        {
                            banner.map(item => (
                                <div key={item.title}>
                                    <img src={item.image_url} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>

                <div className="entry-block swiper-container swiper-container-destination">
                    <div className="swiper-wrapper" >
                        <div className="swiper-slide" onClick={this.goto.bind(null, 'tuijian')}>
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/V1DIqxhFFcoUSYLjcivub_qwZRo.png" alt="" />
                            <p className="title">稀饭推荐</p>
                        </div>
                        <div className="swiper-slide" onClick={this.goto.bind(null, 'wanle')}>
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/mXxtCra5hsG4Buqw6TOyOr6-bNA.png" alt="" />
                            <p className="title">当地玩乐</p>
                        </div>
                        <div className="swiper-slide" onClick={this.goto.bind(null, 'gentuan')}>
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/MkzS1-dg32N32BqVvlAkgEWDxkE.png" alt="" />
                            <p className="title">当地跟团</p>
                        </div>
                        <div className="swiper-slide" onClick={this.goto.bind(null, 'xiaotuan')}>
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/qHA_VhqUItHNyNWXR-o0Kg-ExGQ.png" alt="" />
                            <p className="title">精品小团</p>
                        </div>
                        <div className="swiper-slide" onClick={this.goto.bind(null, 'youlun')}>
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/LRQzPTBTDdKbjkmzqLn42Vycyqk.png" alt="" />
                            <p className="title">邮轮</p>
                        </div>
                    </div>
                </div>

                <div className="newnav">
                    <div>
                        <p className="p1">限时特价</p>
                        <p className="p2">超值优惠买到赚到</p>
                    </div>
                    <div>
                        <p className="p1">行程攻略</p>
                        <p className="p2">达人教你玩世界</p>
                    </div>
                </div>

                <div className="hot-target">
                    <div className="title">
                        <div className="name">热门目的地</div>
                        <div className="link-all">
                            查看全部
                            <Icon type="right" className="van-icon" />
                        </div>
                    </div>
                    <div className="hot-place">
                        {
                            HotDestination.map(item => (
                                <div className="hot-item" key={item.title}>
                                    <img src={item.image_url} alt="" />
                                    <div className="title">{item.title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="sale-time-box">
                    <h1 className="title">限时特价</h1>
                    <div className="swiper-container swiper-container-sale" style={{ paddingLeft: '12px' }}>
                        <div className="swiper-wrapper">
                            {
                                sale.map(item => (
                                    <div className="swiper-slide" key={item.product_id}>
                                        <div className="snap-up-item">
                                            <div className="banner">
                                                <img src={item.image} alt="banner" />
                                            </div>
                                            <div className="desc">
                                                <span className="tag tag1">自营自营</span>
                                                <span>{item.name}</span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">{item.special_price}</span>
                                                <span className="unit">/起</span>
                                                <span className="ori-price">{item.default_price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="product-list">
                    <h1 className="title">精选商品</h1>
                    <div className="half van-list">
                        {
                            goods.map(item => (
                                <div className="half-item van-cell" key={item.product_id}>
                                    <div className="van-cell__value van-cell__value--alone">
                                        <div className="hot-item">
                                            <div className="banner">
                                                <img src={item.image} alt="banner" />
                                            </div>
                                            <div className="desc no-wrap-line2 imitate-ellipsis2">
                                                {item.name}
                                            </div>
                                            <div className="tag-icon-tour">
                                                {
                                                    (item.icons_tour).map(item => (
                                                        <span key={item.title}>{item.title}</span>
                                                    ))
                                                }
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">{item.default_price}</span>
                                                <span className="unit">/起&nbsp;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {
                    show &&
                    <div className="drift-wrap">
                        <div>
                            <img src="https://m.tourscool.com/_nuxt/img/0e37d63.png" alt="" />
                        </div>
                        <div>
                            <img src="https://m.tourscool.com/_nuxt/img/8c3038d.png" alt="" />
                        </div>
                        <div onClick={this.goTop}>
                            <img src="https://m.tourscool.com/_nuxt/img//862e402.png" alt="" />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Home