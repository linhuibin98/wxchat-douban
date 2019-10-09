import globalUrls from './urls.js';

const request = {
  // 影院热映
  movieShowing(success, count = 15) {
    wx.request({
      url: globalUrls.movieList + '?count=' + count,
      success(res) {
        if (res.statusCode === 200) {
          success(res);
        }
      }
    })
  },
  // 热门电影
  movieHot(success, count = 15) {
    wx.request({
      url: globalUrls.movieHot + '?count=' + count,
      success(res) {
        if (res.statusCode === 200) {
          success(res);
        }
      }
    })
  },
  // 即将上映的电影
  movieSoon(success, count = 15) {
    wx.request({
      url: globalUrls.movieSoon + '?count=' + count,
      success(res) {
        if (res.statusCode === 200) {
          success(res);
        }
      }
    })
  },
  // 热门剧集
  tvHot(success, count = 15) {
    wx.request({
      url: globalUrls.tvList + '?count=' + count,
      success(res) {
        if (res.statusCode === 200) {
          success(res);
        }
      }
    })
  },
  // 热门综艺
  showHot(success, count = 15) {
    wx.request({
      url: globalUrls.showList + '?count=' + count,
      success(res) {
        if (res.statusCode === 200) {
          success(res);
        }
      }
    })
  },
  // 热门图书
  bookHot(success, count = 15) {
    wx.request({
      url: globalUrls.bookHot + '?count=' + count,
      success(res) {
        if (res.statusCode === 200) {
          success(res);
        }
      }
    })
  },
  // 音乐热榜
  musicHot(success, count = 15) {
    wx.request({
      url: globalUrls.musicHot + '?count=' + count,
      success(res) {
        if (res.statusCode === 200) {
          success(res);
        }
      }
    })
  },
  // 目标电影详情
  itemDetail(success, type, id) {
    wx.request({
      url: globalUrls.itemDetail + type + '/' + id,
      success(res) {
        if (res.statusCode === 200) {
          success(res);
        }
      }
    })
  }
}

export default request;