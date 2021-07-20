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

// 利用creat进行插入文档 （大家会发现这是异步操作）
// Course.create({name: 'JavaScript', author: '刘豪讲师', isPublished: true}, (err, result) => {
//     // 错误对象
//     console.log(err);
//     // 当前插入的文档
//     console.log(result);
// })

// 因为是异步所以也支持Promise对象的方式
Course.create({name: 'CSS', author: '刘豪讲师', isPublished: false})
      .then(result => {
          console.log(result);
      })