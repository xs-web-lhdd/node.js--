const { Blog, User } = require('./modle')

!(async function () {

    // 查定一条语句
    // const zhangsan = await User.findOne({
    //     where: {
    //         userName: 'zhangsan'
    //     }
    // })
    // console.log('zhangsan: ',zhangsan);

    // const zhangsan = await User.findOne({
    //     attributes: ['userName', 'nikename'],
    //     where: {
    //         userName: 'zhangsan'
    //     }
    // })
    // console.log(zhangsan.dataValues);

    // 查询一个列表
    // const zhnagsanBlogList = await Blog.findAll({
    //     where: {
    //         userID: '2'
    //     },
    //     order: [
    //         ['id', 'desc']
    //     ]
    // })
    // console.log(zhnagsanBlogList.map(item => item.dataValues));


    // 分页
    // const list = await Blog.findAll({
        // limit: 2,
        // offset: 0,
        // order: [
        //     ['id', 'desc']
        // ]
    // })
    // console.log(list.map(item => item.dataValues));

    // 查询总数
    // const blogListAll = await Blog.findAndCountAll({
    //     limit: 2,
    //     offset: 0,
    //     order: [
    //         ['id', 'desc']
    //     ]
    // })
    // console.log(blogListAll.count,blogListAll.rows.map(item => item.dataValues));

    // 连表查询

})()
