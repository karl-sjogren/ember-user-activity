"use strict";define("dummy/app",["exports","ember","ember-application","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r,i){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=n["default"].extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:a["default"]}),(0,r["default"])(l,i["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/event-display",["exports","ember-component","ember-service/inject","ember-array/utils"],function(e,t,n,a){e["default"]=t["default"].extend({classNames:["eventDisplay"],userActivity:(0,n["default"])(),eventName:"userActive",events:null,init:function(){this._super.apply(this,arguments),this.set("events",(0,a.A)())},didInsertElement:function(){this.get("userActivity").on(this.get("eventName"),this,this.registerActivity)},willDestroyElement:function(){this.get("userActivity").off(this.get("eventName"),this,this.registerActivity)},registerActivity:function(e){this.get("events").unshiftObject(e.type)}})}),define("dummy/components/idle-display",["exports","ember-component","ember-computed","ember-service/inject"],function(e,t,n,a){e["default"]=t["default"].extend({classNames:["idleDisplay"],userIdle:(0,a["default"])(),isIdle:n["default"].readOnly("userIdle.isIdle"),status:(0,n["default"])("isIdle",function(){return this.get("isIdle")?"idle":"not idle"})})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember-router","dummy/config/environment"],function(e,t,n){var a=t["default"].extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/services/scroll-activity",["exports","ember-user-activity/services/scroll-activity"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/user-activity",["exports","ember-user-activity/services/user-activity"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/user-idle",["exports","ember-user-activity/services/user-idle"],function(e,t){e["default"]=t["default"].extend({IDLE_TIMEOUT:1e4})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.0",loc:{source:null,start:{line:1,column:0},end:{line:1,column:10}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/event-display",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.0",loc:{source:null,start:{line:4,column:2},end:{line:8,column:2}},moduleName:"dummy/templates/components/event-display.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),1,1),a},statements:[["content","event",["loc",[null,[6,6],[6,15]]]]],locals:["event"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.0",loc:{source:null,start:{line:1,column:0},end:{line:9,column:6}},moduleName:"dummy/templates/components/event-display.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3");e.setAttribute(n,"class","title");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Events Fired: ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","eventList");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(e.childAt(t,[0]),0,0),a[1]=e.createMorphAt(e.childAt(t,[2]),1,1),a[2]=e.createMorphAt(e.childAt(t,[4]),1,1),a},statements:[["content","eventName",["loc",[null,[1,18],[1,31]]]],["content","events.length",["loc",[null,[2,17],[2,34]]]],["block","each",[["get","events",["loc",[null,[4,10],[4,16]]]]],[],0,null,["loc",[null,[4,2],[8,11]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/idle-display",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:58}},moduleName:"dummy/templates/components/idle-display.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("p"),a=e.createTextNode("Do nothing for 10 seconds to see your idle status change.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("User is ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"class","idleStatus");var r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(".");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[2,1]),0,0),a},statements:[["content","status",["loc",[null,[2,36],[2,46]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.0",loc:{source:null,start:{line:1,column:0},end:{line:27,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1");e.setAttribute(n,"class","title");var a=e.createElement("a");e.setAttribute(a,"href","http://github.jhawk.co/ember-user-activity/"),e.setAttribute(a,"target","_blank");var r=e.createTextNode("Ember User Activity Demo");e.appendChild(a,r),e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","badges");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"class","badgeInner");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://travis-ci.org/elwayman02/ember-user-activity"),e.setAttribute(r,"target","_blank");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"src","https://travis-ci.org/elwayman02/ember-user-activity.svg?branch=master"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://emberobserver.com/addons/ember-user-activity"),e.setAttribute(r,"target","_blank");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"src","https://emberobserver.com/badges/ember-user-activity.svg"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://codeclimate.com/github/elwayman02/ember-user-activity"),e.setAttribute(r,"target","_blank");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"src","https://codeclimate.com/github/elwayman02/ember-user-activity/badges/gpa.svg"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Scroll, click, or press keys to see events fire!");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","flexContainer");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[8]),r=new Array(6);return r[0]=e.createMorphAt(t,6,6,n),r[1]=e.createMorphAt(a,1,1),r[2]=e.createMorphAt(a,3,3),r[3]=e.createMorphAt(a,5,5),r[4]=e.createMorphAt(a,7,7),r[5]=e.createMorphAt(a,9,9),r},statements:[["content","idle-display",["loc",[null,[19,0],[19,16]]]],["content","event-display",["loc",[null,[22,2],[22,19]]]],["inline","event-display",[],["eventName","scroll"],["loc",[null,[23,2],[23,38]]]],["inline","event-display",[],["eventName","mousedown"],["loc",[null,[24,2],[24,41]]]],["inline","event-display",[],["eventName","keydown"],["loc",[null,[25,2],[25,39]]]],["inline","event-display",[],["eventName","touchstart"],["loc",[null,[26,2],[26,42]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-user-activity",version:"v0.3.0"});