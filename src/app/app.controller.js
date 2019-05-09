import { assign } from 'lodash';

export default class AppController {
    /*@ngInject*/
    constructor($scope) {
        assign(this,{$scope});
        this.isOk = false;
        var u = navigator.userAgent, app = navigator.appVersion;  
        console.log(u.indexOf('iPhone')+'-'+ u.indexOf('Android'));
        console.log(app);
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

}
