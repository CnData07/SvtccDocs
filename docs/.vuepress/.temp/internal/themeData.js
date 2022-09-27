export const themeData = JSON.parse("{\"logo\":\"/img/data.jpg\",\"sidebarDepth\":1,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"新生\",\"link\":\"/freshmen/\"},{\"text\":\"校园生活\",\"link\":\"/campus/\"},{\"text\":\"游戏列表\",\"link\":\"/05.游戏列表/\"},{\"text\":\"QQ频道\",\"link\":\"https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=6jrMa&appChannel=share&businessType=9&from=246610&biz=ka\"}],\"docsRepo\":\"https://gitlab.com/CnData07/SvtccDocs\",\"docsBranch\":\"gh-pages\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/-/edit/:branch/:path\",\"editLink\":true,\"lastUpdated\":true,\"contributors\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\",\"如果你是通过正常途径进入了这个页面,请联系编辑者CnData07:3334318317(QQ)\"],\"backToHome\":\"返回首页\",\"sidebar\":{\"/freshmen/\":[{\"collapsible\":false,\"text\":\"新生报道\",\"children\":[\"/freshmen/index.md\",\"/freshmen/new.md\"]}],\"/campus/\":[{\"collapsible\":true,\"text\":\"公共链接\",\"children\":[\"/campus/index.md\",\"/campus/xxxUnion.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
