(self.webpackChunk=self.webpackChunk||[]).push([[912],{3912:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>h});var r=n(6252);const a={class:"theme-container"};var o=n(9963);var l=n(3577);const u={class:"nav_title"};var i=n(2119);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"};var c=n(49);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){b(t,e,n[e])}))}return t}({},t,e.attrs);return r.Wm(c.Z,r.dG(n,{icon:s}),null)};f.displayName="GithubFilled",f.inheritAttrs=!1;const v=f;var p=n(7621),k=n(3197);const m=(0,r.aZ)({components:{GithubFilled:v},setup(){const t=(0,k.X6)(),e=(0,p.WM)(),n=(0,i.tv)(),r=t=>t.includes("http"),a=t.value.navbar,o=t.value.logo,l=[],u=[];return a.forEach((t=>{if(t.children){const e=t.children.map((t=>"string"==typeof t?{text:t,link:t}:t));t.children=e,u.push(t)}else"string"==typeof t?l.push({text:t,link:t}):l.push(t)})),{isBlankTarget:r,toLink:t=>{r(t)?location.href=t:n.push(t)},logo:o,navItem:l,subMenu:u,title:e}}});m.render=function(t,e,n,a,o,i){const s=(0,r.up)("GithubFilled"),c=(0,r.up)("OutboundLink"),b=(0,r.up)("a-menu-item"),f=(0,r.up)("a-sub-menu"),v=(0,r.up)("a-menu");return(0,r.wg)(),(0,r.j4)(v,{mode:"horizontal"},{default:(0,r.w5)((()=>[(0,r.Wm)("div",u,[(0,r.Wm)(s),(0,r.Uk)(" "+(0,l.zw)(t.title),1)]),((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(t.navItem,((e,n)=>((0,r.wg)(),(0,r.j4)(b,{key:"item"+n,onClick:n=>t.toLink(e.link)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.text)+" ",1),t.isBlankTarget(e.link)?((0,r.wg)(),(0,r.j4)(c,{key:0})):(0,r.ry)("",!0)])),_:2},1032,["onClick"])))),128)),((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(t.subMenu,((e,n)=>((0,r.wg)(),(0,r.j4)(f,{key:"sub"+n},{title:(0,r.w5)((()=>[(0,r.Wm)("span",null,(0,l.zw)(e.text),1)])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.children,((e,n)=>((0,r.wg)(),(0,r.j4)(b,{onClick:n=>t.toLink(e.link),key:"subItem"+n},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.text)+" ",1),t.isBlankTarget(e.link)?((0,r.wg)(),(0,r.j4)(c,{key:0})):(0,r.ry)("",!0)])),_:2},1032,["onClick"])))),128))])),_:2},1024)))),128))])),_:1})};const w=m,g=(0,r.aZ)({name:"layout",components:{Transition:o.uT,Navbar:w,Home:{}},setup(){const t=(0,p.mx)(),e=(0,r.f3)("tags");console.log(e);const n=(0,p.I2)(),a=(0,k.X6)(),o=(0,r.Fl)((()=>!1!==n.value.navbar&&!1!==a.value.navbar));return{frontmatter:n,page:t,shouldShowNavbar:o}}});g.render=function(t,e,n,o,l,u){const i=(0,r.up)("Navbar"),s=(0,r.up)("Content"),c=(0,r.up)("Home");return(0,r.wg)(),(0,r.j4)("div",a,[t.shouldShowNavbar?((0,r.wg)(),(0,r.j4)(i,{key:0},{before:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"navbar-before")])),after:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"navbar-after")])),_:1})):(0,r.ry)("",!0),(0,r.Wm)(s),t.frontmatter.home?((0,r.wg)(),(0,r.j4)(c,{key:1})):(0,r.ry)("",!0)])};const h=g}}]);