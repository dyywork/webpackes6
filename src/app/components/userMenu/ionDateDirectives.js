import IosSelect from '../../../assets/lib/iosSelect/iosSelect';

const iosDate = () => {
return  {
  restrict: 'AE',
  replace: true,
  require : '?ngModel',
  scope: {
    ngModel: '='
  },
  link: (scope, element, attrs,ngModel) => {
    var showDateDom = element;
    // 初始化时间
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDate = now.getDate();
    showDateDom.attr('data-year', nowYear);
    showDateDom.attr('data-month', nowMonth);
    showDateDom.attr('data-date', nowDate);
    // 数据初始化
    function formatYear (nowYear) {
      var arr = [];
      for (var i = nowYear - 5; i <= nowYear + 5; i++) {
        arr.push({
          id: i + '',
          values: i + '年',
          value:String(i).substring(2,4)+ '年',
          unit:'年'
        });
      }
      return arr;
    }
    function formatMonth () {
      var arr = [];
      for (var i = 1; i <= 12; i++) {
        if (i<10){
          arr.push({
            id:i + '',
            value:'0'+ i + '月',
            values:'0'+ i + ''
          });
        }else{
          arr.push({
            id: i + '',
            value: i + '月',
            values: i + ''
          });
        }
      }
      return arr;
    }
    function formatDate (count) {
      var arr = [];
      for (var i = 1; i <= count; i++) {
        if (i<10){
          arr.push({
            id:i + '',
            value:'0'+ i+ '日',
            values:'0'+ i+ ''
          });
        }else{
          arr.push({
            id: i + '',
            value: i+ '日',
            values: i+ ''
          });
        }
      }
      return arr;
    }
    var yearData = function(callback) {
      // settimeout只是模拟异步请求，真实情况可以去掉
      // setTimeout(function() {

      callback(formatYear(nowYear));
      // }, 2000)
    };
    var monthData = function (year, callback) {
      // settimeout只是模拟异步请求，真实情况可以去掉
      // setTimeout(function() {
      callback(formatMonth());
      // }, 2000);
    };
    var dateData = function (year, month, callback) {
      var month=Number(month);
      // settimeout只是模拟异步请求，真实情况可以去掉
      // setTimeout(function() {
      if (/^(1|3|5|7|8|10|12)$/.test(month)) {
        callback(formatDate(31));
      }
      else if (/^(4|6|9|11)$/.test(month)) {
        callback(formatDate(30));
      }
      else if (/^2$/.test(month)) {
        if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
          callback(formatDate(29));
        }
        else {
          callback(formatDate(28));
        }
      }
      else {
        throw new Error('month is illegal');
      }

    };
    element.on('click', function () {

      var oneLevelId = showDateDom.attr('data-year');
      var twoLevelId = showDateDom.attr('data-month');
      var threeLevelId = showDateDom.attr('data-date');
      var iosSelect = new IosSelect(3,
        [yearData, monthData, dateData],
        {
          title: '',
          container:"#"+attrs.iosDate,
          itemHeight: 35,
          oneLevelId: oneLevelId,
          twoLevelId: twoLevelId,
          threeLevelId: threeLevelId,
          itemShowCount:5,
          showLoading: true,
          callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
            showDateDom.attr('data-year', selectOneObj.id);
            showDateDom.attr('data-month', selectTwoObj.id);
            showDateDom.attr('data-date', selectThreeObj.id);
            showDateDom[0].value=selectOneObj.id+ '-' +selectTwoObj.values + '-' + selectThreeObj.values;
            scope.$apply(setViewValue);
          }
        });
    });
    // 模型值同步到视图上
    ngModel.$render = function() {
      element.val(ngModel.$viewValue || '');
    };

    // 监听元素上的事件
    element.on('blur keyup change', function() {
      scope.$apply(setViewValue);
    });

    setViewValue();
    // 更新模型上的视图值
    function setViewValue() {
      var val = element.val();
      ngModel.$setViewValue(val);
    }
  }
};
 };

export default iosDate;