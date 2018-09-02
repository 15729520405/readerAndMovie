var server = require("../../../data/newList-data.js")
Page({
  data: {
  },
  onLoad(option){
    let postId = option.id;
    let newListItem = server.newList[postId-1];
    this.setData({newListItem});
  }
})