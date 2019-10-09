// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    let allData = [];
    let plData = require('../../data/playing.js').subjects;
    let newData = require('../../data/new.js').subjects;
    let lastData = require('../../data/last.js').subjects;
    let booksData = require('../../data/books.js').subjects;
    allData = allData.concat(plData, newData, lastData, booksData);
    allData.forEach(item => {
      if (item.id === id) {
        this.setData({
          item
        });
        wx.setNavigationBarTitle({ title: item.title});
        return false;
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.item)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})