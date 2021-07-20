const mongoose = require('mongoose')

// 链接地址错误会链接失败
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // 数据库让带的参数
.then(() => { 
    console.log('链接成功') 
})
.catch((err) => {
    console.log(err, '数据库连接失败')
})