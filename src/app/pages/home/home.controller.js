import { assign } from 'lodash';
import '../../../mock/home';
export default class HomeController {
    /*@ngInject*/
    constructor($state, userService, httpService,$cordovaAppVersion) {
       
        assign(this, { $state, userService, httpService,$cordovaAppVersion });
        
        this.text = 'Welcome to the Ionic Seed';
        this.user = {
            name: 'Dave Ackerman',
            email: 'dave@dude.com'
        };
        this.ionDate = '';
        // make an API call to get our mock users
        this.userService.getUsers().then(response => {
            this.users = response.data.users;
        },
        (error) => {
            this.error = 'something went wrong';
        });
        this.layer = layui.layer;
        
        // this.layer.msg(111);
        this.img = [];
        httpService.httpPost('project/page','POST',{
            "commodityTypeId": "",
            "limit": 10,
            "page": 2
          }).then(res => {
              const { data } = res;
              console.log(data);
             
          });
          setTimeout(()=> {
            this.ngInit();
          },200);
      
    }
    ngInit() {
        var table = layui.table,$ = layui.jquery;
    
  //方法级渲染
        table.render({
            elem: '#LAY_table_user'
            ,url: this.httpService.httpUrl() + 'project/page'
            ,method: 'POST'
            ,where: {
                "commodityTypeId": ""
            }
            ,contentType: 'application/json'
            ,cols: [[
            {field:'id', title: '用户名',width:100}
            ,{field:'urlImg', title: '地址'}
            ]]
            ,height: 400
            ,page: true
            ,parseData: function(res){ //res 即为原始返回的数据
                return {
                    "success": res.data.success, //解析接口状态
                    "msg": res.resultMessage, //解析提示文本
                    "count": res.data.totalElements, //解析数据长度
                    "data": res.data.content //解析数据列表
                };
            }
            ,response: {
                statusName: 'success' //规定数据状态的字段名称，默认：code
                ,statusCode: true //规定成功的状态码，默认：0
            }
            ,done: ()=> {
                $('#LAY_table_user').resize();
            }
        });
        
    }
    onAboutTap() {
        this.$state.go('app.homeDetail');
        /* this.layer.msg(666);
    
        cordova.getAppVersion.getVersionNumber().then(function(res){
            this.layer.msg(res);
        });
         */
       //  console.log(ngCordova);
        // this.$cordovaAppVersion.getAppName( res=> {
        //     console.log(res);
        // });
        // var options = {
        //     maximumImagesCount: 2,
        //     width: 600,
        //     height: 500,
        //     quality: 100
        //   };
        //   this.layer.msg(22);
        //   this.layer.msg(JSON.stringify(this.$cordovaImagePicker));
        //   this.$cordovaImagePicker.getPictures(options).then(function (results) {
        //     // $scope.files = _.concat($scope.files, results);
        //     this.img = this.img.concat(results);
        //   }, function (error) {
        //     console.log(error);
        //   });
       //  this.$state.go('app.about');
    }

    test() {
        console.log(JSON.stringify(this.$cordovaAppVersion));
        this.$cordovaAppVersion.getAppName().then(function (version) {
            this.layer.msg(version);
        });
    //    this.httpService.httpGet('api/users/login', { userName: 'admin', password: '123456' }).then(res => {
    //        this.layer.msg(JSON.stringify(res));
    //        console.log(res);
    //    });
    }

}
