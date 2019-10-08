// pages/search/search.js
import searchContent from 'content';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    allData: [],
    items: []
  },

  handleVal(event) {
    let val = event.detail;
    let data = this.data.allData
    let res = searchContent(val, data);
    this.setData({
      items: res
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let allData = [];
    let plData = require('../../data/playing.js').subjects;
    let newData = require('../../data/new.js').subjects;
    let lastData = require('../../data/last.js').subjects;
    let booksData = require('../../data/books.js').subjects;
    allData = allData.concat(plData, newData, lastData, booksData);
    console.log(allData);
    this.setData({
      allData
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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