(self.webpackChunkordinary_days=self.webpackChunkordinary_days||[]).push([[672],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var o=r(7228);t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9100:function(t,e,r){var o=r(9489),n=r(7067);function a(e,r,i){return n()?(t.exports=a=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=a=function(t,e,r){var n=[null];n.push.apply(n,e);var a=new(Function.bind.apply(t,n));return r&&o(a,r.prototype),a},t.exports.default=t.exports,t.exports.__esModule=!0),a.apply(null,arguments)}t.exports=a,t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},7067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var o=r(3646),n=r(6860),a=r(379),i=r(8206);t.exports=function(t){return o(t)||n(t)||a(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var o=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},2535:function(t,e,r){"use strict";r(7294);var o=r(5444),n=r(2359),a=r(3431);e.Z=function(){var t=(0,o.useStaticQuery)("4217986984").site.siteMetadata.author;return(0,a.tZ)("div",{className:"bio"},(0,a.tZ)(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../../../data/images/avatar.png",width:50,height:50,quality:100,alt:"Profile picture",__imageData:r(2852)}),(null==t?void 0:t.name)&&(0,a.tZ)("div",null,(0,a.tZ)(o.Link,{to:t.link,target:"_blank"},(0,a.tZ)("strong",null,t.name)),(0,a.tZ)("p",null,(null==t?void 0:t.bio)||null)))}},4218:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});r(7294);var o=r(6725),n=r(2535),a=r(204),i=r(3751),l=r(6771),s=r(5444),c=r(3431);var u=(0,l.Z)("ul",{target:"e1mopddz1"})({name:"9kh76v",styles:"margin:var(--spacing-0);padding:var(--spacing-0);display:flex;flex-wrap:wrap;justify-content:space-between;padding:0;li{list-style:none;&:last-of-type{text-align:right;}a{color:var(--color-text-light);display:block;border-radius:3px;border:1px solid var(--color-border);padding:var(--spacing-2) var(--spacing-5);text-decoration:none;font-size:var(--fontSize-0);transition:0.3s ease border-color,0.2s ease color;&:hover{color:var(--color-primary);border-color:var(--color-primary);}}}"}),f=(0,l.Z)("div",{target:"e1mopddz0"})({name:"bksz7m",styles:"font-weight:var(--fontWeight-semibold);font-size:var(--fontSize-1);color:var(--color-primary)"}),p=function(t){var e=t.postNav;return(0,c.tZ)(u,null,(0,c.tZ)("li",null,e.newer&&(0,c.tZ)(s.Link,{to:"/blog/"+e.newer.slug,rel:"prev"},(0,c.tZ)("div",null,"上一篇"),(0,c.tZ)(f,null,"« ",e.newer.frontmatter.title))),(0,c.tZ)("li",null,e.older&&(0,c.tZ)(s.Link,{to:"/blog/"+e.older.slug,rel:"next"},(0,c.tZ)("div",null,"下一篇"),(0,c.tZ)(f,null,e.older.frontmatter.title," »"))))},d=function(t){var e=t.data.mdx;return(0,c.tZ)(a.Z,null,(0,c.tZ)(i.Z,{title:e.frontmatter.title,description:e.excerpt}),(0,c.tZ)("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},(0,c.tZ)("header",null,(0,c.tZ)("h1",{itemProp:"headline"},e.frontmatter.title),(0,c.tZ)("div",null,e.frontmatter.date),(0,c.tZ)(n.Z,null)),(0,c.tZ)(o.MDXRenderer,{itemProp:"articleBody"},e.body),(0,c.tZ)("hr",null),(0,c.tZ)("footer",null)),(0,c.tZ)(p,{postNav:e.postNav}))}},6725:function(t,e,r){var o=r(3395);t.exports={MDXRenderer:o}},3395:function(t,e,r){var o=r(9100),n=r(319),a=r(9713),i=r(7316),l=["scope","children"];function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r(7294),f=r(4983).mdx,p=r(9480).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,a=i(t,l),s=p(e),d=u.useMemo((function(){if(!r)return null;var t=c({React:u,mdx:f},s),e=Object.keys(t),a=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(n(e),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,e]);return u.createElement(d,c({},a))}},2852:function(t){"use strict";t.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/bdbbaf664a8703ebde7ff73aceb10f79/5861f/avatar.png","srcSet":"/static/bdbbaf664a8703ebde7ff73aceb10f79/5861f/avatar.png 50w,\\n/static/bdbbaf664a8703ebde7ff73aceb10f79/90cd3/avatar.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/bdbbaf664a8703ebde7ff73aceb10f79/a713c/avatar.avif 50w,\\n/static/bdbbaf664a8703ebde7ff73aceb10f79/322dd/avatar.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/bdbbaf664a8703ebde7ff73aceb10f79/9afd2/avatar.webp 50w,\\n/static/bdbbaf664a8703ebde7ff73aceb10f79/e64f1/avatar.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-tsx-83d4c4ba26184f142cdf.js.map