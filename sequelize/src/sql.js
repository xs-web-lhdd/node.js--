const Sequelize = require('sequelize')

const seq = new Sequelize('weibo-code','root','1234567890',{
    host: 'localhost',
    dialect: 'mysql'
})


// 测试连接

// seq.authenticate().then(() => {
//     console.log('mySQL数据库连接成功');
// }).catch(() => {
//     console.log('err');
// })

module.exports = seq