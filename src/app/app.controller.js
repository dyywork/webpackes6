import { assign } from 'lodash';

export default class AppController {
    /*@ngInject*/
    constructor($scope,httpService,$state) {
        assign(this,{$scope,httpService,$state});
        this.isOk = false;
        let layer = layui.layer;

        var u = navigator.userAgent, app = navigator.appVersion;  
        console.log(u.indexOf('iPhone')+'-'+ u.indexOf('Android'));
        console.log(u.includes("iPhone"));
        console.log(app);
        if (u.includes("iPhone") || u.includes("Android")) {
            console.log(layer);
        }
        if(document.body.clientWidth < 1000) {
            this.isOk = true;
            //$scope.$apply();
        } else {
            this.isOk = false;
            //$scope.$apply();
        }
        window.onresize = () => {
            if(document.body.clientWidth < 1000) {
                this.isOk = true;
                $scope.$apply();
            } else {
                this.isOk = false;
                $scope.$apply();
            }
        };
    }

    slideSwitch() {
        this.isOk = !this.isOk;
        console.log(this.isOk);
    }
    goOut() {
        this.$state.go('index');
    }
}
