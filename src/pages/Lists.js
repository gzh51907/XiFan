import React, { Component } from 'react';
class List extends Component {
    render() {

        let json = this.props.location.state;
        console.log(json)
        return (

            <div>
                <div className='country-bg'>
                    <img src={json.dataArray[0].datas[0].image}></img>
                    <div className='desc'> {json.dataArray[0].datas[0].countryName + '全部线路' + json.dataArray[0].datas[0].content + '条'}</div>

                </div>

                {/* 热门目的地 */}
                <div className='hot-box'>
                    <h2>{json.dataArray[1].title}</h2>
                    <div className='hot-place'>
                        {/* <div className='hot-item'>
                                            <img src='https://assets.tourscool.com/uploads/inn/2019/01/25/952/EOvGYS1GuBPgZzaJo2HVlwXp0PI.jpg'></img>
                                            <div className='title'>洛杉矶</div>
                                        </div> */}
                        {
                            // console.log(json.dataArray[1].datas),
                            json.dataArray[1].datas.map( item =>
                               
                                    <div className='hot-item' key={item.dest_home}>
                                        <img src={item.image}></img>
                                        <div className='title'>{item.content}</div>
                                    </div>
                            )
                        }
                    </div> 
                </div>

                {/* 路线模块         */}
                <div className='result-line'>

                            <h2>{json.dataArray[2].title}</h2>
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

                                    json.dataArray[1].datas
                                        .map(item =>
                                            <div className='tag active' key={item.category + '/' + item.start_city}> {item.content} </div>
                                        )
                                }
                            </div>
                        </div>









            </div>
        )
    }
}

export default List;