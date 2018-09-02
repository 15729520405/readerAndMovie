Page({
  onTap(){
    // wx.navigateTo({
    //   url: '../newList/newList',
    // })
    wx.redirectTo({
      url: '../newList/newList',
      success(){},
      fail(){},
      complete(){}
    })
  },
  onTextTap(){
    console.log("onTextTap");
  },
  onUnload(){
    console.log("onUnload");
  },
  onHide(){
    console.log("onHide");
  }
}) 