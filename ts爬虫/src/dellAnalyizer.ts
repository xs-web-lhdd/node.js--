import cheerio from 'cheerio';
import fs from 'fs'

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

export default class Dell {
  // 存储到JSON文件中
  saveJsonContent(MsgResult: MsgResult, filePath: string) {
    let fileContent: Content = {}
    // 判断文件路径对应的文件是否存在
    if (fs.existsSync(filePath)) {
      try {
        // 使用JSON的格式转化时要记得用try catch语句，有时候会莫名其妙报错
        fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
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

  private publicAnalyze(html: string, filePath: string) {
    const MsgResult = this.getMsgInfo(html)
    const fileContent = this.saveJsonContent(MsgResult, filePath)
    return fileContent
  }
}