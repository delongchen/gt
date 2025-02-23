// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    wx.login({
      success: res => {
        console.log(res.code)
      },
    })
  },
})