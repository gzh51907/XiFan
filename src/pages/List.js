import React,{Component} from 'react';
import json from './s.json';
class List extends Component{
    render (){
        return(
            
            <div>
                            {/* 路线模块         */}
                            <div className='result-line'>

                                <h2>{json.data[0].dataArray[0].title}</h2>
                                <div className='line'>
                                    {/* <div className='tag active'>洛杉矶+旧金山</div>
                                    <div className='tag active'>洛杉矶+拉斯维加斯</div>
                                    <div className='tag active'>纽约+波士顿</div>
                                    <div className='tag active'>拉斯维加斯+羚羊谷</div>
                                    <div className='tag active'>皇后镇+基督城</div>
                                    <div className='tag active'>新西兰北岛</div>
                                    <div className='tag active'>东京+镰仓 </div>
                                    <div className='tag active'>东京+大阪 </div>
                                    <div className='tag active'>大阪+奈良 </div> */}
                                    {

                                        json.data[0].dataArray[0].datas
                                            .map(item =>
                                                <div className='tag active' key={item.category + '/' + item.start_city}> {item.content} </div>
                                            )
                                    }
                                </div>
                            </div>

                            {/* 热门景点 */}
                            <div className='hot-box'>
                                <h2>{json.data[0].dataArray[1].title}</h2>


                                <div className='hot-place'>
                                    {/* <div className='hot-item'>
                                        <img src='https://assets.tourscool.com/uploads/inn/2019/01/25/952/sXpweKrMiHH0WnUaphfctXBltTE.jpg'></img>
                                        <div className='title'>洛杉矶环球影城</div>
                                        <div className='desc'>影迷最爱</div>
                                    </div> */}

                                    {
                                        json.data[0].dataArray[1].datas.map(
                                            item =>
                                                <div className='hot-item' key={item.cityName}>
                                                    <img src={item.image}></img>
                                                    <div className='title'>{item.content}</div>
                                                    <div className='desc'>{item.subTitle}</div>
                                                </div>
                                        )
                                    }
                                </div>



                            </div>

                            {/* 热门目的地 */}
                            <div className='hot-box'>
                                <h2>{json.data[0].dataArray[2].title}</h2>
                                <div className='hot-place'>
                                    {/* <div className='hot-item'>
                                            <img src='https://assets.tourscool.com/uploads/inn/2019/01/25/952/EOvGYS1GuBPgZzaJo2HVlwXp0PI.jpg'></img>
                                            <div className='title'>洛杉矶</div>
                                        </div> */}
                                    {
                                        json.data[0].dataArray[2].datas.map(
                                            item =>
                                                <div className='hot-item' key={item.category}>
                                                    <img src={item.image}></img>
                                                    <div className='title'>{item.content}</div>

                                                </div>
                                        )
                                    }

                                </div>
                            </div>


                            <div className='play-box'>
                                <h2>{json.data[0].dataArray[3].title}</h2>
                                {/* <div className='play-ways'>
                                    <img src="https://assets.tourscool.com/uploads/inn/2019/01/25/952/ZUhI1c_QbeTFjwxLMtkPAedygVc.jpg" alt="" />
                                    <div className='title'>
                                        <span>亲子教育</span>
                                        <span className='desc'>最好的教育，就是带他去看世界</span>
                                    </div>
                                </div> */}
                                {
                                    json.data[0].dataArray[3].datas.map(
                                        item =>
                                            <div className='play-ways' key = {item.product_type}>
                                                <img src={ item.image} alt="" />
                                                <div className='title'>
                                                    <span>{ item.content }</span>
                                                    <span className='desc'>{ item.subTitle}</span>
                                                </div>
                                            </div>
                                    )
                                }

                            </div>



                        </div>
        )
    }
}

export default List;