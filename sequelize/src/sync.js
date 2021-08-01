const sql = require('./sql')

const { User } = require('./modle');
const seq = require('./sql');


seq.authenticate().then(() => {
    console.log('auth ok');
}).catch(() => {
    console.log('auth err');
})

// 执行同步
seq.sync({ force: false }).then(() => {
    console.log('同步成功');
    process.exit()
})