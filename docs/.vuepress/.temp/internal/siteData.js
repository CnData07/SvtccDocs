export const siteData = JSON.parse("{\"base\":\"/SvtccDocs/\",\"lang\":\"en-US\",\"title\":\"校园生活指南\",\"description\":\"关于四川交通职业技术学院的校园生活指南\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
