import{r as f}from"./index.NEDEFKed.js";/* empty css                       */var i={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=f,a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function _(r,t,o){var e,n={},u=null,p=null;o!==void 0&&(u=""+o),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(p=t.ref);for(e in t)m.call(t,e)&&!y.hasOwnProperty(e)&&(n[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:a,type:r,key:u,ref:p,props:n,_owner:x.current}}s.Fragment=c;s.jsx=_;s.jsxs=_;i.exports=s;var d=i.exports;function O(r){const[t,o]=f.useState(0);return d.jsx("button",{onClick:()=>o(t+1),className:"btn btn-white",children:`${r.text} : ${t}`})}export{O as default};
