import{d as e,aO as t,ac as r,h as a,aS as n,u as i,dI as o,aj as s,bb as l,bN as u,aU as d,l as c,aI as m,bD as p,aJ as f,r as h,o as b,f as v,g as j,p as g,s as k,t as C,q as x}from"./index.8a947221.js";import{B as y}from"./index.2698f41d.js";import"./index.d94421bb.js";/* empty css              */import"./vendor.3b1829c7.js";import"./DownOutlined.e3879b2b.js";import"./RightOutlined.d3306906.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./isEqual.563532de.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./toInteger.a25ecc80.js";var B=e({name:"LayoutBreadcrumb",components:{Icon:t,[y.name]:y},props:{theme:r.oneOf(["dark","light"])},setup(){const e=a([]),{currentRoute:t}=n(),{prefixCls:r}=i("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=l(),{t:b}=o();return s((()=>{var r,a;if(t.value.name===d)return;const n=null==(r=t.value)?void 0:r.matched;if(!n||0===n.length)return;let i=function(e){let t=p(e,(e=>{const{meta:t}=e;if(!t)return!1;const{title:r,hideBreadcrumb:a,hideMenu:n}=t;return!(!r||a||n)})).filter((e=>{var t,r;return!(null==(t=e.meta)?void 0:t.hideBreadcrumb)||!(null==(r=e.meta)?void 0:r.hideMenu)}));return t=t.filter((e=>e.path!==m.BASE_HOME)),t}(c(n));const o=i.filter((e=>e.path!==m.BASE_HOME));o.length===i.length&&o.unshift({path:m.BASE_HOME,meta:{title:b("layout.header.home"),isLink:!0}}),(null==(a=t.value.meta)?void 0:a.currentActiveMenu)&&o.push(t.value),e.value=o})),{routes:e,t:b,prefixCls:r,getShowBreadCrumbIcon:h,handleClick:function(e,t,r){null==r||r.preventDefault();const{children:a,redirect:n,meta:i}=e;if((null==a?void 0:a.length)&&!n)return void(null==r||r.stopPropagation());if(null==i?void 0:i.carryParam)return;const o=f();if(n&&u(n))o(n);else{const e=t.slice(1),r=e.pop()||"";let a=`${e.pop()||""}/${r}`;a=/^\//.test(a)?a:`/${a}`,o(a)}},hasRedirect:function(e,t){var r;return!!(null==(r=null==t?void 0:t.meta)?void 0:r.isLink)||e.indexOf(t)!==e.length-1}}}});const O={key:1};B.render=function(e,t,r,a,n,i){const o=h("Icon"),s=h("router-link"),l=h("a-breadcrumb");return b(),v("div",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[j(l,{routes:e.routes},{itemRender:g((({route:t,routes:r,paths:a})=>[e.getShowBreadCrumbIcon&&t.meta.icon?(b(),v(o,{key:0,icon:t.meta.icon},null,8,["icon"])):k("",!0),e.hasRedirect(r,t)?(b(),v(s,{key:2,to:"",onClick:r=>e.handleClick(t,a,r)},{default:g((()=>[x(C(e.t(t.meta.title)),1)])),_:2},1032,["onClick"])):(b(),v("span",O,C(e.t(t.meta.title)),1))])),_:1},8,["routes"])],2)};export default B;