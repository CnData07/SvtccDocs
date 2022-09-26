import { defaultTheme } from '@vuepress/theme-default'

export default {
  base: "/SvtccDocs/",
  title: '校园生活指南',
  description: '关于四川交通职业技术学院的校园生活指南',




  theme: defaultTheme({
    // 在这里进行配置
    logo: '/img/data.jpg', // 导航栏logo

    sidebarDepth: 2,
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '新生入学',
        link: '/新生/'
      }
    ],

    sidebar: 'auto',


    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '新生', link: '/01.新生/新生入校' },
    //   { text: '校园服务', link: '/03.校园服务/' },
    //   { text: '校园生活', link: '/04.校园生活/' },
    //   { text: '游戏列表', link: '/05.游戏列表/' , items: [
    //     { text: '我的世界',items:[
    //       { text: 'TopSky空岛服', link: '/05.游戏列表/01/' },
    //       { text: 'Other', link: '/05.游戏列表/02/' }
    //     ]}
    //   ]},
    //   { text: 'QQ频道', link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=6jrMa&appChannel=share&businessType=9&from=246610&biz=ka'},
    // ],

    docsRepo: 'https://gitlab.com/CnData07/SvtccDocs',
    docsBranch: 'gh-pages',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',

    lastUpdated: true,
    lastUpdatedText: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    contributors: true,
    contributorsText: '贡献者',
    editLink: true,
  }),


  // permalink: "/:year/:month/:day/:slug",  //永久链接

  searchMaxSuggestions: 10, // 搜索结果显示最大数

  displayAllHeaders: true,
  // 默认值：false  设置为 true 来显示所有页面的标题链接：

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ],
}