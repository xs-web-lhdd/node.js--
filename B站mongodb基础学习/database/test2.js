const mongoose = require('mongoose')

// 链接地址错误会链接失败  playground是数据库名称
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // 数据库让带的参数
.then(() => { 
    console.log('链接成功') 
})
.catch((err) => {
    console.log(err, '数据库连接失败')
})

// 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})
// 使用规则创建集合           第一个参数：集合名称，第二个参数：规则     返回的Course是一个对象
const Course = mongoose.model('Course', courseSchema) // courses

// 实例对象
const course = new Course({
    name: 'Node.js基础',
    author: '刘豪讲师',
    isPublished: true
})
// 保存数据 --- 也就是将上面数据插入到数据库
course.save()