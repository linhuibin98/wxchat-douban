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
    code: 0,
    page: 1,
    hasMore: false,
    countIndex: 10,
    isShow: false,
    val: ''
  },

  handleVal(event) {
    let val = event.detail;
    let data = this.data.allData;
    let countIndex = this.data.countIndex;
    if (val !== '') { // 事件触发,并且搜索值不为空, 显示加载动画
      this.setData({
        loading: true,
        page: 1
      });
      request.searchContent(res => { // 搜索请求
        if (typeof res === 'string') { // 请求是否错误 
          this.setData({
            msg: res,
            code: 1,
            loading: false,
            isShow: false
          });
        } else { // 请求成功
          let items = res.data.subjects;
          if (items.length === 0) { // 未搜索到结果, 显示文字提示
            this.setData({
              isEmpty: true,
              loading: false,
              isShow: false
            });
          } else { // 结果不为空, 保存数据，渲染到页面上
            if (items.length < countIndex) { // 是否能加载下一页, 默认请求数据count = 10
              this.setData({
                hasMore: false
              })
            } else {
              this.setData({
                hasMore: true
              })
            }
            this.setData({
              items,
              loading: false, // 搜索成功, 动画隐藏
              isEmpty: false,
              isShow: true,
              val
            });
          }
        }
      }, val);
    } else { // val 为空时，返回[]
      this.setData({
        items: [],
        isEmpty: false,
        loading: false,
        msg: '',
        isShow: false
      })
    }
  },

  loadMore() {
    let {
      val,
      page,
      countIndex
    } = this.data;
    request.searchContent(res => {
      let items = res.data.subjects;
      page = page + 1; // 请求page+1
      if (items.length < page * countIndex) { // 是否能加载下一页, 默认请求数据count = 10
        this.setData({
          hasMore: false,
          isShow: true,
        })
      } else {
        this.setData({
          hasMore: true,
          isShow: true
        })
      }
      this.setData({
        items,
        loading: false, // 搜索成功, 动画隐藏
        isEmpty: false,
        page,
        val
      });
    }, val, countIndex * (page +1));
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})