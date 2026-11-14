var eg=Object.defineProperty;var ig=(t,n,e)=>n in t?eg(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var sg=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var v0=(t,n,e)=>ig(t,typeof n!="symbol"?n+"":n,e);var JS=sg((QS,Qi)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=e(o);fetch(o.href,u)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Go(t){const n=Object.create(null);for(const e of t.split(","))n[e]=1;return e=>e in n}const M0={},Me=[],Tr=()=>{},og=()=>!1,gs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),jo=t=>t.startsWith("onUpdate:"),un=Object.assign,Ko=(t,n)=>{const e=t.indexOf(n);e>-1&&t.splice(e,1)},lg=Object.prototype.hasOwnProperty,p0=(t,n)=>lg.call(t,n),Pt=Array.isArray,Te=t=>N1(t)==="[object Map]",Le=t=>N1(t)==="[object Set]",la=t=>N1(t)==="[object Date]",Wt=t=>typeof t=="function",q0=t=>typeof t=="string",Or=t=>typeof t=="symbol",E0=t=>t!==null&&typeof t=="object",Rc=t=>(E0(t)||Wt(t))&&Wt(t.then)&&Wt(t.catch),Ac=Object.prototype.toString,N1=t=>Ac.call(t),ug=t=>N1(t).slice(8,-1),$c=t=>N1(t)==="[object Object]",zo=t=>q0(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,g1=Go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ps=t=>{const n=Object.create(null);return e=>n[e]||(n[e]=t(e))},ag=/-(\w)/g,ir=ps(t=>t.replace(ag,(n,e)=>e?e.toUpperCase():"")),cg=/\B([A-Z])/g,Q2=ps(t=>t.replace(cg,"-$1").toLowerCase()),ms=ps(t=>t.charAt(0).toUpperCase()+t.slice(1)),X3=ps(t=>t?`on${ms(t)}`:""),E2=(t,n)=>!Object.is(t,n),Gi=(t,...n)=>{for(let e=0;e<t.length;e++)t[e](...n)},Pc=(t,n,e,s=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:s,value:e})},ts=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let ua;const vs=()=>ua||(ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function K2(t){if(Pt(t)){const n={};for(let e=0;e<t.length;e++){const s=t[e],o=q0(s)?dg(s):K2(s);if(o)for(const u in o)n[u]=o[u]}return n}else if(q0(t)||E0(t))return t}const fg=/;(?![^(]*\))/g,hg=/:([^]+)/,_g=/\/\*[^]*?\*\//g;function dg(t){const n={};return t.replace(_g,"").split(fg).forEach(e=>{if(e){const s=e.split(hg);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function Zo(t){let n="";if(q0(t))n=t;else if(Pt(t))for(let e=0;e<t.length;e++){const s=Zo(t[e]);s&&(n+=s+" ")}else if(E0(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}const gg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pg=Go(gg);function Ic(t){return!!t||t===""}function mg(t,n){if(t.length!==n.length)return!1;let e=!0;for(let s=0;e&&s<t.length;s++)e=Y1(t[s],n[s]);return e}function Y1(t,n){if(t===n)return!0;let e=la(t),s=la(n);if(e||s)return e&&s?t.getTime()===n.getTime():!1;if(e=Or(t),s=Or(n),e||s)return t===n;if(e=Pt(t),s=Pt(n),e||s)return e&&s?mg(t,n):!1;if(e=E0(t),s=E0(n),e||s){if(!e||!s)return!1;const o=Object.keys(t).length,u=Object.keys(n).length;if(o!==u)return!1;for(const a in t){const f=t.hasOwnProperty(a),h=n.hasOwnProperty(a);if(f&&!h||!f&&h||!Y1(t[a],n[a]))return!1}}return String(t)===String(n)}function Jo(t,n){return t.findIndex(e=>Y1(e,n))}const Nc=t=>!!(t&&t.__v_isRef===!0),gt=t=>q0(t)?t:t==null?"":Pt(t)||E0(t)&&(t.toString===Ac||!Wt(t.toString))?Nc(t)?gt(t.value):JSON.stringify(t,Yc,2):String(t),Yc=(t,n)=>Nc(n)?Yc(t,n.value):Te(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[s,o],u)=>(e[Q3(s,u)+" =>"]=o,e),{})}:Le(n)?{[`Set(${n.size})`]:[...n.values()].map(e=>Q3(e))}:Or(n)?Q3(n):E0(n)&&!Pt(n)&&!$c(n)?String(n):n,Q3=(t,n="")=>{var e;return Or(t)?`Symbol(${(e=t.description)!=null?e:n})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Un;class vg{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Un,!n&&Un&&(this.index=(Un.scopes||(Un.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,e;if(this.scopes)for(n=0,e=this.scopes.length;n<e;n++)this.scopes[n].pause();for(n=0,e=this.effects.length;n<e;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,e;if(this.scopes)for(n=0,e=this.scopes.length;n<e;n++)this.scopes[n].resume();for(n=0,e=this.effects.length;n<e;n++)this.effects[n].resume()}}run(n){if(this._active){const e=Un;try{return Un=this,n()}finally{Un=e}}}on(){Un=this}off(){Un=this.parent}stop(n){if(this._active){this._active=!1;let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(this.effects.length=0,e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function yg(){return Un}let O0;const to=new WeakSet;class Lc{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Un&&Un.active&&Un.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,to.has(this)&&(to.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,aa(this),Uc(this);const n=O0,e=_r;O0=this,_r=!0;try{return this.fn()}finally{Hc(this),O0=n,_r=e,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)t4(n);this.deps=this.depsTail=void 0,aa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?to.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bo(this)&&this.run()}get dirty(){return bo(this)}}let Fc=0,p1,m1;function Wc(t,n=!1){if(t.flags|=8,n){t.next=m1,m1=t;return}t.next=p1,p1=t}function Xo(){Fc++}function Qo(){if(--Fc>0)return;if(m1){let n=m1;for(m1=void 0;n;){const e=n.next;n.next=void 0,n.flags&=-9,n=e}}let t;for(;p1;){let n=p1;for(p1=void 0;n;){const e=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){t||(t=s)}n=e}}if(t)throw t}function Uc(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Hc(t){let n,e=t.depsTail,s=e;for(;s;){const o=s.prevDep;s.version===-1?(s===e&&(e=o),t4(s),xg(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}t.deps=n,t.depsTail=e}function bo(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(qc(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function qc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===S1))return;t.globalVersion=S1;const n=t.dep;if(t.flags|=2,n.version>0&&!t.isSSR&&t.deps&&!bo(t)){t.flags&=-3;return}const e=O0,s=_r;O0=t,_r=!0;try{Uc(t);const o=t.fn(t._value);(n.version===0||E2(o,t._value))&&(t._value=o,n.version++)}catch(o){throw n.version++,o}finally{O0=e,_r=s,Hc(t),t.flags&=-3}}function t4(t,n=!1){const{dep:e,prevSub:s,nextSub:o}=t;if(s&&(s.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=s,t.nextSub=void 0),e.subs===t&&(e.subs=s,!s&&e.computed)){e.computed.flags&=-5;for(let u=e.computed.deps;u;u=u.nextDep)t4(u,!0)}!n&&!--e.sc&&e.map&&e.map.delete(e.key)}function xg(t){const{prevDep:n,nextDep:e}=t;n&&(n.nextDep=e,t.prevDep=void 0),e&&(e.prevDep=n,t.nextDep=void 0)}let _r=!0;const Vc=[];function C2(){Vc.push(_r),_r=!1}function R2(){const t=Vc.pop();_r=t===void 0?!0:t}function aa(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const e=O0;O0=void 0;try{n()}finally{O0=e}}}let S1=0;class wg{constructor(n,e){this.sub=n,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class n4{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!O0||!_r||O0===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==O0)e=this.activeLink=new wg(O0,this),O0.deps?(e.prevDep=O0.depsTail,O0.depsTail.nextDep=e,O0.depsTail=e):O0.deps=O0.depsTail=e,Bc(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const s=e.nextDep;s.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=s),e.prevDep=O0.depsTail,e.nextDep=void 0,O0.depsTail.nextDep=e,O0.depsTail=e,O0.deps===e&&(O0.deps=s)}return e}trigger(n){this.version++,S1++,this.notify(n)}notify(n){Xo();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Qo()}}}function Bc(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)Bc(s)}const e=t.dep.subs;e!==t&&(t.prevSub=e,e&&(e.nextSub=t)),t.dep.subs=t}}const ko=new WeakMap,z2=Symbol(""),So=Symbol(""),M1=Symbol("");function mn(t,n,e){if(_r&&O0){let s=ko.get(t);s||ko.set(t,s=new Map);let o=s.get(e);o||(s.set(e,o=new n4),o.map=s,o.key=e),o.track()}}function Zr(t,n,e,s,o,u){const a=ko.get(t);if(!a){S1++;return}const f=h=>{h&&h.trigger()};if(Xo(),n==="clear")a.forEach(f);else{const h=Pt(t),p=h&&zo(e);if(h&&e==="length"){const v=Number(s);a.forEach((y,S)=>{(S==="length"||S===M1||!Or(S)&&S>=v)&&f(y)})}else switch((e!==void 0||a.has(void 0))&&f(a.get(e)),p&&f(a.get(M1)),n){case"add":h?p&&f(a.get("length")):(f(a.get(z2)),Te(t)&&f(a.get(So)));break;case"delete":h||(f(a.get(z2)),Te(t)&&f(a.get(So)));break;case"set":Te(t)&&f(a.get(z2));break}}Qo()}function pe(t){const n=g0(t);return n===t?n:(mn(n,"iterate",M1),er(t)?n:n.map(vn))}function ys(t){return mn(t=g0(t),"iterate",M1),t}const bg={__proto__:null,[Symbol.iterator](){return no(this,Symbol.iterator,vn)},concat(...t){return pe(this).concat(...t.map(n=>Pt(n)?pe(n):n))},entries(){return no(this,"entries",t=>(t[1]=vn(t[1]),t))},every(t,n){return Vr(this,"every",t,n,void 0,arguments)},filter(t,n){return Vr(this,"filter",t,n,e=>e.map(vn),arguments)},find(t,n){return Vr(this,"find",t,n,vn,arguments)},findIndex(t,n){return Vr(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Vr(this,"findLast",t,n,vn,arguments)},findLastIndex(t,n){return Vr(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Vr(this,"forEach",t,n,void 0,arguments)},includes(...t){return ro(this,"includes",t)},indexOf(...t){return ro(this,"indexOf",t)},join(t){return pe(this).join(t)},lastIndexOf(...t){return ro(this,"lastIndexOf",t)},map(t,n){return Vr(this,"map",t,n,void 0,arguments)},pop(){return s1(this,"pop")},push(...t){return s1(this,"push",t)},reduce(t,...n){return ca(this,"reduce",t,n)},reduceRight(t,...n){return ca(this,"reduceRight",t,n)},shift(){return s1(this,"shift")},some(t,n){return Vr(this,"some",t,n,void 0,arguments)},splice(...t){return s1(this,"splice",t)},toReversed(){return pe(this).toReversed()},toSorted(t){return pe(this).toSorted(t)},toSpliced(...t){return pe(this).toSpliced(...t)},unshift(...t){return s1(this,"unshift",t)},values(){return no(this,"values",vn)}};function no(t,n,e){const s=ys(t),o=s[n]();return s!==t&&!er(t)&&(o._next=o.next,o.next=()=>{const u=o._next();return u.value&&(u.value=e(u.value)),u}),o}const kg=Array.prototype;function Vr(t,n,e,s,o,u){const a=ys(t),f=a!==t&&!er(t),h=a[n];if(h!==kg[n]){const y=h.apply(t,u);return f?vn(y):y}let p=e;a!==t&&(f?p=function(y,S){return e.call(this,vn(y),S,t)}:e.length>2&&(p=function(y,S){return e.call(this,y,S,t)}));const v=h.call(a,p,s);return f&&o?o(v):v}function ca(t,n,e,s){const o=ys(t);let u=e;return o!==t&&(er(t)?e.length>3&&(u=function(a,f,h){return e.call(this,a,f,h,t)}):u=function(a,f,h){return e.call(this,a,vn(f),h,t)}),o[n](u,...s)}function ro(t,n,e){const s=g0(t);mn(s,"iterate",M1);const o=s[n](...e);return(o===-1||o===!1)&&i4(e[0])?(e[0]=g0(e[0]),s[n](...e)):o}function s1(t,n,e=[]){C2(),Xo();const s=g0(t)[n].apply(t,e);return Qo(),R2(),s}const Sg=Go("__proto__,__v_isRef,__isVue"),Gc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Or));function Mg(t){Or(t)||(t=String(t));const n=g0(this);return mn(n,"has",t),n.hasOwnProperty(t)}class jc{constructor(n=!1,e=!1){this._isReadonly=n,this._isShallow=e}get(n,e,s){if(e==="__v_skip")return n.__v_skip;const o=this._isReadonly,u=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return u;if(e==="__v_raw")return s===(o?u?Ig:Jc:u?Zc:zc).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const a=Pt(n);if(!o){let h;if(a&&(h=bg[e]))return h;if(e==="hasOwnProperty")return Mg}const f=Reflect.get(n,e,xn(n)?n:s);return(Or(e)?Gc.has(e):Sg(e))||(o||mn(n,"get",e),u)?f:xn(f)?a&&zo(e)?f:f.value:E0(f)?o?Qc(f):xs(f):f}}class Kc extends jc{constructor(n=!1){super(!1,n)}set(n,e,s,o){let u=n[e];if(!this._isShallow){const h=J2(u);if(!er(s)&&!J2(s)&&(u=g0(u),s=g0(s)),!Pt(n)&&xn(u)&&!xn(s))return h?!1:(u.value=s,!0)}const a=Pt(n)&&zo(e)?Number(e)<n.length:p0(n,e),f=Reflect.set(n,e,s,xn(n)?n:o);return n===g0(o)&&(a?E2(s,u)&&Zr(n,"set",e,s):Zr(n,"add",e,s)),f}deleteProperty(n,e){const s=p0(n,e);n[e];const o=Reflect.deleteProperty(n,e);return o&&s&&Zr(n,"delete",e,void 0),o}has(n,e){const s=Reflect.has(n,e);return(!Or(e)||!Gc.has(e))&&mn(n,"has",e),s}ownKeys(n){return mn(n,"iterate",Pt(n)?"length":z2),Reflect.ownKeys(n)}}class Tg extends jc{constructor(n=!1){super(!0,n)}set(n,e){return!0}deleteProperty(n,e){return!0}}const Og=new Kc,Eg=new Tg,Dg=new Kc(!0),Mo=t=>t,Li=t=>Reflect.getPrototypeOf(t);function Cg(t,n,e){return function(...s){const o=this.__v_raw,u=g0(o),a=Te(u),f=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,p=o[t](...s),v=e?Mo:n?To:vn;return!n&&mn(u,"iterate",h?So:z2),{next(){const{value:y,done:S}=p.next();return S?{value:y,done:S}:{value:f?[v(y[0]),v(y[1])]:v(y),done:S}},[Symbol.iterator](){return this}}}}function Fi(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function Rg(t,n){const e={get(o){const u=this.__v_raw,a=g0(u),f=g0(o);t||(E2(o,f)&&mn(a,"get",o),mn(a,"get",f));const{has:h}=Li(a),p=n?Mo:t?To:vn;if(h.call(a,o))return p(u.get(o));if(h.call(a,f))return p(u.get(f));u!==a&&u.get(o)},get size(){const o=this.__v_raw;return!t&&mn(g0(o),"iterate",z2),Reflect.get(o,"size",o)},has(o){const u=this.__v_raw,a=g0(u),f=g0(o);return t||(E2(o,f)&&mn(a,"has",o),mn(a,"has",f)),o===f?u.has(o):u.has(o)||u.has(f)},forEach(o,u){const a=this,f=a.__v_raw,h=g0(f),p=n?Mo:t?To:vn;return!t&&mn(h,"iterate",z2),f.forEach((v,y)=>o.call(u,p(v),p(y),a))}};return un(e,t?{add:Fi("add"),set:Fi("set"),delete:Fi("delete"),clear:Fi("clear")}:{add(o){!n&&!er(o)&&!J2(o)&&(o=g0(o));const u=g0(this);return Li(u).has.call(u,o)||(u.add(o),Zr(u,"add",o,o)),this},set(o,u){!n&&!er(u)&&!J2(u)&&(u=g0(u));const a=g0(this),{has:f,get:h}=Li(a);let p=f.call(a,o);p||(o=g0(o),p=f.call(a,o));const v=h.call(a,o);return a.set(o,u),p?E2(u,v)&&Zr(a,"set",o,u):Zr(a,"add",o,u),this},delete(o){const u=g0(this),{has:a,get:f}=Li(u);let h=a.call(u,o);h||(o=g0(o),h=a.call(u,o)),f&&f.call(u,o);const p=u.delete(o);return h&&Zr(u,"delete",o,void 0),p},clear(){const o=g0(this),u=o.size!==0,a=o.clear();return u&&Zr(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Cg(o,t,n)}),e}function r4(t,n){const e=Rg(t,n);return(s,o,u)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?s:Reflect.get(p0(e,o)&&o in s?e:s,o,u)}const Ag={get:r4(!1,!1)},$g={get:r4(!1,!0)},Pg={get:r4(!0,!1)},zc=new WeakMap,Zc=new WeakMap,Jc=new WeakMap,Ig=new WeakMap;function Ng(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yg(t){return t.__v_skip||!Object.isExtensible(t)?0:Ng(ug(t))}function xs(t){return J2(t)?t:e4(t,!1,Og,Ag,zc)}function Xc(t){return e4(t,!1,Dg,$g,Zc)}function Qc(t){return e4(t,!0,Eg,Pg,Jc)}function e4(t,n,e,s,o){if(!E0(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const u=o.get(t);if(u)return u;const a=Yg(t);if(a===0)return t;const f=new Proxy(t,a===2?s:e);return o.set(t,f),f}function Oe(t){return J2(t)?Oe(t.__v_raw):!!(t&&t.__v_isReactive)}function J2(t){return!!(t&&t.__v_isReadonly)}function er(t){return!!(t&&t.__v_isShallow)}function i4(t){return t?!!t.__v_raw:!1}function g0(t){const n=t&&t.__v_raw;return n?g0(n):t}function Lg(t){return!p0(t,"__v_skip")&&Object.isExtensible(t)&&Pc(t,"__v_skip",!0),t}const vn=t=>E0(t)?xs(t):t,To=t=>E0(t)?Qc(t):t;function xn(t){return t?t.__v_isRef===!0:!1}function Mt(t){return tf(t,!1)}function Fg(t){return tf(t,!0)}function tf(t,n){return xn(t)?t:new Wg(t,n)}class Wg{constructor(n,e){this.dep=new n4,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?n:g0(n),this._value=e?n:vn(n),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(n){const e=this._rawValue,s=this.__v_isShallow||er(n)||J2(n);n=s?n:g0(n),E2(n,e)&&(this._rawValue=n,this._value=s?n:vn(n),this.dep.trigger())}}function k0(t){return xn(t)?t.value:t}const Ug={get:(t,n,e)=>n==="__v_raw"?t:k0(Reflect.get(t,n,e)),set:(t,n,e,s)=>{const o=t[n];return xn(o)&&!xn(e)?(o.value=e,!0):Reflect.set(t,n,e,s)}};function nf(t){return Oe(t)?t:new Proxy(t,Ug)}class Hg{constructor(n,e,s){this.fn=n,this.setter=e,this._value=void 0,this.dep=new n4(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=S1-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&O0!==this)return Wc(this,!0),!0}get value(){const n=this.dep.track();return qc(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function qg(t,n,e=!1){let s,o;return Wt(t)?s=t:(s=t.get,o=t.set),new Hg(s,o,e)}const Wi={},ns=new WeakMap;let B2;function Vg(t,n=!1,e=B2){if(e){let s=ns.get(e);s||ns.set(e,s=[]),s.push(t)}}function Bg(t,n,e=M0){const{immediate:s,deep:o,once:u,scheduler:a,augmentJob:f,call:h}=e,p=rt=>o?rt:er(rt)||o===!1||o===0?Jr(rt,1):Jr(rt);let v,y,S,T,U=!1,C=!1;if(xn(t)?(y=()=>t.value,U=er(t)):Oe(t)?(y=()=>p(t),U=!0):Pt(t)?(C=!0,U=t.some(rt=>Oe(rt)||er(rt)),y=()=>t.map(rt=>{if(xn(rt))return rt.value;if(Oe(rt))return p(rt);if(Wt(rt))return h?h(rt,2):rt()})):Wt(t)?n?y=h?()=>h(t,2):t:y=()=>{if(S){C2();try{S()}finally{R2()}}const rt=B2;B2=v;try{return h?h(t,3,[T]):t(T)}finally{B2=rt}}:y=Tr,n&&o){const rt=y,tt=o===!0?1/0:o;y=()=>Jr(rt(),tt)}const P=yg(),N=()=>{v.stop(),P&&P.active&&Ko(P.effects,v)};if(u&&n){const rt=n;n=(...tt)=>{rt(...tt),N()}}let Z=C?new Array(t.length).fill(Wi):Wi;const G=rt=>{if(!(!(v.flags&1)||!v.dirty&&!rt))if(n){const tt=v.run();if(o||U||(C?tt.some((yt,wt)=>E2(yt,Z[wt])):E2(tt,Z))){S&&S();const yt=B2;B2=v;try{const wt=[tt,Z===Wi?void 0:C&&Z[0]===Wi?[]:Z,T];h?h(n,3,wt):n(...wt),Z=tt}finally{B2=yt}}}else v.run()};return f&&f(G),v=new Lc(y),v.scheduler=a?()=>a(G,!1):G,T=rt=>Vg(rt,!1,v),S=v.onStop=()=>{const rt=ns.get(v);if(rt){if(h)h(rt,4);else for(const tt of rt)tt();ns.delete(v)}},n?s?G(!0):Z=v.run():a?a(G.bind(null,!0),!0):v.run(),N.pause=v.pause.bind(v),N.resume=v.resume.bind(v),N.stop=N,N}function Jr(t,n=1/0,e){if(n<=0||!E0(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),n--,xn(t))Jr(t.value,n,e);else if(Pt(t))for(let s=0;s<t.length;s++)Jr(t[s],n,e);else if(Le(t)||Te(t))t.forEach(s=>{Jr(s,n,e)});else if($c(t)){for(const s in t)Jr(t[s],n,e);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Jr(t[s],n,e)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function L1(t,n,e,s){try{return s?t(...s):t()}catch(o){ws(o,n,e)}}function Er(t,n,e,s){if(Wt(t)){const o=L1(t,n,e,s);return o&&Rc(o)&&o.catch(u=>{ws(u,n,e)}),o}if(Pt(t)){const o=[];for(let u=0;u<t.length;u++)o.push(Er(t[u],n,e,s));return o}}function ws(t,n,e,s=!0){const o=n?n.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||M0;if(n){let f=n.parent;const h=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${e}`;for(;f;){const v=f.ec;if(v){for(let y=0;y<v.length;y++)if(v[y](t,h,p)===!1)return}f=f.parent}if(u){C2(),L1(u,null,10,[t,h,p]),R2();return}}Gg(t,e,o,s,a)}function Gg(t,n,e,s=!0,o=!1){if(o)throw t;console.error(t)}const On=[];let kr=-1;const Ee=[];let w2=null,ye=0;const rf=Promise.resolve();let rs=null;function s4(t){const n=rs||rf;return t?n.then(this?t.bind(this):t):n}function jg(t){let n=kr+1,e=On.length;for(;n<e;){const s=n+e>>>1,o=On[s],u=T1(o);u<t||u===t&&o.flags&2?n=s+1:e=s}return n}function o4(t){if(!(t.flags&1)){const n=T1(t),e=On[On.length-1];!e||!(t.flags&2)&&n>=T1(e)?On.push(t):On.splice(jg(n),0,t),t.flags|=1,ef()}}function ef(){rs||(rs=rf.then(of))}function Kg(t){Pt(t)?Ee.push(...t):w2&&t.id===-1?w2.splice(ye+1,0,t):t.flags&1||(Ee.push(t),t.flags|=1),ef()}function fa(t,n,e=kr+1){for(;e<On.length;e++){const s=On[e];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;On.splice(e,1),e--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function sf(t){if(Ee.length){const n=[...new Set(Ee)].sort((e,s)=>T1(e)-T1(s));if(Ee.length=0,w2){w2.push(...n);return}for(w2=n,ye=0;ye<w2.length;ye++){const e=w2[ye];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}w2=null,ye=0}}const T1=t=>t.id==null?t.flags&2?-1:1/0:t.id;function of(t){try{for(kr=0;kr<On.length;kr++){const n=On[kr];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),L1(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;kr<On.length;kr++){const n=On[kr];n&&(n.flags&=-2)}kr=-1,On.length=0,sf(),rs=null,(On.length||Ee.length)&&of()}}let Hn=null,lf=null;function es(t){const n=Hn;return Hn=t,lf=t&&t.type.__scopeId||null,n}function zg(t,n=Hn,e){if(!n||t._n)return t;const s=(...o)=>{s._d&&xa(-1);const u=es(n);let a;try{a=t(...o)}finally{es(u),s._d&&xa(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function zt(t,n){if(Hn===null)return t;const e=Ms(Hn),s=t.dirs||(t.dirs=[]);for(let o=0;o<n.length;o++){let[u,a,f,h=M0]=n[o];u&&(Wt(u)&&(u={mounted:u,updated:u}),u.deep&&Jr(a),s.push({dir:u,instance:e,value:a,oldValue:void 0,arg:f,modifiers:h}))}return t}function H2(t,n,e,s){const o=t.dirs,u=n&&n.dirs;for(let a=0;a<o.length;a++){const f=o[a];u&&(f.oldValue=u[a].value);let h=f.dir[s];h&&(C2(),Er(h,e,8,[t.el,f,t,n]),R2())}}const Zg=Symbol("_vte"),Jg=t=>t.__isTeleport;function l4(t,n){t.shapeFlag&6&&t.component?(t.transition=n,l4(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function Fe(t,n){return Wt(t)?un({name:t.name},n,{setup:t}):t}function uf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function is(t,n,e,s,o=!1){if(Pt(t)){t.forEach((U,C)=>is(U,n&&(Pt(n)?n[C]:n),e,s,o));return}if(v1(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&is(t,n,e,s.component.subTree);return}const u=s.shapeFlag&4?Ms(s.component):s.el,a=o?null:u,{i:f,r:h}=t,p=n&&n.r,v=f.refs===M0?f.refs={}:f.refs,y=f.setupState,S=g0(y),T=y===M0?()=>!1:U=>p0(S,U);if(p!=null&&p!==h&&(q0(p)?(v[p]=null,T(p)&&(y[p]=null)):xn(p)&&(p.value=null)),Wt(h))L1(h,f,12,[a,v]);else{const U=q0(h),C=xn(h);if(U||C){const P=()=>{if(t.f){const N=U?T(h)?y[h]:v[h]:h.value;o?Pt(N)&&Ko(N,u):Pt(N)?N.includes(u)||N.push(u):U?(v[h]=[u],T(h)&&(y[h]=v[h])):(h.value=[u],t.k&&(v[t.k]=h.value))}else U?(v[h]=a,T(h)&&(y[h]=a)):C&&(h.value=a,t.k&&(v[t.k]=a))};a?(P.id=-1,Wn(P,e)):P()}}}vs().requestIdleCallback;vs().cancelIdleCallback;const v1=t=>!!t.type.__asyncLoader,af=t=>t.type.__isKeepAlive;function Xg(t,n){cf(t,"a",n)}function Qg(t,n){cf(t,"da",n)}function cf(t,n,e=yn){const s=t.__wdc||(t.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(bs(n,s,e),e){let o=e.parent;for(;o&&o.parent;)af(o.parent.vnode)&&tp(s,n,e,o),o=o.parent}}function tp(t,n,e,s){const o=bs(n,t,s,!0);hf(()=>{Ko(s[n],o)},e)}function bs(t,n,e=yn,s=!1){if(e){const o=e[t]||(e[t]=[]),u=n.__weh||(n.__weh=(...a)=>{C2();const f=F1(e),h=Er(n,e,t,a);return f(),R2(),h});return s?o.unshift(u):o.push(u),u}}const o2=t=>(n,e=yn)=>{(!E1||t==="sp")&&bs(t,(...s)=>n(...s),e)},np=o2("bm"),ff=o2("m"),rp=o2("bu"),ep=o2("u"),ip=o2("bum"),hf=o2("um"),sp=o2("sp"),op=o2("rtg"),lp=o2("rtc");function up(t,n=yn){bs("ec",t,n)}const ap="components",_f=Symbol.for("v-ndc");function Ui(t){return q0(t)?cp(ap,t,!1)||t:t||_f}function cp(t,n,e=!0,s=!1){const o=Hn||yn;if(o){const u=o.type;{const f=Zp(u,!1);if(f&&(f===n||f===ir(n)||f===ms(ir(n))))return u}const a=ha(o[t]||u[t],n)||ha(o.appContext[t],n);return!a&&s?u:a}}function ha(t,n){return t&&(t[n]||t[ir(n)]||t[ms(ir(n))])}function S0(t,n,e,s){let o;const u=e,a=Pt(t);if(a||q0(t)){const f=a&&Oe(t);let h=!1;f&&(h=!er(t),t=ys(t)),o=new Array(t.length);for(let p=0,v=t.length;p<v;p++)o[p]=n(h?vn(t[p]):t[p],p,void 0,u)}else if(typeof t=="number"){o=new Array(t);for(let f=0;f<t;f++)o[f]=n(f+1,f,void 0,u)}else if(E0(t))if(t[Symbol.iterator])o=Array.from(t,(f,h)=>n(f,h,void 0,u));else{const f=Object.keys(t);o=new Array(f.length);for(let h=0,p=f.length;h<p;h++){const v=f[h];o[h]=n(t[v],v,h,u)}}else o=[];return o}const Oo=t=>t?$f(t)?Ms(t):Oo(t.parent):null,y1=un(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oo(t.parent),$root:t=>Oo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>u4(t),$forceUpdate:t=>t.f||(t.f=()=>{o4(t.update)}),$nextTick:t=>t.n||(t.n=s4.bind(t.proxy)),$watch:t=>Rp.bind(t)}),eo=(t,n)=>t!==M0&&!t.__isScriptSetup&&p0(t,n),fp={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:e,setupState:s,data:o,props:u,accessCache:a,type:f,appContext:h}=t;let p;if(n[0]!=="$"){const T=a[n];if(T!==void 0)switch(T){case 1:return s[n];case 2:return o[n];case 4:return e[n];case 3:return u[n]}else{if(eo(s,n))return a[n]=1,s[n];if(o!==M0&&p0(o,n))return a[n]=2,o[n];if((p=t.propsOptions[0])&&p0(p,n))return a[n]=3,u[n];if(e!==M0&&p0(e,n))return a[n]=4,e[n];Eo&&(a[n]=0)}}const v=y1[n];let y,S;if(v)return n==="$attrs"&&mn(t.attrs,"get",""),v(t);if((y=f.__cssModules)&&(y=y[n]))return y;if(e!==M0&&p0(e,n))return a[n]=4,e[n];if(S=h.config.globalProperties,p0(S,n))return S[n]},set({_:t},n,e){const{data:s,setupState:o,ctx:u}=t;return eo(o,n)?(o[n]=e,!0):s!==M0&&p0(s,n)?(s[n]=e,!0):p0(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(u[n]=e,!0)},has({_:{data:t,setupState:n,accessCache:e,ctx:s,appContext:o,propsOptions:u}},a){let f;return!!e[a]||t!==M0&&p0(t,a)||eo(n,a)||(f=u[0])&&p0(f,a)||p0(s,a)||p0(y1,a)||p0(o.config.globalProperties,a)},defineProperty(t,n,e){return e.get!=null?t._.accessCache[n]=0:p0(e,"value")&&this.set(t,n,e.value,null),Reflect.defineProperty(t,n,e)}};function _a(t){return Pt(t)?t.reduce((n,e)=>(n[e]=null,n),{}):t}let Eo=!0;function hp(t){const n=u4(t),e=t.proxy,s=t.ctx;Eo=!1,n.beforeCreate&&da(n.beforeCreate,t,"bc");const{data:o,computed:u,methods:a,watch:f,provide:h,inject:p,created:v,beforeMount:y,mounted:S,beforeUpdate:T,updated:U,activated:C,deactivated:P,beforeDestroy:N,beforeUnmount:Z,destroyed:G,unmounted:rt,render:tt,renderTracked:yt,renderTriggered:wt,errorCaptured:Qt,serverPrefetch:c0,expose:x0,inheritAttrs:w0,components:K0,directives:L0,filters:z0}=n;if(p&&_p(p,s,null),a)for(const Tt in a){const Dt=a[Tt];Wt(Dt)&&(s[Tt]=Dt.bind(e))}if(o){const Tt=o.call(e,e);E0(Tt)&&(t.data=xs(Tt))}if(Eo=!0,u)for(const Tt in u){const Dt=u[Tt],an=Wt(Dt)?Dt.bind(e,e):Wt(Dt.get)?Dt.get.bind(e,e):Tr,_n=!Wt(Dt)&&Wt(Dt.set)?Dt.set.bind(e):Tr,D0=j0({get:an,set:_n});Object.defineProperty(s,Tt,{enumerable:!0,configurable:!0,get:()=>D0.value,set:Z0=>D0.value=Z0})}if(f)for(const Tt in f)df(f[Tt],s,e,Tt);if(h){const Tt=Wt(h)?h.call(e):h;Reflect.ownKeys(Tt).forEach(Dt=>{ji(Dt,Tt[Dt])})}v&&da(v,t,"c");function jt(Tt,Dt){Pt(Dt)?Dt.forEach(an=>Tt(an.bind(e))):Dt&&Tt(Dt.bind(e))}if(jt(np,y),jt(ff,S),jt(rp,T),jt(ep,U),jt(Xg,C),jt(Qg,P),jt(up,Qt),jt(lp,yt),jt(op,wt),jt(ip,Z),jt(hf,rt),jt(sp,c0),Pt(x0))if(x0.length){const Tt=t.exposed||(t.exposed={});x0.forEach(Dt=>{Object.defineProperty(Tt,Dt,{get:()=>e[Dt],set:an=>e[Dt]=an})})}else t.exposed||(t.exposed={});tt&&t.render===Tr&&(t.render=tt),w0!=null&&(t.inheritAttrs=w0),K0&&(t.components=K0),L0&&(t.directives=L0),c0&&uf(t)}function _p(t,n,e=Tr){Pt(t)&&(t=Do(t));for(const s in t){const o=t[s];let u;E0(o)?"default"in o?u=dr(o.from||s,o.default,!0):u=dr(o.from||s):u=dr(o),xn(u)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>u.value,set:a=>u.value=a}):n[s]=u}}function da(t,n,e){Er(Pt(t)?t.map(s=>s.bind(n.proxy)):t.bind(n.proxy),n,e)}function df(t,n,e,s){let o=s.includes(".")?Ef(e,s):()=>e[s];if(q0(t)){const u=n[t];Wt(u)&&Ce(o,u)}else if(Wt(t))Ce(o,t.bind(e));else if(E0(t))if(Pt(t))t.forEach(u=>df(u,n,e,s));else{const u=Wt(t.handler)?t.handler.bind(e):n[t.handler];Wt(u)&&Ce(o,u,t)}}function u4(t){const n=t.type,{mixins:e,extends:s}=n,{mixins:o,optionsCache:u,config:{optionMergeStrategies:a}}=t.appContext,f=u.get(n);let h;return f?h=f:!o.length&&!e&&!s?h=n:(h={},o.length&&o.forEach(p=>ss(h,p,a,!0)),ss(h,n,a)),E0(n)&&u.set(n,h),h}function ss(t,n,e,s=!1){const{mixins:o,extends:u}=n;u&&ss(t,u,e,!0),o&&o.forEach(a=>ss(t,a,e,!0));for(const a in n)if(!(s&&a==="expose")){const f=dp[a]||e&&e[a];t[a]=f?f(t[a],n[a]):n[a]}return t}const dp={data:ga,props:pa,emits:pa,methods:_1,computed:_1,beforeCreate:Tn,created:Tn,beforeMount:Tn,mounted:Tn,beforeUpdate:Tn,updated:Tn,beforeDestroy:Tn,beforeUnmount:Tn,destroyed:Tn,unmounted:Tn,activated:Tn,deactivated:Tn,errorCaptured:Tn,serverPrefetch:Tn,components:_1,directives:_1,watch:pp,provide:ga,inject:gp};function ga(t,n){return n?t?function(){return un(Wt(t)?t.call(this,this):t,Wt(n)?n.call(this,this):n)}:n:t}function gp(t,n){return _1(Do(t),Do(n))}function Do(t){if(Pt(t)){const n={};for(let e=0;e<t.length;e++)n[t[e]]=t[e];return n}return t}function Tn(t,n){return t?[...new Set([].concat(t,n))]:n}function _1(t,n){return t?un(Object.create(null),t,n):n}function pa(t,n){return t?Pt(t)&&Pt(n)?[...new Set([...t,...n])]:un(Object.create(null),_a(t),_a(n??{})):n}function pp(t,n){if(!t)return n;if(!n)return t;const e=un(Object.create(null),t);for(const s in n)e[s]=Tn(t[s],n[s]);return e}function gf(){return{app:null,config:{isNativeTag:og,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mp=0;function vp(t,n){return function(s,o=null){Wt(s)||(s=un({},s)),o!=null&&!E0(o)&&(o=null);const u=gf(),a=new WeakSet,f=[];let h=!1;const p=u.app={_uid:mp++,_component:s,_props:o,_container:null,_context:u,_instance:null,version:Xp,get config(){return u.config},set config(v){},use(v,...y){return a.has(v)||(v&&Wt(v.install)?(a.add(v),v.install(p,...y)):Wt(v)&&(a.add(v),v(p,...y))),p},mixin(v){return u.mixins.includes(v)||u.mixins.push(v),p},component(v,y){return y?(u.components[v]=y,p):u.components[v]},directive(v,y){return y?(u.directives[v]=y,p):u.directives[v]},mount(v,y,S){if(!h){const T=p._ceVNode||Vn(s,o);return T.appContext=u,S===!0?S="svg":S===!1&&(S=void 0),y&&n?n(T,v):t(T,v,S),h=!0,p._container=v,v.__vue_app__=p,Ms(T.component)}},onUnmount(v){f.push(v)},unmount(){h&&(Er(f,p._instance,16),t(null,p._container),delete p._container.__vue_app__)},provide(v,y){return u.provides[v]=y,p},runWithContext(v){const y=De;De=p;try{return v()}finally{De=y}}};return p}}let De=null;function ji(t,n){if(yn){let e=yn.provides;const s=yn.parent&&yn.parent.provides;s===e&&(e=yn.provides=Object.create(s)),e[t]=n}}function dr(t,n,e=!1){const s=yn||Hn;if(s||De){const o=De?De._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return e&&Wt(n)?n.call(s&&s.proxy):n}}const pf={},mf=()=>Object.create(pf),vf=t=>Object.getPrototypeOf(t)===pf;function yp(t,n,e,s=!1){const o={},u=mf();t.propsDefaults=Object.create(null),yf(t,n,o,u);for(const a in t.propsOptions[0])a in o||(o[a]=void 0);e?t.props=s?o:Xc(o):t.type.props?t.props=o:t.props=u,t.attrs=u}function xp(t,n,e,s){const{props:o,attrs:u,vnode:{patchFlag:a}}=t,f=g0(o),[h]=t.propsOptions;let p=!1;if((s||a>0)&&!(a&16)){if(a&8){const v=t.vnode.dynamicProps;for(let y=0;y<v.length;y++){let S=v[y];if(ks(t.emitsOptions,S))continue;const T=n[S];if(h)if(p0(u,S))T!==u[S]&&(u[S]=T,p=!0);else{const U=ir(S);o[U]=Co(h,f,U,T,t,!1)}else T!==u[S]&&(u[S]=T,p=!0)}}}else{yf(t,n,o,u)&&(p=!0);let v;for(const y in f)(!n||!p0(n,y)&&((v=Q2(y))===y||!p0(n,v)))&&(h?e&&(e[y]!==void 0||e[v]!==void 0)&&(o[y]=Co(h,f,y,void 0,t,!0)):delete o[y]);if(u!==f)for(const y in u)(!n||!p0(n,y))&&(delete u[y],p=!0)}p&&Zr(t.attrs,"set","")}function yf(t,n,e,s){const[o,u]=t.propsOptions;let a=!1,f;if(n)for(let h in n){if(g1(h))continue;const p=n[h];let v;o&&p0(o,v=ir(h))?!u||!u.includes(v)?e[v]=p:(f||(f={}))[v]=p:ks(t.emitsOptions,h)||(!(h in s)||p!==s[h])&&(s[h]=p,a=!0)}if(u){const h=g0(e),p=f||M0;for(let v=0;v<u.length;v++){const y=u[v];e[y]=Co(o,h,y,p[y],t,!p0(p,y))}}return a}function Co(t,n,e,s,o,u){const a=t[e];if(a!=null){const f=p0(a,"default");if(f&&s===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&Wt(h)){const{propsDefaults:p}=o;if(e in p)s=p[e];else{const v=F1(o);s=p[e]=h.call(null,n),v()}}else s=h;o.ce&&o.ce._setProp(e,s)}a[0]&&(u&&!f?s=!1:a[1]&&(s===""||s===Q2(e))&&(s=!0))}return s}const wp=new WeakMap;function xf(t,n,e=!1){const s=e?wp:n.propsCache,o=s.get(t);if(o)return o;const u=t.props,a={},f=[];let h=!1;if(!Wt(t)){const v=y=>{h=!0;const[S,T]=xf(y,n,!0);un(a,S),T&&f.push(...T)};!e&&n.mixins.length&&n.mixins.forEach(v),t.extends&&v(t.extends),t.mixins&&t.mixins.forEach(v)}if(!u&&!h)return E0(t)&&s.set(t,Me),Me;if(Pt(u))for(let v=0;v<u.length;v++){const y=ir(u[v]);ma(y)&&(a[y]=M0)}else if(u)for(const v in u){const y=ir(v);if(ma(y)){const S=u[v],T=a[y]=Pt(S)||Wt(S)?{type:S}:un({},S),U=T.type;let C=!1,P=!0;if(Pt(U))for(let N=0;N<U.length;++N){const Z=U[N],G=Wt(Z)&&Z.name;if(G==="Boolean"){C=!0;break}else G==="String"&&(P=!1)}else C=Wt(U)&&U.name==="Boolean";T[0]=C,T[1]=P,(C||p0(T,"default"))&&f.push(y)}}const p=[a,f];return E0(t)&&s.set(t,p),p}function ma(t){return t[0]!=="$"&&!g1(t)}const wf=t=>t[0]==="_"||t==="$stable",a4=t=>Pt(t)?t.map(Sr):[Sr(t)],bp=(t,n,e)=>{if(n._n)return n;const s=zg((...o)=>a4(n(...o)),e);return s._c=!1,s},bf=(t,n,e)=>{const s=t._ctx;for(const o in t){if(wf(o))continue;const u=t[o];if(Wt(u))n[o]=bp(o,u,s);else if(u!=null){const a=a4(u);n[o]=()=>a}}},kf=(t,n)=>{const e=a4(n);t.slots.default=()=>e},Sf=(t,n,e)=>{for(const s in n)(e||s!=="_")&&(t[s]=n[s])},kp=(t,n,e)=>{const s=t.slots=mf();if(t.vnode.shapeFlag&32){const o=n._;o?(Sf(s,n,e),e&&Pc(s,"_",o,!0)):bf(n,s)}else n&&kf(t,n)},Sp=(t,n,e)=>{const{vnode:s,slots:o}=t;let u=!0,a=M0;if(s.shapeFlag&32){const f=n._;f?e&&f===1?u=!1:Sf(o,n,e):(u=!n.$stable,bf(n,o)),a=n}else n&&(kf(t,n),a={default:1});if(u)for(const f in o)!wf(f)&&a[f]==null&&delete o[f]},Wn=Lp;function Mp(t){return Tp(t)}function Tp(t,n){const e=vs();e.__VUE__=!0;const{insert:s,remove:o,patchProp:u,createElement:a,createText:f,createComment:h,setText:p,setElementText:v,parentNode:y,nextSibling:S,setScopeId:T=Tr,insertStaticContent:U}=t,C=(x,w,R,j=null,$=null,H=null,st=void 0,nt=null,J=!!w.dynamicChildren)=>{if(x===w)return;x&&!o1(x,w)&&(j=Y(x),Z0(x,$,H,!0),x=null),w.patchFlag===-2&&(J=!1,w.dynamicChildren=null);const{type:z,ref:St,shapeFlag:lt}=w;switch(z){case Ss:P(x,w,R,j);break;case X2:N(x,w,R,j);break;case oo:x==null&&Z(w,R,j,st);break;case Zt:K0(x,w,R,j,$,H,st,nt,J);break;default:lt&1?tt(x,w,R,j,$,H,st,nt,J):lt&6?L0(x,w,R,j,$,H,st,nt,J):(lt&64||lt&128)&&z.process(x,w,R,j,$,H,st,nt,J,xt)}St!=null&&$&&is(St,x&&x.ref,H,w||x,!w)},P=(x,w,R,j)=>{if(x==null)s(w.el=f(w.children),R,j);else{const $=w.el=x.el;w.children!==x.children&&p($,w.children)}},N=(x,w,R,j)=>{x==null?s(w.el=h(w.children||""),R,j):w.el=x.el},Z=(x,w,R,j)=>{[x.el,x.anchor]=U(x.children,w,R,j,x.el,x.anchor)},G=({el:x,anchor:w},R,j)=>{let $;for(;x&&x!==w;)$=S(x),s(x,R,j),x=$;s(w,R,j)},rt=({el:x,anchor:w})=>{let R;for(;x&&x!==w;)R=S(x),o(x),x=R;o(w)},tt=(x,w,R,j,$,H,st,nt,J)=>{w.type==="svg"?st="svg":w.type==="math"&&(st="mathml"),x==null?yt(w,R,j,$,H,st,nt,J):c0(x,w,$,H,st,nt,J)},yt=(x,w,R,j,$,H,st,nt)=>{let J,z;const{props:St,shapeFlag:lt,transition:vt,dirs:Ct}=x;if(J=x.el=a(x.type,H,St&&St.is,St),lt&8?v(J,x.children):lt&16&&Qt(x.children,J,null,j,$,io(x,H),st,nt),Ct&&H2(x,null,j,"created"),wt(J,x,x.scopeId,st,j),St){for(const r0 in St)r0!=="value"&&!g1(r0)&&u(J,r0,null,St[r0],H,j);"value"in St&&u(J,"value",null,St.value,H),(z=St.onVnodeBeforeMount)&&br(z,j,x)}Ct&&H2(x,null,j,"beforeMount");const Yt=Op($,vt);Yt&&vt.beforeEnter(J),s(J,w,R),((z=St&&St.onVnodeMounted)||Yt||Ct)&&Wn(()=>{z&&br(z,j,x),Yt&&vt.enter(J),Ct&&H2(x,null,j,"mounted")},$)},wt=(x,w,R,j,$)=>{if(R&&T(x,R),j)for(let H=0;H<j.length;H++)T(x,j[H]);if($){let H=$.subTree;if(w===H||Cf(H.type)&&(H.ssContent===w||H.ssFallback===w)){const st=$.vnode;wt(x,st,st.scopeId,st.slotScopeIds,$.parent)}}},Qt=(x,w,R,j,$,H,st,nt,J=0)=>{for(let z=J;z<x.length;z++){const St=x[z]=nt?b2(x[z]):Sr(x[z]);C(null,St,w,R,j,$,H,st,nt)}},c0=(x,w,R,j,$,H,st)=>{const nt=w.el=x.el;let{patchFlag:J,dynamicChildren:z,dirs:St}=w;J|=x.patchFlag&16;const lt=x.props||M0,vt=w.props||M0;let Ct;if(R&&q2(R,!1),(Ct=vt.onVnodeBeforeUpdate)&&br(Ct,R,w,x),St&&H2(w,x,R,"beforeUpdate"),R&&q2(R,!0),(lt.innerHTML&&vt.innerHTML==null||lt.textContent&&vt.textContent==null)&&v(nt,""),z?x0(x.dynamicChildren,z,nt,R,j,io(w,$),H):st||Dt(x,w,nt,null,R,j,io(w,$),H,!1),J>0){if(J&16)w0(nt,lt,vt,R,$);else if(J&2&&lt.class!==vt.class&&u(nt,"class",null,vt.class,$),J&4&&u(nt,"style",lt.style,vt.style,$),J&8){const Yt=w.dynamicProps;for(let r0=0;r0<Yt.length;r0++){const e0=Yt[r0],J0=lt[e0],I0=vt[e0];(I0!==J0||e0==="value")&&u(nt,e0,J0,I0,$,R)}}J&1&&x.children!==w.children&&v(nt,w.children)}else!st&&z==null&&w0(nt,lt,vt,R,$);((Ct=vt.onVnodeUpdated)||St)&&Wn(()=>{Ct&&br(Ct,R,w,x),St&&H2(w,x,R,"updated")},j)},x0=(x,w,R,j,$,H,st)=>{for(let nt=0;nt<w.length;nt++){const J=x[nt],z=w[nt],St=J.el&&(J.type===Zt||!o1(J,z)||J.shapeFlag&70)?y(J.el):R;C(J,z,St,null,j,$,H,st,!0)}},w0=(x,w,R,j,$)=>{if(w!==R){if(w!==M0)for(const H in w)!g1(H)&&!(H in R)&&u(x,H,w[H],null,$,j);for(const H in R){if(g1(H))continue;const st=R[H],nt=w[H];st!==nt&&H!=="value"&&u(x,H,nt,st,$,j)}"value"in R&&u(x,"value",w.value,R.value,$)}},K0=(x,w,R,j,$,H,st,nt,J)=>{const z=w.el=x?x.el:f(""),St=w.anchor=x?x.anchor:f("");let{patchFlag:lt,dynamicChildren:vt,slotScopeIds:Ct}=w;Ct&&(nt=nt?nt.concat(Ct):Ct),x==null?(s(z,R,j),s(St,R,j),Qt(w.children||[],R,St,$,H,st,nt,J)):lt>0&&lt&64&&vt&&x.dynamicChildren?(x0(x.dynamicChildren,vt,R,$,H,st,nt),(w.key!=null||$&&w===$.subTree)&&Mf(x,w,!0)):Dt(x,w,R,St,$,H,st,nt,J)},L0=(x,w,R,j,$,H,st,nt,J)=>{w.slotScopeIds=nt,x==null?w.shapeFlag&512?$.ctx.activate(w,R,j,st,J):z0(w,R,j,$,H,st,J):bn(x,w,J)},z0=(x,w,R,j,$,H,st)=>{const nt=x.component=Bp(x,j,$);if(af(x)&&(nt.ctx.renderer=xt),Gp(nt,!1,st),nt.asyncDep){if($&&$.registerDep(nt,jt,st),!x.el){const J=nt.subTree=Vn(X2);N(null,J,w,R)}}else jt(nt,x,w,R,$,H,st)},bn=(x,w,R)=>{const j=w.component=x.component;if(Np(x,w,R))if(j.asyncDep&&!j.asyncResolved){Tt(j,w,R);return}else j.next=w,j.update();else w.el=x.el,j.vnode=w},jt=(x,w,R,j,$,H,st)=>{const nt=()=>{if(x.isMounted){let{next:lt,bu:vt,u:Ct,parent:Yt,vnode:r0}=x;{const X0=Tf(x);if(X0){lt&&(lt.el=r0.el,Tt(x,lt,st)),X0.asyncDep.then(()=>{x.isUnmounted||nt()});return}}let e0=lt,J0;q2(x,!1),lt?(lt.el=r0.el,Tt(x,lt,st)):lt=r0,vt&&Gi(vt),(J0=lt.props&&lt.props.onVnodeBeforeUpdate)&&br(J0,Yt,lt,r0),q2(x,!0);const I0=so(x),sn=x.subTree;x.subTree=I0,C(sn,I0,y(sn.el),Y(sn),x,$,H),lt.el=I0.el,e0===null&&Yp(x,I0.el),Ct&&Wn(Ct,$),(J0=lt.props&&lt.props.onVnodeUpdated)&&Wn(()=>br(J0,Yt,lt,r0),$)}else{let lt;const{el:vt,props:Ct}=w,{bm:Yt,m:r0,parent:e0,root:J0,type:I0}=x,sn=v1(w);if(q2(x,!1),Yt&&Gi(Yt),!sn&&(lt=Ct&&Ct.onVnodeBeforeMount)&&br(lt,e0,w),q2(x,!0),vt&&f0){const X0=()=>{x.subTree=so(x),f0(vt,x.subTree,x,$,null)};sn&&I0.__asyncHydrate?I0.__asyncHydrate(vt,x,X0):X0()}else{J0.ce&&J0.ce._injectChildStyle(I0);const X0=x.subTree=so(x);C(null,X0,R,j,x,$,H),w.el=X0.el}if(r0&&Wn(r0,$),!sn&&(lt=Ct&&Ct.onVnodeMounted)){const X0=w;Wn(()=>br(lt,e0,X0),$)}(w.shapeFlag&256||e0&&v1(e0.vnode)&&e0.vnode.shapeFlag&256)&&x.a&&Wn(x.a,$),x.isMounted=!0,w=R=j=null}};x.scope.on();const J=x.effect=new Lc(nt);x.scope.off();const z=x.update=J.run.bind(J),St=x.job=J.runIfDirty.bind(J);St.i=x,St.id=x.uid,J.scheduler=()=>o4(St),q2(x,!0),z()},Tt=(x,w,R)=>{w.component=x;const j=x.vnode.props;x.vnode=w,x.next=null,xp(x,w.props,j,R),Sp(x,w.children,R),C2(),fa(x),R2()},Dt=(x,w,R,j,$,H,st,nt,J=!1)=>{const z=x&&x.children,St=x?x.shapeFlag:0,lt=w.children,{patchFlag:vt,shapeFlag:Ct}=w;if(vt>0){if(vt&128){_n(z,lt,R,j,$,H,st,nt,J);return}else if(vt&256){an(z,lt,R,j,$,H,st,nt,J);return}}Ct&8?(St&16&&V0(z,$,H),lt!==z&&v(R,lt)):St&16?Ct&16?_n(z,lt,R,j,$,H,st,nt,J):V0(z,$,H,!0):(St&8&&v(R,""),Ct&16&&Qt(lt,R,j,$,H,st,nt,J))},an=(x,w,R,j,$,H,st,nt,J)=>{x=x||Me,w=w||Me;const z=x.length,St=w.length,lt=Math.min(z,St);let vt;for(vt=0;vt<lt;vt++){const Ct=w[vt]=J?b2(w[vt]):Sr(w[vt]);C(x[vt],Ct,R,null,$,H,st,nt,J)}z>St?V0(x,$,H,!0,!1,lt):Qt(w,R,j,$,H,st,nt,J,lt)},_n=(x,w,R,j,$,H,st,nt,J)=>{let z=0;const St=w.length;let lt=x.length-1,vt=St-1;for(;z<=lt&&z<=vt;){const Ct=x[z],Yt=w[z]=J?b2(w[z]):Sr(w[z]);if(o1(Ct,Yt))C(Ct,Yt,R,null,$,H,st,nt,J);else break;z++}for(;z<=lt&&z<=vt;){const Ct=x[lt],Yt=w[vt]=J?b2(w[vt]):Sr(w[vt]);if(o1(Ct,Yt))C(Ct,Yt,R,null,$,H,st,nt,J);else break;lt--,vt--}if(z>lt){if(z<=vt){const Ct=vt+1,Yt=Ct<St?w[Ct].el:j;for(;z<=vt;)C(null,w[z]=J?b2(w[z]):Sr(w[z]),R,Yt,$,H,st,nt,J),z++}}else if(z>vt)for(;z<=lt;)Z0(x[z],$,H,!0),z++;else{const Ct=z,Yt=z,r0=new Map;for(z=Yt;z<=vt;z++){const B0=w[z]=J?b2(w[z]):Sr(w[z]);B0.key!=null&&r0.set(B0.key,z)}let e0,J0=0;const I0=vt-Yt+1;let sn=!1,X0=0;const En=new Array(I0);for(z=0;z<I0;z++)En[z]=0;for(z=Ct;z<=lt;z++){const B0=x[z];if(J0>=I0){Z0(B0,$,H,!0);continue}let G0;if(B0.key!=null)G0=r0.get(B0.key);else for(e0=Yt;e0<=vt;e0++)if(En[e0-Yt]===0&&o1(B0,w[e0])){G0=e0;break}G0===void 0?Z0(B0,$,H,!0):(En[G0-Yt]=z+1,G0>=X0?X0=G0:sn=!0,C(B0,w[G0],R,null,$,H,st,nt,J),J0++)}const $r=sn?Ep(En):Me;for(e0=$r.length-1,z=I0-1;z>=0;z--){const B0=Yt+z,G0=w[B0],A2=B0+1<St?w[B0+1].el:j;En[z]===0?C(null,G0,R,A2,$,H,st,nt,J):sn&&(e0<0||z!==$r[e0]?D0(G0,R,A2,2):e0--)}}},D0=(x,w,R,j,$=null)=>{const{el:H,type:st,transition:nt,children:J,shapeFlag:z}=x;if(z&6){D0(x.component.subTree,w,R,j);return}if(z&128){x.suspense.move(w,R,j);return}if(z&64){st.move(x,w,R,xt);return}if(st===Zt){s(H,w,R);for(let lt=0;lt<J.length;lt++)D0(J[lt],w,R,j);s(x.anchor,w,R);return}if(st===oo){G(x,w,R);return}if(j!==2&&z&1&&nt)if(j===0)nt.beforeEnter(H),s(H,w,R),Wn(()=>nt.enter(H),$);else{const{leave:lt,delayLeave:vt,afterLeave:Ct}=nt,Yt=()=>s(H,w,R),r0=()=>{lt(H,()=>{Yt(),Ct&&Ct()})};vt?vt(H,Yt,r0):r0()}else s(H,w,R)},Z0=(x,w,R,j=!1,$=!1)=>{const{type:H,props:st,ref:nt,children:J,dynamicChildren:z,shapeFlag:St,patchFlag:lt,dirs:vt,cacheIndex:Ct}=x;if(lt===-2&&($=!1),nt!=null&&is(nt,null,R,x,!0),Ct!=null&&(w.renderCache[Ct]=void 0),St&256){w.ctx.deactivate(x);return}const Yt=St&1&&vt,r0=!v1(x);let e0;if(r0&&(e0=st&&st.onVnodeBeforeUnmount)&&br(e0,w,x),St&6)en(x.component,R,j);else{if(St&128){x.suspense.unmount(R,j);return}Yt&&H2(x,null,w,"beforeUnmount"),St&64?x.type.remove(x,w,R,xt,j):z&&!z.hasOnce&&(H!==Zt||lt>0&&lt&64)?V0(z,w,R,!1,!0):(H===Zt&&lt&384||!$&&St&16)&&V0(J,w,R),j&&Gn(x)}(r0&&(e0=st&&st.onVnodeUnmounted)||Yt)&&Wn(()=>{e0&&br(e0,w,x),Yt&&H2(x,null,w,"unmounted")},R)},Gn=x=>{const{type:w,el:R,anchor:j,transition:$}=x;if(w===Zt){lr(R,j);return}if(w===oo){rt(x);return}const H=()=>{o(R),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(x.shapeFlag&1&&$&&!$.persisted){const{leave:st,delayLeave:nt}=$,J=()=>st(R,H);nt?nt(x.el,H,J):J()}else H()},lr=(x,w)=>{let R;for(;x!==w;)R=S(x),o(x),x=R;o(w)},en=(x,w,R)=>{const{bum:j,scope:$,job:H,subTree:st,um:nt,m:J,a:z}=x;va(J),va(z),j&&Gi(j),$.stop(),H&&(H.flags|=8,Z0(st,x,w,R)),nt&&Wn(nt,w),Wn(()=>{x.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},V0=(x,w,R,j=!1,$=!1,H=0)=>{for(let st=H;st<x.length;st++)Z0(x[st],w,R,j,$)},Y=x=>{if(x.shapeFlag&6)return Y(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const w=S(x.anchor||x.el),R=w&&w[Zg];return R?S(R):w};let at=!1;const it=(x,w,R)=>{x==null?w._vnode&&Z0(w._vnode,null,null,!0):C(w._vnode||null,x,w,null,null,null,R),w._vnode=x,at||(at=!0,fa(),sf(),at=!1)},xt={p:C,um:Z0,m:D0,r:Gn,mt:z0,mc:Qt,pc:Dt,pbc:x0,n:Y,o:t};let Jt,f0;return{render:it,hydrate:Jt,createApp:vp(it,Jt)}}function io({type:t,props:n},e){return e==="svg"&&t==="foreignObject"||e==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:e}function q2({effect:t,job:n},e){e?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function Op(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function Mf(t,n,e=!1){const s=t.children,o=n.children;if(Pt(s)&&Pt(o))for(let u=0;u<s.length;u++){const a=s[u];let f=o[u];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=o[u]=b2(o[u]),f.el=a.el),!e&&f.patchFlag!==-2&&Mf(a,f)),f.type===Ss&&(f.el=a.el)}}function Ep(t){const n=t.slice(),e=[0];let s,o,u,a,f;const h=t.length;for(s=0;s<h;s++){const p=t[s];if(p!==0){if(o=e[e.length-1],t[o]<p){n[s]=o,e.push(s);continue}for(u=0,a=e.length-1;u<a;)f=u+a>>1,t[e[f]]<p?u=f+1:a=f;p<t[e[u]]&&(u>0&&(n[s]=e[u-1]),e[u]=s)}}for(u=e.length,a=e[u-1];u-- >0;)e[u]=a,a=n[a];return e}function Tf(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Tf(n)}function va(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const Dp=Symbol.for("v-scx"),Cp=()=>dr(Dp);function Ce(t,n,e){return Of(t,n,e)}function Of(t,n,e=M0){const{immediate:s,deep:o,flush:u,once:a}=e,f=un({},e),h=n&&s||!n&&u!=="post";let p;if(E1){if(u==="sync"){const T=Cp();p=T.__watcherHandles||(T.__watcherHandles=[])}else if(!h){const T=()=>{};return T.stop=Tr,T.resume=Tr,T.pause=Tr,T}}const v=yn;f.call=(T,U,C)=>Er(T,v,U,C);let y=!1;u==="post"?f.scheduler=T=>{Wn(T,v&&v.suspense)}:u!=="sync"&&(y=!0,f.scheduler=(T,U)=>{U?T():o4(T)}),f.augmentJob=T=>{n&&(T.flags|=4),y&&(T.flags|=2,v&&(T.id=v.uid,T.i=v))};const S=Bg(t,n,f);return E1&&(p?p.push(S):h&&S()),S}function Rp(t,n,e){const s=this.proxy,o=q0(t)?t.includes(".")?Ef(s,t):()=>s[t]:t.bind(s,s);let u;Wt(n)?u=n:(u=n.handler,e=n);const a=F1(this),f=Of(o,u.bind(s),e);return a(),f}function Ef(t,n){const e=n.split(".");return()=>{let s=t;for(let o=0;o<e.length&&s;o++)s=s[e[o]];return s}}const Ap=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${ir(n)}Modifiers`]||t[`${Q2(n)}Modifiers`];function $p(t,n,...e){if(t.isUnmounted)return;const s=t.vnode.props||M0;let o=e;const u=n.startsWith("update:"),a=u&&Ap(s,n.slice(7));a&&(a.trim&&(o=e.map(v=>q0(v)?v.trim():v)),a.number&&(o=e.map(ts)));let f,h=s[f=X3(n)]||s[f=X3(ir(n))];!h&&u&&(h=s[f=X3(Q2(n))]),h&&Er(h,t,6,o);const p=s[f+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[f])return;t.emitted[f]=!0,Er(p,t,6,o)}}function Df(t,n,e=!1){const s=n.emitsCache,o=s.get(t);if(o!==void 0)return o;const u=t.emits;let a={},f=!1;if(!Wt(t)){const h=p=>{const v=Df(p,n,!0);v&&(f=!0,un(a,v))};!e&&n.mixins.length&&n.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!u&&!f?(E0(t)&&s.set(t,null),null):(Pt(u)?u.forEach(h=>a[h]=null):un(a,u),E0(t)&&s.set(t,a),a)}function ks(t,n){return!t||!gs(n)?!1:(n=n.slice(2).replace(/Once$/,""),p0(t,n[0].toLowerCase()+n.slice(1))||p0(t,Q2(n))||p0(t,n))}function so(t){const{type:n,vnode:e,proxy:s,withProxy:o,propsOptions:[u],slots:a,attrs:f,emit:h,render:p,renderCache:v,props:y,data:S,setupState:T,ctx:U,inheritAttrs:C}=t,P=es(t);let N,Z;try{if(e.shapeFlag&4){const rt=o||s,tt=rt;N=Sr(p.call(tt,rt,v,y,T,S,U)),Z=f}else{const rt=n;N=Sr(rt.length>1?rt(y,{attrs:f,slots:a,emit:h}):rt(y,null)),Z=n.props?f:Pp(f)}}catch(rt){x1.length=0,ws(rt,t,1),N=Vn(X2)}let G=N;if(Z&&C!==!1){const rt=Object.keys(Z),{shapeFlag:tt}=G;rt.length&&tt&7&&(u&&rt.some(jo)&&(Z=Ip(Z,u)),G=Pe(G,Z,!1,!0))}return e.dirs&&(G=Pe(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(e.dirs):e.dirs),e.transition&&l4(G,e.transition),N=G,es(P),N}const Pp=t=>{let n;for(const e in t)(e==="class"||e==="style"||gs(e))&&((n||(n={}))[e]=t[e]);return n},Ip=(t,n)=>{const e={};for(const s in t)(!jo(s)||!(s.slice(9)in n))&&(e[s]=t[s]);return e};function Np(t,n,e){const{props:s,children:o,component:u}=t,{props:a,children:f,patchFlag:h}=n,p=u.emitsOptions;if(n.dirs||n.transition)return!0;if(e&&h>=0){if(h&1024)return!0;if(h&16)return s?ya(s,a,p):!!a;if(h&8){const v=n.dynamicProps;for(let y=0;y<v.length;y++){const S=v[y];if(a[S]!==s[S]&&!ks(p,S))return!0}}}else return(o||f)&&(!f||!f.$stable)?!0:s===a?!1:s?a?ya(s,a,p):!0:!!a;return!1}function ya(t,n,e){const s=Object.keys(n);if(s.length!==Object.keys(t).length)return!0;for(let o=0;o<s.length;o++){const u=s[o];if(n[u]!==t[u]&&!ks(e,u))return!0}return!1}function Yp({vnode:t,parent:n},e){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=n.vnode).el=e,n=n.parent;else break}}const Cf=t=>t.__isSuspense;function Lp(t,n){n&&n.pendingBranch?Pt(t)?n.effects.push(...t):n.effects.push(t):Kg(t)}const Zt=Symbol.for("v-fgt"),Ss=Symbol.for("v-txt"),X2=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),x1=[];let qn=null;function ft(t=!1){x1.push(qn=t?null:[])}function Fp(){x1.pop(),qn=x1[x1.length-1]||null}let O1=1;function xa(t,n=!1){O1+=t,t<0&&qn&&n&&(qn.hasOnce=!0)}function Rf(t){return t.dynamicChildren=O1>0?qn||Me:null,Fp(),O1>0&&qn&&qn.push(t),t}function dt(t,n,e,s,o,u){return Rf(D(t,n,e,s,o,u,!0))}function ke(t,n,e,s,o){return Rf(Vn(t,n,e,s,o,!0))}function os(t){return t?t.__v_isVNode===!0:!1}function o1(t,n){return t.type===n.type&&t.key===n.key}const Af=({key:t})=>t??null,Ki=({ref:t,ref_key:n,ref_for:e})=>(typeof t=="number"&&(t=""+t),t!=null?q0(t)||xn(t)||Wt(t)?{i:Hn,r:t,k:n,f:!!e}:t:null);function D(t,n=null,e=null,s=0,o=null,u=t===Zt?0:1,a=!1,f=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Af(n),ref:n&&Ki(n),scopeId:lf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:u,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Hn};return f?(c4(h,e),u&128&&t.normalize(h)):e&&(h.shapeFlag|=q0(e)?8:16),O1>0&&!a&&qn&&(h.patchFlag>0||u&6)&&h.patchFlag!==32&&qn.push(h),h}const Vn=Wp;function Wp(t,n=null,e=null,s=0,o=null,u=!1){if((!t||t===_f)&&(t=X2),os(t)){const f=Pe(t,n,!0);return e&&c4(f,e),O1>0&&!u&&qn&&(f.shapeFlag&6?qn[qn.indexOf(t)]=f:qn.push(f)),f.patchFlag=-2,f}if(Jp(t)&&(t=t.__vccOpts),n){n=Up(n);let{class:f,style:h}=n;f&&!q0(f)&&(n.class=Zo(f)),E0(h)&&(i4(h)&&!Pt(h)&&(h=un({},h)),n.style=K2(h))}const a=q0(t)?1:Cf(t)?128:Jg(t)?64:E0(t)?4:Wt(t)?2:0;return D(t,n,e,s,o,a,u,!0)}function Up(t){return t?i4(t)||vf(t)?un({},t):t:null}function Pe(t,n,e=!1,s=!1){const{props:o,ref:u,patchFlag:a,children:f,transition:h}=t,p=n?Hp(o||{},n):o,v={__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&Af(p),ref:n&&n.ref?e&&u?Pt(u)?u.concat(Ki(n)):[u,Ki(n)]:Ki(n):u,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Zt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pe(t.ssContent),ssFallback:t.ssFallback&&Pe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&s&&l4(v,h.clone(v)),v}function Et(t=" ",n=0){return Vn(Ss,null,t,n)}function Xr(t="",n=!1){return n?(ft(),ke(X2,null,t)):Vn(X2,null,t)}function Sr(t){return t==null||typeof t=="boolean"?Vn(X2):Pt(t)?Vn(Zt,null,t.slice()):os(t)?b2(t):Vn(Ss,null,String(t))}function b2(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pe(t)}function c4(t,n){let e=0;const{shapeFlag:s}=t;if(n==null)n=null;else if(Pt(n))e=16;else if(typeof n=="object")if(s&65){const o=n.default;o&&(o._c&&(o._d=!1),c4(t,o()),o._c&&(o._d=!0));return}else{e=32;const o=n._;!o&&!vf(n)?n._ctx=Hn:o===3&&Hn&&(Hn.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else Wt(n)?(n={default:n,_ctx:Hn},e=32):(n=String(n),s&64?(e=16,n=[Et(n)]):e=8);t.children=n,t.shapeFlag|=e}function Hp(...t){const n={};for(let e=0;e<t.length;e++){const s=t[e];for(const o in s)if(o==="class")n.class!==s.class&&(n.class=Zo([n.class,s.class]));else if(o==="style")n.style=K2([n.style,s.style]);else if(gs(o)){const u=n[o],a=s[o];a&&u!==a&&!(Pt(u)&&u.includes(a))&&(n[o]=u?[].concat(u,a):a)}else o!==""&&(n[o]=s[o])}return n}function br(t,n,e,s=null){Er(t,n,7,[e,s])}const qp=gf();let Vp=0;function Bp(t,n,e){const s=t.type,o=(n?n.appContext:t.appContext)||qp,u={uid:Vp++,vnode:t,type:s,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xf(s,o),emitsOptions:Df(s,o),emit:null,emitted:null,propsDefaults:M0,inheritAttrs:s.inheritAttrs,ctx:M0,data:M0,props:M0,attrs:M0,slots:M0,refs:M0,setupState:M0,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return u.ctx={_:u},u.root=n?n.root:u,u.emit=$p.bind(null,u),t.ce&&t.ce(u),u}let yn=null,ls,Ro;{const t=vs(),n=(e,s)=>{let o;return(o=t[e])||(o=t[e]=[]),o.push(s),u=>{o.length>1?o.forEach(a=>a(u)):o[0](u)}};ls=n("__VUE_INSTANCE_SETTERS__",e=>yn=e),Ro=n("__VUE_SSR_SETTERS__",e=>E1=e)}const F1=t=>{const n=yn;return ls(t),t.scope.on(),()=>{t.scope.off(),ls(n)}},wa=()=>{yn&&yn.scope.off(),ls(null)};function $f(t){return t.vnode.shapeFlag&4}let E1=!1;function Gp(t,n=!1,e=!1){n&&Ro(n);const{props:s,children:o}=t.vnode,u=$f(t);yp(t,s,u,n),kp(t,o,e);const a=u?jp(t,n):void 0;return n&&Ro(!1),a}function jp(t,n){const e=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fp);const{setup:s}=e;if(s){C2();const o=t.setupContext=s.length>1?zp(t):null,u=F1(t),a=L1(s,t,0,[t.props,o]),f=Rc(a);if(R2(),u(),(f||t.sp)&&!v1(t)&&uf(t),f){if(a.then(wa,wa),n)return a.then(h=>{ba(t,h,n)}).catch(h=>{ws(h,t,0)});t.asyncDep=a}else ba(t,a,n)}else Pf(t,n)}function ba(t,n,e){Wt(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:E0(n)&&(t.setupState=nf(n)),Pf(t,e)}let ka;function Pf(t,n,e){const s=t.type;if(!t.render){if(!n&&ka&&!s.render){const o=s.template||u4(t).template;if(o){const{isCustomElement:u,compilerOptions:a}=t.appContext.config,{delimiters:f,compilerOptions:h}=s,p=un(un({isCustomElement:u,delimiters:f},a),h);s.render=ka(o,p)}}t.render=s.render||Tr}{const o=F1(t);C2();try{hp(t)}finally{R2(),o()}}}const Kp={get(t,n){return mn(t,"get",""),t[n]}};function zp(t){const n=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Kp),slots:t.slots,emit:t.emit,expose:n}}function Ms(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(nf(Lg(t.exposed)),{get(n,e){if(e in n)return n[e];if(e in y1)return y1[e](t)},has(n,e){return e in n||e in y1}})):t.proxy}function Zp(t,n=!0){return Wt(t)?t.displayName||t.name:t.name||n&&t.__name}function Jp(t){return Wt(t)&&"__vccOpts"in t}const j0=(t,n)=>qg(t,n,E1);function k2(t,n,e){const s=arguments.length;return s===2?E0(n)&&!Pt(n)?os(n)?Vn(t,null,[n]):Vn(t,n):Vn(t,null,n):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&os(e)&&(e=[e]),Vn(t,n,e))}const Xp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ao;const Sa=typeof window<"u"&&window.trustedTypes;if(Sa)try{Ao=Sa.createPolicy("vue",{createHTML:t=>t})}catch{}const If=Ao?t=>Ao.createHTML(t):t=>t,Qp="http://www.w3.org/2000/svg",tm="http://www.w3.org/1998/Math/MathML",Kr=typeof document<"u"?document:null,Ma=Kr&&Kr.createElement("template"),nm={insert:(t,n,e)=>{n.insertBefore(t,e||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,e,s)=>{const o=n==="svg"?Kr.createElementNS(Qp,t):n==="mathml"?Kr.createElementNS(tm,t):e?Kr.createElement(t,{is:e}):Kr.createElement(t);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>Kr.createTextNode(t),createComment:t=>Kr.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kr.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,e,s,o,u){const a=e?e.previousSibling:n.lastChild;if(o&&(o===u||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),e),!(o===u||!(o=o.nextSibling)););else{Ma.innerHTML=If(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const f=Ma.content;if(s==="svg"||s==="mathml"){const h=f.firstChild;for(;h.firstChild;)f.appendChild(h.firstChild);f.removeChild(h)}n.insertBefore(f,e)}return[a?a.nextSibling:n.firstChild,e?e.previousSibling:n.lastChild]}},rm=Symbol("_vtc");function em(t,n,e){const s=t[rm];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?t.removeAttribute("class"):e?t.setAttribute("class",n):t.className=n}const us=Symbol("_vod"),Nf=Symbol("_vsh"),im={beforeMount(t,{value:n},{transition:e}){t[us]=t.style.display==="none"?"":t.style.display,e&&n?e.beforeEnter(t):l1(t,n)},mounted(t,{value:n},{transition:e}){e&&n&&e.enter(t)},updated(t,{value:n,oldValue:e},{transition:s}){!n!=!e&&(s?n?(s.beforeEnter(t),l1(t,!0),s.enter(t)):s.leave(t,()=>{l1(t,!1)}):l1(t,n))},beforeUnmount(t,{value:n}){l1(t,n)}};function l1(t,n){t.style.display=n?t[us]:"none",t[Nf]=!n}const sm=Symbol(""),om=/(^|;)\s*display\s*:/;function lm(t,n,e){const s=t.style,o=q0(e);let u=!1;if(e&&!o){if(n)if(q0(n))for(const a of n.split(";")){const f=a.slice(0,a.indexOf(":")).trim();e[f]==null&&zi(s,f,"")}else for(const a in n)e[a]==null&&zi(s,a,"");for(const a in e)a==="display"&&(u=!0),zi(s,a,e[a])}else if(o){if(n!==e){const a=s[sm];a&&(e+=";"+a),s.cssText=e,u=om.test(e)}}else n&&t.removeAttribute("style");us in t&&(t[us]=u?s.display:"",t[Nf]&&(s.display="none"))}const Ta=/\s*!important$/;function zi(t,n,e){if(Pt(e))e.forEach(s=>zi(t,n,s));else if(e==null&&(e=""),n.startsWith("--"))t.setProperty(n,e);else{const s=um(t,n);Ta.test(e)?t.setProperty(Q2(s),e.replace(Ta,""),"important"):t[s]=e}}const Oa=["Webkit","Moz","ms"],lo={};function um(t,n){const e=lo[n];if(e)return e;let s=ir(n);if(s!=="filter"&&s in t)return lo[n]=s;s=ms(s);for(let o=0;o<Oa.length;o++){const u=Oa[o]+s;if(u in t)return lo[n]=u}return n}const Ea="http://www.w3.org/1999/xlink";function Da(t,n,e,s,o,u=pg(n)){s&&n.startsWith("xlink:")?e==null?t.removeAttributeNS(Ea,n.slice(6,n.length)):t.setAttributeNS(Ea,n,e):e==null||u&&!Ic(e)?t.removeAttribute(n):t.setAttribute(n,u?"":Or(e)?String(e):e)}function Ca(t,n,e,s,o){if(n==="innerHTML"||n==="textContent"){e!=null&&(t[n]=n==="innerHTML"?If(e):e);return}const u=t.tagName;if(n==="value"&&u!=="PROGRESS"&&!u.includes("-")){const f=u==="OPTION"?t.getAttribute("value")||"":t.value,h=e==null?t.type==="checkbox"?"on":"":String(e);(f!==h||!("_value"in t))&&(t.value=h),e==null&&t.removeAttribute(n),t._value=e;return}let a=!1;if(e===""||e==null){const f=typeof t[n];f==="boolean"?e=Ic(e):e==null&&f==="string"?(e="",a=!0):f==="number"&&(e=0,a=!0)}try{t[n]=e}catch{}a&&t.removeAttribute(o||n)}function M2(t,n,e,s){t.addEventListener(n,e,s)}function am(t,n,e,s){t.removeEventListener(n,e,s)}const Ra=Symbol("_vei");function cm(t,n,e,s,o=null){const u=t[Ra]||(t[Ra]={}),a=u[n];if(s&&a)a.value=s;else{const[f,h]=fm(n);if(s){const p=u[n]=dm(s,o);M2(t,f,p,h)}else a&&(am(t,f,a,h),u[n]=void 0)}}const Aa=/(?:Once|Passive|Capture)$/;function fm(t){let n;if(Aa.test(t)){n={};let s;for(;s=t.match(Aa);)t=t.slice(0,t.length-s[0].length),n[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Q2(t.slice(2)),n]}let uo=0;const hm=Promise.resolve(),_m=()=>uo||(hm.then(()=>uo=0),uo=Date.now());function dm(t,n){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;Er(gm(s,e.value),n,5,[s])};return e.value=t,e.attached=_m(),e}function gm(t,n){if(Pt(n)){const e=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{e.call(t),t._stopped=!0},n.map(s=>o=>!o._stopped&&s&&s(o))}else return n}const $a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pm=(t,n,e,s,o,u)=>{const a=o==="svg";n==="class"?em(t,s,a):n==="style"?lm(t,e,s):gs(n)?jo(n)||cm(t,n,e,s,u):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):mm(t,n,s,a))?(Ca(t,n,s),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Da(t,n,s,a,u,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!q0(s))?Ca(t,ir(n),s,u,n):(n==="true-value"?t._trueValue=s:n==="false-value"&&(t._falseValue=s),Da(t,n,s,a))};function mm(t,n,e,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in t&&$a(n)&&Wt(e));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return $a(n)&&q0(e)?!1:n in t}const Ie=t=>{const n=t.props["onUpdate:modelValue"]||!1;return Pt(n)?e=>Gi(n,e):n};function vm(t){t.target.composing=!0}function Pa(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const n2=Symbol("_assign"),ln={created(t,{modifiers:{lazy:n,trim:e,number:s}},o){t[n2]=Ie(o);const u=s||o.props&&o.props.type==="number";M2(t,n?"change":"input",a=>{if(a.target.composing)return;let f=t.value;e&&(f=f.trim()),u&&(f=ts(f)),t[n2](f)}),e&&M2(t,"change",()=>{t.value=t.value.trim()}),n||(M2(t,"compositionstart",vm),M2(t,"compositionend",Pa),M2(t,"change",Pa))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,oldValue:e,modifiers:{lazy:s,trim:o,number:u}},a){if(t[n2]=Ie(a),t.composing)return;const f=(u||t.type==="number")&&!/^0\d/.test(t.value)?ts(t.value):t.value,h=n??"";f!==h&&(document.activeElement===t&&t.type!=="range"&&(s&&n===e||o&&t.value.trim()===h)||(t.value=h))}},ao={deep:!0,created(t,n,e){t[n2]=Ie(e),M2(t,"change",()=>{const s=t._modelValue,o=D1(t),u=t.checked,a=t[n2];if(Pt(s)){const f=Jo(s,o),h=f!==-1;if(u&&!h)a(s.concat(o));else if(!u&&h){const p=[...s];p.splice(f,1),a(p)}}else if(Le(s)){const f=new Set(s);u?f.add(o):f.delete(o),a(f)}else a(Yf(t,u))})},mounted:Ia,beforeUpdate(t,n,e){t[n2]=Ie(e),Ia(t,n,e)}};function Ia(t,{value:n,oldValue:e},s){t._modelValue=n;let o;if(Pt(n))o=Jo(n,s.props.value)>-1;else if(Le(n))o=n.has(s.props.value);else{if(n===e)return;o=Y1(n,Yf(t,!0))}t.checked!==o&&(t.checked=o)}const hn={deep:!0,created(t,{value:n,modifiers:{number:e}},s){const o=Le(n);M2(t,"change",()=>{const u=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>e?ts(D1(a)):D1(a));t[n2](t.multiple?o?new Set(u):u:u[0]),t._assigning=!0,s4(()=>{t._assigning=!1})}),t[n2]=Ie(s)},mounted(t,{value:n}){Na(t,n)},beforeUpdate(t,n,e){t[n2]=Ie(e)},updated(t,{value:n}){t._assigning||Na(t,n)}};function Na(t,n){const e=t.multiple,s=Pt(n);if(!(e&&!s&&!Le(n))){for(let o=0,u=t.options.length;o<u;o++){const a=t.options[o],f=D1(a);if(e)if(s){const h=typeof f;h==="string"||h==="number"?a.selected=n.some(p=>String(p)===String(f)):a.selected=Jo(n,f)>-1}else a.selected=n.has(f);else if(Y1(D1(a),n)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!e&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function D1(t){return"_value"in t?t._value:t.value}function Yf(t,n){const e=n?"_trueValue":"_falseValue";return e in t?t[e]:n}const ym=un({patchProp:pm},nm);let Ya;function xm(){return Ya||(Ya=Mp(ym))}const wm=(...t)=>{const n=xm().createApp(...t),{mount:e}=n;return n.mount=s=>{const o=km(s);if(!o)return;const u=n._component;!Wt(u)&&!u.render&&!u.template&&(u.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=e(o,!1,bm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},n};function bm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function km(t){return q0(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const xe=typeof document<"u";function Lf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Lf(t.default)}const d0=Object.assign;function co(t,n){const e={};for(const s in n){const o=n[s];e[s]=gr(o)?o.map(t):t(o)}return e}const w1=()=>{},gr=Array.isArray,Ff=/#/g,Mm=/&/g,Tm=/\//g,Om=/=/g,Em=/\?/g,Wf=/\+/g,Dm=/%5B/g,Cm=/%5D/g,Uf=/%5E/g,Rm=/%60/g,Hf=/%7B/g,Am=/%7C/g,qf=/%7D/g,$m=/%20/g;function f4(t){return encodeURI(""+t).replace(Am,"|").replace(Dm,"[").replace(Cm,"]")}function Pm(t){return f4(t).replace(Hf,"{").replace(qf,"}").replace(Uf,"^")}function $o(t){return f4(t).replace(Wf,"%2B").replace($m,"+").replace(Ff,"%23").replace(Mm,"%26").replace(Rm,"`").replace(Hf,"{").replace(qf,"}").replace(Uf,"^")}function Im(t){return $o(t).replace(Om,"%3D")}function Nm(t){return f4(t).replace(Ff,"%23").replace(Em,"%3F")}function Ym(t){return t==null?"":Nm(t).replace(Tm,"%2F")}function C1(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Lm=/\/$/,Fm=t=>t.replace(Lm,"");function fo(t,n,e="/"){let s,o={},u="",a="";const f=n.indexOf("#");let h=n.indexOf("?");return f<h&&f>=0&&(h=-1),h>-1&&(s=n.slice(0,h),u=n.slice(h+1,f>-1?f:n.length),o=t(u)),f>-1&&(s=s||n.slice(0,f),a=n.slice(f,n.length)),s=qm(s??n,e),{fullPath:s+(u&&"?")+u+a,path:s,query:o,hash:C1(a)}}function Wm(t,n){const e=n.query?t(n.query):"";return n.path+(e&&"?")+e+(n.hash||"")}function La(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Um(t,n,e){const s=n.matched.length-1,o=e.matched.length-1;return s>-1&&s===o&&Ne(n.matched[s],e.matched[o])&&Vf(n.params,e.params)&&t(n.query)===t(e.query)&&n.hash===e.hash}function Ne(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Vf(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const e in t)if(!Hm(t[e],n[e]))return!1;return!0}function Hm(t,n){return gr(t)?Fa(t,n):gr(n)?Fa(n,t):t===n}function Fa(t,n){return gr(n)?t.length===n.length&&t.every((e,s)=>e===n[s]):t.length===1&&t[0]===n}function qm(t,n){if(t.startsWith("/"))return t;if(!t)return n;const e=n.split("/"),s=t.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let u=e.length-1,a,f;for(a=0;a<s.length;a++)if(f=s[a],f!==".")if(f==="..")u>1&&u--;else break;return e.slice(0,u).join("/")+"/"+s.slice(a).join("/")}const y2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var R1;(function(t){t.pop="pop",t.push="push"})(R1||(R1={}));var b1;(function(t){t.back="back",t.forward="forward",t.unknown=""})(b1||(b1={}));function Vm(t){if(!t)if(xe){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fm(t)}const Bm=/^[^#]+#/;function Gm(t,n){return t.replace(Bm,"#")+n}function jm(t,n){const e=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:n.behavior,left:s.left-e.left-(n.left||0),top:s.top-e.top-(n.top||0)}}const Ts=()=>({left:window.scrollX,top:window.scrollY});function Km(t){let n;if("el"in t){const e=t.el,s=typeof e=="string"&&e.startsWith("#"),o=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!o)return;n=jm(o,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Wa(t,n){return(history.state?history.state.position-n:-1)+t}const Po=new Map;function zm(t,n){Po.set(t,n)}function Zm(t){const n=Po.get(t);return Po.delete(t),n}let Jm=()=>location.protocol+"//"+location.host;function Bf(t,n){const{pathname:e,search:s,hash:o}=n,u=t.indexOf("#");if(u>-1){let f=o.includes(t.slice(u))?t.slice(u).length:1,h=o.slice(f);return h[0]!=="/"&&(h="/"+h),La(h,"")}return La(e,t)+s+o}function Xm(t,n,e,s){let o=[],u=[],a=null;const f=({state:S})=>{const T=Bf(t,location),U=e.value,C=n.value;let P=0;if(S){if(e.value=T,n.value=S,a&&a===U){a=null;return}P=C?S.position-C.position:0}else s(T);o.forEach(N=>{N(e.value,U,{delta:P,type:R1.pop,direction:P?P>0?b1.forward:b1.back:b1.unknown})})};function h(){a=e.value}function p(S){o.push(S);const T=()=>{const U=o.indexOf(S);U>-1&&o.splice(U,1)};return u.push(T),T}function v(){const{history:S}=window;S.state&&S.replaceState(d0({},S.state,{scroll:Ts()}),"")}function y(){for(const S of u)S();u=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",v)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",v,{passive:!0}),{pauseListeners:h,listen:p,destroy:y}}function Ua(t,n,e,s=!1,o=!1){return{back:t,current:n,forward:e,replaced:s,position:window.history.length,scroll:o?Ts():null}}function Qm(t){const{history:n,location:e}=window,s={value:Bf(t,e)},o={value:n.state};o.value||u(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function u(h,p,v){const y=t.indexOf("#"),S=y>-1?(e.host&&document.querySelector("base")?t:t.slice(y))+h:Jm()+t+h;try{n[v?"replaceState":"pushState"](p,"",S),o.value=p}catch(T){console.error(T),e[v?"replace":"assign"](S)}}function a(h,p){const v=d0({},n.state,Ua(o.value.back,h,o.value.forward,!0),p,{position:o.value.position});u(h,v,!0),s.value=h}function f(h,p){const v=d0({},o.value,n.state,{forward:h,scroll:Ts()});u(v.current,v,!0);const y=d0({},Ua(s.value,h,null),{position:v.position+1},p);u(h,y,!1),s.value=h}return{location:s,state:o,push:f,replace:a}}function tv(t){t=Vm(t);const n=Qm(t),e=Xm(t,n.state,n.location,n.replace);function s(u,a=!0){a||e.pauseListeners(),history.go(u)}const o=d0({location:"",base:t,go:s,createHref:Gm.bind(null,t)},n,e);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function nv(t){return typeof t=="string"||t&&typeof t=="object"}function Gf(t){return typeof t=="string"||typeof t=="symbol"}const jf=Symbol("");var Ha;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ha||(Ha={}));function Ye(t,n){return d0(new Error,{type:t,[jf]:!0},n)}function Br(t,n){return t instanceof Error&&jf in t&&(n==null||!!(t.type&n))}const qa="[^/]+?",rv={sensitive:!1,strict:!1,start:!0,end:!0},ev=/[.+*?^${}()[\]/\\]/g;function iv(t,n){const e=d0({},rv,n),s=[];let o=e.start?"^":"";const u=[];for(const p of t){const v=p.length?[]:[90];e.strict&&!p.length&&(o+="/");for(let y=0;y<p.length;y++){const S=p[y];let T=40+(e.sensitive?.25:0);if(S.type===0)y||(o+="/"),o+=S.value.replace(ev,"\\$&"),T+=40;else if(S.type===1){const{value:U,repeatable:C,optional:P,regexp:N}=S;u.push({name:U,repeatable:C,optional:P});const Z=N||qa;if(Z!==qa){T+=10;try{new RegExp(`(${Z})`)}catch(rt){throw new Error(`Invalid custom RegExp for param "${U}" (${Z}): `+rt.message)}}let G=C?`((?:${Z})(?:/(?:${Z}))*)`:`(${Z})`;y||(G=P&&p.length<2?`(?:/${G})`:"/"+G),P&&(G+="?"),o+=G,T+=20,P&&(T+=-8),C&&(T+=-20),Z===".*"&&(T+=-50)}v.push(T)}s.push(v)}if(e.strict&&e.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}e.strict||(o+="/?"),e.end?o+="$":e.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,e.sensitive?"":"i");function f(p){const v=p.match(a),y={};if(!v)return null;for(let S=1;S<v.length;S++){const T=v[S]||"",U=u[S-1];y[U.name]=T&&U.repeatable?T.split("/"):T}return y}function h(p){let v="",y=!1;for(const S of t){(!y||!v.endsWith("/"))&&(v+="/"),y=!1;for(const T of S)if(T.type===0)v+=T.value;else if(T.type===1){const{value:U,repeatable:C,optional:P}=T,N=U in p?p[U]:"";if(gr(N)&&!C)throw new Error(`Provided param "${U}" is an array but it is not repeatable (* or + modifiers)`);const Z=gr(N)?N.join("/"):N;if(!Z)if(P)S.length<2&&(v.endsWith("/")?v=v.slice(0,-1):y=!0);else throw new Error(`Missing required param "${U}"`);v+=Z}}return v||"/"}return{re:a,score:s,keys:u,parse:f,stringify:h}}function sv(t,n){let e=0;for(;e<t.length&&e<n.length;){const s=n[e]-t[e];if(s)return s;e++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function Kf(t,n){let e=0;const s=t.score,o=n.score;for(;e<s.length&&e<o.length;){const u=sv(s[e],o[e]);if(u)return u;e++}if(Math.abs(o.length-s.length)===1){if(Va(s))return 1;if(Va(o))return-1}return o.length-s.length}function Va(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const ov={type:0,value:""},lv=/[a-zA-Z0-9_]/;function uv(t){if(!t)return[[]];if(t==="/")return[[ov]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(T){throw new Error(`ERR (${e})/"${p}": ${T}`)}let e=0,s=e;const o=[];let u;function a(){u&&o.push(u),u=[]}let f=0,h,p="",v="";function y(){p&&(e===0?u.push({type:0,value:p}):e===1||e===2||e===3?(u.length>1&&(h==="*"||h==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:p,regexp:v,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):n("Invalid state to consume buffer"),p="")}function S(){p+=h}for(;f<t.length;){if(h=t[f++],h==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:h==="/"?(p&&y(),a()):h===":"?(y(),e=1):S();break;case 4:S(),e=s;break;case 1:h==="("?e=2:lv.test(h)?S():(y(),e=0,h!=="*"&&h!=="?"&&h!=="+"&&f--);break;case 2:h===")"?v[v.length-1]=="\\"?v=v.slice(0,-1)+h:e=3:v+=h;break;case 3:y(),e=0,h!=="*"&&h!=="?"&&h!=="+"&&f--,v="";break;default:n("Unknown state");break}}return e===2&&n(`Unfinished custom RegExp for param "${p}"`),y(),a(),o}function av(t,n,e){const s=iv(uv(t.path),e),o=d0(s,{record:t,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function cv(t,n){const e=[],s=new Map;n=Ka({strict:!1,end:!0,sensitive:!1},n);function o(y){return s.get(y)}function u(y,S,T){const U=!T,C=Ga(y);C.aliasOf=T&&T.record;const P=Ka(n,y),N=[C];if("alias"in y){const rt=typeof y.alias=="string"?[y.alias]:y.alias;for(const tt of rt)N.push(Ga(d0({},C,{components:T?T.record.components:C.components,path:tt,aliasOf:T?T.record:C})))}let Z,G;for(const rt of N){const{path:tt}=rt;if(S&&tt[0]!=="/"){const yt=S.record.path,wt=yt[yt.length-1]==="/"?"":"/";rt.path=S.record.path+(tt&&wt+tt)}if(Z=av(rt,S,P),T?T.alias.push(Z):(G=G||Z,G!==Z&&G.alias.push(Z),U&&y.name&&!ja(Z)&&a(y.name)),zf(Z)&&h(Z),C.children){const yt=C.children;for(let wt=0;wt<yt.length;wt++)u(yt[wt],Z,T&&T.children[wt])}T=T||Z}return G?()=>{a(G)}:w1}function a(y){if(Gf(y)){const S=s.get(y);S&&(s.delete(y),e.splice(e.indexOf(S),1),S.children.forEach(a),S.alias.forEach(a))}else{const S=e.indexOf(y);S>-1&&(e.splice(S,1),y.record.name&&s.delete(y.record.name),y.children.forEach(a),y.alias.forEach(a))}}function f(){return e}function h(y){const S=_v(y,e);e.splice(S,0,y),y.record.name&&!ja(y)&&s.set(y.record.name,y)}function p(y,S){let T,U={},C,P;if("name"in y&&y.name){if(T=s.get(y.name),!T)throw Ye(1,{location:y});P=T.record.name,U=d0(Ba(S.params,T.keys.filter(G=>!G.optional).concat(T.parent?T.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),y.params&&Ba(y.params,T.keys.map(G=>G.name))),C=T.stringify(U)}else if(y.path!=null)C=y.path,T=e.find(G=>G.re.test(C)),T&&(U=T.parse(C),P=T.record.name);else{if(T=S.name?s.get(S.name):e.find(G=>G.re.test(S.path)),!T)throw Ye(1,{location:y,currentLocation:S});P=T.record.name,U=d0({},S.params,y.params),C=T.stringify(U)}const N=[];let Z=T;for(;Z;)N.unshift(Z.record),Z=Z.parent;return{name:P,path:C,params:U,matched:N,meta:hv(N)}}t.forEach(y=>u(y));function v(){e.length=0,s.clear()}return{addRoute:u,resolve:p,removeRoute:a,clearRoutes:v,getRoutes:f,getRecordMatcher:o}}function Ba(t,n){const e={};for(const s of n)s in t&&(e[s]=t[s]);return e}function Ga(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:fv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function fv(t){const n={},e=t.props||!1;if("component"in t)n.default=e;else for(const s in t.components)n[s]=typeof e=="object"?e[s]:e;return n}function ja(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hv(t){return t.reduce((n,e)=>d0(n,e.meta),{})}function Ka(t,n){const e={};for(const s in t)e[s]=s in n?n[s]:t[s];return e}function _v(t,n){let e=0,s=n.length;for(;e!==s;){const u=e+s>>1;Kf(t,n[u])<0?s=u:e=u+1}const o=dv(t);return o&&(s=n.lastIndexOf(o,s-1)),s}function dv(t){let n=t;for(;n=n.parent;)if(zf(n)&&Kf(t,n)===0)return n}function zf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function gv(t){const n={};if(t===""||t==="?")return n;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<s.length;++o){const u=s[o].replace(Wf," "),a=u.indexOf("="),f=C1(a<0?u:u.slice(0,a)),h=a<0?null:C1(u.slice(a+1));if(f in n){let p=n[f];gr(p)||(p=n[f]=[p]),p.push(h)}else n[f]=h}return n}function za(t){let n="";for(let e in t){const s=t[e];if(e=Im(e),s==null){s!==void 0&&(n+=(n.length?"&":"")+e);continue}(gr(s)?s.map(u=>u&&$o(u)):[s&&$o(s)]).forEach(u=>{u!==void 0&&(n+=(n.length?"&":"")+e,u!=null&&(n+="="+u))})}return n}function pv(t){const n={};for(const e in t){const s=t[e];s!==void 0&&(n[e]=gr(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return n}const mv=Symbol(""),Za=Symbol(""),Os=Symbol(""),h4=Symbol(""),Io=Symbol("");function u1(){let t=[];function n(s){return t.push(s),()=>{const o=t.indexOf(s);o>-1&&t.splice(o,1)}}function e(){t=[]}return{add:n,list:()=>t.slice(),reset:e}}function S2(t,n,e,s,o,u=a=>a()){const a=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((f,h)=>{const p=S=>{S===!1?h(Ye(4,{from:e,to:n})):S instanceof Error?h(S):nv(S)?h(Ye(2,{from:n,to:S})):(a&&s.enterCallbacks[o]===a&&typeof S=="function"&&a.push(S),f())},v=u(()=>t.call(s&&s.instances[o],n,e,p));let y=Promise.resolve(v);t.length<3&&(y=y.then(p)),y.catch(S=>h(S))})}function ho(t,n,e,s,o=u=>u()){const u=[];for(const a of t)for(const f in a.components){let h=a.components[f];if(!(n!=="beforeRouteEnter"&&!a.instances[f]))if(Lf(h)){const v=(h.__vccOpts||h)[n];v&&u.push(S2(v,e,s,a,f,o))}else{let p=h();u.push(()=>p.then(v=>{if(!v)throw new Error(`Couldn't resolve component "${f}" at "${a.path}"`);const y=Sm(v)?v.default:v;a.mods[f]=v,a.components[f]=y;const T=(y.__vccOpts||y)[n];return T&&S2(T,e,s,a,f,o)()}))}}return u}function Ja(t){const n=dr(Os),e=dr(h4),s=j0(()=>{const h=k0(t.to);return n.resolve(h)}),o=j0(()=>{const{matched:h}=s.value,{length:p}=h,v=h[p-1],y=e.matched;if(!v||!y.length)return-1;const S=y.findIndex(Ne.bind(null,v));if(S>-1)return S;const T=Xa(h[p-2]);return p>1&&Xa(v)===T&&y[y.length-1].path!==T?y.findIndex(Ne.bind(null,h[p-2])):S}),u=j0(()=>o.value>-1&&bv(e.params,s.value.params)),a=j0(()=>o.value>-1&&o.value===e.matched.length-1&&Vf(e.params,s.value.params));function f(h={}){if(wv(h)){const p=n[k0(t.replace)?"replace":"push"](k0(t.to)).catch(w1);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:s,href:j0(()=>s.value.href),isActive:u,isExactActive:a,navigate:f}}function vv(t){return t.length===1?t[0]:t}const yv=Fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ja,setup(t,{slots:n}){const e=xs(Ja(t)),{options:s}=dr(Os),o=j0(()=>({[Qa(t.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[Qa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const u=n.default&&vv(n.default(e));return t.custom?u:k2("a",{"aria-current":e.isExactActive?t.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:o.value},u)}}}),xv=yv;function wv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function bv(t,n){for(const e in n){const s=n[e],o=t[e];if(typeof s=="string"){if(s!==o)return!1}else if(!gr(o)||o.length!==s.length||s.some((u,a)=>u!==o[a]))return!1}return!0}function Xa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qa=(t,n,e)=>t??n??e,kv=Fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:e}){const s=dr(Io),o=j0(()=>t.route||s.value),u=dr(Za,0),a=j0(()=>{let p=k0(u);const{matched:v}=o.value;let y;for(;(y=v[p])&&!y.components;)p++;return p}),f=j0(()=>o.value.matched[a.value]);ji(Za,j0(()=>a.value+1)),ji(mv,f),ji(Io,o);const h=Mt();return Ce(()=>[h.value,f.value,t.name],([p,v,y],[S,T,U])=>{v&&(v.instances[y]=p,T&&T!==v&&p&&p===S&&(v.leaveGuards.size||(v.leaveGuards=T.leaveGuards),v.updateGuards.size||(v.updateGuards=T.updateGuards))),p&&v&&(!T||!Ne(v,T)||!S)&&(v.enterCallbacks[y]||[]).forEach(C=>C(p))},{flush:"post"}),()=>{const p=o.value,v=t.name,y=f.value,S=y&&y.components[v];if(!S)return tc(e.default,{Component:S,route:p});const T=y.props[v],U=T?T===!0?p.params:typeof T=="function"?T(p):T:null,P=k2(S,d0({},U,n,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(y.instances[v]=null)},ref:h}));return tc(e.default,{Component:P,route:p})||P}}});function tc(t,n){if(!t)return null;const e=t(n);return e.length===1?e[0]:e}const Zf=kv;function Sv(t){const n=cv(t.routes,t),e=t.parseQuery||gv,s=t.stringifyQuery||za,o=t.history,u=u1(),a=u1(),f=u1(),h=Fg(y2);let p=y2;xe&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=co.bind(null,Y=>""+Y),y=co.bind(null,Ym),S=co.bind(null,C1);function T(Y,at){let it,xt;return Gf(Y)?(it=n.getRecordMatcher(Y),xt=at):xt=Y,n.addRoute(xt,it)}function U(Y){const at=n.getRecordMatcher(Y);at&&n.removeRoute(at)}function C(){return n.getRoutes().map(Y=>Y.record)}function P(Y){return!!n.getRecordMatcher(Y)}function N(Y,at){if(at=d0({},at||h.value),typeof Y=="string"){const w=fo(e,Y,at.path),R=n.resolve({path:w.path},at),j=o.createHref(w.fullPath);return d0(w,R,{params:S(R.params),hash:C1(w.hash),redirectedFrom:void 0,href:j})}let it;if(Y.path!=null)it=d0({},Y,{path:fo(e,Y.path,at.path).path});else{const w=d0({},Y.params);for(const R in w)w[R]==null&&delete w[R];it=d0({},Y,{params:y(w)}),at.params=y(at.params)}const xt=n.resolve(it,at),Jt=Y.hash||"";xt.params=v(S(xt.params));const f0=Wm(s,d0({},Y,{hash:Pm(Jt),path:xt.path})),x=o.createHref(f0);return d0({fullPath:f0,hash:Jt,query:s===za?pv(Y.query):Y.query||{}},xt,{redirectedFrom:void 0,href:x})}function Z(Y){return typeof Y=="string"?fo(e,Y,h.value.path):d0({},Y)}function G(Y,at){if(p!==Y)return Ye(8,{from:at,to:Y})}function rt(Y){return wt(Y)}function tt(Y){return rt(d0(Z(Y),{replace:!0}))}function yt(Y){const at=Y.matched[Y.matched.length-1];if(at&&at.redirect){const{redirect:it}=at;let xt=typeof it=="function"?it(Y):it;return typeof xt=="string"&&(xt=xt.includes("?")||xt.includes("#")?xt=Z(xt):{path:xt},xt.params={}),d0({query:Y.query,hash:Y.hash,params:xt.path!=null?{}:Y.params},xt)}}function wt(Y,at){const it=p=N(Y),xt=h.value,Jt=Y.state,f0=Y.force,x=Y.replace===!0,w=yt(it);if(w)return wt(d0(Z(w),{state:typeof w=="object"?d0({},Jt,w.state):Jt,force:f0,replace:x}),at||it);const R=it;R.redirectedFrom=at;let j;return!f0&&Um(s,xt,it)&&(j=Ye(16,{to:R,from:xt}),D0(xt,xt,!0,!1)),(j?Promise.resolve(j):x0(R,xt)).catch($=>Br($)?Br($,2)?$:_n($):Dt($,R,xt)).then($=>{if($){if(Br($,2))return wt(d0({replace:x},Z($.to),{state:typeof $.to=="object"?d0({},Jt,$.to.state):Jt,force:f0}),at||R)}else $=K0(R,xt,!0,x,Jt);return w0(R,xt,$),$})}function Qt(Y,at){const it=G(Y,at);return it?Promise.reject(it):Promise.resolve()}function c0(Y){const at=lr.values().next().value;return at&&typeof at.runWithContext=="function"?at.runWithContext(Y):Y()}function x0(Y,at){let it;const[xt,Jt,f0]=Mv(Y,at);it=ho(xt.reverse(),"beforeRouteLeave",Y,at);for(const w of xt)w.leaveGuards.forEach(R=>{it.push(S2(R,Y,at))});const x=Qt.bind(null,Y,at);return it.push(x),V0(it).then(()=>{it=[];for(const w of u.list())it.push(S2(w,Y,at));return it.push(x),V0(it)}).then(()=>{it=ho(Jt,"beforeRouteUpdate",Y,at);for(const w of Jt)w.updateGuards.forEach(R=>{it.push(S2(R,Y,at))});return it.push(x),V0(it)}).then(()=>{it=[];for(const w of f0)if(w.beforeEnter)if(gr(w.beforeEnter))for(const R of w.beforeEnter)it.push(S2(R,Y,at));else it.push(S2(w.beforeEnter,Y,at));return it.push(x),V0(it)}).then(()=>(Y.matched.forEach(w=>w.enterCallbacks={}),it=ho(f0,"beforeRouteEnter",Y,at,c0),it.push(x),V0(it))).then(()=>{it=[];for(const w of a.list())it.push(S2(w,Y,at));return it.push(x),V0(it)}).catch(w=>Br(w,8)?w:Promise.reject(w))}function w0(Y,at,it){f.list().forEach(xt=>c0(()=>xt(Y,at,it)))}function K0(Y,at,it,xt,Jt){const f0=G(Y,at);if(f0)return f0;const x=at===y2,w=xe?history.state:{};it&&(xt||x?o.replace(Y.fullPath,d0({scroll:x&&w&&w.scroll},Jt)):o.push(Y.fullPath,Jt)),h.value=Y,D0(Y,at,it,x),_n()}let L0;function z0(){L0||(L0=o.listen((Y,at,it)=>{if(!en.listening)return;const xt=N(Y),Jt=yt(xt);if(Jt){wt(d0(Jt,{replace:!0,force:!0}),xt).catch(w1);return}p=xt;const f0=h.value;xe&&zm(Wa(f0.fullPath,it.delta),Ts()),x0(xt,f0).catch(x=>Br(x,12)?x:Br(x,2)?(wt(d0(Z(x.to),{force:!0}),xt).then(w=>{Br(w,20)&&!it.delta&&it.type===R1.pop&&o.go(-1,!1)}).catch(w1),Promise.reject()):(it.delta&&o.go(-it.delta,!1),Dt(x,xt,f0))).then(x=>{x=x||K0(xt,f0,!1),x&&(it.delta&&!Br(x,8)?o.go(-it.delta,!1):it.type===R1.pop&&Br(x,20)&&o.go(-1,!1)),w0(xt,f0,x)}).catch(w1)}))}let bn=u1(),jt=u1(),Tt;function Dt(Y,at,it){_n(Y);const xt=jt.list();return xt.length?xt.forEach(Jt=>Jt(Y,at,it)):console.error(Y),Promise.reject(Y)}function an(){return Tt&&h.value!==y2?Promise.resolve():new Promise((Y,at)=>{bn.add([Y,at])})}function _n(Y){return Tt||(Tt=!Y,z0(),bn.list().forEach(([at,it])=>Y?it(Y):at()),bn.reset()),Y}function D0(Y,at,it,xt){const{scrollBehavior:Jt}=t;if(!xe||!Jt)return Promise.resolve();const f0=!it&&Zm(Wa(Y.fullPath,0))||(xt||!it)&&history.state&&history.state.scroll||null;return s4().then(()=>Jt(Y,at,f0)).then(x=>x&&Km(x)).catch(x=>Dt(x,Y,at))}const Z0=Y=>o.go(Y);let Gn;const lr=new Set,en={currentRoute:h,listening:!0,addRoute:T,removeRoute:U,clearRoutes:n.clearRoutes,hasRoute:P,getRoutes:C,resolve:N,options:t,push:rt,replace:tt,go:Z0,back:()=>Z0(-1),forward:()=>Z0(1),beforeEach:u.add,beforeResolve:a.add,afterEach:f.add,onError:jt.add,isReady:an,install(Y){const at=this;Y.component("RouterLink",xv),Y.component("RouterView",Zf),Y.config.globalProperties.$router=at,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>k0(h)}),xe&&!Gn&&h.value===y2&&(Gn=!0,rt(o.location).catch(Jt=>{}));const it={};for(const Jt in y2)Object.defineProperty(it,Jt,{get:()=>h.value[Jt],enumerable:!0});Y.provide(Os,at),Y.provide(h4,Xc(it)),Y.provide(Io,h);const xt=Y.unmount;lr.add(Y),Y.unmount=function(){lr.delete(Y),lr.size<1&&(p=y2,L0&&L0(),L0=null,h.value=y2,Gn=!1,Tt=!1),xt()}}};function V0(Y){return Y.reduce((at,it)=>at.then(()=>c0(it)),Promise.resolve())}return en}function Mv(t,n){const e=[],s=[],o=[],u=Math.max(n.matched.length,t.matched.length);for(let a=0;a<u;a++){const f=n.matched[a];f&&(t.matched.find(p=>Ne(p,f))?s.push(f):e.push(f));const h=t.matched[a];h&&(n.matched.find(p=>Ne(p,h))||o.push(h))}return[e,s,o]}function Tv(){return dr(Os)}function Ov(t){return dr(h4)}const Ev=Fe({__name:"App",setup(t){return(n,e)=>(ft(),ke(k0(Zf)))}});//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Jf;function X(){return Jf.apply(null,arguments)}function Dv(t){Jf=t}function pr(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Z2(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function u0(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function _4(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var n;for(n in t)if(u0(t,n))return!1;return!0}function $n(t){return t===void 0}function s2(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function W1(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function Xf(t,n){var e=[],s,o=t.length;for(s=0;s<o;++s)e.push(n(t[s],s));return e}function T2(t,n){for(var e in n)u0(n,e)&&(t[e]=n[e]);return u0(n,"toString")&&(t.toString=n.toString),u0(n,"valueOf")&&(t.valueOf=n.valueOf),t}function Rr(t,n,e,s){return w5(t,n,e,s,!0).utc()}function Cv(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Vt(t){return t._pf==null&&(t._pf=Cv()),t._pf}var No;Array.prototype.some?No=Array.prototype.some:No=function(t){var n=Object(this),e=n.length>>>0,s;for(s=0;s<e;s++)if(s in n&&t.call(this,n[s],s,n))return!0;return!1};function d4(t){var n=null,e=!1,s=t._d&&!isNaN(t._d.getTime());if(s&&(n=Vt(t),e=No.call(n.parsedDateParts,function(o){return o!=null}),s=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&e),t._strict&&(s=s&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=s;else return s;return t._isValid}function Es(t){var n=Rr(NaN);return t!=null?T2(Vt(n),t):Vt(n).userInvalidated=!0,n}var nc=X.momentProperties=[],_o=!1;function g4(t,n){var e,s,o,u=nc.length;if($n(n._isAMomentObject)||(t._isAMomentObject=n._isAMomentObject),$n(n._i)||(t._i=n._i),$n(n._f)||(t._f=n._f),$n(n._l)||(t._l=n._l),$n(n._strict)||(t._strict=n._strict),$n(n._tzm)||(t._tzm=n._tzm),$n(n._isUTC)||(t._isUTC=n._isUTC),$n(n._offset)||(t._offset=n._offset),$n(n._pf)||(t._pf=Vt(n)),$n(n._locale)||(t._locale=n._locale),u>0)for(e=0;e<u;e++)s=nc[e],o=n[s],$n(o)||(t[s]=o);return t}function U1(t){g4(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),_o===!1&&(_o=!0,X.updateOffset(this),_o=!1)}function mr(t){return t instanceof U1||t!=null&&t._isAMomentObject!=null}function Qf(t){X.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function sr(t,n){var e=!0;return T2(function(){if(X.deprecationHandler!=null&&X.deprecationHandler(null,t),e){var s=[],o,u,a,f=arguments.length;for(u=0;u<f;u++){if(o="",typeof arguments[u]=="object"){o+=`
[`+u+"] ";for(a in arguments[0])u0(arguments[0],a)&&(o+=a+": "+arguments[0][a]+", ");o=o.slice(0,-2)}else o=arguments[u];s.push(o)}Qf(t+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),e=!1}return n.apply(this,arguments)},n)}var rc={};function t5(t,n){X.deprecationHandler!=null&&X.deprecationHandler(t,n),rc[t]||(Qf(n),rc[t]=!0)}X.suppressDeprecationWarnings=!1;X.deprecationHandler=null;function Ar(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function Rv(t){var n,e;for(e in t)u0(t,e)&&(n=t[e],Ar(n)?this[e]=n:this["_"+e]=n);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Yo(t,n){var e=T2({},t),s;for(s in n)u0(n,s)&&(Z2(t[s])&&Z2(n[s])?(e[s]={},T2(e[s],t[s]),T2(e[s],n[s])):n[s]!=null?e[s]=n[s]:delete e[s]);for(s in t)u0(t,s)&&!u0(n,s)&&Z2(t[s])&&(e[s]=T2({},e[s]));return e}function p4(t){t!=null&&this.set(t)}var Lo;Object.keys?Lo=Object.keys:Lo=function(t){var n,e=[];for(n in t)u0(t,n)&&e.push(n);return e};var Av={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function $v(t,n,e){var s=this._calendar[t]||this._calendar.sameElse;return Ar(s)?s.call(n,e):s}function Dr(t,n,e){var s=""+Math.abs(t),o=n-s.length,u=t>=0;return(u?e?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+s}var m4=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Hi=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,go={},Re={};function Ot(t,n,e,s){var o=s;typeof s=="string"&&(o=function(){return this[s]()}),t&&(Re[t]=o),n&&(Re[n[0]]=function(){return Dr(o.apply(this,arguments),n[1],n[2])}),e&&(Re[e]=function(){return this.localeData().ordinal(o.apply(this,arguments),t)})}function Pv(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function Iv(t){var n=t.match(m4),e,s;for(e=0,s=n.length;e<s;e++)Re[n[e]]?n[e]=Re[n[e]]:n[e]=Pv(n[e]);return function(o){var u="",a;for(a=0;a<s;a++)u+=Ar(n[a])?n[a].call(o,t):n[a];return u}}function Zi(t,n){return t.isValid()?(n=n5(n,t.localeData()),go[n]=go[n]||Iv(n),go[n](t)):t.localeData().invalidDate()}function n5(t,n){var e=5;function s(o){return n.longDateFormat(o)||o}for(Hi.lastIndex=0;e>=0&&Hi.test(t);)t=t.replace(Hi,s),Hi.lastIndex=0,e-=1;return t}var Nv={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Yv(t){var n=this._longDateFormat[t],e=this._longDateFormat[t.toUpperCase()];return n||!e?n:(this._longDateFormat[t]=e.match(m4).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[t])}var Lv="Invalid date";function Fv(){return this._invalidDate}var Wv="%d",Uv=/\d{1,2}/;function Hv(t){return this._ordinal.replace("%d",t)}var qv={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Vv(t,n,e,s){var o=this._relativeTime[e];return Ar(o)?o(t,n,e,s):o.replace(/%d/i,t)}function Bv(t,n){var e=this._relativeTime[t>0?"future":"past"];return Ar(e)?e(n):e.replace(/%s/i,n)}var ec={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function or(t){return typeof t=="string"?ec[t]||ec[t.toLowerCase()]:void 0}function v4(t){var n={},e,s;for(s in t)u0(t,s)&&(e=or(s),e&&(n[e]=t[s]));return n}var Gv={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function jv(t){var n=[],e;for(e in t)u0(t,e)&&n.push({unit:e,priority:Gv[e]});return n.sort(function(s,o){return s.priority-o.priority}),n}var r5=/\d/,Bn=/\d\d/,e5=/\d{3}/,y4=/\d{4}/,Ds=/[+-]?\d{6}/,A0=/\d\d?/,i5=/\d\d\d\d?/,s5=/\d\d\d\d\d\d?/,Cs=/\d{1,3}/,x4=/\d{1,4}/,Rs=/[+-]?\d{1,6}/,We=/\d+/,As=/[+-]?\d+/,Kv=/Z|[+-]\d\d:?\d\d/gi,$s=/Z|[+-]\d\d(?::?\d\d)?/gi,zv=/[+-]?\d+(\.\d{1,3})?/,H1=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Ue=/^[1-9]\d?/,w4=/^([1-9]\d|\d)/,as;as={};function mt(t,n,e){as[t]=Ar(n)?n:function(s,o){return s&&e?e:n}}function Zv(t,n){return u0(as,t)?as[t](n._strict,n._locale):new RegExp(Jv(t))}function Jv(t){return r2(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,e,s,o,u){return e||s||o||u}))}function r2(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function rr(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function n0(t){var n=+t,e=0;return n!==0&&isFinite(n)&&(e=rr(n)),e}var Fo={};function y0(t,n){var e,s=n,o;for(typeof t=="string"&&(t=[t]),s2(n)&&(s=function(u,a){a[n]=n0(u)}),o=t.length,e=0;e<o;e++)Fo[t[e]]=s}function q1(t,n){y0(t,function(e,s,o,u){o._w=o._w||{},n(e,o._w,o,u)})}function Xv(t,n,e){n!=null&&u0(Fo,t)&&Fo[t](n,e._a,e,t)}function Ps(t){return t%4===0&&t%100!==0||t%400===0}var wn=0,Qr=1,Mr=2,rn=3,hr=4,t2=5,j2=6,Qv=7,ty=8;Ot("Y",0,0,function(){var t=this.year();return t<=9999?Dr(t,4):"+"+t});Ot(0,["YY",2],0,function(){return this.year()%100});Ot(0,["YYYY",4],0,"year");Ot(0,["YYYYY",5],0,"year");Ot(0,["YYYYYY",6,!0],0,"year");mt("Y",As);mt("YY",A0,Bn);mt("YYYY",x4,y4);mt("YYYYY",Rs,Ds);mt("YYYYYY",Rs,Ds);y0(["YYYYY","YYYYYY"],wn);y0("YYYY",function(t,n){n[wn]=t.length===2?X.parseTwoDigitYear(t):n0(t)});y0("YY",function(t,n){n[wn]=X.parseTwoDigitYear(t)});y0("Y",function(t,n){n[wn]=parseInt(t,10)});function k1(t){return Ps(t)?366:365}X.parseTwoDigitYear=function(t){return n0(t)+(n0(t)>68?1900:2e3)};var o5=He("FullYear",!0);function ny(){return Ps(this.year())}function He(t,n){return function(e){return e!=null?(l5(this,t,e),X.updateOffset(this,n),this):A1(this,t)}}function A1(t,n){if(!t.isValid())return NaN;var e=t._d,s=t._isUTC;switch(n){case"Milliseconds":return s?e.getUTCMilliseconds():e.getMilliseconds();case"Seconds":return s?e.getUTCSeconds():e.getSeconds();case"Minutes":return s?e.getUTCMinutes():e.getMinutes();case"Hours":return s?e.getUTCHours():e.getHours();case"Date":return s?e.getUTCDate():e.getDate();case"Day":return s?e.getUTCDay():e.getDay();case"Month":return s?e.getUTCMonth():e.getMonth();case"FullYear":return s?e.getUTCFullYear():e.getFullYear();default:return NaN}}function l5(t,n,e){var s,o,u,a,f;if(!(!t.isValid()||isNaN(e))){switch(s=t._d,o=t._isUTC,n){case"Milliseconds":return void(o?s.setUTCMilliseconds(e):s.setMilliseconds(e));case"Seconds":return void(o?s.setUTCSeconds(e):s.setSeconds(e));case"Minutes":return void(o?s.setUTCMinutes(e):s.setMinutes(e));case"Hours":return void(o?s.setUTCHours(e):s.setHours(e));case"Date":return void(o?s.setUTCDate(e):s.setDate(e));case"FullYear":break;default:return}u=e,a=t.month(),f=t.date(),f=f===29&&a===1&&!Ps(u)?28:f,o?s.setUTCFullYear(u,a,f):s.setFullYear(u,a,f)}}function ry(t){return t=or(t),Ar(this[t])?this[t]():this}function ey(t,n){if(typeof t=="object"){t=v4(t);var e=jv(t),s,o=e.length;for(s=0;s<o;s++)this[e[s].unit](t[e[s].unit])}else if(t=or(t),Ar(this[t]))return this[t](n);return this}function iy(t,n){return(t%n+n)%n}var H0;Array.prototype.indexOf?H0=Array.prototype.indexOf:H0=function(t){var n;for(n=0;n<this.length;++n)if(this[n]===t)return n;return-1};function b4(t,n){if(isNaN(t)||isNaN(n))return NaN;var e=iy(n,12);return t+=(n-e)/12,e===1?Ps(t)?29:28:31-e%7%2}Ot("M",["MM",2],"Mo",function(){return this.month()+1});Ot("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});Ot("MMMM",0,0,function(t){return this.localeData().months(this,t)});mt("M",A0,Ue);mt("MM",A0,Bn);mt("MMM",function(t,n){return n.monthsShortRegex(t)});mt("MMMM",function(t,n){return n.monthsRegex(t)});y0(["M","MM"],function(t,n){n[Qr]=n0(t)-1});y0(["MMM","MMMM"],function(t,n,e,s){var o=e._locale.monthsParse(t,s,e._strict);o!=null?n[Qr]=o:Vt(e).invalidMonth=t});var sy="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),u5="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),a5=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,oy=H1,ly=H1;function uy(t,n){return t?pr(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||a5).test(n)?"format":"standalone"][t.month()]:pr(this._months)?this._months:this._months.standalone}function ay(t,n){return t?pr(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[a5.test(n)?"format":"standalone"][t.month()]:pr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function cy(t,n,e){var s,o,u,a=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)u=Rr([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(u,"").toLocaleLowerCase();return e?n==="MMM"?(o=H0.call(this._shortMonthsParse,a),o!==-1?o:null):(o=H0.call(this._longMonthsParse,a),o!==-1?o:null):n==="MMM"?(o=H0.call(this._shortMonthsParse,a),o!==-1?o:(o=H0.call(this._longMonthsParse,a),o!==-1?o:null)):(o=H0.call(this._longMonthsParse,a),o!==-1?o:(o=H0.call(this._shortMonthsParse,a),o!==-1?o:null))}function fy(t,n,e){var s,o,u;if(this._monthsParseExact)return cy.call(this,t,n,e);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(o=Rr([2e3,s]),e&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),!e&&!this._monthsParse[s]&&(u="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[s]=new RegExp(u.replace(".",""),"i")),e&&n==="MMMM"&&this._longMonthsParse[s].test(t))return s;if(e&&n==="MMM"&&this._shortMonthsParse[s].test(t))return s;if(!e&&this._monthsParse[s].test(t))return s}}function c5(t,n){if(!t.isValid())return t;if(typeof n=="string"){if(/^\d+$/.test(n))n=n0(n);else if(n=t.localeData().monthsParse(n),!s2(n))return t}var e=n,s=t.date();return s=s<29?s:Math.min(s,b4(t.year(),e)),t._isUTC?t._d.setUTCMonth(e,s):t._d.setMonth(e,s),t}function f5(t){return t!=null?(c5(this,t),X.updateOffset(this,!0),this):A1(this,"Month")}function hy(){return b4(this.year(),this.month())}function _y(t){return this._monthsParseExact?(u0(this,"_monthsRegex")||h5.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(u0(this,"_monthsShortRegex")||(this._monthsShortRegex=oy),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function dy(t){return this._monthsParseExact?(u0(this,"_monthsRegex")||h5.call(this),t?this._monthsStrictRegex:this._monthsRegex):(u0(this,"_monthsRegex")||(this._monthsRegex=ly),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function h5(){function t(h,p){return p.length-h.length}var n=[],e=[],s=[],o,u,a,f;for(o=0;o<12;o++)u=Rr([2e3,o]),a=r2(this.monthsShort(u,"")),f=r2(this.months(u,"")),n.push(a),e.push(f),s.push(f),s.push(a);n.sort(t),e.sort(t),s.sort(t),this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function gy(t,n,e,s,o,u,a){var f;return t<100&&t>=0?(f=new Date(t+400,n,e,s,o,u,a),isFinite(f.getFullYear())&&f.setFullYear(t)):f=new Date(t,n,e,s,o,u,a),f}function $1(t){var n,e;return t<100&&t>=0?(e=Array.prototype.slice.call(arguments),e[0]=t+400,n=new Date(Date.UTC.apply(null,e)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(t)):n=new Date(Date.UTC.apply(null,arguments)),n}function cs(t,n,e){var s=7+n-e,o=(7+$1(t,0,s).getUTCDay()-n)%7;return-o+s-1}function _5(t,n,e,s,o){var u=(7+e-s)%7,a=cs(t,s,o),f=1+7*(n-1)+u+a,h,p;return f<=0?(h=t-1,p=k1(h)+f):f>k1(t)?(h=t+1,p=f-k1(t)):(h=t,p=f),{year:h,dayOfYear:p}}function P1(t,n,e){var s=cs(t.year(),n,e),o=Math.floor((t.dayOfYear()-s-1)/7)+1,u,a;return o<1?(a=t.year()-1,u=o+e2(a,n,e)):o>e2(t.year(),n,e)?(u=o-e2(t.year(),n,e),a=t.year()+1):(a=t.year(),u=o),{week:u,year:a}}function e2(t,n,e){var s=cs(t,n,e),o=cs(t+1,n,e);return(k1(t)-s+o)/7}Ot("w",["ww",2],"wo","week");Ot("W",["WW",2],"Wo","isoWeek");mt("w",A0,Ue);mt("ww",A0,Bn);mt("W",A0,Ue);mt("WW",A0,Bn);q1(["w","ww","W","WW"],function(t,n,e,s){n[s.substr(0,1)]=n0(t)});function py(t){return P1(t,this._week.dow,this._week.doy).week}var my={dow:0,doy:6};function vy(){return this._week.dow}function yy(){return this._week.doy}function xy(t){var n=this.localeData().week(this);return t==null?n:this.add((t-n)*7,"d")}function wy(t){var n=P1(this,1,4).week;return t==null?n:this.add((t-n)*7,"d")}Ot("d",0,"do","day");Ot("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});Ot("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});Ot("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});Ot("e",0,0,"weekday");Ot("E",0,0,"isoWeekday");mt("d",A0);mt("e",A0);mt("E",A0);mt("dd",function(t,n){return n.weekdaysMinRegex(t)});mt("ddd",function(t,n){return n.weekdaysShortRegex(t)});mt("dddd",function(t,n){return n.weekdaysRegex(t)});q1(["dd","ddd","dddd"],function(t,n,e,s){var o=e._locale.weekdaysParse(t,s,e._strict);o!=null?n.d=o:Vt(e).invalidWeekday=t});q1(["d","e","E"],function(t,n,e,s){n[s]=n0(t)});function by(t,n){return typeof t!="string"?t:isNaN(t)?(t=n.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function ky(t,n){return typeof t=="string"?n.weekdaysParse(t)%7||7:isNaN(t)?null:t}function k4(t,n){return t.slice(n,7).concat(t.slice(0,n))}var Sy="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),d5="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),My="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ty=H1,Oy=H1,Ey=H1;function Dy(t,n){var e=pr(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return t===!0?k4(e,this._week.dow):t?e[t.day()]:e}function Cy(t){return t===!0?k4(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Ry(t){return t===!0?k4(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Ay(t,n,e){var s,o,u,a=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)u=Rr([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(u,"").toLocaleLowerCase();return e?n==="dddd"?(o=H0.call(this._weekdaysParse,a),o!==-1?o:null):n==="ddd"?(o=H0.call(this._shortWeekdaysParse,a),o!==-1?o:null):(o=H0.call(this._minWeekdaysParse,a),o!==-1?o:null):n==="dddd"?(o=H0.call(this._weekdaysParse,a),o!==-1||(o=H0.call(this._shortWeekdaysParse,a),o!==-1)?o:(o=H0.call(this._minWeekdaysParse,a),o!==-1?o:null)):n==="ddd"?(o=H0.call(this._shortWeekdaysParse,a),o!==-1||(o=H0.call(this._weekdaysParse,a),o!==-1)?o:(o=H0.call(this._minWeekdaysParse,a),o!==-1?o:null)):(o=H0.call(this._minWeekdaysParse,a),o!==-1||(o=H0.call(this._weekdaysParse,a),o!==-1)?o:(o=H0.call(this._shortWeekdaysParse,a),o!==-1?o:null))}function $y(t,n,e){var s,o,u;if(this._weekdaysParseExact)return Ay.call(this,t,n,e);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(o=Rr([2e3,1]).day(s),e&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(o,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(o,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(o,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(u="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[s]=new RegExp(u.replace(".",""),"i")),e&&n==="dddd"&&this._fullWeekdaysParse[s].test(t))return s;if(e&&n==="ddd"&&this._shortWeekdaysParse[s].test(t))return s;if(e&&n==="dd"&&this._minWeekdaysParse[s].test(t))return s;if(!e&&this._weekdaysParse[s].test(t))return s}}function Py(t){if(!this.isValid())return t!=null?this:NaN;var n=A1(this,"Day");return t!=null?(t=by(t,this.localeData()),this.add(t-n,"d")):n}function Iy(t){if(!this.isValid())return t!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return t==null?n:this.add(t-n,"d")}function Ny(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var n=ky(t,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function Yy(t){return this._weekdaysParseExact?(u0(this,"_weekdaysRegex")||S4.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(u0(this,"_weekdaysRegex")||(this._weekdaysRegex=Ty),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ly(t){return this._weekdaysParseExact?(u0(this,"_weekdaysRegex")||S4.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u0(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Oy),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Fy(t){return this._weekdaysParseExact?(u0(this,"_weekdaysRegex")||S4.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u0(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ey),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function S4(){function t(v,y){return y.length-v.length}var n=[],e=[],s=[],o=[],u,a,f,h,p;for(u=0;u<7;u++)a=Rr([2e3,1]).day(u),f=r2(this.weekdaysMin(a,"")),h=r2(this.weekdaysShort(a,"")),p=r2(this.weekdays(a,"")),n.push(f),e.push(h),s.push(p),o.push(f),o.push(h),o.push(p);n.sort(t),e.sort(t),s.sort(t),o.sort(t),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function M4(){return this.hours()%12||12}function Wy(){return this.hours()||24}Ot("H",["HH",2],0,"hour");Ot("h",["hh",2],0,M4);Ot("k",["kk",2],0,Wy);Ot("hmm",0,0,function(){return""+M4.apply(this)+Dr(this.minutes(),2)});Ot("hmmss",0,0,function(){return""+M4.apply(this)+Dr(this.minutes(),2)+Dr(this.seconds(),2)});Ot("Hmm",0,0,function(){return""+this.hours()+Dr(this.minutes(),2)});Ot("Hmmss",0,0,function(){return""+this.hours()+Dr(this.minutes(),2)+Dr(this.seconds(),2)});function g5(t,n){Ot(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}g5("a",!0);g5("A",!1);function p5(t,n){return n._meridiemParse}mt("a",p5);mt("A",p5);mt("H",A0,w4);mt("h",A0,Ue);mt("k",A0,Ue);mt("HH",A0,Bn);mt("hh",A0,Bn);mt("kk",A0,Bn);mt("hmm",i5);mt("hmmss",s5);mt("Hmm",i5);mt("Hmmss",s5);y0(["H","HH"],rn);y0(["k","kk"],function(t,n,e){var s=n0(t);n[rn]=s===24?0:s});y0(["a","A"],function(t,n,e){e._isPm=e._locale.isPM(t),e._meridiem=t});y0(["h","hh"],function(t,n,e){n[rn]=n0(t),Vt(e).bigHour=!0});y0("hmm",function(t,n,e){var s=t.length-2;n[rn]=n0(t.substr(0,s)),n[hr]=n0(t.substr(s)),Vt(e).bigHour=!0});y0("hmmss",function(t,n,e){var s=t.length-4,o=t.length-2;n[rn]=n0(t.substr(0,s)),n[hr]=n0(t.substr(s,2)),n[t2]=n0(t.substr(o)),Vt(e).bigHour=!0});y0("Hmm",function(t,n,e){var s=t.length-2;n[rn]=n0(t.substr(0,s)),n[hr]=n0(t.substr(s))});y0("Hmmss",function(t,n,e){var s=t.length-4,o=t.length-2;n[rn]=n0(t.substr(0,s)),n[hr]=n0(t.substr(s,2)),n[t2]=n0(t.substr(o))});function Uy(t){return(t+"").toLowerCase().charAt(0)==="p"}var Hy=/[ap]\.?m?\.?/i,qy=He("Hours",!0);function Vy(t,n,e){return t>11?e?"pm":"PM":e?"am":"AM"}var m5={calendar:Av,longDateFormat:Nv,invalidDate:Lv,ordinal:Wv,dayOfMonthOrdinalParse:Uv,relativeTime:qv,months:sy,monthsShort:u5,week:my,weekdays:Sy,weekdaysMin:My,weekdaysShort:d5,meridiemParse:Hy},P0={},a1={},I1;function By(t,n){var e,s=Math.min(t.length,n.length);for(e=0;e<s;e+=1)if(t[e]!==n[e])return e;return s}function ic(t){return t&&t.toLowerCase().replace("_","-")}function Gy(t){for(var n=0,e,s,o,u;n<t.length;){for(u=ic(t[n]).split("-"),e=u.length,s=ic(t[n+1]),s=s?s.split("-"):null;e>0;){if(o=Is(u.slice(0,e).join("-")),o)return o;if(s&&s.length>=e&&By(u,s)>=e-1)break;e--}n++}return I1}function jy(t){return!!(t&&t.match("^[^/\\\\]*$"))}function Is(t){var n=null,e;if(P0[t]===void 0&&typeof Qi<"u"&&Qi&&Qi.exports&&jy(t))try{n=I1._abbr,e=require,e("./locale/"+t),D2(n)}catch{P0[t]=null}return P0[t]}function D2(t,n){var e;return t&&($n(n)?e=l2(t):e=T4(t,n),e?I1=e:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),I1._abbr}function T4(t,n){if(n!==null){var e,s=m5;if(n.abbr=t,P0[t]!=null)t5("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=P0[t]._config;else if(n.parentLocale!=null)if(P0[n.parentLocale]!=null)s=P0[n.parentLocale]._config;else if(e=Is(n.parentLocale),e!=null)s=e._config;else return a1[n.parentLocale]||(a1[n.parentLocale]=[]),a1[n.parentLocale].push({name:t,config:n}),null;return P0[t]=new p4(Yo(s,n)),a1[t]&&a1[t].forEach(function(o){T4(o.name,o.config)}),D2(t),P0[t]}else return delete P0[t],null}function Ky(t,n){if(n!=null){var e,s,o=m5;P0[t]!=null&&P0[t].parentLocale!=null?P0[t].set(Yo(P0[t]._config,n)):(s=Is(t),s!=null&&(o=s._config),n=Yo(o,n),s==null&&(n.abbr=t),e=new p4(n),e.parentLocale=P0[t],P0[t]=e),D2(t)}else P0[t]!=null&&(P0[t].parentLocale!=null?(P0[t]=P0[t].parentLocale,t===D2()&&D2(t)):P0[t]!=null&&delete P0[t]);return P0[t]}function l2(t){var n;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return I1;if(!pr(t)){if(n=Is(t),n)return n;t=[t]}return Gy(t)}function zy(){return Lo(P0)}function O4(t){var n,e=t._a;return e&&Vt(t).overflow===-2&&(n=e[Qr]<0||e[Qr]>11?Qr:e[Mr]<1||e[Mr]>b4(e[wn],e[Qr])?Mr:e[rn]<0||e[rn]>24||e[rn]===24&&(e[hr]!==0||e[t2]!==0||e[j2]!==0)?rn:e[hr]<0||e[hr]>59?hr:e[t2]<0||e[t2]>59?t2:e[j2]<0||e[j2]>999?j2:-1,Vt(t)._overflowDayOfYear&&(n<wn||n>Mr)&&(n=Mr),Vt(t)._overflowWeeks&&n===-1&&(n=Qv),Vt(t)._overflowWeekday&&n===-1&&(n=ty),Vt(t).overflow=n),t}var Zy=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Jy=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Xy=/Z|[+-]\d\d(?::?\d\d)?/,qi=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],po=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Qy=/^\/?Date\((-?\d+)/i,tx=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,nx={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function v5(t){var n,e,s=t._i,o=Zy.exec(s)||Jy.exec(s),u,a,f,h,p=qi.length,v=po.length;if(o){for(Vt(t).iso=!0,n=0,e=p;n<e;n++)if(qi[n][1].exec(o[1])){a=qi[n][0],u=qi[n][2]!==!1;break}if(a==null){t._isValid=!1;return}if(o[3]){for(n=0,e=v;n<e;n++)if(po[n][1].exec(o[3])){f=(o[2]||" ")+po[n][0];break}if(f==null){t._isValid=!1;return}}if(!u&&f!=null){t._isValid=!1;return}if(o[4])if(Xy.exec(o[4]))h="Z";else{t._isValid=!1;return}t._f=a+(f||"")+(h||""),D4(t)}else t._isValid=!1}function rx(t,n,e,s,o,u){var a=[ex(t),u5.indexOf(n),parseInt(e,10),parseInt(s,10),parseInt(o,10)];return u&&a.push(parseInt(u,10)),a}function ex(t){var n=parseInt(t,10);return n<=49?2e3+n:n<=999?1900+n:n}function ix(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function sx(t,n,e){if(t){var s=d5.indexOf(t),o=new Date(n[0],n[1],n[2]).getDay();if(s!==o)return Vt(e).weekdayMismatch=!0,e._isValid=!1,!1}return!0}function ox(t,n,e){if(t)return nx[t];if(n)return 0;var s=parseInt(e,10),o=s%100,u=(s-o)/100;return u*60+o}function y5(t){var n=tx.exec(ix(t._i)),e;if(n){if(e=rx(n[4],n[3],n[2],n[5],n[6],n[7]),!sx(n[1],e,t))return;t._a=e,t._tzm=ox(n[8],n[9],n[10]),t._d=$1.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),Vt(t).rfc2822=!0}else t._isValid=!1}function lx(t){var n=Qy.exec(t._i);if(n!==null){t._d=new Date(+n[1]);return}if(v5(t),t._isValid===!1)delete t._isValid;else return;if(y5(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:X.createFromInputFallback(t)}X.createFromInputFallback=sr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function we(t,n,e){return t??n??e}function ux(t){var n=new Date(X.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function E4(t){var n,e,s=[],o,u,a;if(!t._d){for(o=ux(t),t._w&&t._a[Mr]==null&&t._a[Qr]==null&&ax(t),t._dayOfYear!=null&&(a=we(t._a[wn],o[wn]),(t._dayOfYear>k1(a)||t._dayOfYear===0)&&(Vt(t)._overflowDayOfYear=!0),e=$1(a,0,t._dayOfYear),t._a[Qr]=e.getUTCMonth(),t._a[Mr]=e.getUTCDate()),n=0;n<3&&t._a[n]==null;++n)t._a[n]=s[n]=o[n];for(;n<7;n++)t._a[n]=s[n]=t._a[n]==null?n===2?1:0:t._a[n];t._a[rn]===24&&t._a[hr]===0&&t._a[t2]===0&&t._a[j2]===0&&(t._nextDay=!0,t._a[rn]=0),t._d=(t._useUTC?$1:gy).apply(null,s),u=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[rn]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==u&&(Vt(t).weekdayMismatch=!0)}}function ax(t){var n,e,s,o,u,a,f,h,p;n=t._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,a=4,e=we(n.GG,t._a[wn],P1(R0(),1,4).year),s=we(n.W,1),o=we(n.E,1),(o<1||o>7)&&(h=!0)):(u=t._locale._week.dow,a=t._locale._week.doy,p=P1(R0(),u,a),e=we(n.gg,t._a[wn],p.year),s=we(n.w,p.week),n.d!=null?(o=n.d,(o<0||o>6)&&(h=!0)):n.e!=null?(o=n.e+u,(n.e<0||n.e>6)&&(h=!0)):o=u),s<1||s>e2(e,u,a)?Vt(t)._overflowWeeks=!0:h!=null?Vt(t)._overflowWeekday=!0:(f=_5(e,s,o,u,a),t._a[wn]=f.year,t._dayOfYear=f.dayOfYear)}X.ISO_8601=function(){};X.RFC_2822=function(){};function D4(t){if(t._f===X.ISO_8601){v5(t);return}if(t._f===X.RFC_2822){y5(t);return}t._a=[],Vt(t).empty=!0;var n=""+t._i,e,s,o,u,a,f=n.length,h=0,p,v;for(o=n5(t._f,t._locale).match(m4)||[],v=o.length,e=0;e<v;e++)u=o[e],s=(n.match(Zv(u,t))||[])[0],s&&(a=n.substr(0,n.indexOf(s)),a.length>0&&Vt(t).unusedInput.push(a),n=n.slice(n.indexOf(s)+s.length),h+=s.length),Re[u]?(s?Vt(t).empty=!1:Vt(t).unusedTokens.push(u),Xv(u,s,t)):t._strict&&!s&&Vt(t).unusedTokens.push(u);Vt(t).charsLeftOver=f-h,n.length>0&&Vt(t).unusedInput.push(n),t._a[rn]<=12&&Vt(t).bigHour===!0&&t._a[rn]>0&&(Vt(t).bigHour=void 0),Vt(t).parsedDateParts=t._a.slice(0),Vt(t).meridiem=t._meridiem,t._a[rn]=cx(t._locale,t._a[rn],t._meridiem),p=Vt(t).era,p!==null&&(t._a[wn]=t._locale.erasConvertYear(p,t._a[wn])),E4(t),O4(t)}function cx(t,n,e){var s;return e==null?n:t.meridiemHour!=null?t.meridiemHour(n,e):(t.isPM!=null&&(s=t.isPM(e),s&&n<12&&(n+=12),!s&&n===12&&(n=0)),n)}function fx(t){var n,e,s,o,u,a,f=!1,h=t._f.length;if(h===0){Vt(t).invalidFormat=!0,t._d=new Date(NaN);return}for(o=0;o<h;o++)u=0,a=!1,n=g4({},t),t._useUTC!=null&&(n._useUTC=t._useUTC),n._f=t._f[o],D4(n),d4(n)&&(a=!0),u+=Vt(n).charsLeftOver,u+=Vt(n).unusedTokens.length*10,Vt(n).score=u,f?u<s&&(s=u,e=n):(s==null||u<s||a)&&(s=u,e=n,a&&(f=!0));T2(t,e||n)}function hx(t){if(!t._d){var n=v4(t._i),e=n.day===void 0?n.date:n.day;t._a=Xf([n.year,n.month,e,n.hour,n.minute,n.second,n.millisecond],function(s){return s&&parseInt(s,10)}),E4(t)}}function _x(t){var n=new U1(O4(x5(t)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function x5(t){var n=t._i,e=t._f;return t._locale=t._locale||l2(t._l),n===null||e===void 0&&n===""?Es({nullInput:!0}):(typeof n=="string"&&(t._i=n=t._locale.preparse(n)),mr(n)?new U1(O4(n)):(W1(n)?t._d=n:pr(e)?fx(t):e?D4(t):dx(t),d4(t)||(t._d=null),t))}function dx(t){var n=t._i;$n(n)?t._d=new Date(X.now()):W1(n)?t._d=new Date(n.valueOf()):typeof n=="string"?lx(t):pr(n)?(t._a=Xf(n.slice(0),function(e){return parseInt(e,10)}),E4(t)):Z2(n)?hx(t):s2(n)?t._d=new Date(n):X.createFromInputFallback(t)}function w5(t,n,e,s,o){var u={};return(n===!0||n===!1)&&(s=n,n=void 0),(e===!0||e===!1)&&(s=e,e=void 0),(Z2(t)&&_4(t)||pr(t)&&t.length===0)&&(t=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=o,u._l=e,u._i=t,u._f=n,u._strict=s,_x(u)}function R0(t,n,e,s){return w5(t,n,e,s,!1)}var gx=sr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=R0.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:Es()}),px=sr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=R0.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:Es()});function b5(t,n){var e,s;if(n.length===1&&pr(n[0])&&(n=n[0]),!n.length)return R0();for(e=n[0],s=1;s<n.length;++s)(!n[s].isValid()||n[s][t](e))&&(e=n[s]);return e}function mx(){var t=[].slice.call(arguments,0);return b5("isBefore",t)}function vx(){var t=[].slice.call(arguments,0);return b5("isAfter",t)}var yx=function(){return Date.now?Date.now():+new Date},c1=["year","quarter","month","week","day","hour","minute","second","millisecond"];function xx(t){var n,e=!1,s,o=c1.length;for(n in t)if(u0(t,n)&&!(H0.call(c1,n)!==-1&&(t[n]==null||!isNaN(t[n]))))return!1;for(s=0;s<o;++s)if(t[c1[s]]){if(e)return!1;parseFloat(t[c1[s]])!==n0(t[c1[s]])&&(e=!0)}return!0}function wx(){return this._isValid}function bx(){return vr(NaN)}function Ns(t){var n=v4(t),e=n.year||0,s=n.quarter||0,o=n.month||0,u=n.week||n.isoWeek||0,a=n.day||0,f=n.hour||0,h=n.minute||0,p=n.second||0,v=n.millisecond||0;this._isValid=xx(n),this._milliseconds=+v+p*1e3+h*6e4+f*1e3*60*60,this._days=+a+u*7,this._months=+o+s*3+e*12,this._data={},this._locale=l2(),this._bubble()}function Ji(t){return t instanceof Ns}function Wo(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function kx(t,n,e){var s=Math.min(t.length,n.length),o=Math.abs(t.length-n.length),u=0,a;for(a=0;a<s;a++)n0(t[a])!==n0(n[a])&&u++;return u+o}function k5(t,n){Ot(t,0,0,function(){var e=this.utcOffset(),s="+";return e<0&&(e=-e,s="-"),s+Dr(~~(e/60),2)+n+Dr(~~e%60,2)})}k5("Z",":");k5("ZZ","");mt("Z",$s);mt("ZZ",$s);y0(["Z","ZZ"],function(t,n,e){e._useUTC=!0,e._tzm=C4($s,t)});var Sx=/([\+\-]|\d\d)/gi;function C4(t,n){var e=(n||"").match(t),s,o,u;return e===null?null:(s=e[e.length-1]||[],o=(s+"").match(Sx)||["-",0,0],u=+(o[1]*60)+n0(o[2]),u===0?0:o[0]==="+"?u:-u)}function R4(t,n){var e,s;return n._isUTC?(e=n.clone(),s=(mr(t)||W1(t)?t.valueOf():R0(t).valueOf())-e.valueOf(),e._d.setTime(e._d.valueOf()+s),X.updateOffset(e,!1),e):R0(t).local()}function Uo(t){return-Math.round(t._d.getTimezoneOffset())}X.updateOffset=function(){};function Mx(t,n,e){var s=this._offset||0,o;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=C4($s,t),t===null)return this}else Math.abs(t)<16&&!e&&(t=t*60);return!this._isUTC&&n&&(o=Uo(this)),this._offset=t,this._isUTC=!0,o!=null&&this.add(o,"m"),s!==t&&(!n||this._changeInProgress?T5(this,vr(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,X.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:Uo(this)}function Tx(t,n){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,n),this):-this.utcOffset()}function Ox(t){return this.utcOffset(0,t)}function Ex(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Uo(this),"m")),this}function Dx(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=C4(Kv,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function Cx(t){return this.isValid()?(t=t?R0(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function Rx(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ax(){if(!$n(this._isDSTShifted))return this._isDSTShifted;var t={},n;return g4(t,this),t=x5(t),t._a?(n=t._isUTC?Rr(t._a):R0(t._a),this._isDSTShifted=this.isValid()&&kx(t._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function $x(){return this.isValid()?!this._isUTC:!1}function Px(){return this.isValid()?this._isUTC:!1}function S5(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Ix=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Nx=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function vr(t,n){var e=t,s=null,o,u,a;return Ji(t)?e={ms:t._milliseconds,d:t._days,M:t._months}:s2(t)||!isNaN(+t)?(e={},n?e[n]=+t:e.milliseconds=+t):(s=Ix.exec(t))?(o=s[1]==="-"?-1:1,e={y:0,d:n0(s[Mr])*o,h:n0(s[rn])*o,m:n0(s[hr])*o,s:n0(s[t2])*o,ms:n0(Wo(s[j2]*1e3))*o}):(s=Nx.exec(t))?(o=s[1]==="-"?-1:1,e={y:V2(s[2],o),M:V2(s[3],o),w:V2(s[4],o),d:V2(s[5],o),h:V2(s[6],o),m:V2(s[7],o),s:V2(s[8],o)}):e==null?e={}:typeof e=="object"&&("from"in e||"to"in e)&&(a=Yx(R0(e.from),R0(e.to)),e={},e.ms=a.milliseconds,e.M=a.months),u=new Ns(e),Ji(t)&&u0(t,"_locale")&&(u._locale=t._locale),Ji(t)&&u0(t,"_isValid")&&(u._isValid=t._isValid),u}vr.fn=Ns.prototype;vr.invalid=bx;function V2(t,n){var e=t&&parseFloat(t.replace(",","."));return(isNaN(e)?0:e)*n}function sc(t,n){var e={};return e.months=n.month()-t.month()+(n.year()-t.year())*12,t.clone().add(e.months,"M").isAfter(n)&&--e.months,e.milliseconds=+n-+t.clone().add(e.months,"M"),e}function Yx(t,n){var e;return t.isValid()&&n.isValid()?(n=R4(n,t),t.isBefore(n)?e=sc(t,n):(e=sc(n,t),e.milliseconds=-e.milliseconds,e.months=-e.months),e):{milliseconds:0,months:0}}function M5(t,n){return function(e,s){var o,u;return s!==null&&!isNaN(+s)&&(t5(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=e,e=s,s=u),o=vr(e,s),T5(this,o,t),this}}function T5(t,n,e,s){var o=n._milliseconds,u=Wo(n._days),a=Wo(n._months);t.isValid()&&(s=s??!0,a&&c5(t,A1(t,"Month")+a*e),u&&l5(t,"Date",A1(t,"Date")+u*e),o&&t._d.setTime(t._d.valueOf()+o*e),s&&X.updateOffset(t,u||a))}var Lx=M5(1,"add"),Fx=M5(-1,"subtract");function O5(t){return typeof t=="string"||t instanceof String}function Wx(t){return mr(t)||W1(t)||O5(t)||s2(t)||Hx(t)||Ux(t)||t===null||t===void 0}function Ux(t){var n=Z2(t)&&!_4(t),e=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],o,u,a=s.length;for(o=0;o<a;o+=1)u=s[o],e=e||u0(t,u);return n&&e}function Hx(t){var n=pr(t),e=!1;return n&&(e=t.filter(function(s){return!s2(s)&&O5(t)}).length===0),n&&e}function qx(t){var n=Z2(t)&&!_4(t),e=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],o,u;for(o=0;o<s.length;o+=1)u=s[o],e=e||u0(t,u);return n&&e}function Vx(t,n){var e=t.diff(n,"days",!0);return e<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse"}function Bx(t,n){arguments.length===1&&(arguments[0]?Wx(arguments[0])?(t=arguments[0],n=void 0):qx(arguments[0])&&(n=arguments[0],t=void 0):(t=void 0,n=void 0));var e=t||R0(),s=R4(e,this).startOf("day"),o=X.calendarFormat(this,s)||"sameElse",u=n&&(Ar(n[o])?n[o].call(this,e):n[o]);return this.format(u||this.localeData().calendar(o,this,R0(e)))}function Gx(){return new U1(this)}function jx(t,n){var e=mr(t)?t:R0(t);return this.isValid()&&e.isValid()?(n=or(n)||"millisecond",n==="millisecond"?this.valueOf()>e.valueOf():e.valueOf()<this.clone().startOf(n).valueOf()):!1}function Kx(t,n){var e=mr(t)?t:R0(t);return this.isValid()&&e.isValid()?(n=or(n)||"millisecond",n==="millisecond"?this.valueOf()<e.valueOf():this.clone().endOf(n).valueOf()<e.valueOf()):!1}function zx(t,n,e,s){var o=mr(t)?t:R0(t),u=mr(n)?n:R0(n);return this.isValid()&&o.isValid()&&u.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(o,e):!this.isBefore(o,e))&&(s[1]===")"?this.isBefore(u,e):!this.isAfter(u,e))):!1}function Zx(t,n){var e=mr(t)?t:R0(t),s;return this.isValid()&&e.isValid()?(n=or(n)||"millisecond",n==="millisecond"?this.valueOf()===e.valueOf():(s=e.valueOf(),this.clone().startOf(n).valueOf()<=s&&s<=this.clone().endOf(n).valueOf())):!1}function Jx(t,n){return this.isSame(t,n)||this.isAfter(t,n)}function Xx(t,n){return this.isSame(t,n)||this.isBefore(t,n)}function Qx(t,n,e){var s,o,u;if(!this.isValid())return NaN;if(s=R4(t,this),!s.isValid())return NaN;switch(o=(s.utcOffset()-this.utcOffset())*6e4,n=or(n),n){case"year":u=Xi(this,s)/12;break;case"month":u=Xi(this,s);break;case"quarter":u=Xi(this,s)/3;break;case"second":u=(this-s)/1e3;break;case"minute":u=(this-s)/6e4;break;case"hour":u=(this-s)/36e5;break;case"day":u=(this-s-o)/864e5;break;case"week":u=(this-s-o)/6048e5;break;default:u=this-s}return e?u:rr(u)}function Xi(t,n){if(t.date()<n.date())return-Xi(n,t);var e=(n.year()-t.year())*12+(n.month()-t.month()),s=t.clone().add(e,"months"),o,u;return n-s<0?(o=t.clone().add(e-1,"months"),u=(n-s)/(s-o)):(o=t.clone().add(e+1,"months"),u=(n-s)/(o-s)),-(e+u)||0}X.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";X.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function tw(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function nw(t){if(!this.isValid())return null;var n=t!==!0,e=n?this.clone().utc():this;return e.year()<0||e.year()>9999?Zi(e,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Ar(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Zi(e,"Z")):Zi(e,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function rw(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",n="",e,s,o,u;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),e="["+t+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(e+s+o+u)}function ew(t){t||(t=this.isUtc()?X.defaultFormatUtc:X.defaultFormat);var n=Zi(this,t);return this.localeData().postformat(n)}function iw(t,n){return this.isValid()&&(mr(t)&&t.isValid()||R0(t).isValid())?vr({to:this,from:t}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function sw(t){return this.from(R0(),t)}function ow(t,n){return this.isValid()&&(mr(t)&&t.isValid()||R0(t).isValid())?vr({from:this,to:t}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function lw(t){return this.to(R0(),t)}function E5(t){var n;return t===void 0?this._locale._abbr:(n=l2(t),n!=null&&(this._locale=n),this)}var D5=sr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function C5(){return this._locale}var fs=1e3,Ae=60*fs,hs=60*Ae,R5=(365*400+97)*24*hs;function $e(t,n){return(t%n+n)%n}function A5(t,n,e){return t<100&&t>=0?new Date(t+400,n,e)-R5:new Date(t,n,e).valueOf()}function $5(t,n,e){return t<100&&t>=0?Date.UTC(t+400,n,e)-R5:Date.UTC(t,n,e)}function uw(t){var n,e;if(t=or(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(e=this._isUTC?$5:A5,t){case"year":n=e(this.year(),0,1);break;case"quarter":n=e(this.year(),this.month()-this.month()%3,1);break;case"month":n=e(this.year(),this.month(),1);break;case"week":n=e(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=e(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=e(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=$e(n+(this._isUTC?0:this.utcOffset()*Ae),hs);break;case"minute":n=this._d.valueOf(),n-=$e(n,Ae);break;case"second":n=this._d.valueOf(),n-=$e(n,fs);break}return this._d.setTime(n),X.updateOffset(this,!0),this}function aw(t){var n,e;if(t=or(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(e=this._isUTC?$5:A5,t){case"year":n=e(this.year()+1,0,1)-1;break;case"quarter":n=e(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=e(this.year(),this.month()+1,1)-1;break;case"week":n=e(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=e(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=e(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=hs-$e(n+(this._isUTC?0:this.utcOffset()*Ae),hs)-1;break;case"minute":n=this._d.valueOf(),n+=Ae-$e(n,Ae)-1;break;case"second":n=this._d.valueOf(),n+=fs-$e(n,fs)-1;break}return this._d.setTime(n),X.updateOffset(this,!0),this}function cw(){return this._d.valueOf()-(this._offset||0)*6e4}function fw(){return Math.floor(this.valueOf()/1e3)}function hw(){return new Date(this.valueOf())}function _w(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function dw(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function gw(){return this.isValid()?this.toISOString():null}function pw(){return d4(this)}function mw(){return T2({},Vt(this))}function vw(){return Vt(this).overflow}function yw(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Ot("N",0,0,"eraAbbr");Ot("NN",0,0,"eraAbbr");Ot("NNN",0,0,"eraAbbr");Ot("NNNN",0,0,"eraName");Ot("NNNNN",0,0,"eraNarrow");Ot("y",["y",1],"yo","eraYear");Ot("y",["yy",2],0,"eraYear");Ot("y",["yyy",3],0,"eraYear");Ot("y",["yyyy",4],0,"eraYear");mt("N",A4);mt("NN",A4);mt("NNN",A4);mt("NNNN",Cw);mt("NNNNN",Rw);y0(["N","NN","NNN","NNNN","NNNNN"],function(t,n,e,s){var o=e._locale.erasParse(t,s,e._strict);o?Vt(e).era=o:Vt(e).invalidEra=t});mt("y",We);mt("yy",We);mt("yyy",We);mt("yyyy",We);mt("yo",Aw);y0(["y","yy","yyy","yyyy"],wn);y0(["yo"],function(t,n,e,s){var o;e._locale._eraYearOrdinalRegex&&(o=t.match(e._locale._eraYearOrdinalRegex)),e._locale.eraYearOrdinalParse?n[wn]=e._locale.eraYearOrdinalParse(t,o):n[wn]=parseInt(t,10)});function xw(t,n){var e,s,o,u=this._eras||l2("en")._eras;for(e=0,s=u.length;e<s;++e){switch(typeof u[e].since){case"string":o=X(u[e].since).startOf("day"),u[e].since=o.valueOf();break}switch(typeof u[e].until){case"undefined":u[e].until=1/0;break;case"string":o=X(u[e].until).startOf("day").valueOf(),u[e].until=o.valueOf();break}}return u}function ww(t,n,e){var s,o,u=this.eras(),a,f,h;for(t=t.toUpperCase(),s=0,o=u.length;s<o;++s)if(a=u[s].name.toUpperCase(),f=u[s].abbr.toUpperCase(),h=u[s].narrow.toUpperCase(),e)switch(n){case"N":case"NN":case"NNN":if(f===t)return u[s];break;case"NNNN":if(a===t)return u[s];break;case"NNNNN":if(h===t)return u[s];break}else if([a,f,h].indexOf(t)>=0)return u[s]}function bw(t,n){var e=t.since<=t.until?1:-1;return n===void 0?X(t.since).year():X(t.since).year()+(n-t.offset)*e}function kw(){var t,n,e,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(e=this.clone().startOf("day").valueOf(),s[t].since<=e&&e<=s[t].until||s[t].until<=e&&e<=s[t].since)return s[t].name;return""}function Sw(){var t,n,e,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(e=this.clone().startOf("day").valueOf(),s[t].since<=e&&e<=s[t].until||s[t].until<=e&&e<=s[t].since)return s[t].narrow;return""}function Mw(){var t,n,e,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(e=this.clone().startOf("day").valueOf(),s[t].since<=e&&e<=s[t].until||s[t].until<=e&&e<=s[t].since)return s[t].abbr;return""}function Tw(){var t,n,e,s,o=this.localeData().eras();for(t=0,n=o.length;t<n;++t)if(e=o[t].since<=o[t].until?1:-1,s=this.clone().startOf("day").valueOf(),o[t].since<=s&&s<=o[t].until||o[t].until<=s&&s<=o[t].since)return(this.year()-X(o[t].since).year())*e+o[t].offset;return this.year()}function Ow(t){return u0(this,"_erasNameRegex")||$4.call(this),t?this._erasNameRegex:this._erasRegex}function Ew(t){return u0(this,"_erasAbbrRegex")||$4.call(this),t?this._erasAbbrRegex:this._erasRegex}function Dw(t){return u0(this,"_erasNarrowRegex")||$4.call(this),t?this._erasNarrowRegex:this._erasRegex}function A4(t,n){return n.erasAbbrRegex(t)}function Cw(t,n){return n.erasNameRegex(t)}function Rw(t,n){return n.erasNarrowRegex(t)}function Aw(t,n){return n._eraYearOrdinalRegex||We}function $4(){var t=[],n=[],e=[],s=[],o,u,a,f,h,p=this.eras();for(o=0,u=p.length;o<u;++o)a=r2(p[o].name),f=r2(p[o].abbr),h=r2(p[o].narrow),n.push(a),t.push(f),e.push(h),s.push(a),s.push(f),s.push(h);this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+e.join("|")+")","i")}Ot(0,["gg",2],0,function(){return this.weekYear()%100});Ot(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ys(t,n){Ot(0,[t,t.length],0,n)}Ys("gggg","weekYear");Ys("ggggg","weekYear");Ys("GGGG","isoWeekYear");Ys("GGGGG","isoWeekYear");mt("G",As);mt("g",As);mt("GG",A0,Bn);mt("gg",A0,Bn);mt("GGGG",x4,y4);mt("gggg",x4,y4);mt("GGGGG",Rs,Ds);mt("ggggg",Rs,Ds);q1(["gggg","ggggg","GGGG","GGGGG"],function(t,n,e,s){n[s.substr(0,2)]=n0(t)});q1(["gg","GG"],function(t,n,e,s){n[s]=X.parseTwoDigitYear(t)});function $w(t){return P5.call(this,t,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Pw(t){return P5.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Iw(){return e2(this.year(),1,4)}function Nw(){return e2(this.isoWeekYear(),1,4)}function Yw(){var t=this.localeData()._week;return e2(this.year(),t.dow,t.doy)}function Lw(){var t=this.localeData()._week;return e2(this.weekYear(),t.dow,t.doy)}function P5(t,n,e,s,o){var u;return t==null?P1(this,s,o).year:(u=e2(t,s,o),n>u&&(n=u),Fw.call(this,t,n,e,s,o))}function Fw(t,n,e,s,o){var u=_5(t,n,e,s,o),a=$1(u.year,0,u.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}Ot("Q",0,"Qo","quarter");mt("Q",r5);y0("Q",function(t,n){n[Qr]=(n0(t)-1)*3});function Ww(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}Ot("D",["DD",2],"Do","date");mt("D",A0,Ue);mt("DD",A0,Bn);mt("Do",function(t,n){return t?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});y0(["D","DD"],Mr);y0("Do",function(t,n){n[Mr]=n0(t.match(A0)[0])});var I5=He("Date",!0);Ot("DDD",["DDDD",3],"DDDo","dayOfYear");mt("DDD",Cs);mt("DDDD",e5);y0(["DDD","DDDD"],function(t,n,e){e._dayOfYear=n0(t)});function Uw(t){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?n:this.add(t-n,"d")}Ot("m",["mm",2],0,"minute");mt("m",A0,w4);mt("mm",A0,Bn);y0(["m","mm"],hr);var Hw=He("Minutes",!1);Ot("s",["ss",2],0,"second");mt("s",A0,w4);mt("ss",A0,Bn);y0(["s","ss"],t2);var qw=He("Seconds",!1);Ot("S",0,0,function(){return~~(this.millisecond()/100)});Ot(0,["SS",2],0,function(){return~~(this.millisecond()/10)});Ot(0,["SSS",3],0,"millisecond");Ot(0,["SSSS",4],0,function(){return this.millisecond()*10});Ot(0,["SSSSS",5],0,function(){return this.millisecond()*100});Ot(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});Ot(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});Ot(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});Ot(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});mt("S",Cs,r5);mt("SS",Cs,Bn);mt("SSS",Cs,e5);var O2,N5;for(O2="SSSS";O2.length<=9;O2+="S")mt(O2,We);function Vw(t,n){n[j2]=n0(("0."+t)*1e3)}for(O2="S";O2.length<=9;O2+="S")y0(O2,Vw);N5=He("Milliseconds",!1);Ot("z",0,0,"zoneAbbr");Ot("zz",0,0,"zoneName");function Bw(){return this._isUTC?"UTC":""}function Gw(){return this._isUTC?"Coordinated Universal Time":""}var Q=U1.prototype;Q.add=Lx;Q.calendar=Bx;Q.clone=Gx;Q.diff=Qx;Q.endOf=aw;Q.format=ew;Q.from=iw;Q.fromNow=sw;Q.to=ow;Q.toNow=lw;Q.get=ry;Q.invalidAt=vw;Q.isAfter=jx;Q.isBefore=Kx;Q.isBetween=zx;Q.isSame=Zx;Q.isSameOrAfter=Jx;Q.isSameOrBefore=Xx;Q.isValid=pw;Q.lang=D5;Q.locale=E5;Q.localeData=C5;Q.max=px;Q.min=gx;Q.parsingFlags=mw;Q.set=ey;Q.startOf=uw;Q.subtract=Fx;Q.toArray=_w;Q.toObject=dw;Q.toDate=hw;Q.toISOString=nw;Q.inspect=rw;typeof Symbol<"u"&&Symbol.for!=null&&(Q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});Q.toJSON=gw;Q.toString=tw;Q.unix=fw;Q.valueOf=cw;Q.creationData=yw;Q.eraName=kw;Q.eraNarrow=Sw;Q.eraAbbr=Mw;Q.eraYear=Tw;Q.year=o5;Q.isLeapYear=ny;Q.weekYear=$w;Q.isoWeekYear=Pw;Q.quarter=Q.quarters=Ww;Q.month=f5;Q.daysInMonth=hy;Q.week=Q.weeks=xy;Q.isoWeek=Q.isoWeeks=wy;Q.weeksInYear=Yw;Q.weeksInWeekYear=Lw;Q.isoWeeksInYear=Iw;Q.isoWeeksInISOWeekYear=Nw;Q.date=I5;Q.day=Q.days=Py;Q.weekday=Iy;Q.isoWeekday=Ny;Q.dayOfYear=Uw;Q.hour=Q.hours=qy;Q.minute=Q.minutes=Hw;Q.second=Q.seconds=qw;Q.millisecond=Q.milliseconds=N5;Q.utcOffset=Mx;Q.utc=Ox;Q.local=Ex;Q.parseZone=Dx;Q.hasAlignedHourOffset=Cx;Q.isDST=Rx;Q.isLocal=$x;Q.isUtcOffset=Px;Q.isUtc=S5;Q.isUTC=S5;Q.zoneAbbr=Bw;Q.zoneName=Gw;Q.dates=sr("dates accessor is deprecated. Use date instead.",I5);Q.months=sr("months accessor is deprecated. Use month instead",f5);Q.years=sr("years accessor is deprecated. Use year instead",o5);Q.zone=sr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Tx);Q.isDSTShifted=sr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ax);function jw(t){return R0(t*1e3)}function Kw(){return R0.apply(null,arguments).parseZone()}function Y5(t){return t}var a0=p4.prototype;a0.calendar=$v;a0.longDateFormat=Yv;a0.invalidDate=Fv;a0.ordinal=Hv;a0.preparse=Y5;a0.postformat=Y5;a0.relativeTime=Vv;a0.pastFuture=Bv;a0.set=Rv;a0.eras=xw;a0.erasParse=ww;a0.erasConvertYear=bw;a0.erasAbbrRegex=Ew;a0.erasNameRegex=Ow;a0.erasNarrowRegex=Dw;a0.months=uy;a0.monthsShort=ay;a0.monthsParse=fy;a0.monthsRegex=dy;a0.monthsShortRegex=_y;a0.week=py;a0.firstDayOfYear=yy;a0.firstDayOfWeek=vy;a0.weekdays=Dy;a0.weekdaysMin=Ry;a0.weekdaysShort=Cy;a0.weekdaysParse=$y;a0.weekdaysRegex=Yy;a0.weekdaysShortRegex=Ly;a0.weekdaysMinRegex=Fy;a0.isPM=Uy;a0.meridiem=Vy;function _s(t,n,e,s){var o=l2(),u=Rr().set(s,n);return o[e](u,t)}function L5(t,n,e){if(s2(t)&&(n=t,t=void 0),t=t||"",n!=null)return _s(t,n,e,"month");var s,o=[];for(s=0;s<12;s++)o[s]=_s(t,s,e,"month");return o}function P4(t,n,e,s){typeof t=="boolean"?(s2(n)&&(e=n,n=void 0),n=n||""):(n=t,e=n,t=!1,s2(n)&&(e=n,n=void 0),n=n||"");var o=l2(),u=t?o._week.dow:0,a,f=[];if(e!=null)return _s(n,(e+u)%7,s,"day");for(a=0;a<7;a++)f[a]=_s(n,(a+u)%7,s,"day");return f}function zw(t,n){return L5(t,n,"months")}function Zw(t,n){return L5(t,n,"monthsShort")}function Jw(t,n,e){return P4(t,n,e,"weekdays")}function Xw(t,n,e){return P4(t,n,e,"weekdaysShort")}function Qw(t,n,e){return P4(t,n,e,"weekdaysMin")}D2("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var n=t%10,e=n0(t%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return t+e}});X.lang=sr("moment.lang is deprecated. Use moment.locale instead.",D2);X.langData=sr("moment.langData is deprecated. Use moment.localeData instead.",l2);var Gr=Math.abs;function tb(){var t=this._data;return this._milliseconds=Gr(this._milliseconds),this._days=Gr(this._days),this._months=Gr(this._months),t.milliseconds=Gr(t.milliseconds),t.seconds=Gr(t.seconds),t.minutes=Gr(t.minutes),t.hours=Gr(t.hours),t.months=Gr(t.months),t.years=Gr(t.years),this}function F5(t,n,e,s){var o=vr(n,e);return t._milliseconds+=s*o._milliseconds,t._days+=s*o._days,t._months+=s*o._months,t._bubble()}function nb(t,n){return F5(this,t,n,1)}function rb(t,n){return F5(this,t,n,-1)}function oc(t){return t<0?Math.floor(t):Math.ceil(t)}function eb(){var t=this._milliseconds,n=this._days,e=this._months,s=this._data,o,u,a,f,h;return t>=0&&n>=0&&e>=0||t<=0&&n<=0&&e<=0||(t+=oc(Ho(e)+n)*864e5,n=0,e=0),s.milliseconds=t%1e3,o=rr(t/1e3),s.seconds=o%60,u=rr(o/60),s.minutes=u%60,a=rr(u/60),s.hours=a%24,n+=rr(a/24),h=rr(W5(n)),e+=h,n-=oc(Ho(h)),f=rr(e/12),e%=12,s.days=n,s.months=e,s.years=f,this}function W5(t){return t*4800/146097}function Ho(t){return t*146097/4800}function ib(t){if(!this.isValid())return NaN;var n,e,s=this._milliseconds;if(t=or(t),t==="month"||t==="quarter"||t==="year")switch(n=this._days+s/864e5,e=this._months+W5(n),t){case"month":return e;case"quarter":return e/3;case"year":return e/12}else switch(n=this._days+Math.round(Ho(this._months)),t){case"week":return n/7+s/6048e5;case"day":return n+s/864e5;case"hour":return n*24+s/36e5;case"minute":return n*1440+s/6e4;case"second":return n*86400+s/1e3;case"millisecond":return Math.floor(n*864e5)+s;default:throw new Error("Unknown unit "+t)}}function u2(t){return function(){return this.as(t)}}var U5=u2("ms"),sb=u2("s"),ob=u2("m"),lb=u2("h"),ub=u2("d"),ab=u2("w"),cb=u2("M"),fb=u2("Q"),hb=u2("y"),_b=U5;function db(){return vr(this)}function gb(t){return t=or(t),this.isValid()?this[t+"s"]():NaN}function te(t){return function(){return this.isValid()?this._data[t]:NaN}}var pb=te("milliseconds"),mb=te("seconds"),vb=te("minutes"),yb=te("hours"),xb=te("days"),wb=te("months"),bb=te("years");function kb(){return rr(this.days()/7)}var zr=Math.round,Se={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Sb(t,n,e,s,o){return o.relativeTime(n||1,!!e,t,s)}function Mb(t,n,e,s){var o=vr(t).abs(),u=zr(o.as("s")),a=zr(o.as("m")),f=zr(o.as("h")),h=zr(o.as("d")),p=zr(o.as("M")),v=zr(o.as("w")),y=zr(o.as("y")),S=u<=e.ss&&["s",u]||u<e.s&&["ss",u]||a<=1&&["m"]||a<e.m&&["mm",a]||f<=1&&["h"]||f<e.h&&["hh",f]||h<=1&&["d"]||h<e.d&&["dd",h];return e.w!=null&&(S=S||v<=1&&["w"]||v<e.w&&["ww",v]),S=S||p<=1&&["M"]||p<e.M&&["MM",p]||y<=1&&["y"]||["yy",y],S[2]=n,S[3]=+t>0,S[4]=s,Sb.apply(null,S)}function Tb(t){return t===void 0?zr:typeof t=="function"?(zr=t,!0):!1}function Ob(t,n){return Se[t]===void 0?!1:n===void 0?Se[t]:(Se[t]=n,t==="s"&&(Se.ss=n-1),!0)}function Eb(t,n){if(!this.isValid())return this.localeData().invalidDate();var e=!1,s=Se,o,u;return typeof t=="object"&&(n=t,t=!1),typeof t=="boolean"&&(e=t),typeof n=="object"&&(s=Object.assign({},Se,n),n.s!=null&&n.ss==null&&(s.ss=n.s-1)),o=this.localeData(),u=Mb(this,!e,s,o),e&&(u=o.pastFuture(+this,u)),o.postformat(u)}var mo=Math.abs;function me(t){return(t>0)-(t<0)||+t}function Ls(){if(!this.isValid())return this.localeData().invalidDate();var t=mo(this._milliseconds)/1e3,n=mo(this._days),e=mo(this._months),s,o,u,a,f=this.asSeconds(),h,p,v,y;return f?(s=rr(t/60),o=rr(s/60),t%=60,s%=60,u=rr(e/12),e%=12,a=t?t.toFixed(3).replace(/\.?0+$/,""):"",h=f<0?"-":"",p=me(this._months)!==me(f)?"-":"",v=me(this._days)!==me(f)?"-":"",y=me(this._milliseconds)!==me(f)?"-":"",h+"P"+(u?p+u+"Y":"")+(e?p+e+"M":"")+(n?v+n+"D":"")+(o||s||t?"T":"")+(o?y+o+"H":"")+(s?y+s+"M":"")+(t?y+a+"S":"")):"P0D"}var s0=Ns.prototype;s0.isValid=wx;s0.abs=tb;s0.add=nb;s0.subtract=rb;s0.as=ib;s0.asMilliseconds=U5;s0.asSeconds=sb;s0.asMinutes=ob;s0.asHours=lb;s0.asDays=ub;s0.asWeeks=ab;s0.asMonths=cb;s0.asQuarters=fb;s0.asYears=hb;s0.valueOf=_b;s0._bubble=eb;s0.clone=db;s0.get=gb;s0.milliseconds=pb;s0.seconds=mb;s0.minutes=vb;s0.hours=yb;s0.days=xb;s0.weeks=kb;s0.months=wb;s0.years=bb;s0.humanize=Eb;s0.toISOString=Ls;s0.toString=Ls;s0.toJSON=Ls;s0.locale=E5;s0.localeData=C5;s0.toIsoString=sr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ls);s0.lang=D5;Ot("X",0,0,"unix");Ot("x",0,0,"valueOf");mt("x",As);mt("X",zv);y0("X",function(t,n,e){e._d=new Date(parseFloat(t)*1e3)});y0("x",function(t,n,e){e._d=new Date(n0(t))});//! moment.js
X.version="2.30.1";Dv(R0);X.fn=Q;X.min=mx;X.max=vx;X.now=yx;X.utc=Rr;X.unix=jw;X.months=zw;X.isDate=W1;X.locale=D2;X.invalid=Es;X.duration=vr;X.isMoment=mr;X.weekdays=Jw;X.parseZone=Kw;X.localeData=l2;X.isDuration=Ji;X.monthsShort=Zw;X.weekdaysMin=Qw;X.defineLocale=T4;X.updateLocale=Ky;X.locales=zy;X.weekdaysShort=Xw;X.normalizeUnits=or;X.relativeTimeRounding=Tb;X.relativeTimeThreshold=Ob;X.calendarFormat=Vx;X.prototype=Q;X.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Db=`20/10/2026	01413	\r
132023305055 |45\r
17/10/2026	01412	\r
011011121637 |48\r
15/10/2026	01411	\r
072325424551 |04\r
13/10/2026	01410	\r
021427405053 |26\r
10/10/2026	01409	\r
141721232439 |30\r
08/10/2026	01408	\r
010712273152 |06\r
06/10/2026	01407	\r
060718202427 |01\r
03/10/2026	01406	\r
071113161854 |41\r
01/10/2026	01405	\r
040513345255 |15\r
29/09/2026	01404	\r
020413173536 |11\r
26/09/2026	01403	\r
141821384852 |49\r
24/09/2026	01402	\r
011323252628 |27\r
22/09/2026	01401	\r
010309114146 |10\r
19/09/2026	01400	\r
040711182225 |50\r
17/09/2026	01399	\r
061125273745 |15\r
15/09/2026	01398	\r
242732363847 |52\r
12/09/2026	01397	\r
072431434754 |22\r
10/09/2026	01396	\r
020528325153 |50\r
08/09/2026	01395	\r
081114232554 |17\r
05/09/2026	01394	\r
091124313347 |21\r
03/09/2026	01393	\r
080916424647 |11\r
01/09/2026	01392	\r
011741444955 |45\r
29/08/2026	01391	\r
051015293445 |24\r
27/08/2026	01390	\r
010311212644 |10\r
25/08/2026	01389	\r
050713183140 |14\r
22/08/2026	01388	\r
091819212536 |08\r
20/08/2026	01387	\r
020829383951 |47\r
18/08/2026	01386	\r
031518384148 |30\r
15/08/2026	01385	\r
162025273050 |02\r
13/08/2026	01384	\r
050927294546 |42\r
11/08/2026	01383	\r
020719203950 |31\r
08/08/2026	01382	\r
052933384045 |37\r
06/08/2026	01381	\r
141823355155 |01\r
04/08/2026	01380	\r
143940424754 |31\r
01/08/2026	01379	\r
111416444955 |39\r
30/07/2026	01378	\r
021224284349 |51\r
28/07/2026	01377	\r
072223274144 |48\r
25/07/2026	01376	\r
050927333750 |48\r
23/07/2026	01375	\r
010308384055 |36\r
21/07/2026	01374	\r
081122243239 |13\r
18/07/2026	01373	\r
224145485455 |16\r
16/07/2026	01372	\r
192033454853 |21\r
14/07/2026	01371	\r
102430354551 |33\r
11/07/2026	01370	\r
091720334142 |40\r
09/07/2026	01369	\r
020910141749 |45\r
07/07/2026	01368	\r
040625323344 |08\r
04/07/2026	01367	\r
131518233143 |41\r
02/07/2026	01366	\r
051128344142 |49\r
30/06/2026	01365	\r
051318224344 |47\r
27/06/2026	01364	\r
071621232852 |54\r
25/06/2026	01363	\r
010308153555 |23\r
23/06/2026	01362	\r
011328384046 |05\r
20/06/2026	01361	\r
162326305253 |46\r
18/06/2026	01360	\r
010414204649 |36\r
16/06/2026	01359	\r
020405073140 |14\r
13/06/2026	01358	\r
020819333647 |42\r
11/06/2026	01357	\r
010817244048 |46\r
09/06/2026	01356	\r
060818273234 |35\r
06/06/2026	01355	\r
031116373941 |28\r
04/06/2026	01354	\r
232428293943 |45\r
02/06/2026	01353	\r
010305163751 |42\r
30/05/2026	01352	\r
020820242542 |44\r
28/05/2026	01351	\r
081121253153 |54\r
26/05/2026	01350	\r
011415192334 |29\r
23/05/2026	01349	\r
172122273849 |03\r
21/05/2026	01348	\r
161820283234 |40\r
19/05/2026	01347	\r
123940454853 |21\r
16/05/2026	01346	\r
082532363947 |50\r
14/05/2026	01345	\r
262839414855 |50\r
12/05/2026	01344	\r
021122263138 |15\r
09/05/2026	01343	\r
031032374555 |46\r
07/05/2026	01342	\r
131433444650 |47\r
05/05/2026	01341	\r
040608173050 |32\r
02/05/2026	01340	\r
092122263351 |17\r
30/04/2026	01339	\r
091521252950 |16\r
28/04/2026	01338	\r
242534515253 |35\r
25/04/2026	01337	\r
040710294146 |43\r
23/04/2026	01336	\r
051617223353 |55\r
21/04/2026	01335	\r
083036395053 |15\r
18/04/2026	01334	\r
091920283739 |24\r
16/04/2026	01333	\r
020715224752 |55\r
14/04/2026	01332	\r
081622353947 |28\r
11/04/2026	01331	\r
132629384953 |07\r
09/04/2026	01330	\r
161822294153 |38\r
07/04/2026	01329	\r
011323314453 |32\r
04/04/2026	01328	\r
050710233054 |40\r
02/04/2026	01327	\r
092132345253 |22\r
31/03/2026	01326	\r
151622384348 |11\r
28/03/2026	01325	\r
071321303342 |39\r
26/03/2026	01324	\r
030910343844 |51\r
24/03/2026	01323	\r
121925263245 |03\r
21/03/2026	01322	\r
010640434753 |03\r
19/03/2026	01321	\r
070917313436 |55\r
17/03/2026	01320	\r
122628435054 |52\r
14/03/2026	01319	\r
071627294752 |26\r
12/03/2026	01318	\r
122836405355 |54\r
10/03/2026	01317	\r
032631394754 |20\r
07/03/2026	01316	\r
043241455052 |29\r
05/03/2026	01315	\r
141635384351 |37\r
03/03/2026	01314	\r
071327294350 |25\r
28/02/2026	01313	\r
222531445154 |36\r
26/02/2026	01312	\r
010710214451 |46\r
24/02/2026	01311	\r
050818303954 |51\r
21/02/2026	01310	\r
050726304145 |12\r
19/02/2026	01309	\r
012730434546 |48\r
14/02/2026	01308	\r
021326323642 |48\r
12/02/2026	01307	\r
081719313246 |26\r
10/02/2026	01306	\r
132122263255 |20\r
07/02/2026	01305	\r
030513152946 |01\r
05/02/2026	01304	\r
071316252655 |09\r
03/02/2026	01303	\r
121518224853 |45\r
31/01/2026	01302	\r
101114174953 |04\r
29/01/2026	01301	\r
111522323454 |28\r
27/01/2026	01300	\r
132232425354 |29\r
24/01/2026	01299	\r
142425303553 |18\r
22/01/2026	01298	\r
022021293650 |05\r
20/01/2026	01297	\r
042026283741 |32\r
17/01/2026	01296	\r
142123254648 |54\r
15/01/2026	01295	\r
132131344855 |27\r
13/01/2026	01294	\r
031225515255 |43\r
10/01/2026	01293	\r
091630333438 |49\r
08/01/2026	01292	\r
202236434550 |47\r
06/01/2026	01291	\r
222829303447 |20\r
03/01/2026	01290	\r
101617233336 |42\r
01/01/2026	01289	\r
051629333942 |54\r
30/12/2025	01288	\r
113035414855 |38\r
27/12/2025	01287	\r
162130373940 |13\r
25/12/2025	01286	\r
040632374048 |38\r
23/12/2025	01285	\r
021016253238 |03\r
20/12/2025	01284	\r
223233354041 |23\r
18/12/2025	01283	\r
121429303955 |50\r
16/12/2025	01282	\r
073637385255 |46\r
13/12/2025	01281	\r
050812182038 |52\r
11/12/2025	01280	\r
091321454855 |38\r
09/12/2025	01279	\r
142126273143 |42\r
06/12/2025	01278	\r
122634375052 |15\r
04/12/2025	01277	\r
102932334453 |14\r
02/12/2025	01276	\r
162024365154 |10\r
29/11/2025	01275	\r
042024274048 |09\r
27/11/2025	01274	\r
040510112835 |38\r
25/11/2025	01273	\r
233132424648 |04\r
22/11/2025	01272	\r
081019293446 |14\r
20/11/2025	01271	\r
031219203142 |13\r
18/11/2025	01270	\r
071218223049 |05\r
15/11/2025	01269	\r
023033354254 |45\r
13/11/2025	01268	\r
011530384043 |13\r
11/11/2025	01267	\r
112028414754 |31\r
08/11/2025	01266	\r
141619222744 |18\r
06/11/2025	01265	\r
162029333649 |06\r
04/11/2025	01264	\r
152729313643 |38\r
01/11/2025	01263	\r
071128293133 |08\r
30/10/2025	01262	\r
202335414755 |37\r
28/10/2025	01261	\r
060810222554 |09\r
25/10/2025	01260	\r
030511132427 |45\r
23/10/2025	01259	\r
081021484950 |40\r
21/10/2025	01258	\r
031112142240 |41\r
18/10/2025	01257	\r
051619213843 |50\r
16/10/2025	01256	\r
141524262745 |36\r
14/10/2025	01255	\r
080916263755 |12\r
11/10/2025	01254	\r
030726434446 |25\r
09/10/2025	01253	\r
071121223942 |40\r
07/10/2025	01252	\r
192235374345 |29\r
04/10/2025	01251	\r
223335363840 |07\r
02/10/2025	01250	\r
010220242742 |43\r
30/09/2025	01249	\r
172334394652 |08\r
27/09/2025	01248	\r
081319243946 |01\r
25/09/2025	01247	\r
051730313853 |08\r
23/09/2025	01246	\r
081819344146 |38\r
20/09/2025	01245	\r
081314193643 |30\r
18/09/2025	01244	\r
020308273855 |20\r
16/09/2025	01243	\r
171928394353 |33\r
13/09/2025	01242	\r
020715182427 |45\r
11/09/2025	01241	\r
061646495155 |42\r
09/09/2025	01240	\r
162021314052 |02\r
06/09/2025	01239	\r
091119223443 |31\r
04/09/2025	01238	\r
091923424953 |40\r
02/09/2025	01237	\r
091622253051 |43\r
30/08/2025	01236	\r
021719243044 |34\r
28/08/2025	01235	\r
061328303552 |50\r
26/08/2025	01234	\r
223038444855 |05\r
23/08/2025	01233	\r
010926344450 |52\r
21/08/2025	01232	\r
050917354041 |44\r
19/08/2025	01231	\r
011431343647 |45\r
16/08/2025	01230	\r
142332364748 |05\r
14/08/2025	01229	\r
061017183235 |53\r
12/08/2025	01228	\r
010624374055 |10\r
09/08/2025	01227	\r
050916364351 |19\r
07/08/2025	01226	\r
062431323948 |52\r
05/08/2025	01225	\r
084145515253 |31\r
02/08/2025	01224	\r
122429333435 |47\r
31/07/2025	01223	\r
051731424649 |37\r
29/07/2025	01222	\r
040823434551 |48\r
26/07/2025	01221	\r
052628293354 |34\r
24/07/2025	01220	\r
051024293034 |45\r
22/07/2025	01219	\r
091015283344 |22\r
19/07/2025	01218	\r
080920363944 |28\r
17/07/2025	01217	\r
131833404853 |54\r
15/07/2025	01216	\r
182631323648 |30\r
12/07/2025	01215	\r
023439414552 |51\r
10/07/2025	01214	\r
123334424453 |03\r
08/07/2025	01213	\r
232432424850 |31\r
05/07/2025	01212	\r
031522455155 |54\r
03/07/2025	01211	\r
181929314554 |27\r
01/07/2025	01210	\r
031112142733 |15\r
28/06/2025	01209	\r
081113204550 |25\r
26/06/2025	01208	\r
011416274051 |02\r
24/06/2025	01207	\r
030918203053 |48\r
21/06/2025	01206	\r
061015434453 |32\r
19/06/2025	01205	\r
030509101647 |34\r
17/06/2025	01204	\r
071318223244 |43\r
14/06/2025	01203	\r
111222264147 |24\r
12/06/2025	01202	\r
060816183444 |17\r
10/06/2025	01201	\r
030621294041 |37\r
07/06/2025	01200	\r
121721464852 |45\r
05/06/2025	01199	\r
142133374649 |34\r
03/06/2025	01198	\r
021114162738 |51\r
31/05/2025	01197	\r
062441454955 |08\r
29/05/2025	01196	\r
093742454650 |14\r
27/05/2025	01195	\r
041218194448 |42\r
24/05/2025	01194	\r
192027304555 |15\r
22/05/2025	01193	\r
030914414755 |22\r
20/05/2025	01192	\r
192744454752 |15\r
17/05/2025	01191	\r
020726294150 |43\r
15/05/2025	01190	\r
060913444954 |47\r
13/05/2025	01189	\r
030724395455 |42\r
10/05/2025	01188	\r
071619283451 |15\r
08/05/2025	01187	\r
081429373950 |21\r
06/05/2025	01186	\r
121625283039 |05\r
03/05/2025	01185	\r
151921264247 |38\r
01/05/2025	01184	\r
031719414550 |43\r
29/04/2025	01183	\r
141518232833 |29\r
26/04/2025	01182	\r
031516314852 |21\r
24/04/2025	01181	\r
010215394047 |24\r
22/04/2025	01180	\r
102537404148 |32\r
19/04/2025	01179	\r
051115324249 |43\r
17/04/2025	01178	\r
011720384152 |14\r
15/04/2025	01177	\r
082324274249 |20\r
12/04/2025	01176	\r
031419374255 |23\r
10/04/2025	01175	\r
101336374043 |41\r
08/04/2025	01174	\r
030734414353 |31\r
05/04/2025	01173	\r
132329324142 |09\r
03/04/2025	01172	\r
242634425051 |30\r
01/04/2025	01171	\r
141529333947 |04\r
29/03/2025	01170	\r
141921242648 |39\r
27/03/2025	01169	\r
132532364153 |29\r
25/03/2025	01168	\r
142329303540 |17\r
22/03/2025	01167	\r
022342505254 |44\r
20/03/2025	01166	\r
111324283641 |37\r
18/03/2025	01165	\r
020829305055 |27\r
15/03/2025	01164	\r
013439404250 |25\r
13/03/2025	01163	\r
071321435253 |17\r
11/03/2025	01162	\r
011618303144 |34\r
08/03/2025	01161	\r
103841434548 |08\r
06/03/2025	01160	\r
051021264351 |15\r
04/03/2025	01159	\r
051427434553 |47\r
01/03/2025	01158	\r
151734373945 |41\r
27/02/2025	01157	\r
050921314353 |11\r
25/02/2025	01156	\r
010711242930 |48\r
22/02/2025	01155	\r
010207222346 |50\r
20/02/2025	01154	\r
131720273654 |47\r
18/02/2025	01153	\r
121330384047 |42\r
15/02/2025	01152	\r
223738475155 |31\r
13/02/2025	01151	\r
020823264247 |07\r
11/02/2025	01150	\r
010918213540 |44\r
08/02/2025	01149	\r
112228444849 |23\r
06/02/2025	01148	\r
011131434854 |19\r
04/02/2025	01147	\r
071729515255 |41\r
01/02/2025	01146	\r
012034384547 |49\r
30/01/2025	01145	\r
050824283452 |39\r
25/01/2025	01144	\r
142140424851 |19\r
23/01/2025	01143	\r
111822495051 |37\r
21/01/2025	01142	\r
111822285152 |53\r
18/01/2025	01141	\r
010326313741 |51\r
16/01/2025	01140	\r
081634374750 |23\r
14/01/2025	01139	\r
031112243340 |46\r
11/01/2025	01138	\r
102526293746 |14\r
09/01/2025	01137	\r
182131395053 |13\r
07/01/2025	01136	\r
040509162239 |30\r
04/01/2025	01135	\r
041030364053 |51\r
02/01/2025	01134	\r
041018224145 |50\r
31/12/2024	01133	\r
081329364243 |28\r
28/12/2024	01132	\r
061936425355 |39\r
26/12/2024	01131	\r
061833384148 |16\r
24/12/2024	01130	\r
172027324451 |33\r
21/12/2024	01129	\r
041629303551 |48\r
19/12/2024	01128	\r
131632394951 |11\r
17/12/2024	01127	\r
021427305354 |16\r
14/12/2024	01126	\r
031019202124 |07\r
12/12/2024	01125	\r
010912183744 |11\r
10/12/2024	01124	\r
111526455255 |36\r
07/12/2024	01123	\r
161722242937 |54\r
05/12/2024	01122	\r
162129414247 |09\r
03/12/2024	01121	\r
101933394754 |16\r
30/11/2024	01120	\r
012024263841 |36\r
28/11/2024	01119	\r
011624283853 |09\r
26/11/2024	01118	\r
081116324043 |12\r
23/11/2024	01117	\r
041225394851 |45\r
21/11/2024	01116	\r
152231404251 |26\r
19/11/2024	01115	\r
061017344148 |31\r
16/11/2024	01114	\r
162233373951 |54\r
14/11/2024	01113	\r
122537404952 |31\r
12/11/2024	01112	\r
012129354145 |20\r
09/11/2024	01111	\r
111424263451 |40\r
07/11/2024	01110	\r
060933395051 |43\r
05/11/2024	01109	\r
093136464954 |07\r
02/11/2024	01108	\r
020919203454 |26\r
31/10/2024	01107	\r
051620293031 |39\r
29/10/2024	01106	\r
141719284751 |55\r
26/10/2024	01105	\r
051927294247 |40\r
24/10/2024	01104	\r
051731394653 |03\r
22/10/2024	01103	\r
152123263143 |35\r
19/10/2024	01102	\r
092231394351 |19\r
17/10/2024	01101	\r
111415263841 |25\r
15/10/2024	01100	\r
042541424652 |33\r
12/10/2024	01099	\r
293435385051 |37\r
10/10/2024	01098	\r
040506293244 |53\r
08/10/2024	01097	\r
030714174850 |40\r
05/10/2024	01096	\r
021017275052 |18\r
03/10/2024	01095	\r
182134404253 |25\r
01/10/2024	01094	\r
031822414344 |12\r
28/09/2024	01093	\r
021113324148 |15\r
26/09/2024	01092	\r
031829394149 |46\r
24/09/2024	01091	\r
010611172431 |43\r
21/09/2024	01090	\r
030809222655 |11\r
19/09/2024	01089	\r
040922244554 |48\r
17/09/2024	01088	\r
143234414754 |48\r
14/09/2024	01087	\r
021225325154 |34\r
12/09/2024	01086	\r
030831363947 |38\r
10/09/2024	01085	\r
152337384549 |30\r
07/09/2024	01084	\r
051120394653 |37\r
05/09/2024	01083	\r
152023293446 |01\r
03/09/2024	01082	\r
081011143848 |41\r
31/08/2024	01081	\r
243338404251 |28\r
29/08/2024	01080	\r
081121293855 |12\r
27/08/2024	01079	\r
050629313748 |02\r
24/08/2024	01078	\r
021720212223 |38\r
22/08/2024	01077	\r
111820324146 |33\r
20/08/2024	01076	\r
052426272954 |06\r
17/08/2024	01075	\r
042835383945 |05\r
15/08/2024	01074	\r
081620303443 |46\r
13/08/2024	01073	\r
092640444550 |27\r
10/08/2024	01072	\r
102332374855 |14\r
08/08/2024	01071	\r
010742434851 |29\r
06/08/2024	01070	\r
223444465455 |14\r
03/08/2024	01069	\r
072034364146 |16\r
01/08/2024	01068	\r
091721485355 |29\r
30/07/2024	01067	\r
020622233851 |32\r
27/07/2024	01066	\r
182325373940 |35\r
25/07/2024	01065	\r
121721253340 |39\r
23/07/2024	01064	\r
343940425455 |30\r
20/07/2024	01063	\r
121832405153 |28\r
18/07/2024	01062	\r
101328354042 |02\r
16/07/2024	01061	\r
203134364752 |02\r
13/07/2024	01060	\r
021213334452 |34\r
11/07/2024	01059	\r
010211212223 |26\r
09/07/2024	01058	\r
060809283353 |10\r
06/07/2024	01057	\r
081012222555 |52\r
04/07/2024	01056	\r
101920293441 |08\r
02/07/2024	01055	\r
070850525354 |02\r
29/06/2024	01054	\r
111532344648 |47\r
27/06/2024	01053	\r
072122414346 |32\r
25/06/2024	01052	\r
010509131827 |08\r
22/06/2024	01051	\r
172531354142 |36\r
20/06/2024	01050	\r
011029344355 |49\r
18/06/2024	01049	\r
202327363844 |52\r
15/06/2024	01048	\r
051014202651 |36\r
13/06/2024	01047	\r
083945474951 |16\r
11/06/2024	01046	\r
131621303239 |53\r
08/06/2024	01045	\r
131632333543 |42\r
06/06/2024	01044	\r
182638394751 |55\r
04/06/2024	01043	\r
010207101319 |24\r
01/06/2024	01042	\r
062430314749 |01\r
30/05/2024	01041	\r
040708122331 |45\r
28/05/2024	01040	\r
012529374054 |50\r
25/05/2024	01039	\r
152238394353 |20\r
23/05/2024	01038	\r
081242475152 |36\r
21/05/2024	01037	\r
010214323341 |04\r
18/05/2024	01036	\r
121820252752 |44\r
16/05/2024	01035	\r
202527394555 |44\r
14/05/2024	01034	\r
051736404650 |01\r
11/05/2024	01033	\r
192325434654 |42\r
09/05/2024	01032	\r
031621363740 |31\r
07/05/2024	01031	\r
212635414452 |13\r
04/05/2024	01030	\r
052735454955 |18\r
02/05/2024	01029	\r
303233364248 |18\r
30/04/2024	01028	\r
131626464954 |08\r
27/04/2024	01027	\r
071238434855 |08\r
25/04/2024	01026	\r
131927384154 |46\r
23/04/2024	01025	\r
013439404953 |09\r
20/04/2024	01024	\r
020635434547 |14\r
18/04/2024	01023	\r
012123334354 |28\r
16/04/2024	01022	\r
030532404650 |37\r
13/04/2024	01021	\r
293637384042 |46\r
11/04/2024	01020	\r
030615253343 |55\r
09/04/2024	01019	\r
041227444651 |22\r
06/04/2024	01018	\r
091320303954 |23\r
04/04/2024	01017	\r
030812254748 |15\r
02/04/2024	01016	\r
011218205152 |37\r
30/03/2024	01015	\r
141727385455 |23\r
28/03/2024	01014	\r
010718263849 |21\r
26/03/2024	01013	\r
010813163844 |47\r
23/03/2024	01012	\r
031013304052 |04\r
21/03/2024	01011	\r
121341484953 |43\r
19/03/2024	01010	\r
062539454655 |26\r
16/03/2024	01009	\r
083642434455 |54\r
14/03/2024	01008	\r
212526294151 |39\r
12/03/2024	01007	\r
111418202243 |16\r
09/03/2024	01006	\r
111322364649 |37\r
07/03/2024	01005	\r
132033475354 |19\r
05/03/2024	01004	\r
121921232854 |31\r
02/03/2024	01003	\r
011921315055 |37\r
29/02/2024	01002	\r
041120385253 |33\r
27/02/2024	01001	\r
010406082435 |53\r
24/02/2024	01000	\r
010322273840 |26\r
22/02/2024	00999	\r
081924313555 |01\r
20/02/2024	00998	\r
344650515255 |05\r
17/02/2024	00997	\r
081217273855 |47\r
15/02/2024	00996	\r
030708182126 |19\r
13/02/2024	00995	\r
081722313449 |18\r
08/02/2024	00994	\r
223135363842 |11\r
06/02/2024	00993	\r
081927344651 |24\r
03/02/2024	00992	\r
040607131826 |49\r
01/02/2024	00991	\r
020710223240 |39\r
30/01/2024	00990	\r
031013404952 |09\r
27/01/2024	00989	\r
061238414655 |13\r
25/01/2024	00988	\r
131735384248 |07\r
23/01/2024	00987	\r
132732484951 |23\r
20/01/2024	00986	\r
062529344954 |38\r
18/01/2024	00985	\r
122033384052 |35\r
16/01/2024	00984	\r
091418202743 |42\r
13/01/2024	00983	\r
010507233542 |21\r
11/01/2024	00982	\r
022332445152 |28\r
09/01/2024	00981	\r
163245505253 |54\r
06/01/2024	00980	\r
151721243446 |11\r
04/01/2024	00979	\r
073437435254 |28\r
02/01/2024	00978	\r
020518313745 |20\r
30/12/2023	00977	\r
091729323852 |02\r
28/12/2023	00976	\r
202830404552 |32\r
26/12/2023	00975	\r
101417272940 |25\r
23/12/2023	00974	\r
223239464849 |43\r
21/12/2023	00973	\r
093139414748 |03\r
19/12/2023	00972	\r
111415243453 |18\r
16/12/2023	00971	\r
131521263435 |45\r
14/12/2023	00970	\r
011223434852 |30\r
12/12/2023	00969	\r
060716213450 |31\r
09/12/2023	00968	\r
060926273447 |41\r
07/12/2023	00967	\r
091328335053 |47\r
05/12/2023	00966	\r
020419323539 |49\r
02/12/2023	00965	\r
011020374851 |54\r
30/11/2023	00964	\r
091321285054 |51\r
28/11/2023	00963	\r
102447485255 |28\r
25/11/2023	00962	\r
070910172553 |49\r
23/11/2023	00961	\r
040626335255 |15\r
21/11/2023	00960	\r
030716373951 |09\r
18/11/2023	00959	\r
010710142829 |02\r
16/11/2023	00958	\r
030510184449 |28\r
14/11/2023	00957	\r
040912152238 |40\r
11/11/2023	00956	\r
020304194142 |23\r
09/11/2023	00955	\r
081724343948 |44\r
07/11/2023	00954	\r
121820283552 |25\r
04/11/2023	00953	\r
143537474850 |43\r
02/11/2023	00952	\r
091517212636 |13\r
31/10/2023	00951	\r
101617283742 |43\r
28/10/2023	00950	\r
111425444647 |10\r
26/10/2023	00949	\r
142232374348 |42\r
24/10/2023	00948	\r
122026334044 |24\r
21/10/2023	00947	\r
111624344752 |15\r
19/10/2023	00946	\r
012329375155 |54\r
17/10/2023	00945	\r
132233414647 |09\r
14/10/2023	00944	\r
082330343847 |10\r
12/10/2023	00943	\r
050809203650 |35\r
10/10/2023	00942	\r
062326374446 |33\r
07/10/2023	00941	\r
041336404352 |34\r
05/10/2023	00940	\r
012133464753 |09\r
03/10/2023	00939	\r
031527293748 |55\r
30/09/2023	00938	\r
031319303844 |51\r
28/09/2023	00937	\r
042336454750 |22\r
26/09/2023	00936	\r
142024274144 |23\r
23/09/2023	00935	\r
202736434547 |35\r
21/09/2023	00934	\r
162633344143 |53\r
19/09/2023	00933	\r
172935405152 |23\r
16/09/2023	00932	\r
252742515455 |45\r
14/09/2023	00931	\r
061020225052 |34\r
12/09/2023	00930	\r
263132394555 |28\r
09/09/2023	00929	\r
132032374349 |40\r
07/09/2023	00928	\r
010436424554 |32\r
05/09/2023	00927	\r
020619293448 |39\r
02/09/2023	00926	\r
121532444651 |48\r
31/08/2023	00925	\r
233337434546 |29\r
29/08/2023	00924	\r
010820253553 |54\r
26/08/2023	00923	\r
050824385051 |47\r
24/08/2023	00922	\r
011020414250 |39\r
22/08/2023	00921	\r
020306343536 |31\r
19/08/2023	00920	\r
070913222742 |23\r
17/08/2023	00919	\r
010525325152 |54\r
15/08/2023	00918	\r
051225394053 |52\r
12/08/2023	00917	\r
132439434552 |08\r
10/08/2023	00916	\r
041431424749 |43\r
08/08/2023	00915	\r
050619204045 |47\r
05/08/2023	00914	\r
223440474951 |44\r
03/08/2023	00913	\r
031222253739 |07\r
01/08/2023	00912	\r
041822253348 |02\r
29/07/2023	00911	\r
162325262940 |32\r
27/07/2023	00910	\r
031113313345 |27\r
25/07/2023	00909	\r
122342445152 |03\r
22/07/2023	00908	\r
091523252734 |41\r
20/07/2023	00907	\r
053436384750 |26\r
18/07/2023	00906	\r
101119284247 |16\r
15/07/2023	00905	\r
021631373848 |36\r
13/07/2023	00904	\r
030430343649 |08\r
11/07/2023	00903	\r
244044464749 |05\r
08/07/2023	00902	\r
081123434448 |41\r
06/07/2023	00901	\r
071229394655 |01\r
04/07/2023	00900	\r
041314233350 |41\r
01/07/2023	00899	\r
133336384550 |25\r
29/06/2023	00898	\r
011112284654 |40\r
27/06/2023	00897	\r
021215162728 |47\r
24/06/2023	00896	\r
080916205053 |03\r
22/06/2023	00895	\r
021114354351 |55\r
20/06/2023	00894	\r
072326313553 |32\r
17/06/2023	00893	\r
071323343840 |55\r
15/06/2023	00892	\r
101125394655 |40\r
13/06/2023	00891	\r
041418274750 |33\r
10/06/2023	00890	\r
101727323541 |54\r
08/06/2023	00889	\r
033638435153 |02\r
06/06/2023	00888	\r
011423274450 |43\r
03/06/2023	00887	\r
232829363841 |07\r
01/06/2023	00886	\r
031840414647 |36\r
30/05/2023	00885	\r
011424284046 |34\r
27/05/2023	00884	\r
040608183943 |28\r
25/05/2023	00883	\r
151619313346 |07\r
23/05/2023	00882	\r
262735364754 |40\r
20/05/2023	00881	\r
011421364853 |44\r
18/05/2023	00880	\r
131421233041 |49\r
16/05/2023	00879	\r
192430344044 |51\r
13/05/2023	00878	\r
222435434554 |50\r
11/05/2023	00877	\r
010319333451 |17\r
09/05/2023	00876	\r
070913224447 |39\r
06/05/2023	00875	\r
011122283442 |10\r
04/05/2023	00874	\r
133032354552 |29\r
02/05/2023	00873	\r
041118253345 |21\r
29/04/2023	00872	\r
020912244153 |35\r
27/04/2023	00871	\r
082838394145 |54\r
25/04/2023	00870	\r
061019232528 |45\r
22/04/2023	00869	\r
091823244852 |10\r
20/04/2023	00868	\r
071132354251 |46\r
18/04/2023	00867	\r
171830405155 |50\r
15/04/2023	00866	\r
013435364243 |05\r
13/04/2023	00865	\r
222628373948 |15\r
11/04/2023	00864	\r
101416183749 |54\r
08/04/2023	00863	\r
173336465052 |40\r
06/04/2023	00862	\r
071012335254 |16\r
04/04/2023	00861	\r
132841424751 |09\r
01/04/2023	00860	\r
123439444955 |14\r
30/03/2023	00859	\r
061114213032 |22\r
28/03/2023	00858	\r
062124415053 |13\r
25/03/2023	00857	\r
171828404954 |16\r
23/03/2023	00856	\r
040722334049 |39\r
21/03/2023	00855	\r
071731434549 |52\r
18/03/2023	00854	\r
182432335153 |36\r
16/03/2023	00853	\r
062334485055 |02\r
14/03/2023	00852	\r
141518202735 |31\r
11/03/2023	00851	\r
132325303544 |08\r
09/03/2023	00850	\r
122228345354 |40\r
07/03/2023	00849	\r
082225273950 |28\r
04/03/2023	00848	\r
091323363854 |21\r
02/03/2023	00847	\r
010323244348 |31\r
28/02/2023	00846	\r
021314304355 |22\r
25/02/2023	00845	\r
010214213851 |50\r
23/02/2023	00844	\r
121629313948 |40\r
21/02/2023	00843	\r
041215213044 |05\r
18/02/2023	00842	\r
112326294350 |05\r
16/02/2023	00841	\r
010507082022 |33\r
14/02/2023	00840	\r
010933374345 |23\r
11/02/2023	00839	\r
041345485254 |05\r
09/02/2023	00838	\r
011029304950 |09\r
07/02/2023	00837	\r
062729323952 |09\r
04/02/2023	00836	\r
020608274146 |20\r
02/02/2023	00835	\r
031023293453 |11\r
31/01/2023	00834	\r
101131323852 |05\r
28/01/2023	00833	\r
092223293847 |33\r
26/01/2023	00832	\r
081518203341 |14\r
24/01/2023	00831	\r
030510122930 |09\r
19/01/2023	00830	\r
032132333852 |30\r
17/01/2023	00829	\r
010920364450 |40\r
14/01/2023	00828	\r
051724304353 |26\r
12/01/2023	00827	\r
051437454755 |25\r
10/01/2023	00826	\r
051214194651 |36\r
07/01/2023	00825	\r
030409153354 |16\r
05/01/2023	00824	\r
051234374749 |28\r
03/01/2023	00823	\r
091324434748 |18\r
31/12/2022	00822	\r
101536424552 |20\r
29/12/2022	00821	\r
060833373851 |48\r
27/12/2022	00820	\r
111213142355 |27\r
24/12/2022	00819	\r
051922233044 |52\r
22/12/2022	00818	\r
142635434548 |03\r
20/12/2022	00817	\r
020609203135 |42\r
17/12/2022	00816	\r
010229344142 |09\r
15/12/2022	00815	\r
022538505155 |21\r
13/12/2022	00814	\r
102231374152 |20\r
10/12/2022	00813	\r
021213183344 |31\r
08/12/2022	00812	\r
063036414955 |20\r
06/12/2022	00811	\r
011125444546 |35\r
03/12/2022	00810	\r
161727485253 |24\r
01/12/2022	00809	\r
111429315254 |07\r
29/11/2022	00808	\r
021316184142 |19\r
26/11/2022	00807	\r
082324484952 |01\r
24/11/2022	00806	\r
040618275253 |10\r
22/11/2022	00805	\r
030921222635 |15\r
19/11/2022	00804	\r
031522394648 |43\r
17/11/2022	00803	\r
011925273842 |54\r
15/11/2022	00802	\r
042026364751 |33\r
12/11/2022	00801	\r
081823303542 |43\r
10/11/2022	00800	\r
081114273845 |21\r
08/11/2022	00799	\r
122733444850 |18\r
05/11/2022	00798	\r
101922254753 |52\r
03/11/2022	00797	\r
081324282933 |49\r
01/11/2022	00796	\r
030920233154 |55\r
29/10/2022	00795	\r
010310131520 |32\r
27/10/2022	00794	\r
010710171930 |53\r
25/10/2022	00793	\r
081820224246 |01\r
22/10/2022	00792	\r
171935425152 |34\r
20/10/2022	00791	\r
152127343753 |29\r
18/10/2022	00790	\r
063036394446 |49\r
15/10/2022	00789	\r
081516394551 |23\r
13/10/2022	00788	\r
121343485152 |15\r
11/10/2022	00787	\r
112634404652 |01\r
08/10/2022	00786	\r
111723344151 |40\r
06/10/2022	00785	\r
060819204753 |07\r
04/10/2022	00784	\r
051112224345 |42\r
01/10/2022	00783	\r
141516222329 |20\r
29/09/2022	00782	\r
153233374254 |28\r
27/09/2022	00781	\r
111323273743 |34\r
24/09/2022	00780	\r
010405174247 |09\r
22/09/2022	00779	\r
121419294447 |26\r
20/09/2022	00778	\r
082732435354 |45\r
17/09/2022	00777	\r
050819344049 |39\r
15/09/2022	00776	\r
030819304152 |09\r
13/09/2022	00775	\r
091021404148 |54\r
10/09/2022	00774	\r
020815193538 |14\r
08/09/2022	00773	\r
091323323652 |43\r
06/09/2022	00772	\r
010527435254 |15\r
03/09/2022	00771	\r
112231334046 |41\r
01/09/2022	00770	\r
041418395053 |31\r
30/08/2022	00769	\r
021319293032 |16\r
27/08/2022	00768	\r
010507102548 |36\r
25/08/2022	00767	\r
193035404953 |42\r
23/08/2022	00766	\r
132131414445 |27\r
20/08/2022	00765	\r
061629324251 |43\r
18/08/2022	00764	\r
232731373842 |26\r
16/08/2022	00763	\r
171828475053 |11\r
13/08/2022	00762	\r
192829303336 |14\r
11/08/2022	00761	\r
011221344855 |50\r
09/08/2022	00760	\r
091036415155 |52\r
06/08/2022	00759	\r
062127415153 |43\r
04/08/2022	00758	\r
080920414854 |02\r
02/08/2022	00757	\r
020528404748 |31\r
30/07/2022	00756	\r
010424354447 |17\r
28/07/2022	00755	\r
050617282939 |34\r
26/07/2022	00754	\r
050809131447 |53\r
23/07/2022	00753	\r
272829394054 |13\r
21/07/2022	00752	\r
022033455155 |01\r
19/07/2022	00751	\r
080933343552 |36\r
16/07/2022	00750	\r
061318273446 |33\r
14/07/2022	00749	\r
112529373952 |45\r
12/07/2022	00748	\r
121324253941 |09\r
09/07/2022	00747	\r
052124475255 |20\r
07/07/2022	00746	\r
182432434855 |15\r
05/07/2022	00745	\r
050712262944 |38\r
02/07/2022	00744	\r
062639404647 |02\r
30/06/2022	00743	\r
051115192931 |35\r
28/06/2022	00742	\r
052230323855 |33\r
25/06/2022	00741	\r
141731353740 |28\r
23/06/2022	00740	\r
102223344654 |27\r
21/06/2022	00739	\r
091319213451 |35\r
18/06/2022	00738	\r
062743444547 |33\r
16/06/2022	00737	\r
091321405154 |04\r
14/06/2022	00736	\r
021526323536 |16\r
11/06/2022	00735	\r
101823254547 |38\r
09/06/2022	00734	\r
303135434850 |22\r
07/06/2022	00733	\r
161721283950 |19\r
04/06/2022	00732	\r
031727303449 |25\r
02/06/2022	00731	\r
071128303350 |49\r
31/05/2022	00730	\r
041015164751 |23\r
28/05/2022	00729	\r
333638424346 |03\r
26/05/2022	00728	\r
043032394153 |42\r
24/05/2022	00727	\r
183132465052 |28\r
21/05/2022	00726	\r
193238404548 |02\r
19/05/2022	00725	\r
030631404754 |08\r
17/05/2022	00724	\r
111725294548 |53\r
14/05/2022	00723	\r
022830434455 |22\r
12/05/2022	00722	\r
091824434450 |15\r
10/05/2022	00721	\r
121841434751 |10\r
07/05/2022	00720	\r
153233364346 |31\r
05/05/2022	00719	\r
272933394753 |55\r
03/05/2022	00718	\r
012238484953 |42\r
30/04/2022	00717	\r
112351525354 |27\r
28/04/2022	00716	\r
082425323744 |03\r
26/04/2022	00715	\r
142224254349 |17\r
23/04/2022	00714	\r
032736414955 |18\r
21/04/2022	00713	\r
212427343842 |46\r
19/04/2022	00712	\r
020713282934 |39\r
16/04/2022	00711	\r
040839415355 |52\r
14/04/2022	00710	\r
010509343745 |52\r
12/04/2022	00709	\r
111820222540 |05\r
09/04/2022	00708	\r
020319284245 |12\r
07/04/2022	00707	\r
061415252932 |41\r
05/04/2022	00706	\r
051826364344 |45\r
02/04/2022	00705	\r
323842444755 |46\r
31/03/2022	00704	\r
052434394249 |16\r
29/03/2022	00703	\r
051132354052 |31\r
26/03/2022	00702	\r
010616303455 |29\r
24/03/2022	00701	\r
050916354546 |44\r
22/03/2022	00700	\r
011418284749 |22\r
19/03/2022	00699	\r
082024375155 |27\r
17/03/2022	00698	\r
010612213749 |53\r
15/03/2022	00697	\r
061424283352 |50\r
12/03/2022	00696	\r
121618263045 |36\r
10/03/2022	00695	\r
010308161936 |41\r
08/03/2022	00694	\r
032325394748 |55\r
05/03/2022	00693	\r
051215254348 |01\r
03/03/2022	00692	\r
041016252643 |52\r
01/03/2022	00691	\r
151925425153 |02\r
26/02/2022	00690	\r
050830364951 |18\r
24/02/2022	00689	\r
021525303132 |13\r
22/02/2022	00688	\r
091619232539 |04\r
19/02/2022	00687	\r
011114334648 |40\r
17/02/2022	00686	\r
052440424654 |03\r
15/02/2022	00685	\r
050714242936 |46\r
12/02/2022	00684	\r
040812424451 |41\r
10/02/2022	00683	\r
031526354352 |07\r
08/02/2022	00682	\r
121521283240 |43\r
05/02/2022	00681	\r
011723294445 |37\r
03/02/2022	00680	\r
131822354243 |03\r
29/01/2022	00679	\r
061017232538 |21\r
27/01/2022	00678	\r
012631364046 |28\r
25/01/2022	00677	\r
021617203151 |50\r
22/01/2022	00676	\r
020616293742 |22\r
20/01/2022	00675	\r
082132344146 |48\r
18/01/2022	00674	\r
061516334143 |51\r
15/01/2022	00673	\r
202641464748 |18\r
13/01/2022	00672	\r
071217263746 |28\r
11/01/2022	00671	\r
122526283346 |22\r
08/01/2022	00670	\r
061737414850 |13\r
06/01/2022	00669	\r
040814213049 |38\r
04/01/2022	00668	\r
111722283949 |43\r
01/01/2022	00667	\r
042528323355 |03\r
30/12/2021	00666	\r
092527323746 |23\r
28/12/2021	00665	\r
030809404448 |02\r
25/12/2021	00664	\r
060823253335 |27\r
23/12/2021	00663	\r
082229434554 |23\r
21/12/2021	00662	\r
232528495254 |44\r
18/12/2021	00661	\r
040619263841 |16\r
16/12/2021	00660	\r
192430414349 |55\r
14/12/2021	00659	\r
101619243950 |29\r
11/12/2021	00658	\r
081317224251 |45\r
09/12/2021	00657	\r
031433404150 |17\r
07/12/2021	00656	\r
040622323453 |41\r
04/12/2021	00655	\r
070931323649 |37\r
02/12/2021	00654	\r
062328314448 |14\r
30/11/2021	00653	\r
122123283346 |38\r
27/11/2021	00652	\r
020507213137 |44\r
25/11/2021	00651	\r
161824293341 |43\r
23/11/2021	00650	\r
050709283855 |50\r
20/11/2021	00649	\r
061029303151 |35\r
18/11/2021	00648	\r
183032373940 |10\r
16/11/2021	00647	\r
081927344651 |02\r
13/11/2021	00646	\r
182229334648 |37\r
11/11/2021	00645	\r
033537414549 |31\r
09/11/2021	00644	\r
122526475153 |16\r
06/11/2021	00643	\r
233141484951 |03\r
04/11/2021	00642	\r
051015313250 |28\r
02/11/2021	00641	\r
373842464755 |23\r
30/10/2021	00640	\r
313640445053 |11\r
28/10/2021	00639	\r
020406133135 |16\r
26/10/2021	00638	\r
212429343953 |20\r
23/10/2021	00637	\r
051119262833 |09\r
21/10/2021	00636	\r
031932364151 |35\r
19/10/2021	00635	\r
030925294650 |18\r
16/10/2021	00634	\r
091722285055 |07\r
14/10/2021	00633	\r
092124304144 |40\r
12/10/2021	00632	\r
141731334250 |40\r
09/10/2021	00631	\r
012225383954 |19\r
07/10/2021	00630	\r
061521244555 |46\r
05/10/2021	00629	\r
111617193843 |24\r
02/10/2021	00628	\r
050622264951 |32\r
30/09/2021	00627	\r
182326324649 |54\r
28/09/2021	00626	\r
072225404950 |37\r
25/09/2021	00625	\r
072027434851 |37\r
23/09/2021	00624	\r
060721252749 |26\r
21/09/2021	00623	\r
152425404250 |49\r
18/09/2021	00622	\r
031415214752 |54\r
16/09/2021	00621	\r
101640434546 |22\r
14/09/2021	00620	\r
172230404344 |41\r
11/09/2021	00619	\r
081720363944 |30\r
09/09/2021	00618	\r
060810233944 |43\r
07/09/2021	00617	\r
193035434755 |12\r
04/09/2021	00616	\r
111232424351 |31\r
02/09/2021	00615	\r
010812262845 |43\r
31/08/2021	00614	\r
072037475153 |05\r
28/08/2021	00613	\r
101626273448 |51\r
26/08/2021	00612	\r
111320515355 |04\r
24/08/2021	00611	\r
020407183035 |20\r
21/08/2021	00610	\r
222427373848 |14\r
19/08/2021	00609	\r
050912204351 |13\r
22/07/2021	00608	\r
022024394653 |55\r
20/07/2021	00607	\r
020811131726 |53\r
17/07/2021	00606	\r
020711213142 |45\r
15/07/2021	00605	\r
030412163050 |20\r
13/07/2021	00604	\r
051118273443 |42\r
10/07/2021	00603	\r
070817374748 |27\r
08/07/2021	00602	\r
033234424454 |35\r
06/07/2021	00601	\r
172022243054 |51\r
03/07/2021	00600	\r
042530385055 |53\r
01/07/2021	00599	\r
041528304952 |55\r
29/06/2021	00598	\r
051424364455 |48\r
26/06/2021	00597	\r
061617204952 |27\r
24/06/2021	00596	\r
031617244144 |37\r
22/06/2021	00595	\r
030932334143 |40\r
19/06/2021	00594	\r
010307132845 |33\r
17/06/2021	00593	\r
182338414455 |40\r
15/06/2021	00592	\r
111821223055 |35\r
12/06/2021	00591	\r
041617202744 |30\r
10/06/2021	00590	\r
112224274354 |45\r
08/06/2021	00589	\r
162833414254 |12\r
05/06/2021	00588	\r
142225394152 |17\r
03/06/2021	00587	\r
040821242647 |43\r
01/06/2021	00586	\r
061214274345 |38\r
29/05/2021	00585	\r
021131374355 |14\r
27/05/2021	00584	\r
030718224046 |14\r
25/05/2021	00583	\r
061033353643 |08\r
22/05/2021	00582	\r
152737454652 |31\r
20/05/2021	00581	\r
071012194254 |24\r
18/05/2021	00580	\r
060722323847 |27\r
15/05/2021	00579	\r
010506132327 |46\r
13/05/2021	00578	\r
132425353941 |29\r
11/05/2021	00577	\r
011441444653 |48\r
08/05/2021	00576	\r
142326374251 |40\r
06/05/2021	00575	\r
151924314453 |32\r
04/05/2021	00574	\r
072445484953 |14\r
01/05/2021	00573	\r
030714224142 |10\r
29/04/2021	00572	\r
030923334244 |50\r
27/04/2021	00571	\r
030922263237 |41\r
24/04/2021	00570	\r
010405212544 |45\r
22/04/2021	00569	\r
051117253948 |22\r
20/04/2021	00568	\r
182538434751 |11\r
17/04/2021	00567	\r
041516294246 |36\r
15/04/2021	00566	\r
050827424751 |36\r
13/04/2021	00565	\r
253339454955 |36\r
10/04/2021	00564	\r
121316172747 |49\r
08/04/2021	00563	\r
081116222830 |45\r
06/04/2021	00562	\r
273334384648 |05\r
03/04/2021	00561	\r
020434384155 |19\r
01/04/2021	00560	\r
131824343854 |08\r
30/03/2021	00559	\r
021117194751 |22\r
27/03/2021	00558	\r
051117202637 |12\r
25/03/2021	00557	\r
192024293639 |22\r
23/03/2021	00556	\r
091317333453 |31\r
20/03/2021	00555	\r
161820253536 |17\r
18/03/2021	00554	\r
172438414654 |51\r
16/03/2021	00553	\r
033145464954 |40\r
13/03/2021	00552	\r
071920233655 |09\r
11/03/2021	00551	\r
040512254344 |27\r
09/03/2021	00550	\r
151829354754 |20\r
06/03/2021	00549	\r
182434394655 |04\r
04/03/2021	00548	\r
020921233341 |45\r
02/03/2021	00547	\r
232945464951 |01\r
27/02/2021	00546	\r
061124305052 |22\r
25/02/2021	00545	\r
091932404551 |01\r
23/02/2021	00544	\r
161921233048 |06\r
20/02/2021	00543	\r
010204323439 |20\r
18/02/2021	00542	\r
020510222647 |53\r
16/02/2021	00541	\r
041011212344 |50\r
13/02/2021	00540	\r
031114313442 |24\r
09/02/2021	00539	\r
152021293141 |34\r
06/02/2021	00538	\r
062232333553 |12\r
04/02/2021	00537	\r
284344505153 |13\r
02/02/2021	00536	\r
041331364054 |30\r
30/01/2021	00535	\r
020717182129 |19\r
28/01/2021	00534	\r
030416344055 |02\r
26/01/2021	00533	\r
071632424447 |35\r
23/01/2021	00532	\r
123139414555 |34\r
21/01/2021	00531	\r
092022314752 |18\r
19/01/2021	00530	\r
052225434853 |18\r
16/01/2021	00529	\r
131528293244 |49\r
14/01/2021	00528	\r
010442444650 |09\r
12/01/2021	00527	\r
192329344453 |35\r
09/01/2021	00526	\r
101924294648 |05\r
07/01/2021	00525	\r
071122384851 |53\r
05/01/2021	00524	\r
050709224254 |47\r
02/01/2021	00523	\r
071923263545 |11\r
31/12/2020	00522	\r
021525273751 |53\r
29/12/2020	00521	\r
040811151741 |23\r
26/12/2020	00520	\r
012433414351 |48\r
24/12/2020	00519	\r
111934414448 |43\r
22/12/2020	00518	\r
101116293538 |03\r
19/12/2020	00517	\r
142032343749 |31\r
17/12/2020	00516	\r
152527354048 |45\r
15/12/2020	00515	\r
101113353849 |14\r
12/12/2020	00514	\r
031432364146 |54\r
10/12/2020	00513	\r
033134364454 |45\r
08/12/2020	00512	\r
021732333845 |37\r
05/12/2020	00511	\r
102829303738 |36\r
03/12/2020	00510	\r
051932414245 |17\r
01/12/2020	00509	\r
061012243443 |15\r
28/11/2020	00508	\r
012036444549 |52\r
26/11/2020	00507	\r
181929313652 |50\r
24/11/2020	00506	\r
040719202253 |23\r
21/11/2020	00505	\r
081419204951 |28\r
19/11/2020	00504	\r
121523284548 |43\r
17/11/2020	00503	\r
061727343651 |48\r
14/11/2020	00502	\r
051115344448 |35\r
12/11/2020	00501	\r
042022254347 |12\r
10/11/2020	00500	\r
020519394853 |06\r
07/11/2020	00499	\r
122830334552 |15\r
05/11/2020	00498	\r
010206183451 |52\r
03/11/2020	00497	\r
022227464852 |23\r
31/10/2020	00496	\r
081819204354 |50\r
29/10/2020	00495	\r
091114162123 |54\r
27/10/2020	00494	\r
033133363839 |08\r
24/10/2020	00493	\r
122122274150 |34\r
22/10/2020	00492	\r
020312212438 |14\r
20/10/2020	00491	\r
083338474954 |31\r
17/10/2020	00490	\r
031425374954 |53\r
15/10/2020	00489	\r
083841475052 |45\r
13/10/2020	00488	\r
121928295253 |20\r
10/10/2020	00487	\r
051047505354 |22\r
08/10/2020	00486	\r
101820212651 |52\r
06/10/2020	00485	\r
111429323340 |35\r
03/10/2020	00484	\r
121422233944 |28\r
01/10/2020	00483	\r
030607193854 |50\r
29/09/2020	00482	\r
010607133055 |34\r
26/09/2020	00481	\r
071013154048 |01\r
24/09/2020	00480	\r
122841425253 |50\r
22/09/2020	00479	\r
050815183645 |06\r
19/09/2020	00478	\r
040708293141 |38\r
17/09/2020	00477	\r
010528434453 |49\r
15/09/2020	00476	\r
131415172653 |21\r
12/09/2020	00475	\r
202124303144 |40\r
10/09/2020	00474	\r
182527374550 |52\r
08/09/2020	00473	\r
224748525355 |14\r
05/09/2020	00472	\r
091219223146 |20\r
03/09/2020	00471	\r
070918223554 |50\r
01/09/2020	00470	\r
112224474953 |03\r
29/08/2020	00469	\r
010414283553 |02\r
25/08/2020	00468	\r
213536384447 |14\r
22/08/2020	00467	\r
012024263551 |12\r
20/08/2020	00466	\r
141828323336 |41\r
18/08/2020	00465	\r
224144465152 |02\r
15/08/2020	00464	\r
011129304151 |04\r
13/08/2020	00463	\r
032528444954 |19\r
11/08/2020	00462	\r
021233395253 |44\r
08/08/2020	00461	\r
031224263643 |08\r
06/08/2020	00460	\r
020521242627 |11\r
04/08/2020	00459	\r
101520213251 |08\r
01/08/2020	00458	\r
131829304047 |04\r
30/07/2020	00457	\r
060716262954 |04\r
28/07/2020	00456	\r
031120344454 |16\r
25/07/2020	00455	\r
021921345455 |24\r
23/07/2020	00454	\r
041231474952 |02\r
21/07/2020	00453	\r
061431373844 |04\r
18/07/2020	00452	\r
031322283053 |16\r
16/07/2020	00451	\r
020511202432 |06\r
14/07/2020	00450	\r
052232344351 |12\r
11/07/2020	00449	\r
030406142038 |35\r
09/07/2020	00448	\r
031011172654 |21\r
07/07/2020	00447	\r
072432354850 |01\r
04/07/2020	00446	\r
030910182945 |36\r
02/07/2020	00445	\r
041020384853 |05\r
30/06/2020	00444	\r
051118192021 |52\r
27/06/2020	00443	\r
020638475053 |14\r
25/06/2020	00442	\r
091012192740 |55\r
23/06/2020	00441	\r
021828465254 |19\r
20/06/2020	00440	\r
050933434450 |46\r
18/06/2020	00439	\r
051827455054 |09\r
16/06/2020	00438	\r
021516233354 |45\r
13/06/2020	00437	\r
070911304353 |10\r
11/06/2020	00436	\r
032125323552 |34\r
09/06/2020	00435	\r
010308224248 |44\r
06/06/2020	00434	\r
081224323551 |21\r
04/06/2020	00433	\r
061216343954 |19\r
02/06/2020	00432	\r
041931424855 |22\r
30/05/2020	00431	\r
121341424853 |20\r
28/05/2020	00430	\r
010408214449 |52\r
26/05/2020	00429	\r
111223243447 |43\r
23/05/2020	00428	\r
041327475055 |31\r
21/05/2020	00427	\r
021522253046 |10\r
19/05/2020	00426	\r
051516194955 |03\r
16/05/2020	00425	\r
193538495255 |01\r
14/05/2020	00424	\r
072329475155 |12\r
12/05/2020	00423	\r
010825343844 |28\r
09/05/2020	00422	\r
181930394546 |11\r
07/05/2020	00421	\r
091928303254 |22\r
05/05/2020	00420	\r
010413151820 |22\r
02/05/2020	00419	\r
020609164353 |19\r
30/04/2020	00418	\r
123132333941 |14\r
28/04/2020	00417	\r
040610163046 |34\r
25/04/2020	00416	\r
041824305355 |13\r
31/03/2020	00415	\r
121940414353 |23\r
28/03/2020	00414	\r
011011132755 |19\r
26/03/2020	00413	\r
070811313536 |45\r
24/03/2020	00412	\r
030920213352 |50\r
21/03/2020	00411	\r
101214172953 |25\r
19/03/2020	00410	\r
033541424349 |31\r
17/03/2020	00409	\r
011418434950 |08\r
14/03/2020	00408	\r
122025383940 |37\r
12/03/2020	00407	\r
021419242734 |48\r
10/03/2020	00406	\r
232530364552 |53\r
07/03/2020	00405	\r
051121304048 |20\r
05/03/2020	00404	\r
080934404154 |13\r
03/03/2020	00403	\r
141531404349 |12\r
29/02/2020	00402	\r
091723265154 |32\r
27/02/2020	00401	\r
031121294755 |50\r
25/02/2020	00400	\r
051321363948 |06\r
22/02/2020	00399	\r
072432495154 |44\r
20/02/2020	00398	\r
010320333651 |49\r
18/02/2020	00397	\r
273236374748 |50\r
15/02/2020	00396	\r
263637384249 |46\r
13/02/2020	00395	\r
252832343539 |07\r
11/02/2020	00394	\r
041418213253 |02\r
08/02/2020	00393	\r
091219254154 |38\r
06/02/2020	00392	\r
131834364549 |37\r
04/02/2020	00391	\r
061020475255 |46\r
01/02/2020	00390	\r
020311233554 |06\r
30/01/2020	00389	\r
121828304750 |41\r
28/01/2020	00388	\r
012024334055 |46\r
23/01/2020	00387	\r
091518253149 |46\r
21/01/2020	00386	\r
143145475254 |13\r
18/01/2020	00385	\r
131819233243 |11\r
16/01/2020	00384	\r
101126334446 |55\r
14/01/2020	00383	\r
030417395051 |53\r
11/01/2020	00382	\r
081117192547 |53\r
09/01/2020	00381	\r
172021295254 |51\r
07/01/2020	00380	\r
081116224254 |13\r
04/01/2020	00379	\r
041426424455 |48\r
02/01/2020	00378	\r
121426293340 |50\r
31/12/2019	00377	\r
022226284455 |27\r
28/12/2019	00376	\r
101726282932 |21\r
26/12/2019	00375	\r
050612182354 |26\r
24/12/2019	00374	\r
031630345055 |48\r
21/12/2019	00373	\r
050820343742 |51\r
19/12/2019	00372	\r
182225282934 |50\r
17/12/2019	00371	\r
040514192237 |43\r
14/12/2019	00370	\r
033033344047 |26\r
12/12/2019	00369	\r
010915424950 |48\r
10/12/2019	00368	\r
052033424349 |26\r
07/12/2019	00367	\r
071838424751 |08\r
05/12/2019	00366	\r
091116273540 |51\r
03/12/2019	00365	\r
212936415052 |42\r
30/11/2019	00364	\r
080910324450 |15\r
28/11/2019	00363	\r
011826285355 |14\r
26/11/2019	00362	\r
071938414247 |04\r
23/11/2019	00361	\r
072930455055 |15\r
21/11/2019	00360	\r
212435384247 |34\r
19/11/2019	00359	\r
192133353840 |04\r
16/11/2019	00358	\r
060818224952 |10\r
14/11/2019	00357	\r
091216364155 |35\r
12/11/2019	00356	\r
101724273639 |33\r
09/11/2019	00355	\r
010306252941 |12\r
07/11/2019	00354	\r
011219374452 |18\r
05/11/2019	00353	\r
030616174450 |28\r
02/11/2019	00352	\r
021534354850 |32\r
31/10/2019	00351	\r
181922374748 |46\r
29/10/2019	00350	\r
121516314355 |11\r
26/10/2019	00349	\r
182022505153 |35\r
24/10/2019	00348	\r
091423414550 |13\r
22/10/2019	00347	\r
021626273640 |31\r
19/10/2019	00346	\r
011021264243 |25\r
17/10/2019	00345	\r
051114345153 |16\r
15/10/2019	00344	\r
091229464853 |03\r
12/10/2019	00343	\r
213948515355 |05\r
10/10/2019	00342	\r
041742515355 |29\r
08/10/2019	00341	\r
083639434850 |40\r
05/10/2019	00340	\r
102930313751 |50\r
03/10/2019	00339	\r
040708263744 |29\r
01/10/2019	00338	\r
052238414749 |29\r
28/09/2019	00337	\r
040821234043 |44\r
26/09/2019	00336	\r
071238435155 |15\r
24/09/2019	00335	\r
123339404853 |35\r
21/09/2019	00334	\r
020523304245 |34\r
19/09/2019	00333	\r
020822343941 |13\r
17/09/2019	00332	\r
031426384347 |10\r
14/09/2019	00331	\r
103642444554 |14\r
12/09/2019	00330	\r
182932334549 |40\r
10/09/2019	00329	\r
060919395054 |37\r
07/09/2019	00328	\r
071731353846 |16\r
05/09/2019	00327	\r
202427303345 |21\r
03/09/2019	00326	\r
131429354155 |25\r
31/08/2019	00325	\r
132023325152 |42\r
29/08/2019	00324	\r
101112232748 |09\r
27/08/2019	00323	\r
162229334647 |55\r
24/08/2019	00322	\r
192034404951 |01\r
22/08/2019	00321	\r
040716173039 |27\r
20/08/2019	00320	\r
103038485455 |46\r
17/08/2019	00319	\r
091124263853 |41\r
15/08/2019	00318	\r
192531323947 |08\r
13/08/2019	00317	\r
040816273240 |23\r
10/08/2019	00316	\r
071736424350 |44\r
08/08/2019	00315	\r
010617182141 |22\r
06/08/2019	00314	\r
091119202642 |17\r
03/08/2019	00313	\r
132425262730 |04\r
01/08/2019	00312	\r
011839454849 |26\r
30/07/2019	00311	\r
030812213251 |07\r
27/07/2019	00310	\r
020325334450 |17\r
25/07/2019	00309	\r
033134415253 |16\r
23/07/2019	00308	\r
051021323952 |41\r
20/07/2019	00307	\r
151825324252 |10\r
18/07/2019	00306	\r
042429313941 |38\r
16/07/2019	00305	\r
041219313340 |51\r
13/07/2019	00304	\r
052329455052 |01\r
11/07/2019	00303	\r
060915263538 |34\r
09/07/2019	00302	\r
041725404251 |02\r
06/07/2019	00301	\r
052936394653 |48\r
04/07/2019	00300	\r
040514465254 |03\r
02/07/2019	00299	\r
020933455254 |01\r
29/06/2019	00298	\r
061019313443 |37\r
27/06/2019	00297	\r
092932444953 |05\r
25/06/2019	00296	\r
031434354049 |23\r
22/06/2019	00295	\r
010923284254 |49\r
20/06/2019	00294	\r
091523414951 |52\r
18/06/2019	00293	\r
243145464754 |04\r
15/06/2019	00292	\r
132340455255 |09\r
13/06/2019	00291	\r
060915222953 |25\r
11/06/2019	00290	\r
020513203049 |35\r
08/06/2019	00289	\r
020810232735 |47\r
06/06/2019	00288	\r
101330365154 |16\r
04/06/2019	00287	\r
182024263341 |55\r
01/06/2019	00286	\r
102431414247 |20\r
30/05/2019	00285	\r
173133343740 |35\r
28/05/2019	00284	\r
152231323337 |51\r
25/05/2019	00283	\r
041235445055 |19\r
23/05/2019	00282	\r
132133425355 |44\r
21/05/2019	00281	\r
111229313753 |41\r
18/05/2019	00280	\r
061013182938 |53\r
16/05/2019	00279	\r
082830334043 |24\r
14/05/2019	00278	\r
061115213040 |10\r
11/05/2019	00277	\r
061120222628 |36\r
09/05/2019	00276	\r
192148495455 |27\r
07/05/2019	00275	\r
030607080949 |24\r
04/05/2019	00274	\r
010203172653 |50\r
02/05/2019	00273	\r
021016173336 |20\r
30/04/2019	00272	\r
030513404145 |52\r
27/04/2019	00271	\r
011122263351 |04\r
25/04/2019	00270	\r
162223333638 |45\r
23/04/2019	00269	\r
202122314345 |30\r
20/04/2019	00268	\r
081012244044 |51\r
18/04/2019	00267	\r
070815242648 |10\r
16/04/2019	00266	\r
162932335253 |05\r
13/04/2019	00265	\r
091320213643 |32\r
11/04/2019	00264	\r
010831323755 |53\r
09/04/2019	00263	\r
101419364849 |03\r
06/04/2019	00262	\r
012030414650 |48\r
04/04/2019	00261	\r
162629384751 |13\r
02/04/2019	00260	\r
010409202226 |48\r
30/03/2019	00259	\r
031518355054 |32\r
28/03/2019	00258	\r
032337434449 |27\r
26/03/2019	00257	\r
151928404448 |14\r
23/03/2019	00256	\r
030930414652 |22\r
21/03/2019	00255	\r
071832424653 |28\r
19/03/2019	00254	\r
082832354045 |34\r
16/03/2019	00253	\r
101822243540 |53\r
14/03/2019	00252	\r
182125354453 |04\r
12/03/2019	00251	\r
091626344449 |19\r
09/03/2019	00250	\r
182431343544 |52\r
07/03/2019	00249	\r
021420334147 |27\r
05/03/2019	00248	\r
011523515355 |26\r
02/03/2019	00247	\r
010203204648 |31\r
28/02/2019	00246	\r
041519344042 |49\r
26/02/2019	00245	\r
080916344243 |45\r
23/02/2019	00244	\r
161930394352 |21\r
21/02/2019	00243	\r
031011152934 |50\r
19/02/2019	00242	\r
121822293252 |51\r
16/02/2019	00241	\r
050814283740 |41\r
14/02/2019	00240	\r
081526414353 |46\r
12/02/2019	00239	\r
011217344849 |47\r
09/02/2019	00238	\r
021415444650 |18\r
07/02/2019	00237	\r
202728324750 |41\r
02/02/2019	00236	\r
112327353646 |37\r
31/01/2019	00235	\r
101920283444 |29\r
29/01/2019	00234	\r
152026414555 |10\r
26/01/2019	00233	\r
202733435354 |48\r
24/01/2019	00232	\r
313538444955 |24\r
22/01/2019	00231	\r
011422405255 |21\r
19/01/2019	00230	\r
132942465153 |36\r
17/01/2019	00229	\r
131422343555 |54\r
15/01/2019	00228	\r
040613222930 |52\r
12/01/2019	00227	\r
071314264254 |11\r
10/01/2019	00226	\r
122231354047 |08\r
08/01/2019	00225	\r
030509114548 |40\r
05/01/2019	00224	\r
101138475355 |51\r
03/01/2019	00223	\r
233137454954 |18\r
01/01/2019	00222	\r
021921273746 |12\r
29/12/2018	00221	\r
083642435052 |30\r
27/12/2018	00220	\r
052033424350 |40\r
25/12/2018	00219	\r
030917212351 |15\r
22/12/2018	00218	\r
030816353952 |29\r
20/12/2018	00217	\r
081724333444 |55\r
18/12/2018	00216	\r
010915172526 |08\r
15/12/2018	00215	\r
141749525355 |12\r
13/12/2018	00214	\r
021114364955 |53\r
11/12/2018	00213	\r
010511373944 |31\r
08/12/2018	00212	\r
030609314854 |53\r
06/12/2018	00211	\r
091323273942 |49\r
04/12/2018	00210	\r
101316233049 |24\r
01/12/2018	00209	\r
030512202533 |41\r
29/11/2018	00208	\r
102327425152 |20\r
27/11/2018	00207	\r
030523283544 |08\r
24/11/2018	00206	\r
031011254054 |17\r
22/11/2018	00205	\r
172224283744 |06\r
20/11/2018	00204	\r
092333404449 |17\r
17/11/2018	00203	\r
122226294547 |15\r
15/11/2018	00202	\r
131621404952 |54\r
13/11/2018	00201	\r
032526324147 |05\r
10/11/2018	00200	\r
030519222939 |15\r
08/11/2018	00199	\r
222831395253 |14\r
06/11/2018	00198	\r
192223434753 |03\r
03/11/2018	00197	\r
141720232545 |34\r
01/11/2018	00196	\r
031115424454 |41\r
30/10/2018	00195	\r
011222273039 |46\r
27/10/2018	00194	\r
080915214449 |16\r
25/10/2018	00193	\r
162329314548 |19\r
23/10/2018	00192	\r
010306132130 |36\r
20/10/2018	00191	\r
020510173541 |21\r
18/10/2018	00190	\r
011122344247 |30\r
16/10/2018	00189	\r
052829344246 |17\r
13/10/2018	00188	\r
122123444748 |43\r
11/10/2018	00187	\r
051617374649 |35\r
09/10/2018	00186	\r
102746505155 |01\r
06/10/2018	00185	\r
050616424851 |03\r
04/10/2018	00184	\r
030912173442 |46\r
02/10/2018	00183	\r
030728323337 |22\r
29/09/2018	00182	\r
030712323455 |38\r
27/09/2018	00181	\r
081229355154 |34\r
25/09/2018	00180	\r
020306131417 |09\r
22/09/2018	00179	\r
010817284050 |21\r
20/09/2018	00178	\r
033235464749 |51\r
18/09/2018	00177	\r
082132434853 |38\r
15/09/2018	00176	\r
020528304650 |49\r
13/09/2018	00175	\r
040607264044 |09\r
11/09/2018	00174	\r
131728424549 |50\r
08/09/2018	00173	\r
091112243543 |15\r
06/09/2018	00172	\r
041115212427 |07\r
04/09/2018	00171	\r
081820293437 |51\r
01/09/2018	00170	\r
020820212836 |05\r
30/08/2018	00169	\r
052228424954 |36\r
28/08/2018	00168	\r
021015313948 |23\r
25/08/2018	00167	\r
101115324048 |27\r
23/08/2018	00166	\r
141827383953 |02\r
21/08/2018	00165	\r
091214233246 |31\r
18/08/2018	00164	\r
073336395155 |11\r
16/08/2018	00163	\r
061034464851 |47\r
14/08/2018	00162	\r
293036384552 |46\r
11/08/2018	00161	\r
161731334244 |14\r
09/08/2018	00160	\r
242932334955 |09\r
07/08/2018	00159	\r
030915203949 |04\r
04/08/2018	00158	\r
111224324148 |03\r
02/08/2018	00157	\r
061116174155 |07\r
31/07/2018	00156	\r
010527314750 |41\r
28/07/2018	00155	\r
111622253040 |09\r
26/07/2018	00154	\r
212433374046 |52\r
24/07/2018	00153	\r
111834375053 |20\r
21/07/2018	00152	\r
073133374652 |28\r
19/07/2018	00151	\r
111328344447 |10\r
17/07/2018	00150	\r
051422273140 |48\r
14/07/2018	00149	\r
041923343850 |01\r
12/07/2018	00148	\r
081518212449 |22\r
10/07/2018	00147	\r
061016202729 |24\r
07/07/2018	00146	\r
023045484953 |41\r
05/07/2018	00145	\r
041522244351 |48\r
03/07/2018	00144	\r
303234474849 |50\r
30/06/2018	00143	\r
031223243033 |01\r
28/06/2018	00142	\r
113133434851 |23\r
26/06/2018	00141	\r
171821394043 |03\r
23/06/2018	00140	\r
060813234655 |01\r
21/06/2018	00139	\r
020819232533 |32\r
19/06/2018	00138	\r
161731374152 |34\r
16/06/2018	00137	\r
141521304447 |48\r
14/06/2018	00136	\r
031532454854 |55\r
12/06/2018	00135	\r
041323272935 |14\r
09/06/2018	00134	\r
092325395253 |38\r
07/06/2018	00133	\r
111618264647 |42\r
05/06/2018	00132	\r
112126325152 |05\r
02/06/2018	00131	\r
050717223233 |06\r
31/05/2018	00130	\r
031518252629 |19\r
29/05/2018	00129	\r
091317184650 |26\r
26/05/2018	00128	\r
071228314044 |15\r
24/05/2018	00127	\r
242526293648 |40\r
22/05/2018	00126	\r
040508173547 |39\r
19/05/2018	00125	\r
333545525355 |25\r
17/05/2018	00124	\r
133138455355 |46\r
15/05/2018	00123	\r
030629374449 |24\r
12/05/2018	00122	\r
010926385455 |51\r
10/05/2018	00121	\r
020608343943 |11\r
08/05/2018	00120	\r
031623243842 |48\r
05/05/2018	00119	\r
163233374048 |15\r
03/05/2018	00118	\r
232733373949 |44\r
01/05/2018	00117	\r
010720232538 |14\r
28/04/2018	00116	\r
121922293246 |25\r
26/04/2018	00115	\r
232629313654 |55\r
24/04/2018	00114	\r
171824404146 |06\r
21/04/2018	00113	\r
161841434655 |35\r
19/04/2018	00112	\r
041719354955 |09\r
17/04/2018	00111	\r
021026273138 |39\r
14/04/2018	00110	\r
021014264554 |20\r
12/04/2018	00109	\r
042935374254 |19\r
10/04/2018	00108	\r
012225313648 |41\r
07/04/2018	00107	\r
122433343653 |05\r
05/04/2018	00106	\r
070917253132 |06\r
03/04/2018	00105	\r
202139425153 |01\r
31/03/2018	00104	\r
030731435153 |26\r
29/03/2018	00103	\r
052735394652 |31\r
27/03/2018	00102	\r
091314155455 |22\r
24/03/2018	00101	\r
013038454850 |12\r
22/03/2018	00100	\r
010824333441 |20\r
20/03/2018	00099	\r
114043464955 |37\r
17/03/2018	00098	\r
031428355052 |29\r
15/03/2018	00097	\r
152023283949 |19\r
13/03/2018	00096	\r
010217464749 |44\r
10/03/2018	00095	\r
092027314849 |42\r
08/03/2018	00094	\r
141718234152 |40\r
06/03/2018	00093	\r
020613224048 |12\r
03/03/2018	00092	\r
041032374752 |49\r
01/03/2018	00091	\r
040507172038 |09\r
27/02/2018	00090	\r
081623284449 |45\r
24/02/2018	00089	\r
050724324549 |01\r
22/02/2018	00088	\r
111432364248 |20\r
20/02/2018	00087	\r
010221245052 |33\r
17/02/2018	00086	\r
162228293543 |45\r
13/02/2018	00085	\r
092526304254 |19\r
10/02/2018	00084	\r
081019253646 |07\r
08/02/2018	00083	\r
212229374150 |33\r
06/02/2018	00082	\r
012029314353 |16\r
03/02/2018	00081	\r
122942485455 |18\r
01/02/2018	00080	\r
010708093943 |52\r
30/01/2018	00079	\r
151924515355 |29\r
27/01/2018	00078	\r
212636384050 |11\r
25/01/2018	00077	\r
011030444550 |04\r
23/01/2018	00076	\r
031015234153 |35\r
20/01/2018	00075	\r
020715164145 |19\r
18/01/2018	00074	\r
122428303639 |15\r
16/01/2018	00073	\r
062733414249 |22\r
13/01/2018	00072	\r
032125265155 |37\r
11/01/2018	00071	\r
040730353745 |01\r
09/01/2018	00070	\r
182528465051 |15\r
06/01/2018	00069	\r
041124354145 |17\r
04/01/2018	00068	\r
010731354655 |51\r
02/01/2018	00067	\r
040708343747 |24\r
30/12/2017	00066	\r
080936373950 |07\r
28/12/2017	00065	\r
071826293135 |34\r
26/12/2017	00064	\r
071113182642 |49\r
23/12/2017	00063	\r
070809132844 |12\r
21/12/2017	00062	\r
222327353746 |19\r
19/12/2017	00061	\r
020320253844 |12\r
16/12/2017	00060	\r
052337414353 |25\r
14/12/2017	00059	\r
111222284650 |07\r
12/12/2017	00058	\r
060708213239 |27\r
09/12/2017	00057	\r
053435424952 |21\r
07/12/2017	00056	\r
031426354454 |25\r
05/12/2017	00055	\r
273840424655 |05\r
02/12/2017	00054	\r
093745505354 |40\r
30/11/2017	00053	\r
051326375355 |28\r
28/11/2017	00052	\r
021939495153 |20\r
25/11/2017	00051	\r
020916465255 |50\r
23/11/2017	00050	\r
010203182550 |14\r
21/11/2017	00049	\r
050823373854 |55\r
18/11/2017	00048	\r
111226425054 |17\r
16/11/2017	00047	\r
011622254748 |21\r
14/11/2017	00046	\r
202429414749 |22\r
11/11/2017	00045	\r
122633353644 |01\r
09/11/2017	00044	\r
020306233436 |50\r
07/11/2017	00043	\r
193236374254 |28\r
04/11/2017	00042	\r
020812444652 |09\r
02/11/2017	00041	\r
030912215152 |07\r
31/10/2017	00040	\r
071324454752 |33\r
28/10/2017	00039	\r
131835364148 |47\r
26/10/2017	00038	\r
021015303450 |03\r
24/10/2017	00037	\r
010209133235 |52\r
21/10/2017	00036	\r
040913161849 |30\r
19/10/2017	00035	\r
061517244045 |39\r
17/10/2017	00034	\r
012636405054 |31\r
14/10/2017	00033	\r
141829354449 |54\r
12/10/2017	00032	\r
050811313742 |52\r
10/10/2017	00031	\r
293343444550 |41\r
07/10/2017	00030	\r
313440424349 |16\r
05/10/2017	00029	\r
010314193541 |20\r
03/10/2017	00028	\r
213135414650 |23\r
30/09/2017	00027	\r
041723253446 |24\r
28/09/2017	00026	\r
202728313947 |10\r
26/09/2017	00025	\r
141518303649 |19\r
23/09/2017	00024	\r
070827364453 |49\r
21/09/2017	00023	\r
091216244351 |39\r
19/09/2017	00022	\r
033236414453 |45\r
16/09/2017	00021	\r
091221262952 |24\r
14/09/2017	00020	\r
222332434451 |15\r
12/09/2017	00019	\r
061012474851 |35\r
09/09/2017	00018	\r
011523364354 |12\r
07/09/2017	00017	\r
041822313240 |08\r
05/09/2017	00016	\r
010208132339 |09\r
02/09/2017	00015	\r
050911181937 |50\r
31/08/2017	00014	\r
082027353647 |18\r
29/08/2017	00013	\r
041215232441 |44\r
26/08/2017	00012	\r
172530313641 |20\r
24/08/2017	00011	\r
051618374246 |10\r
22/08/2017	00010	\r
102431323844 |14\r
19/08/2017	00009	\r
071113152651 |36\r
17/08/2017	00008	\r
111220303234 |53\r
15/08/2017	00007	\r
071119323351 |30\r
12/08/2017	00006	\r
061620323851 |34\r
10/08/2017	00005	\r
101119415054 |03\r
08/08/2017	00004	\r
193639414651 |38\r
05/08/2017	00003	\r
010511324045 |43\r
03/08/2017	00002	\r
040924252745 |40\r
01/08/2017	00001	\r
051014232438 |35`,Cb=`18/10/2026	01577	\r
101131384044\r
16/10/2026	01576	\r
092026353638\r
14/10/2026	01575	\r
061619213443\r
11/10/2026	01574	\r
030916293044\r
09/10/2026	01573	\r
050712233241\r
07/10/2026	01572	\r
101436374143\r
04/10/2026	01571	\r
152029374045\r
02/10/2026	01570	\r
010620273141\r
30/09/2026	01569	\r
020924273033\r
27/09/2026	01568	\r
020413253139\r
25/09/2026	01567	\r
031518283336\r
23/09/2026	01566	\r
020612152526\r
20/09/2026	01565	\r
101516273338\r
18/09/2026	01564	\r
071226274143\r
16/09/2026	01563	\r
010310111823\r
13/09/2026	01562	\r
041231343841\r
11/09/2026	01561	\r
141820212627\r
09/09/2026	01560	\r
121720213643\r
06/09/2026	01559	\r
091422262740\r
04/09/2026	01558	\r
162123293445\r
02/09/2026	01557	\r
060927293544\r
30/08/2026	01556	\r
010312153745\r
28/08/2026	01555	\r
031315223639\r
26/08/2026	01554	\r
031011163340\r
23/08/2026	01553	\r
041617223239\r
21/08/2026	01552	\r
072631384345\r
19/08/2026	01551	\r
061518334043\r
16/08/2026	01550	\r
060715193641\r
14/08/2026	01549	\r
070913313544\r
12/08/2026	01548	\r
151722293340\r
09/08/2026	01547	\r
031720273135\r
07/08/2026	01546	\r
020819303643\r
05/08/2026	01545	\r
020611162839\r
02/08/2026	01544	\r
031220252737\r
31/07/2026	01543	\r
061624253843\r
29/07/2026	01542	\r
020621313645\r
26/07/2026	01541	\r
131627334144\r
24/07/2026	01540	\r
121636384145\r
22/07/2026	01539	\r
033233343943\r
19/07/2026	01538	\r
122224263137\r
17/07/2026	01537	\r
091830313945\r
15/07/2026	01536	\r
071129374345\r
12/07/2026	01535	\r
060911173544\r
10/07/2026	01534	\r
091723264244\r
08/07/2026	01533	\r
131422263744\r
05/07/2026	01532	\r
010513293235\r
03/07/2026	01531	\r
062021283039\r
01/07/2026	01530	\r
202425294044\r
28/06/2026	01529	\r
021118334245\r
26/06/2026	01528	\r
091431364145\r
24/06/2026	01527	\r
031117193032\r
21/06/2026	01526	\r
030819274145\r
19/06/2026	01525	\r
060919293036\r
17/06/2026	01524	\r
050616283539\r
14/06/2026	01523	\r
071620222438\r
12/06/2026	01522	\r
051530343738\r
10/06/2026	01521	\r
030917222732\r
07/06/2026	01520	\r
142126303435\r
05/06/2026	01519	\r
131619323639\r
03/06/2026	01518	\r
031126333638\r
31/05/2026	01517	\r
011216212441\r
29/05/2026	01516	\r
131424283042\r
27/05/2026	01515	\r
021317183137\r
24/05/2026	01514	\r
040809142542\r
22/05/2026	01513	\r
020314284144\r
20/05/2026	01512	\r
162829374045\r
17/05/2026	01511	\r
040813152731\r
15/05/2026	01510	\r
061420222344\r
13/05/2026	01509	\r
081015323543\r
10/05/2026	01508	\r
030410112742\r
08/05/2026	01507	\r
041617263442\r
06/05/2026	01506	\r
091228363740\r
03/05/2026	01505	\r
070914243839\r
01/05/2026	01504	\r
042125314143\r
29/04/2026	01503	\r
041415161725\r
26/04/2026	01502	\r
121822253141\r
24/04/2026	01501	\r
202933364142\r
22/04/2026	01500	\r
020615161737\r
19/04/2026	01499	\r
071015273335\r
17/04/2026	01498	\r
011019313638\r
15/04/2026	01497	\r
212233353643\r
12/04/2026	01496	\r
011011323942\r
10/04/2026	01495	\r
070810162835\r
08/04/2026	01494	\r
050823263841\r
05/04/2026	01493	\r
020923303242\r
03/04/2026	01492	\r
020423243541\r
01/04/2026	01491	\r
063034363744\r
29/03/2026	01490	\r
050818303745\r
27/03/2026	01489	\r
050713193845\r
25/03/2026	01488	\r
162224293536\r
22/03/2026	01487	\r
051022263136\r
20/03/2026	01486	\r
081122233843\r
18/03/2026	01485	\r
142033353644\r
15/03/2026	01484	\r
040711264244\r
13/03/2026	01483	\r
111220223133\r
11/03/2026	01482	\r
161819283144\r
08/03/2026	01481	\r
061213253132\r
06/03/2026	01480	\r
021012213237\r
04/03/2026	01479	\r
010406091344\r
01/03/2026	01478	\r
162223354445\r
27/02/2026	01477	\r
020408151728\r
25/02/2026	01476	\r
041320222329\r
22/02/2026	01475	\r
072324363840\r
20/02/2026	01474	\r
042528333445\r
18/02/2026	01473	\r
010719232644\r
15/02/2026	01472	\r
040607202843\r
13/02/2026	01471	\r
081231364243\r
11/02/2026	01470	\r
152035404445\r
08/02/2026	01469	\r
061316202338\r
06/02/2026	01468	\r
020713174245\r
04/02/2026	01467	\r
021214173943\r
01/02/2026	01466	\r
011821233036\r
30/01/2026	01465	\r
161730414245\r
28/01/2026	01464	\r
041016192740\r
25/01/2026	01463	\r
021920243334\r
23/01/2026	01462	\r
091516202231\r
21/01/2026	01461	\r
011823242937\r
18/01/2026	01460	\r
020515263942\r
16/01/2026	01459	\r
021021313440\r
14/01/2026	01458	\r
012223283945\r
11/01/2026	01457	\r
081021253138\r
09/01/2026	01456	\r
080917213645\r
07/01/2026	01455	\r
010507283143\r
04/01/2026	01454	\r
021221293544\r
02/01/2026	01453	\r
071822323738\r
31/12/2025	01452	\r
012535363745\r
28/12/2025	01451	\r
010207163137\r
26/12/2025	01450	\r
040616252740\r
24/12/2025	01449	\r
151931354345\r
21/12/2025	01448	\r
060912182943\r
19/12/2025	01447	\r
012136424344\r
17/12/2025	01446	\r
051424384143\r
14/12/2025	01445	\r
081113162832\r
12/12/2025	01444	\r
030713173844\r
10/12/2025	01443	\r
071822293036\r
07/12/2025	01442	\r
010523282943\r
05/12/2025	01441	\r
021923374243\r
03/12/2025	01440	\r
081520233134\r
30/11/2025	01439	\r
071326303442\r
28/11/2025	01438	\r
020917233941\r
26/11/2025	01437	\r
020815193038\r
23/11/2025	01436	\r
041219424344\r
21/11/2025	01435	\r
081118252835\r
19/11/2025	01434	\r
091219304043\r
16/11/2025	01433	\r
152031333445\r
14/11/2025	01432	\r
031015274142\r
12/11/2025	01431	\r
162429374044\r
09/11/2025	01430	\r
132327303743\r
07/11/2025	01429	\r
030420283942\r
05/11/2025	01428	\r
020918253031\r
02/11/2025	01427	\r
030712203044\r
31/10/2025	01426	\r
031031343643\r
29/10/2025	01425	\r
072635394142\r
26/10/2025	01424	\r
183034424345\r
24/10/2025	01423	\r
021124313238\r
22/10/2025	01422	\r
051112242844\r
19/10/2025	01421	\r
161725262837\r
17/10/2025	01420	\r
151718263142\r
15/10/2025	01419	\r
010618202940\r
12/10/2025	01418	\r
041016202834\r
10/10/2025	01417	\r
040525343943\r
08/10/2025	01416	\r
081011182332\r
05/10/2025	01415	\r
051422283239\r
03/10/2025	01414	\r
293132333435\r
01/10/2025	01413	\r
030607193035\r
28/09/2025	01412	\r
081318263639\r
26/09/2025	01411	\r
121719272836\r
24/09/2025	01410	\r
030517313240\r
21/09/2025	01409	\r
020306212838\r
19/09/2025	01408	\r
040617182841\r
17/09/2025	01407	\r
112325353845\r
14/09/2025	01406	\r
030609103037\r
12/09/2025	01405	\r
172224374243\r
10/09/2025	01404	\r
071018202436\r
07/09/2025	01403	\r
062930394244\r
05/09/2025	01402	\r
011020224143\r
03/09/2025	01401	\r
142123284445\r
31/08/2025	01400	\r
030414303238\r
29/08/2025	01399	\r
020410243536\r
27/08/2025	01398	\r
031118394042\r
24/08/2025	01397	\r
020920283243\r
22/08/2025	01396	\r
010910133739\r
20/08/2025	01395	\r
040927323842\r
17/08/2025	01394	\r
152426293142\r
15/08/2025	01393	\r
052227364345\r
13/08/2025	01392	\r
101528303545\r
10/08/2025	01391	\r
132126283135\r
08/08/2025	01390	\r
111720262738\r
06/08/2025	01389	\r
031214182934\r
03/08/2025	01388	\r
051424263743\r
01/08/2025	01387	\r
052930313638\r
30/07/2025	01386	\r
020306162634\r
27/07/2025	01385	\r
010912273945\r
25/07/2025	01384	\r
203034353839\r
23/07/2025	01383	\r
242629323744\r
20/07/2025	01382	\r
111314203742\r
18/07/2025	01381	\r
072224284245\r
16/07/2025	01380	\r
061114192142\r
13/07/2025	01379	\r
091722273536\r
11/07/2025	01378	\r
112022244345\r
09/07/2025	01377	\r
070830323344\r
06/07/2025	01376	\r
050813233645\r
04/07/2025	01375	\r
070921294145\r
02/07/2025	01374	\r
121621283441\r
29/06/2025	01373	\r
102325262728\r
27/06/2025	01372	\r
091426304445\r
25/06/2025	01371	\r
081026293539\r
22/06/2025	01370	\r
010914203441\r
20/06/2025	01369	\r
020818222629\r
18/06/2025	01368	\r
192324263641\r
15/06/2025	01367	\r
151622232932\r
13/06/2025	01366	\r
011319283036\r
11/06/2025	01365	\r
101322274145\r
08/06/2025	01364	\r
061718193137\r
06/06/2025	01363	\r
242635394145\r
04/06/2025	01362	\r
112326272932\r
01/06/2025	01361	\r
092429374244\r
30/05/2025	01360	\r
040712353741\r
28/05/2025	01359	\r
172223283141\r
25/05/2025	01358	\r
051423242844\r
23/05/2025	01357	\r
020415162943\r
21/05/2025	01356	\r
021314212430\r
18/05/2025	01355	\r
060717273042\r
16/05/2025	01354	\r
050914223244\r
14/05/2025	01353	\r
192427374445\r
11/05/2025	01352	\r
131517222843\r
09/05/2025	01351	\r
010709344042\r
07/05/2025	01350	\r
082728313440\r
04/05/2025	01349	\r
060708091229\r
02/05/2025	01348	\r
030732374245\r
30/04/2025	01347	\r
011726333644\r
27/04/2025	01346	\r
081131353645\r
25/04/2025	01345	\r
040809102034\r
23/04/2025	01344	\r
071223344243\r
20/04/2025	01343	\r
050714262944\r
18/04/2025	01342	\r
052021222944\r
16/04/2025	01341	\r
050812162832\r
13/04/2025	01340	\r
131418253032\r
11/04/2025	01339	\r
011314263743\r
09/04/2025	01338	\r
050811224144\r
06/04/2025	01337	\r
030506131822\r
04/04/2025	01336	\r
021324252838\r
02/04/2025	01335	\r
081415223134\r
30/03/2025	01334	\r
141533384245\r
28/03/2025	01333	\r
050722282934\r
26/03/2025	01332	\r
172425303539\r
23/03/2025	01331	\r
050608093645\r
21/03/2025	01330	\r
313234414245\r
19/03/2025	01329	\r
122327282943\r
16/03/2025	01328	\r
021214163845\r
14/03/2025	01327	\r
071113162830\r
12/03/2025	01326	\r
192630323642\r
09/03/2025	01325	\r
101130334445\r
07/03/2025	01324	\r
081112202532\r
05/03/2025	01323	\r
102232374143\r
02/03/2025	01322	\r
082430334245\r
28/02/2025	01321	\r
101114162129\r
26/02/2025	01320	\r
021315161820\r
23/02/2025	01319	\r
101215172433\r
21/02/2025	01318	\r
040919203042\r
19/02/2025	01317	\r
010610112529\r
16/02/2025	01316	\r
111926283540\r
14/02/2025	01315	\r
060810272832\r
12/02/2025	01314	\r
071931394243\r
09/02/2025	01313	\r
081622273134\r
07/02/2025	01312	\r
040525273539\r
05/02/2025	01311	\r
040609142541\r
02/02/2025	01310	\r
152022293236\r
31/01/2025	01309	\r
021516324245\r
26/01/2025	01308	\r
050809112029\r
24/01/2025	01307	\r
010711223134\r
22/01/2025	01306	\r
032126293233\r
19/01/2025	01305	\r
050610193238\r
17/01/2025	01304	\r
021222313435\r
15/01/2025	01303	\r
020608102333\r
12/01/2025	01302	\r
020912144144\r
10/01/2025	01301	\r
020408284244\r
08/01/2025	01300	\r
020317333738\r
05/01/2025	01299	\r
020715374142\r
03/01/2025	01298	\r
061221273441\r
01/01/2025	01297	\r
142025283640\r
29/12/2024	01296	\r
050819313443\r
27/12/2024	01295	\r
011013242533\r
25/12/2024	01294	\r
081320252839\r
22/12/2024	01293	\r
151624273144\r
20/12/2024	01292	\r
060912212833\r
18/12/2024	01291	\r
030712162634\r
15/12/2024	01290	\r
011020222336\r
13/12/2024	01289	\r
030729363744\r
11/12/2024	01288	\r
021017232933\r
08/12/2024	01287	\r
011324262737\r
06/12/2024	01286	\r
081418263442\r
04/12/2024	01285	\r
071419243436\r
01/12/2024	01284	\r
151725293335\r
29/11/2024	01283	\r
121533353745\r
27/11/2024	01282	\r
062124314244\r
24/11/2024	01281	\r
051415213336\r
22/11/2024	01280	\r
011415193840\r
20/11/2024	01279	\r
041624293137\r
17/11/2024	01278	\r
111729313842\r
15/11/2024	01277	\r
081331363740\r
13/11/2024	01276	\r
032328353942\r
10/11/2024	01275	\r
030711121340\r
08/11/2024	01274	\r
111518273437\r
06/11/2024	01273	\r
010203112537\r
03/11/2024	01272	\r
010405162022\r
01/11/2024	01271	\r
202223323540\r
30/10/2024	01270	\r
041320293237\r
27/10/2024	01269	\r
182128293345\r
25/10/2024	01268	\r
031031323440\r
23/10/2024	01267	\r
222728313744\r
20/10/2024	01266	\r
062324252634\r
18/10/2024	01265	\r
131920222437\r
16/10/2024	01264	\r
041419232437\r
13/10/2024	01263	\r
071013172145\r
11/10/2024	01262	\r
111926282943\r
09/10/2024	01261	\r
141820223445\r
06/10/2024	01260	\r
071433364243\r
04/10/2024	01259	\r
081021323944\r
02/10/2024	01258	\r
050611233136\r
29/09/2024	01257	\r
030716174142\r
27/09/2024	01256	\r
010618253944\r
25/09/2024	01255	\r
102325273137\r
22/09/2024	01254	\r
202328364042\r
20/09/2024	01253	\r
131419203033\r
18/09/2024	01252	\r
040827283536\r
15/09/2024	01251	\r
031128323335\r
13/09/2024	01250	\r
061227344142\r
11/09/2024	01249	\r
061119233437\r
08/09/2024	01248	\r
030810263437\r
06/09/2024	01247	\r
052528323641\r
04/09/2024	01246	\r
020715182433\r
01/09/2024	01245	\r
303133384243\r
30/08/2024	01244	\r
021519263436\r
28/08/2024	01243	\r
040517253941\r
25/08/2024	01242	\r
061015174042\r
23/08/2024	01241	\r
071326283541\r
21/08/2024	01240	\r
070809152230\r
18/08/2024	01239	\r
041328333538\r
16/08/2024	01238	\r
162223303441\r
14/08/2024	01237	\r
010609214344\r
11/08/2024	01236	\r
171819333537\r
09/08/2024	01235	\r
061415242639\r
07/08/2024	01234	\r
111922294044\r
04/08/2024	01233	\r
010416182032\r
02/08/2024	01232	\r
091419343741\r
31/07/2024	01231	\r
020412161842\r
28/07/2024	01230	\r
011321253139\r
26/07/2024	01229	\r
182028313945\r
24/07/2024	01228	\r
070820273234\r
21/07/2024	01227	\r
091023252838\r
19/07/2024	01226	\r
011020253435\r
17/07/2024	01225	\r
091011162130\r
14/07/2024	01224	\r
091833373843\r
12/07/2024	01223	\r
111725262829\r
10/07/2024	01222	\r
232436374045\r
07/07/2024	01221	\r
040822232645\r
05/07/2024	01220	\r
042333384044\r
03/07/2024	01219	\r
111824343843\r
30/06/2024	01218	\r
052325283043\r
28/06/2024	01217	\r
040616324144\r
26/06/2024	01216	\r
081029303340\r
23/06/2024	01215	\r
091119293144\r
21/06/2024	01214	\r
030711161935\r
19/06/2024	01213	\r
081217232627\r
16/06/2024	01212	\r
031617182537\r
14/06/2024	01211	\r
102425263041\r
12/06/2024	01210	\r
010208132634\r
09/06/2024	01209	\r
040528323742\r
07/06/2024	01208	\r
151924252739\r
05/06/2024	01207	\r
112528333445\r
02/06/2024	01206	\r
020713232545\r
31/05/2024	01205	\r
040815233140\r
29/05/2024	01204	\r
042125273539\r
26/05/2024	01203	\r
040911141927\r
24/05/2024	01202	\r
021415172340\r
22/05/2024	01201	\r
020310224143\r
19/05/2024	01200	\r
051925353739\r
17/05/2024	01199	\r
082227293943\r
15/05/2024	01198	\r
031113212434\r
12/05/2024	01197	\r
030506093245\r
10/05/2024	01196	\r
121331384243\r
08/05/2024	01195	\r
021013223034\r
05/05/2024	01194	\r
101214162139\r
03/05/2024	01193	\r
011314212743\r
01/05/2024	01192	\r
070917202529\r
28/04/2024	01191	\r
011314222337\r
26/04/2024	01190	\r
020325343538\r
24/04/2024	01189	\r
072130333839\r
21/04/2024	01188	\r
072136384045\r
19/04/2024	01187	\r
020320213233\r
17/04/2024	01186	\r
091626273241\r
14/04/2024	01185	\r
071216294245\r
12/04/2024	01184	\r
061718264345\r
10/04/2024	01183	\r
021030333440\r
07/04/2024	01182	\r
031115172435\r
05/04/2024	01181	\r
141822293637\r
03/04/2024	01180	\r
071114222934\r
31/03/2024	01179	\r
051213174041\r
29/03/2024	01178	\r
040725343538\r
27/03/2024	01177	\r
062931354244\r
24/03/2024	01176	\r
011422283242\r
22/03/2024	01175	\r
050611202445\r
20/03/2024	01174	\r
081426284345\r
17/03/2024	01173	\r
010305263042\r
15/03/2024	01172	\r
091116293133\r
13/03/2024	01171	\r
011325303440\r
10/03/2024	01170	\r
041219233641\r
08/03/2024	01169	\r
022628404145\r
06/03/2024	01168	\r
111534394143\r
03/03/2024	01167	\r
031017202227\r
01/03/2024	01166	\r
202224262837\r
28/02/2024	01165	\r
011021253239\r
25/02/2024	01164	\r
050710121526\r
23/02/2024	01163	\r
041719272836\r
21/02/2024	01162	\r
020814192442\r
18/02/2024	01161	\r
051920212440\r
16/02/2024	01160	\r
061016204042\r
14/02/2024	01159	\r
080911124044\r
11/02/2024	01158	\r
071831333541\r
07/02/2024	01157	\r
172124253942\r
04/02/2024	01156	\r
091521293339\r
02/02/2024	01155	\r
011529313234\r
31/01/2024	01154	\r
091115353841\r
28/01/2024	01153	\r
032325293641\r
26/01/2024	01152	\r
081922273135\r
24/01/2024	01151	\r
072730363945\r
21/01/2024	01150	\r
112022232631\r
19/01/2024	01149	\r
081520244344\r
17/01/2024	01148	\r
141921364344\r
14/01/2024	01147	\r
020819202442\r
12/01/2024	01146	\r
101120273943\r
10/01/2024	01145	\r
101218192943\r
07/01/2024	01144	\r
030415183645\r
05/01/2024	01143	\r
091629313342\r
03/01/2024	01142	\r
091419202940\r
31/12/2023	01141	\r
131423253444\r
29/12/2023	01140	\r
162022353739\r
27/12/2023	01139	\r
081623343639\r
24/12/2023	01138	\r
010205244043\r
22/12/2023	01137	\r
021214163438\r
20/12/2023	01136	\r
051516212232\r
17/12/2023	01135	\r
030718203133\r
15/12/2023	01134	\r
010510112040\r
13/12/2023	01133	\r
030711202844\r
10/12/2023	01132	\r
091011174144\r
08/12/2023	01131	\r
111516174243\r
06/12/2023	01130	\r
181920294142\r
03/12/2023	01129	\r
121416212932\r
01/12/2023	01128	\r
051014212732\r
29/11/2023	01127	\r
092224323839\r
26/11/2023	01126	\r
040615232536\r
24/11/2023	01125	\r
051822344145\r
22/11/2023	01124	\r
151820233739\r
19/11/2023	01123	\r
010319202634\r
17/11/2023	01122	\r
162025263641\r
15/11/2023	01121	\r
020312163037\r
12/11/2023	01120	\r
020410152731\r
10/11/2023	01119	\r
010410131444\r
08/11/2023	01118	\r
072023273133\r
05/11/2023	01117	\r
011316182325\r
03/11/2023	01116	\r
020709132238\r
01/11/2023	01115	\r
010315162328\r
29/10/2023	01114	\r
050715213245\r
27/10/2023	01113	\r
071014212637\r
25/10/2023	01112	\r
040613253141\r
22/10/2023	01111	\r
101314193540\r
20/10/2023	01110	\r
041621242637\r
18/10/2023	01109	\r
020718202429\r
15/10/2023	01108	\r
040509273439\r
13/10/2023	01107	\r
011116394045\r
11/10/2023	01106	\r
051030404445\r
08/10/2023	01105	\r
041622283339\r
06/10/2023	01104	\r
181924283340\r
04/10/2023	01103	\r
071721324045\r
01/10/2023	01102	\r
021113164143\r
29/09/2023	01101	\r
020824273043\r
27/09/2023	01100	\r
031222303739\r
24/09/2023	01099	\r
040823273036\r
22/09/2023	01098	\r
021617182023\r
20/09/2023	01097	\r
030620394041\r
17/09/2023	01096	\r
061015363943\r
15/09/2023	01095	\r
020305071038\r
13/09/2023	01094	\r
020407091213\r
10/09/2023	01093	\r
040510182740\r
08/09/2023	01092	\r
060814293942\r
06/09/2023	01091	\r
030412181929\r
03/09/2023	01090	\r
013338394445\r
01/09/2023	01089	\r
091416192841\r
30/08/2023	01088	\r
131720283033\r
27/08/2023	01087	\r
242730374445\r
25/08/2023	01086	\r
081830323845\r
23/08/2023	01085	\r
051418192931\r
20/08/2023	01084	\r
070822233042\r
18/08/2023	01083	\r
121921223438\r
16/08/2023	01082	\r
050725313941\r
13/08/2023	01081	\r
091523333540\r
11/08/2023	01080	\r
162126293045\r
09/08/2023	01079	\r
182230313941\r
06/08/2023	01078	\r
041519253038\r
04/08/2023	01077	\r
021222384144\r
02/08/2023	01076	\r
042127383944\r
30/07/2023	01075	\r
031723334245\r
28/07/2023	01074	\r
072728303135\r
26/07/2023	01073	\r
041318212937\r
23/07/2023	01072	\r
141723323343\r
21/07/2023	01071	\r
092031333645\r
19/07/2023	01070	\r
061019374345\r
16/07/2023	01069	\r
010716182129\r
14/07/2023	01068	\r
040513192737\r
12/07/2023	01067	\r
192427313343\r
09/07/2023	01066	\r
141627283341\r
07/07/2023	01065	\r
050912203742\r
05/07/2023	01064	\r
011224273644\r
02/07/2023	01063	\r
030508173741\r
30/06/2023	01062	\r
020520233138\r
28/06/2023	01061	\r
040824314245\r
25/06/2023	01060	\r
040607252630\r
23/06/2023	01059	\r
101415202445\r
21/06/2023	01058	\r
071319353738\r
18/06/2023	01057	\r
030408182133\r
16/06/2023	01056	\r
242632373841\r
14/06/2023	01055	\r
022831374144\r
11/06/2023	01054	\r
051822404144\r
09/06/2023	01053	\r
151623254041\r
07/06/2023	01052	\r
010714163444\r
04/06/2023	01051	\r
031519353643\r
02/06/2023	01050	\r
031114192143\r
31/05/2023	01049	\r
040910224144\r
28/05/2023	01048	\r
061319203744\r
26/05/2023	01047	\r
081019253544\r
24/05/2023	01046	\r
091115283344\r
21/05/2023	01045	\r
081017192441\r
19/05/2023	01044	\r
030910273538\r
17/05/2023	01043	\r
020613202844\r
14/05/2023	01042	\r
070813374244\r
12/05/2023	01041	\r
020608091527\r
10/05/2023	01040	\r
070809131527\r
07/05/2023	01039	\r
043031333545\r
05/05/2023	01038	\r
222831353638\r
03/05/2023	01037	\r
182328293944\r
30/04/2023	01036	\r
070923243336\r
28/04/2023	01035	\r
051125334244\r
26/04/2023	01034	\r
010407093437\r
23/04/2023	01033	\r
010222303742\r
21/04/2023	01032	\r
020407102044\r
19/04/2023	01031	\r
102737404243\r
16/04/2023	01030	\r
081720253336\r
14/04/2023	01029	\r
081623273241\r
12/04/2023	01028	\r
040727283243\r
09/04/2023	01027	\r
121525303439\r
07/04/2023	01026	\r
091422293941\r
05/04/2023	01025	\r
040812151943\r
02/04/2023	01024	\r
022436384243\r
31/03/2023	01023	\r
010910153042\r
29/03/2023	01022	\r
030612282943\r
26/03/2023	01021	\r
061618253445\r
24/03/2023	01020	\r
061415182441\r
22/03/2023	01019	\r
050810151741\r
19/03/2023	01018	\r
020710212835\r
17/03/2023	01017	\r
050712222633\r
15/03/2023	01016	\r
111923283435\r
12/03/2023	01015	\r
102829313337\r
10/03/2023	01014	\r
030513223644\r
08/03/2023	01013	\r
101322252836\r
05/03/2023	01012	\r
091124313644\r
03/03/2023	01011	\r
102226273343\r
01/03/2023	01010	\r
131429333843\r
26/02/2023	01009	\r
040916262842\r
24/02/2023	01008	\r
011016223544\r
22/02/2023	01007	\r
081622232838\r
19/02/2023	01006	\r
022022282938\r
17/02/2023	01005	\r
010510132325\r
15/02/2023	01004	\r
010208202431\r
12/02/2023	01003	\r
030511232442\r
10/02/2023	01002	\r
011123273339\r
08/02/2023	01001	\r
061820222634\r
05/02/2023	01000	\r
131523293134\r
03/02/2023	00999	\r
041116303343\r
01/02/2023	00998	\r
162127293444\r
29/01/2023	00997	\r
052126273233\r
27/01/2023	00996	\r
101321294143\r
25/01/2023	00995	\r
121418222831\r
20/01/2023	00994	\r
030713293244\r
15/01/2023	00993	\r
080915212645\r
13/01/2023	00992	\r
031114202642\r
11/01/2023	00991	\r
011822333443\r
08/01/2023	00990	\r
112932394043\r
06/01/2023	00989	\r
020716253538\r
04/01/2023	00988	\r
030507373942\r
01/01/2023	00987	\r
162026303240\r
30/12/2022	00986	\r
032431353942\r
28/12/2022	00985	\r
040510213337\r
25/12/2022	00984	\r
151721283743\r
23/12/2022	00983	\r
021421223543\r
21/12/2022	00982	\r
081220263537\r
18/12/2022	00981	\r
021213333642\r
16/12/2022	00980	\r
061922263839\r
14/12/2022	00979	\r
132935373841\r
11/12/2022	00978	\r
091116172233\r
09/12/2022	00977	\r
042325304041\r
07/12/2022	00976	\r
081119242642\r
04/12/2022	00975	\r
040507092739\r
02/12/2022	00974	\r
021821243844\r
30/11/2022	00973	\r
071520253237\r
27/11/2022	00972	\r
012627353643\r
25/11/2022	00971	\r
142024303541\r
23/11/2022	00970	\r
041315203738\r
20/11/2022	00969	\r
010414222440\r
18/11/2022	00968	\r
151622252933\r
16/11/2022	00967	\r
020312323544\r
13/11/2022	00966	\r
030427324043\r
11/11/2022	00965	\r
020309151743\r
09/11/2022	00964	\r
070916203032\r
06/11/2022	00963	\r
081012141731\r
04/11/2022	00962	\r
091316243345\r
02/11/2022	00961	\r
021723273742\r
30/10/2022	00960	\r
152731363841\r
28/10/2022	00959	\r
162122334245\r
26/10/2022	00958	\r
020310153136\r
23/10/2022	00957	\r
021118333645\r
21/10/2022	00956	\r
101617183442\r
19/10/2022	00955	\r
010307102129\r
16/10/2022	00954	\r
020519263840\r
14/10/2022	00953	\r
010622253034\r
12/10/2022	00952	\r
010713162735\r
09/10/2022	00951	\r
131520253543\r
07/10/2022	00950	\r
182029343638\r
05/10/2022	00949	\r
091823242934\r
02/10/2022	00948	\r
031728303132\r
30/09/2022	00947	\r
041119203541\r
28/09/2022	00946	\r
040507242730\r
25/09/2022	00945	\r
030508313334\r
23/09/2022	00944	\r
011221283044\r
21/09/2022	00943	\r
051014254245\r
18/09/2022	00942	\r
030510172529\r
16/09/2022	00941	\r
022635414243\r
14/09/2022	00940	\r
031215202445\r
11/09/2022	00939	\r
041520314344\r
09/09/2022	00938	\r
040613142839\r
07/09/2022	00937	\r
080910203538\r
04/09/2022	00936	\r
051719273539\r
02/09/2022	00935	\r
020314213133\r
31/08/2022	00934	\r
041028293134\r
28/08/2022	00933	\r
081631373941\r
26/08/2022	00932	\r
033031323645\r
24/08/2022	00931	\r
122021232734\r
21/08/2022	00930	\r
051921232836\r
19/08/2022	00929	\r
252633394143\r
17/08/2022	00928	\r
232935373945\r
14/08/2022	00927	\r
091321243435\r
12/08/2022	00926	\r
050716203641\r
10/08/2022	00925	\r
040810152631\r
07/08/2022	00924	\r
060910132427\r
05/08/2022	00923	\r
101314323742\r
03/08/2022	00922	\r
051430363842\r
31/07/2022	00921	\r
030815164042\r
29/07/2022	00920	\r
050711203137\r
27/07/2022	00919	\r
091518223241\r
24/07/2022	00918	\r
041117293044\r
22/07/2022	00917	\r
041018223137\r
20/07/2022	00916	\r
050620222639\r
17/07/2022	00915	\r
071320232729\r
15/07/2022	00914	\r
043035394243\r
13/07/2022	00913	\r
040921283537\r
10/07/2022	00912	\r
122329363741\r
08/07/2022	00911	\r
060712182143\r
06/07/2022	00910	\r
041214154142\r
03/07/2022	00909	\r
081417202140\r
01/07/2022	00908	\r
172630313339\r
29/06/2022	00907	\r
011920273032\r
26/06/2022	00906	\r
030708182736\r
24/06/2022	00905	\r
071618323444\r
22/06/2022	00904	\r
032023303335\r
19/06/2022	00903	\r
012425313940\r
17/06/2022	00902	\r
050826293544\r
15/06/2022	00901	\r
010612203639\r
12/06/2022	00900	\r
061419224042\r
10/06/2022	00899	\r
102325263041\r
08/06/2022	00898	\r
021013152236\r
05/06/2022	00897	\r
060821283035\r
03/06/2022	00896	\r
050834383941\r
01/06/2022	00895	\r
061021232839\r
29/05/2022	00894	\r
020619243042\r
27/05/2022	00893	\r
162123273541\r
25/05/2022	00892	\r
192627394445\r
22/05/2022	00891	\r
010710243340\r
20/05/2022	00890	\r
121734394445\r
18/05/2022	00889	\r
031723374042\r
15/05/2022	00888	\r
052021313437\r
13/05/2022	00887	\r
070818294144\r
11/05/2022	00886	\r
020607183441\r
08/05/2022	00885	\r
041220253537\r
06/05/2022	00884	\r
010315163443\r
04/05/2022	00883	\r
010423283338\r
01/05/2022	00882	\r
082126353742\r
29/04/2022	00881	\r
051216252632\r
27/04/2022	00880	\r
030914172732\r
24/04/2022	00879	\r
091223303240\r
22/04/2022	00878	\r
111315182436\r
20/04/2022	00877	\r
010817212737\r
17/04/2022	00876	\r
051315283840\r
15/04/2022	00875	\r
091821253544\r
13/04/2022	00874	\r
010720254041\r
10/04/2022	00873	\r
041728303842\r
08/04/2022	00872	\r
021316192036\r
06/04/2022	00871	\r
131719253245\r
03/04/2022	00870	\r
051120264043\r
01/04/2022	00869	\r
021925324144\r
30/03/2022	00868	\r
011226283945\r
27/03/2022	00867	\r
081721394445\r
25/03/2022	00866	\r
011213272935\r
23/03/2022	00865	\r
020937384043\r
20/03/2022	00864	\r
010910122244\r
18/03/2022	00863	\r
061015294142\r
16/03/2022	00862	\r
101114243145\r
13/03/2022	00861	\r
010519202338\r
11/03/2022	00860	\r
062023293445\r
09/03/2022	00859	\r
031535394043\r
06/03/2022	00858	\r
111621333442\r
04/03/2022	00857	\r
031921242738\r
02/03/2022	00856	\r
071013202134\r
27/02/2022	00855	\r
102025273845\r
25/02/2022	00854	\r
101330333941\r
23/02/2022	00853	\r
021618192429\r
20/02/2022	00852	\r
040616304344\r
18/02/2022	00851	\r
031420262836\r
16/02/2022	00850	\r
020508162242\r
13/02/2022	00849	\r
142122242845\r
11/02/2022	00848	\r
101119384144\r
09/02/2022	00847	\r
032027374445\r
06/02/2022	00846	\r
050921243439\r
04/02/2022	00845	\r
111618384043\r
02/02/2022	00844	\r
050614203138\r
30/01/2022	00843	\r
010722262841\r
28/01/2022	00842	\r
040612262739\r
26/01/2022	00841	\r
051115182743\r
23/01/2022	00840	\r
132024323440\r
21/01/2022	00839	\r
011317242742\r
19/01/2022	00838	\r
142125343739\r
16/01/2022	00837	\r
010304053233\r
14/01/2022	00836	\r
051427303845\r
12/01/2022	00835	\r
030613153644\r
09/01/2022	00834	\r
060711223541\r
07/01/2022	00833	\r
101324283844\r
05/01/2022	00832	\r
010308093540\r
02/01/2022	00831	\r
111730364145\r
31/12/2021	00830	\r
020512334145\r
29/12/2021	00829	\r
052733343840\r
26/12/2021	00828	\r
041116243544\r
24/12/2021	00827	\r
031725263638\r
22/12/2021	00826	\r
081617232838\r
19/12/2021	00825	\r
121524303645\r
17/12/2021	00824	\r
081516212533\r
15/12/2021	00823	\r
031829303941\r
12/12/2021	00822	\r
162129404143\r
10/12/2021	00821	\r
010417192442\r
08/12/2021	00820	\r
020316192234\r
05/12/2021	00819	\r
030506313435\r
03/12/2021	00818	\r
101429373840\r
01/12/2021	00817	\r
080930313845\r
28/11/2021	00816	\r
131726273137\r
26/11/2021	00815	\r
041825293234\r
24/11/2021	00814	\r
021018233436\r
21/11/2021	00813	\r
011229404445\r
19/11/2021	00812	\r
091026283943\r
17/11/2021	00811	\r
041525263235\r
14/11/2021	00810	\r
030518284243\r
12/11/2021	00809	\r
111418243537\r
10/11/2021	00808	\r
171819202744\r
07/11/2021	00807	\r
052024253536\r
05/11/2021	00806	\r
101636404142\r
03/11/2021	00805	\r
031315232444\r
31/10/2021	00804	\r
091417183641\r
29/10/2021	00803	\r
171922313234\r
27/10/2021	00802	\r
131726293339\r
24/10/2021	00801	\r
062931323944\r
22/10/2021	00800	\r
030506092843\r
20/10/2021	00799	\r
050933404145\r
17/10/2021	00798	\r
041221222740\r
15/10/2021	00797	\r
051317202945\r
13/10/2021	00796	\r
203437394142\r
10/10/2021	00795	\r
032526294042\r
08/10/2021	00794	\r
041318233343\r
06/10/2021	00793	\r
091115203236\r
03/10/2021	00792	\r
061228303942\r
01/10/2021	00791	\r
111517272845\r
29/09/2021	00790	\r
061516273642\r
26/09/2021	00789	\r
132734353641\r
24/09/2021	00788	\r
010407141641\r
22/09/2021	00787	\r
051019223645\r
19/09/2021	00786	\r
062428313643\r
17/09/2021	00785	\r
061015373944\r
15/09/2021	00784	\r
111417242935\r
12/09/2021	00783	\r
040821293345\r
10/09/2021	00782	\r
101622364344\r
08/09/2021	00781	\r
041828323640\r
05/09/2021	00780	\r
151825272934\r
03/09/2021	00779	\r
061118233244\r
01/09/2021	00778	\r
061333344045\r
29/08/2021	00777	\r
011821252735\r
27/08/2021	00776	\r
041011152437\r
25/08/2021	00775	\r
010305172233\r
22/08/2021	00774	\r
060718254043\r
20/08/2021	00773	\r
040817273236\r
18/08/2021	00772	\r
101619272836\r
23/07/2021	00771	\r
192631334142\r
21/07/2021	00770	\r
081012293437\r
18/07/2021	00769	\r
030819212536\r
16/07/2021	00768	\r
010918264145\r
14/07/2021	00767	\r
041122293743\r
11/07/2021	00766	\r
020815171930\r
09/07/2021	00765	\r
040917182832\r
07/07/2021	00764	\r
010613303443\r
04/07/2021	00763	\r
031415212637\r
02/07/2021	00762	\r
011415183245\r
30/06/2021	00761	\r
020506081032\r
27/06/2021	00760	\r
051029374244\r
25/06/2021	00759	\r
030506232439\r
23/06/2021	00758	\r
040720283341\r
20/06/2021	00757	\r
102427424345\r
18/06/2021	00756	\r
101128294042\r
16/06/2021	00755	\r
111924283139\r
13/06/2021	00754	\r
031012133644\r
11/06/2021	00753	\r
081213143240\r
09/06/2021	00752	\r
020718202436\r
06/06/2021	00751	\r
050710131442\r
04/06/2021	00750	\r
192431323536\r
02/06/2021	00749	\r
102022263142\r
30/05/2021	00748	\r
071019304045\r
28/05/2021	00747	\r
021533414445\r
26/05/2021	00746	\r
011022363845\r
23/05/2021	00745	\r
111422262944\r
21/05/2021	00744	\r
042837384042\r
19/05/2021	00743	\r
031223293334\r
16/05/2021	00742	\r
132333374043\r
14/05/2021	00741	\r
031116202430\r
12/05/2021	00740	\r
091522273442\r
09/05/2021	00739	\r
010716242737\r
07/05/2021	00738	\r
102021273334\r
05/05/2021	00737	\r
031420223744\r
02/05/2021	00736	\r
070830354044\r
30/04/2021	00735	\r
030420213641\r
28/04/2021	00734	\r
213940414345\r
25/04/2021	00733	\r
081921283244\r
23/04/2021	00732	\r
131618223439\r
21/04/2021	00731	\r
031219273235\r
18/04/2021	00730	\r
070915232627\r
16/04/2021	00729	\r
080911283039\r
14/04/2021	00728	\r
111216183335\r
11/04/2021	00727	\r
032327323439\r
09/04/2021	00726	\r
030408171937\r
07/04/2021	00725	\r
131519253334\r
04/04/2021	00724	\r
052027303843\r
02/04/2021	00723	\r
010509164244\r
31/03/2021	00722	\r
020406364142\r
28/03/2021	00721	\r
232640414344\r
26/03/2021	00720	\r
021115182342\r
24/03/2021	00719	\r
071423263739\r
21/03/2021	00718	\r
080911313639\r
19/03/2021	00717	\r
050624343637\r
17/03/2021	00716	\r
061126283641\r
14/03/2021	00715	\r
010911323442\r
12/03/2021	00714	\r
051117343842\r
10/03/2021	00713	\r
051415192533\r
07/03/2021	00712	\r
041225283345\r
05/03/2021	00711	\r
091113212741\r
03/03/2021	00710	\r
012028374044\r
28/02/2021	00709	\r
040525282942\r
26/02/2021	00708	\r
111319273741\r
24/02/2021	00707	\r
021319334043\r
21/02/2021	00706	\r
060722242737\r
19/02/2021	00705	\r
121922233444\r
17/02/2021	00704	\r
031821223644\r
14/02/2021	00703	\r
031318213944\r
10/02/2021	00702	\r
081318192124\r
07/02/2021	00701	\r
010407154142\r
05/02/2021	00700	\r
020831324244\r
03/02/2021	00699	\r
070914233541\r
31/01/2021	00698	\r
040607113441\r
29/01/2021	00697	\r
060708293539\r
27/01/2021	00696	\r
010711284144\r
24/01/2021	00695	\r
080923253132\r
22/01/2021	00694	\r
010607202843\r
20/01/2021	00693	\r
072029304045\r
17/01/2021	00692	\r
040532394042\r
15/01/2021	00691	\r
040610132643\r
13/01/2021	00690	\r
192021283341\r
10/01/2021	00689	\r
101122323843\r
08/01/2021	00688	\r
081922253235\r
06/01/2021	00687	\r
222730354045\r
03/01/2021	00686	\r
043134364043\r
01/01/2021	00685	\r
101624263032\r
30/12/2020	00684	\r
011320263537\r
27/12/2020	00683	\r
031117193439\r
25/12/2020	00682	\r
061215223339\r
23/12/2020	00681	\r
071117313540\r
20/12/2020	00680	\r
151828303444\r
18/12/2020	00679	\r
040914233238\r
16/12/2020	00678	\r
101122273641\r
13/12/2020	00677	\r
101220364144\r
11/12/2020	00676	\r
232425353739\r
09/12/2020	00675	\r
162427313643\r
06/12/2020	00674	\r
112124272937\r
04/12/2020	00673	\r
030533374143\r
02/12/2020	00672	\r
040507102539\r
29/11/2020	00671	\r
060714183743\r
27/11/2020	00670	\r
010912133743\r
25/11/2020	00669	\r
010507082540\r
22/11/2020	00668	\r
091617243240\r
20/11/2020	00667	\r
021724293137\r
18/11/2020	00666	\r
181921313944\r
15/11/2020	00665	\r
141621294041\r
13/11/2020	00664	\r
082223333436\r
11/11/2020	00663	\r
041012172035\r
08/11/2020	00662	\r
031214162333\r
06/11/2020	00661	\r
192430323637\r
04/11/2020	00660	\r
030811132638\r
01/11/2020	00659	\r
062127303244\r
30/10/2020	00658	\r
040514182343\r
28/10/2020	00657	\r
010407153545\r
25/10/2020	00656	\r
111930384145\r
23/10/2020	00655	\r
051016233445\r
21/10/2020	00654	\r
041126363841\r
18/10/2020	00653	\r
011425263040\r
16/10/2020	00652	\r
041416232427\r
14/10/2020	00651	\r
040723324344\r
11/10/2020	00650	\r
121828314045\r
09/10/2020	00649	\r
151923303339\r
07/10/2020	00648	\r
131525262834\r
04/10/2020	00647	\r
091619252639\r
02/10/2020	00646	\r
091121313237\r
30/09/2020	00645	\r
020531324244\r
27/09/2020	00644	\r
011226313738\r
25/09/2020	00643	\r
142022354445\r
23/09/2020	00642	\r
020817233041\r
20/09/2020	00641	\r
050709131516\r
18/09/2020	00640	\r
101921232733\r
16/09/2020	00639	\r
052029303840\r
13/09/2020	00638	\r
202328374044\r
11/09/2020	00637	\r
041113161733\r
09/09/2020	00636	\r
192134353639\r
06/09/2020	00635	\r
010619293144\r
04/09/2020	00634	\r
071620304041\r
02/09/2020	00633	\r
081014161824\r
30/08/2020	00632	\r
060818192933\r
28/08/2020	00631	\r
101114232737\r
26/08/2020	00630	\r
021824283542\r
23/08/2020	00629	\r
101419253639\r
21/08/2020	00628	\r
070826303743\r
19/08/2020	00627	\r
072036374345\r
16/08/2020	00626	\r
020506203339\r
14/08/2020	00625	\r
091821243441\r
12/08/2020	00624	\r
072134384344\r
09/08/2020	00623	\r
111314434445\r
07/08/2020	00622	\r
172635404344\r
05/08/2020	00621	\r
141819323338\r
02/08/2020	00620	\r
060912174142\r
31/07/2020	00619	\r
040919293641\r
29/07/2020	00618	\r
061426414243\r
26/07/2020	00617	\r
051521394345\r
24/07/2020	00616	\r
042531353941\r
22/07/2020	00615	\r
091318242642\r
19/07/2020	00614	\r
011314194245\r
17/07/2020	00613	\r
041018203245\r
15/07/2020	00612	\r
101118192045\r
12/07/2020	00611	\r
021521273135\r
10/07/2020	00610	\r
182022333539\r
08/07/2020	00609	\r
141517213138\r
05/07/2020	00608	\r
050810172231\r
03/07/2020	00607	\r
040517182236\r
01/07/2020	00606	\r
101314263233\r
28/06/2020	00605	\r
041524363741\r
26/06/2020	00604	\r
092327303841\r
24/06/2020	00603	\r
071718323940\r
21/06/2020	00602	\r
070913334044\r
19/06/2020	00601	\r
041217193245\r
17/06/2020	00600	\r
071628333445\r
14/06/2020	00599	\r
192224414445\r
12/06/2020	00598	\r
051622273031\r
10/06/2020	00597	\r
021123252635\r
07/06/2020	00596	\r
060711162344\r
05/06/2020	00595	\r
101322283843\r
03/06/2020	00594	\r
011517194043\r
31/05/2020	00593	\r
010613273540\r
29/05/2020	00592	\r
041023263537\r
27/05/2020	00591	\r
061529303742\r
24/05/2020	00590	\r
012930323435\r
22/05/2020	00589	\r
030819283541\r
20/05/2020	00588	\r
010815232539\r
17/05/2020	00587	\r
020421303337\r
15/05/2020	00586	\r
031213283336\r
13/05/2020	00585	\r
062021354045\r
10/05/2020	00584	\r
070923323337\r
08/05/2020	00583	\r
010307122225\r
06/05/2020	00582	\r
031825293044\r
03/05/2020	00581	\r
051829323844\r
01/05/2020	00580	\r
060716374044\r
29/04/2020	00579	\r
010811131532\r
26/04/2020	00578	\r
052530363741\r
24/04/2020	00577	\r
103137394043\r
29/03/2020	00576	\r
071023363944\r
27/03/2020	00575	\r
010610353645\r
25/03/2020	00574	\r
263133373845\r
22/03/2020	00573	\r
021019222429\r
20/03/2020	00572	\r
082329373944\r
18/03/2020	00571	\r
062130373845\r
15/03/2020	00570	\r
040711171931\r
13/03/2020	00569	\r
081320283545\r
11/03/2020	00568	\r
121629353744\r
08/03/2020	00567	\r
031317192143\r
06/03/2020	00566	\r
060910162642\r
04/03/2020	00565	\r
010717243541\r
01/03/2020	00564	\r
010607132639\r
28/02/2020	00563	\r
021923272938\r
26/02/2020	00562	\r
021012202439\r
23/02/2020	00561	\r
010616233442\r
21/02/2020	00560	\r
131522282941\r
19/02/2020	00559	\r
011623253038\r
16/02/2020	00558	\r
010414363741\r
14/02/2020	00557	\r
041424323643\r
12/02/2020	00556	\r
051316202435\r
09/02/2020	00555	\r
010418222635\r
07/02/2020	00554	\r
061115334044\r
05/02/2020	00553	\r
091924373845\r
02/02/2020	00552	\r
010416323538\r
31/01/2020	00551	\r
080920253040\r
29/01/2020	00550	\r
031016243944\r
26/01/2020	00549	\r
040509253337\r
22/01/2020	00548	\r
011516343642\r
19/01/2020	00547	\r
010419253539\r
17/01/2020	00546	\r
082628374042\r
15/01/2020	00545	\r
020819313844\r
12/01/2020	00544	\r
071217213545\r
10/01/2020	00543	\r
101824354143\r
08/01/2020	00542	\r
020410212543\r
05/01/2020	00541	\r
051112264445\r
03/01/2020	00540	\r
011517263244\r
01/01/2020	00539	\r
081023263738\r
29/12/2019	00538	\r
071221243543\r
27/12/2019	00537	\r
020710123343\r
25/12/2019	00536	\r
101825263643\r
22/12/2019	00535	\r
091011182236\r
20/12/2019	00534	\r
010916273845\r
18/12/2019	00533	\r
080912192225\r
15/12/2019	00532	\r
031315162236\r
13/12/2019	00531	\r
020809252640\r
11/12/2019	00530	\r
010208272939\r
08/12/2019	00529	\r
122030313444\r
06/12/2019	00528	\r
022026354345\r
04/12/2019	00527	\r
161924303235\r
01/12/2019	00526	\r
031416273135\r
29/11/2019	00525	\r
141516171934\r
27/11/2019	00524	\r
030513192033\r
24/11/2019	00523	\r
052124282934\r
22/11/2019	00522	\r
010910193038\r
20/11/2019	00521	\r
102122244344\r
17/11/2019	00520	\r
060714313944\r
15/11/2019	00519	\r
021327334041\r
13/11/2019	00518	\r
171924303140\r
10/11/2019	00517	\r
041421283236\r
08/11/2019	00516	\r
041619303244\r
06/11/2019	00515	\r
031522233843\r
03/11/2019	00514	\r
283032384445\r
01/11/2019	00513	\r
061120303740\r
30/10/2019	00512	\r
020508122938\r
27/10/2019	00511	\r
011929304042\r
25/10/2019	00510	\r
040709223237\r
23/10/2019	00509	\r
020921233241\r
20/10/2019	00508	\r
010308153840\r
18/10/2019	00507	\r
041415222839\r
16/10/2019	00506	\r
010423284142\r
13/10/2019	00505	\r
062228313740\r
11/10/2019	00504	\r
061214272836\r
09/10/2019	00503	\r
031221242832\r
06/10/2019	00502	\r
010617304445\r
04/10/2019	00501	\r
020924253036\r
02/10/2019	00500	\r
020607252841\r
29/09/2019	00499	\r
020912182123\r
27/09/2019	00498	\r
060911283744\r
25/09/2019	00497	\r
091422264445\r
22/09/2019	00496	\r
030621363839\r
20/09/2019	00495	\r
071224293145\r
18/09/2019	00494	\r
030913171920\r
15/09/2019	00493	\r
080928333543\r
13/09/2019	00492	\r
021517253038\r
11/09/2019	00491	\r
212529323435\r
08/09/2019	00490	\r
060911262836\r
06/09/2019	00489	\r
020413152631\r
04/09/2019	00488	\r
010911233037\r
01/09/2019	00487	\r
050714162940\r
30/08/2019	00486	\r
050622232544\r
28/08/2019	00485	\r
010412141930\r
25/08/2019	00484	\r
070815202431\r
23/08/2019	00483	\r
060712171924\r
21/08/2019	00482	\r
060817202131\r
18/08/2019	00481	\r
020718212433\r
16/08/2019	00480	\r
061415193139\r
14/08/2019	00479	\r
132022243334\r
11/08/2019	00478	\r
010407092531\r
09/08/2019	00477	\r
111926283042\r
07/08/2019	00476	\r
010513313243\r
04/08/2019	00475	\r
061021304345\r
02/08/2019	00474	\r
111820222526\r
31/07/2019	00473	\r
061215192545\r
28/07/2019	00472	\r
051416244243\r
26/07/2019	00471	\r
051416222533\r
24/07/2019	00470	\r
202225394445\r
21/07/2019	00469	\r
070810243344\r
19/07/2019	00468	\r
091223262843\r
17/07/2019	00467	\r
101116222835\r
14/07/2019	00466	\r
020307253334\r
12/07/2019	00465	\r
161824264044\r
10/07/2019	00464	\r
010206071627\r
07/07/2019	00463	\r
021821233031\r
05/07/2019	00462	\r
192130313743\r
03/07/2019	00461	\r
020725293945\r
30/06/2019	00460	\r
052022252832\r
28/06/2019	00459	\r
112537404145\r
26/06/2019	00458	\r
010509103341\r
23/06/2019	00457	\r
030811273236\r
21/06/2019	00456	\r
010419212339\r
19/06/2019	00455	\r
020411153540\r
16/06/2019	00454	\r
060719293136\r
14/06/2019	00453	\r
021216363745\r
12/06/2019	00452	\r
101121232637\r
09/06/2019	00451	\r
020622253536\r
07/06/2019	00450	\r
111315262741\r
05/06/2019	00449	\r
040822253739\r
02/06/2019	00448	\r
020512354143\r
31/05/2019	00447	\r
050607122330\r
29/05/2019	00446	\r
121819273542\r
26/05/2019	00445	\r
111214232932\r
24/05/2019	00444	\r
020331333540\r
22/05/2019	00443	\r
011316222335\r
19/05/2019	00442	\r
021119273042\r
17/05/2019	00441	\r
061618293943\r
15/05/2019	00440	\r
172829333435\r
12/05/2019	00439	\r
010813172143\r
10/05/2019	00438	\r
052325303538\r
08/05/2019	00437	\r
010708313445\r
05/05/2019	00436	\r
132730383941\r
03/05/2019	00435	\r
010614313544\r
01/05/2019	00434	\r
182324273341\r
28/04/2019	00433	\r
042428303343\r
26/04/2019	00432	\r
010214151630\r
24/04/2019	00431	\r
040712132045\r
21/04/2019	00430	\r
081113204143\r
19/04/2019	00429	\r
010405121721\r
17/04/2019	00428	\r
071121253044\r
14/04/2019	00427	\r
041320343537\r
12/04/2019	00426	\r
031215161744\r
10/04/2019	00425	\r
071114303542\r
07/04/2019	00424	\r
081026283234\r
05/04/2019	00423	\r
020725363843\r
03/04/2019	00422	\r
041118333445\r
31/03/2019	00421	\r
030519283138\r
29/03/2019	00420	\r
021926273037\r
27/03/2019	00419	\r
091222243042\r
24/03/2019	00418	\r
051721273440\r
22/03/2019	00417	\r
010306131841\r
20/03/2019	00416	\r
020717242937\r
17/03/2019	00415	\r
050616182442\r
15/03/2019	00414	\r
051015193842\r
13/03/2019	00413	\r
051624263444\r
10/03/2019	00412	\r
052431324245\r
08/03/2019	00411	\r
041420273243\r
06/03/2019	00410	\r
020714244041\r
03/03/2019	00409	\r
011317203045\r
01/03/2019	00408	\r
152329313843\r
27/02/2019	00407	\r
051215162535\r
24/02/2019	00406	\r
010713233242\r
22/02/2019	00405	\r
071018254445\r
20/02/2019	00404	\r
011015243745\r
17/02/2019	00403	\r
111214252931\r
15/02/2019	00402	\r
032226273044\r
13/02/2019	00401	\r
051118333741\r
10/02/2019	00400	\r
011117252935\r
08/02/2019	00399	\r
111233363943\r
06/02/2019	00398	\r
222425303338\r
03/02/2019	00397	\r
010205092324\r
01/02/2019	00396	\r
030406383943\r
30/01/2019	00395	\r
010406133741\r
27/01/2019	00394	\r
091112222729\r
25/01/2019	00393	\r
111314223038\r
23/01/2019	00392	\r
020913293340\r
20/01/2019	00391	\r
081621313538\r
18/01/2019	00390	\r
121519384045\r
16/01/2019	00389	\r
010814243140\r
13/01/2019	00388	\r
012021232633\r
11/01/2019	00387	\r
192122232544\r
09/01/2019	00386	\r
172728303341\r
06/01/2019	00385	\r
092233343544\r
04/01/2019	00384	\r
010814161922\r
02/01/2019	00383	\r
041432353640\r
30/12/2018	00382	\r
101931354244\r
28/12/2018	00381	\r
032224253137\r
26/12/2018	00380	\r
212834354144\r
23/12/2018	00379	\r
010310111644\r
21/12/2018	00378	\r
010716272934\r
19/12/2018	00377	\r
021011324044\r
16/12/2018	00376	\r
011422263542\r
14/12/2018	00375	\r
071620263034\r
12/12/2018	00374	\r
010311152730\r
09/12/2018	00373	\r
060826344041\r
07/12/2018	00372	\r
010607223139\r
05/12/2018	00371	\r
072829394245\r
02/12/2018	00370	\r
020412233745\r
30/11/2018	00369	\r
111823252835\r
28/11/2018	00368	\r
081320212528\r
25/11/2018	00367	\r
030511182429\r
23/11/2018	00366	\r
081012212540\r
21/11/2018	00365	\r
070916192433\r
18/11/2018	00364	\r
062728303744\r
16/11/2018	00363	\r
041218212541\r
14/11/2018	00362	\r
121424263040\r
11/11/2018	00361	\r
202326273234\r
09/11/2018	00360	\r
061828323435\r
07/11/2018	00359	\r
061822253137\r
04/11/2018	00358	\r
071213172530\r
02/11/2018	00357	\r
040611182425\r
31/10/2018	00356	\r
172226303335\r
28/10/2018	00355	\r
091819203145\r
26/10/2018	00354	\r
021831333641\r
24/10/2018	00353	\r
062634353942\r
21/10/2018	00352	\r
062224283037\r
19/10/2018	00351	\r
021430383945\r
17/10/2018	00350	\r
011214363943\r
14/10/2018	00349	\r
070809344043\r
12/10/2018	00348	\r
111220262842\r
10/10/2018	00347	\r
181922284142\r
07/10/2018	00346	\r
141831343944\r
05/10/2018	00345	\r
041217293544\r
03/10/2018	00344	\r
061219212545\r
30/09/2018	00343	\r
012024364345\r
28/09/2018	00342	\r
020611131538\r
26/09/2018	00341	\r
121927394245\r
23/09/2018	00340	\r
182732354144\r
21/09/2018	00339	\r
010311142329\r
19/09/2018	00338	\r
102022242742\r
16/09/2018	00337	\r
031317182334\r
14/09/2018	00336	\r
121617182634\r
12/09/2018	00335	\r
111213162931\r
09/09/2018	00334	\r
081418214445\r
07/09/2018	00333	\r
081011284245\r
05/09/2018	00332	\r
050622273437\r
02/09/2018	00331	\r
101213222640\r
31/08/2018	00330	\r
111930363840\r
29/08/2018	00329	\r
161724283036\r
26/08/2018	00328	\r
010311122236\r
24/08/2018	00327	\r
032225293340\r
22/08/2018	00326	\r
151718333444\r
19/08/2018	00325	\r
161828363745\r
17/08/2018	00324	\r
030822283342\r
15/08/2018	00323	\r
122425334044\r
12/08/2018	00322	\r
051617283138\r
10/08/2018	00321	\r
182224294145\r
08/08/2018	00320	\r
193437394144\r
05/08/2018	00319	\r
071018313943\r
03/08/2018	00318	\r
030810242728\r
01/08/2018	00317	\r
050629303738\r
29/07/2018	00316	\r
263132374345\r
27/07/2018	00315	\r
022132373842\r
25/07/2018	00314	\r
091618384145\r
22/07/2018	00313	\r
080924274045\r
20/07/2018	00312	\r
131416192023\r
18/07/2018	00311	\r
081014192634\r
15/07/2018	00310	\r
071520293138\r
13/07/2018	00309	\r
030809252728\r
11/07/2018	00308	\r
122628293943\r
08/07/2018	00307	\r
020708102844\r
06/07/2018	00306	\r
222633343842\r
04/07/2018	00305	\r
020327283443\r
01/07/2018	00304	\r
040715283437\r
29/06/2018	00303	\r
061822243639\r
27/06/2018	00302	\r
252729333738\r
24/06/2018	00301	\r
060823323341\r
22/06/2018	00300	\r
151920263439\r
20/06/2018	00299	\r
021822303243\r
17/06/2018	00298	\r
030506073440\r
15/06/2018	00297	\r
081113232428\r
13/06/2018	00296	\r
020417243140\r
10/06/2018	00295	\r
222535363839\r
08/06/2018	00294	\r
041332354042\r
06/06/2018	00293	\r
062022264344\r
03/06/2018	00292	\r
182024404245\r
01/06/2018	00291	\r
061419384344\r
30/05/2018	00290	\r
021719273136\r
27/05/2018	00289	\r
050917181922\r
25/05/2018	00288	\r
051422262939\r
23/05/2018	00287	\r
131625343741\r
20/05/2018	00286	\r
181925262939\r
18/05/2018	00285	\r
031824293035\r
16/05/2018	00284	\r
102123253538\r
13/05/2018	00283	\r
061116182741\r
11/05/2018	00282	\r
101126293338\r
09/05/2018	00281	\r
091520303133\r
06/05/2018	00280	\r
112628343637\r
04/05/2018	00279	\r
091825262729\r
02/05/2018	00278	\r
101122293740\r
29/04/2018	00277	\r
031022232543\r
27/04/2018	00276	\r
102024272829\r
25/04/2018	00275	\r
041517232943\r
22/04/2018	00274	\r
060722323639\r
20/04/2018	00273	\r
060914303342\r
18/04/2018	00272	\r
061628293944\r
15/04/2018	00271	\r
030913203034\r
13/04/2018	00270	\r
112224333843\r
11/04/2018	00269	\r
072023252639\r
08/04/2018	00268	\r
020511163034\r
06/04/2018	00267	\r
010708093640\r
04/04/2018	00266	\r
020306164144\r
01/04/2018	00265	\r
041224333943\r
30/03/2018	00264	\r
071118283443\r
28/03/2018	00263	\r
121831343542\r
25/03/2018	00262	\r
041013223842\r
23/03/2018	00261	\r
030612222635\r
21/03/2018	00260	\r
061938404144\r
18/03/2018	00259	\r
142124283140\r
16/03/2018	00258	\r
060813172034\r
14/03/2018	00257	\r
122123273134\r
11/03/2018	00256	\r
011419264142\r
09/03/2018	00255	\r
051013192544\r
07/03/2018	00254	\r
081925313740\r
04/03/2018	00253	\r
041119253240\r
02/03/2018	00252	\r
030715274145\r
28/02/2018	00251	\r
171921233640\r
25/02/2018	00250	\r
081012293042\r
23/02/2018	00249	\r
051619232937\r
21/02/2018	00248	\r
182324262933\r
18/02/2018	00247	\r
010514163638\r
14/02/2018	00246	\r
123132343543\r
11/02/2018	00245	\r
051927324145\r
09/02/2018	00244	\r
021014192337\r
07/02/2018	00243	\r
050718263036\r
04/02/2018	00242	\r
010513274045\r
02/02/2018	00241	\r
020714284245\r
31/01/2018	00240	\r
040709103040\r
28/01/2018	00239	\r
122627333637\r
26/01/2018	00238	\r
010918283644\r
24/01/2018	00237	\r
050624334245\r
21/01/2018	00236	\r
011011243237\r
19/01/2018	00235	\r
020427283136\r
17/01/2018	00234	\r
091012222741\r
14/01/2018	00233	\r
010610293241\r
12/01/2018	00232	\r
040817232734\r
10/01/2018	00231	\r
061821223745\r
07/01/2018	00230	\r
040611132431\r
05/01/2018	00229	\r
193034384244\r
03/01/2018	00228	\r
081419303335\r
31/12/2017	00227	\r
031314263034\r
29/12/2017	00226	\r
020817202939\r
27/12/2017	00225	\r
091319212730\r
24/12/2017	00224	\r
010509143031\r
22/12/2017	00223	\r
091317222633\r
20/12/2017	00222	\r
030825374042\r
17/12/2017	00221	\r
040716274041\r
15/12/2017	00220	\r
131417242843\r
13/12/2017	00219	\r
040719243238\r
10/12/2017	00218	\r
273639434445\r
08/12/2017	00217	\r
021115324044\r
06/12/2017	00216	\r
030729313443\r
03/12/2017	00215	\r
080915182730\r
01/12/2017	00214	\r
101930353945\r
29/11/2017	00213	\r
192326373841\r
26/11/2017	00212	\r
041217192334\r
24/11/2017	00211	\r
142432343645\r
22/11/2017	00210	\r
050609232735\r
19/11/2017	00209	\r
142030334143\r
17/11/2017	00208	\r
111318193145\r
15/11/2017	00207	\r
010915273343\r
12/11/2017	00206	\r
222637404244\r
10/11/2017	00205	\r
010419212435\r
08/11/2017	00204	\r
011823244041\r
05/11/2017	00203	\r
031738394144\r
03/11/2017	00202	\r
071720222944\r
01/11/2017	00201	\r
041225394244\r
29/10/2017	00200	\r
010528314445\r
27/10/2017	00199	\r
041013212238\r
25/10/2017	00198	\r
121723253438\r
22/10/2017	00197	\r
081416173142\r
20/10/2017	00196	\r
021825333642\r
18/10/2017	00195	\r
162432363740\r
15/10/2017	00194	\r
020914213540\r
13/10/2017	00193	\r
101320212536\r
11/10/2017	00192	\r
041114151926\r
08/10/2017	00191	\r
081624273539\r
06/10/2017	00190	\r
040618203045\r
04/10/2017	00189	\r
040509193744\r
01/10/2017	00188	\r
082327363743\r
29/09/2017	00187	\r
232830353742\r
27/09/2017	00186	\r
101933343545\r
24/09/2017	00185	\r
041011313639\r
22/09/2017	00184	\r
051621313741\r
20/09/2017	00183	\r
050713172333\r
17/09/2017	00182	\r
061115163740\r
15/09/2017	00181	\r
032435374043\r
13/09/2017	00180	\r
030819353840\r
10/09/2017	00179	\r
012223353642\r
08/09/2017	00178	\r
021517324144\r
06/09/2017	00177	\r
052024323642\r
03/09/2017	00176	\r
050626283543\r
01/09/2017	00175	\r
091013192341\r
30/08/2017	00174	\r
050811283541\r
27/08/2017	00173	\r
030716323639\r
25/08/2017	00172	\r
020712274044\r
23/08/2017	00171	\r
062527344243\r
20/08/2017	00170	\r
051518213745\r
18/08/2017	00169	\r
030418223437\r
16/08/2017	00168	\r
061115192241\r
13/08/2017	00167	\r
010306071618\r
11/08/2017	00166	\r
011219353641\r
09/08/2017	00165	\r
111922242531\r
06/08/2017	00164	\r
020910112143\r
04/08/2017	00163	\r
031213232637\r
02/08/2017	00162	\r
071017262843\r
30/07/2017	00161	\r
081724354144\r
28/07/2017	00160	\r
010409263539\r
26/07/2017	00159	\r
092627304044\r
23/07/2017	00158	\r
070913212839\r
21/07/2017	00157	\r
050609151932\r
19/07/2017	00156	\r
040713203544\r
16/07/2017	00155	\r
021027293739\r
14/07/2017	00154	\r
021319242533\r
12/07/2017	00153	\r
050914152642\r
09/07/2017	00152	\r
010914182528\r
07/07/2017	00151	\r
041922303435\r
05/07/2017	00150	\r
010416313740\r
02/07/2017	00149	\r
010507161944\r
30/06/2017	00148	\r
010710384042\r
28/06/2017	00147	\r
020621283940\r
25/06/2017	00146	\r
031433384244\r
23/06/2017	00145	\r
091021374042\r
21/06/2017	00144	\r
092629303537\r
18/06/2017	00143	\r
020812141626\r
16/06/2017	00142	\r
061017212738\r
14/06/2017	00141	\r
050815253135\r
11/06/2017	00140	\r
050611143233\r
09/06/2017	00139	\r
071519243242\r
07/06/2017	00138	\r
050613293544\r
04/06/2017	00137	\r
010923323435\r
02/06/2017	00136	\r
051316323941\r
31/05/2017	00135	\r
071316303744\r
28/05/2017	00134	\r
020717243144\r
26/05/2017	00133	\r
060825394045\r
24/05/2017	00132	\r
082025273033\r
21/05/2017	00131	\r
111417222742\r
19/05/2017	00130	\r
010818283033\r
17/05/2017	00129	\r
070811182342\r
14/05/2017	00128	\r
131517212540\r
12/05/2017	00127	\r
012735424345\r
10/05/2017	00126	\r
071721294044\r
07/05/2017	00125	\r
010728324445\r
05/05/2017	00124	\r
040912323643\r
03/05/2017	00123	\r
031920212545\r
30/04/2017	00122	\r
020608111225\r
28/04/2017	00121	\r
020911121523\r
26/04/2017	00120	\r
141617203539\r
23/04/2017	00119	\r
131722303143\r
21/04/2017	00118	\r
070815303239\r
19/04/2017	00117	\r
192032333844\r
16/04/2017	00116	\r
060718293244\r
14/04/2017	00115	\r
040510333638\r
12/04/2017	00114	\r
020308131941\r
09/04/2017	00113	\r
050821252637\r
07/04/2017	00112	\r
040516173240\r
05/04/2017	00111	\r
131420212333\r
02/04/2017	00110	\r
030507122733\r
31/03/2017	00109	\r
010405112030\r
29/03/2017	00108	\r
040524262837\r
26/03/2017	00107	\r
061223252943\r
24/03/2017	00106	\r
101430323742\r
22/03/2017	00105	\r
010924283336\r
19/03/2017	00104	\r
010206123136\r
17/03/2017	00103	\r
071224434445\r
15/03/2017	00102	\r
030910313240\r
12/03/2017	00101	\r
061130323542\r
10/03/2017	00100	\r
040921273844\r
08/03/2017	00099	\r
051114203242\r
05/03/2017	00098	\r
182124263945\r
03/03/2017	00097	\r
020413222341\r
01/03/2017	00096	\r
030426303544\r
26/02/2017	00095	\r
071116193839\r
24/02/2017	00094	\r
020419234445\r
22/02/2017	00093	\r
010308182842\r
19/02/2017	00092	\r
011724253335\r
17/02/2017	00091	\r
121525273741\r
15/02/2017	00090	\r
041619272930\r
12/02/2017	00089	\r
040612212328\r
10/02/2017	00088	\r
020610132028\r
08/02/2017	00087	\r
152629323438\r
05/02/2017	00086	\r
011126293440\r
03/02/2017	00085	\r
081731323339\r
01/02/2017	00084	\r
021011182233\r
29/01/2017	00083	\r
051321272945\r
25/01/2017	00082	\r
060914182830\r
22/01/2017	00081	\r
012021222629\r
20/01/2017	00080	\r
011131323437\r
18/01/2017	00079	\r
112226283543\r
15/01/2017	00078	\r
052527293143\r
13/01/2017	00077	\r
122429323739\r
11/01/2017	00076	\r
020821293745\r
08/01/2017	00075	\r
121829323945\r
06/01/2017	00074	\r
223034364345\r
04/01/2017	00073	\r
041925272931\r
01/01/2017	00072	\r
091824333639\r
30/12/2016	00071	\r
072327293537\r
28/12/2016	00070	\r
022225333843\r
25/12/2016	00069	\r
051220293436\r
23/12/2016	00068	\r
011724253743\r
21/12/2016	00067	\r
030612141840\r
18/12/2016	00066	\r
030730324143\r
16/12/2016	00065	\r
050833343944\r
14/12/2016	00064	\r
050612162630\r
11/12/2016	00063	\r
020304052224\r
09/12/2016	00062	\r
111215172126\r
07/12/2016	00061	\r
132327283245\r
04/12/2016	00060	\r
030513273844\r
02/12/2016	00059	\r
172633343742\r
30/11/2016	00058	\r
061517202341\r
27/11/2016	00057	\r
121617182230\r
25/11/2016	00056	\r
030425313740\r
23/11/2016	00055	\r
022223242837\r
20/11/2016	00054	\r
092333384142\r
18/11/2016	00053	\r
111216242631\r
16/11/2016	00052	\r
010917284344\r
13/11/2016	00051	\r
112325343645\r
11/11/2016	00050	\r
101722233036\r
09/11/2016	00049	\r
021014242530\r
06/11/2016	00048	\r
041516202641\r
04/11/2016	00047	\r
051322242832\r
02/11/2016	00046	\r
030508101322\r
30/10/2016	00045	\r
071225284044\r
28/10/2016	00044	\r
101113141638\r
26/10/2016	00043	\r
010816182128\r
23/10/2016	00042	\r
020512212240\r
21/10/2016	00041	\r
161730323438\r
19/10/2016	00040	\r
021315171841\r
16/10/2016	00039	\r
052131333842\r
14/10/2016	00038	\r
030709182839\r
12/10/2016	00037	\r
020815161925\r
09/10/2016	00036	\r
021520323344\r
07/10/2016	00035	\r
242527344445\r
05/10/2016	00034	\r
050619314244\r
02/10/2016	00033	\r
162327343538\r
30/09/2016	00032	\r
062030384045\r
28/09/2016	00031	\r
030617213240\r
25/09/2016	00030	\r
012028324244\r
23/09/2016	00029	\r
081419293040\r
21/09/2016	00028	\r
051215303741\r
18/09/2016	00027	\r
071017202532\r
16/09/2016	00026	\r
040506233134\r
14/09/2016	00025	\r
021114232532\r
11/09/2016	00024	\r
060910182031\r
09/09/2016	00023	\r
071316183132\r
07/09/2016	00022	\r
060812131519\r
04/09/2016	00021	\r
111520242745\r
02/09/2016	00020	\r
091324353641\r
31/08/2016	00019	\r
082021313439\r
28/08/2016	00018	\r
040610151644\r
26/08/2016	00017	\r
103639434445\r
24/08/2016	00016	\r
081721233640\r
21/08/2016	00015	\r
132124252944\r
19/08/2016	00014	\r
111217333436\r
17/08/2016	00013	\r
020409192126\r
14/08/2016	00012	\r
131617293137\r
12/08/2016	00011	\r
283134373841\r
10/08/2016	00010	\r
061516192730\r
07/08/2016	00009	\r
030517223031\r
05/08/2016	00008	\r
030913182431\r
03/08/2016	00007	\r
071025272940\r
31/07/2016	00006	\r
020619213539\r
29/07/2016	00005	\r
030813203036\r
27/07/2016	00004	\r
141721253137\r
24/07/2016	00003	\r
011016182338\r
22/07/2016	00002	\r
030414202535\r
20/07/2016	00001	\r
021733373845`,Rb="https://docs.google.com/spreadsheets/d/e/2PACX-1vTuQHHFRzAmMC_tHRnu8cCrr1k2eofH6e3cyk2_YqFfNmREGfR6cSyuIQJnr7OulqrBHF9wMueqpCsY/pub?gid=1819524273&single=true&output=csv",Ab="https://docs.google.com/spreadsheets/d/e/2PACX-1vQvXzBIgByEQchrAuLnQJsBrzcm1V64WMbQvDURph3nk7eMz13T26APw3jo466Ijt4m9Gg4q6zgT3bx/pub?gid=974883964&single=true&output=csv",$b="https://docs.google.com/spreadsheets/d/e/2PACX-1vS22O-AhO6JObxE84rRkY4axpRWLrdtY7-saZa5dRBs94GmOfkt07G5DZ4d-YUdmSiIYWl9RCjLJM9w/pub?gid=0&single=true&output=csv",lc=3,Pb=8e3,uc=100,ac=12;function Ib(t,n){var u,a;const e=t.split(/\r?\n/);for(;e.length>0&&e[e.length-1].trim()==="";)e.pop();if(e.length%2!==0)throw new Error("số dòng lẻ, thiếu dòng kết quả");if(e.length/2<uc)throw new Error(`chỉ có ${e.length/2} kỳ, ít hơn ${uc}`);const s=[];let o;for(let f=0;f<e.length;f+=2){const h=e[f].trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);if(!h)throw new Error(`dòng ${f+1} không bắt đầu bằng ngày dạng DD/MM/YYYY`);const[p,v,y,S]=h,T=(u=e[f].split(/[\t,]/)[1])==null?void 0:u.trim();(v.length<2||y.length<2)&&s.push(`dòng ${f+1} (kỳ ${T}): ngày "${p}" không đủ 2 chữ số, có thể gõ thiếu`);const U=Date.UTC(Number(S),Number(y)-1,Number(v));o!==void 0&&U>=o&&s.push(`dòng ${f+1} (kỳ ${T}): ngày "${p}" không nhỏ hơn ngày của kỳ ngay trước đó`),o=U;const C=(a=e[f+1].trim().match(/^\d+/))==null?void 0:a[0];if(!C)throw new Error(`dòng ${f+2} không có chuỗi kết quả`);const P=C.padStart(ac,"0");if(P.length!==ac)throw new Error(`dòng ${f+2}: kết quả sai độ dài`);const N=P.match(/.{2}/g).map(Number);if(new Set(N).size!==6||N.some(Z=>Z<1||Z>n))throw new Error(`dòng ${f+2}: kết quả ${P} không hợp lệ cho 6/${n}`);e[f+1]=e[f+1].trim().replace(/^\d+/,P)}return{csv:e.join(`
`),số_kỳ:e.length/2,ngày_mới_nhất:e[0].trim().slice(0,10),cảnh_báo:s}}const Nb=t=>new Promise(n=>setTimeout(n,t));async function Yb(t,n){let e;for(let s=1;s<=lc;s++){const o=new AbortController,u=setTimeout(()=>o.abort(),Pb);try{const a=await fetch(t,{cache:"no-store",signal:o.signal});if(!a.ok)throw new Error(`HTTP ${a.status}`);return Ib(await a.text(),n)}catch(a){e=a,s<lc&&await Nb(500*s)}finally{clearTimeout(u)}}throw e}class H5{constructor(n){v0(this,"loại_xổ_số");v0(this,"vị_trí_dữ_liệu");v0(this,"ngày_xổ_số");v0(this,"kết_quả_xổ_số");v0(this,"số_jacpot_2");v0(this,"kỳ_xổ_số");v0(this,"tuần_xổ_số");v0(this,"giá_trị_ngày");v0(this,"giá_trị_tháng");v0(this,"giá_trị_năm");v0(this,"dấu_thời_gian_của_ngày");v0(this,"dấu_thời_gian_kỳ_sau_đó");v0(this,"dữ_liệu_kỳ_sau_đó");v0(this,"các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau",[]);v0(this,"danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện",[]);v0(this,"danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện",[]);v0(this,"số_kết_quả_trong_các_số_đã_xuất_hiện",0);v0(this,"tập_các_số_đã_xuất_hiện",new Set);v0(this,"dự_đoán_ds_xuất_hiện",[]);v0(this,"số_lần_xuất_hiện_ds",[]);v0(this,"hiển_thị_dự_đoán_ds_xuất_hiện",!1);v0(this,"vị_trí_ds_xuất_hiện",[]);v0(this,"xem_dự_đoán","");this.loại_xổ_số=n.loại_xổ_số,this.vị_trí_dữ_liệu=n.vị_trí_dữ_liệu,this.ngày_xổ_số=n.ngày_xổ_số,this.kết_quả_xổ_số=n.kết_quả_xổ_số,this.số_jacpot_2=n.số_jacpot_2,this.kỳ_xổ_số=n.kỳ_xổ_số,this.tuần_xổ_số=n.tuần_xổ_số,this.giá_trị_ngày=n.giá_trị_ngày,this.giá_trị_tháng=n.giá_trị_tháng,this.giá_trị_năm=n.giá_trị_năm,this.dấu_thời_gian_của_ngày=n.dấu_thời_gian_của_ngày,this.dấu_thời_gian_kỳ_sau_đó=n.dấu_thời_gian_kỳ_sau_đó,this.dữ_liệu_kỳ_sau_đó=n.dữ_liệu_kỳ_sau_đó}}const Lb=t=>{const n=[1,2,3,4,5,6,7,8,9];for(let e=10;e<=100;e+=3)e<=t&&n.push(e);for(let e=200;e<=1e3;e+=80)e<=t&&n.push(e);for(let e=1100;e<=t+100;e+=80)n.push(e);return n},Fb={45:[3,5,0],55:[2,4,6]},q5=(t,n)=>{const e=new Date(t),s=e.getDay(),o=Fb[n];for(let u=1;u<=7;u++){const a=(s+u)%7;if(o.includes(a)){const f=new Date(e);return f.setDate(e.getDate()+u),f.getTime()}}return t},V5=(t,n,e=6)=>{const s=[];let o=t;for(let u=0;u<e;u++)o=q5(o,n),s.push(o);return s};let B5=Cb,G5=Db;async function Wb(){const t=[{tên:"45",link:Rb,tổng_số:45,đặt:n=>B5=n},{tên:"55",link:Ab,tổng_số:55,đặt:n=>G5=n}];await Promise.all(t.map(async({tên:n,link:e,tổng_số:s,đặt:o})=>{try{const u=await Yb(e,s);o(u.csv),console.log(`dữ liệu ${n}: Google Sheet, ${u.số_kỳ} kỳ, mới nhất ${u.ngày_mới_nhất}`),u.cảnh_báo.forEach(a=>console.warn(`dữ liệu ${n}: ${a}`))}catch(u){console.warn(`dữ liệu ${n}: không tải được từ Google Sheet (${u.message}), dùng file CSV có sẵn trong dự án (có thể cũ)`)}}))}function I4(){const n=B5.split(`
`).map(s=>s.split(/\t|,/).map(o=>o.trim()).filter(o=>o!=="")),e=[];for(let s=0;s<n.length/2;s++){const o=n[2*s],u=n[2*s+1],[a,f]=o,h=u[0].match(/.{2}/g)||[],p=X(a,"DD/MM/YYYY"),v=p.format("dddd"),y="",S=p.day().toString(),T=(p.month()+1).toString(),U=p.year().toString(),C=X(p,"DD/MM/YYYY").valueOf(),P=e[e.length-1],N=e.length,Z=V5(C,45),G=new H5({loại_xổ_số:45,vị_trí_dữ_liệu:N,ngày_xổ_số:a,kết_quả_xổ_số:h,số_jacpot_2:y,kỳ_xổ_số:f,tuần_xổ_số:v,giá_trị_ngày:S,giá_trị_tháng:T,giá_trị_năm:U,dấu_thời_gian_của_ngày:C,dấu_thời_gian_kỳ_sau_đó:Z,dữ_liệu_kỳ_sau_đó:P});e.push(G)}return e}function N4(){const n=G5.split(`
`).map(s=>s.split(/\t|,| \|/).map(o=>o.trim()).filter(o=>o!=="")),e=[];for(let s=0;s<n.length/2;s++){const o=n[2*s],u=n[2*s+1],[a,f]=o,[h,p]=u,v=h.match(/.{2}/g)||[],y=X(a,"DD/MM/YYYY"),S=y.format("dddd"),T=y.day().toString(),U=(y.month()+1).toString(),C=y.year().toString(),P=X(y,"DD/MM/YYYY").valueOf(),N=e[e.length-1],Z=V5(P,55),G=e.length,rt=new H5({loại_xổ_số:55,vị_trí_dữ_liệu:G,ngày_xổ_số:a,kết_quả_xổ_số:v,kỳ_xổ_số:f,số_jacpot_2:p,tuần_xổ_số:S,giá_trị_ngày:T,giá_trị_tháng:U,giá_trị_năm:C,dấu_thời_gian_của_ngày:P,dấu_thời_gian_kỳ_sau_đó:Z,dữ_liệu_kỳ_sau_đó:N});e.push(rt)}return e}const cc=new WeakMap,j5=[];function fc(t){let n=cc.get(t);return n||(n=t.map(e=>e.kết_quả_xổ_số.map(s=>{const o=Number(s);return j5[o]=s,o})),cc.set(t,n)),n}const Ub=(t,n,e,s,o=46)=>{var T;const u=[],a=[],f=fc(t),h=fc(n),p=new Uint16Array(128),v=[],y=U=>{p[U]++===0&&v.push(U)};e.kết_quả_xổ_số.forEach(U=>{var C;(C=f[s+Number(U)])==null||C.forEach(y)});const S=[];for(let U=s;U<t.length;U++){const C=v.length;if(S.length=0,(T=h[U])==null||T.forEach(P=>{var N;(N=f[s+P])==null||N.forEach(Z=>{y(Z),S.push(Z)})}),v.length===o){const P=[...v].sort((N,Z)=>p[N]-p[Z]);u.push(P.map(N=>j5[N])),a.push(P.map(N=>p[N]))}S.forEach(P=>p[P]--),v.length=C}return{danh_sách:u,số_lần:a}};function K5(t,n,e,s){var o;n.kết_quả_xổ_số.forEach(u=>{const a=Number(u)+s,f=t[a];f&&(n.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(f.kết_quả_xổ_số),f.kết_quả_xổ_số.forEach(h=>{var v,y;n.tập_các_số_đã_xuất_hiện.add(h);const p=n.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(S=>S.số_xuất_hiện===h);if(p)p.tổng_xuất_hiện++;else{const S={số_xuất_hiện:h,tổng_xuất_hiện:1,là_số_kết_quả:((v=n.dữ_liệu_kỳ_sau_đó)==null?void 0:v.kết_quả_xổ_số.includes(h))||!1,là_số_jackpot_2:((y=n.dữ_liệu_kỳ_sau_đó)==null?void 0:y.số_jacpot_2)===h,là_số_trùng:n.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(h)};n.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(S)}}))}),e&&e.kết_quả_xổ_số.filter(u=>!n.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(u)).forEach(u=>{const a=Number(u)+s,f=t[a];f&&(n.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(f.kết_quả_xổ_số),f.kết_quả_xổ_số.forEach(h=>{var v,y;n.tập_các_số_đã_xuất_hiện.add(h);const p=n.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(S=>S.số_xuất_hiện===h);if(p)p.tổng_xuất_hiện++;else{const S={số_xuất_hiện:h,tổng_xuất_hiện:1,là_số_kết_quả:((v=n.dữ_liệu_kỳ_sau_đó)==null?void 0:v.kết_quả_xổ_số.includes(h))||!1,là_số_jackpot_2:((y=n.dữ_liệu_kỳ_sau_đó)==null?void 0:y.số_jacpot_2)===h,là_số_trùng:n.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(h)};n.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(S)}}))}),n.số_kết_quả_trong_các_số_đã_xuất_hiện=((o=n.dữ_liệu_kỳ_sau_đó)==null?void 0:o.kết_quả_xổ_số.filter(u=>n.tập_các_số_đã_xuất_hiện.has(u)).length)||0}function Hb(t,n){const e=I4(),s=N4(),u=(X(e[0].ngày_xổ_số,"DD/MM/YYYY")>X(s[0].ngày_xổ_số,"DD/MM/YYYY")?55:45)===t?0:-1,a=t===45?e:s,f=t===45?s:e,h=a[n];if(h)return K5(a,h,f[n+u],n),h.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện}const qb=6,vo={45:500,55:1e3};function qo(t,n,e){const s=new Array(n+1).fill(0);return t.slice(0,e).forEach(o=>o.kết_quả_xổ_số.forEach(u=>s[Number(u)]++)),s}const hc={ngẫu_nhiên:(t,n)=>new Array(n+1).fill(1),số_nóng_50:(t,n)=>qo(t,n,50).map(e=>e+1),số_lạnh_50:(t,n)=>qo(t,n,50).map(e=>1/(e+1)),số_lâu_chưa_ra:(t,n)=>{const e=new Array(n+1).fill(t.length);for(let s=t.length-1;s>=0;s--)t[s].kết_quả_xổ_số.forEach(o=>e[Number(o)]=s);return e.map(s=>s+1)},số_vừa_ra:(t,n)=>{var s;const e=new Array(n+1).fill(1);return(s=t[0])==null||s.kết_quả_xổ_số.forEach(o=>e[Number(o)]=4),e}},Vb=50,Bb=10;function Gb(t,n,e=Bb){var f;const s=h=>String(h).padStart(2,"0"),o=qo(t,n,Vb),u=new Array(n+1).fill(t.length);for(let h=t.length-1;h>=0;h--)t[h].kết_quả_xổ_số.forEach(p=>u[Number(p)]=h);const a=Array.from({length:n},(h,p)=>p+1);return{vừa_ra:((f=t[0])==null?void 0:f.kết_quả_xổ_số)??[],nóng:[...a].sort((h,p)=>o[p]-o[h]||h-p).slice(0,e).map(h=>({số:s(h),lần:o[h]})),lạnh:[...a].sort((h,p)=>o[h]-o[p]||h-p).slice(0,e).map(h=>({số:s(h),lần:o[h]})),lâu_chưa_ra:[...a].sort((h,p)=>u[p]-u[h]||h-p).slice(0,e).map(h=>({số:s(h),số_kỳ:u[h]}))}}function ds(t){let n=t>>>0;return()=>{n=n+1831565813>>>0;let e=n;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const jb=(()=>{const t=[];for(let n=0;n<6;n++)for(let e=n+1;e<6;e++)for(let s=e+1;s<6;s++)for(let o=s+1;o<6;o++)t.push([n,e,s,o]);return t})();function Kb(t,n){return((t[n[0]]*64+t[n[1]])*64+t[n[2]])*64+t[n[3]]}function zb(t,n,e,s=Math.random){const o=[],u=new Set,a=n*200,f=new Float64Array(t+1);for(let h=0;h<a&&o.length<n;h++){for(let y=1;y<=t;y++)f[y]=s()**(1/Math.max(e[y],1e-9));const p=[];for(let y=0;y<qb;y++){let S=0;for(let T=1;T<=t;T++)f[T]>f[S]&&(S=T);p.push(S),f[S]=-1}p.sort((y,S)=>y-S);const v=jb.map(y=>Kb(p,y));v.some(y=>u.has(y))||(v.forEach(y=>u.add(y)),o.push(p))}return o}function Zb(t,n){if(n>t)return 0;let e=1;for(let s=1;s<=n;s++)e=e*(t-n+s)/s;return e}function Jb(t){const n=Zb(t,6),e=1/n;return{từ_5:6*(t-6)/n+e,số_6:e}}const jr=6,Xb=1e4,_c=20;function yo(t,n){if(n<0||n>t)return 0;let e=1;for(let s=1;s<=n;s++)e=e*(t-n+s)/s;return e}function xo(t){let n=5381;for(let e=0;e<t.length;e++)n=(n<<5)+n+t.charCodeAt(e)|0;return n>>>0}function f1(t,n){const e=[],s=[],o=u=>{if(s.length===n){e.push([...s]);return}for(let a=u;a<=t.length-(n-s.length);a++)s.push(t[a]),o(a+1),s.pop()};return o(0),e}function dc(t){const n=[...t].sort((a,f)=>a-f);let e=n.filter(a=>a<=31).length,s=1,o=1;for(let a=1;a<n.length;a++)o=n[a]===n[a-1]+1?o+1:1,s=Math.max(s,o);s>=3&&(e+=2);const u=n[1]-n[0];return n.every((a,f)=>f===0||a-n[f-1]===u)&&(e+=3),e}function Qb(t){return jr*Math.min(31,t)/t}function tk(t,n,e=Math.random){const s=o=>o>31?3:o>12?1.5:1;return Array.from({length:t},(o,u)=>u+1).map(o=>({số:o,khóa:e()**(1/s(o))})).sort((o,u)=>u.khóa-o.khóa).slice(0,n).map(o=>o.số).sort((o,u)=>o-u)}function nk(t,n,e,s,o,u){const a=t===55?55:45;if(!Number.isInteger(n)||n<jr+1)throw new Error(`Nhóm số phải có ít nhất ${jr+1} số`);if(n>_c)throw new Error(`Nhóm số tối đa ${_c} số`);if(!Number.isInteger(e)||e<2||e>=jr)throw new Error(`Mức đảm bảo phải từ 2 đến ${jr-1}`);const f=tk(a,n,u===void 0?Math.random:ds(u)),h=tt=>tt.reduce((yt,wt)=>yt|1<<wt,0),p=Array.from({length:n},(tt,yt)=>yt),v=new Map;f1(p,e).forEach((tt,yt)=>v.set(h(tt),yt));const y=f1(p,jr).map(tt=>({vị_trí:tt,vé:tt.map(yt=>f[yt]),phủ:f1(tt,e).map(yt=>v.get(h(yt)))})),S=y.map(tt=>dc(tt.vé)),T=new Uint8Array(v.size);let U=v.size;const C=[],P=new Set;for(;U>0;){let tt=-1,yt=-1;for(let wt=0;wt<y.length;wt++){let Qt=0;for(const c0 of y[wt].phủ)T[c0]||Qt++;(Qt>yt||Qt===yt&&S[wt]<S[tt])&&(tt=wt,yt=Qt)}for(const wt of y[tt].phủ)T[wt]||(T[wt]=1,U--);C.push(y[tt].vé),P.add(tt)}const N=C.length,Z=Math.min(s??N,y.length);if(Z>N){const tt=e+1,yt=new Map;f1(p,tt).forEach((c0,x0)=>yt.set(h(c0),x0));const wt=y.map(c0=>f1(c0.vị_trí,tt).map(x0=>yt.get(h(x0)))),Qt=new Uint8Array(yt.size);for(P.forEach(c0=>wt[c0].forEach(x0=>Qt[x0]=1));C.length<Z;){let c0=-1,x0=-1;for(let w0=0;w0<y.length;w0++){if(P.has(w0))continue;let K0=0;for(const L0 of wt[w0])Qt[L0]||K0++;(K0>x0||K0===x0&&S[w0]<S[c0])&&(c0=w0,x0=K0)}wt[c0].forEach(w0=>Qt[w0]=1),C.push(y[c0].vé),P.add(c0)}}let G=0;const rt=yo(a,jr);for(let tt=e;tt<=jr;tt++)G+=yo(n,tt)*yo(a-n,jr-tt)/rt;return{loại_xổ_số:t,nhóm_số:f,mức_đảm_bảo:e,vé:C.map(tt=>[...tt].sort((yt,wt)=>yt-wt)),số_vé_tối_thiểu:N,chi_phí:C.length*Xb,xác_suất_đạt_đảm_bảo:G,điểm_phổ_biến_trung_bình:Number((C.reduce((tt,yt)=>tt+dc(yt),0)/C.length).toFixed(2)),điểm_phổ_biến_vé_ngẫu_nhiên:Number(Qb(a).toFixed(2))}}const gc=["trúng_3","trúng_4","trúng_5","jackpot_2","jackpot_1"],rk=1e4,ek=.03,ik=rk*(1+ek),pc=1e7;function sk(t){return t>pc?t-.1*(t-pc):t}const mc={45:{trúng_3:3e4,trúng_4:3e5,trúng_5:1e7,jackpot_2:0,jackpot_1:12e9},55:{trúng_3:5e4,trúng_4:5e5,trúng_5:4e7,jackpot_2:3e9,jackpot_1:3e10}};function wo(t,n){if(n<0||n>t)return 0;let e=1;for(let s=1;s<=n;s++)e=e*(t-n+s)/s;return e}function ok(t,n){const e=wo(t,6),s=u=>wo(6,u)*wo(t-6,6-u)/e,o=n?6/e:0;return{trúng_3:s(3),trúng_4:s(4),trúng_5:s(5)-o,jackpot_2:o,jackpot_1:s(6)}}const i2=6,vc=6,lk=3,uk=20261008;function ak(t){const n=new Map,e=new Map;return t.forEach(s=>{const o=s%vc,u=Math.floor(s/vc);n.set(o,(n.get(o)??0)+1),e.set(u,(e.get(u)??0)+1)}),[...n.values()].some(s=>s>=2)&&[...e.values()].every(s=>s<=lk)}const z5=(()=>{const t=[];for(let n=0;n<6;n++)for(let e=n+1;e<6;e++)for(let s=e+1;s<6;s++)for(let o=s+1;o<6;o++)t.push([n,e,s,o]);return t})(),yc=new Map;function ck(t,n){const e=`${t}-${n}`,s=yc.get(e);if(s)return s;const o=ds(uk),u=[],a=new Set,f=n*3e3,h=Array.from({length:t},(p,v)=>v);for(let p=0;p<f&&u.length<n;p++){for(let S=0;S<i2;S++){const T=S+Math.floor(o()*(t-S));[h[S],h[T]]=[h[T],h[S]]}const v=h.slice(0,i2).sort((S,T)=>S-T);if(!ak(v))continue;const y=z5.map(S=>((v[S[0]]*64+v[S[1]])*64+v[S[2]])*64+v[S[3]]);y.some(S=>a.has(S))||(y.forEach(S=>a.add(S)),u.push(v))}return yc.set(e,u),u}function fk(t,n){return n.map(e=>e.map(s=>t[s]).sort())}function xc(t,n){const e=n.loại_xổ_số,s=e===55,o=new Set(n.kết_quả_xổ_số),u=mc[e]??mc[45],a=ok(e===55?55:45,s),f=Object.fromEntries(gc.map(S=>[S,0])),h=[];t.forEach(S=>{const T=S.filter(P=>o.has(P)),U=T.length;let C;U===3?C="trúng_3":U===4?C="trúng_4":U===5?C=s&&S.includes(n.số_jacpot_2)?"jackpot_2":"trúng_5":U===6&&(C="jackpot_1"),C&&(f[C]++,U>=4&&h.push({vé:S,số_trúng:U,số_trùng:T,mức:C}))});let p=0;const v=gc.map(S=>{const T=sk(u[S]),U=f[S]*T;return p+=U,{mức_trúng:S,số_vé:f[S],kỳ_vọng_ngẫu_nhiên:Number((t.length*a[S]).toFixed(2)),tiền_mỗi_vé:T,tiền:U}}),y=t.length*ik;return{dòng_theo_mức:v,chi_phí:y,tiền_thắng:p,lãi_lỗ:p-y,vé_trúng_từ_4:h.sort((S,T)=>T.số_trúng-S.số_trúng)}}function hk(t,n,e,s,o,u,a){const f=t.map((S,T)=>T).filter(S=>n[S]>=e&&n[S]<=s);if(f.length<i2)return{vé:[],số_ứng_viên:f.length};const h=[],p=new Set,v=[...f],y=o*300;for(let S=0;S<y&&h.length<o;S++){for(let C=0;C<i2;C++){const P=C+Math.floor(a()*(v.length-C));[v[C],v[P]]=[v[P],v[C]]}const T=v.slice(0,i2).sort((C,P)=>C-P);if(!u(T))continue;const U=z5.map(C=>((T[C[0]]*128+T[C[1]])*128+T[C[2]])*128+T[C[3]]);U.some(C=>p.has(C))||(U.forEach(C=>p.add(C)),h.push(T.map(C=>t[C]).sort()))}return{vé:h,số_ứng_viên:f.length}}function _k(t){const n=[],e=(s,o)=>{if(o.length===t)return void n.push([...o]);for(let u=s;u<i2;u++)e(u+1,[...o,u])};return e(0,[]),n}function dk(t,n){if(!Number.isInteger(n)||n<1||n>i2)return()=>!0;const e=_k(n),s=(u,a)=>a.reduce((f,h)=>f*128+u[h],0),o=new Set;return t.forEach(u=>{if(u.length<n)return;const a=[...u].sort((h,p)=>h-p);(u.length===i2?e:Z5(u.length,n)).forEach(h=>o.add(s(a,h)))}),u=>!e.some(a=>o.has(s(u,a)))}function Z5(t,n){const e=[],s=(o,u)=>{if(u.length===n)return void e.push([...u]);for(let a=o;a<t;a++)s(a+1,[...u,a])};return s(0,[]),e}function gk(t,n){if(!Number.isInteger(n)||n<1||n>i2)return 0;const e=new Set;return t.forEach(s=>{if(s.length<n)return;const o=[...s].sort((u,a)=>u-a);Z5(s.length,n).forEach(u=>e.add(u.reduce((a,f)=>a*128+o[f],0)))}),e.size}const pk="BộNhớĐệmDựĐoán",Cr="bộ_nhớ_đệm",J5="ds_dự_đoán_",wc="bộ_vé_phủ|",bc="vé_từ_danh_sách|",kc="vé_mục_tiêu|",Vo="dự_đoán_theo_số_lần|",Bo="phân_tích_dự_đoán|";function Fs(){return new Promise((t,n)=>{const e=indexedDB.open(pk,1);e.onerror=()=>n(e.error),e.onsuccess=()=>t(e.result),e.onupgradeneeded=()=>{e.result.objectStoreNames.contains(Cr)||e.result.createObjectStore(Cr)}})}async function X5(t){try{const n=await Fs();try{return await new Promise((e,s)=>{const o=n.transaction(Cr,"readonly").objectStore(Cr).get(t);o.onerror=()=>s(o.error),o.onsuccess=()=>e(o.result)})}finally{n.close()}}catch(n){console.warn("Không đọc được bộ nhớ đệm:",n);return}}async function be(t){try{const n=await Fs();try{return await new Promise((e,s)=>{const o=n.transaction(Cr,"readonly").objectStore(Cr),u=IDBKeyRange.bound(t,t+"￿"),a=[],f=o.openCursor(u);f.onerror=()=>s(f.error),f.onsuccess=()=>{const h=f.result;if(!h)return e(a);a.push({khóa:String(h.key),giá_trị:h.value}),h.continue()}})}finally{n.close()}}catch(n){return console.warn("Không đọc được bộ nhớ đệm:",n),[]}}async function ve(t,n){try{const e=await Fs();try{await new Promise((s,o)=>{const u=e.transaction(Cr,"readwrite");u.objectStore(Cr).put(n,t),u.oncomplete=()=>s(),u.onerror=()=>o(u.error),u.onabort=()=>o(u.error)})}finally{e.close()}}catch(e){console.warn("Không ghi được bộ nhớ đệm:",e)}}async function mk(){try{const t=await Fs();try{return await new Promise((n,e)=>{const s=t.transaction(Cr,"readwrite");s.objectStore(Cr).clear(),s.oncomplete=()=>n(),s.onerror=()=>e(s.error),s.onabort=()=>e(s.error)}),!0}finally{t.close()}}catch(t){return console.warn("Không xoá được bộ nhớ đệm:",t),!1}}function vk(t,n,e){let s=5381;const o=u=>{for(let a=0;a<u.length;a++)s=(s<<5)+s+u.charCodeAt(a)|0};o(e);for(const u of[t,n]){o(`|${u.length}|`);for(const a of u)o(`${a.ngày_xổ_số}:${a.kết_quả_xổ_số.join("")};`)}return`${e}#${s>>>0}`}const G2="DD/MM/YYYY";function h1(t){return typeof t=="number"?X(t).format(G2):t}class yk{constructor(){v0(this,"tên_cơ_sở_dữ_liệu","DữLiệuLặpLại");v0(this,"phiên_bản",1);v0(this,"tên_kho_dữ_liệu","bộ_lưu_trữ");v0(this,"cơ_sở_dữ_liệu",null);v0(this,"đã_chuyển_định_dạng_ngày",!1)}async khởi_tạo(){return new Promise((n,e)=>{const s=indexedDB.open(this.tên_cơ_sở_dữ_liệu,this.phiên_bản);s.onerror=()=>e(s.error),s.onsuccess=()=>{this.cơ_sở_dữ_liệu=s.result,this.chuyển_định_dạng_ngày_bản_ghi_cũ().then(n,e)},s.onupgradeneeded=o=>{const u=o.target.result;if(!u.objectStoreNames.contains(this.tên_kho_dữ_liệu)){const a=u.createObjectStore(this.tên_kho_dữ_liệu,{keyPath:"id"});a.createIndex("tên","tên",{unique:!1}),a.createIndex("ngày_cập_nhật","ngày_cập_nhật",{unique:!1})}}})}async chuyển_định_dạng_ngày_bản_ghi_cũ(){this.đã_chuyển_định_dạng_ngày||!this.cơ_sở_dữ_liệu||(this.đã_chuyển_định_dạng_ngày=!0,await new Promise((n,e)=>{const s=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite"),o=s.objectStore(this.tên_kho_dữ_liệu).openCursor();o.onsuccess=()=>{const u=o.result;if(!u)return;const a=u.value;(typeof a.ngày_tạo=="number"||typeof a.ngày_cập_nhật=="number")&&(a.ngày_tạo=h1(a.ngày_tạo),a.ngày_cập_nhật=h1(a.ngày_cập_nhật),u.update(a)),u.continue()},o.onerror=()=>e(o.error),s.oncomplete=()=>n(),s.onerror=()=>e(s.error)}))}async lưu_dữ_liệu(n,e){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");const s=`${n}_${Date.now()}`,o={id:s,tên:n,ngày_tạo:X().format(G2),ngày_cập_nhật:X().format(G2),dữ_liệu:e,kích_thước:JSON.stringify(e).length};return new Promise((u,a)=>{const p=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).add(o);p.onerror=()=>a(p.error),p.onsuccess=()=>u(s)})}async lấy_dữ_liệu_theo_id(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((e,s)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).get(n);a.onerror=()=>s(a.error),a.onsuccess=()=>{const f=a.result;e(f?f.dữ_liệu:null)}})}async lấy_tất_cả(){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((n,e)=>{const u=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).getAll();u.onerror=()=>e(u.error),u.onsuccess=()=>n(u.result)})}async lấy_dữ_liệu_theo_tên(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((e,s)=>{const f=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).index("tên").getAll(n);f.onerror=()=>s(f.error),f.onsuccess=()=>e(f.result)})}async cập_nhật_dữ_liệu(n,e){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((s,o)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu),f=a.get(n);f.onsuccess=()=>{const h=f.result;if(h){h.dữ_liệu=e,h.ngày_cập_nhật=X().format(G2),h.kích_thước=JSON.stringify(e).length;const p=a.put(h);p.onsuccess=()=>s(),p.onerror=()=>o(p.error)}else o(new Error("Không tìm thấy dữ liệu"))},f.onerror=()=>o(f.error)})}async xóa_dữ_liệu(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((e,s)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).delete(n);a.onerror=()=>s(a.error),a.onsuccess=()=>e()})}async xóa_tất_cả(){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((n,e)=>{const u=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).clear();u.onerror=()=>e(u.error),u.onsuccess=()=>n()})}async tìm_kiếm_theo_ngày(n,e){const s=await this.lấy_tất_cả(),o=X(n,G2),u=X(e,G2);return s.filter(a=>X(h1(a.ngày_cập_nhật),G2).isBetween(o,u,"day","[]"))}async lấy_thống_kê(){const n=await this.lấy_tất_cả(),e=n.reduce((o,u)=>o+u.kích_thước,0),s=n.reduce((o,u)=>u.kích_thước>((o==null?void 0:o.kích_thước)||0)?u:o,null);return{tổng_bộ_lưu_trữ:n.length,tổng_kích_thước:e,lớn_nhất:s}}async xuất_dữ_liệu(){const n=await this.lấy_tất_cả();return JSON.stringify(n,null,2)}async nhập_dữ_liệu(n){const e=JSON.parse(n);let s=0;for(const o of e)try{if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");await new Promise((u,a)=>{const p=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).add({...o,ngày_tạo:h1(o.ngày_tạo),ngày_cập_nhật:h1(o.ngày_cập_nhật)});p.onsuccess=()=>{s++,u()},p.onerror=()=>a(p.error)})}catch{console.warn(`Lỗi nhập dữ liệu: ${o.id}`)}return s}}const x2=new yk;var Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d1={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var wk=d1.exports,Sc;function bk(){return Sc||(Sc=1,function(t,n){(function(){var e,s="4.17.21",o=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",p=500,v="__lodash_placeholder__",y=1,S=2,T=4,U=1,C=2,P=1,N=2,Z=4,G=8,rt=16,tt=32,yt=64,wt=128,Qt=256,c0=512,x0=30,w0="...",K0=800,L0=16,z0=1,bn=2,jt=3,Tt=1/0,Dt=9007199254740991,an=17976931348623157e292,_n=NaN,D0=4294967295,Z0=D0-1,Gn=D0>>>1,lr=[["ary",wt],["bind",P],["bindKey",N],["curry",G],["curryRight",rt],["flip",c0],["partial",tt],["partialRight",yt],["rearg",Qt]],en="[object Arguments]",V0="[object Array]",Y="[object AsyncFunction]",at="[object Boolean]",it="[object Date]",xt="[object DOMException]",Jt="[object Error]",f0="[object Function]",x="[object GeneratorFunction]",w="[object Map]",R="[object Number]",j="[object Null]",$="[object Object]",H="[object Promise]",st="[object Proxy]",nt="[object RegExp]",J="[object Set]",z="[object String]",St="[object Symbol]",lt="[object Undefined]",vt="[object WeakMap]",Ct="[object WeakSet]",Yt="[object ArrayBuffer]",r0="[object DataView]",e0="[object Float32Array]",J0="[object Float64Array]",I0="[object Int8Array]",sn="[object Int16Array]",X0="[object Int32Array]",En="[object Uint8Array]",$r="[object Uint8ClampedArray]",B0="[object Uint16Array]",G0="[object Uint32Array]",A2=/\b__p \+= '';/g,V1=/\b(__p \+=) '' \+/g,B1=/(__e\(.*?\)|\b__t\)) \+\n'';/g,qe=/&(?:amp|lt|gt|quot|#39);/g,G1=/[&<>"']/g,j1=RegExp(qe.source),K1=RegExp(G1.source),Ws=/<%-([\s\S]+?)%>/g,jn=/<%([\s\S]+?)%>/g,a2=/<%=([\s\S]+?)%>/g,z1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Us=/^\w*$/,Z1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V=/[\\^$.*+?()[\]{}|]/g,g=RegExp(V.source),W=/^\s+/,et=/\s/,B=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,q=/\{\n\/\* \[wrapped with (.+)\] \*/,k=/,? & /,ot=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ct=/[()=,{}\[\]\/\s]/,_t=/\\(\\)?/g,bt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ht=/\w*$/,It=/^[-+]0x[0-9a-f]+$/i,Bt=/^0b[01]+$/i,Lt=/^\[object .+?Constructor\]$/,Ht=/^0o[0-7]+$/i,Ut=/^(?:0|[1-9]\d*)$/,Q0=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o0=/($^)/,l0=/['\n\r\u2028\u2029\\]/g,F0="\\ud800-\\udfff",dn="\\u0300-\\u036f",Pr="\\ufe20-\\ufe2f",ne="\\u20d0-\\u20ff",J1=dn+Pr+ne,Y4="\\u2700-\\u27bf",L4="a-z\\xdf-\\xf6\\xf8-\\xff",Q5="\\xac\\xb1\\xd7\\xf7",th="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",nh="\\u2000-\\u206f",rh=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",F4="A-Z\\xc0-\\xd6\\xd8-\\xde",W4="\\ufe0e\\ufe0f",U4=Q5+th+nh+rh,Hs="['’]",eh="["+F0+"]",H4="["+U4+"]",X1="["+J1+"]",q4="\\d+",ih="["+Y4+"]",V4="["+L4+"]",B4="[^"+F0+U4+q4+Y4+L4+F4+"]",qs="\\ud83c[\\udffb-\\udfff]",sh="(?:"+X1+"|"+qs+")",G4="[^"+F0+"]",Vs="(?:\\ud83c[\\udde6-\\uddff]){2}",Bs="[\\ud800-\\udbff][\\udc00-\\udfff]",re="["+F4+"]",j4="\\u200d",K4="(?:"+V4+"|"+B4+")",oh="(?:"+re+"|"+B4+")",z4="(?:"+Hs+"(?:d|ll|m|re|s|t|ve))?",Z4="(?:"+Hs+"(?:D|LL|M|RE|S|T|VE))?",J4=sh+"?",X4="["+W4+"]?",lh="(?:"+j4+"(?:"+[G4,Vs,Bs].join("|")+")"+X4+J4+")*",uh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ah="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Q4=X4+J4+lh,ch="(?:"+[ih,Vs,Bs].join("|")+")"+Q4,fh="(?:"+[G4+X1+"?",X1,Vs,Bs,eh].join("|")+")",hh=RegExp(Hs,"g"),_h=RegExp(X1,"g"),Gs=RegExp(qs+"(?="+qs+")|"+fh+Q4,"g"),dh=RegExp([re+"?"+V4+"+"+z4+"(?="+[H4,re,"$"].join("|")+")",oh+"+"+Z4+"(?="+[H4,re+K4,"$"].join("|")+")",re+"?"+K4+"+"+z4,re+"+"+Z4,ah,uh,q4,ch].join("|"),"g"),gh=RegExp("["+j4+F0+J1+W4+"]"),ph=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,mh=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],vh=-1,C0={};C0[e0]=C0[J0]=C0[I0]=C0[sn]=C0[X0]=C0[En]=C0[$r]=C0[B0]=C0[G0]=!0,C0[en]=C0[V0]=C0[Yt]=C0[at]=C0[r0]=C0[it]=C0[Jt]=C0[f0]=C0[w]=C0[R]=C0[$]=C0[nt]=C0[J]=C0[z]=C0[vt]=!1;var T0={};T0[en]=T0[V0]=T0[Yt]=T0[r0]=T0[at]=T0[it]=T0[e0]=T0[J0]=T0[I0]=T0[sn]=T0[X0]=T0[w]=T0[R]=T0[$]=T0[nt]=T0[J]=T0[z]=T0[St]=T0[En]=T0[$r]=T0[B0]=T0[G0]=!0,T0[Jt]=T0[f0]=T0[vt]=!1;var yh={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},xh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},bh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},kh=parseFloat,Sh=parseInt,tl=typeof Vi=="object"&&Vi&&Vi.Object===Object&&Vi,Mh=typeof self=="object"&&self&&self.Object===Object&&self,cn=tl||Mh||Function("return this")(),js=n&&!n.nodeType&&n,$2=js&&!0&&t&&!t.nodeType&&t,nl=$2&&$2.exports===js,Ks=nl&&tl.process,Kn=function(){try{var O=$2&&$2.require&&$2.require("util").types;return O||Ks&&Ks.binding&&Ks.binding("util")}catch{}}(),rl=Kn&&Kn.isArrayBuffer,el=Kn&&Kn.isDate,il=Kn&&Kn.isMap,sl=Kn&&Kn.isRegExp,ol=Kn&&Kn.isSet,ll=Kn&&Kn.isTypedArray;function Pn(O,I,A){switch(A.length){case 0:return O.call(I);case 1:return O.call(I,A[0]);case 2:return O.call(I,A[0],A[1]);case 3:return O.call(I,A[0],A[1],A[2])}return O.apply(I,A)}function Th(O,I,A,pt){for(var Nt=-1,h0=O==null?0:O.length;++Nt<h0;){var tn=O[Nt];I(pt,tn,A(tn),O)}return pt}function zn(O,I){for(var A=-1,pt=O==null?0:O.length;++A<pt&&I(O[A],A,O)!==!1;);return O}function Oh(O,I){for(var A=O==null?0:O.length;A--&&I(O[A],A,O)!==!1;);return O}function ul(O,I){for(var A=-1,pt=O==null?0:O.length;++A<pt;)if(!I(O[A],A,O))return!1;return!0}function c2(O,I){for(var A=-1,pt=O==null?0:O.length,Nt=0,h0=[];++A<pt;){var tn=O[A];I(tn,A,O)&&(h0[Nt++]=tn)}return h0}function Q1(O,I){var A=O==null?0:O.length;return!!A&&ee(O,I,0)>-1}function zs(O,I,A){for(var pt=-1,Nt=O==null?0:O.length;++pt<Nt;)if(A(I,O[pt]))return!0;return!1}function $0(O,I){for(var A=-1,pt=O==null?0:O.length,Nt=Array(pt);++A<pt;)Nt[A]=I(O[A],A,O);return Nt}function f2(O,I){for(var A=-1,pt=I.length,Nt=O.length;++A<pt;)O[Nt+A]=I[A];return O}function Zs(O,I,A,pt){var Nt=-1,h0=O==null?0:O.length;for(pt&&h0&&(A=O[++Nt]);++Nt<h0;)A=I(A,O[Nt],Nt,O);return A}function Eh(O,I,A,pt){var Nt=O==null?0:O.length;for(pt&&Nt&&(A=O[--Nt]);Nt--;)A=I(A,O[Nt],Nt,O);return A}function Js(O,I){for(var A=-1,pt=O==null?0:O.length;++A<pt;)if(I(O[A],A,O))return!0;return!1}var Dh=Xs("length");function Ch(O){return O.split("")}function Rh(O){return O.match(ot)||[]}function al(O,I,A){var pt;return A(O,function(Nt,h0,tn){if(I(Nt,h0,tn))return pt=h0,!1}),pt}function ti(O,I,A,pt){for(var Nt=O.length,h0=A+(pt?1:-1);pt?h0--:++h0<Nt;)if(I(O[h0],h0,O))return h0;return-1}function ee(O,I,A){return I===I?qh(O,I,A):ti(O,cl,A)}function Ah(O,I,A,pt){for(var Nt=A-1,h0=O.length;++Nt<h0;)if(pt(O[Nt],I))return Nt;return-1}function cl(O){return O!==O}function fl(O,I){var A=O==null?0:O.length;return A?t3(O,I)/A:_n}function Xs(O){return function(I){return I==null?e:I[O]}}function Qs(O){return function(I){return O==null?e:O[I]}}function hl(O,I,A,pt,Nt){return Nt(O,function(h0,tn,b0){A=pt?(pt=!1,h0):I(A,h0,tn,b0)}),A}function $h(O,I){var A=O.length;for(O.sort(I);A--;)O[A]=O[A].value;return O}function t3(O,I){for(var A,pt=-1,Nt=O.length;++pt<Nt;){var h0=I(O[pt]);h0!==e&&(A=A===e?h0:A+h0)}return A}function n3(O,I){for(var A=-1,pt=Array(O);++A<O;)pt[A]=I(A);return pt}function Ph(O,I){return $0(I,function(A){return[A,O[A]]})}function _l(O){return O&&O.slice(0,ml(O)+1).replace(W,"")}function In(O){return function(I){return O(I)}}function r3(O,I){return $0(I,function(A){return O[A]})}function Ve(O,I){return O.has(I)}function dl(O,I){for(var A=-1,pt=O.length;++A<pt&&ee(I,O[A],0)>-1;);return A}function gl(O,I){for(var A=O.length;A--&&ee(I,O[A],0)>-1;);return A}function Ih(O,I){for(var A=O.length,pt=0;A--;)O[A]===I&&++pt;return pt}var Nh=Qs(yh),Yh=Qs(xh);function Lh(O){return"\\"+bh[O]}function Fh(O,I){return O==null?e:O[I]}function ie(O){return gh.test(O)}function Wh(O){return ph.test(O)}function Uh(O){for(var I,A=[];!(I=O.next()).done;)A.push(I.value);return A}function e3(O){var I=-1,A=Array(O.size);return O.forEach(function(pt,Nt){A[++I]=[Nt,pt]}),A}function pl(O,I){return function(A){return O(I(A))}}function h2(O,I){for(var A=-1,pt=O.length,Nt=0,h0=[];++A<pt;){var tn=O[A];(tn===I||tn===v)&&(O[A]=v,h0[Nt++]=A)}return h0}function ni(O){var I=-1,A=Array(O.size);return O.forEach(function(pt){A[++I]=pt}),A}function Hh(O){var I=-1,A=Array(O.size);return O.forEach(function(pt){A[++I]=[pt,pt]}),A}function qh(O,I,A){for(var pt=A-1,Nt=O.length;++pt<Nt;)if(O[pt]===I)return pt;return-1}function Vh(O,I,A){for(var pt=A+1;pt--;)if(O[pt]===I)return pt;return pt}function se(O){return ie(O)?Gh(O):Dh(O)}function ur(O){return ie(O)?jh(O):Ch(O)}function ml(O){for(var I=O.length;I--&&et.test(O.charAt(I)););return I}var Bh=Qs(wh);function Gh(O){for(var I=Gs.lastIndex=0;Gs.test(O);)++I;return I}function jh(O){return O.match(Gs)||[]}function Kh(O){return O.match(dh)||[]}var zh=function O(I){I=I==null?cn:oe.defaults(cn.Object(),I,oe.pick(cn,mh));var A=I.Array,pt=I.Date,Nt=I.Error,h0=I.Function,tn=I.Math,b0=I.Object,i3=I.RegExp,Zh=I.String,Zn=I.TypeError,ri=A.prototype,Jh=h0.prototype,le=b0.prototype,ei=I["__core-js_shared__"],ii=Jh.toString,m0=le.hasOwnProperty,Xh=0,vl=function(){var r=/[^.]+$/.exec(ei&&ei.keys&&ei.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),si=le.toString,Qh=ii.call(b0),t_=cn._,n_=i3("^"+ii.call(m0).replace(V,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),oi=nl?I.Buffer:e,_2=I.Symbol,li=I.Uint8Array,yl=oi?oi.allocUnsafe:e,ui=pl(b0.getPrototypeOf,b0),xl=b0.create,wl=le.propertyIsEnumerable,ai=ri.splice,bl=_2?_2.isConcatSpreadable:e,Be=_2?_2.iterator:e,P2=_2?_2.toStringTag:e,ci=function(){try{var r=F2(b0,"defineProperty");return r({},"",{}),r}catch{}}(),r_=I.clearTimeout!==cn.clearTimeout&&I.clearTimeout,e_=pt&&pt.now!==cn.Date.now&&pt.now,i_=I.setTimeout!==cn.setTimeout&&I.setTimeout,fi=tn.ceil,hi=tn.floor,s3=b0.getOwnPropertySymbols,s_=oi?oi.isBuffer:e,kl=I.isFinite,o_=ri.join,l_=pl(b0.keys,b0),nn=tn.max,gn=tn.min,u_=pt.now,a_=I.parseInt,Sl=tn.random,c_=ri.reverse,o3=F2(I,"DataView"),Ge=F2(I,"Map"),l3=F2(I,"Promise"),ue=F2(I,"Set"),je=F2(I,"WeakMap"),Ke=F2(b0,"create"),_i=je&&new je,ae={},f_=W2(o3),h_=W2(Ge),__=W2(l3),d_=W2(ue),g_=W2(je),di=_2?_2.prototype:e,ze=di?di.valueOf:e,Ml=di?di.toString:e;function d(r){if(Y0(r)&&!Ft(r)&&!(r instanceof t0)){if(r instanceof Jn)return r;if(m0.call(r,"__wrapped__"))return Tu(r)}return new Jn(r)}var ce=function(){function r(){}return function(i){if(!N0(i))return{};if(xl)return xl(i);r.prototype=i;var l=new r;return r.prototype=e,l}}();function gi(){}function Jn(r,i){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=e}d.templateSettings={escape:Ws,evaluate:jn,interpolate:a2,variable:"",imports:{_:d}},d.prototype=gi.prototype,d.prototype.constructor=d,Jn.prototype=ce(gi.prototype),Jn.prototype.constructor=Jn;function t0(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=D0,this.__views__=[]}function p_(){var r=new t0(this.__wrapped__);return r.__actions__=Dn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Dn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Dn(this.__views__),r}function m_(){if(this.__filtered__){var r=new t0(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function v_(){var r=this.__wrapped__.value(),i=this.__dir__,l=Ft(r),c=i<0,_=l?r.length:0,m=Cd(0,_,this.__views__),b=m.start,M=m.end,E=M-b,L=c?M:b-1,F=this.__iteratees__,K=F.length,ut=0,kt=gn(E,this.__takeCount__);if(!l||!c&&_==E&&kt==E)return zl(r,this.__actions__);var At=[];t:for(;E--&&ut<kt;){L+=i;for(var Gt=-1,$t=r[L];++Gt<K;){var Xt=F[Gt],i0=Xt.iteratee,Ln=Xt.type,Mn=i0($t);if(Ln==bn)$t=Mn;else if(!Mn){if(Ln==z0)continue t;break t}}At[ut++]=$t}return At}t0.prototype=ce(gi.prototype),t0.prototype.constructor=t0;function I2(r){var i=-1,l=r==null?0:r.length;for(this.clear();++i<l;){var c=r[i];this.set(c[0],c[1])}}function y_(){this.__data__=Ke?Ke(null):{},this.size=0}function x_(r){var i=this.has(r)&&delete this.__data__[r];return this.size-=i?1:0,i}function w_(r){var i=this.__data__;if(Ke){var l=i[r];return l===h?e:l}return m0.call(i,r)?i[r]:e}function b_(r){var i=this.__data__;return Ke?i[r]!==e:m0.call(i,r)}function k_(r,i){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Ke&&i===e?h:i,this}I2.prototype.clear=y_,I2.prototype.delete=x_,I2.prototype.get=w_,I2.prototype.has=b_,I2.prototype.set=k_;function Ir(r){var i=-1,l=r==null?0:r.length;for(this.clear();++i<l;){var c=r[i];this.set(c[0],c[1])}}function S_(){this.__data__=[],this.size=0}function M_(r){var i=this.__data__,l=pi(i,r);if(l<0)return!1;var c=i.length-1;return l==c?i.pop():ai.call(i,l,1),--this.size,!0}function T_(r){var i=this.__data__,l=pi(i,r);return l<0?e:i[l][1]}function O_(r){return pi(this.__data__,r)>-1}function E_(r,i){var l=this.__data__,c=pi(l,r);return c<0?(++this.size,l.push([r,i])):l[c][1]=i,this}Ir.prototype.clear=S_,Ir.prototype.delete=M_,Ir.prototype.get=T_,Ir.prototype.has=O_,Ir.prototype.set=E_;function Nr(r){var i=-1,l=r==null?0:r.length;for(this.clear();++i<l;){var c=r[i];this.set(c[0],c[1])}}function D_(){this.size=0,this.__data__={hash:new I2,map:new(Ge||Ir),string:new I2}}function C_(r){var i=Ei(this,r).delete(r);return this.size-=i?1:0,i}function R_(r){return Ei(this,r).get(r)}function A_(r){return Ei(this,r).has(r)}function $_(r,i){var l=Ei(this,r),c=l.size;return l.set(r,i),this.size+=l.size==c?0:1,this}Nr.prototype.clear=D_,Nr.prototype.delete=C_,Nr.prototype.get=R_,Nr.prototype.has=A_,Nr.prototype.set=$_;function N2(r){var i=-1,l=r==null?0:r.length;for(this.__data__=new Nr;++i<l;)this.add(r[i])}function P_(r){return this.__data__.set(r,h),this}function I_(r){return this.__data__.has(r)}N2.prototype.add=N2.prototype.push=P_,N2.prototype.has=I_;function ar(r){var i=this.__data__=new Ir(r);this.size=i.size}function N_(){this.__data__=new Ir,this.size=0}function Y_(r){var i=this.__data__,l=i.delete(r);return this.size=i.size,l}function L_(r){return this.__data__.get(r)}function F_(r){return this.__data__.has(r)}function W_(r,i){var l=this.__data__;if(l instanceof Ir){var c=l.__data__;if(!Ge||c.length<o-1)return c.push([r,i]),this.size=++l.size,this;l=this.__data__=new Nr(c)}return l.set(r,i),this.size=l.size,this}ar.prototype.clear=N_,ar.prototype.delete=Y_,ar.prototype.get=L_,ar.prototype.has=F_,ar.prototype.set=W_;function Tl(r,i){var l=Ft(r),c=!l&&U2(r),_=!l&&!c&&v2(r),m=!l&&!c&&!_&&de(r),b=l||c||_||m,M=b?n3(r.length,Zh):[],E=M.length;for(var L in r)(i||m0.call(r,L))&&!(b&&(L=="length"||_&&(L=="offset"||L=="parent")||m&&(L=="buffer"||L=="byteLength"||L=="byteOffset")||Wr(L,E)))&&M.push(L);return M}function Ol(r){var i=r.length;return i?r[v3(0,i-1)]:e}function U_(r,i){return Di(Dn(r),Y2(i,0,r.length))}function H_(r){return Di(Dn(r))}function u3(r,i,l){(l!==e&&!cr(r[i],l)||l===e&&!(i in r))&&Yr(r,i,l)}function Ze(r,i,l){var c=r[i];(!(m0.call(r,i)&&cr(c,l))||l===e&&!(i in r))&&Yr(r,i,l)}function pi(r,i){for(var l=r.length;l--;)if(cr(r[l][0],i))return l;return-1}function q_(r,i,l,c){return d2(r,function(_,m,b){i(c,_,l(_),b)}),c}function El(r,i){return r&&xr(i,on(i),r)}function V_(r,i){return r&&xr(i,Rn(i),r)}function Yr(r,i,l){i=="__proto__"&&ci?ci(r,i,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[i]=l}function a3(r,i){for(var l=-1,c=i.length,_=A(c),m=r==null;++l<c;)_[l]=m?e:q3(r,i[l]);return _}function Y2(r,i,l){return r===r&&(l!==e&&(r=r<=l?r:l),i!==e&&(r=r>=i?r:i)),r}function Xn(r,i,l,c,_,m){var b,M=i&y,E=i&S,L=i&T;if(l&&(b=_?l(r,c,_,m):l(r)),b!==e)return b;if(!N0(r))return r;var F=Ft(r);if(F){if(b=Ad(r),!M)return Dn(r,b)}else{var K=pn(r),ut=K==f0||K==x;if(v2(r))return Xl(r,M);if(K==$||K==en||ut&&!_){if(b=E||ut?{}:mu(r),!M)return E?wd(r,V_(b,r)):xd(r,El(b,r))}else{if(!T0[K])return _?r:{};b=$d(r,K,M)}}m||(m=new ar);var kt=m.get(r);if(kt)return kt;m.set(r,b),Gu(r)?r.forEach(function($t){b.add(Xn($t,i,l,$t,r,m))}):Vu(r)&&r.forEach(function($t,Xt){b.set(Xt,Xn($t,i,l,Xt,r,m))});var At=L?E?D3:E3:E?Rn:on,Gt=F?e:At(r);return zn(Gt||r,function($t,Xt){Gt&&(Xt=$t,$t=r[Xt]),Ze(b,Xt,Xn($t,i,l,Xt,r,m))}),b}function B_(r){var i=on(r);return function(l){return Dl(l,r,i)}}function Dl(r,i,l){var c=l.length;if(r==null)return!c;for(r=b0(r);c--;){var _=l[c],m=i[_],b=r[_];if(b===e&&!(_ in r)||!m(b))return!1}return!0}function Cl(r,i,l){if(typeof r!="function")throw new Zn(a);return e1(function(){r.apply(e,l)},i)}function Je(r,i,l,c){var _=-1,m=Q1,b=!0,M=r.length,E=[],L=i.length;if(!M)return E;l&&(i=$0(i,In(l))),c?(m=zs,b=!1):i.length>=o&&(m=Ve,b=!1,i=new N2(i));t:for(;++_<M;){var F=r[_],K=l==null?F:l(F);if(F=c||F!==0?F:0,b&&K===K){for(var ut=L;ut--;)if(i[ut]===K)continue t;E.push(F)}else m(i,K,c)||E.push(F)}return E}var d2=eu(yr),Rl=eu(f3,!0);function G_(r,i){var l=!0;return d2(r,function(c,_,m){return l=!!i(c,_,m),l}),l}function mi(r,i,l){for(var c=-1,_=r.length;++c<_;){var m=r[c],b=i(m);if(b!=null&&(M===e?b===b&&!Yn(b):l(b,M)))var M=b,E=m}return E}function j_(r,i,l,c){var _=r.length;for(l=qt(l),l<0&&(l=-l>_?0:_+l),c=c===e||c>_?_:qt(c),c<0&&(c+=_),c=l>c?0:Ku(c);l<c;)r[l++]=i;return r}function Al(r,i){var l=[];return d2(r,function(c,_,m){i(c,_,m)&&l.push(c)}),l}function fn(r,i,l,c,_){var m=-1,b=r.length;for(l||(l=Id),_||(_=[]);++m<b;){var M=r[m];i>0&&l(M)?i>1?fn(M,i-1,l,c,_):f2(_,M):c||(_[_.length]=M)}return _}var c3=iu(),$l=iu(!0);function yr(r,i){return r&&c3(r,i,on)}function f3(r,i){return r&&$l(r,i,on)}function vi(r,i){return c2(i,function(l){return Ur(r[l])})}function L2(r,i){i=p2(i,r);for(var l=0,c=i.length;r!=null&&l<c;)r=r[wr(i[l++])];return l&&l==c?r:e}function Pl(r,i,l){var c=i(r);return Ft(r)?c:f2(c,l(r))}function kn(r){return r==null?r===e?lt:j:P2&&P2 in b0(r)?Dd(r):Hd(r)}function h3(r,i){return r>i}function K_(r,i){return r!=null&&m0.call(r,i)}function z_(r,i){return r!=null&&i in b0(r)}function Z_(r,i,l){return r>=gn(i,l)&&r<nn(i,l)}function _3(r,i,l){for(var c=l?zs:Q1,_=r[0].length,m=r.length,b=m,M=A(m),E=1/0,L=[];b--;){var F=r[b];b&&i&&(F=$0(F,In(i))),E=gn(F.length,E),M[b]=!l&&(i||_>=120&&F.length>=120)?new N2(b&&F):e}F=r[0];var K=-1,ut=M[0];t:for(;++K<_&&L.length<E;){var kt=F[K],At=i?i(kt):kt;if(kt=l||kt!==0?kt:0,!(ut?Ve(ut,At):c(L,At,l))){for(b=m;--b;){var Gt=M[b];if(!(Gt?Ve(Gt,At):c(r[b],At,l)))continue t}ut&&ut.push(At),L.push(kt)}}return L}function J_(r,i,l,c){return yr(r,function(_,m,b){i(c,l(_),m,b)}),c}function Xe(r,i,l){i=p2(i,r),r=wu(r,i);var c=r==null?r:r[wr(tr(i))];return c==null?e:Pn(c,r,l)}function Il(r){return Y0(r)&&kn(r)==en}function X_(r){return Y0(r)&&kn(r)==Yt}function Q_(r){return Y0(r)&&kn(r)==it}function Qe(r,i,l,c,_){return r===i?!0:r==null||i==null||!Y0(r)&&!Y0(i)?r!==r&&i!==i:td(r,i,l,c,Qe,_)}function td(r,i,l,c,_,m){var b=Ft(r),M=Ft(i),E=b?V0:pn(r),L=M?V0:pn(i);E=E==en?$:E,L=L==en?$:L;var F=E==$,K=L==$,ut=E==L;if(ut&&v2(r)){if(!v2(i))return!1;b=!0,F=!1}if(ut&&!F)return m||(m=new ar),b||de(r)?du(r,i,l,c,_,m):Od(r,i,E,l,c,_,m);if(!(l&U)){var kt=F&&m0.call(r,"__wrapped__"),At=K&&m0.call(i,"__wrapped__");if(kt||At){var Gt=kt?r.value():r,$t=At?i.value():i;return m||(m=new ar),_(Gt,$t,l,c,m)}}return ut?(m||(m=new ar),Ed(r,i,l,c,_,m)):!1}function nd(r){return Y0(r)&&pn(r)==w}function d3(r,i,l,c){var _=l.length,m=_,b=!c;if(r==null)return!m;for(r=b0(r);_--;){var M=l[_];if(b&&M[2]?M[1]!==r[M[0]]:!(M[0]in r))return!1}for(;++_<m;){M=l[_];var E=M[0],L=r[E],F=M[1];if(b&&M[2]){if(L===e&&!(E in r))return!1}else{var K=new ar;if(c)var ut=c(L,F,E,r,i,K);if(!(ut===e?Qe(F,L,U|C,c,K):ut))return!1}}return!0}function Nl(r){if(!N0(r)||Yd(r))return!1;var i=Ur(r)?n_:Lt;return i.test(W2(r))}function rd(r){return Y0(r)&&kn(r)==nt}function ed(r){return Y0(r)&&pn(r)==J}function id(r){return Y0(r)&&Ii(r.length)&&!!C0[kn(r)]}function Yl(r){return typeof r=="function"?r:r==null?An:typeof r=="object"?Ft(r)?Wl(r[0],r[1]):Fl(r):sa(r)}function g3(r){if(!r1(r))return l_(r);var i=[];for(var l in b0(r))m0.call(r,l)&&l!="constructor"&&i.push(l);return i}function sd(r){if(!N0(r))return Ud(r);var i=r1(r),l=[];for(var c in r)c=="constructor"&&(i||!m0.call(r,c))||l.push(c);return l}function p3(r,i){return r<i}function Ll(r,i){var l=-1,c=Cn(r)?A(r.length):[];return d2(r,function(_,m,b){c[++l]=i(_,m,b)}),c}function Fl(r){var i=R3(r);return i.length==1&&i[0][2]?yu(i[0][0],i[0][1]):function(l){return l===r||d3(l,r,i)}}function Wl(r,i){return $3(r)&&vu(i)?yu(wr(r),i):function(l){var c=q3(l,r);return c===e&&c===i?V3(l,r):Qe(i,c,U|C)}}function yi(r,i,l,c,_){r!==i&&c3(i,function(m,b){if(_||(_=new ar),N0(m))od(r,i,b,l,yi,c,_);else{var M=c?c(I3(r,b),m,b+"",r,i,_):e;M===e&&(M=m),u3(r,b,M)}},Rn)}function od(r,i,l,c,_,m,b){var M=I3(r,l),E=I3(i,l),L=b.get(E);if(L){u3(r,l,L);return}var F=m?m(M,E,l+"",r,i,b):e,K=F===e;if(K){var ut=Ft(E),kt=!ut&&v2(E),At=!ut&&!kt&&de(E);F=E,ut||kt||At?Ft(M)?F=M:W0(M)?F=Dn(M):kt?(K=!1,F=Xl(E,!0)):At?(K=!1,F=Ql(E,!0)):F=[]:i1(E)||U2(E)?(F=M,U2(M)?F=zu(M):(!N0(M)||Ur(M))&&(F=mu(E))):K=!1}K&&(b.set(E,F),_(F,E,c,m,b),b.delete(E)),u3(r,l,F)}function Ul(r,i){var l=r.length;if(l)return i+=i<0?l:0,Wr(i,l)?r[i]:e}function Hl(r,i,l){i.length?i=$0(i,function(m){return Ft(m)?function(b){return L2(b,m.length===1?m[0]:m)}:m}):i=[An];var c=-1;i=$0(i,In(Rt()));var _=Ll(r,function(m,b,M){var E=$0(i,function(L){return L(m)});return{criteria:E,index:++c,value:m}});return $h(_,function(m,b){return yd(m,b,l)})}function ld(r,i){return ql(r,i,function(l,c){return V3(r,c)})}function ql(r,i,l){for(var c=-1,_=i.length,m={};++c<_;){var b=i[c],M=L2(r,b);l(M,b)&&t1(m,p2(b,r),M)}return m}function ud(r){return function(i){return L2(i,r)}}function m3(r,i,l,c){var _=c?Ah:ee,m=-1,b=i.length,M=r;for(r===i&&(i=Dn(i)),l&&(M=$0(r,In(l)));++m<b;)for(var E=0,L=i[m],F=l?l(L):L;(E=_(M,F,E,c))>-1;)M!==r&&ai.call(M,E,1),ai.call(r,E,1);return r}function Vl(r,i){for(var l=r?i.length:0,c=l-1;l--;){var _=i[l];if(l==c||_!==m){var m=_;Wr(_)?ai.call(r,_,1):w3(r,_)}}return r}function v3(r,i){return r+hi(Sl()*(i-r+1))}function ad(r,i,l,c){for(var _=-1,m=nn(fi((i-r)/(l||1)),0),b=A(m);m--;)b[c?m:++_]=r,r+=l;return b}function y3(r,i){var l="";if(!r||i<1||i>Dt)return l;do i%2&&(l+=r),i=hi(i/2),i&&(r+=r);while(i);return l}function Kt(r,i){return N3(xu(r,i,An),r+"")}function cd(r){return Ol(ge(r))}function fd(r,i){var l=ge(r);return Di(l,Y2(i,0,l.length))}function t1(r,i,l,c){if(!N0(r))return r;i=p2(i,r);for(var _=-1,m=i.length,b=m-1,M=r;M!=null&&++_<m;){var E=wr(i[_]),L=l;if(E==="__proto__"||E==="constructor"||E==="prototype")return r;if(_!=b){var F=M[E];L=c?c(F,E,M):e,L===e&&(L=N0(F)?F:Wr(i[_+1])?[]:{})}Ze(M,E,L),M=M[E]}return r}var Bl=_i?function(r,i){return _i.set(r,i),r}:An,hd=ci?function(r,i){return ci(r,"toString",{configurable:!0,enumerable:!1,value:G3(i),writable:!0})}:An;function _d(r){return Di(ge(r))}function Qn(r,i,l){var c=-1,_=r.length;i<0&&(i=-i>_?0:_+i),l=l>_?_:l,l<0&&(l+=_),_=i>l?0:l-i>>>0,i>>>=0;for(var m=A(_);++c<_;)m[c]=r[c+i];return m}function dd(r,i){var l;return d2(r,function(c,_,m){return l=i(c,_,m),!l}),!!l}function xi(r,i,l){var c=0,_=r==null?c:r.length;if(typeof i=="number"&&i===i&&_<=Gn){for(;c<_;){var m=c+_>>>1,b=r[m];b!==null&&!Yn(b)&&(l?b<=i:b<i)?c=m+1:_=m}return _}return x3(r,i,An,l)}function x3(r,i,l,c){var _=0,m=r==null?0:r.length;if(m===0)return 0;i=l(i);for(var b=i!==i,M=i===null,E=Yn(i),L=i===e;_<m;){var F=hi((_+m)/2),K=l(r[F]),ut=K!==e,kt=K===null,At=K===K,Gt=Yn(K);if(b)var $t=c||At;else L?$t=At&&(c||ut):M?$t=At&&ut&&(c||!kt):E?$t=At&&ut&&!kt&&(c||!Gt):kt||Gt?$t=!1:$t=c?K<=i:K<i;$t?_=F+1:m=F}return gn(m,Z0)}function Gl(r,i){for(var l=-1,c=r.length,_=0,m=[];++l<c;){var b=r[l],M=i?i(b):b;if(!l||!cr(M,E)){var E=M;m[_++]=b===0?0:b}}return m}function jl(r){return typeof r=="number"?r:Yn(r)?_n:+r}function Nn(r){if(typeof r=="string")return r;if(Ft(r))return $0(r,Nn)+"";if(Yn(r))return Ml?Ml.call(r):"";var i=r+"";return i=="0"&&1/r==-Tt?"-0":i}function g2(r,i,l){var c=-1,_=Q1,m=r.length,b=!0,M=[],E=M;if(l)b=!1,_=zs;else if(m>=o){var L=i?null:Md(r);if(L)return ni(L);b=!1,_=Ve,E=new N2}else E=i?[]:M;t:for(;++c<m;){var F=r[c],K=i?i(F):F;if(F=l||F!==0?F:0,b&&K===K){for(var ut=E.length;ut--;)if(E[ut]===K)continue t;i&&E.push(K),M.push(F)}else _(E,K,l)||(E!==M&&E.push(K),M.push(F))}return M}function w3(r,i){return i=p2(i,r),r=wu(r,i),r==null||delete r[wr(tr(i))]}function Kl(r,i,l,c){return t1(r,i,l(L2(r,i)),c)}function wi(r,i,l,c){for(var _=r.length,m=c?_:-1;(c?m--:++m<_)&&i(r[m],m,r););return l?Qn(r,c?0:m,c?m+1:_):Qn(r,c?m+1:0,c?_:m)}function zl(r,i){var l=r;return l instanceof t0&&(l=l.value()),Zs(i,function(c,_){return _.func.apply(_.thisArg,f2([c],_.args))},l)}function b3(r,i,l){var c=r.length;if(c<2)return c?g2(r[0]):[];for(var _=-1,m=A(c);++_<c;)for(var b=r[_],M=-1;++M<c;)M!=_&&(m[_]=Je(m[_]||b,r[M],i,l));return g2(fn(m,1),i,l)}function Zl(r,i,l){for(var c=-1,_=r.length,m=i.length,b={};++c<_;){var M=c<m?i[c]:e;l(b,r[c],M)}return b}function k3(r){return W0(r)?r:[]}function S3(r){return typeof r=="function"?r:An}function p2(r,i){return Ft(r)?r:$3(r,i)?[r]:Mu(_0(r))}var gd=Kt;function m2(r,i,l){var c=r.length;return l=l===e?c:l,!i&&l>=c?r:Qn(r,i,l)}var Jl=r_||function(r){return cn.clearTimeout(r)};function Xl(r,i){if(i)return r.slice();var l=r.length,c=yl?yl(l):new r.constructor(l);return r.copy(c),c}function M3(r){var i=new r.constructor(r.byteLength);return new li(i).set(new li(r)),i}function pd(r,i){var l=i?M3(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function md(r){var i=new r.constructor(r.source,ht.exec(r));return i.lastIndex=r.lastIndex,i}function vd(r){return ze?b0(ze.call(r)):{}}function Ql(r,i){var l=i?M3(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function tu(r,i){if(r!==i){var l=r!==e,c=r===null,_=r===r,m=Yn(r),b=i!==e,M=i===null,E=i===i,L=Yn(i);if(!M&&!L&&!m&&r>i||m&&b&&E&&!M&&!L||c&&b&&E||!l&&E||!_)return 1;if(!c&&!m&&!L&&r<i||L&&l&&_&&!c&&!m||M&&l&&_||!b&&_||!E)return-1}return 0}function yd(r,i,l){for(var c=-1,_=r.criteria,m=i.criteria,b=_.length,M=l.length;++c<b;){var E=tu(_[c],m[c]);if(E){if(c>=M)return E;var L=l[c];return E*(L=="desc"?-1:1)}}return r.index-i.index}function nu(r,i,l,c){for(var _=-1,m=r.length,b=l.length,M=-1,E=i.length,L=nn(m-b,0),F=A(E+L),K=!c;++M<E;)F[M]=i[M];for(;++_<b;)(K||_<m)&&(F[l[_]]=r[_]);for(;L--;)F[M++]=r[_++];return F}function ru(r,i,l,c){for(var _=-1,m=r.length,b=-1,M=l.length,E=-1,L=i.length,F=nn(m-M,0),K=A(F+L),ut=!c;++_<F;)K[_]=r[_];for(var kt=_;++E<L;)K[kt+E]=i[E];for(;++b<M;)(ut||_<m)&&(K[kt+l[b]]=r[_++]);return K}function Dn(r,i){var l=-1,c=r.length;for(i||(i=A(c));++l<c;)i[l]=r[l];return i}function xr(r,i,l,c){var _=!l;l||(l={});for(var m=-1,b=i.length;++m<b;){var M=i[m],E=c?c(l[M],r[M],M,l,r):e;E===e&&(E=r[M]),_?Yr(l,M,E):Ze(l,M,E)}return l}function xd(r,i){return xr(r,A3(r),i)}function wd(r,i){return xr(r,gu(r),i)}function bi(r,i){return function(l,c){var _=Ft(l)?Th:q_,m=i?i():{};return _(l,r,Rt(c,2),m)}}function fe(r){return Kt(function(i,l){var c=-1,_=l.length,m=_>1?l[_-1]:e,b=_>2?l[2]:e;for(m=r.length>3&&typeof m=="function"?(_--,m):e,b&&Sn(l[0],l[1],b)&&(m=_<3?e:m,_=1),i=b0(i);++c<_;){var M=l[c];M&&r(i,M,c,m)}return i})}function eu(r,i){return function(l,c){if(l==null)return l;if(!Cn(l))return r(l,c);for(var _=l.length,m=i?_:-1,b=b0(l);(i?m--:++m<_)&&c(b[m],m,b)!==!1;);return l}}function iu(r){return function(i,l,c){for(var _=-1,m=b0(i),b=c(i),M=b.length;M--;){var E=b[r?M:++_];if(l(m[E],E,m)===!1)break}return i}}function bd(r,i,l){var c=i&P,_=n1(r);function m(){var b=this&&this!==cn&&this instanceof m?_:r;return b.apply(c?l:this,arguments)}return m}function su(r){return function(i){i=_0(i);var l=ie(i)?ur(i):e,c=l?l[0]:i.charAt(0),_=l?m2(l,1).join(""):i.slice(1);return c[r]()+_}}function he(r){return function(i){return Zs(ea(ra(i).replace(hh,"")),r,"")}}function n1(r){return function(){var i=arguments;switch(i.length){case 0:return new r;case 1:return new r(i[0]);case 2:return new r(i[0],i[1]);case 3:return new r(i[0],i[1],i[2]);case 4:return new r(i[0],i[1],i[2],i[3]);case 5:return new r(i[0],i[1],i[2],i[3],i[4]);case 6:return new r(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new r(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var l=ce(r.prototype),c=r.apply(l,i);return N0(c)?c:l}}function kd(r,i,l){var c=n1(r);function _(){for(var m=arguments.length,b=A(m),M=m,E=_e(_);M--;)b[M]=arguments[M];var L=m<3&&b[0]!==E&&b[m-1]!==E?[]:h2(b,E);if(m-=L.length,m<l)return cu(r,i,ki,_.placeholder,e,b,L,e,e,l-m);var F=this&&this!==cn&&this instanceof _?c:r;return Pn(F,this,b)}return _}function ou(r){return function(i,l,c){var _=b0(i);if(!Cn(i)){var m=Rt(l,3);i=on(i),l=function(M){return m(_[M],M,_)}}var b=r(i,l,c);return b>-1?_[m?i[b]:b]:e}}function lu(r){return Fr(function(i){var l=i.length,c=l,_=Jn.prototype.thru;for(r&&i.reverse();c--;){var m=i[c];if(typeof m!="function")throw new Zn(a);if(_&&!b&&Oi(m)=="wrapper")var b=new Jn([],!0)}for(c=b?c:l;++c<l;){m=i[c];var M=Oi(m),E=M=="wrapper"?C3(m):e;E&&P3(E[0])&&E[1]==(wt|G|tt|Qt)&&!E[4].length&&E[9]==1?b=b[Oi(E[0])].apply(b,E[3]):b=m.length==1&&P3(m)?b[M]():b.thru(m)}return function(){var L=arguments,F=L[0];if(b&&L.length==1&&Ft(F))return b.plant(F).value();for(var K=0,ut=l?i[K].apply(this,L):F;++K<l;)ut=i[K].call(this,ut);return ut}})}function ki(r,i,l,c,_,m,b,M,E,L){var F=i&wt,K=i&P,ut=i&N,kt=i&(G|rt),At=i&c0,Gt=ut?e:n1(r);function $t(){for(var Xt=arguments.length,i0=A(Xt),Ln=Xt;Ln--;)i0[Ln]=arguments[Ln];if(kt)var Mn=_e($t),Fn=Ih(i0,Mn);if(c&&(i0=nu(i0,c,_,kt)),m&&(i0=ru(i0,m,b,kt)),Xt-=Fn,kt&&Xt<L){var U0=h2(i0,Mn);return cu(r,i,ki,$t.placeholder,l,i0,U0,M,E,L-Xt)}var fr=K?l:this,qr=ut?fr[r]:r;return Xt=i0.length,M?i0=qd(i0,M):At&&Xt>1&&i0.reverse(),F&&E<Xt&&(i0.length=E),this&&this!==cn&&this instanceof $t&&(qr=Gt||n1(qr)),qr.apply(fr,i0)}return $t}function uu(r,i){return function(l,c){return J_(l,r,i(c),{})}}function Si(r,i){return function(l,c){var _;if(l===e&&c===e)return i;if(l!==e&&(_=l),c!==e){if(_===e)return c;typeof l=="string"||typeof c=="string"?(l=Nn(l),c=Nn(c)):(l=jl(l),c=jl(c)),_=r(l,c)}return _}}function T3(r){return Fr(function(i){return i=$0(i,In(Rt())),Kt(function(l){var c=this;return r(i,function(_){return Pn(_,c,l)})})})}function Mi(r,i){i=i===e?" ":Nn(i);var l=i.length;if(l<2)return l?y3(i,r):i;var c=y3(i,fi(r/se(i)));return ie(i)?m2(ur(c),0,r).join(""):c.slice(0,r)}function Sd(r,i,l,c){var _=i&P,m=n1(r);function b(){for(var M=-1,E=arguments.length,L=-1,F=c.length,K=A(F+E),ut=this&&this!==cn&&this instanceof b?m:r;++L<F;)K[L]=c[L];for(;E--;)K[L++]=arguments[++M];return Pn(ut,_?l:this,K)}return b}function au(r){return function(i,l,c){return c&&typeof c!="number"&&Sn(i,l,c)&&(l=c=e),i=Hr(i),l===e?(l=i,i=0):l=Hr(l),c=c===e?i<l?1:-1:Hr(c),ad(i,l,c,r)}}function Ti(r){return function(i,l){return typeof i=="string"&&typeof l=="string"||(i=nr(i),l=nr(l)),r(i,l)}}function cu(r,i,l,c,_,m,b,M,E,L){var F=i&G,K=F?b:e,ut=F?e:b,kt=F?m:e,At=F?e:m;i|=F?tt:yt,i&=~(F?yt:tt),i&Z||(i&=~(P|N));var Gt=[r,i,_,kt,K,At,ut,M,E,L],$t=l.apply(e,Gt);return P3(r)&&bu($t,Gt),$t.placeholder=c,ku($t,r,i)}function O3(r){var i=tn[r];return function(l,c){if(l=nr(l),c=c==null?0:gn(qt(c),292),c&&kl(l)){var _=(_0(l)+"e").split("e"),m=i(_[0]+"e"+(+_[1]+c));return _=(_0(m)+"e").split("e"),+(_[0]+"e"+(+_[1]-c))}return i(l)}}var Md=ue&&1/ni(new ue([,-0]))[1]==Tt?function(r){return new ue(r)}:z3;function fu(r){return function(i){var l=pn(i);return l==w?e3(i):l==J?Hh(i):Ph(i,r(i))}}function Lr(r,i,l,c,_,m,b,M){var E=i&N;if(!E&&typeof r!="function")throw new Zn(a);var L=c?c.length:0;if(L||(i&=~(tt|yt),c=_=e),b=b===e?b:nn(qt(b),0),M=M===e?M:qt(M),L-=_?_.length:0,i&yt){var F=c,K=_;c=_=e}var ut=E?e:C3(r),kt=[r,i,l,c,_,F,K,m,b,M];if(ut&&Wd(kt,ut),r=kt[0],i=kt[1],l=kt[2],c=kt[3],_=kt[4],M=kt[9]=kt[9]===e?E?0:r.length:nn(kt[9]-L,0),!M&&i&(G|rt)&&(i&=~(G|rt)),!i||i==P)var At=bd(r,i,l);else i==G||i==rt?At=kd(r,i,M):(i==tt||i==(P|tt))&&!_.length?At=Sd(r,i,l,c):At=ki.apply(e,kt);var Gt=ut?Bl:bu;return ku(Gt(At,kt),r,i)}function hu(r,i,l,c){return r===e||cr(r,le[l])&&!m0.call(c,l)?i:r}function _u(r,i,l,c,_,m){return N0(r)&&N0(i)&&(m.set(i,r),yi(r,i,e,_u,m),m.delete(i)),r}function Td(r){return i1(r)?e:r}function du(r,i,l,c,_,m){var b=l&U,M=r.length,E=i.length;if(M!=E&&!(b&&E>M))return!1;var L=m.get(r),F=m.get(i);if(L&&F)return L==i&&F==r;var K=-1,ut=!0,kt=l&C?new N2:e;for(m.set(r,i),m.set(i,r);++K<M;){var At=r[K],Gt=i[K];if(c)var $t=b?c(Gt,At,K,i,r,m):c(At,Gt,K,r,i,m);if($t!==e){if($t)continue;ut=!1;break}if(kt){if(!Js(i,function(Xt,i0){if(!Ve(kt,i0)&&(At===Xt||_(At,Xt,l,c,m)))return kt.push(i0)})){ut=!1;break}}else if(!(At===Gt||_(At,Gt,l,c,m))){ut=!1;break}}return m.delete(r),m.delete(i),ut}function Od(r,i,l,c,_,m,b){switch(l){case r0:if(r.byteLength!=i.byteLength||r.byteOffset!=i.byteOffset)return!1;r=r.buffer,i=i.buffer;case Yt:return!(r.byteLength!=i.byteLength||!m(new li(r),new li(i)));case at:case it:case R:return cr(+r,+i);case Jt:return r.name==i.name&&r.message==i.message;case nt:case z:return r==i+"";case w:var M=e3;case J:var E=c&U;if(M||(M=ni),r.size!=i.size&&!E)return!1;var L=b.get(r);if(L)return L==i;c|=C,b.set(r,i);var F=du(M(r),M(i),c,_,m,b);return b.delete(r),F;case St:if(ze)return ze.call(r)==ze.call(i)}return!1}function Ed(r,i,l,c,_,m){var b=l&U,M=E3(r),E=M.length,L=E3(i),F=L.length;if(E!=F&&!b)return!1;for(var K=E;K--;){var ut=M[K];if(!(b?ut in i:m0.call(i,ut)))return!1}var kt=m.get(r),At=m.get(i);if(kt&&At)return kt==i&&At==r;var Gt=!0;m.set(r,i),m.set(i,r);for(var $t=b;++K<E;){ut=M[K];var Xt=r[ut],i0=i[ut];if(c)var Ln=b?c(i0,Xt,ut,i,r,m):c(Xt,i0,ut,r,i,m);if(!(Ln===e?Xt===i0||_(Xt,i0,l,c,m):Ln)){Gt=!1;break}$t||($t=ut=="constructor")}if(Gt&&!$t){var Mn=r.constructor,Fn=i.constructor;Mn!=Fn&&"constructor"in r&&"constructor"in i&&!(typeof Mn=="function"&&Mn instanceof Mn&&typeof Fn=="function"&&Fn instanceof Fn)&&(Gt=!1)}return m.delete(r),m.delete(i),Gt}function Fr(r){return N3(xu(r,e,Du),r+"")}function E3(r){return Pl(r,on,A3)}function D3(r){return Pl(r,Rn,gu)}var C3=_i?function(r){return _i.get(r)}:z3;function Oi(r){for(var i=r.name+"",l=ae[i],c=m0.call(ae,i)?l.length:0;c--;){var _=l[c],m=_.func;if(m==null||m==r)return _.name}return i}function _e(r){var i=m0.call(d,"placeholder")?d:r;return i.placeholder}function Rt(){var r=d.iteratee||j3;return r=r===j3?Yl:r,arguments.length?r(arguments[0],arguments[1]):r}function Ei(r,i){var l=r.__data__;return Nd(i)?l[typeof i=="string"?"string":"hash"]:l.map}function R3(r){for(var i=on(r),l=i.length;l--;){var c=i[l],_=r[c];i[l]=[c,_,vu(_)]}return i}function F2(r,i){var l=Fh(r,i);return Nl(l)?l:e}function Dd(r){var i=m0.call(r,P2),l=r[P2];try{r[P2]=e;var c=!0}catch{}var _=si.call(r);return c&&(i?r[P2]=l:delete r[P2]),_}var A3=s3?function(r){return r==null?[]:(r=b0(r),c2(s3(r),function(i){return wl.call(r,i)}))}:Z3,gu=s3?function(r){for(var i=[];r;)f2(i,A3(r)),r=ui(r);return i}:Z3,pn=kn;(o3&&pn(new o3(new ArrayBuffer(1)))!=r0||Ge&&pn(new Ge)!=w||l3&&pn(l3.resolve())!=H||ue&&pn(new ue)!=J||je&&pn(new je)!=vt)&&(pn=function(r){var i=kn(r),l=i==$?r.constructor:e,c=l?W2(l):"";if(c)switch(c){case f_:return r0;case h_:return w;case __:return H;case d_:return J;case g_:return vt}return i});function Cd(r,i,l){for(var c=-1,_=l.length;++c<_;){var m=l[c],b=m.size;switch(m.type){case"drop":r+=b;break;case"dropRight":i-=b;break;case"take":i=gn(i,r+b);break;case"takeRight":r=nn(r,i-b);break}}return{start:r,end:i}}function Rd(r){var i=r.match(q);return i?i[1].split(k):[]}function pu(r,i,l){i=p2(i,r);for(var c=-1,_=i.length,m=!1;++c<_;){var b=wr(i[c]);if(!(m=r!=null&&l(r,b)))break;r=r[b]}return m||++c!=_?m:(_=r==null?0:r.length,!!_&&Ii(_)&&Wr(b,_)&&(Ft(r)||U2(r)))}function Ad(r){var i=r.length,l=new r.constructor(i);return i&&typeof r[0]=="string"&&m0.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function mu(r){return typeof r.constructor=="function"&&!r1(r)?ce(ui(r)):{}}function $d(r,i,l){var c=r.constructor;switch(i){case Yt:return M3(r);case at:case it:return new c(+r);case r0:return pd(r,l);case e0:case J0:case I0:case sn:case X0:case En:case $r:case B0:case G0:return Ql(r,l);case w:return new c;case R:case z:return new c(r);case nt:return md(r);case J:return new c;case St:return vd(r)}}function Pd(r,i){var l=i.length;if(!l)return r;var c=l-1;return i[c]=(l>1?"& ":"")+i[c],i=i.join(l>2?", ":" "),r.replace(B,`{
/* [wrapped with `+i+`] */
`)}function Id(r){return Ft(r)||U2(r)||!!(bl&&r&&r[bl])}function Wr(r,i){var l=typeof r;return i=i??Dt,!!i&&(l=="number"||l!="symbol"&&Ut.test(r))&&r>-1&&r%1==0&&r<i}function Sn(r,i,l){if(!N0(l))return!1;var c=typeof i;return(c=="number"?Cn(l)&&Wr(i,l.length):c=="string"&&i in l)?cr(l[i],r):!1}function $3(r,i){if(Ft(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||Yn(r)?!0:Us.test(r)||!z1.test(r)||i!=null&&r in b0(i)}function Nd(r){var i=typeof r;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?r!=="__proto__":r===null}function P3(r){var i=Oi(r),l=d[i];if(typeof l!="function"||!(i in t0.prototype))return!1;if(r===l)return!0;var c=C3(l);return!!c&&r===c[0]}function Yd(r){return!!vl&&vl in r}var Ld=ei?Ur:J3;function r1(r){var i=r&&r.constructor,l=typeof i=="function"&&i.prototype||le;return r===l}function vu(r){return r===r&&!N0(r)}function yu(r,i){return function(l){return l==null?!1:l[r]===i&&(i!==e||r in b0(l))}}function Fd(r){var i=$i(r,function(c){return l.size===p&&l.clear(),c}),l=i.cache;return i}function Wd(r,i){var l=r[1],c=i[1],_=l|c,m=_<(P|N|wt),b=c==wt&&l==G||c==wt&&l==Qt&&r[7].length<=i[8]||c==(wt|Qt)&&i[7].length<=i[8]&&l==G;if(!(m||b))return r;c&P&&(r[2]=i[2],_|=l&P?0:Z);var M=i[3];if(M){var E=r[3];r[3]=E?nu(E,M,i[4]):M,r[4]=E?h2(r[3],v):i[4]}return M=i[5],M&&(E=r[5],r[5]=E?ru(E,M,i[6]):M,r[6]=E?h2(r[5],v):i[6]),M=i[7],M&&(r[7]=M),c&wt&&(r[8]=r[8]==null?i[8]:gn(r[8],i[8])),r[9]==null&&(r[9]=i[9]),r[0]=i[0],r[1]=_,r}function Ud(r){var i=[];if(r!=null)for(var l in b0(r))i.push(l);return i}function Hd(r){return si.call(r)}function xu(r,i,l){return i=nn(i===e?r.length-1:i,0),function(){for(var c=arguments,_=-1,m=nn(c.length-i,0),b=A(m);++_<m;)b[_]=c[i+_];_=-1;for(var M=A(i+1);++_<i;)M[_]=c[_];return M[i]=l(b),Pn(r,this,M)}}function wu(r,i){return i.length<2?r:L2(r,Qn(i,0,-1))}function qd(r,i){for(var l=r.length,c=gn(i.length,l),_=Dn(r);c--;){var m=i[c];r[c]=Wr(m,l)?_[m]:e}return r}function I3(r,i){if(!(i==="constructor"&&typeof r[i]=="function")&&i!="__proto__")return r[i]}var bu=Su(Bl),e1=i_||function(r,i){return cn.setTimeout(r,i)},N3=Su(hd);function ku(r,i,l){var c=i+"";return N3(r,Pd(c,Vd(Rd(c),l)))}function Su(r){var i=0,l=0;return function(){var c=u_(),_=L0-(c-l);if(l=c,_>0){if(++i>=K0)return arguments[0]}else i=0;return r.apply(e,arguments)}}function Di(r,i){var l=-1,c=r.length,_=c-1;for(i=i===e?c:i;++l<i;){var m=v3(l,_),b=r[m];r[m]=r[l],r[l]=b}return r.length=i,r}var Mu=Fd(function(r){var i=[];return r.charCodeAt(0)===46&&i.push(""),r.replace(Z1,function(l,c,_,m){i.push(_?m.replace(_t,"$1"):c||l)}),i});function wr(r){if(typeof r=="string"||Yn(r))return r;var i=r+"";return i=="0"&&1/r==-Tt?"-0":i}function W2(r){if(r!=null){try{return ii.call(r)}catch{}try{return r+""}catch{}}return""}function Vd(r,i){return zn(lr,function(l){var c="_."+l[0];i&l[1]&&!Q1(r,c)&&r.push(c)}),r.sort()}function Tu(r){if(r instanceof t0)return r.clone();var i=new Jn(r.__wrapped__,r.__chain__);return i.__actions__=Dn(r.__actions__),i.__index__=r.__index__,i.__values__=r.__values__,i}function Bd(r,i,l){(l?Sn(r,i,l):i===e)?i=1:i=nn(qt(i),0);var c=r==null?0:r.length;if(!c||i<1)return[];for(var _=0,m=0,b=A(fi(c/i));_<c;)b[m++]=Qn(r,_,_+=i);return b}function Gd(r){for(var i=-1,l=r==null?0:r.length,c=0,_=[];++i<l;){var m=r[i];m&&(_[c++]=m)}return _}function jd(){var r=arguments.length;if(!r)return[];for(var i=A(r-1),l=arguments[0],c=r;c--;)i[c-1]=arguments[c];return f2(Ft(l)?Dn(l):[l],fn(i,1))}var Kd=Kt(function(r,i){return W0(r)?Je(r,fn(i,1,W0,!0)):[]}),zd=Kt(function(r,i){var l=tr(i);return W0(l)&&(l=e),W0(r)?Je(r,fn(i,1,W0,!0),Rt(l,2)):[]}),Zd=Kt(function(r,i){var l=tr(i);return W0(l)&&(l=e),W0(r)?Je(r,fn(i,1,W0,!0),e,l):[]});function Jd(r,i,l){var c=r==null?0:r.length;return c?(i=l||i===e?1:qt(i),Qn(r,i<0?0:i,c)):[]}function Xd(r,i,l){var c=r==null?0:r.length;return c?(i=l||i===e?1:qt(i),i=c-i,Qn(r,0,i<0?0:i)):[]}function Qd(r,i){return r&&r.length?wi(r,Rt(i,3),!0,!0):[]}function t6(r,i){return r&&r.length?wi(r,Rt(i,3),!0):[]}function n6(r,i,l,c){var _=r==null?0:r.length;return _?(l&&typeof l!="number"&&Sn(r,i,l)&&(l=0,c=_),j_(r,i,l,c)):[]}function Ou(r,i,l){var c=r==null?0:r.length;if(!c)return-1;var _=l==null?0:qt(l);return _<0&&(_=nn(c+_,0)),ti(r,Rt(i,3),_)}function Eu(r,i,l){var c=r==null?0:r.length;if(!c)return-1;var _=c-1;return l!==e&&(_=qt(l),_=l<0?nn(c+_,0):gn(_,c-1)),ti(r,Rt(i,3),_,!0)}function Du(r){var i=r==null?0:r.length;return i?fn(r,1):[]}function r6(r){var i=r==null?0:r.length;return i?fn(r,Tt):[]}function e6(r,i){var l=r==null?0:r.length;return l?(i=i===e?1:qt(i),fn(r,i)):[]}function i6(r){for(var i=-1,l=r==null?0:r.length,c={};++i<l;){var _=r[i];c[_[0]]=_[1]}return c}function Cu(r){return r&&r.length?r[0]:e}function s6(r,i,l){var c=r==null?0:r.length;if(!c)return-1;var _=l==null?0:qt(l);return _<0&&(_=nn(c+_,0)),ee(r,i,_)}function o6(r){var i=r==null?0:r.length;return i?Qn(r,0,-1):[]}var l6=Kt(function(r){var i=$0(r,k3);return i.length&&i[0]===r[0]?_3(i):[]}),u6=Kt(function(r){var i=tr(r),l=$0(r,k3);return i===tr(l)?i=e:l.pop(),l.length&&l[0]===r[0]?_3(l,Rt(i,2)):[]}),a6=Kt(function(r){var i=tr(r),l=$0(r,k3);return i=typeof i=="function"?i:e,i&&l.pop(),l.length&&l[0]===r[0]?_3(l,e,i):[]});function c6(r,i){return r==null?"":o_.call(r,i)}function tr(r){var i=r==null?0:r.length;return i?r[i-1]:e}function f6(r,i,l){var c=r==null?0:r.length;if(!c)return-1;var _=c;return l!==e&&(_=qt(l),_=_<0?nn(c+_,0):gn(_,c-1)),i===i?Vh(r,i,_):ti(r,cl,_,!0)}function h6(r,i){return r&&r.length?Ul(r,qt(i)):e}var _6=Kt(Ru);function Ru(r,i){return r&&r.length&&i&&i.length?m3(r,i):r}function d6(r,i,l){return r&&r.length&&i&&i.length?m3(r,i,Rt(l,2)):r}function g6(r,i,l){return r&&r.length&&i&&i.length?m3(r,i,e,l):r}var p6=Fr(function(r,i){var l=r==null?0:r.length,c=a3(r,i);return Vl(r,$0(i,function(_){return Wr(_,l)?+_:_}).sort(tu)),c});function m6(r,i){var l=[];if(!(r&&r.length))return l;var c=-1,_=[],m=r.length;for(i=Rt(i,3);++c<m;){var b=r[c];i(b,c,r)&&(l.push(b),_.push(c))}return Vl(r,_),l}function Y3(r){return r==null?r:c_.call(r)}function v6(r,i,l){var c=r==null?0:r.length;return c?(l&&typeof l!="number"&&Sn(r,i,l)?(i=0,l=c):(i=i==null?0:qt(i),l=l===e?c:qt(l)),Qn(r,i,l)):[]}function y6(r,i){return xi(r,i)}function x6(r,i,l){return x3(r,i,Rt(l,2))}function w6(r,i){var l=r==null?0:r.length;if(l){var c=xi(r,i);if(c<l&&cr(r[c],i))return c}return-1}function b6(r,i){return xi(r,i,!0)}function k6(r,i,l){return x3(r,i,Rt(l,2),!0)}function S6(r,i){var l=r==null?0:r.length;if(l){var c=xi(r,i,!0)-1;if(cr(r[c],i))return c}return-1}function M6(r){return r&&r.length?Gl(r):[]}function T6(r,i){return r&&r.length?Gl(r,Rt(i,2)):[]}function O6(r){var i=r==null?0:r.length;return i?Qn(r,1,i):[]}function E6(r,i,l){return r&&r.length?(i=l||i===e?1:qt(i),Qn(r,0,i<0?0:i)):[]}function D6(r,i,l){var c=r==null?0:r.length;return c?(i=l||i===e?1:qt(i),i=c-i,Qn(r,i<0?0:i,c)):[]}function C6(r,i){return r&&r.length?wi(r,Rt(i,3),!1,!0):[]}function R6(r,i){return r&&r.length?wi(r,Rt(i,3)):[]}var A6=Kt(function(r){return g2(fn(r,1,W0,!0))}),$6=Kt(function(r){var i=tr(r);return W0(i)&&(i=e),g2(fn(r,1,W0,!0),Rt(i,2))}),P6=Kt(function(r){var i=tr(r);return i=typeof i=="function"?i:e,g2(fn(r,1,W0,!0),e,i)});function I6(r){return r&&r.length?g2(r):[]}function N6(r,i){return r&&r.length?g2(r,Rt(i,2)):[]}function Y6(r,i){return i=typeof i=="function"?i:e,r&&r.length?g2(r,e,i):[]}function L3(r){if(!(r&&r.length))return[];var i=0;return r=c2(r,function(l){if(W0(l))return i=nn(l.length,i),!0}),n3(i,function(l){return $0(r,Xs(l))})}function Au(r,i){if(!(r&&r.length))return[];var l=L3(r);return i==null?l:$0(l,function(c){return Pn(i,e,c)})}var L6=Kt(function(r,i){return W0(r)?Je(r,i):[]}),F6=Kt(function(r){return b3(c2(r,W0))}),W6=Kt(function(r){var i=tr(r);return W0(i)&&(i=e),b3(c2(r,W0),Rt(i,2))}),U6=Kt(function(r){var i=tr(r);return i=typeof i=="function"?i:e,b3(c2(r,W0),e,i)}),H6=Kt(L3);function q6(r,i){return Zl(r||[],i||[],Ze)}function V6(r,i){return Zl(r||[],i||[],t1)}var B6=Kt(function(r){var i=r.length,l=i>1?r[i-1]:e;return l=typeof l=="function"?(r.pop(),l):e,Au(r,l)});function $u(r){var i=d(r);return i.__chain__=!0,i}function G6(r,i){return i(r),r}function Ci(r,i){return i(r)}var j6=Fr(function(r){var i=r.length,l=i?r[0]:0,c=this.__wrapped__,_=function(m){return a3(m,r)};return i>1||this.__actions__.length||!(c instanceof t0)||!Wr(l)?this.thru(_):(c=c.slice(l,+l+(i?1:0)),c.__actions__.push({func:Ci,args:[_],thisArg:e}),new Jn(c,this.__chain__).thru(function(m){return i&&!m.length&&m.push(e),m}))});function K6(){return $u(this)}function z6(){return new Jn(this.value(),this.__chain__)}function Z6(){this.__values__===e&&(this.__values__=ju(this.value()));var r=this.__index__>=this.__values__.length,i=r?e:this.__values__[this.__index__++];return{done:r,value:i}}function J6(){return this}function X6(r){for(var i,l=this;l instanceof gi;){var c=Tu(l);c.__index__=0,c.__values__=e,i?_.__wrapped__=c:i=c;var _=c;l=l.__wrapped__}return _.__wrapped__=r,i}function Q6(){var r=this.__wrapped__;if(r instanceof t0){var i=r;return this.__actions__.length&&(i=new t0(this)),i=i.reverse(),i.__actions__.push({func:Ci,args:[Y3],thisArg:e}),new Jn(i,this.__chain__)}return this.thru(Y3)}function t8(){return zl(this.__wrapped__,this.__actions__)}var n8=bi(function(r,i,l){m0.call(r,l)?++r[l]:Yr(r,l,1)});function r8(r,i,l){var c=Ft(r)?ul:G_;return l&&Sn(r,i,l)&&(i=e),c(r,Rt(i,3))}function e8(r,i){var l=Ft(r)?c2:Al;return l(r,Rt(i,3))}var i8=ou(Ou),s8=ou(Eu);function o8(r,i){return fn(Ri(r,i),1)}function l8(r,i){return fn(Ri(r,i),Tt)}function u8(r,i,l){return l=l===e?1:qt(l),fn(Ri(r,i),l)}function Pu(r,i){var l=Ft(r)?zn:d2;return l(r,Rt(i,3))}function Iu(r,i){var l=Ft(r)?Oh:Rl;return l(r,Rt(i,3))}var a8=bi(function(r,i,l){m0.call(r,l)?r[l].push(i):Yr(r,l,[i])});function c8(r,i,l,c){r=Cn(r)?r:ge(r),l=l&&!c?qt(l):0;var _=r.length;return l<0&&(l=nn(_+l,0)),Ni(r)?l<=_&&r.indexOf(i,l)>-1:!!_&&ee(r,i,l)>-1}var f8=Kt(function(r,i,l){var c=-1,_=typeof i=="function",m=Cn(r)?A(r.length):[];return d2(r,function(b){m[++c]=_?Pn(i,b,l):Xe(b,i,l)}),m}),h8=bi(function(r,i,l){Yr(r,l,i)});function Ri(r,i){var l=Ft(r)?$0:Ll;return l(r,Rt(i,3))}function _8(r,i,l,c){return r==null?[]:(Ft(i)||(i=i==null?[]:[i]),l=c?e:l,Ft(l)||(l=l==null?[]:[l]),Hl(r,i,l))}var d8=bi(function(r,i,l){r[l?0:1].push(i)},function(){return[[],[]]});function g8(r,i,l){var c=Ft(r)?Zs:hl,_=arguments.length<3;return c(r,Rt(i,4),l,_,d2)}function p8(r,i,l){var c=Ft(r)?Eh:hl,_=arguments.length<3;return c(r,Rt(i,4),l,_,Rl)}function m8(r,i){var l=Ft(r)?c2:Al;return l(r,Pi(Rt(i,3)))}function v8(r){var i=Ft(r)?Ol:cd;return i(r)}function y8(r,i,l){(l?Sn(r,i,l):i===e)?i=1:i=qt(i);var c=Ft(r)?U_:fd;return c(r,i)}function x8(r){var i=Ft(r)?H_:_d;return i(r)}function w8(r){if(r==null)return 0;if(Cn(r))return Ni(r)?se(r):r.length;var i=pn(r);return i==w||i==J?r.size:g3(r).length}function b8(r,i,l){var c=Ft(r)?Js:dd;return l&&Sn(r,i,l)&&(i=e),c(r,Rt(i,3))}var k8=Kt(function(r,i){if(r==null)return[];var l=i.length;return l>1&&Sn(r,i[0],i[1])?i=[]:l>2&&Sn(i[0],i[1],i[2])&&(i=[i[0]]),Hl(r,fn(i,1),[])}),Ai=e_||function(){return cn.Date.now()};function S8(r,i){if(typeof i!="function")throw new Zn(a);return r=qt(r),function(){if(--r<1)return i.apply(this,arguments)}}function Nu(r,i,l){return i=l?e:i,i=r&&i==null?r.length:i,Lr(r,wt,e,e,e,e,i)}function Yu(r,i){var l;if(typeof i!="function")throw new Zn(a);return r=qt(r),function(){return--r>0&&(l=i.apply(this,arguments)),r<=1&&(i=e),l}}var F3=Kt(function(r,i,l){var c=P;if(l.length){var _=h2(l,_e(F3));c|=tt}return Lr(r,c,i,l,_)}),Lu=Kt(function(r,i,l){var c=P|N;if(l.length){var _=h2(l,_e(Lu));c|=tt}return Lr(i,c,r,l,_)});function Fu(r,i,l){i=l?e:i;var c=Lr(r,G,e,e,e,e,e,i);return c.placeholder=Fu.placeholder,c}function Wu(r,i,l){i=l?e:i;var c=Lr(r,rt,e,e,e,e,e,i);return c.placeholder=Wu.placeholder,c}function Uu(r,i,l){var c,_,m,b,M,E,L=0,F=!1,K=!1,ut=!0;if(typeof r!="function")throw new Zn(a);i=nr(i)||0,N0(l)&&(F=!!l.leading,K="maxWait"in l,m=K?nn(nr(l.maxWait)||0,i):m,ut="trailing"in l?!!l.trailing:ut);function kt(U0){var fr=c,qr=_;return c=_=e,L=U0,b=r.apply(qr,fr),b}function At(U0){return L=U0,M=e1(Xt,i),F?kt(U0):b}function Gt(U0){var fr=U0-E,qr=U0-L,oa=i-fr;return K?gn(oa,m-qr):oa}function $t(U0){var fr=U0-E,qr=U0-L;return E===e||fr>=i||fr<0||K&&qr>=m}function Xt(){var U0=Ai();if($t(U0))return i0(U0);M=e1(Xt,Gt(U0))}function i0(U0){return M=e,ut&&c?kt(U0):(c=_=e,b)}function Ln(){M!==e&&Jl(M),L=0,c=E=_=M=e}function Mn(){return M===e?b:i0(Ai())}function Fn(){var U0=Ai(),fr=$t(U0);if(c=arguments,_=this,E=U0,fr){if(M===e)return At(E);if(K)return Jl(M),M=e1(Xt,i),kt(E)}return M===e&&(M=e1(Xt,i)),b}return Fn.cancel=Ln,Fn.flush=Mn,Fn}var M8=Kt(function(r,i){return Cl(r,1,i)}),T8=Kt(function(r,i,l){return Cl(r,nr(i)||0,l)});function O8(r){return Lr(r,c0)}function $i(r,i){if(typeof r!="function"||i!=null&&typeof i!="function")throw new Zn(a);var l=function(){var c=arguments,_=i?i.apply(this,c):c[0],m=l.cache;if(m.has(_))return m.get(_);var b=r.apply(this,c);return l.cache=m.set(_,b)||m,b};return l.cache=new($i.Cache||Nr),l}$i.Cache=Nr;function Pi(r){if(typeof r!="function")throw new Zn(a);return function(){var i=arguments;switch(i.length){case 0:return!r.call(this);case 1:return!r.call(this,i[0]);case 2:return!r.call(this,i[0],i[1]);case 3:return!r.call(this,i[0],i[1],i[2])}return!r.apply(this,i)}}function E8(r){return Yu(2,r)}var D8=gd(function(r,i){i=i.length==1&&Ft(i[0])?$0(i[0],In(Rt())):$0(fn(i,1),In(Rt()));var l=i.length;return Kt(function(c){for(var _=-1,m=gn(c.length,l);++_<m;)c[_]=i[_].call(this,c[_]);return Pn(r,this,c)})}),W3=Kt(function(r,i){var l=h2(i,_e(W3));return Lr(r,tt,e,i,l)}),Hu=Kt(function(r,i){var l=h2(i,_e(Hu));return Lr(r,yt,e,i,l)}),C8=Fr(function(r,i){return Lr(r,Qt,e,e,e,i)});function R8(r,i){if(typeof r!="function")throw new Zn(a);return i=i===e?i:qt(i),Kt(r,i)}function A8(r,i){if(typeof r!="function")throw new Zn(a);return i=i==null?0:nn(qt(i),0),Kt(function(l){var c=l[i],_=m2(l,0,i);return c&&f2(_,c),Pn(r,this,_)})}function $8(r,i,l){var c=!0,_=!0;if(typeof r!="function")throw new Zn(a);return N0(l)&&(c="leading"in l?!!l.leading:c,_="trailing"in l?!!l.trailing:_),Uu(r,i,{leading:c,maxWait:i,trailing:_})}function P8(r){return Nu(r,1)}function I8(r,i){return W3(S3(i),r)}function N8(){if(!arguments.length)return[];var r=arguments[0];return Ft(r)?r:[r]}function Y8(r){return Xn(r,T)}function L8(r,i){return i=typeof i=="function"?i:e,Xn(r,T,i)}function F8(r){return Xn(r,y|T)}function W8(r,i){return i=typeof i=="function"?i:e,Xn(r,y|T,i)}function U8(r,i){return i==null||Dl(r,i,on(i))}function cr(r,i){return r===i||r!==r&&i!==i}var H8=Ti(h3),q8=Ti(function(r,i){return r>=i}),U2=Il(function(){return arguments}())?Il:function(r){return Y0(r)&&m0.call(r,"callee")&&!wl.call(r,"callee")},Ft=A.isArray,V8=rl?In(rl):X_;function Cn(r){return r!=null&&Ii(r.length)&&!Ur(r)}function W0(r){return Y0(r)&&Cn(r)}function B8(r){return r===!0||r===!1||Y0(r)&&kn(r)==at}var v2=s_||J3,G8=el?In(el):Q_;function j8(r){return Y0(r)&&r.nodeType===1&&!i1(r)}function K8(r){if(r==null)return!0;if(Cn(r)&&(Ft(r)||typeof r=="string"||typeof r.splice=="function"||v2(r)||de(r)||U2(r)))return!r.length;var i=pn(r);if(i==w||i==J)return!r.size;if(r1(r))return!g3(r).length;for(var l in r)if(m0.call(r,l))return!1;return!0}function z8(r,i){return Qe(r,i)}function Z8(r,i,l){l=typeof l=="function"?l:e;var c=l?l(r,i):e;return c===e?Qe(r,i,e,l):!!c}function U3(r){if(!Y0(r))return!1;var i=kn(r);return i==Jt||i==xt||typeof r.message=="string"&&typeof r.name=="string"&&!i1(r)}function J8(r){return typeof r=="number"&&kl(r)}function Ur(r){if(!N0(r))return!1;var i=kn(r);return i==f0||i==x||i==Y||i==st}function qu(r){return typeof r=="number"&&r==qt(r)}function Ii(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Dt}function N0(r){var i=typeof r;return r!=null&&(i=="object"||i=="function")}function Y0(r){return r!=null&&typeof r=="object"}var Vu=il?In(il):nd;function X8(r,i){return r===i||d3(r,i,R3(i))}function Q8(r,i,l){return l=typeof l=="function"?l:e,d3(r,i,R3(i),l)}function t9(r){return Bu(r)&&r!=+r}function n9(r){if(Ld(r))throw new Nt(u);return Nl(r)}function r9(r){return r===null}function e9(r){return r==null}function Bu(r){return typeof r=="number"||Y0(r)&&kn(r)==R}function i1(r){if(!Y0(r)||kn(r)!=$)return!1;var i=ui(r);if(i===null)return!0;var l=m0.call(i,"constructor")&&i.constructor;return typeof l=="function"&&l instanceof l&&ii.call(l)==Qh}var H3=sl?In(sl):rd;function i9(r){return qu(r)&&r>=-Dt&&r<=Dt}var Gu=ol?In(ol):ed;function Ni(r){return typeof r=="string"||!Ft(r)&&Y0(r)&&kn(r)==z}function Yn(r){return typeof r=="symbol"||Y0(r)&&kn(r)==St}var de=ll?In(ll):id;function s9(r){return r===e}function o9(r){return Y0(r)&&pn(r)==vt}function l9(r){return Y0(r)&&kn(r)==Ct}var u9=Ti(p3),a9=Ti(function(r,i){return r<=i});function ju(r){if(!r)return[];if(Cn(r))return Ni(r)?ur(r):Dn(r);if(Be&&r[Be])return Uh(r[Be]());var i=pn(r),l=i==w?e3:i==J?ni:ge;return l(r)}function Hr(r){if(!r)return r===0?r:0;if(r=nr(r),r===Tt||r===-Tt){var i=r<0?-1:1;return i*an}return r===r?r:0}function qt(r){var i=Hr(r),l=i%1;return i===i?l?i-l:i:0}function Ku(r){return r?Y2(qt(r),0,D0):0}function nr(r){if(typeof r=="number")return r;if(Yn(r))return _n;if(N0(r)){var i=typeof r.valueOf=="function"?r.valueOf():r;r=N0(i)?i+"":i}if(typeof r!="string")return r===0?r:+r;r=_l(r);var l=Bt.test(r);return l||Ht.test(r)?Sh(r.slice(2),l?2:8):It.test(r)?_n:+r}function zu(r){return xr(r,Rn(r))}function c9(r){return r?Y2(qt(r),-Dt,Dt):r===0?r:0}function _0(r){return r==null?"":Nn(r)}var f9=fe(function(r,i){if(r1(i)||Cn(i)){xr(i,on(i),r);return}for(var l in i)m0.call(i,l)&&Ze(r,l,i[l])}),Zu=fe(function(r,i){xr(i,Rn(i),r)}),Yi=fe(function(r,i,l,c){xr(i,Rn(i),r,c)}),h9=fe(function(r,i,l,c){xr(i,on(i),r,c)}),_9=Fr(a3);function d9(r,i){var l=ce(r);return i==null?l:El(l,i)}var g9=Kt(function(r,i){r=b0(r);var l=-1,c=i.length,_=c>2?i[2]:e;for(_&&Sn(i[0],i[1],_)&&(c=1);++l<c;)for(var m=i[l],b=Rn(m),M=-1,E=b.length;++M<E;){var L=b[M],F=r[L];(F===e||cr(F,le[L])&&!m0.call(r,L))&&(r[L]=m[L])}return r}),p9=Kt(function(r){return r.push(e,_u),Pn(Ju,e,r)});function m9(r,i){return al(r,Rt(i,3),yr)}function v9(r,i){return al(r,Rt(i,3),f3)}function y9(r,i){return r==null?r:c3(r,Rt(i,3),Rn)}function x9(r,i){return r==null?r:$l(r,Rt(i,3),Rn)}function w9(r,i){return r&&yr(r,Rt(i,3))}function b9(r,i){return r&&f3(r,Rt(i,3))}function k9(r){return r==null?[]:vi(r,on(r))}function S9(r){return r==null?[]:vi(r,Rn(r))}function q3(r,i,l){var c=r==null?e:L2(r,i);return c===e?l:c}function M9(r,i){return r!=null&&pu(r,i,K_)}function V3(r,i){return r!=null&&pu(r,i,z_)}var T9=uu(function(r,i,l){i!=null&&typeof i.toString!="function"&&(i=si.call(i)),r[i]=l},G3(An)),O9=uu(function(r,i,l){i!=null&&typeof i.toString!="function"&&(i=si.call(i)),m0.call(r,i)?r[i].push(l):r[i]=[l]},Rt),E9=Kt(Xe);function on(r){return Cn(r)?Tl(r):g3(r)}function Rn(r){return Cn(r)?Tl(r,!0):sd(r)}function D9(r,i){var l={};return i=Rt(i,3),yr(r,function(c,_,m){Yr(l,i(c,_,m),c)}),l}function C9(r,i){var l={};return i=Rt(i,3),yr(r,function(c,_,m){Yr(l,_,i(c,_,m))}),l}var R9=fe(function(r,i,l){yi(r,i,l)}),Ju=fe(function(r,i,l,c){yi(r,i,l,c)}),A9=Fr(function(r,i){var l={};if(r==null)return l;var c=!1;i=$0(i,function(m){return m=p2(m,r),c||(c=m.length>1),m}),xr(r,D3(r),l),c&&(l=Xn(l,y|S|T,Td));for(var _=i.length;_--;)w3(l,i[_]);return l});function $9(r,i){return Xu(r,Pi(Rt(i)))}var P9=Fr(function(r,i){return r==null?{}:ld(r,i)});function Xu(r,i){if(r==null)return{};var l=$0(D3(r),function(c){return[c]});return i=Rt(i),ql(r,l,function(c,_){return i(c,_[0])})}function I9(r,i,l){i=p2(i,r);var c=-1,_=i.length;for(_||(_=1,r=e);++c<_;){var m=r==null?e:r[wr(i[c])];m===e&&(c=_,m=l),r=Ur(m)?m.call(r):m}return r}function N9(r,i,l){return r==null?r:t1(r,i,l)}function Y9(r,i,l,c){return c=typeof c=="function"?c:e,r==null?r:t1(r,i,l,c)}var Qu=fu(on),ta=fu(Rn);function L9(r,i,l){var c=Ft(r),_=c||v2(r)||de(r);if(i=Rt(i,4),l==null){var m=r&&r.constructor;_?l=c?new m:[]:N0(r)?l=Ur(m)?ce(ui(r)):{}:l={}}return(_?zn:yr)(r,function(b,M,E){return i(l,b,M,E)}),l}function F9(r,i){return r==null?!0:w3(r,i)}function W9(r,i,l){return r==null?r:Kl(r,i,S3(l))}function U9(r,i,l,c){return c=typeof c=="function"?c:e,r==null?r:Kl(r,i,S3(l),c)}function ge(r){return r==null?[]:r3(r,on(r))}function H9(r){return r==null?[]:r3(r,Rn(r))}function q9(r,i,l){return l===e&&(l=i,i=e),l!==e&&(l=nr(l),l=l===l?l:0),i!==e&&(i=nr(i),i=i===i?i:0),Y2(nr(r),i,l)}function V9(r,i,l){return i=Hr(i),l===e?(l=i,i=0):l=Hr(l),r=nr(r),Z_(r,i,l)}function B9(r,i,l){if(l&&typeof l!="boolean"&&Sn(r,i,l)&&(i=l=e),l===e&&(typeof i=="boolean"?(l=i,i=e):typeof r=="boolean"&&(l=r,r=e)),r===e&&i===e?(r=0,i=1):(r=Hr(r),i===e?(i=r,r=0):i=Hr(i)),r>i){var c=r;r=i,i=c}if(l||r%1||i%1){var _=Sl();return gn(r+_*(i-r+kh("1e-"+((_+"").length-1))),i)}return v3(r,i)}var G9=he(function(r,i,l){return i=i.toLowerCase(),r+(l?na(i):i)});function na(r){return B3(_0(r).toLowerCase())}function ra(r){return r=_0(r),r&&r.replace(Q0,Nh).replace(_h,"")}function j9(r,i,l){r=_0(r),i=Nn(i);var c=r.length;l=l===e?c:Y2(qt(l),0,c);var _=l;return l-=i.length,l>=0&&r.slice(l,_)==i}function K9(r){return r=_0(r),r&&K1.test(r)?r.replace(G1,Yh):r}function z9(r){return r=_0(r),r&&g.test(r)?r.replace(V,"\\$&"):r}var Z9=he(function(r,i,l){return r+(l?"-":"")+i.toLowerCase()}),J9=he(function(r,i,l){return r+(l?" ":"")+i.toLowerCase()}),X9=su("toLowerCase");function Q9(r,i,l){r=_0(r),i=qt(i);var c=i?se(r):0;if(!i||c>=i)return r;var _=(i-c)/2;return Mi(hi(_),l)+r+Mi(fi(_),l)}function t7(r,i,l){r=_0(r),i=qt(i);var c=i?se(r):0;return i&&c<i?r+Mi(i-c,l):r}function n7(r,i,l){r=_0(r),i=qt(i);var c=i?se(r):0;return i&&c<i?Mi(i-c,l)+r:r}function r7(r,i,l){return l||i==null?i=0:i&&(i=+i),a_(_0(r).replace(W,""),i||0)}function e7(r,i,l){return(l?Sn(r,i,l):i===e)?i=1:i=qt(i),y3(_0(r),i)}function i7(){var r=arguments,i=_0(r[0]);return r.length<3?i:i.replace(r[1],r[2])}var s7=he(function(r,i,l){return r+(l?"_":"")+i.toLowerCase()});function o7(r,i,l){return l&&typeof l!="number"&&Sn(r,i,l)&&(i=l=e),l=l===e?D0:l>>>0,l?(r=_0(r),r&&(typeof i=="string"||i!=null&&!H3(i))&&(i=Nn(i),!i&&ie(r))?m2(ur(r),0,l):r.split(i,l)):[]}var l7=he(function(r,i,l){return r+(l?" ":"")+B3(i)});function u7(r,i,l){return r=_0(r),l=l==null?0:Y2(qt(l),0,r.length),i=Nn(i),r.slice(l,l+i.length)==i}function a7(r,i,l){var c=d.templateSettings;l&&Sn(r,i,l)&&(i=e),r=_0(r),i=Yi({},i,c,hu);var _=Yi({},i.imports,c.imports,hu),m=on(_),b=r3(_,m),M,E,L=0,F=i.interpolate||o0,K="__p += '",ut=i3((i.escape||o0).source+"|"+F.source+"|"+(F===a2?bt:o0).source+"|"+(i.evaluate||o0).source+"|$","g"),kt="//# sourceURL="+(m0.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++vh+"]")+`
`;r.replace(ut,function($t,Xt,i0,Ln,Mn,Fn){return i0||(i0=Ln),K+=r.slice(L,Fn).replace(l0,Lh),Xt&&(M=!0,K+=`' +
__e(`+Xt+`) +
'`),Mn&&(E=!0,K+=`';
`+Mn+`;
__p += '`),i0&&(K+=`' +
((__t = (`+i0+`)) == null ? '' : __t) +
'`),L=Fn+$t.length,$t}),K+=`';
`;var At=m0.call(i,"variable")&&i.variable;if(!At)K=`with (obj) {
`+K+`
}
`;else if(ct.test(At))throw new Nt(f);K=(E?K.replace(A2,""):K).replace(V1,"$1").replace(B1,"$1;"),K="function("+(At||"obj")+`) {
`+(At?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(M?", __e = _.escape":"")+(E?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+K+`return __p
}`;var Gt=ia(function(){return h0(m,kt+"return "+K).apply(e,b)});if(Gt.source=K,U3(Gt))throw Gt;return Gt}function c7(r){return _0(r).toLowerCase()}function f7(r){return _0(r).toUpperCase()}function h7(r,i,l){if(r=_0(r),r&&(l||i===e))return _l(r);if(!r||!(i=Nn(i)))return r;var c=ur(r),_=ur(i),m=dl(c,_),b=gl(c,_)+1;return m2(c,m,b).join("")}function _7(r,i,l){if(r=_0(r),r&&(l||i===e))return r.slice(0,ml(r)+1);if(!r||!(i=Nn(i)))return r;var c=ur(r),_=gl(c,ur(i))+1;return m2(c,0,_).join("")}function d7(r,i,l){if(r=_0(r),r&&(l||i===e))return r.replace(W,"");if(!r||!(i=Nn(i)))return r;var c=ur(r),_=dl(c,ur(i));return m2(c,_).join("")}function g7(r,i){var l=x0,c=w0;if(N0(i)){var _="separator"in i?i.separator:_;l="length"in i?qt(i.length):l,c="omission"in i?Nn(i.omission):c}r=_0(r);var m=r.length;if(ie(r)){var b=ur(r);m=b.length}if(l>=m)return r;var M=l-se(c);if(M<1)return c;var E=b?m2(b,0,M).join(""):r.slice(0,M);if(_===e)return E+c;if(b&&(M+=E.length-M),H3(_)){if(r.slice(M).search(_)){var L,F=E;for(_.global||(_=i3(_.source,_0(ht.exec(_))+"g")),_.lastIndex=0;L=_.exec(F);)var K=L.index;E=E.slice(0,K===e?M:K)}}else if(r.indexOf(Nn(_),M)!=M){var ut=E.lastIndexOf(_);ut>-1&&(E=E.slice(0,ut))}return E+c}function p7(r){return r=_0(r),r&&j1.test(r)?r.replace(qe,Bh):r}var m7=he(function(r,i,l){return r+(l?" ":"")+i.toUpperCase()}),B3=su("toUpperCase");function ea(r,i,l){return r=_0(r),i=l?e:i,i===e?Wh(r)?Kh(r):Rh(r):r.match(i)||[]}var ia=Kt(function(r,i){try{return Pn(r,e,i)}catch(l){return U3(l)?l:new Nt(l)}}),v7=Fr(function(r,i){return zn(i,function(l){l=wr(l),Yr(r,l,F3(r[l],r))}),r});function y7(r){var i=r==null?0:r.length,l=Rt();return r=i?$0(r,function(c){if(typeof c[1]!="function")throw new Zn(a);return[l(c[0]),c[1]]}):[],Kt(function(c){for(var _=-1;++_<i;){var m=r[_];if(Pn(m[0],this,c))return Pn(m[1],this,c)}})}function x7(r){return B_(Xn(r,y))}function G3(r){return function(){return r}}function w7(r,i){return r==null||r!==r?i:r}var b7=lu(),k7=lu(!0);function An(r){return r}function j3(r){return Yl(typeof r=="function"?r:Xn(r,y))}function S7(r){return Fl(Xn(r,y))}function M7(r,i){return Wl(r,Xn(i,y))}var T7=Kt(function(r,i){return function(l){return Xe(l,r,i)}}),O7=Kt(function(r,i){return function(l){return Xe(r,l,i)}});function K3(r,i,l){var c=on(i),_=vi(i,c);l==null&&!(N0(i)&&(_.length||!c.length))&&(l=i,i=r,r=this,_=vi(i,on(i)));var m=!(N0(l)&&"chain"in l)||!!l.chain,b=Ur(r);return zn(_,function(M){var E=i[M];r[M]=E,b&&(r.prototype[M]=function(){var L=this.__chain__;if(m||L){var F=r(this.__wrapped__),K=F.__actions__=Dn(this.__actions__);return K.push({func:E,args:arguments,thisArg:r}),F.__chain__=L,F}return E.apply(r,f2([this.value()],arguments))})}),r}function E7(){return cn._===this&&(cn._=t_),this}function z3(){}function D7(r){return r=qt(r),Kt(function(i){return Ul(i,r)})}var C7=T3($0),R7=T3(ul),A7=T3(Js);function sa(r){return $3(r)?Xs(wr(r)):ud(r)}function $7(r){return function(i){return r==null?e:L2(r,i)}}var P7=au(),I7=au(!0);function Z3(){return[]}function J3(){return!1}function N7(){return{}}function Y7(){return""}function L7(){return!0}function F7(r,i){if(r=qt(r),r<1||r>Dt)return[];var l=D0,c=gn(r,D0);i=Rt(i),r-=D0;for(var _=n3(c,i);++l<r;)i(l);return _}function W7(r){return Ft(r)?$0(r,wr):Yn(r)?[r]:Dn(Mu(_0(r)))}function U7(r){var i=++Xh;return _0(r)+i}var H7=Si(function(r,i){return r+i},0),q7=O3("ceil"),V7=Si(function(r,i){return r/i},1),B7=O3("floor");function G7(r){return r&&r.length?mi(r,An,h3):e}function j7(r,i){return r&&r.length?mi(r,Rt(i,2),h3):e}function K7(r){return fl(r,An)}function z7(r,i){return fl(r,Rt(i,2))}function Z7(r){return r&&r.length?mi(r,An,p3):e}function J7(r,i){return r&&r.length?mi(r,Rt(i,2),p3):e}var X7=Si(function(r,i){return r*i},1),Q7=O3("round"),tg=Si(function(r,i){return r-i},0);function ng(r){return r&&r.length?t3(r,An):0}function rg(r,i){return r&&r.length?t3(r,Rt(i,2)):0}return d.after=S8,d.ary=Nu,d.assign=f9,d.assignIn=Zu,d.assignInWith=Yi,d.assignWith=h9,d.at=_9,d.before=Yu,d.bind=F3,d.bindAll=v7,d.bindKey=Lu,d.castArray=N8,d.chain=$u,d.chunk=Bd,d.compact=Gd,d.concat=jd,d.cond=y7,d.conforms=x7,d.constant=G3,d.countBy=n8,d.create=d9,d.curry=Fu,d.curryRight=Wu,d.debounce=Uu,d.defaults=g9,d.defaultsDeep=p9,d.defer=M8,d.delay=T8,d.difference=Kd,d.differenceBy=zd,d.differenceWith=Zd,d.drop=Jd,d.dropRight=Xd,d.dropRightWhile=Qd,d.dropWhile=t6,d.fill=n6,d.filter=e8,d.flatMap=o8,d.flatMapDeep=l8,d.flatMapDepth=u8,d.flatten=Du,d.flattenDeep=r6,d.flattenDepth=e6,d.flip=O8,d.flow=b7,d.flowRight=k7,d.fromPairs=i6,d.functions=k9,d.functionsIn=S9,d.groupBy=a8,d.initial=o6,d.intersection=l6,d.intersectionBy=u6,d.intersectionWith=a6,d.invert=T9,d.invertBy=O9,d.invokeMap=f8,d.iteratee=j3,d.keyBy=h8,d.keys=on,d.keysIn=Rn,d.map=Ri,d.mapKeys=D9,d.mapValues=C9,d.matches=S7,d.matchesProperty=M7,d.memoize=$i,d.merge=R9,d.mergeWith=Ju,d.method=T7,d.methodOf=O7,d.mixin=K3,d.negate=Pi,d.nthArg=D7,d.omit=A9,d.omitBy=$9,d.once=E8,d.orderBy=_8,d.over=C7,d.overArgs=D8,d.overEvery=R7,d.overSome=A7,d.partial=W3,d.partialRight=Hu,d.partition=d8,d.pick=P9,d.pickBy=Xu,d.property=sa,d.propertyOf=$7,d.pull=_6,d.pullAll=Ru,d.pullAllBy=d6,d.pullAllWith=g6,d.pullAt=p6,d.range=P7,d.rangeRight=I7,d.rearg=C8,d.reject=m8,d.remove=m6,d.rest=R8,d.reverse=Y3,d.sampleSize=y8,d.set=N9,d.setWith=Y9,d.shuffle=x8,d.slice=v6,d.sortBy=k8,d.sortedUniq=M6,d.sortedUniqBy=T6,d.split=o7,d.spread=A8,d.tail=O6,d.take=E6,d.takeRight=D6,d.takeRightWhile=C6,d.takeWhile=R6,d.tap=G6,d.throttle=$8,d.thru=Ci,d.toArray=ju,d.toPairs=Qu,d.toPairsIn=ta,d.toPath=W7,d.toPlainObject=zu,d.transform=L9,d.unary=P8,d.union=A6,d.unionBy=$6,d.unionWith=P6,d.uniq=I6,d.uniqBy=N6,d.uniqWith=Y6,d.unset=F9,d.unzip=L3,d.unzipWith=Au,d.update=W9,d.updateWith=U9,d.values=ge,d.valuesIn=H9,d.without=L6,d.words=ea,d.wrap=I8,d.xor=F6,d.xorBy=W6,d.xorWith=U6,d.zip=H6,d.zipObject=q6,d.zipObjectDeep=V6,d.zipWith=B6,d.entries=Qu,d.entriesIn=ta,d.extend=Zu,d.extendWith=Yi,K3(d,d),d.add=H7,d.attempt=ia,d.camelCase=G9,d.capitalize=na,d.ceil=q7,d.clamp=q9,d.clone=Y8,d.cloneDeep=F8,d.cloneDeepWith=W8,d.cloneWith=L8,d.conformsTo=U8,d.deburr=ra,d.defaultTo=w7,d.divide=V7,d.endsWith=j9,d.eq=cr,d.escape=K9,d.escapeRegExp=z9,d.every=r8,d.find=i8,d.findIndex=Ou,d.findKey=m9,d.findLast=s8,d.findLastIndex=Eu,d.findLastKey=v9,d.floor=B7,d.forEach=Pu,d.forEachRight=Iu,d.forIn=y9,d.forInRight=x9,d.forOwn=w9,d.forOwnRight=b9,d.get=q3,d.gt=H8,d.gte=q8,d.has=M9,d.hasIn=V3,d.head=Cu,d.identity=An,d.includes=c8,d.indexOf=s6,d.inRange=V9,d.invoke=E9,d.isArguments=U2,d.isArray=Ft,d.isArrayBuffer=V8,d.isArrayLike=Cn,d.isArrayLikeObject=W0,d.isBoolean=B8,d.isBuffer=v2,d.isDate=G8,d.isElement=j8,d.isEmpty=K8,d.isEqual=z8,d.isEqualWith=Z8,d.isError=U3,d.isFinite=J8,d.isFunction=Ur,d.isInteger=qu,d.isLength=Ii,d.isMap=Vu,d.isMatch=X8,d.isMatchWith=Q8,d.isNaN=t9,d.isNative=n9,d.isNil=e9,d.isNull=r9,d.isNumber=Bu,d.isObject=N0,d.isObjectLike=Y0,d.isPlainObject=i1,d.isRegExp=H3,d.isSafeInteger=i9,d.isSet=Gu,d.isString=Ni,d.isSymbol=Yn,d.isTypedArray=de,d.isUndefined=s9,d.isWeakMap=o9,d.isWeakSet=l9,d.join=c6,d.kebabCase=Z9,d.last=tr,d.lastIndexOf=f6,d.lowerCase=J9,d.lowerFirst=X9,d.lt=u9,d.lte=a9,d.max=G7,d.maxBy=j7,d.mean=K7,d.meanBy=z7,d.min=Z7,d.minBy=J7,d.stubArray=Z3,d.stubFalse=J3,d.stubObject=N7,d.stubString=Y7,d.stubTrue=L7,d.multiply=X7,d.nth=h6,d.noConflict=E7,d.noop=z3,d.now=Ai,d.pad=Q9,d.padEnd=t7,d.padStart=n7,d.parseInt=r7,d.random=B9,d.reduce=g8,d.reduceRight=p8,d.repeat=e7,d.replace=i7,d.result=I9,d.round=Q7,d.runInContext=O,d.sample=v8,d.size=w8,d.snakeCase=s7,d.some=b8,d.sortedIndex=y6,d.sortedIndexBy=x6,d.sortedIndexOf=w6,d.sortedLastIndex=b6,d.sortedLastIndexBy=k6,d.sortedLastIndexOf=S6,d.startCase=l7,d.startsWith=u7,d.subtract=tg,d.sum=ng,d.sumBy=rg,d.template=a7,d.times=F7,d.toFinite=Hr,d.toInteger=qt,d.toLength=Ku,d.toLower=c7,d.toNumber=nr,d.toSafeInteger=c9,d.toString=_0,d.toUpper=f7,d.trim=h7,d.trimEnd=_7,d.trimStart=d7,d.truncate=g7,d.unescape=p7,d.uniqueId=U7,d.upperCase=m7,d.upperFirst=B3,d.each=Pu,d.eachRight=Iu,d.first=Cu,K3(d,function(){var r={};return yr(d,function(i,l){m0.call(d.prototype,l)||(r[l]=i)}),r}(),{chain:!1}),d.VERSION=s,zn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){d[r].placeholder=d}),zn(["drop","take"],function(r,i){t0.prototype[r]=function(l){l=l===e?1:nn(qt(l),0);var c=this.__filtered__&&!i?new t0(this):this.clone();return c.__filtered__?c.__takeCount__=gn(l,c.__takeCount__):c.__views__.push({size:gn(l,D0),type:r+(c.__dir__<0?"Right":"")}),c},t0.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),zn(["filter","map","takeWhile"],function(r,i){var l=i+1,c=l==z0||l==jt;t0.prototype[r]=function(_){var m=this.clone();return m.__iteratees__.push({iteratee:Rt(_,3),type:l}),m.__filtered__=m.__filtered__||c,m}}),zn(["head","last"],function(r,i){var l="take"+(i?"Right":"");t0.prototype[r]=function(){return this[l](1).value()[0]}}),zn(["initial","tail"],function(r,i){var l="drop"+(i?"":"Right");t0.prototype[r]=function(){return this.__filtered__?new t0(this):this[l](1)}}),t0.prototype.compact=function(){return this.filter(An)},t0.prototype.find=function(r){return this.filter(r).head()},t0.prototype.findLast=function(r){return this.reverse().find(r)},t0.prototype.invokeMap=Kt(function(r,i){return typeof r=="function"?new t0(this):this.map(function(l){return Xe(l,r,i)})}),t0.prototype.reject=function(r){return this.filter(Pi(Rt(r)))},t0.prototype.slice=function(r,i){r=qt(r);var l=this;return l.__filtered__&&(r>0||i<0)?new t0(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),i!==e&&(i=qt(i),l=i<0?l.dropRight(-i):l.take(i-r)),l)},t0.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},t0.prototype.toArray=function(){return this.take(D0)},yr(t0.prototype,function(r,i){var l=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),_=d[c?"take"+(i=="last"?"Right":""):i],m=c||/^find/.test(i);_&&(d.prototype[i]=function(){var b=this.__wrapped__,M=c?[1]:arguments,E=b instanceof t0,L=M[0],F=E||Ft(b),K=function(Xt){var i0=_.apply(d,f2([Xt],M));return c&&ut?i0[0]:i0};F&&l&&typeof L=="function"&&L.length!=1&&(E=F=!1);var ut=this.__chain__,kt=!!this.__actions__.length,At=m&&!ut,Gt=E&&!kt;if(!m&&F){b=Gt?b:new t0(this);var $t=r.apply(b,M);return $t.__actions__.push({func:Ci,args:[K],thisArg:e}),new Jn($t,ut)}return At&&Gt?r.apply(this,M):($t=this.thru(K),At?c?$t.value()[0]:$t.value():$t)})}),zn(["pop","push","shift","sort","splice","unshift"],function(r){var i=ri[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",c=/^(?:pop|shift)$/.test(r);d.prototype[r]=function(){var _=arguments;if(c&&!this.__chain__){var m=this.value();return i.apply(Ft(m)?m:[],_)}return this[l](function(b){return i.apply(Ft(b)?b:[],_)})}}),yr(t0.prototype,function(r,i){var l=d[i];if(l){var c=l.name+"";m0.call(ae,c)||(ae[c]=[]),ae[c].push({name:i,func:l})}}),ae[ki(e,N).name]=[{name:"wrapper",func:e}],t0.prototype.clone=p_,t0.prototype.reverse=m_,t0.prototype.value=v_,d.prototype.at=j6,d.prototype.chain=K6,d.prototype.commit=z6,d.prototype.next=Z6,d.prototype.plant=X6,d.prototype.reverse=Q6,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=t8,d.prototype.first=d.prototype.head,Be&&(d.prototype[Be]=J6),d},oe=zh();$2?(($2.exports=oe)._=oe,js._=oe):cn._=oe}).call(wk)}(d1,d1.exports)),d1.exports}var kk=bk();const Mc=xk(kk),Sk={style:{"padding-left":"20px",display:"flex","flex-direction":"column",gap:"20px",position:"relative","z-index":"1"}},Mk={style:{position:"sticky",top:"0px",background:"#0a0a1a",padding:"4px",zIndex:1,display:"flex","flex-direction":"column",gap:"4px"}},Tk={style:{display:"flex","flex-direction":"row",gap:"12px"}},Ok={style:{display:"flex",gap:"20px","align-items":"center"}},Ek=["value"],Dk={style:{color:"greenyellow",fontSize:"18px"}},Ck={style:{display:"flex","align-items":"center"}},Rk={style:{display:"flex","align-items":"center"}},Ak={key:0,style:{color:"#7dd3fc"}},$k=["value"],Pk=["value"],Ik=["value"],Nk=["value"],Yk=["value"],Lk=["value"],Fk=["value"],Wk={style:{color:"#7dd3fc"}},Uk=["value"],Hk=["value"],qk={style:{color:"#fcd34d"}},Vk={style:{color:"#86efac"}},Bk=["value"],Gk={style:{color:"#f9a8d4"}},jk=["value"],Kk=["value"],zk={style:{color:"#c4b5fd"}},Zk=["value"],Jk={style:{textAlign:"center"}},Xk=["title"],Qk={style:{display:"flex",gap:"40px"}},tS={style:{width:"700px"}},nS={style:{width:"700px"}},rS={style:{display:"flex",gap:"40px"}},eS={style:{width:"700px",display:"flex","flex-direction":"column",gap:"12px"}},iS={style:{display:"flex"}},sS={style:{color:"cyan"}},oS=["onClick"],lS=["onClick"],uS={key:0,style:{display:"flex",flexDirection:"column",gap:"12px"}},aS=["onClick"],cS={style:{width:"700px",display:"flex","flex-direction":"column",gap:"12px"}},fS={style:{display:"flex"}},hS={style:{color:"cyan"}},_S=["onClick"],dS=["onClick"],gS={key:0,style:{display:"flex",flexDirection:"column",gap:"12px"}},pS=["onClick"],mS="lote_45",vS="lote_55",Tc=40,Oc=46,yS=2,Ec=6,Bi=6,xS=Fe({__name:"HomeView",setup(t){const n=Mt(!0),e=Mt(!0);async function s(){if(!window.confirm("Xoá hết bộ nhớ đệm (gồm cả các bộ vé đã lưu để đối chiếu)?"))return;const V=await mk();window.alert(V?"Đã xoá hết bộ nhớ đệm":"Không xoá được bộ nhớ đệm")}function o(V){return V[0].loại_xổ_số===45?mS:vS}const u=I4(),a=N4(),f=X(u[0].ngày_xổ_số,"DD/MM/YYYY"),h=X(a[0].ngày_xổ_số,"DD/MM/YYYY"),p=u.length,v=f>h?55:45,y=v===45?0:-1,S=v===55?0:-1,T=Mt([]),U=Mt(7),C=Mt(1),P=Mt(0),N=Mt(!1),Z=Mt(1),G=Mt(3),rt=Mt(3),tt=Mt(1),yt=Mt(2),wt=Mt(1e3),Qt=Mt(5);function c0(V,g){const W=new Map;return V.forEach(et=>{const B=g(et);W.set(B,(W.get(B)??0)+1)}),[...W.values()]}function x0(V){const g=Number(Z.value),W=Number(G.value),et=Number(rt.value),B=c0(V,k=>k%Ec);if(Math.max(...B)>et)return!1;if(g===-1&&W===-1)return!0;const q=c0(V,k=>Math.floor(k/Ec));return g!==-1&&B.filter(k=>k>=2).length>=g||W!==-1&&Math.max(...q)<=W}const w0=Mt(0),K0=Mt(0),L0=Mt(3e3),z0=Mt("ngẫu_nhiên"),bn=Mt(12),jt=Mt(3),Tt=Mt(0),Dt=Mt(15),an=Mt(""),_n=Mt([]),D0=Mt(""),Z0=Mt([]),Gn=Mt(""),lr=Mt([]),en=Mt(""),V0=Mt([]),Y=Mt(""),at=Tv(),it=Mt(!0);function xt(V="dự đoán"){const g=V==="phân tích",W=at.resolve({name:"du-doan-da-luu",query:{nguon:V,ngay:(g?x:en).value,ds:(g?R:Y).value}});window.open(W.href,"_blank")}const Jt=Mt([]),f0=j0(()=>[...new Set(Jt.value.filter(V=>!en.value||V.ngày===en.value).map(V=>V.tên))]);Ce(f0,V=>{V.includes(Y.value)||(Y.value="")});const x=Mt(""),w=Mt([]),R=Mt(""),j=Mt([]),$=j0(()=>[...new Set(j.value.filter(V=>!x.value||V.ngày===x.value).map(V=>V.tên))]);Ce($,V=>{V.includes(R.value)||(R.value="")});const H=Mt(1),st=Mt(2),nt=Mt(0),J=Mt(0),z=Mt(4),St=Mt(1),lt=Mt(10),vt=Mt(),Ct=Mt();Yt(u,y),Yt(a,S);async function Yt(V,g=0){const W=V[0].loại_xổ_số===45?a:u;for(let et=0;et<V.length;et++){const B=V[et],q=W==null?void 0:W[et+g];K5(V,B,q,et)}}async function r0(){var g;const V=`v${yS}|45:${Tc}|55:${Oc}`;for(const[W,et]of[[u,a],[a,u]]){const B=W[0].loại_xổ_số,q=`${J5}${B}`,k=vk(W,et,V),ot=await X5(q);if((ot==null?void 0:ot.dấu_vân_tay)===k&&ot.dự_đoán_ds_xuất_hiện.length===W.length&&((g=ot.số_lần_xuất_hiện_ds)==null?void 0:g.length)===W.length&&ot.vị_trí_ds_xuất_hiện.length===W.length){W.forEach((ct,_t)=>{ct.dự_đoán_ds_xuất_hiện=ot.dự_đoán_ds_xuất_hiện[_t],ct.số_lần_xuất_hiện_ds=ot.số_lần_xuất_hiện_ds[_t],ct.vị_trí_ds_xuất_hiện=ot.vị_trí_ds_xuất_hiện[_t]}),console.log(`đã tải danh sách dự đoán ${B} từ bộ nhớ đệm`);continue}W.forEach((ct,_t)=>{X0(W,et,ct,_t)}),await ve(q,{dấu_vân_tay:k,dự_đoán_ds_xuất_hiện:W.map(ct=>ct.dự_đoán_ds_xuất_hiện),số_lần_xuất_hiện_ds:W.map(ct=>ct.số_lần_xuất_hiện_ds),vị_trí_ds_xuất_hiện:W.map(ct=>ct.vị_trí_ds_xuất_hiện)}),console.log(`đã tạo và lưu danh sách dự đoán ${B} vào bộ nhớ đệm`)}}r0().then(()=>{e0(),J0()});function e0(){T.value=Lb(p),vt.value=u,Ct.value=a}function J0(){console.log("danh sách dữ liệu 45 đã qua xữ lý: ",u),console.log("danh sách dữ liệu 55 đã qua xữ lý: ",a)}function I0(V,g){return k2("div",{style:{width:"220px",display:"flex",flexWrap:"wrap"}},V.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.map((W,et)=>{var B;return k2("div",{key:`row-dữ_liệu_1${g}${et}`,style:{width:"34px"}},k2("span",{style:{opacity:W.tổng_xuất_hiện<=3?1:.3,border:e.value&&V.kết_quả_xổ_số.includes(W.số_xuất_hiện)?"1px solid blue":null,color:(B=V.dữ_liệu_kỳ_sau_đó)!=null&&B.kết_quả_xổ_số.includes(W.số_xuất_hiện)?"red":null}},`${W.số_xuất_hiện}:${W.tổng_xuất_hiện}`))}))}function sn(V,g,W){var k;const et=g.số_lần_xuất_hiện_ds[W]||[],B=((k=g.dữ_liệu_kỳ_sau_đó)==null?void 0:k.kết_quả_xổ_số)||[],q=g.kết_quả_xổ_số||[];return k2("div",{style:{width:"240px",display:"flex",flexWrap:"wrap"}},V.map((ot,ct)=>k2("div",{key:`row-dự_đoán${ct}`,style:{width:"40px"}},k2("span",{style:{color:B.includes(ot)?"red":null,border:q.includes(ot)?"1px solid blue":null}},et[ct]===void 0?`${ot}`:`${ot}:${et[ct]}`))))}function X0(V,g,W,et){var q;const B=Ub(V,g,W,et,W.loại_xổ_số===55?Oc:Tc);if(W.dự_đoán_ds_xuất_hiện=B.danh_sách,W.số_lần_xuất_hiện_ds=B.số_lần,et>0){const k=((q=V[et-1])==null?void 0:q.kết_quả_xổ_số)||[];W.dự_đoán_ds_xuất_hiện.forEach(ot=>{const ct=[],_t=[];k.forEach(bt=>{{const ht=ot.indexOf(bt);ht>=0?ct.push(ht):_t.push(bt)}}),_t.forEach(bt=>{for(let ht=0;ht<W.dự_đoán_ds_xuất_hiện.length;ht++){const It=W.dự_đoán_ds_xuất_hiện[ht].indexOf(bt);if(It>=0&&!ct.includes(It)){ct.push(It);break}}}),ct.length===6&&W.vị_trí_ds_xuất_hiện.push(ct)})}}function En(V,g,W=-1){var Bt;console.group("Dự Đoán"),console.log(W===-1?"dự đoán cho tất cả":`dự đoán cho vị trí ${W}`);const et=((Bt=g.dữ_liệu_kỳ_sau_đó)==null?void 0:Bt.kết_quả_xổ_số)||[],B=g.dự_đoán_ds_xuất_hiện,q=[];for(let Lt=g.vị_trí_dữ_liệu+1;Lt<V.length;Lt++){const Ht=V[Lt];q.push(...Ht.vị_trí_ds_xuất_hiện.filter(x0))}console.log("tất cả vị trí dự đoán: ",q.length),console.log(`bộ lọc: số trùng trong cột = ${Z.value}, số cùng hàng = ${G.value} (-1 là không lọc)`);let k=0,ot=0,ct=0,_t=0,bt=0,ht=0;for(let Lt=0;Lt<B.length;Lt++)if(W===Lt||W===-1){const Ht=B[Lt];for(let Ut=0;Ut<q.length;Ut++){const Q0=[];q[Ut].forEach(F0=>{Q0.push(Ht[F0])});const l0=Q0.filter(F0=>et.includes(F0)).length;ht++,l0===3&&k++,l0===4&&ot++,l0===5&&(Q0.includes(g.số_jacpot_2)?(console.log("trúng jackpot 2 tại: ",`ds ${Lt} vị trí ${Ut}`),_t++):(console.log("trúng 5 tại: ",`ds ${Lt} vị trí ${Ut}`),ct++)),l0===6&&(console.log("trúng jackpot 1 tại: ",`ds ${Lt} vị trí ${Ut}`),bt++)}}const It=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.log(et.join(", ")),console.log(`tiền: ${It.format(ht*1e4)}, tổng: ${ht}, tong_3: ${k}, tong_4: ${ot}, tong_5: ${ct}, jackpot_2: ${_t}, jackpot_1: ${bt}`),console.groupEnd()}async function $r(V){var bt;const g=[],W=[],et=new Map,B=[0];V.forEach(ht=>B.push(B[B.length-1]+ht.vị_trí_ds_xuất_hiện.length));const q=[],k=(ht,It,Bt,Lt,Ht)=>{var Pr;const{kỳ:Ut,thứ_tự:Q0}=q[Ht],o0=B[Ut]-B[Bt+1]+Q0,l0=[...It].sort((ne,J1)=>ne-J1),F0=`${ht}|${l0.join(",")}`,dn=et.get(F0);if(dn)dn.tổng_xuất_hiện+=1,dn.xuất_hiện.push(Bt),dn.danh_sách.push(Lt),(Pr=dn.vị_trí)==null||Pr.push(o0);else{const ne={ds_vị_trí:l0,tổng_xuất_hiện:1,trùng:ht,xuất_hiện:[Bt],danh_sách:[Lt],vị_trí:[o0]};g.push(ne),et.set(F0,ne)}};for(let ht=V.length-1;ht>=0;ht--){const It=V[ht],Bt=((bt=It.dữ_liệu_kỳ_sau_đó)==null?void 0:bt.kết_quả_xổ_số)||[],Lt=It.dự_đoán_ds_xuất_hiện;for(let Ht=0;Ht<Lt.length;Ht++){const Ut=Lt[Ht],Q0=new Uint8Array(Ut.length);Ut.forEach((o0,l0)=>{Bt.includes(o0)&&(Q0[l0]=1)});for(let o0=0;o0<W.length;o0++){const l0=W[o0];let F0=0;for(let dn=0;dn<l0.length;dn++)F0+=Q0[l0[dn]]|0;F0===5&&k(It.loại_xổ_số===55&&l0.includes(Number(It.số_jacpot_2))?5.5:5,l0,ht,Ht,o0),F0===6&&k(6,l0,ht,Ht,o0)}}W.push(...It.vị_trí_ds_xuất_hiện),It.vị_trí_ds_xuất_hiện.forEach((Ht,Ut)=>q.push({kỳ:ht,thứ_tự:Ut}))}const ot=o(V);await x2.khởi_tạo();const ct=await x2.lấy_dữ_liệu_theo_tên(ot);ct.length>0?await x2.cập_nhật_dữ_liệu(ct[0].id,g):await x2.lưu_dữ_liệu(ot,g);const _t=Mc.orderBy(g,[ht=>Math.min(...ht.xuất_hiện),ht=>ht.trùng],["asc","desc"]).map(ht=>({ds_vị_trí:ht.ds_vị_trí,tổng_xuất_hiện:ht.tổng_xuất_hiện,trùng:ht.trùng,xuất_hiện:ht.xuất_hiện.join(", "),danh_sách:ht.danh_sách.join(", "),vị_trí:(ht.vị_trí??[]).join(", ")}));console.log("kết quả thống kê dự đoán: ",_t)}async function B0(V){var _t;await x2.khởi_tạo();const W=((_t=(await x2.lấy_dữ_liệu_theo_tên(o(V)))[0])==null?void 0:_t.dữ_liệu)||[],et=[];W.forEach(bt=>{var It;const ht=et.find(Bt=>Bt.ds_vị_trí.sort().toString()===bt.ds_vị_trí.sort().toString());ht?(ht.tổng_xuất_hiện+=bt.tổng_xuất_hiện,ht.xuất_hiện.push(...bt.xuất_hiện),ht.danh_sách.push(...bt.danh_sách),(It=ht.vị_trí)==null||It.push(...bt.vị_trí??[])):et.push({ds_vị_trí:bt.ds_vị_trí,tổng_xuất_hiện:bt.tổng_xuất_hiện,trùng:bt.trùng,xuất_hiện:[...bt.xuất_hiện],danh_sách:[...bt.danh_sách],vị_trí:[...bt.vị_trí??[]]})});const B=Mc.orderBy(et,[bt=>Math.min(...bt.xuất_hiện),bt=>bt.trùng],["asc","desc"]).map(bt=>({ds_vị_trí:bt.ds_vị_trí.sort().join(", "),tổng_xuất_hiện:bt.tổng_xuất_hiện,trùng:bt.trùng,xuất_hiện:bt.xuất_hiện.join(", "),danh_sách:bt.danh_sách.join(", "),vị_trí:(bt.vị_trí??[]).join(", ")}));console.group("Phân tích và dự đoán"),console.log("tổng danh sách: ",W.length),console.log("sau khi nhóm: ",et.length),console.log("sau khi nhóm: ",B),console.groupEnd();const q=V[Number(H.value)],ot=q.dự_đoán_ds_xuất_hiện[Number(st.value)]||[];let ct=0;if(Number(H.value)===0){console.group("dự đoán");const bt=[];et.forEach(Bt=>{if(Bt.danh_sách.includes(Number(nt.value))){const Lt=[];Bt.ds_vị_trí.forEach(Ht=>{Lt.push(ot[Ht])}),bt.push(Lt)}}),console.log(bt),console.groupEnd();const ht=new Set,It=bt.filter(Bt=>Bt.length>0&&Bt.every(Lt=>Lt!==void 0)).map(Bt=>[...Bt].sort()).filter(Bt=>{const Lt=Bt.join(",");return ht.has(Lt)?!1:(ht.add(Lt),!0)});if(It.length>0){const Bt=G0(q),Lt=`phân tích thống kê, danh sách dự đoán ${nt.value}`;await ve(`${Bo}${q.loại_xổ_số}|${Bt}|${Lt}|danh sách phụ ${st.value}`,{loại_xổ_số:q.loại_xổ_số,ngày_cơ_sở:q.ngày_xổ_số,ngày_dự_đoán:Bt,thời_điểm_tạo:Date.now(),điều_kiện:Lt,các_danh_sách:[{tên:`danh sách phụ ${st.value}`,vé:It}]}),await jn("phân tích",Bt),console.log(`đã lưu ${It.length} vé (bỏ trùng) để đánh giá cho kỳ ${Bt}`)}else console.warn("Không có vé nào để lưu (kiểm tra danh sách dự đoán và vị trí dự đoán)")}else console.group("phân tích"),et.forEach((bt,ht)=>{if(Number(ht)>Number(H.value)){const It=[];bt.ds_vị_trí.forEach(Lt=>{It.push(ot[Lt])});const Bt=It.filter(Lt=>q.kết_quả_xổ_số.includes(Lt)).length;Bt===3&&console.log("trúng 3 tại: ",`${Number(H.value)} vị trí ${ht}`),Bt===4&&console.log("trúng 4 tại: ",`${Number(H.value)} vị trí ${ht}`),Bt===5&&(It.includes(q.số_jacpot_2)?console.log("trúng jackpot 2 tại: ",`${H.value} vị trí ${ht}`):console.log("trúng 5 tại: ",`${H.value} vị trí ${ht}`)),Bt===6&&console.log("trúng jackpot 1 tại: ",`${H.value} vị trí ${ht}`),ct++}}),console.log("tổng số dự đoán :",ct),console.groupEnd()}function G0(V){var g;return((g=V.dữ_liệu_kỳ_sau_đó)==null?void 0:g.ngày_xổ_số)??G1(V)}function A2(V,g){const W=xc(V,g),et=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.group(`Đánh giá ${V.length} vé với kết quả kỳ sau (${g.ngày_xổ_số})`),console.log(`kết quả: ${g.kết_quả_xổ_số.join(" ")}${g.số_jacpot_2?` | số phụ: ${g.số_jacpot_2}`:""}`),console.table(W.dòng_theo_mức),console.log(`chi phí (đã gồm phí 3%): ${et.format(W.chi_phí)}, tiền thắng (đã trừ thuế): ${et.format(W.tiền_thắng)}, lãi/lỗ: ${et.format(W.lãi_lỗ)}`),W.vé_trúng_từ_4.length>0&&console.log(`vé trúng từ 4 số:
`+W.vé_trúng_từ_4.map(B=>`${B.vé.join(" ")} → ${B.số_trúng} số (${B.mức})`).join(`
`)),console.groupEnd()}async function V1(V){var Lt;const g=Number(tt.value),W=Number(yt.value),et=Number(wt.value);if(!(g>=1&&g<=W&&W<=Bi)){console.warn(`Số lần xuất hiện phải từ 1 đến ${Bi} và "từ" không lớn hơn "tới"`);return}if(!Number.isInteger(et)||et<1){console.warn("Số lượng vé phải là số nguyên từ 1 trở lên");return}const B=Number(Qt.value);if(!Number.isInteger(B)||B<0||B>6){console.warn("Số vị trí giống để loại phải là số nguyên từ 0 đến 6 (0 là không loại)");return}let q=[];B>0&&(await x2.khởi_tạo(),q=(((Lt=(await x2.lấy_dữ_liệu_theo_tên(o(V)))[0])==null?void 0:Lt.dữ_liệu)??[]).map(Ut=>Ut.ds_vị_trí),q.length===0&&console.warn('Chưa có thống kê dự đoán đã lưu nên không loại được vé nào, hãy bấm "thống kê dự đoán" trước'));const k=dk(q,B),ot=V[0],ct=G0(ot),_t=[...ot.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện].sort((Ht,Ut)=>Ht.tổng_xuất_hiện-Ut.tổng_xuất_hiện),bt=[{tên:"danh sách chính",số:_t.map(Ht=>Ht.số_xuất_hiện),số_lần:_t.map(Ht=>Ht.tổng_xuất_hiện)},...ot.dự_đoán_ds_xuất_hiện.map((Ht,Ut)=>({tên:`danh sách phụ ${Ut}`,số:Ht,số_lần:ot.số_lần_xuất_hiện_ds[Ut]??[]}))];if(console.group(`Tạo dự đoán ${ot.loại_xổ_số} cho kỳ ${ct} (dữ liệu mới nhất ${ot.ngày_xổ_số}): số lần xuất hiện ${g} đến ${W}, tối đa ${et} vé mỗi danh sách`),console.log(`lọc: ít nhất ${Z.value} cột từ 2 số, mỗi hàng tối đa ${G.value} số (-1 là không lọc, điều kiện or), mỗi cột tối đa ${rt.value} số`),console.log(B>0?`loại vé giống từ ${B} vị trí với ${q.length} bộ trong thống kê dự đoán`:"không loại vé theo thống kê dự đoán"),B>0&&q.length>0){const Ht=ot.loại_xổ_số===55?46:40;let Ut=1;for(let l0=0;l0<B;l0++)Ut=Ut*(Ht-l0)/(l0+1);const Q0=gk(q,B),o0=Q0/Ut*100;console.log(`thống kê đã chứa ${Q0}/${Math.round(Ut)} nhóm ${B} vị trí (${o0.toFixed(1)}%)`),o0>80&&console.warn('Bộ lọc loại gần hết mọi vé, hãy tăng "loại vé giống" lên hoặc đặt 0 để không loại')}let ht=0;const It=[];bt.forEach(({tên:Ht,số:Ut,số_lần:Q0},o0)=>{const{vé:l0,số_ứng_viên:F0}=hk(Ut,Q0,g,W,et,Pr=>x0(Pr)&&k(Pr),ds(xo(`${ot.loại_xổ_số}|${ot.ngày_xổ_số}|${Ht}|${g}|${W}|${et}|${B}`)));ht+=l0.length,l0.length>0&&It.push({tên:Ht,vé:l0});const dn=`${Ht}: ${l0.length} vé (${F0} số có số lần ${g} đến ${W}, tổng ${Ut.length} số)`;o0===0?console.group(dn):console.groupCollapsed(dn),F0<6?console.log("không đủ 6 số để tạo vé"):console.log(l0.map(Pr=>Pr.join(" ")).join(`
`)),console.groupEnd()}),ht===0&&console.warn("Không danh sách nào tạo được vé, hãy nới điều kiện (số lần xuất hiện, lọc cột/hàng, số vị trí giống)"),console.log(`tổng ${ht} vé từ ${bt.length} danh sách, đã lưu để đánh giá cho kỳ ${ct}`),console.groupEnd();const Bt=`số lần ${g}-${W}, ${et} vé, loại giống ${B}, cột ${Z.value}, hàng ${G.value}, tối đa mỗi cột ${rt.value}`;await ve(`${Vo}${ot.loại_xổ_số}|${ct}|${Bt}`,{loại_xổ_số:ot.loại_xổ_số,ngày_cơ_sở:ot.ngày_xổ_số,ngày_dự_đoán:ct,thời_điểm_tạo:Date.now(),điều_kiện:Bt,các_danh_sách:It}),await jn("dự đoán",ct)}function B1(V){const g=Number(w0.value),W=V[g];if(!W){console.warn(`Không có kỳ ở vị trí ${g} (có ${V.length} kỳ, từ 0)`);return}const et=Number(K0.value),B=W.dự_đoán_ds_xuất_hiện[et];if(!B){console.warn(`Không có danh sách số ${et}: kỳ ở vị trí ${g} của ${W.loại_xổ_số} có ${W.dự_đoán_ds_xuất_hiện.length} danh sách (chỉ số từ 0)`);return}const q=Number(L0.value),k=ck(B.length,q),ot=fk(B,k),ct=G0(W);ve(`${bc}${W.loại_xổ_số}|${ct}|${et}|${ot.length}`,{loại_xổ_số:W.loại_xổ_số,ngày_cơ_sở:W.ngày_xổ_số,ngày_dự_đoán:ct,thời_điểm_tạo:Date.now(),chỉ_số_danh_sách:et,vé:ot}).then(()=>jn("danh sách",ct));const _t=W.dữ_liệu_kỳ_sau_đó;console.group(`Vé từ danh sách ${et} của kỳ ${g} (${W.ngày_xổ_số}) ${W.loại_xổ_số} (${B.length} số), dự đoán cho kỳ ${ct}${_t?" (đã có kết quả)":""}, đã lưu để đối chiếu`),console.log(`${ot.length}/${q} vé, mỗi vé có ít nhất 1 cột từ 2 số, mỗi hàng tối đa 3 số`),ot.length<q&&console.warn("Không tạo đủ số vé với điều kiện này"),_t?A2(ot,_t):console.log("kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá"),console.log(ot.map(bt=>bt.join(" ")).join(`
`)),console.groupEnd()}function qe(V){const g=V[0].loại_xổ_số,W=hc[z0.value];if(!W){console.warn("Chọn một chiến lược cụ thể để tạo vé");return}const et=vo[g],B=V[0],q=zb(g,et,W(V,g),ds(xo(`${g}|${B.ngày_xổ_số}|${z0.value}`))),k=q.map(_t=>_t.map(bt=>String(bt).padStart(2,"0"))),ot=G0(B);ve(`${kc}${g}|${ot}|${z0.value}|${q.length}`,{loại_xổ_số:g,ngày_cơ_sở:B.ngày_xổ_số,ngày_dự_đoán:ot,thời_điểm_tạo:Date.now(),chiến_lược:z0.value,vé:k}).then(()=>jn("vé mục tiêu",ot));const ct=Gb(V,g);console.group(`Vé kỳ tới ${g} (${z0.value}), dự đoán cho kỳ ${ot}, đã lưu để đối chiếu`),console.log(`số vừa ra (kỳ mới nhất ${V[0].ngày_xổ_số}): ${ct.vừa_ra.join(" ")}`),console.log(`số nóng (nhiều nhất trong 50 kỳ gần nhất): ${ct.nóng.map(_t=>`${_t.số} (${_t.lần} lần)`).join(", ")}`),console.log(`số lạnh (ít nhất trong 50 kỳ gần nhất): ${ct.lạnh.map(_t=>`${_t.số} (${_t.lần} lần)`).join(", ")}`),console.log(`số lâu chưa ra (số kỳ kể từ lần ra gần nhất): ${ct.lâu_chưa_ra.map(_t=>`${_t.số} (${_t.số_kỳ} kỳ)`).join(", ")}`),console.log(`${q.length}/${et} vé, xác suất có vé trúng từ 5 số: ${(q.length*Jb(g).từ_5*100).toFixed(3)}%`),console.log(k.map(_t=>_t.join(" ")).join(`
`)),console.groupEnd()}function G1(V){return X(q5(V.dấu_thời_gian_của_ngày,V.loại_xổ_số===55?55:45)).format("DD/MM/YYYY")}async function j1(){const[V,g,W,et,B]=await Promise.all([be(wc),be(bc),be(kc),be(Vo),be(Bo)]);return[...V.map(({giá_trị:q})=>({loại_nguồn:"vé phủ",nguồn:"vé phủ",loại_xổ_số:q.loại_xổ_số,ngày_cơ_sở:q.ngày_cơ_sở,ngày_dự_đoán:q.ngày_dự_đoán,thời_điểm_tạo:q.thời_điểm_tạo,vé:q.vé.map(k=>k.map(ot=>String(ot).padStart(2,"0")))})),...g.map(({giá_trị:q})=>({loại_nguồn:"danh sách",nguồn:`danh sách ${q.chỉ_số_danh_sách}`,loại_xổ_số:q.loại_xổ_số,ngày_cơ_sở:q.ngày_cơ_sở,ngày_dự_đoán:q.ngày_dự_đoán,thời_điểm_tạo:q.thời_điểm_tạo,vé:q.vé})),...W.map(({giá_trị:q})=>({loại_nguồn:"vé mục tiêu",nguồn:`mục tiêu ${q.chiến_lược}`,loại_xổ_số:q.loại_xổ_số,ngày_cơ_sở:q.ngày_cơ_sở,ngày_dự_đoán:q.ngày_dự_đoán,thời_điểm_tạo:q.thời_điểm_tạo,vé:q.vé})),...[...et.map(q=>({...q,loại_nguồn:"dự đoán"})),...B.map(q=>({...q,loại_nguồn:"phân tích"}))].flatMap(({giá_trị:q,loại_nguồn:k})=>{var ot;return((ot=q.các_danh_sách)!=null&&ot.length?q.các_danh_sách:[{tên:"không có danh sách nào tạo được vé",vé:[]}]).map(ct=>({loại_nguồn:k,nguồn:`${ct.tên} (${q.điều_kiện})`,tên_danh_sách:ct.tên,loại_xổ_số:q.loại_xổ_số,ngày_cơ_sở:q.ngày_cơ_sở,ngày_dự_đoán:q.ngày_dự_đoán,thời_điểm_tạo:q.thời_điểm_tạo,vé:ct.vé}))})].sort((q,k)=>k.thời_điểm_tạo-q.thời_điểm_tạo)}const K1={"vé phủ":an,"danh sách":D0,"vé mục tiêu":Gn,"dự đoán":en,"phân tích":x},Ws={"vé phủ":_n,"danh sách":Z0,"vé mục tiêu":lr,"dự đoán":V0,"phân tích":w};async function jn(V,g){const W=(await j1()).filter(q=>q.loại_nguồn===V);if(V==="dự đoán"||V==="phân tích"){const q=V==="dự đoán"?Jt:j;q.value=W.map(k=>({ngày:k.ngày_dự_đoán,tên:k.tên_danh_sách??""}))}const et=[...new Set(W.map(q=>q.ngày_dự_đoán))].sort((q,k)=>X(k,"DD/MM/YYYY").valueOf()-X(q,"DD/MM/YYYY").valueOf());Ws[V].value=et;const B=K1[V];g&&et.includes(g)?B.value=g:et.includes(B.value)||(B.value=et[0]??"")}jn("vé phủ"),jn("danh sách"),jn("vé mục tiêu"),jn("dự đoán"),jn("phân tích");async function a2(V){const g={"vé phủ":"bộ vé phủ","danh sách":"vé từ danh sách xuất hiện","vé mục tiêu":"vé mục tiêu","dự đoán":"vé của tạo dự đoán","phân tích":"vé của phân tích và dự đoán"}[V],W=(await j1()).filter(It=>It.loại_nguồn===V);if(W.length===0){console.log(`Chưa có ${g} nào được lưu`);return}const et=K1[V].value,B=V==="dự đoán"?Y.value:V==="phân tích"?R.value:"",q=W.filter(It=>(!et||It.ngày_dự_đoán===et)&&(!B||It.tên_danh_sách===B));if(q.length===0){console.log(`Không có ${g} nào cho ngày dự đoán ${et||"bất kỳ"}${B?`, ${B}`:""}`);return}const k=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});let ot=0,ct=0;const _t={trúng_3:0,trúng_4:0,trúng_5:0,trúng_6:0};let bt=0;const ht=q.map(It=>{const Bt=It.loại_xổ_số===55?a:u,Lt=Bt.findIndex(l0=>l0.ngày_xổ_số===It.ngày_cơ_sở),Ht=Lt>0?Bt[Lt-1]:void 0,Ut={nguồn:It.nguồn,loại:It.loại_xổ_số,ngày_lưu:X(It.thời_điểm_tạo).format("DD/MM/YYYY HH:mm"),ngày_dự_đoán:It.ngày_dự_đoán,số_vé:It.vé.length};if(!Ht)return{...Ut,kết_quả:"chưa có kết quả"};const Q0=xc(It.vé,Ht),o0=l0=>{var F0;return((F0=Q0.dòng_theo_mức.find(dn=>dn.mức_trúng===l0))==null?void 0:F0.số_vé)??0};return bt++,ot+=It.vé.length,ct+=Q0.lãi_lỗ,_t.trúng_3+=o0("trúng_3"),_t.trúng_4+=o0("trúng_4"),_t.trúng_5+=o0("trúng_5")+o0("jackpot_2"),_t.trúng_6+=o0("jackpot_1"),{...Ut,kết_quả:`${Ht.ngày_xổ_số}: ${Ht.kết_quả_xổ_số.join(" ")}`,trúng_3:o0("trúng_3"),trúng_4:o0("trúng_4"),trúng_5:o0("trúng_5")+o0("jackpot_2"),trúng_6:o0("jackpot_1"),lãi_lỗ:k.format(Q0.lãi_lỗ)}});console.group(`Đối chiếu ${g} đã lưu (${et||"tất cả ngày dự đoán"}${B?`, ${B}`:""})`),console.table(ht),bt>0&&console.log(`tổng ${bt} dòng đã có kết quả: ${ot} vé, trúng 3: ${_t.trúng_3}, trúng 4: ${_t.trúng_4}, trúng 5: ${_t.trúng_5}, trúng 6: ${_t.trúng_6}, lãi/lỗ: ${k.format(ct)}`),console.groupEnd()}function z1(V){try{const g=V===55?a:u,W=Number(Tt.value),et=g[W];if(!et){console.warn(`Không có kỳ ở vị trí ${W} (có ${g.length} kỳ, từ 0)`);return}const B=nk(V,Number(bn.value),Number(jt.value),Number(Dt.value),void 0,xo(`${V}|${et.ngày_xổ_số}`)),q=G0(et),k=et.dữ_liệu_kỳ_sau_đó,ot=`${wc}${V}|${q}|${B.nhóm_số.length}|${B.mức_đảm_bảo}|${B.vé.length}`;ve(ot,{loại_xổ_số:V,ngày_cơ_sở:et.ngày_xổ_số,ngày_dự_đoán:q,thời_điểm_tạo:Date.now(),nhóm_số:B.nhóm_số,mức_đảm_bảo:B.mức_đảm_bảo,số_vé_tối_thiểu:B.số_vé_tối_thiểu,vé:B.vé}).then(()=>jn("vé phủ",q));const ct=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.group(`Bộ vé phủ ${V} của kỳ ${W} (${et.ngày_xổ_số}), dự đoán cho kỳ ${q}${k?" (đã có kết quả)":""}, đã lưu để đối chiếu`),console.log("nhóm số: ",B.nhóm_số.join(", ")),Number(Dt.value)<B.số_vé_tối_thiểu?console.warn(`cần tối thiểu ${B.số_vé_tối_thiểu} vé để đảm bảo, nên đã dùng ${B.số_vé_tối_thiểu} vé thay vì ${Number(Dt.value)}`):B.vé.length>B.số_vé_tối_thiểu&&console.log(`${B.số_vé_tối_thiểu} vé đầu bảo đảm mức trúng, ${B.vé.length-B.số_vé_tối_thiểu} vé thêm giúp tăng cơ hội trúng mức cao hơn`),console.log(`số vé: ${B.vé.length}, chi phí: ${ct.format(B.chi_phí)}, đảm bảo trúng ít nhất ${B.mức_đảm_bảo} số khi có từ ${B.mức_đảm_bảo} số trúng nằm trong nhóm (xác suất ${(B.xác_suất_đạt_đảm_bảo*100).toFixed(2)}%)`),console.log(`điểm phổ biến trung bình: ${B.điểm_phổ_biến_trung_bình} (vé ngẫu nhiên: ${B.điểm_phổ_biến_vé_ngẫu_nhiên}, càng thấp càng ít người trùng)`),k?A2(B.vé.map(_t=>_t.map(bt=>String(bt).padStart(2,"0"))),k):console.log("kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá"),console.log(B.vé.map(_t=>_t.join(" ")).join(`
`)),console.groupEnd()}catch(g){console.warn(g.message)}}function Us(){const V=Number(J.value),g=Number(z.value),W=Number(St.value),et=Number(lt.value);let B=0;console.group("Số xuất hiện nhiều lần");for(let q=W;q<3e3;q++){const k=new Set;a.slice(q,q+et).forEach(ct=>{ct.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.forEach(_t=>{_t.tổng_xuất_hiện>=g&&k.size<6&&k.add(_t.số_xuất_hiện)})});const ot=a[V].kết_quả_xổ_số.filter(ct=>k.has(ct)).length;k.size>=6&&(B++,ot>=3&&(console.log([...k.values()].join(", ")),console.log(`tổng số trùng với kết quả xổ số tại vị trí ${V}: ${ot}`)))}console.log("tổng số dự đoán: ",B),console.groupEnd()}function Z1(V){const g=Number(C.value),W=Number(P.value),et=V===55?a:u,B=new Set,q=new Set,k=[];if(W<0){for(let ot=W+1;ot<W+11;ot++){const ct=et[ot],_t=ct.kết_quả_xổ_số.map(bt=>{let ht=(Number(bt)+g)%V;return ht=ht===0?V:ht,q.add(ht),ht});k.push(`dự đoán kỳ ${ct.ngày_xổ_số}: ${_t.join(", ")}`)}console.log(k.join(`
`))}else{const ct=et[W].kết_quả_xổ_số,_t=new Map;for(let ht=W+1;ht<et.length;ht++){const Bt=et[ht].kết_quả_xổ_số.map(Ht=>{let Ut=(Number(Ht)+g)%V;return Ut=Ut===0?V:Ut,q.add(Ut),Ut}),Lt=ct.filter(Ht=>{const Ut=Bt.includes(Number(Ht));return Ut&&B.add(Number(Ht)),Ut}).length;_t.set(Lt,(_t.get(Lt)??0)+1)}const bt=et.length-W-1;console.log(`thống kê ${bt} kỳ: `+[3,4,5,6].map(ht=>`trúng ${ht} số: ${_t.get(ht)??0} kỳ`).join(", ")),console.log("các số được dự đoán:",[...B.values()].join(", ")),console.log("các số được dự đoán:",[...q.values()].join(", "),q.size)}}return(V,g)=>{var W,et,B,q;return ft(),dt("div",Sk,[D("div",Mk,[zt(D("div",Tk,[D("div",null,[D("div",Ok,[D("div",null,[zt(D("select",{"onUpdate:modelValue":g[0]||(g[0]=k=>U.value=k)},[(ft(!0),dt(Zt,null,S0(T.value,k=>(ft(),dt("option",{key:k,value:k},gt(k),9,Ek))),128))],512),[[hn,U.value]])])]),D("div",null,[g[58]||(g[58]=Et(" Hôm nay dự đoán cho: ")),D("span",Dk,gt(k0(v)),1)]),D("div",null,[D("div",Ck,[g[59]||(g[59]=D("div",{style:{background:"red",width:"10px",height:"10px"}},null,-1)),g[60]||(g[60]=Et(" Kết quả dự đoán ")),zt(D("input",{"onUpdate:modelValue":g[1]||(g[1]=k=>n.value=k),type:"checkbox"},null,512),[[ao,n.value]])]),D("div",Rk,[g[61]||(g[61]=D("div",{style:{background:"blue",width:"10px",height:"10px"}},null,-1)),g[62]||(g[62]=Et(" Kết quả hiện tại ")),zt(D("input",{"onUpdate:modelValue":g[2]||(g[2]=k=>e.value=k),type:"checkbox"},null,512),[[ao,e.value]])])]),D("div",null,[D("button",{onClick:g[3]||(g[3]=k=>Z1(55))},"Dự đoán bằng tăng 55"),D("button",{onClick:g[4]||(g[4]=k=>Z1(45))},"Dự đoán bằng tăng 45"),g[63]||(g[63]=Et(" dự đoán cho: ")),zt(D("input",{"onUpdate:modelValue":g[5]||(g[5]=k=>P.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,P.value]]),g[64]||(g[64]=Et(" đơn vị: ")),zt(D("input",{"onUpdate:modelValue":g[6]||(g[6]=k=>C.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,C.value]])]),D("div",null,[g[65]||(g[65]=Et("Hiển thị chi tiết: ")),zt(D("input",{"onUpdate:modelValue":g[7]||(g[7]=k=>N.value=k),type:"checkbox"},null,512),[[ao,N.value]])]),N.value?(ft(),dt("div",Ak,[g[82]||(g[82]=D("div",null,"*1* : Tính năng 1 chi tiết",-1)),D("div",null,[g[66]||(g[66]=Et(" - Lọc ít nhất ")),zt(D("select",{"onUpdate:modelValue":g[8]||(g[8]=k=>Z.value=k)},[(ft(),dt(Zt,null,S0([-1,1,2,3],k=>D("option",{key:k,value:k},gt(k),9,$k)),64))],512),[[hn,Z.value]]),g[67]||(g[67]=Et(" cột có từ 2 số trở lên "))]),D("div",null,[g[68]||(g[68]=Et(" - Lọc mỗi hàng tối đa ")),zt(D("select",{"onUpdate:modelValue":g[9]||(g[9]=k=>G.value=k)},[(ft(),dt(Zt,null,S0([-1,2,3,4],k=>D("option",{key:k,value:k},gt(k),9,Pk)),64))],512),[[hn,G.value]]),g[69]||(g[69]=Et(" số (điều kiện or, -1 là không lọc) "))]),D("div",null,[g[70]||(g[70]=Et(" - Mỗi cột tối đa ")),zt(D("select",{"onUpdate:modelValue":g[10]||(g[10]=k=>rt.value=k)},[(ft(),dt(Zt,null,S0([2,3,4],k=>D("option",{key:k,value:k},gt(k),9,Ik)),64))],512),[[hn,rt.value]]),g[71]||(g[71]=Et(" số (điều kiện and với các lọc trên) "))]),D("div",null,[g[72]||(g[72]=Et(" - Tạo dự đoán: số lần xuất hiện từ ")),zt(D("select",{"onUpdate:modelValue":g[11]||(g[11]=k=>tt.value=k)},[(ft(),dt(Zt,null,S0(Bi,k=>D("option",{key:k,value:k},gt(k),9,Nk)),64))],512),[[hn,tt.value]]),g[73]||(g[73]=Et(" tới ")),zt(D("select",{"onUpdate:modelValue":g[12]||(g[12]=k=>yt.value=k)},[(ft(),dt(Zt,null,S0(Bi,k=>D("option",{key:k,value:k},gt(k),9,Yk)),64))],512),[[hn,yt.value]]),g[74]||(g[74]=Et(" , số lượng vé ")),zt(D("input",{"onUpdate:modelValue":g[13]||(g[13]=k=>wt.value=k),type:"text",style:{width:"30px"}},null,512),[[ln,wt.value]]),g[75]||(g[75]=Et(" , loại vé giống ")),zt(D("input",{"onUpdate:modelValue":g[14]||(g[14]=k=>Qt.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,Qt.value]]),g[76]||(g[76]=Et(" vị trí với thống kê dự đoán (0 là không loại) "))]),D("div",null,[D("button",{onClick:g[15]||(g[15]=k=>V1(k0(a)))}," tạo dự đoán 55 "),D("button",{onClick:g[16]||(g[16]=k=>V1(k0(u)))}," tạo dự đoán 45 "),g[77]||(g[77]=Et(" cho danh sách chính và các danh sách phụ (tự lưu để đánh giá) "))]),D("div",null,[g[80]||(g[80]=Et(" ngày đánh giá ")),zt(D("select",{"onUpdate:modelValue":g[17]||(g[17]=k=>en.value=k)},[g[78]||(g[78]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0(V0.value,k=>(ft(),dt("option",{key:k,value:k},gt(k),9,Lk))),128))],512),[[hn,en.value]]),g[81]||(g[81]=Et(" danh sách ")),zt(D("select",{"onUpdate:modelValue":g[18]||(g[18]=k=>Y.value=k)},[g[79]||(g[79]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0(f0.value,k=>(ft(),dt("option",{key:k,value:k},gt(k),9,Fk))),128))],512),[[hn,Y.value]]),D("button",{onClick:g[19]||(g[19]=k=>a2("dự đoán"))},"đánh giá dự đoán đã lưu"),D("button",{onClick:g[20]||(g[20]=k=>xt("dự đoán"))},"xem dự đoán đã lưu")]),g[83]||(g[83]=D("div",null,"*1*",-1))])):Xr("",!0)]),D("div",null,[D("div",null,[D("div",null,[D("button",{onClick:s},"Xoá hết bộ nhớ đệm")]),D("div",Wk,[g[94]||(g[94]=D("div",null,"*1* : Tính năng 1 đánh giá",-1)),D("div",null,[D("button",{onClick:g[21]||(g[21]=k=>$r(k0(a)))},"thống kê dự đoán 55"),D("button",{onClick:g[22]||(g[22]=k=>$r(k0(u)))},"thống kê dự đoán 45"),g[84]||(g[84]=Et(" để lưu vào indexed DB "))]),D("div",null,[g[91]||(g[91]=Et(" từ Indexed DB")),D("button",{onClick:g[23]||(g[23]=k=>B0(k0(a)))}," phân tích và dự đoán 55"),D("button",{onClick:g[24]||(g[24]=k=>B0(k0(u)))}," phân tích và dự đoán 45 "),g[92]||(g[92]=Et(" chỉ mục ")),zt(D("input",{type:"text","onUpdate:modelValue":g[25]||(g[25]=k=>H.value=k),placeholder:"Nhập vị trí phân tích",style:{width:"20px"}},null,512),[[ln,H.value]]),g[93]||(g[93]=Et(" danh sách dự đoán ")),zt(D("input",{type:"text","onUpdate:modelValue":g[26]||(g[26]=k=>st.value=k),placeholder:"Nhập vị trí dự đoán",style:{width:"20px"}},null,512),[[ln,st.value]]),D("div",null,[g[85]||(g[85]=Et(" lọc nhóm từng trúng ở danh sách số ")),zt(D("input",{type:"text","onUpdate:modelValue":g[27]||(g[27]=k=>nt.value=k),style:{width:"20px"}},null,512),[[ln,nt.value]]),g[86]||(g[86]=Et(" (khi chọn chỉ mục = 0, tự lưu để đánh giá) "))]),D("div",null,[g[89]||(g[89]=Et(" ngày đánh giá ")),zt(D("select",{"onUpdate:modelValue":g[28]||(g[28]=k=>x.value=k)},[g[87]||(g[87]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0(w.value,k=>(ft(),dt("option",{key:k,value:k},gt(k),9,Uk))),128))],512),[[hn,x.value]]),g[90]||(g[90]=Et(" danh sách ")),zt(D("select",{"onUpdate:modelValue":g[29]||(g[29]=k=>R.value=k)},[g[88]||(g[88]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0($.value,k=>(ft(),dt("option",{key:k,value:k},gt(k),9,Hk))),128))],512),[[hn,R.value]]),D("button",{onClick:g[30]||(g[30]=k=>a2("phân tích"))},"đánh giá dự đoán đã lưu"),D("button",{onClick:g[31]||(g[31]=k=>xt("phân tích"))}," xem dự đoán đã lưu ")])]),g[95]||(g[95]=D("div",null,"*1*",-1))])]),D("div",qk,[g[96]||(g[96]=D("div",null,"*2* : Tính năng 2 số lần xuất hiện",-1)),g[97]||(g[97]=Et(" Số Xuất hiện nhiều lần: vị trí dự đoán: ")),zt(D("input",{"onUpdate:modelValue":g[32]||(g[32]=k=>J.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,J.value]]),g[98]||(g[98]=Et(" bao nhiêu lần: ")),zt(D("input",{"onUpdate:modelValue":g[33]||(g[33]=k=>z.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,z.value]]),g[99]||(g[99]=Et(" từ vị trí: ")),zt(D("input",{"onUpdate:modelValue":g[34]||(g[34]=k=>St.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,St.value]]),g[100]||(g[100]=Et(" xem bao nhiêu: ")),zt(D("input",{"onUpdate:modelValue":g[35]||(g[35]=k=>lt.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,lt.value]]),D("button",{onClick:g[36]||(g[36]=k=>Us())},"Lọc"),g[101]||(g[101]=D("div",null,"*2*",-1))]),D("div",Vk,[g[103]||(g[103]=D("div",null,"*3* : Tính năng 3 bộ vé phủ",-1)),g[104]||(g[104]=Et(" Bộ vé phủ: kỳ ")),zt(D("input",{"onUpdate:modelValue":g[37]||(g[37]=k=>Tt.value=k),type:"text",style:{width:"30px"}},null,512),[[ln,Tt.value]]),g[105]||(g[105]=Et(" nhóm ")),zt(D("input",{"onUpdate:modelValue":g[38]||(g[38]=k=>bn.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,bn.value]]),g[106]||(g[106]=Et(" số, đảm bảo trúng ")),zt(D("input",{"onUpdate:modelValue":g[39]||(g[39]=k=>jt.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,jt.value]]),g[107]||(g[107]=Et(" số, số vé ")),zt(D("input",{"onUpdate:modelValue":g[40]||(g[40]=k=>Dt.value=k),type:"text",style:{width:"30px"}},null,512),[[ln,Dt.value]]),D("button",{onClick:g[41]||(g[41]=k=>z1(55))},"tạo vé 55"),D("button",{onClick:g[42]||(g[42]=k=>z1(45))},"tạo vé 45"),g[108]||(g[108]=Et(" ngày dự đoán ")),zt(D("select",{"onUpdate:modelValue":g[43]||(g[43]=k=>an.value=k)},[g[102]||(g[102]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0(_n.value,k=>(ft(),dt("option",{key:k,value:k},gt(k),9,Bk))),128))],512),[[hn,an.value]]),D("button",{onClick:g[44]||(g[44]=k=>a2("vé phủ"))},"đối chiếu vé đã lưu"),g[109]||(g[109]=D("div",null,"*3*",-1))]),D("div",Gk,[g[111]||(g[111]=D("div",null,"*4* : Tính năng 4 vé mục tiêu",-1)),Et(" Vé mục tiêu (55: "+gt(k0(vo)[55])+", 45: "+gt(k0(vo)[45])+") chiến lược ",1),zt(D("select",{"onUpdate:modelValue":g[45]||(g[45]=k=>z0.value=k)},[(ft(!0),dt(Zt,null,S0(Object.keys(k0(hc)),k=>(ft(),dt("option",{key:k,value:k},gt(k),9,jk))),128))],512),[[hn,z0.value]]),D("button",{onClick:g[46]||(g[46]=k=>qe(k0(a)))},"vé kỳ tới 55"),D("button",{onClick:g[47]||(g[47]=k=>qe(k0(u)))},"vé kỳ tới 45"),g[112]||(g[112]=Et(" ngày đối chiếu ")),zt(D("select",{"onUpdate:modelValue":g[48]||(g[48]=k=>Gn.value=k)},[g[110]||(g[110]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0(lr.value,k=>(ft(),dt("option",{key:k,value:k},gt(k),9,Kk))),128))],512),[[hn,Gn.value]]),D("button",{onClick:g[49]||(g[49]=k=>a2("vé mục tiêu"))},"đối chiếu vé đã lưu"),g[113]||(g[113]=D("div",null,"*4*",-1))]),D("div",zk,[g[115]||(g[115]=D("div",null,"*5* : Tính năng 5 vé từ danh sách",-1)),g[116]||(g[116]=Et(" Vé từ danh sách xuất hiện (công thức cố định, ít nhất 1 cột 2 số, mỗi hàng tối đa 3 số): kỳ ")),zt(D("input",{"onUpdate:modelValue":g[50]||(g[50]=k=>w0.value=k),type:"text",style:{width:"30px"}},null,512),[[ln,w0.value]]),g[117]||(g[117]=Et(" danh sách ")),zt(D("input",{"onUpdate:modelValue":g[51]||(g[51]=k=>K0.value=k),type:"text",style:{width:"20px"}},null,512),[[ln,K0.value]]),g[118]||(g[118]=Et(" số vé ")),zt(D("input",{"onUpdate:modelValue":g[52]||(g[52]=k=>L0.value=k),type:"text",style:{width:"40px"}},null,512),[[ln,L0.value]]),D("button",{onClick:g[53]||(g[53]=k=>B1(k0(a)))},"tạo 55"),D("button",{onClick:g[54]||(g[54]=k=>B1(k0(u)))},"tạo 45"),g[119]||(g[119]=Et(" ngày đối chiếu ")),zt(D("select",{"onUpdate:modelValue":g[55]||(g[55]=k=>D0.value=k)},[g[114]||(g[114]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0(Z0.value,k=>(ft(),dt("option",{key:k,value:k},gt(k),9,Zk))),128))],512),[[hn,D0.value]]),D("button",{onClick:g[56]||(g[56]=k=>a2("danh sách"))},"đối chiếu vé đã lưu"),g[120]||(g[120]=D("div",null,"*5*",-1))])])],512),[[im,it.value]]),D("div",Jk,[D("button",{style:{width:"120px"},title:it.value?"đóng phần đầu trang":"mở phần đầu trang",onClick:g[57]||(g[57]=k=>it.value=!it.value)},gt(it.value?"▲":"▼"),9,Xk)])]),D("div",Qk,[D("div",tS," Tổng số dữ liệu 55: "+gt((W=Ct.value)==null?void 0:W.length),1),D("div",nS," Tổng số dữ liệu 45: "+gt((et=vt.value)==null?void 0:et.length),1)]),D("div",rS,[D("div",eS,[(ft(!0),dt(Zt,null,S0((B=Ct.value)==null?void 0:B.slice(0,U.value),(k,ot)=>(ft(),dt("div",{key:`danh_sách_dữ_liệu-${ot}`,style:{height:"auto"}},[D("div",iS,[D("div",null,gt(k.ngày_xổ_số)+"::"+gt(k.tuần_xổ_số)+"::"+gt(ot)+"::",1),D("div",sS,gt(k.kết_quả_xổ_số),1)]),N.value?(ft(),dt(Zt,{key:0},[D("div",null,"Số kết quả có: "+gt(k.số_kết_quả_trong_các_số_đã_xuất_hiện),1),D("div",null,"Số lượng xuất hiện: "+gt(k.tập_các_số_đã_xuất_hiện.size),1),g[121]||(g[121]=D("div",null,"Danh sách xuất hiện:",-1)),(ft(),ke(Ui(()=>I0(k,ot)))),D("div",null,"tổng danh sách: "+gt(k.dự_đoán_ds_xuất_hiện.length),1),D("div",null,[D("button",{onClick:ct=>En(k0(a),k)}," xem dự đoán ",8,oS),D("button",{onClick:ct=>k.hiển_thị_dự_đoán_ds_xuất_hiện=!k.hiển_thị_dự_đoán_ds_xuất_hiện}," xem danh sách ",8,lS)]),k.dự_đoán_ds_xuất_hiện.length>0&&k.hiển_thị_dự_đoán_ds_xuất_hiện?(ft(),dt("div",uS,[(ft(!0),dt(Zt,null,S0(k.dự_đoán_ds_xuất_hiện,(ct,_t)=>(ft(),dt("div",{key:`${_t}ds`},[D("div",null,[Et(gt(_t),1),(ft(),ke(Ui(()=>sn(ct,k,_t))))]),D("button",{onClick:bt=>En(k0(a),k,_t)}," xem dự đoán ",8,aS)]))),128))])):Xr("",!0)],64)):Xr("",!0)]))),128))]),D("div",cS,[(ft(!0),dt(Zt,null,S0((q=vt.value)==null?void 0:q.slice(0,U.value),(k,ot)=>(ft(),dt("div",{key:`danh_sách_dữ_liệu-${ot}`,style:{height:"auto"}},[D("div",fS,[D("div",null,gt(k.ngày_xổ_số)+"::"+gt(k.tuần_xổ_số)+"::"+gt(ot)+"::",1),D("div",hS,gt(k.kết_quả_xổ_số),1)]),N.value?(ft(),dt(Zt,{key:0},[D("div",null,"Số kết quả có: "+gt(k.số_kết_quả_trong_các_số_đã_xuất_hiện),1),D("div",null,"Số lượng xuất hiện: "+gt(k.tập_các_số_đã_xuất_hiện.size),1),g[122]||(g[122]=D("div",null,"Danh sách xuất hiện:",-1)),(ft(),ke(Ui(()=>I0(k,ot)))),D("div",null,"tổng danh sách: "+gt(k.dự_đoán_ds_xuất_hiện.length),1),D("div",null,[D("button",{onClick:ct=>En(k0(u),k)}," xem dự đoán ",8,_S),D("button",{onClick:ct=>k.hiển_thị_dự_đoán_ds_xuất_hiện=!k.hiển_thị_dự_đoán_ds_xuất_hiện}," xem danh sách ",8,dS)]),k.dự_đoán_ds_xuất_hiện.length>0&&k.hiển_thị_dự_đoán_ds_xuất_hiện?(ft(),dt("div",gS,[(ft(!0),dt(Zt,null,S0(k.dự_đoán_ds_xuất_hiện,(ct,_t)=>(ft(),dt("div",{key:`${_t}ds`},[D("div",null,[Et(gt(_t),1),(ft(),ke(Ui(()=>sn(ct,k,_t))))]),D("button",{onClick:bt=>En(k0(u),k,_t)}," xem dự đoán ",8,pS)]))),128))])):Xr("",!0)],64)):Xr("",!0)]))),128))])])])}}}),wS={style:{padding:"12px"}},bS=["value"],kS=["value"],SS={key:0},MS={key:1},TS={key:0},OS={key:1},ES={key:0},DS={key:1,style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"2px",maxWidth:"360px",margin:"6px 0",fontFamily:"monospace",fontSize:"12px"}},CS=["title"],RS={key:2,style:{fontSize:"12px",opacity:.7}},AS={style:{fontFamily:"monospace",columnWidth:"17em",fontSize:"15px",lineHeight:1.7}},$S=["onClick"],PS={key:0},IS=Fe({__name:"DuDoanDaLuuView",setup(t){const n=Ov(),e=Mt(String(n.query.ngay??"")),s=Mt(String(n.query.ds??"")),o={45:I4(),55:N4()},u=Mt([]),a=Mt(!0),f=Mt({});Promise.all([45,55].map(async C=>{const P=await X5(`${J5}${C}`);P&&(f.value[C]=P)})),be(n.query.nguon==="phân tích"?Bo:Vo).then(C=>{u.value=C.map(P=>P.giá_trị)}).finally(()=>{a.value=!1});const h=j0(()=>[...new Set(u.value.map(C=>C.ngày_dự_đoán))].sort((C,P)=>X(P,"DD/MM/YYYY").valueOf()-X(C,"DD/MM/YYYY").valueOf())),p=j0(()=>[...new Set(u.value.filter(C=>!e.value||C.ngày_dự_đoán===e.value).flatMap(C=>C.các_danh_sách.map(P=>P.tên)))]);function v(C){const P=o[C.loại_xổ_số===55?55:45],N=P.findIndex(Z=>Z.ngày_xổ_số===C.ngày_cơ_sở);return N>0?P[N-1].kết_quả_xổ_số:void 0}const y=Mt({});function S(C,P){y.value[C]=y.value[C]===P?void 0:P}function T(C,P,N,Z){var L0,z0,bn;const G=C.loại_xổ_số===55?55:45,rt=o[G],tt=rt.findIndex(jt=>jt.ngày_xổ_số===C.ngày_cơ_sở);if(tt<0)return{lý_do:`không tìm thấy kỳ ${C.ngày_cơ_sở} trong dữ liệu hiện tại`};let yt,wt;if(P==="danh sách chính"){const jt=Hb(G,tt);if(!jt)return{lý_do:"không tính được danh sách chính của kỳ này"};const Tt=[...jt].sort((Dt,an)=>Dt.tổng_xuất_hiện-an.tổng_xuất_hiện);yt=Tt.map(Dt=>Dt.số_xuất_hiện),wt=Tt.map(Dt=>Dt.tổng_xuất_hiện)}else{const jt=(L0=/^danh sách phụ (\d+)$/.exec(P))==null?void 0:L0[1],Tt=f.value[C.loại_xổ_số];if(jt===void 0)return{lý_do:`không hiểu tên danh sách "${P}"`};if(!Tt)return{lý_do:"chưa có bộ nhớ đệm danh sách dự đoán, hãy mở trang chính một lần để tính"};if(Tt.dự_đoán_ds_xuất_hiện.length!==rt.length)return{lý_do:"bộ nhớ đệm không khớp dữ liệu hiện tại (có kỳ mới), hãy mở trang chính một lần để tính lại"};yt=(z0=Tt.dự_đoán_ds_xuất_hiện[tt])==null?void 0:z0[Number(jt)],wt=(bn=Tt.số_lần_xuất_hiện_ds[tt])==null?void 0:bn[Number(jt)]}if(!yt||!wt)return{lý_do:"bộ nhớ đệm không có danh sách này"};const Qt=/số lần (\d+)-(\d+)/.exec(C.điều_kiện),c0=Number((Qt==null?void 0:Qt[1])??1),x0=Number((Qt==null?void 0:Qt[2])??6),w0=new Map;return N.forEach(jt=>jt.forEach(Tt=>w0.set(Tt,(w0.get(Tt)??0)+1))),{lưới:yt.map((jt,Tt)=>({số:jt,lần:wt[Tt],trong_khoảng:wt[Tt]>=c0&&wt[Tt]<=x0,số_vé_chứa:w0.get(jt)??0,trúng:Z.has(jt)}))}}const U=j0(()=>u.value.filter(C=>!e.value||C.ngày_dự_đoán===e.value).sort((C,P)=>P.thời_điểm_tạo-C.thời_điểm_tạo).map(C=>{const P=v(C),N=new Set(P??[]),Z=C.các_danh_sách.filter(G=>!s.value||G.tên===s.value).map(G=>{const rt=G.vé.map(tt=>({số:tt.map(yt=>({số:yt,trúng:N.has(yt)})),số_trúng:tt.filter(yt=>N.has(yt)).length}));return{tên:G.tên,...T(C,G.tên,G.vé,N),vé:rt,tổng_theo_mức:[3,4,5,6].map(tt=>({mức:tt,số_vé:rt.filter(yt=>yt.số_trúng===tt).length}))}});return{bản:C,kết_quả:P,các_danh_sách:Z}}).filter(C=>C.các_danh_sách.length>0));return(C,P)=>(ft(),dt("div",wS,[D("h3",null,"Dự đoán đã lưu ("+gt(k0(n).query.nguon==="phân tích"?"phân tích và dự đoán":"tạo dự đoán")+")",1),D("div",null,[P[4]||(P[4]=Et(" ngày dự đoán ")),zt(D("select",{"onUpdate:modelValue":P[0]||(P[0]=N=>e.value=N)},[P[2]||(P[2]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0(h.value,N=>(ft(),dt("option",{key:N,value:N},gt(N),9,bS))),128))],512),[[hn,e.value]]),P[5]||(P[5]=Et(" danh sách ")),zt(D("select",{"onUpdate:modelValue":P[1]||(P[1]=N=>s.value=N)},[P[3]||(P[3]=D("option",{value:""},"tất cả",-1)),(ft(!0),dt(Zt,null,S0(p.value,N=>(ft(),dt("option",{key:N,value:N},gt(N),9,kS))),128))],512),[[hn,s.value]])]),a.value?(ft(),dt("div",SS,"Đang tải...")):U.value.length===0?(ft(),dt("div",MS,"Không có dự đoán nào đã lưu khớp lựa chọn")):Xr("",!0),(ft(!0),dt(Zt,null,S0(U.value,N=>(ft(),dt("div",{key:N.bản.thời_điểm_tạo,style:{marginTop:"16px"}},[D("b",null,gt(N.bản.loại_xổ_số)+" - dự đoán cho kỳ "+gt(N.bản.ngày_dự_đoán)+" (dữ liệu đến "+gt(N.bản.ngày_cơ_sở)+") ",1),D("div",null,gt(N.bản.điều_kiện)+", lưu lúc "+gt(k0(X)(N.bản.thời_điểm_tạo).format("DD/MM/YYYY HH:mm")),1),N.kết_quả?(ft(),dt("div",TS,"kết quả kỳ "+gt(N.bản.ngày_dự_đoán)+": "+gt(N.kết_quả.join(" ")),1)):(ft(),dt("div",OS,"chưa có kết quả để đối chiếu")),(ft(!0),dt(Zt,null,S0(N.các_danh_sách,Z=>(ft(),dt("div",{key:Z.tên,style:{marginTop:"8px"}},[D("b",null,gt(Z.tên),1),Et(" ("+gt(Z.vé.length)+" vé) ",1),N.kết_quả?(ft(),dt("span",ES,[P[6]||(P[6]=Et(" — ")),(ft(!0),dt(Zt,null,S0(Z.tổng_theo_mức,G=>(ft(),dt("span",{key:G.mức}," trúng "+gt(G.mức)+": "+gt(G.số_vé)+gt(G.mức<6?", ":""),1))),128))])):Xr("",!0),Z.lưới?(ft(),dt("div",DS,[(ft(!0),dt(Zt,null,S0(Z.lưới,(G,rt)=>(ft(),dt("div",{key:rt,style:K2({textAlign:"center",padding:"3px 0",borderRadius:"3px",opacity:G.trong_khoảng?1:.35,background:G.số_vé_chứa>0?`rgba(56, 189, 248, ${.25+Math.min(G.số_vé_chứa,20)/30})`:"transparent",border:G.trúng?"2px solid #dc2626":"1px solid #555",outline:y.value[`${N.bản.thời_điểm_tạo}|${Z.tên}`]!==void 0&&Z.vé[y.value[`${N.bản.thời_điểm_tạo}|${Z.tên}`]].số.some(tt=>tt.số===G.số)?"3px solid #f59e0b":"none"}),title:`${G.số_vé_chứa} vé chứa số này`},gt(G.số)+":"+gt(G.lần),13,CS))),128))])):Z.lý_do?(ft(),dt("div",RS," không vẽ được lưới: "+gt(Z.lý_do),1)):Xr("",!0),D("div",AS,[(ft(!0),dt(Zt,null,S0(Z.vé,(G,rt)=>(ft(),dt("div",{key:rt,style:K2({cursor:"pointer",background:y.value[`${N.bản.thời_điểm_tạo}|${Z.tên}`]===rt?"rgba(245, 158, 11, 0.35)":"transparent"}),onClick:tt=>S(`${N.bản.thời_điểm_tạo}|${Z.tên}`,rt)},[(ft(!0),dt(Zt,null,S0(G.số,tt=>(ft(),dt("span",{key:tt.số,style:K2({display:"inline-block",width:"2.2em",textAlign:"center",...tt.trúng?{color:"#dc2626",fontWeight:"bold"}:{}})},gt(tt.số),5))),128)),N.kết_quả&&G.số_trúng>=3?(ft(),dt("span",PS,"("+gt(G.số_trúng)+")",1)):Xr("",!0)],12,$S))),128))])]))),128))]))),128))]))}}),Dc=3,NS=8e3;function YS(t){var u,a,f;const n=t.trim();if(/output=csv|format=csv|tqx=out:csv/.test(n))return n;const e=(u=/[#&?]gid=(\d+)/.exec(n))==null?void 0:u[1],s=(a=/\/spreadsheets\/d\/e\/([\w-]+)/.exec(n))==null?void 0:a[1];if(s)return`https://docs.google.com/spreadsheets/d/e/${s}/pub?output=csv${e?`&gid=${e}&single=true`:""}`;const o=(f=/\/spreadsheets\/d\/([\w-]+)/.exec(n))==null?void 0:f[1];if(!o)throw new Error("không nhận ra link Google Sheet");return`https://docs.google.com/spreadsheets/d/${o}/gviz/tq?tqx=out:csv&headers=0${e?`&gid=${e}`:""}`}function LS(t){const n=[];let e=[],s="",o=!1;for(let u=0;u<t.length;u++){const a=t[u];o?a==='"'?t[u+1]==='"'?(s+='"',u++):o=!1:s+=a:a==='"'?o=!0:a===","?(e.push(s),s=""):a===`
`||a==="\r"?(a==="\r"&&t[u+1]===`
`&&u++,e.push(s),n.push(e),e=[],s=""):s+=a}return(s!==""||e.length>0)&&(e.push(s),n.push(e)),n}function FS(t){if(/^\s*</.test(t))throw new Error("nhận về trang web thay vì CSV, kiểm tra sheet đã chia sẻ/xuất bản chưa");const n=[];for(const e of LS(t)){const s=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec((e[0]??"").trim()),o=(e[1]??"").trim();if(!s||!/^\d{1,2}$/.test(o))continue;const[,u,a,f]=s,h=(e[2]??"").trim().normalize("NFC").toLowerCase();n.push({ngày:`${u.padStart(2,"0")}/${a.padStart(2,"0")}/${f}`,thời_điểm:Date.UTC(Number(f),Number(a)-1,Number(u)),số:o.padStart(2,"0"),kết_quả:h==="có"?"có":h==="không"?"không":""})}if(n.length===0)throw new Error("không có dòng hợp lệ (ngày, số, kết quả)");return n.sort((e,s)=>s.thời_điểm-e.thời_điểm)}const WS=t=>new Promise(n=>setTimeout(n,t));async function US(t){const n=YS(t);let e;for(let s=1;s<=Dc;s++){const o=new AbortController,u=setTimeout(()=>o.abort(),NS);try{const a=await fetch(n,{cache:"no-store",signal:o.signal});if(!a.ok)throw new Error(`HTTP ${a.status}`);return FS(await a.text())}catch(a){e=a,s<Dc&&await WS(500*s)}finally{clearTimeout(u)}}throw e}const HS={style:{padding:"12px"}},qS={key:0},VS={key:1,style:{color:"#dc2626"}},BS={style:{marginTop:"6px"}},GS={style:{marginTop:"8px",borderCollapse:"collapse",fontFamily:"monospace",fontSize:"15px"}},jS={style:{padding:"2px 14px 2px 0"}},KS={style:{padding:"2px 14px",textAlign:"center"}},zS=Fe({__name:"LotoView",setup(t){const n=Mt([]),e=Mt(!0),s=Mt(""),o=Mt("");ff(async()=>{try{n.value=await US($b)}catch(p){s.value=`không tải được: ${p.message}`}finally{e.value=!1}});const u=j0(()=>n.value.filter(p=>p.kết_quả==="có").length),a=j0(()=>n.value.filter(p=>p.kết_quả==="không").length),f=j0(()=>{const p=u.value+a.value;return p===0?0:u.value/p*100}),h=j0(()=>o.value?n.value.filter(p=>p.kết_quả===o.value):n.value);return(p,v)=>(ft(),dt("div",HS,[v[4]||(v[4]=D("h3",null,"Loto",-1)),e.value?(ft(),dt("div",qS,"Đang tải...")):s.value?(ft(),dt("div",VS,gt(s.value),1)):(ft(),dt(Zt,{key:2},[D("div",null,gt(n.value.length)+" ngày ("+gt(n.value[n.value.length-1].ngày)+" đến "+gt(n.value[0].ngày)+") — có: "+gt(u.value)+", không: "+gt(a.value)+", tỉ lệ có: "+gt(f.value.toFixed(1))+"% ",1),D("div",BS,[v[2]||(v[2]=Et(" hiển thị ")),zt(D("select",{"onUpdate:modelValue":v[0]||(v[0]=y=>o.value=y)},v[1]||(v[1]=[D("option",{value:""},"tất cả",-1),D("option",{value:"có"},"có",-1),D("option",{value:"không"},"không",-1)]),512),[[hn,o.value]]),Et(" ("+gt(h.value.length)+" dòng) ",1)]),D("table",GS,[v[3]||(v[3]=D("thead",null,[D("tr",null,[D("th",{style:{textAlign:"left",padding:"2px 14px 2px 0"}},"Ngày"),D("th",{style:{textAlign:"center",padding:"2px 14px"}},"Số"),D("th",{style:{textAlign:"left",padding:"2px 0 2px 14px"}},"Kết quả")])],-1)),D("tbody",null,[(ft(!0),dt(Zt,null,S0(h.value,y=>(ft(),dt("tr",{key:y.thời_điểm},[D("td",jS,gt(y.ngày),1),D("td",KS,gt(y.số),1),D("td",{style:K2({padding:"2px 0 2px 14px",fontWeight:y.kết_quả==="có"?"bold":"normal",color:y.kết_quả==="có"?"#16a34a":y.kết_quả==="không"?"#dc2626":"inherit"})},gt(y.kết_quả||"—"),5)]))),128))])])],64))]))}}),ZS=Sv({history:tv("/lote/"),routes:[{path:"/",name:"home",component:xS},{path:"/du-doan-da-luu",name:"du-doan-da-luu",component:IS},{path:"/loto",name:"loto",component:zS}]}),Cc=wm(Ev);Wb().finally(()=>{Cc.use(ZS),Cc.mount("#app")})});export default JS();
