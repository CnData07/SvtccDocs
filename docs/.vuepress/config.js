module.exports = {
  base: "/SvtccDocs/",
  title: '校园生活指南',
  description: '关于四川交通职业技术学院的校园生活指南',
  theme: 'vdoing',

  themeConfig: {
    logo: '/img/data.jpg', // 导航栏logo
    displayAllHeaders: true, // 默认值：false

    sidebar: {
      '/01.新生/': [
        '新生入校'
      ],
      '/02.公共链接/': [
        ''
      ],
      '/03.校园服务/': [
        ''
      ],
      '/04.校园生活/': [
        '',
        'op1'
      ],
      '/05.游戏列表/': [
        '01',  /* /foo/one.html */
        '02'   /* /foo/two.html */
      ]
    },
    // sidebar: 'auto',


    nav: [
      { text: '首页', link: '/' },
      { text: '新生', link: '/01.新生/新生入校' },
      { text: '校园服务', link: '/03.校园服务/' },
      { text: '校园生活', link: '/04.校园生活/' },
      { text: '游戏列表', link: '/05.游戏列表/' , items: [
        { text: '我的世界',items:[
          { text: 'TopSky空岛服', link: '/05.游戏列表/01/' },
          { text: 'Other', link: '/05.游戏列表/02/' }
        ]}
      ]},
      { text: 'QQ频道', link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=6jrMa&appChannel=share&businessType=9&from=246610&biz=ka'},
    ],
  },
  // permalink: "/:year/:month/:day/:slug",  //永久链接

  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

  // displayAllHeaders: true, 
  // 默认值：false  设置为 true 来显示所有页面的标题链接：

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ],
}