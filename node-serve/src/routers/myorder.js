const express = require('express');
const Router = express.Router();
const {
    mongo
} = require('../db')
const {
    formatData
} = require('../utils')

const colName = 'myorder'

// 新增订单
Router.post('/add', async (req, res) => {
    // let {
    //     username,
    //     gid,
    //     num
    // } = req.body;
    let result;
    try {
        await mongo.create(colName, [
            req.body
        ]);
        result = formatData()
    } catch (err) {
        result = formatData({
            code: 0
        })
    }
    res.send(result);
})

// 查询订单数据
Router.get('/', async (req, res) => {
    let result;
    try {
        result = await mongo.find(colName, req.query);
        result = formatData({
            data: result
        })
    } catch (err) {
        result = formatData({
            code: 0
        })
    }
    res.send(result);
})

module.exports = Router;