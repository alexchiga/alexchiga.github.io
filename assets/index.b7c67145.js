import{c as E,d as g,o as f,r as D,a,b as m,w as A,T as C,e as _,f as y,g as S}from"./vendor.2d802fad.js";const T=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const t of u)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(u){const t={};return u.integrity&&(t.integrity=u.integrity),u.referrerpolicy&&(t.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?t.credentials="include":u.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(u){if(u.ep)return;u.ep=!0;const t=s(u);fetch(u.href,t)}};T();const h="modulepreload",p={},v="/",i=function(e,s){return!s||s.length===0?e():Promise.all(s.map(o=>{if(o=`${v}${o}`,o in p)return;p[o]=!0;const u=o.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":h,u||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),u)return new Promise((c,d)=>{n.addEventListener("load",c),n.addEventListener("error",d)})})).then(()=>e())},F={tasks:[],timeMove:"",timeCars:"",timeIdle:""};var l=E({state:{process:F},mutations:{loadedProcess(r,e){r.process=e},openTask(r,e){for(let s=0;s<r.process.tasks.length;s++)s!==e&&(r.process.tasks[s].open=!1);r.process.tasks[e].open=!r.process.tasks[e].open}},actions:{loadState({commit:r}){const e={tasks:[{type:"placement",name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0430 545235",timeStart:"19:20:00",timeEnd:"19:24:50",timeTotal:"4 \u043C\u0438\u043D 50 \u0441\u0435\u043A",progress:70,progressCompleted:50,open:!0,stages:[{type:"route",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043E \u041C12",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:100},{type:"coupling",name:"\u041F\u0440\u0438\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:100},{type:"putShoe",name:"\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:100},{type:"waiting",name:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:100},{type:"uncoupling",name:"\u041E\u0442\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:60},{type:"installFence",name:"\u041E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"removeFence",name:"\u0421\u043D\u044F\u0442\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0}]},{type:"formation",name:"\u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u0430 545235",timeStart:"19:20:00",timeEnd:"19:24:50",timeTotal:"4 \u043C\u0438\u043D 50 \u0441\u0435\u043A",progress:0,progressCompleted:0,open:!1,stages:[{type:"route",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043E \u041C12",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"coupling",name:"\u041F\u0440\u0438\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"putShoe",name:"\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"waiting",name:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"uncoupling",name:"\u041E\u0442\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"installFence",name:"\u041E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"removeFence",name:"\u0421\u043D\u044F\u0442\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0}]},{type:"feeding",name:"\u041F\u043E\u0434\u0430\u0447\u0430 \u0432\u0430\u0433\u043E\u043D\u0430 545235",timeStart:"19:20:00",timeEnd:"19:24:50",timeTotal:"4 \u043C\u0438\u043D 50 \u0441\u0435\u043A",progress:0,progressCompleted:0,open:!1,stages:[{type:"route",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043E \u041C12",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"coupling",name:"\u041F\u0440\u0438\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"putShoe",name:"\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"waiting",name:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"uncoupling",name:"\u041E\u0442\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"installFence",name:"\u041E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"removeFence",name:"\u0421\u043D\u044F\u0442\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0}]}],timeMove:"6 \u0447 00 \u043C\u0438\u043D 00 \u0441\u0435\u043A",timeCars:"6 \u0447 00 \u043C\u0438\u043D 00 \u0441\u0435\u043A",timeIdle:"6 \u0447 00 \u043C\u0438\u043D 00 \u0441\u0435\u043A"};setTimeout(()=>{r("loadedProcess",e)},100)}},modules:{},strict:{}.NODE_ENV!=="production"});const P=g({setup(r){return f(()=>{l.dispatch("loadState")}),(e,s)=>{const o=D("router-view");return a(),m(C,{name:"fade"},{default:A(()=>[(a(),m(o,{style:{position:"absolute"},key:e.$route.path}))]),_:1})}}}),k=[{path:"/",name:"Home",component:()=>i(()=>import("./Home.432d8ff1.js"),["assets/Home.432d8ff1.js","assets/Home.e9f01eac.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2d802fad.js"])},{path:"/process",name:"Process",component:()=>i(()=>import("./Process.e934f564.js"),["assets/Process.e934f564.js","assets/Process.d185cc47.css","assets/vendor.2d802fad.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],L=_({history:y("/"),routes:k});i(()=>Promise.resolve({}),["assets/normalize.8181e29b.css"]);i(()=>Promise.resolve({}),["assets/PT-Root-UI.7020da3e.css"]);i(()=>Promise.resolve({}),["assets/MALS.2d75bb36.css"]);S(P).use(l).use(L).mount("#app");export{l as s};
