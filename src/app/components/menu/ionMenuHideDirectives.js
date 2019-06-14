import '../../../mock/slide';
const ionMenu = ['$state','httpService',($state,httpService) => {
    return {
      restrict: 'AEMC',
      replace: true,
      template: `<div class="layui-side">
                  <div class="layui-side-scroll">
                  <div class="logo_img"><img src="../../assets/img/img_logo@3x.png"/></div>
                      <ul class="layui-nav layui-nav-tree">                      
                          <li class="layui-nav-item" ng-repeat="item in treeData"
                              ng-class="{'layui-nav-itemed': item.parentShow}">
                              <a class="" href="javascript:;" ng-click="treeHeader(item)" ng-mouseenter="enterUp($event,item)" ng-mouseleave="leaveUp(e,item)">
                                <i class="iconfont layui-icon" ng-class="item.icon"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              `,
      link: function (scope, element, attrs) {
        scope.enterUp = (e,item) => {
          scope.tips = layer.tips(item.mainTitle,e.target);
        };
        scope.leaveUp = (e,item) => {
          layer.close(scope.tips);
        };
        scope.treeHeader = () => {
          layer.close(scope.tips);
          scope.$parent.vm.isOk = false;
        };
      }
    };
}];

export default ionMenu;