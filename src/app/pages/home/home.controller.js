import { assign } from 'lodash';
import '../../../mock/home';
import echarts from 'echarts/lib/echarts';
export default class HomeController {
    /*@ngInject*/
    constructor($state, userService, httpService, $cordovaAppVersion) {
        assign(this, { $state, userService, httpService, $cordovaAppVersion });
        this.user = {
            name: 'Dave Ackerman',
            email: 'dave@dude.com'
        };
        setTimeout(() => {
            this.ngInit();
        }, 200);
        // this.ngInit();
        console.log(echarts);
    }
    ngInit() {
        var table = layui.table, $ = layui.jquery, form = layui.form;
        //方法级渲染
        table.render({
            elem: '#LAY_table_user'
            , url: this.httpService.httpUrl() + 'project/page'
            , method: 'POST'
            , where: {
                "commodityTypeId": ""
            }
            , contentType: 'application/json'
            , cols: [[
                { field: 'id', title: '用户名ID', width: 100 }
                , { field: 'urlImg', title: '地址' }
                , { field: 'sex', title: '性别', width: 85, templet: '#switchTpl', unresize: true }
                , { fixed: 'right', width: 165, align: 'center', toolbar: '#barDemo' }
            ]]
            , height: 481
            , page: true
            , parseData: function (res) { //res 即为原始返回的数据
                console.log(res);
                return {
                    "success": res.data.success, //解析接口状态
                    "msg": res.resultMessage, //解析提示文本
                    "count": res.data.totalElements, //解析数据长度
                    "data": res.data.content //解析数据列表
                };
            }
            , response: {
                statusName: 'success' //规定数据状态的字段名称，默认：code
                , statusCode: true //规定成功的状态码，默认：0
            }
            , done: () => {
                $('#LAY_table_user').resize();
            }
        });

        table.on('tool(user)', function (obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            var data = obj.data //获得当前行数据
                , layEvent = obj.event; //获得 lay-event 对应的值
            if (layEvent === 'detail') {
                layer.msg('查看操作');
            } else if (layEvent === 'del') {
                layer.confirm('真的删除行么', function (index) {
                    obj.del(); //删除对应行（tr）的DOM结构
                    layer.close(index);
                    //向服务端发送删除指令
                });
            } else if (layEvent === 'edit') {
                if ($('body').children('#addUser')[0]){
                    $('body').children('#addUser')[0].remove();
                }
                $('body').append($('#addUser'));// 重点，遮罩层在弹窗之下
                console.log($('body').children('#addUser').length);
                layer.open({
                    type: 1 //此处以iframe举例
                    , title: '编辑商品类型'
                    , area: ['390px', '400px']
                    , offset: 'auto'
                    , content: $('#addUser')
                    // ,shade: 0
                    , btn: ['确定', '取消'] //只是为了演示
                    , yes: function () {
                        form.on('submit(dome)', (data) => {
                            console.log(data);
                            layer.msg('表单数据' + JSON.stringify(data.field));
                            return false;
                        });
                        $('.layer-confirm').click();
                    }
                    , btn2: function () {
                        layer.closeAll();
                    }
                    , success: function (layero) {
                        form.val("radioCustomer", {
                            "id": data.id // "name": "value"
                            , "sex": data.sex
                            , "urlImg": data.urlImg
                        });
                        form.render();
                    }
                });
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
