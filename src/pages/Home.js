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
            observer:true,
            observeParents:true,
        })
        new Swiper('.swiper-container-sale',{
            slidesPerView: 1,
            spaceBetween : 10,
            observer:true,
            observeParents:true,
        })
    }

    render() {
        let {goods,sale,HotDestination,homeicon,banner} = this.state
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
                        {
                            banner.map(item=>(
                                <div key={item.title}>
                                    <img src={item.image_url}/>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>

                <div className="entry-block swiper-container swiper-container-destination">
                    <div className="swiper-wrapper" >
                        {
                            homeicon.map(item=>(
                                <div className="swiper-slide" key={item.title}>
                                    <img src={item.image_url} alt=""/>
                                    <p className="title">{item.title}</p>
                                </div>
                            ))
                        }
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
                        {
                            HotDestination.map(item=>(
                                <div className="hot-item" key={item.title}>
                                    <img src={item.image_url} alt=""/>
                                    <div className="title">{item.title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="sale-time-box">
                    <h1 className="title">限时特价</h1>
                    <div className="swiper-container swiper-container-sale">
                        <div className="swiper-wrapper">
                        {
                            sale.map(item=>(
                            <div className="swiper-slide" style={{paddingLeft:'12px'}} key={item.product_id}>
                                        <div className="snap-up-item">
                                            <div className="banner">
                                                <img src={item.image} alt="banner"/>
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
                            goods.map(item=>(
                                <div className="half-item van-cell" key={item.product_id}>
                                    <div className="van-cell__value van-cell__value--alone">
                                        <div className="hot-item">
                                            <div className="banner">
                                                <img src={item.image} alt="banner"/>
                                            </div>
                                            <div className="desc no-wrap-line2 imitate-ellipsis2">
                                            {item.name}
                                            </div>
                                            <div className="tag-icon-tour">
                                                {
                                                    (item.icons_tour).map(item=>(
                                                        <span >{item.title}</span>
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
            </div>
        ) 
    }
}

export default Home