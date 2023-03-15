"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[625],{7625:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i,o,a,c,s,l,d,u,p,x,m=t(2791),h=t(9434),g=t(3634),f=t(5705),b=function(n){return n.contacts.items},Z=function(n){return n.contacts.filter},j=function(n){return n.contacts.isLoading},w=t(168),y=t(8789),v=(0,y.ZP)(f.l0)(r||(r=(0,w.Z)(["\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 10px;\n"]))),C=(0,y.ZP)(f.gN)(i||(i=(0,w.Z)(["\n  height: 20px;\n  border: 2px solid rgb(163 167 167);\n  border-radius: 4px;\n"]))),P=y.ZP.label(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  width: auto;\n  font-size: 16px;\n  font-weight: 600;\n"]))),k=y.ZP.button(a||(a=(0,w.Z)(["\n  border-radius: 4px;\n  width: 100px;\n  height: 30px;\n  text-align: center;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: rgb(63, 81, 181);\n  color: white;\n  margin: 0 auto;\n"]))),z=t(184),_=function(){var n=(0,h.I0)(),e=(0,h.v9)(b);return(0,z.jsx)(f.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var i=t.name,o=t.number,a=r.resetForm,c=i.toLowerCase().trim();e.some((function(n){return n.name.toLowerCase().trim()===c}))?alert("".concat(i," is already in contacts")):0===i.length?alert("Fields must be filled!"):n((0,g.uK)({name:i,number:o})),a()},children:(0,z.jsxs)(v,{children:[(0,z.jsxs)(P,{children:["Name",(0,z.jsx)(C,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",required:!0})]}),(0,z.jsxs)(P,{children:["Number",(0,z.jsx)(C,{type:"tel",name:"number",pattern:"\\d{3}[-]\\d{2}[-]\\d{2}",title:"The phone number must consist of numbers and a dash ###-##-##",placeholder:"Enter phone number",required:!0})]}),(0,z.jsx)(k,{type:"submit",children:"Add Contact"})]})})},A=y.ZP.ul(c||(c=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  padding: 0;\n"]))),F=y.ZP.li(s||(s=(0,w.Z)(["\n  width: 280px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),L=y.ZP.button(l||(l=(0,w.Z)(["\n  border-radius: 4px;\n  text-align: center;\n  border: none;\n  font-size: 12px;\n  background-color: rgb(63, 81, 181);\n  color: white;\n"]))),N=y.ZP.ul(d||(d=(0,w.Z)(["\n  padding: 0;\n  text-align: center;\n\n  font-size: 16px;\n  font-weight: 600;\n  color: orange;\n"]))),E=function(){var n=(0,h.v9)(Z),e=(0,h.v9)(b),t=(0,h.I0)(),r=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return(0,z.jsxs)(A,{children:[r.map((function(n){return(0,z.jsxs)(F,{children:["".concat(n.name," : ").concat(n.number),(0,z.jsx)(L,{type:"button",name:"delete",onClick:function(){t((0,g.GK)(n.id))},children:"delete"})]},n.id)})),(0,z.jsx)(N,{children:0===e.length&&"You do not have contacts \ud83d\ude2f"})]})},I=t(1538),q=y.ZP.h3(u||(u=(0,w.Z)(["\n  font-size: 24px;\n  text-align: center;\n  margin: 0;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]))),S=y.ZP.div(p||(p=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),T=y.ZP.input(x||(x=(0,w.Z)(["\nmargin-top: 10px;\n  height: 20px;\n  max-width: 180px;\n  border: 2px solid rgb(163 167 167);\n  border-radius: 4px;\n"]))),J=function(){var n=(0,h.I0)(),e=(0,h.v9)(Z);return(0,z.jsxs)(S,{children:[(0,z.jsx)(q,{children:"Find contacts by name"}),(0,z.jsx)(T,{type:"text",value:e,onChange:function(e){return n((0,I.Tv)(e.target.value))},placeholder:"Enter Name"})]})},K={container:{display:"flex",flexDirection:"column",margin:"0 auto",gap:"20px",maxWidth:"300px",marginTop:"30px",border:"1px solid rgb(236, 236, 236)",borderRadius:"10px",boxShadow:"0px 1px 3px rgb(0, 0, 0, 0.12)",backdropFilter:"blur(10px)"},message:{padding:"0",textAlign:"center",fontSize:"16px",fontWeight:"600",color:"orange"}},R=function(){var n=(0,h.I0)(),e=(0,h.v9)(j);return(0,m.useEffect)((function(){n((0,g.yF)())}),[n]),(0,z.jsxs)("div",{style:K.container,children:[(0,z.jsx)(_,{}),(0,z.jsx)(J,{}),(0,z.jsx)("div",{style:K.message,children:e&&"Request in progress...\ud83d\udc4c"}),(0,z.jsx)(E,{})]})}}}]);
//# sourceMappingURL=625.c6f618c1.chunk.js.map