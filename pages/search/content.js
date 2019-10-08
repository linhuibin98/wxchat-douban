function searchContent(val, data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (val === '') {
      return [];
    }
    let reg = new RegExp(val, 'g');
    if (reg.test(data[i].title)) {
      if (data[i].genres) {
        data[i].genresStr = ''
        data[i].genres.forEach(item => {
          data[i].genresStr = data[i].genresStr + item + ' ';
        })
      }
      if (data[i].casts) {
        data[i].castsStr = '';
        data[i].casts.forEach(item => {
          data[i].castsStr = data[i].castsStr + item.name + ' ';
        });
      }
      res.push(data[i]);
    }
  }
  return res;
}

export default searchContent;