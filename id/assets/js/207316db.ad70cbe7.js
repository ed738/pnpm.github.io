"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3455],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(r),s=a,f=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(2848),a=r(9213),i=(r(9496),r(9613)),o=["components"],p={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"Added in: v7.4.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/id/next/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/id/next/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/id/next/cli/patch-commit"}},d={},u=[],m={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v7.4.0"),(0,i.kt)("p",null,"Prepare a package for patching (inspired by a similar command in Yarn)."),(0,i.kt)("p",null,"This command will cause a package to be extracted in a temporary directory intended to be editable at will."),(0,i.kt)("p",null,"Once you're done with your changes, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (with ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," being the temporary directory you received) to generate a patchfile and register it into your top-level manifest via the ",(0,i.kt)("a",{parentName:"p",href:"/id/next/package_json#pnpmpatcheddependencies"},(0,i.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," field."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/gtwp38epD6o",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}s.isMDXComponent=!0}}]);