(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",[a("v-icon",[e._v("fas fa-boxes")]),e._v(" eparts")],1),a("v-spacer"),a("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[a("v-icon",[e._v("fas fa-plus-circle")])],1),a("v-btn",{attrs:{text:"",icon:"",disabled:e.processing},on:{click:function(t){return e.refresh()}}},[a("v-icon",[e._v("fas fa-sync")])],1),a("v-text-field",{attrs:{"prepend-inner-icon":"fa-search",label:"検索","single-line":"","hide-details":"",outlined:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-content",[a("v-data-table",{staticClass:"parts-table",attrs:{headers:e.headers,items:e.parts,search:e.search,"item-key":"index",locale:"ja-JP"},scopedSlots:e._u([{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"pr-2",attrs:{small:"",color:"blue",disabled:e.processing},on:{blur:function(t){return e.updatePart(n)},click:function(e){n.count++}}},[e._v(" fas fa-plus ")]),a("v-icon",{staticClass:"pr-2",attrs:{small:"",color:"red",disabled:e.processing},on:{blur:function(t){return e.updatePart(n)},click:function(e){n.count--}}},[e._v(" fas fa-minus ")]),a("v-icon",{staticClass:"pr-6",attrs:{small:"",color:"green"},on:{click:function(t){return e.startEditingPart(n)}}},[e._v(" fas fa-edit ")]),a("v-icon",{staticClass:"pr-2",attrs:{small:"",color:"lightgray",disabled:e.processing},on:{click:function(t){return e.deletePart(n)}}},[e._v(" fas fa-trash ")])]}},{key:"item.count",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.count>=0?a.count:"─")+" ")]}}])})],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[e._v(e._s(e.dialogTitle))]),a("v-card-text",[a("v-text-field",{attrs:{rules:[e.rules.required],label:"分類"},model:{value:e.part.category,callback:function(t){e.$set(e.part,"category",t)},expression:"part.category"}}),a("v-text-field",{attrs:{label:"型番"},model:{value:e.part.model,callback:function(t){e.$set(e.part,"model",t)},expression:"part.model"}}),a("v-text-field",{attrs:{type:"number",hint:"負の数でカウントしない",label:"個数"},model:{value:e.part.count,callback:function(t){e.$set(e.part,"count",e._n(t))},expression:"part.count"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(t){return e.hideDialog()}}},[e._v("キャンセル")]),a("v-btn",{attrs:{disabled:e.processing,text:"",color:"blue"},on:{click:function(t){return e.save()}}},[e._v("保存")])],1)],1)],1),a("v-snackbar",{attrs:{absolute:"",bottom:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.message)+" "),a("v-btn",{attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("閉じる")])],1)],1)},o=[],s=(a("c740"),a("c975"),a("a434"),a("ac1f"),a("841c"),a("5530")),i=a("d4ec"),c=a("bee2"),l=a("99de"),u=a("7e84"),p=a("262e"),d=a("9ab4"),f=a("2fe1"),v=a("8dee"),g=a.n(v),b={insert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=new XMLHttpRequest;n.open("POST","https://script.google.com/macros/s/AKfycbw7vHCzXf2ZyZz29sHwLmDgLhCdKtljRtu8l8GLoCAYAM22gORx/exec"),n.setRequestHeader("Content-Type","text/plain"),n.onload=t,n.onerror=a,n.send(encodeURIComponent(JSON.stringify({op:"insert",part:e})))},update:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=new XMLHttpRequest;n.open("POST","https://script.google.com/macros/s/AKfycbw7vHCzXf2ZyZz29sHwLmDgLhCdKtljRtu8l8GLoCAYAM22gORx/exec"),n.setRequestHeader("Content-Type","text/plain"),n.onload=t,n.onerror=a,n.send(encodeURIComponent(JSON.stringify({op:"update",part:e})))},remove:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=new XMLHttpRequest;n.open("POST","https://script.google.com/macros/s/AKfycbw7vHCzXf2ZyZz29sHwLmDgLhCdKtljRtu8l8GLoCAYAM22gORx/exec"),n.setRequestHeader("Content-Type","text/plain"),n.onload=t,n.onerror=a,n.send(encodeURIComponent(JSON.stringify({op:"remove",id:e})))},enumerate:function(e,t){var a=new XMLHttpRequest;a.open("GET","https://script.google.com/macros/s/AKfycbw7vHCzXf2ZyZz29sHwLmDgLhCdKtljRtu8l8GLoCAYAM22gORx/exec"),a.responseType="json",a.onload=function(){e(a.response)},a.onerror=t,a.send()}},h=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.search="",e.dialog=!1,e.message="",e.processing=!1,e.default_part={id:"",category:"",model:"",count:1},e.part=Object(s["a"])({},e.default_part),e.headers=[{text:"ID",value:"id",width:20,filterable:!1},{text:"種類",value:"category"},{text:"型番",value:"model"},{text:"個数",value:"count",filterable:!1},{text:"操作",value:"actions",sortable:!1,filterable:!1}],e.parts=[],e.rules={required:function(){return!!e.part.category||"必須"}},e}return Object(p["a"])(t,e),Object(c["a"])(t,[{key:"created",value:function(){this.refresh()}},{key:"refresh",value:function(){var e=this;this.parts=[],this.processing=!0,b.enumerate((function(t){e.parts=t,e.processing=!1}),(function(){e.message="読み込み中にエラーが発生しました",e.processing=!1}))}},{key:"startEditingPart",value:function(e){this.part=Object(s["a"])({},e),this.dialog=!0}},{key:"addPart",value:function(e){var t=this,a=Object(s["a"])({},e,{id:g.a.generate()});this.message="追加しています...",this.processing=!0,b.insert(a,(function(){t.parts.push(a),t.message="追加しました",t.processing=!1,t.hideDialog()}),(function(){t.message="追加中にエラーが発生しました",t.processing=!1}))}},{key:"deletePart",value:function(e){var t=this;this.message="削除しています...",this.processing=!0,b.remove(e.id,(function(){var a=t.parts.indexOf(e);t.parts.splice(a,1),t.message="削除しました",t.processing=!1}),(function(){t.message="削除中にエラーが発生しました",t.processing=!1}))}},{key:"updatePart",value:function(e){var t=this;this.message="更新しています...",this.processing=!0,e.count=Math.max(e.count,-1),b.update(e,(function(){var a=t.parts.findIndex((function(t){return t.id===e.id}));Object.assign(t.parts[a],e),t.message="更新しました",t.processing=!1,t.hideDialog()}),(function(){t.message="更新中にエラーが発生しました",t.processing=!1}))}},{key:"save",value:function(){""===this.part.id?this.addPart(this.part):this.updatePart(this.part)}},{key:"hideDialog",value:function(){this.dialog=!1,this.part=Object(s["a"])({},this.default_part)}},{key:"dialogTitle",get:function(){return""===this.part.id?"追加":"編集"}},{key:"snackbar",get:function(){return""!==this.message},set:function(e){e||(this.message="")}}]),t}(n["a"]);h=Object(d["a"])([Object(f["a"])({})],h);var m=h,y=m,x=a("2877"),k=a("6544"),O=a.n(k),_=a("7496"),j=a("40dc"),C=a("8336"),w=a("b0af"),P=a("99d9"),T=a("a75b"),R=a("8fea"),L=a("169a"),A=a("132d"),H=a("2db4"),V=a("2fa4"),S=a("8654"),M=a("2a7f"),D=Object(x["a"])(y,r,o,!1,null,null,null),q=D.exports;O()(D,{VApp:_["a"],VAppBar:j["a"],VBtn:C["a"],VCard:w["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VContent:T["a"],VDataTable:R["a"],VDialog:L["a"],VIcon:A["a"],VSnackbar:H["a"],VSpacer:V["a"],VTextField:S["a"],VToolbarTitle:M["a"]});var z=a("f309");n["a"].use(z["a"]);var K=new z["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:K,render:function(e){return e(q)}}).$mount("#app")}});
//# sourceMappingURL=app.ef0f4ce9.js.map