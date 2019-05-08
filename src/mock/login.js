import Mock from 'mockjs';

Mock.mock('http://dingyongya.club:3001/login','post',(option) => {
  const res = JSON.parse(option.body);
  if (res.user === 'admin' && res.password === 'admin') {
    return {
      code: 200,
      data: '登录成功'
    };
  } else {
    return {
      code: 500,
      data: '用户名密码错误！'
    };
  }
  
});