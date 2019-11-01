import React,{Component} from 'react'
import { Carousel,Icon } from 'antd';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import '../css/home.css'
import Axios from '../../node_modules/axios';

class Home extends Component{
    constructor(){
        super();
        this.state={
            banner:[],
            HotDestination:[],
            sale:[],
            homeicon:[],
            goods:[]
        }
    }
    async componentWillMount(){
        let {data} = await Axios({
            baseURL:'http://127.0.0.1:3233/home'
        })
        this.setState({
            banner:data[0].indexData[0].data,
            HotDestination:data[0].indexData[1].data,
            sale:data[0].indexData[2].data,
            homeicon:data[0].indexData[3].data,
            goods:data[0].goods,
        })
        console.log(this.state.goods)
    }
    componentDidMount() {
        new Swiper('.swiper-container-destination', {
            slidesPerView: 5,
            spaceBetween : 10,
        })
        new Swiper('.swiper-container-sale',{
            slidesPerView: 1,
            spaceBetween : 10,
        })
    }

    render() {
        let {goods} = this.state
        return(
            <div className="home">
                <header className="header">
                    <div className="search-box">
                        <div className="left">
                            <Icon type="search" className="van-icon"/>
                            <span>目的地/关键词</span>
                        </div>
                        <div className="right">
                            <Icon type="user" className="van-icon"/>
                        </div>
                    </div>
                </header>

                <div className="banner">
                    <Carousel autoplay>
                        <div>
                            <img src="https://assets.tourscool.com/uploads/inn/2019/10/23/952/OhbJ6K2fifm2qkp1dH5IjYoSPfA.jpg"/>
                        </div>
                        <div>
                            <img src="http://assets.tourscool.com/uploads/inn/2019/10/23/952/ggoPDFxBYN0ac_fcyybQGlyCEzU.jpg"/>
                        </div>
                        <div>
                            <img src="http://assets.tourscool.com/uploads/inn/2019/10/15/952/0WrYwP2OyFGSOsGPBTzzbtsBUuo.jpg"/>
                        </div>
                        <div>
                            <img src="http://assets.tourscool.com/uploads/inn/2019/10/15/952/9pCLhgGLb4tY5kOgvSfGfh-SN3w.jpg"/>
                        </div>
                        <div>
                            <img src="http://assets.tourscool.com/uploads/inn/2019/08/27/952/8248kb4LBUpYwG0g-m9g6Jn12DA.jpg"/>
                        </div>
                        <div>
                            <img src="http://assets.tourscool.com/uploads/inn/2019/07/17/952/_lL5uBjpK8N7ZBbH_tDUvuW2DCs.jpg"/>
                        </div>
                    </Carousel>
                </div>

                <div className="entry-block swiper-container swiper-container-destination">
                    <div className="swiper-wrapper" >
                        <div className="swiper-slide">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/V1DIqxhFFcoUSYLjcivub_qwZRo.png" alt=""/>
                            <p className="title">精品小团</p>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/mXxtCra5hsG4Buqw6TOyOr6-bNA.png" alt=""/>
                            <p className="title">当地玩乐</p>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/MkzS1-dg32N32BqVvlAkgEWDxkE.png" alt=""/>
                            <p className="title">当地跟团</p>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/qHA_VhqUItHNyNWXR-o0Kg-ExGQ.png" alt=""/>
                            <p className="title">个性定制</p>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/07/24/952/LRQzPTBTDdKbjkmzqLn42Vycyqk.png" alt=""/>
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
                            <Icon type="right" className="van-icon"/>
                        </div>
                    </div>
                    <div className="hot-place">
                        <div className="hot-item">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/02/19/952/_KMHLpS45kgRFhmMU1rXPgvcfE4.jpg" alt=""/>
                            <div className="title">美国西部</div>
                        </div>
                        <div className="hot-item">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/02/19/952/no4AHPnG1fzDnbgZomxg2ysobVM.jpg" alt=""/>
                            <div className="title">美国东部</div>
                        </div>
                        <div className="hot-item">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/02/19/952/DxI9s0Q5_0r_BYNrdbk6Zf-OvuI.jpg" alt=""/>
                            <div className="title">加拿大</div>
                        </div>
                        <div className="hot-item">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/02/19/952/0Vjxz9AvguP1E-z0A6F9SWBjB1Q.jpg" alt=""/>
                            <div className="title">夏威夷</div>
                        </div>
                        <div className="hot-item">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/02/19/952/FBbOVlJMwOTv--dojEsDb9mN_gE.jpg" alt=""/>
                            <div className="title">日本</div>
                        </div>
                        <div className="hot-item">
                            <img src="http://assets.tourscool.com/uploads/inn/2019/08/22/952/9hCjSHS0cmEFm--EonL_NPUGqdQ.jpg" alt=""/>
                            <div className="title">欧洲</div>
                        </div>
                        <div className="hot-item">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/02/19/952/754h0Rfh3ECsZs16BDrV131OBy4.jpg" alt=""/>
                            <div className="title">澳大利亚</div>
                        </div>
                        <div className="hot-item">
                            <img src="https://assets.tourscool.com/uploads/inn/2019/02/19/952/BgR1vC7Ob9bCz__wCw7OFrCkrpM.jpg" alt=""/>
                            <div className="title">新西兰</div>
                        </div>
                    </div>
                </div>

                <div className="sale-time-box">
                    <h1 className="title">限时特价</h1>
                    <div className="swiper-container swiper-container-sale">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="snap-up-item">
                                    <div className="banner">
                                        <img src="https://img.tourscool.com/images/product/cc870bc5ebfc6b9f9ac9d2b9b6f95d39.jpg/600x338" alt="banner"/>
                                    </div>
                                    <div className="desc">
                                    <span className="tag tag1">自营自营</span>
                                    <span>（半日）【文化体验】罗托鲁瓦蒂普亚(TE PUIA)毛利文化村门票(地热间歇泉+毛利歌舞+午/晚餐)</span>
                                    </div>
                                    <div className="price-wrap">
                                        <span className="price">￥200.00</span> 
                                        <span className="unit">/起</span> 
                                        <span className="ori-price">￥227.29</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-list">
                    <h1 className="title">精选商品</h1>
                    <div className="half van-list">
                        {
                            goods.map(item=>(
                                <div className="half-item van-cell" key={item.product_id}>
                                    <div className="van-cell__value van-cell__value--alone">
                                        <div className="hot-item">
                                            <div className="banner">
                                                <img src={item.image} alt="banner"/>
                                            </div>
                                            <div className="desc no-wrap-line2 imitate-ellipsis2">
                                            （7天）【跨国深度游】美国加拿大纽约+华盛顿+多伦多+魁北克+波士顿跟团游·品尝正宗法式大餐+震撼的尼亚加拉瀑布+全程豪华酒店
                                            </div>
                                            <div className="tag-icon-tour">
                                                <span>买二送一</span>
                                                <span>买二送二</span>
                                                <span>畅销行程</span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">￥2,493.06</span>
                                                <span className="unit">/起&nbsp;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Home