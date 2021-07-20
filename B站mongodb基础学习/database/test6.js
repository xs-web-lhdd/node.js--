const mongoose = require('mongoose')

// 链接地址错误会链接失败
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // 数据库让带的参数
.then(() => { 
    console.log('链接成功') 
})
.catch((err) => {
    console.log(err, '数据库连接失败')
})

// 用户集合：
const User = mongoose.model('User', new mongoose.Schema({
    name: {type: String}
}))
// 文章集合：
const Post = mongoose.model('Post', new mongoose.Schema({
    title: {type: String},
    // 使用ID将作者集合和文章集合进行关联
    // 用户下划线id的类型有特殊写法：mongoose.Schema.Types.ObjectId
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}))

// 创建用户
User.create({name: 'itheima'}).then(result => console.log(result))
// 创建文章
Post.create({title: '123', author: "60f4dbf28e1ec62bb87e0e2f"}).then(result => console.log(result))


// // 联合查询：
Post.find()
    .populate('author')
    .then((err, result) => console.log(result))