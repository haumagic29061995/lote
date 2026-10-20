var Fd=Object.defineProperty;var Wd=(t,n,r)=>n in t?Fd(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var Ud=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var v2=(t,n,r)=>Wd(t,typeof n!="symbol"?n+"":n,r);var eb=Ud((ib,P5)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function m8(t){const n=Object.create(null);for(const r of t.split(","))n[r]=1;return r=>r in n}const b2={},u3=[],_t=()=>{},qd=()=>!1,V5=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),v8=t=>t.startsWith("onUpdate:"),t1=Object.assign,y8=(t,n)=>{const r=t.indexOf(n);r>-1&&t.splice(r,1)},Kd=Object.prototype.hasOwnProperty,d2=(t,n)=>Kd.call(t,n),B0=Array.isArray,l3=t=>p4(t)==="[object Map]",y3=t=>p4(t)==="[object Set]",Er=t=>p4(t)==="[object Date]",$0=t=>typeof t=="function",K2=t=>typeof t=="string",dt=t=>typeof t=="symbol",k2=t=>t!==null&&typeof t=="object",rs=t=>(k2(t)||$0(t))&&$0(t.then)&&$0(t.catch),is=Object.prototype.toString,p4=t=>is.call(t),jd=t=>p4(t).slice(8,-1),ss=t=>p4(t)==="[object Object]",T8=t=>K2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,z3=m8(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),F5=t=>{const n=Object.create(null);return r=>n[r]||(n[r]=t(r))},zd=/-(\w)/g,U1=F5(t=>t.replace(zd,(n,r)=>r?r.toUpperCase():"")),Zd=/\B([A-Z])/g,Bn=F5(t=>t.replace(Zd,"-$1").toLowerCase()),W5=F5(t=>t.charAt(0).toUpperCase()+t.slice(1)),Se=F5(t=>t?`on${W5(t)}`:""),cn=(t,n)=>!Object.is(t,n),T5=(t,...n)=>{for(let r=0;r<t.length;r++)t[r](...n)},os=(t,n,r,s=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:s,value:r})},D5=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Nr;const U5=()=>Nr||(Nr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function x8(t){if(B0(t)){const n={};for(let r=0;r<t.length;r++){const s=t[r],o=K2(s)?tg(s):x8(s);if(o)for(const l in o)n[l]=o[l]}return n}else if(K2(t)||k2(t))return t}const Jd=/;(?![^(]*\))/g,Xd=/:([^]+)/,Qd=/\/\*[^]*?\*\//g;function tg(t){const n={};return t.replace(Qd,"").split(Jd).forEach(r=>{if(r){const s=r.split(Xd);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function ct(t){let n="";if(K2(t))n=t;else if(B0(t))for(let r=0;r<t.length;r++){const s=ct(t[r]);s&&(n+=s+" ")}else if(k2(t))for(const r in t)t[r]&&(n+=r+" ");return n.trim()}const ng="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eg=m8(ng);function us(t){return!!t||t===""}function rg(t,n){if(t.length!==n.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=m4(t[s],n[s]);return r}function m4(t,n){if(t===n)return!0;let r=Er(t),s=Er(n);if(r||s)return r&&s?t.getTime()===n.getTime():!1;if(r=dt(t),s=dt(n),r||s)return t===n;if(r=B0(t),s=B0(n),r||s)return r&&s?rg(t,n):!1;if(r=k2(t),s=k2(n),r||s){if(!r||!s)return!1;const o=Object.keys(t).length,l=Object.keys(n).length;if(o!==l)return!1;for(const c in t){const f=t.hasOwnProperty(c),h=n.hasOwnProperty(c);if(f&&!h||!f&&h||!m4(t[c],n[c]))return!1}}return String(t)===String(n)}function w8(t,n){return t.findIndex(r=>m4(r,n))}const ls=t=>!!(t&&t.__v_isRef===!0),o0=t=>K2(t)?t:t==null?"":B0(t)||k2(t)&&(t.toString===is||!$0(t.toString))?ls(t)?o0(t.value):JSON.stringify(t,as,2):String(t),as=(t,n)=>ls(n)?as(t,n.value):l3(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((r,[s,o],l)=>(r[be(s,l)+" =>"]=o,r),{})}:y3(n)?{[`Set(${n.size})`]:[...n.values()].map(r=>be(r))}:dt(n)?be(n):k2(n)&&!B0(n)&&!ss(n)?String(n):n,be=(t,n="")=>{var r;return dt(t)?`Symbol(${(r=t.description)!=null?r:n})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let A1;class ig{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=A1,!n&&A1&&(this.index=(A1.scopes||(A1.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,r;if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].pause();for(n=0,r=this.effects.length;n<r;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,r;if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].resume();for(n=0,r=this.effects.length;n<r;n++)this.effects[n].resume()}}run(n){if(this._active){const r=A1;try{return A1=this,n()}finally{A1=r}}}on(){A1=this}off(){A1=this.parent}stop(n){if(this._active){this._active=!1;let r,s;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].stop();for(this.effects.length=0,r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function sg(){return A1}let C2;const Me=new WeakSet;class cs{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A1&&A1.active&&A1.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Me.has(this)&&(Me.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rr(this),_s(this);const n=C2,r=Q1;C2=this,Q1=!0;try{return this.fn()}finally{ds(this),C2=n,Q1=r,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)M8(n);this.deps=this.depsTail=void 0,Rr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Me.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ke(this)&&this.run()}get dirty(){return Ke(this)}}let fs=0,Z3,J3;function hs(t,n=!1){if(t.flags|=8,n){t.next=J3,J3=t;return}t.next=Z3,Z3=t}function S8(){fs++}function b8(){if(--fs>0)return;if(J3){let n=J3;for(J3=void 0;n;){const r=n.next;n.next=void 0,n.flags&=-9,n=r}}let t;for(;Z3;){let n=Z3;for(Z3=void 0;n;){const r=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){t||(t=s)}n=r}}if(t)throw t}function _s(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function ds(t){let n,r=t.depsTail,s=r;for(;s;){const o=s.prevDep;s.version===-1?(s===r&&(r=o),M8(s),og(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}t.deps=n,t.depsTail=r}function Ke(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(gs(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function gs(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===i4))return;t.globalVersion=i4;const n=t.dep;if(t.flags|=2,n.version>0&&!t.isSSR&&t.deps&&!Ke(t)){t.flags&=-3;return}const r=C2,s=Q1;C2=t,Q1=!0;try{_s(t);const o=t.fn(t._value);(n.version===0||cn(o,t._value))&&(t._value=o,n.version++)}catch(o){throw n.version++,o}finally{C2=r,Q1=s,ds(t),t.flags&=-3}}function M8(t,n=!1){const{dep:r,prevSub:s,nextSub:o}=t;if(s&&(s.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=s,t.nextSub=void 0),r.subs===t&&(r.subs=s,!s&&r.computed)){r.computed.flags&=-5;for(let l=r.computed.deps;l;l=l.nextDep)M8(l,!0)}!n&&!--r.sc&&r.map&&r.map.delete(r.key)}function og(t){const{prevDep:n,nextDep:r}=t;n&&(n.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=n,t.nextDep=void 0)}let Q1=!0;const ps=[];function _n(){ps.push(Q1),Q1=!1}function dn(){const t=ps.pop();Q1=t===void 0?!0:t}function Rr(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const r=C2;C2=void 0;try{n()}finally{C2=r}}}let i4=0;class ug{constructor(n,r){this.sub=n,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class C8{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!C2||!Q1||C2===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==C2)r=this.activeLink=new ug(C2,this),C2.deps?(r.prevDep=C2.depsTail,C2.depsTail.nextDep=r,C2.depsTail=r):C2.deps=C2.depsTail=r,ms(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const s=r.nextDep;s.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=s),r.prevDep=C2.depsTail,r.nextDep=void 0,C2.depsTail.nextDep=r,C2.depsTail=r,C2.deps===r&&(C2.deps=s)}return r}trigger(n){this.version++,i4++,this.notify(n)}notify(n){S8();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{b8()}}}function ms(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)ms(s)}const r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}const je=new WeakMap,Ln=Symbol(""),ze=Symbol(""),s4=Symbol("");function u1(t,n,r){if(Q1&&C2){let s=je.get(t);s||je.set(t,s=new Map);let o=s.get(r);o||(s.set(r,o=new C8),o.map=s,o.key=r),o.track()}}function Nt(t,n,r,s,o,l){const c=je.get(t);if(!c){i4++;return}const f=h=>{h&&h.trigger()};if(S8(),n==="clear")c.forEach(f);else{const h=B0(t),p=h&&T8(r);if(h&&r==="length"){const v=Number(s);c.forEach((y,S)=>{(S==="length"||S===s4||!dt(S)&&S>=v)&&f(y)})}else switch((r!==void 0||c.has(void 0))&&f(c.get(r)),p&&f(c.get(s4)),n){case"add":h?p&&f(c.get("length")):(f(c.get(Ln)),l3(t)&&f(c.get(ze)));break;case"delete":h||(f(c.get(Ln)),l3(t)&&f(c.get(ze)));break;case"set":l3(t)&&f(c.get(Ln));break}}b8()}function Qn(t){const n=_2(t);return n===t?n:(u1(n,"iterate",s4),W1(t)?n:n.map(l1))}function q5(t){return u1(t=_2(t),"iterate",s4),t}const lg={__proto__:null,[Symbol.iterator](){return Ce(this,Symbol.iterator,l1)},concat(...t){return Qn(this).concat(...t.map(n=>B0(n)?Qn(n):n))},entries(){return Ce(this,"entries",t=>(t[1]=l1(t[1]),t))},every(t,n){return Pt(this,"every",t,n,void 0,arguments)},filter(t,n){return Pt(this,"filter",t,n,r=>r.map(l1),arguments)},find(t,n){return Pt(this,"find",t,n,l1,arguments)},findIndex(t,n){return Pt(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Pt(this,"findLast",t,n,l1,arguments)},findLastIndex(t,n){return Pt(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Pt(this,"forEach",t,n,void 0,arguments)},includes(...t){return ke(this,"includes",t)},indexOf(...t){return ke(this,"indexOf",t)},join(t){return Qn(this).join(t)},lastIndexOf(...t){return ke(this,"lastIndexOf",t)},map(t,n){return Pt(this,"map",t,n,void 0,arguments)},pop(){return G3(this,"pop")},push(...t){return G3(this,"push",t)},reduce(t,...n){return Br(this,"reduce",t,n)},reduceRight(t,...n){return Br(this,"reduceRight",t,n)},shift(){return G3(this,"shift")},some(t,n){return Pt(this,"some",t,n,void 0,arguments)},splice(...t){return G3(this,"splice",t)},toReversed(){return Qn(this).toReversed()},toSorted(t){return Qn(this).toSorted(t)},toSpliced(...t){return Qn(this).toSpliced(...t)},unshift(...t){return G3(this,"unshift",t)},values(){return Ce(this,"values",l1)}};function Ce(t,n,r){const s=q5(t),o=s[n]();return s!==t&&!W1(t)&&(o._next=o.next,o.next=()=>{const l=o._next();return l.value&&(l.value=r(l.value)),l}),o}const ag=Array.prototype;function Pt(t,n,r,s,o,l){const c=q5(t),f=c!==t&&!W1(t),h=c[n];if(h!==ag[n]){const y=h.apply(t,l);return f?l1(y):y}let p=r;c!==t&&(f?p=function(y,S){return r.call(this,l1(y),S,t)}:r.length>2&&(p=function(y,S){return r.call(this,y,S,t)}));const v=h.call(c,p,s);return f&&o?o(v):v}function Br(t,n,r,s){const o=q5(t);let l=r;return o!==t&&(W1(t)?r.length>3&&(l=function(c,f,h){return r.call(this,c,f,h,t)}):l=function(c,f,h){return r.call(this,c,l1(f),h,t)}),o[n](l,...s)}function ke(t,n,r){const s=_2(t);u1(s,"iterate",s4);const o=s[n](...r);return(o===-1||o===!1)&&D8(r[0])?(r[0]=_2(r[0]),s[n](...r)):o}function G3(t,n,r=[]){_n(),S8();const s=_2(t)[n].apply(t,r);return b8(),dn(),s}const cg=m8("__proto__,__v_isRef,__isVue"),vs=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dt));function fg(t){dt(t)||(t=String(t));const n=_2(this);return u1(n,"has",t),n.hasOwnProperty(t)}class ys{constructor(n=!1,r=!1){this._isReadonly=n,this._isShallow=r}get(n,r,s){if(r==="__v_skip")return n.__v_skip;const o=this._isReadonly,l=this._isShallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return l;if(r==="__v_raw")return s===(o?l?xg:Ss:l?ws:xs).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const c=B0(n);if(!o){let h;if(c&&(h=lg[r]))return h;if(r==="hasOwnProperty")return fg}const f=Reflect.get(n,r,c1(n)?n:s);return(dt(r)?vs.has(r):cg(r))||(o||u1(n,"get",r),l)?f:c1(f)?c&&T8(r)?f:f.value:k2(f)?o?Ms(f):K5(f):f}}class Ts extends ys{constructor(n=!1){super(!1,n)}set(n,r,s,o){let l=n[r];if(!this._isShallow){const h=Nn(l);if(!W1(s)&&!Nn(s)&&(l=_2(l),s=_2(s)),!B0(n)&&c1(l)&&!c1(s))return h?!1:(l.value=s,!0)}const c=B0(n)&&T8(r)?Number(r)<n.length:d2(n,r),f=Reflect.set(n,r,s,c1(n)?n:o);return n===_2(o)&&(c?cn(s,l)&&Nt(n,"set",r,s):Nt(n,"add",r,s)),f}deleteProperty(n,r){const s=d2(n,r);n[r];const o=Reflect.deleteProperty(n,r);return o&&s&&Nt(n,"delete",r,void 0),o}has(n,r){const s=Reflect.has(n,r);return(!dt(r)||!vs.has(r))&&u1(n,"has",r),s}ownKeys(n){return u1(n,"iterate",B0(n)?"length":Ln),Reflect.ownKeys(n)}}class hg extends ys{constructor(n=!1){super(!0,n)}set(n,r){return!0}deleteProperty(n,r){return!0}}const _g=new Ts,dg=new hg,gg=new Ts(!0),Ze=t=>t,_5=t=>Reflect.getPrototypeOf(t);function pg(t,n,r){return function(...s){const o=this.__v_raw,l=_2(o),c=l3(l),f=t==="entries"||t===Symbol.iterator&&c,h=t==="keys"&&c,p=o[t](...s),v=r?Ze:n?Je:l1;return!n&&u1(l,"iterate",h?ze:Ln),{next(){const{value:y,done:S}=p.next();return S?{value:y,done:S}:{value:f?[v(y[0]),v(y[1])]:v(y),done:S}},[Symbol.iterator](){return this}}}}function d5(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function mg(t,n){const r={get(o){const l=this.__v_raw,c=_2(l),f=_2(o);t||(cn(o,f)&&u1(c,"get",o),u1(c,"get",f));const{has:h}=_5(c),p=n?Ze:t?Je:l1;if(h.call(c,o))return p(l.get(o));if(h.call(c,f))return p(l.get(f));l!==c&&l.get(o)},get size(){const o=this.__v_raw;return!t&&u1(_2(o),"iterate",Ln),Reflect.get(o,"size",o)},has(o){const l=this.__v_raw,c=_2(l),f=_2(o);return t||(cn(o,f)&&u1(c,"has",o),u1(c,"has",f)),o===f?l.has(o):l.has(o)||l.has(f)},forEach(o,l){const c=this,f=c.__v_raw,h=_2(f),p=n?Ze:t?Je:l1;return!t&&u1(h,"iterate",Ln),f.forEach((v,y)=>o.call(l,p(v),p(y),c))}};return t1(r,t?{add:d5("add"),set:d5("set"),delete:d5("delete"),clear:d5("clear")}:{add(o){!n&&!W1(o)&&!Nn(o)&&(o=_2(o));const l=_2(this);return _5(l).has.call(l,o)||(l.add(o),Nt(l,"add",o,o)),this},set(o,l){!n&&!W1(l)&&!Nn(l)&&(l=_2(l));const c=_2(this),{has:f,get:h}=_5(c);let p=f.call(c,o);p||(o=_2(o),p=f.call(c,o));const v=h.call(c,o);return c.set(o,l),p?cn(l,v)&&Nt(c,"set",o,l):Nt(c,"add",o,l),this},delete(o){const l=_2(this),{has:c,get:f}=_5(l);let h=c.call(l,o);h||(o=_2(o),h=c.call(l,o)),f&&f.call(l,o);const p=l.delete(o);return h&&Nt(l,"delete",o,void 0),p},clear(){const o=_2(this),l=o.size!==0,c=o.clear();return l&&Nt(o,"clear",void 0,void 0),c}}),["keys","values","entries",Symbol.iterator].forEach(o=>{r[o]=pg(o,t,n)}),r}function k8(t,n){const r=mg(t,n);return(s,o,l)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?s:Reflect.get(d2(r,o)&&o in s?r:s,o,l)}const vg={get:k8(!1,!1)},yg={get:k8(!1,!0)},Tg={get:k8(!0,!1)},xs=new WeakMap,ws=new WeakMap,Ss=new WeakMap,xg=new WeakMap;function wg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sg(t){return t.__v_skip||!Object.isExtensible(t)?0:wg(jd(t))}function K5(t){return Nn(t)?t:P8(t,!1,_g,vg,xs)}function bs(t){return P8(t,!1,gg,yg,ws)}function Ms(t){return P8(t,!0,dg,Tg,Ss)}function P8(t,n,r,s,o){if(!k2(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const l=o.get(t);if(l)return l;const c=Sg(t);if(c===0)return t;const f=new Proxy(t,c===2?s:r);return o.set(t,f),f}function a3(t){return Nn(t)?a3(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function W1(t){return!!(t&&t.__v_isShallow)}function D8(t){return t?!!t.__v_raw:!1}function _2(t){const n=t&&t.__v_raw;return n?_2(n):t}function bg(t){return!d2(t,"__v_skip")&&Object.isExtensible(t)&&os(t,"__v_skip",!0),t}const l1=t=>k2(t)?K5(t):t,Je=t=>k2(t)?Ms(t):t;function c1(t){return t?t.__v_isRef===!0:!1}function r2(t){return Cs(t,!1)}function Mg(t){return Cs(t,!0)}function Cs(t,n){return c1(t)?t:new Cg(t,n)}class Cg{constructor(n,r){this.dep=new C8,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?n:_2(n),this._value=r?n:l1(n),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(n){const r=this._rawValue,s=this.__v_isShallow||W1(n)||Nn(n);n=s?n:_2(n),cn(n,r)&&(this._rawValue=n,this._value=s?n:l1(n),this.dep.trigger())}}function T2(t){return c1(t)?t.value:t}const kg={get:(t,n,r)=>n==="__v_raw"?t:T2(Reflect.get(t,n,r)),set:(t,n,r,s)=>{const o=t[n];return c1(o)&&!c1(r)?(o.value=r,!0):Reflect.set(t,n,r,s)}};function ks(t){return a3(t)?t:new Proxy(t,kg)}class Pg{constructor(n,r,s){this.fn=n,this.setter=r,this._value=void 0,this.dep=new C8(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=i4-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&C2!==this)return hs(this,!0),!0}get value(){const n=this.dep.track();return gs(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Dg(t,n,r=!1){let s,o;return $0(t)?s=t:(s=t.get,o=t.set),new Pg(s,o,r)}const g5={},A5=new WeakMap;let kn;function Ag(t,n=!1,r=kn){if(r){let s=A5.get(r);s||A5.set(r,s=[]),s.push(t)}}function Og(t,n,r=b2){const{immediate:s,deep:o,once:l,scheduler:c,augmentJob:f,call:h}=r,p=a0=>o?a0:W1(a0)||o===!1||o===0?Rt(a0,1):Rt(a0);let v,y,S,M,G=!1,Y=!1;if(c1(t)?(y=()=>t.value,G=W1(t)):a3(t)?(y=()=>p(t),G=!0):B0(t)?(Y=!0,G=t.some(a0=>a3(a0)||W1(a0)),y=()=>t.map(a0=>{if(c1(a0))return a0.value;if(a3(a0))return p(a0);if($0(a0))return h?h(a0,2):a0()})):$0(t)?n?y=h?()=>h(t,2):t:y=()=>{if(S){_n();try{S()}finally{dn()}}const a0=kn;kn=v;try{return h?h(t,3,[M]):t(M)}finally{kn=a0}}:y=_t,n&&o){const a0=y,s0=o===!0?1/0:o;y=()=>Rt(a0(),s0)}const U=sg(),n0=()=>{v.stop(),U&&U.active&&y8(U.effects,v)};if(l&&n){const a0=n;n=(...s0)=>{a0(...s0),n0()}}let l0=Y?new Array(t.length).fill(g5):g5;const u0=a0=>{if(!(!(v.flags&1)||!v.dirty&&!a0))if(n){const s0=v.run();if(o||G||(Y?s0.some((P0,M0)=>cn(P0,l0[M0])):cn(s0,l0))){S&&S();const P0=kn;kn=v;try{const M0=[s0,l0===g5?void 0:Y&&l0[0]===g5?[]:l0,M];h?h(n,3,M0):n(...M0),l0=s0}finally{kn=P0}}}else v.run()};return f&&f(u0),v=new cs(y),v.scheduler=c?()=>c(u0,!1):u0,M=a0=>Ag(a0,!1,v),S=v.onStop=()=>{const a0=A5.get(v);if(a0){if(h)h(a0,4);else for(const s0 of a0)s0();A5.delete(v)}},n?s?u0(!0):l0=v.run():c?c(u0.bind(null,!0),!0):v.run(),n0.pause=v.pause.bind(v),n0.resume=v.resume.bind(v),n0.stop=n0,n0}function Rt(t,n=1/0,r){if(n<=0||!k2(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),n--,c1(t))Rt(t.value,n,r);else if(B0(t))for(let s=0;s<t.length;s++)Rt(t[s],n,r);else if(y3(t)||l3(t))t.forEach(s=>{Rt(s,n,r)});else if(ss(t)){for(const s in t)Rt(t[s],n,r);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Rt(t[s],n,r)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function v4(t,n,r,s){try{return s?t(...s):t()}catch(o){j5(o,n,r)}}function gt(t,n,r,s){if($0(t)){const o=v4(t,n,r,s);return o&&rs(o)&&o.catch(l=>{j5(l,n,r)}),o}if(B0(t)){const o=[];for(let l=0;l<t.length;l++)o.push(gt(t[l],n,r,s));return o}}function j5(t,n,r,s=!0){const o=n?n.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:c}=n&&n.appContext.config||b2;if(n){let f=n.parent;const h=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${r}`;for(;f;){const v=f.ec;if(v){for(let y=0;y<v.length;y++)if(v[y](t,h,p)===!1)return}f=f.parent}if(l){_n(),v4(l,null,10,[t,h,p]),dn();return}}Lg(t,r,o,s,c)}function Lg(t,n,r,s=!0,o=!1){if(o)throw t;console.error(t)}const m1=[];let at=-1;const c3=[];let en=null,e3=0;const Ps=Promise.resolve();let O5=null;function A8(t){const n=O5||Ps;return t?n.then(this?t.bind(this):t):n}function Eg(t){let n=at+1,r=m1.length;for(;n<r;){const s=n+r>>>1,o=m1[s],l=o4(o);l<t||l===t&&o.flags&2?n=s+1:r=s}return n}function O8(t){if(!(t.flags&1)){const n=o4(t),r=m1[m1.length-1];!r||!(t.flags&2)&&n>=o4(r)?m1.push(t):m1.splice(Eg(n),0,t),t.flags|=1,Ds()}}function Ds(){O5||(O5=Ps.then(Os))}function Ng(t){B0(t)?c3.push(...t):en&&t.id===-1?en.splice(e3+1,0,t):t.flags&1||(c3.push(t),t.flags|=1),Ds()}function Ir(t,n,r=at+1){for(;r<m1.length;r++){const s=m1[r];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;m1.splice(r,1),r--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function As(t){if(c3.length){const n=[...new Set(c3)].sort((r,s)=>o4(r)-o4(s));if(c3.length=0,en){en.push(...n);return}for(en=n,e3=0;e3<en.length;e3++){const r=en[e3];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}en=null,e3=0}}const o4=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Os(t){try{for(at=0;at<m1.length;at++){const n=m1[at];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),v4(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;at<m1.length;at++){const n=m1[at];n&&(n.flags&=-2)}at=-1,m1.length=0,As(),O5=null,(m1.length||c3.length)&&Os()}}let O1=null,Ls=null;function L5(t){const n=O1;return O1=t,Ls=t&&t.type.__scopeId||null,n}function Rg(t,n=O1,r){if(!n||t._n)return t;const s=(...o)=>{s._d&&qr(-1);const l=L5(n);let c;try{c=t(...o)}finally{L5(l),s._d&&qr(1)}return c};return s._n=!0,s._c=!0,s._d=!0,s}function y2(t,n){if(O1===null)return t;const r=X5(O1),s=t.dirs||(t.dirs=[]);for(let o=0;o<n.length;o++){let[l,c,f,h=b2]=n[o];l&&($0(l)&&(l={mounted:l,updated:l}),l.deep&&Rt(c),s.push({dir:l,instance:r,value:c,oldValue:void 0,arg:f,modifiers:h}))}return t}function bn(t,n,r,s){const o=t.dirs,l=n&&n.dirs;for(let c=0;c<o.length;c++){const f=o[c];l&&(f.oldValue=l[c].value);let h=f.dir[s];h&&(_n(),gt(h,r,8,[t.el,f,t,n]),dn())}}const Bg=Symbol("_vte"),Ig=t=>t.__isTeleport;function L8(t,n){t.shapeFlag&6&&t.component?(t.transition=n,L8(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function y4(t,n){return $0(t)?t1({name:t.name},n,{setup:t}):t}function Es(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function E5(t,n,r,s,o=!1){if(B0(t)){t.forEach((G,Y)=>E5(G,n&&(B0(n)?n[Y]:n),r,s,o));return}if(X3(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&E5(t,n,r,s.component.subTree);return}const l=s.shapeFlag&4?X5(s.component):s.el,c=o?null:l,{i:f,r:h}=t,p=n&&n.r,v=f.refs===b2?f.refs={}:f.refs,y=f.setupState,S=_2(y),M=y===b2?()=>!1:G=>d2(S,G);if(p!=null&&p!==h&&(K2(p)?(v[p]=null,M(p)&&(y[p]=null)):c1(p)&&(p.value=null)),$0(h))v4(h,f,12,[c,v]);else{const G=K2(h),Y=c1(h);if(G||Y){const U=()=>{if(t.f){const n0=G?M(h)?y[h]:v[h]:h.value;o?B0(n0)&&y8(n0,l):B0(n0)?n0.includes(l)||n0.push(l):G?(v[h]=[l],M(h)&&(y[h]=v[h])):(h.value=[l],t.k&&(v[t.k]=h.value))}else G?(v[h]=c,M(h)&&(y[h]=c)):Y&&(h.value=c,t.k&&(v[t.k]=c))};c?(U.id=-1,D1(U,r)):U()}}}U5().requestIdleCallback;U5().cancelIdleCallback;const X3=t=>!!t.type.__asyncLoader,Ns=t=>t.type.__isKeepAlive;function Hg(t,n){Rs(t,"a",n)}function Gg(t,n){Rs(t,"da",n)}function Rs(t,n,r=a1){const s=t.__wdc||(t.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(z5(n,s,r),r){let o=r.parent;for(;o&&o.parent;)Ns(o.parent.vnode)&&Yg(s,n,r,o),o=o.parent}}function Yg(t,n,r,s){const o=z5(n,t,s,!0);Bs(()=>{y8(s[n],o)},r)}function z5(t,n,r=a1,s=!1){if(r){const o=r[t]||(r[t]=[]),l=n.__weh||(n.__weh=(...c)=>{_n();const f=T4(r),h=gt(n,r,t,c);return f(),dn(),h});return s?o.unshift(l):o.push(l),l}}const Ft=t=>(n,r=a1)=>{(!l4||t==="sp")&&z5(t,(...s)=>n(...s),r)},$g=Ft("bm"),Vg=Ft("m"),Fg=Ft("bu"),Wg=Ft("u"),Ug=Ft("bum"),Bs=Ft("um"),qg=Ft("sp"),Kg=Ft("rtg"),jg=Ft("rtc");function zg(t,n=a1){z5("ec",t,n)}const Zg="components",Is=Symbol.for("v-ndc");function p5(t){return K2(t)?Jg(Zg,t,!1)||t:t||Is}function Jg(t,n,r=!0,s=!1){const o=O1||a1;if(o){const l=o.type;{const f=Ip(l,!1);if(f&&(f===n||f===U1(n)||f===W5(U1(n))))return l}const c=Hr(o[t]||l[t],n)||Hr(o.appContext[t],n);return!c&&s?l:c}}function Hr(t,n){return t&&(t[n]||t[U1(n)]||t[W5(U1(n))])}function Z2(t,n,r,s){let o;const l=r,c=B0(t);if(c||K2(t)){const f=c&&a3(t);let h=!1;f&&(h=!W1(t),t=q5(t)),o=new Array(t.length);for(let p=0,v=t.length;p<v;p++)o[p]=n(h?l1(t[p]):t[p],p,void 0,l)}else if(typeof t=="number"){o=new Array(t);for(let f=0;f<t;f++)o[f]=n(f+1,f,void 0,l)}else if(k2(t))if(t[Symbol.iterator])o=Array.from(t,(f,h)=>n(f,h,void 0,l));else{const f=Object.keys(t);o=new Array(f.length);for(let h=0,p=f.length;h<p;h++){const v=f[h];o[h]=n(t[v],v,h,l)}}else o=[];return o}const Xe=t=>t?ro(t)?X5(t):Xe(t.parent):null,Q3=t1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xe(t.parent),$root:t=>Xe(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>E8(t),$forceUpdate:t=>t.f||(t.f=()=>{O8(t.update)}),$nextTick:t=>t.n||(t.n=A8.bind(t.proxy)),$watch:t=>vp.bind(t)}),Pe=(t,n)=>t!==b2&&!t.__isScriptSetup&&d2(t,n),Xg={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:r,setupState:s,data:o,props:l,accessCache:c,type:f,appContext:h}=t;let p;if(n[0]!=="$"){const M=c[n];if(M!==void 0)switch(M){case 1:return s[n];case 2:return o[n];case 4:return r[n];case 3:return l[n]}else{if(Pe(s,n))return c[n]=1,s[n];if(o!==b2&&d2(o,n))return c[n]=2,o[n];if((p=t.propsOptions[0])&&d2(p,n))return c[n]=3,l[n];if(r!==b2&&d2(r,n))return c[n]=4,r[n];Qe&&(c[n]=0)}}const v=Q3[n];let y,S;if(v)return n==="$attrs"&&u1(t.attrs,"get",""),v(t);if((y=f.__cssModules)&&(y=y[n]))return y;if(r!==b2&&d2(r,n))return c[n]=4,r[n];if(S=h.config.globalProperties,d2(S,n))return S[n]},set({_:t},n,r){const{data:s,setupState:o,ctx:l}=t;return Pe(o,n)?(o[n]=r,!0):s!==b2&&d2(s,n)?(s[n]=r,!0):d2(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(l[n]=r,!0)},has({_:{data:t,setupState:n,accessCache:r,ctx:s,appContext:o,propsOptions:l}},c){let f;return!!r[c]||t!==b2&&d2(t,c)||Pe(n,c)||(f=l[0])&&d2(f,c)||d2(s,c)||d2(Q3,c)||d2(o.config.globalProperties,c)},defineProperty(t,n,r){return r.get!=null?t._.accessCache[n]=0:d2(r,"value")&&this.set(t,n,r.value,null),Reflect.defineProperty(t,n,r)}};function Gr(t){return B0(t)?t.reduce((n,r)=>(n[r]=null,n),{}):t}let Qe=!0;function Qg(t){const n=E8(t),r=t.proxy,s=t.ctx;Qe=!1,n.beforeCreate&&Yr(n.beforeCreate,t,"bc");const{data:o,computed:l,methods:c,watch:f,provide:h,inject:p,created:v,beforeMount:y,mounted:S,beforeUpdate:M,updated:G,activated:Y,deactivated:U,beforeDestroy:n0,beforeUnmount:l0,destroyed:u0,unmounted:a0,render:s0,renderTracked:P0,renderTriggered:M0,errorCaptured:s2,serverPrefetch:o2,expose:m2,inheritAttrs:P2,components:r0,directives:H,filters:Q}=n;if(p&&tp(p,s,null),c)for(const g0 in c){const k0=c[g0];$0(k0)&&(s[g0]=k0.bind(r))}if(o){const g0=o.call(r,r);k2(g0)&&(t.data=K5(g0))}if(Qe=!0,l)for(const g0 in l){const k0=l[g0],L2=$0(k0)?k0.bind(r,r):$0(k0.get)?k0.get.bind(r,r):_t,G2=!$0(k0)&&$0(k0.set)?k0.set.bind(r):_t,g2=$2({get:L2,set:G2});Object.defineProperty(s,g0,{enumerable:!0,configurable:!0,get:()=>g2.value,set:E2=>g2.value=E2})}if(f)for(const g0 in f)Hs(f[g0],s,r,g0);if(h){const g0=$0(h)?h.call(r):h;Reflect.ownKeys(g0).forEach(k0=>{x5(k0,g0[k0])})}v&&Yr(v,t,"c");function H0(g0,k0){B0(k0)?k0.forEach(L2=>g0(L2.bind(r))):k0&&g0(k0.bind(r))}if(H0($g,y),H0(Vg,S),H0(Fg,M),H0(Wg,G),H0(Hg,Y),H0(Gg,U),H0(zg,s2),H0(jg,P0),H0(Kg,M0),H0(Ug,l0),H0(Bs,a0),H0(qg,o2),B0(m2))if(m2.length){const g0=t.exposed||(t.exposed={});m2.forEach(k0=>{Object.defineProperty(g0,k0,{get:()=>r[k0],set:L2=>r[k0]=L2})})}else t.exposed||(t.exposed={});s0&&t.render===_t&&(t.render=s0),P2!=null&&(t.inheritAttrs=P2),r0&&(t.components=r0),H&&(t.directives=H),o2&&Es(t)}function tp(t,n,r=_t){B0(t)&&(t=t8(t));for(const s in t){const o=t[s];let l;k2(o)?"default"in o?l=Ht(o.from||s,o.default,!0):l=Ht(o.from||s):l=Ht(o),c1(l)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:c=>l.value=c}):n[s]=l}}function Yr(t,n,r){gt(B0(t)?t.map(s=>s.bind(n.proxy)):t.bind(n.proxy),n,r)}function Hs(t,n,r,s){let o=s.includes(".")?Xs(r,s):()=>r[s];if(K2(t)){const l=n[t];$0(l)&&w5(o,l)}else if($0(t))w5(o,t.bind(r));else if(k2(t))if(B0(t))t.forEach(l=>Hs(l,n,r,s));else{const l=$0(t.handler)?t.handler.bind(r):n[t.handler];$0(l)&&w5(o,l,t)}}function E8(t){const n=t.type,{mixins:r,extends:s}=n,{mixins:o,optionsCache:l,config:{optionMergeStrategies:c}}=t.appContext,f=l.get(n);let h;return f?h=f:!o.length&&!r&&!s?h=n:(h={},o.length&&o.forEach(p=>N5(h,p,c,!0)),N5(h,n,c)),k2(n)&&l.set(n,h),h}function N5(t,n,r,s=!1){const{mixins:o,extends:l}=n;l&&N5(t,l,r,!0),o&&o.forEach(c=>N5(t,c,r,!0));for(const c in n)if(!(s&&c==="expose")){const f=np[c]||r&&r[c];t[c]=f?f(t[c],n[c]):n[c]}return t}const np={data:$r,props:Vr,emits:Vr,methods:K3,computed:K3,beforeCreate:p1,created:p1,beforeMount:p1,mounted:p1,beforeUpdate:p1,updated:p1,beforeDestroy:p1,beforeUnmount:p1,destroyed:p1,unmounted:p1,activated:p1,deactivated:p1,errorCaptured:p1,serverPrefetch:p1,components:K3,directives:K3,watch:rp,provide:$r,inject:ep};function $r(t,n){return n?t?function(){return t1($0(t)?t.call(this,this):t,$0(n)?n.call(this,this):n)}:n:t}function ep(t,n){return K3(t8(t),t8(n))}function t8(t){if(B0(t)){const n={};for(let r=0;r<t.length;r++)n[t[r]]=t[r];return n}return t}function p1(t,n){return t?[...new Set([].concat(t,n))]:n}function K3(t,n){return t?t1(Object.create(null),t,n):n}function Vr(t,n){return t?B0(t)&&B0(n)?[...new Set([...t,...n])]:t1(Object.create(null),Gr(t),Gr(n??{})):n}function rp(t,n){if(!t)return n;if(!n)return t;const r=t1(Object.create(null),t);for(const s in n)r[s]=p1(t[s],n[s]);return r}function Gs(){return{app:null,config:{isNativeTag:qd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ip=0;function sp(t,n){return function(s,o=null){$0(s)||(s=t1({},s)),o!=null&&!k2(o)&&(o=null);const l=Gs(),c=new WeakSet,f=[];let h=!1;const p=l.app={_uid:ip++,_component:s,_props:o,_container:null,_context:l,_instance:null,version:Gp,get config(){return l.config},set config(v){},use(v,...y){return c.has(v)||(v&&$0(v.install)?(c.add(v),v.install(p,...y)):$0(v)&&(c.add(v),v(p,...y))),p},mixin(v){return l.mixins.includes(v)||l.mixins.push(v),p},component(v,y){return y?(l.components[v]=y,p):l.components[v]},directive(v,y){return y?(l.directives[v]=y,p):l.directives[v]},mount(v,y,S){if(!h){const M=p._ceVNode||E1(s,o);return M.appContext=l,S===!0?S="svg":S===!1&&(S=void 0),y&&n?n(M,v):t(M,v,S),h=!0,p._container=v,v.__vue_app__=p,X5(M.component)}},onUnmount(v){f.push(v)},unmount(){h&&(gt(f,p._instance,16),t(null,p._container),delete p._container.__vue_app__)},provide(v,y){return l.provides[v]=y,p},runWithContext(v){const y=f3;f3=p;try{return v()}finally{f3=y}}};return p}}let f3=null;function x5(t,n){if(a1){let r=a1.provides;const s=a1.parent&&a1.parent.provides;s===r&&(r=a1.provides=Object.create(s)),r[t]=n}}function Ht(t,n,r=!1){const s=a1||O1;if(s||f3){const o=f3?f3._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return r&&$0(n)?n.call(s&&s.proxy):n}}const Ys={},$s=()=>Object.create(Ys),Vs=t=>Object.getPrototypeOf(t)===Ys;function op(t,n,r,s=!1){const o={},l=$s();t.propsDefaults=Object.create(null),Fs(t,n,o,l);for(const c in t.propsOptions[0])c in o||(o[c]=void 0);r?t.props=s?o:bs(o):t.type.props?t.props=o:t.props=l,t.attrs=l}function up(t,n,r,s){const{props:o,attrs:l,vnode:{patchFlag:c}}=t,f=_2(o),[h]=t.propsOptions;let p=!1;if((s||c>0)&&!(c&16)){if(c&8){const v=t.vnode.dynamicProps;for(let y=0;y<v.length;y++){let S=v[y];if(Z5(t.emitsOptions,S))continue;const M=n[S];if(h)if(d2(l,S))M!==l[S]&&(l[S]=M,p=!0);else{const G=U1(S);o[G]=n8(h,f,G,M,t,!1)}else M!==l[S]&&(l[S]=M,p=!0)}}}else{Fs(t,n,o,l)&&(p=!0);let v;for(const y in f)(!n||!d2(n,y)&&((v=Bn(y))===y||!d2(n,v)))&&(h?r&&(r[y]!==void 0||r[v]!==void 0)&&(o[y]=n8(h,f,y,void 0,t,!0)):delete o[y]);if(l!==f)for(const y in l)(!n||!d2(n,y))&&(delete l[y],p=!0)}p&&Nt(t.attrs,"set","")}function Fs(t,n,r,s){const[o,l]=t.propsOptions;let c=!1,f;if(n)for(let h in n){if(z3(h))continue;const p=n[h];let v;o&&d2(o,v=U1(h))?!l||!l.includes(v)?r[v]=p:(f||(f={}))[v]=p:Z5(t.emitsOptions,h)||(!(h in s)||p!==s[h])&&(s[h]=p,c=!0)}if(l){const h=_2(r),p=f||b2;for(let v=0;v<l.length;v++){const y=l[v];r[y]=n8(o,h,y,p[y],t,!d2(p,y))}}return c}function n8(t,n,r,s,o,l){const c=t[r];if(c!=null){const f=d2(c,"default");if(f&&s===void 0){const h=c.default;if(c.type!==Function&&!c.skipFactory&&$0(h)){const{propsDefaults:p}=o;if(r in p)s=p[r];else{const v=T4(o);s=p[r]=h.call(null,n),v()}}else s=h;o.ce&&o.ce._setProp(r,s)}c[0]&&(l&&!f?s=!1:c[1]&&(s===""||s===Bn(r))&&(s=!0))}return s}const lp=new WeakMap;function Ws(t,n,r=!1){const s=r?lp:n.propsCache,o=s.get(t);if(o)return o;const l=t.props,c={},f=[];let h=!1;if(!$0(t)){const v=y=>{h=!0;const[S,M]=Ws(y,n,!0);t1(c,S),M&&f.push(...M)};!r&&n.mixins.length&&n.mixins.forEach(v),t.extends&&v(t.extends),t.mixins&&t.mixins.forEach(v)}if(!l&&!h)return k2(t)&&s.set(t,u3),u3;if(B0(l))for(let v=0;v<l.length;v++){const y=U1(l[v]);Fr(y)&&(c[y]=b2)}else if(l)for(const v in l){const y=U1(v);if(Fr(y)){const S=l[v],M=c[y]=B0(S)||$0(S)?{type:S}:t1({},S),G=M.type;let Y=!1,U=!0;if(B0(G))for(let n0=0;n0<G.length;++n0){const l0=G[n0],u0=$0(l0)&&l0.name;if(u0==="Boolean"){Y=!0;break}else u0==="String"&&(U=!1)}else Y=$0(G)&&G.name==="Boolean";M[0]=Y,M[1]=U,(Y||d2(M,"default"))&&f.push(y)}}const p=[c,f];return k2(t)&&s.set(t,p),p}function Fr(t){return t[0]!=="$"&&!z3(t)}const Us=t=>t[0]==="_"||t==="$stable",N8=t=>B0(t)?t.map(ft):[ft(t)],ap=(t,n,r)=>{if(n._n)return n;const s=Rg((...o)=>N8(n(...o)),r);return s._c=!1,s},qs=(t,n,r)=>{const s=t._ctx;for(const o in t){if(Us(o))continue;const l=t[o];if($0(l))n[o]=ap(o,l,s);else if(l!=null){const c=N8(l);n[o]=()=>c}}},Ks=(t,n)=>{const r=N8(n);t.slots.default=()=>r},js=(t,n,r)=>{for(const s in n)(r||s!=="_")&&(t[s]=n[s])},cp=(t,n,r)=>{const s=t.slots=$s();if(t.vnode.shapeFlag&32){const o=n._;o?(js(s,n,r),r&&os(s,"_",o,!0)):qs(n,s)}else n&&Ks(t,n)},fp=(t,n,r)=>{const{vnode:s,slots:o}=t;let l=!0,c=b2;if(s.shapeFlag&32){const f=n._;f?r&&f===1?l=!1:js(o,n,r):(l=!n.$stable,qs(n,o)),c=n}else n&&(Ks(t,n),c={default:1});if(l)for(const f in o)!Us(f)&&c[f]==null&&delete o[f]},D1=Mp;function hp(t){return _p(t)}function _p(t,n){const r=U5();r.__VUE__=!0;const{insert:s,remove:o,patchProp:l,createElement:c,createText:f,createComment:h,setText:p,setElementText:v,parentNode:y,nextSibling:S,setScopeId:M=_t,insertStaticContent:G}=t,Y=(T,x,A,$=null,L=null,W=null,i0=void 0,J=null,z=!!x.dynamicChildren)=>{if(T===x)return;T&&!Y3(T,x)&&($=R(T),E2(T,L,W,!0),T=null),x.patchFlag===-2&&(z=!1,x.dynamicChildren=null);const{type:F,ref:D0,shapeFlag:_0}=x;switch(F){case J5:U(T,x,A,$);break;case Rn:n0(T,x,A,$);break;case Oe:T==null&&l0(x,A,$,i0);break;case K0:r0(T,x,A,$,L,W,i0,J,z);break;default:_0&1?s0(T,x,A,$,L,W,i0,J,z):_0&6?H(T,x,A,$,L,W,i0,J,z):(_0&64||_0&128)&&F.process(T,x,A,$,L,W,i0,J,z,b0)}D0!=null&&L&&E5(D0,T&&T.ref,W,x||T,!x)},U=(T,x,A,$)=>{if(T==null)s(x.el=f(x.children),A,$);else{const L=x.el=T.el;x.children!==T.children&&p(L,x.children)}},n0=(T,x,A,$)=>{T==null?s(x.el=h(x.children||""),A,$):x.el=T.el},l0=(T,x,A,$)=>{[T.el,T.anchor]=G(T.children,x,A,$,T.el,T.anchor)},u0=({el:T,anchor:x},A,$)=>{let L;for(;T&&T!==x;)L=S(T),s(T,A,$),T=L;s(x,A,$)},a0=({el:T,anchor:x})=>{let A;for(;T&&T!==x;)A=S(T),o(T),T=A;o(x)},s0=(T,x,A,$,L,W,i0,J,z)=>{x.type==="svg"?i0="svg":x.type==="math"&&(i0="mathml"),T==null?P0(x,A,$,L,W,i0,J,z):o2(T,x,L,W,i0,J,z)},P0=(T,x,A,$,L,W,i0,J)=>{let z,F;const{props:D0,shapeFlag:_0,transition:v0,dirs:E0}=T;if(z=T.el=c(T.type,W,D0&&D0.is,D0),_0&8?v(z,T.children):_0&16&&s2(T.children,z,null,$,L,De(T,W),i0,J),E0&&bn(T,null,$,"created"),M0(z,T,T.scopeId,i0,$),D0){for(const Q0 in D0)Q0!=="value"&&!z3(Q0)&&l(z,Q0,null,D0[Q0],W,$);"value"in D0&&l(z,"value",null,D0.value,W),(F=D0.onVnodeBeforeMount)&&lt(F,$,T)}E0&&bn(T,null,$,"beforeMount");const G0=dp(L,v0);G0&&v0.beforeEnter(z),s(z,x,A),((F=D0&&D0.onVnodeMounted)||G0||E0)&&D1(()=>{F&&lt(F,$,T),G0&&v0.enter(z),E0&&bn(T,null,$,"mounted")},L)},M0=(T,x,A,$,L)=>{if(A&&M(T,A),$)for(let W=0;W<$.length;W++)M(T,$[W]);if(L){let W=L.subTree;if(x===W||to(W.type)&&(W.ssContent===x||W.ssFallback===x)){const i0=L.vnode;M0(T,i0,i0.scopeId,i0.slotScopeIds,L.parent)}}},s2=(T,x,A,$,L,W,i0,J,z=0)=>{for(let F=z;F<T.length;F++){const D0=T[F]=J?rn(T[F]):ft(T[F]);Y(null,D0,x,A,$,L,W,i0,J)}},o2=(T,x,A,$,L,W,i0)=>{const J=x.el=T.el;let{patchFlag:z,dynamicChildren:F,dirs:D0}=x;z|=T.patchFlag&16;const _0=T.props||b2,v0=x.props||b2;let E0;if(A&&Mn(A,!1),(E0=v0.onVnodeBeforeUpdate)&&lt(E0,A,x,T),D0&&bn(x,T,A,"beforeUpdate"),A&&Mn(A,!0),(_0.innerHTML&&v0.innerHTML==null||_0.textContent&&v0.textContent==null)&&v(J,""),F?m2(T.dynamicChildren,F,J,A,$,De(x,L),W):i0||k0(T,x,J,null,A,$,De(x,L),W,!1),z>0){if(z&16)P2(J,_0,v0,A,L);else if(z&2&&_0.class!==v0.class&&l(J,"class",null,v0.class,L),z&4&&l(J,"style",_0.style,v0.style,L),z&8){const G0=x.dynamicProps;for(let Q0=0;Q0<G0.length;Q0++){const Z0=G0[Q0],j=_0[Z0],m=v0[Z0];(m!==j||Z0==="value")&&l(J,Z0,j,m,L,A)}}z&1&&T.children!==x.children&&v(J,x.children)}else!i0&&F==null&&P2(J,_0,v0,A,L);((E0=v0.onVnodeUpdated)||D0)&&D1(()=>{E0&&lt(E0,A,x,T),D0&&bn(x,T,A,"updated")},$)},m2=(T,x,A,$,L,W,i0)=>{for(let J=0;J<x.length;J++){const z=T[J],F=x[J],D0=z.el&&(z.type===K0||!Y3(z,F)||z.shapeFlag&70)?y(z.el):A;Y(z,F,D0,null,$,L,W,i0,!0)}},P2=(T,x,A,$,L)=>{if(x!==A){if(x!==b2)for(const W in x)!z3(W)&&!(W in A)&&l(T,W,x[W],null,L,$);for(const W in A){if(z3(W))continue;const i0=A[W],J=x[W];i0!==J&&W!=="value"&&l(T,W,J,i0,L,$)}"value"in A&&l(T,"value",x.value,A.value,L)}},r0=(T,x,A,$,L,W,i0,J,z)=>{const F=x.el=T?T.el:f(""),D0=x.anchor=T?T.anchor:f("");let{patchFlag:_0,dynamicChildren:v0,slotScopeIds:E0}=x;E0&&(J=J?J.concat(E0):E0),T==null?(s(F,A,$),s(D0,A,$),s2(x.children||[],A,D0,L,W,i0,J,z)):_0>0&&_0&64&&v0&&T.dynamicChildren?(m2(T.dynamicChildren,v0,A,L,W,i0,J),(x.key!=null||L&&x===L.subTree)&&zs(T,x,!0)):k0(T,x,A,D0,L,W,i0,J,z)},H=(T,x,A,$,L,W,i0,J,z)=>{x.slotScopeIds=J,T==null?x.shapeFlag&512?L.ctx.activate(x,A,$,i0,z):Q(x,A,$,L,W,i0,z):x0(T,x,z)},Q=(T,x,A,$,L,W,i0)=>{const J=T.component=Lp(T,$,L);if(Ns(T)&&(J.ctx.renderer=b0),Ep(J,!1,i0),J.asyncDep){if(L&&L.registerDep(J,H0,i0),!T.el){const z=J.subTree=E1(Rn);n0(null,z,x,A)}}else H0(J,T,x,A,L,W,i0)},x0=(T,x,A)=>{const $=x.component=T.component;if(Sp(T,x,A))if($.asyncDep&&!$.asyncResolved){g0($,x,A);return}else $.next=x,$.update();else x.el=T.el,$.vnode=x},H0=(T,x,A,$,L,W,i0)=>{const J=()=>{if(T.isMounted){let{next:_0,bu:v0,u:E0,parent:G0,vnode:Q0}=T;{const q=Zs(T);if(q){_0&&(_0.el=Q0.el,g0(T,_0,i0)),q.asyncDep.then(()=>{T.isUnmounted||J()});return}}let Z0=_0,j;Mn(T,!1),_0?(_0.el=Q0.el,g0(T,_0,i0)):_0=Q0,v0&&T5(v0),(j=_0.props&&_0.props.onVnodeBeforeUpdate)&&lt(j,G0,_0,Q0),Mn(T,!0);const m=Ae(T),N=T.subTree;T.subTree=m,Y(N,m,y(N.el),R(N),T,L,W),_0.el=m.el,Z0===null&&bp(T,m.el),E0&&D1(E0,L),(j=_0.props&&_0.props.onVnodeUpdated)&&D1(()=>lt(j,G0,_0,Q0),L)}else{let _0;const{el:v0,props:E0}=x,{bm:G0,m:Q0,parent:Z0,root:j,type:m}=T,N=X3(x);if(Mn(T,!1),G0&&T5(G0),!N&&(_0=E0&&E0.onVnodeBeforeMount)&&lt(_0,Z0,x),Mn(T,!0),v0&&a2){const q=()=>{T.subTree=Ae(T),a2(v0,T.subTree,T,L,null)};N&&m.__asyncHydrate?m.__asyncHydrate(v0,T,q):q()}else{j.ce&&j.ce._injectChildStyle(m);const q=T.subTree=Ae(T);Y(null,q,A,$,T,L,W),x.el=q.el}if(Q0&&D1(Q0,L),!N&&(_0=E0&&E0.onVnodeMounted)){const q=x;D1(()=>lt(_0,Z0,q),L)}(x.shapeFlag&256||Z0&&X3(Z0.vnode)&&Z0.vnode.shapeFlag&256)&&T.a&&D1(T.a,L),T.isMounted=!0,x=A=$=null}};T.scope.on();const z=T.effect=new cs(J);T.scope.off();const F=T.update=z.run.bind(z),D0=T.job=z.runIfDirty.bind(z);D0.i=T,D0.id=T.uid,z.scheduler=()=>O8(D0),Mn(T,!0),F()},g0=(T,x,A)=>{x.component=T;const $=T.vnode.props;T.vnode=x,T.next=null,up(T,x.props,$,A),fp(T,x.children,A),_n(),Ir(T),dn()},k0=(T,x,A,$,L,W,i0,J,z=!1)=>{const F=T&&T.children,D0=T?T.shapeFlag:0,_0=x.children,{patchFlag:v0,shapeFlag:E0}=x;if(v0>0){if(v0&128){G2(F,_0,A,$,L,W,i0,J,z);return}else if(v0&256){L2(F,_0,A,$,L,W,i0,J,z);return}}E0&8?(D0&16&&I2(F,L,W),_0!==F&&v(A,_0)):D0&16?E0&16?G2(F,_0,A,$,L,W,i0,J,z):I2(F,L,W,!0):(D0&8&&v(A,""),E0&16&&s2(_0,A,$,L,W,i0,J,z))},L2=(T,x,A,$,L,W,i0,J,z)=>{T=T||u3,x=x||u3;const F=T.length,D0=x.length,_0=Math.min(F,D0);let v0;for(v0=0;v0<_0;v0++){const E0=x[v0]=z?rn(x[v0]):ft(x[v0]);Y(T[v0],E0,A,null,L,W,i0,J,z)}F>D0?I2(T,L,W,!0,!1,_0):s2(x,A,$,L,W,i0,J,z,_0)},G2=(T,x,A,$,L,W,i0,J,z)=>{let F=0;const D0=x.length;let _0=T.length-1,v0=D0-1;for(;F<=_0&&F<=v0;){const E0=T[F],G0=x[F]=z?rn(x[F]):ft(x[F]);if(Y3(E0,G0))Y(E0,G0,A,null,L,W,i0,J,z);else break;F++}for(;F<=_0&&F<=v0;){const E0=T[_0],G0=x[v0]=z?rn(x[v0]):ft(x[v0]);if(Y3(E0,G0))Y(E0,G0,A,null,L,W,i0,J,z);else break;_0--,v0--}if(F>_0){if(F<=v0){const E0=v0+1,G0=E0<D0?x[E0].el:$;for(;F<=v0;)Y(null,x[F]=z?rn(x[F]):ft(x[F]),A,G0,L,W,i0,J,z),F++}}else if(F>v0)for(;F<=_0;)E2(T[F],L,W,!0),F++;else{const E0=F,G0=F,Q0=new Map;for(F=G0;F<=v0;F++){const C=x[F]=z?rn(x[F]):ft(x[F]);C.key!=null&&Q0.set(C.key,F)}let Z0,j=0;const m=v0-G0+1;let N=!1,q=0;const K=new Array(m);for(F=0;F<m;F++)K[F]=0;for(F=E0;F<=_0;F++){const C=T[F];if(j>=m){E2(C,L,W,!0);continue}let t0;if(C.key!=null)t0=Q0.get(C.key);else for(Z0=G0;Z0<=v0;Z0++)if(K[Z0-G0]===0&&Y3(C,x[Z0])){t0=Z0;break}t0===void 0?E2(C,L,W,!0):(K[t0-G0]=F+1,t0>=q?q=t0:N=!0,Y(C,x[t0],A,null,L,W,i0,J,z),j++)}const h0=N?gp(K):u3;for(Z0=h0.length-1,F=m-1;F>=0;F--){const C=G0+F,t0=x[C],w0=C+1<D0?x[C+1].el:$;K[F]===0?Y(null,t0,A,w0,L,W,i0,J,z):N&&(Z0<0||F!==h0[Z0]?g2(t0,A,w0,2):Z0--)}}},g2=(T,x,A,$,L=null)=>{const{el:W,type:i0,transition:J,children:z,shapeFlag:F}=T;if(F&6){g2(T.component.subTree,x,A,$);return}if(F&128){T.suspense.move(x,A,$);return}if(F&64){i0.move(T,x,A,b0);return}if(i0===K0){s(W,x,A);for(let _0=0;_0<z.length;_0++)g2(z[_0],x,A,$);s(T.anchor,x,A);return}if(i0===Oe){u0(T,x,A);return}if($!==2&&F&1&&J)if($===0)J.beforeEnter(W),s(W,x,A),D1(()=>J.enter(W),L);else{const{leave:_0,delayLeave:v0,afterLeave:E0}=J,G0=()=>s(W,x,A),Q0=()=>{_0(W,()=>{G0(),E0&&E0()})};v0?v0(W,G0,Q0):Q0()}else s(W,x,A)},E2=(T,x,A,$=!1,L=!1)=>{const{type:W,props:i0,ref:J,children:z,dynamicChildren:F,shapeFlag:D0,patchFlag:_0,dirs:v0,cacheIndex:E0}=T;if(_0===-2&&(L=!1),J!=null&&E5(J,null,A,T,!0),E0!=null&&(x.renderCache[E0]=void 0),D0&256){x.ctx.deactivate(T);return}const G0=D0&1&&v0,Q0=!X3(T);let Z0;if(Q0&&(Z0=i0&&i0.onVnodeBeforeUnmount)&&lt(Z0,x,T),D0&6)V2(T.component,A,$);else{if(D0&128){T.suspense.unmount(A,$);return}G0&&bn(T,null,x,"beforeUnmount"),D0&64?T.type.remove(T,x,A,b0,$):F&&!F.hasOnce&&(W!==K0||_0>0&&_0&64)?I2(F,x,A,!1,!0):(W===K0&&_0&384||!L&&D0&16)&&I2(z,x,A),$&&h1(T)}(Q0&&(Z0=i0&&i0.onVnodeUnmounted)||G0)&&D1(()=>{Z0&&lt(Z0,x,T),G0&&bn(T,null,x,"unmounted")},A)},h1=T=>{const{type:x,el:A,anchor:$,transition:L}=T;if(x===K0){B2(A,$);return}if(x===Oe){a0(T);return}const W=()=>{o(A),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(T.shapeFlag&1&&L&&!L.persisted){const{leave:i0,delayLeave:J}=L,z=()=>i0(A,W);J?J(T.el,W,z):z()}else W()},B2=(T,x)=>{let A;for(;T!==x;)A=S(T),o(T),T=A;o(x)},V2=(T,x,A)=>{const{bum:$,scope:L,job:W,subTree:i0,um:J,m:z,a:F}=T;Wr(z),Wr(F),$&&T5($),L.stop(),W&&(W.flags|=8,E2(i0,T,x,A)),J&&D1(J,x),D1(()=>{T.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},I2=(T,x,A,$=!1,L=!1,W=0)=>{for(let i0=W;i0<T.length;i0++)E2(T[i0],x,A,$,L)},R=T=>{if(T.shapeFlag&6)return R(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const x=S(T.anchor||T.el),A=x&&x[Bg];return A?S(A):x};let f0=!1;const e0=(T,x,A)=>{T==null?x._vnode&&E2(x._vnode,null,null,!0):Y(x._vnode||null,T,x,null,null,null,A),x._vnode=T,f0||(f0=!0,Ir(),As(),f0=!1)},b0={p:Y,um:E2,m:g2,r:h1,mt:Q,mc:s2,pc:k0,pbc:m2,n:R,o:t};let j0,a2;return{render:e0,hydrate:j0,createApp:sp(e0,j0)}}function De({type:t,props:n},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:r}function Mn({effect:t,job:n},r){r?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function dp(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function zs(t,n,r=!1){const s=t.children,o=n.children;if(B0(s)&&B0(o))for(let l=0;l<s.length;l++){const c=s[l];let f=o[l];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=o[l]=rn(o[l]),f.el=c.el),!r&&f.patchFlag!==-2&&zs(c,f)),f.type===J5&&(f.el=c.el)}}function gp(t){const n=t.slice(),r=[0];let s,o,l,c,f;const h=t.length;for(s=0;s<h;s++){const p=t[s];if(p!==0){if(o=r[r.length-1],t[o]<p){n[s]=o,r.push(s);continue}for(l=0,c=r.length-1;l<c;)f=l+c>>1,t[r[f]]<p?l=f+1:c=f;p<t[r[l]]&&(l>0&&(n[s]=r[l-1]),r[l]=s)}}for(l=r.length,c=r[l-1];l-- >0;)r[l]=c,c=n[c];return r}function Zs(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Zs(n)}function Wr(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const pp=Symbol.for("v-scx"),mp=()=>Ht(pp);function w5(t,n,r){return Js(t,n,r)}function Js(t,n,r=b2){const{immediate:s,deep:o,flush:l,once:c}=r,f=t1({},r),h=n&&s||!n&&l!=="post";let p;if(l4){if(l==="sync"){const M=mp();p=M.__watcherHandles||(M.__watcherHandles=[])}else if(!h){const M=()=>{};return M.stop=_t,M.resume=_t,M.pause=_t,M}}const v=a1;f.call=(M,G,Y)=>gt(M,v,G,Y);let y=!1;l==="post"?f.scheduler=M=>{D1(M,v&&v.suspense)}:l!=="sync"&&(y=!0,f.scheduler=(M,G)=>{G?M():O8(M)}),f.augmentJob=M=>{n&&(M.flags|=4),y&&(M.flags|=2,v&&(M.id=v.uid,M.i=v))};const S=Og(t,n,f);return l4&&(p?p.push(S):h&&S()),S}function vp(t,n,r){const s=this.proxy,o=K2(t)?t.includes(".")?Xs(s,t):()=>s[t]:t.bind(s,s);let l;$0(n)?l=n:(l=n.handler,r=n);const c=T4(this),f=Js(o,l.bind(s),r);return c(),f}function Xs(t,n){const r=n.split(".");return()=>{let s=t;for(let o=0;o<r.length&&s;o++)s=s[r[o]];return s}}const yp=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${U1(n)}Modifiers`]||t[`${Bn(n)}Modifiers`];function Tp(t,n,...r){if(t.isUnmounted)return;const s=t.vnode.props||b2;let o=r;const l=n.startsWith("update:"),c=l&&yp(s,n.slice(7));c&&(c.trim&&(o=r.map(v=>K2(v)?v.trim():v)),c.number&&(o=r.map(D5)));let f,h=s[f=Se(n)]||s[f=Se(U1(n))];!h&&l&&(h=s[f=Se(Bn(n))]),h&&gt(h,t,6,o);const p=s[f+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[f])return;t.emitted[f]=!0,gt(p,t,6,o)}}function Qs(t,n,r=!1){const s=n.emitsCache,o=s.get(t);if(o!==void 0)return o;const l=t.emits;let c={},f=!1;if(!$0(t)){const h=p=>{const v=Qs(p,n,!0);v&&(f=!0,t1(c,v))};!r&&n.mixins.length&&n.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!l&&!f?(k2(t)&&s.set(t,null),null):(B0(l)?l.forEach(h=>c[h]=null):t1(c,l),k2(t)&&s.set(t,c),c)}function Z5(t,n){return!t||!V5(n)?!1:(n=n.slice(2).replace(/Once$/,""),d2(t,n[0].toLowerCase()+n.slice(1))||d2(t,Bn(n))||d2(t,n))}function Ae(t){const{type:n,vnode:r,proxy:s,withProxy:o,propsOptions:[l],slots:c,attrs:f,emit:h,render:p,renderCache:v,props:y,data:S,setupState:M,ctx:G,inheritAttrs:Y}=t,U=L5(t);let n0,l0;try{if(r.shapeFlag&4){const a0=o||s,s0=a0;n0=ft(p.call(s0,a0,v,y,M,S,G)),l0=f}else{const a0=n;n0=ft(a0.length>1?a0(y,{attrs:f,slots:c,emit:h}):a0(y,null)),l0=n.props?f:xp(f)}}catch(a0){t4.length=0,j5(a0,t,1),n0=E1(Rn)}let u0=n0;if(l0&&Y!==!1){const a0=Object.keys(l0),{shapeFlag:s0}=u0;a0.length&&s0&7&&(l&&a0.some(v8)&&(l0=wp(l0,l)),u0=g3(u0,l0,!1,!0))}return r.dirs&&(u0=g3(u0,null,!1,!0),u0.dirs=u0.dirs?u0.dirs.concat(r.dirs):r.dirs),r.transition&&L8(u0,r.transition),n0=u0,L5(U),n0}const xp=t=>{let n;for(const r in t)(r==="class"||r==="style"||V5(r))&&((n||(n={}))[r]=t[r]);return n},wp=(t,n)=>{const r={};for(const s in t)(!v8(s)||!(s.slice(9)in n))&&(r[s]=t[s]);return r};function Sp(t,n,r){const{props:s,children:o,component:l}=t,{props:c,children:f,patchFlag:h}=n,p=l.emitsOptions;if(n.dirs||n.transition)return!0;if(r&&h>=0){if(h&1024)return!0;if(h&16)return s?Ur(s,c,p):!!c;if(h&8){const v=n.dynamicProps;for(let y=0;y<v.length;y++){const S=v[y];if(c[S]!==s[S]&&!Z5(p,S))return!0}}}else return(o||f)&&(!f||!f.$stable)?!0:s===c?!1:s?c?Ur(s,c,p):!0:!!c;return!1}function Ur(t,n,r){const s=Object.keys(n);if(s.length!==Object.keys(t).length)return!0;for(let o=0;o<s.length;o++){const l=s[o];if(n[l]!==t[l]&&!Z5(r,l))return!0}return!1}function bp({vnode:t,parent:n},r){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=n.vnode).el=r,n=n.parent;else break}}const to=t=>t.__isSuspense;function Mp(t,n){n&&n.pendingBranch?B0(t)?n.effects.push(...t):n.effects.push(t):Ng(t)}const K0=Symbol.for("v-fgt"),J5=Symbol.for("v-txt"),Rn=Symbol.for("v-cmt"),Oe=Symbol.for("v-stc"),t4=[];let L1=null;function S0(t=!1){t4.push(L1=t?null:[])}function Cp(){t4.pop(),L1=t4[t4.length-1]||null}let u4=1;function qr(t,n=!1){u4+=t,t<0&&L1&&n&&(L1.hasOnce=!0)}function no(t){return t.dynamicChildren=u4>0?L1||u3:null,Cp(),u4>0&&L1&&L1.push(t),t}function A0(t,n,r,s,o,l){return no(D(t,n,r,s,o,l,!0))}function s3(t,n,r,s,o){return no(E1(t,n,r,s,o,!0))}function R5(t){return t?t.__v_isVNode===!0:!1}function Y3(t,n){return t.type===n.type&&t.key===n.key}const eo=({key:t})=>t??null,S5=({ref:t,ref_key:n,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?K2(t)||c1(t)||$0(t)?{i:O1,r:t,k:n,f:!!r}:t:null);function D(t,n=null,r=null,s=0,o=null,l=t===K0?0:1,c=!1,f=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&eo(n),ref:n&&S5(n),scopeId:Ls,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:O1};return f?(R8(h,r),l&128&&t.normalize(h)):r&&(h.shapeFlag|=K2(r)?8:16),u4>0&&!c&&L1&&(h.patchFlag>0||l&6)&&h.patchFlag!==32&&L1.push(h),h}const E1=kp;function kp(t,n=null,r=null,s=0,o=null,l=!1){if((!t||t===Is)&&(t=Rn),R5(t)){const f=g3(t,n,!0);return r&&R8(f,r),u4>0&&!l&&L1&&(f.shapeFlag&6?L1[L1.indexOf(t)]=f:L1.push(f)),f.patchFlag=-2,f}if(Hp(t)&&(t=t.__vccOpts),n){n=Pp(n);let{class:f,style:h}=n;f&&!K2(f)&&(n.class=ct(f)),k2(h)&&(D8(h)&&!B0(h)&&(h=t1({},h)),n.style=x8(h))}const c=K2(t)?1:to(t)?128:Ig(t)?64:k2(t)?4:$0(t)?2:0;return D(t,n,r,s,o,c,l,!0)}function Pp(t){return t?D8(t)||Vs(t)?t1({},t):t:null}function g3(t,n,r=!1,s=!1){const{props:o,ref:l,patchFlag:c,children:f,transition:h}=t,p=n?Dp(o||{},n):o,v={__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&eo(p),ref:n&&n.ref?r&&l?B0(l)?l.concat(S5(n)):[l,S5(n)]:S5(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==K0?c===-1?16:c|16:c,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&g3(t.ssContent),ssFallback:t.ssFallback&&g3(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&s&&L8(v,h.clone(v)),v}function y0(t=" ",n=0){return E1(J5,null,t,n)}function An(t="",n=!1){return n?(S0(),s3(Rn,null,t)):E1(Rn,null,t)}function ft(t){return t==null||typeof t=="boolean"?E1(Rn):B0(t)?E1(K0,null,t.slice()):R5(t)?rn(t):E1(J5,null,String(t))}function rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:g3(t)}function R8(t,n){let r=0;const{shapeFlag:s}=t;if(n==null)n=null;else if(B0(n))r=16;else if(typeof n=="object")if(s&65){const o=n.default;o&&(o._c&&(o._d=!1),R8(t,o()),o._c&&(o._d=!0));return}else{r=32;const o=n._;!o&&!Vs(n)?n._ctx=O1:o===3&&O1&&(O1.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else $0(n)?(n={default:n,_ctx:O1},r=32):(n=String(n),s&64?(r=16,n=[y0(n)]):r=8);t.children=n,t.shapeFlag|=r}function Dp(...t){const n={};for(let r=0;r<t.length;r++){const s=t[r];for(const o in s)if(o==="class")n.class!==s.class&&(n.class=ct([n.class,s.class]));else if(o==="style")n.style=x8([n.style,s.style]);else if(V5(o)){const l=n[o],c=s[o];c&&l!==c&&!(B0(l)&&l.includes(c))&&(n[o]=l?[].concat(l,c):c)}else o!==""&&(n[o]=s[o])}return n}function lt(t,n,r,s=null){gt(t,n,7,[r,s])}const Ap=Gs();let Op=0;function Lp(t,n,r){const s=t.type,o=(n?n.appContext:t.appContext)||Ap,l={uid:Op++,vnode:t,type:s,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ig(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ws(s,o),emitsOptions:Qs(s,o),emit:null,emitted:null,propsDefaults:b2,inheritAttrs:s.inheritAttrs,ctx:b2,data:b2,props:b2,attrs:b2,slots:b2,refs:b2,setupState:b2,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=Tp.bind(null,l),t.ce&&t.ce(l),l}let a1=null,B5,e8;{const t=U5(),n=(r,s)=>{let o;return(o=t[r])||(o=t[r]=[]),o.push(s),l=>{o.length>1?o.forEach(c=>c(l)):o[0](l)}};B5=n("__VUE_INSTANCE_SETTERS__",r=>a1=r),e8=n("__VUE_SSR_SETTERS__",r=>l4=r)}const T4=t=>{const n=a1;return B5(t),t.scope.on(),()=>{t.scope.off(),B5(n)}},Kr=()=>{a1&&a1.scope.off(),B5(null)};function ro(t){return t.vnode.shapeFlag&4}let l4=!1;function Ep(t,n=!1,r=!1){n&&e8(n);const{props:s,children:o}=t.vnode,l=ro(t);op(t,s,l,n),cp(t,o,r);const c=l?Np(t,n):void 0;return n&&e8(!1),c}function Np(t,n){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xg);const{setup:s}=r;if(s){_n();const o=t.setupContext=s.length>1?Bp(t):null,l=T4(t),c=v4(s,t,0,[t.props,o]),f=rs(c);if(dn(),l(),(f||t.sp)&&!X3(t)&&Es(t),f){if(c.then(Kr,Kr),n)return c.then(h=>{jr(t,h,n)}).catch(h=>{j5(h,t,0)});t.asyncDep=c}else jr(t,c,n)}else io(t,n)}function jr(t,n,r){$0(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:k2(n)&&(t.setupState=ks(n)),io(t,r)}let zr;function io(t,n,r){const s=t.type;if(!t.render){if(!n&&zr&&!s.render){const o=s.template||E8(t).template;if(o){const{isCustomElement:l,compilerOptions:c}=t.appContext.config,{delimiters:f,compilerOptions:h}=s,p=t1(t1({isCustomElement:l,delimiters:f},c),h);s.render=zr(o,p)}}t.render=s.render||_t}{const o=T4(t);_n();try{Qg(t)}finally{dn(),o()}}}const Rp={get(t,n){return u1(t,"get",""),t[n]}};function Bp(t){const n=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,Rp),slots:t.slots,emit:t.emit,expose:n}}function X5(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ks(bg(t.exposed)),{get(n,r){if(r in n)return n[r];if(r in Q3)return Q3[r](t)},has(n,r){return r in n||r in Q3}})):t.proxy}function Ip(t,n=!0){return $0(t)?t.displayName||t.name:t.name||n&&t.__name}function Hp(t){return $0(t)&&"__vccOpts"in t}const $2=(t,n)=>Dg(t,n,l4);function sn(t,n,r){const s=arguments.length;return s===2?k2(n)&&!B0(n)?R5(n)?E1(t,null,[n]):E1(t,n):E1(t,null,n):(s>3?r=Array.prototype.slice.call(arguments,2):s===3&&R5(r)&&(r=[r]),E1(t,n,r))}const Gp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let r8;const Zr=typeof window<"u"&&window.trustedTypes;if(Zr)try{r8=Zr.createPolicy("vue",{createHTML:t=>t})}catch{}const so=r8?t=>r8.createHTML(t):t=>t,Yp="http://www.w3.org/2000/svg",$p="http://www.w3.org/1998/Math/MathML",Lt=typeof document<"u"?document:null,Jr=Lt&&Lt.createElement("template"),Vp={insert:(t,n,r)=>{n.insertBefore(t,r||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,r,s)=>{const o=n==="svg"?Lt.createElementNS(Yp,t):n==="mathml"?Lt.createElementNS($p,t):r?Lt.createElement(t,{is:r}):Lt.createElement(t);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>Lt.createTextNode(t),createComment:t=>Lt.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Lt.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,r,s,o,l){const c=r?r.previousSibling:n.lastChild;if(o&&(o===l||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),r),!(o===l||!(o=o.nextSibling)););else{Jr.innerHTML=so(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const f=Jr.content;if(s==="svg"||s==="mathml"){const h=f.firstChild;for(;h.firstChild;)f.appendChild(h.firstChild);f.removeChild(h)}n.insertBefore(f,r)}return[c?c.nextSibling:n.firstChild,r?r.previousSibling:n.lastChild]}},Fp=Symbol("_vtc");function Wp(t,n,r){const s=t[Fp];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?t.removeAttribute("class"):r?t.setAttribute("class",n):t.className=n}const Xr=Symbol("_vod"),Up=Symbol("_vsh"),qp=Symbol(""),Kp=/(^|;)\s*display\s*:/;function jp(t,n,r){const s=t.style,o=K2(r);let l=!1;if(r&&!o){if(n)if(K2(n))for(const c of n.split(";")){const f=c.slice(0,c.indexOf(":")).trim();r[f]==null&&b5(s,f,"")}else for(const c in n)r[c]==null&&b5(s,c,"");for(const c in r)c==="display"&&(l=!0),b5(s,c,r[c])}else if(o){if(n!==r){const c=s[qp];c&&(r+=";"+c),s.cssText=r,l=Kp.test(r)}}else n&&t.removeAttribute("style");Xr in t&&(t[Xr]=l?s.display:"",t[Up]&&(s.display="none"))}const Qr=/\s*!important$/;function b5(t,n,r){if(B0(r))r.forEach(s=>b5(t,n,s));else if(r==null&&(r=""),n.startsWith("--"))t.setProperty(n,r);else{const s=zp(t,n);Qr.test(r)?t.setProperty(Bn(s),r.replace(Qr,""),"important"):t[s]=r}}const ti=["Webkit","Moz","ms"],Le={};function zp(t,n){const r=Le[n];if(r)return r;let s=U1(n);if(s!=="filter"&&s in t)return Le[n]=s;s=W5(s);for(let o=0;o<ti.length;o++){const l=ti[o]+s;if(l in t)return Le[n]=l}return n}const ni="http://www.w3.org/1999/xlink";function ei(t,n,r,s,o,l=eg(n)){s&&n.startsWith("xlink:")?r==null?t.removeAttributeNS(ni,n.slice(6,n.length)):t.setAttributeNS(ni,n,r):r==null||l&&!us(r)?t.removeAttribute(n):t.setAttribute(n,l?"":dt(r)?String(r):r)}function ri(t,n,r,s,o){if(n==="innerHTML"||n==="textContent"){r!=null&&(t[n]=n==="innerHTML"?so(r):r);return}const l=t.tagName;if(n==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?t.getAttribute("value")||"":t.value,h=r==null?t.type==="checkbox"?"on":"":String(r);(f!==h||!("_value"in t))&&(t.value=h),r==null&&t.removeAttribute(n),t._value=r;return}let c=!1;if(r===""||r==null){const f=typeof t[n];f==="boolean"?r=us(r):r==null&&f==="string"?(r="",c=!0):f==="number"&&(r=0,c=!0)}try{t[n]=r}catch{}c&&t.removeAttribute(o||n)}function un(t,n,r,s){t.addEventListener(n,r,s)}function Zp(t,n,r,s){t.removeEventListener(n,r,s)}const ii=Symbol("_vei");function Jp(t,n,r,s,o=null){const l=t[ii]||(t[ii]={}),c=l[n];if(s&&c)c.value=s;else{const[f,h]=Xp(n);if(s){const p=l[n]=nm(s,o);un(t,f,p,h)}else c&&(Zp(t,f,c,h),l[n]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function Xp(t){let n;if(si.test(t)){n={};let s;for(;s=t.match(si);)t=t.slice(0,t.length-s[0].length),n[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bn(t.slice(2)),n]}let Ee=0;const Qp=Promise.resolve(),tm=()=>Ee||(Qp.then(()=>Ee=0),Ee=Date.now());function nm(t,n){const r=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=r.attached)return;gt(em(s,r.value),n,5,[s])};return r.value=t,r.attached=tm(),r}function em(t,n){if(B0(n)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},n.map(s=>o=>!o._stopped&&s&&s(o))}else return n}const oi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rm=(t,n,r,s,o,l)=>{const c=o==="svg";n==="class"?Wp(t,s,c):n==="style"?jp(t,r,s):V5(n)?v8(n)||Jp(t,n,r,s,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):im(t,n,s,c))?(ri(t,n,s),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&ei(t,n,s,c,l,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!K2(s))?ri(t,U1(n),s,l,n):(n==="true-value"?t._trueValue=s:n==="false-value"&&(t._falseValue=s),ei(t,n,s,c))};function im(t,n,r,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in t&&oi(n)&&$0(r));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return oi(n)&&K2(r)?!1:n in t}const p3=t=>{const n=t.props["onUpdate:modelValue"]||!1;return B0(n)?r=>T5(n,r):n};function sm(t){t.target.composing=!0}function ui(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Gt=Symbol("_assign"),Q2={created(t,{modifiers:{lazy:n,trim:r,number:s}},o){t[Gt]=p3(o);const l=s||o.props&&o.props.type==="number";un(t,n?"change":"input",c=>{if(c.target.composing)return;let f=t.value;r&&(f=f.trim()),l&&(f=D5(f)),t[Gt](f)}),r&&un(t,"change",()=>{t.value=t.value.trim()}),n||(un(t,"compositionstart",sm),un(t,"compositionend",ui),un(t,"change",ui))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,oldValue:r,modifiers:{lazy:s,trim:o,number:l}},c){if(t[Gt]=p3(c),t.composing)return;const f=(l||t.type==="number")&&!/^0\d/.test(t.value)?D5(t.value):t.value,h=n??"";f!==h&&(document.activeElement===t&&t.type!=="range"&&(s&&n===r||o&&t.value.trim()===h)||(t.value=h))}},Ne={deep:!0,created(t,n,r){t[Gt]=p3(r),un(t,"change",()=>{const s=t._modelValue,o=a4(t),l=t.checked,c=t[Gt];if(B0(s)){const f=w8(s,o),h=f!==-1;if(l&&!h)c(s.concat(o));else if(!l&&h){const p=[...s];p.splice(f,1),c(p)}}else if(y3(s)){const f=new Set(s);l?f.add(o):f.delete(o),c(f)}else c(oo(t,l))})},mounted:li,beforeUpdate(t,n,r){t[Gt]=p3(r),li(t,n,r)}};function li(t,{value:n,oldValue:r},s){t._modelValue=n;let o;if(B0(n))o=w8(n,s.props.value)>-1;else if(y3(n))o=n.has(s.props.value);else{if(n===r)return;o=m4(n,oo(t,!0))}t.checked!==o&&(t.checked=o)}const Pn={deep:!0,created(t,{value:n,modifiers:{number:r}},s){const o=y3(n);un(t,"change",()=>{const l=Array.prototype.filter.call(t.options,c=>c.selected).map(c=>r?D5(a4(c)):a4(c));t[Gt](t.multiple?o?new Set(l):l:l[0]),t._assigning=!0,A8(()=>{t._assigning=!1})}),t[Gt]=p3(s)},mounted(t,{value:n}){ai(t,n)},beforeUpdate(t,n,r){t[Gt]=p3(r)},updated(t,{value:n}){t._assigning||ai(t,n)}};function ai(t,n){const r=t.multiple,s=B0(n);if(!(r&&!s&&!y3(n))){for(let o=0,l=t.options.length;o<l;o++){const c=t.options[o],f=a4(c);if(r)if(s){const h=typeof f;h==="string"||h==="number"?c.selected=n.some(p=>String(p)===String(f)):c.selected=w8(n,f)>-1}else c.selected=n.has(f);else if(m4(a4(c),n)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function a4(t){return"_value"in t?t._value:t.value}function oo(t,n){const r=n?"_trueValue":"_falseValue";return r in t?t[r]:n}const om=t1({patchProp:rm},Vp);let ci;function um(){return ci||(ci=hp(om))}const lm=(...t)=>{const n=um().createApp(...t),{mount:r}=n;return n.mount=s=>{const o=cm(s);if(!o)return;const l=n._component;!$0(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const c=r(o,!1,am(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),c},n};function am(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cm(t){return K2(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const r3=typeof document<"u";function uo(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&uo(t.default)}const h2=Object.assign;function Re(t,n){const r={};for(const s in n){const o=n[s];r[s]=tt(o)?o.map(t):t(o)}return r}const n4=()=>{},tt=Array.isArray,lo=/#/g,hm=/&/g,_m=/\//g,dm=/=/g,gm=/\?/g,ao=/\+/g,pm=/%5B/g,mm=/%5D/g,co=/%5E/g,vm=/%60/g,fo=/%7B/g,ym=/%7C/g,ho=/%7D/g,Tm=/%20/g;function B8(t){return encodeURI(""+t).replace(ym,"|").replace(pm,"[").replace(mm,"]")}function xm(t){return B8(t).replace(fo,"{").replace(ho,"}").replace(co,"^")}function i8(t){return B8(t).replace(ao,"%2B").replace(Tm,"+").replace(lo,"%23").replace(hm,"%26").replace(vm,"`").replace(fo,"{").replace(ho,"}").replace(co,"^")}function wm(t){return i8(t).replace(dm,"%3D")}function Sm(t){return B8(t).replace(lo,"%23").replace(gm,"%3F")}function bm(t){return t==null?"":Sm(t).replace(_m,"%2F")}function c4(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Mm=/\/$/,Cm=t=>t.replace(Mm,"");function Be(t,n,r="/"){let s,o={},l="",c="";const f=n.indexOf("#");let h=n.indexOf("?");return f<h&&f>=0&&(h=-1),h>-1&&(s=n.slice(0,h),l=n.slice(h+1,f>-1?f:n.length),o=t(l)),f>-1&&(s=s||n.slice(0,f),c=n.slice(f,n.length)),s=Am(s??n,r),{fullPath:s+(l&&"?")+l+c,path:s,query:o,hash:c4(c)}}function km(t,n){const r=n.query?t(n.query):"";return n.path+(r&&"?")+r+(n.hash||"")}function fi(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Pm(t,n,r){const s=n.matched.length-1,o=r.matched.length-1;return s>-1&&s===o&&m3(n.matched[s],r.matched[o])&&_o(n.params,r.params)&&t(n.query)===t(r.query)&&n.hash===r.hash}function m3(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function _o(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(!Dm(t[r],n[r]))return!1;return!0}function Dm(t,n){return tt(t)?hi(t,n):tt(n)?hi(n,t):t===n}function hi(t,n){return tt(n)?t.length===n.length&&t.every((r,s)=>r===n[s]):t.length===1&&t[0]===n}function Am(t,n){if(t.startsWith("/"))return t;if(!t)return n;const r=n.split("/"),s=t.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let l=r.length-1,c,f;for(c=0;c<s.length;c++)if(f=s[c],f!==".")if(f==="..")l>1&&l--;else break;return r.slice(0,l).join("/")+"/"+s.slice(c).join("/")}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var f4;(function(t){t.pop="pop",t.push="push"})(f4||(f4={}));var e4;(function(t){t.back="back",t.forward="forward",t.unknown=""})(e4||(e4={}));function Om(t){if(!t)if(r3){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Cm(t)}const Lm=/^[^#]+#/;function Em(t,n){return t.replace(Lm,"#")+n}function Nm(t,n){const r=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:n.behavior,left:s.left-r.left-(n.left||0),top:s.top-r.top-(n.top||0)}}const Q5=()=>({left:window.scrollX,top:window.scrollY});function Rm(t){let n;if("el"in t){const r=t.el,s=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?s?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;n=Nm(o,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function _i(t,n){return(history.state?history.state.position-n:-1)+t}const s8=new Map;function Bm(t,n){s8.set(t,n)}function Im(t){const n=s8.get(t);return s8.delete(t),n}let Hm=()=>location.protocol+"//"+location.host;function go(t,n){const{pathname:r,search:s,hash:o}=n,l=t.indexOf("#");if(l>-1){let f=o.includes(t.slice(l))?t.slice(l).length:1,h=o.slice(f);return h[0]!=="/"&&(h="/"+h),fi(h,"")}return fi(r,t)+s+o}function Gm(t,n,r,s){let o=[],l=[],c=null;const f=({state:S})=>{const M=go(t,location),G=r.value,Y=n.value;let U=0;if(S){if(r.value=M,n.value=S,c&&c===G){c=null;return}U=Y?S.position-Y.position:0}else s(M);o.forEach(n0=>{n0(r.value,G,{delta:U,type:f4.pop,direction:U?U>0?e4.forward:e4.back:e4.unknown})})};function h(){c=r.value}function p(S){o.push(S);const M=()=>{const G=o.indexOf(S);G>-1&&o.splice(G,1)};return l.push(M),M}function v(){const{history:S}=window;S.state&&S.replaceState(h2({},S.state,{scroll:Q5()}),"")}function y(){for(const S of l)S();l=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",v)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",v,{passive:!0}),{pauseListeners:h,listen:p,destroy:y}}function di(t,n,r,s=!1,o=!1){return{back:t,current:n,forward:r,replaced:s,position:window.history.length,scroll:o?Q5():null}}function Ym(t){const{history:n,location:r}=window,s={value:go(t,r)},o={value:n.state};o.value||l(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(h,p,v){const y=t.indexOf("#"),S=y>-1?(r.host&&document.querySelector("base")?t:t.slice(y))+h:Hm()+t+h;try{n[v?"replaceState":"pushState"](p,"",S),o.value=p}catch(M){console.error(M),r[v?"replace":"assign"](S)}}function c(h,p){const v=h2({},n.state,di(o.value.back,h,o.value.forward,!0),p,{position:o.value.position});l(h,v,!0),s.value=h}function f(h,p){const v=h2({},o.value,n.state,{forward:h,scroll:Q5()});l(v.current,v,!0);const y=h2({},di(s.value,h,null),{position:v.position+1},p);l(h,y,!1),s.value=h}return{location:s,state:o,push:f,replace:c}}function $m(t){t=Om(t);const n=Ym(t),r=Gm(t,n.state,n.location,n.replace);function s(l,c=!0){c||r.pauseListeners(),history.go(l)}const o=h2({location:"",base:t,go:s,createHref:Em.bind(null,t)},n,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function Vm(t){return typeof t=="string"||t&&typeof t=="object"}function po(t){return typeof t=="string"||typeof t=="symbol"}const mo=Symbol("");var gi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gi||(gi={}));function v3(t,n){return h2(new Error,{type:t,[mo]:!0},n)}function Dt(t,n){return t instanceof Error&&mo in t&&(n==null||!!(t.type&n))}const pi="[^/]+?",Fm={sensitive:!1,strict:!1,start:!0,end:!0},Wm=/[.+*?^${}()[\]/\\]/g;function Um(t,n){const r=h2({},Fm,n),s=[];let o=r.start?"^":"";const l=[];for(const p of t){const v=p.length?[]:[90];r.strict&&!p.length&&(o+="/");for(let y=0;y<p.length;y++){const S=p[y];let M=40+(r.sensitive?.25:0);if(S.type===0)y||(o+="/"),o+=S.value.replace(Wm,"\\$&"),M+=40;else if(S.type===1){const{value:G,repeatable:Y,optional:U,regexp:n0}=S;l.push({name:G,repeatable:Y,optional:U});const l0=n0||pi;if(l0!==pi){M+=10;try{new RegExp(`(${l0})`)}catch(a0){throw new Error(`Invalid custom RegExp for param "${G}" (${l0}): `+a0.message)}}let u0=Y?`((?:${l0})(?:/(?:${l0}))*)`:`(${l0})`;y||(u0=U&&p.length<2?`(?:/${u0})`:"/"+u0),U&&(u0+="?"),o+=u0,M+=20,U&&(M+=-8),Y&&(M+=-20),l0===".*"&&(M+=-50)}v.push(M)}s.push(v)}if(r.strict&&r.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const c=new RegExp(o,r.sensitive?"":"i");function f(p){const v=p.match(c),y={};if(!v)return null;for(let S=1;S<v.length;S++){const M=v[S]||"",G=l[S-1];y[G.name]=M&&G.repeatable?M.split("/"):M}return y}function h(p){let v="",y=!1;for(const S of t){(!y||!v.endsWith("/"))&&(v+="/"),y=!1;for(const M of S)if(M.type===0)v+=M.value;else if(M.type===1){const{value:G,repeatable:Y,optional:U}=M,n0=G in p?p[G]:"";if(tt(n0)&&!Y)throw new Error(`Provided param "${G}" is an array but it is not repeatable (* or + modifiers)`);const l0=tt(n0)?n0.join("/"):n0;if(!l0)if(U)S.length<2&&(v.endsWith("/")?v=v.slice(0,-1):y=!0);else throw new Error(`Missing required param "${G}"`);v+=l0}}return v||"/"}return{re:c,score:s,keys:l,parse:f,stringify:h}}function qm(t,n){let r=0;for(;r<t.length&&r<n.length;){const s=n[r]-t[r];if(s)return s;r++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function vo(t,n){let r=0;const s=t.score,o=n.score;for(;r<s.length&&r<o.length;){const l=qm(s[r],o[r]);if(l)return l;r++}if(Math.abs(o.length-s.length)===1){if(mi(s))return 1;if(mi(o))return-1}return o.length-s.length}function mi(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const Km={type:0,value:""},jm=/[a-zA-Z0-9_]/;function zm(t){if(!t)return[[]];if(t==="/")return[[Km]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(M){throw new Error(`ERR (${r})/"${p}": ${M}`)}let r=0,s=r;const o=[];let l;function c(){l&&o.push(l),l=[]}let f=0,h,p="",v="";function y(){p&&(r===0?l.push({type:0,value:p}):r===1||r===2||r===3?(l.length>1&&(h==="*"||h==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:v,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):n("Invalid state to consume buffer"),p="")}function S(){p+=h}for(;f<t.length;){if(h=t[f++],h==="\\"&&r!==2){s=r,r=4;continue}switch(r){case 0:h==="/"?(p&&y(),c()):h===":"?(y(),r=1):S();break;case 4:S(),r=s;break;case 1:h==="("?r=2:jm.test(h)?S():(y(),r=0,h!=="*"&&h!=="?"&&h!=="+"&&f--);break;case 2:h===")"?v[v.length-1]=="\\"?v=v.slice(0,-1)+h:r=3:v+=h;break;case 3:y(),r=0,h!=="*"&&h!=="?"&&h!=="+"&&f--,v="";break;default:n("Unknown state");break}}return r===2&&n(`Unfinished custom RegExp for param "${p}"`),y(),c(),o}function Zm(t,n,r){const s=Um(zm(t.path),r),o=h2(s,{record:t,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function Jm(t,n){const r=[],s=new Map;n=xi({strict:!1,end:!0,sensitive:!1},n);function o(y){return s.get(y)}function l(y,S,M){const G=!M,Y=yi(y);Y.aliasOf=M&&M.record;const U=xi(n,y),n0=[Y];if("alias"in y){const a0=typeof y.alias=="string"?[y.alias]:y.alias;for(const s0 of a0)n0.push(yi(h2({},Y,{components:M?M.record.components:Y.components,path:s0,aliasOf:M?M.record:Y})))}let l0,u0;for(const a0 of n0){const{path:s0}=a0;if(S&&s0[0]!=="/"){const P0=S.record.path,M0=P0[P0.length-1]==="/"?"":"/";a0.path=S.record.path+(s0&&M0+s0)}if(l0=Zm(a0,S,U),M?M.alias.push(l0):(u0=u0||l0,u0!==l0&&u0.alias.push(l0),G&&y.name&&!Ti(l0)&&c(y.name)),yo(l0)&&h(l0),Y.children){const P0=Y.children;for(let M0=0;M0<P0.length;M0++)l(P0[M0],l0,M&&M.children[M0])}M=M||l0}return u0?()=>{c(u0)}:n4}function c(y){if(po(y)){const S=s.get(y);S&&(s.delete(y),r.splice(r.indexOf(S),1),S.children.forEach(c),S.alias.forEach(c))}else{const S=r.indexOf(y);S>-1&&(r.splice(S,1),y.record.name&&s.delete(y.record.name),y.children.forEach(c),y.alias.forEach(c))}}function f(){return r}function h(y){const S=tv(y,r);r.splice(S,0,y),y.record.name&&!Ti(y)&&s.set(y.record.name,y)}function p(y,S){let M,G={},Y,U;if("name"in y&&y.name){if(M=s.get(y.name),!M)throw v3(1,{location:y});U=M.record.name,G=h2(vi(S.params,M.keys.filter(u0=>!u0.optional).concat(M.parent?M.parent.keys.filter(u0=>u0.optional):[]).map(u0=>u0.name)),y.params&&vi(y.params,M.keys.map(u0=>u0.name))),Y=M.stringify(G)}else if(y.path!=null)Y=y.path,M=r.find(u0=>u0.re.test(Y)),M&&(G=M.parse(Y),U=M.record.name);else{if(M=S.name?s.get(S.name):r.find(u0=>u0.re.test(S.path)),!M)throw v3(1,{location:y,currentLocation:S});U=M.record.name,G=h2({},S.params,y.params),Y=M.stringify(G)}const n0=[];let l0=M;for(;l0;)n0.unshift(l0.record),l0=l0.parent;return{name:U,path:Y,params:G,matched:n0,meta:Qm(n0)}}t.forEach(y=>l(y));function v(){r.length=0,s.clear()}return{addRoute:l,resolve:p,removeRoute:c,clearRoutes:v,getRoutes:f,getRecordMatcher:o}}function vi(t,n){const r={};for(const s of n)s in t&&(r[s]=t[s]);return r}function yi(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Xm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Xm(t){const n={},r=t.props||!1;if("component"in t)n.default=r;else for(const s in t.components)n[s]=typeof r=="object"?r[s]:r;return n}function Ti(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qm(t){return t.reduce((n,r)=>h2(n,r.meta),{})}function xi(t,n){const r={};for(const s in t)r[s]=s in n?n[s]:t[s];return r}function tv(t,n){let r=0,s=n.length;for(;r!==s;){const l=r+s>>1;vo(t,n[l])<0?s=l:r=l+1}const o=nv(t);return o&&(s=n.lastIndexOf(o,s-1)),s}function nv(t){let n=t;for(;n=n.parent;)if(yo(n)&&vo(t,n)===0)return n}function yo({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ev(t){const n={};if(t===""||t==="?")return n;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<s.length;++o){const l=s[o].replace(ao," "),c=l.indexOf("="),f=c4(c<0?l:l.slice(0,c)),h=c<0?null:c4(l.slice(c+1));if(f in n){let p=n[f];tt(p)||(p=n[f]=[p]),p.push(h)}else n[f]=h}return n}function wi(t){let n="";for(let r in t){const s=t[r];if(r=wm(r),s==null){s!==void 0&&(n+=(n.length?"&":"")+r);continue}(tt(s)?s.map(l=>l&&i8(l)):[s&&i8(s)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+r,l!=null&&(n+="="+l))})}return n}function rv(t){const n={};for(const r in t){const s=t[r];s!==void 0&&(n[r]=tt(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return n}const iv=Symbol(""),Si=Symbol(""),I8=Symbol(""),To=Symbol(""),o8=Symbol("");function $3(){let t=[];function n(s){return t.push(s),()=>{const o=t.indexOf(s);o>-1&&t.splice(o,1)}}function r(){t=[]}return{add:n,list:()=>t.slice(),reset:r}}function on(t,n,r,s,o,l=c=>c()){const c=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((f,h)=>{const p=S=>{S===!1?h(v3(4,{from:r,to:n})):S instanceof Error?h(S):Vm(S)?h(v3(2,{from:n,to:S})):(c&&s.enterCallbacks[o]===c&&typeof S=="function"&&c.push(S),f())},v=l(()=>t.call(s&&s.instances[o],n,r,p));let y=Promise.resolve(v);t.length<3&&(y=y.then(p)),y.catch(S=>h(S))})}function Ie(t,n,r,s,o=l=>l()){const l=[];for(const c of t)for(const f in c.components){let h=c.components[f];if(!(n!=="beforeRouteEnter"&&!c.instances[f]))if(uo(h)){const v=(h.__vccOpts||h)[n];v&&l.push(on(v,r,s,c,f,o))}else{let p=h();l.push(()=>p.then(v=>{if(!v)throw new Error(`Couldn't resolve component "${f}" at "${c.path}"`);const y=fm(v)?v.default:v;c.mods[f]=v,c.components[f]=y;const M=(y.__vccOpts||y)[n];return M&&on(M,r,s,c,f,o)()}))}}return l}function bi(t){const n=Ht(I8),r=Ht(To),s=$2(()=>{const h=T2(t.to);return n.resolve(h)}),o=$2(()=>{const{matched:h}=s.value,{length:p}=h,v=h[p-1],y=r.matched;if(!v||!y.length)return-1;const S=y.findIndex(m3.bind(null,v));if(S>-1)return S;const M=Mi(h[p-2]);return p>1&&Mi(v)===M&&y[y.length-1].path!==M?y.findIndex(m3.bind(null,h[p-2])):S}),l=$2(()=>o.value>-1&&av(r.params,s.value.params)),c=$2(()=>o.value>-1&&o.value===r.matched.length-1&&_o(r.params,s.value.params));function f(h={}){if(lv(h)){const p=n[T2(t.replace)?"replace":"push"](T2(t.to)).catch(n4);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:s,href:$2(()=>s.value.href),isActive:l,isExactActive:c,navigate:f}}function sv(t){return t.length===1?t[0]:t}const ov=y4({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bi,setup(t,{slots:n}){const r=K5(bi(t)),{options:s}=Ht(I8),o=$2(()=>({[Ci(t.activeClass,s.linkActiveClass,"router-link-active")]:r.isActive,[Ci(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const l=n.default&&sv(n.default(r));return t.custom?l:sn("a",{"aria-current":r.isExactActive?t.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},l)}}}),uv=ov;function lv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function av(t,n){for(const r in n){const s=n[r],o=t[r];if(typeof s=="string"){if(s!==o)return!1}else if(!tt(o)||o.length!==s.length||s.some((l,c)=>l!==o[c]))return!1}return!0}function Mi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ci=(t,n,r)=>t??n??r,cv=y4({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:r}){const s=Ht(o8),o=$2(()=>t.route||s.value),l=Ht(Si,0),c=$2(()=>{let p=T2(l);const{matched:v}=o.value;let y;for(;(y=v[p])&&!y.components;)p++;return p}),f=$2(()=>o.value.matched[c.value]);x5(Si,$2(()=>c.value+1)),x5(iv,f),x5(o8,o);const h=r2();return w5(()=>[h.value,f.value,t.name],([p,v,y],[S,M,G])=>{v&&(v.instances[y]=p,M&&M!==v&&p&&p===S&&(v.leaveGuards.size||(v.leaveGuards=M.leaveGuards),v.updateGuards.size||(v.updateGuards=M.updateGuards))),p&&v&&(!M||!m3(v,M)||!S)&&(v.enterCallbacks[y]||[]).forEach(Y=>Y(p))},{flush:"post"}),()=>{const p=o.value,v=t.name,y=f.value,S=y&&y.components[v];if(!S)return ki(r.default,{Component:S,route:p});const M=y.props[v],G=M?M===!0?p.params:typeof M=="function"?M(p):M:null,U=sn(S,h2({},G,n,{onVnodeUnmounted:n0=>{n0.component.isUnmounted&&(y.instances[v]=null)},ref:h}));return ki(r.default,{Component:U,route:p})||U}}});function ki(t,n){if(!t)return null;const r=t(n);return r.length===1?r[0]:r}const xo=cv;function fv(t){const n=Jm(t.routes,t),r=t.parseQuery||ev,s=t.stringifyQuery||wi,o=t.history,l=$3(),c=$3(),f=$3(),h=Mg(nn);let p=nn;r3&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=Re.bind(null,R=>""+R),y=Re.bind(null,bm),S=Re.bind(null,c4);function M(R,f0){let e0,b0;return po(R)?(e0=n.getRecordMatcher(R),b0=f0):b0=R,n.addRoute(b0,e0)}function G(R){const f0=n.getRecordMatcher(R);f0&&n.removeRoute(f0)}function Y(){return n.getRoutes().map(R=>R.record)}function U(R){return!!n.getRecordMatcher(R)}function n0(R,f0){if(f0=h2({},f0||h.value),typeof R=="string"){const x=Be(r,R,f0.path),A=n.resolve({path:x.path},f0),$=o.createHref(x.fullPath);return h2(x,A,{params:S(A.params),hash:c4(x.hash),redirectedFrom:void 0,href:$})}let e0;if(R.path!=null)e0=h2({},R,{path:Be(r,R.path,f0.path).path});else{const x=h2({},R.params);for(const A in x)x[A]==null&&delete x[A];e0=h2({},R,{params:y(x)}),f0.params=y(f0.params)}const b0=n.resolve(e0,f0),j0=R.hash||"";b0.params=v(S(b0.params));const a2=km(s,h2({},R,{hash:xm(j0),path:b0.path})),T=o.createHref(a2);return h2({fullPath:a2,hash:j0,query:s===wi?rv(R.query):R.query||{}},b0,{redirectedFrom:void 0,href:T})}function l0(R){return typeof R=="string"?Be(r,R,h.value.path):h2({},R)}function u0(R,f0){if(p!==R)return v3(8,{from:f0,to:R})}function a0(R){return M0(R)}function s0(R){return a0(h2(l0(R),{replace:!0}))}function P0(R){const f0=R.matched[R.matched.length-1];if(f0&&f0.redirect){const{redirect:e0}=f0;let b0=typeof e0=="function"?e0(R):e0;return typeof b0=="string"&&(b0=b0.includes("?")||b0.includes("#")?b0=l0(b0):{path:b0},b0.params={}),h2({query:R.query,hash:R.hash,params:b0.path!=null?{}:R.params},b0)}}function M0(R,f0){const e0=p=n0(R),b0=h.value,j0=R.state,a2=R.force,T=R.replace===!0,x=P0(e0);if(x)return M0(h2(l0(x),{state:typeof x=="object"?h2({},j0,x.state):j0,force:a2,replace:T}),f0||e0);const A=e0;A.redirectedFrom=f0;let $;return!a2&&Pm(s,b0,e0)&&($=v3(16,{to:A,from:b0}),g2(b0,b0,!0,!1)),($?Promise.resolve($):m2(A,b0)).catch(L=>Dt(L)?Dt(L,2)?L:G2(L):k0(L,A,b0)).then(L=>{if(L){if(Dt(L,2))return M0(h2({replace:T},l0(L.to),{state:typeof L.to=="object"?h2({},j0,L.to.state):j0,force:a2}),f0||A)}else L=r0(A,b0,!0,T,j0);return P2(A,b0,L),L})}function s2(R,f0){const e0=u0(R,f0);return e0?Promise.reject(e0):Promise.resolve()}function o2(R){const f0=B2.values().next().value;return f0&&typeof f0.runWithContext=="function"?f0.runWithContext(R):R()}function m2(R,f0){let e0;const[b0,j0,a2]=hv(R,f0);e0=Ie(b0.reverse(),"beforeRouteLeave",R,f0);for(const x of b0)x.leaveGuards.forEach(A=>{e0.push(on(A,R,f0))});const T=s2.bind(null,R,f0);return e0.push(T),I2(e0).then(()=>{e0=[];for(const x of l.list())e0.push(on(x,R,f0));return e0.push(T),I2(e0)}).then(()=>{e0=Ie(j0,"beforeRouteUpdate",R,f0);for(const x of j0)x.updateGuards.forEach(A=>{e0.push(on(A,R,f0))});return e0.push(T),I2(e0)}).then(()=>{e0=[];for(const x of a2)if(x.beforeEnter)if(tt(x.beforeEnter))for(const A of x.beforeEnter)e0.push(on(A,R,f0));else e0.push(on(x.beforeEnter,R,f0));return e0.push(T),I2(e0)}).then(()=>(R.matched.forEach(x=>x.enterCallbacks={}),e0=Ie(a2,"beforeRouteEnter",R,f0,o2),e0.push(T),I2(e0))).then(()=>{e0=[];for(const x of c.list())e0.push(on(x,R,f0));return e0.push(T),I2(e0)}).catch(x=>Dt(x,8)?x:Promise.reject(x))}function P2(R,f0,e0){f.list().forEach(b0=>o2(()=>b0(R,f0,e0)))}function r0(R,f0,e0,b0,j0){const a2=u0(R,f0);if(a2)return a2;const T=f0===nn,x=r3?history.state:{};e0&&(b0||T?o.replace(R.fullPath,h2({scroll:T&&x&&x.scroll},j0)):o.push(R.fullPath,j0)),h.value=R,g2(R,f0,e0,T),G2()}let H;function Q(){H||(H=o.listen((R,f0,e0)=>{if(!V2.listening)return;const b0=n0(R),j0=P0(b0);if(j0){M0(h2(j0,{replace:!0,force:!0}),b0).catch(n4);return}p=b0;const a2=h.value;r3&&Bm(_i(a2.fullPath,e0.delta),Q5()),m2(b0,a2).catch(T=>Dt(T,12)?T:Dt(T,2)?(M0(h2(l0(T.to),{force:!0}),b0).then(x=>{Dt(x,20)&&!e0.delta&&e0.type===f4.pop&&o.go(-1,!1)}).catch(n4),Promise.reject()):(e0.delta&&o.go(-e0.delta,!1),k0(T,b0,a2))).then(T=>{T=T||r0(b0,a2,!1),T&&(e0.delta&&!Dt(T,8)?o.go(-e0.delta,!1):e0.type===f4.pop&&Dt(T,20)&&o.go(-1,!1)),P2(b0,a2,T)}).catch(n4)}))}let x0=$3(),H0=$3(),g0;function k0(R,f0,e0){G2(R);const b0=H0.list();return b0.length?b0.forEach(j0=>j0(R,f0,e0)):console.error(R),Promise.reject(R)}function L2(){return g0&&h.value!==nn?Promise.resolve():new Promise((R,f0)=>{x0.add([R,f0])})}function G2(R){return g0||(g0=!R,Q(),x0.list().forEach(([f0,e0])=>R?e0(R):f0()),x0.reset()),R}function g2(R,f0,e0,b0){const{scrollBehavior:j0}=t;if(!r3||!j0)return Promise.resolve();const a2=!e0&&Im(_i(R.fullPath,0))||(b0||!e0)&&history.state&&history.state.scroll||null;return A8().then(()=>j0(R,f0,a2)).then(T=>T&&Rm(T)).catch(T=>k0(T,R,f0))}const E2=R=>o.go(R);let h1;const B2=new Set,V2={currentRoute:h,listening:!0,addRoute:M,removeRoute:G,clearRoutes:n.clearRoutes,hasRoute:U,getRoutes:Y,resolve:n0,options:t,push:a0,replace:s0,go:E2,back:()=>E2(-1),forward:()=>E2(1),beforeEach:l.add,beforeResolve:c.add,afterEach:f.add,onError:H0.add,isReady:L2,install(R){const f0=this;R.component("RouterLink",uv),R.component("RouterView",xo),R.config.globalProperties.$router=f0,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>T2(h)}),r3&&!h1&&h.value===nn&&(h1=!0,a0(o.location).catch(j0=>{}));const e0={};for(const j0 in nn)Object.defineProperty(e0,j0,{get:()=>h.value[j0],enumerable:!0});R.provide(I8,f0),R.provide(To,bs(e0)),R.provide(o8,h);const b0=R.unmount;B2.add(R),R.unmount=function(){B2.delete(R),B2.size<1&&(p=nn,H&&H(),H=null,h.value=nn,h1=!1,g0=!1),b0()}}};function I2(R){return R.reduce((f0,e0)=>f0.then(()=>o2(e0)),Promise.resolve())}return V2}function hv(t,n){const r=[],s=[],o=[],l=Math.max(n.matched.length,t.matched.length);for(let c=0;c<l;c++){const f=n.matched[c];f&&(t.matched.find(p=>m3(p,f))?s.push(f):r.push(f));const h=t.matched[c];h&&(n.matched.find(p=>m3(p,h))||o.push(h))}return[r,s,o]}const _v=y4({__name:"App",setup(t){return(n,r)=>(S0(),s3(T2(xo)))}});//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var wo;function X(){return wo.apply(null,arguments)}function dv(t){wo=t}function nt(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function En(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function u2(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function H8(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var n;for(n in t)if(u2(t,n))return!1;return!0}function w1(t){return t===void 0}function Vt(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function x4(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function So(t,n){var r=[],s,o=t.length;for(s=0;s<o;++s)r.push(n(t[s],s));return r}function ln(t,n){for(var r in n)u2(n,r)&&(t[r]=n[r]);return u2(n,"toString")&&(t.toString=n.toString),u2(n,"valueOf")&&(t.valueOf=n.valueOf),t}function mt(t,n,r,s){return qo(t,n,r,s,!0).utc()}function gv(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function W0(t){return t._pf==null&&(t._pf=gv()),t._pf}var u8;Array.prototype.some?u8=Array.prototype.some:u8=function(t){var n=Object(this),r=n.length>>>0,s;for(s=0;s<r;s++)if(s in n&&t.call(this,n[s],s,n))return!0;return!1};function G8(t){var n=null,r=!1,s=t._d&&!isNaN(t._d.getTime());if(s&&(n=W0(t),r=u8.call(n.parsedDateParts,function(o){return o!=null}),s=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),t._strict&&(s=s&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=s;else return s;return t._isValid}function t6(t){var n=mt(NaN);return t!=null?ln(W0(n),t):W0(n).userInvalidated=!0,n}var Pi=X.momentProperties=[],He=!1;function Y8(t,n){var r,s,o,l=Pi.length;if(w1(n._isAMomentObject)||(t._isAMomentObject=n._isAMomentObject),w1(n._i)||(t._i=n._i),w1(n._f)||(t._f=n._f),w1(n._l)||(t._l=n._l),w1(n._strict)||(t._strict=n._strict),w1(n._tzm)||(t._tzm=n._tzm),w1(n._isUTC)||(t._isUTC=n._isUTC),w1(n._offset)||(t._offset=n._offset),w1(n._pf)||(t._pf=W0(n)),w1(n._locale)||(t._locale=n._locale),l>0)for(r=0;r<l;r++)s=Pi[r],o=n[s],w1(o)||(t[s]=o);return t}function w4(t){Y8(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),He===!1&&(He=!0,X.updateOffset(this),He=!1)}function et(t){return t instanceof w4||t!=null&&t._isAMomentObject!=null}function bo(t){X.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function q1(t,n){var r=!0;return ln(function(){if(X.deprecationHandler!=null&&X.deprecationHandler(null,t),r){var s=[],o,l,c,f=arguments.length;for(l=0;l<f;l++){if(o="",typeof arguments[l]=="object"){o+=`
[`+l+"] ";for(c in arguments[0])u2(arguments[0],c)&&(o+=c+": "+arguments[0][c]+", ");o=o.slice(0,-2)}else o=arguments[l];s.push(o)}bo(t+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var Di={};function Mo(t,n){X.deprecationHandler!=null&&X.deprecationHandler(t,n),Di[t]||(bo(n),Di[t]=!0)}X.suppressDeprecationWarnings=!1;X.deprecationHandler=null;function vt(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function pv(t){var n,r;for(r in t)u2(t,r)&&(n=t[r],vt(n)?this[r]=n:this["_"+r]=n);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function l8(t,n){var r=ln({},t),s;for(s in n)u2(n,s)&&(En(t[s])&&En(n[s])?(r[s]={},ln(r[s],t[s]),ln(r[s],n[s])):n[s]!=null?r[s]=n[s]:delete r[s]);for(s in t)u2(t,s)&&!u2(n,s)&&En(t[s])&&(r[s]=ln({},r[s]));return r}function $8(t){t!=null&&this.set(t)}var a8;Object.keys?a8=Object.keys:a8=function(t){var n,r=[];for(n in t)u2(t,n)&&r.push(n);return r};var mv={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function vv(t,n,r){var s=this._calendar[t]||this._calendar.sameElse;return vt(s)?s.call(n,r):s}function pt(t,n,r){var s=""+Math.abs(t),o=n-s.length,l=t>=0;return(l?r?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+s}var V8=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,m5=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ge={},h3={};function O0(t,n,r,s){var o=s;typeof s=="string"&&(o=function(){return this[s]()}),t&&(h3[t]=o),n&&(h3[n[0]]=function(){return pt(o.apply(this,arguments),n[1],n[2])}),r&&(h3[r]=function(){return this.localeData().ordinal(o.apply(this,arguments),t)})}function yv(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function Tv(t){var n=t.match(V8),r,s;for(r=0,s=n.length;r<s;r++)h3[n[r]]?n[r]=h3[n[r]]:n[r]=yv(n[r]);return function(o){var l="",c;for(c=0;c<s;c++)l+=vt(n[c])?n[c].call(o,t):n[c];return l}}function M5(t,n){return t.isValid()?(n=Co(n,t.localeData()),Ge[n]=Ge[n]||Tv(n),Ge[n](t)):t.localeData().invalidDate()}function Co(t,n){var r=5;function s(o){return n.longDateFormat(o)||o}for(m5.lastIndex=0;r>=0&&m5.test(t);)t=t.replace(m5,s),m5.lastIndex=0,r-=1;return t}var xv={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function wv(t){var n=this._longDateFormat[t],r=this._longDateFormat[t.toUpperCase()];return n||!r?n:(this._longDateFormat[t]=r.match(V8).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[t])}var Sv="Invalid date";function bv(){return this._invalidDate}var Mv="%d",Cv=/\d{1,2}/;function kv(t){return this._ordinal.replace("%d",t)}var Pv={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Dv(t,n,r,s){var o=this._relativeTime[r];return vt(o)?o(t,n,r,s):o.replace(/%d/i,t)}function Av(t,n){var r=this._relativeTime[t>0?"future":"past"];return vt(r)?r(n):r.replace(/%s/i,n)}var Ai={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function K1(t){return typeof t=="string"?Ai[t]||Ai[t.toLowerCase()]:void 0}function F8(t){var n={},r,s;for(s in t)u2(t,s)&&(r=K1(s),r&&(n[r]=t[s]));return n}var Ov={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Lv(t){var n=[],r;for(r in t)u2(t,r)&&n.push({unit:r,priority:Ov[r]});return n.sort(function(s,o){return s.priority-o.priority}),n}var ko=/\d/,N1=/\d\d/,Po=/\d{3}/,W8=/\d{4}/,n6=/[+-]?\d{6}/,O2=/\d\d?/,Do=/\d\d\d\d?/,Ao=/\d\d\d\d\d\d?/,e6=/\d{1,3}/,U8=/\d{1,4}/,r6=/[+-]?\d{1,6}/,T3=/\d+/,i6=/[+-]?\d+/,Ev=/Z|[+-]\d\d:?\d\d/gi,s6=/Z|[+-]\d\d(?::?\d\d)?/gi,Nv=/[+-]?\d+(\.\d{1,3})?/,S4=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,x3=/^[1-9]\d?/,q8=/^([1-9]\d|\d)/,I5;I5={};function m0(t,n,r){I5[t]=vt(n)?n:function(s,o){return s&&r?r:n}}function Rv(t,n){return u2(I5,t)?I5[t](n._strict,n._locale):new RegExp(Bv(t))}function Bv(t){return Yt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,s,o,l){return r||s||o||l}))}function Yt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function F1(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function X0(t){var n=+t,r=0;return n!==0&&isFinite(n)&&(r=F1(n)),r}var c8={};function x2(t,n){var r,s=n,o;for(typeof t=="string"&&(t=[t]),Vt(n)&&(s=function(l,c){c[n]=X0(l)}),o=t.length,r=0;r<o;r++)c8[t[r]]=s}function b4(t,n){x2(t,function(r,s,o,l){o._w=o._w||{},n(r,o._w,o,l)})}function Iv(t,n,r){n!=null&&u2(c8,t)&&c8[t](n,r._a,r,t)}function o6(t){return t%4===0&&t%100!==0||t%400===0}var f1=0,Bt=1,ht=2,J2=3,X1=4,It=5,On=6,Hv=7,Gv=8;O0("Y",0,0,function(){var t=this.year();return t<=9999?pt(t,4):"+"+t});O0(0,["YY",2],0,function(){return this.year()%100});O0(0,["YYYY",4],0,"year");O0(0,["YYYYY",5],0,"year");O0(0,["YYYYYY",6,!0],0,"year");m0("Y",i6);m0("YY",O2,N1);m0("YYYY",U8,W8);m0("YYYYY",r6,n6);m0("YYYYYY",r6,n6);x2(["YYYYY","YYYYYY"],f1);x2("YYYY",function(t,n){n[f1]=t.length===2?X.parseTwoDigitYear(t):X0(t)});x2("YY",function(t,n){n[f1]=X.parseTwoDigitYear(t)});x2("Y",function(t,n){n[f1]=parseInt(t,10)});function r4(t){return o6(t)?366:365}X.parseTwoDigitYear=function(t){return X0(t)+(X0(t)>68?1900:2e3)};var Oo=w3("FullYear",!0);function Yv(){return o6(this.year())}function w3(t,n){return function(r){return r!=null?(Lo(this,t,r),X.updateOffset(this,n),this):h4(this,t)}}function h4(t,n){if(!t.isValid())return NaN;var r=t._d,s=t._isUTC;switch(n){case"Milliseconds":return s?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return s?r.getUTCSeconds():r.getSeconds();case"Minutes":return s?r.getUTCMinutes():r.getMinutes();case"Hours":return s?r.getUTCHours():r.getHours();case"Date":return s?r.getUTCDate():r.getDate();case"Day":return s?r.getUTCDay():r.getDay();case"Month":return s?r.getUTCMonth():r.getMonth();case"FullYear":return s?r.getUTCFullYear():r.getFullYear();default:return NaN}}function Lo(t,n,r){var s,o,l,c,f;if(!(!t.isValid()||isNaN(r))){switch(s=t._d,o=t._isUTC,n){case"Milliseconds":return void(o?s.setUTCMilliseconds(r):s.setMilliseconds(r));case"Seconds":return void(o?s.setUTCSeconds(r):s.setSeconds(r));case"Minutes":return void(o?s.setUTCMinutes(r):s.setMinutes(r));case"Hours":return void(o?s.setUTCHours(r):s.setHours(r));case"Date":return void(o?s.setUTCDate(r):s.setDate(r));case"FullYear":break;default:return}l=r,c=t.month(),f=t.date(),f=f===29&&c===1&&!o6(l)?28:f,o?s.setUTCFullYear(l,c,f):s.setFullYear(l,c,f)}}function $v(t){return t=K1(t),vt(this[t])?this[t]():this}function Vv(t,n){if(typeof t=="object"){t=F8(t);var r=Lv(t),s,o=r.length;for(s=0;s<o;s++)this[r[s].unit](t[r[s].unit])}else if(t=K1(t),vt(this[t]))return this[t](n);return this}function Fv(t,n){return(t%n+n)%n}var q2;Array.prototype.indexOf?q2=Array.prototype.indexOf:q2=function(t){var n;for(n=0;n<this.length;++n)if(this[n]===t)return n;return-1};function K8(t,n){if(isNaN(t)||isNaN(n))return NaN;var r=Fv(n,12);return t+=(n-r)/12,r===1?o6(t)?29:28:31-r%7%2}O0("M",["MM",2],"Mo",function(){return this.month()+1});O0("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});O0("MMMM",0,0,function(t){return this.localeData().months(this,t)});m0("M",O2,x3);m0("MM",O2,N1);m0("MMM",function(t,n){return n.monthsShortRegex(t)});m0("MMMM",function(t,n){return n.monthsRegex(t)});x2(["M","MM"],function(t,n){n[Bt]=X0(t)-1});x2(["MMM","MMMM"],function(t,n,r,s){var o=r._locale.monthsParse(t,s,r._strict);o!=null?n[Bt]=o:W0(r).invalidMonth=t});var Wv="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Eo="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),No=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Uv=S4,qv=S4;function Kv(t,n){return t?nt(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||No).test(n)?"format":"standalone"][t.month()]:nt(this._months)?this._months:this._months.standalone}function jv(t,n){return t?nt(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[No.test(n)?"format":"standalone"][t.month()]:nt(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function zv(t,n,r){var s,o,l,c=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)l=mt([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(l,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(l,"").toLocaleLowerCase();return r?n==="MMM"?(o=q2.call(this._shortMonthsParse,c),o!==-1?o:null):(o=q2.call(this._longMonthsParse,c),o!==-1?o:null):n==="MMM"?(o=q2.call(this._shortMonthsParse,c),o!==-1?o:(o=q2.call(this._longMonthsParse,c),o!==-1?o:null)):(o=q2.call(this._longMonthsParse,c),o!==-1?o:(o=q2.call(this._shortMonthsParse,c),o!==-1?o:null))}function Zv(t,n,r){var s,o,l;if(this._monthsParseExact)return zv.call(this,t,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(o=mt([2e3,s]),r&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),!r&&!this._monthsParse[s]&&(l="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[s]=new RegExp(l.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[s].test(t))return s;if(r&&n==="MMM"&&this._shortMonthsParse[s].test(t))return s;if(!r&&this._monthsParse[s].test(t))return s}}function Ro(t,n){if(!t.isValid())return t;if(typeof n=="string"){if(/^\d+$/.test(n))n=X0(n);else if(n=t.localeData().monthsParse(n),!Vt(n))return t}var r=n,s=t.date();return s=s<29?s:Math.min(s,K8(t.year(),r)),t._isUTC?t._d.setUTCMonth(r,s):t._d.setMonth(r,s),t}function Bo(t){return t!=null?(Ro(this,t),X.updateOffset(this,!0),this):h4(this,"Month")}function Jv(){return K8(this.year(),this.month())}function Xv(t){return this._monthsParseExact?(u2(this,"_monthsRegex")||Io.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(u2(this,"_monthsShortRegex")||(this._monthsShortRegex=Uv),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function Qv(t){return this._monthsParseExact?(u2(this,"_monthsRegex")||Io.call(this),t?this._monthsStrictRegex:this._monthsRegex):(u2(this,"_monthsRegex")||(this._monthsRegex=qv),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function Io(){function t(h,p){return p.length-h.length}var n=[],r=[],s=[],o,l,c,f;for(o=0;o<12;o++)l=mt([2e3,o]),c=Yt(this.monthsShort(l,"")),f=Yt(this.months(l,"")),n.push(c),r.push(f),s.push(f),s.push(c);n.sort(t),r.sort(t),s.sort(t),this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function ty(t,n,r,s,o,l,c){var f;return t<100&&t>=0?(f=new Date(t+400,n,r,s,o,l,c),isFinite(f.getFullYear())&&f.setFullYear(t)):f=new Date(t,n,r,s,o,l,c),f}function _4(t){var n,r;return t<100&&t>=0?(r=Array.prototype.slice.call(arguments),r[0]=t+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(t)):n=new Date(Date.UTC.apply(null,arguments)),n}function H5(t,n,r){var s=7+n-r,o=(7+_4(t,0,s).getUTCDay()-n)%7;return-o+s-1}function Ho(t,n,r,s,o){var l=(7+r-s)%7,c=H5(t,s,o),f=1+7*(n-1)+l+c,h,p;return f<=0?(h=t-1,p=r4(h)+f):f>r4(t)?(h=t+1,p=f-r4(t)):(h=t,p=f),{year:h,dayOfYear:p}}function d4(t,n,r){var s=H5(t.year(),n,r),o=Math.floor((t.dayOfYear()-s-1)/7)+1,l,c;return o<1?(c=t.year()-1,l=o+$t(c,n,r)):o>$t(t.year(),n,r)?(l=o-$t(t.year(),n,r),c=t.year()+1):(c=t.year(),l=o),{week:l,year:c}}function $t(t,n,r){var s=H5(t,n,r),o=H5(t+1,n,r);return(r4(t)-s+o)/7}O0("w",["ww",2],"wo","week");O0("W",["WW",2],"Wo","isoWeek");m0("w",O2,x3);m0("ww",O2,N1);m0("W",O2,x3);m0("WW",O2,N1);b4(["w","ww","W","WW"],function(t,n,r,s){n[s.substr(0,1)]=X0(t)});function ny(t){return d4(t,this._week.dow,this._week.doy).week}var ey={dow:0,doy:6};function ry(){return this._week.dow}function iy(){return this._week.doy}function sy(t){var n=this.localeData().week(this);return t==null?n:this.add((t-n)*7,"d")}function oy(t){var n=d4(this,1,4).week;return t==null?n:this.add((t-n)*7,"d")}O0("d",0,"do","day");O0("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});O0("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});O0("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});O0("e",0,0,"weekday");O0("E",0,0,"isoWeekday");m0("d",O2);m0("e",O2);m0("E",O2);m0("dd",function(t,n){return n.weekdaysMinRegex(t)});m0("ddd",function(t,n){return n.weekdaysShortRegex(t)});m0("dddd",function(t,n){return n.weekdaysRegex(t)});b4(["dd","ddd","dddd"],function(t,n,r,s){var o=r._locale.weekdaysParse(t,s,r._strict);o!=null?n.d=o:W0(r).invalidWeekday=t});b4(["d","e","E"],function(t,n,r,s){n[s]=X0(t)});function uy(t,n){return typeof t!="string"?t:isNaN(t)?(t=n.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function ly(t,n){return typeof t=="string"?n.weekdaysParse(t)%7||7:isNaN(t)?null:t}function j8(t,n){return t.slice(n,7).concat(t.slice(0,n))}var ay="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Go="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),cy="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),fy=S4,hy=S4,_y=S4;function dy(t,n){var r=nt(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return t===!0?j8(r,this._week.dow):t?r[t.day()]:r}function gy(t){return t===!0?j8(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function py(t){return t===!0?j8(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function my(t,n,r){var s,o,l,c=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)l=mt([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(l,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(l,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(l,"").toLocaleLowerCase();return r?n==="dddd"?(o=q2.call(this._weekdaysParse,c),o!==-1?o:null):n==="ddd"?(o=q2.call(this._shortWeekdaysParse,c),o!==-1?o:null):(o=q2.call(this._minWeekdaysParse,c),o!==-1?o:null):n==="dddd"?(o=q2.call(this._weekdaysParse,c),o!==-1||(o=q2.call(this._shortWeekdaysParse,c),o!==-1)?o:(o=q2.call(this._minWeekdaysParse,c),o!==-1?o:null)):n==="ddd"?(o=q2.call(this._shortWeekdaysParse,c),o!==-1||(o=q2.call(this._weekdaysParse,c),o!==-1)?o:(o=q2.call(this._minWeekdaysParse,c),o!==-1?o:null)):(o=q2.call(this._minWeekdaysParse,c),o!==-1||(o=q2.call(this._weekdaysParse,c),o!==-1)?o:(o=q2.call(this._shortWeekdaysParse,c),o!==-1?o:null))}function vy(t,n,r){var s,o,l;if(this._weekdaysParseExact)return my.call(this,t,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(o=mt([2e3,1]).day(s),r&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(o,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(o,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(o,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(l="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[s]=new RegExp(l.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[s].test(t))return s;if(r&&n==="ddd"&&this._shortWeekdaysParse[s].test(t))return s;if(r&&n==="dd"&&this._minWeekdaysParse[s].test(t))return s;if(!r&&this._weekdaysParse[s].test(t))return s}}function yy(t){if(!this.isValid())return t!=null?this:NaN;var n=h4(this,"Day");return t!=null?(t=uy(t,this.localeData()),this.add(t-n,"d")):n}function Ty(t){if(!this.isValid())return t!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return t==null?n:this.add(t-n,"d")}function xy(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var n=ly(t,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function wy(t){return this._weekdaysParseExact?(u2(this,"_weekdaysRegex")||z8.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(u2(this,"_weekdaysRegex")||(this._weekdaysRegex=fy),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Sy(t){return this._weekdaysParseExact?(u2(this,"_weekdaysRegex")||z8.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u2(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=hy),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function by(t){return this._weekdaysParseExact?(u2(this,"_weekdaysRegex")||z8.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u2(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=_y),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function z8(){function t(v,y){return y.length-v.length}var n=[],r=[],s=[],o=[],l,c,f,h,p;for(l=0;l<7;l++)c=mt([2e3,1]).day(l),f=Yt(this.weekdaysMin(c,"")),h=Yt(this.weekdaysShort(c,"")),p=Yt(this.weekdays(c,"")),n.push(f),r.push(h),s.push(p),o.push(f),o.push(h),o.push(p);n.sort(t),r.sort(t),s.sort(t),o.sort(t),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Z8(){return this.hours()%12||12}function My(){return this.hours()||24}O0("H",["HH",2],0,"hour");O0("h",["hh",2],0,Z8);O0("k",["kk",2],0,My);O0("hmm",0,0,function(){return""+Z8.apply(this)+pt(this.minutes(),2)});O0("hmmss",0,0,function(){return""+Z8.apply(this)+pt(this.minutes(),2)+pt(this.seconds(),2)});O0("Hmm",0,0,function(){return""+this.hours()+pt(this.minutes(),2)});O0("Hmmss",0,0,function(){return""+this.hours()+pt(this.minutes(),2)+pt(this.seconds(),2)});function Yo(t,n){O0(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Yo("a",!0);Yo("A",!1);function $o(t,n){return n._meridiemParse}m0("a",$o);m0("A",$o);m0("H",O2,q8);m0("h",O2,x3);m0("k",O2,x3);m0("HH",O2,N1);m0("hh",O2,N1);m0("kk",O2,N1);m0("hmm",Do);m0("hmmss",Ao);m0("Hmm",Do);m0("Hmmss",Ao);x2(["H","HH"],J2);x2(["k","kk"],function(t,n,r){var s=X0(t);n[J2]=s===24?0:s});x2(["a","A"],function(t,n,r){r._isPm=r._locale.isPM(t),r._meridiem=t});x2(["h","hh"],function(t,n,r){n[J2]=X0(t),W0(r).bigHour=!0});x2("hmm",function(t,n,r){var s=t.length-2;n[J2]=X0(t.substr(0,s)),n[X1]=X0(t.substr(s)),W0(r).bigHour=!0});x2("hmmss",function(t,n,r){var s=t.length-4,o=t.length-2;n[J2]=X0(t.substr(0,s)),n[X1]=X0(t.substr(s,2)),n[It]=X0(t.substr(o)),W0(r).bigHour=!0});x2("Hmm",function(t,n,r){var s=t.length-2;n[J2]=X0(t.substr(0,s)),n[X1]=X0(t.substr(s))});x2("Hmmss",function(t,n,r){var s=t.length-4,o=t.length-2;n[J2]=X0(t.substr(0,s)),n[X1]=X0(t.substr(s,2)),n[It]=X0(t.substr(o))});function Cy(t){return(t+"").toLowerCase().charAt(0)==="p"}var ky=/[ap]\.?m?\.?/i,Py=w3("Hours",!0);function Dy(t,n,r){return t>11?r?"pm":"PM":r?"am":"AM"}var Vo={calendar:mv,longDateFormat:xv,invalidDate:Sv,ordinal:Mv,dayOfMonthOrdinalParse:Cv,relativeTime:Pv,months:Wv,monthsShort:Eo,week:ey,weekdays:ay,weekdaysMin:cy,weekdaysShort:Go,meridiemParse:ky},R2={},V3={},g4;function Ay(t,n){var r,s=Math.min(t.length,n.length);for(r=0;r<s;r+=1)if(t[r]!==n[r])return r;return s}function Oi(t){return t&&t.toLowerCase().replace("_","-")}function Oy(t){for(var n=0,r,s,o,l;n<t.length;){for(l=Oi(t[n]).split("-"),r=l.length,s=Oi(t[n+1]),s=s?s.split("-"):null;r>0;){if(o=u6(l.slice(0,r).join("-")),o)return o;if(s&&s.length>=r&&Ay(l,s)>=r-1)break;r--}n++}return g4}function Ly(t){return!!(t&&t.match("^[^/\\\\]*$"))}function u6(t){var n=null,r;if(R2[t]===void 0&&typeof P5<"u"&&P5&&P5.exports&&Ly(t))try{n=g4._abbr,r=require,r("./locale/"+t),fn(n)}catch{R2[t]=null}return R2[t]}function fn(t,n){var r;return t&&(w1(n)?r=Wt(t):r=J8(t,n),r?g4=r:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),g4._abbr}function J8(t,n){if(n!==null){var r,s=Vo;if(n.abbr=t,R2[t]!=null)Mo("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=R2[t]._config;else if(n.parentLocale!=null)if(R2[n.parentLocale]!=null)s=R2[n.parentLocale]._config;else if(r=u6(n.parentLocale),r!=null)s=r._config;else return V3[n.parentLocale]||(V3[n.parentLocale]=[]),V3[n.parentLocale].push({name:t,config:n}),null;return R2[t]=new $8(l8(s,n)),V3[t]&&V3[t].forEach(function(o){J8(o.name,o.config)}),fn(t),R2[t]}else return delete R2[t],null}function Ey(t,n){if(n!=null){var r,s,o=Vo;R2[t]!=null&&R2[t].parentLocale!=null?R2[t].set(l8(R2[t]._config,n)):(s=u6(t),s!=null&&(o=s._config),n=l8(o,n),s==null&&(n.abbr=t),r=new $8(n),r.parentLocale=R2[t],R2[t]=r),fn(t)}else R2[t]!=null&&(R2[t].parentLocale!=null?(R2[t]=R2[t].parentLocale,t===fn()&&fn(t)):R2[t]!=null&&delete R2[t]);return R2[t]}function Wt(t){var n;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return g4;if(!nt(t)){if(n=u6(t),n)return n;t=[t]}return Oy(t)}function Ny(){return a8(R2)}function X8(t){var n,r=t._a;return r&&W0(t).overflow===-2&&(n=r[Bt]<0||r[Bt]>11?Bt:r[ht]<1||r[ht]>K8(r[f1],r[Bt])?ht:r[J2]<0||r[J2]>24||r[J2]===24&&(r[X1]!==0||r[It]!==0||r[On]!==0)?J2:r[X1]<0||r[X1]>59?X1:r[It]<0||r[It]>59?It:r[On]<0||r[On]>999?On:-1,W0(t)._overflowDayOfYear&&(n<f1||n>ht)&&(n=ht),W0(t)._overflowWeeks&&n===-1&&(n=Hv),W0(t)._overflowWeekday&&n===-1&&(n=Gv),W0(t).overflow=n),t}var Ry=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,By=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Iy=/Z|[+-]\d\d(?::?\d\d)?/,v5=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Ye=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Hy=/^\/?Date\((-?\d+)/i,Gy=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Yy={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Fo(t){var n,r,s=t._i,o=Ry.exec(s)||By.exec(s),l,c,f,h,p=v5.length,v=Ye.length;if(o){for(W0(t).iso=!0,n=0,r=p;n<r;n++)if(v5[n][1].exec(o[1])){c=v5[n][0],l=v5[n][2]!==!1;break}if(c==null){t._isValid=!1;return}if(o[3]){for(n=0,r=v;n<r;n++)if(Ye[n][1].exec(o[3])){f=(o[2]||" ")+Ye[n][0];break}if(f==null){t._isValid=!1;return}}if(!l&&f!=null){t._isValid=!1;return}if(o[4])if(Iy.exec(o[4]))h="Z";else{t._isValid=!1;return}t._f=c+(f||"")+(h||""),t7(t)}else t._isValid=!1}function $y(t,n,r,s,o,l){var c=[Vy(t),Eo.indexOf(n),parseInt(r,10),parseInt(s,10),parseInt(o,10)];return l&&c.push(parseInt(l,10)),c}function Vy(t){var n=parseInt(t,10);return n<=49?2e3+n:n<=999?1900+n:n}function Fy(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Wy(t,n,r){if(t){var s=Go.indexOf(t),o=new Date(n[0],n[1],n[2]).getDay();if(s!==o)return W0(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Uy(t,n,r){if(t)return Yy[t];if(n)return 0;var s=parseInt(r,10),o=s%100,l=(s-o)/100;return l*60+o}function Wo(t){var n=Gy.exec(Fy(t._i)),r;if(n){if(r=$y(n[4],n[3],n[2],n[5],n[6],n[7]),!Wy(n[1],r,t))return;t._a=r,t._tzm=Uy(n[8],n[9],n[10]),t._d=_4.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),W0(t).rfc2822=!0}else t._isValid=!1}function qy(t){var n=Hy.exec(t._i);if(n!==null){t._d=new Date(+n[1]);return}if(Fo(t),t._isValid===!1)delete t._isValid;else return;if(Wo(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:X.createFromInputFallback(t)}X.createFromInputFallback=q1("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function i3(t,n,r){return t??n??r}function Ky(t){var n=new Date(X.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function Q8(t){var n,r,s=[],o,l,c;if(!t._d){for(o=Ky(t),t._w&&t._a[ht]==null&&t._a[Bt]==null&&jy(t),t._dayOfYear!=null&&(c=i3(t._a[f1],o[f1]),(t._dayOfYear>r4(c)||t._dayOfYear===0)&&(W0(t)._overflowDayOfYear=!0),r=_4(c,0,t._dayOfYear),t._a[Bt]=r.getUTCMonth(),t._a[ht]=r.getUTCDate()),n=0;n<3&&t._a[n]==null;++n)t._a[n]=s[n]=o[n];for(;n<7;n++)t._a[n]=s[n]=t._a[n]==null?n===2?1:0:t._a[n];t._a[J2]===24&&t._a[X1]===0&&t._a[It]===0&&t._a[On]===0&&(t._nextDay=!0,t._a[J2]=0),t._d=(t._useUTC?_4:ty).apply(null,s),l=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[J2]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==l&&(W0(t).weekdayMismatch=!0)}}function jy(t){var n,r,s,o,l,c,f,h,p;n=t._w,n.GG!=null||n.W!=null||n.E!=null?(l=1,c=4,r=i3(n.GG,t._a[f1],d4(A2(),1,4).year),s=i3(n.W,1),o=i3(n.E,1),(o<1||o>7)&&(h=!0)):(l=t._locale._week.dow,c=t._locale._week.doy,p=d4(A2(),l,c),r=i3(n.gg,t._a[f1],p.year),s=i3(n.w,p.week),n.d!=null?(o=n.d,(o<0||o>6)&&(h=!0)):n.e!=null?(o=n.e+l,(n.e<0||n.e>6)&&(h=!0)):o=l),s<1||s>$t(r,l,c)?W0(t)._overflowWeeks=!0:h!=null?W0(t)._overflowWeekday=!0:(f=Ho(r,s,o,l,c),t._a[f1]=f.year,t._dayOfYear=f.dayOfYear)}X.ISO_8601=function(){};X.RFC_2822=function(){};function t7(t){if(t._f===X.ISO_8601){Fo(t);return}if(t._f===X.RFC_2822){Wo(t);return}t._a=[],W0(t).empty=!0;var n=""+t._i,r,s,o,l,c,f=n.length,h=0,p,v;for(o=Co(t._f,t._locale).match(V8)||[],v=o.length,r=0;r<v;r++)l=o[r],s=(n.match(Rv(l,t))||[])[0],s&&(c=n.substr(0,n.indexOf(s)),c.length>0&&W0(t).unusedInput.push(c),n=n.slice(n.indexOf(s)+s.length),h+=s.length),h3[l]?(s?W0(t).empty=!1:W0(t).unusedTokens.push(l),Iv(l,s,t)):t._strict&&!s&&W0(t).unusedTokens.push(l);W0(t).charsLeftOver=f-h,n.length>0&&W0(t).unusedInput.push(n),t._a[J2]<=12&&W0(t).bigHour===!0&&t._a[J2]>0&&(W0(t).bigHour=void 0),W0(t).parsedDateParts=t._a.slice(0),W0(t).meridiem=t._meridiem,t._a[J2]=zy(t._locale,t._a[J2],t._meridiem),p=W0(t).era,p!==null&&(t._a[f1]=t._locale.erasConvertYear(p,t._a[f1])),Q8(t),X8(t)}function zy(t,n,r){var s;return r==null?n:t.meridiemHour!=null?t.meridiemHour(n,r):(t.isPM!=null&&(s=t.isPM(r),s&&n<12&&(n+=12),!s&&n===12&&(n=0)),n)}function Zy(t){var n,r,s,o,l,c,f=!1,h=t._f.length;if(h===0){W0(t).invalidFormat=!0,t._d=new Date(NaN);return}for(o=0;o<h;o++)l=0,c=!1,n=Y8({},t),t._useUTC!=null&&(n._useUTC=t._useUTC),n._f=t._f[o],t7(n),G8(n)&&(c=!0),l+=W0(n).charsLeftOver,l+=W0(n).unusedTokens.length*10,W0(n).score=l,f?l<s&&(s=l,r=n):(s==null||l<s||c)&&(s=l,r=n,c&&(f=!0));ln(t,r||n)}function Jy(t){if(!t._d){var n=F8(t._i),r=n.day===void 0?n.date:n.day;t._a=So([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(s){return s&&parseInt(s,10)}),Q8(t)}}function Xy(t){var n=new w4(X8(Uo(t)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Uo(t){var n=t._i,r=t._f;return t._locale=t._locale||Wt(t._l),n===null||r===void 0&&n===""?t6({nullInput:!0}):(typeof n=="string"&&(t._i=n=t._locale.preparse(n)),et(n)?new w4(X8(n)):(x4(n)?t._d=n:nt(r)?Zy(t):r?t7(t):Qy(t),G8(t)||(t._d=null),t))}function Qy(t){var n=t._i;w1(n)?t._d=new Date(X.now()):x4(n)?t._d=new Date(n.valueOf()):typeof n=="string"?qy(t):nt(n)?(t._a=So(n.slice(0),function(r){return parseInt(r,10)}),Q8(t)):En(n)?Jy(t):Vt(n)?t._d=new Date(n):X.createFromInputFallback(t)}function qo(t,n,r,s,o){var l={};return(n===!0||n===!1)&&(s=n,n=void 0),(r===!0||r===!1)&&(s=r,r=void 0),(En(t)&&H8(t)||nt(t)&&t.length===0)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=o,l._l=r,l._i=t,l._f=n,l._strict=s,Xy(l)}function A2(t,n,r,s){return qo(t,n,r,s,!1)}var tT=q1("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=A2.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:t6()}),nT=q1("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=A2.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:t6()});function Ko(t,n){var r,s;if(n.length===1&&nt(n[0])&&(n=n[0]),!n.length)return A2();for(r=n[0],s=1;s<n.length;++s)(!n[s].isValid()||n[s][t](r))&&(r=n[s]);return r}function eT(){var t=[].slice.call(arguments,0);return Ko("isBefore",t)}function rT(){var t=[].slice.call(arguments,0);return Ko("isAfter",t)}var iT=function(){return Date.now?Date.now():+new Date},F3=["year","quarter","month","week","day","hour","minute","second","millisecond"];function sT(t){var n,r=!1,s,o=F3.length;for(n in t)if(u2(t,n)&&!(q2.call(F3,n)!==-1&&(t[n]==null||!isNaN(t[n]))))return!1;for(s=0;s<o;++s)if(t[F3[s]]){if(r)return!1;parseFloat(t[F3[s]])!==X0(t[F3[s]])&&(r=!0)}return!0}function oT(){return this._isValid}function uT(){return rt(NaN)}function l6(t){var n=F8(t),r=n.year||0,s=n.quarter||0,o=n.month||0,l=n.week||n.isoWeek||0,c=n.day||0,f=n.hour||0,h=n.minute||0,p=n.second||0,v=n.millisecond||0;this._isValid=sT(n),this._milliseconds=+v+p*1e3+h*6e4+f*1e3*60*60,this._days=+c+l*7,this._months=+o+s*3+r*12,this._data={},this._locale=Wt(),this._bubble()}function C5(t){return t instanceof l6}function f8(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function lT(t,n,r){var s=Math.min(t.length,n.length),o=Math.abs(t.length-n.length),l=0,c;for(c=0;c<s;c++)X0(t[c])!==X0(n[c])&&l++;return l+o}function jo(t,n){O0(t,0,0,function(){var r=this.utcOffset(),s="+";return r<0&&(r=-r,s="-"),s+pt(~~(r/60),2)+n+pt(~~r%60,2)})}jo("Z",":");jo("ZZ","");m0("Z",s6);m0("ZZ",s6);x2(["Z","ZZ"],function(t,n,r){r._useUTC=!0,r._tzm=n7(s6,t)});var aT=/([\+\-]|\d\d)/gi;function n7(t,n){var r=(n||"").match(t),s,o,l;return r===null?null:(s=r[r.length-1]||[],o=(s+"").match(aT)||["-",0,0],l=+(o[1]*60)+X0(o[2]),l===0?0:o[0]==="+"?l:-l)}function e7(t,n){var r,s;return n._isUTC?(r=n.clone(),s=(et(t)||x4(t)?t.valueOf():A2(t).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+s),X.updateOffset(r,!1),r):A2(t).local()}function h8(t){return-Math.round(t._d.getTimezoneOffset())}X.updateOffset=function(){};function cT(t,n,r){var s=this._offset||0,o;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=n7(s6,t),t===null)return this}else Math.abs(t)<16&&!r&&(t=t*60);return!this._isUTC&&n&&(o=h8(this)),this._offset=t,this._isUTC=!0,o!=null&&this.add(o,"m"),s!==t&&(!n||this._changeInProgress?Jo(this,rt(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,X.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:h8(this)}function fT(t,n){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,n),this):-this.utcOffset()}function hT(t){return this.utcOffset(0,t)}function _T(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(h8(this),"m")),this}function dT(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=n7(Ev,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function gT(t){return this.isValid()?(t=t?A2(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function pT(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function mT(){if(!w1(this._isDSTShifted))return this._isDSTShifted;var t={},n;return Y8(t,this),t=Uo(t),t._a?(n=t._isUTC?mt(t._a):A2(t._a),this._isDSTShifted=this.isValid()&&lT(t._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function vT(){return this.isValid()?!this._isUTC:!1}function yT(){return this.isValid()?this._isUTC:!1}function zo(){return this.isValid()?this._isUTC&&this._offset===0:!1}var TT=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,xT=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function rt(t,n){var r=t,s=null,o,l,c;return C5(t)?r={ms:t._milliseconds,d:t._days,M:t._months}:Vt(t)||!isNaN(+t)?(r={},n?r[n]=+t:r.milliseconds=+t):(s=TT.exec(t))?(o=s[1]==="-"?-1:1,r={y:0,d:X0(s[ht])*o,h:X0(s[J2])*o,m:X0(s[X1])*o,s:X0(s[It])*o,ms:X0(f8(s[On]*1e3))*o}):(s=xT.exec(t))?(o=s[1]==="-"?-1:1,r={y:Cn(s[2],o),M:Cn(s[3],o),w:Cn(s[4],o),d:Cn(s[5],o),h:Cn(s[6],o),m:Cn(s[7],o),s:Cn(s[8],o)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(c=wT(A2(r.from),A2(r.to)),r={},r.ms=c.milliseconds,r.M=c.months),l=new l6(r),C5(t)&&u2(t,"_locale")&&(l._locale=t._locale),C5(t)&&u2(t,"_isValid")&&(l._isValid=t._isValid),l}rt.fn=l6.prototype;rt.invalid=uT;function Cn(t,n){var r=t&&parseFloat(t.replace(",","."));return(isNaN(r)?0:r)*n}function Li(t,n){var r={};return r.months=n.month()-t.month()+(n.year()-t.year())*12,t.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+t.clone().add(r.months,"M"),r}function wT(t,n){var r;return t.isValid()&&n.isValid()?(n=e7(n,t),t.isBefore(n)?r=Li(t,n):(r=Li(n,t),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Zo(t,n){return function(r,s){var o,l;return s!==null&&!isNaN(+s)&&(Mo(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),l=r,r=s,s=l),o=rt(r,s),Jo(this,o,t),this}}function Jo(t,n,r,s){var o=n._milliseconds,l=f8(n._days),c=f8(n._months);t.isValid()&&(s=s??!0,c&&Ro(t,h4(t,"Month")+c*r),l&&Lo(t,"Date",h4(t,"Date")+l*r),o&&t._d.setTime(t._d.valueOf()+o*r),s&&X.updateOffset(t,l||c))}var ST=Zo(1,"add"),bT=Zo(-1,"subtract");function Xo(t){return typeof t=="string"||t instanceof String}function MT(t){return et(t)||x4(t)||Xo(t)||Vt(t)||kT(t)||CT(t)||t===null||t===void 0}function CT(t){var n=En(t)&&!H8(t),r=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],o,l,c=s.length;for(o=0;o<c;o+=1)l=s[o],r=r||u2(t,l);return n&&r}function kT(t){var n=nt(t),r=!1;return n&&(r=t.filter(function(s){return!Vt(s)&&Xo(t)}).length===0),n&&r}function PT(t){var n=En(t)&&!H8(t),r=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],o,l;for(o=0;o<s.length;o+=1)l=s[o],r=r||u2(t,l);return n&&r}function DT(t,n){var r=t.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function AT(t,n){arguments.length===1&&(arguments[0]?MT(arguments[0])?(t=arguments[0],n=void 0):PT(arguments[0])&&(n=arguments[0],t=void 0):(t=void 0,n=void 0));var r=t||A2(),s=e7(r,this).startOf("day"),o=X.calendarFormat(this,s)||"sameElse",l=n&&(vt(n[o])?n[o].call(this,r):n[o]);return this.format(l||this.localeData().calendar(o,this,A2(r)))}function OT(){return new w4(this)}function LT(t,n){var r=et(t)?t:A2(t);return this.isValid()&&r.isValid()?(n=K1(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function ET(t,n){var r=et(t)?t:A2(t);return this.isValid()&&r.isValid()?(n=K1(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function NT(t,n,r,s){var o=et(t)?t:A2(t),l=et(n)?n:A2(n);return this.isValid()&&o.isValid()&&l.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(o,r):!this.isBefore(o,r))&&(s[1]===")"?this.isBefore(l,r):!this.isAfter(l,r))):!1}function RT(t,n){var r=et(t)?t:A2(t),s;return this.isValid()&&r.isValid()?(n=K1(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(s=r.valueOf(),this.clone().startOf(n).valueOf()<=s&&s<=this.clone().endOf(n).valueOf())):!1}function BT(t,n){return this.isSame(t,n)||this.isAfter(t,n)}function IT(t,n){return this.isSame(t,n)||this.isBefore(t,n)}function HT(t,n,r){var s,o,l;if(!this.isValid())return NaN;if(s=e7(t,this),!s.isValid())return NaN;switch(o=(s.utcOffset()-this.utcOffset())*6e4,n=K1(n),n){case"year":l=k5(this,s)/12;break;case"month":l=k5(this,s);break;case"quarter":l=k5(this,s)/3;break;case"second":l=(this-s)/1e3;break;case"minute":l=(this-s)/6e4;break;case"hour":l=(this-s)/36e5;break;case"day":l=(this-s-o)/864e5;break;case"week":l=(this-s-o)/6048e5;break;default:l=this-s}return r?l:F1(l)}function k5(t,n){if(t.date()<n.date())return-k5(n,t);var r=(n.year()-t.year())*12+(n.month()-t.month()),s=t.clone().add(r,"months"),o,l;return n-s<0?(o=t.clone().add(r-1,"months"),l=(n-s)/(s-o)):(o=t.clone().add(r+1,"months"),l=(n-s)/(o-s)),-(r+l)||0}X.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";X.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function GT(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function YT(t){if(!this.isValid())return null;var n=t!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?M5(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):vt(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",M5(r,"Z")):M5(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function $T(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",n="",r,s,o,l;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+t+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o="-MM-DD[T]HH:mm:ss.SSS",l=n+'[")]',this.format(r+s+o+l)}function VT(t){t||(t=this.isUtc()?X.defaultFormatUtc:X.defaultFormat);var n=M5(this,t);return this.localeData().postformat(n)}function FT(t,n){return this.isValid()&&(et(t)&&t.isValid()||A2(t).isValid())?rt({to:this,from:t}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function WT(t){return this.from(A2(),t)}function UT(t,n){return this.isValid()&&(et(t)&&t.isValid()||A2(t).isValid())?rt({from:this,to:t}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function qT(t){return this.to(A2(),t)}function Qo(t){var n;return t===void 0?this._locale._abbr:(n=Wt(t),n!=null&&(this._locale=n),this)}var tu=q1("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function nu(){return this._locale}var G5=1e3,_3=60*G5,Y5=60*_3,eu=(365*400+97)*24*Y5;function d3(t,n){return(t%n+n)%n}function ru(t,n,r){return t<100&&t>=0?new Date(t+400,n,r)-eu:new Date(t,n,r).valueOf()}function iu(t,n,r){return t<100&&t>=0?Date.UTC(t+400,n,r)-eu:Date.UTC(t,n,r)}function KT(t){var n,r;if(t=K1(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?iu:ru,t){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=d3(n+(this._isUTC?0:this.utcOffset()*_3),Y5);break;case"minute":n=this._d.valueOf(),n-=d3(n,_3);break;case"second":n=this._d.valueOf(),n-=d3(n,G5);break}return this._d.setTime(n),X.updateOffset(this,!0),this}function jT(t){var n,r;if(t=K1(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?iu:ru,t){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=Y5-d3(n+(this._isUTC?0:this.utcOffset()*_3),Y5)-1;break;case"minute":n=this._d.valueOf(),n+=_3-d3(n,_3)-1;break;case"second":n=this._d.valueOf(),n+=G5-d3(n,G5)-1;break}return this._d.setTime(n),X.updateOffset(this,!0),this}function zT(){return this._d.valueOf()-(this._offset||0)*6e4}function ZT(){return Math.floor(this.valueOf()/1e3)}function JT(){return new Date(this.valueOf())}function XT(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function QT(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function tx(){return this.isValid()?this.toISOString():null}function nx(){return G8(this)}function ex(){return ln({},W0(this))}function rx(){return W0(this).overflow}function ix(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}O0("N",0,0,"eraAbbr");O0("NN",0,0,"eraAbbr");O0("NNN",0,0,"eraAbbr");O0("NNNN",0,0,"eraName");O0("NNNNN",0,0,"eraNarrow");O0("y",["y",1],"yo","eraYear");O0("y",["yy",2],0,"eraYear");O0("y",["yyy",3],0,"eraYear");O0("y",["yyyy",4],0,"eraYear");m0("N",r7);m0("NN",r7);m0("NNN",r7);m0("NNNN",gx);m0("NNNNN",px);x2(["N","NN","NNN","NNNN","NNNNN"],function(t,n,r,s){var o=r._locale.erasParse(t,s,r._strict);o?W0(r).era=o:W0(r).invalidEra=t});m0("y",T3);m0("yy",T3);m0("yyy",T3);m0("yyyy",T3);m0("yo",mx);x2(["y","yy","yyy","yyyy"],f1);x2(["yo"],function(t,n,r,s){var o;r._locale._eraYearOrdinalRegex&&(o=t.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[f1]=r._locale.eraYearOrdinalParse(t,o):n[f1]=parseInt(t,10)});function sx(t,n){var r,s,o,l=this._eras||Wt("en")._eras;for(r=0,s=l.length;r<s;++r){switch(typeof l[r].since){case"string":o=X(l[r].since).startOf("day"),l[r].since=o.valueOf();break}switch(typeof l[r].until){case"undefined":l[r].until=1/0;break;case"string":o=X(l[r].until).startOf("day").valueOf(),l[r].until=o.valueOf();break}}return l}function ox(t,n,r){var s,o,l=this.eras(),c,f,h;for(t=t.toUpperCase(),s=0,o=l.length;s<o;++s)if(c=l[s].name.toUpperCase(),f=l[s].abbr.toUpperCase(),h=l[s].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(f===t)return l[s];break;case"NNNN":if(c===t)return l[s];break;case"NNNNN":if(h===t)return l[s];break}else if([c,f,h].indexOf(t)>=0)return l[s]}function ux(t,n){var r=t.since<=t.until?1:-1;return n===void 0?X(t.since).year():X(t.since).year()+(n-t.offset)*r}function lx(){var t,n,r,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(r=this.clone().startOf("day").valueOf(),s[t].since<=r&&r<=s[t].until||s[t].until<=r&&r<=s[t].since)return s[t].name;return""}function ax(){var t,n,r,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(r=this.clone().startOf("day").valueOf(),s[t].since<=r&&r<=s[t].until||s[t].until<=r&&r<=s[t].since)return s[t].narrow;return""}function cx(){var t,n,r,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(r=this.clone().startOf("day").valueOf(),s[t].since<=r&&r<=s[t].until||s[t].until<=r&&r<=s[t].since)return s[t].abbr;return""}function fx(){var t,n,r,s,o=this.localeData().eras();for(t=0,n=o.length;t<n;++t)if(r=o[t].since<=o[t].until?1:-1,s=this.clone().startOf("day").valueOf(),o[t].since<=s&&s<=o[t].until||o[t].until<=s&&s<=o[t].since)return(this.year()-X(o[t].since).year())*r+o[t].offset;return this.year()}function hx(t){return u2(this,"_erasNameRegex")||i7.call(this),t?this._erasNameRegex:this._erasRegex}function _x(t){return u2(this,"_erasAbbrRegex")||i7.call(this),t?this._erasAbbrRegex:this._erasRegex}function dx(t){return u2(this,"_erasNarrowRegex")||i7.call(this),t?this._erasNarrowRegex:this._erasRegex}function r7(t,n){return n.erasAbbrRegex(t)}function gx(t,n){return n.erasNameRegex(t)}function px(t,n){return n.erasNarrowRegex(t)}function mx(t,n){return n._eraYearOrdinalRegex||T3}function i7(){var t=[],n=[],r=[],s=[],o,l,c,f,h,p=this.eras();for(o=0,l=p.length;o<l;++o)c=Yt(p[o].name),f=Yt(p[o].abbr),h=Yt(p[o].narrow),n.push(c),t.push(f),r.push(h),s.push(c),s.push(f),s.push(h);this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}O0(0,["gg",2],0,function(){return this.weekYear()%100});O0(0,["GG",2],0,function(){return this.isoWeekYear()%100});function a6(t,n){O0(0,[t,t.length],0,n)}a6("gggg","weekYear");a6("ggggg","weekYear");a6("GGGG","isoWeekYear");a6("GGGGG","isoWeekYear");m0("G",i6);m0("g",i6);m0("GG",O2,N1);m0("gg",O2,N1);m0("GGGG",U8,W8);m0("gggg",U8,W8);m0("GGGGG",r6,n6);m0("ggggg",r6,n6);b4(["gggg","ggggg","GGGG","GGGGG"],function(t,n,r,s){n[s.substr(0,2)]=X0(t)});b4(["gg","GG"],function(t,n,r,s){n[s]=X.parseTwoDigitYear(t)});function vx(t){return su.call(this,t,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function yx(t){return su.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Tx(){return $t(this.year(),1,4)}function xx(){return $t(this.isoWeekYear(),1,4)}function wx(){var t=this.localeData()._week;return $t(this.year(),t.dow,t.doy)}function Sx(){var t=this.localeData()._week;return $t(this.weekYear(),t.dow,t.doy)}function su(t,n,r,s,o){var l;return t==null?d4(this,s,o).year:(l=$t(t,s,o),n>l&&(n=l),bx.call(this,t,n,r,s,o))}function bx(t,n,r,s,o){var l=Ho(t,n,r,s,o),c=_4(l.year,0,l.dayOfYear);return this.year(c.getUTCFullYear()),this.month(c.getUTCMonth()),this.date(c.getUTCDate()),this}O0("Q",0,"Qo","quarter");m0("Q",ko);x2("Q",function(t,n){n[Bt]=(X0(t)-1)*3});function Mx(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}O0("D",["DD",2],"Do","date");m0("D",O2,x3);m0("DD",O2,N1);m0("Do",function(t,n){return t?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});x2(["D","DD"],ht);x2("Do",function(t,n){n[ht]=X0(t.match(O2)[0])});var ou=w3("Date",!0);O0("DDD",["DDDD",3],"DDDo","dayOfYear");m0("DDD",e6);m0("DDDD",Po);x2(["DDD","DDDD"],function(t,n,r){r._dayOfYear=X0(t)});function Cx(t){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?n:this.add(t-n,"d")}O0("m",["mm",2],0,"minute");m0("m",O2,q8);m0("mm",O2,N1);x2(["m","mm"],X1);var kx=w3("Minutes",!1);O0("s",["ss",2],0,"second");m0("s",O2,q8);m0("ss",O2,N1);x2(["s","ss"],It);var Px=w3("Seconds",!1);O0("S",0,0,function(){return~~(this.millisecond()/100)});O0(0,["SS",2],0,function(){return~~(this.millisecond()/10)});O0(0,["SSS",3],0,"millisecond");O0(0,["SSSS",4],0,function(){return this.millisecond()*10});O0(0,["SSSSS",5],0,function(){return this.millisecond()*100});O0(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});O0(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});O0(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});O0(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});m0("S",e6,ko);m0("SS",e6,N1);m0("SSS",e6,Po);var an,uu;for(an="SSSS";an.length<=9;an+="S")m0(an,T3);function Dx(t,n){n[On]=X0(("0."+t)*1e3)}for(an="S";an.length<=9;an+="S")x2(an,Dx);uu=w3("Milliseconds",!1);O0("z",0,0,"zoneAbbr");O0("zz",0,0,"zoneName");function Ax(){return this._isUTC?"UTC":""}function Ox(){return this._isUTC?"Coordinated Universal Time":""}var Z=w4.prototype;Z.add=ST;Z.calendar=AT;Z.clone=OT;Z.diff=HT;Z.endOf=jT;Z.format=VT;Z.from=FT;Z.fromNow=WT;Z.to=UT;Z.toNow=qT;Z.get=$v;Z.invalidAt=rx;Z.isAfter=LT;Z.isBefore=ET;Z.isBetween=NT;Z.isSame=RT;Z.isSameOrAfter=BT;Z.isSameOrBefore=IT;Z.isValid=nx;Z.lang=tu;Z.locale=Qo;Z.localeData=nu;Z.max=nT;Z.min=tT;Z.parsingFlags=ex;Z.set=Vv;Z.startOf=KT;Z.subtract=bT;Z.toArray=XT;Z.toObject=QT;Z.toDate=JT;Z.toISOString=YT;Z.inspect=$T;typeof Symbol<"u"&&Symbol.for!=null&&(Z[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});Z.toJSON=tx;Z.toString=GT;Z.unix=ZT;Z.valueOf=zT;Z.creationData=ix;Z.eraName=lx;Z.eraNarrow=ax;Z.eraAbbr=cx;Z.eraYear=fx;Z.year=Oo;Z.isLeapYear=Yv;Z.weekYear=vx;Z.isoWeekYear=yx;Z.quarter=Z.quarters=Mx;Z.month=Bo;Z.daysInMonth=Jv;Z.week=Z.weeks=sy;Z.isoWeek=Z.isoWeeks=oy;Z.weeksInYear=wx;Z.weeksInWeekYear=Sx;Z.isoWeeksInYear=Tx;Z.isoWeeksInISOWeekYear=xx;Z.date=ou;Z.day=Z.days=yy;Z.weekday=Ty;Z.isoWeekday=xy;Z.dayOfYear=Cx;Z.hour=Z.hours=Py;Z.minute=Z.minutes=kx;Z.second=Z.seconds=Px;Z.millisecond=Z.milliseconds=uu;Z.utcOffset=cT;Z.utc=hT;Z.local=_T;Z.parseZone=dT;Z.hasAlignedHourOffset=gT;Z.isDST=pT;Z.isLocal=vT;Z.isUtcOffset=yT;Z.isUtc=zo;Z.isUTC=zo;Z.zoneAbbr=Ax;Z.zoneName=Ox;Z.dates=q1("dates accessor is deprecated. Use date instead.",ou);Z.months=q1("months accessor is deprecated. Use month instead",Bo);Z.years=q1("years accessor is deprecated. Use year instead",Oo);Z.zone=q1("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",fT);Z.isDSTShifted=q1("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",mT);function Lx(t){return A2(t*1e3)}function Ex(){return A2.apply(null,arguments).parseZone()}function lu(t){return t}var l2=$8.prototype;l2.calendar=vv;l2.longDateFormat=wv;l2.invalidDate=bv;l2.ordinal=kv;l2.preparse=lu;l2.postformat=lu;l2.relativeTime=Dv;l2.pastFuture=Av;l2.set=pv;l2.eras=sx;l2.erasParse=ox;l2.erasConvertYear=ux;l2.erasAbbrRegex=_x;l2.erasNameRegex=hx;l2.erasNarrowRegex=dx;l2.months=Kv;l2.monthsShort=jv;l2.monthsParse=Zv;l2.monthsRegex=Qv;l2.monthsShortRegex=Xv;l2.week=ny;l2.firstDayOfYear=iy;l2.firstDayOfWeek=ry;l2.weekdays=dy;l2.weekdaysMin=py;l2.weekdaysShort=gy;l2.weekdaysParse=vy;l2.weekdaysRegex=wy;l2.weekdaysShortRegex=Sy;l2.weekdaysMinRegex=by;l2.isPM=Cy;l2.meridiem=Dy;function $5(t,n,r,s){var o=Wt(),l=mt().set(s,n);return o[r](l,t)}function au(t,n,r){if(Vt(t)&&(n=t,t=void 0),t=t||"",n!=null)return $5(t,n,r,"month");var s,o=[];for(s=0;s<12;s++)o[s]=$5(t,s,r,"month");return o}function s7(t,n,r,s){typeof t=="boolean"?(Vt(n)&&(r=n,n=void 0),n=n||""):(n=t,r=n,t=!1,Vt(n)&&(r=n,n=void 0),n=n||"");var o=Wt(),l=t?o._week.dow:0,c,f=[];if(r!=null)return $5(n,(r+l)%7,s,"day");for(c=0;c<7;c++)f[c]=$5(n,(c+l)%7,s,"day");return f}function Nx(t,n){return au(t,n,"months")}function Rx(t,n){return au(t,n,"monthsShort")}function Bx(t,n,r){return s7(t,n,r,"weekdays")}function Ix(t,n,r){return s7(t,n,r,"weekdaysShort")}function Hx(t,n,r){return s7(t,n,r,"weekdaysMin")}fn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var n=t%10,r=X0(t%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return t+r}});X.lang=q1("moment.lang is deprecated. Use moment.locale instead.",fn);X.langData=q1("moment.langData is deprecated. Use moment.localeData instead.",Wt);var At=Math.abs;function Gx(){var t=this._data;return this._milliseconds=At(this._milliseconds),this._days=At(this._days),this._months=At(this._months),t.milliseconds=At(t.milliseconds),t.seconds=At(t.seconds),t.minutes=At(t.minutes),t.hours=At(t.hours),t.months=At(t.months),t.years=At(t.years),this}function cu(t,n,r,s){var o=rt(n,r);return t._milliseconds+=s*o._milliseconds,t._days+=s*o._days,t._months+=s*o._months,t._bubble()}function Yx(t,n){return cu(this,t,n,1)}function $x(t,n){return cu(this,t,n,-1)}function Ei(t){return t<0?Math.floor(t):Math.ceil(t)}function Vx(){var t=this._milliseconds,n=this._days,r=this._months,s=this._data,o,l,c,f,h;return t>=0&&n>=0&&r>=0||t<=0&&n<=0&&r<=0||(t+=Ei(_8(r)+n)*864e5,n=0,r=0),s.milliseconds=t%1e3,o=F1(t/1e3),s.seconds=o%60,l=F1(o/60),s.minutes=l%60,c=F1(l/60),s.hours=c%24,n+=F1(c/24),h=F1(fu(n)),r+=h,n-=Ei(_8(h)),f=F1(r/12),r%=12,s.days=n,s.months=r,s.years=f,this}function fu(t){return t*4800/146097}function _8(t){return t*146097/4800}function Fx(t){if(!this.isValid())return NaN;var n,r,s=this._milliseconds;if(t=K1(t),t==="month"||t==="quarter"||t==="year")switch(n=this._days+s/864e5,r=this._months+fu(n),t){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(_8(this._months)),t){case"week":return n/7+s/6048e5;case"day":return n+s/864e5;case"hour":return n*24+s/36e5;case"minute":return n*1440+s/6e4;case"second":return n*86400+s/1e3;case"millisecond":return Math.floor(n*864e5)+s;default:throw new Error("Unknown unit "+t)}}function Ut(t){return function(){return this.as(t)}}var hu=Ut("ms"),Wx=Ut("s"),Ux=Ut("m"),qx=Ut("h"),Kx=Ut("d"),jx=Ut("w"),zx=Ut("M"),Zx=Ut("Q"),Jx=Ut("y"),Xx=hu;function Qx(){return rt(this)}function tw(t){return t=K1(t),this.isValid()?this[t+"s"]():NaN}function In(t){return function(){return this.isValid()?this._data[t]:NaN}}var nw=In("milliseconds"),ew=In("seconds"),rw=In("minutes"),iw=In("hours"),sw=In("days"),ow=In("months"),uw=In("years");function lw(){return F1(this.days()/7)}var Et=Math.round,o3={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function aw(t,n,r,s,o){return o.relativeTime(n||1,!!r,t,s)}function cw(t,n,r,s){var o=rt(t).abs(),l=Et(o.as("s")),c=Et(o.as("m")),f=Et(o.as("h")),h=Et(o.as("d")),p=Et(o.as("M")),v=Et(o.as("w")),y=Et(o.as("y")),S=l<=r.ss&&["s",l]||l<r.s&&["ss",l]||c<=1&&["m"]||c<r.m&&["mm",c]||f<=1&&["h"]||f<r.h&&["hh",f]||h<=1&&["d"]||h<r.d&&["dd",h];return r.w!=null&&(S=S||v<=1&&["w"]||v<r.w&&["ww",v]),S=S||p<=1&&["M"]||p<r.M&&["MM",p]||y<=1&&["y"]||["yy",y],S[2]=n,S[3]=+t>0,S[4]=s,aw.apply(null,S)}function fw(t){return t===void 0?Et:typeof t=="function"?(Et=t,!0):!1}function hw(t,n){return o3[t]===void 0?!1:n===void 0?o3[t]:(o3[t]=n,t==="s"&&(o3.ss=n-1),!0)}function _w(t,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,s=o3,o,l;return typeof t=="object"&&(n=t,t=!1),typeof t=="boolean"&&(r=t),typeof n=="object"&&(s=Object.assign({},o3,n),n.s!=null&&n.ss==null&&(s.ss=n.s-1)),o=this.localeData(),l=cw(this,!r,s,o),r&&(l=o.pastFuture(+this,l)),o.postformat(l)}var $e=Math.abs;function t3(t){return(t>0)-(t<0)||+t}function c6(){if(!this.isValid())return this.localeData().invalidDate();var t=$e(this._milliseconds)/1e3,n=$e(this._days),r=$e(this._months),s,o,l,c,f=this.asSeconds(),h,p,v,y;return f?(s=F1(t/60),o=F1(s/60),t%=60,s%=60,l=F1(r/12),r%=12,c=t?t.toFixed(3).replace(/\.?0+$/,""):"",h=f<0?"-":"",p=t3(this._months)!==t3(f)?"-":"",v=t3(this._days)!==t3(f)?"-":"",y=t3(this._milliseconds)!==t3(f)?"-":"",h+"P"+(l?p+l+"Y":"")+(r?p+r+"M":"")+(n?v+n+"D":"")+(o||s||t?"T":"")+(o?y+o+"H":"")+(s?y+s+"M":"")+(t?y+c+"S":"")):"P0D"}var i2=l6.prototype;i2.isValid=oT;i2.abs=Gx;i2.add=Yx;i2.subtract=$x;i2.as=Fx;i2.asMilliseconds=hu;i2.asSeconds=Wx;i2.asMinutes=Ux;i2.asHours=qx;i2.asDays=Kx;i2.asWeeks=jx;i2.asMonths=zx;i2.asQuarters=Zx;i2.asYears=Jx;i2.valueOf=Xx;i2._bubble=Vx;i2.clone=Qx;i2.get=tw;i2.milliseconds=nw;i2.seconds=ew;i2.minutes=rw;i2.hours=iw;i2.days=sw;i2.weeks=lw;i2.months=ow;i2.years=uw;i2.humanize=_w;i2.toISOString=c6;i2.toString=c6;i2.toJSON=c6;i2.locale=Qo;i2.localeData=nu;i2.toIsoString=q1("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",c6);i2.lang=tu;O0("X",0,0,"unix");O0("x",0,0,"valueOf");m0("x",i6);m0("X",Nv);x2("X",function(t,n,r){r._d=new Date(parseFloat(t)*1e3)});x2("x",function(t,n,r){r._d=new Date(X0(t))});//! moment.js
X.version="2.30.1";dv(A2);X.fn=Z;X.min=eT;X.max=rT;X.now=iT;X.utc=mt;X.unix=Lx;X.months=Nx;X.isDate=x4;X.locale=fn;X.invalid=t6;X.duration=rt;X.isMoment=et;X.weekdays=Bx;X.parseZone=Ex;X.localeData=Wt;X.isDuration=C5;X.monthsShort=Rx;X.weekdaysMin=Hx;X.defineLocale=J8;X.updateLocale=Ey;X.locales=Ny;X.weekdaysShort=Ix;X.normalizeUnits=K1;X.relativeTimeRounding=fw;X.relativeTimeThreshold=hw;X.calendarFormat=DT;X.prototype=Z;X.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const dw=`17/10/2026	01412	
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
1/09/2025	01241	
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
3/05/2024	01038	
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
051014232438 |35`,gw=`18/10/2026	01577	
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
021733373845`;class _u{constructor(n){v2(this,"loại_xổ_số");v2(this,"vị_trí_dữ_liệu");v2(this,"ngày_xổ_số");v2(this,"kết_quả_xổ_số");v2(this,"số_jacpot_2");v2(this,"kỳ_xổ_số");v2(this,"tuần_xổ_số");v2(this,"giá_trị_ngày");v2(this,"giá_trị_tháng");v2(this,"giá_trị_năm");v2(this,"dấu_thời_gian_của_ngày");v2(this,"dấu_thời_gian_kỳ_sau_đó");v2(this,"dữ_liệu_kỳ_sau_đó");v2(this,"các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau",[]);v2(this,"danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện",[]);v2(this,"danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện",[]);v2(this,"số_kết_quả_trong_các_số_đã_xuất_hiện",0);v2(this,"tập_các_số_đã_xuất_hiện",new Set);v2(this,"dự_đoán_ds_xuất_hiện",[]);v2(this,"hiển_thị_dự_đoán_ds_xuất_hiện",!1);v2(this,"vị_trí_ds_xuất_hiện",[]);v2(this,"xem_dự_đoán","");this.loại_xổ_số=n.loại_xổ_số,this.vị_trí_dữ_liệu=n.vị_trí_dữ_liệu,this.ngày_xổ_số=n.ngày_xổ_số,this.kết_quả_xổ_số=n.kết_quả_xổ_số,this.số_jacpot_2=n.số_jacpot_2,this.kỳ_xổ_số=n.kỳ_xổ_số,this.tuần_xổ_số=n.tuần_xổ_số,this.giá_trị_ngày=n.giá_trị_ngày,this.giá_trị_tháng=n.giá_trị_tháng,this.giá_trị_năm=n.giá_trị_năm,this.dấu_thời_gian_của_ngày=n.dấu_thời_gian_của_ngày,this.dấu_thời_gian_kỳ_sau_đó=n.dấu_thời_gian_kỳ_sau_đó,this.dữ_liệu_kỳ_sau_đó=n.dữ_liệu_kỳ_sau_đó}}const pw=t=>{const n=[1,2,3,4,5,6,7,8,9];for(let r=10;r<=100;r+=3)r<=t&&n.push(r);for(let r=200;r<=1e3;r+=80)r<=t&&n.push(r);for(let r=1100;r<=t+100;r+=80)n.push(r);return n},mw={45:[3,5,0],55:[2,4,6]},du=(t,n)=>{const r=new Date(t),s=r.getDay(),o=mw[n];for(let l=1;l<=7;l++){const c=(s+l)%7;if(o.includes(c)){const f=new Date(r);return f.setDate(r.getDate()+l),f.getTime()}}return t},gu=(t,n,r=6)=>{const s=[];let o=t;for(let l=0;l<r;l++)o=du(o,n),s.push(o);return s};function vw(){const n=gw.split(`
`).map(s=>s.split("	").map(o=>o.trim()).filter(o=>o!=="")),r=[];for(let s=0;s<n.length/2;s++){const o=n[2*s],l=n[2*s+1],[c,f]=o,h=l[0].match(/.{2}/g)||[],p=X(c,"DD/MM/YYYY"),v=p.format("dddd"),y="",S=p.day().toString(),M=(p.month()+1).toString(),G=p.year().toString(),Y=X(p,"DD/MM/YYYY").valueOf(),U=r[r.length-1],n0=r.length,l0=gu(Y,45),u0=new _u({loại_xổ_số:45,vị_trí_dữ_liệu:n0,ngày_xổ_số:c,kết_quả_xổ_số:h,số_jacpot_2:y,kỳ_xổ_số:f,tuần_xổ_số:v,giá_trị_ngày:S,giá_trị_tháng:M,giá_trị_năm:G,dấu_thời_gian_của_ngày:Y,dấu_thời_gian_kỳ_sau_đó:l0,dữ_liệu_kỳ_sau_đó:U});r.push(u0)}return r}function yw(){const n=dw.split(`
`).map(s=>s.split(/\t| \|/).map(o=>o.trim()).filter(o=>o!=="")),r=[];for(let s=0;s<n.length/2;s++){const o=n[2*s],l=n[2*s+1],[c,f]=o,[h,p]=l,v=h.match(/.{2}/g)||[],y=X(c,"DD/MM/YYYY"),S=y.format("dddd"),M=y.day().toString(),G=(y.month()+1).toString(),Y=y.year().toString(),U=X(y,"DD/MM/YYYY").valueOf(),n0=r[r.length-1],l0=gu(U,55),u0=r.length,a0=new _u({loại_xổ_số:55,vị_trí_dữ_liệu:u0,ngày_xổ_số:c,kết_quả_xổ_số:v,kỳ_xổ_số:f,số_jacpot_2:p,tuần_xổ_số:S,giá_trị_ngày:M,giá_trị_tháng:G,giá_trị_năm:Y,dấu_thời_gian_của_ngày:U,dấu_thời_gian_kỳ_sau_đó:l0,dữ_liệu_kỳ_sau_đó:n0});r.push(a0)}return r}const Ni=new WeakMap,pu=[];function Ri(t){let n=Ni.get(t);return n||(n=t.map(r=>r.kết_quả_xổ_số.map(s=>{const o=Number(s);return pu[o]=s,o})),Ni.set(t,n)),n}const Tw=(t,n,r,s,o=46)=>{var S;const l=[],c=Ri(t),f=Ri(n),h=new Uint16Array(128),p=[],v=M=>{h[M]++===0&&p.push(M)};r.kết_quả_xổ_số.forEach(M=>{var G;(G=c[s+Number(M)])==null||G.forEach(v)});const y=[];for(let M=s;M<t.length;M++){const G=p.length;if(y.length=0,(S=f[M])==null||S.forEach(Y=>{var U;(U=c[s+Y])==null||U.forEach(n0=>{v(n0),y.push(n0)})}),p.length===o){const Y=[...p].sort((U,n0)=>h[U]-h[n0]).map(U=>pu[U]);l.push(Y)}y.forEach(Y=>h[Y]--),p.length=G}return l},xw=6,Ve={45:500,55:1e3};function d8(t,n,r){const s=new Array(n+1).fill(0);return t.slice(0,r).forEach(o=>o.kết_quả_xổ_số.forEach(l=>s[Number(l)]++)),s}const Bi={ngẫu_nhiên:(t,n)=>new Array(n+1).fill(1),số_nóng_50:(t,n)=>d8(t,n,50).map(r=>r+1),số_lạnh_50:(t,n)=>d8(t,n,50).map(r=>1/(r+1)),số_lâu_chưa_ra:(t,n)=>{const r=new Array(n+1).fill(t.length);for(let s=t.length-1;s>=0;s--)t[s].kết_quả_xổ_số.forEach(o=>r[Number(o)]=s);return r.map(s=>s+1)},số_vừa_ra:(t,n)=>{var s;const r=new Array(n+1).fill(1);return(s=t[0])==null||s.kết_quả_xổ_số.forEach(o=>r[Number(o)]=4),r}},ww=50,Sw=10;function bw(t,n,r=Sw){var f;const s=h=>String(h).padStart(2,"0"),o=d8(t,n,ww),l=new Array(n+1).fill(t.length);for(let h=t.length-1;h>=0;h--)t[h].kết_quả_xổ_số.forEach(p=>l[Number(p)]=h);const c=Array.from({length:n},(h,p)=>p+1);return{vừa_ra:((f=t[0])==null?void 0:f.kết_quả_xổ_số)??[],nóng:[...c].sort((h,p)=>o[p]-o[h]||h-p).slice(0,r).map(h=>({số:s(h),lần:o[h]})),lạnh:[...c].sort((h,p)=>o[h]-o[p]||h-p).slice(0,r).map(h=>({số:s(h),lần:o[h]})),lâu_chưa_ra:[...c].sort((h,p)=>l[p]-l[h]||h-p).slice(0,r).map(h=>({số:s(h),số_kỳ:l[h]}))}}function mu(t){let n=t>>>0;return()=>{n=n+1831565813>>>0;let r=n;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}const Mw=(()=>{const t=[];for(let n=0;n<6;n++)for(let r=n+1;r<6;r++)for(let s=r+1;s<6;s++)for(let o=s+1;o<6;o++)t.push([n,r,s,o]);return t})();function Cw(t,n){return((t[n[0]]*64+t[n[1]])*64+t[n[2]])*64+t[n[3]]}function kw(t,n,r,s=Math.random){const o=[],l=new Set,c=n*200,f=new Float64Array(t+1);for(let h=0;h<c&&o.length<n;h++){for(let y=1;y<=t;y++)f[y]=s()**(1/Math.max(r[y],1e-9));const p=[];for(let y=0;y<xw;y++){let S=0;for(let M=1;M<=t;M++)f[M]>f[S]&&(S=M);p.push(S),f[S]=-1}p.sort((y,S)=>y-S);const v=Mw.map(y=>Cw(p,y));v.some(y=>l.has(y))||(v.forEach(y=>l.add(y)),o.push(p))}return o}function Pw(t,n){if(n>t)return 0;let r=1;for(let s=1;s<=n;s++)r=r*(t-n+s)/s;return r}function Dw(t){const n=Pw(t,6),r=1/n;return{từ_5:6*(t-6)/n+r,số_6:r}}const Ot=6,Aw=1e4,Ii=20;function Fe(t,n){if(n<0||n>t)return 0;let r=1;for(let s=1;s<=n;s++)r=r*(t-n+s)/s;return r}function Ow(t){let n=5381;for(let r=0;r<t.length;r++)n=(n<<5)+n+t.charCodeAt(r)|0;return n>>>0}function W3(t,n){const r=[],s=[],o=l=>{if(s.length===n){r.push([...s]);return}for(let c=l;c<=t.length-(n-s.length);c++)s.push(t[c]),o(c+1),s.pop()};return o(0),r}function Hi(t){const n=[...t].sort((c,f)=>c-f);let r=n.filter(c=>c<=31).length,s=1,o=1;for(let c=1;c<n.length;c++)o=n[c]===n[c-1]+1?o+1:1,s=Math.max(s,o);s>=3&&(r+=2);const l=n[1]-n[0];return n.every((c,f)=>f===0||c-n[f-1]===l)&&(r+=3),r}function Lw(t){return Ot*Math.min(31,t)/t}function Ew(t,n,r=Math.random){const s=o=>o>31?3:o>12?1.5:1;return Array.from({length:t},(o,l)=>l+1).map(o=>({số:o,khóa:r()**(1/s(o))})).sort((o,l)=>l.khóa-o.khóa).slice(0,n).map(o=>o.số).sort((o,l)=>o-l)}function Nw(t,n,r,s,o,l){const c=t===55?55:45;if(!Number.isInteger(n)||n<Ot+1)throw new Error(`Nhóm số phải có ít nhất ${Ot+1} số`);if(n>Ii)throw new Error(`Nhóm số tối đa ${Ii} số`);if(!Number.isInteger(r)||r<2||r>=Ot)throw new Error(`Mức đảm bảo phải từ 2 đến ${Ot-1}`);const f=Ew(c,n,l===void 0?Math.random:mu(l)),h=s0=>s0.reduce((P0,M0)=>P0|1<<M0,0),p=Array.from({length:n},(s0,P0)=>P0),v=new Map;W3(p,r).forEach((s0,P0)=>v.set(h(s0),P0));const y=W3(p,Ot).map(s0=>({vị_trí:s0,vé:s0.map(P0=>f[P0]),phủ:W3(s0,r).map(P0=>v.get(h(P0)))})),S=y.map(s0=>Hi(s0.vé)),M=new Uint8Array(v.size);let G=v.size;const Y=[],U=new Set;for(;G>0;){let s0=-1,P0=-1;for(let M0=0;M0<y.length;M0++){let s2=0;for(const o2 of y[M0].phủ)M[o2]||s2++;(s2>P0||s2===P0&&S[M0]<S[s0])&&(s0=M0,P0=s2)}for(const M0 of y[s0].phủ)M[M0]||(M[M0]=1,G--);Y.push(y[s0].vé),U.add(s0)}const n0=Y.length,l0=Math.min(s??n0,y.length);if(l0>n0){const s0=r+1,P0=new Map;W3(p,s0).forEach((o2,m2)=>P0.set(h(o2),m2));const M0=y.map(o2=>W3(o2.vị_trí,s0).map(m2=>P0.get(h(m2)))),s2=new Uint8Array(P0.size);for(U.forEach(o2=>M0[o2].forEach(m2=>s2[m2]=1));Y.length<l0;){let o2=-1,m2=-1;for(let P2=0;P2<y.length;P2++){if(U.has(P2))continue;let r0=0;for(const H of M0[P2])s2[H]||r0++;(r0>m2||r0===m2&&S[P2]<S[o2])&&(o2=P2,m2=r0)}M0[o2].forEach(P2=>s2[P2]=1),Y.push(y[o2].vé),U.add(o2)}}let u0=0;const a0=Fe(c,Ot);for(let s0=r;s0<=Ot;s0++)u0+=Fe(n,s0)*Fe(c-n,Ot-s0)/a0;return{loại_xổ_số:t,nhóm_số:f,mức_đảm_bảo:r,vé:Y.map(s0=>[...s0].sort((P0,M0)=>P0-M0)),số_vé_tối_thiểu:n0,chi_phí:Y.length*Aw,xác_suất_đạt_đảm_bảo:u0,điểm_phổ_biến_trung_bình:Number((Y.reduce((s0,P0)=>s0+Hi(P0),0)/Y.length).toFixed(2)),điểm_phổ_biến_vé_ngẫu_nhiên:Number(Lw(c).toFixed(2))}}const Gi=["trúng_3","trúng_4","trúng_5","jackpot_2","jackpot_1"],Rw=1e4,Bw=.03,Iw=Rw*(1+Bw),Yi=1e7;function Hw(t){return t>Yi?t-.1*(t-Yi):t}const $i={45:{trúng_3:3e4,trúng_4:3e5,trúng_5:1e7,jackpot_2:0,jackpot_1:12e9},55:{trúng_3:5e4,trúng_4:5e5,trúng_5:4e7,jackpot_2:3e9,jackpot_1:3e10}};function We(t,n){if(n<0||n>t)return 0;let r=1;for(let s=1;s<=n;s++)r=r*(t-n+s)/s;return r}function Gw(t,n){const r=We(t,6),s=l=>We(6,l)*We(t-6,6-l)/r,o=n?6/r:0;return{trúng_3:s(3),trúng_4:s(4),trúng_5:s(5)-o,jackpot_2:o,jackpot_1:s(6)}}const Vi=6,Fi=6,Yw=3,$w=20261008;function Vw(t){const n=new Map,r=new Map;return t.forEach(s=>{const o=s%Fi,l=Math.floor(s/Fi);n.set(o,(n.get(o)??0)+1),r.set(l,(r.get(l)??0)+1)}),[...n.values()].some(s=>s>=2)&&[...r.values()].every(s=>s<=Yw)}const Fw=(()=>{const t=[];for(let n=0;n<6;n++)for(let r=n+1;r<6;r++)for(let s=r+1;s<6;s++)for(let o=s+1;o<6;o++)t.push([n,r,s,o]);return t})(),Wi=new Map;function Ww(t,n){const r=`${t}-${n}`,s=Wi.get(r);if(s)return s;const o=mu($w),l=[],c=new Set,f=n*3e3,h=Array.from({length:t},(p,v)=>v);for(let p=0;p<f&&l.length<n;p++){for(let S=0;S<Vi;S++){const M=S+Math.floor(o()*(t-S));[h[S],h[M]]=[h[M],h[S]]}const v=h.slice(0,Vi).sort((S,M)=>S-M);if(!Vw(v))continue;const y=Fw.map(S=>((v[S[0]]*64+v[S[1]])*64+v[S[2]])*64+v[S[3]]);y.some(S=>c.has(S))||(y.forEach(S=>c.add(S)),l.push(v))}return Wi.set(r,l),l}function Uw(t,n){return n.map(r=>r.map(s=>t[s]).sort())}function Ui(t,n){const r=n.loại_xổ_số,s=r===55,o=new Set(n.kết_quả_xổ_số),l=$i[r]??$i[45],c=Gw(r===55?55:45,s),f=Object.fromEntries(Gi.map(S=>[S,0])),h=[];t.forEach(S=>{const M=S.filter(U=>o.has(U)),G=M.length;let Y;G===3?Y="trúng_3":G===4?Y="trúng_4":G===5?Y=s&&S.includes(n.số_jacpot_2)?"jackpot_2":"trúng_5":G===6&&(Y="jackpot_1"),Y&&(f[Y]++,G>=4&&h.push({vé:S,số_trúng:G,số_trùng:M,mức:Y}))});let p=0;const v=Gi.map(S=>{const M=Hw(l[S]),G=f[S]*M;return p+=G,{mức_trúng:S,số_vé:f[S],kỳ_vọng_ngẫu_nhiên:Number((t.length*c[S]).toFixed(2)),tiền_mỗi_vé:M,tiền:G}}),y=t.length*Iw;return{dòng_theo_mức:v,chi_phí:y,tiền_thắng:p,lãi_lỗ:p-y,vé_trúng_từ_4:h.sort((S,M)=>M.số_trúng-S.số_trúng)}}const qw="BộNhớĐệmDựĐoán",hn="bộ_nhớ_đệm",qi="bộ_vé_phủ|",Ki="vé_từ_danh_sách|";function o7(){return new Promise((t,n)=>{const r=indexedDB.open(qw,1);r.onerror=()=>n(r.error),r.onsuccess=()=>t(r.result),r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(hn)||r.result.createObjectStore(hn)}})}async function Kw(t){try{const n=await o7();try{return await new Promise((r,s)=>{const o=n.transaction(hn,"readonly").objectStore(hn).get(t);o.onerror=()=>s(o.error),o.onsuccess=()=>r(o.result)})}finally{n.close()}}catch(n){console.warn("Không đọc được bộ nhớ đệm:",n);return}}async function ji(t){try{const n=await o7();try{return await new Promise((r,s)=>{const o=n.transaction(hn,"readonly").objectStore(hn),l=IDBKeyRange.bound(t,t+"￿"),c=[],f=o.openCursor(l);f.onerror=()=>s(f.error),f.onsuccess=()=>{const h=f.result;if(!h)return r(c);c.push({khóa:String(h.key),giá_trị:h.value}),h.continue()}})}finally{n.close()}}catch(n){return console.warn("Không đọc được bộ nhớ đệm:",n),[]}}async function Ue(t,n){try{const r=await o7();try{await new Promise((s,o)=>{const l=r.transaction(hn,"readwrite");l.objectStore(hn).put(n,t),l.oncomplete=()=>s(),l.onerror=()=>o(l.error),l.onabort=()=>o(l.error)})}finally{r.close()}}catch(r){console.warn("Không ghi được bộ nhớ đệm:",r)}}function jw(t,n,r){let s=5381;const o=l=>{for(let c=0;c<l.length;c++)s=(s<<5)+s+l.charCodeAt(c)|0};o(r);for(const l of[t,n]){o(`|${l.length}|`);for(const c of l)o(`${c.ngày_xổ_số}:${c.kết_quả_xổ_số.join("")};`)}return`${r}#${s>>>0}`}const Dn="DD/MM/YYYY";function U3(t){return typeof t=="number"?X(t).format(Dn):t}class zw{constructor(){v2(this,"tên_cơ_sở_dữ_liệu","DữLiệuLặpLại");v2(this,"phiên_bản",1);v2(this,"tên_kho_dữ_liệu","bộ_lưu_trữ");v2(this,"cơ_sở_dữ_liệu",null);v2(this,"đã_chuyển_định_dạng_ngày",!1)}async khởi_tạo(){return new Promise((n,r)=>{const s=indexedDB.open(this.tên_cơ_sở_dữ_liệu,this.phiên_bản);s.onerror=()=>r(s.error),s.onsuccess=()=>{this.cơ_sở_dữ_liệu=s.result,this.chuyển_định_dạng_ngày_bản_ghi_cũ().then(n,r)},s.onupgradeneeded=o=>{const l=o.target.result;if(!l.objectStoreNames.contains(this.tên_kho_dữ_liệu)){const c=l.createObjectStore(this.tên_kho_dữ_liệu,{keyPath:"id"});c.createIndex("tên","tên",{unique:!1}),c.createIndex("ngày_cập_nhật","ngày_cập_nhật",{unique:!1})}}})}async chuyển_định_dạng_ngày_bản_ghi_cũ(){this.đã_chuyển_định_dạng_ngày||!this.cơ_sở_dữ_liệu||(this.đã_chuyển_định_dạng_ngày=!0,await new Promise((n,r)=>{const s=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite"),o=s.objectStore(this.tên_kho_dữ_liệu).openCursor();o.onsuccess=()=>{const l=o.result;if(!l)return;const c=l.value;(typeof c.ngày_tạo=="number"||typeof c.ngày_cập_nhật=="number")&&(c.ngày_tạo=U3(c.ngày_tạo),c.ngày_cập_nhật=U3(c.ngày_cập_nhật),l.update(c)),l.continue()},o.onerror=()=>r(o.error),s.oncomplete=()=>n(),s.onerror=()=>r(s.error)}))}async lưu_dữ_liệu(n,r){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");const s=`${n}_${Date.now()}`,o={id:s,tên:n,ngày_tạo:X().format(Dn),ngày_cập_nhật:X().format(Dn),dữ_liệu:r,kích_thước:JSON.stringify(r).length};return new Promise((l,c)=>{const p=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).add(o);p.onerror=()=>c(p.error),p.onsuccess=()=>l(s)})}async lấy_dữ_liệu_theo_id(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((r,s)=>{const c=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).get(n);c.onerror=()=>s(c.error),c.onsuccess=()=>{const f=c.result;r(f?f.dữ_liệu:null)}})}async lấy_tất_cả(){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((n,r)=>{const l=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).getAll();l.onerror=()=>r(l.error),l.onsuccess=()=>n(l.result)})}async lấy_dữ_liệu_theo_tên(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((r,s)=>{const f=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).index("tên").getAll(n);f.onerror=()=>s(f.error),f.onsuccess=()=>r(f.result)})}async cập_nhật_dữ_liệu(n,r){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((s,o)=>{const c=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu),f=c.get(n);f.onsuccess=()=>{const h=f.result;if(h){h.dữ_liệu=r,h.ngày_cập_nhật=X().format(Dn),h.kích_thước=JSON.stringify(r).length;const p=c.put(h);p.onsuccess=()=>s(),p.onerror=()=>o(p.error)}else o(new Error("Không tìm thấy dữ liệu"))},f.onerror=()=>o(f.error)})}async xóa_dữ_liệu(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((r,s)=>{const c=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).delete(n);c.onerror=()=>s(c.error),c.onsuccess=()=>r()})}async xóa_tất_cả(){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((n,r)=>{const l=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).clear();l.onerror=()=>r(l.error),l.onsuccess=()=>n()})}async tìm_kiếm_theo_ngày(n,r){const s=await this.lấy_tất_cả(),o=X(n,Dn),l=X(r,Dn);return s.filter(c=>X(U3(c.ngày_cập_nhật),Dn).isBetween(o,l,"day","[]"))}async lấy_thống_kê(){const n=await this.lấy_tất_cả(),r=n.reduce((o,l)=>o+l.kích_thước,0),s=n.reduce((o,l)=>l.kích_thước>((o==null?void 0:o.kích_thước)||0)?l:o,null);return{tổng_bộ_lưu_trữ:n.length,tổng_kích_thước:r,lớn_nhất:s}}async xuất_dữ_liệu(){const n=await this.lấy_tất_cả();return JSON.stringify(n,null,2)}async nhập_dữ_liệu(n){const r=JSON.parse(n);let s=0;for(const o of r)try{if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");await new Promise((l,c)=>{const p=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).add({...o,ngày_tạo:U3(o.ngày_tạo),ngày_cập_nhật:U3(o.ngày_cập_nhật)});p.onsuccess=()=>{s++,l()},p.onerror=()=>c(p.error)})}catch{console.warn(`Lỗi nhập dữ liệu: ${o.id}`)}return s}}const n3=new zw;var y5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j3={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Jw=j3.exports,zi;function Xw(){return zi||(zi=1,function(t,n){(function(){var r,s="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",p=500,v="__lodash_placeholder__",y=1,S=2,M=4,G=1,Y=2,U=1,n0=2,l0=4,u0=8,a0=16,s0=32,P0=64,M0=128,s2=256,o2=512,m2=30,P2="...",r0=800,H=16,Q=1,x0=2,H0=3,g0=1/0,k0=9007199254740991,L2=17976931348623157e292,G2=NaN,g2=4294967295,E2=g2-1,h1=g2>>>1,B2=[["ary",M0],["bind",U],["bindKey",n0],["curry",u0],["curryRight",a0],["flip",o2],["partial",s0],["partialRight",P0],["rearg",s2]],V2="[object Arguments]",I2="[object Array]",R="[object AsyncFunction]",f0="[object Boolean]",e0="[object Date]",b0="[object DOMException]",j0="[object Error]",a2="[object Function]",T="[object GeneratorFunction]",x="[object Map]",A="[object Number]",$="[object Null]",L="[object Object]",W="[object Promise]",i0="[object Proxy]",J="[object RegExp]",z="[object Set]",F="[object String]",D0="[object Symbol]",_0="[object Undefined]",v0="[object WeakMap]",E0="[object WeakSet]",G0="[object ArrayBuffer]",Q0="[object DataView]",Z0="[object Float32Array]",j="[object Float64Array]",m="[object Int8Array]",N="[object Int16Array]",q="[object Int32Array]",K="[object Uint8Array]",h0="[object Uint8ClampedArray]",C="[object Uint16Array]",t0="[object Uint32Array]",w0=/\b__p \+= '';/g,T0=/\b(__p \+=) '' \+/g,d0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V0=/&(?:amp|lt|gt|quot|#39);/g,t2=/[&<>"']/g,n2=RegExp(V0.source),w2=RegExp(t2.source),r1=/<%-([\s\S]+?)%>/g,F2=/<%([\s\S]+?)%>/g,i1=/<%=([\s\S]+?)%>/g,Hn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,it=/^\w*$/,S3=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,f6=/[\\^$.*+?()[\]{}|]/g,yu=RegExp(f6.source),h6=/^\s+/,Tu=/\s/,xu=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,wu=/\{\n\/\* \[wrapped with (.+)\] \*/,Su=/,? & /,bu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mu=/[()=,{}\[\]\/\s]/,Cu=/\\(\\)?/g,ku=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,u7=/\w*$/,Pu=/^[-+]0x[0-9a-f]+$/i,Du=/^0b[01]+$/i,Au=/^\[object .+?Constructor\]$/,Ou=/^0o[0-7]+$/i,Lu=/^(?:0|[1-9]\d*)$/,Eu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,M4=/($^)/,Nu=/['\n\r\u2028\u2029\\]/g,C4="\\ud800-\\udfff",Ru="\\u0300-\\u036f",Bu="\\ufe20-\\ufe2f",Iu="\\u20d0-\\u20ff",l7=Ru+Bu+Iu,a7="\\u2700-\\u27bf",c7="a-z\\xdf-\\xf6\\xf8-\\xff",Hu="\\xac\\xb1\\xd7\\xf7",Gu="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yu="\\u2000-\\u206f",$u=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",f7="A-Z\\xc0-\\xd6\\xd8-\\xde",h7="\\ufe0e\\ufe0f",_7=Hu+Gu+Yu+$u,_6="['’]",Vu="["+C4+"]",d7="["+_7+"]",k4="["+l7+"]",g7="\\d+",Fu="["+a7+"]",p7="["+c7+"]",m7="[^"+C4+_7+g7+a7+c7+f7+"]",d6="\\ud83c[\\udffb-\\udfff]",Wu="(?:"+k4+"|"+d6+")",v7="[^"+C4+"]",g6="(?:\\ud83c[\\udde6-\\uddff]){2}",p6="[\\ud800-\\udbff][\\udc00-\\udfff]",Gn="["+f7+"]",y7="\\u200d",T7="(?:"+p7+"|"+m7+")",Uu="(?:"+Gn+"|"+m7+")",x7="(?:"+_6+"(?:d|ll|m|re|s|t|ve))?",w7="(?:"+_6+"(?:D|LL|M|RE|S|T|VE))?",S7=Wu+"?",b7="["+h7+"]?",qu="(?:"+y7+"(?:"+[v7,g6,p6].join("|")+")"+b7+S7+")*",Ku="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ju="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",M7=b7+S7+qu,zu="(?:"+[Fu,g6,p6].join("|")+")"+M7,Zu="(?:"+[v7+k4+"?",k4,g6,p6,Vu].join("|")+")",Ju=RegExp(_6,"g"),Xu=RegExp(k4,"g"),m6=RegExp(d6+"(?="+d6+")|"+Zu+M7,"g"),Qu=RegExp([Gn+"?"+p7+"+"+x7+"(?="+[d7,Gn,"$"].join("|")+")",Uu+"+"+w7+"(?="+[d7,Gn+T7,"$"].join("|")+")",Gn+"?"+T7+"+"+x7,Gn+"+"+w7,ju,Ku,g7,zu].join("|"),"g"),tl=RegExp("["+y7+C4+l7+h7+"]"),nl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,el=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rl=-1,D2={};D2[Z0]=D2[j]=D2[m]=D2[N]=D2[q]=D2[K]=D2[h0]=D2[C]=D2[t0]=!0,D2[V2]=D2[I2]=D2[G0]=D2[f0]=D2[Q0]=D2[e0]=D2[j0]=D2[a2]=D2[x]=D2[A]=D2[L]=D2[J]=D2[z]=D2[F]=D2[v0]=!1;var M2={};M2[V2]=M2[I2]=M2[G0]=M2[Q0]=M2[f0]=M2[e0]=M2[Z0]=M2[j]=M2[m]=M2[N]=M2[q]=M2[x]=M2[A]=M2[L]=M2[J]=M2[z]=M2[F]=M2[D0]=M2[K]=M2[h0]=M2[C]=M2[t0]=!0,M2[j0]=M2[a2]=M2[v0]=!1;var il={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},sl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ol={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ul={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ll=parseFloat,al=parseInt,C7=typeof y5=="object"&&y5&&y5.Object===Object&&y5,cl=typeof self=="object"&&self&&self.Object===Object&&self,n1=C7||cl||Function("return this")(),v6=n&&!n.nodeType&&n,gn=v6&&!0&&t&&!t.nodeType&&t,k7=gn&&gn.exports===v6,y6=k7&&C7.process,R1=function(){try{var k=gn&&gn.require&&gn.require("util").types;return k||y6&&y6.binding&&y6.binding("util")}catch{}}(),P7=R1&&R1.isArrayBuffer,D7=R1&&R1.isDate,A7=R1&&R1.isMap,O7=R1&&R1.isRegExp,L7=R1&&R1.isSet,E7=R1&&R1.isTypedArray;function S1(k,E,O){switch(O.length){case 0:return k.call(E);case 1:return k.call(E,O[0]);case 2:return k.call(E,O[0],O[1]);case 3:return k.call(E,O[0],O[1],O[2])}return k.apply(E,O)}function fl(k,E,O,p0){for(var I0=-1,c2=k==null?0:k.length;++I0<c2;){var j2=k[I0];E(p0,j2,O(j2),k)}return p0}function B1(k,E){for(var O=-1,p0=k==null?0:k.length;++O<p0&&E(k[O],O,k)!==!1;);return k}function hl(k,E){for(var O=k==null?0:k.length;O--&&E(k[O],O,k)!==!1;);return k}function N7(k,E){for(var O=-1,p0=k==null?0:k.length;++O<p0;)if(!E(k[O],O,k))return!1;return!0}function qt(k,E){for(var O=-1,p0=k==null?0:k.length,I0=0,c2=[];++O<p0;){var j2=k[O];E(j2,O,k)&&(c2[I0++]=j2)}return c2}function P4(k,E){var O=k==null?0:k.length;return!!O&&Yn(k,E,0)>-1}function T6(k,E,O){for(var p0=-1,I0=k==null?0:k.length;++p0<I0;)if(O(E,k[p0]))return!0;return!1}function N2(k,E){for(var O=-1,p0=k==null?0:k.length,I0=Array(p0);++O<p0;)I0[O]=E(k[O],O,k);return I0}function Kt(k,E){for(var O=-1,p0=E.length,I0=k.length;++O<p0;)k[I0+O]=E[O];return k}function x6(k,E,O,p0){var I0=-1,c2=k==null?0:k.length;for(p0&&c2&&(O=k[++I0]);++I0<c2;)O=E(O,k[I0],I0,k);return O}function _l(k,E,O,p0){var I0=k==null?0:k.length;for(p0&&I0&&(O=k[--I0]);I0--;)O=E(O,k[I0],I0,k);return O}function w6(k,E){for(var O=-1,p0=k==null?0:k.length;++O<p0;)if(E(k[O],O,k))return!0;return!1}var dl=S6("length");function gl(k){return k.split("")}function pl(k){return k.match(bu)||[]}function R7(k,E,O){var p0;return O(k,function(I0,c2,j2){if(E(I0,c2,j2))return p0=c2,!1}),p0}function D4(k,E,O,p0){for(var I0=k.length,c2=O+(p0?1:-1);p0?c2--:++c2<I0;)if(E(k[c2],c2,k))return c2;return-1}function Yn(k,E,O){return E===E?Pl(k,E,O):D4(k,B7,O)}function ml(k,E,O,p0){for(var I0=O-1,c2=k.length;++I0<c2;)if(p0(k[I0],E))return I0;return-1}function B7(k){return k!==k}function I7(k,E){var O=k==null?0:k.length;return O?M6(k,E)/O:G2}function S6(k){return function(E){return E==null?r:E[k]}}function b6(k){return function(E){return k==null?r:k[E]}}function H7(k,E,O,p0,I0){return I0(k,function(c2,j2,S2){O=p0?(p0=!1,c2):E(O,c2,j2,S2)}),O}function vl(k,E){var O=k.length;for(k.sort(E);O--;)k[O]=k[O].value;return k}function M6(k,E){for(var O,p0=-1,I0=k.length;++p0<I0;){var c2=E(k[p0]);c2!==r&&(O=O===r?c2:O+c2)}return O}function C6(k,E){for(var O=-1,p0=Array(k);++O<k;)p0[O]=E(O);return p0}function yl(k,E){return N2(E,function(O){return[O,k[O]]})}function G7(k){return k&&k.slice(0,F7(k)+1).replace(h6,"")}function b1(k){return function(E){return k(E)}}function k6(k,E){return N2(E,function(O){return k[O]})}function b3(k,E){return k.has(E)}function Y7(k,E){for(var O=-1,p0=k.length;++O<p0&&Yn(E,k[O],0)>-1;);return O}function $7(k,E){for(var O=k.length;O--&&Yn(E,k[O],0)>-1;);return O}function Tl(k,E){for(var O=k.length,p0=0;O--;)k[O]===E&&++p0;return p0}var xl=b6(il),wl=b6(sl);function Sl(k){return"\\"+ul[k]}function bl(k,E){return k==null?r:k[E]}function $n(k){return tl.test(k)}function Ml(k){return nl.test(k)}function Cl(k){for(var E,O=[];!(E=k.next()).done;)O.push(E.value);return O}function P6(k){var E=-1,O=Array(k.size);return k.forEach(function(p0,I0){O[++E]=[I0,p0]}),O}function V7(k,E){return function(O){return k(E(O))}}function jt(k,E){for(var O=-1,p0=k.length,I0=0,c2=[];++O<p0;){var j2=k[O];(j2===E||j2===v)&&(k[O]=v,c2[I0++]=O)}return c2}function A4(k){var E=-1,O=Array(k.size);return k.forEach(function(p0){O[++E]=p0}),O}function kl(k){var E=-1,O=Array(k.size);return k.forEach(function(p0){O[++E]=[p0,p0]}),O}function Pl(k,E,O){for(var p0=O-1,I0=k.length;++p0<I0;)if(k[p0]===E)return p0;return-1}function Dl(k,E,O){for(var p0=O+1;p0--;)if(k[p0]===E)return p0;return p0}function Vn(k){return $n(k)?Ol(k):dl(k)}function j1(k){return $n(k)?Ll(k):gl(k)}function F7(k){for(var E=k.length;E--&&Tu.test(k.charAt(E)););return E}var Al=b6(ol);function Ol(k){for(var E=m6.lastIndex=0;m6.test(k);)++E;return E}function Ll(k){return k.match(m6)||[]}function El(k){return k.match(Qu)||[]}var Nl=function k(E){E=E==null?n1:Fn.defaults(n1.Object(),E,Fn.pick(n1,el));var O=E.Array,p0=E.Date,I0=E.Error,c2=E.Function,j2=E.Math,S2=E.Object,D6=E.RegExp,Rl=E.String,I1=E.TypeError,O4=O.prototype,Bl=c2.prototype,Wn=S2.prototype,L4=E["__core-js_shared__"],E4=Bl.toString,p2=Wn.hasOwnProperty,Il=0,W7=function(){var e=/[^.]+$/.exec(L4&&L4.keys&&L4.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),N4=Wn.toString,Hl=E4.call(S2),Gl=n1._,Yl=D6("^"+E4.call(p2).replace(f6,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R4=k7?E.Buffer:r,zt=E.Symbol,B4=E.Uint8Array,U7=R4?R4.allocUnsafe:r,I4=V7(S2.getPrototypeOf,S2),q7=S2.create,K7=Wn.propertyIsEnumerable,H4=O4.splice,j7=zt?zt.isConcatSpreadable:r,M3=zt?zt.iterator:r,pn=zt?zt.toStringTag:r,G4=function(){try{var e=xn(S2,"defineProperty");return e({},"",{}),e}catch{}}(),$l=E.clearTimeout!==n1.clearTimeout&&E.clearTimeout,Vl=p0&&p0.now!==n1.Date.now&&p0.now,Fl=E.setTimeout!==n1.setTimeout&&E.setTimeout,Y4=j2.ceil,$4=j2.floor,A6=S2.getOwnPropertySymbols,Wl=R4?R4.isBuffer:r,z7=E.isFinite,Ul=O4.join,ql=V7(S2.keys,S2),z2=j2.max,s1=j2.min,Kl=p0.now,jl=E.parseInt,Z7=j2.random,zl=O4.reverse,O6=xn(E,"DataView"),C3=xn(E,"Map"),L6=xn(E,"Promise"),Un=xn(E,"Set"),k3=xn(E,"WeakMap"),P3=xn(S2,"create"),V4=k3&&new k3,qn={},Zl=wn(O6),Jl=wn(C3),Xl=wn(L6),Ql=wn(Un),ta=wn(k3),F4=zt?zt.prototype:r,D3=F4?F4.valueOf:r,J7=F4?F4.toString:r;function d(e){if(Y2(e)&&!Y0(e)&&!(e instanceof J0)){if(e instanceof H1)return e;if(p2.call(e,"__wrapped__"))return X9(e)}return new H1(e)}var Kn=function(){function e(){}return function(i){if(!H2(i))return{};if(q7)return q7(i);e.prototype=i;var u=new e;return e.prototype=r,u}}();function W4(){}function H1(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}d.templateSettings={escape:r1,evaluate:F2,interpolate:i1,variable:"",imports:{_:d}},d.prototype=W4.prototype,d.prototype.constructor=d,H1.prototype=Kn(W4.prototype),H1.prototype.constructor=H1;function J0(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g2,this.__views__=[]}function na(){var e=new J0(this.__wrapped__);return e.__actions__=v1(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=v1(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=v1(this.__views__),e}function ea(){if(this.__filtered__){var e=new J0(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function ra(){var e=this.__wrapped__.value(),i=this.__dir__,u=Y0(e),a=i<0,_=u?e.length:0,g=gc(0,_,this.__views__),w=g.start,b=g.end,P=b-w,B=a?b:w-1,I=this.__iteratees__,V=I.length,c0=0,C0=s1(P,this.__takeCount__);if(!u||!a&&_==P&&C0==P)return x9(e,this.__actions__);var N0=[];t:for(;P--&&c0<C0;){B+=i;for(var U0=-1,R0=e[B];++U0<V;){var z0=I[U0],e2=z0.iteratee,k1=z0.type,g1=e2(R0);if(k1==x0)R0=g1;else if(!g1){if(k1==Q)continue t;break t}}N0[c0++]=R0}return N0}J0.prototype=Kn(W4.prototype),J0.prototype.constructor=J0;function mn(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var a=e[i];this.set(a[0],a[1])}}function ia(){this.__data__=P3?P3(null):{},this.size=0}function sa(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function oa(e){var i=this.__data__;if(P3){var u=i[e];return u===h?r:u}return p2.call(i,e)?i[e]:r}function ua(e){var i=this.__data__;return P3?i[e]!==r:p2.call(i,e)}function la(e,i){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=P3&&i===r?h:i,this}mn.prototype.clear=ia,mn.prototype.delete=sa,mn.prototype.get=oa,mn.prototype.has=ua,mn.prototype.set=la;function yt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var a=e[i];this.set(a[0],a[1])}}function aa(){this.__data__=[],this.size=0}function ca(e){var i=this.__data__,u=U4(i,e);if(u<0)return!1;var a=i.length-1;return u==a?i.pop():H4.call(i,u,1),--this.size,!0}function fa(e){var i=this.__data__,u=U4(i,e);return u<0?r:i[u][1]}function ha(e){return U4(this.__data__,e)>-1}function _a(e,i){var u=this.__data__,a=U4(u,e);return a<0?(++this.size,u.push([e,i])):u[a][1]=i,this}yt.prototype.clear=aa,yt.prototype.delete=ca,yt.prototype.get=fa,yt.prototype.has=ha,yt.prototype.set=_a;function Tt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var a=e[i];this.set(a[0],a[1])}}function da(){this.size=0,this.__data__={hash:new mn,map:new(C3||yt),string:new mn}}function ga(e){var i=r5(this,e).delete(e);return this.size-=i?1:0,i}function pa(e){return r5(this,e).get(e)}function ma(e){return r5(this,e).has(e)}function va(e,i){var u=r5(this,e),a=u.size;return u.set(e,i),this.size+=u.size==a?0:1,this}Tt.prototype.clear=da,Tt.prototype.delete=ga,Tt.prototype.get=pa,Tt.prototype.has=ma,Tt.prototype.set=va;function vn(e){var i=-1,u=e==null?0:e.length;for(this.__data__=new Tt;++i<u;)this.add(e[i])}function ya(e){return this.__data__.set(e,h),this}function Ta(e){return this.__data__.has(e)}vn.prototype.add=vn.prototype.push=ya,vn.prototype.has=Ta;function z1(e){var i=this.__data__=new yt(e);this.size=i.size}function xa(){this.__data__=new yt,this.size=0}function wa(e){var i=this.__data__,u=i.delete(e);return this.size=i.size,u}function Sa(e){return this.__data__.get(e)}function ba(e){return this.__data__.has(e)}function Ma(e,i){var u=this.__data__;if(u instanceof yt){var a=u.__data__;if(!C3||a.length<o-1)return a.push([e,i]),this.size=++u.size,this;u=this.__data__=new Tt(a)}return u.set(e,i),this.size=u.size,this}z1.prototype.clear=xa,z1.prototype.delete=wa,z1.prototype.get=Sa,z1.prototype.has=ba,z1.prototype.set=Ma;function X7(e,i){var u=Y0(e),a=!u&&Sn(e),_=!u&&!a&&tn(e),g=!u&&!a&&!_&&Jn(e),w=u||a||_||g,b=w?C6(e.length,Rl):[],P=b.length;for(var B in e)(i||p2.call(e,B))&&!(w&&(B=="length"||_&&(B=="offset"||B=="parent")||g&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||bt(B,P)))&&b.push(B);return b}function Q7(e){var i=e.length;return i?e[F6(0,i-1)]:r}function Ca(e,i){return i5(v1(e),yn(i,0,e.length))}function ka(e){return i5(v1(e))}function E6(e,i,u){(u!==r&&!Z1(e[i],u)||u===r&&!(i in e))&&xt(e,i,u)}function A3(e,i,u){var a=e[i];(!(p2.call(e,i)&&Z1(a,u))||u===r&&!(i in e))&&xt(e,i,u)}function U4(e,i){for(var u=e.length;u--;)if(Z1(e[u][0],i))return u;return-1}function Pa(e,i,u,a){return Zt(e,function(_,g,w){i(a,_,u(_),w)}),a}function t9(e,i){return e&&ot(i,X2(i),e)}function Da(e,i){return e&&ot(i,T1(i),e)}function xt(e,i,u){i=="__proto__"&&G4?G4(e,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[i]=u}function N6(e,i){for(var u=-1,a=i.length,_=O(a),g=e==null;++u<a;)_[u]=g?r:de(e,i[u]);return _}function yn(e,i,u){return e===e&&(u!==r&&(e=e<=u?e:u),i!==r&&(e=e>=i?e:i)),e}function G1(e,i,u,a,_,g){var w,b=i&y,P=i&S,B=i&M;if(u&&(w=_?u(e,a,_,g):u(e)),w!==r)return w;if(!H2(e))return e;var I=Y0(e);if(I){if(w=mc(e),!b)return v1(e,w)}else{var V=o1(e),c0=V==a2||V==T;if(tn(e))return b9(e,b);if(V==L||V==V2||c0&&!_){if(w=P||c0?{}:F9(e),!b)return P?oc(e,Da(w,e)):sc(e,t9(w,e))}else{if(!M2[V])return _?e:{};w=vc(e,V,b)}}g||(g=new z1);var C0=g.get(e);if(C0)return C0;g.set(e,w),vr(e)?e.forEach(function(R0){w.add(G1(R0,i,u,R0,e,g))}):pr(e)&&e.forEach(function(R0,z0){w.set(z0,G1(R0,i,u,z0,e,g))});var N0=B?P?te:Q6:P?T1:X2,U0=I?r:N0(e);return B1(U0||e,function(R0,z0){U0&&(z0=R0,R0=e[z0]),A3(w,z0,G1(R0,i,u,z0,e,g))}),w}function Aa(e){var i=X2(e);return function(u){return n9(u,e,i)}}function n9(e,i,u){var a=u.length;if(e==null)return!a;for(e=S2(e);a--;){var _=u[a],g=i[_],w=e[_];if(w===r&&!(_ in e)||!g(w))return!1}return!0}function e9(e,i,u){if(typeof e!="function")throw new I1(c);return I3(function(){e.apply(r,u)},i)}function O3(e,i,u,a){var _=-1,g=P4,w=!0,b=e.length,P=[],B=i.length;if(!b)return P;u&&(i=N2(i,b1(u))),a?(g=T6,w=!1):i.length>=o&&(g=b3,w=!1,i=new vn(i));t:for(;++_<b;){var I=e[_],V=u==null?I:u(I);if(I=a||I!==0?I:0,w&&V===V){for(var c0=B;c0--;)if(i[c0]===V)continue t;P.push(I)}else g(i,V,a)||P.push(I)}return P}var Zt=D9(st),r9=D9(B6,!0);function Oa(e,i){var u=!0;return Zt(e,function(a,_,g){return u=!!i(a,_,g),u}),u}function q4(e,i,u){for(var a=-1,_=e.length;++a<_;){var g=e[a],w=i(g);if(w!=null&&(b===r?w===w&&!C1(w):u(w,b)))var b=w,P=g}return P}function La(e,i,u,a){var _=e.length;for(u=F0(u),u<0&&(u=-u>_?0:_+u),a=a===r||a>_?_:F0(a),a<0&&(a+=_),a=u>a?0:Tr(a);u<a;)e[u++]=i;return e}function i9(e,i){var u=[];return Zt(e,function(a,_,g){i(a,_,g)&&u.push(a)}),u}function e1(e,i,u,a,_){var g=-1,w=e.length;for(u||(u=Tc),_||(_=[]);++g<w;){var b=e[g];i>0&&u(b)?i>1?e1(b,i-1,u,a,_):Kt(_,b):a||(_[_.length]=b)}return _}var R6=A9(),s9=A9(!0);function st(e,i){return e&&R6(e,i,X2)}function B6(e,i){return e&&s9(e,i,X2)}function K4(e,i){return qt(i,function(u){return Mt(e[u])})}function Tn(e,i){i=Xt(i,e);for(var u=0,a=i.length;e!=null&&u<a;)e=e[ut(i[u++])];return u&&u==a?e:r}function o9(e,i,u){var a=i(e);return Y0(e)?a:Kt(a,u(e))}function _1(e){return e==null?e===r?_0:$:pn&&pn in S2(e)?dc(e):kc(e)}function I6(e,i){return e>i}function Ea(e,i){return e!=null&&p2.call(e,i)}function Na(e,i){return e!=null&&i in S2(e)}function Ra(e,i,u){return e>=s1(i,u)&&e<z2(i,u)}function H6(e,i,u){for(var a=u?T6:P4,_=e[0].length,g=e.length,w=g,b=O(g),P=1/0,B=[];w--;){var I=e[w];w&&i&&(I=N2(I,b1(i))),P=s1(I.length,P),b[w]=!u&&(i||_>=120&&I.length>=120)?new vn(w&&I):r}I=e[0];var V=-1,c0=b[0];t:for(;++V<_&&B.length<P;){var C0=I[V],N0=i?i(C0):C0;if(C0=u||C0!==0?C0:0,!(c0?b3(c0,N0):a(B,N0,u))){for(w=g;--w;){var U0=b[w];if(!(U0?b3(U0,N0):a(e[w],N0,u)))continue t}c0&&c0.push(N0),B.push(C0)}}return B}function Ba(e,i,u,a){return st(e,function(_,g,w){i(a,u(_),g,w)}),a}function L3(e,i,u){i=Xt(i,e),e=K9(e,i);var a=e==null?e:e[ut($1(i))];return a==null?r:S1(a,e,u)}function u9(e){return Y2(e)&&_1(e)==V2}function Ia(e){return Y2(e)&&_1(e)==G0}function Ha(e){return Y2(e)&&_1(e)==e0}function E3(e,i,u,a,_){return e===i?!0:e==null||i==null||!Y2(e)&&!Y2(i)?e!==e&&i!==i:Ga(e,i,u,a,E3,_)}function Ga(e,i,u,a,_,g){var w=Y0(e),b=Y0(i),P=w?I2:o1(e),B=b?I2:o1(i);P=P==V2?L:P,B=B==V2?L:B;var I=P==L,V=B==L,c0=P==B;if(c0&&tn(e)){if(!tn(i))return!1;w=!0,I=!1}if(c0&&!I)return g||(g=new z1),w||Jn(e)?Y9(e,i,u,a,_,g):hc(e,i,P,u,a,_,g);if(!(u&G)){var C0=I&&p2.call(e,"__wrapped__"),N0=V&&p2.call(i,"__wrapped__");if(C0||N0){var U0=C0?e.value():e,R0=N0?i.value():i;return g||(g=new z1),_(U0,R0,u,a,g)}}return c0?(g||(g=new z1),_c(e,i,u,a,_,g)):!1}function Ya(e){return Y2(e)&&o1(e)==x}function G6(e,i,u,a){var _=u.length,g=_,w=!a;if(e==null)return!g;for(e=S2(e);_--;){var b=u[_];if(w&&b[2]?b[1]!==e[b[0]]:!(b[0]in e))return!1}for(;++_<g;){b=u[_];var P=b[0],B=e[P],I=b[1];if(w&&b[2]){if(B===r&&!(P in e))return!1}else{var V=new z1;if(a)var c0=a(B,I,P,e,i,V);if(!(c0===r?E3(I,B,G|Y,a,V):c0))return!1}}return!0}function l9(e){if(!H2(e)||wc(e))return!1;var i=Mt(e)?Yl:Au;return i.test(wn(e))}function $a(e){return Y2(e)&&_1(e)==J}function Va(e){return Y2(e)&&o1(e)==z}function Fa(e){return Y2(e)&&c5(e.length)&&!!D2[_1(e)]}function a9(e){return typeof e=="function"?e:e==null?x1:typeof e=="object"?Y0(e)?h9(e[0],e[1]):f9(e):Or(e)}function Y6(e){if(!B3(e))return ql(e);var i=[];for(var u in S2(e))p2.call(e,u)&&u!="constructor"&&i.push(u);return i}function Wa(e){if(!H2(e))return Cc(e);var i=B3(e),u=[];for(var a in e)a=="constructor"&&(i||!p2.call(e,a))||u.push(a);return u}function $6(e,i){return e<i}function c9(e,i){var u=-1,a=y1(e)?O(e.length):[];return Zt(e,function(_,g,w){a[++u]=i(_,g,w)}),a}function f9(e){var i=ee(e);return i.length==1&&i[0][2]?U9(i[0][0],i[0][1]):function(u){return u===e||G6(u,e,i)}}function h9(e,i){return ie(e)&&W9(i)?U9(ut(e),i):function(u){var a=de(u,e);return a===r&&a===i?ge(u,e):E3(i,a,G|Y)}}function j4(e,i,u,a,_){e!==i&&R6(i,function(g,w){if(_||(_=new z1),H2(g))Ua(e,i,w,u,j4,a,_);else{var b=a?a(oe(e,w),g,w+"",e,i,_):r;b===r&&(b=g),E6(e,w,b)}},T1)}function Ua(e,i,u,a,_,g,w){var b=oe(e,u),P=oe(i,u),B=w.get(P);if(B){E6(e,u,B);return}var I=g?g(b,P,u+"",e,i,w):r,V=I===r;if(V){var c0=Y0(P),C0=!c0&&tn(P),N0=!c0&&!C0&&Jn(P);I=P,c0||C0||N0?Y0(b)?I=b:W2(b)?I=v1(b):C0?(V=!1,I=b9(P,!0)):N0?(V=!1,I=M9(P,!0)):I=[]:H3(P)||Sn(P)?(I=b,Sn(b)?I=xr(b):(!H2(b)||Mt(b))&&(I=F9(P))):V=!1}V&&(w.set(P,I),_(I,P,a,g,w),w.delete(P)),E6(e,u,I)}function _9(e,i){var u=e.length;if(u)return i+=i<0?u:0,bt(i,u)?e[i]:r}function d9(e,i,u){i.length?i=N2(i,function(g){return Y0(g)?function(w){return Tn(w,g.length===1?g[0]:g)}:g}):i=[x1];var a=-1;i=N2(i,b1(L0()));var _=c9(e,function(g,w,b){var P=N2(i,function(B){return B(g)});return{criteria:P,index:++a,value:g}});return vl(_,function(g,w){return ic(g,w,u)})}function qa(e,i){return g9(e,i,function(u,a){return ge(e,a)})}function g9(e,i,u){for(var a=-1,_=i.length,g={};++a<_;){var w=i[a],b=Tn(e,w);u(b,w)&&N3(g,Xt(w,e),b)}return g}function Ka(e){return function(i){return Tn(i,e)}}function V6(e,i,u,a){var _=a?ml:Yn,g=-1,w=i.length,b=e;for(e===i&&(i=v1(i)),u&&(b=N2(e,b1(u)));++g<w;)for(var P=0,B=i[g],I=u?u(B):B;(P=_(b,I,P,a))>-1;)b!==e&&H4.call(b,P,1),H4.call(e,P,1);return e}function p9(e,i){for(var u=e?i.length:0,a=u-1;u--;){var _=i[u];if(u==a||_!==g){var g=_;bt(_)?H4.call(e,_,1):q6(e,_)}}return e}function F6(e,i){return e+$4(Z7()*(i-e+1))}function ja(e,i,u,a){for(var _=-1,g=z2(Y4((i-e)/(u||1)),0),w=O(g);g--;)w[a?g:++_]=e,e+=u;return w}function W6(e,i){var u="";if(!e||i<1||i>k0)return u;do i%2&&(u+=e),i=$4(i/2),i&&(e+=e);while(i);return u}function q0(e,i){return ue(q9(e,i,x1),e+"")}function za(e){return Q7(Xn(e))}function Za(e,i){var u=Xn(e);return i5(u,yn(i,0,u.length))}function N3(e,i,u,a){if(!H2(e))return e;i=Xt(i,e);for(var _=-1,g=i.length,w=g-1,b=e;b!=null&&++_<g;){var P=ut(i[_]),B=u;if(P==="__proto__"||P==="constructor"||P==="prototype")return e;if(_!=w){var I=b[P];B=a?a(I,P,b):r,B===r&&(B=H2(I)?I:bt(i[_+1])?[]:{})}A3(b,P,B),b=b[P]}return e}var m9=V4?function(e,i){return V4.set(e,i),e}:x1,Ja=G4?function(e,i){return G4(e,"toString",{configurable:!0,enumerable:!1,value:me(i),writable:!0})}:x1;function Xa(e){return i5(Xn(e))}function Y1(e,i,u){var a=-1,_=e.length;i<0&&(i=-i>_?0:_+i),u=u>_?_:u,u<0&&(u+=_),_=i>u?0:u-i>>>0,i>>>=0;for(var g=O(_);++a<_;)g[a]=e[a+i];return g}function Qa(e,i){var u;return Zt(e,function(a,_,g){return u=i(a,_,g),!u}),!!u}function z4(e,i,u){var a=0,_=e==null?a:e.length;if(typeof i=="number"&&i===i&&_<=h1){for(;a<_;){var g=a+_>>>1,w=e[g];w!==null&&!C1(w)&&(u?w<=i:w<i)?a=g+1:_=g}return _}return U6(e,i,x1,u)}function U6(e,i,u,a){var _=0,g=e==null?0:e.length;if(g===0)return 0;i=u(i);for(var w=i!==i,b=i===null,P=C1(i),B=i===r;_<g;){var I=$4((_+g)/2),V=u(e[I]),c0=V!==r,C0=V===null,N0=V===V,U0=C1(V);if(w)var R0=a||N0;else B?R0=N0&&(a||c0):b?R0=N0&&c0&&(a||!C0):P?R0=N0&&c0&&!C0&&(a||!U0):C0||U0?R0=!1:R0=a?V<=i:V<i;R0?_=I+1:g=I}return s1(g,E2)}function v9(e,i){for(var u=-1,a=e.length,_=0,g=[];++u<a;){var w=e[u],b=i?i(w):w;if(!u||!Z1(b,P)){var P=b;g[_++]=w===0?0:w}}return g}function y9(e){return typeof e=="number"?e:C1(e)?G2:+e}function M1(e){if(typeof e=="string")return e;if(Y0(e))return N2(e,M1)+"";if(C1(e))return J7?J7.call(e):"";var i=e+"";return i=="0"&&1/e==-g0?"-0":i}function Jt(e,i,u){var a=-1,_=P4,g=e.length,w=!0,b=[],P=b;if(u)w=!1,_=T6;else if(g>=o){var B=i?null:cc(e);if(B)return A4(B);w=!1,_=b3,P=new vn}else P=i?[]:b;t:for(;++a<g;){var I=e[a],V=i?i(I):I;if(I=u||I!==0?I:0,w&&V===V){for(var c0=P.length;c0--;)if(P[c0]===V)continue t;i&&P.push(V),b.push(I)}else _(P,V,u)||(P!==b&&P.push(V),b.push(I))}return b}function q6(e,i){return i=Xt(i,e),e=K9(e,i),e==null||delete e[ut($1(i))]}function T9(e,i,u,a){return N3(e,i,u(Tn(e,i)),a)}function Z4(e,i,u,a){for(var _=e.length,g=a?_:-1;(a?g--:++g<_)&&i(e[g],g,e););return u?Y1(e,a?0:g,a?g+1:_):Y1(e,a?g+1:0,a?_:g)}function x9(e,i){var u=e;return u instanceof J0&&(u=u.value()),x6(i,function(a,_){return _.func.apply(_.thisArg,Kt([a],_.args))},u)}function K6(e,i,u){var a=e.length;if(a<2)return a?Jt(e[0]):[];for(var _=-1,g=O(a);++_<a;)for(var w=e[_],b=-1;++b<a;)b!=_&&(g[_]=O3(g[_]||w,e[b],i,u));return Jt(e1(g,1),i,u)}function w9(e,i,u){for(var a=-1,_=e.length,g=i.length,w={};++a<_;){var b=a<g?i[a]:r;u(w,e[a],b)}return w}function j6(e){return W2(e)?e:[]}function z6(e){return typeof e=="function"?e:x1}function Xt(e,i){return Y0(e)?e:ie(e,i)?[e]:J9(f2(e))}var tc=q0;function Qt(e,i,u){var a=e.length;return u=u===r?a:u,!i&&u>=a?e:Y1(e,i,u)}var S9=$l||function(e){return n1.clearTimeout(e)};function b9(e,i){if(i)return e.slice();var u=e.length,a=U7?U7(u):new e.constructor(u);return e.copy(a),a}function Z6(e){var i=new e.constructor(e.byteLength);return new B4(i).set(new B4(e)),i}function nc(e,i){var u=i?Z6(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function ec(e){var i=new e.constructor(e.source,u7.exec(e));return i.lastIndex=e.lastIndex,i}function rc(e){return D3?S2(D3.call(e)):{}}function M9(e,i){var u=i?Z6(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function C9(e,i){if(e!==i){var u=e!==r,a=e===null,_=e===e,g=C1(e),w=i!==r,b=i===null,P=i===i,B=C1(i);if(!b&&!B&&!g&&e>i||g&&w&&P&&!b&&!B||a&&w&&P||!u&&P||!_)return 1;if(!a&&!g&&!B&&e<i||B&&u&&_&&!a&&!g||b&&u&&_||!w&&_||!P)return-1}return 0}function ic(e,i,u){for(var a=-1,_=e.criteria,g=i.criteria,w=_.length,b=u.length;++a<w;){var P=C9(_[a],g[a]);if(P){if(a>=b)return P;var B=u[a];return P*(B=="desc"?-1:1)}}return e.index-i.index}function k9(e,i,u,a){for(var _=-1,g=e.length,w=u.length,b=-1,P=i.length,B=z2(g-w,0),I=O(P+B),V=!a;++b<P;)I[b]=i[b];for(;++_<w;)(V||_<g)&&(I[u[_]]=e[_]);for(;B--;)I[b++]=e[_++];return I}function P9(e,i,u,a){for(var _=-1,g=e.length,w=-1,b=u.length,P=-1,B=i.length,I=z2(g-b,0),V=O(I+B),c0=!a;++_<I;)V[_]=e[_];for(var C0=_;++P<B;)V[C0+P]=i[P];for(;++w<b;)(c0||_<g)&&(V[C0+u[w]]=e[_++]);return V}function v1(e,i){var u=-1,a=e.length;for(i||(i=O(a));++u<a;)i[u]=e[u];return i}function ot(e,i,u,a){var _=!u;u||(u={});for(var g=-1,w=i.length;++g<w;){var b=i[g],P=a?a(u[b],e[b],b,u,e):r;P===r&&(P=e[b]),_?xt(u,b,P):A3(u,b,P)}return u}function sc(e,i){return ot(e,re(e),i)}function oc(e,i){return ot(e,$9(e),i)}function J4(e,i){return function(u,a){var _=Y0(u)?fl:Pa,g=i?i():{};return _(u,e,L0(a,2),g)}}function jn(e){return q0(function(i,u){var a=-1,_=u.length,g=_>1?u[_-1]:r,w=_>2?u[2]:r;for(g=e.length>3&&typeof g=="function"?(_--,g):r,w&&d1(u[0],u[1],w)&&(g=_<3?r:g,_=1),i=S2(i);++a<_;){var b=u[a];b&&e(i,b,a,g)}return i})}function D9(e,i){return function(u,a){if(u==null)return u;if(!y1(u))return e(u,a);for(var _=u.length,g=i?_:-1,w=S2(u);(i?g--:++g<_)&&a(w[g],g,w)!==!1;);return u}}function A9(e){return function(i,u,a){for(var _=-1,g=S2(i),w=a(i),b=w.length;b--;){var P=w[e?b:++_];if(u(g[P],P,g)===!1)break}return i}}function uc(e,i,u){var a=i&U,_=R3(e);function g(){var w=this&&this!==n1&&this instanceof g?_:e;return w.apply(a?u:this,arguments)}return g}function O9(e){return function(i){i=f2(i);var u=$n(i)?j1(i):r,a=u?u[0]:i.charAt(0),_=u?Qt(u,1).join(""):i.slice(1);return a[e]()+_}}function zn(e){return function(i){return x6(Dr(Pr(i).replace(Ju,"")),e,"")}}function R3(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=Kn(e.prototype),a=e.apply(u,i);return H2(a)?a:u}}function lc(e,i,u){var a=R3(e);function _(){for(var g=arguments.length,w=O(g),b=g,P=Zn(_);b--;)w[b]=arguments[b];var B=g<3&&w[0]!==P&&w[g-1]!==P?[]:jt(w,P);if(g-=B.length,g<u)return B9(e,i,X4,_.placeholder,r,w,B,r,r,u-g);var I=this&&this!==n1&&this instanceof _?a:e;return S1(I,this,w)}return _}function L9(e){return function(i,u,a){var _=S2(i);if(!y1(i)){var g=L0(u,3);i=X2(i),u=function(b){return g(_[b],b,_)}}var w=e(i,u,a);return w>-1?_[g?i[w]:w]:r}}function E9(e){return St(function(i){var u=i.length,a=u,_=H1.prototype.thru;for(e&&i.reverse();a--;){var g=i[a];if(typeof g!="function")throw new I1(c);if(_&&!w&&e5(g)=="wrapper")var w=new H1([],!0)}for(a=w?a:u;++a<u;){g=i[a];var b=e5(g),P=b=="wrapper"?ne(g):r;P&&se(P[0])&&P[1]==(M0|u0|s0|s2)&&!P[4].length&&P[9]==1?w=w[e5(P[0])].apply(w,P[3]):w=g.length==1&&se(g)?w[b]():w.thru(g)}return function(){var B=arguments,I=B[0];if(w&&B.length==1&&Y0(I))return w.plant(I).value();for(var V=0,c0=u?i[V].apply(this,B):I;++V<u;)c0=i[V].call(this,c0);return c0}})}function X4(e,i,u,a,_,g,w,b,P,B){var I=i&M0,V=i&U,c0=i&n0,C0=i&(u0|a0),N0=i&o2,U0=c0?r:R3(e);function R0(){for(var z0=arguments.length,e2=O(z0),k1=z0;k1--;)e2[k1]=arguments[k1];if(C0)var g1=Zn(R0),P1=Tl(e2,g1);if(a&&(e2=k9(e2,a,_,C0)),g&&(e2=P9(e2,g,w,C0)),z0-=P1,C0&&z0<B){var U2=jt(e2,g1);return B9(e,i,X4,R0.placeholder,u,e2,U2,b,P,B-z0)}var J1=V?u:this,kt=c0?J1[e]:e;return z0=e2.length,b?e2=Pc(e2,b):N0&&z0>1&&e2.reverse(),I&&P<z0&&(e2.length=P),this&&this!==n1&&this instanceof R0&&(kt=U0||R3(kt)),kt.apply(J1,e2)}return R0}function N9(e,i){return function(u,a){return Ba(u,e,i(a),{})}}function Q4(e,i){return function(u,a){var _;if(u===r&&a===r)return i;if(u!==r&&(_=u),a!==r){if(_===r)return a;typeof u=="string"||typeof a=="string"?(u=M1(u),a=M1(a)):(u=y9(u),a=y9(a)),_=e(u,a)}return _}}function J6(e){return St(function(i){return i=N2(i,b1(L0())),q0(function(u){var a=this;return e(i,function(_){return S1(_,a,u)})})})}function t5(e,i){i=i===r?" ":M1(i);var u=i.length;if(u<2)return u?W6(i,e):i;var a=W6(i,Y4(e/Vn(i)));return $n(i)?Qt(j1(a),0,e).join(""):a.slice(0,e)}function ac(e,i,u,a){var _=i&U,g=R3(e);function w(){for(var b=-1,P=arguments.length,B=-1,I=a.length,V=O(I+P),c0=this&&this!==n1&&this instanceof w?g:e;++B<I;)V[B]=a[B];for(;P--;)V[B++]=arguments[++b];return S1(c0,_?u:this,V)}return w}function R9(e){return function(i,u,a){return a&&typeof a!="number"&&d1(i,u,a)&&(u=a=r),i=Ct(i),u===r?(u=i,i=0):u=Ct(u),a=a===r?i<u?1:-1:Ct(a),ja(i,u,a,e)}}function n5(e){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=V1(i),u=V1(u)),e(i,u)}}function B9(e,i,u,a,_,g,w,b,P,B){var I=i&u0,V=I?w:r,c0=I?r:w,C0=I?g:r,N0=I?r:g;i|=I?s0:P0,i&=~(I?P0:s0),i&l0||(i&=~(U|n0));var U0=[e,i,_,C0,V,N0,c0,b,P,B],R0=u.apply(r,U0);return se(e)&&j9(R0,U0),R0.placeholder=a,z9(R0,e,i)}function X6(e){var i=j2[e];return function(u,a){if(u=V1(u),a=a==null?0:s1(F0(a),292),a&&z7(u)){var _=(f2(u)+"e").split("e"),g=i(_[0]+"e"+(+_[1]+a));return _=(f2(g)+"e").split("e"),+(_[0]+"e"+(+_[1]-a))}return i(u)}}var cc=Un&&1/A4(new Un([,-0]))[1]==g0?function(e){return new Un(e)}:Te;function I9(e){return function(i){var u=o1(i);return u==x?P6(i):u==z?kl(i):yl(i,e(i))}}function wt(e,i,u,a,_,g,w,b){var P=i&n0;if(!P&&typeof e!="function")throw new I1(c);var B=a?a.length:0;if(B||(i&=~(s0|P0),a=_=r),w=w===r?w:z2(F0(w),0),b=b===r?b:F0(b),B-=_?_.length:0,i&P0){var I=a,V=_;a=_=r}var c0=P?r:ne(e),C0=[e,i,u,a,_,I,V,g,w,b];if(c0&&Mc(C0,c0),e=C0[0],i=C0[1],u=C0[2],a=C0[3],_=C0[4],b=C0[9]=C0[9]===r?P?0:e.length:z2(C0[9]-B,0),!b&&i&(u0|a0)&&(i&=~(u0|a0)),!i||i==U)var N0=uc(e,i,u);else i==u0||i==a0?N0=lc(e,i,b):(i==s0||i==(U|s0))&&!_.length?N0=ac(e,i,u,a):N0=X4.apply(r,C0);var U0=c0?m9:j9;return z9(U0(N0,C0),e,i)}function H9(e,i,u,a){return e===r||Z1(e,Wn[u])&&!p2.call(a,u)?i:e}function G9(e,i,u,a,_,g){return H2(e)&&H2(i)&&(g.set(i,e),j4(e,i,r,G9,g),g.delete(i)),e}function fc(e){return H3(e)?r:e}function Y9(e,i,u,a,_,g){var w=u&G,b=e.length,P=i.length;if(b!=P&&!(w&&P>b))return!1;var B=g.get(e),I=g.get(i);if(B&&I)return B==i&&I==e;var V=-1,c0=!0,C0=u&Y?new vn:r;for(g.set(e,i),g.set(i,e);++V<b;){var N0=e[V],U0=i[V];if(a)var R0=w?a(U0,N0,V,i,e,g):a(N0,U0,V,e,i,g);if(R0!==r){if(R0)continue;c0=!1;break}if(C0){if(!w6(i,function(z0,e2){if(!b3(C0,e2)&&(N0===z0||_(N0,z0,u,a,g)))return C0.push(e2)})){c0=!1;break}}else if(!(N0===U0||_(N0,U0,u,a,g))){c0=!1;break}}return g.delete(e),g.delete(i),c0}function hc(e,i,u,a,_,g,w){switch(u){case Q0:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case G0:return!(e.byteLength!=i.byteLength||!g(new B4(e),new B4(i)));case f0:case e0:case A:return Z1(+e,+i);case j0:return e.name==i.name&&e.message==i.message;case J:case F:return e==i+"";case x:var b=P6;case z:var P=a&G;if(b||(b=A4),e.size!=i.size&&!P)return!1;var B=w.get(e);if(B)return B==i;a|=Y,w.set(e,i);var I=Y9(b(e),b(i),a,_,g,w);return w.delete(e),I;case D0:if(D3)return D3.call(e)==D3.call(i)}return!1}function _c(e,i,u,a,_,g){var w=u&G,b=Q6(e),P=b.length,B=Q6(i),I=B.length;if(P!=I&&!w)return!1;for(var V=P;V--;){var c0=b[V];if(!(w?c0 in i:p2.call(i,c0)))return!1}var C0=g.get(e),N0=g.get(i);if(C0&&N0)return C0==i&&N0==e;var U0=!0;g.set(e,i),g.set(i,e);for(var R0=w;++V<P;){c0=b[V];var z0=e[c0],e2=i[c0];if(a)var k1=w?a(e2,z0,c0,i,e,g):a(z0,e2,c0,e,i,g);if(!(k1===r?z0===e2||_(z0,e2,u,a,g):k1)){U0=!1;break}R0||(R0=c0=="constructor")}if(U0&&!R0){var g1=e.constructor,P1=i.constructor;g1!=P1&&"constructor"in e&&"constructor"in i&&!(typeof g1=="function"&&g1 instanceof g1&&typeof P1=="function"&&P1 instanceof P1)&&(U0=!1)}return g.delete(e),g.delete(i),U0}function St(e){return ue(q9(e,r,nr),e+"")}function Q6(e){return o9(e,X2,re)}function te(e){return o9(e,T1,$9)}var ne=V4?function(e){return V4.get(e)}:Te;function e5(e){for(var i=e.name+"",u=qn[i],a=p2.call(qn,i)?u.length:0;a--;){var _=u[a],g=_.func;if(g==null||g==e)return _.name}return i}function Zn(e){var i=p2.call(d,"placeholder")?d:e;return i.placeholder}function L0(){var e=d.iteratee||ve;return e=e===ve?a9:e,arguments.length?e(arguments[0],arguments[1]):e}function r5(e,i){var u=e.__data__;return xc(i)?u[typeof i=="string"?"string":"hash"]:u.map}function ee(e){for(var i=X2(e),u=i.length;u--;){var a=i[u],_=e[a];i[u]=[a,_,W9(_)]}return i}function xn(e,i){var u=bl(e,i);return l9(u)?u:r}function dc(e){var i=p2.call(e,pn),u=e[pn];try{e[pn]=r;var a=!0}catch{}var _=N4.call(e);return a&&(i?e[pn]=u:delete e[pn]),_}var re=A6?function(e){return e==null?[]:(e=S2(e),qt(A6(e),function(i){return K7.call(e,i)}))}:xe,$9=A6?function(e){for(var i=[];e;)Kt(i,re(e)),e=I4(e);return i}:xe,o1=_1;(O6&&o1(new O6(new ArrayBuffer(1)))!=Q0||C3&&o1(new C3)!=x||L6&&o1(L6.resolve())!=W||Un&&o1(new Un)!=z||k3&&o1(new k3)!=v0)&&(o1=function(e){var i=_1(e),u=i==L?e.constructor:r,a=u?wn(u):"";if(a)switch(a){case Zl:return Q0;case Jl:return x;case Xl:return W;case Ql:return z;case ta:return v0}return i});function gc(e,i,u){for(var a=-1,_=u.length;++a<_;){var g=u[a],w=g.size;switch(g.type){case"drop":e+=w;break;case"dropRight":i-=w;break;case"take":i=s1(i,e+w);break;case"takeRight":e=z2(e,i-w);break}}return{start:e,end:i}}function pc(e){var i=e.match(wu);return i?i[1].split(Su):[]}function V9(e,i,u){i=Xt(i,e);for(var a=-1,_=i.length,g=!1;++a<_;){var w=ut(i[a]);if(!(g=e!=null&&u(e,w)))break;e=e[w]}return g||++a!=_?g:(_=e==null?0:e.length,!!_&&c5(_)&&bt(w,_)&&(Y0(e)||Sn(e)))}function mc(e){var i=e.length,u=new e.constructor(i);return i&&typeof e[0]=="string"&&p2.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function F9(e){return typeof e.constructor=="function"&&!B3(e)?Kn(I4(e)):{}}function vc(e,i,u){var a=e.constructor;switch(i){case G0:return Z6(e);case f0:case e0:return new a(+e);case Q0:return nc(e,u);case Z0:case j:case m:case N:case q:case K:case h0:case C:case t0:return M9(e,u);case x:return new a;case A:case F:return new a(e);case J:return ec(e);case z:return new a;case D0:return rc(e)}}function yc(e,i){var u=i.length;if(!u)return e;var a=u-1;return i[a]=(u>1?"& ":"")+i[a],i=i.join(u>2?", ":" "),e.replace(xu,`{
/* [wrapped with `+i+`] */
`)}function Tc(e){return Y0(e)||Sn(e)||!!(j7&&e&&e[j7])}function bt(e,i){var u=typeof e;return i=i??k0,!!i&&(u=="number"||u!="symbol"&&Lu.test(e))&&e>-1&&e%1==0&&e<i}function d1(e,i,u){if(!H2(u))return!1;var a=typeof i;return(a=="number"?y1(u)&&bt(i,u.length):a=="string"&&i in u)?Z1(u[i],e):!1}function ie(e,i){if(Y0(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||C1(e)?!0:it.test(e)||!Hn.test(e)||i!=null&&e in S2(i)}function xc(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function se(e){var i=e5(e),u=d[i];if(typeof u!="function"||!(i in J0.prototype))return!1;if(e===u)return!0;var a=ne(u);return!!a&&e===a[0]}function wc(e){return!!W7&&W7 in e}var Sc=L4?Mt:we;function B3(e){var i=e&&e.constructor,u=typeof i=="function"&&i.prototype||Wn;return e===u}function W9(e){return e===e&&!H2(e)}function U9(e,i){return function(u){return u==null?!1:u[e]===i&&(i!==r||e in S2(u))}}function bc(e){var i=l5(e,function(a){return u.size===p&&u.clear(),a}),u=i.cache;return i}function Mc(e,i){var u=e[1],a=i[1],_=u|a,g=_<(U|n0|M0),w=a==M0&&u==u0||a==M0&&u==s2&&e[7].length<=i[8]||a==(M0|s2)&&i[7].length<=i[8]&&u==u0;if(!(g||w))return e;a&U&&(e[2]=i[2],_|=u&U?0:l0);var b=i[3];if(b){var P=e[3];e[3]=P?k9(P,b,i[4]):b,e[4]=P?jt(e[3],v):i[4]}return b=i[5],b&&(P=e[5],e[5]=P?P9(P,b,i[6]):b,e[6]=P?jt(e[5],v):i[6]),b=i[7],b&&(e[7]=b),a&M0&&(e[8]=e[8]==null?i[8]:s1(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=_,e}function Cc(e){var i=[];if(e!=null)for(var u in S2(e))i.push(u);return i}function kc(e){return N4.call(e)}function q9(e,i,u){return i=z2(i===r?e.length-1:i,0),function(){for(var a=arguments,_=-1,g=z2(a.length-i,0),w=O(g);++_<g;)w[_]=a[i+_];_=-1;for(var b=O(i+1);++_<i;)b[_]=a[_];return b[i]=u(w),S1(e,this,b)}}function K9(e,i){return i.length<2?e:Tn(e,Y1(i,0,-1))}function Pc(e,i){for(var u=e.length,a=s1(i.length,u),_=v1(e);a--;){var g=i[a];e[a]=bt(g,u)?_[g]:r}return e}function oe(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var j9=Z9(m9),I3=Fl||function(e,i){return n1.setTimeout(e,i)},ue=Z9(Ja);function z9(e,i,u){var a=i+"";return ue(e,yc(a,Dc(pc(a),u)))}function Z9(e){var i=0,u=0;return function(){var a=Kl(),_=H-(a-u);if(u=a,_>0){if(++i>=r0)return arguments[0]}else i=0;return e.apply(r,arguments)}}function i5(e,i){var u=-1,a=e.length,_=a-1;for(i=i===r?a:i;++u<i;){var g=F6(u,_),w=e[g];e[g]=e[u],e[u]=w}return e.length=i,e}var J9=bc(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(S3,function(u,a,_,g){i.push(_?g.replace(Cu,"$1"):a||u)}),i});function ut(e){if(typeof e=="string"||C1(e))return e;var i=e+"";return i=="0"&&1/e==-g0?"-0":i}function wn(e){if(e!=null){try{return E4.call(e)}catch{}try{return e+""}catch{}}return""}function Dc(e,i){return B1(B2,function(u){var a="_."+u[0];i&u[1]&&!P4(e,a)&&e.push(a)}),e.sort()}function X9(e){if(e instanceof J0)return e.clone();var i=new H1(e.__wrapped__,e.__chain__);return i.__actions__=v1(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function Ac(e,i,u){(u?d1(e,i,u):i===r)?i=1:i=z2(F0(i),0);var a=e==null?0:e.length;if(!a||i<1)return[];for(var _=0,g=0,w=O(Y4(a/i));_<a;)w[g++]=Y1(e,_,_+=i);return w}function Oc(e){for(var i=-1,u=e==null?0:e.length,a=0,_=[];++i<u;){var g=e[i];g&&(_[a++]=g)}return _}function Lc(){var e=arguments.length;if(!e)return[];for(var i=O(e-1),u=arguments[0],a=e;a--;)i[a-1]=arguments[a];return Kt(Y0(u)?v1(u):[u],e1(i,1))}var Ec=q0(function(e,i){return W2(e)?O3(e,e1(i,1,W2,!0)):[]}),Nc=q0(function(e,i){var u=$1(i);return W2(u)&&(u=r),W2(e)?O3(e,e1(i,1,W2,!0),L0(u,2)):[]}),Rc=q0(function(e,i){var u=$1(i);return W2(u)&&(u=r),W2(e)?O3(e,e1(i,1,W2,!0),r,u):[]});function Bc(e,i,u){var a=e==null?0:e.length;return a?(i=u||i===r?1:F0(i),Y1(e,i<0?0:i,a)):[]}function Ic(e,i,u){var a=e==null?0:e.length;return a?(i=u||i===r?1:F0(i),i=a-i,Y1(e,0,i<0?0:i)):[]}function Hc(e,i){return e&&e.length?Z4(e,L0(i,3),!0,!0):[]}function Gc(e,i){return e&&e.length?Z4(e,L0(i,3),!0):[]}function Yc(e,i,u,a){var _=e==null?0:e.length;return _?(u&&typeof u!="number"&&d1(e,i,u)&&(u=0,a=_),La(e,i,u,a)):[]}function Q9(e,i,u){var a=e==null?0:e.length;if(!a)return-1;var _=u==null?0:F0(u);return _<0&&(_=z2(a+_,0)),D4(e,L0(i,3),_)}function tr(e,i,u){var a=e==null?0:e.length;if(!a)return-1;var _=a-1;return u!==r&&(_=F0(u),_=u<0?z2(a+_,0):s1(_,a-1)),D4(e,L0(i,3),_,!0)}function nr(e){var i=e==null?0:e.length;return i?e1(e,1):[]}function $c(e){var i=e==null?0:e.length;return i?e1(e,g0):[]}function Vc(e,i){var u=e==null?0:e.length;return u?(i=i===r?1:F0(i),e1(e,i)):[]}function Fc(e){for(var i=-1,u=e==null?0:e.length,a={};++i<u;){var _=e[i];a[_[0]]=_[1]}return a}function er(e){return e&&e.length?e[0]:r}function Wc(e,i,u){var a=e==null?0:e.length;if(!a)return-1;var _=u==null?0:F0(u);return _<0&&(_=z2(a+_,0)),Yn(e,i,_)}function Uc(e){var i=e==null?0:e.length;return i?Y1(e,0,-1):[]}var qc=q0(function(e){var i=N2(e,j6);return i.length&&i[0]===e[0]?H6(i):[]}),Kc=q0(function(e){var i=$1(e),u=N2(e,j6);return i===$1(u)?i=r:u.pop(),u.length&&u[0]===e[0]?H6(u,L0(i,2)):[]}),jc=q0(function(e){var i=$1(e),u=N2(e,j6);return i=typeof i=="function"?i:r,i&&u.pop(),u.length&&u[0]===e[0]?H6(u,r,i):[]});function zc(e,i){return e==null?"":Ul.call(e,i)}function $1(e){var i=e==null?0:e.length;return i?e[i-1]:r}function Zc(e,i,u){var a=e==null?0:e.length;if(!a)return-1;var _=a;return u!==r&&(_=F0(u),_=_<0?z2(a+_,0):s1(_,a-1)),i===i?Dl(e,i,_):D4(e,B7,_,!0)}function Jc(e,i){return e&&e.length?_9(e,F0(i)):r}var Xc=q0(rr);function rr(e,i){return e&&e.length&&i&&i.length?V6(e,i):e}function Qc(e,i,u){return e&&e.length&&i&&i.length?V6(e,i,L0(u,2)):e}function tf(e,i,u){return e&&e.length&&i&&i.length?V6(e,i,r,u):e}var nf=St(function(e,i){var u=e==null?0:e.length,a=N6(e,i);return p9(e,N2(i,function(_){return bt(_,u)?+_:_}).sort(C9)),a});function ef(e,i){var u=[];if(!(e&&e.length))return u;var a=-1,_=[],g=e.length;for(i=L0(i,3);++a<g;){var w=e[a];i(w,a,e)&&(u.push(w),_.push(a))}return p9(e,_),u}function le(e){return e==null?e:zl.call(e)}function rf(e,i,u){var a=e==null?0:e.length;return a?(u&&typeof u!="number"&&d1(e,i,u)?(i=0,u=a):(i=i==null?0:F0(i),u=u===r?a:F0(u)),Y1(e,i,u)):[]}function sf(e,i){return z4(e,i)}function of(e,i,u){return U6(e,i,L0(u,2))}function uf(e,i){var u=e==null?0:e.length;if(u){var a=z4(e,i);if(a<u&&Z1(e[a],i))return a}return-1}function lf(e,i){return z4(e,i,!0)}function af(e,i,u){return U6(e,i,L0(u,2),!0)}function cf(e,i){var u=e==null?0:e.length;if(u){var a=z4(e,i,!0)-1;if(Z1(e[a],i))return a}return-1}function ff(e){return e&&e.length?v9(e):[]}function hf(e,i){return e&&e.length?v9(e,L0(i,2)):[]}function _f(e){var i=e==null?0:e.length;return i?Y1(e,1,i):[]}function df(e,i,u){return e&&e.length?(i=u||i===r?1:F0(i),Y1(e,0,i<0?0:i)):[]}function gf(e,i,u){var a=e==null?0:e.length;return a?(i=u||i===r?1:F0(i),i=a-i,Y1(e,i<0?0:i,a)):[]}function pf(e,i){return e&&e.length?Z4(e,L0(i,3),!1,!0):[]}function mf(e,i){return e&&e.length?Z4(e,L0(i,3)):[]}var vf=q0(function(e){return Jt(e1(e,1,W2,!0))}),yf=q0(function(e){var i=$1(e);return W2(i)&&(i=r),Jt(e1(e,1,W2,!0),L0(i,2))}),Tf=q0(function(e){var i=$1(e);return i=typeof i=="function"?i:r,Jt(e1(e,1,W2,!0),r,i)});function xf(e){return e&&e.length?Jt(e):[]}function wf(e,i){return e&&e.length?Jt(e,L0(i,2)):[]}function Sf(e,i){return i=typeof i=="function"?i:r,e&&e.length?Jt(e,r,i):[]}function ae(e){if(!(e&&e.length))return[];var i=0;return e=qt(e,function(u){if(W2(u))return i=z2(u.length,i),!0}),C6(i,function(u){return N2(e,S6(u))})}function ir(e,i){if(!(e&&e.length))return[];var u=ae(e);return i==null?u:N2(u,function(a){return S1(i,r,a)})}var bf=q0(function(e,i){return W2(e)?O3(e,i):[]}),Mf=q0(function(e){return K6(qt(e,W2))}),Cf=q0(function(e){var i=$1(e);return W2(i)&&(i=r),K6(qt(e,W2),L0(i,2))}),kf=q0(function(e){var i=$1(e);return i=typeof i=="function"?i:r,K6(qt(e,W2),r,i)}),Pf=q0(ae);function Df(e,i){return w9(e||[],i||[],A3)}function Af(e,i){return w9(e||[],i||[],N3)}var Of=q0(function(e){var i=e.length,u=i>1?e[i-1]:r;return u=typeof u=="function"?(e.pop(),u):r,ir(e,u)});function sr(e){var i=d(e);return i.__chain__=!0,i}function Lf(e,i){return i(e),e}function s5(e,i){return i(e)}var Ef=St(function(e){var i=e.length,u=i?e[0]:0,a=this.__wrapped__,_=function(g){return N6(g,e)};return i>1||this.__actions__.length||!(a instanceof J0)||!bt(u)?this.thru(_):(a=a.slice(u,+u+(i?1:0)),a.__actions__.push({func:s5,args:[_],thisArg:r}),new H1(a,this.__chain__).thru(function(g){return i&&!g.length&&g.push(r),g}))});function Nf(){return sr(this)}function Rf(){return new H1(this.value(),this.__chain__)}function Bf(){this.__values__===r&&(this.__values__=yr(this.value()));var e=this.__index__>=this.__values__.length,i=e?r:this.__values__[this.__index__++];return{done:e,value:i}}function If(){return this}function Hf(e){for(var i,u=this;u instanceof W4;){var a=X9(u);a.__index__=0,a.__values__=r,i?_.__wrapped__=a:i=a;var _=a;u=u.__wrapped__}return _.__wrapped__=e,i}function Gf(){var e=this.__wrapped__;if(e instanceof J0){var i=e;return this.__actions__.length&&(i=new J0(this)),i=i.reverse(),i.__actions__.push({func:s5,args:[le],thisArg:r}),new H1(i,this.__chain__)}return this.thru(le)}function Yf(){return x9(this.__wrapped__,this.__actions__)}var $f=J4(function(e,i,u){p2.call(e,u)?++e[u]:xt(e,u,1)});function Vf(e,i,u){var a=Y0(e)?N7:Oa;return u&&d1(e,i,u)&&(i=r),a(e,L0(i,3))}function Ff(e,i){var u=Y0(e)?qt:i9;return u(e,L0(i,3))}var Wf=L9(Q9),Uf=L9(tr);function qf(e,i){return e1(o5(e,i),1)}function Kf(e,i){return e1(o5(e,i),g0)}function jf(e,i,u){return u=u===r?1:F0(u),e1(o5(e,i),u)}function or(e,i){var u=Y0(e)?B1:Zt;return u(e,L0(i,3))}function ur(e,i){var u=Y0(e)?hl:r9;return u(e,L0(i,3))}var zf=J4(function(e,i,u){p2.call(e,u)?e[u].push(i):xt(e,u,[i])});function Zf(e,i,u,a){e=y1(e)?e:Xn(e),u=u&&!a?F0(u):0;var _=e.length;return u<0&&(u=z2(_+u,0)),f5(e)?u<=_&&e.indexOf(i,u)>-1:!!_&&Yn(e,i,u)>-1}var Jf=q0(function(e,i,u){var a=-1,_=typeof i=="function",g=y1(e)?O(e.length):[];return Zt(e,function(w){g[++a]=_?S1(i,w,u):L3(w,i,u)}),g}),Xf=J4(function(e,i,u){xt(e,u,i)});function o5(e,i){var u=Y0(e)?N2:c9;return u(e,L0(i,3))}function Qf(e,i,u,a){return e==null?[]:(Y0(i)||(i=i==null?[]:[i]),u=a?r:u,Y0(u)||(u=u==null?[]:[u]),d9(e,i,u))}var th=J4(function(e,i,u){e[u?0:1].push(i)},function(){return[[],[]]});function nh(e,i,u){var a=Y0(e)?x6:H7,_=arguments.length<3;return a(e,L0(i,4),u,_,Zt)}function eh(e,i,u){var a=Y0(e)?_l:H7,_=arguments.length<3;return a(e,L0(i,4),u,_,r9)}function rh(e,i){var u=Y0(e)?qt:i9;return u(e,a5(L0(i,3)))}function ih(e){var i=Y0(e)?Q7:za;return i(e)}function sh(e,i,u){(u?d1(e,i,u):i===r)?i=1:i=F0(i);var a=Y0(e)?Ca:Za;return a(e,i)}function oh(e){var i=Y0(e)?ka:Xa;return i(e)}function uh(e){if(e==null)return 0;if(y1(e))return f5(e)?Vn(e):e.length;var i=o1(e);return i==x||i==z?e.size:Y6(e).length}function lh(e,i,u){var a=Y0(e)?w6:Qa;return u&&d1(e,i,u)&&(i=r),a(e,L0(i,3))}var ah=q0(function(e,i){if(e==null)return[];var u=i.length;return u>1&&d1(e,i[0],i[1])?i=[]:u>2&&d1(i[0],i[1],i[2])&&(i=[i[0]]),d9(e,e1(i,1),[])}),u5=Vl||function(){return n1.Date.now()};function ch(e,i){if(typeof i!="function")throw new I1(c);return e=F0(e),function(){if(--e<1)return i.apply(this,arguments)}}function lr(e,i,u){return i=u?r:i,i=e&&i==null?e.length:i,wt(e,M0,r,r,r,r,i)}function ar(e,i){var u;if(typeof i!="function")throw new I1(c);return e=F0(e),function(){return--e>0&&(u=i.apply(this,arguments)),e<=1&&(i=r),u}}var ce=q0(function(e,i,u){var a=U;if(u.length){var _=jt(u,Zn(ce));a|=s0}return wt(e,a,i,u,_)}),cr=q0(function(e,i,u){var a=U|n0;if(u.length){var _=jt(u,Zn(cr));a|=s0}return wt(i,a,e,u,_)});function fr(e,i,u){i=u?r:i;var a=wt(e,u0,r,r,r,r,r,i);return a.placeholder=fr.placeholder,a}function hr(e,i,u){i=u?r:i;var a=wt(e,a0,r,r,r,r,r,i);return a.placeholder=hr.placeholder,a}function _r(e,i,u){var a,_,g,w,b,P,B=0,I=!1,V=!1,c0=!0;if(typeof e!="function")throw new I1(c);i=V1(i)||0,H2(u)&&(I=!!u.leading,V="maxWait"in u,g=V?z2(V1(u.maxWait)||0,i):g,c0="trailing"in u?!!u.trailing:c0);function C0(U2){var J1=a,kt=_;return a=_=r,B=U2,w=e.apply(kt,J1),w}function N0(U2){return B=U2,b=I3(z0,i),I?C0(U2):w}function U0(U2){var J1=U2-P,kt=U2-B,Lr=i-J1;return V?s1(Lr,g-kt):Lr}function R0(U2){var J1=U2-P,kt=U2-B;return P===r||J1>=i||J1<0||V&&kt>=g}function z0(){var U2=u5();if(R0(U2))return e2(U2);b=I3(z0,U0(U2))}function e2(U2){return b=r,c0&&a?C0(U2):(a=_=r,w)}function k1(){b!==r&&S9(b),B=0,a=P=_=b=r}function g1(){return b===r?w:e2(u5())}function P1(){var U2=u5(),J1=R0(U2);if(a=arguments,_=this,P=U2,J1){if(b===r)return N0(P);if(V)return S9(b),b=I3(z0,i),C0(P)}return b===r&&(b=I3(z0,i)),w}return P1.cancel=k1,P1.flush=g1,P1}var fh=q0(function(e,i){return e9(e,1,i)}),hh=q0(function(e,i,u){return e9(e,V1(i)||0,u)});function _h(e){return wt(e,o2)}function l5(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new I1(c);var u=function(){var a=arguments,_=i?i.apply(this,a):a[0],g=u.cache;if(g.has(_))return g.get(_);var w=e.apply(this,a);return u.cache=g.set(_,w)||g,w};return u.cache=new(l5.Cache||Tt),u}l5.Cache=Tt;function a5(e){if(typeof e!="function")throw new I1(c);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function dh(e){return ar(2,e)}var gh=tc(function(e,i){i=i.length==1&&Y0(i[0])?N2(i[0],b1(L0())):N2(e1(i,1),b1(L0()));var u=i.length;return q0(function(a){for(var _=-1,g=s1(a.length,u);++_<g;)a[_]=i[_].call(this,a[_]);return S1(e,this,a)})}),fe=q0(function(e,i){var u=jt(i,Zn(fe));return wt(e,s0,r,i,u)}),dr=q0(function(e,i){var u=jt(i,Zn(dr));return wt(e,P0,r,i,u)}),ph=St(function(e,i){return wt(e,s2,r,r,r,i)});function mh(e,i){if(typeof e!="function")throw new I1(c);return i=i===r?i:F0(i),q0(e,i)}function vh(e,i){if(typeof e!="function")throw new I1(c);return i=i==null?0:z2(F0(i),0),q0(function(u){var a=u[i],_=Qt(u,0,i);return a&&Kt(_,a),S1(e,this,_)})}function yh(e,i,u){var a=!0,_=!0;if(typeof e!="function")throw new I1(c);return H2(u)&&(a="leading"in u?!!u.leading:a,_="trailing"in u?!!u.trailing:_),_r(e,i,{leading:a,maxWait:i,trailing:_})}function Th(e){return lr(e,1)}function xh(e,i){return fe(z6(i),e)}function wh(){if(!arguments.length)return[];var e=arguments[0];return Y0(e)?e:[e]}function Sh(e){return G1(e,M)}function bh(e,i){return i=typeof i=="function"?i:r,G1(e,M,i)}function Mh(e){return G1(e,y|M)}function Ch(e,i){return i=typeof i=="function"?i:r,G1(e,y|M,i)}function kh(e,i){return i==null||n9(e,i,X2(i))}function Z1(e,i){return e===i||e!==e&&i!==i}var Ph=n5(I6),Dh=n5(function(e,i){return e>=i}),Sn=u9(function(){return arguments}())?u9:function(e){return Y2(e)&&p2.call(e,"callee")&&!K7.call(e,"callee")},Y0=O.isArray,Ah=P7?b1(P7):Ia;function y1(e){return e!=null&&c5(e.length)&&!Mt(e)}function W2(e){return Y2(e)&&y1(e)}function Oh(e){return e===!0||e===!1||Y2(e)&&_1(e)==f0}var tn=Wl||we,Lh=D7?b1(D7):Ha;function Eh(e){return Y2(e)&&e.nodeType===1&&!H3(e)}function Nh(e){if(e==null)return!0;if(y1(e)&&(Y0(e)||typeof e=="string"||typeof e.splice=="function"||tn(e)||Jn(e)||Sn(e)))return!e.length;var i=o1(e);if(i==x||i==z)return!e.size;if(B3(e))return!Y6(e).length;for(var u in e)if(p2.call(e,u))return!1;return!0}function Rh(e,i){return E3(e,i)}function Bh(e,i,u){u=typeof u=="function"?u:r;var a=u?u(e,i):r;return a===r?E3(e,i,r,u):!!a}function he(e){if(!Y2(e))return!1;var i=_1(e);return i==j0||i==b0||typeof e.message=="string"&&typeof e.name=="string"&&!H3(e)}function Ih(e){return typeof e=="number"&&z7(e)}function Mt(e){if(!H2(e))return!1;var i=_1(e);return i==a2||i==T||i==R||i==i0}function gr(e){return typeof e=="number"&&e==F0(e)}function c5(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=k0}function H2(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Y2(e){return e!=null&&typeof e=="object"}var pr=A7?b1(A7):Ya;function Hh(e,i){return e===i||G6(e,i,ee(i))}function Gh(e,i,u){return u=typeof u=="function"?u:r,G6(e,i,ee(i),u)}function Yh(e){return mr(e)&&e!=+e}function $h(e){if(Sc(e))throw new I0(l);return l9(e)}function Vh(e){return e===null}function Fh(e){return e==null}function mr(e){return typeof e=="number"||Y2(e)&&_1(e)==A}function H3(e){if(!Y2(e)||_1(e)!=L)return!1;var i=I4(e);if(i===null)return!0;var u=p2.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&E4.call(u)==Hl}var _e=O7?b1(O7):$a;function Wh(e){return gr(e)&&e>=-k0&&e<=k0}var vr=L7?b1(L7):Va;function f5(e){return typeof e=="string"||!Y0(e)&&Y2(e)&&_1(e)==F}function C1(e){return typeof e=="symbol"||Y2(e)&&_1(e)==D0}var Jn=E7?b1(E7):Fa;function Uh(e){return e===r}function qh(e){return Y2(e)&&o1(e)==v0}function Kh(e){return Y2(e)&&_1(e)==E0}var jh=n5($6),zh=n5(function(e,i){return e<=i});function yr(e){if(!e)return[];if(y1(e))return f5(e)?j1(e):v1(e);if(M3&&e[M3])return Cl(e[M3]());var i=o1(e),u=i==x?P6:i==z?A4:Xn;return u(e)}function Ct(e){if(!e)return e===0?e:0;if(e=V1(e),e===g0||e===-g0){var i=e<0?-1:1;return i*L2}return e===e?e:0}function F0(e){var i=Ct(e),u=i%1;return i===i?u?i-u:i:0}function Tr(e){return e?yn(F0(e),0,g2):0}function V1(e){if(typeof e=="number")return e;if(C1(e))return G2;if(H2(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=H2(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=G7(e);var u=Du.test(e);return u||Ou.test(e)?al(e.slice(2),u?2:8):Pu.test(e)?G2:+e}function xr(e){return ot(e,T1(e))}function Zh(e){return e?yn(F0(e),-k0,k0):e===0?e:0}function f2(e){return e==null?"":M1(e)}var Jh=jn(function(e,i){if(B3(i)||y1(i)){ot(i,X2(i),e);return}for(var u in i)p2.call(i,u)&&A3(e,u,i[u])}),wr=jn(function(e,i){ot(i,T1(i),e)}),h5=jn(function(e,i,u,a){ot(i,T1(i),e,a)}),Xh=jn(function(e,i,u,a){ot(i,X2(i),e,a)}),Qh=St(N6);function t_(e,i){var u=Kn(e);return i==null?u:t9(u,i)}var n_=q0(function(e,i){e=S2(e);var u=-1,a=i.length,_=a>2?i[2]:r;for(_&&d1(i[0],i[1],_)&&(a=1);++u<a;)for(var g=i[u],w=T1(g),b=-1,P=w.length;++b<P;){var B=w[b],I=e[B];(I===r||Z1(I,Wn[B])&&!p2.call(e,B))&&(e[B]=g[B])}return e}),e_=q0(function(e){return e.push(r,G9),S1(Sr,r,e)});function r_(e,i){return R7(e,L0(i,3),st)}function i_(e,i){return R7(e,L0(i,3),B6)}function s_(e,i){return e==null?e:R6(e,L0(i,3),T1)}function o_(e,i){return e==null?e:s9(e,L0(i,3),T1)}function u_(e,i){return e&&st(e,L0(i,3))}function l_(e,i){return e&&B6(e,L0(i,3))}function a_(e){return e==null?[]:K4(e,X2(e))}function c_(e){return e==null?[]:K4(e,T1(e))}function de(e,i,u){var a=e==null?r:Tn(e,i);return a===r?u:a}function f_(e,i){return e!=null&&V9(e,i,Ea)}function ge(e,i){return e!=null&&V9(e,i,Na)}var h_=N9(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=N4.call(i)),e[i]=u},me(x1)),__=N9(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=N4.call(i)),p2.call(e,i)?e[i].push(u):e[i]=[u]},L0),d_=q0(L3);function X2(e){return y1(e)?X7(e):Y6(e)}function T1(e){return y1(e)?X7(e,!0):Wa(e)}function g_(e,i){var u={};return i=L0(i,3),st(e,function(a,_,g){xt(u,i(a,_,g),a)}),u}function p_(e,i){var u={};return i=L0(i,3),st(e,function(a,_,g){xt(u,_,i(a,_,g))}),u}var m_=jn(function(e,i,u){j4(e,i,u)}),Sr=jn(function(e,i,u,a){j4(e,i,u,a)}),v_=St(function(e,i){var u={};if(e==null)return u;var a=!1;i=N2(i,function(g){return g=Xt(g,e),a||(a=g.length>1),g}),ot(e,te(e),u),a&&(u=G1(u,y|S|M,fc));for(var _=i.length;_--;)q6(u,i[_]);return u});function y_(e,i){return br(e,a5(L0(i)))}var T_=St(function(e,i){return e==null?{}:qa(e,i)});function br(e,i){if(e==null)return{};var u=N2(te(e),function(a){return[a]});return i=L0(i),g9(e,u,function(a,_){return i(a,_[0])})}function x_(e,i,u){i=Xt(i,e);var a=-1,_=i.length;for(_||(_=1,e=r);++a<_;){var g=e==null?r:e[ut(i[a])];g===r&&(a=_,g=u),e=Mt(g)?g.call(e):g}return e}function w_(e,i,u){return e==null?e:N3(e,i,u)}function S_(e,i,u,a){return a=typeof a=="function"?a:r,e==null?e:N3(e,i,u,a)}var Mr=I9(X2),Cr=I9(T1);function b_(e,i,u){var a=Y0(e),_=a||tn(e)||Jn(e);if(i=L0(i,4),u==null){var g=e&&e.constructor;_?u=a?new g:[]:H2(e)?u=Mt(g)?Kn(I4(e)):{}:u={}}return(_?B1:st)(e,function(w,b,P){return i(u,w,b,P)}),u}function M_(e,i){return e==null?!0:q6(e,i)}function C_(e,i,u){return e==null?e:T9(e,i,z6(u))}function k_(e,i,u,a){return a=typeof a=="function"?a:r,e==null?e:T9(e,i,z6(u),a)}function Xn(e){return e==null?[]:k6(e,X2(e))}function P_(e){return e==null?[]:k6(e,T1(e))}function D_(e,i,u){return u===r&&(u=i,i=r),u!==r&&(u=V1(u),u=u===u?u:0),i!==r&&(i=V1(i),i=i===i?i:0),yn(V1(e),i,u)}function A_(e,i,u){return i=Ct(i),u===r?(u=i,i=0):u=Ct(u),e=V1(e),Ra(e,i,u)}function O_(e,i,u){if(u&&typeof u!="boolean"&&d1(e,i,u)&&(i=u=r),u===r&&(typeof i=="boolean"?(u=i,i=r):typeof e=="boolean"&&(u=e,e=r)),e===r&&i===r?(e=0,i=1):(e=Ct(e),i===r?(i=e,e=0):i=Ct(i)),e>i){var a=e;e=i,i=a}if(u||e%1||i%1){var _=Z7();return s1(e+_*(i-e+ll("1e-"+((_+"").length-1))),i)}return F6(e,i)}var L_=zn(function(e,i,u){return i=i.toLowerCase(),e+(u?kr(i):i)});function kr(e){return pe(f2(e).toLowerCase())}function Pr(e){return e=f2(e),e&&e.replace(Eu,xl).replace(Xu,"")}function E_(e,i,u){e=f2(e),i=M1(i);var a=e.length;u=u===r?a:yn(F0(u),0,a);var _=u;return u-=i.length,u>=0&&e.slice(u,_)==i}function N_(e){return e=f2(e),e&&w2.test(e)?e.replace(t2,wl):e}function R_(e){return e=f2(e),e&&yu.test(e)?e.replace(f6,"\\$&"):e}var B_=zn(function(e,i,u){return e+(u?"-":"")+i.toLowerCase()}),I_=zn(function(e,i,u){return e+(u?" ":"")+i.toLowerCase()}),H_=O9("toLowerCase");function G_(e,i,u){e=f2(e),i=F0(i);var a=i?Vn(e):0;if(!i||a>=i)return e;var _=(i-a)/2;return t5($4(_),u)+e+t5(Y4(_),u)}function Y_(e,i,u){e=f2(e),i=F0(i);var a=i?Vn(e):0;return i&&a<i?e+t5(i-a,u):e}function $_(e,i,u){e=f2(e),i=F0(i);var a=i?Vn(e):0;return i&&a<i?t5(i-a,u)+e:e}function V_(e,i,u){return u||i==null?i=0:i&&(i=+i),jl(f2(e).replace(h6,""),i||0)}function F_(e,i,u){return(u?d1(e,i,u):i===r)?i=1:i=F0(i),W6(f2(e),i)}function W_(){var e=arguments,i=f2(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var U_=zn(function(e,i,u){return e+(u?"_":"")+i.toLowerCase()});function q_(e,i,u){return u&&typeof u!="number"&&d1(e,i,u)&&(i=u=r),u=u===r?g2:u>>>0,u?(e=f2(e),e&&(typeof i=="string"||i!=null&&!_e(i))&&(i=M1(i),!i&&$n(e))?Qt(j1(e),0,u):e.split(i,u)):[]}var K_=zn(function(e,i,u){return e+(u?" ":"")+pe(i)});function j_(e,i,u){return e=f2(e),u=u==null?0:yn(F0(u),0,e.length),i=M1(i),e.slice(u,u+i.length)==i}function z_(e,i,u){var a=d.templateSettings;u&&d1(e,i,u)&&(i=r),e=f2(e),i=h5({},i,a,H9);var _=h5({},i.imports,a.imports,H9),g=X2(_),w=k6(_,g),b,P,B=0,I=i.interpolate||M4,V="__p += '",c0=D6((i.escape||M4).source+"|"+I.source+"|"+(I===i1?ku:M4).source+"|"+(i.evaluate||M4).source+"|$","g"),C0="//# sourceURL="+(p2.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rl+"]")+`
`;e.replace(c0,function(R0,z0,e2,k1,g1,P1){return e2||(e2=k1),V+=e.slice(B,P1).replace(Nu,Sl),z0&&(b=!0,V+=`' +
__e(`+z0+`) +
'`),g1&&(P=!0,V+=`';
`+g1+`;
__p += '`),e2&&(V+=`' +
((__t = (`+e2+`)) == null ? '' : __t) +
'`),B=P1+R0.length,R0}),V+=`';
`;var N0=p2.call(i,"variable")&&i.variable;if(!N0)V=`with (obj) {
`+V+`
}
`;else if(Mu.test(N0))throw new I0(f);V=(P?V.replace(w0,""):V).replace(T0,"$1").replace(d0,"$1;"),V="function("+(N0||"obj")+`) {
`+(N0?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(b?", __e = _.escape":"")+(P?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var U0=Ar(function(){return c2(g,C0+"return "+V).apply(r,w)});if(U0.source=V,he(U0))throw U0;return U0}function Z_(e){return f2(e).toLowerCase()}function J_(e){return f2(e).toUpperCase()}function X_(e,i,u){if(e=f2(e),e&&(u||i===r))return G7(e);if(!e||!(i=M1(i)))return e;var a=j1(e),_=j1(i),g=Y7(a,_),w=$7(a,_)+1;return Qt(a,g,w).join("")}function Q_(e,i,u){if(e=f2(e),e&&(u||i===r))return e.slice(0,F7(e)+1);if(!e||!(i=M1(i)))return e;var a=j1(e),_=$7(a,j1(i))+1;return Qt(a,0,_).join("")}function td(e,i,u){if(e=f2(e),e&&(u||i===r))return e.replace(h6,"");if(!e||!(i=M1(i)))return e;var a=j1(e),_=Y7(a,j1(i));return Qt(a,_).join("")}function nd(e,i){var u=m2,a=P2;if(H2(i)){var _="separator"in i?i.separator:_;u="length"in i?F0(i.length):u,a="omission"in i?M1(i.omission):a}e=f2(e);var g=e.length;if($n(e)){var w=j1(e);g=w.length}if(u>=g)return e;var b=u-Vn(a);if(b<1)return a;var P=w?Qt(w,0,b).join(""):e.slice(0,b);if(_===r)return P+a;if(w&&(b+=P.length-b),_e(_)){if(e.slice(b).search(_)){var B,I=P;for(_.global||(_=D6(_.source,f2(u7.exec(_))+"g")),_.lastIndex=0;B=_.exec(I);)var V=B.index;P=P.slice(0,V===r?b:V)}}else if(e.indexOf(M1(_),b)!=b){var c0=P.lastIndexOf(_);c0>-1&&(P=P.slice(0,c0))}return P+a}function ed(e){return e=f2(e),e&&n2.test(e)?e.replace(V0,Al):e}var rd=zn(function(e,i,u){return e+(u?" ":"")+i.toUpperCase()}),pe=O9("toUpperCase");function Dr(e,i,u){return e=f2(e),i=u?r:i,i===r?Ml(e)?El(e):pl(e):e.match(i)||[]}var Ar=q0(function(e,i){try{return S1(e,r,i)}catch(u){return he(u)?u:new I0(u)}}),id=St(function(e,i){return B1(i,function(u){u=ut(u),xt(e,u,ce(e[u],e))}),e});function sd(e){var i=e==null?0:e.length,u=L0();return e=i?N2(e,function(a){if(typeof a[1]!="function")throw new I1(c);return[u(a[0]),a[1]]}):[],q0(function(a){for(var _=-1;++_<i;){var g=e[_];if(S1(g[0],this,a))return S1(g[1],this,a)}})}function od(e){return Aa(G1(e,y))}function me(e){return function(){return e}}function ud(e,i){return e==null||e!==e?i:e}var ld=E9(),ad=E9(!0);function x1(e){return e}function ve(e){return a9(typeof e=="function"?e:G1(e,y))}function cd(e){return f9(G1(e,y))}function fd(e,i){return h9(e,G1(i,y))}var hd=q0(function(e,i){return function(u){return L3(u,e,i)}}),_d=q0(function(e,i){return function(u){return L3(e,u,i)}});function ye(e,i,u){var a=X2(i),_=K4(i,a);u==null&&!(H2(i)&&(_.length||!a.length))&&(u=i,i=e,e=this,_=K4(i,X2(i)));var g=!(H2(u)&&"chain"in u)||!!u.chain,w=Mt(e);return B1(_,function(b){var P=i[b];e[b]=P,w&&(e.prototype[b]=function(){var B=this.__chain__;if(g||B){var I=e(this.__wrapped__),V=I.__actions__=v1(this.__actions__);return V.push({func:P,args:arguments,thisArg:e}),I.__chain__=B,I}return P.apply(e,Kt([this.value()],arguments))})}),e}function dd(){return n1._===this&&(n1._=Gl),this}function Te(){}function gd(e){return e=F0(e),q0(function(i){return _9(i,e)})}var pd=J6(N2),md=J6(N7),vd=J6(w6);function Or(e){return ie(e)?S6(ut(e)):Ka(e)}function yd(e){return function(i){return e==null?r:Tn(e,i)}}var Td=R9(),xd=R9(!0);function xe(){return[]}function we(){return!1}function wd(){return{}}function Sd(){return""}function bd(){return!0}function Md(e,i){if(e=F0(e),e<1||e>k0)return[];var u=g2,a=s1(e,g2);i=L0(i),e-=g2;for(var _=C6(a,i);++u<e;)i(u);return _}function Cd(e){return Y0(e)?N2(e,ut):C1(e)?[e]:v1(J9(f2(e)))}function kd(e){var i=++Il;return f2(e)+i}var Pd=Q4(function(e,i){return e+i},0),Dd=X6("ceil"),Ad=Q4(function(e,i){return e/i},1),Od=X6("floor");function Ld(e){return e&&e.length?q4(e,x1,I6):r}function Ed(e,i){return e&&e.length?q4(e,L0(i,2),I6):r}function Nd(e){return I7(e,x1)}function Rd(e,i){return I7(e,L0(i,2))}function Bd(e){return e&&e.length?q4(e,x1,$6):r}function Id(e,i){return e&&e.length?q4(e,L0(i,2),$6):r}var Hd=Q4(function(e,i){return e*i},1),Gd=X6("round"),Yd=Q4(function(e,i){return e-i},0);function $d(e){return e&&e.length?M6(e,x1):0}function Vd(e,i){return e&&e.length?M6(e,L0(i,2)):0}return d.after=ch,d.ary=lr,d.assign=Jh,d.assignIn=wr,d.assignInWith=h5,d.assignWith=Xh,d.at=Qh,d.before=ar,d.bind=ce,d.bindAll=id,d.bindKey=cr,d.castArray=wh,d.chain=sr,d.chunk=Ac,d.compact=Oc,d.concat=Lc,d.cond=sd,d.conforms=od,d.constant=me,d.countBy=$f,d.create=t_,d.curry=fr,d.curryRight=hr,d.debounce=_r,d.defaults=n_,d.defaultsDeep=e_,d.defer=fh,d.delay=hh,d.difference=Ec,d.differenceBy=Nc,d.differenceWith=Rc,d.drop=Bc,d.dropRight=Ic,d.dropRightWhile=Hc,d.dropWhile=Gc,d.fill=Yc,d.filter=Ff,d.flatMap=qf,d.flatMapDeep=Kf,d.flatMapDepth=jf,d.flatten=nr,d.flattenDeep=$c,d.flattenDepth=Vc,d.flip=_h,d.flow=ld,d.flowRight=ad,d.fromPairs=Fc,d.functions=a_,d.functionsIn=c_,d.groupBy=zf,d.initial=Uc,d.intersection=qc,d.intersectionBy=Kc,d.intersectionWith=jc,d.invert=h_,d.invertBy=__,d.invokeMap=Jf,d.iteratee=ve,d.keyBy=Xf,d.keys=X2,d.keysIn=T1,d.map=o5,d.mapKeys=g_,d.mapValues=p_,d.matches=cd,d.matchesProperty=fd,d.memoize=l5,d.merge=m_,d.mergeWith=Sr,d.method=hd,d.methodOf=_d,d.mixin=ye,d.negate=a5,d.nthArg=gd,d.omit=v_,d.omitBy=y_,d.once=dh,d.orderBy=Qf,d.over=pd,d.overArgs=gh,d.overEvery=md,d.overSome=vd,d.partial=fe,d.partialRight=dr,d.partition=th,d.pick=T_,d.pickBy=br,d.property=Or,d.propertyOf=yd,d.pull=Xc,d.pullAll=rr,d.pullAllBy=Qc,d.pullAllWith=tf,d.pullAt=nf,d.range=Td,d.rangeRight=xd,d.rearg=ph,d.reject=rh,d.remove=ef,d.rest=mh,d.reverse=le,d.sampleSize=sh,d.set=w_,d.setWith=S_,d.shuffle=oh,d.slice=rf,d.sortBy=ah,d.sortedUniq=ff,d.sortedUniqBy=hf,d.split=q_,d.spread=vh,d.tail=_f,d.take=df,d.takeRight=gf,d.takeRightWhile=pf,d.takeWhile=mf,d.tap=Lf,d.throttle=yh,d.thru=s5,d.toArray=yr,d.toPairs=Mr,d.toPairsIn=Cr,d.toPath=Cd,d.toPlainObject=xr,d.transform=b_,d.unary=Th,d.union=vf,d.unionBy=yf,d.unionWith=Tf,d.uniq=xf,d.uniqBy=wf,d.uniqWith=Sf,d.unset=M_,d.unzip=ae,d.unzipWith=ir,d.update=C_,d.updateWith=k_,d.values=Xn,d.valuesIn=P_,d.without=bf,d.words=Dr,d.wrap=xh,d.xor=Mf,d.xorBy=Cf,d.xorWith=kf,d.zip=Pf,d.zipObject=Df,d.zipObjectDeep=Af,d.zipWith=Of,d.entries=Mr,d.entriesIn=Cr,d.extend=wr,d.extendWith=h5,ye(d,d),d.add=Pd,d.attempt=Ar,d.camelCase=L_,d.capitalize=kr,d.ceil=Dd,d.clamp=D_,d.clone=Sh,d.cloneDeep=Mh,d.cloneDeepWith=Ch,d.cloneWith=bh,d.conformsTo=kh,d.deburr=Pr,d.defaultTo=ud,d.divide=Ad,d.endsWith=E_,d.eq=Z1,d.escape=N_,d.escapeRegExp=R_,d.every=Vf,d.find=Wf,d.findIndex=Q9,d.findKey=r_,d.findLast=Uf,d.findLastIndex=tr,d.findLastKey=i_,d.floor=Od,d.forEach=or,d.forEachRight=ur,d.forIn=s_,d.forInRight=o_,d.forOwn=u_,d.forOwnRight=l_,d.get=de,d.gt=Ph,d.gte=Dh,d.has=f_,d.hasIn=ge,d.head=er,d.identity=x1,d.includes=Zf,d.indexOf=Wc,d.inRange=A_,d.invoke=d_,d.isArguments=Sn,d.isArray=Y0,d.isArrayBuffer=Ah,d.isArrayLike=y1,d.isArrayLikeObject=W2,d.isBoolean=Oh,d.isBuffer=tn,d.isDate=Lh,d.isElement=Eh,d.isEmpty=Nh,d.isEqual=Rh,d.isEqualWith=Bh,d.isError=he,d.isFinite=Ih,d.isFunction=Mt,d.isInteger=gr,d.isLength=c5,d.isMap=pr,d.isMatch=Hh,d.isMatchWith=Gh,d.isNaN=Yh,d.isNative=$h,d.isNil=Fh,d.isNull=Vh,d.isNumber=mr,d.isObject=H2,d.isObjectLike=Y2,d.isPlainObject=H3,d.isRegExp=_e,d.isSafeInteger=Wh,d.isSet=vr,d.isString=f5,d.isSymbol=C1,d.isTypedArray=Jn,d.isUndefined=Uh,d.isWeakMap=qh,d.isWeakSet=Kh,d.join=zc,d.kebabCase=B_,d.last=$1,d.lastIndexOf=Zc,d.lowerCase=I_,d.lowerFirst=H_,d.lt=jh,d.lte=zh,d.max=Ld,d.maxBy=Ed,d.mean=Nd,d.meanBy=Rd,d.min=Bd,d.minBy=Id,d.stubArray=xe,d.stubFalse=we,d.stubObject=wd,d.stubString=Sd,d.stubTrue=bd,d.multiply=Hd,d.nth=Jc,d.noConflict=dd,d.noop=Te,d.now=u5,d.pad=G_,d.padEnd=Y_,d.padStart=$_,d.parseInt=V_,d.random=O_,d.reduce=nh,d.reduceRight=eh,d.repeat=F_,d.replace=W_,d.result=x_,d.round=Gd,d.runInContext=k,d.sample=ih,d.size=uh,d.snakeCase=U_,d.some=lh,d.sortedIndex=sf,d.sortedIndexBy=of,d.sortedIndexOf=uf,d.sortedLastIndex=lf,d.sortedLastIndexBy=af,d.sortedLastIndexOf=cf,d.startCase=K_,d.startsWith=j_,d.subtract=Yd,d.sum=$d,d.sumBy=Vd,d.template=z_,d.times=Md,d.toFinite=Ct,d.toInteger=F0,d.toLength=Tr,d.toLower=Z_,d.toNumber=V1,d.toSafeInteger=Zh,d.toString=f2,d.toUpper=J_,d.trim=X_,d.trimEnd=Q_,d.trimStart=td,d.truncate=nd,d.unescape=ed,d.uniqueId=kd,d.upperCase=rd,d.upperFirst=pe,d.each=or,d.eachRight=ur,d.first=er,ye(d,function(){var e={};return st(d,function(i,u){p2.call(d.prototype,u)||(e[u]=i)}),e}(),{chain:!1}),d.VERSION=s,B1(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){d[e].placeholder=d}),B1(["drop","take"],function(e,i){J0.prototype[e]=function(u){u=u===r?1:z2(F0(u),0);var a=this.__filtered__&&!i?new J0(this):this.clone();return a.__filtered__?a.__takeCount__=s1(u,a.__takeCount__):a.__views__.push({size:s1(u,g2),type:e+(a.__dir__<0?"Right":"")}),a},J0.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),B1(["filter","map","takeWhile"],function(e,i){var u=i+1,a=u==Q||u==H0;J0.prototype[e]=function(_){var g=this.clone();return g.__iteratees__.push({iteratee:L0(_,3),type:u}),g.__filtered__=g.__filtered__||a,g}}),B1(["head","last"],function(e,i){var u="take"+(i?"Right":"");J0.prototype[e]=function(){return this[u](1).value()[0]}}),B1(["initial","tail"],function(e,i){var u="drop"+(i?"":"Right");J0.prototype[e]=function(){return this.__filtered__?new J0(this):this[u](1)}}),J0.prototype.compact=function(){return this.filter(x1)},J0.prototype.find=function(e){return this.filter(e).head()},J0.prototype.findLast=function(e){return this.reverse().find(e)},J0.prototype.invokeMap=q0(function(e,i){return typeof e=="function"?new J0(this):this.map(function(u){return L3(u,e,i)})}),J0.prototype.reject=function(e){return this.filter(a5(L0(e)))},J0.prototype.slice=function(e,i){e=F0(e);var u=this;return u.__filtered__&&(e>0||i<0)?new J0(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),i!==r&&(i=F0(i),u=i<0?u.dropRight(-i):u.take(i-e)),u)},J0.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},J0.prototype.toArray=function(){return this.take(g2)},st(J0.prototype,function(e,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),a=/^(?:head|last)$/.test(i),_=d[a?"take"+(i=="last"?"Right":""):i],g=a||/^find/.test(i);_&&(d.prototype[i]=function(){var w=this.__wrapped__,b=a?[1]:arguments,P=w instanceof J0,B=b[0],I=P||Y0(w),V=function(z0){var e2=_.apply(d,Kt([z0],b));return a&&c0?e2[0]:e2};I&&u&&typeof B=="function"&&B.length!=1&&(P=I=!1);var c0=this.__chain__,C0=!!this.__actions__.length,N0=g&&!c0,U0=P&&!C0;if(!g&&I){w=U0?w:new J0(this);var R0=e.apply(w,b);return R0.__actions__.push({func:s5,args:[V],thisArg:r}),new H1(R0,c0)}return N0&&U0?e.apply(this,b):(R0=this.thru(V),N0?a?R0.value()[0]:R0.value():R0)})}),B1(["pop","push","shift","sort","splice","unshift"],function(e){var i=O4[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",a=/^(?:pop|shift)$/.test(e);d.prototype[e]=function(){var _=arguments;if(a&&!this.__chain__){var g=this.value();return i.apply(Y0(g)?g:[],_)}return this[u](function(w){return i.apply(Y0(w)?w:[],_)})}}),st(J0.prototype,function(e,i){var u=d[i];if(u){var a=u.name+"";p2.call(qn,a)||(qn[a]=[]),qn[a].push({name:i,func:u})}}),qn[X4(r,n0).name]=[{name:"wrapper",func:r}],J0.prototype.clone=na,J0.prototype.reverse=ea,J0.prototype.value=ra,d.prototype.at=Ef,d.prototype.chain=Nf,d.prototype.commit=Rf,d.prototype.next=Bf,d.prototype.plant=Hf,d.prototype.reverse=Gf,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=Yf,d.prototype.first=d.prototype.head,M3&&(d.prototype[M3]=If),d},Fn=Nl();gn?((gn.exports=Fn)._=Fn,v6._=Fn):n1._=Fn}).call(Jw)}(j3,j3.exports)),j3.exports}var Qw=Xw();const Zi=Zw(Qw),tS={style:{"padding-left":"20px",display:"flex","flex-direction":"column",gap:"20px",position:"relative","z-index":"1"}},nS={style:{position:"sticky",top:"0px",background:"#0a0a1a",padding:"4px",zIndex:1,display:"flex","flex-direction":"row",gap:"12px"}},eS={style:{display:"flex",gap:"20px","align-items":"center"}},rS=["value"],iS={style:{color:"greenyellow",fontSize:"18px"}},sS={style:{display:"flex","align-items":"center"}},oS={style:{display:"flex","align-items":"center"}},uS=["value"],lS=["value"],aS=["value"],cS=["value"],fS=["value"],hS={style:{display:"flex",gap:"40px"}},_S={style:{width:"700px"}},dS={style:{width:"700px"}},gS={style:{display:"flex",gap:"40px"}},pS={style:{width:"700px",display:"flex","flex-direction":"column",gap:"12px"}},mS={style:{display:"flex"}},vS={style:{color:"cyan"}},yS=["onClick"],TS=["onClick"],xS={key:0,style:{display:"flex",flexDirection:"column",gap:"12px"}},wS=["onClick"],SS={style:{width:"700px",display:"flex","flex-direction":"column",gap:"12px"}},bS={style:{display:"flex"}},MS={style:{color:"cyan"}},CS=["onClick"],kS=["onClick"],PS={key:0,style:{display:"flex",flexDirection:"column",gap:"12px"}},DS=["onClick"],AS="lote_45",OS="lote_55",Ji=40,Xi=46,LS=1,Qi=6,ES=y4({__name:"HomeView",setup(t){const n=r2(!0),r=r2(!0);function s(j){return j[0].loại_xổ_số===45?AS:OS}const o=vw(),l=yw(),c=X(o[0].ngày_xổ_số,"DD/MM/YYYY"),f=X(l[0].ngày_xổ_số,"DD/MM/YYYY"),h=o.length,p=c>f?55:45,v=p===45?0:-1,y=p===55?0:-1,S=r2([]),M=r2(7),G=r2(1),Y=r2(0),U=r2(!1),n0=r2(1),l0=r2(2);function u0(j,m){const N=new Map;return j.forEach(q=>{const K=m(q);N.set(K,(N.get(K)??0)+1)}),[...N.values()]}function a0(j){const m=Number(n0.value),N=Number(l0.value);if(m===-1&&N===-1)return!0;const q=u0(j,h0=>h0%Qi),K=u0(j,h0=>Math.floor(h0/Qi));return m!==-1&&q.filter(h0=>h0>=2).length>=m||N!==-1&&Math.max(...K)<=N}const s0=r2(0),P0=r2(0),M0=r2(3e3),s2=r2("ngẫu_nhiên"),o2=r2(12),m2=r2(3),P2=r2(0),r0=r2(15),H=r2(""),Q=r2([]),x0=r2(""),H0=r2([]),g0=r2(1),k0=r2(2),L2=r2(0),G2=r2(0),g2=r2(4),E2=r2(1),h1=r2(10),B2=r2(),V2=r2();I2(o,v),I2(l,y);async function I2(j,m=0){const N=j[0].loại_xổ_số===45?l:o;for(let q=0;q<j.length;q++){const K=j[q],h0=N==null?void 0:N[q+m];f0(j,K,h0,q)}}async function R(){const j=`v${LS}|45:${Ji}|55:${Xi}`;for(const[m,N]of[[o,l],[l,o]]){const q=m[0].loại_xổ_số,K=`ds_dự_đoán_${q}`,h0=jw(m,N,j),C=await Kw(K);if((C==null?void 0:C.dấu_vân_tay)===h0&&C.dự_đoán_ds_xuất_hiện.length===m.length&&C.vị_trí_ds_xuất_hiện.length===m.length){m.forEach((t0,w0)=>{t0.dự_đoán_ds_xuất_hiện=C.dự_đoán_ds_xuất_hiện[w0],t0.vị_trí_ds_xuất_hiện=C.vị_trí_ds_xuất_hiện[w0]}),console.log(`đã tải danh sách dự đoán ${q} từ bộ nhớ đệm`);continue}m.forEach((t0,w0)=>{T(m,N,t0,w0)}),await Ue(K,{dấu_vân_tay:h0,dự_đoán_ds_xuất_hiện:m.map(t0=>t0.dự_đoán_ds_xuất_hiện),vị_trí_ds_xuất_hiện:m.map(t0=>t0.vị_trí_ds_xuất_hiện)}),console.log(`đã tạo và lưu danh sách dự đoán ${q} vào bộ nhớ đệm`)}}function f0(j,m,N,q){var K;m.kết_quả_xổ_số.forEach(h0=>{const C=Number(h0)+q,t0=j[C];t0&&(m.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(t0.kết_quả_xổ_số),t0.kết_quả_xổ_số.forEach(w0=>{var d0,V0;m.tập_các_số_đã_xuất_hiện.add(w0);const T0=m.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(t2=>t2.số_xuất_hiện===w0);if(T0)T0.tổng_xuất_hiện++;else{const t2={số_xuất_hiện:w0,tổng_xuất_hiện:1,là_số_kết_quả:((d0=m.dữ_liệu_kỳ_sau_đó)==null?void 0:d0.kết_quả_xổ_số.includes(w0))||!1,là_số_jackpot_2:((V0=m.dữ_liệu_kỳ_sau_đó)==null?void 0:V0.số_jacpot_2)===w0,là_số_trùng:m.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(w0)};m.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(t2)}}))}),N&&N.kết_quả_xổ_số.filter(h0=>!m.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(h0)).forEach(h0=>{const C=Number(h0)+q,t0=j[C];t0&&(m.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(t0.kết_quả_xổ_số),t0.kết_quả_xổ_số.forEach(w0=>{var d0,V0;m.tập_các_số_đã_xuất_hiện.add(w0);const T0=m.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(t2=>t2.số_xuất_hiện===w0);if(T0)T0.tổng_xuất_hiện++;else{const t2={số_xuất_hiện:w0,tổng_xuất_hiện:1,là_số_kết_quả:((d0=m.dữ_liệu_kỳ_sau_đó)==null?void 0:d0.kết_quả_xổ_số.includes(w0))||!1,là_số_jackpot_2:((V0=m.dữ_liệu_kỳ_sau_đó)==null?void 0:V0.số_jacpot_2)===w0,là_số_trùng:m.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(w0)};m.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(t2)}}))}),m.số_kết_quả_trong_các_số_đã_xuất_hiện=((K=m.dữ_liệu_kỳ_sau_đó)==null?void 0:K.kết_quả_xổ_số.filter(h0=>m.tập_các_số_đã_xuất_hiện.has(h0)).length)||0}R().then(()=>{e0(),b0()});function e0(){S.value=pw(h),B2.value=o,V2.value=l}function b0(){console.log("danh sách dữ liệu 45 đã qua xữ lý: ",o),console.log("danh sách dữ liệu 55 đã qua xữ lý: ",l)}function j0(j,m){return sn("div",{style:{width:"220px",display:"flex",flexWrap:"wrap"}},j.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.map((N,q)=>{var K;return sn("div",{key:`row-dữ_liệu_1${m}${q}`,style:{width:"34px"}},sn("span",{style:{opacity:N.tổng_xuất_hiện<=3?1:.3,border:r.value&&j.kết_quả_xổ_số.includes(N.số_xuất_hiện)?"1px solid blue":null,color:(K=j.dữ_liệu_kỳ_sau_đó)!=null&&K.kết_quả_xổ_số.includes(N.số_xuất_hiện)?"red":null}},`${N.số_xuất_hiện}:${N.tổng_xuất_hiện}`))}))}function a2(j,m){var K;const N=((K=m.dữ_liệu_kỳ_sau_đó)==null?void 0:K.kết_quả_xổ_số)||[],q=m.kết_quả_xổ_số||[];return sn("div",{style:{width:"220px",display:"flex",flexWrap:"wrap"}},j.map((h0,C)=>sn("div",{key:`row-dự_đoán${C}`,style:{width:"34px"}},sn("span",{style:{color:N.includes(h0)?"red":null,border:q.includes(h0)?"1px solid blue":null}},`${h0}`))))}function T(j,m,N,q){var K;if(N.dự_đoán_ds_xuất_hiện=Tw(j,m,N,q,N.loại_xổ_số===55?Xi:Ji),q>0){const h0=((K=j[q-1])==null?void 0:K.kết_quả_xổ_số)||[];N.dự_đoán_ds_xuất_hiện.forEach(C=>{const t0=[],w0=[];h0.forEach(T0=>{{const d0=C.indexOf(T0);d0>=0?t0.push(d0):w0.push(T0)}}),w0.forEach(T0=>{for(let d0=0;d0<N.dự_đoán_ds_xuất_hiện.length;d0++){const V0=N.dự_đoán_ds_xuất_hiện[d0].indexOf(T0);if(V0>=0&&!t0.includes(V0)){t0.push(V0);break}}}),t0.length===6&&N.vị_trí_ds_xuất_hiện.push(t0)})}}function x(j,m,N=-1){var n2;console.group("Dự Đoán"),console.log(N===-1?"dự đoán cho tất cả":`dự đoán cho vị trí ${N}`);const q=((n2=m.dữ_liệu_kỳ_sau_đó)==null?void 0:n2.kết_quả_xổ_số)||[],K=m.dự_đoán_ds_xuất_hiện,h0=[];for(let w2=m.vị_trí_dữ_liệu+1;w2<j.length;w2++){const r1=j[w2];h0.push(...r1.vị_trí_ds_xuất_hiện.filter(a0))}console.log("tất cả vị trí dự đoán: ",h0.length),console.log(`bộ lọc: số trùng trong cột = ${n0.value}, số cùng hàng = ${l0.value} (-1 là không lọc)`);let C=0,t0=0,w0=0,T0=0,d0=0,V0=0;for(let w2=0;w2<K.length;w2++)if(N===w2||N===-1){const r1=K[w2];for(let F2=0;F2<h0.length;F2++){const i1=[];h0[F2].forEach(S3=>{i1.push(r1[S3])});const it=i1.filter(S3=>q.includes(S3)).length;V0++,it===3&&C++,it===4&&t0++,it===5&&(i1.includes(m.số_jacpot_2)?(console.log("trúng jackpot 2 tại: ",`ds ${w2} vị trí ${F2}`),T0++):(console.log("trúng 5 tại: ",`ds ${w2} vị trí ${F2}`),w0++)),it===6&&(console.log("trúng jackpot 1 tại: ",`ds ${w2} vị trí ${F2}`),d0++)}}const t2=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.log(q.join(", ")),console.log(`tiền: ${t2.format(V0*1e4)}, tổng: ${V0}, tong_3: ${C}, tong_4: ${t0}, tong_5: ${w0}, jackpot_2: ${T0}, jackpot_1: ${d0}`),console.groupEnd()}async function A(j){var w0;const m=[],N=[],q=new Map,K=(T0,d0,V0,t2)=>{const n2=[...d0].sort((F2,i1)=>F2-i1),w2=`${T0}|${n2.join(",")}`,r1=q.get(w2);if(r1)r1.tổng_xuất_hiện+=1,r1.xuất_hiện.push(V0),r1.danh_sách.push(t2);else{const F2={ds_vị_trí:n2,tổng_xuất_hiện:1,trùng:T0,xuất_hiện:[V0],danh_sách:[t2]};m.push(F2),q.set(w2,F2)}};for(let T0=j.length-1;T0>=0;T0--){const d0=j[T0],V0=((w0=d0.dữ_liệu_kỳ_sau_đó)==null?void 0:w0.kết_quả_xổ_số)||[],t2=d0.dự_đoán_ds_xuất_hiện;for(let n2=0;n2<t2.length;n2++){const w2=t2[n2],r1=new Uint8Array(w2.length);w2.forEach((F2,i1)=>{V0.includes(F2)&&(r1[i1]=1)});for(let F2=0;F2<N.length;F2++){const i1=N[F2];let Hn=0;for(let it=0;it<i1.length;it++)Hn+=r1[i1[it]]|0;Hn===5&&K(d0.loại_xổ_số===55&&i1.includes(Number(d0.số_jacpot_2))?5.5:5,i1,T0,n2),Hn===6&&K(6,i1,T0,n2)}}N.push(...d0.vị_trí_ds_xuất_hiện)}const h0=s(j);await n3.khởi_tạo();const C=await n3.lấy_dữ_liệu_theo_tên(h0);C.length>0?await n3.cập_nhật_dữ_liệu(C[0].id,m):await n3.lưu_dữ_liệu(h0,m);const t0=Zi.orderBy(m,[T0=>Math.min(...T0.xuất_hiện),T0=>T0.trùng],["asc","desc"]).map(T0=>({ds_vị_trí:T0.ds_vị_trí,tổng_xuất_hiện:T0.tổng_xuất_hiện,trùng:T0.trùng,xuất_hiện:T0.xuất_hiện.join(", "),danh_sách:T0.danh_sách.join(", ")}));console.log("kết quả thống kê dự đoán: ",t0)}async function $(j){var T0;await n3.khởi_tạo();const N=((T0=(await n3.lấy_dữ_liệu_theo_tên(s(j)))[0])==null?void 0:T0.dữ_liệu)||[],q=[];N.forEach(d0=>{const V0=q.find(t2=>t2.ds_vị_trí.sort().toString()===d0.ds_vị_trí.sort().toString());V0?(V0.tổng_xuất_hiện+=d0.tổng_xuất_hiện,V0.xuất_hiện.push(...d0.xuất_hiện),V0.danh_sách.push(...d0.danh_sách)):q.push({ds_vị_trí:d0.ds_vị_trí,tổng_xuất_hiện:d0.tổng_xuất_hiện,trùng:d0.trùng,xuất_hiện:[...d0.xuất_hiện],danh_sách:[...d0.danh_sách]})});const K=Zi.orderBy(q,[d0=>Math.min(...d0.xuất_hiện),d0=>d0.trùng],["asc","desc"]).map(d0=>({ds_vị_trí:d0.ds_vị_trí.sort().join(", "),tổng_xuất_hiện:d0.tổng_xuất_hiện,trùng:d0.trùng,xuất_hiện:d0.xuất_hiện.join(", "),danh_sách:d0.danh_sách.join(", ")}));console.group("Phân tích và dự đoán"),console.log("tổng danh sách: ",N.length),console.log("sau khi nhóm: ",q.length),console.log("sau khi nhóm: ",K),console.groupEnd();const h0=j[Number(g0.value)],t0=h0.dự_đoán_ds_xuất_hiện[Number(k0.value)]||[];let w0=0;if(Number(g0.value)===0){console.group("dự đoán");const d0=[];q.forEach(V0=>{if(V0.danh_sách.includes(Number(L2.value))){const t2=[];V0.ds_vị_trí.forEach(n2=>{t2.push(t0[n2])}),d0.push(t2)}}),console.log(d0),console.groupEnd()}else console.group("phân tích"),q.forEach((d0,V0)=>{if(Number(V0)>Number(g0.value)){const t2=[];d0.ds_vị_trí.forEach(w2=>{t2.push(t0[w2])});const n2=t2.filter(w2=>h0.kết_quả_xổ_số.includes(w2)).length;n2===3&&console.log("trúng 3 tại: ",`${Number(g0.value)} vị trí ${V0}`),n2===4&&console.log("trúng 4 tại: ",`${Number(g0.value)} vị trí ${V0}`),n2===5&&(t2.includes(h0.số_jacpot_2)?console.log("trúng jackpot 2 tại: ",`${g0.value} vị trí ${V0}`):console.log("trúng 5 tại: ",`${g0.value} vị trí ${V0}`)),n2===6&&console.log("trúng jackpot 1 tại: ",`${g0.value} vị trí ${V0}`),w0++}}),console.log("tổng số dự đoán :",w0),console.groupEnd()}function L(j){var m;return((m=j.dữ_liệu_kỳ_sau_đó)==null?void 0:m.ngày_xổ_số)??z(j)}function W(j,m){const N=Ui(j,m),q=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.group(`Đánh giá ${j.length} vé với kết quả kỳ sau (${m.ngày_xổ_số})`),console.log(`kết quả: ${m.kết_quả_xổ_số.join(" ")}${m.số_jacpot_2?` | số phụ: ${m.số_jacpot_2}`:""}`),console.table(N.dòng_theo_mức),console.log(`chi phí (đã gồm phí 3%): ${q.format(N.chi_phí)}, tiền thắng (đã trừ thuế): ${q.format(N.tiền_thắng)}, lãi/lỗ: ${q.format(N.lãi_lỗ)}`),N.vé_trúng_từ_4.length>0&&console.log(`vé trúng từ 4 số:
`+N.vé_trúng_từ_4.map(K=>`${K.vé.join(" ")} → ${K.số_trúng} số (${K.mức})`).join(`
`)),console.groupEnd()}function i0(j){const m=Number(s0.value),N=j[m];if(!N){console.warn(`Không có kỳ ở vị trí ${m} (có ${j.length} kỳ, từ 0)`);return}const q=Number(P0.value),K=N.dự_đoán_ds_xuất_hiện[q];if(!K){console.warn(`Không có danh sách số ${q}: kỳ ở vị trí ${m} của ${N.loại_xổ_số} có ${N.dự_đoán_ds_xuất_hiện.length} danh sách (chỉ số từ 0)`);return}const h0=Number(M0.value),C=Ww(K.length,h0),t0=Uw(K,C),w0=L(N);Ue(`${Ki}${N.loại_xổ_số}|${w0}|${q}|${t0.length}`,{loại_xổ_số:N.loại_xổ_số,ngày_cơ_sở:N.ngày_xổ_số,ngày_dự_đoán:w0,thời_điểm_tạo:Date.now(),chỉ_số_danh_sách:q,vé:t0}).then(()=>v0("danh sách",w0));const T0=N.dữ_liệu_kỳ_sau_đó;console.group(`Vé từ danh sách ${q} của kỳ ${m} (${N.ngày_xổ_số}) ${N.loại_xổ_số} (${K.length} số), dự đoán cho kỳ ${w0}${T0?" (đã có kết quả)":""}, đã lưu để đối chiếu`),console.log(`${t0.length}/${h0} vé, mỗi vé có ít nhất 1 cột từ 2 số, mỗi hàng tối đa 3 số`),t0.length<h0&&console.warn("Không tạo đủ số vé với điều kiện này"),T0?W(t0,T0):console.log("kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá"),console.log(t0.map(d0=>d0.join(" ")).join(`
`)),console.groupEnd()}function J(j){const m=j[0].loại_xổ_số,N=Bi[s2.value];if(!N){console.warn("Chọn một chiến lược cụ thể để tạo vé");return}const q=Ve[m],K=kw(m,q,N(j,m)),h0=bw(j,m);console.group(`Vé kỳ tới ${m} (${s2.value})`),console.log(`số vừa ra (kỳ mới nhất ${j[0].ngày_xổ_số}): ${h0.vừa_ra.join(" ")}`),console.log(`số nóng (nhiều nhất trong 50 kỳ gần nhất): ${h0.nóng.map(C=>`${C.số} (${C.lần} lần)`).join(", ")}`),console.log(`số lạnh (ít nhất trong 50 kỳ gần nhất): ${h0.lạnh.map(C=>`${C.số} (${C.lần} lần)`).join(", ")}`),console.log(`số lâu chưa ra (số kỳ kể từ lần ra gần nhất): ${h0.lâu_chưa_ra.map(C=>`${C.số} (${C.số_kỳ} kỳ)`).join(", ")}`),console.log(`${K.length}/${q} vé, xác suất có vé trúng từ 5 số: ${(K.length*Dw(m).từ_5*100).toFixed(3)}%`),console.log(K.map(C=>C.map(t0=>String(t0).padStart(2,"0")).join(" ")).join(`
`)),console.groupEnd()}function z(j){return X(du(j.dấu_thời_gian_của_ngày,j.loại_xổ_số===55?55:45)).format("DD/MM/YYYY")}async function F(){const[j,m]=await Promise.all([ji(qi),ji(Ki)]);return[...j.map(({giá_trị:N})=>({loại_nguồn:"vé phủ",nguồn:"vé phủ",loại_xổ_số:N.loại_xổ_số,ngày_cơ_sở:N.ngày_cơ_sở,ngày_dự_đoán:N.ngày_dự_đoán,thời_điểm_tạo:N.thời_điểm_tạo,vé:N.vé.map(q=>q.map(K=>String(K).padStart(2,"0")))})),...m.map(({giá_trị:N})=>({loại_nguồn:"danh sách",nguồn:`danh sách ${N.chỉ_số_danh_sách}`,loại_xổ_số:N.loại_xổ_số,ngày_cơ_sở:N.ngày_cơ_sở,ngày_dự_đoán:N.ngày_dự_đoán,thời_điểm_tạo:N.thời_điểm_tạo,vé:N.vé}))].sort((N,q)=>q.thời_điểm_tạo-N.thời_điểm_tạo)}const D0={"vé phủ":H,"danh sách":x0},_0={"vé phủ":Q,"danh sách":H0};async function v0(j,m){const N=[...new Set((await F()).filter(K=>K.loại_nguồn===j).map(K=>K.ngày_dự_đoán))].sort((K,h0)=>X(h0,"DD/MM/YYYY").valueOf()-X(K,"DD/MM/YYYY").valueOf());_0[j].value=N;const q=D0[j];m&&N.includes(m)?q.value=m:N.includes(q.value)||(q.value=N[0]??"")}v0("vé phủ"),v0("danh sách");async function E0(j){const m=j==="vé phủ"?"bộ vé phủ":"vé từ danh sách xuất hiện",N=(await F()).filter(t0=>t0.loại_nguồn===j);if(N.length===0){console.log(`Chưa có ${m} nào được lưu`);return}const q=D0[j].value,K=q?N.filter(t0=>t0.ngày_dự_đoán===q):N;if(K.length===0){console.log(`Không có ${m} nào cho ngày dự đoán ${q}`);return}const h0=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}),C=K.map(t0=>{const w0=t0.loại_xổ_số===55?l:o,T0=w0.findIndex(w2=>w2.ngày_xổ_số===t0.ngày_cơ_sở),d0=T0>0?w0[T0-1]:void 0,V0={nguồn:t0.nguồn,loại:t0.loại_xổ_số,ngày_dự_đoán:t0.ngày_dự_đoán,số_vé:t0.vé.length};if(!d0)return{...V0,kết_quả:"chưa có kết quả"};const t2=Ui(t0.vé,d0),n2=w2=>{var r1;return((r1=t2.dòng_theo_mức.find(F2=>F2.mức_trúng===w2))==null?void 0:r1.số_vé)??0};return{...V0,kết_quả:`${d0.ngày_xổ_số}: ${d0.kết_quả_xổ_số.join(" ")}`,trúng_3:n2("trúng_3"),trúng_4:n2("trúng_4"),trúng_5:n2("trúng_5")+n2("jackpot_2"),trúng_6:n2("jackpot_1"),lãi_lỗ:h0.format(t2.lãi_lỗ)}});console.group(`Đối chiếu ${m} đã lưu (${q||"tất cả ngày dự đoán"})`),console.table(C),console.groupEnd()}function G0(j){try{const m=j===55?l:o,N=Number(P2.value),q=m[N];if(!q){console.warn(`Không có kỳ ở vị trí ${N} (có ${m.length} kỳ, từ 0)`);return}const K=Nw(j,Number(o2.value),Number(m2.value),Number(r0.value),void 0,Ow(`${j}|${q.ngày_xổ_số}`)),h0=L(q),C=q.dữ_liệu_kỳ_sau_đó,t0=`${qi}${j}|${h0}|${K.nhóm_số.length}|${K.mức_đảm_bảo}|${K.vé.length}`;Ue(t0,{loại_xổ_số:j,ngày_cơ_sở:q.ngày_xổ_số,ngày_dự_đoán:h0,thời_điểm_tạo:Date.now(),nhóm_số:K.nhóm_số,mức_đảm_bảo:K.mức_đảm_bảo,số_vé_tối_thiểu:K.số_vé_tối_thiểu,vé:K.vé}).then(()=>v0("vé phủ",h0));const w0=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.group(`Bộ vé phủ ${j} của kỳ ${N} (${q.ngày_xổ_số}), dự đoán cho kỳ ${h0}${C?" (đã có kết quả)":""}, đã lưu để đối chiếu`),console.log("nhóm số: ",K.nhóm_số.join(", ")),Number(r0.value)<K.số_vé_tối_thiểu?console.warn(`cần tối thiểu ${K.số_vé_tối_thiểu} vé để đảm bảo, nên đã dùng ${K.số_vé_tối_thiểu} vé thay vì ${Number(r0.value)}`):K.vé.length>K.số_vé_tối_thiểu&&console.log(`${K.số_vé_tối_thiểu} vé đầu bảo đảm mức trúng, ${K.vé.length-K.số_vé_tối_thiểu} vé thêm giúp tăng cơ hội trúng mức cao hơn`),console.log(`số vé: ${K.vé.length}, chi phí: ${w0.format(K.chi_phí)}, đảm bảo trúng ít nhất ${K.mức_đảm_bảo} số khi có từ ${K.mức_đảm_bảo} số trúng nằm trong nhóm (xác suất ${(K.xác_suất_đạt_đảm_bảo*100).toFixed(2)}%)`),console.log(`điểm phổ biến trung bình: ${K.điểm_phổ_biến_trung_bình} (vé ngẫu nhiên: ${K.điểm_phổ_biến_vé_ngẫu_nhiên}, càng thấp càng ít người trùng)`),C?W(K.vé.map(T0=>T0.map(d0=>String(d0).padStart(2,"0"))),C):console.log("kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá"),console.log(K.vé.map(T0=>T0.join(" ")).join(`
`)),console.groupEnd()}catch(m){console.warn(m.message)}}function Q0(){const j=Number(G2.value),m=Number(g2.value),N=Number(E2.value),q=Number(h1.value);let K=0;console.group("Số xuất hiện nhiều lần");for(let h0=N;h0<3e3;h0++){const C=new Set;l.slice(h0,h0+q).forEach(w0=>{w0.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.forEach(T0=>{T0.tổng_xuất_hiện>=m&&C.size<6&&C.add(T0.số_xuất_hiện)})});const t0=l[j].kết_quả_xổ_số.filter(w0=>C.has(w0)).length;C.size>=6&&(K++,t0>=3&&(console.log([...C.values()].join(", ")),console.log(`tổng số trùng với kết quả xổ số tại vị trí ${j}: ${t0}`)))}console.log("tổng số dự đoán: ",K),console.groupEnd()}function Z0(j){const m=Number(G.value),N=Number(Y.value),q=j===55?l:o,K=new Set,h0=new Set;if(N<0)for(let C=N+1;C<N+11;C++){const t0=q[C],w0=t0.kết_quả_xổ_số.map(T0=>{let d0=(Number(T0)+m)%j;return d0=d0===0?j:d0,h0.add(d0),d0});console.log(`dự đoán kỳ ${t0.ngày_xổ_số}: ${w0.join(", ")}`)}else{const t0=q[N].kết_quả_xổ_số;for(let w0=N+1;w0<q.length;w0++){const T0=q[w0],d0=T0.kết_quả_xổ_số.map(t2=>{let n2=(Number(t2)+m)%j;return n2=n2===0?j:n2,h0.add(n2),n2}),V0=t0.filter(t2=>{const n2=d0.includes(Number(t2));return n2&&K.add(Number(t2)),n2}).length;console.log(`dự đoán kỳ ${T0.ngày_xổ_số}: ${d0.join(", ")} → trùng ${V0} số`)}console.log("các số được dự đoán:",[...K.values()].join(", ")),console.log("các số được dự đoán:",[...h0.values()].join(", "),h0.size)}}return(j,m)=>{var N,q,K,h0;return S0(),A0("div",tS,[D("div",nS,[D("div",null,[D("div",eS,[D("div",null,[y2(D("select",{"onUpdate:modelValue":m[0]||(m[0]=C=>M.value=C)},[(S0(!0),A0(K0,null,Z2(S.value,C=>(S0(),A0("option",{key:C,value:C},o0(C),9,rS))),128))],512),[[Pn,M.value]])])]),D("div",null,[m[40]||(m[40]=y0(" Hôm nay dự đoán cho: ")),D("span",iS,o0(T2(p)),1)]),D("div",null,[D("div",sS,[m[41]||(m[41]=D("div",{style:{background:"red",width:"10px",height:"10px"}},null,-1)),m[42]||(m[42]=y0(" Kết quả dự đoán ")),y2(D("input",{"onUpdate:modelValue":m[1]||(m[1]=C=>n.value=C),type:"checkbox"},null,512),[[Ne,n.value]])]),D("div",oS,[m[43]||(m[43]=D("div",{style:{background:"blue",width:"10px",height:"10px"}},null,-1)),m[44]||(m[44]=y0(" Kết quả hiện tại ")),y2(D("input",{"onUpdate:modelValue":m[2]||(m[2]=C=>r.value=C),type:"checkbox"},null,512),[[Ne,r.value]])])]),D("div",null,[D("button",{onClick:m[3]||(m[3]=C=>Z0(55))},"Dự đoán bằng tăng 55"),D("button",{onClick:m[4]||(m[4]=C=>Z0(45))},"Dự đoán bằng tăng 45"),m[45]||(m[45]=y0(" dự đoán cho: ")),y2(D("input",{"onUpdate:modelValue":m[5]||(m[5]=C=>Y.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,Y.value]]),m[46]||(m[46]=y0(" đơn vị: ")),y2(D("input",{"onUpdate:modelValue":m[6]||(m[6]=C=>G.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,G.value]])]),D("div",null,[m[47]||(m[47]=y0("Hiển thị chi tiết: ")),y2(D("input",{"onUpdate:modelValue":m[7]||(m[7]=C=>U.value=C),type:"checkbox"},null,512),[[Ne,U.value]])]),U.value?(S0(),A0(K0,{key:0},[m[52]||(m[52]=y0(" *1* Cho: Xem dự đoán ")),D("div",null,[m[48]||(m[48]=y0(" - Lọc ít nhất ")),y2(D("select",{"onUpdate:modelValue":m[8]||(m[8]=C=>n0.value=C)},[(S0(),A0(K0,null,Z2([-1,1,2,3],C=>D("option",{key:C,value:C},o0(C),9,uS)),64))],512),[[Pn,n0.value]]),m[49]||(m[49]=y0(" cột có từ 2 số trở lên "))]),D("div",null,[m[50]||(m[50]=y0(" - Lọc mỗi hàng tối đa ")),y2(D("select",{"onUpdate:modelValue":m[9]||(m[9]=C=>l0.value=C)},[(S0(),A0(K0,null,Z2([-1,2,3,4],C=>D("option",{key:C,value:C},o0(C),9,lS)),64))],512),[[Pn,l0.value]]),m[51]||(m[51]=y0(" số (điều kiện or, -1 là không lọc) *1* "))])],64)):An("",!0)]),D("div",null,[D("div",null,[D("div",null,[m[53]||(m[53]=y0(" *1* ")),D("button",{onClick:m[10]||(m[10]=C=>A(T2(l)))},"thống kê dự đoán 55"),D("button",{onClick:m[11]||(m[11]=C=>A(T2(o)))},"thống kê dự đoán 45"),m[54]||(m[54]=y0(" để lưu vào indexed DB "))]),D("div",null,[m[57]||(m[57]=y0(" từ Indexed DB")),D("button",{onClick:m[12]||(m[12]=C=>$(T2(l)))}," phân tích và dự đoán 55"),D("button",{onClick:m[13]||(m[13]=C=>$(T2(o)))}," phân tích và dự đoán 45 "),m[58]||(m[58]=y0(" chỉ mục ")),y2(D("input",{type:"text","onUpdate:modelValue":m[14]||(m[14]=C=>g0.value=C),placeholder:"Nhập vị trí phân tích",style:{width:"20px"}},null,512),[[Q2,g0.value]]),m[59]||(m[59]=y0(" danh sách dự đoán ")),y2(D("input",{type:"text","onUpdate:modelValue":m[15]||(m[15]=C=>k0.value=C),placeholder:"Nhập vị trí dự đoán",style:{width:"20px"}},null,512),[[Q2,k0.value]]),D("div",null,[m[55]||(m[55]=y0(" lọc nhóm từng trúng ở danh sách số ")),y2(D("input",{type:"text","onUpdate:modelValue":m[16]||(m[16]=C=>L2.value=C),style:{width:"20px"}},null,512),[[Q2,L2.value]]),m[56]||(m[56]=y0(" (khi chọn chỉ mục = 0) *1* "))])])]),D("div",null,[m[60]||(m[60]=y0(" *2* Số Xuất hiện nhiều lần: vị trí dự đoán: ")),y2(D("input",{"onUpdate:modelValue":m[17]||(m[17]=C=>G2.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,G2.value]]),m[61]||(m[61]=y0(" bao nhiêu lần: ")),y2(D("input",{"onUpdate:modelValue":m[18]||(m[18]=C=>g2.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,g2.value]]),m[62]||(m[62]=y0(" từ vị trí: ")),y2(D("input",{"onUpdate:modelValue":m[19]||(m[19]=C=>E2.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,E2.value]]),m[63]||(m[63]=y0(" xem bao nhiêu: ")),y2(D("input",{"onUpdate:modelValue":m[20]||(m[20]=C=>h1.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,h1.value]]),D("button",{onClick:m[21]||(m[21]=C=>Q0())},"Lọc"),m[64]||(m[64]=y0(" *2* "))]),D("div",null,[m[66]||(m[66]=y0(" *3* Bộ vé phủ: kỳ ")),y2(D("input",{"onUpdate:modelValue":m[22]||(m[22]=C=>P2.value=C),type:"text",style:{width:"30px"}},null,512),[[Q2,P2.value]]),m[67]||(m[67]=y0(" nhóm ")),y2(D("input",{"onUpdate:modelValue":m[23]||(m[23]=C=>o2.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,o2.value]]),m[68]||(m[68]=y0(" số, đảm bảo trúng ")),y2(D("input",{"onUpdate:modelValue":m[24]||(m[24]=C=>m2.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,m2.value]]),m[69]||(m[69]=y0(" số, số vé ")),y2(D("input",{"onUpdate:modelValue":m[25]||(m[25]=C=>r0.value=C),type:"text",style:{width:"30px"}},null,512),[[Q2,r0.value]]),D("button",{onClick:m[26]||(m[26]=C=>G0(55))},"tạo vé 55"),D("button",{onClick:m[27]||(m[27]=C=>G0(45))},"tạo vé 45"),m[70]||(m[70]=y0(" ngày dự đoán ")),y2(D("select",{"onUpdate:modelValue":m[28]||(m[28]=C=>H.value=C)},[m[65]||(m[65]=D("option",{value:""},"tất cả",-1)),(S0(!0),A0(K0,null,Z2(Q.value,C=>(S0(),A0("option",{key:C,value:C},o0(C),9,aS))),128))],512),[[Pn,H.value]]),D("button",{onClick:m[29]||(m[29]=C=>E0("vé phủ"))},"đối chiếu vé đã lưu"),m[71]||(m[71]=y0(" *3* "))]),D("div",null,[y0(" *4* Vé mục tiêu (55: "+o0(T2(Ve)[55])+", 45: "+o0(T2(Ve)[45])+") chiến lược ",1),y2(D("select",{"onUpdate:modelValue":m[30]||(m[30]=C=>s2.value=C)},[(S0(!0),A0(K0,null,Z2(Object.keys(T2(Bi)),C=>(S0(),A0("option",{key:C,value:C},o0(C),9,cS))),128))],512),[[Pn,s2.value]]),D("button",{onClick:m[31]||(m[31]=C=>J(T2(l)))},"vé kỳ tới 55"),D("button",{onClick:m[32]||(m[32]=C=>J(T2(o)))},"vé kỳ tới 45"),m[72]||(m[72]=y0(" *4* "))]),D("div",null,[m[74]||(m[74]=y0(" *5* Vé từ danh sách xuất hiện (công thức cố định, ít nhất 1 cột 2 số, mỗi hàng tối đa 3 số): kỳ ")),y2(D("input",{"onUpdate:modelValue":m[33]||(m[33]=C=>s0.value=C),type:"text",style:{width:"30px"}},null,512),[[Q2,s0.value]]),m[75]||(m[75]=y0(" danh sách ")),y2(D("input",{"onUpdate:modelValue":m[34]||(m[34]=C=>P0.value=C),type:"text",style:{width:"20px"}},null,512),[[Q2,P0.value]]),m[76]||(m[76]=y0(" số vé ")),y2(D("input",{"onUpdate:modelValue":m[35]||(m[35]=C=>M0.value=C),type:"text",style:{width:"40px"}},null,512),[[Q2,M0.value]]),D("button",{onClick:m[36]||(m[36]=C=>i0(T2(l)))},"tạo 55"),D("button",{onClick:m[37]||(m[37]=C=>i0(T2(o)))},"tạo 45"),m[77]||(m[77]=y0(" ngày đối chiếu ")),y2(D("select",{"onUpdate:modelValue":m[38]||(m[38]=C=>x0.value=C)},[m[73]||(m[73]=D("option",{value:""},"tất cả",-1)),(S0(!0),A0(K0,null,Z2(H0.value,C=>(S0(),A0("option",{key:C,value:C},o0(C),9,fS))),128))],512),[[Pn,x0.value]]),D("button",{onClick:m[39]||(m[39]=C=>E0("danh sách"))},"đối chiếu vé đã lưu"),m[78]||(m[78]=y0(" *5* "))])])]),D("div",hS,[D("div",_S," Tổng số dữ liệu 55: "+o0((N=V2.value)==null?void 0:N.length),1),D("div",dS," Tổng số dữ liệu 45: "+o0((q=B2.value)==null?void 0:q.length),1)]),D("div",gS,[D("div",pS,[(S0(!0),A0(K0,null,Z2((K=V2.value)==null?void 0:K.slice(0,M.value),(C,t0)=>(S0(),A0("div",{key:`danh_sách_dữ_liệu-${t0}`,style:{height:"auto"}},[D("div",mS,[D("div",null,o0(C.ngày_xổ_số)+"::"+o0(C.tuần_xổ_số)+"::"+o0(t0)+"::",1),D("div",vS,o0(C.kết_quả_xổ_số),1)]),U.value?(S0(),A0(K0,{key:0},[D("div",null,"Số kết quả có: "+o0(C.số_kết_quả_trong_các_số_đã_xuất_hiện),1),D("div",null,"Số lượng xuất hiện: "+o0(C.tập_các_số_đã_xuất_hiện.size),1),m[79]||(m[79]=D("div",null,"Danh sách xuất hiện:",-1)),(S0(),s3(p5(()=>j0(C,t0)))),D("div",null,"tổng danh sách: "+o0(C.dự_đoán_ds_xuất_hiện.length),1),D("div",null,[D("button",{onClick:w0=>x(T2(l),C)}," xem dự đoán ",8,yS),D("button",{onClick:w0=>C.hiển_thị_dự_đoán_ds_xuất_hiện=!C.hiển_thị_dự_đoán_ds_xuất_hiện}," xem danh sách ",8,TS)]),C.dự_đoán_ds_xuất_hiện.length>0&&C.hiển_thị_dự_đoán_ds_xuất_hiện?(S0(),A0("div",xS,[(S0(!0),A0(K0,null,Z2(C.dự_đoán_ds_xuất_hiện,(w0,T0)=>(S0(),A0("div",{key:`${T0}ds`},[D("div",null,[y0(o0(T0),1),(S0(),s3(p5(()=>a2(w0,C))))]),D("button",{onClick:d0=>x(T2(l),C,T0)}," xem dự đoán ",8,wS)]))),128))])):An("",!0)],64)):An("",!0)]))),128))]),D("div",SS,[(S0(!0),A0(K0,null,Z2((h0=B2.value)==null?void 0:h0.slice(0,M.value),(C,t0)=>(S0(),A0("div",{key:`danh_sách_dữ_liệu-${t0}`,style:{height:"auto"}},[D("div",bS,[D("div",null,o0(C.ngày_xổ_số)+"::"+o0(C.tuần_xổ_số)+"::"+o0(t0)+"::",1),D("div",MS,o0(C.kết_quả_xổ_số),1)]),U.value?(S0(),A0(K0,{key:0},[D("div",null,"Số kết quả có: "+o0(C.số_kết_quả_trong_các_số_đã_xuất_hiện),1),D("div",null,"Số lượng xuất hiện: "+o0(C.tập_các_số_đã_xuất_hiện.size),1),m[80]||(m[80]=D("div",null,"Danh sách xuất hiện:",-1)),(S0(),s3(p5(()=>j0(C,t0)))),D("div",null,"tổng danh sách: "+o0(C.dự_đoán_ds_xuất_hiện.length),1),D("div",null,[D("button",{onClick:w0=>x(T2(o),C)}," xem dự đoán ",8,CS),D("button",{onClick:w0=>C.hiển_thị_dự_đoán_ds_xuất_hiện=!C.hiển_thị_dự_đoán_ds_xuất_hiện}," xem danh sách ",8,kS)]),C.dự_đoán_ds_xuất_hiện.length>0&&C.hiển_thị_dự_đoán_ds_xuất_hiện?(S0(),A0("div",PS,[(S0(!0),A0(K0,null,Z2(C.dự_đoán_ds_xuất_hiện,(w0,T0)=>(S0(),A0("div",{key:`${T0}ds`},[D("div",null,[y0(o0(T0),1),(S0(),s3(p5(()=>a2(w0,C))))]),D("button",{onClick:d0=>x(T2(o),C,T0)}," xem dự đoán ",8,DS)]))),128))])):An("",!0)],64)):An("",!0)]))),128))])])])}}}),NS=`TP.HCM	19/10/2026	091891 17912 15175 82849 64610 67735 34073 48667 54437 55300 65410 60091 4598 9428 5499 0311 585 20
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
`,q3=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],g8=18,p8=[{tên:"Tiền Giang",thứ:0},{tên:"Kiên Giang",thứ:0},{tên:"Đà Lạt",thứ:0},{tên:"TP.HCM",thứ:1},{tên:"Đồng Tháp",thứ:1},{tên:"Cà Mau",thứ:1},{tên:"Bến Tre",thứ:2},{tên:"Vũng Tàu",thứ:2},{tên:"Bạc Liêu",thứ:2},{tên:"Đồng Nai",thứ:3},{tên:"Cần Thơ",thứ:3},{tên:"Sóc Trăng",thứ:3},{tên:"Tây Ninh",thứ:4},{tên:"An Giang",thứ:4},{tên:"Bình Thuận",thứ:4},{tên:"Vĩnh Long",thứ:5},{tên:"Bình Dương",thứ:5},{tên:"Trà Vinh",thứ:5},{tên:"TP.HCM",thứ:6},{tên:"Long An",thứ:6},{tên:"Bình Phước",thứ:6},{tên:"Hậu Giang",thứ:6}],RS=t=>[t.getDate(),t.getMonth()+1,t.getFullYear()].map((n,r)=>String(n).padStart(r===2?4:2,"0")).join("/"),BS=t=>{const[n,r,s]=t.split("/").map(Number);return new Date(s,r-1,n)},IS=t=>new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay());function HS(){const t=new Map;for(const n of NS.split(`
`)){if(!n.trim()||n.startsWith("#"))continue;const[r,s,o=""]=n.split("	").map(h=>h.trim()),l=o.split(/\s+/).filter(h=>h!=="");if(l.length!==g8)continue;const c=BS(s),f=IS(c).getTime();t.has(f)||t.set(f,new Map),t.get(f).set(`${r}|${c.getDay()}`,{ngày:s,các_lô:l})}return[...t.entries()].sort(([n],[r])=>r-n).map(([n,r])=>({nhãn:RS(new Date(n)),các_tỉnh:p8.map(({tên:s,thứ:o})=>{const l=r.get(`${s}|${o}`);return{tên:s,thứ:o,ngày:(l==null?void 0:l.ngày)??"",hai_số_cuối:l?l.các_lô.map(c=>c.slice(-2)):[]}})}))}const GS={class:"loto"},YS={class:"bộ-lọc"},$S=["onClick"],VS=["onClick"],FS={class:"thống-kê"},WS={key:0,class:"thống-kê"},US={key:0},qS={key:1,class:"loto-scroll"},KS={key:2,class:"loto-scroll"},jS={key:3},zS=["max"],ZS={class:"loto-scroll"},JS={key:4,class:"loto-scroll"},ts="loto_số_đã_lưu",qe=24*60*60*1e3,ns=33e4,es=8e4,XS=y4({__name:"LotoView",setup(t){const n=HS(),r=r2(83),s=$2(()=>Math.min(99,Math.max(0,Math.trunc(Number(r.value)||0))).toString().padStart(2,"0")),l=r2((()=>{try{const r0=JSON.parse(localStorage.getItem(ts)??"[]");return Array.isArray(r0)?r0.filter(H=>typeof H=="string"):[]}catch{return[]}})()),c=()=>{try{localStorage.setItem(ts,JSON.stringify(l.value))}catch{}},f=()=>{l.value.includes(s.value)||(l.value.push(s.value),c())},h=r0=>{l.value=l.value.filter(H=>H!==r0),c()},p=r0=>{r.value=Number(r0)},v=r2("ngày"),y=r0=>r0.filter(H=>H===s.value).length,S=r0=>{const[H,Q,x0]=r0.split("/").map(Number);return Date.UTC(x0,Q-1,H)},M=$2(()=>{const r0=new Map;for(const H of n)for(const Q of H.các_tỉnh){if(!Q.ngày)continue;const x0=S(Q.ngày);r0.set(x0,(r0.get(x0)??0)+y(Q.hai_số_cuối))}return r0}),G=$2(()=>{const r0=[...M.value.keys()].sort((g0,k0)=>g0-k0);let H={số_ngày:0,từ:0,đến:0},Q={số_ngày:0,từ:0,đến:0},x0=0;for(const g0 of r0)M.value.get(g0)?Q={số_ngày:0,từ:0,đến:0}:(Q=Q.số_ngày>0&&g0-x0===qe?{...Q,số_ngày:Q.số_ngày+1,đến:g0}:{số_ngày:1,từ:g0,đến:g0},Q.số_ngày>H.số_ngày&&(H=Q)),x0=g0;const H0=r0[r0.length-1];return{dài_nhất:H,hiện_tại:Q.đến===H0?Q:{số_ngày:0,từ:0,đến:0}}}),Y=r0=>{const H=new Date(r0);return[H.getUTCDate(),H.getUTCMonth()+1,H.getUTCFullYear()].map((Q,x0)=>String(Q).padStart(x0===2?4:2,"0")).join("/")},U=$2(()=>{const r0=[...M.value.keys()].sort((B2,V2)=>B2-V2);if(!r0.length)return null;const H=r0[r0.length-1]+qe,Q=new Date(H).getUTCDay(),x0=p8.filter(B2=>B2.thứ===Q).length,H0=1-Math.pow(.99,g8*x0);let g0=0,k0=0,L2=0,G2=0;const g2=G.value.hiện_tại.số_ngày;let E2=0,h1=0;for(const B2 of r0){const V2=(M.value.get(B2)??0)>0;new Date(B2).getUTCDay()===Q&&(g0++,V2&&k0++);const I2=B2-h1===qe;g2>0&&I2&&E2>=g2&&(L2++,V2&&G2++),E2=V2?0:I2?E2+1:1,h1=B2}return{mốc_tiếp:H,thứ:Q,số_tỉnh:x0,lý_thuyết:H0,cùng_thứ:g0,cùng_thứ_có:k0,sau_chuỗi:L2,sau_chuỗi_có:G2,chuỗi_cần:g2,tổng_ngày:r0.length,tổng_có:r0.filter(B2=>(M.value.get(B2)??0)>0).length}}),n0=r2(4),l0=$2(()=>n.filter(r0=>r0.các_tỉnh.every(H=>H.ngày)).map(r0=>{const H=r0.các_tỉnh.reduce((Q,x0)=>Q+y(x0.hai_số_cuối),0);return{nhãn:r0.nhãn,số_lần:H,lãi_lỗ:H*es-ns}})),u0=$2(()=>Math.min(Math.max(1,Math.trunc(Number(n0.value)||1)),Math.max(1,l0.value.length))),a0=$2(()=>{const r0=l0.value.slice(0,u0.value);let H=0;return{các_dòng:[...r0].reverse().map(x0=>(H+=x0.lãi_lỗ,{...x0,lũy_kế:H})).reverse(),tổng_lần:r0.reduce((x0,H0)=>x0+H0.số_lần,0),tổng_lãi_lỗ:H}}),s0=$2(()=>{const r0=[...l0.value].reverse(),H=u0.value;let Q=0,x0=0,H0=0;for(let g0=0;g0+H<=r0.length;g0++){const k0=r0.slice(g0,g0+H).reduce((L2,G2)=>L2+G2.lãi_lỗ,0);Q++,H0+=k0,k0>0&&x0++}return{số_cửa_sổ:Q,số_có_lãi:x0,trung_bình:Q?H0/Q:0}}),P0=r0=>`${r0>0?"+":""}${Math.round(r0/1e3).toLocaleString("vi-VN")}k`,M0=(r0,H)=>H>0?`${(r0/H*100).toFixed(1)}%`:"—",s2=$2(()=>n.map(r0=>({nhãn:r0.nhãn,các_ngày:q3.map((H,Q)=>{const x0=r0.các_tỉnh.filter(k0=>k0.thứ===Q&&k0.ngày);if(!x0.length)return null;let H0=0;const g0=[];for(const k0 of x0){const L2=y(k0.hai_số_cuối);H0+=L2,L2>0&&g0.push(`${k0.tên} (${L2})`)}return{ngày:x0[0].ngày,tổng:H0,chi_tiết:g0}})}))),o2=r0=>r0>=5?"màu-xanh":r0===4?"màu-vàng":"màu-đỏ",m2=$2(()=>n.map(r0=>{let H=0;const Q=[];for(const x0 of r0.các_tỉnh){const H0=y(x0.hai_số_cuối);H+=H0,H0>0&&Q.push(`${q3[x0.thứ]} ${x0.tên} (${H0})`)}return{nhãn:r0.nhãn,tổng:H,chi_tiết:Q}})),P2=$2(()=>n.map(r0=>({nhãn:r0.nhãn,số_lượng:r0.các_tỉnh.map(H=>H.hai_số_cuối.length?y(H.hai_số_cuối):null)})));return(r0,H)=>(S0(),A0("div",GS,[H[20]||(H[20]=D("h2",null,"Loto 22 tỉnh",-1)),D("div",YS,[D("label",null,[H[3]||(H[3]=y0(" Số cần lọc (0–99): ")),y2(D("input",{"onUpdate:modelValue":H[0]||(H[0]=Q=>r.value=Q),type:"number",min:"0",max:"99"},null,512),[[Q2,r.value,void 0,{number:!0}]])]),D("button",{type:"button",onClick:f},"Save"),(S0(!0),A0(K0,null,Z2(l.value,Q=>(S0(),A0("span",{key:Q,class:"số-đã-lưu"},[D("button",{type:"button",class:"chọn",onClick:x0=>p(Q)},o0(Q),9,$S),D("button",{type:"button",class:"xoá",title:"Xoá",onClick:x0=>h(Q)},"X",8,VS)]))),128))]),D("p",FS,[y0(" Số "+o0(s.value)+" không xuất hiện liên tiếp lâu nhất: ",1),G.value.dài_nhất.số_ngày>0?(S0(),A0(K0,{key:0},[D("b",null,o0(G.value.dài_nhất.số_ngày)+" ngày",1),y0(" ("+o0(Y(G.value.dài_nhất.từ))+" – "+o0(Y(G.value.dài_nhất.đến))+"). ",1)],64)):(S0(),A0(K0,{key:1},[y0("chưa có ngày nào.")],64)),H[4]||(H[4]=y0(" Hiện tại: ")),D("b",null,o0(G.value.hiện_tại.số_ngày)+" ngày",1),H[5]||(H[5]=y0(". "))]),U.value?(S0(),A0("div",WS,[D("p",null,[H[6]||(H[6]=y0(" Ngày kế tiếp: ")),D("b",null,o0(T2(q3)[U.value.thứ])+", "+o0(Y(U.value.mốc_tiếp)),1),y0(" ("+o0(U.value.số_tỉnh)+" tỉnh quay). Khả năng số "+o0(s.value)+" xuất hiện ít nhất 1 lần: ",1)]),D("ul",null,[D("li",null,[H[7]||(H[7]=y0(" Lý thuyết: ")),D("b",null,o0(M0(U.value.lý_thuyết,1)),1),y0(" (mỗi lô có xác suất 1/100, ngày có "+o0(U.value.số_tỉnh*T2(g8))+" lô). ",1)]),D("li",null,[H[8]||(H[8]=y0(" Thực tế mọi ngày: ")),D("b",null,o0(M0(U.value.tổng_có,U.value.tổng_ngày)),1),y0(" ("+o0(U.value.tổng_có)+"/"+o0(U.value.tổng_ngày)+" ngày). ",1)]),D("li",null,[H[9]||(H[9]=y0(" Thực tế cùng thứ: ")),D("b",null,o0(M0(U.value.cùng_thứ_có,U.value.cùng_thứ)),1),y0(" ("+o0(U.value.cùng_thứ_có)+"/"+o0(U.value.cùng_thứ)+" ngày). ",1)]),U.value.chuỗi_cần>0?(S0(),A0("li",US,[y0(" Sau khi đã vắng từ "+o0(U.value.chuỗi_cần)+" ngày trở lên: ",1),D("b",null,o0(M0(U.value.sau_chuỗi_có,U.value.sau_chuỗi)),1),y0(" ("+o0(U.value.sau_chuỗi_có)+"/"+o0(U.value.sau_chuỗi)+" lần). ",1)])):An("",!0)]),H[10]||(H[10]=D("small",null,"Các kỳ xổ số độc lập nhau, nên đây chỉ là số liệu tham khảo, không đảm bảo kết quả.",-1))])):An("",!0),D("label",null,[H[12]||(H[12]=y0(" Xem: ")),y2(D("select",{"onUpdate:modelValue":H[1]||(H[1]=Q=>v.value=Q)},H[11]||(H[11]=[D("option",{value:"ngày"},"Theo ngày",-1),D("option",{value:"tỉnh"},"Theo tỉnh",-1),D("option",{value:"tuần"},"Theo tuần",-1),D("option",{value:"dài hạn"},"Dài hạn",-1)]),512),[[Pn,v.value]])]),v.value==="ngày"?(S0(),A0("div",qS,[D("table",null,[D("thead",null,[D("tr",null,[H[13]||(H[13]=D("th",null,"Tuần",-1)),(S0(!0),A0(K0,null,Z2(T2(q3),(Q,x0)=>(S0(),A0("th",{key:x0},o0(Q),1))),128))])]),D("tbody",null,[(S0(!0),A0(K0,null,Z2(s2.value,Q=>(S0(),A0("tr",{key:Q.nhãn},[D("th",null,o0(Q.nhãn),1),(S0(!0),A0(K0,null,Z2(Q.các_ngày,(x0,H0)=>(S0(),A0("td",{key:H0,class:ct({trúng:x0==null?void 0:x0.tổng})},[x0?(S0(),A0(K0,{key:1},[D("small",null,o0(x0.ngày),1),D("div",null,o0(x0.tổng>0?`✓ ${x0.tổng}`:"✗"),1),D("small",null,o0(x0.chi_tiết.join(", ")),1)],64)):(S0(),A0(K0,{key:0},[y0("—")],64))],2))),128))]))),128))])])])):v.value==="tuần"?(S0(),A0("div",KS,[D("table",null,[H[14]||(H[14]=D("thead",null,[D("tr",null,[D("th",null,"Tuần (từ Chủ nhật)"),D("th",null,"Kết quả"),D("th",null,"Chi tiết")])],-1)),D("tbody",null,[(S0(!0),A0(K0,null,Z2(m2.value,Q=>(S0(),A0("tr",{key:Q.nhãn},[D("th",null,o0(Q.nhãn),1),D("td",{class:ct(o2(Q.tổng))},o0(Q.tổng>0?`✓ ${Q.tổng}`:"✗"),3),D("td",null,o0(Q.chi_tiết.join(", ")),1)]))),128))])])])):v.value==="dài hạn"?(S0(),A0("div",jS,[D("label",null,[H[15]||(H[15]=y0(" Số tuần: ")),y2(D("input",{"onUpdate:modelValue":H[2]||(H[2]=Q=>n0.value=Q),type:"number",min:"1",max:l0.value.length},null,8,zS),[[Q2,n0.value,void 0,{number:!0}]])]),D("p",null," Mỗi tuần chi "+o0(P0(ns).replace("+",""))+", mỗi lần trúng nhận "+o0(P0(es).replace("+",""))+". Chỉ tính tuần đủ dữ liệu. ",1),D("p",null,[y0(" Số "+o0(s.value)+" trong "+o0(u0.value)+" tuần gần nhất: ",1),D("b",null,o0(a0.value.tổng_lần)+" lần",1),H[16]||(H[16]=y0(", tổng ")),D("b",{class:ct(a0.value.tổng_lãi_lỗ>=0?"lãi":"lỗ")},o0(P0(a0.value.tổng_lãi_lỗ)),3)]),D("p",null,[y0(" Trong lịch sử, mọi khoảng "+o0(u0.value)+" tuần liên tiếp: ",1),D("b",null,o0(s0.value.số_có_lãi)+"/"+o0(s0.value.số_cửa_sổ),1),y0(" khoảng có lãi ("+o0(M0(s0.value.số_có_lãi,s0.value.số_cửa_sổ))+"), trung bình ",1),D("b",null,o0(P0(s0.value.trung_bình)),1),H[17]||(H[17]=y0(" mỗi khoảng. "))]),D("div",ZS,[D("table",null,[H[18]||(H[18]=D("thead",null,[D("tr",null,[D("th",null,"Tuần (từ Chủ nhật)"),D("th",null,"Số lần"),D("th",null,"Lãi/lỗ tuần"),D("th",null,"Lũy kế")])],-1)),D("tbody",null,[(S0(!0),A0(K0,null,Z2(a0.value.các_dòng,Q=>(S0(),A0("tr",{key:Q.nhãn},[D("th",null,o0(Q.nhãn),1),D("td",null,o0(Q.số_lần),1),D("td",{class:ct(Q.lãi_lỗ>=0?"lãi":"lỗ")},o0(P0(Q.lãi_lỗ)),3),D("td",{class:ct(Q.lũy_kế>=0?"lãi":"lỗ")},o0(P0(Q.lũy_kế)),3)]))),128))])])])])):(S0(),A0("div",JS,[D("table",null,[D("thead",null,[D("tr",null,[H[19]||(H[19]=D("th",null,"Tuần",-1)),(S0(!0),A0(K0,null,Z2(T2(p8),(Q,x0)=>(S0(),A0("th",{key:x0,class:ct(`thứ-${Q.thứ}`)},[D("div",null,o0(T2(q3)[Q.thứ]),1),D("div",null,o0(Q.tên),1)],2))),128))])]),D("tbody",null,[(S0(!0),A0(K0,null,Z2(P2.value,Q=>(S0(),A0("tr",{key:Q.nhãn},[D("th",null,o0(Q.nhãn),1),(S0(!0),A0(K0,null,Z2(Q.số_lượng,(x0,H0)=>(S0(),A0("td",{key:H0,class:ct({trúng:x0})},[x0===null?(S0(),A0(K0,{key:0},[y0("—")],64)):x0>0?(S0(),A0(K0,{key:1},[y0("✓ "+o0(x0),1)],64)):(S0(),A0(K0,{key:2},[y0("✗")],64))],2))),128))]))),128))])])]))]))}}),QS=(t,n)=>{const r=t.__vccOpts||t;for(const[s,o]of n)r[s]=o;return r},tb=QS(XS,[["__scopeId","data-v-7a313477"]]),nb=fv({history:$m("/lote/"),routes:[{path:"/",name:"home",component:ES},{path:"/loto",name:"loto",component:tb}]}),vu=lm(_v);vu.use(nb);vu.mount("#app")});export default eb();
