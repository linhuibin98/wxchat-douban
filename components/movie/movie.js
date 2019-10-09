import request from '../../api/request.js';
// components/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '影院热映'
    },
    type: {
      type: String,
      value: 'movieShowing'
    },
    count: {
      type: Number,
      value: 8
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    movies: []
  },

  lifetimes: {
    attached() {
      // 根据type,获取接口数据
      let {count, type} = this.properties;
      request[type](res => {
        let movies = res.data.subject_collection_items;
        this.setData({
          movies
        })
      }, count);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})