const http = require('http')
const mongoose = require('mongoose')
const url = require('url')

// 连接数据库
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // 数据库让带的参数
.then(() => { 
    console.log('链接成功') 
})
.catch((err) => {
    console.log(err, '数据库连接失败')
})

// 创建用户集合
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: String,
        min: 18,
        max: 80
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    hobbies: [ String ]
})

// 创建集合
const User = mongoose.model('User', UserSchema)


// 创建服务器
const app = http.createServer()

// 为服务器对象添加请求事件
app.on('request', async (req, res) => {
    // 请求方式
    const method = req.method
    res.end(method)
    const pathname = url.split('?')[0] 
    if (method === 'GET') {
        // 呈现用户列表
        if (pathname === '/list') {
            let list = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h6>
                        <a href="add.html" class="btn btn-primary">添加用户</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名</td>
                            <td>年龄</td>
                            <td>爱好</td>
                            <td>邮箱</td>
                            <td>操作</td>
                        </tr>
                        <tr>
                            <td>张三</td>
                            <td>20</td>
                            <td>
                                <span>抽烟</span>
                                <span>喝酒</span>
                                <span>烫头</span>
                            </td>
                            <td>zhangsan@itcast.cn</td>
                            <td>
                                <a href="" class="btn btn-danger btn-xs">删除</a>
                                <a href="" class="btn btn-success btn-xs">修改</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </body>
            </html>
            `
            res.end(list)
        }   
    } else if (method === 'POST') {

    }
    res.end('ok')
})


// 监听端口
app.listen(3000)