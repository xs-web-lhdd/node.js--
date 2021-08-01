const { Blog, User } = require('./modle')

!(async function () {

    // 创建用户
    const zhangsan = await User.create({
        userName: 'zhangsan',
        password: '1234',
        nikename: '张三'
    })
    console.log('zhangsan:', zhangsan.dataValues);
    const zhangsanId = zhangsan.dataValues.id

    const lisi = await User.create({
        userName: 'lisi',
        password: '1234',
        nikename: '李四'
    })
    console.log('lisi:', lisi.dataValues);
    const lisiId = lisi.dataValues.id

    // 创建博客
    const blog1 = await Blog.create({
        title: '标题1',
        content: '内容1',
        userID: zhangsanId
    })

    const blog2 = await Blog.create({
        title: '标题2',
        content: '内容2',
        userID: lisiId
    })

})()