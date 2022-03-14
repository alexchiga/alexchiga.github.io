import{c as g,d as D,o as f,r as A,a,b as m,w as p,e as _,f as C,T as y,g as S,h as T,i as h}from"./vendor.8834ec8d.js";const v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const t of u)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(u){const t={};return u.integrity&&(t.integrity=u.integrity),u.referrerpolicy&&(t.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?t.credentials="include":u.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(u){if(u.ep)return;u.ep=!0;const t=s(u);fetch(u.href,t)}};v();const F="modulepreload",l={},P="/",i=function(e,s){return!s||s.length===0?e():Promise.all(s.map(r=>{if(r=`${P}${r}`,r in l)return;l[r]=!0;const u=r.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":F,u||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),u)return new Promise((d,E)=>{n.addEventListener("load",d),n.addEventListener("error",E)})})).then(()=>e())},k={tasks:[],timeMove:"",timeCars:"",timeIdle:""};var c=g({state:{process:k},mutations:{loadedProcess(o,e){o.process=e},openTask(o,e){for(let s=0;s<o.process.tasks.length;s++)s!==e&&(o.process.tasks[s].open=!1);o.process.tasks[e].open=!o.process.tasks[e].open}},actions:{loadState({commit:o}){const e={tasks:[{type:"placement",name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0430 545235",timeStart:"19:20:00",timeEnd:"19:24:50",timeTotal:"4 \u043C\u0438\u043D 50 \u0441\u0435\u043A",progress:70,progressCompleted:50,open:!0,stages:[{type:"route",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043E \u041C12",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:100},{type:"coupling",name:"\u041F\u0440\u0438\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:100},{type:"putShoe",name:"\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:100},{type:"waiting",name:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:100},{type:"uncoupling",name:"\u041E\u0442\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:60},{type:"installFence",name:"\u041E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"removeFence",name:"\u0421\u043D\u044F\u0442\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0}]},{type:"formation",name:"\u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u0430 545235",timeStart:"19:20:00",timeEnd:"19:24:50",timeTotal:"4 \u043C\u0438\u043D 50 \u0441\u0435\u043A",progress:0,progressCompleted:0,open:!1,stages:[{type:"route",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043E \u041C12",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"coupling",name:"\u041F\u0440\u0438\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"putShoe",name:"\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"waiting",name:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"uncoupling",name:"\u041E\u0442\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"installFence",name:"\u041E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"removeFence",name:"\u0421\u043D\u044F\u0442\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0}]},{type:"feeding",name:"\u041F\u043E\u0434\u0430\u0447\u0430 \u0432\u0430\u0433\u043E\u043D\u0430 545235",timeStart:"19:20:00",timeEnd:"19:24:50",timeTotal:"4 \u043C\u0438\u043D 50 \u0441\u0435\u043A",progress:0,progressCompleted:0,open:!1,stages:[{type:"route",name:"\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043E \u041C12",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"coupling",name:"\u041F\u0440\u0438\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"putShoe",name:"\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"waiting",name:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"uncoupling",name:"\u041E\u0442\u0446\u0435\u043F\u043A\u0430",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"installFence",name:"\u041E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0},{type:"removeFence",name:"\u0421\u043D\u044F\u0442\u0438\u0435",timeStart:"19:20:00",timeEnd:"19:22:30",timeTotal:"2 \u043C\u0438\u043D 30 \u0441\u0435\u043A",progress:0}]}],timeMove:"6 \u0447 00 \u043C\u0438\u043D 00 \u0441\u0435\u043A",timeCars:"6 \u0447 00 \u043C\u0438\u043D 00 \u0441\u0435\u043A",timeIdle:"6 \u0447 00 \u043C\u0438\u043D 00 \u0441\u0435\u043A"};setTimeout(()=>{o("loadedProcess",e)},100)}},modules:{},strict:{}.NODE_ENV!=="production"});const L=D({setup(o){return f(()=>{c.dispatch("loadState")}),(e,s)=>{const r=A("router-view");return a(),m(r,null,{default:p(({Component:u})=>[_(y,{name:"slide"},{default:p(()=>[(a(),m(C(u)))]),_:2},1024)]),_:1})}}}),O=[{path:"/",name:"Home",component:()=>i(()=>import("./Home.74b2ca1b.js"),["assets/Home.74b2ca1b.js","assets/Home.f1a313ed.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.8834ec8d.js"])},{path:"/process",name:"Process",component:()=>i(()=>import("./Process.3c0b2f77.js"),["assets/Process.3c0b2f77.js","assets/Process.d185cc47.css","assets/vendor.8834ec8d.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],b=S({history:T("/"),routes:O});i(()=>Promise.resolve({}),["assets/normalize.8181e29b.css"]);i(()=>Promise.resolve({}),["assets/PT-Root-UI.7020da3e.css"]);i(()=>Promise.resolve({}),["assets/MALS.2d75bb36.css"]);h(L).use(c).use(b).mount("#app");export{c as s};
