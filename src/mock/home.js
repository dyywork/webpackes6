import Mock from 'mockjs';


Mock.mock('http://dingyongya.club:3001/project/page','post',(option) => {
  const _req = JSON.parse(option.body);
  let i = 0,
    _data = [],
    page = _req.page, // 页数
    limit = _req.limit, //返回的条数
    len = (100 - limit * (page - 1)) < limit ? (100 - limit * (page - 1)) : limit;
  for (i; i < len; i++) {
    _data.push(
      {
        "id": (page - 1) * limit + (i + 1),
        "urlImg": 
          'https://goss.veer.com/creative/vcg/veer/612/veer-134669323.jpg',
         
        
      }
    );
  }
    return {
      "count": 100,
      "data":{
        content: _data,
        "totalElements": 100,
        "totalPages": 100/limit,
        success: true
      },
      "msg": "请求数据成功"
    };
  
});