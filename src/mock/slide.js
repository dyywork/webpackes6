import Mock from 'mockjs';

Mock.mock('http://dingyongya.club:3001/api/slide','get',(option) => {
  return {
    code: 200,
    data: [{
      parentShow: true,
      mainTitle: '首页',
      icon: 'icon-index',
      childTree: [
        {
          show: true,
          title: '首页',
          url: 'app.home'
        }
      ]
    },
    {
      parentShow: false,
      mainTitle: '表单',
      icon: 'icon-index',
      childTree: [
        {
          show: false,
          title: '表单',
          url: 'app.about'
        },
        {
          show: false,
          title: 'icon',
          url: 'app.person'
        }
      ]
    }]
  };
});