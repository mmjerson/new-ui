(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{417:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(418),o=r(2),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},418:function(t,e,r){"use strict";r(14),r(10),r(9),r(7),r(11);var n=r(4),o=(r(24),r(420),r(177)),l=r(421),c=r(75),d=r(13);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},419:function(t,e,r){"use strict";r(14),r(10),r(9),r(7),r(11),r(108);var n=r(4),o=(r(24),r(424),r(175)),l=r(29),c=r(109),d=r(179),v=r(32),h=r(2),f=r(13);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _=Object(f.a)(l.a,Object(c.b)(["absolute","fixed","top","bottom"]),d.a,v.a);e.a=_.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(h.f)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(h.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(h.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(h.o)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},420:function(t,e,r){var content=r(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},421:function(t,e,r){"use strict";r(24);var n=r(1),o=r(422);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},422:function(t,e,r){"use strict";var n=r(419);e.a=n.a},423:function(t,e,r){(e=r(15)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},424:function(t,e,r){var content=r(425);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("cf87dc84",content,!0,{sourceMap:!1})},425:function(t,e,r){(e=r(15)(!1)).push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=e},441:function(t,e,r){"use strict";r(14),r(10);var n=r(4),o=(r(47),r(256),r(57),r(9),r(7),r(11),r(41),r(51),r(180),r(1)),l=r(61),c=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=["start","end","center"];function m(t,e){return h.reduce((function(r,n){return r[t+Object(c.z)(n)]=e(),r}),{})}var _=function(t){return[].concat(f,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:_}})),k=function(t){return[].concat(f,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:k}})),x=function(t){return[].concat(f,["space-between","space-around","stretch"]).includes(t)},C=m("alignContent",(function(){return{type:String,default:null,validator:x}})),O={align:Object.keys(y),justify:Object.keys(w),alignContent:Object.keys(C)},j={align:"align",justify:"justify",alignContent:"align-content"};function L(t,e,r){var n=j[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var B=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:k}},w),{},{alignContent:{type:String,default:null,validator:x}},C),render:function(t,e){var r=e.props,data=e.data,o=e.children,c="";for(var d in r)c+=String(r[d]);var v=B.get(c);return v||function(){var t,e;for(e in v=[],O)O[e].forEach((function(t){var n=r[t],o=L(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),B.set(c,v)}(),t(r.tag,Object(l.a)(data,{staticClass:"row",class:v}),o)}})},451:function(t,e,r){var content=r(489);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("661c2716",content,!0,{sourceMap:!1})},488:function(t,e,r){"use strict";var n=r(451);r.n(n).a},489:function(t,e,r){(e=r(15)(!1)).push([t.i,".custom-shape-divider-bottom-1617699937[data-v-2eff1ff2]{position:absolute;bottom:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-bottom-1617699937 .shape-fill[data-v-2eff1ff2]{fill:#1d8deb}.custom-shape-divider-bottom-1617699890[data-v-2eff1ff2]{position:absolute;bottom:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-bottom-1617699890 .shape-fill[data-v-2eff1ff2]{fill:#93c9f5}",""]),t.exports=e},573:function(t,e,r){"use strict";r.r(e);var n={},o=(r(488),r(38)),l=r(42),c=r.n(l),d=r(418),v=r(417),h=r(414),f=r(411),m=r(163),_=r(412),y=r(441),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",{staticClass:"white",attrs:{"fill-height":""}},[r("v-container",{staticClass:"my-12"},[r("div",{staticClass:"custom-shape-divider-bottom-1617699890 hidden-sm-and-down"},[r("svg",{attrs:{"data-name":"Layer 1",viewBox:"0 0 1440 379",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"}},[r("path",{attrs:{d:"M1501.81 508.764C1501.89 512.629 1498.82 515.827 1494.96 515.907L-143.533 549.658C-147.398 549.737 -150.596 546.668 -150.676 542.803L-159.97 91.5893C-160.114 84.6159 -151.085 81.7452 -147.175 87.5213L-86.2097 177.585C-11.8925 287.374 128.865 330.57 251.974 281.368L729.496 90.5218C954.793 9.87205 1196.76 -12.8155 1433.12 24.5469L1488.51 33.303C1490.55 33.6247 1492.06 35.3583 1492.1 37.4184L1501.81 508.764Z",fill:"#1777CB","fill-opacity":"0.43"}})])]),t._v(" "),r("div",{staticClass:"custom-shape-divider-bottom-1617699937 hidden-sm-and-down"},[r("svg",{attrs:{"data-name":"Layer 1",viewBox:"0 0 1440 340",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"}},[r("path",{attrs:{d:"M1654.81 508.764C1654.89 512.629 1651.82 515.827 1647.96 515.907L9.46696 549.658C5.60181 549.737 2.4039 546.668 2.32428 542.803L-6.9701 91.5893C-7.11374 84.6159 1.91536 81.7452 5.82518 87.5213L66.7903 177.585C141.107 287.374 281.865 330.57 404.974 281.368L882.496 90.5218C1107.79 9.87205 1349.76 -12.8155 1586.12 24.5469L1641.51 33.303C1643.55 33.6247 1645.06 35.3583 1645.1 37.4184L1654.81 508.764Z",fill:"#1777CB","fill-opacity":"0.43"}})])]),t._v(" "),r("p",{staticClass:" text-h3 text-sm-h2 text-md-h2 pl-color font-weight-medium text-center mb-sm-10"},[t._v("\n                  Pricing Plans\n                  ")]),t._v(" "),r("p",{staticClass:" text-body-2 text-sm-body-1 text-md-body-1  pl-color text-center mb-10"},[t._v("\n                  Choose a plan that best works for you!\n                  ")]),t._v(" "),r("v-row",{staticClass:"align-center"},[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"d-flex flex-column align-center rounded-xl pa-16",attrs:{color:"#54697C",dark:"",width:"400"}},[r("v-card-title",{staticClass:"headline "},[t._v("\n              Free Trial\n              ")]),t._v(" "),r("p",{staticClass:"font-weight-bold text-h4"},[t._v(" Free")]),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1)],1)],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"d-flex flex-column align-center rounded-xl pa-16",attrs:{color:"#1F5686",dark:"",width:"400"}},[r("v-card-title",{staticClass:"headline"},[t._v("\n              100 SKUs\n            ")]),t._v(" "),r("p",{staticClass:"font-weight-bold text-h4"},[t._v(" $50")]),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",{staticClass:"font-weight-medium text-h6"},[t._v("You will also receive:")]),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1)],1)],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-center  mt-xs-16",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"d-flex flex-column align-center rounded-xl pa-16",attrs:{color:"#1777CB",dark:"",width:"400"}},[r("v-card-title",{staticClass:"headline  "},[t._v("\n                Unlimited SKUs\n              ")]),t._v(" "),r("p",{staticClass:"font-weight-bold text-h4"},[t._v("--")]),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",[t._v("mdi-check-circle-outline")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",{staticClass:"font-weight-medium text-h6"},[t._v("You will also receive:")]),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1),t._v(" "),r("p",[r("v-icon",{attrs:{color:"#5EC2FA"}},[t._v("mdi-check-circle")]),t._v("Lorem Ipsum")],1)],1)],1)],1)],1)],1)}),[],!1,null,"2eff1ff2",null);e.default=component.exports;c()(component,{VCard:d.a,VCardTitle:v.d,VCol:h.a,VContainer:f.a,VIcon:m.a,VMain:_.a,VRow:y.a})}}]);