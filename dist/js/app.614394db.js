(function(t){function e(e){for(var n,i,a=e[0],r=e[1],l=e[2],p=0,u=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(u.length)u.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,a=1;a<o.length;a++){var r=o[a];0!==s[r]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todo_app_vue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=r;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"todo"},[t._m(0),o("TaskField",{on:{onAddTask:t.onAddTask}}),o("div",{staticClass:"todo-list"},t._l(t.tasks,(function(e,n){return o("ListItem",{key:n,attrs:{text:e.text,completed:e.completed,index:n},on:{onToggleCompleted:t.onToggleCompleted,onRemoveTask:t.onRemoveTask}})})),1)],1)])},c=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo__header"},[o("h4",[t._v("Список задач")])])}],i=(o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo__list-items"},[o("div",{staticClass:"todo__list-left-block",class:{"todo-list__completed":t.completed},on:{click:function(e){return t.toggleCompleted(t.index)}}},[o("div",{staticClass:"todo__list-item-check"},[o("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{width:"100%",height:"100%",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[o("path",{attrs:{d:"M497.36,69.995c-7.532-7.545-19.753-7.558-27.285-0.032L238.582,300.845l-83.522-90.713 c-7.217-7.834-19.419-8.342-27.266-1.126c-7.841,7.217-8.343,19.425-1.126,27.266l97.126,105.481 c3.557,3.866,8.535,6.111,13.784,6.22c0.141,0.006,0.277,0.006,0.412,0.006c5.101,0,10.008-2.026,13.623-5.628L497.322,97.286 C504.873,89.761,504.886,77.54,497.36,69.995z"}}),o("path",{attrs:{d:"M492.703,236.703c-10.658,0-19.296,8.638-19.296,19.297c0,119.883-97.524,217.407-217.407,217.407 c-119.876,0-217.407-97.524-217.407-217.407c0-119.876,97.531-217.407,217.407-217.407c10.658,0,19.297-8.638,19.297-19.296 C275.297,8.638,266.658,0,256,0C114.84,0,0,114.84,0,256c0,141.154,114.84,256,256,256c141.154,0,256-114.846,256-256 C512,245.342,503.362,236.703,492.703,236.703z"}})])]),o("p",{staticClass:"todo__list-item-text"},[t._v(t._s(t.text))])]),o("div",{staticClass:"todo__list-right-block"},[o("div",{staticClass:"todo__list-item-remove",on:{click:function(e){return t.removeTask(t.index)}}},[o("svg",{attrs:{height:"20px",viewBox:"-40 0 427 427.00131",width:"20px",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}}),o("path",{attrs:{d:"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}}),o("path",{attrs:{d:"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"}}),o("path",{attrs:{d:"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}})])])])])}),a=[],r=(o("a9e3"),{props:{completed:Boolean,text:String,index:Number},methods:{removeTask:function(t){confirm("Хотите удалить ?")&&this.$emit("onRemoveTask",t)},toggleCompleted:function(t){this.$emit("onToggleCompleted",t)}}}),l=r,d=o("2877"),p=Object(d["a"])(l,i,a,!1,null,null,null),u=p.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo__app-field"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"todo__app-field-input",attrs:{type:"text",placeholder:"Введите текст задачи..."},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),o("button",{staticClass:"todo__app-field-button",on:{click:t.addTask}},[o("svg",{staticClass:"todo__app-field-plus",attrs:{height:"20px",viewBox:"0 0 469.33333 469.33333",width:"20px",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"}})])])])},h=[],m={data:function(){return{text:""}},methods:{addTask:function(){this.text&&(this.$emit("onAddTask",this.text),this.text="")}}},f=m,x=Object(d["a"])(f,v,h,!1,null,null,null),_=x.exports,g={name:"App",data:function(){return{tasks:[{text:"Изучить VueJS",completed:!1},{text:"Изучить ReactJS",completed:!0}]}},methods:{onToggleCompleted:function(t){this.tasks[t].completed=!this.tasks[t].completed},onRemoveTask:function(t){this.tasks.splice(t,1)},onAddTask:function(t){this.tasks.push({text:t,completed:!1})}},components:{ListItem:u,TaskField:_}},k=g,w=(o("cf25"),Object(d["a"])(k,s,c,!1,null,null,null)),b=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},cf25:function(t,e,o){"use strict";o("fea6")},fea6:function(t,e,o){}});
//# sourceMappingURL=app.614394db.js.map