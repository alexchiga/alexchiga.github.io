var X=Object.defineProperty,Y=Object.defineProperties;var tt=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var G=(a,h,u)=>h in a?X(a,h,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[h]=u,q=(a,h)=>{for(var u in h||(h={}))et.call(h,u)&&G(a,u,h[u]);if(Z)for(var u of Z(h))nt.call(h,u)&&G(a,u,h[u]);return a},O=(a,h)=>Y(a,tt(h));import{f as st,s as V,g as U}from"./index.e182e2e5.js";var z=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function it(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var N={exports:{}},Q={exports:{}};(function(a,h){(function(u,f){a.exports=f()})(z,function(){var u=u||function(f,D){var c;if(typeof window!="undefined"&&window.crypto&&(c=window.crypto),typeof self!="undefined"&&self.crypto&&(c=self.crypto),typeof globalThis!="undefined"&&globalThis.crypto&&(c=globalThis.crypto),!c&&typeof window!="undefined"&&window.msCrypto&&(c=window.msCrypto),!c&&typeof z!="undefined"&&z.crypto&&(c=z.crypto),!c&&typeof it=="function")try{c=require("crypto")}catch{}var B=function(){if(c){if(typeof c.getRandomValues=="function")try{return c.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof c.randomBytes=="function")try{return c.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},d=Object.create||function(){function t(){}return function(o){var l;return t.prototype=o,l=new t,t.prototype=null,l}}(),x={},e=x.lib={},E=e.Base=function(){return{extend:function(t){var o=d(this);return t&&o.mixIn(t),(!o.hasOwnProperty("init")||this.init===o.init)&&(o.init=function(){o.$super.init.apply(this,arguments)}),o.init.prototype=o,o.$super=this,o},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var o in t)t.hasOwnProperty(o)&&(this[o]=t[o]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),_=e.WordArray=E.extend({init:function(t,o){t=this.words=t||[],o!=D?this.sigBytes=o:this.sigBytes=t.length*4},toString:function(t){return(t||y).stringify(this)},concat:function(t){var o=this.words,l=t.words,p=this.sigBytes,v=t.sigBytes;if(this.clamp(),p%4)for(var k=0;k<v;k++){var F=l[k>>>2]>>>24-k%4*8&255;o[p+k>>>2]|=F<<24-(p+k)%4*8}else for(var C=0;C<v;C+=4)o[p+C>>>2]=l[C>>>2];return this.sigBytes+=v,this},clamp:function(){var t=this.words,o=this.sigBytes;t[o>>>2]&=4294967295<<32-o%4*8,t.length=f.ceil(o/4)},clone:function(){var t=E.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var o=[],l=0;l<t;l+=4)o.push(B());return new _.init(o,t)}}),b=x.enc={},y=b.Hex={stringify:function(t){for(var o=t.words,l=t.sigBytes,p=[],v=0;v<l;v++){var k=o[v>>>2]>>>24-v%4*8&255;p.push((k>>>4).toString(16)),p.push((k&15).toString(16))}return p.join("")},parse:function(t){for(var o=t.length,l=[],p=0;p<o;p+=2)l[p>>>3]|=parseInt(t.substr(p,2),16)<<24-p%8*4;return new _.init(l,o/2)}},w=b.Latin1={stringify:function(t){for(var o=t.words,l=t.sigBytes,p=[],v=0;v<l;v++){var k=o[v>>>2]>>>24-v%4*8&255;p.push(String.fromCharCode(k))}return p.join("")},parse:function(t){for(var o=t.length,l=[],p=0;p<o;p++)l[p>>>2]|=(t.charCodeAt(p)&255)<<24-p%4*8;return new _.init(l,o)}},g=b.Utf8={stringify:function(t){try{return decodeURIComponent(escape(w.stringify(t)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(t){return w.parse(unescape(encodeURIComponent(t)))}},m=e.BufferedBlockAlgorithm=E.extend({reset:function(){this._data=new _.init,this._nDataBytes=0},_append:function(t){typeof t=="string"&&(t=g.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var o,l=this._data,p=l.words,v=l.sigBytes,k=this.blockSize,F=k*4,C=v/F;t?C=f.ceil(C):C=f.max((C|0)-this._minBufferSize,0);var I=C*k,A=f.min(I*4,v);if(I){for(var T=0;T<I;T+=k)this._doProcessBlock(p,T);o=p.splice(0,I),l.sigBytes-=A}return new _.init(o,A)},clone:function(){var t=E.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});e.Hasher=m.extend({cfg:E.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){m.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var o=this._doFinalize();return o},blockSize:16,_createHelper:function(t){return function(o,l){return new t.init(l).finalize(o)}},_createHmacHelper:function(t){return function(o,l){return new S.HMAC.init(t,l).finalize(o)}}});var S=x.algo={};return x}(Math);return u})})(Q);(function(a,h){(function(u,f){a.exports=f(Q.exports)})(z,function(u){return function(f){var D=u,c=D.lib,B=c.WordArray,d=c.Hasher,x=D.algo,e=[];(function(){for(var g=0;g<64;g++)e[g]=f.abs(f.sin(g+1))*4294967296|0})();var E=x.MD5=d.extend({_doReset:function(){this._hash=new B.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,m){for(var S=0;S<16;S++){var t=m+S,o=g[t];g[t]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360}var l=this._hash.words,p=g[m+0],v=g[m+1],k=g[m+2],F=g[m+3],C=g[m+4],I=g[m+5],A=g[m+6],T=g[m+7],$=g[m+8],R=g[m+9],H=g[m+10],W=g[m+11],M=g[m+12],P=g[m+13],j=g[m+14],L=g[m+15],n=l[0],s=l[1],i=l[2],r=l[3];n=_(n,s,i,r,p,7,e[0]),r=_(r,n,s,i,v,12,e[1]),i=_(i,r,n,s,k,17,e[2]),s=_(s,i,r,n,F,22,e[3]),n=_(n,s,i,r,C,7,e[4]),r=_(r,n,s,i,I,12,e[5]),i=_(i,r,n,s,A,17,e[6]),s=_(s,i,r,n,T,22,e[7]),n=_(n,s,i,r,$,7,e[8]),r=_(r,n,s,i,R,12,e[9]),i=_(i,r,n,s,H,17,e[10]),s=_(s,i,r,n,W,22,e[11]),n=_(n,s,i,r,M,7,e[12]),r=_(r,n,s,i,P,12,e[13]),i=_(i,r,n,s,j,17,e[14]),s=_(s,i,r,n,L,22,e[15]),n=b(n,s,i,r,v,5,e[16]),r=b(r,n,s,i,A,9,e[17]),i=b(i,r,n,s,W,14,e[18]),s=b(s,i,r,n,p,20,e[19]),n=b(n,s,i,r,I,5,e[20]),r=b(r,n,s,i,H,9,e[21]),i=b(i,r,n,s,L,14,e[22]),s=b(s,i,r,n,C,20,e[23]),n=b(n,s,i,r,R,5,e[24]),r=b(r,n,s,i,j,9,e[25]),i=b(i,r,n,s,F,14,e[26]),s=b(s,i,r,n,$,20,e[27]),n=b(n,s,i,r,P,5,e[28]),r=b(r,n,s,i,k,9,e[29]),i=b(i,r,n,s,T,14,e[30]),s=b(s,i,r,n,M,20,e[31]),n=y(n,s,i,r,I,4,e[32]),r=y(r,n,s,i,$,11,e[33]),i=y(i,r,n,s,W,16,e[34]),s=y(s,i,r,n,j,23,e[35]),n=y(n,s,i,r,v,4,e[36]),r=y(r,n,s,i,C,11,e[37]),i=y(i,r,n,s,T,16,e[38]),s=y(s,i,r,n,H,23,e[39]),n=y(n,s,i,r,P,4,e[40]),r=y(r,n,s,i,p,11,e[41]),i=y(i,r,n,s,F,16,e[42]),s=y(s,i,r,n,A,23,e[43]),n=y(n,s,i,r,R,4,e[44]),r=y(r,n,s,i,M,11,e[45]),i=y(i,r,n,s,L,16,e[46]),s=y(s,i,r,n,k,23,e[47]),n=w(n,s,i,r,p,6,e[48]),r=w(r,n,s,i,T,10,e[49]),i=w(i,r,n,s,j,15,e[50]),s=w(s,i,r,n,I,21,e[51]),n=w(n,s,i,r,M,6,e[52]),r=w(r,n,s,i,F,10,e[53]),i=w(i,r,n,s,H,15,e[54]),s=w(s,i,r,n,v,21,e[55]),n=w(n,s,i,r,$,6,e[56]),r=w(r,n,s,i,L,10,e[57]),i=w(i,r,n,s,A,15,e[58]),s=w(s,i,r,n,P,21,e[59]),n=w(n,s,i,r,C,6,e[60]),r=w(r,n,s,i,W,10,e[61]),i=w(i,r,n,s,k,15,e[62]),s=w(s,i,r,n,R,21,e[63]),l[0]=l[0]+n|0,l[1]=l[1]+s|0,l[2]=l[2]+i|0,l[3]=l[3]+r|0},_doFinalize:function(){var g=this._data,m=g.words,S=this._nDataBytes*8,t=g.sigBytes*8;m[t>>>5]|=128<<24-t%32;var o=f.floor(S/4294967296),l=S;m[(t+64>>>9<<4)+15]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360,m[(t+64>>>9<<4)+14]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360,g.sigBytes=(m.length+1)*4,this._process();for(var p=this._hash,v=p.words,k=0;k<4;k++){var F=v[k];v[k]=(F<<8|F>>>24)&16711935|(F<<24|F>>>8)&4278255360}return p},clone:function(){var g=d.clone.call(this);return g._hash=this._hash.clone(),g}});function _(g,m,S,t,o,l,p){var v=g+(m&S|~m&t)+o+p;return(v<<l|v>>>32-l)+m}function b(g,m,S,t,o,l,p){var v=g+(m&t|S&~t)+o+p;return(v<<l|v>>>32-l)+m}function y(g,m,S,t,o,l,p){var v=g+(m^S^t)+o+p;return(v<<l|v>>>32-l)+m}function w(g,m,S,t,o,l,p){var v=g+(S^(m|~t))+o+p;return(v<<l|v>>>32-l)+m}D.MD5=d._createHelper(E),D.HmacMD5=d._createHmacHelper(E)}(Math),u.MD5})})(N);var rt=N.exports;const J="db5",ut={operations:[],timeMove:"",timeCars:"",timeIdle:""};function ot(a,h){const u=h>>>3,f=h&7;return a[u]&1<<f?1:0}function K(a,h,u){let f=0;for(let D=0;D<u;D++)f|=ot(a,h+D)<<D;return f}const ct=st({id:"mainStore",state:()=>({time:{system:new Date,delta:5*6e4},color:"green",mals:{engine:"\u2014",radio:0,control:!1,nocontrolSwitch:!1,vagonControl:!1,workplace:!1,malfunction:!1,dspstop:!1,soststop:!1,braking:!1},field:V({hash:"",states:"",statesBuffer:new Uint8Array}),in:{type:"\u2014",control:!1,reversor:0,pk:0,kv:0,epk:!1,diesel:!1,rb:!1,boks:!1},sensors:{di_run:0,di_v:0,di_a:0,dd_cyl:0,dd_mag:0,dd_urv:0,dt:0},route:{zones:[],bu:[],headDst:0,headSrc:0},model:V({id:{},lights:{items:[]},hash:""}),process:ut,buttons:{cruise:!1,pull:!1},plan:{id:"",open:0,operationID:null,stageID:null,operations:[]},windows:{engines:!1,call:!1},engines:[]}),getters:{getDirection(){return this.sensors.di_v!==0?this.sensors.di_v>0:this.in.reversor>=0},getSpeed(){if(this.route.zones.length>1){const a=this.getDirection?1:0;return{current:Math.round(Math.abs(this.sensors.di_v)),limit:Math.round(this.route.zones[a].vd),target:Math.round(this.route.zones[a].vt)}}return{current:0,limit:0,target:0}},getSignalColorByID:a=>h=>{let u="none";if(a.model.id[h]&&a.model.id){const{bits:f}=a.model.id[h];switch(K(a.field.statesBuffer,f[0],f[1])){case 0:u="blue";break;case 1:u="white";break;case 2:u="blue";break;case 3:u="blue";break;case 4:u="red";break;case 5:u="yellow";break;case 6:u="yellow";break;case 7:u="green";break;default:u="blue"}}return u},getSignalColor(){if(this.route.zones.length>1){const a=this.getDirection?1:0;return this.getSignalColorByID(this.route.zones[a].lightid)}return"none"},getZone:a=>h=>{if(a.route.zones.length>1){const u=(()=>{var B,d;return a.route.zones[h].endtype==="light"?((B=a.model.id[a.route.zones[h].lightid])==null?void 0:B.name)||"?":a.route.zones[h].endtype==="section"&&((d=a.model.id[a.route.zones[h].lastbuid])==null?void 0:d.name)||"?"})();let f="\u2014";const D=a.route.zones[h].sd,c=Math.round(a.route.zones[h].vd);switch(a.route.zones[h].route){case"behind-light":f=`\u0437\u0430 ${u}`;break;case"before-light":f=`\u0434\u043E ${u}`;break;case"shunt-way":f=`\u043D\u0430 \u0437\u0430\u043D\u044F\u0442\u044B\u0439 ${u}`;break;case"deadend":f="\u0432 \u0442\u0443\u043F\u0438\u043A";break;case"free-way":f=`\u043D\u0430 \u043F\u0443\u0442\u044C ${u}`;break;case"span":f="\u043D\u0430 \u043F\u0435\u0440\u0435\u0433\u043E\u043D";break;case"away":f="\u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u044B";break;case"mount-pull":f=`\u043F\u043E\u0434\u0442\u044F\u0433\u0438\u0432\u0430\u043D\u0438\u0435 ${u}`;break;case"mount-push":f=`\u043D\u0430\u0434\u0432\u0438\u0433 ${u}`;break;case"mount-sort":f=`\u0440\u043E\u0441\u043F\u0443\u0441\u043A ${u}`;break;case"mount-back":f=`\u043E\u0441\u0430\u0436\u0438\u0432\u0430\u043D\u0438\u0435 ${u}`;break;case"none":f="\u043D\u0435\u0442";break;default:f=a.route.zones[h].route}return{text:f,distance:D,limit:c}}return{text:"\u2014",distance:0,limit:0}},getZoneFront(){return this.getZone(1)},getZoneBack(){return this.getZone(0)},getTime(){const a=new Date(this.time.system.getTime()+this.time.delta);return`${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`}},actions:{updateTime(){this.time.system=new Date},openOperation(a){this.plan.open===a?this.plan.open=-1:this.plan.open=a},async fetchCycle(a){try{const{data:h}=await U.get(`/${J}/now?engines_version=2`),u=h.engines.find(c=>c.mals.engine==a);h.field.hash!==this.model.hash&&await this.fetchModel(),this.mals.engine=u.mals.engine,u.mals.radio.timeout<=3?this.mals.radio=4:u.mals.radio.timeout<=6?this.mals.radio=3:u.mals.radio.timeout<=9?this.mals.radio=2:u.mals.radio.timeout<=12?this.mals.radio=1:u.mals.radio.timeout<=15&&(this.mals.radio=0),this.mals.control=u.mals.control,this.mals.nocontrolSwitch=u.mals.nocontrol_switch,this.mals.vagonControl=u.mals.vagon_control,this.mals.workplace=u.mals.workplace,this.mals.malfunction=u.mals.malfunction,this.mals.dspstop=u.mals.dspstop,this.mals.soststop=u.mals.soststop,this.mals.braking=u.mals.braking||!1,this.field=O(q({},h.field),{statesBuffer:Uint8Array.from(window.atob(h.field.states),c=>c.charCodeAt(0))}),this.in=u.in,this.sensors=u.sensors,this.route.zones=u.route.zones,this.route.bu.splice(0,this.route.bu.length),this.route.headDst=0,this.route.headSrc=0;let f=null;if(u.route.rails.zone){for(let d=0;d<u.route.rails.zone.length;d++){const x=u.route.rails.zone[d],e=this.model.id[x],{buId:E}=e;let _="noControl";if(E){const{bits:b}=this.model.id[E],y=K(this.field.statesBuffer,b[0],b[1]),w=Boolean(y&1),g=Boolean((y&2)>>1),m=Boolean((y&4)>>2),S=Boolean((y&8)>>3);w?g?_="shunt":m?S?_="train-route":_="route":_="free":_="no-control"}if(E!==f&&this.route.bu.push({state:_,buId:E,length:0,headSrc:null,headDst:null,engine:null}),x===u.route.rails.head_dst[0]&&(this.route.bu[this.route.bu.length-1].headDst=u.route.rails.head_dst[1]+this.route.bu[this.route.bu.length-1].length),x===u.route.rails.head_src[0]&&(this.route.bu[this.route.bu.length-1].headSrc=u.route.rails.head_src[1]+this.route.bu[this.route.bu.length-1].length),x===u.position.railid&&(this.route.bu[this.route.bu.length-1].engine=u.position.raildist+this.route.bu[this.route.bu.length-1].length),this.route.bu[this.route.bu.length-1].length+=e.length,e.srcType==="\u0441\u0442\u044B\u043A"){const{srcId:b}=e,y=this.model.lights.items.find(w=>w.jointId===b&&w.railId===x);y&&(this.route.bu[this.route.bu.length-1].srcSignal=this.getSignalColorByID(y.id),this.route.bu[this.route.bu.length-1].srcName=y.name)}if(e.dstType==="\u0441\u0442\u044B\u043A"){const{dstId:b}=e,y=this.model.lights.items.find(w=>w.jointId===b&&w.railId===x);y&&(this.route.bu[this.route.bu.length-1].dstSignal=this.getSignalColorByID(y.id),this.route.bu[this.route.bu.length-1].dstName=y.name)}f=E}const c=this.route.bu.findIndex(d=>d.headSrc!==null);if(c>=0){const d=this.route.bu[c];this.route.headSrc=(c+d.headSrc/d.length)/this.route.bu.length*100}const B=this.route.bu.findIndex(d=>d.headDst!==null);if(B>=0){const d=this.route.bu[B];this.route.headDst=(B+d.headDst/d.length)/this.route.bu.length*100}}u.plan.plan_id!==null&&u.plan.plan_id!==this.plan.id&&await this.fetchPlan(a),this.plan.operationID=u.plan.oper_id,this.plan.stageID=u.plan.stage_id;let D=!0;for(let c=0;c<this.plan.operations.length;c++){const B=this.plan.operations[c];for(let d=0;d<B.stages.length;d++){const x=B.stages[d];if(this.plan.operationID===null||x.id===this.plan.stageID)if(D=!1,this.plan.operationID!==null){const e=new Date(x.times.start),E=new Date(x.times.end);let b=(new Date(this.time.system.getTime()+this.time.delta).getTime()-e.getTime())/(E.getTime()-e.getTime());b>1&&(b=1),B.progress=(d+b)/B.stages.length*100}else B.progress=0;x.finished=D}B.finished=B.stages[B.stages.length-1].finished,B.finished&&(B.progress=100)}this.engines.splice(0,this.engines.length),h.engines.forEach(c=>{this.engines.push(c.mals.engine)})}catch(h){console.log(h)}},async fetchModel(){try{const a=["parks","points","joints","switches","bu","lights","rails"],{data:h}=await U.get(`/${J}/field/model`);h.hash=rt(JSON.stringify(h)).toString(),h.id={},a.forEach(u=>{h[u].items.forEach(f=>{h.id[f.id]=O(q({},f),{objectType:u})})}),this.model=h}catch(a){console.log(a)}},async fetchPlan(a){var h,u;try{const{data:f}=await U.get(`/db5/plan?engine=${a}`);for(let D=0;D<f.data.operations.length;D++){const c=f.data.operations[D];switch(c.type){case"arrival":c.text="\u041F\u0440\u0438\u0431\u044B\u0442\u0438\u0435";break;case"departure":c.text="\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435";break;case"cars_coupling":c.text="\u041F\u0440\u0438\u0446\u0435\u043F\u043A\u0430 \u0432\u0430\u0433\u043E\u043D\u043E\u0432";break;case"cars_uncoupling":c.text="\u041E\u0442\u0446\u0435\u043F\u043A\u0430 \u0432\u0430\u0433\u043E\u043D\u043E\u0432";break;case"engine_coupling":c.text="\u041F\u0440\u0438\u0446\u0435\u043F\u043A\u0430 \u043B\u043E\u043A\u043E\u043C\u043E\u0442\u0438\u0432\u0430";break;case"engine_uncoupling":c.text="\u041E\u0442\u0446\u0435\u043F\u043A\u0430 \u043B\u043E\u043A\u043E\u043C\u043E\u0442\u0438\u0432\u0430";break;case"forming":c.text="\u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435";break;case"splitting":c.text=`\u0420\u0430\u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u0430 c \u043F\u0443\u0442\u0438 ${c.wayFrom} \u043F\u0430\u0440\u043A\u0430 ${c.yardFrom} \u0432 \u043F\u0430\u0440\u043A ${c.yardWhere}`;break;case"feeding":c.text="\u041F\u043E\u0434\u0430\u0447\u0430";break;case"picking":c.text="\u0423\u0431\u043E\u0440\u043A\u0430";break;case"placement":c.text="\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0430";break;case"relocation":c.text="\u041F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430";break;default:c.text=c.type}for(let B=0;B<c.stages.length;B++){const d=c.stages[B];switch(d.type){case"coupling":d.text="\u0421\u0446\u0435\u043F\u043A\u0430";break;case"uncoupling":d.text="\u041E\u0442\u0446\u0435\u043F\u043A\u0430";break;case"route":if(d.text="\u041C\u0430\u0440\u0448\u0440\u0443\u0442",(h=d.bu_id)!=null&&h.start){const x=this.model.id[d.bu_id.start],e=this.model.id[x.buId].name;d.text+=` c ${e}`}if((u=d.bu_id)!=null&&u.end){const x=this.model.id[d.bu_id.start],e=this.model.id[x.buId].name;d.text+=` \u043D\u0430 ${e}`}break;case"idle":d.text="\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435";break;case"pulling":d.text="\u041F\u043E\u0434\u0442\u044F\u0433\u0438\u0432\u0430\u043D\u0438\u0435";break;case"thrust":d.text="\u041D\u0430\u0434\u0432\u0438\u0433";break;case"dissolution":d.text="\u0420\u043E\u0441\u043F\u0443\u0441\u043A";break;default:d.text=d.type}if(d.route_type==="before_light"&&d.light_id){const x=this.model.id[d.light_id];x&&x.name&&(d.text+=` \u0434\u043E ${x.name}`)}d.finished=!1}c.finished=!1}this.plan.id=f.data.id,this.plan.operations.splice(0,this.plan.operations),this.plan.operations=f.data.operations}catch(f){console.log(f)}},async fetchPlanInfo(){const{data:a}=await U.get("/db5/planinfo"),h=new Date(a.data.sysDate);this.time.delta=h.getTime()-this.time.system.getTime()}}});export{ct as u};
