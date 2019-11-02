const jwt = require('jsonwebtoken');
const {
    secret
} = require('../config.json');

// data 加密数据
// expiresIn 有效期（单位:s）
function create(data, expiresIn = 60 * 60 * 24 * 10) {
    let token = jwt.sign({
        data
    }, secret, {
        expiresIn
    });
    return token;
}

function verify(token) {
    let res;
    try {
        let result = jwt.verify(token, secret);
        console.log('token校验：', result)
        res = true;
    } catch (err) {
        res = false;
    }
    return res;
}

module.exports = {
    create,
    verify
}