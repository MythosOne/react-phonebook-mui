"use strict";(self.webpackChunkreact_phonebook_mui=self.webpackChunkreact_phonebook_mui||[]).push([[529],{7529:function(e,t,n){n.r(t),n.d(t,{default:function(){return Fe}});var r,a,o,i,s,c,l,d=n(2791),u=n(9434),p=n(3634),m=function(e){return e.contacts.items},v=function(e){return e.contacts.filter},f=function(e){return e.contacts.isLoading},g=n(168),h=n(6088),x=n(501),b=n(6151),Z=h.Z.form(r||(r=(0,g.Z)(["\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  padding: 20px;\n"]))),y=h.Z.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),w=(0,h.Z)(x.Z)(o||(o=(0,g.Z)(["\n  & input {\n    font-size: 20px;\n    color: white;\n  }\n\n  & label {\n    font-size: 20px;\n    color: white;\n  }\n\n  /* & label.Mui-focused {\n    color: white;\n    font-weight: 600;\n  } */\n"]))),S=(0,h.Z)(b.Z)(i||(i=(0,g.Z)(["\n  border-radius: 4px;\n  width: 180px;\n  height: 40px;\n  text-align: center;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  background-color: #3f51b5;\n  color: white;\n  margin: 0 auto;\n\n    &:hover {\n    background-color: #3f51b5;\n  }\n"]))),I=n(890),C=n(6189),j=n(184),A=(0,C.Z)((0,j.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall"),k=function(){var e=(0,u.I0)(),t=(0,u.v9)(m);return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(Z,{onSubmit:function(n){n.preventDefault();var r=n.currentTarget,a=r.elements.name.value,o=r.elements.tel.value,i=a.toLowerCase().trim();t.some((function(e){return e.name.toLowerCase().trim()===i}))?alert("".concat(a," is already in contacts")):0===a.length?alert("Fields must be filled!"):e((0,p.uK)({name:a,number:o})),r.reset()},children:[(0,j.jsxs)(y,{children:[(0,j.jsx)(I.Z,{variant:"h4",fontWeight:"400",color:"white",children:"CONTACTS"}),(0,j.jsx)(w,{fullWidth:!0,type:"text",name:"name",label:"Name",variant:"filled",inputProps:{inputMode:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,j.jsx)(w,{fullWidth:!0,type:"tel",name:"tel",label:"Number phone",variant:"filled",inputProps:{inputMode:"tel",pattern:"\\d{3}[-]\\d{2}[-]\\d{2}"},title:"The phone number must consist of numbers and a dash ###-##-##"})]}),(0,j.jsx)(S,{variant:"contained",startIcon:(0,j.jsx)(A,{}),type:"submit",children:"Add Contact"})]})})},M=h.Z.ul(s||(s=(0,g.Z)(["\n  padding: 0;\n  text-align: center;\n\n  font-size: 16px;\n  font-weight: 600;\n  color: orange;\n"]))),P=(0,h.Z)(b.Z)(c||(c=(0,g.Z)(["\n  border-radius: 4px;\n  min-width: 90px;\n  height: 30px;\n  text-align: center;\n  border: none;\n  font-size: 12px;\n  background-color: #3f51b5;\n  color: white;\n  margin: 0 auto;\n\n  &:hover {\n    background-color: #3f51b5;\n  }\n"]))),N=(0,h.Z)(I.Z)(l||(l=(0,g.Z)(["\n  font-size: 18px;\n  color: white;\n  text-shadow: 2px 2px 4px black;\n"]))),R=n(493),z=n(4942),L=n(3366),F=n(7462),T=n(8182),G=n(4419),O=n(627),D=n(2065),V=n(7630),B=n(1046),W=n(2982),q=n(9103),_=n(162),E=n(2071),H=n(6199),K=n(5878),Y=n(1217);function J(e){return(0,Y.Z)("MuiListItem",e)}var $=(0,K.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var Q=(0,K.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function U(e){return(0,Y.Z)("MuiListItemSecondaryAction",e)}(0,K.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var X=["className"],ee=(0,V.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,F.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),te=d.forwardRef((function(e,t){var n=(0,B.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,a=(0,L.Z)(n,X),o=d.useContext(H.Z),i=(0,F.Z)({},n,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,G.Z)(r,U,n)}(i);return(0,j.jsx)(ee,(0,F.Z)({className:(0,T.Z)(s.root,r),ownerState:i,ref:t},a))}));te.muiName="ListItemSecondaryAction";var ne=te,re=["className"],ae=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],oe=(0,V.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,F.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,F.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,z.Z)({},"& > .".concat(Q.root),{paddingRight:48}),(t={},(0,z.Z)(t,"&.".concat($.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,z.Z)(t,"&.".concat($.selected),(0,z.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,D.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat($.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,D.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,z.Z)(t,"&.".concat($.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,z.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat($.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,D.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,D.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),ie=(0,V.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),se=d.forwardRef((function(e,t){var n=(0,B.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,a=void 0===r?"center":r,o=n.autoFocus,i=void 0!==o&&o,s=n.button,c=void 0!==s&&s,l=n.children,u=n.className,p=n.component,m=n.components,v=void 0===m?{}:m,f=n.componentsProps,g=void 0===f?{}:f,h=n.ContainerComponent,x=void 0===h?"li":h,b=n.ContainerProps,Z=(b=void 0===b?{}:b).className,y=n.dense,w=void 0!==y&&y,S=n.disabled,I=void 0!==S&&S,C=n.disableGutters,A=void 0!==C&&C,k=n.disablePadding,M=void 0!==k&&k,P=n.divider,N=void 0!==P&&P,R=n.focusVisibleClassName,z=n.secondaryAction,D=n.selected,V=void 0!==D&&D,K=n.slotProps,Y=void 0===K?{}:K,Q=n.slots,U=void 0===Q?{}:Q,X=(0,L.Z)(n.ContainerProps,re),ee=(0,L.Z)(n,ae),te=d.useContext(H.Z),se=d.useMemo((function(){return{dense:w||te.dense||!1,alignItems:a,disableGutters:A}}),[a,te.dense,w,A]),ce=d.useRef(null);(0,_.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var le=d.Children.toArray(l),de=le.length&&(0,q.Z)(le[le.length-1],["ListItemSecondaryAction"]),ue=(0,F.Z)({},n,{alignItems:a,autoFocus:i,button:c,dense:se.dense,disabled:I,disableGutters:A,disablePadding:M,divider:N,hasSecondaryAction:de,selected:V}),pe=function(e){var t=e.alignItems,n=e.button,r=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,G.Z)(i,J,r)}(ue),me=(0,E.Z)(ce,t),ve=U.root||v.Root||oe,fe=Y.root||g.root||{},ge=(0,F.Z)({className:(0,T.Z)(pe.root,fe.className,u),disabled:I},ee),he=p||"li";return c&&(ge.component=p||"div",ge.focusVisibleClassName=(0,T.Z)($.focusVisible,R),he=W.Z),de?(he=ge.component||p?he:"div","li"===x&&("li"===he?he="div":"li"===ge.component&&(ge.component="div")),(0,j.jsx)(H.Z.Provider,{value:se,children:(0,j.jsxs)(ie,(0,F.Z)({as:x,className:(0,T.Z)(pe.container,Z),ref:me,ownerState:ue},X,{children:[(0,j.jsx)(ve,(0,F.Z)({},fe,!(0,O.Z)(ve)&&{as:he,ownerState:(0,F.Z)({},ue,fe.ownerState)},ge,{children:le})),le.pop()]}))})):(0,j.jsx)(H.Z.Provider,{value:se,children:(0,j.jsxs)(ve,(0,F.Z)({},fe,{as:he,ref:me},!(0,O.Z)(ve)&&{ownerState:(0,F.Z)({},ue,fe.ownerState)},ge,{children:[le,z&&(0,j.jsx)(ne,{children:z})]}))})}));function ce(e){return(0,Y.Z)("MuiListItemAvatar",e)}(0,K.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var le=["className"],de=(0,V.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,F.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),ue=d.forwardRef((function(e,t){var n=(0,B.Z)({props:e,name:"MuiListItemAvatar"}),r=n.className,a=(0,L.Z)(n,le),o=d.useContext(H.Z),i=(0,F.Z)({},n,{alignItems:o.alignItems}),s=function(e){var t=e.alignItems,n=e.classes,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,G.Z)(r,ce,n)}(i);return(0,j.jsx)(de,(0,F.Z)({className:(0,T.Z)(s.root,r),ownerState:i,ref:t},a))})),pe=n(9439),me=(0,C.Z)((0,j.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ve(e){return(0,Y.Z)("MuiAvatar",e)}(0,K.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var fe=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],ge=(0,V.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,n=e.ownerState;return(0,F.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&(0,F.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),he=(0,V.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),xe=(0,V.ZP)(me,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var be=d.forwardRef((function(e,t){var n=(0,B.Z)({props:e,name:"MuiAvatar"}),r=n.alt,a=n.children,o=n.className,i=n.component,s=void 0===i?"div":i,c=n.imgProps,l=n.sizes,u=n.src,p=n.srcSet,m=n.variant,v=void 0===m?"circular":m,f=(0,L.Z)(n,fe),g=null,h=function(e){var t=e.crossOrigin,n=e.referrerPolicy,r=e.src,a=e.srcSet,o=d.useState(!1),i=(0,pe.Z)(o,2),s=i[0],c=i[1];return d.useEffect((function(){if(r||a){c(!1);var e=!0,o=new Image;return o.onload=function(){e&&c("loaded")},o.onerror=function(){e&&c("error")},o.crossOrigin=t,o.referrerPolicy=n,o.src=r,a&&(o.srcset=a),function(){e=!1}}}),[t,n,r,a]),s}((0,F.Z)({},c,{src:u,srcSet:p})),x=u||p,b=x&&"error"!==h,Z=(0,F.Z)({},n,{colorDefault:!b,component:s,variant:v}),y=function(e){var t=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,G.Z)(n,ve,t)}(Z);return g=b?(0,j.jsx)(he,(0,F.Z)({alt:r,src:u,srcSet:p,sizes:l,ownerState:Z,className:y.img},c)):null!=a?a:x&&r?r[0]:(0,j.jsx)(xe,{ownerState:Z,className:y.fallback}),(0,j.jsx)(ge,(0,F.Z)({as:s,ownerState:Z,className:(0,T.Z)(y.root,o),ref:t},f,{children:g}))}));function Ze(e){return(0,Y.Z)("MuiListItemText",e)}var ye,we,Se=(0,K.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Ie=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Ce=(0,V.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,z.Z)({},"& .".concat(Se.primary),t.primary),(0,z.Z)({},"& .".concat(Se.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,F.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),je=d.forwardRef((function(e,t){var n=(0,B.Z)({props:e,name:"MuiListItemText"}),r=n.children,a=n.className,o=n.disableTypography,i=void 0!==o&&o,s=n.inset,c=void 0!==s&&s,l=n.primary,u=n.primaryTypographyProps,p=n.secondary,m=n.secondaryTypographyProps,v=(0,L.Z)(n,Ie),f=d.useContext(H.Z).dense,g=null!=l?l:r,h=p,x=(0,F.Z)({},n,{disableTypography:i,inset:c,primary:!!g,secondary:!!h,dense:f}),b=function(e){var t=e.classes,n=e.inset,r=e.primary,a=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,G.Z)(o,Ze,t)}(x);return null==g||g.type===I.Z||i||(g=(0,j.jsx)(I.Z,(0,F.Z)({variant:f?"body2":"body1",className:b.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:g}))),null==h||h.type===I.Z||i||(h=(0,j.jsx)(I.Z,(0,F.Z)({variant:"body2",className:b.secondary,color:"text.secondary",display:"block"},m,{children:h}))),(0,j.jsxs)(Ce,(0,F.Z)({className:(0,T.Z)(b.root,a),ownerState:x,ref:t},v,{children:[g,h]}))})),Ae=n(5803),ke=(0,C.Z)((0,j.jsx)("path",{d:"M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm3 2v2h6v-2h-6zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"}),"PersonRemove"),Me=function(){var e=(0,u.v9)(v),t=(0,u.v9)(m),n=(0,u.I0)(),r=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,e);return(0,j.jsxs)(R.Z,{sx:{padding:"20px 20px 12px"},children:[r.map((function(e){return(0,j.jsxs)(se,{sx:{padding:"0 0 8px"},children:[(0,j.jsx)(ue,{children:(0,j.jsx)(be,{sx:{bgcolor:"#3f51b5"},children:(0,j.jsx)(Ae.Z,{})})}),(0,j.jsx)(je,{children:(0,j.jsx)(N,{fontSize:"18px",color:"white",textshadow:"2px 2px 4px black",children:"".concat(e.name," : ").concat(e.number)})}),(0,j.jsx)(P,{variant:"outlined",startIcon:(0,j.jsx)(ke,{}),type:"button",name:"delete",onClick:function(){n((0,p.GK)(e.id))},children:"Delete"})]},e.id)})),(0,j.jsx)(M,{children:0===t.length&&"You do not have contacts \ud83d\ude2f"})]})},Pe=n(1538),Ne=h.Z.div(ye||(ye=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  padding: 20px;\n"]))),Re=(0,h.Z)(x.Z)(we||(we=(0,g.Z)(["\n  & input {\n    font-size: 20px;\n    color: white;\n  }\n\n  & label {\n    font-size: 20px;\n    color: white;\n  }\n"]))),ze=function(){var e=(0,u.I0)(),t=(0,u.v9)(v);return(0,j.jsxs)(Ne,{children:[(0,j.jsx)(I.Z,{variant:"h5",fontWeight:"400",color:"white",children:"Find contacts by name"}),(0,j.jsx)(Re,{fullWidth:!0,type:"text",label:"Enter Name",variant:"filled",value:t,onChange:function(t){return e((0,Pe.Tv)(t.target.value))}})]})},Le={container:{display:"flex",flexDirection:"column",width:"444px",border:"1px solid rgb(236, 236, 236)",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",backdropFilter:"blur(10px)",marginBottom:"20px"},message:{padding:"0",textAlign:"center",fontSize:"16px",fontWeight:"600",color:"orange"},section:{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}},Fe=function(){var e=(0,u.I0)(),t=(0,u.v9)(f);return(0,d.useEffect)((function(){e((0,p.yF)())}),[e]),(0,j.jsx)("section",{style:Le.section,children:(0,j.jsxs)("div",{style:Le.container,children:[(0,j.jsx)(k,{}),(0,j.jsx)(ze,{}),(0,j.jsx)("div",{style:Le.message,children:t&&"Request in progress...\ud83d\udc4c"}),(0,j.jsx)(Me,{})]})})}},5803:function(e,t,n){var r=n(6189),a=n(184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle")}}]);
//# sourceMappingURL=529.719504c6.chunk.js.map