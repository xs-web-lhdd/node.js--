const mongoose = require('mongoose')

// 链接地址错误会链接失败  playground是数据库名称
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // 数据库让带的参数
.then(() => { 
    console.log('链接成功') 
})
.catch((err) => {
    console.log(err, '数据库连接失败')
})

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})
// // 使用规则创建集合    
const Course = mongoose.model('Course', courseSchema)
// // find里面没有参数代表查询所有，有参数就查询参数对应的数据
// Course.find().then(result => console.log(result))
// // 通过_id查询文档
// Course.find({_id: '60f424eddfc0fe228470a19b'}).then(result => console.log(result))
// // 当查询单挑数据时返回的是一个数组，如果没有查询到就返回空数组
// // findOne() // 返回一条文档 默认当前集合中的第一条数据
// Course.findOne({name: 'CSS'}).then(result => { console.log(result) })
// // find返回的都是数组，然后里面有对象，findOne返回的是一个对象，不是数组的形式
// Course.find({name: 'CSS'}).then(result => { console.log(result) })
// 查询想要的字段
// Course.find().select('name author _id').then(result => { console.log(result) })
// 查询不想要的字段在前面加上 -
// Course.find().select('-name').then(result => { console.log(result) })
// 根据年龄大小进行升序排列
// Course.find().sort('age').then(result => { console.log(result) })
// 降序排列
// Course.find().sort('-age').then(result => { console.log(result) })

// 删除所有数据
Course.deleteMany({}).then(result => { console.log(result) })