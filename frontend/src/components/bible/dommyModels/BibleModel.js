export default {
  data: [
    { id: 1, bibleName: '창세기', contentsNum: '5' },
    { id: 2, bibleName: '출애굽기', contentsNum: '7' },
    { id: 3, bibleName: '레위기', contentsNum: '2' },
    { id: 4, bibleName: '민수기', contentsNum: '3' },
    { id: 5, bibleName: '신명기', contentsNum: '7' },
    { id: 6, bibleName: '여호수아', contentsNum: '15' },
    { id: 7, bibleName: '사사기', contentsNum: '9' },
    { id: 8, bibleName: '룻기', contentsNum: '3' },
    { id: 9, bibleName: '사무엘상', contentsNum: '11' },
    { id: 10, bibleName: '사무엘하', contentsNum: '13' },
    { id: 11, bibleName: '열왕기상', contentsNum: '5' },
    { id: 12, bibleName: '열왕기하', contentsNum: '6' },
    { id: 13, bibleName: '역대상', contentsNum: '4' },
    { id: 14, bibleName: '역대하', contentsNum: '7' },
    { id: 15, bibleName: '에스라', contentsNum: '1' },
    { id: 16, bibleName: '느혜미야', contentsNum: '8' },
    { id: 17, bibleName: '에스더', contentsNum: '3' },
    { id: 18, bibleName: '욥기', contentsNum: '6' },
    { id: 19, bibleName: '시편', contentsNum: '21' },
    { id: 20, bibleName: '잠언', contentsNum: '17' }
  ],

  list () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 200)
    })
  }
}
