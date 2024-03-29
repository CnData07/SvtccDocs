import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default {
  base: "/SvtccDocs/",
  title: '校园生活指南',
  description: '关于四川交通职业技术学院的校园生活指南',


  plugins: [
    backToTopPlugin(),
  ],


  theme: defaultTheme({
    // 在这里进行配置
    logo: '/img/data.jpg', // 导航栏logo

    sidebarDepth: 1,
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '新生',
        link: '/freshmen/'
      },
      { text: '校园生活', link: '/campus/' },
      { text: '游戏列表', link: '/05.游戏列表/' },
      { text: 'QQ频道', link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=6jrMa&appChannel=share&businessType=9&from=246610&biz=ka'}
    ],

    docsRepo: 'https://gitlab.com/CnData07/SvtccDocs',
    docsBranch: 'gh-pages',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',

    editLink: true,
    lastUpdated: true,
    contributors: true,


    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',

    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
      '如果你是通过正常途径进入了这个页面,请联系编辑者CnData07:3334318317(QQ)',
    ],
    backToHome: '返回首页',

    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/freshmen/': [
        {
          collapsible: false,
          text: '新生报道',
          children: [
            '/freshmen/index.md',
            '/freshmen/new.md',
          ],
        },
      ],
      '/campus/':[
        {
          collapsible:true,
          text: '公共链接',
          children:[
            '/campus/index.md',
            '/campus/xxxUnion.md',
          ],
        },
      ]
    },



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