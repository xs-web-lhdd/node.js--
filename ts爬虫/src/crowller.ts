// TS 直接引用 JS 会报错，需要引入类型定义文件 .d.ts 充当翻译作用
import superagent from 'superagent';
// import cheerio from 'cheerio';
// 判断文件是否存在
import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio';
import dellAnalyizer from './dellAnalyizer'

interface Msg {
  title: string,
  imgUrl: string | undefined
}

interface MsgResult {
  time: number,
  data: Msg[]
}

interface Content{
  [propName: number]: Msg[]
}

class Crowller {
  // 爬取的网页地址
  private url = 'http://www.dell-lee.com/'
  private img = 'http://www.dell-lee.com'
  private filePath = path.resolve(__dirname, '../data/data.json')

  // 存储到JSON文件中
  saveJsonContent(MsgResult: MsgResult) {
    let fileContent: Content = {}
    // 判断文件路径对应的文件是否存在
    if (fs.existsSync(this.filePath)) {
      try {
        // 使用JSON的格式转化时要记得用try catch语句，有时候会莫名其妙报错
        fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
      } catch (ex) {}
    }
    fileContent[MsgResult.time] = MsgResult.data
    return fileContent
  }

  private getMsgInfo(html: string) {
    let MsgArr: Msg[] = []
    const $ = cheerio.load(html);
    const CourseItems = $('.course-item')
    CourseItems.map((index, element) => {
      const descs = $(element).find('.course-desc')
      const imgs = $(element).find('.course-img')
      const title = descs.text()
      const imgUrl = imgs.eq(0).attr("src")
      MsgArr.push({title,  imgUrl})
    })
    const result = {
      time: Date.now(),
      data: MsgArr
    }
    return result
  }

  
  // 获取html
  async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  writeFile(fileContent: string) {
    fs.writeFileSync(this.filePath, fileContent)
  }

  async SpilderBugProcess() {
    // 获取html内容
    const html = await this.getRawHtml()
    const MsgResult = this.getMsgInfo(html)
    const fileContent = this.saveJsonContent(MsgResult)    
    this.writeFile(JSON.stringify(fileContent))
  }

  constructor() {
    this.SpilderBugProcess()
  }
}

const crowller = new Crowller()