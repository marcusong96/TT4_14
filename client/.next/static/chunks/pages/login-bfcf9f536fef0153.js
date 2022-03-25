(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6886:function(e,r,n){"use strict";n.d(r,{ZP:function(){return Z}});var i=n(3366),t=n(7462),o=n(7294),a=(n(5697),n(6010)),s=n(5408),l=n(9707),c=n(7463),d=n(1496),m=n(3616);var u=o.createContext(),x=n(1420);function p(e){return(0,x.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var h=(0,n(1271).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),w=n(5893);const f=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}const v=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{container:n,direction:i,item:t,lg:o,md:a,sm:s,spacing:l,wrap:c,xl:d,xs:m,zeroMinWidth:u}=e.ownerState;return[r.root,n&&r.container,t&&r.item,u&&r.zeroMinWidth,n&&0!==l&&r[`spacing-xs-${String(l)}`],"row"!==i&&r[`direction-xs-${String(i)}`],"wrap"!==c&&r[`wrap-xs-${String(c)}`],!1!==m&&r[`grid-xs-${String(m)}`],!1!==s&&r[`grid-sm-${String(s)}`],!1!==a&&r[`grid-md-${String(a)}`],!1!==o&&r[`grid-lg-${String(o)}`],!1!==d&&r[`grid-xl-${String(d)}`]]}})((({ownerState:e})=>(0,t.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:r}){return(0,s.k9)({theme:e},r.direction,(e=>{const r={flexDirection:e};return 0===e.indexOf("column")&&(r[`& > .${h.item}`]={maxWidth:"none"}),r}))}),(function({theme:e,ownerState:r}){const{container:n,rowSpacing:i}=r;let t={};return n&&0!==i&&(t=(0,s.k9)({theme:e},i,(r=>{const n=e.spacing(r);return"0px"!==n?{marginTop:`-${S(n)}`,[`& > .${h.item}`]:{paddingTop:S(n)}}:{}}))),t}),(function({theme:e,ownerState:r}){const{container:n,columnSpacing:i}=r;let t={};return n&&0!==i&&(t=(0,s.k9)({theme:e},i,(r=>{const n=e.spacing(r);return"0px"!==n?{width:`calc(100% + ${S(n)})`,marginLeft:`-${S(n)}`,[`& > .${h.item}`]:{paddingLeft:S(n)}}:{}}))),t}),(({theme:e,ownerState:r})=>e.breakpoints.keys.reduce(((n,i)=>(function(e,r,n,i){const o=i[n];if(!o)return;let a={};if(!0===o)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===o)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const e=(0,s.P$)({values:i.columns,base:r.breakpoints.values}),l=Math.round(o/e[n]*1e8)/1e6+"%";let c={};if(i.container&&i.item&&0!==i.columnSpacing){const e=r.spacing(i.columnSpacing);if("0px"!==e){const r=`calc(${l} + ${S(e)})`;c={flexBasis:r,maxWidth:r}}}a=(0,t.Z)({flexBasis:l,flexGrow:0,maxWidth:l},c)}0===r.breakpoints.values[n]?Object.assign(e,a):e[r.breakpoints.up(n)]=a}(n,e,i,r),n)),{})));var Z=o.forwardRef((function(e,r){const n=(0,m.Z)({props:e,name:"MuiGrid"}),s=(0,l.Z)(n),{className:d,columns:x,columnSpacing:g,component:h="div",container:S=!1,direction:Z="row",item:C=!1,lg:j=!1,md:$=!1,rowSpacing:b,sm:W=!1,spacing:L=0,wrap:y="wrap",xl:M=!1,xs:k=!1,zeroMinWidth:z=!1}=s,_=(0,i.Z)(s,f),B=b||L,P=g||L,G=o.useContext(u),N=x||G||12,E=(0,t.Z)({},s,{columns:N,container:S,direction:Z,item:C,lg:j,md:$,sm:W,rowSpacing:B,columnSpacing:P,wrap:y,xl:M,xs:k,zeroMinWidth:z}),T=(e=>{const{classes:r,container:n,direction:i,item:t,lg:o,md:a,sm:s,spacing:l,wrap:d,xl:m,xs:u,zeroMinWidth:x}=e,g={root:["root",n&&"container",t&&"item",x&&"zeroMinWidth",n&&0!==l&&`spacing-xs-${String(l)}`,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==d&&`wrap-xs-${String(d)}`,!1!==u&&`grid-xs-${String(u)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==m&&`grid-xl-${String(m)}`]};return(0,c.Z)(g,p,r)})(E);return I=(0,w.jsx)(v,(0,t.Z)({ownerState:E,className:(0,a.Z)(T.root,d),as:h,ref:r},_)),12!==N?(0,w.jsx)(u.Provider,{value:N,children:I}):I;var I}))},7156:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(6964)}])},6964:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return v}});var i=n(5893),t=n(9008),o=n(1664),a=n(1163),s=n(2175),l=n(4231),c=n(7357),d=n(7948),m=n(1057),u=n(5861),x=n(6886),p=n(7798),g=n(122),h=n(1023),w=n(2066),f=(0,w.Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{d:"M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z"})}),"Facebook"),S=(0,w.Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{d:"M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z"})}),"Google"),v=function(){var e=(0,a.useRouter)(),r=(0,s.TA)({initialValues:{email:"demo@devias.io",password:"Password123"},validationSchema:l.Ry({email:l.Z_().email("Must be a valid email").max(255).required("Email is required"),password:l.Z_().max(255).required("Password is required")}),onSubmit:function(){e.push("/")}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.default,{children:(0,i.jsx)("title",{children:"Login | Loan Management System"})}),(0,i.jsx)(c.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,i.jsxs)(d.Z,{maxWidth:"sm",children:[(0,i.jsx)(o.default,{href:"/",passHref:!0,children:(0,i.jsx)(m.Z,{component:"a",startIcon:(0,i.jsx)(h.Z,{fontSize:"small"}),children:"Dashboard"})}),(0,i.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,i.jsxs)(c.Z,{sx:{my:3},children:[(0,i.jsx)(u.Z,{color:"textPrimary",variant:"h4",children:"Sign in"}),(0,i.jsx)(u.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Sign in on the internal platform"})]}),(0,i.jsxs)(x.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(x.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(m.Z,{color:"info",fullWidth:!0,startIcon:(0,i.jsx)(f,{}),onClick:r.handleSubmit,size:"large",variant:"contained",children:"Login with Facebook"})}),(0,i.jsx)(x.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(m.Z,{fullWidth:!0,color:"error",startIcon:(0,i.jsx)(S,{}),onClick:r.handleSubmit,size:"large",variant:"contained",children:"Login with Google"})})]}),(0,i.jsx)(c.Z,{sx:{pb:1,pt:3},children:(0,i.jsx)(u.Z,{align:"center",color:"textSecondary",variant:"body1",children:"or login with email address"})}),(0,i.jsx)(p.Z,{error:Boolean(r.touched.email&&r.errors.email),fullWidth:!0,helperText:r.touched.email&&r.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,type:"email",value:r.values.email,variant:"outlined"}),(0,i.jsx)(p.Z,{error:Boolean(r.touched.password&&r.errors.password),fullWidth:!0,helperText:r.touched.password&&r.errors.password,label:"Password",margin:"normal",name:"password",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.password,variant:"outlined"}),(0,i.jsx)(c.Z,{sx:{py:2},children:(0,i.jsx)(m.Z,{color:"primary",disabled:r.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In Now"})}),(0,i.jsxs)(u.Z,{color:"textSecondary",variant:"body2",children:["Don't have an account?"," ",(0,i.jsx)(o.default,{href:"/register",children:(0,i.jsx)(g.Z,{to:"/register",variant:"subtitle2",underline:"hover",sx:{cursor:"pointer"},children:"Sign Up"})})]})]})]})})]})}}},function(e){e.O(0,[760,273,865,774,888,179],(function(){return r=7156,e(e.s=r);var r}));var r=e.O();_N_E=r}]);