// pages/search/search.js
import request from '../../api/request.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    tips: '请稍后',
    show: true,
    animated: true,
    loading: false,
    isEmpty: false,
    msg: '',
    code: 0
  },

  handleVal(event) {
    let val = event.detail;
    let data = this.data.allData;
    if (val !== '') { // 事件触发,并且搜索值不为空, 显示加载动画
      this.setData({
        loading: true
      });
      request.searchContent(res => {
        if (typeof res === 'string') {
          this.setData({
            msg: res,
            code: 1,
            loading: false
          });
        }
        else {
          let items = res.data.subjects;
          if (items.length === 0) {
            this.setData({
              isEmpty: true,
              loading: false
            });
          } else {
            this.setData({
              items,
              loading: false,  // 搜索成功, 动画隐藏
              isEmpty: false
            });
          }
        }
      }, val);
    } else { // val 为空时，返回[]
      this.setData({
        items: [],
        isEmpty: false,
        loading: false,
        msg: ''
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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