export const themeData = JSON.parse("{\"logo\":\"/img/data.jpg\",\"sidebarDepth\":2,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"新生入学\",\"link\":\"/新生/\"}],\"sidebar\":\"auto\",\"docsRepo\":\"https://gitlab.com/CnData07/SvtccDocs\",\"docsBranch\":\"gh-pages\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/-/edit/:branch/:path\",\"lastUpdated\":true,\"lastUpdatedText\":\"上次更新\",\"contributors\":true,\"contributorsText\":\"贡献者\",\"editLink\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLinkText\":\"Edit this page\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
