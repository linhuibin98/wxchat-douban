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
      value: 'last'
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
      var movies = require(`../../data/${ this.properties.type }.js`);
      this.setData({
        movies: movies.subjects
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})