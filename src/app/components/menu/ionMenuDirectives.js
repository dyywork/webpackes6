import '../../../mock/slide';
const ionMenu = ['$state','httpService',($state,httpService) => {
    return {
      restrict: 'AEMC',
      replace: true,
      template: `<div class="layui-side">
                  <div class="layui-side-scroll">
                  <div class="logo"><img src="../../assets/img/img_logo@3x.png"/><b style="padding-left:10px;">layuiAdminSPA</b></div>
                      <ul class="layui-nav layui-nav-tree">                      
                          <li class="layui-nav-item" ng-repeat="item in treeData"
                              ng-class="{'layui-nav-itemed': item.parentShow}">
                              <a class="" href="javascript:;" ng-click="treeHeader(item)">
                                <i class="iconfont" ng-class="item.icon"></i>
                                &nbsp;{{item.mainTitle}}
                              </a>
                              <dl class="layui-nav-child" ng-show="!attrs.isok">
                                  <dd ng-repeat="i in item.childTree" ng-class="{'layui-this': i.show }"
                                      ng-click="goTree(i);$event.stopPropagation()">
                                      <a href="javascript:;" style="padding-left: 40px;">{{i.title}}</a></dd>
                              </dl>
                          </li>
                      </ul>
                  </div>
              </div>
              `,
      link: function (scope, element, attrs) {
        let elements = layui.element,
          form = layui.form;
          httpService.httpGet('api/slide',{}).then(res => {
            const {data} = res;
            scope.treeData = data.data;
            setTimeout(()=>{
              elements.render();
              form.render();
            },200);
            console.log(res);
          });
        scope.gettext = function() {
          console.log(1);
        };
        scope.goTree = (res) => {
          $state.go(res.url);
        };
      }
    };
}];

export default ionMenu;