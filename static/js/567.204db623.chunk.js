"use strict";(self.webpackChunkPhonebook_in_React=self.webpackChunkPhonebook_in_React||[]).push([[567],{2567:function(e,r,a){a.r(r),a.d(r,{default:function(){return v}});var t=a(9434),o=a(9273),n=a(890),l=a(3044),i=a(6151),s=a(3039),c=a(4554),u=a(869),d=a(184),m=function(){var e=(0,t.I0)();return(0,d.jsxs)(c.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,d.jsx)(l.Z,{sx:{m:1,bgcolor:"#0097a7"},children:(0,d.jsx)(u.Z,{sx:{bgcolor:"#0097a7"}})}),(0,d.jsx)(n.Z,{variant:"h5",children:"Register"}),(0,d.jsxs)(c.Z,{component:"form",onSubmit:function(r){r.preventDefault();var a=r.currentTarget;""===r.target[0].value||""===r.target[2].value||""===r.target[4].value?alert("Ups. You didn't fill the form"):e((0,o.z2)({name:a.elements.name.value,email:a.elements.email.value,password:a.elements.password.value})),a.reset()},noValidate:!0,sx:{mt:1,width:533},children:[(0,d.jsx)(s.Z,{margin:"normal",padding:"normal",required:!0,fullWidth:!0,id:"name",label:"name",name:"name",autoComplete:"name",autoFocus:!0,color:"secondary",sx:{color:"primary.main"}}),(0,d.jsx)(s.Z,{margin:"normal",padding:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",color:"secondary",sx:{color:"primary.main"}}),(0,d.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",color:"secondary"}),(0,d.jsx)(i.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,bgcolor:"secondary.main",":hover":{bgcolor:"secondary.light"}},children:"Register"})]})]})};function v(){return(0,d.jsx)("div",{children:(0,d.jsx)(m,{})})}},869:function(e,r,a){var t=a(4836);r.Z=void 0;var o=t(a(5649)),n=a(184),l=(0,o.default)((0,n.jsx)("path",{d:"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17c-.16-.16-.42-.16-.58 0l-.88.88L20 12.75l.88-.88c.16-.16.16-.42 0-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"}),"AppRegistration");r.Z=l},3044:function(e,r,a){a.d(r,{Z:function(){return y}});var t=a(5987),o=a(9439),n=a(1413),l=a(2791),i=a(8182),s=a(4419),c=a(6934),u=a(1402),d=a(9201),m=a(184),v=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=a(5878),h=a(1217);function p(e){return(0,h.Z)("MuiAvatar",e)}(0,f.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Z=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,r[a.variant],a.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,a=e.ownerState;return(0,n.Z)((0,n.Z)((0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:(r.vars||r).shape.borderRadius}),"square"===a.variant&&{borderRadius:0}),a.colorDefault&&(0,n.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),x=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,c.ZP)(v,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var y=l.forwardRef((function(e,r){var a=(0,u.Z)({props:e,name:"MuiAvatar"}),c=a.alt,d=a.children,v=a.className,f=a.component,h=void 0===f?"div":f,y=a.imgProps,w=a.sizes,j=a.src,k=a.srcSet,z=a.variant,R=void 0===z?"circular":z,S=(0,t.Z)(a,g),M=null,P=function(e){var r=e.crossOrigin,a=e.referrerPolicy,t=e.src,n=e.srcSet,i=l.useState(!1),s=(0,o.Z)(i,2),c=s[0],u=s[1];return l.useEffect((function(){if(t||n){u(!1);var e=!0,o=new Image;return o.onload=function(){e&&u("loaded")},o.onerror=function(){e&&u("error")},o.crossOrigin=r,o.referrerPolicy=a,o.src=t,n&&(o.srcset=n),function(){e=!1}}}),[r,a,t,n]),c}((0,n.Z)((0,n.Z)({},y),{},{src:j,srcSet:k})),A=j||k,D=A&&"error"!==P,C=(0,n.Z)((0,n.Z)({},a),{},{colorDefault:!D,component:h,variant:R}),I=function(e){var r=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(a,p,r)}(C);return M=D?(0,m.jsx)(x,(0,n.Z)({alt:c,src:j,srcSet:k,sizes:w,ownerState:C,className:I.img},y)):null!=d?d:A&&c?c[0]:(0,m.jsx)(b,{ownerState:C,className:I.fallback}),(0,m.jsx)(Z,(0,n.Z)((0,n.Z)({as:h,ownerState:C,className:(0,i.Z)(I.root,v),ref:r},S),{},{children:M}))}))}}]);
//# sourceMappingURL=567.204db623.chunk.js.map