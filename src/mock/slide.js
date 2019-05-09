import Mock from 'mockjs';

Mock.mock('http://dingyongya.club:3001/api/slide','get',(option) => {
  return {
    code: 200,
    data: [{
      parentShow: true,
      mainTitle: '首页',
      icon: 'icon-index',
      id: 1,
      childTree: [
        {
          show: true,
          title: 'shouye'
        }
      ]
    }]
  };
});