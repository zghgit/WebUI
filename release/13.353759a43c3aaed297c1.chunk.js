webpackJsonp([13],{"+pvL":function(t,n,e){"use strict";e.d(n,"a",function(){return a});var a=function(){function t(){}return t.prototype.ngOnInit=function(){},t.ctorParameters=function(){return[]},t}()},"9KFL":function(t,n,e){"use strict";var a=e("BkNc"),l=e("IekC");e.d(n,"a",function(){return i});var i=function(){function t(t,n,e,a){this.uc=t,this.appHttpService=n,this.router=e,this.activatedRoute=a}return t.prototype.ngOnInit=function(){var t=this;this.appHttpService.postData(this.uc.api.qc+"/get_user/").subscribe(function(n){if(n.status){var e=n.data,a=[];e.maintenance_man_mobile&&(a=e.maintenance_man_mobile.split(",")),t.fields=[{label:"运维人员手机号码",key:"maintenance_man_mobile",controlType:"inputadd",value:e.maintenance_man_mobile,placeholder:"多个号码逐个添加!",content:"确认",options:a}]}else swal({title:"获取运维人员信息失败!",text:n.error_msg,type:"error",timer:"2000"})})},t.prototype.saveData=function(t){var n=(void 0===t?{value:n}:t).value,e=n.maintenance_man_mobile,a="";e&&(a=JSON.parse(e).join(","));var l={params:{user_info:{maintenance_man_mobile:a}}};this.appHttpService.postData(this.uc.api.qc+"/update_user_info",l).subscribe(function(t){t.status?location.reload():swal("编辑运维人员失败",t.error_msg,"error")})},t.ctorParameters=function(){return[{type:l.b},{type:l.a},{type:a.c},{type:a.a}]},t}()},"9sbf":function(t,n,e){"use strict";function a(t){return o["ɵvid"](0,[(t()(),o["ɵeld"](0,null,null,4,null,null,null,null,null,null,null)),(t()(),o["ɵted"](null,["\n    "])),(t()(),o["ɵeld"](0,null,null,1,"uc-button",[],null,null,null,r.a,r.b)),o["ɵdid"](114688,null,0,u.a,[],{model:[0,"model"]},null),(t()(),o["ɵted"](null,["\n"]))],function(t,n){t(n,3,0,n.component.plugins.button)},null)}function l(t){return o["ɵvid"](0,[(t()(),o["ɵand"](16777216,null,null,1,null,a)),o["ɵdid"](16384,null,0,c.n,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),o["ɵted"](null,["\n"])),(t()(),o["ɵeld"](0,null,null,1,"uc-search",[],null,null,null,s.a,s.b)),o["ɵdid"](638976,null,0,d.a,[],{searchData:[0,"searchData"],buttons:[1,"buttons"]},null),(t()(),o["ɵted"](null,["\n"])),(t()(),o["ɵeld"](0,null,null,1,"uc-table",[],null,[[null,"pageBeChanged"]],function(t,n,e){var a=!0,l=t.component;if("pageBeChanged"===n){a=!1!==l.pageBeChanged(e)&&a}return a},m.a,m.b)),o["ɵdid"](114688,null,0,f.a,[],{model:[0,"model"]},{pageBeChanged:"pageBeChanged"})],function(t,n){var e=n.component;t(n,1,0,e.plugins.button),t(n,4,0,e.plugins.search,e.plugins.buttons),t(n,7,0,e.plugins.grid)},null)}function i(t){return o["ɵvid"](0,[(t()(),o["ɵeld"](0,null,null,1,"Operation-management-list",[],null,null,null,l,b)),o["ɵdid"](114688,null,0,p.a,[v.c,g.a,h.a,_.a],null,null)],function(t,n){t(n,1,0)},null)}var o=e("/oeL"),r=e("VC1C"),u=e("7rGF"),c=e("qbdv"),s=e("gSne"),d=e("XGh0"),p=e("GGMv"),m=e("tvCx"),f=e("sQer"),v=e("BkNc"),g=e("0kYB"),h=e("ghHK"),_=e("U9zq");e.d(n,"a",function(){return B});var y=[],b=o["ɵcrt"]({encapsulation:2,styles:y,data:{}}),B=o["ɵccf"]("Operation-management-list",p.a,i,{},{},[])},GGMv:function(t,n,e){"use strict";var a=e("IekC"),l=e("BkNc"),i=e("ge1L");e.n(i);e.d(n,"a",function(){return o});var o=function(){function t(t,n,e,a){this.router=t,this.appHttpService=n,this.dataService=e,this.uc=a,this.now=1,this.plugins={},this.searchBy={},this.getGridData=function(t){var n=this;this.appHttpService.postData(this.uc.api.qc+"/get_device_error_log_list",{params:t}).subscribe(function(t){if(t.status){var e=t.data,a=e.list;n.plugins.grid.pagination.totalItems=e.total_num,n.plugins.grid.tbody=[];for(var l=(e.count,0),i=a;l<i.length;l++){var o=i[l],r=void 0;r=[{content:o.device_error_id,hidden:!0},{content:o.device_no},{content:o.device_address},{content:o.error_description},{content:3==o.device_status?o.create_time:"--"},{content:3==o.device_status?"故障中":"正常"},{content:1==o.device_status?o.create_time:"--"}],n.plugins.grid.tbody.push(r)}}else swal({title:"获取运维信息失败!",text:t.error_msg,type:"error",timer:"2000"})})}}return t.prototype.ngOnInit=function(){var t=this,n=this.dataService.getCookies("user_type");1!=this.dataService.getCookies("admin_flg")&&1==n&&(this.plugins.button={class:"btn-primary",content:"运维人员配置",click:function(){t.router.navigateByUrl("pages/operationManagement/maintenanceMan")}}),this.plugins.search=[{title:"开始时间",key:"start_time",controlType:"time",value:"",config:{showTimePicker:!1,format:0},placeholder:"请点击选择日期"},{title:"结束时间",key:"end_time",controlType:"time",value:"",config:{showTimePicker:!1,format:0},placeholder:"请点击选择日期"},{title:"设备编号",key:"device_no",controlType:"input",value:"",placeholder:"请输入设备编号"},{title:"设备状态",key:"device_status",controlType:"select",value:"0",placeholder:"请选择设备状态",options:[{name:"正常",geo_id:"1"},{name:"故障",geo_id:"3"}]}],this.plugins.buttons=[{type:"form",class:"btn-primary",content:"搜索",click:function(n){var e=(void 0===n?{value:e}:n).value,a=e.device_no,l=e.device_status,o=e.start_time,r=e.end_time;return t.searchBy={device_no:a?a.trim():"",device_status:l,start_time:o?i(o).format("YYYY-MM-DD 00:00:00"):"",end_time:r?i(r).format("YYYY-MM-DD 23:59:59"):""},o&&!r||!o&&r?void swal({title:"提示!",text:"开始时间和结束时间要一起填写",type:"error",timer:"2000"}):o>r?void swal({title:"提示!",text:"开始时间不能大开结束时间",type:"error",timer:"2000"}):(t.now=1,void t.getGridData({page_now:t.now,limit:20,sort_by:"create_time",sort_type:"desc",search_by:t.searchBy}))}},{type:"reset",class:"btn-danger",content:"重置",click:function(){t.searchBy={},t.now=1,t.getGridData({page_now:t.now,limit:20,sort_by:"create_time",sort_type:"desc",search_by:t.searchBy})}}],this.plugins.grid={th:[{content:"设备编号ID",hidden:!0},{content:"设备编号"},{content:"设备地址"},{content:"故障描述"},{content:"故障时间"},{content:"设备状态"},{content:"恢复时间"}],tbody:[],pagination:{maxSize:5,itemsPerPage:20,currentPage:1,totalItems:1}},this.getGridData({page_now:this.now,limit:20,sort_by:"create_time",sort_type:"desc",search_by:{}})},t.prototype.pageBeChanged=function(t){this.getGridData({page_now:t.page,limit:t.itemsPerPage,sort_by:"create_time",sort_type:"desc",search_by:this.searchBy})},t.ctorParameters=function(){return[{type:l.c},{type:a.a},{type:a.c},{type:a.b}]},t}()},KZ28:function(t,n,e){"use strict";function a(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,null,null,1,"uc-form",[],null,[[null,"upformdata"]],function(t,n,e){var a=!0,l=t.component;if("upformdata"===n){a=!1!==l.saveData(e)&&a}return a},r.a,r.b)),i["ɵdid"](4833280,null,0,u.a,[],{formData:[0,"formData"]},{upformdata:"upformdata"})],function(t,n){t(n,1,0,n.component.fields)},null)}function l(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,null,null,1,"maintenanceMan",[],null,null,null,a,m)),i["ɵdid"](114688,null,0,o.a,[c.a,s.a,d.c,d.a],null,null)],function(t,n){t(n,1,0)},null)}var i=e("/oeL"),o=e("9KFL"),r=e("q9or"),u=e("X7i+"),c=e("U9zq"),s=e("0kYB"),d=e("BkNc");e.d(n,"a",function(){return f});var p=[],m=i["ɵcrt"]({encapsulation:2,styles:p,data:{}}),f=i["ɵccf"]("maintenanceMan",o.a,l,{},{},[])},N5xl:function(t,n,e){"use strict";function a(t){return i["ɵvid"](0,[(t()(),i["ɵted"](null,["\n        "])),(t()(),i["ɵeld"](16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i["ɵdid"](212992,null,0,o.y,[o.q,i.ViewContainerRef,i.ComponentFactoryResolver,[8,null],i.ChangeDetectorRef],null,null),(t()(),i["ɵted"](null,[" \n    "]))],function(t,n){t(n,2,0)},null)}function l(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,null,null,1,"operation-management",[],null,null,null,a,c)),i["ɵdid"](114688,null,0,r.a,[],null,null)],function(t,n){t(n,1,0)},null)}var i=e("/oeL"),o=e("BkNc"),r=e("+pvL");e.d(n,"a",function(){return s});var u=[],c=i["ɵcrt"]({encapsulation:2,styles:u,data:{}}),s=i["ɵccf"]("operation-management",r.a,l,{},{},[])},X3N0:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var a=function(){function t(){}return t}()},iSG4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("/oeL"),l=e("X3N0"),i=e("URzX"),o=e("N5xl"),r=e("9sbf"),u=e("KZ28"),c=e("qbdv"),s=e("bm2B"),d=e("dWcS"),p=e("W5fO"),m=e("qCSQ"),f=e("BkNc"),v=e("eJnt"),g=e("X/HD"),h=e("0Zl/"),_=e("y8ct"),y=e("+pvL"),b=e("GGMv"),B=e("9KFL");e.d(n,"OperationManagementModuleNgFactory",function(){return k});var k=a["ɵcmf"](l.a,[],function(t){return a["ɵmod"]([a["ɵmpd"](512,a.ComponentFactoryResolver,a["ɵCodegenComponentFactoryResolver"],[[8,[i.a,o.a,r.a,u.a]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["ɵmpd"](4608,c.a,c.b,[a.LOCALE_ID]),a["ɵmpd"](4608,s.FormBuilder,s.FormBuilder,[]),a["ɵmpd"](4608,s["ɵi"],s["ɵi"],[]),a["ɵmpd"](4608,d.a,d.a,[]),a["ɵmpd"](4608,p.a,p.a,[]),a["ɵmpd"](4608,m.a,m.a,[]),a["ɵmpd"](512,c.d,c.d,[]),a["ɵmpd"](512,f.x,f.x,[[2,f.m],[2,f.c]]),a["ɵmpd"](512,s["ɵba"],s["ɵba"],[]),a["ɵmpd"](512,s.ReactiveFormsModule,s.ReactiveFormsModule,[]),a["ɵmpd"](512,v.a,v.a,[]),a["ɵmpd"](512,s.FormsModule,s.FormsModule,[]),a["ɵmpd"](512,g.a,g.a,[]),a["ɵmpd"](512,h.a,h.a,[]),a["ɵmpd"](512,_.a,_.a,[]),a["ɵmpd"](512,l.a,l.a,[]),a["ɵmpd"](1024,f.t,function(){return[[{path:"",component:y.a,children:[{path:"",redirectTo:"operationManagementList",pathMatch:"full"},{path:"operationManagementList",component:b.a},{path:"maintenanceMan",component:B.a}]}]]},[])])})}});