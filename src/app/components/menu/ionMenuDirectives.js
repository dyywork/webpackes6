import '../../../mock/slide';
const ionMenu = ['$state','httpService','sessionService',($state,httpService,sessionService) => {
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
                                <i class="iconfont layui-icon" ng-class="item.icon"></i>
                                &nbsp;{{item.mainTitle}}
                              </a>
                              <dl class="layui-nav-child" ng-show="!attrs.isok">
                                  <dd ng-repeat="i in item.childTree" ng-class="{'layui-this': i.show }"
                                      ng-click="goTree(i,item);$event.stopPropagation()">
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
            let tabOk = sessionService.getSession('tabOk');
            let tabParentOk = sessionService.getSession('tabParentOk');
            data.data.forEach(item => {
              if (item.mainTitle === tabParentOk) {
                item.parentShow = true;
              } else {
                item.parentShow = false;
              }
              item.childTree.forEach(childItem=> {
                if (childItem.url === tabOk){
                  childItem.show = true;
                } else {
                  childItem.show = false;
                }
              });
            });
            scope.treeData = data.data;
            setTimeout(()=>{
              elements.render();
              form.render();
            },200);
          });
        scope.goTree = (res, item) => {
          sessionService.setSession('tabParentOk',item.mainTitle);
          sessionService.setSession('tabOk',res.url);
          $state.go(res.url);
        };
      }
    };
}];

export default ionMenu;