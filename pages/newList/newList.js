var sever_data = require("../../data/newList-data.js")
Page({
  data: {
    name:"jxj"
    //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    //而这个动作A的执行，实在onLoad事件之后发生的
  },
  onLoad(options) {
    //页面初始化，options为页面跳转所带来的参数
    console.log("onload");
    // var newList = [{
    //     date: 'sep 18 2016',
    //     title: '正是虾肥蟹壮时',
    //     imgSrc: '/images/post/crab.png',
    //     avatar: '/images/avatar/1.png',
    //     content: '本文档将带你一步步创建完成一个微信小程序，并可以在手机上体验该小程序的实际效果。这个小程序的首页将会显示欢迎语以及当前用户的微信头像，点击头像',
    //     reading: '112',
    //     collection: '96',
    //     headImgSrc: '/images/post/crab.png',
    //     author: '李白',
    //     dataTime: '24time',
    //     detail: '并可以在手机上体验该小程序的实际效果。',
    //     postId: 1
    //   },
    //   {
    //     //按住alt + shift + f可以格式化代码
    //     date: 'sep 19 2016',
    //     title: '正是虾肥蟹壮时',
    //     imgSrc: '/images/post/bl.png',
    //     avatar: '/images/avatar/2.png',
    //     content: '本文档将带你一步步创建完成一个微信小程序，并可以在手机上体验该小程序的实际效果。这个小程序的首页将会显示欢迎语以及当前用户的微信头像，点击头像',
    //     reading: '112',
    //     collection: '96',
    //     headImgSrc: '/images/post/bl.png',
    //     author: '李白2',
    //     dataTime: '24time',
    //     detail: '并可以在手机上体验该小程序的实际效果。',
    //     postId: 2
    //   },
    //   {
    //     //按住alt + shift + f可以格式化代码
    //     date: 'sep 19 2016',
    //     title: '正是虾肥蟹壮时',
    //     imgSrc: '/images/post/cat.png',
    //     avatar: '/images/avatar/3.png',
    //     content: '本文档将带你一步步创建完成一个微信小程序，并可以在手机上体验该小程序的实际效果。这个小程序的首页将会显示欢迎语以及当前用户的微信头像，点击头像',
    //     reading: '112',
    //     collection: '96',
    //     headImgSrc: '/images/post/cat.png',
    //     author: '李白3',
    //     dataTime: '24time',
    //     detail: '并可以在手机上体验该小程序的实际效果。',
    //     postId: 3
    //   },
    //   {
    //     //按住alt + shift + f可以格式化代码
    //     date: 'sep 19 2016',
    //     title: '正是虾肥蟹壮时',
    //     imgSrc: '/images/post/vr.png',
    //     avatar: '/images/avatar/4.png',
    //     content: '本文档将带你一步步创建完成一个微信小程序，并可以在手机上体验该小程序的实际效果。这个小程序的首页将会显示欢迎语以及当前用户的微信头像，点击头像',
    //     reading: '112',
    //     collection: '96',
    //     headImgSrc: '/images/post/vr.png',
    //     author: '李白4',
    //     dataTime: '24time',
    //     detail: '并可以在手机上体验该小程序的实际效果。',
    //     postId: 4
    //   },
    // ]
    // this.data.newList = sever_data.newList;
    this.setData({ newList: sever_data.newList});//更新数据的方法
  },
  onReady() {
    //页面渲染完成
    console.log("onReady");
    console.log(this.data);
  },
  onShow() {
    //页面显示
    console.log("onShow");
  },
  onHide() {
    //页面隐藏
    console.log("onHide");
  },
  onUnload() {
    //页面关闭
    console.log("onUnload");
  },
  getChildTap(event){
    let postId = event.detail.postId;
    wx.navigateTo({
      url: './newList-detail/newList-detail?id='+postId
    })
  }
})