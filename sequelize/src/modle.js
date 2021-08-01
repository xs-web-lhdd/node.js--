const Sequelize = require('sequelize')

const sql = require('./sql')

// 创建User模型 --- 数据表名称是users --- 建表的node.js的实现
const User = sql.define('user', {
    // id 会自动创建，并设置为主键，自增
    userName: {
        type: Sequelize.STRING, // varchar(255)
        allowNull: false // 不允许为空
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nikename: {
        type: Sequelize.STRING
    }
    // 自动创建 createdAt 和 updatedAt
})

// 创建blog模型
const Blog = sql.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// 外键关联 --- 谁在前面就先查出谁
// 第一种 --- 先查出blog然后连带查出user
Blog.belongsTo(User, {
    // 创建外键 blog.userID --> User.id
    foreignKey: 'userID',
})
// 第二种 --- 先查出user然后连带查出blog
User.hasMany(Blog, {
    foreignKey: 'userID'
})



module.exports = {
    User,
    Blog
}