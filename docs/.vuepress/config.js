module.exports = {
  base: "/SvtccDocs/",
  title: '校园生活指南',
  description: '关于四川交通职业技术学院的校园生活指南',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新生', link: '/新生/新生入校' },
      { text: '公共链接', link: '/公共链接/' },
      { text: '校园服务', link: '/校园服务/' },
      { text: '校园生活', link: '/校园生活/' },
      { text: '游戏列表', link: '/游戏列表/' , items: [
        { text: '我的世界',items:[
          { text: 'TopSky空岛服', link: '/游戏列表/01/' },
          { text: 'Other', link: '/游戏列表/02/' }
        ]}
      ]},
    ],
  },
  // permalink: "/:year/:month/:day/:slug",  //永久链接
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/data.jpg', // 导航栏logo
  repo: 'http://github.com/SvtccDocs/', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

  // displayAllHeaders: true, // 默认值：false  设置为 true 来显示所有页面的标题链接：

  //   // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ],

  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      // options
    }]
  ]
}