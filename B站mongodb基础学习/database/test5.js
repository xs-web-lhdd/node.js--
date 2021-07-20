const mongoose = require('mongoose')

// 链接地址错误会链接失败
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // 数据库让带的参数
.then(() => { 
    console.log('链接成功') 
})
.catch((err) => {
    console.log(err, '数据库连接失败')
})

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, '文章标题未传'], // 设置为必传
        // minlength: [2, '文章长度不能小于2'],
        // maxlength: [5, '文章长度不能大于5'],
        trim: true
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    publishDate:{
        type: Date,
        default: Date.now()
    },
    category:{
        type: String,
        // 枚举
        enum: {
            values: ['html', 'css', 'javascript', 'node.js'],
            message: '分类名称要在一定的范围内才可以'
        }
    },
    author:{
        type: String,
        validate: {
            validator: v => {
                // 返回布尔值，返回true代表验证成功，返回false验证失败
                // v 是要进行验证的值
                return v && v.length > 4
            },
            // message 是自定义错误信息
            message: '传入的数据不满足自定义规则'
        }
    }

})

const Post = mongoose.model('Post', postSchema)

Post.create({title: 'aaa', age: 60, category: 'java', author: 'bd'})
    .then(result => console.log(result))
    .catch(error => {
        // 获取错误信息对象
        const err = error.errors
        // 循环错误信息对象
        for (var attr in err) {
            // 打印错误信息
            console.log(err[attr]['message'])
        } 
    })
