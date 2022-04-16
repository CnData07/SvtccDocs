module.exports = {
    base:"/SvtccDocs/",
    title: 'Hello VuePress',
    description: '关于四川交通职业技术学院的校园生活指南',
    
    themeConfig: {
      logo: 'img/data.jpg',
      lastUpdated: '更新时间', // string | boolean

      nav: [
        { text: 'Home', link: '/' },
        { text: 'qqcmd', link: '/qqcmd.html' },
        { text: 'External', link: 'https://google.com' },
        {
          text: '游戏列表',
          ariaLabel: 'games Menu',
          items: [
            { text: '我的世界服务器', link: '/games/mcserver' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        },
      ]

    }
  }