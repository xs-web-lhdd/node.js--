// 引入数据库
const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567890',
    port: '3306',
    database: 'myblog'
})

// 开始连接
con.connect()

// 执行sql语句
// const sql = "update users set realname='张三2' where username='zhangsan'"
// const sql = 'select * from users;'
// const sql = "insert into blogs (title,content,createtime,author) values ('标题C','内容C','2021732','lisi')"
const sql = "select * from blogs"
con.query(sql, (err, result) => {
    if (err) {
        console.log(err);
        return 
    }
    console.log(result);
})

// 关闭连接
con.end()