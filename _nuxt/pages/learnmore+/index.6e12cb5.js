(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{417:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return h}));var n=r(418),o=r(2),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),h=Object(o.h)("v-card__title");n.a},418:function(t,e,r){"use strict";r(14),r(10),r(9),r(7),r(11);var n=r(4),o=(r(24),r(420),r(177)),l=r(421),c=r(75),d=r(13);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},419:function(t,e,r){"use strict";r(14),r(10),r(9),r(7),r(11),r(108);var n=r(4),o=(r(24),r(424),r(175)),l=r(29),c=r(109),d=r(179),h=r(32),v=r(2),m=r(13);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(m.a)(l.a,Object(c.b)(["absolute","fixed","top","bottom"]),d.a,h.a);e.a=y.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(v.f)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(v.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(v.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(v.o)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(v.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},420:function(t,e,r){var content=r(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},421:function(t,e,r){"use strict";r(24);var n=r(1),o=r(422);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},422:function(t,e,r){"use strict";var n=r(419);e.a=n.a},423:function(t,e,r){(e=r(15)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},424:function(t,e,r){var content=r(425);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("cf87dc84",content,!0,{sourceMap:!1})},425:function(t,e,r){(e=r(15)(!1)).push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=e},431:function(t,e,r){t.exports=r.p+"img/learnmore.129178f.png"},443:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},444:function(t,e,r){t.exports=r.p+"img/1st.3043eaf.png"},445:function(t,e,r){t.exports=r.p+"img/2nd.b2790ab.png"},446:function(t,e,r){t.exports=r.p+"img/3rd.e9e1704.png"},450:function(t,e,r){var content=r(487);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("86bbda60",content,!0,{sourceMap:!1})},486:function(t,e,r){"use strict";var n=r(450);r.n(n).a},487:function(t,e,r){var n=r(15),o=r(443),l=r(444),c=r(445),d=r(446);e=n(!1);var h=o(l),v=o(c),m=o(d);e.push([t.i,".imgg[data-v-220062cd]{background-image:url("+h+")}.imgg[data-v-220062cd],.imgg2[data-v-220062cd]{background-size:cover;background-repeat:no-repeat}.imgg2[data-v-220062cd]{background-image:url("+v+")}.imgg3[data-v-220062cd]{background-image:url("+m+");background-size:cover;background-repeat:no-repeat}.bg[data-v-220062cd]{background-color:#fff;border-radius:20px;margin:10px;opacity:.9}.sample[data-v-220062cd]{max-width:750px!important}.sample[data-v-220062cd],p[data-v-220062cd]{color:#1777cb!important}.v-card[data-v-220062cd]{border:1px solid #1777cb!important}.btnleanr[data-v-220062cd]{border:none!important}.custom-shape-divider-top-1617702452[data-v-220062cd]{position:absolute;top:0;left:0;width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.custom-shape-divider-top-1617702452 svg[data-v-220062cd]{position:relative;display:block;transform:rotate(180deg)}.custom-shape-divider-top-1617702452 .shape-fill[data-v-220062cd]{fill:#93c9f5;opacity:.4}",""]),t.exports=e},572:function(t,e,r){"use strict";r.r(e);r(14),r(10),r(9),r(7),r(11);var n=r(4),o=r(62);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("app",["isLoggedIn"]))},d=(r(486),r(38)),h=r(42),v=r.n(h),m=r(188),f=r(418),y=r(417),_=r(411),x=r(163),w=r(137),k=r(412),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-main",{staticClass:"white"},[n("v-container",{staticClass:"mt-16 pb-10",attrs:{fluid:""}},[n("div",{staticClass:"custom-shape-divider-top-1617702452 hidden-sm-and-down"},[n("svg",{attrs:{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 444",preserveAspectRatio:"none"}},[n("path",{attrs:{d:"M-107.923 -63.8942C-107.966 -67.76 -104.866 -70.9281 -101 -70.9705L1537.74 -88.9233C1541.61 -88.9656 1544.77 -85.8661 1544.82 -82.0004L1549.76 369.282C1549.84 376.257 1540.78 379.04 1536.93 373.227L1476.83 282.579C1403.58 172.079 1263.24 127.528 1139.66 175.541L660.325 361.775C434.261 440.249 192.089 460.602 -43.9027 420.963L-99.2087 411.673C-101.241 411.332 -102.736 409.584 -102.759 407.523L-107.923 -63.8942Z",fill:"#1777CB","fill-opacity":"0.07"}})])]),t._v(" "),n("v-img",{staticClass:"d-none d-flex d-sm-none ml-2 mt-10",attrs:{"max-width":"450",src:r(431)}}),t._v(" "),n("div",{staticClass:"font-weight-bold text-h2 text-sm-h1 sample float-left ml-7 mt-10"},[t._v("\n          Are you an\n          "),n("div",{staticClass:"font-weight-bold sample text-h2 text-sm-h1 mt-2"},[t._v("\n            Amazon Seller?\n          ")]),t._v(" "),n("div",{staticClass:"mt-1 mb-16"},[n("router-link",{attrs:{to:"/signup"}},[0==this.isLoggedIn?n("v-btn",{attrs:{rounded:"",depressed:"",color:"#1777CB",width:"100",medium:"",dark:"",small:t.$vuetify.breakpoint.smAndDown}},[t._v("\n                Sign Up\n              ")]):t._e()],1)],1)]),t._v(" "),n("div",{staticClass:"float-right"},[n("v-img",{staticClass:"d-none d-md-flex mb-16",attrs:{"max-width":"450",src:r(431)}})],1)],1),t._v(" "),n("v-container",{staticClass:"d-flex justify-center"},[n("div",[n("div",{staticClass:"mt-16 mb-16 text-center"},[n("p",{staticClass:"text-h4    pl-color"},[t._v("A Complete Product Detail Page Solution")])]),t._v(" "),n("v-card",{staticClass:"d-sm-flex rounded-xl shadow mx-auto my-12 imgg",attrs:{light:"",elevation:"0"}},[n("v-img",{staticClass:"mx-16 my-16 d-flex d-none d-sm-none d-md-none",attrs:{width:"270"}}),t._v(" "),n("div",{staticClass:"bg"},[n("div",[n("v-card-title",{staticClass:"text-h5 sample font-weight-bold"},[t._v("\n                Full Market Research\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-h6 sample font-weight-bold mt-1"},[t._v("\n                Listing optimization\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-xs-body-2 text-body-1   "},[t._v("\n                What does your market look like as a whole? Is your product\n                positioned appropriately against the competition? I've analyzed\n                hundreds of products and markets. I've learned how to appeal to\n                shoppers wants and desires to help your product stand out from\n                the competition!\n              ")])],1)]),t._v(" "),n("v-img",{staticClass:"mx-16 my-16 d-none d-md-flex d-sm-none",attrs:{width:"270"}})],1),t._v(" "),n("v-card",{staticClass:"d-sm-flex rounded-xl shadow mx-auto my-12 imgg2",attrs:{light:"",elevation:"0"}},[n("v-img",{staticClass:"mx-16 my-16",attrs:{width:"270"}}),t._v(" "),n("div",{staticClass:"bg"},[n("v-card-title",{staticClass:"text-h5 sample font-weight-bold"},[t._v("\n                Key Generation\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-h6 sample font-weight-bold mt-1"},[t._v("\n                Listing optimization\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-xs-body-2 text-body-1   "},[t._v("\n                Are you confused about which tools to use to find relevant\n                keywords for your listing? Are you puzzled as to whether you\n                should use only unique words or exact match phrases? Let me take\n                your listing to the next level! I use the highest-level tools\n                available to find the most relevant keywords for your listing. I\n                also use your search term report to find converting keyword\n                phrases specific to your product listing. I then process these\n                keywords in the most efficient way to drive both sales and\n                traffic. Normally, my optimizations increase the estimated\n                search volume of my clients' listings by around 40%!\n              ")])],1)],1),t._v(" "),n("v-card",{staticClass:"d-sm-flex rounded-xl shadow mx-auto my-12 imgg3",attrs:{light:"",elevation:"0"}},[n("v-img",{staticClass:"mx-16 my-16",attrs:{width:"270"}}),t._v(" "),n("div",{staticClass:"bg"},[n("v-card-title",{staticClass:"text-h5 sample font-weight-bold"},[t._v("\n                FULL LISTING OPTIMIZATION\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-h6 sample font-weight-bold mt-1"},[t._v("\n                Listing Optimization\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-xs-body-2 text-body-1   "},[t._v("\n                Are you unsure of how to fully optimize the frontend and the\n                backend of your listing? Is it confusing how to add proper HTML\n                to your product description or determine how many characters to\n                add to your search term field? I incorporate the most relevant\n                keywords and expertly written sales copy into the precise\n                listing fields for the ultimate optimization. This gives you\n                traffic and sales to your listing.\n              ")])],1)],1),t._v(" "),n("v-card",{staticClass:"d-sm-flex rounded-xl shadow mx-auto my-12  imgg ",attrs:{light:"",elevation:"0"}},[n("v-img",{staticClass:"mx-16 my-16 d-flex d-none d-sm-none d-md-none",attrs:{width:"270"}}),t._v(" "),n("div",{staticClass:"bg"},[n("v-card-title",{staticClass:"text-h5 sample font-weight-bold"},[t._v("\n                Keyword Research\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-h6 sample font-weight-bold mt-1"},[t._v("\n                PPC Optimization\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-xs-body-2 text-body-1   "},[t._v("\n                Determining the most relevant keywords can be challenging and\n                time-consuming. Your success not only depends on finding the\n                exact search terms that your customers are searching for but\n                also ensuring that the chosen keywords are relevant to your\n                product listing.\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-xs-body-2 text-body-1   "},[t._v("\n                I systematically combine search recommendations, top-seller\n                data, and your own unique search term performance data to give\n                you the most relevant, high-powered keywords in your target\n                market. This allows you to show up in the right search results\n                for your target buyer while minimizing irrelevant search queries\n                and wasteful ad spend.\n              ")])],1),t._v(" "),n("v-img",{staticClass:"mx-5 my-3 d-none d-md-flex d-sm-none",attrs:{width:"270"}})],1),t._v(" "),n("v-card",{staticClass:"d-sm-flex rounded-xl shadow mx-auto my-12 imgg3",attrs:{light:"",elevation:"0"}},[n("v-img",{staticClass:"mx-16 my-16",attrs:{width:"270"}}),t._v(" "),n("div",{staticClass:"bg"},[n("v-card-title",{staticClass:"text-h5 sample font-weight-bold   "},[t._v("\n                Proper Campaign Structuring\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-h6 sample font-weight-bold mt-1   "},[t._v("\n                PPC Optimization\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-xs-body-2 text-body-1   "},[t._v("\n                Customer product preferences result in measurable metrics such\n                as click-through rates and conversion rates. This is important\n                because this data defines the amount you will pay per click and\n                drives your overall ad spend.\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-xs-body-2 text-body-1   "},[t._v("\n                With the proper campaign structure, your bids can be managed\n                with precision and efficiency. This fully automated process\n                analyzes key PPC performance metrics to eliminate wasteful ad\n                spend and help grow the KWs that are actually product sales to\n                drive both sales and organic revenue.\n              ")])],1)],1),t._v(" "),n("div",[n("router-link",{attrs:{to:"/learnmore"}},[n("v-btn",{staticClass:"btnleanr float-right font-weight-bold   ",attrs:{rounded:"",color:"#1777CB ",width:"120",medium:"",outlined:"",small:t.$vuetify.breakpoint.smAndDown}},[t._v("\n                Learn More\n                "),n("v-icon",{attrs:{right:"",light:""}},[t._v(" mdi-arrow-right ")])],1)],1)],1)],1)])],1)],1)}),[],!1,null,"220062cd",null);e.default=component.exports;v()(component,{VBtn:m.a,VCard:f.a,VCardSubtitle:y.b,VCardTitle:y.d,VContainer:_.a,VIcon:x.a,VImg:w.a,VMain:k.a})}}]);