import Mock from 'mockjs';

Mock.mock('http://dingyongya.club:3001/api/slide','get',(option) => {
  return {
    code: 200,
    data: [{
      parentShow: true,
      mainTitle: '数据管理',
      icon: 'layui-icon-table',
      childTree: [
        {
          show: true,
          title: '商品类型配置',
          url: 'app.home'
        },
        {
          show: false,
          title: '支付方式配置',
          url: 'app.about'
        }
      ]
    },
    {
      parentShow: false,
      mainTitle: '账号管理',
      icon: 'layui-icon-set',
      childTree: [
        {
          show: false,
          title: '中台账号管理',
          url: 'app.person'
        }
      ]
    }]
  };
});