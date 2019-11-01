import axios from 'axios'

let Nsg = axios.create({
    baseURL:'https://m.tourscool.com/api'
})

export async function getHomeData(){
    let {data} = await Nsg.get('/index/home/topsales?t=1572520781&page=1',{})
    return data
}

export default{
    getHomeData
}