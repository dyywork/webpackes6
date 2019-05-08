import { assign } from 'lodash';
import {CanvasParticle} from '../../../assets/lib/js/canvas-particle';
import '../../../mock/login';

export default class SplashController {
    /*@ngInject*/
    constructor($scope, $timeout, $state, httpService) {
        assign(this, {$scope, $timeout, $state, httpService});
        let form = layui.form,
        layer = layui.layer;
        form.render();
        var config = {
            vx: 4,//点x轴速度,正为右，负为左
            vy:  4,//点y轴速度
            height: 2,//点高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 100,//点个数
            color: "121, 162, 185",//点颜色
            stroke: "130,255,255",//线条颜色
            dist: 6000,//点吸附距离
            e_dist: 20000,//鼠标吸附加速距离
            max_conn: 10//点到点最大连接数
          };
          //调用
          CanvasParticle(config);
          this.user = '';
          this.password = '';
    }
    login() {
        this.httpService.httpPost('login','post',{user: this.user,password: this.password}).then(res => {
            const { data } = res;
            if (data.code === 200) {
                this.$state.go("app.home");
            } else {
                layer.msg(data.data);
            }
            console.log(res);
        });
        //
    }


}
