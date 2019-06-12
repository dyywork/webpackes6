import { assign } from 'lodash';

export default class HomeDetailController {
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
        this.layer.msg(111);
        this.img = [];
        
    }

    onAboutTap() {
        this.layer.msg(666);
    
        cordova.getAppVersion.getVersionNumber().then(function(res){
            this.layer.msg(res);
        });
        
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
