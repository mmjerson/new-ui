/*! For license information please see ../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{430:function(t,e,r){"use strict";var n=r(1);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(t,e){m(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){m(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){m(t,e,r)}))}function m(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var v={__proto__:[]}instanceof Array;function y(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(n[t]=data[t])})),n}var h=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(h.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return y(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),m=f instanceof n.a?f.constructor:n.a,v=m.extend(e);return j(v,t,m),l()&&d(v,t),v}var w={prototype:!0,arguments:!0,callee:!0,caller:!0};function j(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!w[n]){var c=Object.getOwnPropertyDescriptor(t,n);if(!c||c.configurable){var f,l,d=Object.getOwnPropertyDescriptor(e,n);if(!v){if("cid"===n)return;var m=Object.getOwnPropertyDescriptor(r,n);if(f=d.value,l=o(f),null!=f&&("object"===l||"function"===l)&&m&&m.value===d.value)return}0,Object.defineProperty(t,n,d)}}}))}function x(t){return"function"==typeof t?O(t):function(e){return O(e,t)}}x.registerHooks=function(t){h.push.apply(h,f(t))},e.a=x},466:function(t,e,r){var content=r(550);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("fd417bc4",content,!0,{sourceMap:!1})},549:function(t,e,r){"use strict";var n=r(466);r.n(n).a},550:function(t,e,r){(e=r(15)(!1)).push([t.i,".cont[data-v-12cd4f76]{max-width:600px!important}.custom-shape-divider-bottom-1617699937[data-v-12cd4f76]{position:absolute;bottom:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-bottom-1617699937 .shape-fill[data-v-12cd4f76]{fill:#1d8deb}.custom-shape-divider-bottom-1617699890[data-v-12cd4f76]{position:absolute;bottom:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-bottom-1617699890 .shape-fill[data-v-12cd4f76]{fill:#93c9f5}",""]),t.exports=e},582:function(t,e,r){"use strict";r.r(e);r(14),r(10),r(9),r(11),r(20),r(21),r(7),r(76);var n=r(4),o=r(30),c=r(50),f=r(39),l=r(34),d=r(23),m=r(18),v=r(1),y=r(62),h=r(430);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){Object(f.a)(r,t);var e=w(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"optimizeBids",value:function(){this.isLoggedIn?this.$router.push("/processes/form"):this.$router.push("/login")}}]),r}(v.a),C=x=j([Object(h.a)({computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.c)("app",["isLoggedIn"]))})],x),_=(r(549),r(38)),P=r(42),R=r.n(P),L=r(188),D=r(411),M=r(137),k=r(412),component=Object(_.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",{staticClass:"white"},[r("v-container",{staticClass:" d-sm-flex justify-md-space-between",attrs:{fluid:""}},[r("v-img",{staticClass:"d-none d-flex",attrs:{"max-width":"600"}}),t._v(" "),r("div",{staticClass:"mt-sm-8 mt-16 "},[r("div",{staticClass:"font-weight-bold text-md-h1 text-h2 pl-color mt-md-16 d-flex justify-center"},[t._v("\n        Get Optimized Today!\n         ")]),t._v(" "),r("div",{staticClass:"text-body-1 text-md-h5  mt-5 pl-color d-md-flex justify-center"},[t._v(" \n          “If you think it’s expensive to hire a professional to  do the job,\n\n        ")]),t._v(" "),r("div",{staticClass:"text-body-1 text-md-h5 pl-color d-md-flex justify-center"},[t._v(" \n           wait until you hire an amateur.” \n           \n        ")]),t._v(" "),r("div",{staticClass:"custom-shape-divider-bottom-1617699890 hidden-sm-and-down"},[r("svg",{attrs:{"data-name":"Layer 1",viewBox:"0 0 1440 379",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"}},[r("path",{attrs:{d:"M1501.81 508.764C1501.89 512.629 1498.82 515.827 1494.96 515.907L-143.533 549.658C-147.398 549.737 -150.596 546.668 -150.676 542.803L-159.97 91.5893C-160.114 84.6159 -151.085 81.7452 -147.175 87.5213L-86.2097 177.585C-11.8925 287.374 128.865 330.57 251.974 281.368L729.496 90.5218C954.793 9.87205 1196.76 -12.8155 1433.12 24.5469L1488.51 33.303C1490.55 33.6247 1492.06 35.3583 1492.1 37.4184L1501.81 508.764Z",fill:"#1777CB","fill-opacity":"0.43"}})])]),t._v(" "),r("div",{staticClass:"custom-shape-divider-bottom-1617699937 hidden-sm-and-down"},[r("svg",{attrs:{"data-name":"Layer 1",viewBox:"0 0 1440 340",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"}},[r("path",{attrs:{d:"M1654.81 508.764C1654.89 512.629 1651.82 515.827 1647.96 515.907L9.46696 549.658C5.60181 549.737 2.4039 546.668 2.32428 542.803L-6.9701 91.5893C-7.11374 84.6159 1.91536 81.7452 5.82518 87.5213L66.7903 177.585C141.107 287.374 281.865 330.57 404.974 281.368L882.496 90.5218C1107.79 9.87205 1349.76 -12.8155 1586.12 24.5469L1641.51 33.303C1643.55 33.6247 1645.06 35.3583 1645.1 37.4184L1654.81 508.764Z",fill:"#1777CB","fill-opacity":"0.43"}})])]),t._v(" "),r("div",{staticClass:"mt-md-16 mb-md-16 mt-5 d-flex justify-center"},[r("router-link",{attrs:{to:"/signup"}},[!1===this.isLoggedIn?r("v-btn",{staticClass:"ml-sm-10 mr-2",attrs:{rounded:"",depressed:"",color:"#1777CB",width:"100",medium:"",dark:"",small:t.$vuetify.breakpoint.smAndDown}},[t._v("\n              Sign Up\n            ")]):t._e()],1),t._v(" "),r("router-link",{attrs:{to:{path:"learnmore",query:{nav:1}}}},[r("v-btn",{staticClass:"btnleanr ml-sm-10 ml-0",attrs:{rounded:"",color:"#1777CB ",outlined:"",width:"100",medium:"",small:t.$vuetify.breakpoint.smAndDown}},[t._v("\n              Learn More\n            ")])],1)],1)]),t._v(" "),r("v-img",{staticClass:"d-none d-flex ",attrs:{"max-width":"600"}})],1)],1)}),[],!1,null,"12cd4f76",null);e.default=component.exports;R()(component,{VBtn:L.a,VContainer:D.a,VImg:M.a,VMain:k.a})}}]);