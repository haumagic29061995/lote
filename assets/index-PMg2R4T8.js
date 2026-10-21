var Xd=Object.defineProperty;var Qd=(t,n,r)=>n in t?Xd(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var tg=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var y2=(t,n,r)=>Qd(t,typeof n!="symbol"?n+"":n,r);var Sb=tg((Mb,E5)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function y8(t){const n=Object.create(null);for(const r of t.split(","))n[r]=1;return r=>r in n}const b2={},a3=[],gt=()=>{},ng=()=>!1,K5=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),T8=t=>t.startsWith("onUpdate:"),n1=Object.assign,x8=(t,n)=>{const r=t.indexOf(n);r>-1&&t.splice(r,1)},eg=Object.prototype.hasOwnProperty,m2=(t,n)=>eg.call(t,n),R0=Array.isArray,c3=t=>v4(t)==="[object Map]",x3=t=>v4(t)==="[object Set]",Br=t=>v4(t)==="[object Date]",Y0=t=>typeof t=="function",K2=t=>typeof t=="string",pt=t=>typeof t=="symbol",A2=t=>t!==null&&typeof t=="object",fs=t=>(A2(t)||Y0(t))&&Y0(t.then)&&Y0(t.catch),hs=Object.prototype.toString,v4=t=>hs.call(t),rg=t=>v4(t).slice(8,-1),_s=t=>v4(t)==="[object Object]",w8=t=>K2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,J3=y8(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),j5=t=>{const n=Object.create(null);return r=>n[r]||(n[r]=t(r))},ig=/-(\w)/g,j1=j5(t=>t.replace(ig,(n,r)=>r?r.toUpperCase():"")),sg=/\B([A-Z])/g,Hn=j5(t=>t.replace(sg,"-$1").toLowerCase()),z5=j5(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ce=j5(t=>t?`on${z5(t)}`:""),_n=(t,n)=>!Object.is(t,n),b5=(t,...n)=>{for(let r=0;r<t.length;r++)t[r](...n)},ds=(t,n,r,s=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:s,value:r})},N5=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Ir;const Z5=()=>Ir||(Ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function S8(t){if(R0(t)){const n={};for(let r=0;r<t.length;r++){const s=t[r],o=K2(s)?ag(s):S8(s);if(o)for(const l in o)n[l]=o[l]}return n}else if(K2(t)||A2(t))return t}const og=/;(?![^(]*\))/g,ug=/:([^]+)/,lg=/\/\*[^]*?\*\//g;function ag(t){const n={};return t.replace(lg,"").split(og).forEach(r=>{if(r){const s=r.split(ug);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function ht(t){let n="";if(K2(t))n=t;else if(R0(t))for(let r=0;r<t.length;r++){const s=ht(t[r]);s&&(n+=s+" ")}else if(A2(t))for(const r in t)t[r]&&(n+=r+" ");return n.trim()}const cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fg=y8(cg);function gs(t){return!!t||t===""}function hg(t,n){if(t.length!==n.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=y4(t[s],n[s]);return r}function y4(t,n){if(t===n)return!0;let r=Br(t),s=Br(n);if(r||s)return r&&s?t.getTime()===n.getTime():!1;if(r=pt(t),s=pt(n),r||s)return t===n;if(r=R0(t),s=R0(n),r||s)return r&&s?hg(t,n):!1;if(r=A2(t),s=A2(n),r||s){if(!r||!s)return!1;const o=Object.keys(t).length,l=Object.keys(n).length;if(o!==l)return!1;for(const a in t){const f=t.hasOwnProperty(a),h=n.hasOwnProperty(a);if(f&&!h||!f&&h||!y4(t[a],n[a]))return!1}}return String(t)===String(n)}function b8(t,n){return t.findIndex(r=>y4(r,n))}const ps=t=>!!(t&&t.__v_isRef===!0),s0=t=>K2(t)?t:t==null?"":R0(t)||A2(t)&&(t.toString===hs||!Y0(t.toString))?ps(t)?s0(t.value):JSON.stringify(t,ms,2):String(t),ms=(t,n)=>ps(n)?ms(t,n.value):c3(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((r,[s,o],l)=>(r[Pe(s,l)+" =>"]=o,r),{})}:x3(n)?{[`Set(${n.size})`]:[...n.values()].map(r=>Pe(r))}:pt(n)?Pe(n):A2(n)&&!R0(n)&&!_s(n)?String(n):n,Pe=(t,n="")=>{var r;return pt(t)?`Symbol(${(r=t.description)!=null?r:n})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let E1;class _g{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=E1,!n&&E1&&(this.index=(E1.scopes||(E1.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,r;if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].pause();for(n=0,r=this.effects.length;n<r;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,r;if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].resume();for(n=0,r=this.effects.length;n<r;n++)this.effects[n].resume()}}run(n){if(this._active){const r=E1;try{return E1=this,n()}finally{E1=r}}}on(){E1=this}off(){E1=this.parent}stop(n){if(this._active){this._active=!1;let r,s;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].stop();for(this.effects.length=0,r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function dg(){return E1}let P2;const Ae=new WeakSet;class vs{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,E1&&E1.active&&E1.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ae.has(this)&&(Ae.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ts(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hr(this),xs(this);const n=P2,r=et;P2=this,et=!0;try{return this.fn()}finally{ws(this),P2=n,et=r,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)C8(n);this.deps=this.depsTail=void 0,Hr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ae.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ze(this)&&this.run()}get dirty(){return ze(this)}}let ys=0,X3,Q3;function Ts(t,n=!1){if(t.flags|=8,n){t.next=Q3,Q3=t;return}t.next=X3,X3=t}function M8(){ys++}function k8(){if(--ys>0)return;if(Q3){let n=Q3;for(Q3=void 0;n;){const r=n.next;n.next=void 0,n.flags&=-9,n=r}}let t;for(;X3;){let n=X3;for(X3=void 0;n;){const r=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){t||(t=s)}n=r}}if(t)throw t}function xs(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function ws(t){let n,r=t.depsTail,s=r;for(;s;){const o=s.prevDep;s.version===-1?(s===r&&(r=o),C8(s),gg(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}t.deps=n,t.depsTail=r}function ze(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Ss(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function Ss(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===o4))return;t.globalVersion=o4;const n=t.dep;if(t.flags|=2,n.version>0&&!t.isSSR&&t.deps&&!ze(t)){t.flags&=-3;return}const r=P2,s=et;P2=t,et=!0;try{xs(t);const o=t.fn(t._value);(n.version===0||_n(o,t._value))&&(t._value=o,n.version++)}catch(o){throw n.version++,o}finally{P2=r,et=s,ws(t),t.flags&=-3}}function C8(t,n=!1){const{dep:r,prevSub:s,nextSub:o}=t;if(s&&(s.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=s,t.nextSub=void 0),r.subs===t&&(r.subs=s,!s&&r.computed)){r.computed.flags&=-5;for(let l=r.computed.deps;l;l=l.nextDep)C8(l,!0)}!n&&!--r.sc&&r.map&&r.map.delete(r.key)}function gg(t){const{prevDep:n,nextDep:r}=t;n&&(n.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=n,t.nextDep=void 0)}let et=!0;const bs=[];function pn(){bs.push(et),et=!1}function mn(){const t=bs.pop();et=t===void 0?!0:t}function Hr(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const r=P2;P2=void 0;try{n()}finally{P2=r}}}let o4=0;class pg{constructor(n,r){this.sub=n,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class P8{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!P2||!et||P2===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==P2)r=this.activeLink=new pg(P2,this),P2.deps?(r.prevDep=P2.depsTail,P2.depsTail.nextDep=r,P2.depsTail=r):P2.deps=P2.depsTail=r,Ms(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const s=r.nextDep;s.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=s),r.prevDep=P2.depsTail,r.nextDep=void 0,P2.depsTail.nextDep=r,P2.depsTail=r,P2.deps===r&&(P2.deps=s)}return r}trigger(n){this.version++,o4++,this.notify(n)}notify(n){M8();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{k8()}}}function Ms(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)Ms(s)}const r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}const Ze=new WeakMap,Nn=Symbol(""),Je=Symbol(""),u4=Symbol("");function u1(t,n,r){if(et&&P2){let s=Ze.get(t);s||Ze.set(t,s=new Map);let o=s.get(r);o||(s.set(r,o=new P8),o.map=s,o.key=r),o.track()}}function Bt(t,n,r,s,o,l){const a=Ze.get(t);if(!a){o4++;return}const f=h=>{h&&h.trigger()};if(M8(),n==="clear")a.forEach(f);else{const h=R0(t),p=h&&w8(r);if(h&&r==="length"){const v=Number(s);a.forEach((y,S)=>{(S==="length"||S===u4||!pt(S)&&S>=v)&&f(y)})}else switch((r!==void 0||a.has(void 0))&&f(a.get(r)),p&&f(a.get(u4)),n){case"add":h?p&&f(a.get("length")):(f(a.get(Nn)),c3(t)&&f(a.get(Je)));break;case"delete":h||(f(a.get(Nn)),c3(t)&&f(a.get(Je)));break;case"set":c3(t)&&f(a.get(Nn));break}}k8()}function n3(t){const n=p2(t);return n===t?n:(u1(n,"iterate",u4),K1(t)?n:n.map(l1))}function J5(t){return u1(t=p2(t),"iterate",u4),t}const mg={__proto__:null,[Symbol.iterator](){return De(this,Symbol.iterator,l1)},concat(...t){return n3(this).concat(...t.map(n=>R0(n)?n3(n):n))},entries(){return De(this,"entries",t=>(t[1]=l1(t[1]),t))},every(t,n){return Dt(this,"every",t,n,void 0,arguments)},filter(t,n){return Dt(this,"filter",t,n,r=>r.map(l1),arguments)},find(t,n){return Dt(this,"find",t,n,l1,arguments)},findIndex(t,n){return Dt(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Dt(this,"findLast",t,n,l1,arguments)},findLastIndex(t,n){return Dt(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Dt(this,"forEach",t,n,void 0,arguments)},includes(...t){return Le(this,"includes",t)},indexOf(...t){return Le(this,"indexOf",t)},join(t){return n3(this).join(t)},lastIndexOf(...t){return Le(this,"lastIndexOf",t)},map(t,n){return Dt(this,"map",t,n,void 0,arguments)},pop(){return Y3(this,"pop")},push(...t){return Y3(this,"push",t)},reduce(t,...n){return Gr(this,"reduce",t,n)},reduceRight(t,...n){return Gr(this,"reduceRight",t,n)},shift(){return Y3(this,"shift")},some(t,n){return Dt(this,"some",t,n,void 0,arguments)},splice(...t){return Y3(this,"splice",t)},toReversed(){return n3(this).toReversed()},toSorted(t){return n3(this).toSorted(t)},toSpliced(...t){return n3(this).toSpliced(...t)},unshift(...t){return Y3(this,"unshift",t)},values(){return De(this,"values",l1)}};function De(t,n,r){const s=J5(t),o=s[n]();return s!==t&&!K1(t)&&(o._next=o.next,o.next=()=>{const l=o._next();return l.value&&(l.value=r(l.value)),l}),o}const vg=Array.prototype;function Dt(t,n,r,s,o,l){const a=J5(t),f=a!==t&&!K1(t),h=a[n];if(h!==vg[n]){const y=h.apply(t,l);return f?l1(y):y}let p=r;a!==t&&(f?p=function(y,S){return r.call(this,l1(y),S,t)}:r.length>2&&(p=function(y,S){return r.call(this,y,S,t)}));const v=h.call(a,p,s);return f&&o?o(v):v}function Gr(t,n,r,s){const o=J5(t);let l=r;return o!==t&&(K1(t)?r.length>3&&(l=function(a,f,h){return r.call(this,a,f,h,t)}):l=function(a,f,h){return r.call(this,a,l1(f),h,t)}),o[n](l,...s)}function Le(t,n,r){const s=p2(t);u1(s,"iterate",u4);const o=s[n](...r);return(o===-1||o===!1)&&L8(r[0])?(r[0]=p2(r[0]),s[n](...r)):o}function Y3(t,n,r=[]){pn(),M8();const s=p2(t)[n].apply(t,r);return k8(),mn(),s}const yg=y8("__proto__,__v_isRef,__isVue"),ks=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pt));function Tg(t){pt(t)||(t=String(t));const n=p2(this);return u1(n,"has",t),n.hasOwnProperty(t)}class Cs{constructor(n=!1,r=!1){this._isReadonly=n,this._isShallow=r}get(n,r,s){if(r==="__v_skip")return n.__v_skip;const o=this._isReadonly,l=this._isShallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return l;if(r==="__v_raw")return s===(o?l?Dg:Ls:l?Ds:As).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const a=R0(n);if(!o){let h;if(a&&(h=mg[r]))return h;if(r==="hasOwnProperty")return Tg}const f=Reflect.get(n,r,c1(n)?n:s);return(pt(r)?ks.has(r):yg(r))||(o||u1(n,"get",r),l)?f:c1(f)?a&&w8(r)?f:f.value:A2(f)?o?Es(f):X5(f):f}}class Ps extends Cs{constructor(n=!1){super(!1,n)}set(n,r,s,o){let l=n[r];if(!this._isShallow){const h=Bn(l);if(!K1(s)&&!Bn(s)&&(l=p2(l),s=p2(s)),!R0(n)&&c1(l)&&!c1(s))return h?!1:(l.value=s,!0)}const a=R0(n)&&w8(r)?Number(r)<n.length:m2(n,r),f=Reflect.set(n,r,s,c1(n)?n:o);return n===p2(o)&&(a?_n(s,l)&&Bt(n,"set",r,s):Bt(n,"add",r,s)),f}deleteProperty(n,r){const s=m2(n,r);n[r];const o=Reflect.deleteProperty(n,r);return o&&s&&Bt(n,"delete",r,void 0),o}has(n,r){const s=Reflect.has(n,r);return(!pt(r)||!ks.has(r))&&u1(n,"has",r),s}ownKeys(n){return u1(n,"iterate",R0(n)?"length":Nn),Reflect.ownKeys(n)}}class xg extends Cs{constructor(n=!1){super(!0,n)}set(n,r){return!0}deleteProperty(n,r){return!0}}const wg=new Ps,Sg=new xg,bg=new Ps(!0),Xe=t=>t,g5=t=>Reflect.getPrototypeOf(t);function Mg(t,n,r){return function(...s){const o=this.__v_raw,l=p2(o),a=c3(l),f=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,p=o[t](...s),v=r?Xe:n?Qe:l1;return!n&&u1(l,"iterate",h?Je:Nn),{next(){const{value:y,done:S}=p.next();return S?{value:y,done:S}:{value:f?[v(y[0]),v(y[1])]:v(y),done:S}},[Symbol.iterator](){return this}}}}function p5(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function kg(t,n){const r={get(o){const l=this.__v_raw,a=p2(l),f=p2(o);t||(_n(o,f)&&u1(a,"get",o),u1(a,"get",f));const{has:h}=g5(a),p=n?Xe:t?Qe:l1;if(h.call(a,o))return p(l.get(o));if(h.call(a,f))return p(l.get(f));l!==a&&l.get(o)},get size(){const o=this.__v_raw;return!t&&u1(p2(o),"iterate",Nn),Reflect.get(o,"size",o)},has(o){const l=this.__v_raw,a=p2(l),f=p2(o);return t||(_n(o,f)&&u1(a,"has",o),u1(a,"has",f)),o===f?l.has(o):l.has(o)||l.has(f)},forEach(o,l){const a=this,f=a.__v_raw,h=p2(f),p=n?Xe:t?Qe:l1;return!t&&u1(h,"iterate",Nn),f.forEach((v,y)=>o.call(l,p(v),p(y),a))}};return n1(r,t?{add:p5("add"),set:p5("set"),delete:p5("delete"),clear:p5("clear")}:{add(o){!n&&!K1(o)&&!Bn(o)&&(o=p2(o));const l=p2(this);return g5(l).has.call(l,o)||(l.add(o),Bt(l,"add",o,o)),this},set(o,l){!n&&!K1(l)&&!Bn(l)&&(l=p2(l));const a=p2(this),{has:f,get:h}=g5(a);let p=f.call(a,o);p||(o=p2(o),p=f.call(a,o));const v=h.call(a,o);return a.set(o,l),p?_n(l,v)&&Bt(a,"set",o,l):Bt(a,"add",o,l),this},delete(o){const l=p2(this),{has:a,get:f}=g5(l);let h=a.call(l,o);h||(o=p2(o),h=a.call(l,o)),f&&f.call(l,o);const p=l.delete(o);return h&&Bt(l,"delete",o,void 0),p},clear(){const o=p2(this),l=o.size!==0,a=o.clear();return l&&Bt(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{r[o]=Mg(o,t,n)}),r}function A8(t,n){const r=kg(t,n);return(s,o,l)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?s:Reflect.get(m2(r,o)&&o in s?r:s,o,l)}const Cg={get:A8(!1,!1)},Pg={get:A8(!1,!0)},Ag={get:A8(!0,!1)},As=new WeakMap,Ds=new WeakMap,Ls=new WeakMap,Dg=new WeakMap;function Lg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Og(t){return t.__v_skip||!Object.isExtensible(t)?0:Lg(rg(t))}function X5(t){return Bn(t)?t:D8(t,!1,wg,Cg,As)}function Os(t){return D8(t,!1,bg,Pg,Ds)}function Es(t){return D8(t,!0,Sg,Ag,Ls)}function D8(t,n,r,s,o){if(!A2(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const l=o.get(t);if(l)return l;const a=Og(t);if(a===0)return t;const f=new Proxy(t,a===2?s:r);return o.set(t,f),f}function f3(t){return Bn(t)?f3(t.__v_raw):!!(t&&t.__v_isReactive)}function Bn(t){return!!(t&&t.__v_isReadonly)}function K1(t){return!!(t&&t.__v_isShallow)}function L8(t){return t?!!t.__v_raw:!1}function p2(t){const n=t&&t.__v_raw;return n?p2(n):t}function Eg(t){return!m2(t,"__v_skip")&&Object.isExtensible(t)&&ds(t,"__v_skip",!0),t}const l1=t=>A2(t)?X5(t):t,Qe=t=>A2(t)?Es(t):t;function c1(t){return t?t.__v_isRef===!0:!1}function j0(t){return Ns(t,!1)}function Ng(t){return Ns(t,!0)}function Ns(t,n){return c1(t)?t:new Rg(t,n)}class Rg{constructor(n,r){this.dep=new P8,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?n:p2(n),this._value=r?n:l1(n),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(n){const r=this._rawValue,s=this.__v_isShallow||K1(n)||Bn(n);n=s?n:p2(n),_n(n,r)&&(this._rawValue=n,this._value=s?n:l1(n),this.dep.trigger())}}function T2(t){return c1(t)?t.value:t}const Bg={get:(t,n,r)=>n==="__v_raw"?t:T2(Reflect.get(t,n,r)),set:(t,n,r,s)=>{const o=t[n];return c1(o)&&!c1(r)?(o.value=r,!0):Reflect.set(t,n,r,s)}};function Rs(t){return f3(t)?t:new Proxy(t,Bg)}class Ig{constructor(n,r,s){this.fn=n,this.setter=r,this._value=void 0,this.dep=new P8(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=o4-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&P2!==this)return Ts(this,!0),!0}get value(){const n=this.dep.track();return Ss(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Hg(t,n,r=!1){let s,o;return Y0(t)?s=t:(s=t.get,o=t.set),new Ig(s,o,r)}const m5={},R5=new WeakMap;let Dn;function Gg(t,n=!1,r=Dn){if(r){let s=R5.get(r);s||R5.set(r,s=[]),s.push(t)}}function $g(t,n,r=b2){const{immediate:s,deep:o,once:l,scheduler:a,augmentJob:f,call:h}=r,p=f0=>o?f0:K1(f0)||o===!1||o===0?It(f0,1):It(f0);let v,y,S,k,q=!1,$=!1;if(c1(t)?(y=()=>t.value,q=K1(t)):f3(t)?(y=()=>p(t),q=!0):R0(t)?($=!0,q=t.some(f0=>f3(f0)||K1(f0)),y=()=>t.map(f0=>{if(c1(f0))return f0.value;if(f3(f0))return p(f0);if(Y0(f0))return h?h(f0,2):f0()})):Y0(t)?n?y=h?()=>h(t,2):t:y=()=>{if(S){pn();try{S()}finally{mn()}}const f0=Dn;Dn=v;try{return h?h(t,3,[k]):t(k)}finally{Dn=f0}}:y=gt,n&&o){const f0=y,a0=o===!0?1/0:o;y=()=>It(f0(),a0)}const t0=dg(),r0=()=>{v.stop(),t0&&t0.active&&x8(t0.effects,v)};if(l&&n){const f0=n;n=(...a0)=>{f0(...a0),r0()}}let J=$?new Array(t.length).fill(m5):m5;const c0=f0=>{if(!(!(v.flags&1)||!v.dirty&&!f0))if(n){const a0=v.run();if(o||q||($?a0.some((A0,M0)=>_n(A0,J[M0])):_n(a0,J))){S&&S();const A0=Dn;Dn=v;try{const M0=[a0,J===m5?void 0:$&&J[0]===m5?[]:J,k];h?h(n,3,M0):n(...M0),J=a0}finally{Dn=A0}}}else v.run()};return f&&f(c0),v=new vs(y),v.scheduler=a?()=>a(c0,!1):c0,k=f0=>Gg(f0,!1,v),S=v.onStop=()=>{const f0=R5.get(v);if(f0){if(h)h(f0,4);else for(const a0 of f0)a0();R5.delete(v)}},n?s?c0(!0):J=v.run():a?a(c0.bind(null,!0),!0):v.run(),r0.pause=v.pause.bind(v),r0.resume=v.resume.bind(v),r0.stop=r0,r0}function It(t,n=1/0,r){if(n<=0||!A2(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),n--,c1(t))It(t.value,n,r);else if(R0(t))for(let s=0;s<t.length;s++)It(t[s],n,r);else if(x3(t)||c3(t))t.forEach(s=>{It(s,n,r)});else if(_s(t)){for(const s in t)It(t[s],n,r);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&It(t[s],n,r)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function T4(t,n,r,s){try{return s?t(...s):t()}catch(o){Q5(o,n,r)}}function mt(t,n,r,s){if(Y0(t)){const o=T4(t,n,r,s);return o&&fs(o)&&o.catch(l=>{Q5(l,n,r)}),o}if(R0(t)){const o=[];for(let l=0;l<t.length;l++)o.push(mt(t[l],n,r,s));return o}}function Q5(t,n,r,s=!0){const o=n?n.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||b2;if(n){let f=n.parent;const h=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${r}`;for(;f;){const v=f.ec;if(v){for(let y=0;y<v.length;y++)if(v[y](t,h,p)===!1)return}f=f.parent}if(l){pn(),T4(l,null,10,[t,h,p]),mn();return}}Yg(t,r,o,s,a)}function Yg(t,n,r,s=!0,o=!1){if(o)throw t;console.error(t)}const m1=[];let ft=-1;const h3=[];let on=null,i3=0;const Bs=Promise.resolve();let B5=null;function O8(t){const n=B5||Bs;return t?n.then(this?t.bind(this):t):n}function Vg(t){let n=ft+1,r=m1.length;for(;n<r;){const s=n+r>>>1,o=m1[s],l=l4(o);l<t||l===t&&o.flags&2?n=s+1:r=s}return n}function E8(t){if(!(t.flags&1)){const n=l4(t),r=m1[m1.length-1];!r||!(t.flags&2)&&n>=l4(r)?m1.push(t):m1.splice(Vg(n),0,t),t.flags|=1,Is()}}function Is(){B5||(B5=Bs.then(Gs))}function Fg(t){R0(t)?h3.push(...t):on&&t.id===-1?on.splice(i3+1,0,t):t.flags&1||(h3.push(t),t.flags|=1),Is()}function $r(t,n,r=ft+1){for(;r<m1.length;r++){const s=m1[r];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;m1.splice(r,1),r--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Hs(t){if(h3.length){const n=[...new Set(h3)].sort((r,s)=>l4(r)-l4(s));if(h3.length=0,on){on.push(...n);return}for(on=n,i3=0;i3<on.length;i3++){const r=on[i3];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}on=null,i3=0}}const l4=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Gs(t){try{for(ft=0;ft<m1.length;ft++){const n=m1[ft];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),T4(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;ft<m1.length;ft++){const n=m1[ft];n&&(n.flags&=-2)}ft=-1,m1.length=0,Hs(),B5=null,(m1.length||h3.length)&&Gs()}}let N1=null,$s=null;function I5(t){const n=N1;return N1=t,$s=t&&t.type.__scopeId||null,n}function Wg(t,n=N1,r){if(!n||t._n)return t;const s=(...o)=>{s._d&&zr(-1);const l=I5(n);let a;try{a=t(...o)}finally{I5(l),s._d&&zr(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function d2(t,n){if(N1===null)return t;const r=r6(N1),s=t.dirs||(t.dirs=[]);for(let o=0;o<n.length;o++){let[l,a,f,h=b2]=n[o];l&&(Y0(l)&&(l={mounted:l,updated:l}),l.deep&&It(a),s.push({dir:l,instance:r,value:a,oldValue:void 0,arg:f,modifiers:h}))}return t}function Cn(t,n,r,s){const o=t.dirs,l=n&&n.dirs;for(let a=0;a<o.length;a++){const f=o[a];l&&(f.oldValue=l[a].value);let h=f.dir[s];h&&(pn(),mt(h,r,8,[t.el,f,t,n]),mn())}}const Ug=Symbol("_vte"),qg=t=>t.__isTeleport;function N8(t,n){t.shapeFlag&6&&t.component?(t.transition=n,N8(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function x4(t,n){return Y0(t)?n1({name:t.name},n,{setup:t}):t}function Ys(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function H5(t,n,r,s,o=!1){if(R0(t)){t.forEach((q,$)=>H5(q,n&&(R0(n)?n[$]:n),r,s,o));return}if(t4(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&H5(t,n,r,s.component.subTree);return}const l=s.shapeFlag&4?r6(s.component):s.el,a=o?null:l,{i:f,r:h}=t,p=n&&n.r,v=f.refs===b2?f.refs={}:f.refs,y=f.setupState,S=p2(y),k=y===b2?()=>!1:q=>m2(S,q);if(p!=null&&p!==h&&(K2(p)?(v[p]=null,k(p)&&(y[p]=null)):c1(p)&&(p.value=null)),Y0(h))T4(h,f,12,[a,v]);else{const q=K2(h),$=c1(h);if(q||$){const t0=()=>{if(t.f){const r0=q?k(h)?y[h]:v[h]:h.value;o?R0(r0)&&x8(r0,l):R0(r0)?r0.includes(l)||r0.push(l):q?(v[h]=[l],k(h)&&(y[h]=v[h])):(h.value=[l],t.k&&(v[t.k]=h.value))}else q?(v[h]=a,k(h)&&(y[h]=a)):$&&(h.value=a,t.k&&(v[t.k]=a))};a?(t0.id=-1,O1(t0,r)):t0()}}}Z5().requestIdleCallback;Z5().cancelIdleCallback;const t4=t=>!!t.type.__asyncLoader,Vs=t=>t.type.__isKeepAlive;function Kg(t,n){Fs(t,"a",n)}function jg(t,n){Fs(t,"da",n)}function Fs(t,n,r=a1){const s=t.__wdc||(t.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(t6(n,s,r),r){let o=r.parent;for(;o&&o.parent;)Vs(o.parent.vnode)&&zg(s,n,r,o),o=o.parent}}function zg(t,n,r,s){const o=t6(n,t,s,!0);Us(()=>{x8(s[n],o)},r)}function t6(t,n,r=a1,s=!1){if(r){const o=r[t]||(r[t]=[]),l=n.__weh||(n.__weh=(...a)=>{pn();const f=w4(r),h=mt(n,r,t,a);return f(),mn(),h});return s?o.unshift(l):o.push(l),l}}const Ut=t=>(n,r=a1)=>{(!c4||t==="sp")&&t6(t,(...s)=>n(...s),r)},Zg=Ut("bm"),Ws=Ut("m"),Jg=Ut("bu"),Xg=Ut("u"),Qg=Ut("bum"),Us=Ut("um"),tp=Ut("sp"),np=Ut("rtg"),ep=Ut("rtc");function rp(t,n=a1){t6("ec",t,n)}const ip="components",qs=Symbol.for("v-ndc");function v5(t){return K2(t)?sp(ip,t,!1)||t:t||qs}function sp(t,n,r=!0,s=!1){const o=N1||a1;if(o){const l=o.type;{const f=qp(l,!1);if(f&&(f===n||f===j1(n)||f===z5(j1(n))))return l}const a=Yr(o[t]||l[t],n)||Yr(o.appContext[t],n);return!a&&s?l:a}}function Yr(t,n){return t&&(t[n]||t[j1(n)]||t[z5(j1(n))])}function q2(t,n,r,s){let o;const l=r,a=R0(t);if(a||K2(t)){const f=a&&f3(t);let h=!1;f&&(h=!K1(t),t=J5(t)),o=new Array(t.length);for(let p=0,v=t.length;p<v;p++)o[p]=n(h?l1(t[p]):t[p],p,void 0,l)}else if(typeof t=="number"){o=new Array(t);for(let f=0;f<t;f++)o[f]=n(f+1,f,void 0,l)}else if(A2(t))if(t[Symbol.iterator])o=Array.from(t,(f,h)=>n(f,h,void 0,l));else{const f=Object.keys(t);o=new Array(f.length);for(let h=0,p=f.length;h<p;h++){const v=f[h];o[h]=n(t[v],v,h,l)}}else o=[];return o}const t8=t=>t?ho(t)?r6(t):t8(t.parent):null,n4=n1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>t8(t.parent),$root:t=>t8(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>R8(t),$forceUpdate:t=>t.f||(t.f=()=>{E8(t.update)}),$nextTick:t=>t.n||(t.n=O8.bind(t.proxy)),$watch:t=>kp.bind(t)}),Oe=(t,n)=>t!==b2&&!t.__isScriptSetup&&m2(t,n),op={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:r,setupState:s,data:o,props:l,accessCache:a,type:f,appContext:h}=t;let p;if(n[0]!=="$"){const k=a[n];if(k!==void 0)switch(k){case 1:return s[n];case 2:return o[n];case 4:return r[n];case 3:return l[n]}else{if(Oe(s,n))return a[n]=1,s[n];if(o!==b2&&m2(o,n))return a[n]=2,o[n];if((p=t.propsOptions[0])&&m2(p,n))return a[n]=3,l[n];if(r!==b2&&m2(r,n))return a[n]=4,r[n];n8&&(a[n]=0)}}const v=n4[n];let y,S;if(v)return n==="$attrs"&&u1(t.attrs,"get",""),v(t);if((y=f.__cssModules)&&(y=y[n]))return y;if(r!==b2&&m2(r,n))return a[n]=4,r[n];if(S=h.config.globalProperties,m2(S,n))return S[n]},set({_:t},n,r){const{data:s,setupState:o,ctx:l}=t;return Oe(o,n)?(o[n]=r,!0):s!==b2&&m2(s,n)?(s[n]=r,!0):m2(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(l[n]=r,!0)},has({_:{data:t,setupState:n,accessCache:r,ctx:s,appContext:o,propsOptions:l}},a){let f;return!!r[a]||t!==b2&&m2(t,a)||Oe(n,a)||(f=l[0])&&m2(f,a)||m2(s,a)||m2(n4,a)||m2(o.config.globalProperties,a)},defineProperty(t,n,r){return r.get!=null?t._.accessCache[n]=0:m2(r,"value")&&this.set(t,n,r.value,null),Reflect.defineProperty(t,n,r)}};function Vr(t){return R0(t)?t.reduce((n,r)=>(n[r]=null,n),{}):t}let n8=!0;function up(t){const n=R8(t),r=t.proxy,s=t.ctx;n8=!1,n.beforeCreate&&Fr(n.beforeCreate,t,"bc");const{data:o,computed:l,methods:a,watch:f,provide:h,inject:p,created:v,beforeMount:y,mounted:S,beforeUpdate:k,updated:q,activated:$,deactivated:t0,beforeDestroy:r0,beforeUnmount:J,destroyed:c0,unmounted:f0,render:a0,renderTracked:A0,renderTriggered:M0,errorCaptured:U0,serverPrefetch:Q0,expose:f2,inheritAttrs:M2,components:I2,directives:j2,filters:M1}=n;if(p&&lp(p,s,null),a)for(const G in a){const L=a[G];Y0(L)&&(s[G]=L.bind(r))}if(o){const G=o.call(r,r);A2(G)&&(t.data=X5(G))}if(n8=!0,l)for(const G in l){const L=l[G],H=Y0(L)?L.bind(r,r):Y0(L.get)?L.get.bind(r,r):gt,h0=!Y0(L)&&Y0(L.set)?L.set.bind(r):gt,L0=O2({get:H,set:h0});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>L0.value,set:C0=>L0.value=C0})}if(f)for(const G in f)Ks(f[G],s,r,G);if(h){const G=Y0(h)?h.call(r):h;Reflect.ownKeys(G).forEach(L=>{M5(L,G[L])})}v&&Fr(v,t,"c");function D2(G,L){R0(L)?L.forEach(H=>G(H.bind(r))):L&&G(L.bind(r))}if(D2(Zg,y),D2(Ws,S),D2(Jg,k),D2(Xg,q),D2(Kg,$),D2(jg,t0),D2(rp,U0),D2(ep,A0),D2(np,M0),D2(Qg,J),D2(Us,f0),D2(tp,Q0),R0(f2))if(f2.length){const G=t.exposed||(t.exposed={});f2.forEach(L=>{Object.defineProperty(G,L,{get:()=>r[L],set:H=>r[L]=H})})}else t.exposed||(t.exposed={});a0&&t.render===gt&&(t.render=a0),M2!=null&&(t.inheritAttrs=M2),I2&&(t.components=I2),j2&&(t.directives=j2),Q0&&Ys(t)}function lp(t,n,r=gt){R0(t)&&(t=e8(t));for(const s in t){const o=t[s];let l;A2(o)?"default"in o?l=$t(o.from||s,o.default,!0):l=$t(o.from||s):l=$t(o),c1(l)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):n[s]=l}}function Fr(t,n,r){mt(R0(t)?t.map(s=>s.bind(n.proxy)):t.bind(n.proxy),n,r)}function Ks(t,n,r,s){let o=s.includes(".")?uo(r,s):()=>r[s];if(K2(t)){const l=n[t];Y0(l)&&k5(o,l)}else if(Y0(t))k5(o,t.bind(r));else if(A2(t))if(R0(t))t.forEach(l=>Ks(l,n,r,s));else{const l=Y0(t.handler)?t.handler.bind(r):n[t.handler];Y0(l)&&k5(o,l,t)}}function R8(t){const n=t.type,{mixins:r,extends:s}=n,{mixins:o,optionsCache:l,config:{optionMergeStrategies:a}}=t.appContext,f=l.get(n);let h;return f?h=f:!o.length&&!r&&!s?h=n:(h={},o.length&&o.forEach(p=>G5(h,p,a,!0)),G5(h,n,a)),A2(n)&&l.set(n,h),h}function G5(t,n,r,s=!1){const{mixins:o,extends:l}=n;l&&G5(t,l,r,!0),o&&o.forEach(a=>G5(t,a,r,!0));for(const a in n)if(!(s&&a==="expose")){const f=ap[a]||r&&r[a];t[a]=f?f(t[a],n[a]):n[a]}return t}const ap={data:Wr,props:Ur,emits:Ur,methods:z3,computed:z3,beforeCreate:p1,created:p1,beforeMount:p1,mounted:p1,beforeUpdate:p1,updated:p1,beforeDestroy:p1,beforeUnmount:p1,destroyed:p1,unmounted:p1,activated:p1,deactivated:p1,errorCaptured:p1,serverPrefetch:p1,components:z3,directives:z3,watch:fp,provide:Wr,inject:cp};function Wr(t,n){return n?t?function(){return n1(Y0(t)?t.call(this,this):t,Y0(n)?n.call(this,this):n)}:n:t}function cp(t,n){return z3(e8(t),e8(n))}function e8(t){if(R0(t)){const n={};for(let r=0;r<t.length;r++)n[t[r]]=t[r];return n}return t}function p1(t,n){return t?[...new Set([].concat(t,n))]:n}function z3(t,n){return t?n1(Object.create(null),t,n):n}function Ur(t,n){return t?R0(t)&&R0(n)?[...new Set([...t,...n])]:n1(Object.create(null),Vr(t),Vr(n??{})):n}function fp(t,n){if(!t)return n;if(!n)return t;const r=n1(Object.create(null),t);for(const s in n)r[s]=p1(t[s],n[s]);return r}function js(){return{app:null,config:{isNativeTag:ng,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function _p(t,n){return function(s,o=null){Y0(s)||(s=n1({},s)),o!=null&&!A2(o)&&(o=null);const l=js(),a=new WeakSet,f=[];let h=!1;const p=l.app={_uid:hp++,_component:s,_props:o,_container:null,_context:l,_instance:null,version:jp,get config(){return l.config},set config(v){},use(v,...y){return a.has(v)||(v&&Y0(v.install)?(a.add(v),v.install(p,...y)):Y0(v)&&(a.add(v),v(p,...y))),p},mixin(v){return l.mixins.includes(v)||l.mixins.push(v),p},component(v,y){return y?(l.components[v]=y,p):l.components[v]},directive(v,y){return y?(l.directives[v]=y,p):l.directives[v]},mount(v,y,S){if(!h){const k=p._ceVNode||b1(s,o);return k.appContext=l,S===!0?S="svg":S===!1&&(S=void 0),y&&n?n(k,v):t(k,v,S),h=!0,p._container=v,v.__vue_app__=p,r6(k.component)}},onUnmount(v){f.push(v)},unmount(){h&&(mt(f,p._instance,16),t(null,p._container),delete p._container.__vue_app__)},provide(v,y){return l.provides[v]=y,p},runWithContext(v){const y=_3;_3=p;try{return v()}finally{_3=y}}};return p}}let _3=null;function M5(t,n){if(a1){let r=a1.provides;const s=a1.parent&&a1.parent.provides;s===r&&(r=a1.provides=Object.create(s)),r[t]=n}}function $t(t,n,r=!1){const s=a1||N1;if(s||_3){const o=_3?_3._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return r&&Y0(n)?n.call(s&&s.proxy):n}}const zs={},Zs=()=>Object.create(zs),Js=t=>Object.getPrototypeOf(t)===zs;function dp(t,n,r,s=!1){const o={},l=Zs();t.propsDefaults=Object.create(null),Xs(t,n,o,l);for(const a in t.propsOptions[0])a in o||(o[a]=void 0);r?t.props=s?o:Os(o):t.type.props?t.props=o:t.props=l,t.attrs=l}function gp(t,n,r,s){const{props:o,attrs:l,vnode:{patchFlag:a}}=t,f=p2(o),[h]=t.propsOptions;let p=!1;if((s||a>0)&&!(a&16)){if(a&8){const v=t.vnode.dynamicProps;for(let y=0;y<v.length;y++){let S=v[y];if(n6(t.emitsOptions,S))continue;const k=n[S];if(h)if(m2(l,S))k!==l[S]&&(l[S]=k,p=!0);else{const q=j1(S);o[q]=r8(h,f,q,k,t,!1)}else k!==l[S]&&(l[S]=k,p=!0)}}}else{Xs(t,n,o,l)&&(p=!0);let v;for(const y in f)(!n||!m2(n,y)&&((v=Hn(y))===y||!m2(n,v)))&&(h?r&&(r[y]!==void 0||r[v]!==void 0)&&(o[y]=r8(h,f,y,void 0,t,!0)):delete o[y]);if(l!==f)for(const y in l)(!n||!m2(n,y))&&(delete l[y],p=!0)}p&&Bt(t.attrs,"set","")}function Xs(t,n,r,s){const[o,l]=t.propsOptions;let a=!1,f;if(n)for(let h in n){if(J3(h))continue;const p=n[h];let v;o&&m2(o,v=j1(h))?!l||!l.includes(v)?r[v]=p:(f||(f={}))[v]=p:n6(t.emitsOptions,h)||(!(h in s)||p!==s[h])&&(s[h]=p,a=!0)}if(l){const h=p2(r),p=f||b2;for(let v=0;v<l.length;v++){const y=l[v];r[y]=r8(o,h,y,p[y],t,!m2(p,y))}}return a}function r8(t,n,r,s,o,l){const a=t[r];if(a!=null){const f=m2(a,"default");if(f&&s===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&Y0(h)){const{propsDefaults:p}=o;if(r in p)s=p[r];else{const v=w4(o);s=p[r]=h.call(null,n),v()}}else s=h;o.ce&&o.ce._setProp(r,s)}a[0]&&(l&&!f?s=!1:a[1]&&(s===""||s===Hn(r))&&(s=!0))}return s}const pp=new WeakMap;function Qs(t,n,r=!1){const s=r?pp:n.propsCache,o=s.get(t);if(o)return o;const l=t.props,a={},f=[];let h=!1;if(!Y0(t)){const v=y=>{h=!0;const[S,k]=Qs(y,n,!0);n1(a,S),k&&f.push(...k)};!r&&n.mixins.length&&n.mixins.forEach(v),t.extends&&v(t.extends),t.mixins&&t.mixins.forEach(v)}if(!l&&!h)return A2(t)&&s.set(t,a3),a3;if(R0(l))for(let v=0;v<l.length;v++){const y=j1(l[v]);qr(y)&&(a[y]=b2)}else if(l)for(const v in l){const y=j1(v);if(qr(y)){const S=l[v],k=a[y]=R0(S)||Y0(S)?{type:S}:n1({},S),q=k.type;let $=!1,t0=!0;if(R0(q))for(let r0=0;r0<q.length;++r0){const J=q[r0],c0=Y0(J)&&J.name;if(c0==="Boolean"){$=!0;break}else c0==="String"&&(t0=!1)}else $=Y0(q)&&q.name==="Boolean";k[0]=$,k[1]=t0,($||m2(k,"default"))&&f.push(y)}}const p=[a,f];return A2(t)&&s.set(t,p),p}function qr(t){return t[0]!=="$"&&!J3(t)}const to=t=>t[0]==="_"||t==="$stable",B8=t=>R0(t)?t.map(_t):[_t(t)],mp=(t,n,r)=>{if(n._n)return n;const s=Wg((...o)=>B8(n(...o)),r);return s._c=!1,s},no=(t,n,r)=>{const s=t._ctx;for(const o in t){if(to(o))continue;const l=t[o];if(Y0(l))n[o]=mp(o,l,s);else if(l!=null){const a=B8(l);n[o]=()=>a}}},eo=(t,n)=>{const r=B8(n);t.slots.default=()=>r},ro=(t,n,r)=>{for(const s in n)(r||s!=="_")&&(t[s]=n[s])},vp=(t,n,r)=>{const s=t.slots=Zs();if(t.vnode.shapeFlag&32){const o=n._;o?(ro(s,n,r),r&&ds(s,"_",o,!0)):no(n,s)}else n&&eo(t,n)},yp=(t,n,r)=>{const{vnode:s,slots:o}=t;let l=!0,a=b2;if(s.shapeFlag&32){const f=n._;f?r&&f===1?l=!1:ro(o,n,r):(l=!n.$stable,no(n,o)),a=n}else n&&(eo(t,n),a={default:1});if(l)for(const f in o)!to(f)&&a[f]==null&&delete o[f]},O1=Ep;function Tp(t){return xp(t)}function xp(t,n){const r=Z5();r.__VUE__=!0;const{insert:s,remove:o,patchProp:l,createElement:a,createText:f,createComment:h,setText:p,setElementText:v,parentNode:y,nextSibling:S,setScopeId:k=gt,insertStaticContent:q}=t,$=(T,x,D,V=null,E=null,j=null,o0=void 0,e0=null,Z=!!x.dynamicChildren)=>{if(T===x)return;T&&!V3(T,x)&&(V=R(T),C0(T,E,j,!0),T=null),x.patchFlag===-2&&(Z=!1,x.dynamicChildren=null);const{type:K,ref:P0,shapeFlag:g0}=x;switch(K){case e6:t0(T,x,D,V);break;case In:r0(T,x,D,V);break;case C5:T==null&&J(x,D,V,o0);break;case $0:I2(T,x,D,V,E,j,o0,e0,Z);break;default:g0&1?a0(T,x,D,V,E,j,o0,e0,Z):g0&6?j2(T,x,D,V,E,j,o0,e0,Z):(g0&64||g0&128)&&K.process(T,x,D,V,E,j,o0,e0,Z,y0)}P0!=null&&E&&H5(P0,T&&T.ref,j,x||T,!x)},t0=(T,x,D,V)=>{if(T==null)s(x.el=f(x.children),D,V);else{const E=x.el=T.el;x.children!==T.children&&p(E,x.children)}},r0=(T,x,D,V)=>{T==null?s(x.el=h(x.children||""),D,V):x.el=T.el},J=(T,x,D,V)=>{[T.el,T.anchor]=q(T.children,x,D,V,T.el,T.anchor)},c0=({el:T,anchor:x},D,V)=>{let E;for(;T&&T!==x;)E=S(T),s(T,D,V),T=E;s(x,D,V)},f0=({el:T,anchor:x})=>{let D;for(;T&&T!==x;)D=S(T),o(T),T=D;o(x)},a0=(T,x,D,V,E,j,o0,e0,Z)=>{x.type==="svg"?o0="svg":x.type==="math"&&(o0="mathml"),T==null?A0(x,D,V,E,j,o0,e0,Z):Q0(T,x,E,j,o0,e0,Z)},A0=(T,x,D,V,E,j,o0,e0)=>{let Z,K;const{props:P0,shapeFlag:g0,transition:S0,dirs:B0}=T;if(Z=T.el=a(T.type,j,P0&&P0.is,P0),g0&8?v(Z,T.children):g0&16&&U0(T.children,Z,null,V,E,Ee(T,j),o0,e0),B0&&Cn(T,null,V,"created"),M0(Z,T,T.scopeId,o0,V),P0){for(const J0 in P0)J0!=="value"&&!J3(J0)&&l(Z,J0,null,P0[J0],j,V);"value"in P0&&l(Z,"value",null,P0.value,j),(K=P0.onVnodeBeforeMount)&&ct(K,V,T)}B0&&Cn(T,null,V,"beforeMount");const I0=wp(E,S0);I0&&S0.beforeEnter(Z),s(Z,x,D),((K=P0&&P0.onVnodeMounted)||I0||B0)&&O1(()=>{K&&ct(K,V,T),I0&&S0.enter(Z),B0&&Cn(T,null,V,"mounted")},E)},M0=(T,x,D,V,E)=>{if(D&&k(T,D),V)for(let j=0;j<V.length;j++)k(T,V[j]);if(E){let j=E.subTree;if(x===j||ao(j.type)&&(j.ssContent===x||j.ssFallback===x)){const o0=E.vnode;M0(T,o0,o0.scopeId,o0.slotScopeIds,E.parent)}}},U0=(T,x,D,V,E,j,o0,e0,Z=0)=>{for(let K=Z;K<T.length;K++){const P0=T[K]=e0?un(T[K]):_t(T[K]);$(null,P0,x,D,V,E,j,o0,e0)}},Q0=(T,x,D,V,E,j,o0)=>{const e0=x.el=T.el;let{patchFlag:Z,dynamicChildren:K,dirs:P0}=x;Z|=T.patchFlag&16;const g0=T.props||b2,S0=x.props||b2;let B0;if(D&&Pn(D,!1),(B0=S0.onVnodeBeforeUpdate)&&ct(B0,D,x,T),P0&&Cn(x,T,D,"beforeUpdate"),D&&Pn(D,!0),(g0.innerHTML&&S0.innerHTML==null||g0.textContent&&S0.textContent==null)&&v(e0,""),K?f2(T.dynamicChildren,K,e0,D,V,Ee(x,E),j):o0||L(T,x,e0,null,D,V,Ee(x,E),j,!1),Z>0){if(Z&16)M2(e0,g0,S0,D,E);else if(Z&2&&g0.class!==S0.class&&l(e0,"class",null,S0.class,E),Z&4&&l(e0,"style",g0.style,S0.style,E),Z&8){const I0=x.dynamicProps;for(let J0=0;J0<I0.length;J0++){const t2=I0[J0],z2=g0[t2],G2=S0[t2];(G2!==z2||t2==="value")&&l(e0,t2,z2,G2,E,D)}}Z&1&&T.children!==x.children&&v(e0,x.children)}else!o0&&K==null&&M2(e0,g0,S0,D,E);((B0=S0.onVnodeUpdated)||P0)&&O1(()=>{B0&&ct(B0,D,x,T),P0&&Cn(x,T,D,"updated")},V)},f2=(T,x,D,V,E,j,o0)=>{for(let e0=0;e0<x.length;e0++){const Z=T[e0],K=x[e0],P0=Z.el&&(Z.type===$0||!V3(Z,K)||Z.shapeFlag&70)?y(Z.el):D;$(Z,K,P0,null,V,E,j,o0,!0)}},M2=(T,x,D,V,E)=>{if(x!==D){if(x!==b2)for(const j in x)!J3(j)&&!(j in D)&&l(T,j,x[j],null,E,V);for(const j in D){if(J3(j))continue;const o0=D[j],e0=x[j];o0!==e0&&j!=="value"&&l(T,j,e0,o0,E,V)}"value"in D&&l(T,"value",x.value,D.value,E)}},I2=(T,x,D,V,E,j,o0,e0,Z)=>{const K=x.el=T?T.el:f(""),P0=x.anchor=T?T.anchor:f("");let{patchFlag:g0,dynamicChildren:S0,slotScopeIds:B0}=x;B0&&(e0=e0?e0.concat(B0):B0),T==null?(s(K,D,V),s(P0,D,V),U0(x.children||[],D,P0,E,j,o0,e0,Z)):g0>0&&g0&64&&S0&&T.dynamicChildren?(f2(T.dynamicChildren,S0,D,E,j,o0,e0),(x.key!=null||E&&x===E.subTree)&&io(T,x,!0)):L(T,x,D,P0,E,j,o0,e0,Z)},j2=(T,x,D,V,E,j,o0,e0,Z)=>{x.slotScopeIds=e0,T==null?x.shapeFlag&512?E.ctx.activate(x,D,V,o0,Z):M1(x,D,V,E,j,o0,Z):v1(T,x,Z)},M1=(T,x,D,V,E,j,o0)=>{const e0=T.component=Yp(T,V,E);if(Vs(T)&&(e0.ctx.renderer=y0),Vp(e0,!1,o0),e0.asyncDep){if(E&&E.registerDep(e0,D2,o0),!T.el){const Z=e0.subTree=b1(In);r0(null,Z,x,D)}}else D2(e0,T,x,D,E,j,o0)},v1=(T,x,D)=>{const V=x.component=T.component;if(Lp(T,x,D))if(V.asyncDep&&!V.asyncResolved){G(V,x,D);return}else V.next=x,V.update();else x.el=T.el,V.vnode=x},D2=(T,x,D,V,E,j,o0)=>{const e0=()=>{if(T.isMounted){let{next:g0,bu:S0,u:B0,parent:I0,vnode:J0}=T;{const m=so(T);if(m){g0&&(g0.el=J0.el,G(T,g0,o0)),m.asyncDep.then(()=>{T.isUnmounted||e0()});return}}let t2=g0,z2;Pn(T,!1),g0?(g0.el=J0.el,G(T,g0,o0)):g0=J0,S0&&b5(S0),(z2=g0.props&&g0.props.onVnodeBeforeUpdate)&&ct(z2,I0,g0,J0),Pn(T,!0);const G2=Ne(T),z=T.subTree;T.subTree=G2,$(z,G2,y(z.el),R(z),T,E,j),g0.el=G2.el,t2===null&&Op(T,G2.el),B0&&O1(B0,E),(z2=g0.props&&g0.props.onVnodeUpdated)&&O1(()=>ct(z2,I0,g0,J0),E)}else{let g0;const{el:S0,props:B0}=x,{bm:I0,m:J0,parent:t2,root:z2,type:G2}=T,z=t4(x);if(Pn(T,!1),I0&&b5(I0),!z&&(g0=B0&&B0.onVnodeBeforeMount)&&ct(g0,t2,x),Pn(T,!0),S0&&h2){const m=()=>{T.subTree=Ne(T),h2(S0,T.subTree,T,E,null)};z&&G2.__asyncHydrate?G2.__asyncHydrate(S0,T,m):m()}else{z2.ce&&z2.ce._injectChildStyle(G2);const m=T.subTree=Ne(T);$(null,m,D,V,T,E,j),x.el=m.el}if(J0&&O1(J0,E),!z&&(g0=B0&&B0.onVnodeMounted)){const m=x;O1(()=>ct(g0,t2,m),E)}(x.shapeFlag&256||t2&&t4(t2.vnode)&&t2.vnode.shapeFlag&256)&&T.a&&O1(T.a,E),T.isMounted=!0,x=D=V=null}};T.scope.on();const Z=T.effect=new vs(e0);T.scope.off();const K=T.update=Z.run.bind(Z),P0=T.job=Z.runIfDirty.bind(Z);P0.i=T,P0.id=T.uid,Z.scheduler=()=>E8(P0),Pn(T,!0),K()},G=(T,x,D)=>{x.component=T;const V=T.vnode.props;T.vnode=x,T.next=null,gp(T,x.props,V,D),yp(T,x.children,D),pn(),$r(T),mn()},L=(T,x,D,V,E,j,o0,e0,Z=!1)=>{const K=T&&T.children,P0=T?T.shapeFlag:0,g0=x.children,{patchFlag:S0,shapeFlag:B0}=x;if(S0>0){if(S0&128){h0(K,g0,D,V,E,j,o0,e0,Z);return}else if(S0&256){H(K,g0,D,V,E,j,o0,e0,Z);return}}B0&8?(P0&16&&u2(K,E,j),g0!==K&&v(D,g0)):P0&16?B0&16?h0(K,g0,D,V,E,j,o0,e0,Z):u2(K,E,j,!0):(P0&8&&v(D,""),B0&16&&U0(g0,D,V,E,j,o0,e0,Z))},H=(T,x,D,V,E,j,o0,e0,Z)=>{T=T||a3,x=x||a3;const K=T.length,P0=x.length,g0=Math.min(K,P0);let S0;for(S0=0;S0<g0;S0++){const B0=x[S0]=Z?un(x[S0]):_t(x[S0]);$(T[S0],B0,D,null,E,j,o0,e0,Z)}K>P0?u2(T,E,j,!0,!1,g0):U0(x,D,V,E,j,o0,e0,Z,g0)},h0=(T,x,D,V,E,j,o0,e0,Z)=>{let K=0;const P0=x.length;let g0=T.length-1,S0=P0-1;for(;K<=g0&&K<=S0;){const B0=T[K],I0=x[K]=Z?un(x[K]):_t(x[K]);if(V3(B0,I0))$(B0,I0,D,null,E,j,o0,e0,Z);else break;K++}for(;K<=g0&&K<=S0;){const B0=T[g0],I0=x[S0]=Z?un(x[S0]):_t(x[S0]);if(V3(B0,I0))$(B0,I0,D,null,E,j,o0,e0,Z);else break;g0--,S0--}if(K>g0){if(K<=S0){const B0=S0+1,I0=B0<P0?x[B0].el:V;for(;K<=S0;)$(null,x[K]=Z?un(x[K]):_t(x[K]),D,I0,E,j,o0,e0,Z),K++}}else if(K>S0)for(;K<=g0;)C0(T[K],E,j,!0),K++;else{const B0=K,I0=K,J0=new Map;for(K=I0;K<=S0;K++){const Y=x[K]=Z?un(x[K]):_t(x[K]);Y.key!=null&&J0.set(Y.key,K)}let t2,z2=0;const G2=S0-I0+1;let z=!1,m=0;const W=new Array(G2);for(K=0;K<G2;K++)W[K]=0;for(K=B0;K<=g0;K++){const Y=T[K];if(z2>=G2){C0(Y,E,j,!0);continue}let i0;if(Y.key!=null)i0=J0.get(Y.key);else for(t2=I0;t2<=S0;t2++)if(W[t2-I0]===0&&V3(Y,x[t2])){i0=t2;break}i0===void 0?C0(Y,E,j,!0):(W[i0-I0]=K+1,i0>=m?m=i0:z=!0,$(Y,x[i0],D,null,E,j,o0,e0,Z),z2++)}const F=z?Sp(W):a3;for(t2=F.length-1,K=G2-1;K>=0;K--){const Y=I0+K,i0=x[Y],P=Y+1<P0?x[Y+1].el:V;W[K]===0?$(null,i0,D,P,E,j,o0,e0,Z):z&&(t2<0||K!==F[t2]?L0(i0,D,P,2):t2--)}}},L0=(T,x,D,V,E=null)=>{const{el:j,type:o0,transition:e0,children:Z,shapeFlag:K}=T;if(K&6){L0(T.component.subTree,x,D,V);return}if(K&128){T.suspense.move(x,D,V);return}if(K&64){o0.move(T,x,D,y0);return}if(o0===$0){s(j,x,D);for(let g0=0;g0<Z.length;g0++)L0(Z[g0],x,D,V);s(T.anchor,x,D);return}if(o0===C5){c0(T,x,D);return}if(V!==2&&K&1&&e0)if(V===0)e0.beforeEnter(j),s(j,x,D),O1(()=>e0.enter(j),E);else{const{leave:g0,delayLeave:S0,afterLeave:B0}=e0,I0=()=>s(j,x,D),J0=()=>{g0(j,()=>{I0(),B0&&B0()})};S0?S0(j,I0,J0):J0()}else s(j,x,D)},C0=(T,x,D,V=!1,E=!1)=>{const{type:j,props:o0,ref:e0,children:Z,dynamicChildren:K,shapeFlag:P0,patchFlag:g0,dirs:S0,cacheIndex:B0}=T;if(g0===-2&&(E=!1),e0!=null&&H5(e0,null,D,T,!0),B0!=null&&(x.renderCache[B0]=void 0),P0&256){x.ctx.deactivate(T);return}const I0=P0&1&&S0,J0=!t4(T);let t2;if(J0&&(t2=o0&&o0.onVnodeBeforeUnmount)&&ct(t2,x,T),P0&6)H2(T.component,D,V);else{if(P0&128){T.suspense.unmount(D,V);return}I0&&Cn(T,null,x,"beforeUnmount"),P0&64?T.type.remove(T,x,D,y0,V):K&&!K.hasOnce&&(j!==$0||g0>0&&g0&64)?u2(K,x,D,!1,!0):(j===$0&&g0&384||!E&&P0&16)&&u2(Z,x,D),V&&V0(T)}(J0&&(t2=o0&&o0.onVnodeUnmounted)||I0)&&O1(()=>{t2&&ct(t2,x,T),I0&&Cn(T,null,x,"unmounted")},D)},V0=T=>{const{type:x,el:D,anchor:V,transition:E}=T;if(x===$0){k2(D,V);return}if(x===C5){f0(T);return}const j=()=>{o(D),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(T.shapeFlag&1&&E&&!E.persisted){const{leave:o0,delayLeave:e0}=E,Z=()=>o0(D,j);e0?e0(T.el,j,Z):Z()}else j()},k2=(T,x)=>{let D;for(;T!==x;)D=S(T),o(T),T=D;o(x)},H2=(T,x,D)=>{const{bum:V,scope:E,job:j,subTree:o0,um:e0,m:Z,a:K}=T;Kr(Z),Kr(K),V&&b5(V),E.stop(),j&&(j.flags|=8,C0(o0,T,x,D)),e0&&O1(e0,x),O1(()=>{T.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},u2=(T,x,D,V=!1,E=!1,j=0)=>{for(let o0=j;o0<T.length;o0++)C0(T[o0],x,D,V,E)},R=T=>{if(T.shapeFlag&6)return R(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const x=S(T.anchor||T.el),D=x&&x[Ug];return D?S(D):x};let u0=!1;const Q=(T,x,D)=>{T==null?x._vnode&&C0(x._vnode,null,null,!0):$(x._vnode||null,T,x,null,null,null,D),x._vnode=T,u0||(u0=!0,$r(),Hs(),u0=!1)},y0={p:$,um:C0,m:L0,r:V0,mt:M1,mc:U0,pc:L,pbc:f2,n:R,o:t};let z0,h2;return{render:Q,hydrate:z0,createApp:_p(Q,z0)}}function Ee({type:t,props:n},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:r}function Pn({effect:t,job:n},r){r?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function wp(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function io(t,n,r=!1){const s=t.children,o=n.children;if(R0(s)&&R0(o))for(let l=0;l<s.length;l++){const a=s[l];let f=o[l];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=o[l]=un(o[l]),f.el=a.el),!r&&f.patchFlag!==-2&&io(a,f)),f.type===e6&&(f.el=a.el)}}function Sp(t){const n=t.slice(),r=[0];let s,o,l,a,f;const h=t.length;for(s=0;s<h;s++){const p=t[s];if(p!==0){if(o=r[r.length-1],t[o]<p){n[s]=o,r.push(s);continue}for(l=0,a=r.length-1;l<a;)f=l+a>>1,t[r[f]]<p?l=f+1:a=f;p<t[r[l]]&&(l>0&&(n[s]=r[l-1]),r[l]=s)}}for(l=r.length,a=r[l-1];l-- >0;)r[l]=a,a=n[a];return r}function so(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:so(n)}function Kr(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const bp=Symbol.for("v-scx"),Mp=()=>$t(bp);function k5(t,n,r){return oo(t,n,r)}function oo(t,n,r=b2){const{immediate:s,deep:o,flush:l,once:a}=r,f=n1({},r),h=n&&s||!n&&l!=="post";let p;if(c4){if(l==="sync"){const k=Mp();p=k.__watcherHandles||(k.__watcherHandles=[])}else if(!h){const k=()=>{};return k.stop=gt,k.resume=gt,k.pause=gt,k}}const v=a1;f.call=(k,q,$)=>mt(k,v,q,$);let y=!1;l==="post"?f.scheduler=k=>{O1(k,v&&v.suspense)}:l!=="sync"&&(y=!0,f.scheduler=(k,q)=>{q?k():E8(k)}),f.augmentJob=k=>{n&&(k.flags|=4),y&&(k.flags|=2,v&&(k.id=v.uid,k.i=v))};const S=$g(t,n,f);return c4&&(p?p.push(S):h&&S()),S}function kp(t,n,r){const s=this.proxy,o=K2(t)?t.includes(".")?uo(s,t):()=>s[t]:t.bind(s,s);let l;Y0(n)?l=n:(l=n.handler,r=n);const a=w4(this),f=oo(o,l.bind(s),r);return a(),f}function uo(t,n){const r=n.split(".");return()=>{let s=t;for(let o=0;o<r.length&&s;o++)s=s[r[o]];return s}}const Cp=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${j1(n)}Modifiers`]||t[`${Hn(n)}Modifiers`];function Pp(t,n,...r){if(t.isUnmounted)return;const s=t.vnode.props||b2;let o=r;const l=n.startsWith("update:"),a=l&&Cp(s,n.slice(7));a&&(a.trim&&(o=r.map(v=>K2(v)?v.trim():v)),a.number&&(o=r.map(N5)));let f,h=s[f=Ce(n)]||s[f=Ce(j1(n))];!h&&l&&(h=s[f=Ce(Hn(n))]),h&&mt(h,t,6,o);const p=s[f+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[f])return;t.emitted[f]=!0,mt(p,t,6,o)}}function lo(t,n,r=!1){const s=n.emitsCache,o=s.get(t);if(o!==void 0)return o;const l=t.emits;let a={},f=!1;if(!Y0(t)){const h=p=>{const v=lo(p,n,!0);v&&(f=!0,n1(a,v))};!r&&n.mixins.length&&n.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!l&&!f?(A2(t)&&s.set(t,null),null):(R0(l)?l.forEach(h=>a[h]=null):n1(a,l),A2(t)&&s.set(t,a),a)}function n6(t,n){return!t||!K5(n)?!1:(n=n.slice(2).replace(/Once$/,""),m2(t,n[0].toLowerCase()+n.slice(1))||m2(t,Hn(n))||m2(t,n))}function Ne(t){const{type:n,vnode:r,proxy:s,withProxy:o,propsOptions:[l],slots:a,attrs:f,emit:h,render:p,renderCache:v,props:y,data:S,setupState:k,ctx:q,inheritAttrs:$}=t,t0=I5(t);let r0,J;try{if(r.shapeFlag&4){const f0=o||s,a0=f0;r0=_t(p.call(a0,f0,v,y,k,S,q)),J=f}else{const f0=n;r0=_t(f0.length>1?f0(y,{attrs:f,slots:a,emit:h}):f0(y,null)),J=n.props?f:Ap(f)}}catch(f0){e4.length=0,Q5(f0,t,1),r0=b1(In)}let c0=r0;if(J&&$!==!1){const f0=Object.keys(J),{shapeFlag:a0}=c0;f0.length&&a0&7&&(l&&f0.some(T8)&&(J=Dp(J,l)),c0=m3(c0,J,!1,!0))}return r.dirs&&(c0=m3(c0,null,!1,!0),c0.dirs=c0.dirs?c0.dirs.concat(r.dirs):r.dirs),r.transition&&N8(c0,r.transition),r0=c0,I5(t0),r0}const Ap=t=>{let n;for(const r in t)(r==="class"||r==="style"||K5(r))&&((n||(n={}))[r]=t[r]);return n},Dp=(t,n)=>{const r={};for(const s in t)(!T8(s)||!(s.slice(9)in n))&&(r[s]=t[s]);return r};function Lp(t,n,r){const{props:s,children:o,component:l}=t,{props:a,children:f,patchFlag:h}=n,p=l.emitsOptions;if(n.dirs||n.transition)return!0;if(r&&h>=0){if(h&1024)return!0;if(h&16)return s?jr(s,a,p):!!a;if(h&8){const v=n.dynamicProps;for(let y=0;y<v.length;y++){const S=v[y];if(a[S]!==s[S]&&!n6(p,S))return!0}}}else return(o||f)&&(!f||!f.$stable)?!0:s===a?!1:s?a?jr(s,a,p):!0:!!a;return!1}function jr(t,n,r){const s=Object.keys(n);if(s.length!==Object.keys(t).length)return!0;for(let o=0;o<s.length;o++){const l=s[o];if(n[l]!==t[l]&&!n6(r,l))return!0}return!1}function Op({vnode:t,parent:n},r){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=n.vnode).el=r,n=n.parent;else break}}const ao=t=>t.__isSuspense;function Ep(t,n){n&&n.pendingBranch?R0(t)?n.effects.push(...t):n.effects.push(t):Fg(t)}const $0=Symbol.for("v-fgt"),e6=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),C5=Symbol.for("v-stc"),e4=[];let R1=null;function v0(t=!1){e4.push(R1=t?null:[])}function Np(){e4.pop(),R1=e4[e4.length-1]||null}let a4=1;function zr(t,n=!1){a4+=t,t<0&&R1&&n&&(R1.hasOnce=!0)}function co(t){return t.dynamicChildren=a4>0?R1||a3:null,Np(),a4>0&&R1&&R1.push(t),t}function b0(t,n,r,s,o,l){return co(M(t,n,r,s,o,l,!0))}function u3(t,n,r,s,o){return co(b1(t,n,r,s,o,!0))}function $5(t){return t?t.__v_isVNode===!0:!1}function V3(t,n){return t.type===n.type&&t.key===n.key}const fo=({key:t})=>t??null,P5=({ref:t,ref_key:n,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?K2(t)||c1(t)||Y0(t)?{i:N1,r:t,k:n,f:!!r}:t:null);function M(t,n=null,r=null,s=0,o=null,l=t===$0?0:1,a=!1,f=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&fo(n),ref:n&&P5(n),scopeId:$s,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:N1};return f?(I8(h,r),l&128&&t.normalize(h)):r&&(h.shapeFlag|=K2(r)?8:16),a4>0&&!a&&R1&&(h.patchFlag>0||l&6)&&h.patchFlag!==32&&R1.push(h),h}const b1=Rp;function Rp(t,n=null,r=null,s=0,o=null,l=!1){if((!t||t===qs)&&(t=In),$5(t)){const f=m3(t,n,!0);return r&&I8(f,r),a4>0&&!l&&R1&&(f.shapeFlag&6?R1[R1.indexOf(t)]=f:R1.push(f)),f.patchFlag=-2,f}if(Kp(t)&&(t=t.__vccOpts),n){n=Bp(n);let{class:f,style:h}=n;f&&!K2(f)&&(n.class=ht(f)),A2(h)&&(L8(h)&&!R0(h)&&(h=n1({},h)),n.style=S8(h))}const a=K2(t)?1:ao(t)?128:qg(t)?64:A2(t)?4:Y0(t)?2:0;return M(t,n,r,s,o,a,l,!0)}function Bp(t){return t?L8(t)||Js(t)?n1({},t):t:null}function m3(t,n,r=!1,s=!1){const{props:o,ref:l,patchFlag:a,children:f,transition:h}=t,p=n?Hp(o||{},n):o,v={__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&fo(p),ref:n&&n.ref?r&&l?R0(l)?l.concat(P5(n)):[l,P5(n)]:P5(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==$0?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&m3(t.ssContent),ssFallback:t.ssFallback&&m3(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&s&&N8(v,h.clone(v)),v}function m0(t=" ",n=0){return b1(e6,null,t,n)}function Ip(t,n){const r=b1(C5,null,t);return r.staticCount=n,r}function On(t="",n=!1){return n?(v0(),u3(In,null,t)):b1(In,null,t)}function _t(t){return t==null||typeof t=="boolean"?b1(In):R0(t)?b1($0,null,t.slice()):$5(t)?un(t):b1(e6,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:m3(t)}function I8(t,n){let r=0;const{shapeFlag:s}=t;if(n==null)n=null;else if(R0(n))r=16;else if(typeof n=="object")if(s&65){const o=n.default;o&&(o._c&&(o._d=!1),I8(t,o()),o._c&&(o._d=!0));return}else{r=32;const o=n._;!o&&!Js(n)?n._ctx=N1:o===3&&N1&&(N1.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else Y0(n)?(n={default:n,_ctx:N1},r=32):(n=String(n),s&64?(r=16,n=[m0(n)]):r=8);t.children=n,t.shapeFlag|=r}function Hp(...t){const n={};for(let r=0;r<t.length;r++){const s=t[r];for(const o in s)if(o==="class")n.class!==s.class&&(n.class=ht([n.class,s.class]));else if(o==="style")n.style=S8([n.style,s.style]);else if(K5(o)){const l=n[o],a=s[o];a&&l!==a&&!(R0(l)&&l.includes(a))&&(n[o]=l?[].concat(l,a):a)}else o!==""&&(n[o]=s[o])}return n}function ct(t,n,r,s=null){mt(t,n,7,[r,s])}const Gp=js();let $p=0;function Yp(t,n,r){const s=t.type,o=(n?n.appContext:t.appContext)||Gp,l={uid:$p++,vnode:t,type:s,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qs(s,o),emitsOptions:lo(s,o),emit:null,emitted:null,propsDefaults:b2,inheritAttrs:s.inheritAttrs,ctx:b2,data:b2,props:b2,attrs:b2,slots:b2,refs:b2,setupState:b2,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=Pp.bind(null,l),t.ce&&t.ce(l),l}let a1=null,Y5,i8;{const t=Z5(),n=(r,s)=>{let o;return(o=t[r])||(o=t[r]=[]),o.push(s),l=>{o.length>1?o.forEach(a=>a(l)):o[0](l)}};Y5=n("__VUE_INSTANCE_SETTERS__",r=>a1=r),i8=n("__VUE_SSR_SETTERS__",r=>c4=r)}const w4=t=>{const n=a1;return Y5(t),t.scope.on(),()=>{t.scope.off(),Y5(n)}},Zr=()=>{a1&&a1.scope.off(),Y5(null)};function ho(t){return t.vnode.shapeFlag&4}let c4=!1;function Vp(t,n=!1,r=!1){n&&i8(n);const{props:s,children:o}=t.vnode,l=ho(t);dp(t,s,l,n),vp(t,o,r);const a=l?Fp(t,n):void 0;return n&&i8(!1),a}function Fp(t,n){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,op);const{setup:s}=r;if(s){pn();const o=t.setupContext=s.length>1?Up(t):null,l=w4(t),a=T4(s,t,0,[t.props,o]),f=fs(a);if(mn(),l(),(f||t.sp)&&!t4(t)&&Ys(t),f){if(a.then(Zr,Zr),n)return a.then(h=>{Jr(t,h,n)}).catch(h=>{Q5(h,t,0)});t.asyncDep=a}else Jr(t,a,n)}else _o(t,n)}function Jr(t,n,r){Y0(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:A2(n)&&(t.setupState=Rs(n)),_o(t,r)}let Xr;function _o(t,n,r){const s=t.type;if(!t.render){if(!n&&Xr&&!s.render){const o=s.template||R8(t).template;if(o){const{isCustomElement:l,compilerOptions:a}=t.appContext.config,{delimiters:f,compilerOptions:h}=s,p=n1(n1({isCustomElement:l,delimiters:f},a),h);s.render=Xr(o,p)}}t.render=s.render||gt}{const o=w4(t);pn();try{up(t)}finally{mn(),o()}}}const Wp={get(t,n){return u1(t,"get",""),t[n]}};function Up(t){const n=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,Wp),slots:t.slots,emit:t.emit,expose:n}}function r6(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Rs(Eg(t.exposed)),{get(n,r){if(r in n)return n[r];if(r in n4)return n4[r](t)},has(n,r){return r in n||r in n4}})):t.proxy}function qp(t,n=!0){return Y0(t)?t.displayName||t.name:t.name||n&&t.__name}function Kp(t){return Y0(t)&&"__vccOpts"in t}const O2=(t,n)=>Hg(t,n,c4);function ln(t,n,r){const s=arguments.length;return s===2?A2(n)&&!R0(n)?$5(n)?b1(t,null,[n]):b1(t,n):b1(t,null,n):(s>3?r=Array.prototype.slice.call(arguments,2):s===3&&$5(r)&&(r=[r]),b1(t,n,r))}const jp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let s8;const Qr=typeof window<"u"&&window.trustedTypes;if(Qr)try{s8=Qr.createPolicy("vue",{createHTML:t=>t})}catch{}const go=s8?t=>s8.createHTML(t):t=>t,zp="http://www.w3.org/2000/svg",Zp="http://www.w3.org/1998/Math/MathML",Nt=typeof document<"u"?document:null,ti=Nt&&Nt.createElement("template"),Jp={insert:(t,n,r)=>{n.insertBefore(t,r||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,r,s)=>{const o=n==="svg"?Nt.createElementNS(zp,t):n==="mathml"?Nt.createElementNS(Zp,t):r?Nt.createElement(t,{is:r}):Nt.createElement(t);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>Nt.createTextNode(t),createComment:t=>Nt.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nt.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,r,s,o,l){const a=r?r.previousSibling:n.lastChild;if(o&&(o===l||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),r),!(o===l||!(o=o.nextSibling)););else{ti.innerHTML=go(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const f=ti.content;if(s==="svg"||s==="mathml"){const h=f.firstChild;for(;h.firstChild;)f.appendChild(h.firstChild);f.removeChild(h)}n.insertBefore(f,r)}return[a?a.nextSibling:n.firstChild,r?r.previousSibling:n.lastChild]}},Xp=Symbol("_vtc");function Qp(t,n,r){const s=t[Xp];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?t.removeAttribute("class"):r?t.setAttribute("class",n):t.className=n}const ni=Symbol("_vod"),tm=Symbol("_vsh"),nm=Symbol(""),em=/(^|;)\s*display\s*:/;function rm(t,n,r){const s=t.style,o=K2(r);let l=!1;if(r&&!o){if(n)if(K2(n))for(const a of n.split(";")){const f=a.slice(0,a.indexOf(":")).trim();r[f]==null&&A5(s,f,"")}else for(const a in n)r[a]==null&&A5(s,a,"");for(const a in r)a==="display"&&(l=!0),A5(s,a,r[a])}else if(o){if(n!==r){const a=s[nm];a&&(r+=";"+a),s.cssText=r,l=em.test(r)}}else n&&t.removeAttribute("style");ni in t&&(t[ni]=l?s.display:"",t[tm]&&(s.display="none"))}const ei=/\s*!important$/;function A5(t,n,r){if(R0(r))r.forEach(s=>A5(t,n,s));else if(r==null&&(r=""),n.startsWith("--"))t.setProperty(n,r);else{const s=im(t,n);ei.test(r)?t.setProperty(Hn(s),r.replace(ei,""),"important"):t[s]=r}}const ri=["Webkit","Moz","ms"],Re={};function im(t,n){const r=Re[n];if(r)return r;let s=j1(n);if(s!=="filter"&&s in t)return Re[n]=s;s=z5(s);for(let o=0;o<ri.length;o++){const l=ri[o]+s;if(l in t)return Re[n]=l}return n}const ii="http://www.w3.org/1999/xlink";function si(t,n,r,s,o,l=fg(n)){s&&n.startsWith("xlink:")?r==null?t.removeAttributeNS(ii,n.slice(6,n.length)):t.setAttributeNS(ii,n,r):r==null||l&&!gs(r)?t.removeAttribute(n):t.setAttribute(n,l?"":pt(r)?String(r):r)}function oi(t,n,r,s,o){if(n==="innerHTML"||n==="textContent"){r!=null&&(t[n]=n==="innerHTML"?go(r):r);return}const l=t.tagName;if(n==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?t.getAttribute("value")||"":t.value,h=r==null?t.type==="checkbox"?"on":"":String(r);(f!==h||!("_value"in t))&&(t.value=h),r==null&&t.removeAttribute(n),t._value=r;return}let a=!1;if(r===""||r==null){const f=typeof t[n];f==="boolean"?r=gs(r):r==null&&f==="string"?(r="",a=!0):f==="number"&&(r=0,a=!0)}try{t[n]=r}catch{}a&&t.removeAttribute(o||n)}function cn(t,n,r,s){t.addEventListener(n,r,s)}function sm(t,n,r,s){t.removeEventListener(n,r,s)}const ui=Symbol("_vei");function om(t,n,r,s,o=null){const l=t[ui]||(t[ui]={}),a=l[n];if(s&&a)a.value=s;else{const[f,h]=um(n);if(s){const p=l[n]=cm(s,o);cn(t,f,p,h)}else a&&(sm(t,f,a,h),l[n]=void 0)}}const li=/(?:Once|Passive|Capture)$/;function um(t){let n;if(li.test(t)){n={};let s;for(;s=t.match(li);)t=t.slice(0,t.length-s[0].length),n[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),n]}let Be=0;const lm=Promise.resolve(),am=()=>Be||(lm.then(()=>Be=0),Be=Date.now());function cm(t,n){const r=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=r.attached)return;mt(fm(s,r.value),n,5,[s])};return r.value=t,r.attached=am(),r}function fm(t,n){if(R0(n)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},n.map(s=>o=>!o._stopped&&s&&s(o))}else return n}const ai=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hm=(t,n,r,s,o,l)=>{const a=o==="svg";n==="class"?Qp(t,s,a):n==="style"?rm(t,r,s):K5(n)?T8(n)||om(t,n,r,s,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):_m(t,n,s,a))?(oi(t,n,s),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&si(t,n,s,a,l,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!K2(s))?oi(t,j1(n),s,l,n):(n==="true-value"?t._trueValue=s:n==="false-value"&&(t._falseValue=s),si(t,n,s,a))};function _m(t,n,r,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in t&&ai(n)&&Y0(r));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ai(n)&&K2(r)?!1:n in t}const v3=t=>{const n=t.props["onUpdate:modelValue"]||!1;return R0(n)?r=>b5(n,r):n};function dm(t){t.target.composing=!0}function ci(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Yt=Symbol("_assign"),X2={created(t,{modifiers:{lazy:n,trim:r,number:s}},o){t[Yt]=v3(o);const l=s||o.props&&o.props.type==="number";cn(t,n?"change":"input",a=>{if(a.target.composing)return;let f=t.value;r&&(f=f.trim()),l&&(f=N5(f)),t[Yt](f)}),r&&cn(t,"change",()=>{t.value=t.value.trim()}),n||(cn(t,"compositionstart",dm),cn(t,"compositionend",ci),cn(t,"change",ci))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,oldValue:r,modifiers:{lazy:s,trim:o,number:l}},a){if(t[Yt]=v3(a),t.composing)return;const f=(l||t.type==="number")&&!/^0\d/.test(t.value)?N5(t.value):t.value,h=n??"";f!==h&&(document.activeElement===t&&t.type!=="range"&&(s&&n===r||o&&t.value.trim()===h)||(t.value=h))}},Ie={deep:!0,created(t,n,r){t[Yt]=v3(r),cn(t,"change",()=>{const s=t._modelValue,o=f4(t),l=t.checked,a=t[Yt];if(R0(s)){const f=b8(s,o),h=f!==-1;if(l&&!h)a(s.concat(o));else if(!l&&h){const p=[...s];p.splice(f,1),a(p)}}else if(x3(s)){const f=new Set(s);l?f.add(o):f.delete(o),a(f)}else a(po(t,l))})},mounted:fi,beforeUpdate(t,n,r){t[Yt]=v3(r),fi(t,n,r)}};function fi(t,{value:n,oldValue:r},s){t._modelValue=n;let o;if(R0(n))o=b8(n,s.props.value)>-1;else if(x3(n))o=n.has(s.props.value);else{if(n===r)return;o=y4(n,po(t,!0))}t.checked!==o&&(t.checked=o)}const sn={deep:!0,created(t,{value:n,modifiers:{number:r}},s){const o=x3(n);cn(t,"change",()=>{const l=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>r?N5(f4(a)):f4(a));t[Yt](t.multiple?o?new Set(l):l:l[0]),t._assigning=!0,O8(()=>{t._assigning=!1})}),t[Yt]=v3(s)},mounted(t,{value:n}){hi(t,n)},beforeUpdate(t,n,r){t[Yt]=v3(r)},updated(t,{value:n}){t._assigning||hi(t,n)}};function hi(t,n){const r=t.multiple,s=R0(n);if(!(r&&!s&&!x3(n))){for(let o=0,l=t.options.length;o<l;o++){const a=t.options[o],f=f4(a);if(r)if(s){const h=typeof f;h==="string"||h==="number"?a.selected=n.some(p=>String(p)===String(f)):a.selected=b8(n,f)>-1}else a.selected=n.has(f);else if(y4(f4(a),n)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function f4(t){return"_value"in t?t._value:t.value}function po(t,n){const r=n?"_trueValue":"_falseValue";return r in t?t[r]:n}const gm=n1({patchProp:hm},Jp);let _i;function pm(){return _i||(_i=Tp(gm))}const mm=(...t)=>{const n=pm().createApp(...t),{mount:r}=n;return n.mount=s=>{const o=ym(s);if(!o)return;const l=n._component;!Y0(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=r(o,!1,vm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},n};function vm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ym(t){return K2(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const s3=typeof document<"u";function mo(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Tm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&mo(t.default)}const g2=Object.assign;function He(t,n){const r={};for(const s in n){const o=n[s];r[s]=rt(o)?o.map(t):t(o)}return r}const r4=()=>{},rt=Array.isArray,vo=/#/g,xm=/&/g,wm=/\//g,Sm=/=/g,bm=/\?/g,yo=/\+/g,Mm=/%5B/g,km=/%5D/g,To=/%5E/g,Cm=/%60/g,xo=/%7B/g,Pm=/%7C/g,wo=/%7D/g,Am=/%20/g;function H8(t){return encodeURI(""+t).replace(Pm,"|").replace(Mm,"[").replace(km,"]")}function Dm(t){return H8(t).replace(xo,"{").replace(wo,"}").replace(To,"^")}function o8(t){return H8(t).replace(yo,"%2B").replace(Am,"+").replace(vo,"%23").replace(xm,"%26").replace(Cm,"`").replace(xo,"{").replace(wo,"}").replace(To,"^")}function Lm(t){return o8(t).replace(Sm,"%3D")}function Om(t){return H8(t).replace(vo,"%23").replace(bm,"%3F")}function Em(t){return t==null?"":Om(t).replace(wm,"%2F")}function h4(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Nm=/\/$/,Rm=t=>t.replace(Nm,"");function Ge(t,n,r="/"){let s,o={},l="",a="";const f=n.indexOf("#");let h=n.indexOf("?");return f<h&&f>=0&&(h=-1),h>-1&&(s=n.slice(0,h),l=n.slice(h+1,f>-1?f:n.length),o=t(l)),f>-1&&(s=s||n.slice(0,f),a=n.slice(f,n.length)),s=Gm(s??n,r),{fullPath:s+(l&&"?")+l+a,path:s,query:o,hash:h4(a)}}function Bm(t,n){const r=n.query?t(n.query):"";return n.path+(r&&"?")+r+(n.hash||"")}function di(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Im(t,n,r){const s=n.matched.length-1,o=r.matched.length-1;return s>-1&&s===o&&y3(n.matched[s],r.matched[o])&&So(n.params,r.params)&&t(n.query)===t(r.query)&&n.hash===r.hash}function y3(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function So(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(!Hm(t[r],n[r]))return!1;return!0}function Hm(t,n){return rt(t)?gi(t,n):rt(n)?gi(n,t):t===n}function gi(t,n){return rt(n)?t.length===n.length&&t.every((r,s)=>r===n[s]):t.length===1&&t[0]===n}function Gm(t,n){if(t.startsWith("/"))return t;if(!t)return n;const r=n.split("/"),s=t.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let l=r.length-1,a,f;for(a=0;a<s.length;a++)if(f=s[a],f!==".")if(f==="..")l>1&&l--;else break;return r.slice(0,l).join("/")+"/"+s.slice(a).join("/")}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _4;(function(t){t.pop="pop",t.push="push"})(_4||(_4={}));var i4;(function(t){t.back="back",t.forward="forward",t.unknown=""})(i4||(i4={}));function $m(t){if(!t)if(s3){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Rm(t)}const Ym=/^[^#]+#/;function Vm(t,n){return t.replace(Ym,"#")+n}function Fm(t,n){const r=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:n.behavior,left:s.left-r.left-(n.left||0),top:s.top-r.top-(n.top||0)}}const i6=()=>({left:window.scrollX,top:window.scrollY});function Wm(t){let n;if("el"in t){const r=t.el,s=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?s?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;n=Fm(o,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function pi(t,n){return(history.state?history.state.position-n:-1)+t}const u8=new Map;function Um(t,n){u8.set(t,n)}function qm(t){const n=u8.get(t);return u8.delete(t),n}let Km=()=>location.protocol+"//"+location.host;function bo(t,n){const{pathname:r,search:s,hash:o}=n,l=t.indexOf("#");if(l>-1){let f=o.includes(t.slice(l))?t.slice(l).length:1,h=o.slice(f);return h[0]!=="/"&&(h="/"+h),di(h,"")}return di(r,t)+s+o}function jm(t,n,r,s){let o=[],l=[],a=null;const f=({state:S})=>{const k=bo(t,location),q=r.value,$=n.value;let t0=0;if(S){if(r.value=k,n.value=S,a&&a===q){a=null;return}t0=$?S.position-$.position:0}else s(k);o.forEach(r0=>{r0(r.value,q,{delta:t0,type:_4.pop,direction:t0?t0>0?i4.forward:i4.back:i4.unknown})})};function h(){a=r.value}function p(S){o.push(S);const k=()=>{const q=o.indexOf(S);q>-1&&o.splice(q,1)};return l.push(k),k}function v(){const{history:S}=window;S.state&&S.replaceState(g2({},S.state,{scroll:i6()}),"")}function y(){for(const S of l)S();l=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",v)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",v,{passive:!0}),{pauseListeners:h,listen:p,destroy:y}}function mi(t,n,r,s=!1,o=!1){return{back:t,current:n,forward:r,replaced:s,position:window.history.length,scroll:o?i6():null}}function zm(t){const{history:n,location:r}=window,s={value:bo(t,r)},o={value:n.state};o.value||l(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(h,p,v){const y=t.indexOf("#"),S=y>-1?(r.host&&document.querySelector("base")?t:t.slice(y))+h:Km()+t+h;try{n[v?"replaceState":"pushState"](p,"",S),o.value=p}catch(k){console.error(k),r[v?"replace":"assign"](S)}}function a(h,p){const v=g2({},n.state,mi(o.value.back,h,o.value.forward,!0),p,{position:o.value.position});l(h,v,!0),s.value=h}function f(h,p){const v=g2({},o.value,n.state,{forward:h,scroll:i6()});l(v.current,v,!0);const y=g2({},mi(s.value,h,null),{position:v.position+1},p);l(h,y,!1),s.value=h}return{location:s,state:o,push:f,replace:a}}function Zm(t){t=$m(t);const n=zm(t),r=jm(t,n.state,n.location,n.replace);function s(l,a=!0){a||r.pauseListeners(),history.go(l)}const o=g2({location:"",base:t,go:s,createHref:Vm.bind(null,t)},n,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function Jm(t){return typeof t=="string"||t&&typeof t=="object"}function Mo(t){return typeof t=="string"||typeof t=="symbol"}const ko=Symbol("");var vi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vi||(vi={}));function T3(t,n){return g2(new Error,{type:t,[ko]:!0},n)}function Lt(t,n){return t instanceof Error&&ko in t&&(n==null||!!(t.type&n))}const yi="[^/]+?",Xm={sensitive:!1,strict:!1,start:!0,end:!0},Qm=/[.+*?^${}()[\]/\\]/g;function tv(t,n){const r=g2({},Xm,n),s=[];let o=r.start?"^":"";const l=[];for(const p of t){const v=p.length?[]:[90];r.strict&&!p.length&&(o+="/");for(let y=0;y<p.length;y++){const S=p[y];let k=40+(r.sensitive?.25:0);if(S.type===0)y||(o+="/"),o+=S.value.replace(Qm,"\\$&"),k+=40;else if(S.type===1){const{value:q,repeatable:$,optional:t0,regexp:r0}=S;l.push({name:q,repeatable:$,optional:t0});const J=r0||yi;if(J!==yi){k+=10;try{new RegExp(`(${J})`)}catch(f0){throw new Error(`Invalid custom RegExp for param "${q}" (${J}): `+f0.message)}}let c0=$?`((?:${J})(?:/(?:${J}))*)`:`(${J})`;y||(c0=t0&&p.length<2?`(?:/${c0})`:"/"+c0),t0&&(c0+="?"),o+=c0,k+=20,t0&&(k+=-8),$&&(k+=-20),J===".*"&&(k+=-50)}v.push(k)}s.push(v)}if(r.strict&&r.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,r.sensitive?"":"i");function f(p){const v=p.match(a),y={};if(!v)return null;for(let S=1;S<v.length;S++){const k=v[S]||"",q=l[S-1];y[q.name]=k&&q.repeatable?k.split("/"):k}return y}function h(p){let v="",y=!1;for(const S of t){(!y||!v.endsWith("/"))&&(v+="/"),y=!1;for(const k of S)if(k.type===0)v+=k.value;else if(k.type===1){const{value:q,repeatable:$,optional:t0}=k,r0=q in p?p[q]:"";if(rt(r0)&&!$)throw new Error(`Provided param "${q}" is an array but it is not repeatable (* or + modifiers)`);const J=rt(r0)?r0.join("/"):r0;if(!J)if(t0)S.length<2&&(v.endsWith("/")?v=v.slice(0,-1):y=!0);else throw new Error(`Missing required param "${q}"`);v+=J}}return v||"/"}return{re:a,score:s,keys:l,parse:f,stringify:h}}function nv(t,n){let r=0;for(;r<t.length&&r<n.length;){const s=n[r]-t[r];if(s)return s;r++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function Co(t,n){let r=0;const s=t.score,o=n.score;for(;r<s.length&&r<o.length;){const l=nv(s[r],o[r]);if(l)return l;r++}if(Math.abs(o.length-s.length)===1){if(Ti(s))return 1;if(Ti(o))return-1}return o.length-s.length}function Ti(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const ev={type:0,value:""},rv=/[a-zA-Z0-9_]/;function iv(t){if(!t)return[[]];if(t==="/")return[[ev]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(k){throw new Error(`ERR (${r})/"${p}": ${k}`)}let r=0,s=r;const o=[];let l;function a(){l&&o.push(l),l=[]}let f=0,h,p="",v="";function y(){p&&(r===0?l.push({type:0,value:p}):r===1||r===2||r===3?(l.length>1&&(h==="*"||h==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:v,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):n("Invalid state to consume buffer"),p="")}function S(){p+=h}for(;f<t.length;){if(h=t[f++],h==="\\"&&r!==2){s=r,r=4;continue}switch(r){case 0:h==="/"?(p&&y(),a()):h===":"?(y(),r=1):S();break;case 4:S(),r=s;break;case 1:h==="("?r=2:rv.test(h)?S():(y(),r=0,h!=="*"&&h!=="?"&&h!=="+"&&f--);break;case 2:h===")"?v[v.length-1]=="\\"?v=v.slice(0,-1)+h:r=3:v+=h;break;case 3:y(),r=0,h!=="*"&&h!=="?"&&h!=="+"&&f--,v="";break;default:n("Unknown state");break}}return r===2&&n(`Unfinished custom RegExp for param "${p}"`),y(),a(),o}function sv(t,n,r){const s=tv(iv(t.path),r),o=g2(s,{record:t,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function ov(t,n){const r=[],s=new Map;n=bi({strict:!1,end:!0,sensitive:!1},n);function o(y){return s.get(y)}function l(y,S,k){const q=!k,$=wi(y);$.aliasOf=k&&k.record;const t0=bi(n,y),r0=[$];if("alias"in y){const f0=typeof y.alias=="string"?[y.alias]:y.alias;for(const a0 of f0)r0.push(wi(g2({},$,{components:k?k.record.components:$.components,path:a0,aliasOf:k?k.record:$})))}let J,c0;for(const f0 of r0){const{path:a0}=f0;if(S&&a0[0]!=="/"){const A0=S.record.path,M0=A0[A0.length-1]==="/"?"":"/";f0.path=S.record.path+(a0&&M0+a0)}if(J=sv(f0,S,t0),k?k.alias.push(J):(c0=c0||J,c0!==J&&c0.alias.push(J),q&&y.name&&!Si(J)&&a(y.name)),Po(J)&&h(J),$.children){const A0=$.children;for(let M0=0;M0<A0.length;M0++)l(A0[M0],J,k&&k.children[M0])}k=k||J}return c0?()=>{a(c0)}:r4}function a(y){if(Mo(y)){const S=s.get(y);S&&(s.delete(y),r.splice(r.indexOf(S),1),S.children.forEach(a),S.alias.forEach(a))}else{const S=r.indexOf(y);S>-1&&(r.splice(S,1),y.record.name&&s.delete(y.record.name),y.children.forEach(a),y.alias.forEach(a))}}function f(){return r}function h(y){const S=av(y,r);r.splice(S,0,y),y.record.name&&!Si(y)&&s.set(y.record.name,y)}function p(y,S){let k,q={},$,t0;if("name"in y&&y.name){if(k=s.get(y.name),!k)throw T3(1,{location:y});t0=k.record.name,q=g2(xi(S.params,k.keys.filter(c0=>!c0.optional).concat(k.parent?k.parent.keys.filter(c0=>c0.optional):[]).map(c0=>c0.name)),y.params&&xi(y.params,k.keys.map(c0=>c0.name))),$=k.stringify(q)}else if(y.path!=null)$=y.path,k=r.find(c0=>c0.re.test($)),k&&(q=k.parse($),t0=k.record.name);else{if(k=S.name?s.get(S.name):r.find(c0=>c0.re.test(S.path)),!k)throw T3(1,{location:y,currentLocation:S});t0=k.record.name,q=g2({},S.params,y.params),$=k.stringify(q)}const r0=[];let J=k;for(;J;)r0.unshift(J.record),J=J.parent;return{name:t0,path:$,params:q,matched:r0,meta:lv(r0)}}t.forEach(y=>l(y));function v(){r.length=0,s.clear()}return{addRoute:l,resolve:p,removeRoute:a,clearRoutes:v,getRoutes:f,getRecordMatcher:o}}function xi(t,n){const r={};for(const s of n)s in t&&(r[s]=t[s]);return r}function wi(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:uv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function uv(t){const n={},r=t.props||!1;if("component"in t)n.default=r;else for(const s in t.components)n[s]=typeof r=="object"?r[s]:r;return n}function Si(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lv(t){return t.reduce((n,r)=>g2(n,r.meta),{})}function bi(t,n){const r={};for(const s in t)r[s]=s in n?n[s]:t[s];return r}function av(t,n){let r=0,s=n.length;for(;r!==s;){const l=r+s>>1;Co(t,n[l])<0?s=l:r=l+1}const o=cv(t);return o&&(s=n.lastIndexOf(o,s-1)),s}function cv(t){let n=t;for(;n=n.parent;)if(Po(n)&&Co(t,n)===0)return n}function Po({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fv(t){const n={};if(t===""||t==="?")return n;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<s.length;++o){const l=s[o].replace(yo," "),a=l.indexOf("="),f=h4(a<0?l:l.slice(0,a)),h=a<0?null:h4(l.slice(a+1));if(f in n){let p=n[f];rt(p)||(p=n[f]=[p]),p.push(h)}else n[f]=h}return n}function Mi(t){let n="";for(let r in t){const s=t[r];if(r=Lm(r),s==null){s!==void 0&&(n+=(n.length?"&":"")+r);continue}(rt(s)?s.map(l=>l&&o8(l)):[s&&o8(s)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+r,l!=null&&(n+="="+l))})}return n}function hv(t){const n={};for(const r in t){const s=t[r];s!==void 0&&(n[r]=rt(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return n}const _v=Symbol(""),ki=Symbol(""),G8=Symbol(""),Ao=Symbol(""),l8=Symbol("");function F3(){let t=[];function n(s){return t.push(s),()=>{const o=t.indexOf(s);o>-1&&t.splice(o,1)}}function r(){t=[]}return{add:n,list:()=>t.slice(),reset:r}}function an(t,n,r,s,o,l=a=>a()){const a=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((f,h)=>{const p=S=>{S===!1?h(T3(4,{from:r,to:n})):S instanceof Error?h(S):Jm(S)?h(T3(2,{from:n,to:S})):(a&&s.enterCallbacks[o]===a&&typeof S=="function"&&a.push(S),f())},v=l(()=>t.call(s&&s.instances[o],n,r,p));let y=Promise.resolve(v);t.length<3&&(y=y.then(p)),y.catch(S=>h(S))})}function $e(t,n,r,s,o=l=>l()){const l=[];for(const a of t)for(const f in a.components){let h=a.components[f];if(!(n!=="beforeRouteEnter"&&!a.instances[f]))if(mo(h)){const v=(h.__vccOpts||h)[n];v&&l.push(an(v,r,s,a,f,o))}else{let p=h();l.push(()=>p.then(v=>{if(!v)throw new Error(`Couldn't resolve component "${f}" at "${a.path}"`);const y=Tm(v)?v.default:v;a.mods[f]=v,a.components[f]=y;const k=(y.__vccOpts||y)[n];return k&&an(k,r,s,a,f,o)()}))}}return l}function Ci(t){const n=$t(G8),r=$t(Ao),s=O2(()=>{const h=T2(t.to);return n.resolve(h)}),o=O2(()=>{const{matched:h}=s.value,{length:p}=h,v=h[p-1],y=r.matched;if(!v||!y.length)return-1;const S=y.findIndex(y3.bind(null,v));if(S>-1)return S;const k=Pi(h[p-2]);return p>1&&Pi(v)===k&&y[y.length-1].path!==k?y.findIndex(y3.bind(null,h[p-2])):S}),l=O2(()=>o.value>-1&&vv(r.params,s.value.params)),a=O2(()=>o.value>-1&&o.value===r.matched.length-1&&So(r.params,s.value.params));function f(h={}){if(mv(h)){const p=n[T2(t.replace)?"replace":"push"](T2(t.to)).catch(r4);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:s,href:O2(()=>s.value.href),isActive:l,isExactActive:a,navigate:f}}function dv(t){return t.length===1?t[0]:t}const gv=x4({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ci,setup(t,{slots:n}){const r=X5(Ci(t)),{options:s}=$t(G8),o=O2(()=>({[Ai(t.activeClass,s.linkActiveClass,"router-link-active")]:r.isActive,[Ai(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const l=n.default&&dv(n.default(r));return t.custom?l:ln("a",{"aria-current":r.isExactActive?t.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},l)}}}),pv=gv;function mv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function vv(t,n){for(const r in n){const s=n[r],o=t[r];if(typeof s=="string"){if(s!==o)return!1}else if(!rt(o)||o.length!==s.length||s.some((l,a)=>l!==o[a]))return!1}return!0}function Pi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ai=(t,n,r)=>t??n??r,yv=x4({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:r}){const s=$t(l8),o=O2(()=>t.route||s.value),l=$t(ki,0),a=O2(()=>{let p=T2(l);const{matched:v}=o.value;let y;for(;(y=v[p])&&!y.components;)p++;return p}),f=O2(()=>o.value.matched[a.value]);M5(ki,O2(()=>a.value+1)),M5(_v,f),M5(l8,o);const h=j0();return k5(()=>[h.value,f.value,t.name],([p,v,y],[S,k,q])=>{v&&(v.instances[y]=p,k&&k!==v&&p&&p===S&&(v.leaveGuards.size||(v.leaveGuards=k.leaveGuards),v.updateGuards.size||(v.updateGuards=k.updateGuards))),p&&v&&(!k||!y3(v,k)||!S)&&(v.enterCallbacks[y]||[]).forEach($=>$(p))},{flush:"post"}),()=>{const p=o.value,v=t.name,y=f.value,S=y&&y.components[v];if(!S)return Di(r.default,{Component:S,route:p});const k=y.props[v],q=k?k===!0?p.params:typeof k=="function"?k(p):k:null,t0=ln(S,g2({},q,n,{onVnodeUnmounted:r0=>{r0.component.isUnmounted&&(y.instances[v]=null)},ref:h}));return Di(r.default,{Component:t0,route:p})||t0}}});function Di(t,n){if(!t)return null;const r=t(n);return r.length===1?r[0]:r}const Do=yv;function Tv(t){const n=ov(t.routes,t),r=t.parseQuery||fv,s=t.stringifyQuery||Mi,o=t.history,l=F3(),a=F3(),f=F3(),h=Ng(rn);let p=rn;s3&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=He.bind(null,R=>""+R),y=He.bind(null,Em),S=He.bind(null,h4);function k(R,u0){let Q,y0;return Mo(R)?(Q=n.getRecordMatcher(R),y0=u0):y0=R,n.addRoute(y0,Q)}function q(R){const u0=n.getRecordMatcher(R);u0&&n.removeRoute(u0)}function $(){return n.getRoutes().map(R=>R.record)}function t0(R){return!!n.getRecordMatcher(R)}function r0(R,u0){if(u0=g2({},u0||h.value),typeof R=="string"){const x=Ge(r,R,u0.path),D=n.resolve({path:x.path},u0),V=o.createHref(x.fullPath);return g2(x,D,{params:S(D.params),hash:h4(x.hash),redirectedFrom:void 0,href:V})}let Q;if(R.path!=null)Q=g2({},R,{path:Ge(r,R.path,u0.path).path});else{const x=g2({},R.params);for(const D in x)x[D]==null&&delete x[D];Q=g2({},R,{params:y(x)}),u0.params=y(u0.params)}const y0=n.resolve(Q,u0),z0=R.hash||"";y0.params=v(S(y0.params));const h2=Bm(s,g2({},R,{hash:Dm(z0),path:y0.path})),T=o.createHref(h2);return g2({fullPath:h2,hash:z0,query:s===Mi?hv(R.query):R.query||{}},y0,{redirectedFrom:void 0,href:T})}function J(R){return typeof R=="string"?Ge(r,R,h.value.path):g2({},R)}function c0(R,u0){if(p!==R)return T3(8,{from:u0,to:R})}function f0(R){return M0(R)}function a0(R){return f0(g2(J(R),{replace:!0}))}function A0(R){const u0=R.matched[R.matched.length-1];if(u0&&u0.redirect){const{redirect:Q}=u0;let y0=typeof Q=="function"?Q(R):Q;return typeof y0=="string"&&(y0=y0.includes("?")||y0.includes("#")?y0=J(y0):{path:y0},y0.params={}),g2({query:R.query,hash:R.hash,params:y0.path!=null?{}:R.params},y0)}}function M0(R,u0){const Q=p=r0(R),y0=h.value,z0=R.state,h2=R.force,T=R.replace===!0,x=A0(Q);if(x)return M0(g2(J(x),{state:typeof x=="object"?g2({},z0,x.state):z0,force:h2,replace:T}),u0||Q);const D=Q;D.redirectedFrom=u0;let V;return!h2&&Im(s,y0,Q)&&(V=T3(16,{to:D,from:y0}),L0(y0,y0,!0,!1)),(V?Promise.resolve(V):f2(D,y0)).catch(E=>Lt(E)?Lt(E,2)?E:h0(E):L(E,D,y0)).then(E=>{if(E){if(Lt(E,2))return M0(g2({replace:T},J(E.to),{state:typeof E.to=="object"?g2({},z0,E.to.state):z0,force:h2}),u0||D)}else E=I2(D,y0,!0,T,z0);return M2(D,y0,E),E})}function U0(R,u0){const Q=c0(R,u0);return Q?Promise.reject(Q):Promise.resolve()}function Q0(R){const u0=k2.values().next().value;return u0&&typeof u0.runWithContext=="function"?u0.runWithContext(R):R()}function f2(R,u0){let Q;const[y0,z0,h2]=xv(R,u0);Q=$e(y0.reverse(),"beforeRouteLeave",R,u0);for(const x of y0)x.leaveGuards.forEach(D=>{Q.push(an(D,R,u0))});const T=U0.bind(null,R,u0);return Q.push(T),u2(Q).then(()=>{Q=[];for(const x of l.list())Q.push(an(x,R,u0));return Q.push(T),u2(Q)}).then(()=>{Q=$e(z0,"beforeRouteUpdate",R,u0);for(const x of z0)x.updateGuards.forEach(D=>{Q.push(an(D,R,u0))});return Q.push(T),u2(Q)}).then(()=>{Q=[];for(const x of h2)if(x.beforeEnter)if(rt(x.beforeEnter))for(const D of x.beforeEnter)Q.push(an(D,R,u0));else Q.push(an(x.beforeEnter,R,u0));return Q.push(T),u2(Q)}).then(()=>(R.matched.forEach(x=>x.enterCallbacks={}),Q=$e(h2,"beforeRouteEnter",R,u0,Q0),Q.push(T),u2(Q))).then(()=>{Q=[];for(const x of a.list())Q.push(an(x,R,u0));return Q.push(T),u2(Q)}).catch(x=>Lt(x,8)?x:Promise.reject(x))}function M2(R,u0,Q){f.list().forEach(y0=>Q0(()=>y0(R,u0,Q)))}function I2(R,u0,Q,y0,z0){const h2=c0(R,u0);if(h2)return h2;const T=u0===rn,x=s3?history.state:{};Q&&(y0||T?o.replace(R.fullPath,g2({scroll:T&&x&&x.scroll},z0)):o.push(R.fullPath,z0)),h.value=R,L0(R,u0,Q,T),h0()}let j2;function M1(){j2||(j2=o.listen((R,u0,Q)=>{if(!H2.listening)return;const y0=r0(R),z0=A0(y0);if(z0){M0(g2(z0,{replace:!0,force:!0}),y0).catch(r4);return}p=y0;const h2=h.value;s3&&Um(pi(h2.fullPath,Q.delta),i6()),f2(y0,h2).catch(T=>Lt(T,12)?T:Lt(T,2)?(M0(g2(J(T.to),{force:!0}),y0).then(x=>{Lt(x,20)&&!Q.delta&&Q.type===_4.pop&&o.go(-1,!1)}).catch(r4),Promise.reject()):(Q.delta&&o.go(-Q.delta,!1),L(T,y0,h2))).then(T=>{T=T||I2(y0,h2,!1),T&&(Q.delta&&!Lt(T,8)?o.go(-Q.delta,!1):Q.type===_4.pop&&Lt(T,20)&&o.go(-1,!1)),M2(y0,h2,T)}).catch(r4)}))}let v1=F3(),D2=F3(),G;function L(R,u0,Q){h0(R);const y0=D2.list();return y0.length?y0.forEach(z0=>z0(R,u0,Q)):console.error(R),Promise.reject(R)}function H(){return G&&h.value!==rn?Promise.resolve():new Promise((R,u0)=>{v1.add([R,u0])})}function h0(R){return G||(G=!R,M1(),v1.list().forEach(([u0,Q])=>R?Q(R):u0()),v1.reset()),R}function L0(R,u0,Q,y0){const{scrollBehavior:z0}=t;if(!s3||!z0)return Promise.resolve();const h2=!Q&&qm(pi(R.fullPath,0))||(y0||!Q)&&history.state&&history.state.scroll||null;return O8().then(()=>z0(R,u0,h2)).then(T=>T&&Wm(T)).catch(T=>L(T,R,u0))}const C0=R=>o.go(R);let V0;const k2=new Set,H2={currentRoute:h,listening:!0,addRoute:k,removeRoute:q,clearRoutes:n.clearRoutes,hasRoute:t0,getRoutes:$,resolve:r0,options:t,push:f0,replace:a0,go:C0,back:()=>C0(-1),forward:()=>C0(1),beforeEach:l.add,beforeResolve:a.add,afterEach:f.add,onError:D2.add,isReady:H,install(R){const u0=this;R.component("RouterLink",pv),R.component("RouterView",Do),R.config.globalProperties.$router=u0,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>T2(h)}),s3&&!V0&&h.value===rn&&(V0=!0,f0(o.location).catch(z0=>{}));const Q={};for(const z0 in rn)Object.defineProperty(Q,z0,{get:()=>h.value[z0],enumerable:!0});R.provide(G8,u0),R.provide(Ao,Os(Q)),R.provide(l8,h);const y0=R.unmount;k2.add(R),R.unmount=function(){k2.delete(R),k2.size<1&&(p=rn,j2&&j2(),j2=null,h.value=rn,V0=!1,G=!1),y0()}}};function u2(R){return R.reduce((u0,Q)=>u0.then(()=>Q0(Q)),Promise.resolve())}return H2}function xv(t,n){const r=[],s=[],o=[],l=Math.max(n.matched.length,t.matched.length);for(let a=0;a<l;a++){const f=n.matched[a];f&&(t.matched.find(p=>y3(p,f))?s.push(f):r.push(f));const h=t.matched[a];h&&(n.matched.find(p=>y3(p,h))||o.push(h))}return[r,s,o]}const wv=x4({__name:"App",setup(t){return(n,r)=>(v0(),u3(T2(Do)))}});//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Lo;function n0(){return Lo.apply(null,arguments)}function Sv(t){Lo=t}function it(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Rn(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function l2(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function $8(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var n;for(n in t)if(l2(t,n))return!1;return!0}function S1(t){return t===void 0}function Wt(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function S4(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function Oo(t,n){var r=[],s,o=t.length;for(s=0;s<o;++s)r.push(n(t[s],s));return r}function fn(t,n){for(var r in n)l2(n,r)&&(t[r]=n[r]);return l2(n,"toString")&&(t.toString=n.toString),l2(n,"valueOf")&&(t.valueOf=n.valueOf),t}function yt(t,n,r,s){return nu(t,n,r,s,!0).utc()}function bv(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function W0(t){return t._pf==null&&(t._pf=bv()),t._pf}var a8;Array.prototype.some?a8=Array.prototype.some:a8=function(t){var n=Object(this),r=n.length>>>0,s;for(s=0;s<r;s++)if(s in n&&t.call(this,n[s],s,n))return!0;return!1};function Y8(t){var n=null,r=!1,s=t._d&&!isNaN(t._d.getTime());if(s&&(n=W0(t),r=a8.call(n.parsedDateParts,function(o){return o!=null}),s=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),t._strict&&(s=s&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=s;else return s;return t._isValid}function s6(t){var n=yt(NaN);return t!=null?fn(W0(n),t):W0(n).userInvalidated=!0,n}var Li=n0.momentProperties=[],Ye=!1;function V8(t,n){var r,s,o,l=Li.length;if(S1(n._isAMomentObject)||(t._isAMomentObject=n._isAMomentObject),S1(n._i)||(t._i=n._i),S1(n._f)||(t._f=n._f),S1(n._l)||(t._l=n._l),S1(n._strict)||(t._strict=n._strict),S1(n._tzm)||(t._tzm=n._tzm),S1(n._isUTC)||(t._isUTC=n._isUTC),S1(n._offset)||(t._offset=n._offset),S1(n._pf)||(t._pf=W0(n)),S1(n._locale)||(t._locale=n._locale),l>0)for(r=0;r<l;r++)s=Li[r],o=n[s],S1(o)||(t[s]=o);return t}function b4(t){V8(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Ye===!1&&(Ye=!0,n0.updateOffset(this),Ye=!1)}function st(t){return t instanceof b4||t!=null&&t._isAMomentObject!=null}function Eo(t){n0.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function z1(t,n){var r=!0;return fn(function(){if(n0.deprecationHandler!=null&&n0.deprecationHandler(null,t),r){var s=[],o,l,a,f=arguments.length;for(l=0;l<f;l++){if(o="",typeof arguments[l]=="object"){o+=`
[`+l+"] ";for(a in arguments[0])l2(arguments[0],a)&&(o+=a+": "+arguments[0][a]+", ");o=o.slice(0,-2)}else o=arguments[l];s.push(o)}Eo(t+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var Oi={};function No(t,n){n0.deprecationHandler!=null&&n0.deprecationHandler(t,n),Oi[t]||(Eo(n),Oi[t]=!0)}n0.suppressDeprecationWarnings=!1;n0.deprecationHandler=null;function Tt(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function Mv(t){var n,r;for(r in t)l2(t,r)&&(n=t[r],Tt(n)?this[r]=n:this["_"+r]=n);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function c8(t,n){var r=fn({},t),s;for(s in n)l2(n,s)&&(Rn(t[s])&&Rn(n[s])?(r[s]={},fn(r[s],t[s]),fn(r[s],n[s])):n[s]!=null?r[s]=n[s]:delete r[s]);for(s in t)l2(t,s)&&!l2(n,s)&&Rn(t[s])&&(r[s]=fn({},r[s]));return r}function F8(t){t!=null&&this.set(t)}var f8;Object.keys?f8=Object.keys:f8=function(t){var n,r=[];for(n in t)l2(t,n)&&r.push(n);return r};var kv={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Cv(t,n,r){var s=this._calendar[t]||this._calendar.sameElse;return Tt(s)?s.call(n,r):s}function vt(t,n,r){var s=""+Math.abs(t),o=n-s.length,l=t>=0;return(l?r?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+s}var W8=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,y5=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ve={},d3={};function D0(t,n,r,s){var o=s;typeof s=="string"&&(o=function(){return this[s]()}),t&&(d3[t]=o),n&&(d3[n[0]]=function(){return vt(o.apply(this,arguments),n[1],n[2])}),r&&(d3[r]=function(){return this.localeData().ordinal(o.apply(this,arguments),t)})}function Pv(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function Av(t){var n=t.match(W8),r,s;for(r=0,s=n.length;r<s;r++)d3[n[r]]?n[r]=d3[n[r]]:n[r]=Pv(n[r]);return function(o){var l="",a;for(a=0;a<s;a++)l+=Tt(n[a])?n[a].call(o,t):n[a];return l}}function D5(t,n){return t.isValid()?(n=Ro(n,t.localeData()),Ve[n]=Ve[n]||Av(n),Ve[n](t)):t.localeData().invalidDate()}function Ro(t,n){var r=5;function s(o){return n.longDateFormat(o)||o}for(y5.lastIndex=0;r>=0&&y5.test(t);)t=t.replace(y5,s),y5.lastIndex=0,r-=1;return t}var Dv={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Lv(t){var n=this._longDateFormat[t],r=this._longDateFormat[t.toUpperCase()];return n||!r?n:(this._longDateFormat[t]=r.match(W8).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[t])}var Ov="Invalid date";function Ev(){return this._invalidDate}var Nv="%d",Rv=/\d{1,2}/;function Bv(t){return this._ordinal.replace("%d",t)}var Iv={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Hv(t,n,r,s){var o=this._relativeTime[r];return Tt(o)?o(t,n,r,s):o.replace(/%d/i,t)}function Gv(t,n){var r=this._relativeTime[t>0?"future":"past"];return Tt(r)?r(n):r.replace(/%s/i,n)}var Ei={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Z1(t){return typeof t=="string"?Ei[t]||Ei[t.toLowerCase()]:void 0}function U8(t){var n={},r,s;for(s in t)l2(t,s)&&(r=Z1(s),r&&(n[r]=t[s]));return n}var $v={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Yv(t){var n=[],r;for(r in t)l2(t,r)&&n.push({unit:r,priority:$v[r]});return n.sort(function(s,o){return s.priority-o.priority}),n}var Bo=/\d/,B1=/\d\d/,Io=/\d{3}/,q8=/\d{4}/,o6=/[+-]?\d{6}/,N2=/\d\d?/,Ho=/\d\d\d\d?/,Go=/\d\d\d\d\d\d?/,u6=/\d{1,3}/,K8=/\d{1,4}/,l6=/[+-]?\d{1,6}/,w3=/\d+/,a6=/[+-]?\d+/,Vv=/Z|[+-]\d\d:?\d\d/gi,c6=/Z|[+-]\d\d(?::?\d\d)?/gi,Fv=/[+-]?\d+(\.\d{1,3})?/,M4=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,S3=/^[1-9]\d?/,j8=/^([1-9]\d|\d)/,V5;V5={};function x0(t,n,r){V5[t]=Tt(n)?n:function(s,o){return s&&r?r:n}}function Wv(t,n){return l2(V5,t)?V5[t](n._strict,n._locale):new RegExp(Uv(t))}function Uv(t){return Vt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,s,o,l){return r||s||o||l}))}function Vt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function q1(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function e2(t){var n=+t,r=0;return n!==0&&isFinite(n)&&(r=q1(n)),r}var h8={};function x2(t,n){var r,s=n,o;for(typeof t=="string"&&(t=[t]),Wt(n)&&(s=function(l,a){a[n]=e2(l)}),o=t.length,r=0;r<o;r++)h8[t[r]]=s}function k4(t,n){x2(t,function(r,s,o,l){o._w=o._w||{},n(r,o._w,o,l)})}function qv(t,n,r){n!=null&&l2(h8,t)&&h8[t](n,r._a,r,t)}function f6(t){return t%4===0&&t%100!==0||t%400===0}var f1=0,Ht=1,dt=2,Q2=3,nt=4,Gt=5,En=6,Kv=7,jv=8;D0("Y",0,0,function(){var t=this.year();return t<=9999?vt(t,4):"+"+t});D0(0,["YY",2],0,function(){return this.year()%100});D0(0,["YYYY",4],0,"year");D0(0,["YYYYY",5],0,"year");D0(0,["YYYYYY",6,!0],0,"year");x0("Y",a6);x0("YY",N2,B1);x0("YYYY",K8,q8);x0("YYYYY",l6,o6);x0("YYYYYY",l6,o6);x2(["YYYYY","YYYYYY"],f1);x2("YYYY",function(t,n){n[f1]=t.length===2?n0.parseTwoDigitYear(t):e2(t)});x2("YY",function(t,n){n[f1]=n0.parseTwoDigitYear(t)});x2("Y",function(t,n){n[f1]=parseInt(t,10)});function s4(t){return f6(t)?366:365}n0.parseTwoDigitYear=function(t){return e2(t)+(e2(t)>68?1900:2e3)};var $o=b3("FullYear",!0);function zv(){return f6(this.year())}function b3(t,n){return function(r){return r!=null?(Yo(this,t,r),n0.updateOffset(this,n),this):d4(this,t)}}function d4(t,n){if(!t.isValid())return NaN;var r=t._d,s=t._isUTC;switch(n){case"Milliseconds":return s?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return s?r.getUTCSeconds():r.getSeconds();case"Minutes":return s?r.getUTCMinutes():r.getMinutes();case"Hours":return s?r.getUTCHours():r.getHours();case"Date":return s?r.getUTCDate():r.getDate();case"Day":return s?r.getUTCDay():r.getDay();case"Month":return s?r.getUTCMonth():r.getMonth();case"FullYear":return s?r.getUTCFullYear():r.getFullYear();default:return NaN}}function Yo(t,n,r){var s,o,l,a,f;if(!(!t.isValid()||isNaN(r))){switch(s=t._d,o=t._isUTC,n){case"Milliseconds":return void(o?s.setUTCMilliseconds(r):s.setMilliseconds(r));case"Seconds":return void(o?s.setUTCSeconds(r):s.setSeconds(r));case"Minutes":return void(o?s.setUTCMinutes(r):s.setMinutes(r));case"Hours":return void(o?s.setUTCHours(r):s.setHours(r));case"Date":return void(o?s.setUTCDate(r):s.setDate(r));case"FullYear":break;default:return}l=r,a=t.month(),f=t.date(),f=f===29&&a===1&&!f6(l)?28:f,o?s.setUTCFullYear(l,a,f):s.setFullYear(l,a,f)}}function Zv(t){return t=Z1(t),Tt(this[t])?this[t]():this}function Jv(t,n){if(typeof t=="object"){t=U8(t);var r=Yv(t),s,o=r.length;for(s=0;s<o;s++)this[r[s].unit](t[r[s].unit])}else if(t=Z1(t),Tt(this[t]))return this[t](n);return this}function Xv(t,n){return(t%n+n)%n}var U2;Array.prototype.indexOf?U2=Array.prototype.indexOf:U2=function(t){var n;for(n=0;n<this.length;++n)if(this[n]===t)return n;return-1};function z8(t,n){if(isNaN(t)||isNaN(n))return NaN;var r=Xv(n,12);return t+=(n-r)/12,r===1?f6(t)?29:28:31-r%7%2}D0("M",["MM",2],"Mo",function(){return this.month()+1});D0("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});D0("MMMM",0,0,function(t){return this.localeData().months(this,t)});x0("M",N2,S3);x0("MM",N2,B1);x0("MMM",function(t,n){return n.monthsShortRegex(t)});x0("MMMM",function(t,n){return n.monthsRegex(t)});x2(["M","MM"],function(t,n){n[Ht]=e2(t)-1});x2(["MMM","MMMM"],function(t,n,r,s){var o=r._locale.monthsParse(t,s,r._strict);o!=null?n[Ht]=o:W0(r).invalidMonth=t});var Qv="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Vo="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Fo=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ty=M4,ny=M4;function ey(t,n){return t?it(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Fo).test(n)?"format":"standalone"][t.month()]:it(this._months)?this._months:this._months.standalone}function ry(t,n){return t?it(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Fo.test(n)?"format":"standalone"][t.month()]:it(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function iy(t,n,r){var s,o,l,a=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)l=yt([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(l,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(l,"").toLocaleLowerCase();return r?n==="MMM"?(o=U2.call(this._shortMonthsParse,a),o!==-1?o:null):(o=U2.call(this._longMonthsParse,a),o!==-1?o:null):n==="MMM"?(o=U2.call(this._shortMonthsParse,a),o!==-1?o:(o=U2.call(this._longMonthsParse,a),o!==-1?o:null)):(o=U2.call(this._longMonthsParse,a),o!==-1?o:(o=U2.call(this._shortMonthsParse,a),o!==-1?o:null))}function sy(t,n,r){var s,o,l;if(this._monthsParseExact)return iy.call(this,t,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(o=yt([2e3,s]),r&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),!r&&!this._monthsParse[s]&&(l="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[s]=new RegExp(l.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[s].test(t))return s;if(r&&n==="MMM"&&this._shortMonthsParse[s].test(t))return s;if(!r&&this._monthsParse[s].test(t))return s}}function Wo(t,n){if(!t.isValid())return t;if(typeof n=="string"){if(/^\d+$/.test(n))n=e2(n);else if(n=t.localeData().monthsParse(n),!Wt(n))return t}var r=n,s=t.date();return s=s<29?s:Math.min(s,z8(t.year(),r)),t._isUTC?t._d.setUTCMonth(r,s):t._d.setMonth(r,s),t}function Uo(t){return t!=null?(Wo(this,t),n0.updateOffset(this,!0),this):d4(this,"Month")}function oy(){return z8(this.year(),this.month())}function uy(t){return this._monthsParseExact?(l2(this,"_monthsRegex")||qo.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(l2(this,"_monthsShortRegex")||(this._monthsShortRegex=ty),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function ly(t){return this._monthsParseExact?(l2(this,"_monthsRegex")||qo.call(this),t?this._monthsStrictRegex:this._monthsRegex):(l2(this,"_monthsRegex")||(this._monthsRegex=ny),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function qo(){function t(h,p){return p.length-h.length}var n=[],r=[],s=[],o,l,a,f;for(o=0;o<12;o++)l=yt([2e3,o]),a=Vt(this.monthsShort(l,"")),f=Vt(this.months(l,"")),n.push(a),r.push(f),s.push(f),s.push(a);n.sort(t),r.sort(t),s.sort(t),this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function ay(t,n,r,s,o,l,a){var f;return t<100&&t>=0?(f=new Date(t+400,n,r,s,o,l,a),isFinite(f.getFullYear())&&f.setFullYear(t)):f=new Date(t,n,r,s,o,l,a),f}function g4(t){var n,r;return t<100&&t>=0?(r=Array.prototype.slice.call(arguments),r[0]=t+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(t)):n=new Date(Date.UTC.apply(null,arguments)),n}function F5(t,n,r){var s=7+n-r,o=(7+g4(t,0,s).getUTCDay()-n)%7;return-o+s-1}function Ko(t,n,r,s,o){var l=(7+r-s)%7,a=F5(t,s,o),f=1+7*(n-1)+l+a,h,p;return f<=0?(h=t-1,p=s4(h)+f):f>s4(t)?(h=t+1,p=f-s4(t)):(h=t,p=f),{year:h,dayOfYear:p}}function p4(t,n,r){var s=F5(t.year(),n,r),o=Math.floor((t.dayOfYear()-s-1)/7)+1,l,a;return o<1?(a=t.year()-1,l=o+Ft(a,n,r)):o>Ft(t.year(),n,r)?(l=o-Ft(t.year(),n,r),a=t.year()+1):(a=t.year(),l=o),{week:l,year:a}}function Ft(t,n,r){var s=F5(t,n,r),o=F5(t+1,n,r);return(s4(t)-s+o)/7}D0("w",["ww",2],"wo","week");D0("W",["WW",2],"Wo","isoWeek");x0("w",N2,S3);x0("ww",N2,B1);x0("W",N2,S3);x0("WW",N2,B1);k4(["w","ww","W","WW"],function(t,n,r,s){n[s.substr(0,1)]=e2(t)});function cy(t){return p4(t,this._week.dow,this._week.doy).week}var fy={dow:0,doy:6};function hy(){return this._week.dow}function _y(){return this._week.doy}function dy(t){var n=this.localeData().week(this);return t==null?n:this.add((t-n)*7,"d")}function gy(t){var n=p4(this,1,4).week;return t==null?n:this.add((t-n)*7,"d")}D0("d",0,"do","day");D0("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});D0("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});D0("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});D0("e",0,0,"weekday");D0("E",0,0,"isoWeekday");x0("d",N2);x0("e",N2);x0("E",N2);x0("dd",function(t,n){return n.weekdaysMinRegex(t)});x0("ddd",function(t,n){return n.weekdaysShortRegex(t)});x0("dddd",function(t,n){return n.weekdaysRegex(t)});k4(["dd","ddd","dddd"],function(t,n,r,s){var o=r._locale.weekdaysParse(t,s,r._strict);o!=null?n.d=o:W0(r).invalidWeekday=t});k4(["d","e","E"],function(t,n,r,s){n[s]=e2(t)});function py(t,n){return typeof t!="string"?t:isNaN(t)?(t=n.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function my(t,n){return typeof t=="string"?n.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Z8(t,n){return t.slice(n,7).concat(t.slice(0,n))}var vy="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),jo="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),yy="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ty=M4,xy=M4,wy=M4;function Sy(t,n){var r=it(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return t===!0?Z8(r,this._week.dow):t?r[t.day()]:r}function by(t){return t===!0?Z8(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function My(t){return t===!0?Z8(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function ky(t,n,r){var s,o,l,a=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)l=yt([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(l,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(l,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(l,"").toLocaleLowerCase();return r?n==="dddd"?(o=U2.call(this._weekdaysParse,a),o!==-1?o:null):n==="ddd"?(o=U2.call(this._shortWeekdaysParse,a),o!==-1?o:null):(o=U2.call(this._minWeekdaysParse,a),o!==-1?o:null):n==="dddd"?(o=U2.call(this._weekdaysParse,a),o!==-1||(o=U2.call(this._shortWeekdaysParse,a),o!==-1)?o:(o=U2.call(this._minWeekdaysParse,a),o!==-1?o:null)):n==="ddd"?(o=U2.call(this._shortWeekdaysParse,a),o!==-1||(o=U2.call(this._weekdaysParse,a),o!==-1)?o:(o=U2.call(this._minWeekdaysParse,a),o!==-1?o:null)):(o=U2.call(this._minWeekdaysParse,a),o!==-1||(o=U2.call(this._weekdaysParse,a),o!==-1)?o:(o=U2.call(this._shortWeekdaysParse,a),o!==-1?o:null))}function Cy(t,n,r){var s,o,l;if(this._weekdaysParseExact)return ky.call(this,t,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(o=yt([2e3,1]).day(s),r&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(o,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(o,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(o,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(l="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[s]=new RegExp(l.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[s].test(t))return s;if(r&&n==="ddd"&&this._shortWeekdaysParse[s].test(t))return s;if(r&&n==="dd"&&this._minWeekdaysParse[s].test(t))return s;if(!r&&this._weekdaysParse[s].test(t))return s}}function Py(t){if(!this.isValid())return t!=null?this:NaN;var n=d4(this,"Day");return t!=null?(t=py(t,this.localeData()),this.add(t-n,"d")):n}function Ay(t){if(!this.isValid())return t!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return t==null?n:this.add(t-n,"d")}function Dy(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var n=my(t,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function Ly(t){return this._weekdaysParseExact?(l2(this,"_weekdaysRegex")||J8.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(l2(this,"_weekdaysRegex")||(this._weekdaysRegex=Ty),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oy(t){return this._weekdaysParseExact?(l2(this,"_weekdaysRegex")||J8.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l2(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=xy),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ey(t){return this._weekdaysParseExact?(l2(this,"_weekdaysRegex")||J8.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l2(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=wy),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function J8(){function t(v,y){return y.length-v.length}var n=[],r=[],s=[],o=[],l,a,f,h,p;for(l=0;l<7;l++)a=yt([2e3,1]).day(l),f=Vt(this.weekdaysMin(a,"")),h=Vt(this.weekdaysShort(a,"")),p=Vt(this.weekdays(a,"")),n.push(f),r.push(h),s.push(p),o.push(f),o.push(h),o.push(p);n.sort(t),r.sort(t),s.sort(t),o.sort(t),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function X8(){return this.hours()%12||12}function Ny(){return this.hours()||24}D0("H",["HH",2],0,"hour");D0("h",["hh",2],0,X8);D0("k",["kk",2],0,Ny);D0("hmm",0,0,function(){return""+X8.apply(this)+vt(this.minutes(),2)});D0("hmmss",0,0,function(){return""+X8.apply(this)+vt(this.minutes(),2)+vt(this.seconds(),2)});D0("Hmm",0,0,function(){return""+this.hours()+vt(this.minutes(),2)});D0("Hmmss",0,0,function(){return""+this.hours()+vt(this.minutes(),2)+vt(this.seconds(),2)});function zo(t,n){D0(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}zo("a",!0);zo("A",!1);function Zo(t,n){return n._meridiemParse}x0("a",Zo);x0("A",Zo);x0("H",N2,j8);x0("h",N2,S3);x0("k",N2,S3);x0("HH",N2,B1);x0("hh",N2,B1);x0("kk",N2,B1);x0("hmm",Ho);x0("hmmss",Go);x0("Hmm",Ho);x0("Hmmss",Go);x2(["H","HH"],Q2);x2(["k","kk"],function(t,n,r){var s=e2(t);n[Q2]=s===24?0:s});x2(["a","A"],function(t,n,r){r._isPm=r._locale.isPM(t),r._meridiem=t});x2(["h","hh"],function(t,n,r){n[Q2]=e2(t),W0(r).bigHour=!0});x2("hmm",function(t,n,r){var s=t.length-2;n[Q2]=e2(t.substr(0,s)),n[nt]=e2(t.substr(s)),W0(r).bigHour=!0});x2("hmmss",function(t,n,r){var s=t.length-4,o=t.length-2;n[Q2]=e2(t.substr(0,s)),n[nt]=e2(t.substr(s,2)),n[Gt]=e2(t.substr(o)),W0(r).bigHour=!0});x2("Hmm",function(t,n,r){var s=t.length-2;n[Q2]=e2(t.substr(0,s)),n[nt]=e2(t.substr(s))});x2("Hmmss",function(t,n,r){var s=t.length-4,o=t.length-2;n[Q2]=e2(t.substr(0,s)),n[nt]=e2(t.substr(s,2)),n[Gt]=e2(t.substr(o))});function Ry(t){return(t+"").toLowerCase().charAt(0)==="p"}var By=/[ap]\.?m?\.?/i,Iy=b3("Hours",!0);function Hy(t,n,r){return t>11?r?"pm":"PM":r?"am":"AM"}var Jo={calendar:kv,longDateFormat:Dv,invalidDate:Ov,ordinal:Nv,dayOfMonthOrdinalParse:Rv,relativeTime:Iv,months:Qv,monthsShort:Vo,week:fy,weekdays:vy,weekdaysMin:yy,weekdaysShort:jo,meridiemParse:By},B2={},W3={},m4;function Gy(t,n){var r,s=Math.min(t.length,n.length);for(r=0;r<s;r+=1)if(t[r]!==n[r])return r;return s}function Ni(t){return t&&t.toLowerCase().replace("_","-")}function $y(t){for(var n=0,r,s,o,l;n<t.length;){for(l=Ni(t[n]).split("-"),r=l.length,s=Ni(t[n+1]),s=s?s.split("-"):null;r>0;){if(o=h6(l.slice(0,r).join("-")),o)return o;if(s&&s.length>=r&&Gy(l,s)>=r-1)break;r--}n++}return m4}function Yy(t){return!!(t&&t.match("^[^/\\\\]*$"))}function h6(t){var n=null,r;if(B2[t]===void 0&&typeof E5<"u"&&E5&&E5.exports&&Yy(t))try{n=m4._abbr,r=require,r("./locale/"+t),dn(n)}catch{B2[t]=null}return B2[t]}function dn(t,n){var r;return t&&(S1(n)?r=qt(t):r=Q8(t,n),r?m4=r:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),m4._abbr}function Q8(t,n){if(n!==null){var r,s=Jo;if(n.abbr=t,B2[t]!=null)No("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=B2[t]._config;else if(n.parentLocale!=null)if(B2[n.parentLocale]!=null)s=B2[n.parentLocale]._config;else if(r=h6(n.parentLocale),r!=null)s=r._config;else return W3[n.parentLocale]||(W3[n.parentLocale]=[]),W3[n.parentLocale].push({name:t,config:n}),null;return B2[t]=new F8(c8(s,n)),W3[t]&&W3[t].forEach(function(o){Q8(o.name,o.config)}),dn(t),B2[t]}else return delete B2[t],null}function Vy(t,n){if(n!=null){var r,s,o=Jo;B2[t]!=null&&B2[t].parentLocale!=null?B2[t].set(c8(B2[t]._config,n)):(s=h6(t),s!=null&&(o=s._config),n=c8(o,n),s==null&&(n.abbr=t),r=new F8(n),r.parentLocale=B2[t],B2[t]=r),dn(t)}else B2[t]!=null&&(B2[t].parentLocale!=null?(B2[t]=B2[t].parentLocale,t===dn()&&dn(t)):B2[t]!=null&&delete B2[t]);return B2[t]}function qt(t){var n;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return m4;if(!it(t)){if(n=h6(t),n)return n;t=[t]}return $y(t)}function Fy(){return f8(B2)}function t7(t){var n,r=t._a;return r&&W0(t).overflow===-2&&(n=r[Ht]<0||r[Ht]>11?Ht:r[dt]<1||r[dt]>z8(r[f1],r[Ht])?dt:r[Q2]<0||r[Q2]>24||r[Q2]===24&&(r[nt]!==0||r[Gt]!==0||r[En]!==0)?Q2:r[nt]<0||r[nt]>59?nt:r[Gt]<0||r[Gt]>59?Gt:r[En]<0||r[En]>999?En:-1,W0(t)._overflowDayOfYear&&(n<f1||n>dt)&&(n=dt),W0(t)._overflowWeeks&&n===-1&&(n=Kv),W0(t)._overflowWeekday&&n===-1&&(n=jv),W0(t).overflow=n),t}var Wy=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Uy=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qy=/Z|[+-]\d\d(?::?\d\d)?/,T5=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Fe=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ky=/^\/?Date\((-?\d+)/i,jy=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,zy={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Xo(t){var n,r,s=t._i,o=Wy.exec(s)||Uy.exec(s),l,a,f,h,p=T5.length,v=Fe.length;if(o){for(W0(t).iso=!0,n=0,r=p;n<r;n++)if(T5[n][1].exec(o[1])){a=T5[n][0],l=T5[n][2]!==!1;break}if(a==null){t._isValid=!1;return}if(o[3]){for(n=0,r=v;n<r;n++)if(Fe[n][1].exec(o[3])){f=(o[2]||" ")+Fe[n][0];break}if(f==null){t._isValid=!1;return}}if(!l&&f!=null){t._isValid=!1;return}if(o[4])if(qy.exec(o[4]))h="Z";else{t._isValid=!1;return}t._f=a+(f||"")+(h||""),e7(t)}else t._isValid=!1}function Zy(t,n,r,s,o,l){var a=[Jy(t),Vo.indexOf(n),parseInt(r,10),parseInt(s,10),parseInt(o,10)];return l&&a.push(parseInt(l,10)),a}function Jy(t){var n=parseInt(t,10);return n<=49?2e3+n:n<=999?1900+n:n}function Xy(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Qy(t,n,r){if(t){var s=jo.indexOf(t),o=new Date(n[0],n[1],n[2]).getDay();if(s!==o)return W0(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function tT(t,n,r){if(t)return zy[t];if(n)return 0;var s=parseInt(r,10),o=s%100,l=(s-o)/100;return l*60+o}function Qo(t){var n=jy.exec(Xy(t._i)),r;if(n){if(r=Zy(n[4],n[3],n[2],n[5],n[6],n[7]),!Qy(n[1],r,t))return;t._a=r,t._tzm=tT(n[8],n[9],n[10]),t._d=g4.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),W0(t).rfc2822=!0}else t._isValid=!1}function nT(t){var n=Ky.exec(t._i);if(n!==null){t._d=new Date(+n[1]);return}if(Xo(t),t._isValid===!1)delete t._isValid;else return;if(Qo(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:n0.createFromInputFallback(t)}n0.createFromInputFallback=z1("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function o3(t,n,r){return t??n??r}function eT(t){var n=new Date(n0.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function n7(t){var n,r,s=[],o,l,a;if(!t._d){for(o=eT(t),t._w&&t._a[dt]==null&&t._a[Ht]==null&&rT(t),t._dayOfYear!=null&&(a=o3(t._a[f1],o[f1]),(t._dayOfYear>s4(a)||t._dayOfYear===0)&&(W0(t)._overflowDayOfYear=!0),r=g4(a,0,t._dayOfYear),t._a[Ht]=r.getUTCMonth(),t._a[dt]=r.getUTCDate()),n=0;n<3&&t._a[n]==null;++n)t._a[n]=s[n]=o[n];for(;n<7;n++)t._a[n]=s[n]=t._a[n]==null?n===2?1:0:t._a[n];t._a[Q2]===24&&t._a[nt]===0&&t._a[Gt]===0&&t._a[En]===0&&(t._nextDay=!0,t._a[Q2]=0),t._d=(t._useUTC?g4:ay).apply(null,s),l=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Q2]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==l&&(W0(t).weekdayMismatch=!0)}}function rT(t){var n,r,s,o,l,a,f,h,p;n=t._w,n.GG!=null||n.W!=null||n.E!=null?(l=1,a=4,r=o3(n.GG,t._a[f1],p4(E2(),1,4).year),s=o3(n.W,1),o=o3(n.E,1),(o<1||o>7)&&(h=!0)):(l=t._locale._week.dow,a=t._locale._week.doy,p=p4(E2(),l,a),r=o3(n.gg,t._a[f1],p.year),s=o3(n.w,p.week),n.d!=null?(o=n.d,(o<0||o>6)&&(h=!0)):n.e!=null?(o=n.e+l,(n.e<0||n.e>6)&&(h=!0)):o=l),s<1||s>Ft(r,l,a)?W0(t)._overflowWeeks=!0:h!=null?W0(t)._overflowWeekday=!0:(f=Ko(r,s,o,l,a),t._a[f1]=f.year,t._dayOfYear=f.dayOfYear)}n0.ISO_8601=function(){};n0.RFC_2822=function(){};function e7(t){if(t._f===n0.ISO_8601){Xo(t);return}if(t._f===n0.RFC_2822){Qo(t);return}t._a=[],W0(t).empty=!0;var n=""+t._i,r,s,o,l,a,f=n.length,h=0,p,v;for(o=Ro(t._f,t._locale).match(W8)||[],v=o.length,r=0;r<v;r++)l=o[r],s=(n.match(Wv(l,t))||[])[0],s&&(a=n.substr(0,n.indexOf(s)),a.length>0&&W0(t).unusedInput.push(a),n=n.slice(n.indexOf(s)+s.length),h+=s.length),d3[l]?(s?W0(t).empty=!1:W0(t).unusedTokens.push(l),qv(l,s,t)):t._strict&&!s&&W0(t).unusedTokens.push(l);W0(t).charsLeftOver=f-h,n.length>0&&W0(t).unusedInput.push(n),t._a[Q2]<=12&&W0(t).bigHour===!0&&t._a[Q2]>0&&(W0(t).bigHour=void 0),W0(t).parsedDateParts=t._a.slice(0),W0(t).meridiem=t._meridiem,t._a[Q2]=iT(t._locale,t._a[Q2],t._meridiem),p=W0(t).era,p!==null&&(t._a[f1]=t._locale.erasConvertYear(p,t._a[f1])),n7(t),t7(t)}function iT(t,n,r){var s;return r==null?n:t.meridiemHour!=null?t.meridiemHour(n,r):(t.isPM!=null&&(s=t.isPM(r),s&&n<12&&(n+=12),!s&&n===12&&(n=0)),n)}function sT(t){var n,r,s,o,l,a,f=!1,h=t._f.length;if(h===0){W0(t).invalidFormat=!0,t._d=new Date(NaN);return}for(o=0;o<h;o++)l=0,a=!1,n=V8({},t),t._useUTC!=null&&(n._useUTC=t._useUTC),n._f=t._f[o],e7(n),Y8(n)&&(a=!0),l+=W0(n).charsLeftOver,l+=W0(n).unusedTokens.length*10,W0(n).score=l,f?l<s&&(s=l,r=n):(s==null||l<s||a)&&(s=l,r=n,a&&(f=!0));fn(t,r||n)}function oT(t){if(!t._d){var n=U8(t._i),r=n.day===void 0?n.date:n.day;t._a=Oo([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(s){return s&&parseInt(s,10)}),n7(t)}}function uT(t){var n=new b4(t7(tu(t)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function tu(t){var n=t._i,r=t._f;return t._locale=t._locale||qt(t._l),n===null||r===void 0&&n===""?s6({nullInput:!0}):(typeof n=="string"&&(t._i=n=t._locale.preparse(n)),st(n)?new b4(t7(n)):(S4(n)?t._d=n:it(r)?sT(t):r?e7(t):lT(t),Y8(t)||(t._d=null),t))}function lT(t){var n=t._i;S1(n)?t._d=new Date(n0.now()):S4(n)?t._d=new Date(n.valueOf()):typeof n=="string"?nT(t):it(n)?(t._a=Oo(n.slice(0),function(r){return parseInt(r,10)}),n7(t)):Rn(n)?oT(t):Wt(n)?t._d=new Date(n):n0.createFromInputFallback(t)}function nu(t,n,r,s,o){var l={};return(n===!0||n===!1)&&(s=n,n=void 0),(r===!0||r===!1)&&(s=r,r=void 0),(Rn(t)&&$8(t)||it(t)&&t.length===0)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=o,l._l=r,l._i=t,l._f=n,l._strict=s,uT(l)}function E2(t,n,r,s){return nu(t,n,r,s,!1)}var aT=z1("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=E2.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:s6()}),cT=z1("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=E2.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:s6()});function eu(t,n){var r,s;if(n.length===1&&it(n[0])&&(n=n[0]),!n.length)return E2();for(r=n[0],s=1;s<n.length;++s)(!n[s].isValid()||n[s][t](r))&&(r=n[s]);return r}function fT(){var t=[].slice.call(arguments,0);return eu("isBefore",t)}function hT(){var t=[].slice.call(arguments,0);return eu("isAfter",t)}var _T=function(){return Date.now?Date.now():+new Date},U3=["year","quarter","month","week","day","hour","minute","second","millisecond"];function dT(t){var n,r=!1,s,o=U3.length;for(n in t)if(l2(t,n)&&!(U2.call(U3,n)!==-1&&(t[n]==null||!isNaN(t[n]))))return!1;for(s=0;s<o;++s)if(t[U3[s]]){if(r)return!1;parseFloat(t[U3[s]])!==e2(t[U3[s]])&&(r=!0)}return!0}function gT(){return this._isValid}function pT(){return ot(NaN)}function _6(t){var n=U8(t),r=n.year||0,s=n.quarter||0,o=n.month||0,l=n.week||n.isoWeek||0,a=n.day||0,f=n.hour||0,h=n.minute||0,p=n.second||0,v=n.millisecond||0;this._isValid=dT(n),this._milliseconds=+v+p*1e3+h*6e4+f*1e3*60*60,this._days=+a+l*7,this._months=+o+s*3+r*12,this._data={},this._locale=qt(),this._bubble()}function L5(t){return t instanceof _6}function _8(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function mT(t,n,r){var s=Math.min(t.length,n.length),o=Math.abs(t.length-n.length),l=0,a;for(a=0;a<s;a++)e2(t[a])!==e2(n[a])&&l++;return l+o}function ru(t,n){D0(t,0,0,function(){var r=this.utcOffset(),s="+";return r<0&&(r=-r,s="-"),s+vt(~~(r/60),2)+n+vt(~~r%60,2)})}ru("Z",":");ru("ZZ","");x0("Z",c6);x0("ZZ",c6);x2(["Z","ZZ"],function(t,n,r){r._useUTC=!0,r._tzm=r7(c6,t)});var vT=/([\+\-]|\d\d)/gi;function r7(t,n){var r=(n||"").match(t),s,o,l;return r===null?null:(s=r[r.length-1]||[],o=(s+"").match(vT)||["-",0,0],l=+(o[1]*60)+e2(o[2]),l===0?0:o[0]==="+"?l:-l)}function i7(t,n){var r,s;return n._isUTC?(r=n.clone(),s=(st(t)||S4(t)?t.valueOf():E2(t).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+s),n0.updateOffset(r,!1),r):E2(t).local()}function d8(t){return-Math.round(t._d.getTimezoneOffset())}n0.updateOffset=function(){};function yT(t,n,r){var s=this._offset||0,o;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=r7(c6,t),t===null)return this}else Math.abs(t)<16&&!r&&(t=t*60);return!this._isUTC&&n&&(o=d8(this)),this._offset=t,this._isUTC=!0,o!=null&&this.add(o,"m"),s!==t&&(!n||this._changeInProgress?ou(this,ot(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,n0.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:d8(this)}function TT(t,n){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,n),this):-this.utcOffset()}function xT(t){return this.utcOffset(0,t)}function wT(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(d8(this),"m")),this}function ST(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=r7(Vv,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function bT(t){return this.isValid()?(t=t?E2(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function MT(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function kT(){if(!S1(this._isDSTShifted))return this._isDSTShifted;var t={},n;return V8(t,this),t=tu(t),t._a?(n=t._isUTC?yt(t._a):E2(t._a),this._isDSTShifted=this.isValid()&&mT(t._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function CT(){return this.isValid()?!this._isUTC:!1}function PT(){return this.isValid()?this._isUTC:!1}function iu(){return this.isValid()?this._isUTC&&this._offset===0:!1}var AT=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,DT=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ot(t,n){var r=t,s=null,o,l,a;return L5(t)?r={ms:t._milliseconds,d:t._days,M:t._months}:Wt(t)||!isNaN(+t)?(r={},n?r[n]=+t:r.milliseconds=+t):(s=AT.exec(t))?(o=s[1]==="-"?-1:1,r={y:0,d:e2(s[dt])*o,h:e2(s[Q2])*o,m:e2(s[nt])*o,s:e2(s[Gt])*o,ms:e2(_8(s[En]*1e3))*o}):(s=DT.exec(t))?(o=s[1]==="-"?-1:1,r={y:An(s[2],o),M:An(s[3],o),w:An(s[4],o),d:An(s[5],o),h:An(s[6],o),m:An(s[7],o),s:An(s[8],o)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(a=LT(E2(r.from),E2(r.to)),r={},r.ms=a.milliseconds,r.M=a.months),l=new _6(r),L5(t)&&l2(t,"_locale")&&(l._locale=t._locale),L5(t)&&l2(t,"_isValid")&&(l._isValid=t._isValid),l}ot.fn=_6.prototype;ot.invalid=pT;function An(t,n){var r=t&&parseFloat(t.replace(",","."));return(isNaN(r)?0:r)*n}function Ri(t,n){var r={};return r.months=n.month()-t.month()+(n.year()-t.year())*12,t.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+t.clone().add(r.months,"M"),r}function LT(t,n){var r;return t.isValid()&&n.isValid()?(n=i7(n,t),t.isBefore(n)?r=Ri(t,n):(r=Ri(n,t),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function su(t,n){return function(r,s){var o,l;return s!==null&&!isNaN(+s)&&(No(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),l=r,r=s,s=l),o=ot(r,s),ou(this,o,t),this}}function ou(t,n,r,s){var o=n._milliseconds,l=_8(n._days),a=_8(n._months);t.isValid()&&(s=s??!0,a&&Wo(t,d4(t,"Month")+a*r),l&&Yo(t,"Date",d4(t,"Date")+l*r),o&&t._d.setTime(t._d.valueOf()+o*r),s&&n0.updateOffset(t,l||a))}var OT=su(1,"add"),ET=su(-1,"subtract");function uu(t){return typeof t=="string"||t instanceof String}function NT(t){return st(t)||S4(t)||uu(t)||Wt(t)||BT(t)||RT(t)||t===null||t===void 0}function RT(t){var n=Rn(t)&&!$8(t),r=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],o,l,a=s.length;for(o=0;o<a;o+=1)l=s[o],r=r||l2(t,l);return n&&r}function BT(t){var n=it(t),r=!1;return n&&(r=t.filter(function(s){return!Wt(s)&&uu(t)}).length===0),n&&r}function IT(t){var n=Rn(t)&&!$8(t),r=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],o,l;for(o=0;o<s.length;o+=1)l=s[o],r=r||l2(t,l);return n&&r}function HT(t,n){var r=t.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function GT(t,n){arguments.length===1&&(arguments[0]?NT(arguments[0])?(t=arguments[0],n=void 0):IT(arguments[0])&&(n=arguments[0],t=void 0):(t=void 0,n=void 0));var r=t||E2(),s=i7(r,this).startOf("day"),o=n0.calendarFormat(this,s)||"sameElse",l=n&&(Tt(n[o])?n[o].call(this,r):n[o]);return this.format(l||this.localeData().calendar(o,this,E2(r)))}function $T(){return new b4(this)}function YT(t,n){var r=st(t)?t:E2(t);return this.isValid()&&r.isValid()?(n=Z1(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function VT(t,n){var r=st(t)?t:E2(t);return this.isValid()&&r.isValid()?(n=Z1(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function FT(t,n,r,s){var o=st(t)?t:E2(t),l=st(n)?n:E2(n);return this.isValid()&&o.isValid()&&l.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(o,r):!this.isBefore(o,r))&&(s[1]===")"?this.isBefore(l,r):!this.isAfter(l,r))):!1}function WT(t,n){var r=st(t)?t:E2(t),s;return this.isValid()&&r.isValid()?(n=Z1(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(s=r.valueOf(),this.clone().startOf(n).valueOf()<=s&&s<=this.clone().endOf(n).valueOf())):!1}function UT(t,n){return this.isSame(t,n)||this.isAfter(t,n)}function qT(t,n){return this.isSame(t,n)||this.isBefore(t,n)}function KT(t,n,r){var s,o,l;if(!this.isValid())return NaN;if(s=i7(t,this),!s.isValid())return NaN;switch(o=(s.utcOffset()-this.utcOffset())*6e4,n=Z1(n),n){case"year":l=O5(this,s)/12;break;case"month":l=O5(this,s);break;case"quarter":l=O5(this,s)/3;break;case"second":l=(this-s)/1e3;break;case"minute":l=(this-s)/6e4;break;case"hour":l=(this-s)/36e5;break;case"day":l=(this-s-o)/864e5;break;case"week":l=(this-s-o)/6048e5;break;default:l=this-s}return r?l:q1(l)}function O5(t,n){if(t.date()<n.date())return-O5(n,t);var r=(n.year()-t.year())*12+(n.month()-t.month()),s=t.clone().add(r,"months"),o,l;return n-s<0?(o=t.clone().add(r-1,"months"),l=(n-s)/(s-o)):(o=t.clone().add(r+1,"months"),l=(n-s)/(o-s)),-(r+l)||0}n0.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";n0.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function jT(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function zT(t){if(!this.isValid())return null;var n=t!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?D5(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Tt(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",D5(r,"Z")):D5(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ZT(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",n="",r,s,o,l;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+t+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o="-MM-DD[T]HH:mm:ss.SSS",l=n+'[")]',this.format(r+s+o+l)}function JT(t){t||(t=this.isUtc()?n0.defaultFormatUtc:n0.defaultFormat);var n=D5(this,t);return this.localeData().postformat(n)}function XT(t,n){return this.isValid()&&(st(t)&&t.isValid()||E2(t).isValid())?ot({to:this,from:t}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function QT(t){return this.from(E2(),t)}function tx(t,n){return this.isValid()&&(st(t)&&t.isValid()||E2(t).isValid())?ot({from:this,to:t}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function nx(t){return this.to(E2(),t)}function lu(t){var n;return t===void 0?this._locale._abbr:(n=qt(t),n!=null&&(this._locale=n),this)}var au=z1("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function cu(){return this._locale}var W5=1e3,g3=60*W5,U5=60*g3,fu=(365*400+97)*24*U5;function p3(t,n){return(t%n+n)%n}function hu(t,n,r){return t<100&&t>=0?new Date(t+400,n,r)-fu:new Date(t,n,r).valueOf()}function _u(t,n,r){return t<100&&t>=0?Date.UTC(t+400,n,r)-fu:Date.UTC(t,n,r)}function ex(t){var n,r;if(t=Z1(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?_u:hu,t){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=p3(n+(this._isUTC?0:this.utcOffset()*g3),U5);break;case"minute":n=this._d.valueOf(),n-=p3(n,g3);break;case"second":n=this._d.valueOf(),n-=p3(n,W5);break}return this._d.setTime(n),n0.updateOffset(this,!0),this}function rx(t){var n,r;if(t=Z1(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?_u:hu,t){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=U5-p3(n+(this._isUTC?0:this.utcOffset()*g3),U5)-1;break;case"minute":n=this._d.valueOf(),n+=g3-p3(n,g3)-1;break;case"second":n=this._d.valueOf(),n+=W5-p3(n,W5)-1;break}return this._d.setTime(n),n0.updateOffset(this,!0),this}function ix(){return this._d.valueOf()-(this._offset||0)*6e4}function sx(){return Math.floor(this.valueOf()/1e3)}function ox(){return new Date(this.valueOf())}function ux(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function lx(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function ax(){return this.isValid()?this.toISOString():null}function cx(){return Y8(this)}function fx(){return fn({},W0(this))}function hx(){return W0(this).overflow}function _x(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}D0("N",0,0,"eraAbbr");D0("NN",0,0,"eraAbbr");D0("NNN",0,0,"eraAbbr");D0("NNNN",0,0,"eraName");D0("NNNNN",0,0,"eraNarrow");D0("y",["y",1],"yo","eraYear");D0("y",["yy",2],0,"eraYear");D0("y",["yyy",3],0,"eraYear");D0("y",["yyyy",4],0,"eraYear");x0("N",s7);x0("NN",s7);x0("NNN",s7);x0("NNNN",bx);x0("NNNNN",Mx);x2(["N","NN","NNN","NNNN","NNNNN"],function(t,n,r,s){var o=r._locale.erasParse(t,s,r._strict);o?W0(r).era=o:W0(r).invalidEra=t});x0("y",w3);x0("yy",w3);x0("yyy",w3);x0("yyyy",w3);x0("yo",kx);x2(["y","yy","yyy","yyyy"],f1);x2(["yo"],function(t,n,r,s){var o;r._locale._eraYearOrdinalRegex&&(o=t.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[f1]=r._locale.eraYearOrdinalParse(t,o):n[f1]=parseInt(t,10)});function dx(t,n){var r,s,o,l=this._eras||qt("en")._eras;for(r=0,s=l.length;r<s;++r){switch(typeof l[r].since){case"string":o=n0(l[r].since).startOf("day"),l[r].since=o.valueOf();break}switch(typeof l[r].until){case"undefined":l[r].until=1/0;break;case"string":o=n0(l[r].until).startOf("day").valueOf(),l[r].until=o.valueOf();break}}return l}function gx(t,n,r){var s,o,l=this.eras(),a,f,h;for(t=t.toUpperCase(),s=0,o=l.length;s<o;++s)if(a=l[s].name.toUpperCase(),f=l[s].abbr.toUpperCase(),h=l[s].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(f===t)return l[s];break;case"NNNN":if(a===t)return l[s];break;case"NNNNN":if(h===t)return l[s];break}else if([a,f,h].indexOf(t)>=0)return l[s]}function px(t,n){var r=t.since<=t.until?1:-1;return n===void 0?n0(t.since).year():n0(t.since).year()+(n-t.offset)*r}function mx(){var t,n,r,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(r=this.clone().startOf("day").valueOf(),s[t].since<=r&&r<=s[t].until||s[t].until<=r&&r<=s[t].since)return s[t].name;return""}function vx(){var t,n,r,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(r=this.clone().startOf("day").valueOf(),s[t].since<=r&&r<=s[t].until||s[t].until<=r&&r<=s[t].since)return s[t].narrow;return""}function yx(){var t,n,r,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(r=this.clone().startOf("day").valueOf(),s[t].since<=r&&r<=s[t].until||s[t].until<=r&&r<=s[t].since)return s[t].abbr;return""}function Tx(){var t,n,r,s,o=this.localeData().eras();for(t=0,n=o.length;t<n;++t)if(r=o[t].since<=o[t].until?1:-1,s=this.clone().startOf("day").valueOf(),o[t].since<=s&&s<=o[t].until||o[t].until<=s&&s<=o[t].since)return(this.year()-n0(o[t].since).year())*r+o[t].offset;return this.year()}function xx(t){return l2(this,"_erasNameRegex")||o7.call(this),t?this._erasNameRegex:this._erasRegex}function wx(t){return l2(this,"_erasAbbrRegex")||o7.call(this),t?this._erasAbbrRegex:this._erasRegex}function Sx(t){return l2(this,"_erasNarrowRegex")||o7.call(this),t?this._erasNarrowRegex:this._erasRegex}function s7(t,n){return n.erasAbbrRegex(t)}function bx(t,n){return n.erasNameRegex(t)}function Mx(t,n){return n.erasNarrowRegex(t)}function kx(t,n){return n._eraYearOrdinalRegex||w3}function o7(){var t=[],n=[],r=[],s=[],o,l,a,f,h,p=this.eras();for(o=0,l=p.length;o<l;++o)a=Vt(p[o].name),f=Vt(p[o].abbr),h=Vt(p[o].narrow),n.push(a),t.push(f),r.push(h),s.push(a),s.push(f),s.push(h);this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}D0(0,["gg",2],0,function(){return this.weekYear()%100});D0(0,["GG",2],0,function(){return this.isoWeekYear()%100});function d6(t,n){D0(0,[t,t.length],0,n)}d6("gggg","weekYear");d6("ggggg","weekYear");d6("GGGG","isoWeekYear");d6("GGGGG","isoWeekYear");x0("G",a6);x0("g",a6);x0("GG",N2,B1);x0("gg",N2,B1);x0("GGGG",K8,q8);x0("gggg",K8,q8);x0("GGGGG",l6,o6);x0("ggggg",l6,o6);k4(["gggg","ggggg","GGGG","GGGGG"],function(t,n,r,s){n[s.substr(0,2)]=e2(t)});k4(["gg","GG"],function(t,n,r,s){n[s]=n0.parseTwoDigitYear(t)});function Cx(t){return du.call(this,t,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Px(t){return du.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Ax(){return Ft(this.year(),1,4)}function Dx(){return Ft(this.isoWeekYear(),1,4)}function Lx(){var t=this.localeData()._week;return Ft(this.year(),t.dow,t.doy)}function Ox(){var t=this.localeData()._week;return Ft(this.weekYear(),t.dow,t.doy)}function du(t,n,r,s,o){var l;return t==null?p4(this,s,o).year:(l=Ft(t,s,o),n>l&&(n=l),Ex.call(this,t,n,r,s,o))}function Ex(t,n,r,s,o){var l=Ko(t,n,r,s,o),a=g4(l.year,0,l.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}D0("Q",0,"Qo","quarter");x0("Q",Bo);x2("Q",function(t,n){n[Ht]=(e2(t)-1)*3});function Nx(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}D0("D",["DD",2],"Do","date");x0("D",N2,S3);x0("DD",N2,B1);x0("Do",function(t,n){return t?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});x2(["D","DD"],dt);x2("Do",function(t,n){n[dt]=e2(t.match(N2)[0])});var gu=b3("Date",!0);D0("DDD",["DDDD",3],"DDDo","dayOfYear");x0("DDD",u6);x0("DDDD",Io);x2(["DDD","DDDD"],function(t,n,r){r._dayOfYear=e2(t)});function Rx(t){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?n:this.add(t-n,"d")}D0("m",["mm",2],0,"minute");x0("m",N2,j8);x0("mm",N2,B1);x2(["m","mm"],nt);var Bx=b3("Minutes",!1);D0("s",["ss",2],0,"second");x0("s",N2,j8);x0("ss",N2,B1);x2(["s","ss"],Gt);var Ix=b3("Seconds",!1);D0("S",0,0,function(){return~~(this.millisecond()/100)});D0(0,["SS",2],0,function(){return~~(this.millisecond()/10)});D0(0,["SSS",3],0,"millisecond");D0(0,["SSSS",4],0,function(){return this.millisecond()*10});D0(0,["SSSSS",5],0,function(){return this.millisecond()*100});D0(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});D0(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});D0(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});D0(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});x0("S",u6,Bo);x0("SS",u6,B1);x0("SSS",u6,Io);var hn,pu;for(hn="SSSS";hn.length<=9;hn+="S")x0(hn,w3);function Hx(t,n){n[En]=e2(("0."+t)*1e3)}for(hn="S";hn.length<=9;hn+="S")x2(hn,Hx);pu=b3("Milliseconds",!1);D0("z",0,0,"zoneAbbr");D0("zz",0,0,"zoneName");function Gx(){return this._isUTC?"UTC":""}function $x(){return this._isUTC?"Coordinated Universal Time":""}var X=b4.prototype;X.add=OT;X.calendar=GT;X.clone=$T;X.diff=KT;X.endOf=rx;X.format=JT;X.from=XT;X.fromNow=QT;X.to=tx;X.toNow=nx;X.get=Zv;X.invalidAt=hx;X.isAfter=YT;X.isBefore=VT;X.isBetween=FT;X.isSame=WT;X.isSameOrAfter=UT;X.isSameOrBefore=qT;X.isValid=cx;X.lang=au;X.locale=lu;X.localeData=cu;X.max=cT;X.min=aT;X.parsingFlags=fx;X.set=Jv;X.startOf=ex;X.subtract=ET;X.toArray=ux;X.toObject=lx;X.toDate=ox;X.toISOString=zT;X.inspect=ZT;typeof Symbol<"u"&&Symbol.for!=null&&(X[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});X.toJSON=ax;X.toString=jT;X.unix=sx;X.valueOf=ix;X.creationData=_x;X.eraName=mx;X.eraNarrow=vx;X.eraAbbr=yx;X.eraYear=Tx;X.year=$o;X.isLeapYear=zv;X.weekYear=Cx;X.isoWeekYear=Px;X.quarter=X.quarters=Nx;X.month=Uo;X.daysInMonth=oy;X.week=X.weeks=dy;X.isoWeek=X.isoWeeks=gy;X.weeksInYear=Lx;X.weeksInWeekYear=Ox;X.isoWeeksInYear=Ax;X.isoWeeksInISOWeekYear=Dx;X.date=gu;X.day=X.days=Py;X.weekday=Ay;X.isoWeekday=Dy;X.dayOfYear=Rx;X.hour=X.hours=Iy;X.minute=X.minutes=Bx;X.second=X.seconds=Ix;X.millisecond=X.milliseconds=pu;X.utcOffset=yT;X.utc=xT;X.local=wT;X.parseZone=ST;X.hasAlignedHourOffset=bT;X.isDST=MT;X.isLocal=CT;X.isUtcOffset=PT;X.isUtc=iu;X.isUTC=iu;X.zoneAbbr=Gx;X.zoneName=$x;X.dates=z1("dates accessor is deprecated. Use date instead.",gu);X.months=z1("months accessor is deprecated. Use month instead",Uo);X.years=z1("years accessor is deprecated. Use year instead",$o);X.zone=z1("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",TT);X.isDSTShifted=z1("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",kT);function Yx(t){return E2(t*1e3)}function Vx(){return E2.apply(null,arguments).parseZone()}function mu(t){return t}var a2=F8.prototype;a2.calendar=Cv;a2.longDateFormat=Lv;a2.invalidDate=Ev;a2.ordinal=Bv;a2.preparse=mu;a2.postformat=mu;a2.relativeTime=Hv;a2.pastFuture=Gv;a2.set=Mv;a2.eras=dx;a2.erasParse=gx;a2.erasConvertYear=px;a2.erasAbbrRegex=wx;a2.erasNameRegex=xx;a2.erasNarrowRegex=Sx;a2.months=ey;a2.monthsShort=ry;a2.monthsParse=sy;a2.monthsRegex=ly;a2.monthsShortRegex=uy;a2.week=cy;a2.firstDayOfYear=_y;a2.firstDayOfWeek=hy;a2.weekdays=Sy;a2.weekdaysMin=My;a2.weekdaysShort=by;a2.weekdaysParse=Cy;a2.weekdaysRegex=Ly;a2.weekdaysShortRegex=Oy;a2.weekdaysMinRegex=Ey;a2.isPM=Ry;a2.meridiem=Hy;function q5(t,n,r,s){var o=qt(),l=yt().set(s,n);return o[r](l,t)}function vu(t,n,r){if(Wt(t)&&(n=t,t=void 0),t=t||"",n!=null)return q5(t,n,r,"month");var s,o=[];for(s=0;s<12;s++)o[s]=q5(t,s,r,"month");return o}function u7(t,n,r,s){typeof t=="boolean"?(Wt(n)&&(r=n,n=void 0),n=n||""):(n=t,r=n,t=!1,Wt(n)&&(r=n,n=void 0),n=n||"");var o=qt(),l=t?o._week.dow:0,a,f=[];if(r!=null)return q5(n,(r+l)%7,s,"day");for(a=0;a<7;a++)f[a]=q5(n,(a+l)%7,s,"day");return f}function Fx(t,n){return vu(t,n,"months")}function Wx(t,n){return vu(t,n,"monthsShort")}function Ux(t,n,r){return u7(t,n,r,"weekdays")}function qx(t,n,r){return u7(t,n,r,"weekdaysShort")}function Kx(t,n,r){return u7(t,n,r,"weekdaysMin")}dn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var n=t%10,r=e2(t%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return t+r}});n0.lang=z1("moment.lang is deprecated. Use moment.locale instead.",dn);n0.langData=z1("moment.langData is deprecated. Use moment.localeData instead.",qt);var Ot=Math.abs;function jx(){var t=this._data;return this._milliseconds=Ot(this._milliseconds),this._days=Ot(this._days),this._months=Ot(this._months),t.milliseconds=Ot(t.milliseconds),t.seconds=Ot(t.seconds),t.minutes=Ot(t.minutes),t.hours=Ot(t.hours),t.months=Ot(t.months),t.years=Ot(t.years),this}function yu(t,n,r,s){var o=ot(n,r);return t._milliseconds+=s*o._milliseconds,t._days+=s*o._days,t._months+=s*o._months,t._bubble()}function zx(t,n){return yu(this,t,n,1)}function Zx(t,n){return yu(this,t,n,-1)}function Bi(t){return t<0?Math.floor(t):Math.ceil(t)}function Jx(){var t=this._milliseconds,n=this._days,r=this._months,s=this._data,o,l,a,f,h;return t>=0&&n>=0&&r>=0||t<=0&&n<=0&&r<=0||(t+=Bi(g8(r)+n)*864e5,n=0,r=0),s.milliseconds=t%1e3,o=q1(t/1e3),s.seconds=o%60,l=q1(o/60),s.minutes=l%60,a=q1(l/60),s.hours=a%24,n+=q1(a/24),h=q1(Tu(n)),r+=h,n-=Bi(g8(h)),f=q1(r/12),r%=12,s.days=n,s.months=r,s.years=f,this}function Tu(t){return t*4800/146097}function g8(t){return t*146097/4800}function Xx(t){if(!this.isValid())return NaN;var n,r,s=this._milliseconds;if(t=Z1(t),t==="month"||t==="quarter"||t==="year")switch(n=this._days+s/864e5,r=this._months+Tu(n),t){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(g8(this._months)),t){case"week":return n/7+s/6048e5;case"day":return n+s/864e5;case"hour":return n*24+s/36e5;case"minute":return n*1440+s/6e4;case"second":return n*86400+s/1e3;case"millisecond":return Math.floor(n*864e5)+s;default:throw new Error("Unknown unit "+t)}}function Kt(t){return function(){return this.as(t)}}var xu=Kt("ms"),Qx=Kt("s"),tw=Kt("m"),nw=Kt("h"),ew=Kt("d"),rw=Kt("w"),iw=Kt("M"),sw=Kt("Q"),ow=Kt("y"),uw=xu;function lw(){return ot(this)}function aw(t){return t=Z1(t),this.isValid()?this[t+"s"]():NaN}function Gn(t){return function(){return this.isValid()?this._data[t]:NaN}}var cw=Gn("milliseconds"),fw=Gn("seconds"),hw=Gn("minutes"),_w=Gn("hours"),dw=Gn("days"),gw=Gn("months"),pw=Gn("years");function mw(){return q1(this.days()/7)}var Rt=Math.round,l3={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function vw(t,n,r,s,o){return o.relativeTime(n||1,!!r,t,s)}function yw(t,n,r,s){var o=ot(t).abs(),l=Rt(o.as("s")),a=Rt(o.as("m")),f=Rt(o.as("h")),h=Rt(o.as("d")),p=Rt(o.as("M")),v=Rt(o.as("w")),y=Rt(o.as("y")),S=l<=r.ss&&["s",l]||l<r.s&&["ss",l]||a<=1&&["m"]||a<r.m&&["mm",a]||f<=1&&["h"]||f<r.h&&["hh",f]||h<=1&&["d"]||h<r.d&&["dd",h];return r.w!=null&&(S=S||v<=1&&["w"]||v<r.w&&["ww",v]),S=S||p<=1&&["M"]||p<r.M&&["MM",p]||y<=1&&["y"]||["yy",y],S[2]=n,S[3]=+t>0,S[4]=s,vw.apply(null,S)}function Tw(t){return t===void 0?Rt:typeof t=="function"?(Rt=t,!0):!1}function xw(t,n){return l3[t]===void 0?!1:n===void 0?l3[t]:(l3[t]=n,t==="s"&&(l3.ss=n-1),!0)}function ww(t,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,s=l3,o,l;return typeof t=="object"&&(n=t,t=!1),typeof t=="boolean"&&(r=t),typeof n=="object"&&(s=Object.assign({},l3,n),n.s!=null&&n.ss==null&&(s.ss=n.s-1)),o=this.localeData(),l=yw(this,!r,s,o),r&&(l=o.pastFuture(+this,l)),o.postformat(l)}var We=Math.abs;function e3(t){return(t>0)-(t<0)||+t}function g6(){if(!this.isValid())return this.localeData().invalidDate();var t=We(this._milliseconds)/1e3,n=We(this._days),r=We(this._months),s,o,l,a,f=this.asSeconds(),h,p,v,y;return f?(s=q1(t/60),o=q1(s/60),t%=60,s%=60,l=q1(r/12),r%=12,a=t?t.toFixed(3).replace(/\.?0+$/,""):"",h=f<0?"-":"",p=e3(this._months)!==e3(f)?"-":"",v=e3(this._days)!==e3(f)?"-":"",y=e3(this._milliseconds)!==e3(f)?"-":"",h+"P"+(l?p+l+"Y":"")+(r?p+r+"M":"")+(n?v+n+"D":"")+(o||s||t?"T":"")+(o?y+o+"H":"")+(s?y+s+"M":"")+(t?y+a+"S":"")):"P0D"}var o2=_6.prototype;o2.isValid=gT;o2.abs=jx;o2.add=zx;o2.subtract=Zx;o2.as=Xx;o2.asMilliseconds=xu;o2.asSeconds=Qx;o2.asMinutes=tw;o2.asHours=nw;o2.asDays=ew;o2.asWeeks=rw;o2.asMonths=iw;o2.asQuarters=sw;o2.asYears=ow;o2.valueOf=uw;o2._bubble=Jx;o2.clone=lw;o2.get=aw;o2.milliseconds=cw;o2.seconds=fw;o2.minutes=hw;o2.hours=_w;o2.days=dw;o2.weeks=mw;o2.months=gw;o2.years=pw;o2.humanize=ww;o2.toISOString=g6;o2.toString=g6;o2.toJSON=g6;o2.locale=lu;o2.localeData=cu;o2.toIsoString=z1("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",g6);o2.lang=au;D0("X",0,0,"unix");D0("x",0,0,"valueOf");x0("x",a6);x0("X",Fv);x2("X",function(t,n,r){r._d=new Date(parseFloat(t)*1e3)});x2("x",function(t,n,r){r._d=new Date(e2(t))});//! moment.js
n0.version="2.30.1";Sv(E2);n0.fn=X;n0.min=fT;n0.max=hT;n0.now=_T;n0.utc=yt;n0.unix=Yx;n0.months=Fx;n0.isDate=S4;n0.locale=dn;n0.invalid=s6;n0.duration=ot;n0.isMoment=st;n0.weekdays=Ux;n0.parseZone=Vx;n0.localeData=qt;n0.isDuration=L5;n0.monthsShort=Wx;n0.weekdaysMin=Kx;n0.defineLocale=Q8;n0.updateLocale=Vy;n0.locales=Fy;n0.weekdaysShort=qx;n0.normalizeUnits=Z1;n0.relativeTimeRounding=Tw;n0.relativeTimeThreshold=xw;n0.calendarFormat=HT;n0.prototype=X;n0.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Sw=`20/10/2026	01413	
132023305055 |45
17/10/2026	01412	
011011121637 |48
15/10/2026	01411	
072325424551 |04
13/10/2026	01410	
021427405053 |26
10/10/2026	01409	
141721232439 |30
08/10/2026	01408	
010712273152 |06
06/10/2026	01407	
060718202427 |01
03/10/2026	01406	
071113161854 |41
01/10/2026	01405	
040513345255 |15
29/09/2026	01404	
020413173536 |11
26/09/2026	01403	
141821384852 |49
24/09/2026	01402	
011323252628 |27
22/09/2026	01401	
010309114146 |10
19/09/2026	01400	
040711182225 |50
17/09/2026	01399	
061125273745 |15
15/09/2026	01398	
242732363847 |52
12/09/2026	01397	
072431434754 |22
10/09/2026	01396	
020528325153 |50
08/09/2026	01395	
081114232554 |17
05/09/2026	01394	
091124313347 |21
03/09/2026	01393	
080916424647 |11
01/09/2026	01392	
011741444955 |45
29/08/2026	01391	
051015293445 |24
27/08/2026	01390	
010311212644 |10
25/08/2026	01389	
050713183140 |14
22/08/2026	01388	
091819212536 |08
20/08/2026	01387	
020829383951 |47
18/08/2026	01386	
031518384148 |30
15/08/2026	01385	
162025273050 |02
13/08/2026	01384	
050927294546 |42
11/08/2026	01383	
020719203950 |31
08/08/2026	01382	
052933384045 |37
06/08/2026	01381	
141823355155 |01
04/08/2026	01380	
143940424754 |31
01/08/2026	01379	
111416444955 |39
30/07/2026	01378	
021224284349 |51
28/07/2026	01377	
072223274144 |48
25/07/2026	01376	
050927333750 |48
23/07/2026	01375	
010308384055 |36
21/07/2026	01374	
081122243239 |13
18/07/2026	01373	
224145485455 |16
16/07/2026	01372	
192033454853 |21
14/07/2026	01371	
102430354551 |33
11/07/2026	01370	
091720334142 |40
09/07/2026	01369	
020910141749 |45
07/07/2026	01368	
040625323344 |08
04/07/2026	01367	
131518233143 |41
02/07/2026	01366	
051128344142 |49
30/06/2026	01365	
051318224344 |47
27/06/2026	01364	
071621232852 |54
25/06/2026	01363	
010308153555 |23
23/06/2026	01362	
011328384046 |05
20/06/2026	01361	
162326305253 |46
18/06/2026	01360	
010414204649 |36
16/06/2026	01359	
020405073140 |14
13/06/2026	01358	
020819333647 |42
11/06/2026	01357	
010817244048 |46
09/06/2026	01356	
060818273234 |35
06/06/2026	01355	
031116373941 |28
04/06/2026	01354	
232428293943 |45
02/06/2026	01353	
010305163751 |42
30/05/2026	01352	
020820242542 |44
28/05/2026	01351	
081121253153 |54
26/05/2026	01350	
011415192334 |29
23/05/2026	01349	
172122273849 |03
21/05/2026	01348	
161820283234 |40
19/05/2026	01347	
123940454853 |21
16/05/2026	01346	
082532363947 |50
14/05/2026	01345	
262839414855 |50
12/05/2026	01344	
021122263138 |15
09/05/2026	01343	
031032374555 |46
07/05/2026	01342	
131433444650 |47
05/05/2026	01341	
040608173050 |32
02/05/2026	01340	
092122263351 |17
30/04/2026	01339	
091521252950 |16
28/04/2026	01338	
242534515253 |35
25/04/2026	01337	
040710294146 |43
23/04/2026	01336	
051617223353 |55
21/04/2026	01335	
083036395053 |15
18/04/2026	01334	
091920283739 |24
16/04/2026	01333	
020715224752 |55
14/04/2026	01332	
081622353947 |28
11/04/2026	01331	
132629384953 |07
09/04/2026	01330	
161822294153 |38
07/04/2026	01329	
011323314453 |32
04/04/2026	01328	
050710233054 |40
02/04/2026	01327	
092132345253 |22
31/03/2026	01326	
151622384348 |11
28/03/2026	01325	
071321303342 |39
26/03/2026	01324	
030910343844 |51
24/03/2026	01323	
121925263245 |03
21/03/2026	01322	
010640434753 |03
19/03/2026	01321	
070917313436 |55
17/03/2026	01320	
122628435054 |52
14/03/2026	01319	
071627294752 |26
12/03/2026	01318	
122836405355 |54
10/03/2026	01317	
032631394754 |20
07/03/2026	01316	
043241455052 |29
05/03/2026	01315	
141635384351 |37
03/03/2026	01314	
071327294350 |25
28/02/2026	01313	
222531445154 |36
26/02/2026	01312	
010710214451 |46
24/02/2026	01311	
050818303954 |51
21/02/2026	01310	
050726304145 |12
19/02/2026	01309	
012730434546 |48
14/02/2026	01308	
021326323642 |48
12/02/2026	01307	
081719313246 |26
10/02/2026	01306	
132122263255 |20
07/02/2026	01305	
030513152946 |01
05/02/2026	01304	
071316252655 |09
03/02/2026	01303	
121518224853 |45
31/01/2026	01302	
101114174953 |04
29/01/2026	01301	
111522323454 |28
27/01/2026	01300	
132232425354 |29
24/01/2026	01299	
142425303553 |18
22/01/2026	01298	
022021293650 |05
20/01/2026	01297	
042026283741 |32
17/01/2026	01296	
142123254648 |54
15/01/2026	01295	
132131344855 |27
13/01/2026	01294	
031225515255 |43
10/01/2026	01293	
091630333438 |49
08/01/2026	01292	
202236434550 |47
06/01/2026	01291	
222829303447 |20
03/01/2026	01290	
101617233336 |42
01/01/2026	01289	
051629333942 |54
30/12/2025	01288	
113035414855 |38
27/12/2025	01287	
162130373940 |13
25/12/2025	01286	
040632374048 |38
23/12/2025	01285	
021016253238 |03
20/12/2025	01284	
223233354041 |23
18/12/2025	01283	
121429303955 |50
16/12/2025	01282	
073637385255 |46
13/12/2025	01281	
050812182038 |52
11/12/2025	01280	
091321454855 |38
09/12/2025	01279	
142126273143 |42
06/12/2025	01278	
122634375052 |15
04/12/2025	01277	
102932334453 |14
02/12/2025	01276	
162024365154 |10
29/11/2025	01275	
042024274048 |09
27/11/2025	01274	
040510112835 |38
25/11/2025	01273	
233132424648 |04
22/11/2025	01272	
081019293446 |14
20/11/2025	01271	
031219203142 |13
18/11/2025	01270	
071218223049 |05
15/11/2025	01269	
023033354254 |45
13/11/2025	01268	
011530384043 |13
11/11/2025	01267	
112028414754 |31
08/11/2025	01266	
141619222744 |18
06/11/2025	01265	
162029333649 |06
04/11/2025	01264	
152729313643 |38
01/11/2025	01263	
071128293133 |08
30/10/2025	01262	
202335414755 |37
28/10/2025	01261	
060810222554 |09
25/10/2025	01260	
030511132427 |45
23/10/2025	01259	
081021484950 |40
21/10/2025	01258	
031112142240 |41
18/10/2025	01257	
051619213843 |50
16/10/2025	01256	
141524262745 |36
14/10/2025	01255	
080916263755 |12
11/10/2025	01254	
030726434446 |25
09/10/2025	01253	
071121223942 |40
07/10/2025	01252	
192235374345 |29
04/10/2025	01251	
223335363840 |07
02/10/2025	01250	
010220242742 |43
30/09/2025	01249	
172334394652 |08
27/09/2025	01248	
081319243946 |01
25/09/2025	01247	
051730313853 |08
23/09/2025	01246	
081819344146 |38
20/09/2025	01245	
081314193643 |30
18/09/2025	01244	
020308273855 |20
16/09/2025	01243	
171928394353 |33
13/09/2025	01242	
020715182427 |45
11/09/2025	01241	
061646495155 |42
09/09/2025	01240	
162021314052 |02
06/09/2025	01239	
091119223443 |31
04/09/2025	01238	
091923424953 |40
02/09/2025	01237	
091622253051 |43
30/08/2025	01236	
021719243044 |34
28/08/2025	01235	
061328303552 |50
26/08/2025	01234	
223038444855 |05
23/08/2025	01233	
010926344450 |52
21/08/2025	01232	
050917354041 |44
19/08/2025	01231	
011431343647 |45
16/08/2025	01230	
142332364748 |05
14/08/2025	01229	
061017183235 |53
12/08/2025	01228	
010624374055 |10
09/08/2025	01227	
050916364351 |19
07/08/2025	01226	
062431323948 |52
05/08/2025	01225	
084145515253 |31
02/08/2025	01224	
122429333435 |47
31/07/2025	01223	
051731424649 |37
29/07/2025	01222	
040823434551 |48
26/07/2025	01221	
052628293354 |34
24/07/2025	01220	
051024293034 |45
22/07/2025	01219	
091015283344 |22
19/07/2025	01218	
080920363944 |28
17/07/2025	01217	
131833404853 |54
15/07/2025	01216	
182631323648 |30
12/07/2025	01215	
023439414552 |51
10/07/2025	01214	
123334424453 |03
08/07/2025	01213	
232432424850 |31
05/07/2025	01212	
031522455155 |54
03/07/2025	01211	
181929314554 |27
01/07/2025	01210	
031112142733 |15
28/06/2025	01209	
081113204550 |25
26/06/2025	01208	
011416274051 |02
24/06/2025	01207	
030918203053 |48
21/06/2025	01206	
061015434453 |32
19/06/2025	01205	
030509101647 |34
17/06/2025	01204	
071318223244 |43
14/06/2025	01203	
111222264147 |24
12/06/2025	01202	
060816183444 |17
10/06/2025	01201	
030621294041 |37
07/06/2025	01200	
121721464852 |45
05/06/2025	01199	
142133374649 |34
03/06/2025	01198	
021114162738 |51
31/05/2025	01197	
062441454955 |08
29/05/2025	01196	
093742454650 |14
27/05/2025	01195	
041218194448 |42
24/05/2025	01194	
192027304555 |15
22/05/2025	01193	
030914414755 |22
20/05/2025	01192	
192744454752 |15
17/05/2025	01191	
020726294150 |43
15/05/2025	01190	
060913444954 |47
13/05/2025	01189	
030724395455 |42
10/05/2025	01188	
071619283451 |15
08/05/2025	01187	
081429373950 |21
06/05/2025	01186	
121625283039 |05
03/05/2025	01185	
151921264247 |38
01/05/2025	01184	
031719414550 |43
29/04/2025	01183	
141518232833 |29
26/04/2025	01182	
031516314852 |21
24/04/2025	01181	
010215394047 |24
22/04/2025	01180	
102537404148 |32
19/04/2025	01179	
051115324249 |43
17/04/2025	01178	
011720384152 |14
15/04/2025	01177	
082324274249 |20
12/04/2025	01176	
031419374255 |23
10/04/2025	01175	
101336374043 |41
08/04/2025	01174	
030734414353 |31
05/04/2025	01173	
132329324142 |09
03/04/2025	01172	
242634425051 |30
01/04/2025	01171	
141529333947 |04
29/03/2025	01170	
141921242648 |39
27/03/2025	01169	
132532364153 |29
25/03/2025	01168	
142329303540 |17
22/03/2025	01167	
022342505254 |44
20/03/2025	01166	
111324283641 |37
18/03/2025	01165	
020829305055 |27
15/03/2025	01164	
013439404250 |25
13/03/2025	01163	
071321435253 |17
11/03/2025	01162	
011618303144 |34
08/03/2025	01161	
103841434548 |08
06/03/2025	01160	
051021264351 |15
04/03/2025	01159	
051427434553 |47
01/03/2025	01158	
151734373945 |41
27/02/2025	01157	
050921314353 |11
25/02/2025	01156	
010711242930 |48
22/02/2025	01155	
010207222346 |50
20/02/2025	01154	
131720273654 |47
18/02/2025	01153	
121330384047 |42
15/02/2025	01152	
223738475155 |31
13/02/2025	01151	
020823264247 |07
11/02/2025	01150	
010918213540 |44
08/02/2025	01149	
112228444849 |23
06/02/2025	01148	
011131434854 |19
04/02/2025	01147	
071729515255 |41
01/02/2025	01146	
012034384547 |49
30/01/2025	01145	
050824283452 |39
25/01/2025	01144	
142140424851 |19
23/01/2025	01143	
111822495051 |37
21/01/2025	01142	
111822285152 |53
18/01/2025	01141	
010326313741 |51
16/01/2025	01140	
081634374750 |23
14/01/2025	01139	
031112243340 |46
11/01/2025	01138	
102526293746 |14
09/01/2025	01137	
182131395053 |13
07/01/2025	01136	
040509162239 |30
04/01/2025	01135	
041030364053 |51
02/01/2025	01134	
041018224145 |50
31/12/2024	01133	
081329364243 |28
28/12/2024	01132	
061936425355 |39
26/12/2024	01131	
061833384148 |16
24/12/2024	01130	
172027324451 |33
21/12/2024	01129	
041629303551 |48
19/12/2024	01128	
131632394951 |11
17/12/2024	01127	
021427305354 |16
14/12/2024	01126	
031019202124 |07
12/12/2024	01125	
010912183744 |11
10/12/2024	01124	
111526455255 |36
07/12/2024	01123	
161722242937 |54
05/12/2024	01122	
162129414247 |09
03/12/2024	01121	
101933394754 |16
30/11/2024	01120	
012024263841 |36
28/11/2024	01119	
011624283853 |09
26/11/2024	01118	
081116324043 |12
23/11/2024	01117	
041225394851 |45
21/11/2024	01116	
152231404251 |26
19/11/2024	01115	
061017344148 |31
16/11/2024	01114	
162233373951 |54
14/11/2024	01113	
122537404952 |31
12/11/2024	01112	
012129354145 |20
09/11/2024	01111	
111424263451 |40
07/11/2024	01110	
060933395051 |43
05/11/2024	01109	
093136464954 |07
02/11/2024	01108	
020919203454 |26
31/10/2024	01107	
051620293031 |39
29/10/2024	01106	
141719284751 |55
26/10/2024	01105	
051927294247 |40
24/10/2024	01104	
051731394653 |03
22/10/2024	01103	
152123263143 |35
19/10/2024	01102	
092231394351 |19
17/10/2024	01101	
111415263841 |25
15/10/2024	01100	
042541424652 |33
12/10/2024	01099	
293435385051 |37
10/10/2024	01098	
040506293244 |53
08/10/2024	01097	
030714174850 |40
05/10/2024	01096	
021017275052 |18
03/10/2024	01095	
182134404253 |25
01/10/2024	01094	
031822414344 |12
28/09/2024	01093	
021113324148 |15
26/09/2024	01092	
031829394149 |46
24/09/2024	01091	
010611172431 |43
21/09/2024	01090	
030809222655 |11
19/09/2024	01089	
040922244554 |48
17/09/2024	01088	
143234414754 |48
14/09/2024	01087	
021225325154 |34
12/09/2024	01086	
030831363947 |38
10/09/2024	01085	
152337384549 |30
07/09/2024	01084	
051120394653 |37
05/09/2024	01083	
152023293446 |01
03/09/2024	01082	
081011143848 |41
31/08/2024	01081	
243338404251 |28
29/08/2024	01080	
081121293855 |12
27/08/2024	01079	
050629313748 |02
24/08/2024	01078	
021720212223 |38
22/08/2024	01077	
111820324146 |33
20/08/2024	01076	
052426272954 |06
17/08/2024	01075	
042835383945 |05
15/08/2024	01074	
081620303443 |46
13/08/2024	01073	
092640444550 |27
10/08/2024	01072	
102332374855 |14
08/08/2024	01071	
010742434851 |29
06/08/2024	01070	
223444465455 |14
03/08/2024	01069	
072034364146 |16
01/08/2024	01068	
091721485355 |29
30/07/2024	01067	
020622233851 |32
27/07/2024	01066	
182325373940 |35
25/07/2024	01065	
121721253340 |39
23/07/2024	01064	
343940425455 |30
20/07/2024	01063	
121832405153 |28
18/07/2024	01062	
101328354042 |02
16/07/2024	01061	
203134364752 |02
13/07/2024	01060	
021213334452 |34
11/07/2024	01059	
010211212223 |26
09/07/2024	01058	
060809283353 |10
06/07/2024	01057	
081012222555 |52
04/07/2024	01056	
101920293441 |08
02/07/2024	01055	
070850525354 |02
29/06/2024	01054	
111532344648 |47
27/06/2024	01053	
072122414346 |32
25/06/2024	01052	
010509131827 |08
22/06/2024	01051	
172531354142 |36
20/06/2024	01050	
011029344355 |49
18/06/2024	01049	
202327363844 |52
15/06/2024	01048	
051014202651 |36
13/06/2024	01047	
083945474951 |16
11/06/2024	01046	
131621303239 |53
08/06/2024	01045	
131632333543 |42
06/06/2024	01044	
182638394751 |55
04/06/2024	01043	
010207101319 |24
01/06/2024	01042	
062430314749 |01
30/05/2024	01041	
040708122331 |45
28/05/2024	01040	
012529374054 |50
25/05/2024	01039	
152238394353 |20
23/05/2024	01038	
081242475152 |36
21/05/2024	01037	
010214323341 |04
18/05/2024	01036	
121820252752 |44
16/05/2024	01035	
202527394555 |44
14/05/2024	01034	
051736404650 |01
11/05/2024	01033	
192325434654 |42
09/05/2024	01032	
031621363740 |31
07/05/2024	01031	
212635414452 |13
04/05/2024	01030	
052735454955 |18
02/05/2024	01029	
303233364248 |18
30/04/2024	01028	
131626464954 |08
27/04/2024	01027	
071238434855 |08
25/04/2024	01026	
131927384154 |46
23/04/2024	01025	
013439404953 |09
20/04/2024	01024	
020635434547 |14
18/04/2024	01023	
012123334354 |28
16/04/2024	01022	
030532404650 |37
13/04/2024	01021	
293637384042 |46
11/04/2024	01020	
030615253343 |55
09/04/2024	01019	
041227444651 |22
06/04/2024	01018	
091320303954 |23
04/04/2024	01017	
030812254748 |15
02/04/2024	01016	
011218205152 |37
30/03/2024	01015	
141727385455 |23
28/03/2024	01014	
010718263849 |21
26/03/2024	01013	
010813163844 |47
23/03/2024	01012	
031013304052 |04
21/03/2024	01011	
121341484953 |43
19/03/2024	01010	
062539454655 |26
16/03/2024	01009	
083642434455 |54
14/03/2024	01008	
212526294151 |39
12/03/2024	01007	
111418202243 |16
09/03/2024	01006	
111322364649 |37
07/03/2024	01005	
132033475354 |19
05/03/2024	01004	
121921232854 |31
02/03/2024	01003	
011921315055 |37
29/02/2024	01002	
041120385253 |33
27/02/2024	01001	
010406082435 |53
24/02/2024	01000	
010322273840 |26
22/02/2024	00999	
081924313555 |01
20/02/2024	00998	
344650515255 |05
17/02/2024	00997	
081217273855 |47
15/02/2024	00996	
030708182126 |19
13/02/2024	00995	
081722313449 |18
08/02/2024	00994	
223135363842 |11
06/02/2024	00993	
081927344651 |24
03/02/2024	00992	
040607131826 |49
01/02/2024	00991	
020710223240 |39
30/01/2024	00990	
031013404952 |09
27/01/2024	00989	
061238414655 |13
25/01/2024	00988	
131735384248 |07
23/01/2024	00987	
132732484951 |23
20/01/2024	00986	
062529344954 |38
18/01/2024	00985	
122033384052 |35
16/01/2024	00984	
091418202743 |42
13/01/2024	00983	
010507233542 |21
11/01/2024	00982	
022332445152 |28
09/01/2024	00981	
163245505253 |54
06/01/2024	00980	
151721243446 |11
04/01/2024	00979	
073437435254 |28
02/01/2024	00978	
020518313745 |20
30/12/2023	00977	
091729323852 |02
28/12/2023	00976	
202830404552 |32
26/12/2023	00975	
101417272940 |25
23/12/2023	00974	
223239464849 |43
21/12/2023	00973	
093139414748 |03
19/12/2023	00972	
111415243453 |18
16/12/2023	00971	
131521263435 |45
14/12/2023	00970	
011223434852 |30
12/12/2023	00969	
060716213450 |31
09/12/2023	00968	
060926273447 |41
07/12/2023	00967	
091328335053 |47
05/12/2023	00966	
020419323539 |49
02/12/2023	00965	
011020374851 |54
30/11/2023	00964	
091321285054 |51
28/11/2023	00963	
102447485255 |28
25/11/2023	00962	
070910172553 |49
23/11/2023	00961	
040626335255 |15
21/11/2023	00960	
030716373951 |09
18/11/2023	00959	
010710142829 |02
16/11/2023	00958	
030510184449 |28
14/11/2023	00957	
040912152238 |40
11/11/2023	00956	
020304194142 |23
09/11/2023	00955	
081724343948 |44
07/11/2023	00954	
121820283552 |25
04/11/2023	00953	
143537474850 |43
02/11/2023	00952	
091517212636 |13
31/10/2023	00951	
101617283742 |43
28/10/2023	00950	
111425444647 |10
26/10/2023	00949	
142232374348 |42
24/10/2023	00948	
122026334044 |24
21/10/2023	00947	
111624344752 |15
19/10/2023	00946	
012329375155 |54
17/10/2023	00945	
132233414647 |09
14/10/2023	00944	
082330343847 |10
12/10/2023	00943	
050809203650 |35
10/10/2023	00942	
062326374446 |33
07/10/2023	00941	
041336404352 |34
05/10/2023	00940	
012133464753 |09
03/10/2023	00939	
031527293748 |55
30/09/2023	00938	
031319303844 |51
28/09/2023	00937	
042336454750 |22
26/09/2023	00936	
142024274144 |23
23/09/2023	00935	
202736434547 |35
21/09/2023	00934	
162633344143 |53
19/09/2023	00933	
172935405152 |23
16/09/2023	00932	
252742515455 |45
14/09/2023	00931	
061020225052 |34
12/09/2023	00930	
263132394555 |28
09/09/2023	00929	
132032374349 |40
07/09/2023	00928	
010436424554 |32
05/09/2023	00927	
020619293448 |39
02/09/2023	00926	
121532444651 |48
31/08/2023	00925	
233337434546 |29
29/08/2023	00924	
010820253553 |54
26/08/2023	00923	
050824385051 |47
24/08/2023	00922	
011020414250 |39
22/08/2023	00921	
020306343536 |31
19/08/2023	00920	
070913222742 |23
17/08/2023	00919	
010525325152 |54
15/08/2023	00918	
051225394053 |52
12/08/2023	00917	
132439434552 |08
10/08/2023	00916	
041431424749 |43
08/08/2023	00915	
050619204045 |47
05/08/2023	00914	
223440474951 |44
03/08/2023	00913	
031222253739 |07
01/08/2023	00912	
041822253348 |02
29/07/2023	00911	
162325262940 |32
27/07/2023	00910	
031113313345 |27
25/07/2023	00909	
122342445152 |03
22/07/2023	00908	
091523252734 |41
20/07/2023	00907	
053436384750 |26
18/07/2023	00906	
101119284247 |16
15/07/2023	00905	
021631373848 |36
13/07/2023	00904	
030430343649 |08
11/07/2023	00903	
244044464749 |05
08/07/2023	00902	
081123434448 |41
06/07/2023	00901	
071229394655 |01
04/07/2023	00900	
041314233350 |41
01/07/2023	00899	
133336384550 |25
29/06/2023	00898	
011112284654 |40
27/06/2023	00897	
021215162728 |47
24/06/2023	00896	
080916205053 |03
22/06/2023	00895	
021114354351 |55
20/06/2023	00894	
072326313553 |32
17/06/2023	00893	
071323343840 |55
15/06/2023	00892	
101125394655 |40
13/06/2023	00891	
041418274750 |33
10/06/2023	00890	
101727323541 |54
08/06/2023	00889	
033638435153 |02
06/06/2023	00888	
011423274450 |43
03/06/2023	00887	
232829363841 |07
01/06/2023	00886	
031840414647 |36
30/05/2023	00885	
011424284046 |34
27/05/2023	00884	
040608183943 |28
25/05/2023	00883	
151619313346 |07
23/05/2023	00882	
262735364754 |40
20/05/2023	00881	
011421364853 |44
18/05/2023	00880	
131421233041 |49
16/05/2023	00879	
192430344044 |51
13/05/2023	00878	
222435434554 |50
11/05/2023	00877	
010319333451 |17
09/05/2023	00876	
070913224447 |39
06/05/2023	00875	
011122283442 |10
04/05/2023	00874	
133032354552 |29
02/05/2023	00873	
041118253345 |21
29/04/2023	00872	
020912244153 |35
27/04/2023	00871	
082838394145 |54
25/04/2023	00870	
061019232528 |45
22/04/2023	00869	
091823244852 |10
20/04/2023	00868	
071132354251 |46
18/04/2023	00867	
171830405155 |50
15/04/2023	00866	
013435364243 |05
13/04/2023	00865	
222628373948 |15
11/04/2023	00864	
101416183749 |54
08/04/2023	00863	
173336465052 |40
06/04/2023	00862	
071012335254 |16
04/04/2023	00861	
132841424751 |09
01/04/2023	00860	
123439444955 |14
30/03/2023	00859	
061114213032 |22
28/03/2023	00858	
062124415053 |13
25/03/2023	00857	
171828404954 |16
23/03/2023	00856	
040722334049 |39
21/03/2023	00855	
071731434549 |52
18/03/2023	00854	
182432335153 |36
16/03/2023	00853	
062334485055 |02
14/03/2023	00852	
141518202735 |31
11/03/2023	00851	
132325303544 |08
09/03/2023	00850	
122228345354 |40
07/03/2023	00849	
082225273950 |28
04/03/2023	00848	
091323363854 |21
02/03/2023	00847	
010323244348 |31
28/02/2023	00846	
021314304355 |22
25/02/2023	00845	
010214213851 |50
23/02/2023	00844	
121629313948 |40
21/02/2023	00843	
041215213044 |05
18/02/2023	00842	
112326294350 |05
16/02/2023	00841	
010507082022 |33
14/02/2023	00840	
010933374345 |23
11/02/2023	00839	
041345485254 |05
09/02/2023	00838	
011029304950 |09
07/02/2023	00837	
062729323952 |09
04/02/2023	00836	
020608274146 |20
02/02/2023	00835	
031023293453 |11
31/01/2023	00834	
101131323852 |05
28/01/2023	00833	
092223293847 |33
26/01/2023	00832	
081518203341 |14
24/01/2023	00831	
030510122930 |09
19/01/2023	00830	
032132333852 |30
17/01/2023	00829	
010920364450 |40
14/01/2023	00828	
051724304353 |26
12/01/2023	00827	
051437454755 |25
10/01/2023	00826	
051214194651 |36
07/01/2023	00825	
030409153354 |16
05/01/2023	00824	
051234374749 |28
03/01/2023	00823	
091324434748 |18
31/12/2022	00822	
101536424552 |20
29/12/2022	00821	
060833373851 |48
27/12/2022	00820	
111213142355 |27
24/12/2022	00819	
051922233044 |52
22/12/2022	00818	
142635434548 |03
20/12/2022	00817	
020609203135 |42
17/12/2022	00816	
010229344142 |09
15/12/2022	00815	
022538505155 |21
13/12/2022	00814	
102231374152 |20
10/12/2022	00813	
021213183344 |31
08/12/2022	00812	
063036414955 |20
06/12/2022	00811	
011125444546 |35
03/12/2022	00810	
161727485253 |24
01/12/2022	00809	
111429315254 |07
29/11/2022	00808	
021316184142 |19
26/11/2022	00807	
082324484952 |01
24/11/2022	00806	
040618275253 |10
22/11/2022	00805	
030921222635 |15
19/11/2022	00804	
031522394648 |43
17/11/2022	00803	
011925273842 |54
15/11/2022	00802	
042026364751 |33
12/11/2022	00801	
081823303542 |43
10/11/2022	00800	
081114273845 |21
08/11/2022	00799	
122733444850 |18
05/11/2022	00798	
101922254753 |52
03/11/2022	00797	
081324282933 |49
01/11/2022	00796	
030920233154 |55
29/10/2022	00795	
010310131520 |32
27/10/2022	00794	
010710171930 |53
25/10/2022	00793	
081820224246 |01
22/10/2022	00792	
171935425152 |34
20/10/2022	00791	
152127343753 |29
18/10/2022	00790	
063036394446 |49
15/10/2022	00789	
081516394551 |23
13/10/2022	00788	
121343485152 |15
11/10/2022	00787	
112634404652 |01
08/10/2022	00786	
111723344151 |40
06/10/2022	00785	
060819204753 |07
04/10/2022	00784	
051112224345 |42
01/10/2022	00783	
141516222329 |20
29/09/2022	00782	
153233374254 |28
27/09/2022	00781	
111323273743 |34
24/09/2022	00780	
010405174247 |09
22/09/2022	00779	
121419294447 |26
20/09/2022	00778	
082732435354 |45
17/09/2022	00777	
050819344049 |39
15/09/2022	00776	
030819304152 |09
13/09/2022	00775	
091021404148 |54
10/09/2022	00774	
020815193538 |14
08/09/2022	00773	
091323323652 |43
06/09/2022	00772	
010527435254 |15
03/09/2022	00771	
112231334046 |41
01/09/2022	00770	
041418395053 |31
30/08/2022	00769	
021319293032 |16
27/08/2022	00768	
010507102548 |36
25/08/2022	00767	
193035404953 |42
23/08/2022	00766	
132131414445 |27
20/08/2022	00765	
061629324251 |43
18/08/2022	00764	
232731373842 |26
16/08/2022	00763	
171828475053 |11
13/08/2022	00762	
192829303336 |14
11/08/2022	00761	
011221344855 |50
09/08/2022	00760	
091036415155 |52
06/08/2022	00759	
062127415153 |43
04/08/2022	00758	
080920414854 |02
02/08/2022	00757	
020528404748 |31
30/07/2022	00756	
010424354447 |17
28/07/2022	00755	
050617282939 |34
26/07/2022	00754	
050809131447 |53
23/07/2022	00753	
272829394054 |13
21/07/2022	00752	
022033455155 |01
19/07/2022	00751	
080933343552 |36
16/07/2022	00750	
061318273446 |33
14/07/2022	00749	
112529373952 |45
12/07/2022	00748	
121324253941 |09
09/07/2022	00747	
052124475255 |20
07/07/2022	00746	
182432434855 |15
05/07/2022	00745	
050712262944 |38
02/07/2022	00744	
062639404647 |02
30/06/2022	00743	
051115192931 |35
28/06/2022	00742	
052230323855 |33
25/06/2022	00741	
141731353740 |28
23/06/2022	00740	
102223344654 |27
21/06/2022	00739	
091319213451 |35
18/06/2022	00738	
062743444547 |33
16/06/2022	00737	
091321405154 |04
14/06/2022	00736	
021526323536 |16
11/06/2022	00735	
101823254547 |38
09/06/2022	00734	
303135434850 |22
07/06/2022	00733	
161721283950 |19
04/06/2022	00732	
031727303449 |25
02/06/2022	00731	
071128303350 |49
31/05/2022	00730	
041015164751 |23
28/05/2022	00729	
333638424346 |03
26/05/2022	00728	
043032394153 |42
24/05/2022	00727	
183132465052 |28
21/05/2022	00726	
193238404548 |02
19/05/2022	00725	
030631404754 |08
17/05/2022	00724	
111725294548 |53
14/05/2022	00723	
022830434455 |22
12/05/2022	00722	
091824434450 |15
10/05/2022	00721	
121841434751 |10
07/05/2022	00720	
153233364346 |31
05/05/2022	00719	
272933394753 |55
03/05/2022	00718	
012238484953 |42
30/04/2022	00717	
112351525354 |27
28/04/2022	00716	
082425323744 |03
26/04/2022	00715	
142224254349 |17
23/04/2022	00714	
032736414955 |18
21/04/2022	00713	
212427343842 |46
19/04/2022	00712	
020713282934 |39
16/04/2022	00711	
040839415355 |52
14/04/2022	00710	
010509343745 |52
12/04/2022	00709	
111820222540 |05
09/04/2022	00708	
020319284245 |12
07/04/2022	00707	
061415252932 |41
05/04/2022	00706	
051826364344 |45
02/04/2022	00705	
323842444755 |46
31/03/2022	00704	
052434394249 |16
29/03/2022	00703	
051132354052 |31
26/03/2022	00702	
010616303455 |29
24/03/2022	00701	
050916354546 |44
22/03/2022	00700	
011418284749 |22
19/03/2022	00699	
082024375155 |27
17/03/2022	00698	
010612213749 |53
15/03/2022	00697	
061424283352 |50
12/03/2022	00696	
121618263045 |36
10/03/2022	00695	
010308161936 |41
08/03/2022	00694	
032325394748 |55
05/03/2022	00693	
051215254348 |01
03/03/2022	00692	
041016252643 |52
01/03/2022	00691	
151925425153 |02
26/02/2022	00690	
050830364951 |18
24/02/2022	00689	
021525303132 |13
22/02/2022	00688	
091619232539 |04
19/02/2022	00687	
011114334648 |40
17/02/2022	00686	
052440424654 |03
15/02/2022	00685	
050714242936 |46
12/02/2022	00684	
040812424451 |41
10/02/2022	00683	
031526354352 |07
08/02/2022	00682	
121521283240 |43
05/02/2022	00681	
011723294445 |37
03/02/2022	00680	
131822354243 |03
29/01/2022	00679	
061017232538 |21
27/01/2022	00678	
012631364046 |28
25/01/2022	00677	
021617203151 |50
22/01/2022	00676	
020616293742 |22
20/01/2022	00675	
082132344146 |48
18/01/2022	00674	
061516334143 |51
15/01/2022	00673	
202641464748 |18
13/01/2022	00672	
071217263746 |28
11/01/2022	00671	
122526283346 |22
08/01/2022	00670	
061737414850 |13
06/01/2022	00669	
040814213049 |38
04/01/2022	00668	
111722283949 |43
01/01/2022	00667	
042528323355 |03
30/12/2021	00666	
092527323746 |23
28/12/2021	00665	
030809404448 |02
25/12/2021	00664	
060823253335 |27
23/12/2021	00663	
082229434554 |23
21/12/2021	00662	
232528495254 |44
18/12/2021	00661	
040619263841 |16
16/12/2021	00660	
192430414349 |55
14/12/2021	00659	
101619243950 |29
11/12/2021	00658	
081317224251 |45
09/12/2021	00657	
031433404150 |17
07/12/2021	00656	
040622323453 |41
04/12/2021	00655	
070931323649 |37
02/12/2021	00654	
062328314448 |14
30/11/2021	00653	
122123283346 |38
27/11/2021	00652	
020507213137 |44
25/11/2021	00651	
161824293341 |43
23/11/2021	00650	
050709283855 |50
20/11/2021	00649	
061029303151 |35
18/11/2021	00648	
183032373940 |10
16/11/2021	00647	
081927344651 |02
13/11/2021	00646	
182229334648 |37
11/11/2021	00645	
033537414549 |31
09/11/2021	00644	
122526475153 |16
06/11/2021	00643	
233141484951 |03
04/11/2021	00642	
051015313250 |28
02/11/2021	00641	
373842464755 |23
30/10/2021	00640	
313640445053 |11
28/10/2021	00639	
020406133135 |16
26/10/2021	00638	
212429343953 |20
23/10/2021	00637	
051119262833 |09
21/10/2021	00636	
031932364151 |35
19/10/2021	00635	
030925294650 |18
16/10/2021	00634	
091722285055 |07
14/10/2021	00633	
092124304144 |40
12/10/2021	00632	
141731334250 |40
09/10/2021	00631	
012225383954 |19
07/10/2021	00630	
061521244555 |46
05/10/2021	00629	
111617193843 |24
02/10/2021	00628	
050622264951 |32
30/09/2021	00627	
182326324649 |54
28/09/2021	00626	
072225404950 |37
25/09/2021	00625	
072027434851 |37
23/09/2021	00624	
060721252749 |26
21/09/2021	00623	
152425404250 |49
18/09/2021	00622	
031415214752 |54
16/09/2021	00621	
101640434546 |22
14/09/2021	00620	
172230404344 |41
11/09/2021	00619	
081720363944 |30
09/09/2021	00618	
060810233944 |43
07/09/2021	00617	
193035434755 |12
04/09/2021	00616	
111232424351 |31
02/09/2021	00615	
010812262845 |43
31/08/2021	00614	
072037475153 |05
28/08/2021	00613	
101626273448 |51
26/08/2021	00612	
111320515355 |04
24/08/2021	00611	
020407183035 |20
21/08/2021	00610	
222427373848 |14
19/08/2021	00609	
050912204351 |13
22/07/2021	00608	
022024394653 |55
20/07/2021	00607	
020811131726 |53
17/07/2021	00606	
020711213142 |45
15/07/2021	00605	
030412163050 |20
13/07/2021	00604	
051118273443 |42
10/07/2021	00603	
070817374748 |27
08/07/2021	00602	
033234424454 |35
06/07/2021	00601	
172022243054 |51
03/07/2021	00600	
042530385055 |53
01/07/2021	00599	
041528304952 |55
29/06/2021	00598	
051424364455 |48
26/06/2021	00597	
061617204952 |27
24/06/2021	00596	
031617244144 |37
22/06/2021	00595	
030932334143 |40
19/06/2021	00594	
010307132845 |33
17/06/2021	00593	
182338414455 |40
15/06/2021	00592	
111821223055 |35
12/06/2021	00591	
041617202744 |30
10/06/2021	00590	
112224274354 |45
08/06/2021	00589	
162833414254 |12
05/06/2021	00588	
142225394152 |17
03/06/2021	00587	
040821242647 |43
01/06/2021	00586	
061214274345 |38
29/05/2021	00585	
021131374355 |14
27/05/2021	00584	
030718224046 |14
25/05/2021	00583	
061033353643 |08
22/05/2021	00582	
152737454652 |31
20/05/2021	00581	
071012194254 |24
18/05/2021	00580	
060722323847 |27
15/05/2021	00579	
010506132327 |46
13/05/2021	00578	
132425353941 |29
11/05/2021	00577	
011441444653 |48
08/05/2021	00576	
142326374251 |40
06/05/2021	00575	
151924314453 |32
04/05/2021	00574	
072445484953 |14
01/05/2021	00573	
030714224142 |10
29/04/2021	00572	
030923334244 |50
27/04/2021	00571	
030922263237 |41
24/04/2021	00570	
010405212544 |45
22/04/2021	00569	
051117253948 |22
20/04/2021	00568	
182538434751 |11
17/04/2021	00567	
041516294246 |36
15/04/2021	00566	
050827424751 |36
13/04/2021	00565	
253339454955 |36
10/04/2021	00564	
121316172747 |49
08/04/2021	00563	
081116222830 |45
06/04/2021	00562	
273334384648 |05
03/04/2021	00561	
020434384155 |19
01/04/2021	00560	
131824343854 |08
30/03/2021	00559	
021117194751 |22
27/03/2021	00558	
051117202637 |12
25/03/2021	00557	
192024293639 |22
23/03/2021	00556	
091317333453 |31
20/03/2021	00555	
161820253536 |17
18/03/2021	00554	
172438414654 |51
16/03/2021	00553	
033145464954 |40
13/03/2021	00552	
071920233655 |09
11/03/2021	00551	
040512254344 |27
09/03/2021	00550	
151829354754 |20
06/03/2021	00549	
182434394655 |04
04/03/2021	00548	
020921233341 |45
02/03/2021	00547	
232945464951 |01
27/02/2021	00546	
061124305052 |22
25/02/2021	00545	
091932404551 |01
23/02/2021	00544	
161921233048 |06
20/02/2021	00543	
010204323439 |20
18/02/2021	00542	
020510222647 |53
16/02/2021	00541	
041011212344 |50
13/02/2021	00540	
031114313442 |24
09/02/2021	00539	
152021293141 |34
06/02/2021	00538	
062232333553 |12
04/02/2021	00537	
284344505153 |13
02/02/2021	00536	
041331364054 |30
30/01/2021	00535	
020717182129 |19
28/01/2021	00534	
030416344055 |02
26/01/2021	00533	
071632424447 |35
23/01/2021	00532	
123139414555 |34
21/01/2021	00531	
092022314752 |18
19/01/2021	00530	
052225434853 |18
16/01/2021	00529	
131528293244 |49
14/01/2021	00528	
010442444650 |09
12/01/2021	00527	
192329344453 |35
09/01/2021	00526	
101924294648 |05
07/01/2021	00525	
071122384851 |53
05/01/2021	00524	
050709224254 |47
02/01/2021	00523	
071923263545 |11
31/12/2020	00522	
021525273751 |53
29/12/2020	00521	
040811151741 |23
26/12/2020	00520	
012433414351 |48
24/12/2020	00519	
111934414448 |43
22/12/2020	00518	
101116293538 |03
19/12/2020	00517	
142032343749 |31
17/12/2020	00516	
152527354048 |45
15/12/2020	00515	
101113353849 |14
12/12/2020	00514	
031432364146 |54
10/12/2020	00513	
033134364454 |45
08/12/2020	00512	
021732333845 |37
05/12/2020	00511	
102829303738 |36
03/12/2020	00510	
051932414245 |17
01/12/2020	00509	
061012243443 |15
28/11/2020	00508	
012036444549 |52
26/11/2020	00507	
181929313652 |50
24/11/2020	00506	
040719202253 |23
21/11/2020	00505	
081419204951 |28
19/11/2020	00504	
121523284548 |43
17/11/2020	00503	
061727343651 |48
14/11/2020	00502	
051115344448 |35
12/11/2020	00501	
042022254347 |12
10/11/2020	00500	
020519394853 |06
07/11/2020	00499	
122830334552 |15
05/11/2020	00498	
010206183451 |52
03/11/2020	00497	
022227464852 |23
31/10/2020	00496	
081819204354 |50
29/10/2020	00495	
091114162123 |54
27/10/2020	00494	
033133363839 |08
24/10/2020	00493	
122122274150 |34
22/10/2020	00492	
020312212438 |14
20/10/2020	00491	
083338474954 |31
17/10/2020	00490	
031425374954 |53
15/10/2020	00489	
083841475052 |45
13/10/2020	00488	
121928295253 |20
10/10/2020	00487	
051047505354 |22
08/10/2020	00486	
101820212651 |52
06/10/2020	00485	
111429323340 |35
03/10/2020	00484	
121422233944 |28
01/10/2020	00483	
030607193854 |50
29/09/2020	00482	
010607133055 |34
26/09/2020	00481	
071013154048 |01
24/09/2020	00480	
122841425253 |50
22/09/2020	00479	
050815183645 |06
19/09/2020	00478	
040708293141 |38
17/09/2020	00477	
010528434453 |49
15/09/2020	00476	
131415172653 |21
12/09/2020	00475	
202124303144 |40
10/09/2020	00474	
182527374550 |52
08/09/2020	00473	
224748525355 |14
05/09/2020	00472	
091219223146 |20
03/09/2020	00471	
070918223554 |50
01/09/2020	00470	
112224474953 |03
29/08/2020	00469	
010414283553 |02
25/08/2020	00468	
213536384447 |14
22/08/2020	00467	
012024263551 |12
20/08/2020	00466	
141828323336 |41
18/08/2020	00465	
224144465152 |02
15/08/2020	00464	
011129304151 |04
13/08/2020	00463	
032528444954 |19
11/08/2020	00462	
021233395253 |44
08/08/2020	00461	
031224263643 |08
06/08/2020	00460	
020521242627 |11
04/08/2020	00459	
101520213251 |08
01/08/2020	00458	
131829304047 |04
30/07/2020	00457	
060716262954 |04
28/07/2020	00456	
031120344454 |16
25/07/2020	00455	
021921345455 |24
23/07/2020	00454	
041231474952 |02
21/07/2020	00453	
061431373844 |04
18/07/2020	00452	
031322283053 |16
16/07/2020	00451	
020511202432 |06
14/07/2020	00450	
052232344351 |12
11/07/2020	00449	
030406142038 |35
09/07/2020	00448	
031011172654 |21
07/07/2020	00447	
072432354850 |01
04/07/2020	00446	
030910182945 |36
02/07/2020	00445	
041020384853 |05
30/06/2020	00444	
051118192021 |52
27/06/2020	00443	
020638475053 |14
25/06/2020	00442	
091012192740 |55
23/06/2020	00441	
021828465254 |19
20/06/2020	00440	
050933434450 |46
18/06/2020	00439	
051827455054 |09
16/06/2020	00438	
021516233354 |45
13/06/2020	00437	
070911304353 |10
11/06/2020	00436	
032125323552 |34
09/06/2020	00435	
010308224248 |44
06/06/2020	00434	
081224323551 |21
04/06/2020	00433	
061216343954 |19
02/06/2020	00432	
041931424855 |22
30/05/2020	00431	
121341424853 |20
28/05/2020	00430	
010408214449 |52
26/05/2020	00429	
111223243447 |43
23/05/2020	00428	
041327475055 |31
21/05/2020	00427	
021522253046 |10
19/05/2020	00426	
051516194955 |03
16/05/2020	00425	
193538495255 |01
14/05/2020	00424	
072329475155 |12
12/05/2020	00423	
010825343844 |28
09/05/2020	00422	
181930394546 |11
07/05/2020	00421	
091928303254 |22
05/05/2020	00420	
010413151820 |22
02/05/2020	00419	
020609164353 |19
30/04/2020	00418	
123132333941 |14
28/04/2020	00417	
040610163046 |34
25/04/2020	00416	
041824305355 |13
31/03/2020	00415	
121940414353 |23
28/03/2020	00414	
011011132755 |19
26/03/2020	00413	
070811313536 |45
24/03/2020	00412	
030920213352 |50
21/03/2020	00411	
101214172953 |25
19/03/2020	00410	
033541424349 |31
17/03/2020	00409	
011418434950 |08
14/03/2020	00408	
122025383940 |37
12/03/2020	00407	
021419242734 |48
10/03/2020	00406	
232530364552 |53
07/03/2020	00405	
051121304048 |20
05/03/2020	00404	
080934404154 |13
03/03/2020	00403	
141531404349 |12
29/02/2020	00402	
091723265154 |32
27/02/2020	00401	
031121294755 |50
25/02/2020	00400	
051321363948 |06
22/02/2020	00399	
072432495154 |44
20/02/2020	00398	
010320333651 |49
18/02/2020	00397	
273236374748 |50
15/02/2020	00396	
263637384249 |46
13/02/2020	00395	
252832343539 |07
11/02/2020	00394	
041418213253 |02
08/02/2020	00393	
091219254154 |38
06/02/2020	00392	
131834364549 |37
04/02/2020	00391	
061020475255 |46
01/02/2020	00390	
020311233554 |06
30/01/2020	00389	
121828304750 |41
28/01/2020	00388	
012024334055 |46
23/01/2020	00387	
091518253149 |46
21/01/2020	00386	
143145475254 |13
18/01/2020	00385	
131819233243 |11
16/01/2020	00384	
101126334446 |55
14/01/2020	00383	
030417395051 |53
11/01/2020	00382	
081117192547 |53
09/01/2020	00381	
172021295254 |51
07/01/2020	00380	
081116224254 |13
04/01/2020	00379	
041426424455 |48
02/01/2020	00378	
121426293340 |50
31/12/2019	00377	
022226284455 |27
28/12/2019	00376	
101726282932 |21
26/12/2019	00375	
050612182354 |26
24/12/2019	00374	
031630345055 |48
21/12/2019	00373	
050820343742 |51
19/12/2019	00372	
182225282934 |50
17/12/2019	00371	
040514192237 |43
14/12/2019	00370	
033033344047 |26
12/12/2019	00369	
010915424950 |48
10/12/2019	00368	
052033424349 |26
07/12/2019	00367	
071838424751 |08
05/12/2019	00366	
091116273540 |51
03/12/2019	00365	
212936415052 |42
30/11/2019	00364	
080910324450 |15
28/11/2019	00363	
011826285355 |14
26/11/2019	00362	
071938414247 |04
23/11/2019	00361	
072930455055 |15
21/11/2019	00360	
212435384247 |34
19/11/2019	00359	
192133353840 |04
16/11/2019	00358	
060818224952 |10
14/11/2019	00357	
091216364155 |35
12/11/2019	00356	
101724273639 |33
09/11/2019	00355	
010306252941 |12
07/11/2019	00354	
011219374452 |18
05/11/2019	00353	
030616174450 |28
02/11/2019	00352	
021534354850 |32
31/10/2019	00351	
181922374748 |46
29/10/2019	00350	
121516314355 |11
26/10/2019	00349	
182022505153 |35
24/10/2019	00348	
091423414550 |13
22/10/2019	00347	
021626273640 |31
19/10/2019	00346	
011021264243 |25
17/10/2019	00345	
051114345153 |16
15/10/2019	00344	
091229464853 |03
12/10/2019	00343	
213948515355 |05
10/10/2019	00342	
041742515355 |29
08/10/2019	00341	
083639434850 |40
05/10/2019	00340	
102930313751 |50
03/10/2019	00339	
040708263744 |29
01/10/2019	00338	
052238414749 |29
28/09/2019	00337	
040821234043 |44
26/09/2019	00336	
071238435155 |15
24/09/2019	00335	
123339404853 |35
21/09/2019	00334	
020523304245 |34
19/09/2019	00333	
020822343941 |13
17/09/2019	00332	
031426384347 |10
14/09/2019	00331	
103642444554 |14
12/09/2019	00330	
182932334549 |40
10/09/2019	00329	
060919395054 |37
07/09/2019	00328	
071731353846 |16
05/09/2019	00327	
202427303345 |21
03/09/2019	00326	
131429354155 |25
31/08/2019	00325	
132023325152 |42
29/08/2019	00324	
101112232748 |09
27/08/2019	00323	
162229334647 |55
24/08/2019	00322	
192034404951 |01
22/08/2019	00321	
040716173039 |27
20/08/2019	00320	
103038485455 |46
17/08/2019	00319	
091124263853 |41
15/08/2019	00318	
192531323947 |08
13/08/2019	00317	
040816273240 |23
10/08/2019	00316	
071736424350 |44
08/08/2019	00315	
010617182141 |22
06/08/2019	00314	
091119202642 |17
03/08/2019	00313	
132425262730 |04
01/08/2019	00312	
011839454849 |26
30/07/2019	00311	
030812213251 |07
27/07/2019	00310	
020325334450 |17
25/07/2019	00309	
033134415253 |16
23/07/2019	00308	
051021323952 |41
20/07/2019	00307	
151825324252 |10
18/07/2019	00306	
042429313941 |38
16/07/2019	00305	
041219313340 |51
13/07/2019	00304	
052329455052 |01
11/07/2019	00303	
060915263538 |34
09/07/2019	00302	
041725404251 |02
06/07/2019	00301	
052936394653 |48
04/07/2019	00300	
040514465254 |03
02/07/2019	00299	
020933455254 |01
29/06/2019	00298	
061019313443 |37
27/06/2019	00297	
092932444953 |05
25/06/2019	00296	
031434354049 |23
22/06/2019	00295	
010923284254 |49
20/06/2019	00294	
091523414951 |52
18/06/2019	00293	
243145464754 |04
15/06/2019	00292	
132340455255 |09
13/06/2019	00291	
060915222953 |25
11/06/2019	00290	
020513203049 |35
08/06/2019	00289	
020810232735 |47
06/06/2019	00288	
101330365154 |16
04/06/2019	00287	
182024263341 |55
01/06/2019	00286	
102431414247 |20
30/05/2019	00285	
173133343740 |35
28/05/2019	00284	
152231323337 |51
25/05/2019	00283	
041235445055 |19
23/05/2019	00282	
132133425355 |44
21/05/2019	00281	
111229313753 |41
18/05/2019	00280	
061013182938 |53
16/05/2019	00279	
082830334043 |24
14/05/2019	00278	
061115213040 |10
11/05/2019	00277	
061120222628 |36
09/05/2019	00276	
192148495455 |27
07/05/2019	00275	
030607080949 |24
04/05/2019	00274	
010203172653 |50
02/05/2019	00273	
021016173336 |20
30/04/2019	00272	
030513404145 |52
27/04/2019	00271	
011122263351 |04
25/04/2019	00270	
162223333638 |45
23/04/2019	00269	
202122314345 |30
20/04/2019	00268	
081012244044 |51
18/04/2019	00267	
070815242648 |10
16/04/2019	00266	
162932335253 |05
13/04/2019	00265	
091320213643 |32
11/04/2019	00264	
010831323755 |53
09/04/2019	00263	
101419364849 |03
06/04/2019	00262	
012030414650 |48
04/04/2019	00261	
162629384751 |13
02/04/2019	00260	
010409202226 |48
30/03/2019	00259	
031518355054 |32
28/03/2019	00258	
032337434449 |27
26/03/2019	00257	
151928404448 |14
23/03/2019	00256	
030930414652 |22
21/03/2019	00255	
071832424653 |28
19/03/2019	00254	
082832354045 |34
16/03/2019	00253	
101822243540 |53
14/03/2019	00252	
182125354453 |04
12/03/2019	00251	
091626344449 |19
09/03/2019	00250	
182431343544 |52
07/03/2019	00249	
021420334147 |27
05/03/2019	00248	
011523515355 |26
02/03/2019	00247	
010203204648 |31
28/02/2019	00246	
041519344042 |49
26/02/2019	00245	
080916344243 |45
23/02/2019	00244	
161930394352 |21
21/02/2019	00243	
031011152934 |50
19/02/2019	00242	
121822293252 |51
16/02/2019	00241	
050814283740 |41
14/02/2019	00240	
081526414353 |46
12/02/2019	00239	
011217344849 |47
09/02/2019	00238	
021415444650 |18
07/02/2019	00237	
202728324750 |41
02/02/2019	00236	
112327353646 |37
31/01/2019	00235	
101920283444 |29
29/01/2019	00234	
152026414555 |10
26/01/2019	00233	
202733435354 |48
24/01/2019	00232	
313538444955 |24
22/01/2019	00231	
011422405255 |21
19/01/2019	00230	
132942465153 |36
17/01/2019	00229	
131422343555 |54
15/01/2019	00228	
040613222930 |52
12/01/2019	00227	
071314264254 |11
10/01/2019	00226	
122231354047 |08
08/01/2019	00225	
030509114548 |40
05/01/2019	00224	
101138475355 |51
03/01/2019	00223	
233137454954 |18
01/01/2019	00222	
021921273746 |12
29/12/2018	00221	
083642435052 |30
27/12/2018	00220	
052033424350 |40
25/12/2018	00219	
030917212351 |15
22/12/2018	00218	
030816353952 |29
20/12/2018	00217	
081724333444 |55
18/12/2018	00216	
010915172526 |08
15/12/2018	00215	
141749525355 |12
13/12/2018	00214	
021114364955 |53
11/12/2018	00213	
010511373944 |31
08/12/2018	00212	
030609314854 |53
06/12/2018	00211	
091323273942 |49
04/12/2018	00210	
101316233049 |24
01/12/2018	00209	
030512202533 |41
29/11/2018	00208	
102327425152 |20
27/11/2018	00207	
030523283544 |08
24/11/2018	00206	
031011254054 |17
22/11/2018	00205	
172224283744 |06
20/11/2018	00204	
092333404449 |17
17/11/2018	00203	
122226294547 |15
15/11/2018	00202	
131621404952 |54
13/11/2018	00201	
032526324147 |05
10/11/2018	00200	
030519222939 |15
08/11/2018	00199	
222831395253 |14
06/11/2018	00198	
192223434753 |03
03/11/2018	00197	
141720232545 |34
01/11/2018	00196	
031115424454 |41
30/10/2018	00195	
011222273039 |46
27/10/2018	00194	
080915214449 |16
25/10/2018	00193	
162329314548 |19
23/10/2018	00192	
010306132130 |36
20/10/2018	00191	
020510173541 |21
18/10/2018	00190	
011122344247 |30
16/10/2018	00189	
052829344246 |17
13/10/2018	00188	
122123444748 |43
11/10/2018	00187	
051617374649 |35
09/10/2018	00186	
102746505155 |01
06/10/2018	00185	
050616424851 |03
04/10/2018	00184	
030912173442 |46
02/10/2018	00183	
030728323337 |22
29/09/2018	00182	
030712323455 |38
27/09/2018	00181	
081229355154 |34
25/09/2018	00180	
020306131417 |09
22/09/2018	00179	
010817284050 |21
20/09/2018	00178	
033235464749 |51
18/09/2018	00177	
082132434853 |38
15/09/2018	00176	
020528304650 |49
13/09/2018	00175	
040607264044 |09
11/09/2018	00174	
131728424549 |50
08/09/2018	00173	
091112243543 |15
06/09/2018	00172	
041115212427 |07
04/09/2018	00171	
081820293437 |51
01/09/2018	00170	
020820212836 |05
30/08/2018	00169	
052228424954 |36
28/08/2018	00168	
021015313948 |23
25/08/2018	00167	
101115324048 |27
23/08/2018	00166	
141827383953 |02
21/08/2018	00165	
091214233246 |31
18/08/2018	00164	
073336395155 |11
16/08/2018	00163	
061034464851 |47
14/08/2018	00162	
293036384552 |46
11/08/2018	00161	
161731334244 |14
09/08/2018	00160	
242932334955 |09
07/08/2018	00159	
030915203949 |04
04/08/2018	00158	
111224324148 |03
02/08/2018	00157	
061116174155 |07
31/07/2018	00156	
010527314750 |41
28/07/2018	00155	
111622253040 |09
26/07/2018	00154	
212433374046 |52
24/07/2018	00153	
111834375053 |20
21/07/2018	00152	
073133374652 |28
19/07/2018	00151	
111328344447 |10
17/07/2018	00150	
051422273140 |48
14/07/2018	00149	
041923343850 |01
12/07/2018	00148	
081518212449 |22
10/07/2018	00147	
061016202729 |24
07/07/2018	00146	
023045484953 |41
05/07/2018	00145	
041522244351 |48
03/07/2018	00144	
303234474849 |50
30/06/2018	00143	
031223243033 |01
28/06/2018	00142	
113133434851 |23
26/06/2018	00141	
171821394043 |03
23/06/2018	00140	
060813234655 |01
21/06/2018	00139	
020819232533 |32
19/06/2018	00138	
161731374152 |34
16/06/2018	00137	
141521304447 |48
14/06/2018	00136	
031532454854 |55
12/06/2018	00135	
041323272935 |14
09/06/2018	00134	
092325395253 |38
07/06/2018	00133	
111618264647 |42
05/06/2018	00132	
112126325152 |05
02/06/2018	00131	
050717223233 |06
31/05/2018	00130	
031518252629 |19
29/05/2018	00129	
091317184650 |26
26/05/2018	00128	
071228314044 |15
24/05/2018	00127	
242526293648 |40
22/05/2018	00126	
040508173547 |39
19/05/2018	00125	
333545525355 |25
17/05/2018	00124	
133138455355 |46
15/05/2018	00123	
030629374449 |24
12/05/2018	00122	
010926385455 |51
10/05/2018	00121	
020608343943 |11
08/05/2018	00120	
031623243842 |48
05/05/2018	00119	
163233374048 |15
03/05/2018	00118	
232733373949 |44
01/05/2018	00117	
010720232538 |14
28/04/2018	00116	
121922293246 |25
26/04/2018	00115	
232629313654 |55
24/04/2018	00114	
171824404146 |06
21/04/2018	00113	
161841434655 |35
19/04/2018	00112	
041719354955 |09
17/04/2018	00111	
021026273138 |39
14/04/2018	00110	
021014264554 |20
12/04/2018	00109	
042935374254 |19
10/04/2018	00108	
012225313648 |41
07/04/2018	00107	
122433343653 |05
05/04/2018	00106	
070917253132 |06
03/04/2018	00105	
202139425153 |01
31/03/2018	00104	
030731435153 |26
29/03/2018	00103	
052735394652 |31
27/03/2018	00102	
091314155455 |22
24/03/2018	00101	
013038454850 |12
22/03/2018	00100	
010824333441 |20
20/03/2018	00099	
114043464955 |37
17/03/2018	00098	
031428355052 |29
15/03/2018	00097	
152023283949 |19
13/03/2018	00096	
010217464749 |44
10/03/2018	00095	
092027314849 |42
08/03/2018	00094	
141718234152 |40
06/03/2018	00093	
020613224048 |12
03/03/2018	00092	
041032374752 |49
01/03/2018	00091	
040507172038 |09
27/02/2018	00090	
081623284449 |45
24/02/2018	00089	
050724324549 |01
22/02/2018	00088	
111432364248 |20
20/02/2018	00087	
010221245052 |33
17/02/2018	00086	
162228293543 |45
13/02/2018	00085	
092526304254 |19
10/02/2018	00084	
081019253646 |07
08/02/2018	00083	
212229374150 |33
06/02/2018	00082	
012029314353 |16
03/02/2018	00081	
122942485455 |18
01/02/2018	00080	
010708093943 |52
30/01/2018	00079	
151924515355 |29
27/01/2018	00078	
212636384050 |11
25/01/2018	00077	
011030444550 |04
23/01/2018	00076	
031015234153 |35
20/01/2018	00075	
020715164145 |19
18/01/2018	00074	
122428303639 |15
16/01/2018	00073	
062733414249 |22
13/01/2018	00072	
032125265155 |37
11/01/2018	00071	
040730353745 |01
09/01/2018	00070	
182528465051 |15
06/01/2018	00069	
041124354145 |17
04/01/2018	00068	
010731354655 |51
02/01/2018	00067	
040708343747 |24
30/12/2017	00066	
080936373950 |07
28/12/2017	00065	
071826293135 |34
26/12/2017	00064	
071113182642 |49
23/12/2017	00063	
070809132844 |12
21/12/2017	00062	
222327353746 |19
19/12/2017	00061	
020320253844 |12
16/12/2017	00060	
052337414353 |25
14/12/2017	00059	
111222284650 |07
12/12/2017	00058	
060708213239 |27
09/12/2017	00057	
053435424952 |21
07/12/2017	00056	
031426354454 |25
05/12/2017	00055	
273840424655 |05
02/12/2017	00054	
093745505354 |40
30/11/2017	00053	
051326375355 |28
28/11/2017	00052	
021939495153 |20
25/11/2017	00051	
020916465255 |50
23/11/2017	00050	
010203182550 |14
21/11/2017	00049	
050823373854 |55
18/11/2017	00048	
111226425054 |17
16/11/2017	00047	
011622254748 |21
14/11/2017	00046	
202429414749 |22
11/11/2017	00045	
122633353644 |01
09/11/2017	00044	
020306233436 |50
07/11/2017	00043	
193236374254 |28
04/11/2017	00042	
020812444652 |09
02/11/2017	00041	
030912215152 |07
31/10/2017	00040	
071324454752 |33
28/10/2017	00039	
131835364148 |47
26/10/2017	00038	
021015303450 |03
24/10/2017	00037	
010209133235 |52
21/10/2017	00036	
040913161849 |30
19/10/2017	00035	
061517244045 |39
17/10/2017	00034	
012636405054 |31
14/10/2017	00033	
141829354449 |54
12/10/2017	00032	
050811313742 |52
10/10/2017	00031	
293343444550 |41
07/10/2017	00030	
313440424349 |16
05/10/2017	00029	
010314193541 |20
03/10/2017	00028	
213135414650 |23
30/09/2017	00027	
041723253446 |24
28/09/2017	00026	
202728313947 |10
26/09/2017	00025	
141518303649 |19
23/09/2017	00024	
070827364453 |49
21/09/2017	00023	
091216244351 |39
19/09/2017	00022	
033236414453 |45
16/09/2017	00021	
091221262952 |24
14/09/2017	00020	
222332434451 |15
12/09/2017	00019	
061012474851 |35
09/09/2017	00018	
011523364354 |12
07/09/2017	00017	
041822313240 |08
05/09/2017	00016	
010208132339 |09
02/09/2017	00015	
050911181937 |50
31/08/2017	00014	
082027353647 |18
29/08/2017	00013	
041215232441 |44
26/08/2017	00012	
172530313641 |20
24/08/2017	00011	
051618374246 |10
22/08/2017	00010	
102431323844 |14
19/08/2017	00009	
071113152651 |36
17/08/2017	00008	
111220303234 |53
15/08/2017	00007	
071119323351 |30
12/08/2017	00006	
061620323851 |34
10/08/2017	00005	
101119415054 |03
08/08/2017	00004	
193639414651 |38
05/08/2017	00003	
010511324045 |43
03/08/2017	00002	
040924252745 |40
01/08/2017	00001	
051014232438 |35`,bw=`18/10/2026	01577	
101131384044
16/10/2026	01576	
092026353638
14/10/2026	01575	
061619213443
11/10/2026	01574	
030916293044
09/10/2026	01573	
050712233241
07/10/2026	01572	
101436374143
04/10/2026	01571	
152029374045
02/10/2026	01570	
010620273141
30/09/2026	01569	
020924273033
27/09/2026	01568	
020413253139
25/09/2026	01567	
031518283336
23/09/2026	01566	
020612152526
20/09/2026	01565	
101516273338
18/09/2026	01564	
071226274143
16/09/2026	01563	
010310111823
13/09/2026	01562	
041231343841
11/09/2026	01561	
141820212627
09/09/2026	01560	
121720213643
06/09/2026	01559	
091422262740
04/09/2026	01558	
162123293445
02/09/2026	01557	
060927293544
30/08/2026	01556	
010312153745
28/08/2026	01555	
031315223639
26/08/2026	01554	
031011163340
23/08/2026	01553	
041617223239
21/08/2026	01552	
072631384345
19/08/2026	01551	
061518334043
16/08/2026	01550	
060715193641
14/08/2026	01549	
070913313544
12/08/2026	01548	
151722293340
09/08/2026	01547	
031720273135
07/08/2026	01546	
020819303643
05/08/2026	01545	
020611162839
02/08/2026	01544	
031220252737
31/07/2026	01543	
061624253843
29/07/2026	01542	
020621313645
26/07/2026	01541	
131627334144
24/07/2026	01540	
121636384145
22/07/2026	01539	
033233343943
19/07/2026	01538	
122224263137
17/07/2026	01537	
091830313945
15/07/2026	01536	
071129374345
12/07/2026	01535	
060911173544
10/07/2026	01534	
091723264244
08/07/2026	01533	
131422263744
05/07/2026	01532	
010513293235
03/07/2026	01531	
062021283039
01/07/2026	01530	
202425294044
28/06/2026	01529	
021118334245
26/06/2026	01528	
091431364145
24/06/2026	01527	
031117193032
21/06/2026	01526	
030819274145
19/06/2026	01525	
060919293036
17/06/2026	01524	
050616283539
14/06/2026	01523	
071620222438
12/06/2026	01522	
051530343738
10/06/2026	01521	
030917222732
07/06/2026	01520	
142126303435
05/06/2026	01519	
131619323639
03/06/2026	01518	
031126333638
31/05/2026	01517	
011216212441
29/05/2026	01516	
131424283042
27/05/2026	01515	
021317183137
24/05/2026	01514	
040809142542
22/05/2026	01513	
020314284144
20/05/2026	01512	
162829374045
17/05/2026	01511	
040813152731
15/05/2026	01510	
061420222344
13/05/2026	01509	
081015323543
10/05/2026	01508	
030410112742
08/05/2026	01507	
041617263442
06/05/2026	01506	
091228363740
03/05/2026	01505	
070914243839
01/05/2026	01504	
042125314143
29/04/2026	01503	
041415161725
26/04/2026	01502	
121822253141
24/04/2026	01501	
202933364142
22/04/2026	01500	
020615161737
19/04/2026	01499	
071015273335
17/04/2026	01498	
011019313638
15/04/2026	01497	
212233353643
12/04/2026	01496	
011011323942
10/04/2026	01495	
070810162835
08/04/2026	01494	
050823263841
05/04/2026	01493	
020923303242
03/04/2026	01492	
020423243541
01/04/2026	01491	
063034363744
29/03/2026	01490	
050818303745
27/03/2026	01489	
050713193845
25/03/2026	01488	
162224293536
22/03/2026	01487	
051022263136
20/03/2026	01486	
081122233843
18/03/2026	01485	
142033353644
15/03/2026	01484	
040711264244
13/03/2026	01483	
111220223133
11/03/2026	01482	
161819283144
08/03/2026	01481	
061213253132
06/03/2026	01480	
021012213237
04/03/2026	01479	
010406091344
01/03/2026	01478	
162223354445
27/02/2026	01477	
020408151728
25/02/2026	01476	
041320222329
22/02/2026	01475	
072324363840
20/02/2026	01474	
042528333445
18/02/2026	01473	
010719232644
15/02/2026	01472	
040607202843
13/02/2026	01471	
081231364243
11/02/2026	01470	
152035404445
08/02/2026	01469	
061316202338
06/02/2026	01468	
020713174245
04/02/2026	01467	
021214173943
01/02/2026	01466	
011821233036
30/01/2026	01465	
161730414245
28/01/2026	01464	
041016192740
25/01/2026	01463	
021920243334
23/01/2026	01462	
091516202231
21/01/2026	01461	
011823242937
18/01/2026	01460	
020515263942
16/01/2026	01459	
021021313440
14/01/2026	01458	
012223283945
11/01/2026	01457	
081021253138
09/01/2026	01456	
080917213645
07/01/2026	01455	
010507283143
04/01/2026	01454	
021221293544
02/01/2026	01453	
071822323738
31/12/2025	01452	
012535363745
28/12/2025	01451	
010207163137
26/12/2025	01450	
040616252740
24/12/2025	01449	
151931354345
21/12/2025	01448	
060912182943
19/12/2025	01447	
012136424344
17/12/2025	01446	
051424384143
14/12/2025	01445	
081113162832
12/12/2025	01444	
030713173844
10/12/2025	01443	
071822293036
07/12/2025	01442	
010523282943
05/12/2025	01441	
021923374243
03/12/2025	01440	
081520233134
30/11/2025	01439	
071326303442
28/11/2025	01438	
020917233941
26/11/2025	01437	
020815193038
23/11/2025	01436	
041219424344
21/11/2025	01435	
081118252835
19/11/2025	01434	
091219304043
16/11/2025	01433	
152031333445
14/11/2025	01432	
031015274142
12/11/2025	01431	
162429374044
09/11/2025	01430	
132327303743
07/11/2025	01429	
030420283942
05/11/2025	01428	
020918253031
02/11/2025	01427	
030712203044
31/10/2025	01426	
031031343643
29/10/2025	01425	
072635394142
26/10/2025	01424	
183034424345
24/10/2025	01423	
021124313238
22/10/2025	01422	
051112242844
19/10/2025	01421	
161725262837
17/10/2025	01420	
151718263142
15/10/2025	01419	
010618202940
12/10/2025	01418	
041016202834
10/10/2025	01417	
040525343943
08/10/2025	01416	
081011182332
05/10/2025	01415	
051422283239
03/10/2025	01414	
293132333435
01/10/2025	01413	
030607193035
28/09/2025	01412	
081318263639
26/09/2025	01411	
121719272836
24/09/2025	01410	
030517313240
21/09/2025	01409	
020306212838
19/09/2025	01408	
040617182841
17/09/2025	01407	
112325353845
14/09/2025	01406	
030609103037
12/09/2025	01405	
172224374243
10/09/2025	01404	
071018202436
07/09/2025	01403	
062930394244
05/09/2025	01402	
011020224143
03/09/2025	01401	
142123284445
31/08/2025	01400	
030414303238
29/08/2025	01399	
020410243536
27/08/2025	01398	
031118394042
24/08/2025	01397	
020920283243
22/08/2025	01396	
010910133739
20/08/2025	01395	
040927323842
17/08/2025	01394	
152426293142
15/08/2025	01393	
052227364345
13/08/2025	01392	
101528303545
10/08/2025	01391	
132126283135
08/08/2025	01390	
111720262738
06/08/2025	01389	
031214182934
03/08/2025	01388	
051424263743
01/08/2025	01387	
052930313638
30/07/2025	01386	
020306162634
27/07/2025	01385	
010912273945
25/07/2025	01384	
203034353839
23/07/2025	01383	
242629323744
20/07/2025	01382	
111314203742
18/07/2025	01381	
072224284245
16/07/2025	01380	
061114192142
13/07/2025	01379	
091722273536
11/07/2025	01378	
112022244345
09/07/2025	01377	
070830323344
06/07/2025	01376	
050813233645
04/07/2025	01375	
070921294145
02/07/2025	01374	
121621283441
29/06/2025	01373	
102325262728
27/06/2025	01372	
091426304445
25/06/2025	01371	
081026293539
22/06/2025	01370	
010914203441
20/06/2025	01369	
020818222629
18/06/2025	01368	
192324263641
15/06/2025	01367	
151622232932
13/06/2025	01366	
011319283036
11/06/2025	01365	
101322274145
08/06/2025	01364	
061718193137
06/06/2025	01363	
242635394145
04/06/2025	01362	
112326272932
01/06/2025	01361	
092429374244
30/05/2025	01360	
040712353741
28/05/2025	01359	
172223283141
25/05/2025	01358	
051423242844
23/05/2025	01357	
020415162943
21/05/2025	01356	
021314212430
18/05/2025	01355	
060717273042
16/05/2025	01354	
050914223244
14/05/2025	01353	
192427374445
11/05/2025	01352	
131517222843
09/05/2025	01351	
010709344042
07/05/2025	01350	
082728313440
04/05/2025	01349	
060708091229
02/05/2025	01348	
030732374245
30/04/2025	01347	
011726333644
27/04/2025	01346	
081131353645
25/04/2025	01345	
040809102034
23/04/2025	01344	
071223344243
20/04/2025	01343	
050714262944
18/04/2025	01342	
052021222944
16/04/2025	01341	
050812162832
13/04/2025	01340	
131418253032
11/04/2025	01339	
011314263743
09/04/2025	01338	
050811224144
06/04/2025	01337	
030506131822
04/04/2025	01336	
021324252838
02/04/2025	01335	
081415223134
30/03/2025	01334	
141533384245
28/03/2025	01333	
050722282934
26/03/2025	01332	
172425303539
23/03/2025	01331	
050608093645
21/03/2025	01330	
313234414245
19/03/2025	01329	
122327282943
16/03/2025	01328	
021214163845
14/03/2025	01327	
071113162830
12/03/2025	01326	
192630323642
09/03/2025	01325	
101130334445
07/03/2025	01324	
081112202532
05/03/2025	01323	
102232374143
02/03/2025	01322	
082430334245
28/02/2025	01321	
101114162129
26/02/2025	01320	
021315161820
23/02/2025	01319	
101215172433
21/02/2025	01318	
040919203042
19/02/2025	01317	
010610112529
16/02/2025	01316	
111926283540
14/02/2025	01315	
060810272832
12/02/2025	01314	
071931394243
09/02/2025	01313	
081622273134
07/02/2025	01312	
040525273539
05/02/2025	01311	
040609142541
02/02/2025	01310	
152022293236
31/01/2025	01309	
021516324245
26/01/2025	01308	
050809112029
24/01/2025	01307	
010711223134
22/01/2025	01306	
032126293233
19/01/2025	01305	
050610193238
17/01/2025	01304	
021222313435
15/01/2025	01303	
020608102333
12/01/2025	01302	
020912144144
10/01/2025	01301	
020408284244
08/01/2025	01300	
020317333738
05/01/2025	01299	
020715374142
03/01/2025	01298	
061221273441
01/01/2025	01297	
142025283640
29/12/2024	01296	
050819313443
27/12/2024	01295	
011013242533
25/12/2024	01294	
081320252839
22/12/2024	01293	
151624273144
20/12/2024	01292	
060912212833
18/12/2024	01291	
030712162634
15/12/2024	01290	
011020222336
13/12/2024	01289	
030729363744
11/12/2024	01288	
021017232933
08/12/2024	01287	
011324262737
06/12/2024	01286	
081418263442
04/12/2024	01285	
071419243436
01/12/2024	01284	
151725293335
29/11/2024	01283	
121533353745
27/11/2024	01282	
062124314244
24/11/2024	01281	
051415213336
22/11/2024	01280	
011415193840
20/11/2024	01279	
041624293137
17/11/2024	01278	
111729313842
15/11/2024	01277	
081331363740
13/11/2024	01276	
032328353942
10/11/2024	01275	
030711121340
08/11/2024	01274	
111518273437
06/11/2024	01273	
010203112537
03/11/2024	01272	
010405162022
01/11/2024	01271	
202223323540
30/10/2024	01270	
041320293237
27/10/2024	01269	
182128293345
25/10/2024	01268	
031031323440
23/10/2024	01267	
222728313744
20/10/2024	01266	
062324252634
18/10/2024	01265	
131920222437
16/10/2024	01264	
041419232437
13/10/2024	01263	
071013172145
11/10/2024	01262	
111926282943
09/10/2024	01261	
141820223445
06/10/2024	01260	
071433364243
04/10/2024	01259	
081021323944
02/10/2024	01258	
050611233136
29/09/2024	01257	
030716174142
27/09/2024	01256	
010618253944
25/09/2024	01255	
102325273137
22/09/2024	01254	
202328364042
20/09/2024	01253	
131419203033
18/09/2024	01252	
040827283536
15/09/2024	01251	
031128323335
13/09/2024	01250	
061227344142
11/09/2024	01249	
061119233437
08/09/2024	01248	
030810263437
06/09/2024	01247	
052528323641
04/09/2024	01246	
020715182433
01/09/2024	01245	
303133384243
30/08/2024	01244	
021519263436
28/08/2024	01243	
040517253941
25/08/2024	01242	
061015174042
23/08/2024	01241	
071326283541
21/08/2024	01240	
070809152230
18/08/2024	01239	
041328333538
16/08/2024	01238	
162223303441
14/08/2024	01237	
010609214344
11/08/2024	01236	
171819333537
09/08/2024	01235	
061415242639
07/08/2024	01234	
111922294044
04/08/2024	01233	
010416182032
02/08/2024	01232	
091419343741
31/07/2024	01231	
020412161842
28/07/2024	01230	
011321253139
26/07/2024	01229	
182028313945
24/07/2024	01228	
070820273234
21/07/2024	01227	
091023252838
19/07/2024	01226	
011020253435
17/07/2024	01225	
091011162130
14/07/2024	01224	
091833373843
12/07/2024	01223	
111725262829
10/07/2024	01222	
232436374045
07/07/2024	01221	
040822232645
05/07/2024	01220	
042333384044
03/07/2024	01219	
111824343843
30/06/2024	01218	
052325283043
28/06/2024	01217	
040616324144
26/06/2024	01216	
081029303340
23/06/2024	01215	
091119293144
21/06/2024	01214	
030711161935
19/06/2024	01213	
081217232627
16/06/2024	01212	
031617182537
14/06/2024	01211	
102425263041
12/06/2024	01210	
010208132634
09/06/2024	01209	
040528323742
07/06/2024	01208	
151924252739
05/06/2024	01207	
112528333445
02/06/2024	01206	
020713232545
31/05/2024	01205	
040815233140
29/05/2024	01204	
042125273539
26/05/2024	01203	
040911141927
24/05/2024	01202	
021415172340
22/05/2024	01201	
020310224143
19/05/2024	01200	
051925353739
17/05/2024	01199	
082227293943
15/05/2024	01198	
031113212434
12/05/2024	01197	
030506093245
10/05/2024	01196	
121331384243
08/05/2024	01195	
021013223034
05/05/2024	01194	
101214162139
03/05/2024	01193	
011314212743
01/05/2024	01192	
070917202529
28/04/2024	01191	
011314222337
26/04/2024	01190	
020325343538
24/04/2024	01189	
072130333839
21/04/2024	01188	
072136384045
19/04/2024	01187	
020320213233
17/04/2024	01186	
091626273241
14/04/2024	01185	
071216294245
12/04/2024	01184	
061718264345
10/04/2024	01183	
021030333440
07/04/2024	01182	
031115172435
05/04/2024	01181	
141822293637
03/04/2024	01180	
071114222934
31/03/2024	01179	
051213174041
29/03/2024	01178	
040725343538
27/03/2024	01177	
062931354244
24/03/2024	01176	
011422283242
22/03/2024	01175	
050611202445
20/03/2024	01174	
081426284345
17/03/2024	01173	
010305263042
15/03/2024	01172	
091116293133
13/03/2024	01171	
011325303440
10/03/2024	01170	
041219233641
08/03/2024	01169	
022628404145
06/03/2024	01168	
111534394143
03/03/2024	01167	
031017202227
01/03/2024	01166	
202224262837
28/02/2024	01165	
011021253239
25/02/2024	01164	
050710121526
23/02/2024	01163	
041719272836
21/02/2024	01162	
020814192442
18/02/2024	01161	
051920212440
16/02/2024	01160	
061016204042
14/02/2024	01159	
080911124044
11/02/2024	01158	
071831333541
07/02/2024	01157	
172124253942
04/02/2024	01156	
091521293339
02/02/2024	01155	
011529313234
31/01/2024	01154	
091115353841
28/01/2024	01153	
032325293641
26/01/2024	01152	
081922273135
24/01/2024	01151	
072730363945
21/01/2024	01150	
112022232631
19/01/2024	01149	
081520244344
17/01/2024	01148	
141921364344
14/01/2024	01147	
020819202442
12/01/2024	01146	
101120273943
10/01/2024	01145	
101218192943
07/01/2024	01144	
030415183645
05/01/2024	01143	
091629313342
03/01/2024	01142	
091419202940
31/12/2023	01141	
131423253444
29/12/2023	01140	
162022353739
27/12/2023	01139	
081623343639
24/12/2023	01138	
010205244043
22/12/2023	01137	
021214163438
20/12/2023	01136	
051516212232
17/12/2023	01135	
030718203133
15/12/2023	01134	
010510112040
13/12/2023	01133	
030711202844
10/12/2023	01132	
091011174144
08/12/2023	01131	
111516174243
06/12/2023	01130	
181920294142
03/12/2023	01129	
121416212932
01/12/2023	01128	
051014212732
29/11/2023	01127	
092224323839
26/11/2023	01126	
040615232536
24/11/2023	01125	
051822344145
22/11/2023	01124	
151820233739
19/11/2023	01123	
010319202634
17/11/2023	01122	
162025263641
15/11/2023	01121	
020312163037
12/11/2023	01120	
020410152731
10/11/2023	01119	
010410131444
08/11/2023	01118	
072023273133
05/11/2023	01117	
011316182325
03/11/2023	01116	
020709132238
01/11/2023	01115	
010315162328
29/10/2023	01114	
050715213245
27/10/2023	01113	
071014212637
25/10/2023	01112	
040613253141
22/10/2023	01111	
101314193540
20/10/2023	01110	
041621242637
18/10/2023	01109	
020718202429
15/10/2023	01108	
040509273439
13/10/2023	01107	
011116394045
11/10/2023	01106	
051030404445
08/10/2023	01105	
041622283339
06/10/2023	01104	
181924283340
04/10/2023	01103	
071721324045
01/10/2023	01102	
021113164143
29/09/2023	01101	
020824273043
27/09/2023	01100	
031222303739
24/09/2023	01099	
040823273036
22/09/2023	01098	
021617182023
20/09/2023	01097	
030620394041
17/09/2023	01096	
061015363943
15/09/2023	01095	
020305071038
13/09/2023	01094	
020407091213
10/09/2023	01093	
040510182740
08/09/2023	01092	
060814293942
06/09/2023	01091	
030412181929
03/09/2023	01090	
013338394445
01/09/2023	01089	
091416192841
30/08/2023	01088	
131720283033
27/08/2023	01087	
242730374445
25/08/2023	01086	
081830323845
23/08/2023	01085	
051418192931
20/08/2023	01084	
070822233042
18/08/2023	01083	
121921223438
16/08/2023	01082	
050725313941
13/08/2023	01081	
091523333540
11/08/2023	01080	
162126293045
09/08/2023	01079	
182230313941
06/08/2023	01078	
041519253038
04/08/2023	01077	
021222384144
02/08/2023	01076	
042127383944
30/07/2023	01075	
031723334245
28/07/2023	01074	
072728303135
26/07/2023	01073	
041318212937
23/07/2023	01072	
141723323343
21/07/2023	01071	
092031333645
19/07/2023	01070	
061019374345
16/07/2023	01069	
010716182129
14/07/2023	01068	
040513192737
12/07/2023	01067	
192427313343
09/07/2023	01066	
141627283341
07/07/2023	01065	
050912203742
05/07/2023	01064	
011224273644
02/07/2023	01063	
030508173741
30/06/2023	01062	
020520233138
28/06/2023	01061	
040824314245
25/06/2023	01060	
040607252630
23/06/2023	01059	
101415202445
21/06/2023	01058	
071319353738
18/06/2023	01057	
030408182133
16/06/2023	01056	
242632373841
14/06/2023	01055	
022831374144
11/06/2023	01054	
051822404144
09/06/2023	01053	
151623254041
07/06/2023	01052	
010714163444
04/06/2023	01051	
031519353643
02/06/2023	01050	
031114192143
31/05/2023	01049	
040910224144
28/05/2023	01048	
061319203744
26/05/2023	01047	
081019253544
24/05/2023	01046	
091115283344
21/05/2023	01045	
081017192441
19/05/2023	01044	
030910273538
17/05/2023	01043	
020613202844
14/05/2023	01042	
070813374244
12/05/2023	01041	
020608091527
10/05/2023	01040	
070809131527
07/05/2023	01039	
043031333545
05/05/2023	01038	
222831353638
03/05/2023	01037	
182328293944
30/04/2023	01036	
070923243336
28/04/2023	01035	
051125334244
26/04/2023	01034	
010407093437
23/04/2023	01033	
010222303742
21/04/2023	01032	
020407102044
19/04/2023	01031	
102737404243
16/04/2023	01030	
081720253336
14/04/2023	01029	
081623273241
12/04/2023	01028	
040727283243
09/04/2023	01027	
121525303439
07/04/2023	01026	
091422293941
05/04/2023	01025	
040812151943
02/04/2023	01024	
022436384243
31/03/2023	01023	
010910153042
29/03/2023	01022	
030612282943
26/03/2023	01021	
061618253445
24/03/2023	01020	
061415182441
22/03/2023	01019	
050810151741
19/03/2023	01018	
020710212835
17/03/2023	01017	
050712222633
15/03/2023	01016	
111923283435
12/03/2023	01015	
102829313337
10/03/2023	01014	
030513223644
08/03/2023	01013	
101322252836
05/03/2023	01012	
091124313644
03/03/2023	01011	
102226273343
01/03/2023	01010	
131429333843
26/02/2023	01009	
040916262842
24/02/2023	01008	
011016223544
22/02/2023	01007	
081622232838
19/02/2023	01006	
022022282938
17/02/2023	01005	
010510132325
15/02/2023	01004	
010208202431
12/02/2023	01003	
030511232442
10/02/2023	01002	
011123273339
08/02/2023	01001	
061820222634
05/02/2023	01000	
131523293134
03/02/2023	00999	
041116303343
01/02/2023	00998	
162127293444
29/01/2023	00997	
052126273233
27/01/2023	00996	
101321294143
25/01/2023	00995	
121418222831
20/01/2023	00994	
030713293244
15/01/2023	00993	
080915212645
13/01/2023	00992	
031114202642
11/01/2023	00991	
011822333443
08/01/2023	00990	
112932394043
06/01/2023	00989	
020716253538
04/01/2023	00988	
030507373942
01/01/2023	00987	
162026303240
30/12/2022	00986	
032431353942
28/12/2022	00985	
040510213337
25/12/2022	00984	
151721283743
23/12/2022	00983	
021421223543
21/12/2022	00982	
081220263537
18/12/2022	00981	
021213333642
16/12/2022	00980	
061922263839
14/12/2022	00979	
132935373841
11/12/2022	00978	
091116172233
09/12/2022	00977	
042325304041
07/12/2022	00976	
081119242642
04/12/2022	00975	
040507092739
02/12/2022	00974	
021821243844
30/11/2022	00973	
071520253237
27/11/2022	00972	
012627353643
25/11/2022	00971	
142024303541
23/11/2022	00970	
041315203738
20/11/2022	00969	
010414222440
18/11/2022	00968	
151622252933
16/11/2022	00967	
020312323544
13/11/2022	00966	
030427324043
11/11/2022	00965	
020309151743
09/11/2022	00964	
070916203032
06/11/2022	00963	
081012141731
04/11/2022	00962	
091316243345
02/11/2022	00961	
021723273742
30/10/2022	00960	
152731363841
28/10/2022	00959	
162122334245
26/10/2022	00958	
020310153136
23/10/2022	00957	
021118333645
21/10/2022	00956	
101617183442
19/10/2022	00955	
010307102129
16/10/2022	00954	
020519263840
14/10/2022	00953	
010622253034
12/10/2022	00952	
010713162735
09/10/2022	00951	
131520253543
07/10/2022	00950	
182029343638
05/10/2022	00949	
091823242934
02/10/2022	00948	
031728303132
30/09/2022	00947	
041119203541
28/09/2022	00946	
040507242730
25/09/2022	00945	
030508313334
23/09/2022	00944	
011221283044
21/09/2022	00943	
051014254245
18/09/2022	00942	
030510172529
16/09/2022	00941	
022635414243
14/09/2022	00940	
031215202445
11/09/2022	00939	
041520314344
09/09/2022	00938	
040613142839
07/09/2022	00937	
080910203538
04/09/2022	00936	
051719273539
02/09/2022	00935	
020314213133
31/08/2022	00934	
041028293134
28/08/2022	00933	
081631373941
26/08/2022	00932	
033031323645
24/08/2022	00931	
122021232734
21/08/2022	00930	
051921232836
19/08/2022	00929	
252633394143
17/08/2022	00928	
232935373945
14/08/2022	00927	
091321243435
12/08/2022	00926	
050716203641
10/08/2022	00925	
040810152631
07/08/2022	00924	
060910132427
05/08/2022	00923	
101314323742
03/08/2022	00922	
051430363842
31/07/2022	00921	
030815164042
29/07/2022	00920	
050711203137
27/07/2022	00919	
091518223241
24/07/2022	00918	
041117293044
22/07/2022	00917	
041018223137
20/07/2022	00916	
050620222639
17/07/2022	00915	
071320232729
15/07/2022	00914	
043035394243
13/07/2022	00913	
040921283537
10/07/2022	00912	
122329363741
08/07/2022	00911	
060712182143
06/07/2022	00910	
041214154142
03/07/2022	00909	
081417202140
01/07/2022	00908	
172630313339
29/06/2022	00907	
011920273032
26/06/2022	00906	
030708182736
24/06/2022	00905	
071618323444
22/06/2022	00904	
032023303335
19/06/2022	00903	
012425313940
17/06/2022	00902	
050826293544
15/06/2022	00901	
010612203639
12/06/2022	00900	
061419224042
10/06/2022	00899	
102325263041
08/06/2022	00898	
021013152236
05/06/2022	00897	
060821283035
03/06/2022	00896	
050834383941
01/06/2022	00895	
061021232839
29/05/2022	00894	
020619243042
27/05/2022	00893	
162123273541
25/05/2022	00892	
192627394445
22/05/2022	00891	
010710243340
20/05/2022	00890	
121734394445
18/05/2022	00889	
031723374042
15/05/2022	00888	
052021313437
13/05/2022	00887	
070818294144
11/05/2022	00886	
020607183441
08/05/2022	00885	
041220253537
06/05/2022	00884	
010315163443
04/05/2022	00883	
010423283338
01/05/2022	00882	
082126353742
29/04/2022	00881	
051216252632
27/04/2022	00880	
030914172732
24/04/2022	00879	
091223303240
22/04/2022	00878	
111315182436
20/04/2022	00877	
010817212737
17/04/2022	00876	
051315283840
15/04/2022	00875	
091821253544
13/04/2022	00874	
010720254041
10/04/2022	00873	
041728303842
08/04/2022	00872	
021316192036
06/04/2022	00871	
131719253245
03/04/2022	00870	
051120264043
01/04/2022	00869	
021925324144
30/03/2022	00868	
011226283945
27/03/2022	00867	
081721394445
25/03/2022	00866	
011213272935
23/03/2022	00865	
020937384043
20/03/2022	00864	
010910122244
18/03/2022	00863	
061015294142
16/03/2022	00862	
101114243145
13/03/2022	00861	
010519202338
11/03/2022	00860	
062023293445
09/03/2022	00859	
031535394043
06/03/2022	00858	
111621333442
04/03/2022	00857	
031921242738
02/03/2022	00856	
071013202134
27/02/2022	00855	
102025273845
25/02/2022	00854	
101330333941
23/02/2022	00853	
021618192429
20/02/2022	00852	
040616304344
18/02/2022	00851	
031420262836
16/02/2022	00850	
020508162242
13/02/2022	00849	
142122242845
11/02/2022	00848	
101119384144
09/02/2022	00847	
032027374445
06/02/2022	00846	
050921243439
04/02/2022	00845	
111618384043
02/02/2022	00844	
050614203138
30/01/2022	00843	
010722262841
28/01/2022	00842	
040612262739
26/01/2022	00841	
051115182743
23/01/2022	00840	
132024323440
21/01/2022	00839	
011317242742
19/01/2022	00838	
142125343739
16/01/2022	00837	
010304053233
14/01/2022	00836	
051427303845
12/01/2022	00835	
030613153644
09/01/2022	00834	
060711223541
07/01/2022	00833	
101324283844
05/01/2022	00832	
010308093540
02/01/2022	00831	
111730364145
31/12/2021	00830	
020512334145
29/12/2021	00829	
052733343840
26/12/2021	00828	
041116243544
24/12/2021	00827	
031725263638
22/12/2021	00826	
081617232838
19/12/2021	00825	
121524303645
17/12/2021	00824	
081516212533
15/12/2021	00823	
031829303941
12/12/2021	00822	
162129404143
10/12/2021	00821	
010417192442
08/12/2021	00820	
020316192234
05/12/2021	00819	
030506313435
03/12/2021	00818	
101429373840
01/12/2021	00817	
080930313845
28/11/2021	00816	
131726273137
26/11/2021	00815	
041825293234
24/11/2021	00814	
021018233436
21/11/2021	00813	
011229404445
19/11/2021	00812	
091026283943
17/11/2021	00811	
041525263235
14/11/2021	00810	
030518284243
12/11/2021	00809	
111418243537
10/11/2021	00808	
171819202744
07/11/2021	00807	
052024253536
05/11/2021	00806	
101636404142
03/11/2021	00805	
031315232444
31/10/2021	00804	
091417183641
29/10/2021	00803	
171922313234
27/10/2021	00802	
131726293339
24/10/2021	00801	
062931323944
22/10/2021	00800	
030506092843
20/10/2021	00799	
050933404145
17/10/2021	00798	
041221222740
15/10/2021	00797	
051317202945
13/10/2021	00796	
203437394142
10/10/2021	00795	
032526294042
08/10/2021	00794	
041318233343
06/10/2021	00793	
091115203236
03/10/2021	00792	
061228303942
01/10/2021	00791	
111517272845
29/09/2021	00790	
061516273642
26/09/2021	00789	
132734353641
24/09/2021	00788	
010407141641
22/09/2021	00787	
051019223645
19/09/2021	00786	
062428313643
17/09/2021	00785	
061015373944
15/09/2021	00784	
111417242935
12/09/2021	00783	
040821293345
10/09/2021	00782	
101622364344
08/09/2021	00781	
041828323640
05/09/2021	00780	
151825272934
03/09/2021	00779	
061118233244
01/09/2021	00778	
061333344045
29/08/2021	00777	
011821252735
27/08/2021	00776	
041011152437
25/08/2021	00775	
010305172233
22/08/2021	00774	
060718254043
20/08/2021	00773	
040817273236
18/08/2021	00772	
101619272836
23/07/2021	00771	
192631334142
21/07/2021	00770	
081012293437
18/07/2021	00769	
030819212536
16/07/2021	00768	
010918264145
14/07/2021	00767	
041122293743
11/07/2021	00766	
020815171930
09/07/2021	00765	
040917182832
07/07/2021	00764	
010613303443
04/07/2021	00763	
031415212637
02/07/2021	00762	
011415183245
30/06/2021	00761	
020506081032
27/06/2021	00760	
051029374244
25/06/2021	00759	
030506232439
23/06/2021	00758	
040720283341
20/06/2021	00757	
102427424345
18/06/2021	00756	
101128294042
16/06/2021	00755	
111924283139
13/06/2021	00754	
031012133644
11/06/2021	00753	
081213143240
09/06/2021	00752	
020718202436
06/06/2021	00751	
050710131442
04/06/2021	00750	
192431323536
02/06/2021	00749	
102022263142
30/05/2021	00748	
071019304045
28/05/2021	00747	
021533414445
26/05/2021	00746	
011022363845
23/05/2021	00745	
111422262944
21/05/2021	00744	
042837384042
19/05/2021	00743	
031223293334
16/05/2021	00742	
132333374043
14/05/2021	00741	
031116202430
12/05/2021	00740	
091522273442
09/05/2021	00739	
010716242737
07/05/2021	00738	
102021273334
05/05/2021	00737	
031420223744
02/05/2021	00736	
070830354044
30/04/2021	00735	
030420213641
28/04/2021	00734	
213940414345
25/04/2021	00733	
081921283244
23/04/2021	00732	
131618223439
21/04/2021	00731	
031219273235
18/04/2021	00730	
070915232627
16/04/2021	00729	
080911283039
14/04/2021	00728	
111216183335
11/04/2021	00727	
032327323439
09/04/2021	00726	
030408171937
07/04/2021	00725	
131519253334
04/04/2021	00724	
052027303843
02/04/2021	00723	
010509164244
31/03/2021	00722	
020406364142
28/03/2021	00721	
232640414344
26/03/2021	00720	
021115182342
24/03/2021	00719	
071423263739
21/03/2021	00718	
080911313639
19/03/2021	00717	
050624343637
17/03/2021	00716	
061126283641
14/03/2021	00715	
010911323442
12/03/2021	00714	
051117343842
10/03/2021	00713	
051415192533
07/03/2021	00712	
041225283345
05/03/2021	00711	
091113212741
03/03/2021	00710	
012028374044
28/02/2021	00709	
040525282942
26/02/2021	00708	
111319273741
24/02/2021	00707	
021319334043
21/02/2021	00706	
060722242737
19/02/2021	00705	
121922233444
17/02/2021	00704	
031821223644
14/02/2021	00703	
031318213944
10/02/2021	00702	
081318192124
07/02/2021	00701	
010407154142
05/02/2021	00700	
020831324244
03/02/2021	00699	
070914233541
31/01/2021	00698	
040607113441
29/01/2021	00697	
060708293539
27/01/2021	00696	
010711284144
24/01/2021	00695	
080923253132
22/01/2021	00694	
010607202843
20/01/2021	00693	
072029304045
17/01/2021	00692	
040532394042
15/01/2021	00691	
040610132643
13/01/2021	00690	
192021283341
10/01/2021	00689	
101122323843
08/01/2021	00688	
081922253235
06/01/2021	00687	
222730354045
03/01/2021	00686	
043134364043
01/01/2021	00685	
101624263032
30/12/2020	00684	
011320263537
27/12/2020	00683	
031117193439
25/12/2020	00682	
061215223339
23/12/2020	00681	
071117313540
20/12/2020	00680	
151828303444
18/12/2020	00679	
040914233238
16/12/2020	00678	
101122273641
13/12/2020	00677	
101220364144
11/12/2020	00676	
232425353739
09/12/2020	00675	
162427313643
06/12/2020	00674	
112124272937
04/12/2020	00673	
030533374143
02/12/2020	00672	
040507102539
29/11/2020	00671	
060714183743
27/11/2020	00670	
010912133743
25/11/2020	00669	
010507082540
22/11/2020	00668	
091617243240
20/11/2020	00667	
021724293137
18/11/2020	00666	
181921313944
15/11/2020	00665	
141621294041
13/11/2020	00664	
082223333436
11/11/2020	00663	
041012172035
08/11/2020	00662	
031214162333
06/11/2020	00661	
192430323637
04/11/2020	00660	
030811132638
01/11/2020	00659	
062127303244
30/10/2020	00658	
040514182343
28/10/2020	00657	
010407153545
25/10/2020	00656	
111930384145
23/10/2020	00655	
051016233445
21/10/2020	00654	
041126363841
18/10/2020	00653	
011425263040
16/10/2020	00652	
041416232427
14/10/2020	00651	
040723324344
11/10/2020	00650	
121828314045
09/10/2020	00649	
151923303339
07/10/2020	00648	
131525262834
04/10/2020	00647	
091619252639
02/10/2020	00646	
091121313237
30/09/2020	00645	
020531324244
27/09/2020	00644	
011226313738
25/09/2020	00643	
142022354445
23/09/2020	00642	
020817233041
20/09/2020	00641	
050709131516
18/09/2020	00640	
101921232733
16/09/2020	00639	
052029303840
13/09/2020	00638	
202328374044
11/09/2020	00637	
041113161733
09/09/2020	00636	
192134353639
06/09/2020	00635	
010619293144
04/09/2020	00634	
071620304041
02/09/2020	00633	
081014161824
30/08/2020	00632	
060818192933
28/08/2020	00631	
101114232737
26/08/2020	00630	
021824283542
23/08/2020	00629	
101419253639
21/08/2020	00628	
070826303743
19/08/2020	00627	
072036374345
16/08/2020	00626	
020506203339
14/08/2020	00625	
091821243441
12/08/2020	00624	
072134384344
09/08/2020	00623	
111314434445
07/08/2020	00622	
172635404344
05/08/2020	00621	
141819323338
02/08/2020	00620	
060912174142
31/07/2020	00619	
040919293641
29/07/2020	00618	
061426414243
26/07/2020	00617	
051521394345
24/07/2020	00616	
042531353941
22/07/2020	00615	
091318242642
19/07/2020	00614	
011314194245
17/07/2020	00613	
041018203245
15/07/2020	00612	
101118192045
12/07/2020	00611	
021521273135
10/07/2020	00610	
182022333539
08/07/2020	00609	
141517213138
05/07/2020	00608	
050810172231
03/07/2020	00607	
040517182236
01/07/2020	00606	
101314263233
28/06/2020	00605	
041524363741
26/06/2020	00604	
092327303841
24/06/2020	00603	
071718323940
21/06/2020	00602	
070913334044
19/06/2020	00601	
041217193245
17/06/2020	00600	
071628333445
14/06/2020	00599	
192224414445
12/06/2020	00598	
051622273031
10/06/2020	00597	
021123252635
07/06/2020	00596	
060711162344
05/06/2020	00595	
101322283843
03/06/2020	00594	
011517194043
31/05/2020	00593	
010613273540
29/05/2020	00592	
041023263537
27/05/2020	00591	
061529303742
24/05/2020	00590	
012930323435
22/05/2020	00589	
030819283541
20/05/2020	00588	
010815232539
17/05/2020	00587	
020421303337
15/05/2020	00586	
031213283336
13/05/2020	00585	
062021354045
10/05/2020	00584	
070923323337
08/05/2020	00583	
010307122225
06/05/2020	00582	
031825293044
03/05/2020	00581	
051829323844
01/05/2020	00580	
060716374044
29/04/2020	00579	
010811131532
26/04/2020	00578	
052530363741
24/04/2020	00577	
103137394043
29/03/2020	00576	
071023363944
27/03/2020	00575	
010610353645
25/03/2020	00574	
263133373845
22/03/2020	00573	
021019222429
20/03/2020	00572	
082329373944
18/03/2020	00571	
062130373845
15/03/2020	00570	
040711171931
13/03/2020	00569	
081320283545
11/03/2020	00568	
121629353744
08/03/2020	00567	
031317192143
06/03/2020	00566	
060910162642
04/03/2020	00565	
010717243541
01/03/2020	00564	
010607132639
28/02/2020	00563	
021923272938
26/02/2020	00562	
021012202439
23/02/2020	00561	
010616233442
21/02/2020	00560	
131522282941
19/02/2020	00559	
011623253038
16/02/2020	00558	
010414363741
14/02/2020	00557	
041424323643
12/02/2020	00556	
051316202435
09/02/2020	00555	
010418222635
07/02/2020	00554	
061115334044
05/02/2020	00553	
091924373845
02/02/2020	00552	
010416323538
31/01/2020	00551	
080920253040
29/01/2020	00550	
031016243944
26/01/2020	00549	
040509253337
22/01/2020	00548	
011516343642
19/01/2020	00547	
010419253539
17/01/2020	00546	
082628374042
15/01/2020	00545	
020819313844
12/01/2020	00544	
071217213545
10/01/2020	00543	
101824354143
08/01/2020	00542	
020410212543
05/01/2020	00541	
051112264445
03/01/2020	00540	
011517263244
01/01/2020	00539	
081023263738
29/12/2019	00538	
071221243543
27/12/2019	00537	
020710123343
25/12/2019	00536	
101825263643
22/12/2019	00535	
091011182236
20/12/2019	00534	
010916273845
18/12/2019	00533	
080912192225
15/12/2019	00532	
031315162236
13/12/2019	00531	
020809252640
11/12/2019	00530	
010208272939
08/12/2019	00529	
122030313444
06/12/2019	00528	
022026354345
04/12/2019	00527	
161924303235
01/12/2019	00526	
031416273135
29/11/2019	00525	
141516171934
27/11/2019	00524	
030513192033
24/11/2019	00523	
052124282934
22/11/2019	00522	
010910193038
20/11/2019	00521	
102122244344
17/11/2019	00520	
060714313944
15/11/2019	00519	
021327334041
13/11/2019	00518	
171924303140
10/11/2019	00517	
041421283236
08/11/2019	00516	
041619303244
06/11/2019	00515	
031522233843
03/11/2019	00514	
283032384445
01/11/2019	00513	
061120303740
30/10/2019	00512	
020508122938
27/10/2019	00511	
011929304042
25/10/2019	00510	
040709223237
23/10/2019	00509	
020921233241
20/10/2019	00508	
010308153840
18/10/2019	00507	
041415222839
16/10/2019	00506	
010423284142
13/10/2019	00505	
062228313740
11/10/2019	00504	
061214272836
09/10/2019	00503	
031221242832
06/10/2019	00502	
010617304445
04/10/2019	00501	
020924253036
02/10/2019	00500	
020607252841
29/09/2019	00499	
020912182123
27/09/2019	00498	
060911283744
25/09/2019	00497	
091422264445
22/09/2019	00496	
030621363839
20/09/2019	00495	
071224293145
18/09/2019	00494	
030913171920
15/09/2019	00493	
080928333543
13/09/2019	00492	
021517253038
11/09/2019	00491	
212529323435
08/09/2019	00490	
060911262836
06/09/2019	00489	
020413152631
04/09/2019	00488	
010911233037
01/09/2019	00487	
050714162940
30/08/2019	00486	
050622232544
28/08/2019	00485	
010412141930
25/08/2019	00484	
070815202431
23/08/2019	00483	
060712171924
21/08/2019	00482	
060817202131
18/08/2019	00481	
020718212433
16/08/2019	00480	
061415193139
14/08/2019	00479	
132022243334
11/08/2019	00478	
010407092531
09/08/2019	00477	
111926283042
07/08/2019	00476	
010513313243
04/08/2019	00475	
061021304345
02/08/2019	00474	
111820222526
31/07/2019	00473	
061215192545
28/07/2019	00472	
051416244243
26/07/2019	00471	
051416222533
24/07/2019	00470	
202225394445
21/07/2019	00469	
070810243344
19/07/2019	00468	
091223262843
17/07/2019	00467	
101116222835
14/07/2019	00466	
020307253334
12/07/2019	00465	
161824264044
10/07/2019	00464	
010206071627
07/07/2019	00463	
021821233031
05/07/2019	00462	
192130313743
03/07/2019	00461	
020725293945
30/06/2019	00460	
052022252832
28/06/2019	00459	
112537404145
26/06/2019	00458	
010509103341
23/06/2019	00457	
030811273236
21/06/2019	00456	
010419212339
19/06/2019	00455	
020411153540
16/06/2019	00454	
060719293136
14/06/2019	00453	
021216363745
12/06/2019	00452	
101121232637
09/06/2019	00451	
020622253536
07/06/2019	00450	
111315262741
05/06/2019	00449	
040822253739
02/06/2019	00448	
020512354143
31/05/2019	00447	
050607122330
29/05/2019	00446	
121819273542
26/05/2019	00445	
111214232932
24/05/2019	00444	
020331333540
22/05/2019	00443	
011316222335
19/05/2019	00442	
021119273042
17/05/2019	00441	
061618293943
15/05/2019	00440	
172829333435
12/05/2019	00439	
010813172143
10/05/2019	00438	
052325303538
08/05/2019	00437	
010708313445
05/05/2019	00436	
132730383941
03/05/2019	00435	
010614313544
01/05/2019	00434	
182324273341
28/04/2019	00433	
042428303343
26/04/2019	00432	
010214151630
24/04/2019	00431	
040712132045
21/04/2019	00430	
081113204143
19/04/2019	00429	
010405121721
17/04/2019	00428	
071121253044
14/04/2019	00427	
041320343537
12/04/2019	00426	
031215161744
10/04/2019	00425	
071114303542
07/04/2019	00424	
081026283234
05/04/2019	00423	
020725363843
03/04/2019	00422	
041118333445
31/03/2019	00421	
030519283138
29/03/2019	00420	
021926273037
27/03/2019	00419	
091222243042
24/03/2019	00418	
051721273440
22/03/2019	00417	
010306131841
20/03/2019	00416	
020717242937
17/03/2019	00415	
050616182442
15/03/2019	00414	
051015193842
13/03/2019	00413	
051624263444
10/03/2019	00412	
052431324245
08/03/2019	00411	
041420273243
06/03/2019	00410	
020714244041
03/03/2019	00409	
011317203045
01/03/2019	00408	
152329313843
27/02/2019	00407	
051215162535
24/02/2019	00406	
010713233242
22/02/2019	00405	
071018254445
20/02/2019	00404	
011015243745
17/02/2019	00403	
111214252931
15/02/2019	00402	
032226273044
13/02/2019	00401	
051118333741
10/02/2019	00400	
011117252935
08/02/2019	00399	
111233363943
06/02/2019	00398	
222425303338
03/02/2019	00397	
010205092324
01/02/2019	00396	
030406383943
30/01/2019	00395	
010406133741
27/01/2019	00394	
091112222729
25/01/2019	00393	
111314223038
23/01/2019	00392	
020913293340
20/01/2019	00391	
081621313538
18/01/2019	00390	
121519384045
16/01/2019	00389	
010814243140
13/01/2019	00388	
012021232633
11/01/2019	00387	
192122232544
09/01/2019	00386	
172728303341
06/01/2019	00385	
092233343544
04/01/2019	00384	
010814161922
02/01/2019	00383	
041432353640
30/12/2018	00382	
101931354244
28/12/2018	00381	
032224253137
26/12/2018	00380	
212834354144
23/12/2018	00379	
010310111644
21/12/2018	00378	
010716272934
19/12/2018	00377	
021011324044
16/12/2018	00376	
011422263542
14/12/2018	00375	
071620263034
12/12/2018	00374	
010311152730
09/12/2018	00373	
060826344041
07/12/2018	00372	
010607223139
05/12/2018	00371	
072829394245
02/12/2018	00370	
020412233745
30/11/2018	00369	
111823252835
28/11/2018	00368	
081320212528
25/11/2018	00367	
030511182429
23/11/2018	00366	
081012212540
21/11/2018	00365	
070916192433
18/11/2018	00364	
062728303744
16/11/2018	00363	
041218212541
14/11/2018	00362	
121424263040
11/11/2018	00361	
202326273234
09/11/2018	00360	
061828323435
07/11/2018	00359	
061822253137
04/11/2018	00358	
071213172530
02/11/2018	00357	
040611182425
31/10/2018	00356	
172226303335
28/10/2018	00355	
091819203145
26/10/2018	00354	
021831333641
24/10/2018	00353	
062634353942
21/10/2018	00352	
062224283037
19/10/2018	00351	
021430383945
17/10/2018	00350	
011214363943
14/10/2018	00349	
070809344043
12/10/2018	00348	
111220262842
10/10/2018	00347	
181922284142
07/10/2018	00346	
141831343944
05/10/2018	00345	
041217293544
03/10/2018	00344	
061219212545
30/09/2018	00343	
012024364345
28/09/2018	00342	
020611131538
26/09/2018	00341	
121927394245
23/09/2018	00340	
182732354144
21/09/2018	00339	
010311142329
19/09/2018	00338	
102022242742
16/09/2018	00337	
031317182334
14/09/2018	00336	
121617182634
12/09/2018	00335	
111213162931
09/09/2018	00334	
081418214445
07/09/2018	00333	
081011284245
05/09/2018	00332	
050622273437
02/09/2018	00331	
101213222640
31/08/2018	00330	
111930363840
29/08/2018	00329	
161724283036
26/08/2018	00328	
010311122236
24/08/2018	00327	
032225293340
22/08/2018	00326	
151718333444
19/08/2018	00325	
161828363745
17/08/2018	00324	
030822283342
15/08/2018	00323	
122425334044
12/08/2018	00322	
051617283138
10/08/2018	00321	
182224294145
08/08/2018	00320	
193437394144
05/08/2018	00319	
071018313943
03/08/2018	00318	
030810242728
01/08/2018	00317	
050629303738
29/07/2018	00316	
263132374345
27/07/2018	00315	
022132373842
25/07/2018	00314	
091618384145
22/07/2018	00313	
080924274045
20/07/2018	00312	
131416192023
18/07/2018	00311	
081014192634
15/07/2018	00310	
071520293138
13/07/2018	00309	
030809252728
11/07/2018	00308	
122628293943
08/07/2018	00307	
020708102844
06/07/2018	00306	
222633343842
04/07/2018	00305	
020327283443
01/07/2018	00304	
040715283437
29/06/2018	00303	
061822243639
27/06/2018	00302	
252729333738
24/06/2018	00301	
060823323341
22/06/2018	00300	
151920263439
20/06/2018	00299	
021822303243
17/06/2018	00298	
030506073440
15/06/2018	00297	
081113232428
13/06/2018	00296	
020417243140
10/06/2018	00295	
222535363839
08/06/2018	00294	
041332354042
06/06/2018	00293	
062022264344
03/06/2018	00292	
182024404245
01/06/2018	00291	
061419384344
30/05/2018	00290	
021719273136
27/05/2018	00289	
050917181922
25/05/2018	00288	
051422262939
23/05/2018	00287	
131625343741
20/05/2018	00286	
181925262939
18/05/2018	00285	
031824293035
16/05/2018	00284	
102123253538
13/05/2018	00283	
061116182741
11/05/2018	00282	
101126293338
09/05/2018	00281	
091520303133
06/05/2018	00280	
112628343637
04/05/2018	00279	
091825262729
02/05/2018	00278	
101122293740
29/04/2018	00277	
031022232543
27/04/2018	00276	
102024272829
25/04/2018	00275	
041517232943
22/04/2018	00274	
060722323639
20/04/2018	00273	
060914303342
18/04/2018	00272	
061628293944
15/04/2018	00271	
030913203034
13/04/2018	00270	
112224333843
11/04/2018	00269	
072023252639
08/04/2018	00268	
020511163034
06/04/2018	00267	
010708093640
04/04/2018	00266	
020306164144
01/04/2018	00265	
041224333943
30/03/2018	00264	
071118283443
28/03/2018	00263	
121831343542
25/03/2018	00262	
041013223842
23/03/2018	00261	
030612222635
21/03/2018	00260	
061938404144
18/03/2018	00259	
142124283140
16/03/2018	00258	
060813172034
14/03/2018	00257	
122123273134
11/03/2018	00256	
011419264142
09/03/2018	00255	
051013192544
07/03/2018	00254	
081925313740
04/03/2018	00253	
041119253240
02/03/2018	00252	
030715274145
28/02/2018	00251	
171921233640
25/02/2018	00250	
081012293042
23/02/2018	00249	
051619232937
21/02/2018	00248	
182324262933
18/02/2018	00247	
010514163638
14/02/2018	00246	
123132343543
11/02/2018	00245	
051927324145
09/02/2018	00244	
021014192337
07/02/2018	00243	
050718263036
04/02/2018	00242	
010513274045
02/02/2018	00241	
020714284245
31/01/2018	00240	
040709103040
28/01/2018	00239	
122627333637
26/01/2018	00238	
010918283644
24/01/2018	00237	
050624334245
21/01/2018	00236	
011011243237
19/01/2018	00235	
020427283136
17/01/2018	00234	
091012222741
14/01/2018	00233	
010610293241
12/01/2018	00232	
040817232734
10/01/2018	00231	
061821223745
07/01/2018	00230	
040611132431
05/01/2018	00229	
193034384244
03/01/2018	00228	
081419303335
31/12/2017	00227	
031314263034
29/12/2017	00226	
020817202939
27/12/2017	00225	
091319212730
24/12/2017	00224	
010509143031
22/12/2017	00223	
091317222633
20/12/2017	00222	
030825374042
17/12/2017	00221	
040716274041
15/12/2017	00220	
131417242843
13/12/2017	00219	
040719243238
10/12/2017	00218	
273639434445
08/12/2017	00217	
021115324044
06/12/2017	00216	
030729313443
03/12/2017	00215	
080915182730
01/12/2017	00214	
101930353945
29/11/2017	00213	
192326373841
26/11/2017	00212	
041217192334
24/11/2017	00211	
142432343645
22/11/2017	00210	
050609232735
19/11/2017	00209	
142030334143
17/11/2017	00208	
111318193145
15/11/2017	00207	
010915273343
12/11/2017	00206	
222637404244
10/11/2017	00205	
010419212435
08/11/2017	00204	
011823244041
05/11/2017	00203	
031738394144
03/11/2017	00202	
071720222944
01/11/2017	00201	
041225394244
29/10/2017	00200	
010528314445
27/10/2017	00199	
041013212238
25/10/2017	00198	
121723253438
22/10/2017	00197	
081416173142
20/10/2017	00196	
021825333642
18/10/2017	00195	
162432363740
15/10/2017	00194	
020914213540
13/10/2017	00193	
101320212536
11/10/2017	00192	
041114151926
08/10/2017	00191	
081624273539
06/10/2017	00190	
040618203045
04/10/2017	00189	
040509193744
01/10/2017	00188	
082327363743
29/09/2017	00187	
232830353742
27/09/2017	00186	
101933343545
24/09/2017	00185	
041011313639
22/09/2017	00184	
051621313741
20/09/2017	00183	
050713172333
17/09/2017	00182	
061115163740
15/09/2017	00181	
032435374043
13/09/2017	00180	
030819353840
10/09/2017	00179	
012223353642
08/09/2017	00178	
021517324144
06/09/2017	00177	
052024323642
03/09/2017	00176	
050626283543
01/09/2017	00175	
091013192341
30/08/2017	00174	
050811283541
27/08/2017	00173	
030716323639
25/08/2017	00172	
020712274044
23/08/2017	00171	
062527344243
20/08/2017	00170	
051518213745
18/08/2017	00169	
030418223437
16/08/2017	00168	
061115192241
13/08/2017	00167	
010306071618
11/08/2017	00166	
011219353641
09/08/2017	00165	
111922242531
06/08/2017	00164	
020910112143
04/08/2017	00163	
031213232637
02/08/2017	00162	
071017262843
30/07/2017	00161	
081724354144
28/07/2017	00160	
010409263539
26/07/2017	00159	
092627304044
23/07/2017	00158	
070913212839
21/07/2017	00157	
050609151932
19/07/2017	00156	
040713203544
16/07/2017	00155	
021027293739
14/07/2017	00154	
021319242533
12/07/2017	00153	
050914152642
09/07/2017	00152	
010914182528
07/07/2017	00151	
041922303435
05/07/2017	00150	
010416313740
02/07/2017	00149	
010507161944
30/06/2017	00148	
010710384042
28/06/2017	00147	
020621283940
25/06/2017	00146	
031433384244
23/06/2017	00145	
091021374042
21/06/2017	00144	
092629303537
18/06/2017	00143	
020812141626
16/06/2017	00142	
061017212738
14/06/2017	00141	
050815253135
11/06/2017	00140	
050611143233
09/06/2017	00139	
071519243242
07/06/2017	00138	
050613293544
04/06/2017	00137	
010923323435
02/06/2017	00136	
051316323941
31/05/2017	00135	
071316303744
28/05/2017	00134	
020717243144
26/05/2017	00133	
060825394045
24/05/2017	00132	
082025273033
21/05/2017	00131	
111417222742
19/05/2017	00130	
010818283033
17/05/2017	00129	
070811182342
14/05/2017	00128	
131517212540
12/05/2017	00127	
012735424345
10/05/2017	00126	
071721294044
07/05/2017	00125	
010728324445
05/05/2017	00124	
040912323643
03/05/2017	00123	
031920212545
30/04/2017	00122	
020608111225
28/04/2017	00121	
020911121523
26/04/2017	00120	
141617203539
23/04/2017	00119	
131722303143
21/04/2017	00118	
070815303239
19/04/2017	00117	
192032333844
16/04/2017	00116	
060718293244
14/04/2017	00115	
040510333638
12/04/2017	00114	
020308131941
09/04/2017	00113	
050821252637
07/04/2017	00112	
040516173240
05/04/2017	00111	
131420212333
02/04/2017	00110	
030507122733
31/03/2017	00109	
010405112030
29/03/2017	00108	
040524262837
26/03/2017	00107	
061223252943
24/03/2017	00106	
101430323742
22/03/2017	00105	
010924283336
19/03/2017	00104	
010206123136
17/03/2017	00103	
071224434445
15/03/2017	00102	
030910313240
12/03/2017	00101	
061130323542
10/03/2017	00100	
040921273844
08/03/2017	00099	
051114203242
05/03/2017	00098	
182124263945
03/03/2017	00097	
020413222341
01/03/2017	00096	
030426303544
26/02/2017	00095	
071116193839
24/02/2017	00094	
020419234445
22/02/2017	00093	
010308182842
19/02/2017	00092	
011724253335
17/02/2017	00091	
121525273741
15/02/2017	00090	
041619272930
12/02/2017	00089	
040612212328
10/02/2017	00088	
020610132028
08/02/2017	00087	
152629323438
05/02/2017	00086	
011126293440
03/02/2017	00085	
081731323339
01/02/2017	00084	
021011182233
29/01/2017	00083	
051321272945
25/01/2017	00082	
060914182830
22/01/2017	00081	
012021222629
20/01/2017	00080	
011131323437
18/01/2017	00079	
112226283543
15/01/2017	00078	
052527293143
13/01/2017	00077	
122429323739
11/01/2017	00076	
020821293745
08/01/2017	00075	
121829323945
06/01/2017	00074	
223034364345
04/01/2017	00073	
041925272931
01/01/2017	00072	
091824333639
30/12/2016	00071	
072327293537
28/12/2016	00070	
022225333843
25/12/2016	00069	
051220293436
23/12/2016	00068	
011724253743
21/12/2016	00067	
030612141840
18/12/2016	00066	
030730324143
16/12/2016	00065	
050833343944
14/12/2016	00064	
050612162630
11/12/2016	00063	
020304052224
09/12/2016	00062	
111215172126
07/12/2016	00061	
132327283245
04/12/2016	00060	
030513273844
02/12/2016	00059	
172633343742
30/11/2016	00058	
061517202341
27/11/2016	00057	
121617182230
25/11/2016	00056	
030425313740
23/11/2016	00055	
022223242837
20/11/2016	00054	
092333384142
18/11/2016	00053	
111216242631
16/11/2016	00052	
010917284344
13/11/2016	00051	
112325343645
11/11/2016	00050	
101722233036
09/11/2016	00049	
021014242530
06/11/2016	00048	
041516202641
04/11/2016	00047	
051322242832
02/11/2016	00046	
030508101322
30/10/2016	00045	
071225284044
28/10/2016	00044	
101113141638
26/10/2016	00043	
010816182128
23/10/2016	00042	
020512212240
21/10/2016	00041	
161730323438
19/10/2016	00040	
021315171841
16/10/2016	00039	
052131333842
14/10/2016	00038	
030709182839
12/10/2016	00037	
020815161925
09/10/2016	00036	
021520323344
07/10/2016	00035	
242527344445
05/10/2016	00034	
050619314244
02/10/2016	00033	
162327343538
30/09/2016	00032	
062030384045
28/09/2016	00031	
030617213240
25/09/2016	00030	
012028324244
23/09/2016	00029	
081419293040
21/09/2016	00028	
051215303741
18/09/2016	00027	
071017202532
16/09/2016	00026	
040506233134
14/09/2016	00025	
021114232532
11/09/2016	00024	
060910182031
09/09/2016	00023	
071316183132
07/09/2016	00022	
060812131519
04/09/2016	00021	
111520242745
02/09/2016	00020	
091324353641
31/08/2016	00019	
082021313439
28/08/2016	00018	
040610151644
26/08/2016	00017	
103639434445
24/08/2016	00016	
081721233640
21/08/2016	00015	
132124252944
19/08/2016	00014	
111217333436
17/08/2016	00013	
020409192126
14/08/2016	00012	
131617293137
12/08/2016	00011	
283134373841
10/08/2016	00010	
061516192730
07/08/2016	00009	
030517223031
05/08/2016	00008	
030913182431
03/08/2016	00007	
071025272940
31/07/2016	00006	
020619213539
29/07/2016	00005	
030813203036
27/07/2016	00004	
141721253137
24/07/2016	00003	
011016182338
22/07/2016	00002	
030414202535
20/07/2016	00001	
021733373845`,Mw="https://docs.google.com/spreadsheets/d/e/2PACX-1vTuQHHFRzAmMC_tHRnu8cCrr1k2eofH6e3cyk2_YqFfNmREGfR6cSyuIQJnr7OulqrBHF9wMueqpCsY/pub?gid=1819524273&single=true&output=csv",kw="https://docs.google.com/spreadsheets/d/e/2PACX-1vQvXzBIgByEQchrAuLnQJsBrzcm1V64WMbQvDURph3nk7eMz13T26APw3jo466Ijt4m9Gg4q6zgT3bx/pub?gid=974883964&single=true&output=csv",Ii=3,Cw=8e3,Hi=100,Gi=12;function Pw(t,n){var l,a;const r=t.split(/\r?\n/);for(;r.length>0&&r[r.length-1].trim()==="";)r.pop();if(r.length%2!==0)throw new Error("số dòng lẻ, thiếu dòng kết quả");if(r.length/2<Hi)throw new Error(`chỉ có ${r.length/2} kỳ, ít hơn ${Hi}`);const s=[];let o;for(let f=0;f<r.length;f+=2){const h=r[f].trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);if(!h)throw new Error(`dòng ${f+1} không bắt đầu bằng ngày dạng DD/MM/YYYY`);const[p,v,y,S]=h,k=(l=r[f].split(/[\t,]/)[1])==null?void 0:l.trim();(v.length<2||y.length<2)&&s.push(`dòng ${f+1} (kỳ ${k}): ngày "${p}" không đủ 2 chữ số, có thể gõ thiếu`);const q=Date.UTC(Number(S),Number(y)-1,Number(v));o!==void 0&&q>=o&&s.push(`dòng ${f+1} (kỳ ${k}): ngày "${p}" không nhỏ hơn ngày của kỳ ngay trước đó`),o=q;const $=(a=r[f+1].trim().match(/^\d+/))==null?void 0:a[0];if(!$)throw new Error(`dòng ${f+2} không có chuỗi kết quả`);const t0=$.padStart(Gi,"0");if(t0.length!==Gi)throw new Error(`dòng ${f+2}: kết quả sai độ dài`);const r0=t0.match(/.{2}/g).map(Number);if(new Set(r0).size!==6||r0.some(J=>J<1||J>n))throw new Error(`dòng ${f+2}: kết quả ${t0} không hợp lệ cho 6/${n}`);r[f+1]=r[f+1].trim().replace(/^\d+/,t0)}return{csv:r.join(`
`),số_kỳ:r.length/2,ngày_mới_nhất:r[0].trim().slice(0,10),cảnh_báo:s}}const Aw=t=>new Promise(n=>setTimeout(n,t));async function Dw(t,n){let r;for(let s=1;s<=Ii;s++){const o=new AbortController,l=setTimeout(()=>o.abort(),Cw);try{const a=await fetch(t,{cache:"no-store",signal:o.signal});if(!a.ok)throw new Error(`HTTP ${a.status}`);return Pw(await a.text(),n)}catch(a){r=a,s<Ii&&await Aw(500*s)}finally{clearTimeout(l)}}throw r}class wu{constructor(n){y2(this,"loại_xổ_số");y2(this,"vị_trí_dữ_liệu");y2(this,"ngày_xổ_số");y2(this,"kết_quả_xổ_số");y2(this,"số_jacpot_2");y2(this,"kỳ_xổ_số");y2(this,"tuần_xổ_số");y2(this,"giá_trị_ngày");y2(this,"giá_trị_tháng");y2(this,"giá_trị_năm");y2(this,"dấu_thời_gian_của_ngày");y2(this,"dấu_thời_gian_kỳ_sau_đó");y2(this,"dữ_liệu_kỳ_sau_đó");y2(this,"các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau",[]);y2(this,"danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện",[]);y2(this,"danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện",[]);y2(this,"số_kết_quả_trong_các_số_đã_xuất_hiện",0);y2(this,"tập_các_số_đã_xuất_hiện",new Set);y2(this,"dự_đoán_ds_xuất_hiện",[]);y2(this,"hiển_thị_dự_đoán_ds_xuất_hiện",!1);y2(this,"vị_trí_ds_xuất_hiện",[]);y2(this,"xem_dự_đoán","");this.loại_xổ_số=n.loại_xổ_số,this.vị_trí_dữ_liệu=n.vị_trí_dữ_liệu,this.ngày_xổ_số=n.ngày_xổ_số,this.kết_quả_xổ_số=n.kết_quả_xổ_số,this.số_jacpot_2=n.số_jacpot_2,this.kỳ_xổ_số=n.kỳ_xổ_số,this.tuần_xổ_số=n.tuần_xổ_số,this.giá_trị_ngày=n.giá_trị_ngày,this.giá_trị_tháng=n.giá_trị_tháng,this.giá_trị_năm=n.giá_trị_năm,this.dấu_thời_gian_của_ngày=n.dấu_thời_gian_của_ngày,this.dấu_thời_gian_kỳ_sau_đó=n.dấu_thời_gian_kỳ_sau_đó,this.dữ_liệu_kỳ_sau_đó=n.dữ_liệu_kỳ_sau_đó}}const Lw=t=>{const n=[1,2,3,4,5,6,7,8,9];for(let r=10;r<=100;r+=3)r<=t&&n.push(r);for(let r=200;r<=1e3;r+=80)r<=t&&n.push(r);for(let r=1100;r<=t+100;r+=80)n.push(r);return n},Ow={45:[3,5,0],55:[2,4,6]},Su=(t,n)=>{const r=new Date(t),s=r.getDay(),o=Ow[n];for(let l=1;l<=7;l++){const a=(s+l)%7;if(o.includes(a)){const f=new Date(r);return f.setDate(r.getDate()+l),f.getTime()}}return t},bu=(t,n,r=6)=>{const s=[];let o=t;for(let l=0;l<r;l++)o=Su(o,n),s.push(o);return s};let Mu=bw,ku=Sw;async function Ew(){const t=[{tên:"45",link:Mw,tổng_số:45,đặt:n=>Mu=n},{tên:"55",link:kw,tổng_số:55,đặt:n=>ku=n}];await Promise.all(t.map(async({tên:n,link:r,tổng_số:s,đặt:o})=>{try{const l=await Dw(r,s);o(l.csv),console.log(`dữ liệu ${n}: Google Sheet, ${l.số_kỳ} kỳ, mới nhất ${l.ngày_mới_nhất}`),l.cảnh_báo.forEach(a=>console.warn(`dữ liệu ${n}: ${a}`))}catch(l){console.warn(`dữ liệu ${n}: không tải được từ Google Sheet (${l.message}), dùng file CSV có sẵn trong dự án (có thể cũ)`)}}))}function Nw(){const n=Mu.split(`
`).map(s=>s.split(/\t|,/).map(o=>o.trim()).filter(o=>o!=="")),r=[];for(let s=0;s<n.length/2;s++){const o=n[2*s],l=n[2*s+1],[a,f]=o,h=l[0].match(/.{2}/g)||[],p=n0(a,"DD/MM/YYYY"),v=p.format("dddd"),y="",S=p.day().toString(),k=(p.month()+1).toString(),q=p.year().toString(),$=n0(p,"DD/MM/YYYY").valueOf(),t0=r[r.length-1],r0=r.length,J=bu($,45),c0=new wu({loại_xổ_số:45,vị_trí_dữ_liệu:r0,ngày_xổ_số:a,kết_quả_xổ_số:h,số_jacpot_2:y,kỳ_xổ_số:f,tuần_xổ_số:v,giá_trị_ngày:S,giá_trị_tháng:k,giá_trị_năm:q,dấu_thời_gian_của_ngày:$,dấu_thời_gian_kỳ_sau_đó:J,dữ_liệu_kỳ_sau_đó:t0});r.push(c0)}return r}function Rw(){const n=ku.split(`
`).map(s=>s.split(/\t|,| \|/).map(o=>o.trim()).filter(o=>o!=="")),r=[];for(let s=0;s<n.length/2;s++){const o=n[2*s],l=n[2*s+1],[a,f]=o,[h,p]=l,v=h.match(/.{2}/g)||[],y=n0(a,"DD/MM/YYYY"),S=y.format("dddd"),k=y.day().toString(),q=(y.month()+1).toString(),$=y.year().toString(),t0=n0(y,"DD/MM/YYYY").valueOf(),r0=r[r.length-1],J=bu(t0,55),c0=r.length,f0=new wu({loại_xổ_số:55,vị_trí_dữ_liệu:c0,ngày_xổ_số:a,kết_quả_xổ_số:v,kỳ_xổ_số:f,số_jacpot_2:p,tuần_xổ_số:S,giá_trị_ngày:k,giá_trị_tháng:q,giá_trị_năm:$,dấu_thời_gian_của_ngày:t0,dấu_thời_gian_kỳ_sau_đó:J,dữ_liệu_kỳ_sau_đó:r0});r.push(f0)}return r}const $i=new WeakMap,Cu=[];function Yi(t){let n=$i.get(t);return n||(n=t.map(r=>r.kết_quả_xổ_số.map(s=>{const o=Number(s);return Cu[o]=s,o})),$i.set(t,n)),n}const Bw=(t,n,r,s,o=46)=>{var S;const l=[],a=Yi(t),f=Yi(n),h=new Uint16Array(128),p=[],v=k=>{h[k]++===0&&p.push(k)};r.kết_quả_xổ_số.forEach(k=>{var q;(q=a[s+Number(k)])==null||q.forEach(v)});const y=[];for(let k=s;k<t.length;k++){const q=p.length;if(y.length=0,(S=f[k])==null||S.forEach($=>{var t0;(t0=a[s+$])==null||t0.forEach(r0=>{v(r0),y.push(r0)})}),p.length===o){const $=[...p].sort((t0,r0)=>h[t0]-h[r0]).map(t0=>Cu[t0]);l.push($)}y.forEach($=>h[$]--),p.length=q}return l},Iw=6,Ue={45:500,55:1e3};function p8(t,n,r){const s=new Array(n+1).fill(0);return t.slice(0,r).forEach(o=>o.kết_quả_xổ_số.forEach(l=>s[Number(l)]++)),s}const Vi={ngẫu_nhiên:(t,n)=>new Array(n+1).fill(1),số_nóng_50:(t,n)=>p8(t,n,50).map(r=>r+1),số_lạnh_50:(t,n)=>p8(t,n,50).map(r=>1/(r+1)),số_lâu_chưa_ra:(t,n)=>{const r=new Array(n+1).fill(t.length);for(let s=t.length-1;s>=0;s--)t[s].kết_quả_xổ_số.forEach(o=>r[Number(o)]=s);return r.map(s=>s+1)},số_vừa_ra:(t,n)=>{var s;const r=new Array(n+1).fill(1);return(s=t[0])==null||s.kết_quả_xổ_số.forEach(o=>r[Number(o)]=4),r}},Hw=50,Gw=10;function $w(t,n,r=Gw){var f;const s=h=>String(h).padStart(2,"0"),o=p8(t,n,Hw),l=new Array(n+1).fill(t.length);for(let h=t.length-1;h>=0;h--)t[h].kết_quả_xổ_số.forEach(p=>l[Number(p)]=h);const a=Array.from({length:n},(h,p)=>p+1);return{vừa_ra:((f=t[0])==null?void 0:f.kết_quả_xổ_số)??[],nóng:[...a].sort((h,p)=>o[p]-o[h]||h-p).slice(0,r).map(h=>({số:s(h),lần:o[h]})),lạnh:[...a].sort((h,p)=>o[h]-o[p]||h-p).slice(0,r).map(h=>({số:s(h),lần:o[h]})),lâu_chưa_ra:[...a].sort((h,p)=>l[p]-l[h]||h-p).slice(0,r).map(h=>({số:s(h),số_kỳ:l[h]}))}}function l7(t){let n=t>>>0;return()=>{n=n+1831565813>>>0;let r=n;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}const Yw=(()=>{const t=[];for(let n=0;n<6;n++)for(let r=n+1;r<6;r++)for(let s=r+1;s<6;s++)for(let o=s+1;o<6;o++)t.push([n,r,s,o]);return t})();function Vw(t,n){return((t[n[0]]*64+t[n[1]])*64+t[n[2]])*64+t[n[3]]}function Fw(t,n,r,s=Math.random){const o=[],l=new Set,a=n*200,f=new Float64Array(t+1);for(let h=0;h<a&&o.length<n;h++){for(let y=1;y<=t;y++)f[y]=s()**(1/Math.max(r[y],1e-9));const p=[];for(let y=0;y<Iw;y++){let S=0;for(let k=1;k<=t;k++)f[k]>f[S]&&(S=k);p.push(S),f[S]=-1}p.sort((y,S)=>y-S);const v=Yw.map(y=>Vw(p,y));v.some(y=>l.has(y))||(v.forEach(y=>l.add(y)),o.push(p))}return o}function Ww(t,n){if(n>t)return 0;let r=1;for(let s=1;s<=n;s++)r=r*(t-n+s)/s;return r}function Uw(t){const n=Ww(t,6),r=1/n;return{từ_5:6*(t-6)/n+r,số_6:r}}const Et=6,qw=1e4,Fi=20;function qe(t,n){if(n<0||n>t)return 0;let r=1;for(let s=1;s<=n;s++)r=r*(t-n+s)/s;return r}function Wi(t){let n=5381;for(let r=0;r<t.length;r++)n=(n<<5)+n+t.charCodeAt(r)|0;return n>>>0}function q3(t,n){const r=[],s=[],o=l=>{if(s.length===n){r.push([...s]);return}for(let a=l;a<=t.length-(n-s.length);a++)s.push(t[a]),o(a+1),s.pop()};return o(0),r}function Ui(t){const n=[...t].sort((a,f)=>a-f);let r=n.filter(a=>a<=31).length,s=1,o=1;for(let a=1;a<n.length;a++)o=n[a]===n[a-1]+1?o+1:1,s=Math.max(s,o);s>=3&&(r+=2);const l=n[1]-n[0];return n.every((a,f)=>f===0||a-n[f-1]===l)&&(r+=3),r}function Kw(t){return Et*Math.min(31,t)/t}function jw(t,n,r=Math.random){const s=o=>o>31?3:o>12?1.5:1;return Array.from({length:t},(o,l)=>l+1).map(o=>({số:o,khóa:r()**(1/s(o))})).sort((o,l)=>l.khóa-o.khóa).slice(0,n).map(o=>o.số).sort((o,l)=>o-l)}function zw(t,n,r,s,o,l){const a=t===55?55:45;if(!Number.isInteger(n)||n<Et+1)throw new Error(`Nhóm số phải có ít nhất ${Et+1} số`);if(n>Fi)throw new Error(`Nhóm số tối đa ${Fi} số`);if(!Number.isInteger(r)||r<2||r>=Et)throw new Error(`Mức đảm bảo phải từ 2 đến ${Et-1}`);const f=jw(a,n,l===void 0?Math.random:l7(l)),h=a0=>a0.reduce((A0,M0)=>A0|1<<M0,0),p=Array.from({length:n},(a0,A0)=>A0),v=new Map;q3(p,r).forEach((a0,A0)=>v.set(h(a0),A0));const y=q3(p,Et).map(a0=>({vị_trí:a0,vé:a0.map(A0=>f[A0]),phủ:q3(a0,r).map(A0=>v.get(h(A0)))})),S=y.map(a0=>Ui(a0.vé)),k=new Uint8Array(v.size);let q=v.size;const $=[],t0=new Set;for(;q>0;){let a0=-1,A0=-1;for(let M0=0;M0<y.length;M0++){let U0=0;for(const Q0 of y[M0].phủ)k[Q0]||U0++;(U0>A0||U0===A0&&S[M0]<S[a0])&&(a0=M0,A0=U0)}for(const M0 of y[a0].phủ)k[M0]||(k[M0]=1,q--);$.push(y[a0].vé),t0.add(a0)}const r0=$.length,J=Math.min(s??r0,y.length);if(J>r0){const a0=r+1,A0=new Map;q3(p,a0).forEach((Q0,f2)=>A0.set(h(Q0),f2));const M0=y.map(Q0=>q3(Q0.vị_trí,a0).map(f2=>A0.get(h(f2)))),U0=new Uint8Array(A0.size);for(t0.forEach(Q0=>M0[Q0].forEach(f2=>U0[f2]=1));$.length<J;){let Q0=-1,f2=-1;for(let M2=0;M2<y.length;M2++){if(t0.has(M2))continue;let I2=0;for(const j2 of M0[M2])U0[j2]||I2++;(I2>f2||I2===f2&&S[M2]<S[Q0])&&(Q0=M2,f2=I2)}M0[Q0].forEach(M2=>U0[M2]=1),$.push(y[Q0].vé),t0.add(Q0)}}let c0=0;const f0=qe(a,Et);for(let a0=r;a0<=Et;a0++)c0+=qe(n,a0)*qe(a-n,Et-a0)/f0;return{loại_xổ_số:t,nhóm_số:f,mức_đảm_bảo:r,vé:$.map(a0=>[...a0].sort((A0,M0)=>A0-M0)),số_vé_tối_thiểu:r0,chi_phí:$.length*qw,xác_suất_đạt_đảm_bảo:c0,điểm_phổ_biến_trung_bình:Number(($.reduce((a0,A0)=>a0+Ui(A0),0)/$.length).toFixed(2)),điểm_phổ_biến_vé_ngẫu_nhiên:Number(Kw(a).toFixed(2))}}const qi=["trúng_3","trúng_4","trúng_5","jackpot_2","jackpot_1"],Zw=1e4,Jw=.03,Xw=Zw*(1+Jw),Ki=1e7;function Qw(t){return t>Ki?t-.1*(t-Ki):t}const ji={45:{trúng_3:3e4,trúng_4:3e5,trúng_5:1e7,jackpot_2:0,jackpot_1:12e9},55:{trúng_3:5e4,trúng_4:5e5,trúng_5:4e7,jackpot_2:3e9,jackpot_1:3e10}};function Ke(t,n){if(n<0||n>t)return 0;let r=1;for(let s=1;s<=n;s++)r=r*(t-n+s)/s;return r}function tS(t,n){const r=Ke(t,6),s=l=>Ke(6,l)*Ke(t-6,6-l)/r,o=n?6/r:0;return{trúng_3:s(3),trúng_4:s(4),trúng_5:s(5)-o,jackpot_2:o,jackpot_1:s(6)}}const zi=6,Zi=6,nS=3,eS=20261008;function rS(t){const n=new Map,r=new Map;return t.forEach(s=>{const o=s%Zi,l=Math.floor(s/Zi);n.set(o,(n.get(o)??0)+1),r.set(l,(r.get(l)??0)+1)}),[...n.values()].some(s=>s>=2)&&[...r.values()].every(s=>s<=nS)}const iS=(()=>{const t=[];for(let n=0;n<6;n++)for(let r=n+1;r<6;r++)for(let s=r+1;s<6;s++)for(let o=s+1;o<6;o++)t.push([n,r,s,o]);return t})(),Ji=new Map;function sS(t,n){const r=`${t}-${n}`,s=Ji.get(r);if(s)return s;const o=l7(eS),l=[],a=new Set,f=n*3e3,h=Array.from({length:t},(p,v)=>v);for(let p=0;p<f&&l.length<n;p++){for(let S=0;S<zi;S++){const k=S+Math.floor(o()*(t-S));[h[S],h[k]]=[h[k],h[S]]}const v=h.slice(0,zi).sort((S,k)=>S-k);if(!rS(v))continue;const y=iS.map(S=>((v[S[0]]*64+v[S[1]])*64+v[S[2]])*64+v[S[3]]);y.some(S=>a.has(S))||(y.forEach(S=>a.add(S)),l.push(v))}return Ji.set(r,l),l}function oS(t,n){return n.map(r=>r.map(s=>t[s]).sort())}function Xi(t,n){const r=n.loại_xổ_số,s=r===55,o=new Set(n.kết_quả_xổ_số),l=ji[r]??ji[45],a=tS(r===55?55:45,s),f=Object.fromEntries(qi.map(S=>[S,0])),h=[];t.forEach(S=>{const k=S.filter(t0=>o.has(t0)),q=k.length;let $;q===3?$="trúng_3":q===4?$="trúng_4":q===5?$=s&&S.includes(n.số_jacpot_2)?"jackpot_2":"trúng_5":q===6&&($="jackpot_1"),$&&(f[$]++,q>=4&&h.push({vé:S,số_trúng:q,số_trùng:k,mức:$}))});let p=0;const v=qi.map(S=>{const k=Qw(l[S]),q=f[S]*k;return p+=q,{mức_trúng:S,số_vé:f[S],kỳ_vọng_ngẫu_nhiên:Number((t.length*a[S]).toFixed(2)),tiền_mỗi_vé:k,tiền:q}}),y=t.length*Xw;return{dòng_theo_mức:v,chi_phí:y,tiền_thắng:p,lãi_lỗ:p-y,vé_trúng_từ_4:h.sort((S,k)=>k.số_trúng-S.số_trúng)}}const uS="BộNhớĐệmDựĐoán",gn="bộ_nhớ_đệm",Qi="bộ_vé_phủ|",ts="vé_từ_danh_sách|",ns="vé_mục_tiêu|";function a7(){return new Promise((t,n)=>{const r=indexedDB.open(uS,1);r.onerror=()=>n(r.error),r.onsuccess=()=>t(r.result),r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(gn)||r.result.createObjectStore(gn)}})}async function lS(t){try{const n=await a7();try{return await new Promise((r,s)=>{const o=n.transaction(gn,"readonly").objectStore(gn).get(t);o.onerror=()=>s(o.error),o.onsuccess=()=>r(o.result)})}finally{n.close()}}catch(n){console.warn("Không đọc được bộ nhớ đệm:",n);return}}async function je(t){try{const n=await a7();try{return await new Promise((r,s)=>{const o=n.transaction(gn,"readonly").objectStore(gn),l=IDBKeyRange.bound(t,t+"￿"),a=[],f=o.openCursor(l);f.onerror=()=>s(f.error),f.onsuccess=()=>{const h=f.result;if(!h)return r(a);a.push({khóa:String(h.key),giá_trị:h.value}),h.continue()}})}finally{n.close()}}catch(n){return console.warn("Không đọc được bộ nhớ đệm:",n),[]}}async function x5(t,n){try{const r=await a7();try{await new Promise((s,o)=>{const l=r.transaction(gn,"readwrite");l.objectStore(gn).put(n,t),l.oncomplete=()=>s(),l.onerror=()=>o(l.error),l.onabort=()=>o(l.error)})}finally{r.close()}}catch(r){console.warn("Không ghi được bộ nhớ đệm:",r)}}function aS(t,n,r){let s=5381;const o=l=>{for(let a=0;a<l.length;a++)s=(s<<5)+s+l.charCodeAt(a)|0};o(r);for(const l of[t,n]){o(`|${l.length}|`);for(const a of l)o(`${a.ngày_xổ_số}:${a.kết_quả_xổ_số.join("")};`)}return`${r}#${s>>>0}`}const Ln="DD/MM/YYYY";function K3(t){return typeof t=="number"?n0(t).format(Ln):t}class cS{constructor(){y2(this,"tên_cơ_sở_dữ_liệu","DữLiệuLặpLại");y2(this,"phiên_bản",1);y2(this,"tên_kho_dữ_liệu","bộ_lưu_trữ");y2(this,"cơ_sở_dữ_liệu",null);y2(this,"đã_chuyển_định_dạng_ngày",!1)}async khởi_tạo(){return new Promise((n,r)=>{const s=indexedDB.open(this.tên_cơ_sở_dữ_liệu,this.phiên_bản);s.onerror=()=>r(s.error),s.onsuccess=()=>{this.cơ_sở_dữ_liệu=s.result,this.chuyển_định_dạng_ngày_bản_ghi_cũ().then(n,r)},s.onupgradeneeded=o=>{const l=o.target.result;if(!l.objectStoreNames.contains(this.tên_kho_dữ_liệu)){const a=l.createObjectStore(this.tên_kho_dữ_liệu,{keyPath:"id"});a.createIndex("tên","tên",{unique:!1}),a.createIndex("ngày_cập_nhật","ngày_cập_nhật",{unique:!1})}}})}async chuyển_định_dạng_ngày_bản_ghi_cũ(){this.đã_chuyển_định_dạng_ngày||!this.cơ_sở_dữ_liệu||(this.đã_chuyển_định_dạng_ngày=!0,await new Promise((n,r)=>{const s=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite"),o=s.objectStore(this.tên_kho_dữ_liệu).openCursor();o.onsuccess=()=>{const l=o.result;if(!l)return;const a=l.value;(typeof a.ngày_tạo=="number"||typeof a.ngày_cập_nhật=="number")&&(a.ngày_tạo=K3(a.ngày_tạo),a.ngày_cập_nhật=K3(a.ngày_cập_nhật),l.update(a)),l.continue()},o.onerror=()=>r(o.error),s.oncomplete=()=>n(),s.onerror=()=>r(s.error)}))}async lưu_dữ_liệu(n,r){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");const s=`${n}_${Date.now()}`,o={id:s,tên:n,ngày_tạo:n0().format(Ln),ngày_cập_nhật:n0().format(Ln),dữ_liệu:r,kích_thước:JSON.stringify(r).length};return new Promise((l,a)=>{const p=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).add(o);p.onerror=()=>a(p.error),p.onsuccess=()=>l(s)})}async lấy_dữ_liệu_theo_id(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((r,s)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).get(n);a.onerror=()=>s(a.error),a.onsuccess=()=>{const f=a.result;r(f?f.dữ_liệu:null)}})}async lấy_tất_cả(){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((n,r)=>{const l=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).getAll();l.onerror=()=>r(l.error),l.onsuccess=()=>n(l.result)})}async lấy_dữ_liệu_theo_tên(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((r,s)=>{const f=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).index("tên").getAll(n);f.onerror=()=>s(f.error),f.onsuccess=()=>r(f.result)})}async cập_nhật_dữ_liệu(n,r){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((s,o)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu),f=a.get(n);f.onsuccess=()=>{const h=f.result;if(h){h.dữ_liệu=r,h.ngày_cập_nhật=n0().format(Ln),h.kích_thước=JSON.stringify(r).length;const p=a.put(h);p.onsuccess=()=>s(),p.onerror=()=>o(p.error)}else o(new Error("Không tìm thấy dữ liệu"))},f.onerror=()=>o(f.error)})}async xóa_dữ_liệu(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((r,s)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).delete(n);a.onerror=()=>s(a.error),a.onsuccess=()=>r()})}async xóa_tất_cả(){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((n,r)=>{const l=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).clear();l.onerror=()=>r(l.error),l.onsuccess=()=>n()})}async tìm_kiếm_theo_ngày(n,r){const s=await this.lấy_tất_cả(),o=n0(n,Ln),l=n0(r,Ln);return s.filter(a=>n0(K3(a.ngày_cập_nhật),Ln).isBetween(o,l,"day","[]"))}async lấy_thống_kê(){const n=await this.lấy_tất_cả(),r=n.reduce((o,l)=>o+l.kích_thước,0),s=n.reduce((o,l)=>l.kích_thước>((o==null?void 0:o.kích_thước)||0)?l:o,null);return{tổng_bộ_lưu_trữ:n.length,tổng_kích_thước:r,lớn_nhất:s}}async xuất_dữ_liệu(){const n=await this.lấy_tất_cả();return JSON.stringify(n,null,2)}async nhập_dữ_liệu(n){const r=JSON.parse(n);let s=0;for(const o of r)try{if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");await new Promise((l,a)=>{const p=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).add({...o,ngày_tạo:K3(o.ngày_tạo),ngày_cập_nhật:K3(o.ngày_cập_nhật)});p.onsuccess=()=>{s++,l()},p.onerror=()=>a(p.error)})}catch{console.warn(`Lỗi nhập dữ liệu: ${o.id}`)}return s}}const r3=new cS;var w5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z3={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var hS=Z3.exports,es;function _S(){return es||(es=1,function(t,n){(function(){var r,s="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",p=500,v="__lodash_placeholder__",y=1,S=2,k=4,q=1,$=2,t0=1,r0=2,J=4,c0=8,f0=16,a0=32,A0=64,M0=128,U0=256,Q0=512,f2=30,M2="...",I2=800,j2=16,M1=1,v1=2,D2=3,G=1/0,L=9007199254740991,H=17976931348623157e292,h0=NaN,L0=4294967295,C0=L0-1,V0=L0>>>1,k2=[["ary",M0],["bind",t0],["bindKey",r0],["curry",c0],["curryRight",f0],["flip",Q0],["partial",a0],["partialRight",A0],["rearg",U0]],H2="[object Arguments]",u2="[object Array]",R="[object AsyncFunction]",u0="[object Boolean]",Q="[object Date]",y0="[object DOMException]",z0="[object Error]",h2="[object Function]",T="[object GeneratorFunction]",x="[object Map]",D="[object Number]",V="[object Null]",E="[object Object]",j="[object Promise]",o0="[object Proxy]",e0="[object RegExp]",Z="[object Set]",K="[object String]",P0="[object Symbol]",g0="[object Undefined]",S0="[object WeakMap]",B0="[object WeakSet]",I0="[object ArrayBuffer]",J0="[object DataView]",t2="[object Float32Array]",z2="[object Float64Array]",G2="[object Int8Array]",z="[object Int16Array]",m="[object Int32Array]",W="[object Uint8Array]",F="[object Uint8ClampedArray]",Y="[object Uint16Array]",i0="[object Uint32Array]",P=/\b__p \+= '';/g,_0=/\b(__p \+=) '' \+/g,w0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,l0=/&(?:amp|lt|gt|quot|#39);/g,p0=/[&<>"']/g,q0=RegExp(l0.source),s2=RegExp(p0.source),r2=/<%-([\s\S]+?)%>/g,w2=/<%([\s\S]+?)%>/g,e1=/<%=([\s\S]+?)%>/g,V2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,h1=/^\w*$/,$n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,I1=/[\\^$.*+?()[\]{}|]/g,M3=RegExp(I1.source),p6=/^\s+/,Au=/\s/,Du=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Lu=/\{\n\/\* \[wrapped with (.+)\] \*/,Ou=/,? & /,Eu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Nu=/[()=,{}\[\]\/\s]/,Ru=/\\(\\)?/g,Bu=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,c7=/\w*$/,Iu=/^[-+]0x[0-9a-f]+$/i,Hu=/^0b[01]+$/i,Gu=/^\[object .+?Constructor\]$/,$u=/^0o[0-7]+$/i,Yu=/^(?:0|[1-9]\d*)$/,Vu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,C4=/($^)/,Fu=/['\n\r\u2028\u2029\\]/g,P4="\\ud800-\\udfff",Wu="\\u0300-\\u036f",Uu="\\ufe20-\\ufe2f",qu="\\u20d0-\\u20ff",f7=Wu+Uu+qu,h7="\\u2700-\\u27bf",_7="a-z\\xdf-\\xf6\\xf8-\\xff",Ku="\\xac\\xb1\\xd7\\xf7",ju="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zu="\\u2000-\\u206f",Zu=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d7="A-Z\\xc0-\\xd6\\xd8-\\xde",g7="\\ufe0e\\ufe0f",p7=Ku+ju+zu+Zu,m6="['’]",Ju="["+P4+"]",m7="["+p7+"]",A4="["+f7+"]",v7="\\d+",Xu="["+h7+"]",y7="["+_7+"]",T7="[^"+P4+p7+v7+h7+_7+d7+"]",v6="\\ud83c[\\udffb-\\udfff]",Qu="(?:"+A4+"|"+v6+")",x7="[^"+P4+"]",y6="(?:\\ud83c[\\udde6-\\uddff]){2}",T6="[\\ud800-\\udbff][\\udc00-\\udfff]",Yn="["+d7+"]",w7="\\u200d",S7="(?:"+y7+"|"+T7+")",tl="(?:"+Yn+"|"+T7+")",b7="(?:"+m6+"(?:d|ll|m|re|s|t|ve))?",M7="(?:"+m6+"(?:D|LL|M|RE|S|T|VE))?",k7=Qu+"?",C7="["+g7+"]?",nl="(?:"+w7+"(?:"+[x7,y6,T6].join("|")+")"+C7+k7+")*",el="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",P7=C7+k7+nl,il="(?:"+[Xu,y6,T6].join("|")+")"+P7,sl="(?:"+[x7+A4+"?",A4,y6,T6,Ju].join("|")+")",ol=RegExp(m6,"g"),ul=RegExp(A4,"g"),x6=RegExp(v6+"(?="+v6+")|"+sl+P7,"g"),ll=RegExp([Yn+"?"+y7+"+"+b7+"(?="+[m7,Yn,"$"].join("|")+")",tl+"+"+M7+"(?="+[m7,Yn+S7,"$"].join("|")+")",Yn+"?"+S7+"+"+b7,Yn+"+"+M7,rl,el,v7,il].join("|"),"g"),al=RegExp("["+w7+P4+f7+g7+"]"),cl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,fl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],hl=-1,L2={};L2[t2]=L2[z2]=L2[G2]=L2[z]=L2[m]=L2[W]=L2[F]=L2[Y]=L2[i0]=!0,L2[H2]=L2[u2]=L2[I0]=L2[u0]=L2[J0]=L2[Q]=L2[z0]=L2[h2]=L2[x]=L2[D]=L2[E]=L2[e0]=L2[Z]=L2[K]=L2[S0]=!1;var C2={};C2[H2]=C2[u2]=C2[I0]=C2[J0]=C2[u0]=C2[Q]=C2[t2]=C2[z2]=C2[G2]=C2[z]=C2[m]=C2[x]=C2[D]=C2[E]=C2[e0]=C2[Z]=C2[K]=C2[P0]=C2[W]=C2[F]=C2[Y]=C2[i0]=!0,C2[z0]=C2[h2]=C2[S0]=!1;var _l={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},dl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ml=parseFloat,vl=parseInt,A7=typeof w5=="object"&&w5&&w5.Object===Object&&w5,yl=typeof self=="object"&&self&&self.Object===Object&&self,r1=A7||yl||Function("return this")(),w6=n&&!n.nodeType&&n,vn=w6&&!0&&t&&!t.nodeType&&t,D7=vn&&vn.exports===w6,S6=D7&&A7.process,H1=function(){try{var C=vn&&vn.require&&vn.require("util").types;return C||S6&&S6.binding&&S6.binding("util")}catch{}}(),L7=H1&&H1.isArrayBuffer,O7=H1&&H1.isDate,E7=H1&&H1.isMap,N7=H1&&H1.isRegExp,R7=H1&&H1.isSet,B7=H1&&H1.isTypedArray;function k1(C,N,O){switch(O.length){case 0:return C.call(N);case 1:return C.call(N,O[0]);case 2:return C.call(N,O[0],O[1]);case 3:return C.call(N,O[0],O[1],O[2])}return C.apply(N,O)}function Tl(C,N,O,T0){for(var H0=-1,c2=C==null?0:C.length;++H0<c2;){var Z2=C[H0];N(T0,Z2,O(Z2),C)}return T0}function G1(C,N){for(var O=-1,T0=C==null?0:C.length;++O<T0&&N(C[O],O,C)!==!1;);return C}function xl(C,N){for(var O=C==null?0:C.length;O--&&N(C[O],O,C)!==!1;);return C}function I7(C,N){for(var O=-1,T0=C==null?0:C.length;++O<T0;)if(!N(C[O],O,C))return!1;return!0}function jt(C,N){for(var O=-1,T0=C==null?0:C.length,H0=0,c2=[];++O<T0;){var Z2=C[O];N(Z2,O,C)&&(c2[H0++]=Z2)}return c2}function D4(C,N){var O=C==null?0:C.length;return!!O&&Vn(C,N,0)>-1}function b6(C,N,O){for(var T0=-1,H0=C==null?0:C.length;++T0<H0;)if(O(N,C[T0]))return!0;return!1}function R2(C,N){for(var O=-1,T0=C==null?0:C.length,H0=Array(T0);++O<T0;)H0[O]=N(C[O],O,C);return H0}function zt(C,N){for(var O=-1,T0=N.length,H0=C.length;++O<T0;)C[H0+O]=N[O];return C}function M6(C,N,O,T0){var H0=-1,c2=C==null?0:C.length;for(T0&&c2&&(O=C[++H0]);++H0<c2;)O=N(O,C[H0],H0,C);return O}function wl(C,N,O,T0){var H0=C==null?0:C.length;for(T0&&H0&&(O=C[--H0]);H0--;)O=N(O,C[H0],H0,C);return O}function k6(C,N){for(var O=-1,T0=C==null?0:C.length;++O<T0;)if(N(C[O],O,C))return!0;return!1}var Sl=C6("length");function bl(C){return C.split("")}function Ml(C){return C.match(Eu)||[]}function H7(C,N,O){var T0;return O(C,function(H0,c2,Z2){if(N(H0,c2,Z2))return T0=c2,!1}),T0}function L4(C,N,O,T0){for(var H0=C.length,c2=O+(T0?1:-1);T0?c2--:++c2<H0;)if(N(C[c2],c2,C))return c2;return-1}function Vn(C,N,O){return N===N?Il(C,N,O):L4(C,G7,O)}function kl(C,N,O,T0){for(var H0=O-1,c2=C.length;++H0<c2;)if(T0(C[H0],N))return H0;return-1}function G7(C){return C!==C}function $7(C,N){var O=C==null?0:C.length;return O?A6(C,N)/O:h0}function C6(C){return function(N){return N==null?r:N[C]}}function P6(C){return function(N){return C==null?r:C[N]}}function Y7(C,N,O,T0,H0){return H0(C,function(c2,Z2,S2){O=T0?(T0=!1,c2):N(O,c2,Z2,S2)}),O}function Cl(C,N){var O=C.length;for(C.sort(N);O--;)C[O]=C[O].value;return C}function A6(C,N){for(var O,T0=-1,H0=C.length;++T0<H0;){var c2=N(C[T0]);c2!==r&&(O=O===r?c2:O+c2)}return O}function D6(C,N){for(var O=-1,T0=Array(C);++O<C;)T0[O]=N(O);return T0}function Pl(C,N){return R2(N,function(O){return[O,C[O]]})}function V7(C){return C&&C.slice(0,q7(C)+1).replace(p6,"")}function C1(C){return function(N){return C(N)}}function L6(C,N){return R2(N,function(O){return C[O]})}function k3(C,N){return C.has(N)}function F7(C,N){for(var O=-1,T0=C.length;++O<T0&&Vn(N,C[O],0)>-1;);return O}function W7(C,N){for(var O=C.length;O--&&Vn(N,C[O],0)>-1;);return O}function Al(C,N){for(var O=C.length,T0=0;O--;)C[O]===N&&++T0;return T0}var Dl=P6(_l),Ll=P6(dl);function Ol(C){return"\\"+pl[C]}function El(C,N){return C==null?r:C[N]}function Fn(C){return al.test(C)}function Nl(C){return cl.test(C)}function Rl(C){for(var N,O=[];!(N=C.next()).done;)O.push(N.value);return O}function O6(C){var N=-1,O=Array(C.size);return C.forEach(function(T0,H0){O[++N]=[H0,T0]}),O}function U7(C,N){return function(O){return C(N(O))}}function Zt(C,N){for(var O=-1,T0=C.length,H0=0,c2=[];++O<T0;){var Z2=C[O];(Z2===N||Z2===v)&&(C[O]=v,c2[H0++]=O)}return c2}function O4(C){var N=-1,O=Array(C.size);return C.forEach(function(T0){O[++N]=T0}),O}function Bl(C){var N=-1,O=Array(C.size);return C.forEach(function(T0){O[++N]=[T0,T0]}),O}function Il(C,N,O){for(var T0=O-1,H0=C.length;++T0<H0;)if(C[T0]===N)return T0;return-1}function Hl(C,N,O){for(var T0=O+1;T0--;)if(C[T0]===N)return T0;return T0}function Wn(C){return Fn(C)?$l(C):Sl(C)}function J1(C){return Fn(C)?Yl(C):bl(C)}function q7(C){for(var N=C.length;N--&&Au.test(C.charAt(N)););return N}var Gl=P6(gl);function $l(C){for(var N=x6.lastIndex=0;x6.test(C);)++N;return N}function Yl(C){return C.match(x6)||[]}function Vl(C){return C.match(ll)||[]}var Fl=function C(N){N=N==null?r1:Un.defaults(r1.Object(),N,Un.pick(r1,fl));var O=N.Array,T0=N.Date,H0=N.Error,c2=N.Function,Z2=N.Math,S2=N.Object,E6=N.RegExp,Wl=N.String,$1=N.TypeError,E4=O.prototype,Ul=c2.prototype,qn=S2.prototype,N4=N["__core-js_shared__"],R4=Ul.toString,v2=qn.hasOwnProperty,ql=0,K7=function(){var e=/[^.]+$/.exec(N4&&N4.keys&&N4.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),B4=qn.toString,Kl=R4.call(S2),jl=r1._,zl=E6("^"+R4.call(v2).replace(I1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),I4=D7?N.Buffer:r,Jt=N.Symbol,H4=N.Uint8Array,j7=I4?I4.allocUnsafe:r,G4=U7(S2.getPrototypeOf,S2),z7=S2.create,Z7=qn.propertyIsEnumerable,$4=E4.splice,J7=Jt?Jt.isConcatSpreadable:r,C3=Jt?Jt.iterator:r,yn=Jt?Jt.toStringTag:r,Y4=function(){try{var e=bn(S2,"defineProperty");return e({},"",{}),e}catch{}}(),Zl=N.clearTimeout!==r1.clearTimeout&&N.clearTimeout,Jl=T0&&T0.now!==r1.Date.now&&T0.now,Xl=N.setTimeout!==r1.setTimeout&&N.setTimeout,V4=Z2.ceil,F4=Z2.floor,N6=S2.getOwnPropertySymbols,Ql=I4?I4.isBuffer:r,X7=N.isFinite,ta=E4.join,na=U7(S2.keys,S2),J2=Z2.max,s1=Z2.min,ea=T0.now,ra=N.parseInt,Q7=Z2.random,ia=E4.reverse,R6=bn(N,"DataView"),P3=bn(N,"Map"),B6=bn(N,"Promise"),Kn=bn(N,"Set"),A3=bn(N,"WeakMap"),D3=bn(S2,"create"),W4=A3&&new A3,jn={},sa=Mn(R6),oa=Mn(P3),ua=Mn(B6),la=Mn(Kn),aa=Mn(A3),U4=Jt?Jt.prototype:r,L3=U4?U4.valueOf:r,t9=U4?U4.toString:r;function d(e){if(Y2(e)&&!G0(e)&&!(e instanceof n2)){if(e instanceof Y1)return e;if(v2.call(e,"__wrapped__"))return nr(e)}return new Y1(e)}var zn=function(){function e(){}return function(i){if(!$2(i))return{};if(z7)return z7(i);e.prototype=i;var u=new e;return e.prototype=r,u}}();function q4(){}function Y1(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}d.templateSettings={escape:r2,evaluate:w2,interpolate:e1,variable:"",imports:{_:d}},d.prototype=q4.prototype,d.prototype.constructor=d,Y1.prototype=zn(q4.prototype),Y1.prototype.constructor=Y1;function n2(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=L0,this.__views__=[]}function ca(){var e=new n2(this.__wrapped__);return e.__actions__=y1(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=y1(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=y1(this.__views__),e}function fa(){if(this.__filtered__){var e=new n2(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function ha(){var e=this.__wrapped__.value(),i=this.__dir__,u=G0(e),c=i<0,_=u?e.length:0,g=bc(0,_,this.__views__),w=g.start,b=g.end,A=b-w,B=c?b:w-1,I=this.__iteratees__,U=I.length,d0=0,k0=s1(A,this.__takeCount__);if(!u||!c&&_==A&&k0==A)return b9(e,this.__actions__);var E0=[];t:for(;A--&&d0<k0;){B+=i;for(var K0=-1,N0=e[B];++K0<U;){var X0=I[K0],i2=X0.iteratee,D1=X0.type,g1=i2(N0);if(D1==v1)N0=g1;else if(!g1){if(D1==M1)continue t;break t}}E0[d0++]=N0}return E0}n2.prototype=zn(q4.prototype),n2.prototype.constructor=n2;function Tn(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function _a(){this.__data__=D3?D3(null):{},this.size=0}function da(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function ga(e){var i=this.__data__;if(D3){var u=i[e];return u===h?r:u}return v2.call(i,e)?i[e]:r}function pa(e){var i=this.__data__;return D3?i[e]!==r:v2.call(i,e)}function ma(e,i){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=D3&&i===r?h:i,this}Tn.prototype.clear=_a,Tn.prototype.delete=da,Tn.prototype.get=ga,Tn.prototype.has=pa,Tn.prototype.set=ma;function xt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function va(){this.__data__=[],this.size=0}function ya(e){var i=this.__data__,u=K4(i,e);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():$4.call(i,u,1),--this.size,!0}function Ta(e){var i=this.__data__,u=K4(i,e);return u<0?r:i[u][1]}function xa(e){return K4(this.__data__,e)>-1}function wa(e,i){var u=this.__data__,c=K4(u,e);return c<0?(++this.size,u.push([e,i])):u[c][1]=i,this}xt.prototype.clear=va,xt.prototype.delete=ya,xt.prototype.get=Ta,xt.prototype.has=xa,xt.prototype.set=wa;function wt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Sa(){this.size=0,this.__data__={hash:new Tn,map:new(P3||xt),string:new Tn}}function ba(e){var i=s5(this,e).delete(e);return this.size-=i?1:0,i}function Ma(e){return s5(this,e).get(e)}function ka(e){return s5(this,e).has(e)}function Ca(e,i){var u=s5(this,e),c=u.size;return u.set(e,i),this.size+=u.size==c?0:1,this}wt.prototype.clear=Sa,wt.prototype.delete=ba,wt.prototype.get=Ma,wt.prototype.has=ka,wt.prototype.set=Ca;function xn(e){var i=-1,u=e==null?0:e.length;for(this.__data__=new wt;++i<u;)this.add(e[i])}function Pa(e){return this.__data__.set(e,h),this}function Aa(e){return this.__data__.has(e)}xn.prototype.add=xn.prototype.push=Pa,xn.prototype.has=Aa;function X1(e){var i=this.__data__=new xt(e);this.size=i.size}function Da(){this.__data__=new xt,this.size=0}function La(e){var i=this.__data__,u=i.delete(e);return this.size=i.size,u}function Oa(e){return this.__data__.get(e)}function Ea(e){return this.__data__.has(e)}function Na(e,i){var u=this.__data__;if(u instanceof xt){var c=u.__data__;if(!P3||c.length<o-1)return c.push([e,i]),this.size=++u.size,this;u=this.__data__=new wt(c)}return u.set(e,i),this.size=u.size,this}X1.prototype.clear=Da,X1.prototype.delete=La,X1.prototype.get=Oa,X1.prototype.has=Ea,X1.prototype.set=Na;function n9(e,i){var u=G0(e),c=!u&&kn(e),_=!u&&!c&&en(e),g=!u&&!c&&!_&&Qn(e),w=u||c||_||g,b=w?D6(e.length,Wl):[],A=b.length;for(var B in e)(i||v2.call(e,B))&&!(w&&(B=="length"||_&&(B=="offset"||B=="parent")||g&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||kt(B,A)))&&b.push(B);return b}function e9(e){var i=e.length;return i?e[K6(0,i-1)]:r}function Ra(e,i){return o5(y1(e),wn(i,0,e.length))}function Ba(e){return o5(y1(e))}function I6(e,i,u){(u!==r&&!Q1(e[i],u)||u===r&&!(i in e))&&St(e,i,u)}function O3(e,i,u){var c=e[i];(!(v2.call(e,i)&&Q1(c,u))||u===r&&!(i in e))&&St(e,i,u)}function K4(e,i){for(var u=e.length;u--;)if(Q1(e[u][0],i))return u;return-1}function Ia(e,i,u,c){return Xt(e,function(_,g,w){i(c,_,u(_),w)}),c}function r9(e,i){return e&&lt(i,t1(i),e)}function Ha(e,i){return e&&lt(i,x1(i),e)}function St(e,i,u){i=="__proto__"&&Y4?Y4(e,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[i]=u}function H6(e,i){for(var u=-1,c=i.length,_=O(c),g=e==null;++u<c;)_[u]=g?r:ve(e,i[u]);return _}function wn(e,i,u){return e===e&&(u!==r&&(e=e<=u?e:u),i!==r&&(e=e>=i?e:i)),e}function V1(e,i,u,c,_,g){var w,b=i&y,A=i&S,B=i&k;if(u&&(w=_?u(e,c,_,g):u(e)),w!==r)return w;if(!$2(e))return e;var I=G0(e);if(I){if(w=kc(e),!b)return y1(e,w)}else{var U=o1(e),d0=U==h2||U==T;if(en(e))return C9(e,b);if(U==E||U==H2||d0&&!_){if(w=A||d0?{}:q9(e),!b)return A?gc(e,Ha(w,e)):dc(e,r9(w,e))}else{if(!C2[U])return _?e:{};w=Cc(e,U,b)}}g||(g=new X1);var k0=g.get(e);if(k0)return k0;g.set(e,w),xr(e)?e.forEach(function(N0){w.add(V1(N0,i,u,N0,e,g))}):yr(e)&&e.forEach(function(N0,X0){w.set(X0,V1(N0,i,u,X0,e,g))});var E0=B?A?ie:re:A?x1:t1,K0=I?r:E0(e);return G1(K0||e,function(N0,X0){K0&&(X0=N0,N0=e[X0]),O3(w,X0,V1(N0,i,u,X0,e,g))}),w}function Ga(e){var i=t1(e);return function(u){return i9(u,e,i)}}function i9(e,i,u){var c=u.length;if(e==null)return!c;for(e=S2(e);c--;){var _=u[c],g=i[_],w=e[_];if(w===r&&!(_ in e)||!g(w))return!1}return!0}function s9(e,i,u){if(typeof e!="function")throw new $1(a);return G3(function(){e.apply(r,u)},i)}function E3(e,i,u,c){var _=-1,g=D4,w=!0,b=e.length,A=[],B=i.length;if(!b)return A;u&&(i=R2(i,C1(u))),c?(g=b6,w=!1):i.length>=o&&(g=k3,w=!1,i=new xn(i));t:for(;++_<b;){var I=e[_],U=u==null?I:u(I);if(I=c||I!==0?I:0,w&&U===U){for(var d0=B;d0--;)if(i[d0]===U)continue t;A.push(I)}else g(i,U,c)||A.push(I)}return A}var Xt=O9(ut),o9=O9($6,!0);function $a(e,i){var u=!0;return Xt(e,function(c,_,g){return u=!!i(c,_,g),u}),u}function j4(e,i,u){for(var c=-1,_=e.length;++c<_;){var g=e[c],w=i(g);if(w!=null&&(b===r?w===w&&!A1(w):u(w,b)))var b=w,A=g}return A}function Ya(e,i,u,c){var _=e.length;for(u=F0(u),u<0&&(u=-u>_?0:_+u),c=c===r||c>_?_:F0(c),c<0&&(c+=_),c=u>c?0:Sr(c);u<c;)e[u++]=i;return e}function u9(e,i){var u=[];return Xt(e,function(c,_,g){i(c,_,g)&&u.push(c)}),u}function i1(e,i,u,c,_){var g=-1,w=e.length;for(u||(u=Ac),_||(_=[]);++g<w;){var b=e[g];i>0&&u(b)?i>1?i1(b,i-1,u,c,_):zt(_,b):c||(_[_.length]=b)}return _}var G6=E9(),l9=E9(!0);function ut(e,i){return e&&G6(e,i,t1)}function $6(e,i){return e&&l9(e,i,t1)}function z4(e,i){return jt(i,function(u){return Ct(e[u])})}function Sn(e,i){i=tn(i,e);for(var u=0,c=i.length;e!=null&&u<c;)e=e[at(i[u++])];return u&&u==c?e:r}function a9(e,i,u){var c=i(e);return G0(e)?c:zt(c,u(e))}function _1(e){return e==null?e===r?g0:V:yn&&yn in S2(e)?Sc(e):Bc(e)}function Y6(e,i){return e>i}function Va(e,i){return e!=null&&v2.call(e,i)}function Fa(e,i){return e!=null&&i in S2(e)}function Wa(e,i,u){return e>=s1(i,u)&&e<J2(i,u)}function V6(e,i,u){for(var c=u?b6:D4,_=e[0].length,g=e.length,w=g,b=O(g),A=1/0,B=[];w--;){var I=e[w];w&&i&&(I=R2(I,C1(i))),A=s1(I.length,A),b[w]=!u&&(i||_>=120&&I.length>=120)?new xn(w&&I):r}I=e[0];var U=-1,d0=b[0];t:for(;++U<_&&B.length<A;){var k0=I[U],E0=i?i(k0):k0;if(k0=u||k0!==0?k0:0,!(d0?k3(d0,E0):c(B,E0,u))){for(w=g;--w;){var K0=b[w];if(!(K0?k3(K0,E0):c(e[w],E0,u)))continue t}d0&&d0.push(E0),B.push(k0)}}return B}function Ua(e,i,u,c){return ut(e,function(_,g,w){i(c,u(_),g,w)}),c}function N3(e,i,u){i=tn(i,e),e=Z9(e,i);var c=e==null?e:e[at(W1(i))];return c==null?r:k1(c,e,u)}function c9(e){return Y2(e)&&_1(e)==H2}function qa(e){return Y2(e)&&_1(e)==I0}function Ka(e){return Y2(e)&&_1(e)==Q}function R3(e,i,u,c,_){return e===i?!0:e==null||i==null||!Y2(e)&&!Y2(i)?e!==e&&i!==i:ja(e,i,u,c,R3,_)}function ja(e,i,u,c,_,g){var w=G0(e),b=G0(i),A=w?u2:o1(e),B=b?u2:o1(i);A=A==H2?E:A,B=B==H2?E:B;var I=A==E,U=B==E,d0=A==B;if(d0&&en(e)){if(!en(i))return!1;w=!0,I=!1}if(d0&&!I)return g||(g=new X1),w||Qn(e)?F9(e,i,u,c,_,g):xc(e,i,A,u,c,_,g);if(!(u&q)){var k0=I&&v2.call(e,"__wrapped__"),E0=U&&v2.call(i,"__wrapped__");if(k0||E0){var K0=k0?e.value():e,N0=E0?i.value():i;return g||(g=new X1),_(K0,N0,u,c,g)}}return d0?(g||(g=new X1),wc(e,i,u,c,_,g)):!1}function za(e){return Y2(e)&&o1(e)==x}function F6(e,i,u,c){var _=u.length,g=_,w=!c;if(e==null)return!g;for(e=S2(e);_--;){var b=u[_];if(w&&b[2]?b[1]!==e[b[0]]:!(b[0]in e))return!1}for(;++_<g;){b=u[_];var A=b[0],B=e[A],I=b[1];if(w&&b[2]){if(B===r&&!(A in e))return!1}else{var U=new X1;if(c)var d0=c(B,I,A,e,i,U);if(!(d0===r?R3(I,B,q|$,c,U):d0))return!1}}return!0}function f9(e){if(!$2(e)||Lc(e))return!1;var i=Ct(e)?zl:Gu;return i.test(Mn(e))}function Za(e){return Y2(e)&&_1(e)==e0}function Ja(e){return Y2(e)&&o1(e)==Z}function Xa(e){return Y2(e)&&h5(e.length)&&!!L2[_1(e)]}function h9(e){return typeof e=="function"?e:e==null?w1:typeof e=="object"?G0(e)?g9(e[0],e[1]):d9(e):Nr(e)}function W6(e){if(!H3(e))return na(e);var i=[];for(var u in S2(e))v2.call(e,u)&&u!="constructor"&&i.push(u);return i}function Qa(e){if(!$2(e))return Rc(e);var i=H3(e),u=[];for(var c in e)c=="constructor"&&(i||!v2.call(e,c))||u.push(c);return u}function U6(e,i){return e<i}function _9(e,i){var u=-1,c=T1(e)?O(e.length):[];return Xt(e,function(_,g,w){c[++u]=i(_,g,w)}),c}function d9(e){var i=oe(e);return i.length==1&&i[0][2]?j9(i[0][0],i[0][1]):function(u){return u===e||F6(u,e,i)}}function g9(e,i){return le(e)&&K9(i)?j9(at(e),i):function(u){var c=ve(u,e);return c===r&&c===i?ye(u,e):R3(i,c,q|$)}}function Z4(e,i,u,c,_){e!==i&&G6(i,function(g,w){if(_||(_=new X1),$2(g))tc(e,i,w,u,Z4,c,_);else{var b=c?c(ce(e,w),g,w+"",e,i,_):r;b===r&&(b=g),I6(e,w,b)}},x1)}function tc(e,i,u,c,_,g,w){var b=ce(e,u),A=ce(i,u),B=w.get(A);if(B){I6(e,u,B);return}var I=g?g(b,A,u+"",e,i,w):r,U=I===r;if(U){var d0=G0(A),k0=!d0&&en(A),E0=!d0&&!k0&&Qn(A);I=A,d0||k0||E0?G0(b)?I=b:F2(b)?I=y1(b):k0?(U=!1,I=C9(A,!0)):E0?(U=!1,I=P9(A,!0)):I=[]:$3(A)||kn(A)?(I=b,kn(b)?I=br(b):(!$2(b)||Ct(b))&&(I=q9(A))):U=!1}U&&(w.set(A,I),_(I,A,c,g,w),w.delete(A)),I6(e,u,I)}function p9(e,i){var u=e.length;if(u)return i+=i<0?u:0,kt(i,u)?e[i]:r}function m9(e,i,u){i.length?i=R2(i,function(g){return G0(g)?function(w){return Sn(w,g.length===1?g[0]:g)}:g}):i=[w1];var c=-1;i=R2(i,C1(O0()));var _=_9(e,function(g,w,b){var A=R2(i,function(B){return B(g)});return{criteria:A,index:++c,value:g}});return Cl(_,function(g,w){return _c(g,w,u)})}function nc(e,i){return v9(e,i,function(u,c){return ye(e,c)})}function v9(e,i,u){for(var c=-1,_=i.length,g={};++c<_;){var w=i[c],b=Sn(e,w);u(b,w)&&B3(g,tn(w,e),b)}return g}function ec(e){return function(i){return Sn(i,e)}}function q6(e,i,u,c){var _=c?kl:Vn,g=-1,w=i.length,b=e;for(e===i&&(i=y1(i)),u&&(b=R2(e,C1(u)));++g<w;)for(var A=0,B=i[g],I=u?u(B):B;(A=_(b,I,A,c))>-1;)b!==e&&$4.call(b,A,1),$4.call(e,A,1);return e}function y9(e,i){for(var u=e?i.length:0,c=u-1;u--;){var _=i[u];if(u==c||_!==g){var g=_;kt(_)?$4.call(e,_,1):Z6(e,_)}}return e}function K6(e,i){return e+F4(Q7()*(i-e+1))}function rc(e,i,u,c){for(var _=-1,g=J2(V4((i-e)/(u||1)),0),w=O(g);g--;)w[c?g:++_]=e,e+=u;return w}function j6(e,i){var u="";if(!e||i<1||i>L)return u;do i%2&&(u+=e),i=F4(i/2),i&&(e+=e);while(i);return u}function Z0(e,i){return fe(z9(e,i,w1),e+"")}function ic(e){return e9(t3(e))}function sc(e,i){var u=t3(e);return o5(u,wn(i,0,u.length))}function B3(e,i,u,c){if(!$2(e))return e;i=tn(i,e);for(var _=-1,g=i.length,w=g-1,b=e;b!=null&&++_<g;){var A=at(i[_]),B=u;if(A==="__proto__"||A==="constructor"||A==="prototype")return e;if(_!=w){var I=b[A];B=c?c(I,A,b):r,B===r&&(B=$2(I)?I:kt(i[_+1])?[]:{})}O3(b,A,B),b=b[A]}return e}var T9=W4?function(e,i){return W4.set(e,i),e}:w1,oc=Y4?function(e,i){return Y4(e,"toString",{configurable:!0,enumerable:!1,value:xe(i),writable:!0})}:w1;function uc(e){return o5(t3(e))}function F1(e,i,u){var c=-1,_=e.length;i<0&&(i=-i>_?0:_+i),u=u>_?_:u,u<0&&(u+=_),_=i>u?0:u-i>>>0,i>>>=0;for(var g=O(_);++c<_;)g[c]=e[c+i];return g}function lc(e,i){var u;return Xt(e,function(c,_,g){return u=i(c,_,g),!u}),!!u}function J4(e,i,u){var c=0,_=e==null?c:e.length;if(typeof i=="number"&&i===i&&_<=V0){for(;c<_;){var g=c+_>>>1,w=e[g];w!==null&&!A1(w)&&(u?w<=i:w<i)?c=g+1:_=g}return _}return z6(e,i,w1,u)}function z6(e,i,u,c){var _=0,g=e==null?0:e.length;if(g===0)return 0;i=u(i);for(var w=i!==i,b=i===null,A=A1(i),B=i===r;_<g;){var I=F4((_+g)/2),U=u(e[I]),d0=U!==r,k0=U===null,E0=U===U,K0=A1(U);if(w)var N0=c||E0;else B?N0=E0&&(c||d0):b?N0=E0&&d0&&(c||!k0):A?N0=E0&&d0&&!k0&&(c||!K0):k0||K0?N0=!1:N0=c?U<=i:U<i;N0?_=I+1:g=I}return s1(g,C0)}function x9(e,i){for(var u=-1,c=e.length,_=0,g=[];++u<c;){var w=e[u],b=i?i(w):w;if(!u||!Q1(b,A)){var A=b;g[_++]=w===0?0:w}}return g}function w9(e){return typeof e=="number"?e:A1(e)?h0:+e}function P1(e){if(typeof e=="string")return e;if(G0(e))return R2(e,P1)+"";if(A1(e))return t9?t9.call(e):"";var i=e+"";return i=="0"&&1/e==-G?"-0":i}function Qt(e,i,u){var c=-1,_=D4,g=e.length,w=!0,b=[],A=b;if(u)w=!1,_=b6;else if(g>=o){var B=i?null:yc(e);if(B)return O4(B);w=!1,_=k3,A=new xn}else A=i?[]:b;t:for(;++c<g;){var I=e[c],U=i?i(I):I;if(I=u||I!==0?I:0,w&&U===U){for(var d0=A.length;d0--;)if(A[d0]===U)continue t;i&&A.push(U),b.push(I)}else _(A,U,u)||(A!==b&&A.push(U),b.push(I))}return b}function Z6(e,i){return i=tn(i,e),e=Z9(e,i),e==null||delete e[at(W1(i))]}function S9(e,i,u,c){return B3(e,i,u(Sn(e,i)),c)}function X4(e,i,u,c){for(var _=e.length,g=c?_:-1;(c?g--:++g<_)&&i(e[g],g,e););return u?F1(e,c?0:g,c?g+1:_):F1(e,c?g+1:0,c?_:g)}function b9(e,i){var u=e;return u instanceof n2&&(u=u.value()),M6(i,function(c,_){return _.func.apply(_.thisArg,zt([c],_.args))},u)}function J6(e,i,u){var c=e.length;if(c<2)return c?Qt(e[0]):[];for(var _=-1,g=O(c);++_<c;)for(var w=e[_],b=-1;++b<c;)b!=_&&(g[_]=E3(g[_]||w,e[b],i,u));return Qt(i1(g,1),i,u)}function M9(e,i,u){for(var c=-1,_=e.length,g=i.length,w={};++c<_;){var b=c<g?i[c]:r;u(w,e[c],b)}return w}function X6(e){return F2(e)?e:[]}function Q6(e){return typeof e=="function"?e:w1}function tn(e,i){return G0(e)?e:le(e,i)?[e]:tr(_2(e))}var ac=Z0;function nn(e,i,u){var c=e.length;return u=u===r?c:u,!i&&u>=c?e:F1(e,i,u)}var k9=Zl||function(e){return r1.clearTimeout(e)};function C9(e,i){if(i)return e.slice();var u=e.length,c=j7?j7(u):new e.constructor(u);return e.copy(c),c}function te(e){var i=new e.constructor(e.byteLength);return new H4(i).set(new H4(e)),i}function cc(e,i){var u=i?te(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function fc(e){var i=new e.constructor(e.source,c7.exec(e));return i.lastIndex=e.lastIndex,i}function hc(e){return L3?S2(L3.call(e)):{}}function P9(e,i){var u=i?te(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function A9(e,i){if(e!==i){var u=e!==r,c=e===null,_=e===e,g=A1(e),w=i!==r,b=i===null,A=i===i,B=A1(i);if(!b&&!B&&!g&&e>i||g&&w&&A&&!b&&!B||c&&w&&A||!u&&A||!_)return 1;if(!c&&!g&&!B&&e<i||B&&u&&_&&!c&&!g||b&&u&&_||!w&&_||!A)return-1}return 0}function _c(e,i,u){for(var c=-1,_=e.criteria,g=i.criteria,w=_.length,b=u.length;++c<w;){var A=A9(_[c],g[c]);if(A){if(c>=b)return A;var B=u[c];return A*(B=="desc"?-1:1)}}return e.index-i.index}function D9(e,i,u,c){for(var _=-1,g=e.length,w=u.length,b=-1,A=i.length,B=J2(g-w,0),I=O(A+B),U=!c;++b<A;)I[b]=i[b];for(;++_<w;)(U||_<g)&&(I[u[_]]=e[_]);for(;B--;)I[b++]=e[_++];return I}function L9(e,i,u,c){for(var _=-1,g=e.length,w=-1,b=u.length,A=-1,B=i.length,I=J2(g-b,0),U=O(I+B),d0=!c;++_<I;)U[_]=e[_];for(var k0=_;++A<B;)U[k0+A]=i[A];for(;++w<b;)(d0||_<g)&&(U[k0+u[w]]=e[_++]);return U}function y1(e,i){var u=-1,c=e.length;for(i||(i=O(c));++u<c;)i[u]=e[u];return i}function lt(e,i,u,c){var _=!u;u||(u={});for(var g=-1,w=i.length;++g<w;){var b=i[g],A=c?c(u[b],e[b],b,u,e):r;A===r&&(A=e[b]),_?St(u,b,A):O3(u,b,A)}return u}function dc(e,i){return lt(e,ue(e),i)}function gc(e,i){return lt(e,W9(e),i)}function Q4(e,i){return function(u,c){var _=G0(u)?Tl:Ia,g=i?i():{};return _(u,e,O0(c,2),g)}}function Zn(e){return Z0(function(i,u){var c=-1,_=u.length,g=_>1?u[_-1]:r,w=_>2?u[2]:r;for(g=e.length>3&&typeof g=="function"?(_--,g):r,w&&d1(u[0],u[1],w)&&(g=_<3?r:g,_=1),i=S2(i);++c<_;){var b=u[c];b&&e(i,b,c,g)}return i})}function O9(e,i){return function(u,c){if(u==null)return u;if(!T1(u))return e(u,c);for(var _=u.length,g=i?_:-1,w=S2(u);(i?g--:++g<_)&&c(w[g],g,w)!==!1;);return u}}function E9(e){return function(i,u,c){for(var _=-1,g=S2(i),w=c(i),b=w.length;b--;){var A=w[e?b:++_];if(u(g[A],A,g)===!1)break}return i}}function pc(e,i,u){var c=i&t0,_=I3(e);function g(){var w=this&&this!==r1&&this instanceof g?_:e;return w.apply(c?u:this,arguments)}return g}function N9(e){return function(i){i=_2(i);var u=Fn(i)?J1(i):r,c=u?u[0]:i.charAt(0),_=u?nn(u,1).join(""):i.slice(1);return c[e]()+_}}function Jn(e){return function(i){return M6(Or(Lr(i).replace(ol,"")),e,"")}}function I3(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=zn(e.prototype),c=e.apply(u,i);return $2(c)?c:u}}function mc(e,i,u){var c=I3(e);function _(){for(var g=arguments.length,w=O(g),b=g,A=Xn(_);b--;)w[b]=arguments[b];var B=g<3&&w[0]!==A&&w[g-1]!==A?[]:Zt(w,A);if(g-=B.length,g<u)return G9(e,i,t5,_.placeholder,r,w,B,r,r,u-g);var I=this&&this!==r1&&this instanceof _?c:e;return k1(I,this,w)}return _}function R9(e){return function(i,u,c){var _=S2(i);if(!T1(i)){var g=O0(u,3);i=t1(i),u=function(b){return g(_[b],b,_)}}var w=e(i,u,c);return w>-1?_[g?i[w]:w]:r}}function B9(e){return Mt(function(i){var u=i.length,c=u,_=Y1.prototype.thru;for(e&&i.reverse();c--;){var g=i[c];if(typeof g!="function")throw new $1(a);if(_&&!w&&i5(g)=="wrapper")var w=new Y1([],!0)}for(c=w?c:u;++c<u;){g=i[c];var b=i5(g),A=b=="wrapper"?se(g):r;A&&ae(A[0])&&A[1]==(M0|c0|a0|U0)&&!A[4].length&&A[9]==1?w=w[i5(A[0])].apply(w,A[3]):w=g.length==1&&ae(g)?w[b]():w.thru(g)}return function(){var B=arguments,I=B[0];if(w&&B.length==1&&G0(I))return w.plant(I).value();for(var U=0,d0=u?i[U].apply(this,B):I;++U<u;)d0=i[U].call(this,d0);return d0}})}function t5(e,i,u,c,_,g,w,b,A,B){var I=i&M0,U=i&t0,d0=i&r0,k0=i&(c0|f0),E0=i&Q0,K0=d0?r:I3(e);function N0(){for(var X0=arguments.length,i2=O(X0),D1=X0;D1--;)i2[D1]=arguments[D1];if(k0)var g1=Xn(N0),L1=Al(i2,g1);if(c&&(i2=D9(i2,c,_,k0)),g&&(i2=L9(i2,g,w,k0)),X0-=L1,k0&&X0<B){var W2=Zt(i2,g1);return G9(e,i,t5,N0.placeholder,u,i2,W2,b,A,B-X0)}var tt=U?u:this,At=d0?tt[e]:e;return X0=i2.length,b?i2=Ic(i2,b):E0&&X0>1&&i2.reverse(),I&&A<X0&&(i2.length=A),this&&this!==r1&&this instanceof N0&&(At=K0||I3(At)),At.apply(tt,i2)}return N0}function I9(e,i){return function(u,c){return Ua(u,e,i(c),{})}}function n5(e,i){return function(u,c){var _;if(u===r&&c===r)return i;if(u!==r&&(_=u),c!==r){if(_===r)return c;typeof u=="string"||typeof c=="string"?(u=P1(u),c=P1(c)):(u=w9(u),c=w9(c)),_=e(u,c)}return _}}function ne(e){return Mt(function(i){return i=R2(i,C1(O0())),Z0(function(u){var c=this;return e(i,function(_){return k1(_,c,u)})})})}function e5(e,i){i=i===r?" ":P1(i);var u=i.length;if(u<2)return u?j6(i,e):i;var c=j6(i,V4(e/Wn(i)));return Fn(i)?nn(J1(c),0,e).join(""):c.slice(0,e)}function vc(e,i,u,c){var _=i&t0,g=I3(e);function w(){for(var b=-1,A=arguments.length,B=-1,I=c.length,U=O(I+A),d0=this&&this!==r1&&this instanceof w?g:e;++B<I;)U[B]=c[B];for(;A--;)U[B++]=arguments[++b];return k1(d0,_?u:this,U)}return w}function H9(e){return function(i,u,c){return c&&typeof c!="number"&&d1(i,u,c)&&(u=c=r),i=Pt(i),u===r?(u=i,i=0):u=Pt(u),c=c===r?i<u?1:-1:Pt(c),rc(i,u,c,e)}}function r5(e){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=U1(i),u=U1(u)),e(i,u)}}function G9(e,i,u,c,_,g,w,b,A,B){var I=i&c0,U=I?w:r,d0=I?r:w,k0=I?g:r,E0=I?r:g;i|=I?a0:A0,i&=~(I?A0:a0),i&J||(i&=~(t0|r0));var K0=[e,i,_,k0,U,E0,d0,b,A,B],N0=u.apply(r,K0);return ae(e)&&J9(N0,K0),N0.placeholder=c,X9(N0,e,i)}function ee(e){var i=Z2[e];return function(u,c){if(u=U1(u),c=c==null?0:s1(F0(c),292),c&&X7(u)){var _=(_2(u)+"e").split("e"),g=i(_[0]+"e"+(+_[1]+c));return _=(_2(g)+"e").split("e"),+(_[0]+"e"+(+_[1]-c))}return i(u)}}var yc=Kn&&1/O4(new Kn([,-0]))[1]==G?function(e){return new Kn(e)}:be;function $9(e){return function(i){var u=o1(i);return u==x?O6(i):u==Z?Bl(i):Pl(i,e(i))}}function bt(e,i,u,c,_,g,w,b){var A=i&r0;if(!A&&typeof e!="function")throw new $1(a);var B=c?c.length:0;if(B||(i&=~(a0|A0),c=_=r),w=w===r?w:J2(F0(w),0),b=b===r?b:F0(b),B-=_?_.length:0,i&A0){var I=c,U=_;c=_=r}var d0=A?r:se(e),k0=[e,i,u,c,_,I,U,g,w,b];if(d0&&Nc(k0,d0),e=k0[0],i=k0[1],u=k0[2],c=k0[3],_=k0[4],b=k0[9]=k0[9]===r?A?0:e.length:J2(k0[9]-B,0),!b&&i&(c0|f0)&&(i&=~(c0|f0)),!i||i==t0)var E0=pc(e,i,u);else i==c0||i==f0?E0=mc(e,i,b):(i==a0||i==(t0|a0))&&!_.length?E0=vc(e,i,u,c):E0=t5.apply(r,k0);var K0=d0?T9:J9;return X9(K0(E0,k0),e,i)}function Y9(e,i,u,c){return e===r||Q1(e,qn[u])&&!v2.call(c,u)?i:e}function V9(e,i,u,c,_,g){return $2(e)&&$2(i)&&(g.set(i,e),Z4(e,i,r,V9,g),g.delete(i)),e}function Tc(e){return $3(e)?r:e}function F9(e,i,u,c,_,g){var w=u&q,b=e.length,A=i.length;if(b!=A&&!(w&&A>b))return!1;var B=g.get(e),I=g.get(i);if(B&&I)return B==i&&I==e;var U=-1,d0=!0,k0=u&$?new xn:r;for(g.set(e,i),g.set(i,e);++U<b;){var E0=e[U],K0=i[U];if(c)var N0=w?c(K0,E0,U,i,e,g):c(E0,K0,U,e,i,g);if(N0!==r){if(N0)continue;d0=!1;break}if(k0){if(!k6(i,function(X0,i2){if(!k3(k0,i2)&&(E0===X0||_(E0,X0,u,c,g)))return k0.push(i2)})){d0=!1;break}}else if(!(E0===K0||_(E0,K0,u,c,g))){d0=!1;break}}return g.delete(e),g.delete(i),d0}function xc(e,i,u,c,_,g,w){switch(u){case J0:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case I0:return!(e.byteLength!=i.byteLength||!g(new H4(e),new H4(i)));case u0:case Q:case D:return Q1(+e,+i);case z0:return e.name==i.name&&e.message==i.message;case e0:case K:return e==i+"";case x:var b=O6;case Z:var A=c&q;if(b||(b=O4),e.size!=i.size&&!A)return!1;var B=w.get(e);if(B)return B==i;c|=$,w.set(e,i);var I=F9(b(e),b(i),c,_,g,w);return w.delete(e),I;case P0:if(L3)return L3.call(e)==L3.call(i)}return!1}function wc(e,i,u,c,_,g){var w=u&q,b=re(e),A=b.length,B=re(i),I=B.length;if(A!=I&&!w)return!1;for(var U=A;U--;){var d0=b[U];if(!(w?d0 in i:v2.call(i,d0)))return!1}var k0=g.get(e),E0=g.get(i);if(k0&&E0)return k0==i&&E0==e;var K0=!0;g.set(e,i),g.set(i,e);for(var N0=w;++U<A;){d0=b[U];var X0=e[d0],i2=i[d0];if(c)var D1=w?c(i2,X0,d0,i,e,g):c(X0,i2,d0,e,i,g);if(!(D1===r?X0===i2||_(X0,i2,u,c,g):D1)){K0=!1;break}N0||(N0=d0=="constructor")}if(K0&&!N0){var g1=e.constructor,L1=i.constructor;g1!=L1&&"constructor"in e&&"constructor"in i&&!(typeof g1=="function"&&g1 instanceof g1&&typeof L1=="function"&&L1 instanceof L1)&&(K0=!1)}return g.delete(e),g.delete(i),K0}function Mt(e){return fe(z9(e,r,ir),e+"")}function re(e){return a9(e,t1,ue)}function ie(e){return a9(e,x1,W9)}var se=W4?function(e){return W4.get(e)}:be;function i5(e){for(var i=e.name+"",u=jn[i],c=v2.call(jn,i)?u.length:0;c--;){var _=u[c],g=_.func;if(g==null||g==e)return _.name}return i}function Xn(e){var i=v2.call(d,"placeholder")?d:e;return i.placeholder}function O0(){var e=d.iteratee||we;return e=e===we?h9:e,arguments.length?e(arguments[0],arguments[1]):e}function s5(e,i){var u=e.__data__;return Dc(i)?u[typeof i=="string"?"string":"hash"]:u.map}function oe(e){for(var i=t1(e),u=i.length;u--;){var c=i[u],_=e[c];i[u]=[c,_,K9(_)]}return i}function bn(e,i){var u=El(e,i);return f9(u)?u:r}function Sc(e){var i=v2.call(e,yn),u=e[yn];try{e[yn]=r;var c=!0}catch{}var _=B4.call(e);return c&&(i?e[yn]=u:delete e[yn]),_}var ue=N6?function(e){return e==null?[]:(e=S2(e),jt(N6(e),function(i){return Z7.call(e,i)}))}:Me,W9=N6?function(e){for(var i=[];e;)zt(i,ue(e)),e=G4(e);return i}:Me,o1=_1;(R6&&o1(new R6(new ArrayBuffer(1)))!=J0||P3&&o1(new P3)!=x||B6&&o1(B6.resolve())!=j||Kn&&o1(new Kn)!=Z||A3&&o1(new A3)!=S0)&&(o1=function(e){var i=_1(e),u=i==E?e.constructor:r,c=u?Mn(u):"";if(c)switch(c){case sa:return J0;case oa:return x;case ua:return j;case la:return Z;case aa:return S0}return i});function bc(e,i,u){for(var c=-1,_=u.length;++c<_;){var g=u[c],w=g.size;switch(g.type){case"drop":e+=w;break;case"dropRight":i-=w;break;case"take":i=s1(i,e+w);break;case"takeRight":e=J2(e,i-w);break}}return{start:e,end:i}}function Mc(e){var i=e.match(Lu);return i?i[1].split(Ou):[]}function U9(e,i,u){i=tn(i,e);for(var c=-1,_=i.length,g=!1;++c<_;){var w=at(i[c]);if(!(g=e!=null&&u(e,w)))break;e=e[w]}return g||++c!=_?g:(_=e==null?0:e.length,!!_&&h5(_)&&kt(w,_)&&(G0(e)||kn(e)))}function kc(e){var i=e.length,u=new e.constructor(i);return i&&typeof e[0]=="string"&&v2.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function q9(e){return typeof e.constructor=="function"&&!H3(e)?zn(G4(e)):{}}function Cc(e,i,u){var c=e.constructor;switch(i){case I0:return te(e);case u0:case Q:return new c(+e);case J0:return cc(e,u);case t2:case z2:case G2:case z:case m:case W:case F:case Y:case i0:return P9(e,u);case x:return new c;case D:case K:return new c(e);case e0:return fc(e);case Z:return new c;case P0:return hc(e)}}function Pc(e,i){var u=i.length;if(!u)return e;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),e.replace(Du,`{
/* [wrapped with `+i+`] */
`)}function Ac(e){return G0(e)||kn(e)||!!(J7&&e&&e[J7])}function kt(e,i){var u=typeof e;return i=i??L,!!i&&(u=="number"||u!="symbol"&&Yu.test(e))&&e>-1&&e%1==0&&e<i}function d1(e,i,u){if(!$2(u))return!1;var c=typeof i;return(c=="number"?T1(u)&&kt(i,u.length):c=="string"&&i in u)?Q1(u[i],e):!1}function le(e,i){if(G0(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||A1(e)?!0:h1.test(e)||!V2.test(e)||i!=null&&e in S2(i)}function Dc(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function ae(e){var i=i5(e),u=d[i];if(typeof u!="function"||!(i in n2.prototype))return!1;if(e===u)return!0;var c=se(u);return!!c&&e===c[0]}function Lc(e){return!!K7&&K7 in e}var Oc=N4?Ct:ke;function H3(e){var i=e&&e.constructor,u=typeof i=="function"&&i.prototype||qn;return e===u}function K9(e){return e===e&&!$2(e)}function j9(e,i){return function(u){return u==null?!1:u[e]===i&&(i!==r||e in S2(u))}}function Ec(e){var i=c5(e,function(c){return u.size===p&&u.clear(),c}),u=i.cache;return i}function Nc(e,i){var u=e[1],c=i[1],_=u|c,g=_<(t0|r0|M0),w=c==M0&&u==c0||c==M0&&u==U0&&e[7].length<=i[8]||c==(M0|U0)&&i[7].length<=i[8]&&u==c0;if(!(g||w))return e;c&t0&&(e[2]=i[2],_|=u&t0?0:J);var b=i[3];if(b){var A=e[3];e[3]=A?D9(A,b,i[4]):b,e[4]=A?Zt(e[3],v):i[4]}return b=i[5],b&&(A=e[5],e[5]=A?L9(A,b,i[6]):b,e[6]=A?Zt(e[5],v):i[6]),b=i[7],b&&(e[7]=b),c&M0&&(e[8]=e[8]==null?i[8]:s1(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=_,e}function Rc(e){var i=[];if(e!=null)for(var u in S2(e))i.push(u);return i}function Bc(e){return B4.call(e)}function z9(e,i,u){return i=J2(i===r?e.length-1:i,0),function(){for(var c=arguments,_=-1,g=J2(c.length-i,0),w=O(g);++_<g;)w[_]=c[i+_];_=-1;for(var b=O(i+1);++_<i;)b[_]=c[_];return b[i]=u(w),k1(e,this,b)}}function Z9(e,i){return i.length<2?e:Sn(e,F1(i,0,-1))}function Ic(e,i){for(var u=e.length,c=s1(i.length,u),_=y1(e);c--;){var g=i[c];e[c]=kt(g,u)?_[g]:r}return e}function ce(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var J9=Q9(T9),G3=Xl||function(e,i){return r1.setTimeout(e,i)},fe=Q9(oc);function X9(e,i,u){var c=i+"";return fe(e,Pc(c,Hc(Mc(c),u)))}function Q9(e){var i=0,u=0;return function(){var c=ea(),_=j2-(c-u);if(u=c,_>0){if(++i>=I2)return arguments[0]}else i=0;return e.apply(r,arguments)}}function o5(e,i){var u=-1,c=e.length,_=c-1;for(i=i===r?c:i;++u<i;){var g=K6(u,_),w=e[g];e[g]=e[u],e[u]=w}return e.length=i,e}var tr=Ec(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace($n,function(u,c,_,g){i.push(_?g.replace(Ru,"$1"):c||u)}),i});function at(e){if(typeof e=="string"||A1(e))return e;var i=e+"";return i=="0"&&1/e==-G?"-0":i}function Mn(e){if(e!=null){try{return R4.call(e)}catch{}try{return e+""}catch{}}return""}function Hc(e,i){return G1(k2,function(u){var c="_."+u[0];i&u[1]&&!D4(e,c)&&e.push(c)}),e.sort()}function nr(e){if(e instanceof n2)return e.clone();var i=new Y1(e.__wrapped__,e.__chain__);return i.__actions__=y1(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function Gc(e,i,u){(u?d1(e,i,u):i===r)?i=1:i=J2(F0(i),0);var c=e==null?0:e.length;if(!c||i<1)return[];for(var _=0,g=0,w=O(V4(c/i));_<c;)w[g++]=F1(e,_,_+=i);return w}function $c(e){for(var i=-1,u=e==null?0:e.length,c=0,_=[];++i<u;){var g=e[i];g&&(_[c++]=g)}return _}function Yc(){var e=arguments.length;if(!e)return[];for(var i=O(e-1),u=arguments[0],c=e;c--;)i[c-1]=arguments[c];return zt(G0(u)?y1(u):[u],i1(i,1))}var Vc=Z0(function(e,i){return F2(e)?E3(e,i1(i,1,F2,!0)):[]}),Fc=Z0(function(e,i){var u=W1(i);return F2(u)&&(u=r),F2(e)?E3(e,i1(i,1,F2,!0),O0(u,2)):[]}),Wc=Z0(function(e,i){var u=W1(i);return F2(u)&&(u=r),F2(e)?E3(e,i1(i,1,F2,!0),r,u):[]});function Uc(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===r?1:F0(i),F1(e,i<0?0:i,c)):[]}function qc(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===r?1:F0(i),i=c-i,F1(e,0,i<0?0:i)):[]}function Kc(e,i){return e&&e.length?X4(e,O0(i,3),!0,!0):[]}function jc(e,i){return e&&e.length?X4(e,O0(i,3),!0):[]}function zc(e,i,u,c){var _=e==null?0:e.length;return _?(u&&typeof u!="number"&&d1(e,i,u)&&(u=0,c=_),Ya(e,i,u,c)):[]}function er(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var _=u==null?0:F0(u);return _<0&&(_=J2(c+_,0)),L4(e,O0(i,3),_)}function rr(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var _=c-1;return u!==r&&(_=F0(u),_=u<0?J2(c+_,0):s1(_,c-1)),L4(e,O0(i,3),_,!0)}function ir(e){var i=e==null?0:e.length;return i?i1(e,1):[]}function Zc(e){var i=e==null?0:e.length;return i?i1(e,G):[]}function Jc(e,i){var u=e==null?0:e.length;return u?(i=i===r?1:F0(i),i1(e,i)):[]}function Xc(e){for(var i=-1,u=e==null?0:e.length,c={};++i<u;){var _=e[i];c[_[0]]=_[1]}return c}function sr(e){return e&&e.length?e[0]:r}function Qc(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var _=u==null?0:F0(u);return _<0&&(_=J2(c+_,0)),Vn(e,i,_)}function tf(e){var i=e==null?0:e.length;return i?F1(e,0,-1):[]}var nf=Z0(function(e){var i=R2(e,X6);return i.length&&i[0]===e[0]?V6(i):[]}),ef=Z0(function(e){var i=W1(e),u=R2(e,X6);return i===W1(u)?i=r:u.pop(),u.length&&u[0]===e[0]?V6(u,O0(i,2)):[]}),rf=Z0(function(e){var i=W1(e),u=R2(e,X6);return i=typeof i=="function"?i:r,i&&u.pop(),u.length&&u[0]===e[0]?V6(u,r,i):[]});function sf(e,i){return e==null?"":ta.call(e,i)}function W1(e){var i=e==null?0:e.length;return i?e[i-1]:r}function of(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var _=c;return u!==r&&(_=F0(u),_=_<0?J2(c+_,0):s1(_,c-1)),i===i?Hl(e,i,_):L4(e,G7,_,!0)}function uf(e,i){return e&&e.length?p9(e,F0(i)):r}var lf=Z0(or);function or(e,i){return e&&e.length&&i&&i.length?q6(e,i):e}function af(e,i,u){return e&&e.length&&i&&i.length?q6(e,i,O0(u,2)):e}function cf(e,i,u){return e&&e.length&&i&&i.length?q6(e,i,r,u):e}var ff=Mt(function(e,i){var u=e==null?0:e.length,c=H6(e,i);return y9(e,R2(i,function(_){return kt(_,u)?+_:_}).sort(A9)),c});function hf(e,i){var u=[];if(!(e&&e.length))return u;var c=-1,_=[],g=e.length;for(i=O0(i,3);++c<g;){var w=e[c];i(w,c,e)&&(u.push(w),_.push(c))}return y9(e,_),u}function he(e){return e==null?e:ia.call(e)}function _f(e,i,u){var c=e==null?0:e.length;return c?(u&&typeof u!="number"&&d1(e,i,u)?(i=0,u=c):(i=i==null?0:F0(i),u=u===r?c:F0(u)),F1(e,i,u)):[]}function df(e,i){return J4(e,i)}function gf(e,i,u){return z6(e,i,O0(u,2))}function pf(e,i){var u=e==null?0:e.length;if(u){var c=J4(e,i);if(c<u&&Q1(e[c],i))return c}return-1}function mf(e,i){return J4(e,i,!0)}function vf(e,i,u){return z6(e,i,O0(u,2),!0)}function yf(e,i){var u=e==null?0:e.length;if(u){var c=J4(e,i,!0)-1;if(Q1(e[c],i))return c}return-1}function Tf(e){return e&&e.length?x9(e):[]}function xf(e,i){return e&&e.length?x9(e,O0(i,2)):[]}function wf(e){var i=e==null?0:e.length;return i?F1(e,1,i):[]}function Sf(e,i,u){return e&&e.length?(i=u||i===r?1:F0(i),F1(e,0,i<0?0:i)):[]}function bf(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===r?1:F0(i),i=c-i,F1(e,i<0?0:i,c)):[]}function Mf(e,i){return e&&e.length?X4(e,O0(i,3),!1,!0):[]}function kf(e,i){return e&&e.length?X4(e,O0(i,3)):[]}var Cf=Z0(function(e){return Qt(i1(e,1,F2,!0))}),Pf=Z0(function(e){var i=W1(e);return F2(i)&&(i=r),Qt(i1(e,1,F2,!0),O0(i,2))}),Af=Z0(function(e){var i=W1(e);return i=typeof i=="function"?i:r,Qt(i1(e,1,F2,!0),r,i)});function Df(e){return e&&e.length?Qt(e):[]}function Lf(e,i){return e&&e.length?Qt(e,O0(i,2)):[]}function Of(e,i){return i=typeof i=="function"?i:r,e&&e.length?Qt(e,r,i):[]}function _e(e){if(!(e&&e.length))return[];var i=0;return e=jt(e,function(u){if(F2(u))return i=J2(u.length,i),!0}),D6(i,function(u){return R2(e,C6(u))})}function ur(e,i){if(!(e&&e.length))return[];var u=_e(e);return i==null?u:R2(u,function(c){return k1(i,r,c)})}var Ef=Z0(function(e,i){return F2(e)?E3(e,i):[]}),Nf=Z0(function(e){return J6(jt(e,F2))}),Rf=Z0(function(e){var i=W1(e);return F2(i)&&(i=r),J6(jt(e,F2),O0(i,2))}),Bf=Z0(function(e){var i=W1(e);return i=typeof i=="function"?i:r,J6(jt(e,F2),r,i)}),If=Z0(_e);function Hf(e,i){return M9(e||[],i||[],O3)}function Gf(e,i){return M9(e||[],i||[],B3)}var $f=Z0(function(e){var i=e.length,u=i>1?e[i-1]:r;return u=typeof u=="function"?(e.pop(),u):r,ur(e,u)});function lr(e){var i=d(e);return i.__chain__=!0,i}function Yf(e,i){return i(e),e}function u5(e,i){return i(e)}var Vf=Mt(function(e){var i=e.length,u=i?e[0]:0,c=this.__wrapped__,_=function(g){return H6(g,e)};return i>1||this.__actions__.length||!(c instanceof n2)||!kt(u)?this.thru(_):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:u5,args:[_],thisArg:r}),new Y1(c,this.__chain__).thru(function(g){return i&&!g.length&&g.push(r),g}))});function Ff(){return lr(this)}function Wf(){return new Y1(this.value(),this.__chain__)}function Uf(){this.__values__===r&&(this.__values__=wr(this.value()));var e=this.__index__>=this.__values__.length,i=e?r:this.__values__[this.__index__++];return{done:e,value:i}}function qf(){return this}function Kf(e){for(var i,u=this;u instanceof q4;){var c=nr(u);c.__index__=0,c.__values__=r,i?_.__wrapped__=c:i=c;var _=c;u=u.__wrapped__}return _.__wrapped__=e,i}function jf(){var e=this.__wrapped__;if(e instanceof n2){var i=e;return this.__actions__.length&&(i=new n2(this)),i=i.reverse(),i.__actions__.push({func:u5,args:[he],thisArg:r}),new Y1(i,this.__chain__)}return this.thru(he)}function zf(){return b9(this.__wrapped__,this.__actions__)}var Zf=Q4(function(e,i,u){v2.call(e,u)?++e[u]:St(e,u,1)});function Jf(e,i,u){var c=G0(e)?I7:$a;return u&&d1(e,i,u)&&(i=r),c(e,O0(i,3))}function Xf(e,i){var u=G0(e)?jt:u9;return u(e,O0(i,3))}var Qf=R9(er),th=R9(rr);function nh(e,i){return i1(l5(e,i),1)}function eh(e,i){return i1(l5(e,i),G)}function rh(e,i,u){return u=u===r?1:F0(u),i1(l5(e,i),u)}function ar(e,i){var u=G0(e)?G1:Xt;return u(e,O0(i,3))}function cr(e,i){var u=G0(e)?xl:o9;return u(e,O0(i,3))}var ih=Q4(function(e,i,u){v2.call(e,u)?e[u].push(i):St(e,u,[i])});function sh(e,i,u,c){e=T1(e)?e:t3(e),u=u&&!c?F0(u):0;var _=e.length;return u<0&&(u=J2(_+u,0)),_5(e)?u<=_&&e.indexOf(i,u)>-1:!!_&&Vn(e,i,u)>-1}var oh=Z0(function(e,i,u){var c=-1,_=typeof i=="function",g=T1(e)?O(e.length):[];return Xt(e,function(w){g[++c]=_?k1(i,w,u):N3(w,i,u)}),g}),uh=Q4(function(e,i,u){St(e,u,i)});function l5(e,i){var u=G0(e)?R2:_9;return u(e,O0(i,3))}function lh(e,i,u,c){return e==null?[]:(G0(i)||(i=i==null?[]:[i]),u=c?r:u,G0(u)||(u=u==null?[]:[u]),m9(e,i,u))}var ah=Q4(function(e,i,u){e[u?0:1].push(i)},function(){return[[],[]]});function ch(e,i,u){var c=G0(e)?M6:Y7,_=arguments.length<3;return c(e,O0(i,4),u,_,Xt)}function fh(e,i,u){var c=G0(e)?wl:Y7,_=arguments.length<3;return c(e,O0(i,4),u,_,o9)}function hh(e,i){var u=G0(e)?jt:u9;return u(e,f5(O0(i,3)))}function _h(e){var i=G0(e)?e9:ic;return i(e)}function dh(e,i,u){(u?d1(e,i,u):i===r)?i=1:i=F0(i);var c=G0(e)?Ra:sc;return c(e,i)}function gh(e){var i=G0(e)?Ba:uc;return i(e)}function ph(e){if(e==null)return 0;if(T1(e))return _5(e)?Wn(e):e.length;var i=o1(e);return i==x||i==Z?e.size:W6(e).length}function mh(e,i,u){var c=G0(e)?k6:lc;return u&&d1(e,i,u)&&(i=r),c(e,O0(i,3))}var vh=Z0(function(e,i){if(e==null)return[];var u=i.length;return u>1&&d1(e,i[0],i[1])?i=[]:u>2&&d1(i[0],i[1],i[2])&&(i=[i[0]]),m9(e,i1(i,1),[])}),a5=Jl||function(){return r1.Date.now()};function yh(e,i){if(typeof i!="function")throw new $1(a);return e=F0(e),function(){if(--e<1)return i.apply(this,arguments)}}function fr(e,i,u){return i=u?r:i,i=e&&i==null?e.length:i,bt(e,M0,r,r,r,r,i)}function hr(e,i){var u;if(typeof i!="function")throw new $1(a);return e=F0(e),function(){return--e>0&&(u=i.apply(this,arguments)),e<=1&&(i=r),u}}var de=Z0(function(e,i,u){var c=t0;if(u.length){var _=Zt(u,Xn(de));c|=a0}return bt(e,c,i,u,_)}),_r=Z0(function(e,i,u){var c=t0|r0;if(u.length){var _=Zt(u,Xn(_r));c|=a0}return bt(i,c,e,u,_)});function dr(e,i,u){i=u?r:i;var c=bt(e,c0,r,r,r,r,r,i);return c.placeholder=dr.placeholder,c}function gr(e,i,u){i=u?r:i;var c=bt(e,f0,r,r,r,r,r,i);return c.placeholder=gr.placeholder,c}function pr(e,i,u){var c,_,g,w,b,A,B=0,I=!1,U=!1,d0=!0;if(typeof e!="function")throw new $1(a);i=U1(i)||0,$2(u)&&(I=!!u.leading,U="maxWait"in u,g=U?J2(U1(u.maxWait)||0,i):g,d0="trailing"in u?!!u.trailing:d0);function k0(W2){var tt=c,At=_;return c=_=r,B=W2,w=e.apply(At,tt),w}function E0(W2){return B=W2,b=G3(X0,i),I?k0(W2):w}function K0(W2){var tt=W2-A,At=W2-B,Rr=i-tt;return U?s1(Rr,g-At):Rr}function N0(W2){var tt=W2-A,At=W2-B;return A===r||tt>=i||tt<0||U&&At>=g}function X0(){var W2=a5();if(N0(W2))return i2(W2);b=G3(X0,K0(W2))}function i2(W2){return b=r,d0&&c?k0(W2):(c=_=r,w)}function D1(){b!==r&&k9(b),B=0,c=A=_=b=r}function g1(){return b===r?w:i2(a5())}function L1(){var W2=a5(),tt=N0(W2);if(c=arguments,_=this,A=W2,tt){if(b===r)return E0(A);if(U)return k9(b),b=G3(X0,i),k0(A)}return b===r&&(b=G3(X0,i)),w}return L1.cancel=D1,L1.flush=g1,L1}var Th=Z0(function(e,i){return s9(e,1,i)}),xh=Z0(function(e,i,u){return s9(e,U1(i)||0,u)});function wh(e){return bt(e,Q0)}function c5(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new $1(a);var u=function(){var c=arguments,_=i?i.apply(this,c):c[0],g=u.cache;if(g.has(_))return g.get(_);var w=e.apply(this,c);return u.cache=g.set(_,w)||g,w};return u.cache=new(c5.Cache||wt),u}c5.Cache=wt;function f5(e){if(typeof e!="function")throw new $1(a);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function Sh(e){return hr(2,e)}var bh=ac(function(e,i){i=i.length==1&&G0(i[0])?R2(i[0],C1(O0())):R2(i1(i,1),C1(O0()));var u=i.length;return Z0(function(c){for(var _=-1,g=s1(c.length,u);++_<g;)c[_]=i[_].call(this,c[_]);return k1(e,this,c)})}),ge=Z0(function(e,i){var u=Zt(i,Xn(ge));return bt(e,a0,r,i,u)}),mr=Z0(function(e,i){var u=Zt(i,Xn(mr));return bt(e,A0,r,i,u)}),Mh=Mt(function(e,i){return bt(e,U0,r,r,r,i)});function kh(e,i){if(typeof e!="function")throw new $1(a);return i=i===r?i:F0(i),Z0(e,i)}function Ch(e,i){if(typeof e!="function")throw new $1(a);return i=i==null?0:J2(F0(i),0),Z0(function(u){var c=u[i],_=nn(u,0,i);return c&&zt(_,c),k1(e,this,_)})}function Ph(e,i,u){var c=!0,_=!0;if(typeof e!="function")throw new $1(a);return $2(u)&&(c="leading"in u?!!u.leading:c,_="trailing"in u?!!u.trailing:_),pr(e,i,{leading:c,maxWait:i,trailing:_})}function Ah(e){return fr(e,1)}function Dh(e,i){return ge(Q6(i),e)}function Lh(){if(!arguments.length)return[];var e=arguments[0];return G0(e)?e:[e]}function Oh(e){return V1(e,k)}function Eh(e,i){return i=typeof i=="function"?i:r,V1(e,k,i)}function Nh(e){return V1(e,y|k)}function Rh(e,i){return i=typeof i=="function"?i:r,V1(e,y|k,i)}function Bh(e,i){return i==null||i9(e,i,t1(i))}function Q1(e,i){return e===i||e!==e&&i!==i}var Ih=r5(Y6),Hh=r5(function(e,i){return e>=i}),kn=c9(function(){return arguments}())?c9:function(e){return Y2(e)&&v2.call(e,"callee")&&!Z7.call(e,"callee")},G0=O.isArray,Gh=L7?C1(L7):qa;function T1(e){return e!=null&&h5(e.length)&&!Ct(e)}function F2(e){return Y2(e)&&T1(e)}function $h(e){return e===!0||e===!1||Y2(e)&&_1(e)==u0}var en=Ql||ke,Yh=O7?C1(O7):Ka;function Vh(e){return Y2(e)&&e.nodeType===1&&!$3(e)}function Fh(e){if(e==null)return!0;if(T1(e)&&(G0(e)||typeof e=="string"||typeof e.splice=="function"||en(e)||Qn(e)||kn(e)))return!e.length;var i=o1(e);if(i==x||i==Z)return!e.size;if(H3(e))return!W6(e).length;for(var u in e)if(v2.call(e,u))return!1;return!0}function Wh(e,i){return R3(e,i)}function Uh(e,i,u){u=typeof u=="function"?u:r;var c=u?u(e,i):r;return c===r?R3(e,i,r,u):!!c}function pe(e){if(!Y2(e))return!1;var i=_1(e);return i==z0||i==y0||typeof e.message=="string"&&typeof e.name=="string"&&!$3(e)}function qh(e){return typeof e=="number"&&X7(e)}function Ct(e){if(!$2(e))return!1;var i=_1(e);return i==h2||i==T||i==R||i==o0}function vr(e){return typeof e=="number"&&e==F0(e)}function h5(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=L}function $2(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Y2(e){return e!=null&&typeof e=="object"}var yr=E7?C1(E7):za;function Kh(e,i){return e===i||F6(e,i,oe(i))}function jh(e,i,u){return u=typeof u=="function"?u:r,F6(e,i,oe(i),u)}function zh(e){return Tr(e)&&e!=+e}function Zh(e){if(Oc(e))throw new H0(l);return f9(e)}function Jh(e){return e===null}function Xh(e){return e==null}function Tr(e){return typeof e=="number"||Y2(e)&&_1(e)==D}function $3(e){if(!Y2(e)||_1(e)!=E)return!1;var i=G4(e);if(i===null)return!0;var u=v2.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&R4.call(u)==Kl}var me=N7?C1(N7):Za;function Qh(e){return vr(e)&&e>=-L&&e<=L}var xr=R7?C1(R7):Ja;function _5(e){return typeof e=="string"||!G0(e)&&Y2(e)&&_1(e)==K}function A1(e){return typeof e=="symbol"||Y2(e)&&_1(e)==P0}var Qn=B7?C1(B7):Xa;function t_(e){return e===r}function n_(e){return Y2(e)&&o1(e)==S0}function e_(e){return Y2(e)&&_1(e)==B0}var r_=r5(U6),i_=r5(function(e,i){return e<=i});function wr(e){if(!e)return[];if(T1(e))return _5(e)?J1(e):y1(e);if(C3&&e[C3])return Rl(e[C3]());var i=o1(e),u=i==x?O6:i==Z?O4:t3;return u(e)}function Pt(e){if(!e)return e===0?e:0;if(e=U1(e),e===G||e===-G){var i=e<0?-1:1;return i*H}return e===e?e:0}function F0(e){var i=Pt(e),u=i%1;return i===i?u?i-u:i:0}function Sr(e){return e?wn(F0(e),0,L0):0}function U1(e){if(typeof e=="number")return e;if(A1(e))return h0;if($2(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=$2(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=V7(e);var u=Hu.test(e);return u||$u.test(e)?vl(e.slice(2),u?2:8):Iu.test(e)?h0:+e}function br(e){return lt(e,x1(e))}function s_(e){return e?wn(F0(e),-L,L):e===0?e:0}function _2(e){return e==null?"":P1(e)}var o_=Zn(function(e,i){if(H3(i)||T1(i)){lt(i,t1(i),e);return}for(var u in i)v2.call(i,u)&&O3(e,u,i[u])}),Mr=Zn(function(e,i){lt(i,x1(i),e)}),d5=Zn(function(e,i,u,c){lt(i,x1(i),e,c)}),u_=Zn(function(e,i,u,c){lt(i,t1(i),e,c)}),l_=Mt(H6);function a_(e,i){var u=zn(e);return i==null?u:r9(u,i)}var c_=Z0(function(e,i){e=S2(e);var u=-1,c=i.length,_=c>2?i[2]:r;for(_&&d1(i[0],i[1],_)&&(c=1);++u<c;)for(var g=i[u],w=x1(g),b=-1,A=w.length;++b<A;){var B=w[b],I=e[B];(I===r||Q1(I,qn[B])&&!v2.call(e,B))&&(e[B]=g[B])}return e}),f_=Z0(function(e){return e.push(r,V9),k1(kr,r,e)});function h_(e,i){return H7(e,O0(i,3),ut)}function __(e,i){return H7(e,O0(i,3),$6)}function d_(e,i){return e==null?e:G6(e,O0(i,3),x1)}function g_(e,i){return e==null?e:l9(e,O0(i,3),x1)}function p_(e,i){return e&&ut(e,O0(i,3))}function m_(e,i){return e&&$6(e,O0(i,3))}function v_(e){return e==null?[]:z4(e,t1(e))}function y_(e){return e==null?[]:z4(e,x1(e))}function ve(e,i,u){var c=e==null?r:Sn(e,i);return c===r?u:c}function T_(e,i){return e!=null&&U9(e,i,Va)}function ye(e,i){return e!=null&&U9(e,i,Fa)}var x_=I9(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=B4.call(i)),e[i]=u},xe(w1)),w_=I9(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=B4.call(i)),v2.call(e,i)?e[i].push(u):e[i]=[u]},O0),S_=Z0(N3);function t1(e){return T1(e)?n9(e):W6(e)}function x1(e){return T1(e)?n9(e,!0):Qa(e)}function b_(e,i){var u={};return i=O0(i,3),ut(e,function(c,_,g){St(u,i(c,_,g),c)}),u}function M_(e,i){var u={};return i=O0(i,3),ut(e,function(c,_,g){St(u,_,i(c,_,g))}),u}var k_=Zn(function(e,i,u){Z4(e,i,u)}),kr=Zn(function(e,i,u,c){Z4(e,i,u,c)}),C_=Mt(function(e,i){var u={};if(e==null)return u;var c=!1;i=R2(i,function(g){return g=tn(g,e),c||(c=g.length>1),g}),lt(e,ie(e),u),c&&(u=V1(u,y|S|k,Tc));for(var _=i.length;_--;)Z6(u,i[_]);return u});function P_(e,i){return Cr(e,f5(O0(i)))}var A_=Mt(function(e,i){return e==null?{}:nc(e,i)});function Cr(e,i){if(e==null)return{};var u=R2(ie(e),function(c){return[c]});return i=O0(i),v9(e,u,function(c,_){return i(c,_[0])})}function D_(e,i,u){i=tn(i,e);var c=-1,_=i.length;for(_||(_=1,e=r);++c<_;){var g=e==null?r:e[at(i[c])];g===r&&(c=_,g=u),e=Ct(g)?g.call(e):g}return e}function L_(e,i,u){return e==null?e:B3(e,i,u)}function O_(e,i,u,c){return c=typeof c=="function"?c:r,e==null?e:B3(e,i,u,c)}var Pr=$9(t1),Ar=$9(x1);function E_(e,i,u){var c=G0(e),_=c||en(e)||Qn(e);if(i=O0(i,4),u==null){var g=e&&e.constructor;_?u=c?new g:[]:$2(e)?u=Ct(g)?zn(G4(e)):{}:u={}}return(_?G1:ut)(e,function(w,b,A){return i(u,w,b,A)}),u}function N_(e,i){return e==null?!0:Z6(e,i)}function R_(e,i,u){return e==null?e:S9(e,i,Q6(u))}function B_(e,i,u,c){return c=typeof c=="function"?c:r,e==null?e:S9(e,i,Q6(u),c)}function t3(e){return e==null?[]:L6(e,t1(e))}function I_(e){return e==null?[]:L6(e,x1(e))}function H_(e,i,u){return u===r&&(u=i,i=r),u!==r&&(u=U1(u),u=u===u?u:0),i!==r&&(i=U1(i),i=i===i?i:0),wn(U1(e),i,u)}function G_(e,i,u){return i=Pt(i),u===r?(u=i,i=0):u=Pt(u),e=U1(e),Wa(e,i,u)}function $_(e,i,u){if(u&&typeof u!="boolean"&&d1(e,i,u)&&(i=u=r),u===r&&(typeof i=="boolean"?(u=i,i=r):typeof e=="boolean"&&(u=e,e=r)),e===r&&i===r?(e=0,i=1):(e=Pt(e),i===r?(i=e,e=0):i=Pt(i)),e>i){var c=e;e=i,i=c}if(u||e%1||i%1){var _=Q7();return s1(e+_*(i-e+ml("1e-"+((_+"").length-1))),i)}return K6(e,i)}var Y_=Jn(function(e,i,u){return i=i.toLowerCase(),e+(u?Dr(i):i)});function Dr(e){return Te(_2(e).toLowerCase())}function Lr(e){return e=_2(e),e&&e.replace(Vu,Dl).replace(ul,"")}function V_(e,i,u){e=_2(e),i=P1(i);var c=e.length;u=u===r?c:wn(F0(u),0,c);var _=u;return u-=i.length,u>=0&&e.slice(u,_)==i}function F_(e){return e=_2(e),e&&s2.test(e)?e.replace(p0,Ll):e}function W_(e){return e=_2(e),e&&M3.test(e)?e.replace(I1,"\\$&"):e}var U_=Jn(function(e,i,u){return e+(u?"-":"")+i.toLowerCase()}),q_=Jn(function(e,i,u){return e+(u?" ":"")+i.toLowerCase()}),K_=N9("toLowerCase");function j_(e,i,u){e=_2(e),i=F0(i);var c=i?Wn(e):0;if(!i||c>=i)return e;var _=(i-c)/2;return e5(F4(_),u)+e+e5(V4(_),u)}function z_(e,i,u){e=_2(e),i=F0(i);var c=i?Wn(e):0;return i&&c<i?e+e5(i-c,u):e}function Z_(e,i,u){e=_2(e),i=F0(i);var c=i?Wn(e):0;return i&&c<i?e5(i-c,u)+e:e}function J_(e,i,u){return u||i==null?i=0:i&&(i=+i),ra(_2(e).replace(p6,""),i||0)}function X_(e,i,u){return(u?d1(e,i,u):i===r)?i=1:i=F0(i),j6(_2(e),i)}function Q_(){var e=arguments,i=_2(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var td=Jn(function(e,i,u){return e+(u?"_":"")+i.toLowerCase()});function nd(e,i,u){return u&&typeof u!="number"&&d1(e,i,u)&&(i=u=r),u=u===r?L0:u>>>0,u?(e=_2(e),e&&(typeof i=="string"||i!=null&&!me(i))&&(i=P1(i),!i&&Fn(e))?nn(J1(e),0,u):e.split(i,u)):[]}var ed=Jn(function(e,i,u){return e+(u?" ":"")+Te(i)});function rd(e,i,u){return e=_2(e),u=u==null?0:wn(F0(u),0,e.length),i=P1(i),e.slice(u,u+i.length)==i}function id(e,i,u){var c=d.templateSettings;u&&d1(e,i,u)&&(i=r),e=_2(e),i=d5({},i,c,Y9);var _=d5({},i.imports,c.imports,Y9),g=t1(_),w=L6(_,g),b,A,B=0,I=i.interpolate||C4,U="__p += '",d0=E6((i.escape||C4).source+"|"+I.source+"|"+(I===e1?Bu:C4).source+"|"+(i.evaluate||C4).source+"|$","g"),k0="//# sourceURL="+(v2.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++hl+"]")+`
`;e.replace(d0,function(N0,X0,i2,D1,g1,L1){return i2||(i2=D1),U+=e.slice(B,L1).replace(Fu,Ol),X0&&(b=!0,U+=`' +
__e(`+X0+`) +
'`),g1&&(A=!0,U+=`';
`+g1+`;
__p += '`),i2&&(U+=`' +
((__t = (`+i2+`)) == null ? '' : __t) +
'`),B=L1+N0.length,N0}),U+=`';
`;var E0=v2.call(i,"variable")&&i.variable;if(!E0)U=`with (obj) {
`+U+`
}
`;else if(Nu.test(E0))throw new H0(f);U=(A?U.replace(P,""):U).replace(_0,"$1").replace(w0,"$1;"),U="function("+(E0||"obj")+`) {
`+(E0?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(b?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+U+`return __p
}`;var K0=Er(function(){return c2(g,k0+"return "+U).apply(r,w)});if(K0.source=U,pe(K0))throw K0;return K0}function sd(e){return _2(e).toLowerCase()}function od(e){return _2(e).toUpperCase()}function ud(e,i,u){if(e=_2(e),e&&(u||i===r))return V7(e);if(!e||!(i=P1(i)))return e;var c=J1(e),_=J1(i),g=F7(c,_),w=W7(c,_)+1;return nn(c,g,w).join("")}function ld(e,i,u){if(e=_2(e),e&&(u||i===r))return e.slice(0,q7(e)+1);if(!e||!(i=P1(i)))return e;var c=J1(e),_=W7(c,J1(i))+1;return nn(c,0,_).join("")}function ad(e,i,u){if(e=_2(e),e&&(u||i===r))return e.replace(p6,"");if(!e||!(i=P1(i)))return e;var c=J1(e),_=F7(c,J1(i));return nn(c,_).join("")}function cd(e,i){var u=f2,c=M2;if($2(i)){var _="separator"in i?i.separator:_;u="length"in i?F0(i.length):u,c="omission"in i?P1(i.omission):c}e=_2(e);var g=e.length;if(Fn(e)){var w=J1(e);g=w.length}if(u>=g)return e;var b=u-Wn(c);if(b<1)return c;var A=w?nn(w,0,b).join(""):e.slice(0,b);if(_===r)return A+c;if(w&&(b+=A.length-b),me(_)){if(e.slice(b).search(_)){var B,I=A;for(_.global||(_=E6(_.source,_2(c7.exec(_))+"g")),_.lastIndex=0;B=_.exec(I);)var U=B.index;A=A.slice(0,U===r?b:U)}}else if(e.indexOf(P1(_),b)!=b){var d0=A.lastIndexOf(_);d0>-1&&(A=A.slice(0,d0))}return A+c}function fd(e){return e=_2(e),e&&q0.test(e)?e.replace(l0,Gl):e}var hd=Jn(function(e,i,u){return e+(u?" ":"")+i.toUpperCase()}),Te=N9("toUpperCase");function Or(e,i,u){return e=_2(e),i=u?r:i,i===r?Nl(e)?Vl(e):Ml(e):e.match(i)||[]}var Er=Z0(function(e,i){try{return k1(e,r,i)}catch(u){return pe(u)?u:new H0(u)}}),_d=Mt(function(e,i){return G1(i,function(u){u=at(u),St(e,u,de(e[u],e))}),e});function dd(e){var i=e==null?0:e.length,u=O0();return e=i?R2(e,function(c){if(typeof c[1]!="function")throw new $1(a);return[u(c[0]),c[1]]}):[],Z0(function(c){for(var _=-1;++_<i;){var g=e[_];if(k1(g[0],this,c))return k1(g[1],this,c)}})}function gd(e){return Ga(V1(e,y))}function xe(e){return function(){return e}}function pd(e,i){return e==null||e!==e?i:e}var md=B9(),vd=B9(!0);function w1(e){return e}function we(e){return h9(typeof e=="function"?e:V1(e,y))}function yd(e){return d9(V1(e,y))}function Td(e,i){return g9(e,V1(i,y))}var xd=Z0(function(e,i){return function(u){return N3(u,e,i)}}),wd=Z0(function(e,i){return function(u){return N3(e,u,i)}});function Se(e,i,u){var c=t1(i),_=z4(i,c);u==null&&!($2(i)&&(_.length||!c.length))&&(u=i,i=e,e=this,_=z4(i,t1(i)));var g=!($2(u)&&"chain"in u)||!!u.chain,w=Ct(e);return G1(_,function(b){var A=i[b];e[b]=A,w&&(e.prototype[b]=function(){var B=this.__chain__;if(g||B){var I=e(this.__wrapped__),U=I.__actions__=y1(this.__actions__);return U.push({func:A,args:arguments,thisArg:e}),I.__chain__=B,I}return A.apply(e,zt([this.value()],arguments))})}),e}function Sd(){return r1._===this&&(r1._=jl),this}function be(){}function bd(e){return e=F0(e),Z0(function(i){return p9(i,e)})}var Md=ne(R2),kd=ne(I7),Cd=ne(k6);function Nr(e){return le(e)?C6(at(e)):ec(e)}function Pd(e){return function(i){return e==null?r:Sn(e,i)}}var Ad=H9(),Dd=H9(!0);function Me(){return[]}function ke(){return!1}function Ld(){return{}}function Od(){return""}function Ed(){return!0}function Nd(e,i){if(e=F0(e),e<1||e>L)return[];var u=L0,c=s1(e,L0);i=O0(i),e-=L0;for(var _=D6(c,i);++u<e;)i(u);return _}function Rd(e){return G0(e)?R2(e,at):A1(e)?[e]:y1(tr(_2(e)))}function Bd(e){var i=++ql;return _2(e)+i}var Id=n5(function(e,i){return e+i},0),Hd=ee("ceil"),Gd=n5(function(e,i){return e/i},1),$d=ee("floor");function Yd(e){return e&&e.length?j4(e,w1,Y6):r}function Vd(e,i){return e&&e.length?j4(e,O0(i,2),Y6):r}function Fd(e){return $7(e,w1)}function Wd(e,i){return $7(e,O0(i,2))}function Ud(e){return e&&e.length?j4(e,w1,U6):r}function qd(e,i){return e&&e.length?j4(e,O0(i,2),U6):r}var Kd=n5(function(e,i){return e*i},1),jd=ee("round"),zd=n5(function(e,i){return e-i},0);function Zd(e){return e&&e.length?A6(e,w1):0}function Jd(e,i){return e&&e.length?A6(e,O0(i,2)):0}return d.after=yh,d.ary=fr,d.assign=o_,d.assignIn=Mr,d.assignInWith=d5,d.assignWith=u_,d.at=l_,d.before=hr,d.bind=de,d.bindAll=_d,d.bindKey=_r,d.castArray=Lh,d.chain=lr,d.chunk=Gc,d.compact=$c,d.concat=Yc,d.cond=dd,d.conforms=gd,d.constant=xe,d.countBy=Zf,d.create=a_,d.curry=dr,d.curryRight=gr,d.debounce=pr,d.defaults=c_,d.defaultsDeep=f_,d.defer=Th,d.delay=xh,d.difference=Vc,d.differenceBy=Fc,d.differenceWith=Wc,d.drop=Uc,d.dropRight=qc,d.dropRightWhile=Kc,d.dropWhile=jc,d.fill=zc,d.filter=Xf,d.flatMap=nh,d.flatMapDeep=eh,d.flatMapDepth=rh,d.flatten=ir,d.flattenDeep=Zc,d.flattenDepth=Jc,d.flip=wh,d.flow=md,d.flowRight=vd,d.fromPairs=Xc,d.functions=v_,d.functionsIn=y_,d.groupBy=ih,d.initial=tf,d.intersection=nf,d.intersectionBy=ef,d.intersectionWith=rf,d.invert=x_,d.invertBy=w_,d.invokeMap=oh,d.iteratee=we,d.keyBy=uh,d.keys=t1,d.keysIn=x1,d.map=l5,d.mapKeys=b_,d.mapValues=M_,d.matches=yd,d.matchesProperty=Td,d.memoize=c5,d.merge=k_,d.mergeWith=kr,d.method=xd,d.methodOf=wd,d.mixin=Se,d.negate=f5,d.nthArg=bd,d.omit=C_,d.omitBy=P_,d.once=Sh,d.orderBy=lh,d.over=Md,d.overArgs=bh,d.overEvery=kd,d.overSome=Cd,d.partial=ge,d.partialRight=mr,d.partition=ah,d.pick=A_,d.pickBy=Cr,d.property=Nr,d.propertyOf=Pd,d.pull=lf,d.pullAll=or,d.pullAllBy=af,d.pullAllWith=cf,d.pullAt=ff,d.range=Ad,d.rangeRight=Dd,d.rearg=Mh,d.reject=hh,d.remove=hf,d.rest=kh,d.reverse=he,d.sampleSize=dh,d.set=L_,d.setWith=O_,d.shuffle=gh,d.slice=_f,d.sortBy=vh,d.sortedUniq=Tf,d.sortedUniqBy=xf,d.split=nd,d.spread=Ch,d.tail=wf,d.take=Sf,d.takeRight=bf,d.takeRightWhile=Mf,d.takeWhile=kf,d.tap=Yf,d.throttle=Ph,d.thru=u5,d.toArray=wr,d.toPairs=Pr,d.toPairsIn=Ar,d.toPath=Rd,d.toPlainObject=br,d.transform=E_,d.unary=Ah,d.union=Cf,d.unionBy=Pf,d.unionWith=Af,d.uniq=Df,d.uniqBy=Lf,d.uniqWith=Of,d.unset=N_,d.unzip=_e,d.unzipWith=ur,d.update=R_,d.updateWith=B_,d.values=t3,d.valuesIn=I_,d.without=Ef,d.words=Or,d.wrap=Dh,d.xor=Nf,d.xorBy=Rf,d.xorWith=Bf,d.zip=If,d.zipObject=Hf,d.zipObjectDeep=Gf,d.zipWith=$f,d.entries=Pr,d.entriesIn=Ar,d.extend=Mr,d.extendWith=d5,Se(d,d),d.add=Id,d.attempt=Er,d.camelCase=Y_,d.capitalize=Dr,d.ceil=Hd,d.clamp=H_,d.clone=Oh,d.cloneDeep=Nh,d.cloneDeepWith=Rh,d.cloneWith=Eh,d.conformsTo=Bh,d.deburr=Lr,d.defaultTo=pd,d.divide=Gd,d.endsWith=V_,d.eq=Q1,d.escape=F_,d.escapeRegExp=W_,d.every=Jf,d.find=Qf,d.findIndex=er,d.findKey=h_,d.findLast=th,d.findLastIndex=rr,d.findLastKey=__,d.floor=$d,d.forEach=ar,d.forEachRight=cr,d.forIn=d_,d.forInRight=g_,d.forOwn=p_,d.forOwnRight=m_,d.get=ve,d.gt=Ih,d.gte=Hh,d.has=T_,d.hasIn=ye,d.head=sr,d.identity=w1,d.includes=sh,d.indexOf=Qc,d.inRange=G_,d.invoke=S_,d.isArguments=kn,d.isArray=G0,d.isArrayBuffer=Gh,d.isArrayLike=T1,d.isArrayLikeObject=F2,d.isBoolean=$h,d.isBuffer=en,d.isDate=Yh,d.isElement=Vh,d.isEmpty=Fh,d.isEqual=Wh,d.isEqualWith=Uh,d.isError=pe,d.isFinite=qh,d.isFunction=Ct,d.isInteger=vr,d.isLength=h5,d.isMap=yr,d.isMatch=Kh,d.isMatchWith=jh,d.isNaN=zh,d.isNative=Zh,d.isNil=Xh,d.isNull=Jh,d.isNumber=Tr,d.isObject=$2,d.isObjectLike=Y2,d.isPlainObject=$3,d.isRegExp=me,d.isSafeInteger=Qh,d.isSet=xr,d.isString=_5,d.isSymbol=A1,d.isTypedArray=Qn,d.isUndefined=t_,d.isWeakMap=n_,d.isWeakSet=e_,d.join=sf,d.kebabCase=U_,d.last=W1,d.lastIndexOf=of,d.lowerCase=q_,d.lowerFirst=K_,d.lt=r_,d.lte=i_,d.max=Yd,d.maxBy=Vd,d.mean=Fd,d.meanBy=Wd,d.min=Ud,d.minBy=qd,d.stubArray=Me,d.stubFalse=ke,d.stubObject=Ld,d.stubString=Od,d.stubTrue=Ed,d.multiply=Kd,d.nth=uf,d.noConflict=Sd,d.noop=be,d.now=a5,d.pad=j_,d.padEnd=z_,d.padStart=Z_,d.parseInt=J_,d.random=$_,d.reduce=ch,d.reduceRight=fh,d.repeat=X_,d.replace=Q_,d.result=D_,d.round=jd,d.runInContext=C,d.sample=_h,d.size=ph,d.snakeCase=td,d.some=mh,d.sortedIndex=df,d.sortedIndexBy=gf,d.sortedIndexOf=pf,d.sortedLastIndex=mf,d.sortedLastIndexBy=vf,d.sortedLastIndexOf=yf,d.startCase=ed,d.startsWith=rd,d.subtract=zd,d.sum=Zd,d.sumBy=Jd,d.template=id,d.times=Nd,d.toFinite=Pt,d.toInteger=F0,d.toLength=Sr,d.toLower=sd,d.toNumber=U1,d.toSafeInteger=s_,d.toString=_2,d.toUpper=od,d.trim=ud,d.trimEnd=ld,d.trimStart=ad,d.truncate=cd,d.unescape=fd,d.uniqueId=Bd,d.upperCase=hd,d.upperFirst=Te,d.each=ar,d.eachRight=cr,d.first=sr,Se(d,function(){var e={};return ut(d,function(i,u){v2.call(d.prototype,u)||(e[u]=i)}),e}(),{chain:!1}),d.VERSION=s,G1(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){d[e].placeholder=d}),G1(["drop","take"],function(e,i){n2.prototype[e]=function(u){u=u===r?1:J2(F0(u),0);var c=this.__filtered__&&!i?new n2(this):this.clone();return c.__filtered__?c.__takeCount__=s1(u,c.__takeCount__):c.__views__.push({size:s1(u,L0),type:e+(c.__dir__<0?"Right":"")}),c},n2.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),G1(["filter","map","takeWhile"],function(e,i){var u=i+1,c=u==M1||u==D2;n2.prototype[e]=function(_){var g=this.clone();return g.__iteratees__.push({iteratee:O0(_,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),G1(["head","last"],function(e,i){var u="take"+(i?"Right":"");n2.prototype[e]=function(){return this[u](1).value()[0]}}),G1(["initial","tail"],function(e,i){var u="drop"+(i?"":"Right");n2.prototype[e]=function(){return this.__filtered__?new n2(this):this[u](1)}}),n2.prototype.compact=function(){return this.filter(w1)},n2.prototype.find=function(e){return this.filter(e).head()},n2.prototype.findLast=function(e){return this.reverse().find(e)},n2.prototype.invokeMap=Z0(function(e,i){return typeof e=="function"?new n2(this):this.map(function(u){return N3(u,e,i)})}),n2.prototype.reject=function(e){return this.filter(f5(O0(e)))},n2.prototype.slice=function(e,i){e=F0(e);var u=this;return u.__filtered__&&(e>0||i<0)?new n2(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),i!==r&&(i=F0(i),u=i<0?u.dropRight(-i):u.take(i-e)),u)},n2.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},n2.prototype.toArray=function(){return this.take(L0)},ut(n2.prototype,function(e,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),_=d[c?"take"+(i=="last"?"Right":""):i],g=c||/^find/.test(i);_&&(d.prototype[i]=function(){var w=this.__wrapped__,b=c?[1]:arguments,A=w instanceof n2,B=b[0],I=A||G0(w),U=function(X0){var i2=_.apply(d,zt([X0],b));return c&&d0?i2[0]:i2};I&&u&&typeof B=="function"&&B.length!=1&&(A=I=!1);var d0=this.__chain__,k0=!!this.__actions__.length,E0=g&&!d0,K0=A&&!k0;if(!g&&I){w=K0?w:new n2(this);var N0=e.apply(w,b);return N0.__actions__.push({func:u5,args:[U],thisArg:r}),new Y1(N0,d0)}return E0&&K0?e.apply(this,b):(N0=this.thru(U),E0?c?N0.value()[0]:N0.value():N0)})}),G1(["pop","push","shift","sort","splice","unshift"],function(e){var i=E4[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);d.prototype[e]=function(){var _=arguments;if(c&&!this.__chain__){var g=this.value();return i.apply(G0(g)?g:[],_)}return this[u](function(w){return i.apply(G0(w)?w:[],_)})}}),ut(n2.prototype,function(e,i){var u=d[i];if(u){var c=u.name+"";v2.call(jn,c)||(jn[c]=[]),jn[c].push({name:i,func:u})}}),jn[t5(r,r0).name]=[{name:"wrapper",func:r}],n2.prototype.clone=ca,n2.prototype.reverse=fa,n2.prototype.value=ha,d.prototype.at=Vf,d.prototype.chain=Ff,d.prototype.commit=Wf,d.prototype.next=Uf,d.prototype.plant=Kf,d.prototype.reverse=jf,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=zf,d.prototype.first=d.prototype.head,C3&&(d.prototype[C3]=qf),d},Un=Fl();vn?((vn.exports=Un)._=Un,w6._=Un):r1._=Un}).call(hS)}(Z3,Z3.exports)),Z3.exports}var dS=_S();const rs=fS(dS),gS={style:{"padding-left":"20px",display:"flex","flex-direction":"column",gap:"20px",position:"relative","z-index":"1"}},pS={style:{position:"sticky",top:"0px",background:"#0a0a1a",padding:"4px",zIndex:1,display:"flex","flex-direction":"row",gap:"12px"}},mS={style:{display:"flex",gap:"20px","align-items":"center"}},vS=["value"],yS={style:{color:"greenyellow",fontSize:"18px"}},TS={style:{display:"flex","align-items":"center"}},xS={style:{display:"flex","align-items":"center"}},wS=["value"],SS=["value"],bS=["value"],MS=["value"],kS=["value"],CS=["value"],PS={style:{display:"flex",gap:"40px"}},AS={style:{width:"700px"}},DS={style:{width:"700px"}},LS={style:{display:"flex",gap:"40px"}},OS={style:{width:"700px",display:"flex","flex-direction":"column",gap:"12px"}},ES={style:{display:"flex"}},NS={style:{color:"cyan"}},RS=["onClick"],BS=["onClick"],IS={key:0,style:{display:"flex",flexDirection:"column",gap:"12px"}},HS=["onClick"],GS={style:{width:"700px",display:"flex","flex-direction":"column",gap:"12px"}},$S={style:{display:"flex"}},YS={style:{color:"cyan"}},VS=["onClick"],FS=["onClick"],WS={key:0,style:{display:"flex",flexDirection:"column",gap:"12px"}},US=["onClick"],qS="lote_45",KS="lote_55",is=40,ss=46,jS=1,os=6,zS=x4({__name:"HomeView",setup(t){const n=j0(!0),r=j0(!0);function s(z){return z[0].loại_xổ_số===45?qS:KS}const o=Nw(),l=Rw(),a=n0(o[0].ngày_xổ_số,"DD/MM/YYYY"),f=n0(l[0].ngày_xổ_số,"DD/MM/YYYY"),h=o.length,p=a>f?55:45,v=p===45?0:-1,y=p===55?0:-1,S=j0([]),k=j0(7),q=j0(1),$=j0(0),t0=j0(!1),r0=j0(1),J=j0(2);function c0(z,m){const W=new Map;return z.forEach(F=>{const Y=m(F);W.set(Y,(W.get(Y)??0)+1)}),[...W.values()]}function f0(z){const m=Number(r0.value),W=Number(J.value);if(m===-1&&W===-1)return!0;const F=c0(z,i0=>i0%os),Y=c0(z,i0=>Math.floor(i0/os));return m!==-1&&F.filter(i0=>i0>=2).length>=m||W!==-1&&Math.max(...Y)<=W}const a0=j0(0),A0=j0(0),M0=j0(3e3),U0=j0("ngẫu_nhiên"),Q0=j0(12),f2=j0(3),M2=j0(0),I2=j0(15),j2=j0(""),M1=j0([]),v1=j0(""),D2=j0([]),G=j0(""),L=j0([]),H=j0(1),h0=j0(2),L0=j0(0),C0=j0(0),V0=j0(4),k2=j0(1),H2=j0(10),u2=j0(),R=j0();u0(o,v),u0(l,y);async function u0(z,m=0){const W=z[0].loại_xổ_số===45?l:o;for(let F=0;F<z.length;F++){const Y=z[F],i0=W==null?void 0:W[F+m];y0(z,Y,i0,F)}}async function Q(){const z=`v${jS}|45:${is}|55:${ss}`;for(const[m,W]of[[o,l],[l,o]]){const F=m[0].loại_xổ_số,Y=`ds_dự_đoán_${F}`,i0=aS(m,W,z),P=await lS(Y);if((P==null?void 0:P.dấu_vân_tay)===i0&&P.dự_đoán_ds_xuất_hiện.length===m.length&&P.vị_trí_ds_xuất_hiện.length===m.length){m.forEach((_0,w0)=>{_0.dự_đoán_ds_xuất_hiện=P.dự_đoán_ds_xuất_hiện[w0],_0.vị_trí_ds_xuất_hiện=P.vị_trí_ds_xuất_hiện[w0]}),console.log(`đã tải danh sách dự đoán ${F} từ bộ nhớ đệm`);continue}m.forEach((_0,w0)=>{D(m,W,_0,w0)}),await x5(Y,{dấu_vân_tay:i0,dự_đoán_ds_xuất_hiện:m.map(_0=>_0.dự_đoán_ds_xuất_hiện),vị_trí_ds_xuất_hiện:m.map(_0=>_0.vị_trí_ds_xuất_hiện)}),console.log(`đã tạo và lưu danh sách dự đoán ${F} vào bộ nhớ đệm`)}}function y0(z,m,W,F){var Y;m.kết_quả_xổ_số.forEach(i0=>{const P=Number(i0)+F,_0=z[P];_0&&(m.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(_0.kết_quả_xổ_số),_0.kết_quả_xổ_số.forEach(w0=>{var p0,q0;m.tập_các_số_đã_xuất_hiện.add(w0);const l0=m.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(s2=>s2.số_xuất_hiện===w0);if(l0)l0.tổng_xuất_hiện++;else{const s2={số_xuất_hiện:w0,tổng_xuất_hiện:1,là_số_kết_quả:((p0=m.dữ_liệu_kỳ_sau_đó)==null?void 0:p0.kết_quả_xổ_số.includes(w0))||!1,là_số_jackpot_2:((q0=m.dữ_liệu_kỳ_sau_đó)==null?void 0:q0.số_jacpot_2)===w0,là_số_trùng:m.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(w0)};m.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(s2)}}))}),W&&W.kết_quả_xổ_số.filter(i0=>!m.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(i0)).forEach(i0=>{const P=Number(i0)+F,_0=z[P];_0&&(m.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(_0.kết_quả_xổ_số),_0.kết_quả_xổ_số.forEach(w0=>{var p0,q0;m.tập_các_số_đã_xuất_hiện.add(w0);const l0=m.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(s2=>s2.số_xuất_hiện===w0);if(l0)l0.tổng_xuất_hiện++;else{const s2={số_xuất_hiện:w0,tổng_xuất_hiện:1,là_số_kết_quả:((p0=m.dữ_liệu_kỳ_sau_đó)==null?void 0:p0.kết_quả_xổ_số.includes(w0))||!1,là_số_jackpot_2:((q0=m.dữ_liệu_kỳ_sau_đó)==null?void 0:q0.số_jacpot_2)===w0,là_số_trùng:m.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(w0)};m.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(s2)}}))}),m.số_kết_quả_trong_các_số_đã_xuất_hiện=((Y=m.dữ_liệu_kỳ_sau_đó)==null?void 0:Y.kết_quả_xổ_số.filter(i0=>m.tập_các_số_đã_xuất_hiện.has(i0)).length)||0}Q().then(()=>{z0(),h2()});function z0(){S.value=Lw(h),u2.value=o,R.value=l}function h2(){console.log("danh sách dữ liệu 45 đã qua xữ lý: ",o),console.log("danh sách dữ liệu 55 đã qua xữ lý: ",l)}function T(z,m){return ln("div",{style:{width:"220px",display:"flex",flexWrap:"wrap"}},z.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.map((W,F)=>{var Y;return ln("div",{key:`row-dữ_liệu_1${m}${F}`,style:{width:"34px"}},ln("span",{style:{opacity:W.tổng_xuất_hiện<=3?1:.3,border:r.value&&z.kết_quả_xổ_số.includes(W.số_xuất_hiện)?"1px solid blue":null,color:(Y=z.dữ_liệu_kỳ_sau_đó)!=null&&Y.kết_quả_xổ_số.includes(W.số_xuất_hiện)?"red":null}},`${W.số_xuất_hiện}:${W.tổng_xuất_hiện}`))}))}function x(z,m){var Y;const W=((Y=m.dữ_liệu_kỳ_sau_đó)==null?void 0:Y.kết_quả_xổ_số)||[],F=m.kết_quả_xổ_số||[];return ln("div",{style:{width:"220px",display:"flex",flexWrap:"wrap"}},z.map((i0,P)=>ln("div",{key:`row-dự_đoán${P}`,style:{width:"34px"}},ln("span",{style:{color:W.includes(i0)?"red":null,border:F.includes(i0)?"1px solid blue":null}},`${i0}`))))}function D(z,m,W,F){var Y;if(W.dự_đoán_ds_xuất_hiện=Bw(z,m,W,F,W.loại_xổ_số===55?ss:is),F>0){const i0=((Y=z[F-1])==null?void 0:Y.kết_quả_xổ_số)||[];W.dự_đoán_ds_xuất_hiện.forEach(P=>{const _0=[],w0=[];i0.forEach(l0=>{{const p0=P.indexOf(l0);p0>=0?_0.push(p0):w0.push(l0)}}),w0.forEach(l0=>{for(let p0=0;p0<W.dự_đoán_ds_xuất_hiện.length;p0++){const q0=W.dự_đoán_ds_xuất_hiện[p0].indexOf(l0);if(q0>=0&&!_0.includes(q0)){_0.push(q0);break}}}),_0.length===6&&W.vị_trí_ds_xuất_hiện.push(_0)})}}function V(z,m,W=-1){var r2;console.group("Dự Đoán"),console.log(W===-1?"dự đoán cho tất cả":`dự đoán cho vị trí ${W}`);const F=((r2=m.dữ_liệu_kỳ_sau_đó)==null?void 0:r2.kết_quả_xổ_số)||[],Y=m.dự_đoán_ds_xuất_hiện,i0=[];for(let w2=m.vị_trí_dữ_liệu+1;w2<z.length;w2++){const e1=z[w2];i0.push(...e1.vị_trí_ds_xuất_hiện.filter(f0))}console.log("tất cả vị trí dự đoán: ",i0.length),console.log(`bộ lọc: số trùng trong cột = ${r0.value}, số cùng hàng = ${J.value} (-1 là không lọc)`);let P=0,_0=0,w0=0,l0=0,p0=0,q0=0;for(let w2=0;w2<Y.length;w2++)if(W===w2||W===-1){const e1=Y[w2];for(let V2=0;V2<i0.length;V2++){const h1=[];i0[V2].forEach(M3=>{h1.push(e1[M3])});const I1=h1.filter(M3=>F.includes(M3)).length;q0++,I1===3&&P++,I1===4&&_0++,I1===5&&(h1.includes(m.số_jacpot_2)?(console.log("trúng jackpot 2 tại: ",`ds ${w2} vị trí ${V2}`),l0++):(console.log("trúng 5 tại: ",`ds ${w2} vị trí ${V2}`),w0++)),I1===6&&(console.log("trúng jackpot 1 tại: ",`ds ${w2} vị trí ${V2}`),p0++)}}const s2=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.log(F.join(", ")),console.log(`tiền: ${s2.format(q0*1e4)}, tổng: ${q0}, tong_3: ${P}, tong_4: ${_0}, tong_5: ${w0}, jackpot_2: ${l0}, jackpot_1: ${p0}`),console.groupEnd()}async function E(z){var w0;const m=[],W=[],F=new Map,Y=(l0,p0,q0,s2)=>{const r2=[...p0].sort((V2,h1)=>V2-h1),w2=`${l0}|${r2.join(",")}`,e1=F.get(w2);if(e1)e1.tổng_xuất_hiện+=1,e1.xuất_hiện.push(q0),e1.danh_sách.push(s2);else{const V2={ds_vị_trí:r2,tổng_xuất_hiện:1,trùng:l0,xuất_hiện:[q0],danh_sách:[s2]};m.push(V2),F.set(w2,V2)}};for(let l0=z.length-1;l0>=0;l0--){const p0=z[l0],q0=((w0=p0.dữ_liệu_kỳ_sau_đó)==null?void 0:w0.kết_quả_xổ_số)||[],s2=p0.dự_đoán_ds_xuất_hiện;for(let r2=0;r2<s2.length;r2++){const w2=s2[r2],e1=new Uint8Array(w2.length);w2.forEach((V2,h1)=>{q0.includes(V2)&&(e1[h1]=1)});for(let V2=0;V2<W.length;V2++){const h1=W[V2];let $n=0;for(let I1=0;I1<h1.length;I1++)$n+=e1[h1[I1]]|0;$n===5&&Y(p0.loại_xổ_số===55&&h1.includes(Number(p0.số_jacpot_2))?5.5:5,h1,l0,r2),$n===6&&Y(6,h1,l0,r2)}}W.push(...p0.vị_trí_ds_xuất_hiện)}const i0=s(z);await r3.khởi_tạo();const P=await r3.lấy_dữ_liệu_theo_tên(i0);P.length>0?await r3.cập_nhật_dữ_liệu(P[0].id,m):await r3.lưu_dữ_liệu(i0,m);const _0=rs.orderBy(m,[l0=>Math.min(...l0.xuất_hiện),l0=>l0.trùng],["asc","desc"]).map(l0=>({ds_vị_trí:l0.ds_vị_trí,tổng_xuất_hiện:l0.tổng_xuất_hiện,trùng:l0.trùng,xuất_hiện:l0.xuất_hiện.join(", "),danh_sách:l0.danh_sách.join(", ")}));console.log("kết quả thống kê dự đoán: ",_0)}async function j(z){var l0;await r3.khởi_tạo();const W=((l0=(await r3.lấy_dữ_liệu_theo_tên(s(z)))[0])==null?void 0:l0.dữ_liệu)||[],F=[];W.forEach(p0=>{const q0=F.find(s2=>s2.ds_vị_trí.sort().toString()===p0.ds_vị_trí.sort().toString());q0?(q0.tổng_xuất_hiện+=p0.tổng_xuất_hiện,q0.xuất_hiện.push(...p0.xuất_hiện),q0.danh_sách.push(...p0.danh_sách)):F.push({ds_vị_trí:p0.ds_vị_trí,tổng_xuất_hiện:p0.tổng_xuất_hiện,trùng:p0.trùng,xuất_hiện:[...p0.xuất_hiện],danh_sách:[...p0.danh_sách]})});const Y=rs.orderBy(F,[p0=>Math.min(...p0.xuất_hiện),p0=>p0.trùng],["asc","desc"]).map(p0=>({ds_vị_trí:p0.ds_vị_trí.sort().join(", "),tổng_xuất_hiện:p0.tổng_xuất_hiện,trùng:p0.trùng,xuất_hiện:p0.xuất_hiện.join(", "),danh_sách:p0.danh_sách.join(", ")}));console.group("Phân tích và dự đoán"),console.log("tổng danh sách: ",W.length),console.log("sau khi nhóm: ",F.length),console.log("sau khi nhóm: ",Y),console.groupEnd();const i0=z[Number(H.value)],_0=i0.dự_đoán_ds_xuất_hiện[Number(h0.value)]||[];let w0=0;if(Number(H.value)===0){console.group("dự đoán");const p0=[];F.forEach(q0=>{if(q0.danh_sách.includes(Number(L0.value))){const s2=[];q0.ds_vị_trí.forEach(r2=>{s2.push(_0[r2])}),p0.push(s2)}}),console.log(p0),console.groupEnd()}else console.group("phân tích"),F.forEach((p0,q0)=>{if(Number(q0)>Number(H.value)){const s2=[];p0.ds_vị_trí.forEach(w2=>{s2.push(_0[w2])});const r2=s2.filter(w2=>i0.kết_quả_xổ_số.includes(w2)).length;r2===3&&console.log("trúng 3 tại: ",`${Number(H.value)} vị trí ${q0}`),r2===4&&console.log("trúng 4 tại: ",`${Number(H.value)} vị trí ${q0}`),r2===5&&(s2.includes(i0.số_jacpot_2)?console.log("trúng jackpot 2 tại: ",`${H.value} vị trí ${q0}`):console.log("trúng 5 tại: ",`${H.value} vị trí ${q0}`)),r2===6&&console.log("trúng jackpot 1 tại: ",`${H.value} vị trí ${q0}`),w0++}}),console.log("tổng số dự đoán :",w0),console.groupEnd()}function o0(z){var m;return((m=z.dữ_liệu_kỳ_sau_đó)==null?void 0:m.ngày_xổ_số)??P0(z)}function e0(z,m){const W=Xi(z,m),F=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.group(`Đánh giá ${z.length} vé với kết quả kỳ sau (${m.ngày_xổ_số})`),console.log(`kết quả: ${m.kết_quả_xổ_số.join(" ")}${m.số_jacpot_2?` | số phụ: ${m.số_jacpot_2}`:""}`),console.table(W.dòng_theo_mức),console.log(`chi phí (đã gồm phí 3%): ${F.format(W.chi_phí)}, tiền thắng (đã trừ thuế): ${F.format(W.tiền_thắng)}, lãi/lỗ: ${F.format(W.lãi_lỗ)}`),W.vé_trúng_từ_4.length>0&&console.log(`vé trúng từ 4 số:
`+W.vé_trúng_từ_4.map(Y=>`${Y.vé.join(" ")} → ${Y.số_trúng} số (${Y.mức})`).join(`
`)),console.groupEnd()}function Z(z){const m=Number(a0.value),W=z[m];if(!W){console.warn(`Không có kỳ ở vị trí ${m} (có ${z.length} kỳ, từ 0)`);return}const F=Number(A0.value),Y=W.dự_đoán_ds_xuất_hiện[F];if(!Y){console.warn(`Không có danh sách số ${F}: kỳ ở vị trí ${m} của ${W.loại_xổ_số} có ${W.dự_đoán_ds_xuất_hiện.length} danh sách (chỉ số từ 0)`);return}const i0=Number(M0.value),P=sS(Y.length,i0),_0=oS(Y,P),w0=o0(W);x5(`${ts}${W.loại_xổ_số}|${w0}|${F}|${_0.length}`,{loại_xổ_số:W.loại_xổ_số,ngày_cơ_sở:W.ngày_xổ_số,ngày_dự_đoán:w0,thời_điểm_tạo:Date.now(),chỉ_số_danh_sách:F,vé:_0}).then(()=>I0("danh sách",w0));const l0=W.dữ_liệu_kỳ_sau_đó;console.group(`Vé từ danh sách ${F} của kỳ ${m} (${W.ngày_xổ_số}) ${W.loại_xổ_số} (${Y.length} số), dự đoán cho kỳ ${w0}${l0?" (đã có kết quả)":""}, đã lưu để đối chiếu`),console.log(`${_0.length}/${i0} vé, mỗi vé có ít nhất 1 cột từ 2 số, mỗi hàng tối đa 3 số`),_0.length<i0&&console.warn("Không tạo đủ số vé với điều kiện này"),l0?e0(_0,l0):console.log("kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá"),console.log(_0.map(p0=>p0.join(" ")).join(`
`)),console.groupEnd()}function K(z){const m=z[0].loại_xổ_số,W=Vi[U0.value];if(!W){console.warn("Chọn một chiến lược cụ thể để tạo vé");return}const F=Ue[m],Y=z[0],i0=Fw(m,F,W(z,m),l7(Wi(`${m}|${Y.ngày_xổ_số}|${U0.value}`))),P=i0.map(l0=>l0.map(p0=>String(p0).padStart(2,"0"))),_0=o0(Y);x5(`${ns}${m}|${_0}|${U0.value}|${i0.length}`,{loại_xổ_số:m,ngày_cơ_sở:Y.ngày_xổ_số,ngày_dự_đoán:_0,thời_điểm_tạo:Date.now(),chiến_lược:U0.value,vé:P}).then(()=>I0("vé mục tiêu",_0));const w0=$w(z,m);console.group(`Vé kỳ tới ${m} (${U0.value}), dự đoán cho kỳ ${_0}, đã lưu để đối chiếu`),console.log(`số vừa ra (kỳ mới nhất ${z[0].ngày_xổ_số}): ${w0.vừa_ra.join(" ")}`),console.log(`số nóng (nhiều nhất trong 50 kỳ gần nhất): ${w0.nóng.map(l0=>`${l0.số} (${l0.lần} lần)`).join(", ")}`),console.log(`số lạnh (ít nhất trong 50 kỳ gần nhất): ${w0.lạnh.map(l0=>`${l0.số} (${l0.lần} lần)`).join(", ")}`),console.log(`số lâu chưa ra (số kỳ kể từ lần ra gần nhất): ${w0.lâu_chưa_ra.map(l0=>`${l0.số} (${l0.số_kỳ} kỳ)`).join(", ")}`),console.log(`${i0.length}/${F} vé, xác suất có vé trúng từ 5 số: ${(i0.length*Uw(m).từ_5*100).toFixed(3)}%`),console.log(P.map(l0=>l0.join(" ")).join(`
`)),console.groupEnd()}function P0(z){return n0(Su(z.dấu_thời_gian_của_ngày,z.loại_xổ_số===55?55:45)).format("DD/MM/YYYY")}async function g0(){const[z,m,W]=await Promise.all([je(Qi),je(ts),je(ns)]);return[...z.map(({giá_trị:F})=>({loại_nguồn:"vé phủ",nguồn:"vé phủ",loại_xổ_số:F.loại_xổ_số,ngày_cơ_sở:F.ngày_cơ_sở,ngày_dự_đoán:F.ngày_dự_đoán,thời_điểm_tạo:F.thời_điểm_tạo,vé:F.vé.map(Y=>Y.map(i0=>String(i0).padStart(2,"0")))})),...m.map(({giá_trị:F})=>({loại_nguồn:"danh sách",nguồn:`danh sách ${F.chỉ_số_danh_sách}`,loại_xổ_số:F.loại_xổ_số,ngày_cơ_sở:F.ngày_cơ_sở,ngày_dự_đoán:F.ngày_dự_đoán,thời_điểm_tạo:F.thời_điểm_tạo,vé:F.vé})),...W.map(({giá_trị:F})=>({loại_nguồn:"vé mục tiêu",nguồn:`mục tiêu ${F.chiến_lược}`,loại_xổ_số:F.loại_xổ_số,ngày_cơ_sở:F.ngày_cơ_sở,ngày_dự_đoán:F.ngày_dự_đoán,thời_điểm_tạo:F.thời_điểm_tạo,vé:F.vé}))].sort((F,Y)=>Y.thời_điểm_tạo-F.thời_điểm_tạo)}const S0={"vé phủ":j2,"danh sách":v1,"vé mục tiêu":G},B0={"vé phủ":M1,"danh sách":D2,"vé mục tiêu":L};async function I0(z,m){const W=[...new Set((await g0()).filter(Y=>Y.loại_nguồn===z).map(Y=>Y.ngày_dự_đoán))].sort((Y,i0)=>n0(i0,"DD/MM/YYYY").valueOf()-n0(Y,"DD/MM/YYYY").valueOf());B0[z].value=W;const F=S0[z];m&&W.includes(m)?F.value=m:W.includes(F.value)||(F.value=W[0]??"")}I0("vé phủ"),I0("danh sách"),I0("vé mục tiêu");async function J0(z){const m={"vé phủ":"bộ vé phủ","danh sách":"vé từ danh sách xuất hiện","vé mục tiêu":"vé mục tiêu"}[z],W=(await g0()).filter(_0=>_0.loại_nguồn===z);if(W.length===0){console.log(`Chưa có ${m} nào được lưu`);return}const F=S0[z].value,Y=F?W.filter(_0=>_0.ngày_dự_đoán===F):W;if(Y.length===0){console.log(`Không có ${m} nào cho ngày dự đoán ${F}`);return}const i0=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}),P=Y.map(_0=>{const w0=_0.loại_xổ_số===55?l:o,l0=w0.findIndex(w2=>w2.ngày_xổ_số===_0.ngày_cơ_sở),p0=l0>0?w0[l0-1]:void 0,q0={nguồn:_0.nguồn,loại:_0.loại_xổ_số,ngày_lưu:n0(_0.thời_điểm_tạo).format("DD/MM/YYYY HH:mm"),ngày_dự_đoán:_0.ngày_dự_đoán,số_vé:_0.vé.length};if(!p0)return{...q0,kết_quả:"chưa có kết quả"};const s2=Xi(_0.vé,p0),r2=w2=>{var e1;return((e1=s2.dòng_theo_mức.find(V2=>V2.mức_trúng===w2))==null?void 0:e1.số_vé)??0};return{...q0,kết_quả:`${p0.ngày_xổ_số}: ${p0.kết_quả_xổ_số.join(" ")}`,trúng_3:r2("trúng_3"),trúng_4:r2("trúng_4"),trúng_5:r2("trúng_5")+r2("jackpot_2"),trúng_6:r2("jackpot_1"),lãi_lỗ:i0.format(s2.lãi_lỗ)}});console.group(`Đối chiếu ${m} đã lưu (${F||"tất cả ngày dự đoán"})`),console.table(P),console.groupEnd()}function t2(z){try{const m=z===55?l:o,W=Number(M2.value),F=m[W];if(!F){console.warn(`Không có kỳ ở vị trí ${W} (có ${m.length} kỳ, từ 0)`);return}const Y=zw(z,Number(Q0.value),Number(f2.value),Number(I2.value),void 0,Wi(`${z}|${F.ngày_xổ_số}`)),i0=o0(F),P=F.dữ_liệu_kỳ_sau_đó,_0=`${Qi}${z}|${i0}|${Y.nhóm_số.length}|${Y.mức_đảm_bảo}|${Y.vé.length}`;x5(_0,{loại_xổ_số:z,ngày_cơ_sở:F.ngày_xổ_số,ngày_dự_đoán:i0,thời_điểm_tạo:Date.now(),nhóm_số:Y.nhóm_số,mức_đảm_bảo:Y.mức_đảm_bảo,số_vé_tối_thiểu:Y.số_vé_tối_thiểu,vé:Y.vé}).then(()=>I0("vé phủ",i0));const w0=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.group(`Bộ vé phủ ${z} của kỳ ${W} (${F.ngày_xổ_số}), dự đoán cho kỳ ${i0}${P?" (đã có kết quả)":""}, đã lưu để đối chiếu`),console.log("nhóm số: ",Y.nhóm_số.join(", ")),Number(I2.value)<Y.số_vé_tối_thiểu?console.warn(`cần tối thiểu ${Y.số_vé_tối_thiểu} vé để đảm bảo, nên đã dùng ${Y.số_vé_tối_thiểu} vé thay vì ${Number(I2.value)}`):Y.vé.length>Y.số_vé_tối_thiểu&&console.log(`${Y.số_vé_tối_thiểu} vé đầu bảo đảm mức trúng, ${Y.vé.length-Y.số_vé_tối_thiểu} vé thêm giúp tăng cơ hội trúng mức cao hơn`),console.log(`số vé: ${Y.vé.length}, chi phí: ${w0.format(Y.chi_phí)}, đảm bảo trúng ít nhất ${Y.mức_đảm_bảo} số khi có từ ${Y.mức_đảm_bảo} số trúng nằm trong nhóm (xác suất ${(Y.xác_suất_đạt_đảm_bảo*100).toFixed(2)}%)`),console.log(`điểm phổ biến trung bình: ${Y.điểm_phổ_biến_trung_bình} (vé ngẫu nhiên: ${Y.điểm_phổ_biến_vé_ngẫu_nhiên}, càng thấp càng ít người trùng)`),P?e0(Y.vé.map(l0=>l0.map(p0=>String(p0).padStart(2,"0"))),P):console.log("kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá"),console.log(Y.vé.map(l0=>l0.join(" ")).join(`
`)),console.groupEnd()}catch(m){console.warn(m.message)}}function z2(){const z=Number(C0.value),m=Number(V0.value),W=Number(k2.value),F=Number(H2.value);let Y=0;console.group("Số xuất hiện nhiều lần");for(let i0=W;i0<3e3;i0++){const P=new Set;l.slice(i0,i0+F).forEach(w0=>{w0.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.forEach(l0=>{l0.tổng_xuất_hiện>=m&&P.size<6&&P.add(l0.số_xuất_hiện)})});const _0=l[z].kết_quả_xổ_số.filter(w0=>P.has(w0)).length;P.size>=6&&(Y++,_0>=3&&(console.log([...P.values()].join(", ")),console.log(`tổng số trùng với kết quả xổ số tại vị trí ${z}: ${_0}`)))}console.log("tổng số dự đoán: ",Y),console.groupEnd()}function G2(z){const m=Number(q.value),W=Number($.value),F=z===55?l:o,Y=new Set,i0=new Set;if(W<0)for(let P=W+1;P<W+11;P++){const _0=F[P],w0=_0.kết_quả_xổ_số.map(l0=>{let p0=(Number(l0)+m)%z;return p0=p0===0?z:p0,i0.add(p0),p0});console.log(`dự đoán kỳ ${_0.ngày_xổ_số}: ${w0.join(", ")}`)}else{const _0=F[W].kết_quả_xổ_số;for(let w0=W+1;w0<F.length;w0++){const l0=F[w0],p0=l0.kết_quả_xổ_số.map(s2=>{let r2=(Number(s2)+m)%z;return r2=r2===0?z:r2,i0.add(r2),r2}),q0=_0.filter(s2=>{const r2=p0.includes(Number(s2));return r2&&Y.add(Number(s2)),r2}).length;console.log(`dự đoán kỳ ${l0.ngày_xổ_số}: ${p0.join(", ")} → trùng ${q0} số`)}console.log("các số được dự đoán:",[...Y.values()].join(", ")),console.log("các số được dự đoán:",[...i0.values()].join(", "),i0.size)}}return(z,m)=>{var W,F,Y,i0;return v0(),b0("div",gS,[M("div",pS,[M("div",null,[M("div",mS,[M("div",null,[d2(M("select",{"onUpdate:modelValue":m[0]||(m[0]=P=>k.value=P)},[(v0(!0),b0($0,null,q2(S.value,P=>(v0(),b0("option",{key:P,value:P},s0(P),9,vS))),128))],512),[[sn,k.value]])])]),M("div",null,[m[42]||(m[42]=m0(" Hôm nay dự đoán cho: ")),M("span",yS,s0(T2(p)),1)]),M("div",null,[M("div",TS,[m[43]||(m[43]=M("div",{style:{background:"red",width:"10px",height:"10px"}},null,-1)),m[44]||(m[44]=m0(" Kết quả dự đoán ")),d2(M("input",{"onUpdate:modelValue":m[1]||(m[1]=P=>n.value=P),type:"checkbox"},null,512),[[Ie,n.value]])]),M("div",xS,[m[45]||(m[45]=M("div",{style:{background:"blue",width:"10px",height:"10px"}},null,-1)),m[46]||(m[46]=m0(" Kết quả hiện tại ")),d2(M("input",{"onUpdate:modelValue":m[2]||(m[2]=P=>r.value=P),type:"checkbox"},null,512),[[Ie,r.value]])])]),M("div",null,[M("button",{onClick:m[3]||(m[3]=P=>G2(55))},"Dự đoán bằng tăng 55"),M("button",{onClick:m[4]||(m[4]=P=>G2(45))},"Dự đoán bằng tăng 45"),m[47]||(m[47]=m0(" dự đoán cho: ")),d2(M("input",{"onUpdate:modelValue":m[5]||(m[5]=P=>$.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,$.value]]),m[48]||(m[48]=m0(" đơn vị: ")),d2(M("input",{"onUpdate:modelValue":m[6]||(m[6]=P=>q.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,q.value]])]),M("div",null,[m[49]||(m[49]=m0("Hiển thị chi tiết: ")),d2(M("input",{"onUpdate:modelValue":m[7]||(m[7]=P=>t0.value=P),type:"checkbox"},null,512),[[Ie,t0.value]])]),t0.value?(v0(),b0($0,{key:0},[m[54]||(m[54]=m0(" *1* Cho: Xem dự đoán ")),M("div",null,[m[50]||(m[50]=m0(" - Lọc ít nhất ")),d2(M("select",{"onUpdate:modelValue":m[8]||(m[8]=P=>r0.value=P)},[(v0(),b0($0,null,q2([-1,1,2,3],P=>M("option",{key:P,value:P},s0(P),9,wS)),64))],512),[[sn,r0.value]]),m[51]||(m[51]=m0(" cột có từ 2 số trở lên "))]),M("div",null,[m[52]||(m[52]=m0(" - Lọc mỗi hàng tối đa ")),d2(M("select",{"onUpdate:modelValue":m[9]||(m[9]=P=>J.value=P)},[(v0(),b0($0,null,q2([-1,2,3,4],P=>M("option",{key:P,value:P},s0(P),9,SS)),64))],512),[[sn,J.value]]),m[53]||(m[53]=m0(" số (điều kiện or, -1 là không lọc) *1* "))])],64)):On("",!0)]),M("div",null,[M("div",null,[M("div",null,[m[55]||(m[55]=m0(" *1* ")),M("button",{onClick:m[10]||(m[10]=P=>E(T2(l)))},"thống kê dự đoán 55"),M("button",{onClick:m[11]||(m[11]=P=>E(T2(o)))},"thống kê dự đoán 45"),m[56]||(m[56]=m0(" để lưu vào indexed DB "))]),M("div",null,[m[59]||(m[59]=m0(" từ Indexed DB")),M("button",{onClick:m[12]||(m[12]=P=>j(T2(l)))}," phân tích và dự đoán 55"),M("button",{onClick:m[13]||(m[13]=P=>j(T2(o)))}," phân tích và dự đoán 45 "),m[60]||(m[60]=m0(" chỉ mục ")),d2(M("input",{type:"text","onUpdate:modelValue":m[14]||(m[14]=P=>H.value=P),placeholder:"Nhập vị trí phân tích",style:{width:"20px"}},null,512),[[X2,H.value]]),m[61]||(m[61]=m0(" danh sách dự đoán ")),d2(M("input",{type:"text","onUpdate:modelValue":m[15]||(m[15]=P=>h0.value=P),placeholder:"Nhập vị trí dự đoán",style:{width:"20px"}},null,512),[[X2,h0.value]]),M("div",null,[m[57]||(m[57]=m0(" lọc nhóm từng trúng ở danh sách số ")),d2(M("input",{type:"text","onUpdate:modelValue":m[16]||(m[16]=P=>L0.value=P),style:{width:"20px"}},null,512),[[X2,L0.value]]),m[58]||(m[58]=m0(" (khi chọn chỉ mục = 0) *1* "))])])]),M("div",null,[m[62]||(m[62]=m0(" *2* Số Xuất hiện nhiều lần: vị trí dự đoán: ")),d2(M("input",{"onUpdate:modelValue":m[17]||(m[17]=P=>C0.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,C0.value]]),m[63]||(m[63]=m0(" bao nhiêu lần: ")),d2(M("input",{"onUpdate:modelValue":m[18]||(m[18]=P=>V0.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,V0.value]]),m[64]||(m[64]=m0(" từ vị trí: ")),d2(M("input",{"onUpdate:modelValue":m[19]||(m[19]=P=>k2.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,k2.value]]),m[65]||(m[65]=m0(" xem bao nhiêu: ")),d2(M("input",{"onUpdate:modelValue":m[20]||(m[20]=P=>H2.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,H2.value]]),M("button",{onClick:m[21]||(m[21]=P=>z2())},"Lọc"),m[66]||(m[66]=m0(" *2* "))]),M("div",null,[m[68]||(m[68]=m0(" *3* Bộ vé phủ: kỳ ")),d2(M("input",{"onUpdate:modelValue":m[22]||(m[22]=P=>M2.value=P),type:"text",style:{width:"30px"}},null,512),[[X2,M2.value]]),m[69]||(m[69]=m0(" nhóm ")),d2(M("input",{"onUpdate:modelValue":m[23]||(m[23]=P=>Q0.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,Q0.value]]),m[70]||(m[70]=m0(" số, đảm bảo trúng ")),d2(M("input",{"onUpdate:modelValue":m[24]||(m[24]=P=>f2.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,f2.value]]),m[71]||(m[71]=m0(" số, số vé ")),d2(M("input",{"onUpdate:modelValue":m[25]||(m[25]=P=>I2.value=P),type:"text",style:{width:"30px"}},null,512),[[X2,I2.value]]),M("button",{onClick:m[26]||(m[26]=P=>t2(55))},"tạo vé 55"),M("button",{onClick:m[27]||(m[27]=P=>t2(45))},"tạo vé 45"),m[72]||(m[72]=m0(" ngày dự đoán ")),d2(M("select",{"onUpdate:modelValue":m[28]||(m[28]=P=>j2.value=P)},[m[67]||(m[67]=M("option",{value:""},"tất cả",-1)),(v0(!0),b0($0,null,q2(M1.value,P=>(v0(),b0("option",{key:P,value:P},s0(P),9,bS))),128))],512),[[sn,j2.value]]),M("button",{onClick:m[29]||(m[29]=P=>J0("vé phủ"))},"đối chiếu vé đã lưu"),m[73]||(m[73]=m0(" *3* "))]),M("div",null,[m0(" *4* Vé mục tiêu (55: "+s0(T2(Ue)[55])+", 45: "+s0(T2(Ue)[45])+") chiến lược ",1),d2(M("select",{"onUpdate:modelValue":m[30]||(m[30]=P=>U0.value=P)},[(v0(!0),b0($0,null,q2(Object.keys(T2(Vi)),P=>(v0(),b0("option",{key:P,value:P},s0(P),9,MS))),128))],512),[[sn,U0.value]]),M("button",{onClick:m[31]||(m[31]=P=>K(T2(l)))},"vé kỳ tới 55"),M("button",{onClick:m[32]||(m[32]=P=>K(T2(o)))},"vé kỳ tới 45"),m[75]||(m[75]=m0(" ngày đối chiếu ")),d2(M("select",{"onUpdate:modelValue":m[33]||(m[33]=P=>G.value=P)},[m[74]||(m[74]=M("option",{value:""},"tất cả",-1)),(v0(!0),b0($0,null,q2(L.value,P=>(v0(),b0("option",{key:P,value:P},s0(P),9,kS))),128))],512),[[sn,G.value]]),M("button",{onClick:m[34]||(m[34]=P=>J0("vé mục tiêu"))},"đối chiếu vé đã lưu"),m[76]||(m[76]=m0(" *4* "))]),M("div",null,[m[78]||(m[78]=m0(" *5* Vé từ danh sách xuất hiện (công thức cố định, ít nhất 1 cột 2 số, mỗi hàng tối đa 3 số): kỳ ")),d2(M("input",{"onUpdate:modelValue":m[35]||(m[35]=P=>a0.value=P),type:"text",style:{width:"30px"}},null,512),[[X2,a0.value]]),m[79]||(m[79]=m0(" danh sách ")),d2(M("input",{"onUpdate:modelValue":m[36]||(m[36]=P=>A0.value=P),type:"text",style:{width:"20px"}},null,512),[[X2,A0.value]]),m[80]||(m[80]=m0(" số vé ")),d2(M("input",{"onUpdate:modelValue":m[37]||(m[37]=P=>M0.value=P),type:"text",style:{width:"40px"}},null,512),[[X2,M0.value]]),M("button",{onClick:m[38]||(m[38]=P=>Z(T2(l)))},"tạo 55"),M("button",{onClick:m[39]||(m[39]=P=>Z(T2(o)))},"tạo 45"),m[81]||(m[81]=m0(" ngày đối chiếu ")),d2(M("select",{"onUpdate:modelValue":m[40]||(m[40]=P=>v1.value=P)},[m[77]||(m[77]=M("option",{value:""},"tất cả",-1)),(v0(!0),b0($0,null,q2(D2.value,P=>(v0(),b0("option",{key:P,value:P},s0(P),9,CS))),128))],512),[[sn,v1.value]]),M("button",{onClick:m[41]||(m[41]=P=>J0("danh sách"))},"đối chiếu vé đã lưu"),m[82]||(m[82]=m0(" *5* "))])])]),M("div",PS,[M("div",AS," Tổng số dữ liệu 55: "+s0((W=R.value)==null?void 0:W.length),1),M("div",DS," Tổng số dữ liệu 45: "+s0((F=u2.value)==null?void 0:F.length),1)]),M("div",LS,[M("div",OS,[(v0(!0),b0($0,null,q2((Y=R.value)==null?void 0:Y.slice(0,k.value),(P,_0)=>(v0(),b0("div",{key:`danh_sách_dữ_liệu-${_0}`,style:{height:"auto"}},[M("div",ES,[M("div",null,s0(P.ngày_xổ_số)+"::"+s0(P.tuần_xổ_số)+"::"+s0(_0)+"::",1),M("div",NS,s0(P.kết_quả_xổ_số),1)]),t0.value?(v0(),b0($0,{key:0},[M("div",null,"Số kết quả có: "+s0(P.số_kết_quả_trong_các_số_đã_xuất_hiện),1),M("div",null,"Số lượng xuất hiện: "+s0(P.tập_các_số_đã_xuất_hiện.size),1),m[83]||(m[83]=M("div",null,"Danh sách xuất hiện:",-1)),(v0(),u3(v5(()=>T(P,_0)))),M("div",null,"tổng danh sách: "+s0(P.dự_đoán_ds_xuất_hiện.length),1),M("div",null,[M("button",{onClick:w0=>V(T2(l),P)}," xem dự đoán ",8,RS),M("button",{onClick:w0=>P.hiển_thị_dự_đoán_ds_xuất_hiện=!P.hiển_thị_dự_đoán_ds_xuất_hiện}," xem danh sách ",8,BS)]),P.dự_đoán_ds_xuất_hiện.length>0&&P.hiển_thị_dự_đoán_ds_xuất_hiện?(v0(),b0("div",IS,[(v0(!0),b0($0,null,q2(P.dự_đoán_ds_xuất_hiện,(w0,l0)=>(v0(),b0("div",{key:`${l0}ds`},[M("div",null,[m0(s0(l0),1),(v0(),u3(v5(()=>x(w0,P))))]),M("button",{onClick:p0=>V(T2(l),P,l0)}," xem dự đoán ",8,HS)]))),128))])):On("",!0)],64)):On("",!0)]))),128))]),M("div",GS,[(v0(!0),b0($0,null,q2((i0=u2.value)==null?void 0:i0.slice(0,k.value),(P,_0)=>(v0(),b0("div",{key:`danh_sách_dữ_liệu-${_0}`,style:{height:"auto"}},[M("div",$S,[M("div",null,s0(P.ngày_xổ_số)+"::"+s0(P.tuần_xổ_số)+"::"+s0(_0)+"::",1),M("div",YS,s0(P.kết_quả_xổ_số),1)]),t0.value?(v0(),b0($0,{key:0},[M("div",null,"Số kết quả có: "+s0(P.số_kết_quả_trong_các_số_đã_xuất_hiện),1),M("div",null,"Số lượng xuất hiện: "+s0(P.tập_các_số_đã_xuất_hiện.size),1),m[84]||(m[84]=M("div",null,"Danh sách xuất hiện:",-1)),(v0(),u3(v5(()=>T(P,_0)))),M("div",null,"tổng danh sách: "+s0(P.dự_đoán_ds_xuất_hiện.length),1),M("div",null,[M("button",{onClick:w0=>V(T2(o),P)}," xem dự đoán ",8,VS),M("button",{onClick:w0=>P.hiển_thị_dự_đoán_ds_xuất_hiện=!P.hiển_thị_dự_đoán_ds_xuất_hiện}," xem danh sách ",8,FS)]),P.dự_đoán_ds_xuất_hiện.length>0&&P.hiển_thị_dự_đoán_ds_xuất_hiện?(v0(),b0("div",WS,[(v0(!0),b0($0,null,q2(P.dự_đoán_ds_xuất_hiện,(w0,l0)=>(v0(),b0("div",{key:`${l0}ds`},[M("div",null,[m0(s0(l0),1),(v0(),u3(v5(()=>x(w0,P))))]),M("button",{onClick:p0=>V(T2(o),P,l0)}," xem dự đoán ",8,US)]))),128))])):On("",!0)],64)):On("",!0)]))),128))])])])}}}),ZS=`Bến Tre	20/10/2026	213684 07672 43329 79847 93922 97050 57092 34679 11483 99579 63323 95277 9664 4111 3777 9526 272 33
Vũng Tàu	20/10/2026	319542 00144 66573 77425 11244 08191 17159 48824 41937 27707 95025 56892 9322 9672 6442 0557 583 91
Bạc Liêu	20/10/2026	565770 43242 80680 70727 60872 35687 37625 63772 82433 25374 24299 81345 2533 9434 0470 0332 702 90
TP.HCM	19/10/2026	091891 17912 15175 82849 64610 67735 34073 48667 54437 55300 65410 60091 4598 9428 5499 0311 585 20
Đồng Tháp	19/10/2026	813616 44126 64256 83284 81890 95307 01989 00446 06999 36892 65566 34187 7195 2375 9819 3054 163 70
Cà Mau	19/10/2026	519539 38428 06374 57445 43066 72217 98919 92404 38610 03140 78219 57166 5630 6310 7309 4406 377 51
Tiền Giang	18/10/2026	425917 87589 89058 35489 18042 79864 43222 98288 43147 38434 01425 88582 8883 2627 9219 3783 334 10
Kiên Giang	18/10/2026	316954 63200 86727 20679 33439 07755 73649 61281 82092 38799 87621 19241 5350 8165 1344 6305 782 43
Đà Lạt	18/10/2026	761867 52444 15913 12059 91722 55888 48077 07725 48150 46891 89980 61585 4565 1536 6524 8335 171 40
TP.HCM	17/10/2026	590803 14485 99287 80279 21331 34507 47272 93792 89283 36790 57855 16148 0788 6635 6350 0337 262 47
Long An	17/10/2026	622870 27805 50247 85097 45560 72113 02016 23387 77083 91401 00319 09820 4611 2244 5150 0826 398 63
Bình Phước	17/10/2026	057842 25093 15669 69124 43523 67401 39929 18774 59401 50986 45762 73659 0245 2174 3304 0125 022 88
Hậu Giang	17/10/2026	235118 62572 80594 18547 62826 76876 79625 51583 23079 76994 91595 89759 9680 4856 3710 5390 484 99
Vĩnh Long	16/10/2026	262014 23288 44754 02018 98718 12367 48831 76319 96964 23091 08619 54921 9722 6608 3913 0023 090 34
Bình Dương	16/10/2026	441166 98104 07911 13670 40718 83646 89043 11694 78748 07728 70400 90859 8458 4476 3772 8866 639 73
Trà Vinh	16/10/2026	662340 60856 11124 19785 20116 83873 17278 61730 04390 47357 06569 37541 6072 0801 2810 6490 869 26
Tây Ninh	15/10/2026	636638 30501 74151 86013 07895 41713 60034 90237 42768 61726 60797 78798 5423 9148 2440 2642 775 77
An Giang	15/10/2026	120192 15326 63628 08384 34163 64905 35779 78698 64005 90079 05360 98571 4335 5630 9550 9992 742 64
Bình Thuận	15/10/2026	785898 84278 20139 31017 74460 20237 76995 02607 24767 12584 18702 74839 7593 5952 0510 0622 741 44
Đồng Nai	14/10/2026	953606 56963 91506 59367 37080 42005 68642 93188 40838 84283 02197 06450 2491 2536 6668 4420 054 56
Cần Thơ	14/10/2026	589130 32895 25090 59310 34240 34148 27682 29955 74244 38355 61099 57086 9531 7827 7866 8397 745 13
Sóc Trăng	14/10/2026	483213 81651 65962 40219 49636 17961 51343 43804 91334 31368 88334 04448 4250 6930 8856 7244 384 81
Bến Tre	13/10/2026	542064 04541 70021 11455 66207 67070 38034 06512 88164 37969 34097 91471 7365 0371 4233 4063 955 78
Vũng Tàu	13/10/2026	056006 26038 32678 86364 58373 31975 89378 37266 77391 13624 44992 49857 1992 9063 3211 8011 628 59
Bạc Liêu	13/10/2026	191384 95407 57582 32244 24580 77549 00795 14301 49634 91432 47987 89844 6478 8902 1805 0661 679 62
TP.HCM	12/10/2026	290770 14385 81033 06855 81447 65873 98134 16986 50949 91680 40589 43031 6811 8451 2017 2393 029 91
Đồng Tháp	12/10/2026	725063 98614 91713 59841 53745 23521 66643 77051 68214 68517 05278 89318 8166 6286 8577 2433 399 92
Cà Mau	12/10/2026	683310 28250 60885 51071 30777 68184 17856 89984 91666 41068 74016 59548 4465 6867 6251 8256 327 91
Tiền Giang	11/10/2026	228460 77763 58726 33468 51443 23160 93077 06378 70206 28636 23211 91460 4999 9489 3945 9037 181 05
Kiên Giang	11/10/2026	667748 17554 21904 94973 63766 42596 00479 41441 98399 97309 32650 40600 1358 3288 3852 4980 287 80
Đà Lạt	11/10/2026	102253 44521 62738 11188 93405 07013 63717 54473 68173 24270 99384 50309 9003 2207 0014 8403 265 18
TP.HCM	10/10/2026	517827 81024 46458 57811 89681 26861 70516 70283 11000 69765 70821 76949 9354 3952 3914 4285 725 96
Long An	10/10/2026	306427 01820 82006 86717 42802 04817 38854 77295 21731 37948 88713 53814 9942 3571 5813 8198 244 69
Bình Phước	10/10/2026	206606 78662 23051 50501 61080 84377 62226 14893 72264 68358 29428 67569 5727 3877 4255 9736 624 88
Hậu Giang	10/10/2026	900389 83105 73432 65646 44345 80596 02077 41832 36255 23609 14080 75950 3737 9192 3217 1075 469 53
Vĩnh Long	09/10/2026	120550 64433 29631 18952 49213 94894 87109 67108 30092 96914 11271 89850 9201 4459 9958 6602 816 28
Bình Dương	09/10/2026	556557 61592 80438 45271 04162 62335 10248 66809 94607 48398 86259 56294 6042 0638 6441 2459 357 24
Trà Vinh	09/10/2026	364953 51287 12926 41606 67223 87828 80227 87191 47571 03285 70495 56164 1814 4862 3192 7237 912 70
Tây Ninh	08/10/2026	999472 15569 35606 74517 88638 45272 08288 41991 40417 20959 59618 68834 9557 3308 4485 9749 489 54
An Giang	08/10/2026	924168 56163 75890 82626 47142 54296 64520 71110 63339 29537 47309 78610 5578 6118 2186 6073 138 37
Bình Thuận	08/10/2026	088061 86106 62336 86495 21687 71461 13977 60824 31229 31917 23883 75442 5767 3995 5070 0902 739 03
Đồng Nai	07/10/2026	105684 03113 54142 81730 14703 67186 87407 05324 30505 03842 96675 74999 0767 0721 2867 1147 905 73
Cần Thơ	07/10/2026	011844 07109 24013 22564 67685 99177 77695 91450 84176 52656 87005 02124 8166 9486 0577 5362 799 96
Sóc Trăng	07/10/2026	308223 63901 76240 66913 96817 89519 94420 40687 24939 52064 69637 41294 9313 1036 0768 3280 022 49
Bến Tre	06/10/2026	132459 96438 90217 64408 77513 73407 97092 44351 67708 42931 91813 10072 9696 0019 5511 4739 673 93
Vũng Tàu	06/10/2026	914112 32303 31854 18482 85541 70058 84841 00192 67127 74204 93124 52583 4694 3762 6395 7154 555 86
Bạc Liêu	06/10/2026	507180 74907 09670 67311 36310 94160 99441 05561 92826 84015 76825 17010 9682 6492 5850 3288 296 55
TP.HCM	05/10/2026	750136 99882 10842 99092 75676 44118 39055 75974 55336 55027 70253 03612 2393 6709 6519 9382 674 59
Đồng Tháp	05/10/2026	555738 73680 37527 15175 56449 44390 56294 00393 49150 45158 81012 08550 1490 2499 5857 0033 782 19
Cà Mau	05/10/2026	030118 00496 02682 20865 43533 97520 03798 19769 76864 63335 73120 67518 1065 1709 3942 7583 082 79
Tiền Giang	04/10/2026	668674 78227 67524 41566 63764 26223 06148 95880 97385 15416 05787 79132 0775 3046 3286 1401 481 75
Kiên Giang	04/10/2026	062977 82009 15566 57942 26035 62275 61137 55861 03439 86553 27442 28060 2070 2582 1802 8238 169 31
Đà Lạt	04/10/2026	239681 44605 67332 81218 42573 12165 32789 25954 94747 14092 16120 39733 3196 2977 0361 9980 325 71
TP.HCM	03/10/2026	660851 17459 21871 79828 43422 75903 73649 92358 47410 94976 93777 07633 8436 2023 6763 3163 357 75
Long An	03/10/2026	018356 43348 66353 04451 24486 21809 09422 79871 92257 52381 55307 74890 7181 5441 7601 4399 538 40
Bình Phước	03/10/2026	740065 60169 99953 45155 68161 35267 18383 37730 69543 59420 35361 83504 7444 7544 0606 6071 741 49
Hậu Giang	03/10/2026	383277 28666 20121 59388 34380 97130 35326 74520 35246 01569 17530 99017 1883 9994 6681 7384 888 41
Vĩnh Long	02/10/2026	132697 77305 31549 50576 14938 18666 15990 44238 49325 25037 90913 60453 1802 3753 0609 3108 496 40
Bình Dương	02/10/2026	313004 00879 39283 18090 57493 17467 02851 90548 29519 91876 50071 04917 0705 4242 2886 9451 143 07
Trà Vinh	02/10/2026	886827 59378 84718 75794 90469 94340 96971 37408 54812 57205 99055 98036 4386 4822 8960 0026 477 57
Tây Ninh	01/10/2026	348513 80777 55031 31306 58213 45546 75678 30698 38266 37991 33648 70127 9755 2102 6847 9663 866 04
An Giang	01/10/2026	016473 57382 70855 63805 49007 18346 98300 44793 37823 57354 67415 68623 0077 1812 3049 8786 840 69
Bình Thuận	01/10/2026	247346 57496 48760 06279 80247 78624 77552 59117 20761 25785 40077 58621 7649 7307 4203 7496 861 00
Đồng Nai	30/09/2026	470822 46177 64114 17078 10583 60110 70505 04633 99206 41977 48756 79224 7819 1983 1429 8180 956 87
Cần Thơ	30/09/2026	216556 25432 51271 57775 49227 29614 06587 40447 69545 05086 05661 53386 5952 2971 7027 2662 587 36
Sóc Trăng	30/09/2026	275034 33828 29411 98451 38484 67466 88093 63364 00906 89217 69660 80706 4713 9792 5605 0638 344 51
Bến Tre	29/09/2026	383665 61692 75792 14309 37125 49058 06693 06306 15228 98990 54213 61395 9293 8725 3897 2585 665 75
Vũng Tàu	29/09/2026	333771 14992 67850 16288 21673 04232 96159 48194 08565 03103 07250 64199 1066 4027 3142 7899 405 14
Bạc Liêu	29/09/2026	150902 57108 06956 70765 65775 74311 88775 14160 52458 10696 35055 43915 7417 1803 4497 6892 927 20
TP.HCM	28/09/2026	760372 57769 10072 49513 21219 74569 89878 58813 25531 17297 59888 76986 3811 7161 6655 2155 285 21
Đồng Tháp	28/09/2026	048795 00633 48063 02626 33134 18640 54016 34952 69680 49404 14917 99983 9544 3636 1122 4283 018 27
Cà Mau	28/09/2026	281551 42704 79248 91031 36267 28220 25796 43045 51872 02802 30614 07566 1237 4194 3009 2896 276 41
Tiền Giang	27/09/2026	240624 26392 70796 31815 65401 47008 70443 97286 11585 71079 20755 50315 0218 1474 3228 9901 189 43
Kiên Giang	27/09/2026	713078 98680 40290 04495 61481 87202 24192 29045 30596 12731 26400 89740 9918 4293 5879 1733 142 76
Đà Lạt	27/09/2026	450102 09241 42333 70771 26829 09687 16731 80111 80183 86939 96452 96329 5306 3531 6265 8259 948 95
TP.HCM	26/09/2026	584475 29156 48593 68071 98546 39659 65601 58662 71396 30693 94113 81582 9315 8551 8397 1573 628 76
Long An	26/09/2026	985879 56436 06592 96393 90037 67110 44204 96921 69665 63517 91037 43228 8151 7010 7327 2694 920 13
Bình Phước	26/09/2026	745514 32981 72783 38105 31112 25312 07552 55416 46121 51084 30855 38602 8168 8730 6727 2552 407 17
Hậu Giang	26/09/2026	957565 95411 86150 63983 49995 62960 85320 38501 82568 24443 53108 89483 2055 8349 2959 2584 772 83
Vĩnh Long	25/09/2026	017299 88689 73017 60896 08186 16709 94790 36972 49885 43083 57459 77406 1048 4591 2561 2616 917 42
Bình Dương	25/09/2026	475052 73243 96902 81050 89385 29521 09322 86169 63678 36024 35156 14658 9303 6509 7000 7699 347 43
Trà Vinh	25/09/2026	107064 31703 04320 79301 33093 05961 95735 70344 26452 45816 49208 14440 5231 1089 8087 1366 699 43
Tây Ninh	24/09/2026	136970 56573 67343 43805 60358 90848 39391 24045 69540 58135 16486 94018 4033 1928 5575 3686 475 69
An Giang	24/09/2026	401901 76659 00474 33442 86721 77324 74392 27983 78585 68723 51254 96250 7482 6545 7305 0843 610 87
Bình Thuận	24/09/2026	377346 18173 04871 68763 48398 83626 46191 15729 18159 66600 14097 00564 5892 7464 9006 7600 744 95
Đồng Nai	23/09/2026	567326 44953 72389 66244 57727 10692 34215 46927 92993 53119 48129 71845 6421 6394 1954 0247 778 14
Cần Thơ	23/09/2026	157293 56175 08214 69203 12962 85468 24481 93448 63122 54072 71243 48066 9174 4535 3835 5078 843 50
Sóc Trăng	23/09/2026	523291 61832 84117 01301 62146 62307 91798 09559 43811 23682 52990 45011 7242 7699 8469 4721 744 66
Bến Tre	22/09/2026	910864 18315 00404 65002 05409 25509 81678 34856 41371 78035 91165 65924 1112 5594 7465 1218 228 15
Vũng Tàu	22/09/2026	033387 34637 29195 86575 64011 92819 83987 45200 15566 42489 23699 62216 3459 2265 4620 6643 050 47
Bạc Liêu	22/09/2026	977937 88030 76219 75266 50819 49739 78267 38221 86693 98919 04496 33364 2429 6654 8969 3873 881 90
TP.HCM	21/09/2026	016707 45022 33533 47812 54384 35059 37355 42827 17002 70220 17567 03634 9729 0322 8736 7715 281 31
Đồng Tháp	21/09/2026	966088 58303 87503 04566 68924 08345 01182 76355 92320 60333 85210 83171 0086 6185 4869 2151 484 81
Cà Mau	21/09/2026	405981 84624 81938 17552 41247 47814 21054 95023 78916 68510 96056 99679 3477 5312 2712 1296 982 74
Tiền Giang	20/09/2026	248087 92644 77874 24740 55580 94261 89843 63708 07347 05758 50324 28032 6839 8384 2964 7285 062 08
Kiên Giang	20/09/2026	237748 06508 05467 84807 89887 62150 12550 13247 45529 25272 31249 43906 9084 8497 3148 4768 349 35
Đà Lạt	20/09/2026	722323 15078 78387 60526 88359 86585 14450 26016 97344 23929 64560 52801 5823 5486 7885 9074 917 44
TP.HCM	19/09/2026	451013 01845 72337 14942 54389 33233 34368 54314 26839 24968 80881 57714 5391 5275 9644 2508 789 18
Long An	19/09/2026	961743 07155 20389 04032 76191 82356 69366 10718 07465 91438 77433 87707 1710 0659 0281 6942 874 22
Bình Phước	19/09/2026	854864 69211 42156 75288 63888 87336 89285 93874 08134 72044 80383 59769 8756 7021 7181 4670 370 68
Hậu Giang	19/09/2026	043160 85336 54987 81668 90291 98265 95438 03163 53365 97262 29580 30654 6591 5003 0429 0544 379 50
Vĩnh Long	18/09/2026	905889 47478 66131 41161 52686 88580 93332 95057 16369 30922 55391 22091 0954 5353 5416 3737 512 16
Bình Dương	18/09/2026	898508 27421 88793 66860 59014 92104 02926 23414 93905 34399 07798 47759 9131 2133 7696 6019 354 92
Trà Vinh	18/09/2026	207644 52848 30563 42301 79312 63034 07527 65368 00071 94934 44330 93689 8201 5861 3746 8332 279 15
Tây Ninh	17/09/2026	024183 44034 00525 27096 27631 17867 37385 39119 69531 27568 47061 71517 1268 5601 2296 2799 670 77
An Giang	17/09/2026	958515 19780 01332 94243 76424 36216 86692 59334 33570 68967 66777 06713 7521 5015 6791 5584 764 58
Bình Thuận	17/09/2026	452018 88872 52841 61343 86509 97611 43728 46157 24832 84083 70591 84046 1276 2104 8269 7690 698 99
Đồng Nai	16/09/2026	360877 30067 60261 50774 80660 20149 88390 92242 28191 90366 61532 31726 9333 5015 8016 7186 058 58
Cần Thơ	16/09/2026	171205 22415 16348 41230 53436 96289 65502 08396 16144 92871 80754 98346 9660 1157 3698 0290 392 90
Sóc Trăng	16/09/2026	296399 81546 87658 46965 04971 49871 15133 12101 26191 60655 07415 92147 8521 0080 4857 3170 666 18
Bến Tre	15/09/2026	873287 73405 34176 79974 17129 70965 87230 09565 85290 78818 70943 70506 7467 8564 9430 6200 045 07
Vũng Tàu	15/09/2026	426800 29125 70642 23230 37366 11319 75441 75688 26836 99073 57292 79341 8257 0845 0766 1217 270 19
Bạc Liêu	15/09/2026	118673 98197 62910 95547 00689 64567 38021 98927 05962 02344 68237 43933 0128 3869 6373 6316 984 54
TP.HCM	14/09/2026	293747 55187 95090 82169 79836 94133 60558 37075 97558 67967 21670 81000 3699 0496 4315 5000 816 16
Đồng Tháp	14/09/2026	803330 76547 04058 22039 04681 31414 62053 28120 05729 53640 58294 71121 5480 9323 9446 7540 980 85
Cà Mau	14/09/2026	544700 96334 23835 88280 20825 70581 85961 68722 63503 54530 68758 04217 5665 4993 5037 4355 592 04
Tiền Giang	13/09/2026	515408 36400 38889 44679 12634 82327 58217 39699 30885 75665 86159 09358 5687 3199 2411 6886 758 43
Kiên Giang	13/09/2026	452026 92605 31016 39629 62927 63286 50249 15808 94712 76658 01334 27668 1702 0707 6961 5108 179 42
Đà Lạt	13/09/2026	724379 55959 36339 29645 94465 85695 20017 89835 45431 48805 36643 41558 2025 9184 3999 3259 652 26
TP.HCM	12/09/2026	269569 79995 50557 95790 38976 63432 32190 91686 75436 59386 89236 73393 9425 6584 3651 1496 722 17
Long An	12/09/2026	155337 86640 80295 12160 28151 36913 08800 43356 33646 95188 89870 01626 5461 0811 9151 2765 464 14
Bình Phước	12/09/2026	871126 94263 77749 78635 59028 51399 54433 78400 02724 58164 68756 01140 7901 4637 5974 7072 378 17
Hậu Giang	12/09/2026	447951 35210 96901 98644 05441 32294 87255 41313 25193 09579 44819 86336 5200 8816 8912 7590 208 42
Vĩnh Long	11/09/2026	821221 34088 21625 26420 61206 82224 79347 89304 19247 09681 48666 33785 3293 2812 2107 0659 858 04
Bình Dương	11/09/2026	937036 57748 28108 97814 69304 60786 47492 22581 60806 15919 04646 50560 0446 5348 9647 1570 972 28
Trà Vinh	11/09/2026	467062 86984 06447 44438 13339 74920 91989 37628 09871 77110 96334 92931 1041 3129 5913 1713 508 87
Tây Ninh	10/09/2026	910457 47152 31387 54162 40090 65684 50000 58458 15677 00776 61931 79519 1281 3154 9559 1776 282 57
An Giang	10/09/2026	370490 52742 76646 94540 99013 06694 33903 96455 29210 29596 84613 23289 9155 5629 3700 3824 979 66
Bình Thuận	10/09/2026	253778 35952 44600 44862 25304 06998 95180 66929 15800 30023 99571 50260 7166 7391 1274 8380 703 22
Đồng Nai	09/09/2026	348446 04790 11951 76281 56049 24645 90690 99761 26288 05763 98993 56874 5710 1255 4586 7350 876 59
Cần Thơ	09/09/2026	637211 74235 02695 34554 85892 86504 87119 75856 11028 57999 74623 75263 9121 0265 4174 0809 936 31
Sóc Trăng	09/09/2026	267025 42386 00567 11364 69081 70110 38328 20584 84704 85735 47380 45529 4285 5980 6937 3377 074 35
Bến Tre	08/09/2026	536908 63918 76468 14682 93084 34255 74075 59920 74582 53675 75338 32300 8059 3527 8204 1929 023 53
Vũng Tàu	08/09/2026	438599 83227 00908 45182 73616 33715 07262 62737 23865 81501 51973 04009 4738 7694 8928 7829 006 78
Bạc Liêu	08/09/2026	236335 01825 63268 11579 98593 36031 24201 41522 48773 36614 59729 94380 7748 7921 0311 4475 236 04
TP.HCM	07/09/2026	583758 39707 16986 78585 38583 21977 09908 58781 89096 81809 59064 75731 2030 2187 5865 5399 028 05
Đồng Tháp	07/09/2026	644918 44310 94383 20791 66892 49191 97236 13021 21860 99173 43262 01109 2386 2162 7721 9063 652 06
Cà Mau	07/09/2026	556626 43895 31586 67065 72140 74745 01565 86224 96838 09027 71414 08343 7624 4804 0057 3314 109 82
Tiền Giang	06/09/2026	306313 18995 99510 74185 37751 44115 34091 07229 74897 18132 78810 07027 9242 1673 4478 1437 156 69
Kiên Giang	06/09/2026	800313 79594 62056 63078 01165 87490 58829 67117 06235 29352 68984 68126 3737 3781 3129 0220 307 29
Đà Lạt	06/09/2026	805519 99641 53041 03203 19659 94635 47189 33287 19972 31219 07748 91317 4257 8100 7089 5475 568 73
TP.HCM	05/09/2026	821010 12285 70631 41903 64342 64193 55405 60804 84245 60467 43317 59922 7668 8270 0159 6020 345 56
Long An	05/09/2026	409433 48614 62575 31794 27497 91826 34813 38350 55371 93323 55432 92875 6440 4604 8248 0631 776 61
Bình Phước	05/09/2026	889342 05363 02879 88228 88625 09669 54982 09997 68898 54900 50969 80479 3360 5098 8761 6934 544 79
Hậu Giang	05/09/2026	613350 39948 43481 45973 25599 12743 81425 96080 08616 16469 63595 97291 5218 6741 1794 7303 495 10
Vĩnh Long	04/09/2026	187137 92581 14737 63388 52049 34820 39404 34963 28095 58317 80224 32075 8150 5028 4996 5958 217 16
Bình Dương	04/09/2026	926706 88311 07597 07690 78024 36686 04061 97926 25697 66405 48609 77817 3178 8765 3509 3872 963 32
Trà Vinh	04/09/2026	899819 16758 66957 52189 56373 54512 57927 58602 46956 47627 77379 93143 3067 0940 4346 1371 103 90
Tây Ninh	03/09/2026	979586 92123 34230 92135 02627 11298 51383 74684 06012 71631 58619 82133 7990 2329 7580 5557 367 78
An Giang	03/09/2026	764014 64866 99396 49602 67188 08638 37628 95083 47040 27080 59399 76078 5740 5585 8147 0019 804 58
Bình Thuận	03/09/2026	564616 03257 37068 90791 62118 54712 84023 93343 04182 28070 85093 27642 2620 6001 5702 3687 703 54
Đồng Nai	02/09/2026	797487 03537 96842 87634 70627 85436 36689 26691 14657 42398 03360 65925 3873 3301 3008 2372 604 79
Cần Thơ	02/09/2026	886199 08070 80959 17401 62273 41190 42603 19699 40154 88461 77452 40861 3145 4768 7669 8212 772 78
Sóc Trăng	02/09/2026	773312 17326 65264 72690 65198 67091 44801 17396 69935 44202 44353 78328 2382 0576 1339 2898 823 03
Bến Tre	01/09/2026	571670 89329 78988 18975 43209 04053 79650 32725 51517 49345 34231 81571 0793 4676 5239 2861 713 15
Vũng Tàu	01/09/2026	776477 42247 03480 17568 10225 93055 28210 52857 12705 95763 81211 32817 0462 2851 4483 2809 258 23
Bạc Liêu	01/09/2026	720792 83892 55943 54447 07294 06742 49522 58549 64579 96485 66051 79908 2482 2187 6300 1139 883 05
TP.HCM	31/08/2026	061923 13891 09263 97915 04692 99561 65057 22017 51078 64544 16942 65052 2342 4687 2189 8217 515 98
Đồng Tháp	31/08/2026	728409 08519 99985 67116 91664 81617 06900 04114 95223 48831 72956 22747 8148 9972 0566 8459 751 11
Cà Mau	31/08/2026	264432 15863 79042 46687 12541 95280 77906 24414 99378 57105 71759 39239 5563 2187 7933 7778 335 63
Tiền Giang	30/08/2026	460531 36168 92071 20941 67479 11560 25125 95116 62496 55339 31987 48338 5938 4110 9596 2318 919 14
Kiên Giang	30/08/2026	840070 49023 06549 64002 45140 47478 09539 83187 05348 57550 03136 72136 1457 8865 7872 3575 706 45
Đà Lạt	30/08/2026	145077 46169 49838 86955 94807 73852 79302 09563 55154 03074 05834 94182 0459 1330 6970 4066 211 97
TP.HCM	29/08/2026	690406 02962 25390 48158 19662 53458 39121 77842 24668 49325 84071 67013 7381 3321 9601 3114 311 00
Long An	29/08/2026	245760 05159 79719 66266 84826 13883 91581 75863 10296 21249 12869 96319 8530 4852 3045 7174 254 99
Bình Phước	29/08/2026	606990 03678 32326 50545 53489 58123 71720 43072 94598 49562 35060 86267 9850 1526 2735 8287 629 50
Hậu Giang	29/08/2026	321816 21773 90657 86896 53519 90170 63742 78281 82987 08574 94418 66138 0270 9052 6515 3095 508 73
Vĩnh Long	28/08/2026	682016 54974 78453 65302 07794 33380 55025 94144 24410 93874 59357 91322 4001 1711 5726 5985 979 09
Bình Dương	28/08/2026	285158 37614 69784 50685 00471 81224 28316 33904 53057 50242 51136 52419 0818 3637 6452 6936 802 20
Trà Vinh	28/08/2026	786009 88979 18535 08460 59835 77276 59245 10406 77198 45976 52138 41164 3754 7509 8394 7823 230 88
Tây Ninh	27/08/2026	434619 64391 88550 71303 09315 33614 90618 58586 14417 91956 52403 99450 6902 6538 7759 7210 712 73
An Giang	27/08/2026	139092 59225 69651 94626 27872 71802 65643 29382 18851 01853 93493 81189 0676 8398 6371 8156 798 52
Bình Thuận	27/08/2026	166448 64406 86986 33595 35472 75389 19799 47134 24168 99762 86352 20522 1032 5397 4580 1265 285 75
Đồng Nai	26/08/2026	145917 98208 69706 87474 73361 26795 99413 48293 68845 38218 27365 07052 4068 6898 6712 1527 147 70
Cần Thơ	26/08/2026	640492 78665 18507 89911 87671 51728 90088 35214 09952 47931 89269 62130 3925 3437 9919 5691 981 77
Sóc Trăng	26/08/2026	211555 77387 21621 01323 84725 21691 81752 82852 54707 37416 14513 88282 0071 3071 2066 8707 593 91
Bến Tre	25/08/2026	118211 13350 69395 13886 59678 24995 34224 98404 49208 53676 97061 58618 1929 9454 6283 4506 683 57
Vũng Tàu	25/08/2026	063119 80104 05122 51667 96699 45918 04571 48213 78659 52970 31096 01712 6428 4543 1884 8044 706 38
Bạc Liêu	25/08/2026	234370 86412 07038 50760 77822 63283 40370 13074 91836 92723 90960 78650 6662 1966 0483 7600 010 40
TP.HCM	24/08/2026	225824 31802 11768 05044 15394 50037 95546 54508 32296 65559 32402 25177 5659 3391 5522 8621 792 40
Đồng Tháp	24/08/2026	078861 98391 75511 55599 80878 80202 21374 37189 22909 94833 95060 83015 2401 6704 3711 0641 047 40
Cà Mau	24/08/2026	177307 68516 67367 12122 04187 78848 29078 58714 93168 87902 88081 86409 1171 5495 1265 0442 823 03
Tiền Giang	23/08/2026	891851 64462 72948 58335 45532 34080 58062 51271 14091 44259 89695 96677 8918 9664 5218 2126 457 50
Kiên Giang	23/08/2026	579621 85295 46864 19064 38495 64228 12276 50570 30759 02604 07242 94178 0520 4327 2067 0204 005 23
Đà Lạt	23/08/2026	215534 72950 99061 81866 31590 97257 63347 68546 25601 68571 96918 76722 0449 0372 3286 5229 743 32
TP.HCM	22/08/2026	296215 68795 97663 31471 78879 87601 40205 16122 83417 47612 49104 81537 4478 5681 4809 3063 414 22
Long An	22/08/2026	474160 95423 27858 34249 93143 35597 42245 33081 96929 52774 83126 96834 6947 8431 9970 3368 884 55
Bình Phước	22/08/2026	094423 83847 89704 93750 33159 25917 48661 18888 59389 06303 63080 00713 7955 9212 6731 1953 242 11
Hậu Giang	22/08/2026	617750 63916 75645 27551 97079 31872 28812 57726 64245 32760 25729 24903 6107 8599 8848 6015 337 10
Vĩnh Long	21/08/2026	837758 87966 86788 41723 02482 63637 03445 26161 31537 56802 66076 01459 5108 8640 0825 2694 290 18
Bình Dương	21/08/2026	466130 98175 90141 42082 04767 27168 52052 97476 86942 52070 34793 04159 4980 3135 3243 6006 382 29
Trà Vinh	21/08/2026	366282 67604 94660 49252 63964 42239 24701 32997 41646 56478 92603 68546 1759 0897 5547 1916 158 57
Tây Ninh	20/08/2026	065440 05459 90792 29346 62545 51578 07777 82182 07327 51873 43883 48345 2262 5239 0785 8743 348 19
An Giang	20/08/2026	510332 89516 44895 52640 02439 90111 32541 20491 71417 32217 57371 15096 1635 9670 9023 3404 516 54
Bình Thuận	20/08/2026	258376 00960 32168 34590 09750 96490 92957 79041 43722 39375 18660 33777 5322 4628 1091 5982 682 02
Đồng Nai	19/08/2026	289591 45797 45217 61807 46430 78884 63216 89359 53739 51226 57413 64874 3409 2507 1048 5142 141 01
Cần Thơ	19/08/2026	367818 57124 33267 75658 01412 92847 52877 58898 98519 72608 80084 14316 8723 2469 5137 5879 917 13
Sóc Trăng	19/08/2026	233283 42359 34167 86578 61748 28815 78230 00247 77217 17629 62167 73291 3163 8979 3280 8643 096 88
Bến Tre	18/08/2026	599422 69907 54884 95781 64263 81987 46740 93834 44276 52868 67967 83534 3020 1752 4825 6810 298 82
Vũng Tàu	18/08/2026	406016 20156 39228 91505 41300 77011 89457 32735 22842 22181 69018 21287 7488 5400 7085 9523 734 13
Bạc Liêu	18/08/2026	373492 18657 71695 05525 36560 12756 12698 44175 34215 76510 30534 26997 0012 6177 3241 4688 549 02
TP.HCM	17/08/2026	706890 31185 35259 08334 61189 59466 81376 52545 86745 79654 25295 52783 6429 2328 0872 2935 109 54
Đồng Tháp	17/08/2026	553908 97285 24031 18524 27163 35818 67504 55923 72122 67680 81286 96970 2850 8035 1607 4752 217 71
Cà Mau	17/08/2026	228853 22244 25262 17700 12254 84277 78255 70742 33979 75769 60727 76263 7824 7946 0004 0346 406 25
Tiền Giang	16/08/2026	220804 72705 11768 12437 63197 62035 14409 63256 14327 52089 52841 36605 9896 0311 6600 5653 766 86
Kiên Giang	16/08/2026	216578 93153 93156 25365 36699 56396 80352 74435 74605 73323 06015 86957 0303 9935 7381 7689 370 13
Đà Lạt	16/08/2026	893189 94817 47895 39380 41408 95293 41102 87049 13708 33461 25427 36775 2836 4581 3109 8187 581 90
TP.HCM	15/08/2026	040589 55672 75464 55129 28930 44351 18954 65673 56983 75239 67899 82116 7001 8531 0599 7531 729 31
Long An	15/08/2026	817082 40971 09097 85445 55867 24440 66571 63738 66064 27759 87483 80452 4431 5084 0106 5375 466 19
Bình Phước	15/08/2026	801700 70482 55129 34707 70185 33419 49228 55106 73838 25699 91442 24911 8586 7385 0492 5540 457 18
Hậu Giang	15/08/2026	748485 24551 73063 61517 48713 09843 17347 36124 64058 64468 33064 34525 0796 2150 7768 1115 583 57
Vĩnh Long	14/08/2026	597367 62825 63655 99650 00703 30335 71841 49464 38323 27146 43150 65450 7785 7993 1706 4834 562 72
Bình Dương	14/08/2026	696215 06360 39274 28581 22304 17777 84639 25642 53531 60983 93002 23758 3261 8562 1302 5174 785 33
Trà Vinh	14/08/2026	521473 96396 25383 99947 90074 87376 79689 00317 37708 95083 90477 58479 8693 6611 0852 9952 085 97
Tây Ninh	13/08/2026	809580 87012 35785 44832 38137 63990 35275 80760 53198 47157 28816 88853 1132 4025 2535 8508 683 86
An Giang	13/08/2026	639943 63117 46931 61981 08356 53335 88495 68922 30513 89029 89913 98354 1288 9141 2550 1530 849 01
Bình Thuận	13/08/2026	402933 06629 29701 58144 81857 66530 50019 17087 43355 88065 68896 40349 5176 6227 0486 1754 258 68
Đồng Nai	12/08/2026	476040 74193 02122 00217 14444 94230 16974 91493 14755 84306 91616 01140 3105 6837 5796 7928 748 02
Cần Thơ	12/08/2026	333284 82206 96913 47006 09400 07153 46706 36905 66241 02211 20983 72973 8322 9002 5887 9527 087 04
Sóc Trăng	12/08/2026	401259 79079 23971 65138 91058 51327 35504 26361 08775 61554 78572 51134 7408 5624 4680 7125 206 63
Bến Tre	11/08/2026	635297 95838 41253 62500 47500 04876 38599 54794 67894 10217 05551 40239 7987 8534 0203 1076 824 58
Vũng Tàu	11/08/2026	935422 95060 16111 65095 24766 18980 92406 33813 72842 34032 87234 02690 4467 4403 5619 1742 232 58
Bạc Liêu	11/08/2026	282289 92719 40913 42765 03587 20146 21739 31981 15452 16704 71337 98581 1292 6709 4694 7138 407 86
TP.HCM	10/08/2026	339922 90396 94141 30858 88662 41319 82729 60484 18624 52719 98253 56695 9263 8796 1879 5045 191 63
Đồng Tháp	10/08/2026	896271 12799 82454 91028 25865 16360 50284 02971 24038 75328 54821 98786 8752 7491 7975 7495 980 21
Cà Mau	10/08/2026	400786 74061 82983 92985 31906 38258 52460 46576 63651 83735 12096 73544 3256 9956 4690 8358 182 32
Tiền Giang	09/08/2026	318617 24336 77223 81191 51826 02496 18901 77067 27034 42926 65477 70393 8511 8059 3333 2991 925 04
Kiên Giang	09/08/2026	937461 28651 07688 63417 33646 04920 43708 22344 86773 44006 98978 19489 7525 2735 9448 2519 264 31
Đà Lạt	09/08/2026	094782 40606 89126 04346 02060 14442 45150 34716 70741 64876 67669 60813 8130 6638 1130 1569 461 79
TP.HCM	08/08/2026	209039 69322 70255 99575 66968 91170 45347 39604 40770 39529 86507 86511 8451 7527 8137 9324 238 10
Long An	08/08/2026	430795 18194 28014 93717 43989 42454 87184 34354 61535 00018 09505 11693 5340 8752 2779 4284 345 50
Bình Phước	08/08/2026	828343 14797 08484 95163 33457 88791 30100 11156 72439 33852 18759 30833 6170 8191 5447 9058 004 88
Hậu Giang	08/08/2026	009611 96474 20196 32701 83338 12090 89195 05568 18552 14595 73516 40225 8814 1861 6141 4198 763 59
Vĩnh Long	07/08/2026	779240 75919 51513 50573 57533 36124 21122 56557 92246 20661 13926 11983 5145 6471 0682 4163 678 99
Bình Dương	07/08/2026	276274 31434 78395 95817 18212 54501 75976 96747 77870 94468 14833 30627 3096 1869 3072 4427 185 39
Trà Vinh	07/08/2026	414382 27855 42597 15076 27544 47217 48284 61752 34454 25223 10686 50585 5101 9917 6978 4961 439 21
Tây Ninh	06/08/2026	241657 13937 53320 93185 50828 63730 02118 72294 18811 28427 07490 81655 3617 5244 0590 8796 805 41
An Giang	06/08/2026	245836 41355 19633 60534 72093 22978 59534 98348 63070 00411 82357 01893 0159 8519 3148 8395 303 54
Bình Thuận	06/08/2026	457729 60611 44654 59035 27848 45303 77388 68377 85679 11376 09087 06864 0608 3467 8264 9634 883 83
Đồng Nai	05/08/2026	658328 17889 98714 53324 84484 97989 45311 60984 35209 53528 87063 93210 2515 1188 9161 9160 636 04
Cần Thơ	05/08/2026	685468 42613 74252 11030 05943 50245 89665 20642 90596 33643 34304 40686 1929 2044 9472 7827 147 62
Sóc Trăng	05/08/2026	577545 43930 87051 91772 02045 97838 11665 59324 71008 78014 07373 46479 5400 7408 2897 8938 109 72
Bến Tre	04/08/2026	814620 31572 19628 56092 90732 06969 37901 06030 71372 59439 51685 36742 3669 3262 7738 0329 133 99
Vũng Tàu	04/08/2026	384788 47637 40931 38547 29305 37278 43377 74725 17356 39256 15366 61873 0559 5442 2737 7140 398 33
Bạc Liêu	04/08/2026	268193 65493 21094 55754 31286 19390 53547 63756 31291 76230 49241 34248 3167 6665 4804 2083 479 27
TP.HCM	03/08/2026	574027 72911 87891 40469 00395 82375 76222 10009 13950 31331 72521 21526 1608 6957 3371 4547 545 08
Đồng Tháp	03/08/2026	409865 28607 77306 52305 66557 98361 33249 35157 94637 23162 21222 01822 2458 3031 3246 5685 511 61
Cà Mau	03/08/2026	427004 41903 70292 10846 92607 82848 78795 88739 47510 49881 82061 87749 5772 2751 7781 8581 679 44
Tiền Giang	02/08/2026	361087 38909 12949 92454 69730 35401 69174 93563 77823 13434 04678 01079 2136 8462 8164 7054 110 87
Kiên Giang	02/08/2026	853883 78298 12858 26207 56932 63420 53780 47116 99389 59737 93426 09131 3714 2155 2745 1882 713 12
Đà Lạt	02/08/2026	681870 34341 02044 98543 46168 41428 82088 30424 74337 51294 62436 81852 3422 4836 0854 5156 658 98
TP.HCM	01/08/2026	752169 91532 66056 98472 70683 59703 31947 32108 27369 74498 04766 03729 3328 3042 5431 5269 586 67
Long An	01/08/2026	177081 87073 48058 41984 82746 53401 30522 75875 24916 87379 11118 77150 0294 1525 7773 6284 610 41
Bình Phước	01/08/2026	876950 37429 74120 42312 03255 44882 57218 23791 45244 49771 25452 94091 8959 2725 8220 7537 812 41
Hậu Giang	01/08/2026	678539 31052 95005 07717 44222 82849 74386 42534 14523 29822 00741 98966 0343 8823 6241 7079 173 57
Vĩnh Long	31/07/2026	382125 14751 51167 52174 29309 83777 04435 80243 17839 74234 54953 76818 8347 9127 5804 6614 049 98
Bình Dương	31/07/2026	218535 99614 97016 67360 35293 48282 87622 86209 59279 31279 57780 67804 3638 4733 8230 3128 084 31
Trà Vinh	31/07/2026	384994 76567 22486 07328 54352 70574 13833 88447 35231 37451 15146 02759 2372 0240 9254 2764 452 44
Tây Ninh	30/07/2026	050416 52985 46639 36065 85133 45354 34616 89405 52143 18406 08383 19690 0668 5912 4490 8220 890 70
An Giang	30/07/2026	965247 60858 60699 56908 41827 38183 72799 11266 79609 77258 75911 73585 3730 7475 0084 4484 912 12
Bình Thuận	30/07/2026	206168 63426 90541 59216 39365 05175 04374 92635 16290 39742 11742 89798 0344 4064 5838 7525 952 09
Đồng Nai	29/07/2026	225620 39518 83399 53950 15576 80339 34403 21537 67338 64780 26335 58834 8176 6748 9016 4961 147 76
Cần Thơ	29/07/2026	897277 16388 60353 64728 78711 15472 50438 85298 72945 70496 83568 98616 4556 9175 1289 8144 954 17
Sóc Trăng	29/07/2026	707565 51956 11167 54864 25065 42861 27558 43416 27788 75133 28637 44602 9077 4725 2702 8237 567 38
Bến Tre	28/07/2026	196971 49249 14867 20351 35485 45301 59598 53853 07678 93300 45993 38813 3009 7967 4775 8623 459 32
Vũng Tàu	28/07/2026	818231 46772 43267 24731 90830 39690 41410 32678 08044 84122 02301 90035 1612 9862 2713 3450 994 11
Bạc Liêu	28/07/2026	681100 62640 79809 43553 55863 24056 52548 01752 14345 36564 12145 90424 6415 3353 7810 7417 297 39
TP.HCM	27/07/2026	578824 83905 27362 45415 72394 01186 79553 77566 10389 50668 09692 66423 9985 0535 5214 4780 644 80
Đồng Tháp	27/07/2026	770181 00917 93478 11345 42750 69999 50385 77699 27526 31988 79163 86394 8664 4371 3269 3131 270 63
Cà Mau	27/07/2026	363250 84516 22259 01245 39288 33690 44805 11091 88008 98068 60908 71853 9369 5091 1031 5047 267 01
Tiền Giang	26/07/2026	760654 20389 04682 91811 17565 83961 05127 47715 84239 91995 92493 29482 8892 6064 9394 5047 122 35
Kiên Giang	26/07/2026	016554 14356 29251 90441 78234 95469 44025 72146 36356 00486 58703 19370 4419 3526 0385 8806 619 99
Đà Lạt	26/07/2026	038254 56378 92805 19171 48529 70946 97800 02361 70134 87181 26748 90211 1330 4330 6865 2565 453 10
TP.HCM	25/07/2026	304240 45291 10883 47947 26122 70572 55859 00822 20501 77680 81233 80148 1716 1786 6853 1870 037 01
Long An	25/07/2026	340389 05035 58574 37533 38904 42413 51435 14558 65538 30384 32651 97517 1829 1335 7370 7815 935 83
Bình Phước	25/07/2026	758950 55559 44841 35798 69341 38063 85935 19448 71397 52020 41986 63645 0343 4798 1063 6649 052 69
Hậu Giang	25/07/2026	631195 93965 02027 16375 34534 82715 60440 13072 08220 52678 85466 34174 4145 5337 5741 6091 799 78
Vĩnh Long	24/07/2026	356052 78121 57225 50164 33762 40942 54996 55386 98684 50879 72950 34067 5687 0138 0656 9456 143 64
Bình Dương	24/07/2026	544210 82485 96428 40454 17103 09498 91237 92968 98607 16162 24318 31700 1707 1424 5248 6008 416 75
Trà Vinh	24/07/2026	007403 47521 68357 36126 93355 40536 72228 77843 83725 58826 36277 49365 1427 5397 6514 4063 197 51
Tây Ninh	23/07/2026	656393 29500 77786 28240 17405 26992 57172 58983 55973 98388 76392 95566 4120 4462 8615 7088 196 40
An Giang	23/07/2026	273992 94435 55408 52336 87873 75915 69015 88846 06156 69343 53629 85373 8892 1100 2474 2387 519 52
Bình Thuận	23/07/2026	218850 62968 86092 32437 53653 21731 67943 46348 92029 53981 02690 01735 7513 0853 6209 5837 105 84
Đồng Nai	22/07/2026	621355 13833 89118 42524 51702 16060 96537 80559 19830 21333 38472 99914 6870 7275 8826 8686 384 44
Cần Thơ	22/07/2026	403470 70035 22244 41920 56871 80468 34261 10164 33123 71657 25620 73661 0322 0973 6014 7674 223 78
Sóc Trăng	22/07/2026	535092 14821 96998 65052 28738 37857 04485 85740 46114 67328 04288 31212 0896 2956 1984 5406 007 09
Bến Tre	21/07/2026	514919 54070 74949 38881 15033 07262 48512 41504 05459 87907 90901 67418 0033 5412 8408 1532 597 25
Vũng Tàu	21/07/2026	673257 85784 56658 42532 53682 23592 70377 84650 25234 76943 81688 22099 7726 2797 2510 8651 282 36
Bạc Liêu	21/07/2026	379882 02600 16963 28842 27991 19670 34160 05872 04696 24319 99833 47146 6060 0373 9776 1807 742 44
TP.HCM	20/07/2026	008556 87113 39304 07273 11601 76012 20936 10883 66037 69616 46064 12103 8972 4728 5592 3783 409 28
Đồng Tháp	20/07/2026	957501 34324 45929 40432 26247 47209 49258 41358 51158 73571 26498 49738 5650 2440 9107 0253 524 20
Cà Mau	20/07/2026	536266 16132 57795 48106 28796 58415 36328 74579 64592 08040 94692 47531 8387 3742 4703 9238 785 91
Tiền Giang	19/07/2026	486026 82978 01288 17485 36461 89657 50741 73041 97878 00520 04712 74001 0773 5916 3248 7386 623 27
Kiên Giang	19/07/2026	310228 30176 12877 64457 30871 06037 55223 65942 08198 48790 57310 58265 7408 3004 2143 2681 871 80
Đà Lạt	19/07/2026	087842 47409 18224 32207 76311 14894 01559 37943 80545 21584 66381 32803 3182 4644 6422 6783 910 36
TP.HCM	18/07/2026	246882 59174 78893 29076 17449 11970 72294 56366 79173 70041 09912 71613 5799 7042 7726 0734 342 78
Long An	18/07/2026	203770 25194 54718 89947 80160 43411 41630 42690 44224 86054 04561 59396 8646 6565 0088 3591 801 18
Bình Phước	18/07/2026	962811 72964 88305 14168 90798 27861 90239 15018 83523 65881 24583 09028 4588 9799 3160 5556 391 11
Hậu Giang	18/07/2026	019407 27793 02702 45143 18076 82669 32028 56757 84499 55661 96593 63791 3647 8901 1489 1619 998 27
Vĩnh Long	17/07/2026	899058 18214 89620 60451 52254 98024 65171 48803 78929 49571 23305 71811 5767 7881 0607 8701 789 33
Bình Dương	17/07/2026	265991 31741 41594 21083 73708 83541 95443 93377 19565 47395 32623 97685 2727 4108 3730 3980 064 50
Trà Vinh	17/07/2026	561324 55489 77085 58056 04366 04497 95725 31392 22442 48417 12573 25920 4738 3579 2899 9275 231 23
Tây Ninh	16/07/2026	085113 01378 09628 17532 66620 90022 64615 28858 13087 08404 45891 42815 2023 6219 7281 9418 767 70
An Giang	16/07/2026	830834 54496 03014 55582 44217 45145 75742 89903 92299 23230 61786 17762 0874 8156 4612 0981 809 54
Bình Thuận	16/07/2026	623836 57643 20472 76773 89731 91772 82436 97975 10625 86633 67015 29031 4618 6227 6641 7200 445 23
Đồng Nai	15/07/2026	008402 71200 80517 34150 64151 55010 13786 58671 06858 56387 95574 21141 0406 7234 0593 5348 116 10
Cần Thơ	15/07/2026	867898 46874 60099 95096 56949 10149 59317 08464 63611 20248 73940 74747 5790 4867 3131 0548 411 05
Sóc Trăng	15/07/2026	282199 36842 76508 95472 31367 44078 02042 01604 52838 95288 23604 55299 6550 6588 3670 9501 569 96
Bến Tre	14/07/2026	681119 56088 08596 41478 00179 09898 90423 61459 72185 25388 88650 15423 0921 2427 4215 9827 457 42
Vũng Tàu	14/07/2026	955319 17861 42300 65642 57053 53264 53387 39050 78457 88403 16471 62844 4164 4897 7947 5148 345 92
Bạc Liêu	14/07/2026	258393 92144 36777 40502 91329 95949 51833 00248 20070 20902 63798 39001 1876 5435 5195 2475 404 69
TP.HCM	13/07/2026	256022 76748 64476 04976 02576 90043 55833 67619 06219 77996 86006 13613 7645 3498 1040 1591 053 16
Đồng Tháp	13/07/2026	439097 10472 47597 13182 13302 93536 92699 52930 41349 60250 89452 33980 8451 5538 3369 6966 032 04
Cà Mau	13/07/2026	303404 90382 93956 15667 06530 27175 90925 66397 63591 36897 04437 39300 8357 9069 9501 4841 874 70
Tiền Giang	12/07/2026	898582 11865 22368 62096 77715 91401 31112 32870 82026 82316 80048 37225 6522 3841 4469 9759 252 07
Kiên Giang	12/07/2026	913490 05117 43178 28938 00448 08116 22527 47561 86576 22291 23493 46016 7846 8335 7796 0344 455 99
Đà Lạt	12/07/2026	579838 48236 61616 70723 06136 03080 83183 25421 53881 20906 63817 19432 7721 4134 8317 1305 579 65
TP.HCM	11/07/2026	333464 00845 22438 41053 01925 15735 28046 79507 44304 12410 71600 24702 7040 7132 4249 3653 479 02
Long An	11/07/2026	016397 76759 91688 49183 16713 72738 30463 88865 28434 84625 59731 07730 9678 1974 4792 5347 565 28
Bình Phước	11/07/2026	087990 95576 72550 48388 92355 65233 32508 59867 90453 79152 90939 90937 0877 7390 5458 4974 715 96
Hậu Giang	11/07/2026	883669 31090 31751 81554 12774 89656 91993 15853 84749 44227 79836 46711 1022 6295 1631 4903 821 45
Vĩnh Long	10/07/2026	073565 91553 08409 05155 43291 28647 07105 08241 32095 97330 54446 92219 8141 1990 3659 5057 095 95
Bình Dương	10/07/2026	663795 26361 05911 14613 73129 21603 02774 76628 00405 02429 75680 03202 6650 0442 0711 6702 638 63
Trà Vinh	10/07/2026	325002 44392 78976 27148 60269 59086 07496 83400 23409 59974 72448 78305 6982 8085 7124 5351 900 51
Tây Ninh	09/07/2026	306050 50830 91654 93553 11469 95262 57634 26427 83873 17826 08351 08686 6573 8610 0724 7486 754 27
An Giang	09/07/2026	622936 15860 28251 38344 93766 47742 54035 25932 83121 03597 29534 04726 3388 5921 8134 7068 907 06
Bình Thuận	09/07/2026	763530 32946 23369 47742 34981 79965 57609 91542 52404 96779 74905 62259 5324 1786 6328 5235 362 36
Đồng Nai	08/07/2026	061248 40651 53913 92425 62190 48289 10993 90963 35884 10410 97093 32999 3402 5837 9611 4288 811 48
Cần Thơ	08/07/2026	214463 37814 38961 81701 89733 15745 90096 17661 80852 53410 72295 94913 2659 4415 2927 9735 179 68
Sóc Trăng	08/07/2026	708297 93546 22596 75292 42218 34254 65279 58378 53818 37095 64652 65183 3903 6193 8563 1264 916 48
Bến Tre	07/07/2026	877777 59078 00083 74773 87723 31096 91065 09745 19481 41878 39406 99838 7271 1669 4092 7478 639 05
Vũng Tàu	07/07/2026	168986 36041 91832 61154 98970 26316 60123 48489 87993 24265 85456 76916 1128 5118 1091 1722 077 18
Bạc Liêu	07/07/2026	709492 93146 42513 80482 76768 83703 71807 16405 33975 64086 18977 35001 7253 4780 4696 6440 776 15
TP.HCM	06/07/2026	831548 85817 30356 34240 48028 16001 51614 49335 99318 92519 01921 78130 5742 1256 5846 1210 015 33
Đồng Tháp	06/07/2026	497852 01422 22357 27799 45705 29880 05713 76396 64836 08839 72144 47838 1562 4859 4196 7958 642 27
Cà Mau	06/07/2026	738323 10652 49279 99982 58550 48183 50157 50142 79923 83730 56983 75590 1204 2607 7332 0081 081 46
Tiền Giang	05/07/2026	673100 49113 23461 93019 04348 30147 43945 03143 31796 21903 89699 03141 6100 6666 3761 9585 281 49
Kiên Giang	05/07/2026	503680 94837 71687 71478 06496 36043 58168 40471 93675 18236 86942 93662 9993 7265 8985 0528 126 57
Đà Lạt	05/07/2026	522666 14259 47535 48961 86106 33371 69533 96954 44838 75132 23250 05174 5024 4574 1502 5906 070 52
TP.HCM	04/07/2026	185542 10124 31285 38864 73603 10817 03857 08323 03793 77113 00517 86435 7853 7252 8102 2155 817 98
Long An	04/07/2026	261058 82131 57243 29939 17831 40755 05637 63375 64344 45269 36041 85702 8021 2529 2008 5858 417 64
Bình Phước	04/07/2026	660209 37773 46111 67239 87340 46035 26275 28567 53013 10055 05364 85451 9570 2860 6359 5270 881 73
Hậu Giang	04/07/2026	726757 75015 01641 57006 75592 67077 08305 01282 02331 82221 63446 38026 1502 6236 4951 8001 716 04
Vĩnh Long	03/07/2026	911134 63799 48636 11842 69013 70577 77718 80978 41363 62320 33733 08396 9796 0630 8755 0978 458 57
Bình Dương	03/07/2026	058812 27734 01572 40766 77321 39141 11785 32903 54847 44667 69151 86352 6415 4873 0369 8722 755 22
Trà Vinh	03/07/2026	260617 20462 58933 71811 90414 99347 99228 13625 40658 67445 72656 81231 2395 4130 8076 0204 867 01
Tây Ninh	02/07/2026	784407 94274 39642 83254 61483 95251 33060 78868 51284 99241 58413 82807 9357 5085 8898 1672 681 93
An Giang	02/07/2026	533429 29827 52359 35026 59088 51098 02518 72764 45199 58343 90827 36837 2587 8802 9514 8273 708 97
Bình Thuận	02/07/2026	272594 16407 39102 69922 17991 58655 19997 02437 93563 74443 72127 38658 5079 6359 8973 7487 800 65
Đồng Nai	01/07/2026	986546 36325 40194 73329 87510 70929 80044 23699 02035 75696 85688 32183 9243 8877 8045 1138 934 61
Cần Thơ	01/07/2026	210203 04258 78383 47326 60434 03373 53884 70056 07429 11028 89572 23095 4078 7091 1328 7354 145 40
Sóc Trăng	01/07/2026	778087 35965 20001 63858 37673 59570 57697 98437 85030 96609 76370 19765 4244 9019 0561 3546 696 97
Bến Tre	30/06/2026	773221 61687 10253 69534 55091 33014 79902 70241 43992 44354 70195 71278 7587 1802 8288 9256 250 66
Vũng Tàu	30/06/2026	483966 43509 66225 81086 88585 92746 82345 61879 60277 13155 04134 89785 7616 4237 4121 5720 148 22
Bạc Liêu	30/06/2026	177259 22052 70886 67874 72853 17340 20644 47350 98418 75750 56600 29388 2555 1850 6908 8201 071 27
TP.HCM	29/06/2026	531137 32859 10630 46332 28464 77126 66496 46579 52250 25881 56352 16765 6152 4062 5746 6591 008 45
Đồng Tháp	29/06/2026	974245 91459 26041 37820 47193 51988 29868 72006 45580 63229 36275 04545 8620 5468 4810 5872 530 71
Cà Mau	29/06/2026	469164 37419 38031 52757 69507 66187 80187 05992 28843 08274 50523 22504 1648 9780 1729 7606 468 58
Tiền Giang	28/06/2026	792930 24611 92175 66365 04759 31478 75998 14097 74008 51660 59317 96044 3296 5072 0822 2910 683 31
Kiên Giang	28/06/2026	359852 59033 41824 53661 36531 06398 67096 06237 29095 91267 05199 70590 5170 7643 0528 4896 850 50
Đà Lạt	28/06/2026	635343 49624 88765 30446 52689 58770 14459 90452 29223 05074 60465 00945 9976 7944 0026 1675 017 16
TP.HCM	27/06/2026	608165 06554 82478 20190 21088 85176 59787 21162 40767 08337 01564 97524 6693 3249 1646 9653 347 28
Long An	27/06/2026	218731 49583 78517 67326 92338 53319 63802 23436 89687 27718 87582 80612 9878 2122 4408 0424 849 17
Bình Phước	27/06/2026	311230 37597 37665 34668 57100 17119 42386 31483 89543 37569 30040 51208 0518 4266 9522 7084 488 70
Hậu Giang	27/06/2026	778736 15307 85191 33280 86269 07193 95068 67969 80665 50953 88658 84763 6058 3559 5701 9266 988 76
Vĩnh Long	26/06/2026	442348 83033 62867 60035 89232 06313 73026 43412 85574 54700 93359 15958 2052 9942 5591 4090 027 19
Bình Dương	26/06/2026	465521 80766 67837 47022 71638 92273 61159 44746 97259 82532 13403 05721 8554 9702 4896 4059 176 39
Trà Vinh	26/06/2026	445418 06144 46128 21289 90362 30095 90716 14751 58839 41691 16807 84890 5460 5375 7102 7743 423 09
Tây Ninh	25/06/2026	585684 83626 22457 91075 45425 10009 82721 25655 45735 55474 44236 69254 3448 4540 8921 0528 330 21
An Giang	25/06/2026	991913 60009 24645 91250 35891 48395 00895 60515 41190 85095 13477 26276 9291 5440 2072 6089 486 49
Bình Thuận	25/06/2026	727953 65681 55411 55687 37801 90833 30287 99020 02125 34153 24647 65381 5924 2385 3384 6414 324 66
Đồng Nai	24/06/2026	162714 67937 93287 61806 85880 82370 33300 94093 80059 94271 75481 85112 2617 2184 5510 6000 383 61
Cần Thơ	24/06/2026	783007 62596 64365 32613 90185 91239 03431 85348 05875 32953 50880 67662 8203 6222 6083 5766 818 57
Sóc Trăng	24/06/2026	314160 67544 34307 43600 61539 08520 60060 59992 15974 26604 82452 06773 4537 4123 6180 7593 599 20
Bến Tre	23/06/2026	034315 48700 17901 79709 90908 83469 93278 99472 64783 63235 48336 07470 6908 4296 3570 7282 293 25
Vũng Tàu	23/06/2026	018547 06727 63732 17873 07329 25817 57082 03735 94085 73748 72713 24877 8667 4508 1892 3996 105 71
Bạc Liêu	23/06/2026	886431 44333 06433 55734 65938 41202 94785 21716 53007 35666 45701 08683 0687 1400 0914 7455 547 77
TP.HCM	22/06/2026	712554 46958 37364 76666 73039 30230 15722 06908 45568 23293 72547 20203 7811 1980 4915 6194 047 68
Đồng Tháp	22/06/2026	524922 26079 49087 84109 04775 31102 10435 02201 15725 03080 85311 59844 4687 1959 8692 7515 906 73
Cà Mau	22/06/2026	542373 68762 58707 93675 73701 48364 75488 81932 73098 18792 23266 30142 5988 6278 9258 5683 930 60
Tiền Giang	21/06/2026	075760 57745 54710 91691 53911 27065 72022 52687 19885 86888 46539 47321 3613 9028 3295 7773 917 74
Kiên Giang	21/06/2026	097913 51277 18572 12387 36590 36835 80488 79028 77747 08197 72696 83949 8849 1431 5864 3045 302 10
Đà Lạt	21/06/2026	911911 29616 87012 61552 22567 40305 02284 01365 82339 67559 86235 17875 9357 5596 0459 8035 324 10
TP.HCM	20/06/2026	569733 30806 77488 12702 94108 93986 24942 54496 38550 24312 74323 57347 3581 9271 5551 0516 406 33
Long An	20/06/2026	686902 86578 52289 47497 84842 08607 84482 72775 16247 02485 17329 44270 2833 8778 8457 9929 523 73
Bình Phước	20/06/2026	660290 88820 06338 93703 99949 48621 34127 48615 32757 93077 87699 09587 0752 1811 4140 4480 116 60
Hậu Giang	20/06/2026	168784 37005 82632 52175 05968 86117 24456 57532 61601 35672 50868 91344 8236 6876 7732 0845 771 26
Vĩnh Long	19/06/2026	446202 61443 91517 99661 54732 17117 40210 89498 63392 20660 27445 92226 6173 8073 5736 0831 347 46
Bình Dương	19/06/2026	945100 06652 86077 14515 57637 53053 02790 49927 80339 90896 06818 67721 5051 5478 2485 9472 111 62
Trà Vinh	19/06/2026	998520 29248 17863 00523 52715 48840 32751 25181 23621 77205 67500 29464 4623 1322 6756 2503 697 81
Tây Ninh	18/06/2026	795785 73666 64646 14647 70903 32989 98517 02087 66752 58185 60326 29601 7631 5638 3794 0369 387 37
An Giang	18/06/2026	534092 05789 32493 03206 41498 96376 98771 02732 11112 48237 53369 51327 2452 7261 6754 1885 506 77
Bình Thuận	18/06/2026	818562 61403 51643 19819 62840 23564 92637 51050 51722 77156 78416 87293 7939 1695 7670 2971 375 98
Đồng Nai	17/06/2026	884900 90950 98326 56818 17770 97848 19970 75409 47228 72765 03381 66287 0165 0759 9753 4064 499 24
Cần Thơ	17/06/2026	756536 15658 87364 99464 31786 85340 49029 33570 30495 10862 07133 30077 0246 5762 0363 2817 144 60
Sóc Trăng	17/06/2026	748498 23422 10063 01957 77329 03769 30462 27195 04482 70295 72767 62337 8517 7232 9450 0035 526 33
Bến Tre	16/06/2026	691272 77764 69953 76731 06402 57379 56071 48285 65235 58298 89623 14579 1903 0431 1781 1492 002 83
Vũng Tàu	16/06/2026	024892 28642 25975 68212 88682 92495 97437 89117 98734 97530 26311 20095 4733 9780 8761 0803 304 19
Bạc Liêu	16/06/2026	683986 88886 75247 52178 74727 18866 21425 65465 31980 74380 35819 28007 7845 7074 0151 3653 928 50
TP.HCM	15/06/2026	285122 66382 97467 82950 51229 64240 41551 82062 39797 21357 10268 98540 5640 2105 0007 1797 616 34
Đồng Tháp	15/06/2026	105318 20779 20258 91022 30086 52472 67062 77819 45346 26013 92814 83903 8203 9076 2509 5374 581 98
Cà Mau	15/06/2026	290235 12135 04754 85840 88415 29635 83951 54050 65203 48453 81830 14942 7113 0415 7610 9905 169 47
Tiền Giang	14/06/2026	897210 96129 37831 07992 37149 87653 44220 90160 84635 22327 70456 65184 6470 6346 8410 5966 915 62
Kiên Giang	14/06/2026	832106 15096 36666 05886 29815 93556 08258 11159 53475 02013 89027 39250 9335 1541 3827 3404 143 23
Đà Lạt	14/06/2026	621690 13749 46326 02583 42313 88290 07836 40002 95619 00794 40451 35916 1128 1914 4646 5741 164 72
TP.HCM	13/06/2026	122619 64203 87108 94357 13753 36839 53264 34587 55978 41396 20441 62133 3617 5693 1685 8492 065 74
Long An	13/06/2026	185837 52463 36381 49615 09014 71749 20968 33931 23039 86707 93882 65736 9174 5020 9566 2168 161 31
Bình Phước	13/06/2026	906914 21526 12591 09192 71061 03468 48168 83383 21462 53075 47584 23622 1275 1329 9573 9041 836 72
Hậu Giang	13/06/2026	715384 92622 39712 79541 35356 99954 05826 00795 57565 48362 41802 19136 3554 5513 3290 5383 997 93
Vĩnh Long	12/06/2026	805696 73137 26043 26473 31469 08086 80938 84480 28936 24407 42009 81130 8986 3118 9966 1361 739 90
Bình Dương	12/06/2026	363193 20808 45514 27376 12955 13830 48450 09246 25478 11036 39149 20981 4759 6122 0460 4684 997 83
Trà Vinh	12/06/2026	235477 07257 36921 31222 03498 83686 91404 20617 41654 13128 23825 36442 2299 5123 2491 8817 726 46
Tây Ninh	11/06/2026	423392 17088 81579 38438 83307 67895 52799 90411 50864 34071 55367 47304 6109 2740 6119 0825 616 27
An Giang	11/06/2026	491238 74585 83006 60502 07369 86883 64914 41482 81454 75763 95551 50093 4696 7923 0490 8308 286 43
Bình Thuận	11/06/2026	146616 79507 04433 24601 95219 15023 75305 77760 92082 30529 05851 14558 7382 4022 5581 3883 600 88
Đồng Nai	10/06/2026	910292 07798 31521 40693 98509 36794 11163 44054 25445 36655 86549 99012 3716 6331 0365 7746 613 33
Cần Thơ	10/06/2026	364957 97931 65744 21680 24154 06579 42032 65758 65412 87004 09877 27530 4582 3235 5311 5008 700 63
Sóc Trăng	10/06/2026	712879 99075 97278 61433 23332 97113 75514 87455 46247 87109 39100 47226 9143 4905 8177 6940 990 54
Bến Tre	09/06/2026	910547 68673 84571 33559 63705 74353 74103 01264 75689 90379 51500 65334 9172 7622 2093 9358 717 47
Vũng Tàu	09/06/2026	556701 00864 14299 65776 80784 30851 38717 16301 72518 22320 59046 93564 5703 6827 7757 4478 476 08
Bạc Liêu	09/06/2026	378018 62201 12905 61203 85959 97492 66063 45674 74030 72882 91746 32901 8847 6676 3098 0870 767 06
TP.HCM	08/06/2026	925261 92526 77229 93185 70100 43034 48552 73454 20955 26652 81877 76095 2460 3795 5987 8271 439 75
Đồng Tháp	08/06/2026	400162 55722 25502 55193 19092 50441 88853 91836 21303 89969 97609 00778 5163 1537 1653 6829 954 93
Cà Mau	08/06/2026	841122 61479 43729 36481 03452 65589 85631 33309 98684 70188 00236 16185 2858 6535 7902 6632 729 75
Tiền Giang	07/06/2026	129302 77615 93762 62494 17948 64066 07603 51825 00576 78777 29371 27422 2844 2767 3926 1209 390 89
Kiên Giang	07/06/2026	150925 75933 11228 50166 05013 35674 02823 09424 37326 29749 95247 92661 2708 2969 5586 7877 975 86
Đà Lạt	07/06/2026	753429 23556 68605 72512 47262 88214 46693 34873 24739 54013 93083 17544 6089 4250 6134 5821 944 68
TP.HCM	06/06/2026	094580 17895 53172 13453 59076 43852 80668 99881 93594 95461 98404 69356 5326 6437 6986 3001 702 95
Long An	06/06/2026	105199 99220 07348 51859 14601 01202 23806 96666 06937 69994 96014 55021 4707 9974 9582 8608 114 06
Bình Phước	06/06/2026	765936 13600 45298 31629 91255 42594 16946 61322 17398 65177 92750 09994 3350 0516 5498 7862 453 97
Hậu Giang	06/06/2026	559076 93898 47794 12154 20438 35785 48314 10608 90557 54427 10504 25838 1016 6206 4735 6893 132 42
Vĩnh Long	05/06/2026	591978 73464 93850 26659 46310 26194 55029 99548 05196 16311 58269 96560 6809 4348 2195 9893 047 64
Bình Dương	05/06/2026	103208 48800 90419 25659 70654 10957 79050 03923 17894 84223 34241 95991 5287 7761 6471 4785 877 52
Trà Vinh	05/06/2026	396747 98313 14791 02847 97244 36259 49721 94428 03133 07310 71483 59118 5356 2050 3023 9103 669 72
Tây Ninh	04/06/2026	936713 41445 11730 25913 34260 09753 68674 35177 85355 52012 31717 61471 1108 1078 1865 6509 041 01
An Giang	04/06/2026	827417 39822 61739 49972 18558 95269 25412 61370 83758 57095 66199 04737 4602 6880 5902 6720 564 52
Bình Thuận	04/06/2026	088367 98734 64555 63823 81822 10067 56150 61143 67505 36026 94391 93331 0233 1991 2118 1816 905 03
Đồng Nai	03/06/2026	644186 65371 87795 05225 66061 23634 90421 31971 71186 40430 19303 75637 8312 6251 2908 5544 753 40
Cần Thơ	03/06/2026	783481 28610 10938 15152 94736 23534 39426 60870 19855 46418 60162 42476 1048 5125 3297 1039 254 48
Sóc Trăng	03/06/2026	686457 97885 74702 50762 91154 64781 82461 53567 58401 32825 21625 57445 5208 0407 6913 3382 375 57
Bến Tre	02/06/2026	292066 60935 37050 32864 44831 95919 44482 97050 61474 61729 93594 02299 7894 4222 7264 1913 803 99
Vũng Tàu	02/06/2026	306135 40860 71058 35501 96607 02158 72246 44396 80076 23896 14614 65784 8575 1607 7173 4803 698 04
Bạc Liêu	02/06/2026	281116 42404 79999 11495 15621 04180 44549 31174 14511 51420 15718 00604 4161 5462 1194 8882 030 22
TP.HCM	01/06/2026	725887 23234 27569 00003 66394 56864 65810 70373 90351 83333 13752 71353 2799 0244 9957 1606 372 08
Đồng Tháp	01/06/2026	732919 27980 44167 45918 13591 59305 33019 93101 24034 51330 07240 33834 7315 2628 0430 4785 244 48
Cà Mau	01/06/2026	748958 29629 96520 38142 21684 69276 84297 08070 80061 18344 28396 34749 1140 2074 7661 6225 309 39
Tiền Giang	31/05/2026	197341 58985 72050 43652 64214 68581 92294 62223 72696 56352 42296 42475 0869 0862 4625 4626 552 92
Kiên Giang	31/05/2026	870587 65759 08181 17803 22584 99868 18592 97590 24005 99848 97799 71826 8270 0717 3182 1169 411 14
Đà Lạt	31/05/2026	080550 47204 49107 80444 70417 02585 16910 43100 11052 51763 13097 25474 6220 3563 1157 7412 869 11
TP.HCM	30/05/2026	805808 96879 53344 68270 46101 40480 76299 48432 07033 83564 71301 74717 9525 9062 7997 3321 257 93
Long An	30/05/2026	981576 82250 63833 50587 35072 90019 48890 78557 46949 00891 16517 49159 7680 4840 6045 6733 671 19
Bình Phước	30/05/2026	006507 99062 72630 83541 88346 52490 60208 09303 23893 15203 52459 22132 5996 8866 4704 1933 470 00
Hậu Giang	30/05/2026	323587 37568 60395 86074 89926 87908 03737 67226 87863 58254 74463 68485 2332 2361 1186 2047 844 51
Vĩnh Long	29/05/2026	132549 64042 48404 55928 88453 68782 71184 18974 80273 68353 87109 03224 6684 9216 7033 8456 351 54
Bình Dương	29/05/2026	181994 19320 14860 90944 30219 18098 24138 83634 06949 68329 54312 37775 1085 6366 0245 8638 135 49
Trà Vinh	29/05/2026	512263 93120 11426 98912 29062 70603 33723 11443 65482 68273 26634 54438 6874 6637 5106 0040 745 81
Tây Ninh	28/05/2026	490332 55851 10248 65215 57607 58483 33836 77399 12078 16273 64606 02528 4055 9161 8209 5690 102 74
An Giang	28/05/2026	377962 58783 97431 24198 30102 26611 70238 22071 71935 84472 74682 00597 7319 9247 2584 8849 054 86
Bình Thuận	28/05/2026	180200 33365 36340 19584 42289 66670 53045 94538 37971 17497 31357 12829 9645 0130 6457 3378 751 46
Đồng Nai	27/05/2026	738909 36587 95371 08584 73825 36468 42690 59907 79002 16104 04139 49404 0383 3673 7600 2736 658 94
Cần Thơ	27/05/2026	007940 83469 74920 21924 93976 58901 11094 26498 16955 22470 11765 62138 8108 9344 5063 2844 305 94
Sóc Trăng	27/05/2026	094538 61339 89893 28384 89362 06330 75309 81483 79407 82549 82898 64403 9662 1768 1403 1401 253 64
Bến Tre	26/05/2026	710634 18188 38588 35245 03197 04534 05872 38980 27832 02782 06433 46415 3254 2750 5258 8959 058 07
Vũng Tàu	26/05/2026	353356 89430 24009 37316 77704 38984 35973 10166 71525 99326 91954 19361 8443 1525 2496 7177 511 43
Bạc Liêu	26/05/2026	085856 78390 04034 31582 55935 31176 33347 07539 39038 30627 57604 69743 8275 1750 1935 7742 726 14
TP.HCM	25/05/2026	846479 72403 29991 63850 67358 90914 30485 95966 60585 43339 93884 83229 7043 6553 5793 7873 760 76
Đồng Tháp	25/05/2026	017030 00108 59082 27561 98473 67908 77366 73044 56668 14192 97359 14532 8818 7135 7193 7359 257 72
Cà Mau	25/05/2026	861359 16114 80800 69092 35474 97202 27629 82872 05287 34347 68215 07627 5189 6337 8217 3390 832 91
Tiền Giang	24/05/2026	347955 39354 03568 39735 17026 70785 28511 79826 99360 71671 14799 09801 1890 8106 0925 7041 451 97
Kiên Giang	24/05/2026	957166 35710 24074 60285 23738 99364 36047 53112 14907 05959 28437 40193 1675 0784 6501 3975 160 77
Đà Lạt	24/05/2026	949438 00668 27526 41076 90398 50884 14775 36112 88872 07840 96647 54123 4421 8947 5670 0676 941 43
TP.HCM	23/05/2026	121910 04001 90535 12498 31302 84104 78730 86570 54022 58464 82240 29470 7561 4656 3766 2655 209 38
Long An	23/05/2026	174071 39464 77747 31633 28471 45344 68325 88492 85382 20022 50168 69668 7136 0875 6951 1723 529 14
Bình Phước	23/05/2026	020319 28477 19190 06415 26044 47928 85595 59185 68722 92090 18849 43157 5226 4563 9908 8253 510 66
Hậu Giang	23/05/2026	789337 96388 52798 99433 30300 83285 58784 19474 64737 06078 75204 52298 5816 7677 3304 2542 377 39
Vĩnh Long	22/05/2026	576339 49411 46677 60654 13695 84090 20388 83683 00829 53829 09318 38576 2960 4654 3823 8109 829 85
Bình Dương	22/05/2026	796933 26048 56068 66839 62410 60838 78780 04017 77155 14477 40840 00486 6570 9331 3157 0039 925 91
Trà Vinh	22/05/2026	750681 91893 30549 76888 83202 39821 28404 98116 00415 48434 25621 84416 9419 0481 8586 6496 072 58
Tây Ninh	21/05/2026	048987 11823 57564 24388 78089 19450 93061 46365 68630 14346 81131 16370 4855 2522 0219 4788 098 97
An Giang	21/05/2026	898665 78187 06864 51525 93923 12340 64200 30442 72565 69719 08577 38256 1826 8586 7679 0605 123 66
Bình Thuận	21/05/2026	332731 40736 85259 57796 08506 44180 93847 82170 91057 72487 85316 83424 8121 5028 6337 4889 074 66
Đồng Nai	20/05/2026	325697 48593 63015 59345 21416 98885 31136 35112 96813 32093 79940 19384 8909 1317 8027 7392 223 61
Cần Thơ	20/05/2026	010158 80536 46029 94196 30101 42745 88840 14567 14353 98459 72906 26148 3165 1981 5829 0262 393 94
Sóc Trăng	20/05/2026	284574 35709 75190 90457 75587 74846 79597 87258 46720 67400 30428 08501 3543 8219 5794 0163 010 98
Bến Tre	19/05/2026	985684 34209 63657 31587 62001 66447 88717 19969 35988 35431 96709 66991 0067 5244 2209 3723 457 90
Vũng Tàu	19/05/2026	382627 33216 44383 17699 93194 36893 54053 77220 35571 21344 37639 43605 9672 8571 6445 2061 719 23
Bạc Liêu	19/05/2026	269950 49182 60753 15389 33492 88572 67365 26204 30352 30663 67082 43539 2512 1719 9622 5544 821 53
TP.HCM	18/05/2026	590856 55065 20056 86971 35330 98291 51114 65521 24525 58221 64442 27024 6698 6837 7860 1857 142 80
Đồng Tháp	18/05/2026	043809 06150 49594 85449 41577 59961 80946 01809 57081 78358 31074 02532 5467 4714 4266 3586 096 48
Cà Mau	18/05/2026	331798 95265 93578 82889 62881 92468 90859 62144 77666 44589 74265 53391 0292 2508 6632 3616 314 17
Tiền Giang	17/05/2026	486686 87701 41572 96451 79851 83231 44525 09242 11953 27332 76340 47902 9411 4461 4898 6000 288 74
Kiên Giang	17/05/2026	996036 42716 11367 76412 05049 25409 60745 21782 91930 06613 13284 53011 0990 7085 2156 2510 664 49
Đà Lạt	17/05/2026	443862 72853 64900 90022 41451 31950 07376 83740 59419 40143 41524 48838 3623 8297 1486 0008 949 10
TP.HCM	16/05/2026	911805 07481 75541 22302 94319 31340 06531 29369 19229 29267 31681 70703 0346 1440 5694 1358 172 06
Long An	16/05/2026	009743 95968 54767 46115 95626 26834 16125 09152 73168 62388 33768 81151 3696 1235 9898 6712 864 90
Bình Phước	16/05/2026	822472 68365 80385 36505 09118 44078 22391 49354 57903 04201 83486 80152 4110 5138 8250 6552 163 83
Hậu Giang	16/05/2026	639537 46885 15086 46636 83526 02725 24114 27058 53087 23269 49456 15182 0410 5475 8332 5273 881 22
Vĩnh Long	15/05/2026	216215 75759 48400 85216 24672 81890 74589 19516 74905 79365 49958 32396 6558 8696 9071 9899 792 51
Bình Dương	15/05/2026	660519 55107 02531 38479 18924 67708 94928 41243 75585 05343 91528 40795 7433 1995 7830 5033 371 39
Trà Vinh	15/05/2026	314542 51221 98772 55894 63395 20490 77179 06596 97690 73992 39322 52889 7639 0425 9452 2233 256 49
Tây Ninh	14/05/2026	261628 80289 18150 08696 71643 30110 94740 27355 10709 64939 82489 15901 8196 7523 0914 5317 838 90
An Giang	14/05/2026	194241 80679 33513 91561 88175 95003 62502 27378 00545 11899 00306 17127 1552 6162 0765 1076 859 10
Bình Thuận	14/05/2026	859600 54119 70529 58083 08003 87201 68233 01262 40500 42881 63857 88450 3600 2938 9035 4450 755 61
Đồng Nai	13/05/2026	077915 00656 44747 40834 25332 51240 50385 20672 05034 85590 25704 72202 1691 2240 9632 2295 890 81
Cần Thơ	13/05/2026	718304 31597 34709 37583 10648 02197 84591 34572 57331 52534 82906 79613 2935 1445 5891 4941 620 35
Sóc Trăng	13/05/2026	632151 34820 01758 05568 13968 21926 90989 70998 85680 95753 65263 07873 5990 8351 7644 4273 862 79
Bến Tre	12/05/2026	408610 07865 50000 55702 88663 51707 73731 58388 83095 84501 13557 85419 7451 7725 4023 1109 423 22
Vũng Tàu	12/05/2026	355485 03134 52307 42445 15516 94336 70828 28483 31307 94232 99771 87162 7140 6503 2806 0539 314 12
Bạc Liêu	12/05/2026	366748 39494 53189 11297 64064 03655 42372 82216 93788 75020 35907 88950 0130 6131 4394 3766 588 07
TP.HCM	11/05/2026	115854 98301 97781 01387 58344 86873 73430 05706 07918 21430 76206 51322 2042 8633 0567 8337 727 80
Đồng Tháp	11/05/2026	586853 10834 13525 25196 27523 15077 05897 32136 04951 59816 93995 52592 5258 8086 5721 0071 101 08
Cà Mau	11/05/2026	431844 88194 73701 37217 83597 10909 82598 82591 29562 70203 26000 26899 3665 0375 0416 5406 938 23
Tiền Giang	10/05/2026	378913 78183 16528 12180 50033 80383 05788 35208 07766 76893 97180 77268 1906 3523 2502 5567 531 21
Kiên Giang	10/05/2026	134619 50423 65578 69698 39824 54614 52467 44112 92887 26068 46797 57940 6108 0364 6951 7812 768 82
Đà Lạt	10/05/2026	566502 42829 31516 49484 73147 64508 97086 35218 65389 18073 26990 11350 3400 1666 0533 2774 743 86
TP.HCM	09/05/2026	063178 27267 98159 06773 99588 12374 05949 47189 32784 27474 41031 22627 3271 0990 7134 8442 874 13
Long An	09/05/2026	411089 30410 23743 58036 43879 82793 12696 85608 97601 57086 04470 06683 8555 6583 7601 2313 264 64
Bình Phước	09/05/2026	370369 16210 89571 26989 18657 19275 31235 16557 56765 89126 17992 94666 0032 5532 8251 4100 769 15
Hậu Giang	09/05/2026	703896 76403 85887 74216 45289 43927 30194 45165 23281 89836 95829 36048 4683 8204 5133 9572 217 47
Vĩnh Long	08/05/2026	058821 69099 82722 10875 60374 38926 59015 04759 03747 28383 03391 35311 5833 7423 7689 3744 610 68
Bình Dương	08/05/2026	246252 91335 20586 88330 81405 23417 79235 98477 60127 82517 38787 10098 1761 1707 5072 8705 472 39
Trà Vinh	08/05/2026	195634 75226 54186 64922 39575 56105 14298 05505 13089 82107 68310 23086 9759 0638 7383 8932 639 61
Tây Ninh	07/05/2026	472012 16656 65082 91699 75957 49352 87085 26879 21028 12215 14299 75198 0213 5457 6938 2092 637 93
An Giang	07/05/2026	642819 28999 62595 07166 33739 36917 24203 51744 91893 07307 76524 00253 8858 5279 7627 8102 470 01
Bình Thuận	07/05/2026	961493 21183 52782 63627 01897 33178 83462 39637 09480 86260 34282 23959 7328 2948 0246 1879 144 13
Đồng Nai	06/05/2026	934311 14504 46544 84936 93311 65061 73837 87115 14013 48041 87357 04789 8824 6682 6073 8124 009 15
Cần Thơ	06/05/2026	292205 08619 41519 48290 80609 44901 06684 77749 31254 63143 86256 90104 3832 4203 3106 4935 418 94
Sóc Trăng	06/05/2026	127240 31786 49136 92265 70293 16545 77581 71806 82059 16964 85690 69692 5920 6113 5413 5490 437 78
Bến Tre	05/05/2026	133509 31921 29602 34282 01507 60032 59391 94763 87352 99352 19567 36538 0757 9967 6222 5220 927 95
Vũng Tàu	05/05/2026	742546 84324 69796 33901 21917 87600 75793 67133 26882 84978 83376 23130 8171 9965 3319 6837 412 32
Bạc Liêu	05/05/2026	066493 02034 56268 02558 45637 57396 88465 58246 13244 04254 73060 38620 4861 8567 8897 1178 735 77
TP.HCM	04/05/2026	975219 82161 37386 84046 25226 05730 61846 95984 98332 98740 84073 74599 5628 2060 1982 0041 598 41
Đồng Tháp	04/05/2026	024185 53825 34014 53819 86610 40452 94528 40714 64672 24213 24901 57820 7853 5590 2646 9824 123 04
Cà Mau	04/05/2026	207225 31724 45487 71373 87443 14894 10395 11594 94528 90952 51091 30111 9785 3253 3774 8477 160 16
Tiền Giang	03/05/2026	796442 87565 87425 21999 84605 66658 42064 63871 16873 88917 59386 72196 8145 1243 7332 4254 456 54
Kiên Giang	03/05/2026	070963 01799 39844 44903 22815 46944 69612 21823 91303 48432 75625 05564 7824 0008 8175 4458 317 82
Đà Lạt	03/05/2026	193203 71526 64637 58938 25566 08651 57738 45375 79879 60378 34678 65350 8403 1073 9156 7366 588 56
TP.HCM	02/05/2026	309079 33183 32154 84059 11994 90309 32266 49673 71468 49163 89227 16240 4750 5456 3625 5989 173 33
Long An	02/05/2026	874114 26130 39567 44078 70027 65944 92547 63460 49796 23526 05242 16089 3306 5053 4571 9294 927 08
Bình Phước	02/05/2026	023315 76815 30240 79879 92702 20523 67897 82301 08656 57185 92209 17526 3746 0542 9958 0803 905 15
Hậu Giang	02/05/2026	859805 37163 48110 42118 33911 78340 35351 43944 95674 32731 68314 30662 9529 3608 4165 4080 232 99
Vĩnh Long	01/05/2026	405967 33641 76121 32553 33534 28659 95047 34659 18091 34163 39642 49280 7884 6595 5413 1124 798 23
Bình Dương	01/05/2026	100230 74623 74276 09130 13467 15956 52825 89498 82925 55875 18832 65143 8311 8983 1706 9743 447 35
Trà Vinh	01/05/2026	841570 87427 21613 29868 70237 17002 35798 08118 22073 37816 88632 57757 4915 2399 6086 1754 818 70
Tây Ninh	30/04/2026	113144 11151 95022 53457 10465 26757 92836 46464 65010 92546 43322 91110 9650 8233 4464 3206 351 51
An Giang	30/04/2026	744577 95033 02034 48010 62218 67823 56471 62076 21524 96872 11513 66544 7984 0798 5723 5359 171 49
Bình Thuận	30/04/2026	561565 41402 21367 73418 74374 32583 23766 40289 18986 57966 94185 25919 9405 5882 1991 3997 628 10
Đồng Nai	29/04/2026	537291 35564 24477 93219 96817 00987 39319 77648 80988 81484 83891 38375 0826 9635 4958 5266 425 75
Cần Thơ	29/04/2026	211605 09083 54979 45608 68495 40648 81574 61891 29427 05855 35206 42002 5709 0556 7442 5759 099 86
Sóc Trăng	29/04/2026	381546 64163 29405 19736 69993 01787 65157 14231 19977 70846 30701 30124 7530 7126 0392 7156 781 53
Bến Tre	28/04/2026	339695 79981 08360 84361 71887 66227 96872 44426 47678 07933 73468 73907 4732 6467 5005 9810 682 85
Vũng Tàu	28/04/2026	718994 76443 05151 29181 25711 25501 88743 79773 98999 67768 68144 77928 9162 3696 4371 0199 860 92
Bạc Liêu	28/04/2026	885692 45081 69099 66580 87347 51950 49245 63469 03331 89321 50239 05512 4507 9668 5074 8928 556 95
TP.HCM	27/04/2026	688903 98027 50342 90296 67805 53813 90730 66480 16603 55852 66501 38544 4666 9558 5988 9171 284 69
Đồng Tháp	27/04/2026	809522 49884 42933 06127 15687 43782 67449 91667 78198 97930 71500 39190 3644 6989 2808 1903 760 91
Cà Mau	27/04/2026	867614 84531 06657 32161 80927 13683 27267 05869 76756 88845 08821 33486 7154 7308 9747 6604 519 79
Tiền Giang	26/04/2026	624586 12104 39183 12264 75394 46513 75659 22121 58654 52214 72716 67445 2193 3784 4396 9113 467 53
Kiên Giang	26/04/2026	360679 73462 69323 88802 19842 32298 97148 85112 26700 28907 88919 67300 5237 7346 3489 4885 199 90
Đà Lạt	26/04/2026	212947 00205 70052 67834 42550 93710 70087 88838 56244 57753 04087 76299 6728 5008 7887 4630 032 81
TP.HCM	25/04/2026	077465 96078 01164 61380 61983 97593 03627 24571 64204 06681 19002 11494 0906 7793 8407 7765 012 52
Long An	25/04/2026	638657 37008 63485 23154 77700 23946 00541 33585 60217 93830 75683 06036 3538 4896 0129 8091 520 53
Bình Phước	25/04/2026	548122 83121 47453 57201 57291 10948 25564 30252 14652 75699 56106 05420 1486 8626 1504 4153 341 12
Hậu Giang	25/04/2026	905491 25347 65776 59858 40346 44264 07023 18011 40086 18137 09157 47313 2430 4673 5304 3371 993 39
Vĩnh Long	24/04/2026	800023 94606 62889 33568 55148 78986 17174 66883 13349 36251 99565 48897 1898 3773 4468 1978 532 60
Bình Dương	24/04/2026	171287 26372 60390 85908 81491 45875 86320 73739 55889 48272 51128 85837 4848 0317 7798 6271 596 87
Trà Vinh	24/04/2026	966205 97557 91142 09282 95064 80272 66900 77376 36049 57644 82832 41636 1193 4898 1585 5083 232 05
Tây Ninh	23/04/2026	935353 11622 70605 95406 91158 88552 89140 15236 47880 98978 51507 65014 0805 9144 0402 1406 566 92
An Giang	23/04/2026	451670 64266 24467 21958 43276 91726 50019 41175 18728 53682 09965 71139 1911 6586 9668 7814 477 56
Bình Thuận	23/04/2026	154002 11452 45257 15378 34704 86510 49733 71460 66497 72513 56425 88616 1311 8230 9030 8743 078 31
Đồng Nai	22/04/2026	324163 27500 60119 25912 49031 00601 13683 68924 19490 72035 50903 42750 7138 0413 2568 7282 319 12
Cần Thơ	22/04/2026	657749 01514 53275 79867 75266 32985 90812 82176 29985 43047 36724 61571 0881 0031 2425 5942 175 50
Sóc Trăng	22/04/2026	953280 21495 05046 49036 49160 33761 22444 03266 65553 18398 00093 14299 2441 2676 2867 7353 642 00
Bến Tre	21/04/2026	650472 60594 03324 92392 03634 30508 97369 55020 16495 48545 49399 87027 9602 5770 3177 5750 639 53
Vũng Tàu	21/04/2026	548134 03546 10188 14192 71452 13956 77531 36307 75875 52997 30820 86560 1852 8110 9601 6870 902 17
Bạc Liêu	21/04/2026	196775 70440 50658 68525 15503 46274 88257 52771 53586 66624 12623 36536 0006 4769 0645 8240 251 26
TP.HCM	20/04/2026	327706 88290 15039 44955 36375 27846 12330 69104 08971 63241 88701 89037 3987 2864 9041 3530 280 12
Đồng Tháp	20/04/2026	789922 31239 63003 06168 05023 96690 25408 65465 79608 23595 00460 83899 9878 3984 0602 8027 182 18
Cà Mau	20/04/2026	050354 84704 78722 59799 88591 78548 97461 21978 26150 73982 61250 00280 4934 8930 7105 4205 219 53
Tiền Giang	19/04/2026	480644 81303 83257 73319 54837 04888 87316 75774 06253 08553 32491 65600 7262 3524 4809 0130 637 73
Kiên Giang	19/04/2026	220127 65347 36588 15001 84619 78479 59935 78817 78369 98695 57658 49712 3821 5011 0861 5855 984 22
Đà Lạt	19/04/2026	751465 11144 69037 55805 28953 43213 86251 80682 07980 39370 46881 59227 9669 6335 4971 5815 708 61
TP.HCM	18/04/2026	724556 84911 56465 76171 97094 71547 34467 89393 53714 88469 78345 75365 8156 5658 0084 1452 084 76
Long An	18/04/2026	479455 91258 88408 46521 14628 27902 84779 47267 21498 61030 19127 33296 2595 4873 8302 6012 618 77
Bình Phước	18/04/2026	424189 41528 98328 87652 95389 42914 08377 28087 00572 43855 76036 89407 5261 6590 0598 2610 651 68
Hậu Giang	18/04/2026	453092 15886 47477 55442 22912 14819 77793 45101 44424 03705 22874 61363 1579 6820 1740 4300 090 85
Vĩnh Long	17/04/2026	865023 88617 73106 01538 95878 89040 85015 13922 22402 68305 74606 47690 5108 1500 1363 0876 796 31
Bình Dương	17/04/2026	239260 87044 11982 70325 45281 66754 38220 16490 33570 62921 61797 51543 7964 9814 0735 5698 777 06
Trà Vinh	17/04/2026	771757 07462 17972 24933 15432 88729 46026 28870 11045 96291 09951 12580 7498 3774 9567 1669 018 41
Tây Ninh	16/04/2026	143754 86365 99825 13031 01689 59429 29698 28005 58949 07297 63735 53297 4947 7007 8466 3780 882 62
An Giang	16/04/2026	951018 32482 36951 50233 05819 26586 52301 36840 82592 09690 59402 97825 1555 9983 4485 7159 705 48
Bình Thuận	16/04/2026	672774 03687 56939 93660 96519 11151 81767 29152 46972 44659 32447 50028 7473 0505 5080 7042 109 36
Đồng Nai	15/04/2026	813676 50469 42443 82918 58618 07095 32979 21059 77274 96774 97255 66037 7307 6492 4564 1176 080 68
Cần Thơ	15/04/2026	854211 32126 75484 19580 18435 10315 65370 14475 89675 91407 12204 85353 2393 9679 1349 9018 094 31
Sóc Trăng	15/04/2026	457503 82548 53708 69265 33669 80650 78122 18251 76745 87027 39371 05112 9129 9763 1276 6075 977 36
Bến Tre	14/04/2026	966588 50733 25790 66305 65850 20511 69975 56808 15258 94879 85385 81455 8216 1155 4575 4068 094 10
Vũng Tàu	14/04/2026	433594 24529 58385 61574 64120 29930 60759 69430 05728 80690 42222 71762 8073 0654 2210 3858 324 31
Bạc Liêu	14/04/2026	499850 82272 79068 97499 30808 48893 83131 45675 82545 11814 72398 20865 0029 8160 1950 1938 937 45
TP.HCM	13/04/2026	310631 67501 16244 40232 94170 60684 75206 01217 87930 86044 99326 36303 4574 2648 1819 1455 454 48
Đồng Tháp	13/04/2026	699223 57620 57301 30122 18501 60780 39898 32050 51588 63416 81580 76784 9435 1180 5773 6743 186 14
Cà Mau	13/04/2026	133005 76997 16367 32318 39787 12651 64464 99711 94616 28220 92226 81430 9703 2444 9162 1487 314 50
Tiền Giang	12/04/2026	855718 31704 53400 92263 23547 35478 73010 09264 48554 08924 11464 35611 0077 8623 6946 2206 687 17
Kiên Giang	12/04/2026	487766 55795 69043 02532 50793 09575 55403 99744 16195 91407 60558 95269 1704 1575 6777 3518 668 46
Đà Lạt	12/04/2026	232073 14124 27357 74780 02212 06411 02552 26005 24556 34208 50308 89375 1154 3640 8178 3529 847 19
TP.HCM	11/04/2026	812128 03769 49980 88131 92072 85847 47603 70014 06504 85806 08922 42403 0244 2409 4086 0603 961 94
Long An	11/04/2026	169749 95720 62590 48129 09187 95907 06993 07698 06326 69201 73915 71161 4995 2667 0824 8151 348 34
Bình Phước	11/04/2026	307467 82303 53427 92988 23598 85563 66779 79122 90065 34446 34945 56430 4943 9193 7502 6112 520 31
Hậu Giang	11/04/2026	104888 95985 98847 23217 30055 99626 36758 94469 63000 17206 46346 94822 0354 5605 6638 8414 932 85
Vĩnh Long	10/04/2026	760016 38865 58034 51395 20138 30403 77546 98049 43262 35826 60658 02728 0900 2160 6750 6856 456 66
Bình Dương	10/04/2026	442450 41945 08655 34505 67258 28136 40690 72341 68432 78025 26204 91460 4379 2453 2458 2054 857 17
Trà Vinh	10/04/2026	046089 29275 07713 46909 58293 28880 03310 12256 52801 18187 72878 64323 9203 8367 4321 1235 210 72
Tây Ninh	09/04/2026	082665 94848 66580 38533 45065 46835 22488 43974 33448 24596 42600 81968 0167 1861 1325 1360 789 25
An Giang	09/04/2026	608342 54561 00436 10981 77913 63136 23370 08349 78955 41558 05723 75496 7747 9072 8612 5980 520 18
Bình Thuận	09/04/2026	252991 57010 46116 34910 97070 40873 49875 20581 52805 12292 82108 20891 1411 1938 0103 0134 320 85
Đồng Nai	08/04/2026	479004 68997 69464 83303 78179 87131 81108 08792 88766 76410 74289 53826 3167 8933 9652 8589 370 13
Cần Thơ	08/04/2026	203649 12347 67603 49345 27373 85644 68894 09144 44040 04670 70638 92636 3576 1636 4610 8977 922 91
Sóc Trăng	08/04/2026	578495 26228 37236 24103 58801 87263 79988 96881 10739 56991 15845 17178 0018 8394 2125 5076 318 21
Bến Tre	07/04/2026	583980 64753 06098 11450 43297 39514 14433 87935 36799 49237 11984 13379 2763 8047 8093 5389 133 18
Vũng Tàu	07/04/2026	349501 93740 18128 40555 84406 32279 29170 32062 27889 19745 72651 38389 5182 6747 4902 4119 041 25
Bạc Liêu	07/04/2026	261807 97603 40418 03611 44192 39532 62878 10802 24537 57311 45229 83482 1163 2935 9008 6577 172 84
TP.HCM	06/04/2026	099965 54463 32026 12368 05686 34908 00020 20847 51662 69966 72491 09031 6622 8287 5438 3394 131 97
Đồng Tháp	06/04/2026	800776 38611 76652 92717 17824 48500 03354 54607 73100 92285 32906 52108 9188 1279 5693 2401 958 46
Cà Mau	06/04/2026	829717 29815 66955 25169 02731 75884 69666 82373 66388 21456 76016 23557 9272 5831 6211 1141 332 45
Tiền Giang	05/04/2026	983920 06206 74641 72296 59876 12843 43256 16846 92007 16912 30352 86513 1653 1058 8074 2834 486 20
Kiên Giang	05/04/2026	627013 20483 14932 73715 47935 74537 84021 26577 13718 15070 91520 82963 5280 5839 1366 9022 064 15
Đà Lạt	05/04/2026	578584 06191 64056 73997 38103 51314 50044 95664 29578 29222 81931 88714 9406 7427 9946 5094 981 21
TP.HCM	04/04/2026	269291 47750 42151 91137 04261 61033 60231 23875 63987 81694 89314 09202 1216 8755 4925 4418 469 00
Long An	04/04/2026	004002 61067 71115 23731 37690 66258 02055 55755 31111 16342 16119 61869 0202 2135 1578 2642 412 27
Bình Phước	04/04/2026	577634 77823 79034 54586 58308 77568 52315 27217 42667 00489 83579 57593 6473 5955 8212 8060 685 59
Hậu Giang	04/04/2026	837532 47212 13948 79851 84257 79044 41844 10618 18023 38594 11376 60968 5900 0141 1680 9882 331 44
Vĩnh Long	03/04/2026	537949 63926 48391 38712 46099 84303 03395 07274 22649 86187 17730 51231 7864 7292 9883 9201 303 69
Bình Dương	03/04/2026	649057 43872 20443 15365 10270 47522 77972 47634 11813 33246 06832 68661 5048 7621 3871 2773 970 12
Trà Vinh	03/04/2026	854133 83034 69217 96426 63136 82882 47954 10562 17675 41538 69150 16133 6287 2056 6054 6199 060 83
Tây Ninh	02/04/2026	216674 28675 08423 77967 38143 70058 74606 37592 87269 16760 52438 09436 8347 5112 9051 5419 955 85
An Giang	02/04/2026	839409 93818 95225 14783 07970 28413 42860 58839 53616 75428 44602 02424 9645 8453 0001 1846 811 72
Bình Thuận	02/04/2026	404476 09231 68134 81929 75208 85586 72110 70239 09426 94119 05693 94791 1618 9390 0784 5515 623 97
Đồng Nai	01/04/2026	171742 13408 22934 25577 91309 53933 68670 38413 23075 49376 74506 02926 4872 2538 5750 0887 236 62
Cần Thơ	01/04/2026	379661 98731 33403 96823 82175 01659 48459 83707 06160 64127 64328 44401 1482 0047 7452 7566 555 15
Sóc Trăng	01/04/2026	248819 00946 73325 29449 58678 62786 21576 45235 68423 74436 59618 01674 9088 2987 0691 6840 162 03
Bến Tre	31/03/2026	940678 46428 53920 91016 08418 08270 44694 71392 97914 59385 04022 58812 4576 8942 6052 6008 015 20
Vũng Tàu	31/03/2026	813159 25697 65489 63545 09431 21074 39778 98132 65668 49327 30721 21112 5763 3412 5597 0347 524 67
Bạc Liêu	31/03/2026	412056 98041 84314 87283 61543 07130 72929 18325 99882 39527 68068 62056 9841 3031 5978 5315 050 97
TP.HCM	30/03/2026	090674 36207 11681 81621 25924 18340 21744 82159 44433 88325 75924 27104 1665 9168 7443 5705 678 77
Đồng Tháp	30/03/2026	790409 28801 30330 85456 77619 39247 38302 75338 01592 32901 74938 52791 3386 4412 7131 2602 848 82
Cà Mau	30/03/2026	072092 91529 72156 95572 43798 56922 60061 71211 88758 23697 17688 89310 9782 4147 4466 8353 767 85
Tiền Giang	29/03/2026	531689 83666 21991 31973 09940 67927 26947 63294 74209 41618 93994 14472 9081 1807 0601 6895 227 21
Kiên Giang	29/03/2026	085111 04778 61553 46130 33592 48943 81180 72190 30606 65874 35096 53475 7510 8944 5658 6256 828 91
Đà Lạt	29/03/2026	992334 03328 14436 93614 98111 49203 60677 37404 21428 29817 06409 81088 0104 2591 4139 2229 066 18
TP.HCM	28/03/2026	802879 54338 02798 31224 32016 66314 85208 34551 03793 92303 44172 42207 2858 9841 7911 7232 740 61
Long An	28/03/2026	988358 47282 90415 44048 03341 22760 97136 07580 85728 90388 94203 73240 9027 0018 5905 6740 009 93
Bình Phước	28/03/2026	988402 05092 99558 69650 67657 32406 48925 34495 82323 85203 11728 98309 2489 8234 4886 6886 919 70
Hậu Giang	28/03/2026	514346 12029 06069 10241 26616 30061 87439 55103 93812 44822 22484 36545 5639 8334 1160 8380 688 55
Vĩnh Long	27/03/2026	068687 27777 88745 24053 42937 83199 93454 95845 33636 10787 21131 78650 7395 4300 7403 4928 872 07
Bình Dương	27/03/2026	368571 09547 45341 56403 08175 34419 38336 99508 13994 23645 76878 05166 7294 6625 7015 3838 069 61
Trà Vinh	27/03/2026	718149 17552 34930 81159 00787 75828 99411 04631 41737 03207 29853 89651 3619 9675 5610 5945 267 27
Tây Ninh	26/03/2026	325649 51206 80309 91916 39915 42962 36545 73036 71137 39716 87460 19180 5796 6923 1125 9582 813 60
An Giang	26/03/2026	287738 78504 96714 11165 64970 35526 42717 79136 67840 06985 29175 15243 0032 8377 5407 1170 365 10
Bình Thuận	26/03/2026	236719 06225 59306 83825 86861 91599 79216 29561 80036 90164 33957 14539 1543 6823 9442 3140 690 59
Đồng Nai	25/03/2026	289206 19022 59470 71015 90862 18964 53584 16583 84298 02869 95579 43471 3445 3473 9130 8416 892 82
Cần Thơ	25/03/2026	789333 94304 92387 42575 14584 27030 78725 09909 48083 95899 17768 22258 9295 2975 0606 4631 515 38
Sóc Trăng	25/03/2026	919600 76840 48123 89832 18245 67489 33329 99460 04988 92550 32841 78029 4687 5091 0474 5476 396 71
Bến Tre	24/03/2026	830805 99664 30287 20881 40737 47462 85896 09457 66511 65664 63293 51471 0610 3770 7959 5898 205 91
Vũng Tàu	24/03/2026	833041 16555 16556 49521 90797 77200 96770 14916 57768 24567 44984 96247 8514 0821 1764 4768 839 58
Bạc Liêu	24/03/2026	961864 10985 38864 66541 24105 37950 15217 09477 01964 52048 53466 30384 6182 9610 9139 1075 201 21
TP.HCM	23/03/2026	354293 14280 98622 47229 98693 93351 26881 32335 76006 06949 85521 70663 7294 2086 9452 1405 928 04
Đồng Tháp	23/03/2026	900948 23149 68374 19039 88295 72539 90221 06453 48658 76181 12688 72511 2226 3489 5212 2039 436 95
Cà Mau	23/03/2026	470871 01147 87156 59748 15021 61828 10218 36774 37012 63009 79178 09269 6066 8918 8955 2412 382 26
Tiền Giang	22/03/2026	730985 38938 75105 31270 88910 87943 89094 30881 28638 21167 76001 16011 5051 7051 4296 5421 272 38
Kiên Giang	22/03/2026	370988 07753 38260 81094 27006 56048 74999 80753 55572 05618 62952 55086 6250 3609 1772 1794 899 03
Đà Lạt	22/03/2026	663779 14690 85128 75390 50065 42793 66067 23963 15318 39340 96707 33888 1036 7644 8419 7175 422 48
TP.HCM	21/03/2026	442630 74124 26741 82499 75361 12811 22202 83624 99769 41924 91769 98961 2836 6712 9303 1572 583 12
Long An	21/03/2026	080461 85853 61753 90809 12218 89748 87500 46407 63569 21998 29112 70089 3397 2559 5095 0674 652 61
Bình Phước	21/03/2026	992932 56353 48445 29395 17447 34882 95257 37539 99172 11476 18305 98566 4902 9261 8137 8446 724 99
Hậu Giang	21/03/2026	706384 15387 80942 13064 15046 37906 12394 73443 08285 55772 12676 90039 4397 1868 9214 3304 001 46
Vĩnh Long	20/03/2026	702348 87769 33066 65523 75401 99616 17188 68955 11779 32465 53215 58531 0526 1454 1053 8571 027 46
Bình Dương	20/03/2026	590662 05813 08953 34929 75727 63875 31172 91104 39363 24369 48458 86557 9906 2261 9921 3413 192 10
Trà Vinh	20/03/2026	780627 07085 55226 64135 18634 21590 93546 47415 40821 64339 85611 88576 1455 4120 7138 7277 771 32
Tây Ninh	19/03/2026	718807 90006 59635 50728 31419 61257 34570 45535 47488 47048 21746 63752 6363 2205 4472 3678 692 39
An Giang	19/03/2026	078349 60359 57317 81135 02241 84246 15338 68727 75770 64302 44021 43615 6831 8763 4267 5522 519 94
Bình Thuận	19/03/2026	745232 93802 79950 40756 70061 29832 55071 38395 12078 11466 00823 56708 6022 1786 6352 4632 136 77
Đồng Nai	18/03/2026	749600 14457 23117 32981 86322 24635 94660 86525 76430 86734 31356 33313 5763 2348 9555 9372 457 51
Cần Thơ	18/03/2026	218956 19582 92785 88407 46867 72389 90129 30671 41968 18710 69830 04822 1295 8627 6625 0784 126 31
Sóc Trăng	18/03/2026	499929 56143 03152 89221 86177 51587 30577 54034 27371 44474 68904 29747 6928 8119 8898 7833 995 55
Bến Tre	17/03/2026	980950 87273 73984 51095 58722 74585 44696 09469 08132 14443 88541 59019 9625 6575 7813 8030 677 10
Vũng Tàu	17/03/2026	182693 06296 25255 67934 80620 88888 74802 30340 58425 53079 59702 29539 7007 0917 8171 0577 336 24
Bạc Liêu	17/03/2026	609459 10529 10067 37203 69440 34267 79307 72165 07455 35034 14203 36341 0573 1794 1808 7629 388 98
TP.HCM	16/03/2026	087069 04475 38181 86877 32622 79607 33320 39226 40616 98643 60864 42851 2169 1142 4167 0095 426 01
Đồng Tháp	16/03/2026	525515 41635 30732 67921 21293 85346 64565 48924 61305 14368 06995 04311 1489 9461 9766 7162 150 13
Cà Mau	16/03/2026	616205 23669 12764 57745 95446 74865 08082 24370 72868 08690 87387 52028 0752 7586 8768 5316 321 73
Tiền Giang	15/03/2026	441767 64397 23980 88262 99903 33849 10852 21797 74696 99608 08778 81404 0416 8092 0992 7886 821 21
Kiên Giang	15/03/2026	861235 78674 60553 95656 22250 98637 13076 71607 26658 36315 11312 41257 7292 6105 0478 3657 979 49
Đà Lạt	15/03/2026	327936 86546 66309 90340 11227 54906 33437 59198 95556 81443 86186 51646 1992 2115 0100 2662 107 92
TP.HCM	14/03/2026	224652 51024 59586 14580 16092 54097 33200 88537 21265 71912 54625 87852 6867 2248 2827 3934 063 91
Long An	14/03/2026	878247 73842 78274 18607 17899 63319 15836 50273 24697 71591 55757 97624 7639 6798 1346 9983 924 19
Bình Phước	14/03/2026	647735 39346 73245 47659 46289 89724 95453 80483 83748 64075 49228 83723 5014 3751 7979 5974 380 17
Hậu Giang	14/03/2026	137568 18027 83033 78157 37232 53476 27334 71667 68938 13030 25644 05762 6870 3523 8700 5840 926 06
Vĩnh Long	13/03/2026	484908 79595 03543 04100 29891 72940 96265 16299 95038 88412 68592 73503 9874 3496 2732 5701 410 48
Bình Dương	13/03/2026	335488 63514 77026 03126 48990 29950 78709 92191 32236 84808 92273 18992 7949 5727 0289 4780 023 43
Trà Vinh	13/03/2026	042019 55903 46101 49321 91323 53333 14895 87437 83053 01929 75595 18088 3912 7665 3163 0879 352 30
Tây Ninh	12/03/2026	984983 48635 86386 28802 45236 42369 24726 01832 75432 29064 27756 80066 7547 6305 3274 3216 496 27
An Giang	12/03/2026	278802 01084 22145 59607 10134 17389 89785 17920 09389 87585 65236 54318 4884 7861 6700 9422 492 44
Bình Thuận	12/03/2026	533196 80221 36625 62754 62853 25364 08107 10604 17871 34104 17950 72022 0790 8553 0050 9695 145 05
Đồng Nai	11/03/2026	152825 64377 19425 70674 55637 57469 98944 26947 03006 25833 54997 10664 0388 6669 3892 8335 372 23
Cần Thơ	11/03/2026	530015 48154 38023 70768 39152 74087 66709 54451 55627 49684 32289 21525 6404 2566 0314 8916 476 56
Sóc Trăng	11/03/2026	940018 46529 92405 18756 93139 02059 95413 51116 47545 25525 07397 09418 4632 7901 4818 1470 623 50
Bến Tre	10/03/2026	351891 50757 95755 50840 75700 60355 58097 32669 17608 73259 43372 76404 2988 0319 7359 1747 377 93
Vũng Tàu	10/03/2026	189468 96907 63864 56274 48305 13405 46989 74321 40162 61222 60120 29158 3508 3677 4052 3872 245 11
Bạc Liêu	10/03/2026	927874 10959 79028 87298 39119 01399 37583 05613 91328 34101 24659 48594 0418 5792 0816 3796 583 37
TP.HCM	09/03/2026	808467 57647 10605 29881 11223 68708 98837 76683 55393 70855 62572 89214 6631 5746 0621 0819 373 58
Đồng Tháp	09/03/2026	686789 09424 01200 20443 94251 46345 16657 01782 03977 32894 26229 88621 5381 9424 3443 8520 622 93
Cà Mau	09/03/2026	348827 69167 01435 66978 11727 24724 01642 57186 49569 31294 24351 09591 2033 8215 9397 8996 572 90
Tiền Giang	08/03/2026	394704 99669 18164 39959 72222 93091 81305 33142 56602 44641 23853 36571 2493 0481 9519 2039 600 98
Kiên Giang	08/03/2026	322515 11109 42815 82001 73163 00659 90566 19606 71673 24818 71344 97627 8991 0812 3971 5818 470 98
Đà Lạt	08/03/2026	717274 01142 01085 82007 87011 54553 65438 96019 54562 49349 26429 62387 4748 3700 4782 3956 604 46
TP.HCM	07/03/2026	885734 67663 18235 77399 96726 41791 54328 47952 26670 05005 49741 44489 1502 5989 9992 1182 778 27
Long An	07/03/2026	843300 46583 29202 34091 76419 12436 79014 43019 75395 66111 46495 18046 3055 0556 4581 3412 740 49
Bình Phước	07/03/2026	639526 66115 35472 91308 23368 44079 03566 42480 74918 40630 28249 98242 0043 7224 2231 5396 028 45
Hậu Giang	07/03/2026	385752 15412 48644 63548 60833 19355 22340 58164 79586 15651 65586 87923 1074 3555 9662 4704 809 83
Vĩnh Long	06/03/2026	462757 27863 10330 10260 32590 96239 65781 70605 05747 25670 77770 97136 5198 6778 3671 2952 419 60
Bình Dương	06/03/2026	871999 34823 27829 78760 96129 14965 47945 55335 76429 72251 44278 01812 5082 0394 8272 5797 962 31
Trà Vinh	06/03/2026	696030 41796 67338 47221 81308 68612 74314 01233 31025 12986 49936 39032 7683 4063 7368 3466 027 45
Tây Ninh	05/03/2026	209734 90403 83767 57725 75304 78330 69138 95698 42960 06602 75093 13887 6782 6131 5674 9954 788 38
An Giang	05/03/2026	576705 70602 10279 28080 44632 41560 45877 91064 23269 61484 37925 62433 4580 3815 2835 0604 085 11
Bình Thuận	05/03/2026	728003 42041 25390 50437 73555 20087 36650 04752 55207 77473 30848 97011 8751 5638 4642 4489 980 70
Đồng Nai	04/03/2026	972486 32065 70222 38007 22633 88133 06249 18398 55612 59483 65773 30558 0697 3216 0161 7007 324 35
Cần Thơ	04/03/2026	064235 38170 93193 84523 67338 20374 22004 06871 56055 99828 40512 84682 8912 9793 4199 3440 483 61
Sóc Trăng	04/03/2026	797098 20113 88226 54122 05947 47166 35621 87794 64284 36771 07470 90557 4939 2474 1191 9656 277 11
Bến Tre	03/03/2026	327452 63059 91011 73632 69832 93707 31731 06874 76182 63950 60010 55336 6290 6563 1807 9909 304 67
Vũng Tàu	03/03/2026	339932 33041 14425 35506 84400 49623 58423 44473 55467 32469 12623 12255 2474 8674 6335 4428 076 50
Bạc Liêu	03/03/2026	263815 95475 68147 29102 04474 36475 88122 93749 55205 94773 73004 67369 7361 9050 7932 3606 378 28
TP.HCM	02/03/2026	733819 74571 81681 80957 29388 40070 41446 11299 50445 70658 14507 46630 6087 3104 4514 2937 945 38
Đồng Tháp	02/03/2026	712198 14852 87662 68290 44725 48178 43199 29807 20667 41522 06025 60175 9287 5452 6469 7717 093 49
Cà Mau	02/03/2026	253447 28927 77597 61189 33633 69809 06322 39974 54820 04875 46471 61439 7334 8037 5869 3628 083 47
Tiền Giang	01/03/2026	549308 27127 02700 09619 15745 65781 15546 25839 23093 70196 86700 58309 1836 1516 7742 8030 747 15
Kiên Giang	01/03/2026	124254 61589 82312 09543 45962 04852 96998 96625 59600 76271 79389 95622 1371 0820 7215 6476 728 11
Đà Lạt	01/03/2026	578627 62714 20838 24096 14693 57758 16015 92514 98779 64474 25414 18310 3273 0875 6477 2824 315 02
TP.HCM	28/02/2026	735820 90054 65724 23705 32087 79781 46624 36158 70135 24737 99205 32465 8571 7387 2639 0877 507 56
Long An	28/02/2026	782506 90537 20432 14035 38071 34199 09359 49190 79656 44686 30043 76337 8943 6704 9026 7216 905 39
Bình Phước	28/02/2026	681039 24593 37763 87748 89320 99964 18921 44927 08058 42299 35546 24633 7389 2651 2743 5179 217 17
Hậu Giang	28/02/2026	850371 47323 87415 01049 30680 96533 45074 41081 65803 13848 38168 53068 6348 5607 4750 0723 208 91
Vĩnh Long	27/02/2026	274039 84184 78246 76187 86076 21554 44423 01034 01245 51475 06433 29205 6496 3880 3094 8018 536 90
Bình Dương	27/02/2026	100227 31813 66611 86583 98845 78751 15974 00848 63010 53556 93790 28082 5539 4091 1748 6009 083 22
Trà Vinh	27/02/2026	332996 50921 48682 64548 98259 04157 24188 98450 37908 63500 31114 16463 0498 2382 6597 3670 163 25
Tây Ninh	26/02/2026	550102 84911 35353 79876 05913 72742 30401 86296 18815 95814 52000 54853 1445 9986 7657 2945 248 67
An Giang	26/02/2026	082226 56690 83421 53005 87093 04504 92815 90978 64394 73307 75472 44913 8976 3630 5931 6624 663 10
Bình Thuận	26/02/2026	557006 96710 86549 67028 15846 85808 39954 59405 57045 50617 91334 74019 2003 9022 7332 0352 773 01
Đồng Nai	25/02/2026	222731 58994 57724 48945 03233 51196 00553 43768 47439 36942 29641 56070 3252 0748 1359 3123 929 30
Cần Thơ	25/02/2026	630738 62708 43204 59622 64450 48890 48336 58848 11235 39269 03213 50686 2346 6642 9197 4610 058 54
Sóc Trăng	25/02/2026	046969 64669 56408 64286 51043 81824 13604 41794 41447 60726 79877 72582 6012 7192 8573 8397 956 45
Bến Tre	24/02/2026	404294 65439 47478 87918 56323 96915 83508 08062 16899 41707 19275 11250 3329 8369 2747 0610 912 12
Vũng Tàu	24/02/2026	329713 41768 26360 51500 88754 54689 01402 51378 71362 16454 13342 14108 5370 3774 5218 1986 267 44
Bạc Liêu	24/02/2026	010560 29153 88326 84446 77007 20372 58069 48397 31453 05518 61118 88698 6807 7799 8778 6593 840 41
TP.HCM	23/02/2026	278841 57517 02754 13701 57261 90433 07238 23456 02295 71619 60077 84886 0291 9929 5025 9713 645 95
Đồng Tháp	23/02/2026	586568 78965 11280 82199 17737 35507 81488 44958 62071 83255 71271 79058 2592 3452 5668 7096 061 89
Cà Mau	23/02/2026	792898 73641 51387 47785 71035 81135 61294 65993 37175 06657 43551 79786 2825 0833 7475 3364 840 90
Tiền Giang	22/02/2026	902794 29145 41037 70842 51224 41619 68464 28793 56459 89132 83044 63941 2038 6014 4192 3617 434 28
Kiên Giang	22/02/2026	690669 94874 51627 92777 16240 66133 65045 14720 27946 76912 35261 83885 7402 6246 2502 9206 925 79
Đà Lạt	22/02/2026	442074 69661 73342 17723 24376 44363 11463 08655 66499 34428 66352 79763 2588 3642 6291 1363 181 90
TP.HCM	21/02/2026	510389 30038 36066 69747 92806 20532 33437 28211 60872 35718 19771 85832 4359 2743 6054 3066 381 36
Long An	21/02/2026	387418 05476 85053 70522 69863 83033 25856 97466 67395 15445 43660 54172 1497 5861 6620 6579 087 22
Bình Phước	21/02/2026	838763 29658 82429 22841 36257 26804 48616 02080 30295 94232 35515 83263 9906 8590 4349 0784 871 73
Hậu Giang	21/02/2026	192482 22320 15722 10335 53906 43336 53606 91753 45369 76146 83337 67959 3724 2544 9499 0988 138 17
Vĩnh Long	20/02/2026	390675 74835 96724 45323 07030 57060 27645 82011 33469 28762 01654 50949 9664 8481 5935 2001 756 59
Bình Dương	20/02/2026	464716 81904 28698 14985 32757 61286 25105 11642 59070 50084 47078 87770 6132 4721 8240 6329 191 54
Trà Vinh	20/02/2026	190900 84570 59752 00849 37115 18186 51342 15099 08740 80509 47161 85704 5679 6259 4579 0821 225 67
Tây Ninh	19/02/2026	391019 67780 65549 10656 50842 81024 18432 00443 24801 44755 22103 28847 5061 6264 8140 1249 546 85
An Giang	19/02/2026	182393 71030 57957 89726 77463 78976 20267 08623 01915 20760 61125 40440 8147 8076 6869 7632 767 08
Bình Thuận	19/02/2026	691201 19564 85087 62650 75741 26123 12489 65274 38055 36326 31061 84793 4986 8586 2791 8978 163 22
Đồng Nai	18/02/2026	149483 96614 25777 91471 82346 34569 12518 16145 56900 35655 45329 92080 4806 9827 8104 1025 518 48
Cần Thơ	18/02/2026	618120 49185 85900 49802 95950 78430 17060 69689 82153 43412 11824 12702 4390 1667 4555 8366 961 85
Sóc Trăng	18/02/2026	203468 07637 47050 12682 52248 70232 32740 79097 20592 77133 22411 61134 6099 8716 8878 8743 480 42
Bến Tre	17/02/2026	078896 06550 09667 99692 89005 87895 15873 86550 22094 78026 49734 64010 5652 8775 8399 3564 403 82
Vũng Tàu	17/02/2026	144726 27701 78172 04729 09179 14754 39983 04248 38121 64787 21571 80137 9079 8638 3148 5310 696 56
Bạc Liêu	17/02/2026	749597 07667 27241 52720 84003 78995 05214 89600 85429 24598 96018 63345 4439 7982 0750 9121 404 61
TP.HCM	16/02/2026	549645 43599 60136 87772 25357 80087 49303 23821 74685 99390 56202 41859 8557 2093 3481 7926 542 72
Đồng Tháp	16/02/2026	289978 37305 95965 23562 53991 49837 61321 99940 71159 87316 64952 27120 5372 5234 7309 7371 288 67
Cà Mau	16/02/2026	828323 88682 73805 93875 74500 51943 33782 11176 82791 85755 18744 01129 3588 7032 1137 2178 410 83
Tiền Giang	15/02/2026	018529 68627 61790 68548 56853 28689 11260 94245 16591 87637 23569 20686 4206 0064 4405 8644 683 10
Kiên Giang	15/02/2026	914792 93530 31236 99511 03655 77447 10265 29382 11796 61153 82869 86812 7653 9606 5989 4371 398 54
Đà Lạt	15/02/2026	388356 64016 65401 15186 67228 58428 94319 73332 54194 78124 92406 03924 8528 9199 9945 8242 301 54
TP.HCM	14/02/2026	525331 14432 17015 09823 58407 02956 25577 05505 74856 27949 44869 51847 9330 3665 5670 3576 542 01
Long An	14/02/2026	546079 96356 32342 35014 24809 87551 23935 55170 58970 02579 90051 74563 6465 8333 2837 9931 173 44
Bình Phước	14/02/2026	850487 03377 59675 02302 47757 08114 75553 19626 30356 33618 66185 62050 2403 7273 4872 5819 110 17
Hậu Giang	14/02/2026	365053 17347 47579 44694 21736 35297 38525 81579 77426 10842 25564 75561 2924 8055 3158 1504 464 89
Vĩnh Long	13/02/2026	991084 42193 73112 00358 24118 25220 15418 40005 31751 82164 13210 72482 6150 2122 1698 8430 506 41
Bình Dương	13/02/2026	877704 41551 37653 79395 56999 25638 62973 47492 32568 86034 18109 31596 8228 5148 5602 7767 816 88
Trà Vinh	13/02/2026	759966 14092 15398 05108 87126 22539 90928 28279 51883 38097 73690 82175 5552 6470 3236 8465 233 34
Tây Ninh	12/02/2026	451294 80210 50448 74131 19066 34104 94845 70558 88389 46763 26875 01153 0423 6360 0991 6127 011 32
An Giang	12/02/2026	702266 14760 90960 63288 32469 39601 40987 07528 28050 77978 65514 33333 9346 1015 3312 6260 460 50
Bình Thuận	12/02/2026	492313 73523 09046 19103 65267 17143 93832 99383 02570 70425 40447 57671 8987 3581 7849 4065 449 76
Đồng Nai	11/02/2026	720732 81595 53832 35676 63484 61936 48066 77261 27102 64881 55791 96132 0262 2162 1661 4402 764 79
Cần Thơ	11/02/2026	827943 09641 38865 99112 02271 39323 76093 16188 39225 30214 50475 56795 2217 5479 3575 5226 773 34
Sóc Trăng	11/02/2026	725746 56135 64625 35887 92285 85436 57830 49130 64330 23814 38662 78603 4301 9355 8466 0945 294 32
Bến Tre	10/02/2026	961443 43525 03014 37360 28062 31551 19784 42631 49120 52364 64587 01454 6213 4461 3115 1505 391 73
Vũng Tàu	10/02/2026	879095 79083 66983 67585 84865 42339 48413 31010 73933 19015 89002 13391 2488 3929 5612 4729 658 33
Bạc Liêu	10/02/2026	841500 36875 75791 03775 06839 37988 05395 13545 98185 92750 12538 44822 7728 6339 6684 3213 956 73
TP.HCM	09/02/2026	329379 07066 38924 59619 39564 25909 87263 85373 07453 48266 51577 90342 5679 1201 9298 0818 386 17
Đồng Tháp	09/02/2026	132030 37364 19210 13048 93915 54102 02432 27210 87691 37793 92850 85762 4445 9441 7286 6297 866 74
Cà Mau	09/02/2026	291653 16032 94229 63217 99194 32036 80419 44880 08759 50749 16765 09328 6734 5055 9376 8582 180 68
Tiền Giang	08/02/2026	465579 62188 82163 79077 34305 38748 18611 05704 95561 61495 22403 28106 9824 5667 4420 6911 693 53
Kiên Giang	08/02/2026	090189 99702 89064 05827 80708 95718 62119 19952 99174 03797 92955 87108 5896 5122 8522 6669 459 37
Đà Lạt	08/02/2026	313412 90571 85015 43014 63142 33328 12515 39070 62092 39331 55117 39055 9597 5956 9778 0181 949 33
TP.HCM	07/02/2026	375271 02520 49204 85512 13813 21012 82554 18579 12909 09621 01404 58443 8262 7942 6156 9522 576 60
Long An	07/02/2026	006929 20520 30669 56110 06192 87870 34160 18576 42354 92631 96661 46576 6721 1468 5689 2612 776 29
Bình Phước	07/02/2026	455282 57087 77615 48406 79147 02052 21859 18115 38339 37215 68995 60733 7850 3976 8739 5382 609 24
Hậu Giang	07/02/2026	948791 76443 74490 67538 48179 53386 02262 75499 21354 59248 45587 73404 1969 9005 2453 0848 141 68
Vĩnh Long	06/02/2026	799293 28371 47045 69150 20304 95598 76122 69355 73428 73792 33414 72865 7819 2355 4559 7652 198 05
Bình Dương	06/02/2026	806337 59974 98495 15409 00818 46238 23306 18394 55711 89378 28965 98169 8853 6832 5599 7760 496 13
Trà Vinh	06/02/2026	546923 24014 58180 96776 28659 90601 01408 50659 44528 16890 38746 26517 2689 1984 4999 3962 074 38
Tây Ninh	05/02/2026	207446 92844 74108 49309 53319 65216 09604 33475 72139 25575 58736 18775 9677 3920 0884 7795 362 21
An Giang	05/02/2026	278360 76425 34921 61031 02681 25426 39629 25466 68972 30454 30130 43402 2170 8353 8361 7191 949 46
Bình Thuận	05/02/2026	650658 43753 79838 21309 23850 01698 89921 45065 96139 46898 17474 80239 6688 6609 2090 3474 819 76
Đồng Nai	04/02/2026	636838 39138 28044 06802 89882 35957 50694 31376 75268 75364 98142 10844 5920 4721 8548 9822 282 21
Cần Thơ	04/02/2026	983063 69364 79471 65295 06251 14424 76710 74747 47875 82565 30342 85713 3288 7464 3040 9682 531 76
Sóc Trăng	04/02/2026	543109 47947 26857 98601 18301 18656 91876 07222 44563 92229 58710 44527 3996 7405 8467 6441 593 68
Bến Tre	03/02/2026	671357 62092 32974 85392 33715 38075 50178 39055 24880 56236 54803 87540 7320 3799 4918 9621 409 83
Vũng Tàu	03/02/2026	994417 44265 02693 46416 00378 29914 09076 93684 47283 51625 04294 21164 4245 1580 0608 8895 149 13
Bạc Liêu	03/02/2026	097376 45561 69150 36646 30224 66795 29079 38616 25927 07852 07873 25340 9510 5233 5576 9289 485 92
TP.HCM	02/02/2026	170364 12986 77049 54900 55853 60798 27728 03389 37086 58734 34735 18716 9387 3100 9611 1509 290 19
Đồng Tháp	02/02/2026	171345 70280 33198 02752 15589 04151 24783 55700 71080 95594 86302 51032 9257 0429 6866 8004 727 64
Cà Mau	02/02/2026	713376 74415 63865 08703 34839 05970 52040 24258 96001 49545 98941 04603 5191 6839 5579 0099 715 94
Tiền Giang	01/02/2026	087891 38457 38452 45169 99656 43532 09198 21272 73691 90260 33358 41047 3318 6640 6649 6373 020 04
Kiên Giang	01/02/2026	061337 80282 34691 99258 75573 23873 51530 61857 80688 80547 96739 48152 9132 0675 3047 4589 605 85
Đà Lạt	01/02/2026	399829 01076 75667 30916 02818 34234 06924 86108 72897 99883 15007 69211 0967 9996 1547 3575 092 17
TP.HCM	31/01/2026	380305 95867 59790 98880 96060 33860 02563 18074 78726 56692 14620 75402 4845 2792 7750 2106 499 08
Long An	31/01/2026	362662 69201 98717 72448 92761 08639 89177 34502 38064 84633 92460 47218 0285 4739 7149 4036 528 37
Bình Phước	31/01/2026	392989 10388 42963 93155 53204 11699 22699 16905 20603 15497 54383 92359 7721 5891 8594 5691 716 51
Hậu Giang	31/01/2026	749006 12643 84101 49092 68105 65327 91736 11575 42798 91539 75429 27136 0370 9023 1601 7410 564 29
Vĩnh Long	30/01/2026	141867 53974 11773 69667 60031 55260 57320 13638 97125 42698 84541 44400 2580 0359 1577 4803 868 22
Bình Dương	30/01/2026	923320 70264 06744 71503 31848 92780 08501 03663 73681 67843 25171 77142 6621 2559 3450 9865 195 53
Trà Vinh	30/01/2026	524605 64435 48576 54306 09010 37579 38846 51075 12885 62363 10531 81452 2358 4518 1989 7897 354 80
Tây Ninh	29/01/2026	394184 72617 83970 40788 90447 39162 73566 71068 04822 43347 95481 39001 3447 3016 1095 9100 858 87
An Giang	29/01/2026	727511 05073 49962 50749 65783 99609 62348 81906 48084 34918 70270 78623 4069 3559 2240 6097 604 41
Bình Thuận	29/01/2026	902776 07503 60717 37173 73562 98380 04467 68600 50284 51260 10489 69497 4607 3453 4223 0281 149 82
Đồng Nai	28/01/2026	283857 31917 30973 56890 06162 97996 22366 43836 91584 15958 13247 25488 7677 2764 6450 3176 657 43
Cần Thơ	28/01/2026	073937 38970 23492 01732 57045 72944 78191 31828 51117 09600 11085 24778 9056 0437 2444 2728 925 04
Sóc Trăng	28/01/2026	973923 53048 89012 59616 10238 14742 38965 72228 30262 17622 45932 51347 3267 4199 0241 2400 869 93
Bến Tre	27/01/2026	999081 75394 45533 67624 01653 57314 09525 72405 97535 40692 50400 89649 0294 7231 3643 8721 695 99
Vũng Tàu	27/01/2026	319678 04227 26370 72387 26942 50994 61589 17397 01368 34501 64915 99538 3233 0901 3763 8145 886 22
Bạc Liêu	27/01/2026	195045 35099 45770 62120 21485 57356 41180 12098 91019 67221 39472 40177 4452 8292 8943 0723 329 49
TP.HCM	26/01/2026	683111 84622 56143 66334 84631 64498 65882 89492 57156 00989 49158 85259 6667 1412 8086 7271 180 20
Đồng Tháp	26/01/2026	180906 55538 31070 49892 56013 06204 23952 49076 11721 93900 00696 91792 7290 2462 9467 0605 943 57
Cà Mau	26/01/2026	701276 13984 84937 28164 26311 25313 93962 12958 78124 08681 06616 71688 3023 6894 0740 7624 717 29
Tiền Giang	25/01/2026	804455 43176 97959 71878 08928 63536 13164 19941 93874 15913 21453 97017 7037 1237 5859 0119 756 57
Kiên Giang	25/01/2026	641355 83950 96021 56207 07402 75657 63226 71207 72411 74503 69845 28967 3681 1733 0249 5246 745 23
Đà Lạt	25/01/2026	545527 31381 73478 14532 89609 63554 08923 70952 13448 39809 54965 25717 7942 9768 0940 6711 677 02
TP.HCM	24/01/2026	124594 42045 97035 49182 37256 75176 24962 96685 57997 23260 69342 59915 9544 9920 1815 3755 196 52
Long An	24/01/2026	145400 91392 82824 37435 68369 59352 53192 24300 18105 21869 99781 04275 1447 0225 0269 2506 427 34
Bình Phước	24/01/2026	450526 81564 52060 85308 80582 62733 00208 10028 89236 05248 42487 07608 0376 9803 8739 2279 578 22
Hậu Giang	24/01/2026	724047 31065 55045 12367 82358 39345 49428 83010 04246 44028 79716 57051 9643 6119 2795 5020 171 16
Vĩnh Long	23/01/2026	042663 06493 56424 37749 03479 50064 61120 64669 04422 39717 64023 43304 1225 2243 8362 6622 425 59
Bình Dương	23/01/2026	206511 81774 97765 15974 76669 42025 96994 28554 54939 37518 90460 22250 2528 7858 7412 0053 340 23
Trà Vinh	23/01/2026	860646 14377 34509 69588 90800 73253 72911 78758 82827 68817 81726 88283 4379 4274 7750 9737 923 00
Tây Ninh	22/01/2026	995451 02150 59715 00857 64315 98420 26143 00876 30981 46965 94624 33101 0454 4230 3040 8791 960 04
An Giang	22/01/2026	582586 33212 09900 24698 03599 27207 57906 32144 36398 80852 85497 88860 2579 3972 3649 6189 091 08
Bình Thuận	22/01/2026	626995 87980 47632 68883 64326 84223 21140 48973 53402 17814 11016 67087 6212 3396 5077 0913 419 02
Đồng Nai	21/01/2026	497994 21999 57603 13583 27888 06700 45274 06571 56669 86927 33043 17077 3653 9048 4938 9811 902 79
Cần Thơ	21/01/2026	259514 22569 50170 42035 97098 03246 09179 61380 53675 93543 35121 64889 6083 7034 4785 6988 903 21
Sóc Trăng	21/01/2026	200841 90201 36285 84230 02812 22864 19153 21905 19639 66263 91364 60927 5674 2686 8088 3029 071 05
Bến Tre	20/01/2026	300409 70044 35638 65890 98272 97818 70012 86537 97964 19460 63208 86545 7647 3185 4987 0971 308 01
Vũng Tàu	20/01/2026	305017 58157 27620 02258 38499 95120 28950 21496 04134 27149 45134 07046 5027 9266 6311 8860 421 11
Bạc Liêu	20/01/2026	787820 70893 91483 45418 90546 72741 91052 23957 79489 84471 57188 18532 5224 2475 5208 0627 433 21
TP.HCM	19/01/2026	647068 06214 44916 31109 03106 19004 07963 86871 79342 05287 87931 38293 7851 5905 1622 4660 978 47
Đồng Tháp	19/01/2026	786514 11850 81835 81677 71298 61007 82295 85228 63206 15120 06665 09537 6387 6268 6577 9646 870 94
Cà Mau	19/01/2026	786591 64948 90010 40414 39330 58731 11712 22112 04219 66912 47375 60331 2117 9463 5345 4946 857 27
Tiền Giang	18/01/2026	780984 42924 89563 67011 14503 05515 58681 53387 75779 54525 01661 47858 8031 2052 6703 3544 591 73
Kiên Giang	18/01/2026	442231 18137 62086 22053 50200 05559 33849 01913 63698 61237 81026 60323 1735 1570 0624 2314 692 74
Đà Lạt	18/01/2026	796131 26018 40775 47827 85640 58780 77214 05228 34636 32960 93253 57666 4672 8466 3881 4915 931 23
TP.HCM	17/01/2026	426716 57725 90984 19734 05551 33785 14080 47383 79628 89204 47032 20244 8577 2105 3278 6148 782 62
Long An	17/01/2026	384224 23770 72469 02861 31120 50898 17924 74476 46614 23060 16961 26082 0812 5597 6123 4680 385 74
Bình Phước	17/01/2026	053067 82579 47280 47352 12191 30452 59236 06769 02045 43858 46836 43890 5662 2351 8577 3130 763 30
Hậu Giang	17/01/2026	668477 98340 53761 95097 43840 12508 71882 36405 08790 73301 19983 64534 0190 0778 6205 2467 525 28
Vĩnh Long	16/01/2026	670271 87619 30287 49772 57266 48505 30979 05873 69379 98320 81299 53161 3940 6645 3162 3187 350 21
Bình Dương	16/01/2026	674308 74917 88816 80022 63443 35101 28593 59322 71705 93949 25727 36866 3903 5474 5006 1331 558 55
Trà Vinh	16/01/2026	962541 91562 26125 30353 43540 21272 91844 93586 83705 63410 98406 40133 1609 8269 3870 8063 079 51
Tây Ninh	15/01/2026	430028 68596 43391 28675 39990 60668 99649 85680 91591 68417 93562 96521 7394 9162 2620 7951 535 42
An Giang	15/01/2026	397902 62988 35895 09795 23495 69034 58524 25184 32964 83505 04232 34557 6539 8785 3704 2665 531 82
Bình Thuận	15/01/2026	346307 91728 98070 48166 22648 02545 65057 14887 56642 69289 15245 87126 2005 3244 7935 2939 114 23
Đồng Nai	14/01/2026	440871 68343 12289 33879 49927 24585 58787 20685 87083 84897 99256 90499 3559 2733 4889 6711 219 58
Cần Thơ	14/01/2026	420771 91081 94042 49674 41352 89614 93688 90280 79151 67378 22312 70575 3824 4348 3019 5813 925 66
Sóc Trăng	14/01/2026	311981 32614 26465 92949 02625 64342 55345 27549 05001 40246 23086 51857 4003 6808 2323 9452 263 69
Bến Tre	13/01/2026	668726 95355 17567 14059 34014 48814 03831 01283 08889 35333 03510 47868 5433 2831 4060 6558 957 07
Vũng Tàu	13/01/2026	833192 61803 59116 68954 26106 99484 77542 08002 28667 09308 44241 53169 8391 9537 1858 7126 791 18
Bạc Liêu	13/01/2026	075394 42354 75758 09775 59102 30754 09355 52224 90588 34443 33741 02234 9363 1227 3793 0569 283 21
TP.HCM	12/01/2026	965406 01618 70088 51462 68841 87444 62356 21501 31591 23054 22168 38719 6560 1295 6808 2651 249 12
Đồng Tháp	12/01/2026	941284 63550 01781 32140 44707 14656 74787 80283 93410 29433 00177 56442 5190 0179 7086 9641 399 35
Cà Mau	12/01/2026	677688 66744 86207 97255 73968 32699 38069 08866 60203 90242 81947 91213 8286 9121 9111 8604 040 07
Tiền Giang	11/01/2026	656152 80395 35229 56865 38009 73830 63593 88571 50959 77825 83486 60510 8700 2633 0567 7855 321 28
Kiên Giang	11/01/2026	820025 73519 07427 99829 09804 19895 96996 68624 98024 15056 19502 53014 3556 3888 3471 2091 001 14
Đà Lạt	11/01/2026	757054 97755 72232 91866 92590 23003 43778 83045 26443 09732 71565 26024 2515 9116 0248 3305 475 59
TP.HCM	10/01/2026	532887 79162 74095 49350 81999 42171 24769 06778 26597 30455 96135 32961 1006 8613 0815 2852 459 87
Long An	10/01/2026	718609 92269 38666 88984 42567 32432 61624 08405 35304 68797 10583 05376 1718 8540 6591 1067 251 77
Bình Phước	10/01/2026	728158 42267 82483 08373 71005 84783 18000 59031 25150 93831 19953 03205 4931 9119 5053 3518 903 08
Hậu Giang	10/01/2026	295158 84206 60144 87423 34231 94060 15368 32299 71680 94859 43972 77902 1476 3202 5015 1576 371 10
Vĩnh Long	09/01/2026	147642 49071 13918 03356 19292 88005 99376 70357 31995 01660 50469 56722 2697 6913 9915 5321 094 26
Bình Dương	09/01/2026	333280 43582 47738 41929 85621 45603 60733 46130 99005 25067 91502 00512 3346 0743 1027 8104 281 96
Trà Vinh	09/01/2026	461724 67350 33066 12956 95610 47642 11355 07995 88731 89458 53307 02437 3644 3050 2568 8454 485 06
Tây Ninh	08/01/2026	796976 07195 61828 43966 70431 12089 76012 18581 96935 94622 78268 49083 7318 7906 6648 8226 904 05
An Giang	08/01/2026	238511 99436 31116 78067 35027 17072 74385 13036 83262 46390 83190 00703 2088 3002 9049 0915 029 54
Bình Thuận	08/01/2026	232805 57089 98462 87302 30472 15269 37655 47673 83344 38198 82119 92918 4393 0898 3027 2206 428 28
Đồng Nai	07/01/2026	329529 65191 58121 91117 94540 09890 48871 98177 49451 30304 55970 51053 2585 0509 9531 8966 391 40
Cần Thơ	07/01/2026	894997 25418 39253 47171 88241 10753 79622 26599 50074 61275 46882 41902 4482 1777 2925 6758 431 01
Sóc Trăng	07/01/2026	205933 37110 61939 85255 65817 63279 36801 67445 89919 79098 52318 51255 1611 6244 2457 3988 045 23
Bến Tre	06/01/2026	704531 42970 40125 46868 83393 84483 00064 51692 67782 52657 19320 12605 3622 7771 3052 8263 897 71
Vũng Tàu	06/01/2026	905728 17204 59015 15602 21086 33920 93658 14897 36503 12801 56167 53413 8152 3154 0681 8741 532 58
Bạc Liêu	06/01/2026	417304 70180 83599 24417 60170 15138 06165 23382 95596 09015 58341 19671 2372 5814 9208 0901 271 53
TP.HCM	05/01/2026	823878 31660 39403 45422 38044 56004 83301 77760 82893 31532 84848 16286 4656 5655 4074 1888 666 26
Đồng Tháp	05/01/2026	247563 23430 10523 01587 83250 30067 17785 19439 22106 60895 44504 17408 6380 4755 6251 8451 036 19
Cà Mau	05/01/2026	734535 14191 28162 67897 39213 37310 33008 09632 25717 69844 84382 42460 4902 0118 6606 3526 167 31
Tiền Giang	04/01/2026	520288 93629 37765 69949 27434 10423 91208 13568 46186 95813 99257 61496 2920 6093 3117 2958 308 48
Kiên Giang	04/01/2026	600433 86746 33222 92934 24143 72151 91105 19481 41212 14085 46257 30098 6771 4389 0479 8847 935 25
Đà Lạt	04/01/2026	209071 67054 28641 64384 10466 73408 92339 53571 81190 69852 63000 18265 9616 3543 2115 8117 909 07
TP.HCM	03/01/2026	697243 99799 87559 25199 92810 12529 24093 14582 17580 61469 50215 42614 5349 5778 9190 1497 938 26
Long An	03/01/2026	587703 26975 73876 24557 96961 75958 67867 86767 06559 91611 30403 42819 8101 0719 4758 3810 016 93
Bình Phước	03/01/2026	375684 18817 83306 06858 43076 46483 75082 45957 14206 53858 69333 50067 3625 4252 0349 1528 462 24
Hậu Giang	03/01/2026	934947 44201 28408 97517 72851 03487 07096 74604 67855 95917 87196 27661 0302 6060 0257 7009 594 14
Vĩnh Long	02/01/2026	492364 73749 84993 61003 14821 86244 04321 68523 75369 74898 37092 86098 2154 4292 0160 6580 149 08
Bình Dương	02/01/2026	807141 73673 46858 43366 07774 28859 86203 17141 10882 82898 71038 70775 2337 2294 6099 3028 542 39
Trà Vinh	02/01/2026	195707 66002 91586 33378 78998 94198 31170 45253 13903 91346 88313 22705 3558 7842 9052 3027 956 89
Tây Ninh	01/01/2026	194340 89391 48933 19274 24651 34645 11385 52716 45902 31597 79295 52834 6957 5618 3957 8189 517 32
An Giang	01/01/2026	921013 21136 73173 98896 55005 35627 70407 97528 02210 61679 28577 61291 0531 1220 3062 0565 806 25
Bình Thuận	01/01/2026	796621 49121 30782 36369 25743 71053 20817 89905 12597 91389 26623 32621 9196 7406 9968 1974 099 74
Đồng Nai	31/12/2025	681981 01357 07480 58462 81728 51261 83782 01736 34044 76531 58876 76029 5597 3320 3808 1288 119 15
Cần Thơ	31/12/2025	215852 10235 84633 95358 10636 64177 75717 64534 13104 81772 14374 74022 6568 6449 8530 2867 522 99
Sóc Trăng	31/12/2025	878688 58111 87688 98207 39756 68121 22050 68552 15508 95646 35173 96242 0123 7230 2265 1071 176 04
Bến Tre	30/12/2025	131861 64364 15855 04631 50586 52586 06474 30017 01421 50307 19509 48521 9328 2833 9752 8819 896 37
Vũng Tàu	30/12/2025	039926 24314 87183 49647 01682 32184 50879 63565 40118 67282 25679 90406 8905 8781 5960 2454 716 20
Bạc Liêu	30/12/2025	292496 38337 27383 95689 46115 16028 80566 84867 11076 38659 91948 68151 8801 6695 1433 7579 889 30
TP.HCM	29/12/2025	956196 00385 63558 66419 95178 54188 27085 41946 56311 68045 08430 63757 0822 2342 9920 7476 677 44
Đồng Tháp	29/12/2025	151213 53599 64912 29273 75912 75244 62248 94134 04890 86411 42084 63089 9054 4983 7939 2426 518 01
Cà Mau	29/12/2025	852037 00930 90947 03343 86830 89670 32619 86311 55215 57377 54809 83101 6649 1172 9727 5243 454 38
Tiền Giang	28/12/2025	121031 73763 61112 41896 15973 72065 23790 67294 28902 20044 68104 57503 5920 0667 1615 7718 728 30
Kiên Giang	28/12/2025	760513 09779 45325 45954 29805 38834 59574 90294 00877 24846 11989 45385 3538 2488 9927 1892 289 02
Đà Lạt	28/12/2025	858099 33483 77472 18701 52425 60252 82053 09384 37707 14300 86056 29720 1285 8978 3686 1179 492 34
TP.HCM	27/12/2025	361780 94720 03367 54546 58196 04593 34624 32227 75113 03420 04285 33005 2573 4362 2546 8052 934 12
Long An	27/12/2025	152880 45617 47184 17441 73703 07418 61949 34804 72683 66122 73554 80275 6786 2391 8754 1576 707 28
Bình Phước	27/12/2025	030566 50996 95957 49682 39486 36725 05819 01046 78783 52532 18213 69709 1988 3196 2430 1938 677 31
Hậu Giang	27/12/2025	651783 77729 52093 31302 06178 31885 44700 47218 68851 39736 90884 84459 5590 0181 5909 2569 473 33
Vĩnh Long	26/12/2025	808138 09201 28379 11497 30955 03537 39330 37521 49685 69045 35795 06950 3718 3720 7977 2903 961 17
Bình Dương	26/12/2025	268832 19915 48280 70047 59073 94014 01879 00437 24230 38015 60581 03069 1040 3622 1831 8131 592 43
Trà Vinh	26/12/2025	240813 79939 07009 01987 44952 95752 12931 10396 39025 48880 67523 91583 9451 4120 0125 9384 980 31
Tây Ninh	25/12/2025	879863 60375 70465 49140 40020 45966 11577 04104 21587 20640 67989 36535 5735 3190 5237 8499 654 94
An Giang	25/12/2025	806057 47829 30230 76273 93275 99496 62975 70441 85713 62772 03503 92434 6961 1957 3887 3545 546 13
Bình Thuận	25/12/2025	195579 59222 85232 11626 78657 08304 38439 40165 71134 78696 80533 13454 7425 6088 8504 3787 832 26
Đồng Nai	24/12/2025	689327 54438 34279 02599 18100 34004 24974 29710 97949 35206 84755 14601 1209 4419 5583 6853 952 83
Cần Thơ	24/12/2025	667789 83883 10364 11762 41760 34248 91307 27803 02598 78612 27220 52686 8417 1273 8331 3655 687 85
Sóc Trăng	24/12/2025	349114 10055 73787 40985 62589 43551 22359 57032 96747 15907 63649 36793 8010 5417 3328 1308 811 06
Bến Tre	23/12/2025	592361 86497 06357 33183 25226 82666 71277 00920 23663 55209 31877 95202 2001 4442 4465 3282 079 37
Vũng Tàu	23/12/2025	267673 72271 86213 43692 02713 81351 31518 48523 53876 26354 43767 10208 6332 6496 6472 3153 247 71
Bạc Liêu	23/12/2025	716812 44034 54077 53620 56516 33465 77877 28043 14601 17950 63018 48267 0811 5887 2570 1946 477 65
TP.HCM	22/12/2025	547078 82922 98269 22369 14075 22938 08631 16584 87320 06099 49936 03325 4088 3822 4064 7603 228 38
Đồng Tháp	22/12/2025	641409 88060 51445 29069 94370 45458 93354 67444 25467 08106 32284 41130 2085 8756 4269 2029 122 47
Cà Mau	22/12/2025	337999 21004 00508 37336 38899 91517 22345 77192 68807 13422 48260 98773 4957 5728 0733 2873 611 18
Tiền Giang	21/12/2025	258278 78832 92321 01121 65040 37058 04810 92323 36745 91460 91756 69591 0732 7093 2390 0857 920 48
Kiên Giang	21/12/2025	717469 14396 46816 97291 50788 72857 14809 34312 24513 47011 71617 93084 3140 5593 4551 9386 033 41
Đà Lạt	21/12/2025	098985 45295 09763 79067 75339 23759 21327 89656 69863 87597 59479 75669 2186 0997 4579 8217 078 41
TP.HCM	20/12/2025	416435 84441 12676 49936 56590 38869 81517 68707 01946 84689 25185 48818 2081 1151 4385 5395 514 85
Long An	20/12/2025	642511 19210 93848 46315 82089 11676 19260 14067 41503 58888 18699 16467 9769 8510 7155 9774 403 58
Bình Phước	20/12/2025	728570 43409 56421 06065 38576 33045 01713 35538 22181 77859 86851 28718 4705 1880 9508 2962 239 69
Hậu Giang	20/12/2025	869516 00881 48191 59197 68716 10235 44619 60677 53781 12972 99420 09647 5067 1514 3619 4861 039 59
Vĩnh Long	19/12/2025	665848 52307 38186 74763 18917 03356 00395 06242 44790 11912 32332 00200 1648 5696 1411 2658 085 50
Bình Dương	19/12/2025	520685 50857 92163 98813 06033 52136 15597 74052 05878 21635 43383 76432 0912 4715 3908 8569 368 35
Trà Vinh	19/12/2025	021256 12582 54674 57897 03903 07590 23898 53045 24462 83791 54643 36521 1933 9308 4116 8580 714 19
Tây Ninh	18/12/2025	393219 12321 26959 67441 61262 69359 89344 63638 19815 88395 74281 60648 0184 1426 9486 9271 624 73
An Giang	18/12/2025	731357 78913 99758 81193 53489 24234 94569 43388 26706 18786 20536 73172 6228 1258 7057 6261 683 39
Bình Thuận	18/12/2025	770983 73901 44034 77623 50701 37746 86930 66865 59606 36901 35435 04129 0714 5309 3853 9025 672 03
Đồng Nai	17/12/2025	678482 20045 48413 81759 46746 91804 47867 76598 21576 48610 66816 38382 7288 4238 4325 2592 085 90
Cần Thơ	17/12/2025	746597 22517 78765 89186 25491 81962 42756 29235 63489 45403 02649 72647 2481 2045 0253 9780 630 05
Sóc Trăng	17/12/2025	401557 29896 81139 26135 29826 68037 22994 59528 10963 88376 42303 89264 6096 7333 6438 2467 092 90
Bến Tre	16/12/2025	001628 54914 76082 99427 03661 86571 13435 45128 81081 58920 24075 99500 5690 6064 9031 7094 363 29
Vũng Tàu	16/12/2025	179987 81150 55956 31968 76847 73062 75873 33616 49065 38653 06668 89042 9360 2263 0885 8893 681 10
Bạc Liêu	16/12/2025	824535 99757 91855 16339 93945 51608 54189 23928 88705 18216 07876 68640 7410 5557 3141 5796 562 63
TP.HCM	15/12/2025	548565 93742 67769 62582 43555 47282 65921 01425 36202 74022 41228 05960 6278 1452 3774 6673 869 94
Đồng Tháp	15/12/2025	606708 47982 47280 68950 35746 83051 41469 66680 35498 75591 03430 65529 7599 9323 6756 7516 208 83
Cà Mau	15/12/2025	989912 77350 30559 47125 30563 90962 35666 45918 45514 83216 05689 71925 4230 1229 2602 4444 745 67
Tiền Giang	14/12/2025	363164 63180 18303 17381 42341 04013 58147 15214 02872 15177 18122 26449 9100 6223 1492 4845 359 69
Kiên Giang	14/12/2025	831747 34966 20829 82876 41073 23046 57642 75842 28843 13571 17969 08414 6364 2094 9849 0564 761 89
Đà Lạt	14/12/2025	196484 48260 24333 34166 06976 97037 30323 68192 46913 74517 57639 12890 9268 1603 1366 4069 065 75
TP.HCM	13/12/2025	484938 86862 98842 57691 57062 92614 93305 02028 33132 14634 19823 29646 4308 6193 4495 9944 127 52
Long An	13/12/2025	654759 05115 36713 33709 52560 45226 35089 18681 23133 49862 07218 17528 9846 4046 1312 5826 658 87
Bình Phước	13/12/2025	480597 08652 12991 72622 54058 59833 28140 48590 78838 24578 24283 35079 8824 9864 3377 4574 810 99
Hậu Giang	13/12/2025	766129 03617 74292 49491 41572 34249 94151 50882 77985 57595 61432 52621 8420 2968 9290 9126 520 49
Vĩnh Long	12/12/2025	427140 60340 71620 13403 53969 33275 60510 96275 37853 93830 17238 49960 2602 8104 6744 8027 879 93
Bình Dương	12/12/2025	416982 62011 49575 18538 89880 62579 59609 71477 20636 50887 14486 33471 7743 7086 1284 1934 551 33
Trà Vinh	12/12/2025	608893 32142 57804 12722 30430 14232 30831 73703 81080 99176 48995 06928 9922 7674 2258 4824 991 42
Tây Ninh	11/12/2025	473447 95144 39363 36796 68783 07774 56162 31615 59322 47378 46021 06351 9133 2489 8813 5621 385 49
An Giang	11/12/2025	204056 87321 39945 62816 37388 90526 82310 29150 59584 27368 70895 19595 3401 8470 3450 2773 090 63
Bình Thuận	11/12/2025	733927 34334 41708 41460 22259 65447 34604 55049 54086 53455 54031 09739 2390 6429 7707 4496 353 38
Đồng Nai	10/12/2025	048568 69756 22643 27638 35654 96397 05333 84227 29346 77088 39933 58592 4409 0868 0263 8233 353 87
Cần Thơ	10/12/2025	375492 05173 88682 45313 55483 75232 37632 68479 60203 35922 92009 46574 3256 3626 2263 7933 014 20
Sóc Trăng	10/12/2025	331026 51467 57536 69734 74574 72379 56291 16661 85214 78348 46428 43556 6803 0883 2776 4455 206 12
Bến Tre	09/12/2025	257886 66629 19021 88956 41090 80913 38907 26387 67954 66624 48629 57046 4661 2022 6053 3533 454 14
Vũng Tàu	09/12/2025	000248 21445 18343 96313 70513 85030 84161 74351 74252 70990 28847 15700 6328 7325 9590 1251 536 98
Bạc Liêu	09/12/2025	086267 02302 50302 32723 36163 31514 35197 53993 66991 32670 30701 81357 0162 5367 6560 7334 183 55
TP.HCM	08/12/2025	287570 44980 01845 46931 28064 74011 66082 05573 31367 93104 83196 75884 8874 8027 5483 5044 696 90
Đồng Tháp	08/12/2025	652680 70230 84172 21575 41760 22029 40207 66111 01822 01096 19553 33584 9897 3192 4110 1667 351 11
Cà Mau	08/12/2025	761911 17162 01256 57077 57855 64348 55099 95120 52080 05158 92468 59874 4753 6525 0189 6563 222 00
Tiền Giang	07/12/2025	828424 41287 91075 82404 41676 62056 60898 28531 81552 14428 61431 92247 8830 5778 4743 0645 983 79
Kiên Giang	07/12/2025	485425 32166 27638 18978 07900 97884 57550 73704 38744 71831 91393 05177 4403 7438 2084 0730 572 76
Đà Lạt	07/12/2025	686518 67856 66305 75528 66750 73780 27519 02833 74257 96787 52492 93327 2063 4516 9321 0618 940 12
TP.HCM	06/12/2025	433544 10927 49205 91522 46552 96361 63388 07789 62442 09852 63564 84985 4374 9323 0546 8837 655 79
Long An	06/12/2025	277030 97759 56181 79639 35850 69780 39402 77533 08529 89536 26170 50649 3731 6736 5983 2394 537 60
Bình Phước	06/12/2025	005458 99250 56508 27905 96832 49918 33180 59395 26679 57801 94505 48572 1978 9301 0808 4277 375 77
Hậu Giang	06/12/2025	373212 88575 37176 71858 43152 63535 53955 31087 97651 74166 96837 57015 5218 7121 6432 6120 727 23
Vĩnh Long	05/12/2025	250816 74269 42492 71467 18140 85835 75797 85389 87990 93540 39757 06775 3938 5945 5037 6279 652 18
Bình Dương	05/12/2025	073147 29009 19816 89916 59590 89421 92381 24918 83207 42939 93200 44192 1300 2087 1123 4524 311 41
Trà Vinh	05/12/2025	451385 84044 99460 38106 50174 53108 69701 26881 88642 72233 14447 64744 6764 7731 8129 9670 726 71
Tây Ninh	04/12/2025	718588 09877 09840 19804 19499 63282 17254 05044 63941 32497 66124 87866 1130 3250 2013 0909 153 56
An Giang	04/12/2025	315083 52964 78060 56338 03788 66950 99684 54433 68168 60630 93574 99758 3135 1899 4899 9046 625 07
Bình Thuận	04/12/2025	085375 89522 16297 05054 36495 97878 79964 38018 03509 80517 08146 45106 2644 0972 2289 3825 404 56
Đồng Nai	03/12/2025	793394 53973 58689 31785 42090 89812 02711 91772 72388 43133 84415 98855 3545 8117 9808 7743 619 23
Cần Thơ	03/12/2025	452169 17220 35750 94011 84231 46411 06551 14226 16779 55838 76423 79700 5212 1679 5713 0477 184 97
Sóc Trăng	03/12/2025	912561 28390 03882 78249 40821 22261 83252 44769 24500 47605 14343 96350 1158 1486 8716 2693 314 58
Bến Tre	02/12/2025	419478 08294 89334 09355 11568 73368 76305 15255 16804 91033 78225 94690 1243 6466 5584 3575 736 89
Vũng Tàu	02/12/2025	259197 77648 82551 41059 76445 33986 29914 65937 98702 13397 53077 97295 9794 1803 8966 5461 323 92
Bạc Liêu	02/12/2025	501721 67554 67344 61207 85738 79941 03846 13069 61572 36903 12453 35331 0273 5165 3629 3999 366 40
TP.HCM	01/12/2025	953117 78216 78938 49628 67616 73680 48005 52438 09679 83079 06287 76951 9501 0371 3047 4539 022 04
Đồng Tháp	01/12/2025	569537 11846 44424 00338 40595 61652 37065 46123 67132 36495 95607 47145 7404 3680 6897 8109 412 35
Cà Mau	01/12/2025	986053 58672 91512 53706 59826 06834 60560 78573 64259 28301 78537 36015 0335 2883 3414 1482 872 02
Tiền Giang	30/11/2025	198430 01891 67701 29068 06539 80907 55795 94077 12671 24449 05789 66354 6817 0004 1270 9789 579 99
Kiên Giang	30/11/2025	002911 21496 82683 39950 24788 96596 70305 39947 58566 34124 80104 73944 3946 7277 1521 0407 653 67
Đà Lạt	30/11/2025	573077 87993 81137 61025 97098 10616 46905 81174 16857 47751 03911 32089 3123 0267 4804 3534 531 12
TP.HCM	29/11/2025	758818 39746 54246 06296 95145 32538 50143 36355 75157 21426 89485 71736 3236 8433 1322 9044 037 62
Long An	29/11/2025	407956 51868 13209 13328 50673 79117 61315 51372 15473 65904 85980 39069 0633 7450 4545 1935 551 49
Bình Phước	29/11/2025	885250 49301 82046 40486 85811 56115 64292 06665 17547 80952 89558 81532 7829 9895 2515 3336 072 61
Hậu Giang	29/11/2025	922599 47458 87685 52321 35182 59325 64255 07649 78529 35614 03278 62851 3116 7211 2243 0383 429 26
Vĩnh Long	28/11/2025	138537 75669 31121 80813 77891 42147 78058 21672 61448 84401 74189 83680 6377 8772 3525 8891 300 30
Bình Dương	28/11/2025	192476 07185 55796 08643 72254 78223 39833 32650 13554 69185 66317 03452 8346 9422 7298 6299 913 01
Trà Vinh	28/11/2025	240446 47489 47732 60999 68630 25071 62403 62484 93662 55655 12361 58598 8283 5530 4123 4152 032 95
Tây Ninh	27/11/2025	291515 93471 40151 43650 57903 34971 02754 17075 40372 22908 08117 70082 1225 7156 3572 5933 729 36
An Giang	27/11/2025	458408 18200 86946 01123 44349 22288 23164 53427 51813 15723 27675 70174 6595 3404 0340 3426 027 92
Bình Thuận	27/11/2025	310717 33245 07130 32190 72717 23371 03066 37099 39659 15654 87583 20407 1436 9613 9361 6288 015 33
Đồng Nai	26/11/2025	625018 45737 99924 92028 21808 01948 13566 42182 35554 08748 11868 91402 5604 7707 6711 7785 392 70
Cần Thơ	26/11/2025	693348 63238 10499 41408 83683 08958 61749 14800 21921 70597 86952 38763 6669 7712 8144 0611 434 09
Sóc Trăng	26/11/2025	133228 96775 76630 57267 28666 51935 26428 45372 14813 28371 00141 91187 6003 0717 0487 9723 918 24
Bến Tre	25/11/2025	878960 18227 28662 68325 97674 76209 71412 44203 80434 08903 48825 17856 9891 2734 9229 1962 845 08
Vũng Tàu	25/11/2025	017030 14093 90120 88478 52120 91909 34755 05287 58595 75737 71356 89167 4639 9781 1002 5649 894 75
Bạc Liêu	25/11/2025	525400 75783 00029 56303 09000 78348 87227 95755 96345 86739 37091 67561 9598 3345 0240 2169 407 80
TP.HCM	24/11/2025	392530 25908 39707 16799 21296 53034 40706 25967 60778 06927 46105 81598 2788 8901 1401 3332 855 40
Đồng Tháp	24/11/2025	566862 66193 65950 37474 06404 12848 00813 69376 70511 01459 94308 04379 4326 8473 0907 9291 044 52
Cà Mau	24/11/2025	954123 40159 02727 34833 27899 36844 22100 22855 33327 18430 76235 27795 0731 6590 6888 4374 794 36
Tiền Giang	23/11/2025	996357 39908 96194 96184 33447 72163 20982 12059 55617 65098 94422 64949 7245 3602 7327 2892 068 33
Kiên Giang	23/11/2025	662106 83313 47962 74203 70397 93254 03026 55271 41119 58359 10568 56857 6939 8879 7071 0927 822 26
Đà Lạt	23/11/2025	346573 80845 34749 10819 71771 98411 03919 06294 77797 87901 14801 47285 7099 0165 0935 4730 559 03
TP.HCM	22/11/2025	364551 29518 87729 86235 29185 43839 70628 01994 72036 34890 27117 66347 0213 3034 1925 5293 441 48
Long An	22/11/2025	480092 63271 25691 06406 17965 71769 47079 92856 14841 10568 87423 47753 7330 6732 8060 7433 924 23
Bình Phước	22/11/2025	144416 81364 23793 93188 66418 00903 46456 93885 97211 51643 62708 31559 6030 6023 2463 5767 180 44
Hậu Giang	22/11/2025	387298 14297 33205 34570 69582 36969 58462 55508 18431 25806 65691 25632 5536 1568 7458 0363 961 87
Vĩnh Long	21/11/2025	361844 73791 04507 99929 48324 99043 17780 78926 43651 44542 30352 31509 7855 5098 7769 8142 316 31
Bình Dương	21/11/2025	307676 55506 93046 17605 82729 84319 76821 67312 13727 31868 91792 76945 8068 9004 0304 1890 885 38
Trà Vinh	21/11/2025	983640 45961 27907 61283 14211 12540 17546 48469 42950 80966 84475 75260 3081 1252 1494 9293 217 13
Tây Ninh	20/11/2025	355957 21896 51853 55657 08825 81004 29425 09224 23053 47104 88586 47319 8170 7692 8703 0880 748 91
An Giang	20/11/2025	013309 03817 43444 50725 81474 50071 97982 65935 48908 58621 44392 04362 8210 5986 8366 1831 769 10
Bình Thuận	20/11/2025	289313 70632 18546 04898 28660 77990 54268 21090 14797 65002 63347 99617 4712 6691 5322 6210 280 70
Đồng Nai	19/11/2025	300167 14332 03936 69553 31723 97617 54133 96888 41173 98427 32652 05180 1874 8170 4154 9871 502 53
Cần Thơ	19/11/2025	646960 31978 24485 34068 81794 27967 85080 66221 05576 79496 31437 42798 5255 4352 5574 7489 245 38
Sóc Trăng	19/11/2025	380451 26970 57832 76817 12755 23494 98624 45390 00280 34581 22722 23061 3158 6810 1413 2149 973 45
Bến Tre	18/11/2025	791950 05365 52556 83970 67632 78288 66218 49699 73806 00776 79661 91556 7811 4395 0478 8472 611 53
Vũng Tàu	18/11/2025	678017 75165 20937 61784 50041 43557 73093 72270 19295 75448 51277 20344 9653 6344 2707 4196 327 89
Bạc Liêu	18/11/2025	866098 25146 47316 06233 17823 14562 64416 16143 58040 95803 32716 14944 0069 4741 2548 2086 035 01
TP.HCM	17/11/2025	998227 29546 56216 72931 46224 47136 36090 96461 33717 63317 10134 85124 3065 0430 4787 1780 054 62
Đồng Tháp	17/11/2025	318592 55674 98724 87477 74202 21182 07946 74543 91621 58504 92792 14608 4808 3558 8256 5985 817 05
Cà Mau	17/11/2025	794185 51321 17751 09713 92359 30706 66270 78489 39996 92562 62232 73911 0077 0319 1645 0733 176 09
Tiền Giang	16/11/2025	840922 88113 52722 76077 96974 58393 54166 53837 62206 72043 39192 49880 3865 6073 0105 7655 888 38
Kiên Giang	16/11/2025	709244 54269 05828 85476 78911 03089 21479 59926 32431 91694 54527 15471 4404 9668 0822 0800 400 27
Đà Lạt	16/11/2025	401727 02078 35668 03032 11011 04701 80868 89087 42230 52034 16377 40867 6033 9109 0453 0963 922 09
TP.HCM	15/11/2025	112150 89284 30942 03348 18920 13800 42129 33293 00272 44269 07364 26540 6402 5887 2716 3269 904 37
Long An	15/11/2025	773402 87605 86417 42651 83861 67766 08392 20457 57760 49691 91795 89484 8587 1318 9870 7472 160 08
Bình Phước	15/11/2025	725061 38838 43548 52675 96496 33643 76450 17924 93323 93785 23000 48267 7163 6134 7726 1871 292 83
Hậu Giang	15/11/2025	530705 74070 60162 09603 49436 97443 63752 52527 19547 70264 62968 91888 8976 1390 2598 9624 208 45
Vĩnh Long	14/11/2025	231890 26721 69656 08197 74894 58014 25753 32122 85182 56030 92570 29102 7343 3792 3032 2597 588 58
Bình Dương	14/11/2025	411356 25629 30483 67347 77553 35044 08234 64708 43322 92690 30128 72381 2876 5807 3691 3589 386 94
Trà Vinh	14/11/2025	247902 56549 34097 95485 41549 43516 02590 47311 12127 04439 83858 10326 7124 0773 9520 7179 655 46
Tây Ninh	13/11/2025	132673 66322 03841 86565 72963 49987 82917 40694 27333 21970 78694 90430 7122 9515 2694 3761 517 51
An Giang	13/11/2025	873614 84502 20984 87148 06606 88255 66412 46098 18074 08175 91122 28720 6946 3577 3888 2113 267 82
Bình Thuận	13/11/2025	119695 07215 10324 04632 44005 52607 24388 06375 21892 73689 93235 48807 6664 9056 0620 9717 655 90
Đồng Nai	12/11/2025	119349 51959 39891 82789 06822 73541 64682 55871 76478 90383 17354 11202 0246 3719 3173 0010 367 52
Cần Thơ	12/11/2025	703947 53461 97990 97723 29271 24392 98395 59247 51921 84242 39187 61855 3576 6671 7106 4660 044 31
Sóc Trăng	12/11/2025	610231 11047 06713 73348 41375 22155 09320 77966 19206 66753 48115 03954 5130 9577 4076 0066 801 04
Bến Tre	11/11/2025	238329 79069 75912 77420 91328 84878 77490 77295 45381 08811 66854 11229 1578 7994 0220 8870 426 37
Vũng Tàu	11/11/2025	627072 48370 01936 46910 64865 24025 82183 38095 63821 30274 72598 22963 1562 5744 1643 8157 544 65
Bạc Liêu	11/11/2025	330256 02145 78466 91304 37374 72126 72471 61695 77782 89002 61907 62019 4024 2540 8935 2115 471 85
TP.HCM	10/11/2025	837009 92841 95173 69540 05881 14231 44852 29190 50078 37646 06789 30671 5064 7264 9320 1812 157 86
Đồng Tháp	10/11/2025	643667 29113 08033 73177 51137 68253 07551 92488 54897 07416 78843 57313 4279 2174 5130 8752 364 79
Cà Mau	10/11/2025	166946 96953 58501 57286 80196 36862 95515 86785 71137 98184 46922 78001 6290 6156 5694 9335 326 87
Tiền Giang	09/11/2025	114282 90833 05722 13842 96772 86299 71705 57094 01101 47149 51758 69317 5337 5966 2164 2120 152 19
Kiên Giang	09/11/2025	507380 42540 38483 12916 89343 11514 60467 29018 46915 46549 84241 60488 6441 1879 5115 4575 049 43
Đà Lạt	09/11/2025	872426 13648 00054 23876 64242 53490 38849 16755 22697 91014 18740 66252 2878 3854 2891 1418 786 86
TP.HCM	08/11/2025	862490 94006 40482 64684 21283 25788 51042 52836 98279 56935 24928 60642 5006 6157 4480 4282 167 18
Long An	08/11/2025	336387 91495 42024 31346 34010 89017 13579 58005 53781 45610 17163 67930 2797 4119 2071 6718 029 25
Bình Phước	08/11/2025	476053 65912 37511 34321 81033 03561 27412 58945 93964 93041 65009 79893 9944 5178 3749 8351 369 85
Hậu Giang	08/11/2025	656340 62005 94773 77094 90943 42100 69124 89196 28444 78451 75753 01753 2373 1314 8106 7426 237 02
Vĩnh Long	07/11/2025	791214 52663 91802 83673 71647 15146 21424 96119 69163 73482 13185 89831 1943 1089 0863 4532 412 36
Bình Dương	07/11/2025	283071 93132 00356 41631 26552 81065 49974 68751 24915 64801 72248 83951 5136 3769 6485 5127 695 56
Trà Vinh	07/11/2025	765683 66216 92785 06582 74766 33952 02404 34348 76139 48078 90827 90829 4974 0131 5451 1784 135 02
Tây Ninh	06/11/2025	790768 83264 67591 07496 77746 68846 95853 85720 00976 87424 14013 32235 5574 3714 9936 8347 460 76
An Giang	06/11/2025	359194 84399 17677 77308 39486 95556 86363 68430 57269 22531 73967 67608 7871 4869 0873 8381 916 99
Bình Thuận	06/11/2025	386608 50822 84870 14129 17393 01449 15184 73484 59961 22730 12342 40439 6527 4289 1691 3539 363 61
Đồng Nai	05/11/2025	767459 22080 88976 20474 86456 92644 98871 76122 57724 71748 04279 11961 8865 9487 5769 1389 961 06
Cần Thơ	05/11/2025	457079 58888 22009 45585 38067 04616 19422 42829 41643 69872 68976 06484 7141 4747 1277 0146 282 76
Sóc Trăng	05/11/2025	539631 69582 08065 72716 53416 31945 32853 24433 42838 81254 43339 66452 1559 9977 8092 3791 319 04
Bến Tre	04/11/2025	094402 45680 38576 19369 80804 69752 90236 56675 44711 91602 23284 63063 6791 6295 6406 6692 979 60
Vũng Tàu	04/11/2025	157236 34567 54750 00592 99132 18613 41703 18040 29744 28090 11043 97900 5483 8262 8312 8437 968 48
Bạc Liêu	04/11/2025	980288 11734 27203 49265 15604 46610 06119 09050 82145 20169 95420 50979 1716 5440 0482 6530 883 28
TP.HCM	03/11/2025	842823 49787 08591 96679 18964 09260 32766 46807 01146 25794 31664 81943 4034 4100 7639 1138 253 50
Đồng Tháp	03/11/2025	159591 27084 20092 89228 55821 65181 64720 45438 61624 15770 88874 70912 5969 0701 2001 7627 740 24
Cà Mau	03/11/2025	338191 11823 35296 76444 73997 07389 08908 87430 79299 46966 23363 07672 0960 8691 0491 7035 659 85
Tiền Giang	02/11/2025	145445 07484 96286 96138 21031 10197 17799 77504 86857 73099 03363 20852 6286 4570 1528 1385 208 87
Kiên Giang	02/11/2025	145989 89226 24059 19367 87850 38417 97126 06209 07161 10905 36124 61405 7112 3255 6918 9899 851 51
Đà Lạt	02/11/2025	685624 59645 57241 16340 64059 37096 64733 68210 92212 41230 80738 79770 9847 3764 4326 6857 612 41
TP.HCM	01/11/2025	425632 26168 22853 17421 04629 68833 28879 38136 75798 63073 34046 79770 3912 0547 1482 8276 050 48
Long An	01/11/2025	313631 99412 62960 51655 68041 88405 19171 40133 41282 59731 77860 82866 0840 9899 4639 8055 789 39
Bình Phước	01/11/2025	539631 29593 91878 48225 18019 97107 44274 61872 23632 23987 78595 42283 8908 5548 3456 9452 557 10
Hậu Giang	01/11/2025	495851 94050 29820 40034 53651 29051 79062 01251 67754 53318 38141 17518 3302 9090 9864 8872 001 22
Vĩnh Long	31/10/2025	930283 62899 87633 93714 97800 61200 27998 11875 35621 46523 26162 28102 9483 1110 8745 5911 306 16
Bình Dương	31/10/2025	553465 11659 63001 32008 48927 56403 96114 03236 46948 16644 58495 70057 1122 5669 5934 6713 605 64
Trà Vinh	31/10/2025	342489 77213 59948 61105 58110 28198 56480 26490 96178 77616 26060 47151 6022 3864 1095 9864 397 91
Tây Ninh	30/10/2025	045224 32931 61431 11564 22236 29828 21038 67916 82569 72430 28831 41836 8150 9219 2090 2331 470 14
An Giang	30/10/2025	227911 30149 18933 89961 11372 56904 44014 72035 91547 38164 13713 21838 9436 4392 7064 6363 707 97
Bình Thuận	30/10/2025	222305 26065 01527 79587 18459 64508 16101 53018 05299 25090 22306 63470 6733 7938 4354 9899 977 68
Đồng Nai	29/10/2025	630038 53665 27823 76069 26565 96063 10557 40008 49401 53672 07061 65540 1486 3969 5356 1840 260 18
Cần Thơ	29/10/2025	634611 79281 01240 81033 07449 14831 34140 83726 10729 18594 59274 69867 8934 8426 3603 6850 524 54
Sóc Trăng	29/10/2025	274359 91232 55879 07555 25167 87151 33046 46615 95554 56501 91036 30836 2640 3244 8110 6035 209 34
Bến Tre	28/10/2025	450066 74172 03225 71749 15020 87914 05295 00678 50795 00149 60652 80093 1937 2190 5939 6513 495 30
Vũng Tàu	28/10/2025	630243 13193 93188 79747 69148 37344 22040 81466 22032 71330 35713 27298 7680 0138 7452 0002 847 03
Bạc Liêu	28/10/2025	314521 13964 09136 01145 72606 09228 11945 18406 04981 16374 93179 24482 5655 4597 7014 6174 030 90
TP.HCM	27/10/2025	586769 80452 96309 57607 21883 35787 14903 86604 34679 21781 21988 14568 4452 8176 7642 5543 661 55
Đồng Tháp	27/10/2025	278861 23241 06755 12352 72835 01398 27476 95501 30066 10357 43231 52664 3369 4061 2003 2254 544 92
Cà Mau	27/10/2025	206663 84271 51268 61758 13636 01239 86908 05703 67553 68535 78280 57693 1339 7656 0847 3101 013 10
Tiền Giang	26/10/2025	351920 98323 89905 70015 17204 18428 41543 05465 52298 89680 89932 98159 6992 8115 4332 8395 388 55
Kiên Giang	26/10/2025	536989 66790 51253 04911 06696 88221 47085 01060 21299 38054 43511 94566 3792 1138 4403 2944 827 96
Đà Lạt	26/10/2025	355080 01337 62307 91919 26373 35442 75049 78436 01354 26943 12928 53790 1961 8213 5668 7280 843 33
TP.HCM	25/10/2025	016855 38816 60342 32663 32110 71662 44287 56886 08893 19288 97699 12813 9617 8804 9443 6823 367 34
Long An	25/10/2025	248337 31867 97731 67412 09385 82914 60057 67506 02322 93910 73621 26764 1310 3998 6791 9123 124 35
Bình Phước	25/10/2025	651817 72311 80178 66706 15666 19063 70030 86050 76598 92289 88371 23818 6400 3295 8514 0850 913 33
Hậu Giang	25/10/2025	408671 38098 06799 59398 61058 82578 97550 61046 61104 13370 16494 29296 5548 8746 0919 0609 091 25
Vĩnh Long	24/10/2025	478354 75411 66196 39829 94618 04500 69205 02371 20163 51905 07846 86094 4398 5858 4925 1590 908 16
Bình Dương	24/10/2025	744050 67097 93148 91993 11348 08323 99669 07901 96241 46181 35490 18183 7411 5948 1808 7674 350 61
Trà Vinh	24/10/2025	941913 46013 61928 76499 74346 24161 17797 88036 76390 14127 91488 12388 2914 7975 0563 4570 448 60
Tây Ninh	23/10/2025	351331 93657 56768 95267 05530 65413 24271 38390 24372 79796 97349 36137 2134 3678 2928 1421 711 52
An Giang	23/10/2025	698838 35266 92333 94341 42655 48711 28217 29874 95550 02886 72687 85421 9951 7912 8955 6227 703 06
Bình Thuận	23/10/2025	214314 70817 75766 67038 23844 76047 69085 00290 75734 51345 84444 20636 9536 8833 2920 1356 254 96
Đồng Nai	22/10/2025	221174 93768 96836 64882 14114 90655 68185 71079 02666 69247 90260 19285 4208 5474 5290 0688 523 85
Cần Thơ	22/10/2025	834441 68664 95336 18784 49787 60651 19569 63094 41357 31534 86209 38583 1239 2748 9078 5689 592 21
Sóc Trăng	22/10/2025	592795 25252 93963 62981 66874 73300 01703 17021 41865 29718 43128 59875 7285 2478 3755 3379 080 39
Bến Tre	21/10/2025	132596 58184 36272 73556 66319 86200 84564 99564 16785 88459 58211 59037 7515 7882 9223 9740 818 34
Vũng Tàu	21/10/2025	170075 54184 48785 07464 74457 03183 04216 48265 64309 31392 67317 79651 4428 7428 3236 0652 922 21
Bạc Liêu	21/10/2025	975779 67705 25097 10288 64960 54408 74405 79895 91527 43705 02983 13127 7698 0892 9952 5120 338 25
TP.HCM	20/10/2025	261504 49726 58660 88183 97831 89650 56620 98366 14642 03043 68914 14933 1417 2411 0972 2006 391 48
Đồng Tháp	20/10/2025	454826 84774 93914 43650 19628 62981 92160 66837 49614 67402 52895 02040 2672 8879 0951 3457 665 74
Cà Mau	20/10/2025	213948 74700 97224 15848 47288 40826 70177 30078 46411 33557 64124 09520 6618 2746 2701 3072 752 02
Tiền Giang	19/10/2025	097059 22687 02192 58720 60684 91042 87214 67639 42626 05477 91709 56269 5222 6779 7777 8701 069 59
Kiên Giang	19/10/2025	375650 26696 15029 29711 67946 81125 67855 74836 26040 97842 39174 82429 6254 6384 0944 1152 529 87
Đà Lạt	19/10/2025	566527 96853 87031 06927 61604 27269 29213 51982 41629 53758 52755 38513 4125 9357 5670 5940 628 48
TP.HCM	18/10/2025	567567 97111 80536 68133 82654 35044 96876 77407 84801 49132 21773 87865 5884 7793 5385 5867 551 49
Long An	18/10/2025	301877 73802 48582 63289 20850 16924 04413 93943 69132 12641 19983 10739 3737 4308 0423 1109 232 41
Bình Phước	18/10/2025	191567 32005 06890 03489 16153 22547 83456 05353 17634 23330 83659 16423 7085 2765 1681 7582 880 19
Hậu Giang	18/10/2025	082000 69495 03592 36955 10569 06439 61854 51578 65371 89214 18946 56165 3127 3674 5474 3139 270 57
Vĩnh Long	17/10/2025	257993 53643 18589 14727 42995 03036 03388 94241 36948 93407 06176 77623 9873 1327 6010 3727 771 89
Bình Dương	17/10/2025	754464 81562 02523 16867 29324 91620 06508 14773 71602 66739 12513 26095 9697 5453 6049 2581 737 04
Trà Vinh	17/10/2025	940509 94999 28214 12339 19181 25580 81001 27273 89663 60041 50120 87505 2662 5066 4216 8000 842 53
Tây Ninh	16/10/2025	722489 13176 39179 79663 18145 48935 02223 92369 29119 53820 04293 38578 4513 3434 4014 2860 108 33
An Giang	16/10/2025	576961 14242 80674 42382 97693 20795 97258 33280 79608 62033 29989 22086 3795 7075 1482 9863 532 69
Bình Thuận	16/10/2025	814132 96629 45210 04157 00162 05792 36754 74179 97581 11766 49558 69932 3658 7568 7268 2083 256 96
Đồng Nai	15/10/2025	011089 82065 78414 85600 70890 95140 59210 38365 13498 04211 15296 55917 5155 0084 3911 7160 723 55
Cần Thơ	15/10/2025	799218 85724 86045 01290 40630 15030 30046 81819 61211 09511 05991 15080 1421 2583 5951 8933 000 25
Sóc Trăng	15/10/2025	832899 96434 97001 27437 07723 25662 00434 56136 00745 67198 69778 13967 1852 3503 4405 2599 449 52
Bến Tre	14/10/2025	040618 19956 34426 00797 10368 12419 03779 03084 99345 80920 90490 46201 5212 8515 1744 6505 665 91
Vũng Tàu	14/10/2025	318696 60584 51065 87576 26775 66910 01916 76884 89574 87046 06183 21106 8292 9631 5873 2217 950 33
Bạc Liêu	14/10/2025	982497 94199 87015 28726 35937 38119 37379 65485 54214 88859 31064 29649 7042 8448 9525 6903 514 29
TP.HCM	13/10/2025	167699 83460 65713 81221 01713 89847 62589 44483 87773 07376 75211 88528 8916 5345 7485 1721 145 23
Đồng Tháp	13/10/2025	748614 48764 87476 48170 41946 17605 48075 34159 16450 99161 76138 72971 1715 5946 6087 2941 119 84
Cà Mau	13/10/2025	884006 79039 70667 59678 01324 65362 34036 46346 17237 30235 27511 63990 2587 5867 4916 7498 534 86
Tiền Giang	12/10/2025	496675 50931 37538 68626 14663 68767 04471 10297 10573 90662 57223 42514 1257 1467 9372 9661 344 30
Kiên Giang	12/10/2025	379880 96877 41934 13973 16947 69038 19472 56809 23585 42959 49735 95369 3797 1518 7786 3597 814 46
Đà Lạt	12/10/2025	615051 68512 68725 81501 92758 35517 70286 76748 25739 74984 68194 19343 3911 5413 5483 0094 244 65
TP.HCM	11/10/2025	688416 25869 83226 61769 37125 85294 49527 56337 33647 38398 51617 24544 4425 9362 7250 4754 900 72
Long An	11/10/2025	110001 68623 80755 46684 28521 22884 12428 56732 15067 09028 03311 20069 0778 8164 5527 7490 840 43
Bình Phước	11/10/2025	792338 05024 55484 93728 62448 55577 87529 79513 55899 74568 56515 20176 8481 3197 3300 1616 788 38
Hậu Giang	11/10/2025	595981 84773 48387 72372 32910 24847 06898 20751 01728 42145 78320 67381 4201 5867 8476 5981 459 70
Vĩnh Long	10/10/2025	562405 56198 12319 07730 70303 48842 11824 83036 55755 71845 45624 87713 3520 4270 9873 5064 559 15
Bình Dương	10/10/2025	885859 43841 52111 18628 11350 22983 97579 40295 78678 97283 82600 43877 6825 8319 8236 9487 251 35
Trà Vinh	10/10/2025	376469 79083 73723 27332 03517 40538 46736 23823 23942 46920 18563 61952 3344 2142 5847 9435 091 23
Tây Ninh	09/10/2025	118795 30824 02992 84309 33041 22542 03880 94591 64249 67228 08830 27645 6409 5504 7032 0328 632 41
An Giang	09/10/2025	042293 02518 49226 03856 04216 00810 02321 00681 51728 24507 58068 96136 8877 5934 7442 3430 884 40
Bình Thuận	09/10/2025	734059 32016 04444 86160 63614 85022 91508 30566 39510 47874 50959 17218 7406 1676 8579 8195 650 30
Đồng Nai	08/10/2025	362384 27650 67139 02879 46143 22031 92017 38627 64467 95366 98264 90798 7893 7494 4642 2782 061 97
Cần Thơ	08/10/2025	046439 12476 51574 77271 75981 19253 11513 31723 94233 11524 52858 25082 3263 9089 1882 5222 133 84
Sóc Trăng	08/10/2025	015449 61659 80477 85799 10233 28186 27457 57376 91792 06144 19584 65940 9304 1720 1475 0693 998 27
Bến Tre	07/10/2025	973204 36753 02305 44434 83849 33992 71280 49952 40050 08825 65573 60215 5289 7631 6028 0874 531 93
Vũng Tàu	07/10/2025	272674 31978 57881 63423 94810 25778 27337 99449 12027 34457 72732 70485 7611 4506 7887 1911 012 04
Bạc Liêu	07/10/2025	764660 63437 32223 11623 80046 48036 36321 14836 99295 39293 27923 00945 5683 2400 6483 8307 440 18
TP.HCM	06/10/2025	092612 47917 51868 06066 42180 22894 40118 99026 54423 41262 53805 04941 2716 1571 9770 9198 401 82
Đồng Tháp	06/10/2025	031115 52038 38435 86807 50903 75874 77564 06773 44162 41237 08626 36238 5523 6541 6332 0478 613 92
Cà Mau	06/10/2025	552592 01358 19035 23074 76667 55432 27024 24332 25740 32018 77661 21126 6892 7089 9009 9493 766 22
Tiền Giang	05/10/2025	715049 44893 58100 16691 58845 63101 23045 41799 83202 58163 36176 53942 4453 0318 8627 4373 017 81
Kiên Giang	05/10/2025	050364 63328 35248 45310 32068 27946 58187 51642 70858 18479 47610 61399 8868 3491 8924 7866 473 18
Đà Lạt	05/10/2025	145555 39002 94238 43759 53045 80944 75993 07773 43387 26773 49916 36313 3879 8110 6491 9342 973 43
`,j3=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],m8=18,v8=[{tên:"Tiền Giang",thứ:0},{tên:"Kiên Giang",thứ:0},{tên:"Đà Lạt",thứ:0},{tên:"TP.HCM",thứ:1},{tên:"Đồng Tháp",thứ:1},{tên:"Cà Mau",thứ:1},{tên:"Bến Tre",thứ:2},{tên:"Vũng Tàu",thứ:2},{tên:"Bạc Liêu",thứ:2},{tên:"Đồng Nai",thứ:3},{tên:"Cần Thơ",thứ:3},{tên:"Sóc Trăng",thứ:3},{tên:"Tây Ninh",thứ:4},{tên:"An Giang",thứ:4},{tên:"Bình Thuận",thứ:4},{tên:"Vĩnh Long",thứ:5},{tên:"Bình Dương",thứ:5},{tên:"Trà Vinh",thứ:5},{tên:"TP.HCM",thứ:6},{tên:"Long An",thứ:6},{tên:"Bình Phước",thứ:6},{tên:"Hậu Giang",thứ:6}],JS="https://docs.google.com/spreadsheets/d/e/2PACX-1vSKJmxPPwbuVU8u8sGZp-Q7Mt5LX5yprCZIaT8LGom1NyuWIm5j2NjOnr6KZbj-9nRQKAPcDFkTeR8a/pub?gid=809052019&single=true&output=csv",XS=t=>[t.getDate(),t.getMonth()+1,t.getFullYear()].map((n,r)=>String(n).padStart(r===2?4:2,"0")).join("/"),QS=t=>{const[n,r,s]=t.split("/").map(Number);return new Date(s,r-1,n)},tb=t=>new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay());function Pu(t){const n=new Map;let r=0;for(const o of t.split(`
`)){if(!o.trim()||o.startsWith("#"))continue;const[l,a,f=""]=o.split(/[\t,]/).map(y=>y.trim()),h=f.split(/\s+/).filter(y=>y!=="");if(h.length!==m8||!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(a??""))continue;r++;const p=QS(a),v=tb(p).getTime();n.has(v)||n.set(v,new Map),n.get(v).set(`${l}|${p.getDay()}`,{ngày:a,các_lô:h})}return{các_tuần:[...n.entries()].sort(([o],[l])=>l-o).map(([o,l])=>({nhãn:XS(new Date(o)),các_tỉnh:v8.map(({tên:a,thứ:f})=>{const h=l.get(`${a}|${f}`);return{tên:a,thứ:f,ngày:(h==null?void 0:h.ngày)??"",hai_số_cuối:h?h.các_lô.map(p=>p.slice(-2)):[]}})})),số_dòng:r}}function nb(){return Pu(ZS).các_tuần}async function eb(){const t=await fetch(JS,{signal:AbortSignal.timeout(1e4)});if(!t.ok)throw new Error(`Không tải được Google Sheet (${t.status})`);const{các_tuần:n,số_dòng:r}=Pu(await t.text());if(r===0)throw new Error("Google Sheet không có dòng dữ liệu hợp lệ");return n}const rb={class:"loto"},ib={class:"bộ-lọc"},sb=["onClick"],ob=["onClick"],ub={class:"thống-kê"},lb={key:0,class:"thống-kê"},ab={key:0},cb={key:1,class:"loto-scroll"},fb={key:2,class:"loto-scroll"},hb={key:3},_b=["max"],db={class:"loto-scroll"},gb={key:4},pb={class:"loto-scroll"},mb=["onClick"],vb={key:5,class:"loto-scroll"},us="loto_số_đã_lưu",S5=24*60*60*1e3,ls=33e4,as=8e4,yb=x4({__name:"LotoView",setup(t){const n=j0(nb()),r=O2(()=>n.value),s=j0("đang tải");Ws(async()=>{try{n.value=await eb(),s.value="google sheet"}catch{s.value="dự phòng"}});const o=j0(83),l=O2(()=>Math.min(99,Math.max(0,Math.trunc(Number(o.value)||0))).toString().padStart(2,"0")),f=j0((()=>{try{const G=JSON.parse(localStorage.getItem(us)??"[]");return Array.isArray(G)?G.filter(L=>typeof L=="string"):[]}catch{return[]}})()),h=()=>{try{localStorage.setItem(us,JSON.stringify(f.value))}catch{}},p=()=>{f.value.includes(l.value)||(f.value.push(l.value),h())},v=G=>{f.value=f.value.filter(L=>L!==G),h()},y=G=>{o.value=Number(G)},S=j0("ngày"),k=G=>G.filter(L=>L===l.value).length,q=G=>{const[L,H,h0]=G.split("/").map(Number);return Date.UTC(h0,H-1,L)},$=O2(()=>{const G=new Map;for(const L of r.value)for(const H of L.các_tỉnh){if(!H.ngày)continue;const h0=q(H.ngày);G.set(h0,(G.get(h0)??0)+k(H.hai_số_cuối))}return G}),t0=O2(()=>{const G=[...$.value.keys()].sort((C0,V0)=>C0-V0);let L={số_ngày:0,từ:0,đến:0},H={số_ngày:0,từ:0,đến:0},h0=0;for(const C0 of G)$.value.get(C0)?H={số_ngày:0,từ:0,đến:0}:(H=H.số_ngày>0&&C0-h0===S5?{...H,số_ngày:H.số_ngày+1,đến:C0}:{số_ngày:1,từ:C0,đến:C0},H.số_ngày>L.số_ngày&&(L=H)),h0=C0;const L0=G[G.length-1];return{dài_nhất:L,hiện_tại:H.đến===L0?H:{số_ngày:0,từ:0,đến:0}}}),r0=G=>{const L=new Date(G);return[L.getUTCDate(),L.getUTCMonth()+1,L.getUTCFullYear()].map((H,h0)=>String(H).padStart(h0===2?4:2,"0")).join("/")},J=O2(()=>{const G=[...$.value.keys()].sort((Q,y0)=>Q-y0);if(!G.length)return null;const L=G[G.length-1]+S5,H=new Date(L).getUTCDay(),h0=v8.filter(Q=>Q.thứ===H).length,L0=1-Math.pow(.99,m8*h0);let C0=0,V0=0,k2=0,H2=0;const u2=t0.value.hiện_tại.số_ngày;let R=0,u0=0;for(const Q of G){const y0=($.value.get(Q)??0)>0;new Date(Q).getUTCDay()===H&&(C0++,y0&&V0++);const z0=Q-u0===S5;u2>0&&z0&&R>=u2&&(k2++,y0&&H2++),R=y0?0:z0?R+1:1,u0=Q}return{mốc_tiếp:L,thứ:H,số_tỉnh:h0,lý_thuyết:L0,cùng_thứ:C0,cùng_thứ_có:V0,sau_chuỗi:k2,sau_chuỗi_có:H2,chuỗi_cần:u2,tổng_ngày:G.length,tổng_có:G.filter(Q=>($.value.get(Q)??0)>0).length}}),c0=j0(4),f0=O2(()=>r.value.filter(G=>G.các_tỉnh.every(L=>L.ngày)).map(G=>{const L=G.các_tỉnh.reduce((H,h0)=>H+k(h0.hai_số_cuối),0);return{nhãn:G.nhãn,số_lần:L,lãi_lỗ:L*as-ls}})),a0=O2(()=>Math.min(Math.max(1,Math.trunc(Number(c0.value)||1)),Math.max(1,f0.value.length))),A0=O2(()=>{const G=f0.value.slice(0,a0.value);let L=0;return{các_dòng:[...G].reverse().map(h0=>(L+=h0.lãi_lỗ,{...h0,lũy_kế:L})).reverse(),tổng_lần:G.reduce((h0,L0)=>h0+L0.số_lần,0),tổng_lãi_lỗ:L}}),M0=O2(()=>{const G=[...f0.value].reverse(),L=a0.value;let H=0,h0=0,L0=0;for(let C0=0;C0+L<=G.length;C0++){const V0=G.slice(C0,C0+L).reduce((k2,H2)=>k2+H2.lãi_lỗ,0);H++,L0+=V0,V0>0&&h0++}return{số_cửa_sổ:H,số_có_lãi:h0,trung_bình:H?L0/H:0}}),U0=G=>`${G>0?"+":""}${Math.round(G/1e3).toLocaleString("vi-VN")}k`,Q0=(G,L)=>L>0?`${(G/L*100).toFixed(1)}%`:"—",f2=j0(10),M2=O2(()=>{const G=new Map;for(const L of r.value)for(const H of L.các_tỉnh){if(!H.ngày)continue;const h0=q(H.ngày),L0=G.get(h0)??new Set;H.hai_số_cuối.forEach(C0=>L0.add(C0)),G.set(h0,L0)}return G}),I2=O2(()=>{const G=[...M2.value.keys()].sort((C0,V0)=>V0-C0);if(!G.length)return[];const L=Array.from({length:100},(C0,V0)=>String(V0).padStart(2,"0")).map(C0=>{var H2;let V0=0,k2=0;for(let u2=0;u2<G.length&&!(u2>0&&G[u2-1]-G[u2]!==S5);u2++){if((H2=M2.value.get(G[u2]))!=null&&H2.has(C0)){k2=G[u2];break}V0++}return{số:C0,số_ngày:V0,lần_ra_gần_nhất:k2}});L.sort((C0,V0)=>V0.số_ngày-C0.số_ngày||C0.số.localeCompare(V0.số));const H=Math.min(100,Math.max(1,Math.trunc(Number(f2.value)||1))),h0=L[H-1].số_ngày;let L0=0;return L.filter(C0=>C0.số_ngày>=h0).map((C0,V0,k2)=>((V0===0||C0.số_ngày!==k2[V0-1].số_ngày)&&(L0=V0+1),{...C0,hạng:L0}))}),j2=O2(()=>r.value.map(G=>({nhãn:G.nhãn,các_ngày:j3.map((L,H)=>{const h0=G.các_tỉnh.filter(V0=>V0.thứ===H&&V0.ngày);if(!h0.length)return null;let L0=0;const C0=[];for(const V0 of h0){const k2=k(V0.hai_số_cuối);L0+=k2,k2>0&&C0.push(`${V0.tên} (${k2})`)}return{ngày:h0[0].ngày,tổng:L0,chi_tiết:C0}})}))),M1=G=>G>=5?"màu-xanh":G===4?"màu-vàng":"màu-đỏ",v1=O2(()=>r.value.map(G=>{let L=0;const H=[];for(const h0 of G.các_tỉnh){const L0=k(h0.hai_số_cuối);L+=L0,L0>0&&H.push(`${j3[h0.thứ]} ${h0.tên} (${L0})`)}return{nhãn:G.nhãn,tổng:L,chi_tiết:H}})),D2=O2(()=>r.value.map(G=>({nhãn:G.nhãn,số_lượng:G.các_tỉnh.map(L=>L.hai_số_cuối.length?k(L.hai_số_cuối):null)})));return(G,L)=>(v0(),b0("div",rb,[L[27]||(L[27]=M("h2",null,"Loto 22 tỉnh",-1)),M("small",null,[L[4]||(L[4]=m0(" Nguồn dữ liệu: ")),s.value==="đang tải"?(v0(),b0($0,{key:0},[m0("đang cập nhật từ Google Sheet...")],64)):s.value==="google sheet"?(v0(),b0($0,{key:1},[m0("Google Sheet (mới nhất)")],64)):(v0(),b0($0,{key:2},[m0("dữ liệu có sẵn trong ứng dụng (không tải được Google Sheet)")],64))]),M("div",ib,[M("label",null,[L[5]||(L[5]=m0(" Số cần lọc (0–99): ")),d2(M("input",{"onUpdate:modelValue":L[0]||(L[0]=H=>o.value=H),type:"number",min:"0",max:"99"},null,512),[[X2,o.value,void 0,{number:!0}]])]),M("button",{type:"button",onClick:p},"Save"),(v0(!0),b0($0,null,q2(f.value,H=>(v0(),b0("span",{key:H,class:"số-đã-lưu"},[M("button",{type:"button",class:"chọn",onClick:h0=>y(H)},s0(H),9,sb),M("button",{type:"button",class:"xoá",title:"Xoá",onClick:h0=>v(H)},"X",8,ob)]))),128))]),M("p",ub,[m0(" Số "+s0(l.value)+" không xuất hiện liên tiếp lâu nhất: ",1),t0.value.dài_nhất.số_ngày>0?(v0(),b0($0,{key:0},[M("b",null,s0(t0.value.dài_nhất.số_ngày)+" ngày",1),m0(" ("+s0(r0(t0.value.dài_nhất.từ))+" – "+s0(r0(t0.value.dài_nhất.đến))+"). ",1)],64)):(v0(),b0($0,{key:1},[m0("chưa có ngày nào.")],64)),L[6]||(L[6]=m0(" Hiện tại: ")),M("b",null,s0(t0.value.hiện_tại.số_ngày)+" ngày",1),L[7]||(L[7]=m0(". "))]),J.value?(v0(),b0("div",lb,[M("p",null,[L[8]||(L[8]=m0(" Ngày kế tiếp: ")),M("b",null,s0(T2(j3)[J.value.thứ])+", "+s0(r0(J.value.mốc_tiếp)),1),m0(" ("+s0(J.value.số_tỉnh)+" tỉnh quay). Khả năng số "+s0(l.value)+" xuất hiện ít nhất 1 lần: ",1)]),M("ul",null,[M("li",null,[L[9]||(L[9]=m0(" Lý thuyết: ")),M("b",null,s0(Q0(J.value.lý_thuyết,1)),1),m0(" (mỗi lô có xác suất 1/100, ngày có "+s0(J.value.số_tỉnh*T2(m8))+" lô). ",1)]),M("li",null,[L[10]||(L[10]=m0(" Thực tế mọi ngày: ")),M("b",null,s0(Q0(J.value.tổng_có,J.value.tổng_ngày)),1),m0(" ("+s0(J.value.tổng_có)+"/"+s0(J.value.tổng_ngày)+" ngày). ",1)]),M("li",null,[L[11]||(L[11]=m0(" Thực tế cùng thứ: ")),M("b",null,s0(Q0(J.value.cùng_thứ_có,J.value.cùng_thứ)),1),m0(" ("+s0(J.value.cùng_thứ_có)+"/"+s0(J.value.cùng_thứ)+" ngày). ",1)]),J.value.chuỗi_cần>0?(v0(),b0("li",ab,[m0(" Sau khi đã vắng từ "+s0(J.value.chuỗi_cần)+" ngày trở lên: ",1),M("b",null,s0(Q0(J.value.sau_chuỗi_có,J.value.sau_chuỗi)),1),m0(" ("+s0(J.value.sau_chuỗi_có)+"/"+s0(J.value.sau_chuỗi)+" lần). ",1)])):On("",!0)]),L[12]||(L[12]=M("small",null,"Các kỳ xổ số độc lập nhau, nên đây chỉ là số liệu tham khảo, không đảm bảo kết quả.",-1))])):On("",!0),M("label",null,[L[14]||(L[14]=m0(" Xem: ")),d2(M("select",{"onUpdate:modelValue":L[1]||(L[1]=H=>S.value=H)},L[13]||(L[13]=[Ip('<option value="ngày" data-v-8a43fa5f>Theo ngày</option><option value="tỉnh" data-v-8a43fa5f>Theo tỉnh</option><option value="tuần" data-v-8a43fa5f>Theo tuần</option><option value="dài hạn" data-v-8a43fa5f>Dài hạn</option><option value="lâu chưa ra" data-v-8a43fa5f>Số lâu chưa ra</option>',5)]),512),[[sn,S.value]])]),S.value==="ngày"?(v0(),b0("div",cb,[M("table",null,[M("thead",null,[M("tr",null,[L[15]||(L[15]=M("th",null,"Tuần",-1)),(v0(!0),b0($0,null,q2(T2(j3),(H,h0)=>(v0(),b0("th",{key:h0},s0(H),1))),128))])]),M("tbody",null,[(v0(!0),b0($0,null,q2(j2.value,H=>(v0(),b0("tr",{key:H.nhãn},[M("th",null,s0(H.nhãn),1),(v0(!0),b0($0,null,q2(H.các_ngày,(h0,L0)=>(v0(),b0("td",{key:L0,class:ht({trúng:h0==null?void 0:h0.tổng})},[h0?(v0(),b0($0,{key:1},[M("small",null,s0(h0.ngày),1),M("div",null,s0(h0.tổng>0?`✓ ${h0.tổng}`:"✗"),1),M("small",null,s0(h0.chi_tiết.join(", ")),1)],64)):(v0(),b0($0,{key:0},[m0("—")],64))],2))),128))]))),128))])])])):S.value==="tuần"?(v0(),b0("div",fb,[M("table",null,[L[16]||(L[16]=M("thead",null,[M("tr",null,[M("th",null,"Tuần (từ Chủ nhật)"),M("th",null,"Kết quả"),M("th",null,"Chi tiết")])],-1)),M("tbody",null,[(v0(!0),b0($0,null,q2(v1.value,H=>(v0(),b0("tr",{key:H.nhãn},[M("th",null,s0(H.nhãn),1),M("td",{class:ht(M1(H.tổng))},s0(H.tổng>0?`✓ ${H.tổng}`:"✗"),3),M("td",null,s0(H.chi_tiết.join(", ")),1)]))),128))])])])):S.value==="dài hạn"?(v0(),b0("div",hb,[M("label",null,[L[17]||(L[17]=m0(" Số tuần: ")),d2(M("input",{"onUpdate:modelValue":L[2]||(L[2]=H=>c0.value=H),type:"number",min:"1",max:f0.value.length},null,8,_b),[[X2,c0.value,void 0,{number:!0}]])]),M("p",null," Mỗi tuần chi "+s0(U0(ls).replace("+",""))+", mỗi lần trúng nhận "+s0(U0(as).replace("+",""))+". Chỉ tính tuần đủ dữ liệu. ",1),M("p",null,[m0(" Số "+s0(l.value)+" trong "+s0(a0.value)+" tuần gần nhất: ",1),M("b",null,s0(A0.value.tổng_lần)+" lần",1),L[18]||(L[18]=m0(", tổng ")),M("b",{class:ht(A0.value.tổng_lãi_lỗ>=0?"lãi":"lỗ")},s0(U0(A0.value.tổng_lãi_lỗ)),3)]),M("p",null,[m0(" Trong lịch sử, mọi khoảng "+s0(a0.value)+" tuần liên tiếp: ",1),M("b",null,s0(M0.value.số_có_lãi)+"/"+s0(M0.value.số_cửa_sổ),1),m0(" khoảng có lãi ("+s0(Q0(M0.value.số_có_lãi,M0.value.số_cửa_sổ))+"), trung bình ",1),M("b",null,s0(U0(M0.value.trung_bình)),1),L[19]||(L[19]=m0(" mỗi khoảng. "))]),M("div",db,[M("table",null,[L[20]||(L[20]=M("thead",null,[M("tr",null,[M("th",null,"Tuần (từ Chủ nhật)"),M("th",null,"Số lần"),M("th",null,"Lãi/lỗ tuần"),M("th",null,"Lũy kế")])],-1)),M("tbody",null,[(v0(!0),b0($0,null,q2(A0.value.các_dòng,H=>(v0(),b0("tr",{key:H.nhãn},[M("th",null,s0(H.nhãn),1),M("td",null,s0(H.số_lần),1),M("td",{class:ht(H.lãi_lỗ>=0?"lãi":"lỗ")},s0(U0(H.lãi_lỗ)),3),M("td",{class:ht(H.lũy_kế>=0?"lãi":"lỗ")},s0(U0(H.lũy_kế)),3)]))),128))])])])])):S.value==="lâu chưa ra"?(v0(),b0("div",gb,[M("label",null,[L[21]||(L[21]=m0(" Top: ")),d2(M("input",{"onUpdate:modelValue":L[3]||(L[3]=H=>f2.value=H),type:"number",min:"1",max:"100"},null,512),[[X2,f2.value,void 0,{number:!0}]])]),M("p",null,[L[22]||(L[22]=m0(" Tổng cộng ")),M("b",null,s0(I2.value.length)+" số",1),L[23]||(L[23]=m0(". Số ngày liên tiếp chưa ra tính đến ngày mới nhất; số đồng hạng ở cuối top đều được hiển thị. Bấm vào một số để xem thống kê của số đó. "))]),M("div",pb,[M("table",null,[L[24]||(L[24]=M("thead",null,[M("tr",null,[M("th",null,"STT"),M("th",null,"Hạng"),M("th",null,"Số"),M("th",null,"Số ngày chưa ra"),M("th",null,"Lần ra gần nhất")])],-1)),M("tbody",null,[(v0(!0),b0($0,null,q2(I2.value,(H,h0)=>(v0(),b0("tr",{key:H.số,class:"dòng-chọn",onClick:L0=>y(H.số)},[M("td",null,s0(h0+1),1),M("th",null,s0(H.hạng),1),M("td",null,s0(H.số),1),M("td",null,s0(H.số_ngày),1),M("td",null,s0(H.lần_ra_gần_nhất?r0(H.lần_ra_gần_nhất):"chưa có trong dữ liệu"),1)],8,mb))),128))])])]),L[25]||(L[25]=M("small",null,"Các kỳ xổ số độc lập nhau, số vắng lâu không có nghĩa là sắp ra.",-1))])):(v0(),b0("div",vb,[M("table",null,[M("thead",null,[M("tr",null,[L[26]||(L[26]=M("th",null,"Tuần",-1)),(v0(!0),b0($0,null,q2(T2(v8),(H,h0)=>(v0(),b0("th",{key:h0,class:ht(`thứ-${H.thứ}`)},[M("div",null,s0(T2(j3)[H.thứ]),1),M("div",null,s0(H.tên),1)],2))),128))])]),M("tbody",null,[(v0(!0),b0($0,null,q2(D2.value,H=>(v0(),b0("tr",{key:H.nhãn},[M("th",null,s0(H.nhãn),1),(v0(!0),b0($0,null,q2(H.số_lượng,(h0,L0)=>(v0(),b0("td",{key:L0,class:ht({trúng:h0})},[h0===null?(v0(),b0($0,{key:0},[m0("—")],64)):h0>0?(v0(),b0($0,{key:1},[m0("✓ "+s0(h0),1)],64)):(v0(),b0($0,{key:2},[m0("✗")],64))],2))),128))]))),128))])])]))]))}}),Tb=(t,n)=>{const r=t.__vccOpts||t;for(const[s,o]of n)r[s]=o;return r},xb=Tb(yb,[["__scopeId","data-v-8a43fa5f"]]),wb=Tv({history:Zm("/lote/"),routes:[{path:"/",name:"home",component:zS},{path:"/loto",name:"loto",component:xb}]}),cs=mm(wv);Ew().finally(()=>{cs.use(wb),cs.mount("#app")})});export default Sb();
