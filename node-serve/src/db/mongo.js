const {
    MongoClient
} = require('mongodb');
const {
    DBurl,
    DBName
} = require('../config.json');

// 连接MongoDB
async function connect() {
    let result;
    try {
        let client = await MongoClient.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(DBName);
        result = {
            client,
            db
        }
    } catch (err) {
        result = err
    }
    return result
}

// 增
// {String} colName
// {Array} data 要添加的数据
async function create(colName, data) {
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colName);
    let result = await col.insertMany(data);
    client.close();
    return result
}

// 删
// {String} colName
// {Object} query
async function remove(colName, query) {
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colName);
    let result = await col.deleteMany(query);
    client.close();
    return result;
}

// 改
// {String} colName
// {Object} query
// {Object} data 需要修改的数据
async function update(colName, query, data) {
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colName);
    let result = await col.updateMany(query, data);
    client.close();
    return result;
}

// 查
// {String} colName  集合名称
// {Object} query    查询条件
async function find(colName, query = {}) {
    let {
        db,
        client
    } = await connect();

    // 获取集合
    let col = db.collection(colName);
    let result = await col.find(query).toArray();
    client.close();
    return result;
}

module.exports = {
    find,
    create,
    remove,
    update
}