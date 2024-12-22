const __vite__fileDeps=["AdminSeatInfo-CfbjPdSS-jdO-bOt4.js","strapi-eHtn4eBx.js","strapi-COJtagOC.css","selectors-BUDjU_0m-BWnj6scl.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{gS as H,gH as K,d as Z,U as L,bo as X,u as v,gT as J,r as h,aF as Q,c9 as w,bx as Y,t as q,j as e,b as F,P,S as I,a0 as ee,F as b,T as u,Q as z,c as U,e as _,B as x,M as m,gU as te,gV as ae,I as $,be as ie,$ as se,gW as oe,ex as R,X as ne,gt as le,gX as re,gY as de,gZ as ce,g_ as ge,g$ as ue,h0 as pe,h1 as me,h2 as he,by as xe}from"./strapi-eHtn4eBx.js";import{s as fe}from"./selectors-BUDjU_0m-BWnj6scl.js";const{Axios:Ae,AxiosError:je,CanceledError:Ee,isCancel:Fe,CancelToken:Te,VERSION:De,all:ke,Cancel:Be,isAxiosError:Pe,spread:Ue,toFormData:_e,AxiosHeaders:$e,HttpStatusCode:Oe,formToJSON:Ve,getAdapter:He,mergeConfig:Ne}=H,y=750,E=100,N=["image/jpeg","image/png","image/svg+xml"],Se={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},O={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},W=async a=>{if(!N.includes(a.type))throw new A("File format",Se);const i=await new Promise(l=>{const r=new FileReader;r.onload=()=>{const d=new Image;d.onload=()=>{l({width:d.width,height:d.height})},d.src=r.result},r.readAsDataURL(a)});if(!(i.width<=y&&i.height<=y))throw new A("File sizing",O);const s={ext:a.name.split(".").pop(),size:a.size/1e3,name:a.name,url:URL.createObjectURL(a),rawFile:a,width:i.width,height:i.height};if(!(s.size<=E))throw new A("File sizing",O);return s};class A extends Error{displayMessage;constructor(t,i,g){super(t,g),this.displayMessage=i}}const[Ce,T]=K("LogoInput"),V=({canUpdate:a,customLogo:t,defaultLogo:i,hint:g,label:s,onChangeLogo:o})=>{const[l,r]=h.useState(),[d,f]=h.useState(),{formatMessage:c}=v(),M=()=>{r(void 0),f(void 0)};return e.jsx(m.Root,{open:!!d,onOpenChange:j=>{j===!1&&M()},children:e.jsxs(Ce,{setLocalImage:r,localImage:l,goToStep:f,onClose:M,children:[e.jsx(te,{label:s,selectedSlide:0,hint:g,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:t?.name||"logo.png",actions:e.jsxs(ae,{children:[e.jsx(m.Trigger,{children:e.jsx($,{disabled:!a,onClick:()=>f("upload"),label:c({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),children:e.jsx(ie,{})})}),t?.url&&e.jsx($,{disabled:!a,onClick:()=>o(null),label:c({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),children:e.jsx(se,{})})]}),children:e.jsx(oe,{label:c({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"}),children:e.jsx(x,{maxHeight:"40%",maxWidth:"40%",tag:"img",src:t?.url||i,alt:c({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})})})}),e.jsxs(m.Content,{children:[e.jsx(m.Header,{children:e.jsx(m.Title,{children:c(d==="upload"?{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"}:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"})})}),d==="upload"?e.jsx(Me,{}):e.jsx(ve,{onChangeLogo:o})]})]})})},Me=()=>{const{formatMessage:a}=v();return e.jsxs(R.Root,{variant:"simple",defaultValue:"computer",children:[e.jsx(x,{paddingLeft:8,paddingRight:8,children:e.jsxs(R.List,{"aria-label":a({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),children:[e.jsx(R.Trigger,{value:"computer",children:a({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})}),e.jsx(R.Trigger,{value:"url",children:a({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"})})]})}),e.jsx(R.Content,{value:"computer",children:e.jsx(Ie,{})}),e.jsx(R.Content,{value:"url",children:e.jsx(be,{})})]})},be=()=>{const{formatMessage:a}=v(),[t,i]=h.useState(""),[g,s]=h.useState(),{setLocalImage:o,goToStep:l,onClose:r}=T("URLForm"),d=c=>{i(c.target.value)},f=async c=>{c.preventDefault();const j=new FormData(c.target).get("logo-url");if(j)try{const p=await H.get(j.toString(),{responseType:"blob",timeout:8e3}),S=new File([p.data],p.config.url??"",{type:p.headers["content-type"]}),C=await W(S);o(C),l("pending")}catch(p){if(p instanceof je)s(a({id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"}));else if(p instanceof A)s(a(p.displayMessage,{size:E,dimension:y}));else throw p}};return e.jsxs("form",{onSubmit:f,children:[e.jsx(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:e.jsxs(L.Root,{error:g,name:"logo-url",children:[e.jsx(L.Label,{children:a({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"})}),e.jsx(ne,{onChange:d,value:t}),e.jsx(L.Error,{})]})}),e.jsxs(m.Footer,{children:[e.jsx(I,{onClick:r,variant:"tertiary",children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(I,{type:"submit",children:a({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"})})]})]})},Ie=()=>{const{formatMessage:a}=v(),[t,i]=h.useState(!1),[g,s]=h.useState(),o=h.useRef(null),l=h.useId(),{setLocalImage:r,goToStep:d,onClose:f}=T("ComputerForm"),c=()=>{i(!0)},M=()=>{i(!1)},j=S=>{S.preventDefault(),o.current.click()},p=async()=>{if(M(),!o.current.files)return;const[S]=o.current.files;try{const C=await W(S);r(C),d("pending")}catch(C){if(C instanceof A)s(a(C.displayMessage,{size:E,dimension:y})),o.current.focus();else throw C}};return e.jsxs(e.Fragment,{children:[e.jsx("form",{children:e.jsx(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:e.jsx(L.Root,{name:l,error:g,children:e.jsxs(b,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsxs(b,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:t?"primary100":"neutral100",borderColor:t?"primary500":g?"danger600":"neutral300",borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:c,onDragLeave:M,children:[e.jsx(le,{fill:"primary600",width:"6rem",height:"6rem","aria-hidden":!0}),e.jsx(x,{paddingTop:3,paddingBottom:5,children:e.jsx(u,{variant:"delta",tag:"label",htmlFor:l,children:a({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"})})}),e.jsx(x,{position:"relative",children:e.jsx(ze,{accept:N.join(", "),type:"file",name:"files",tabIndex:-1,onChange:p,ref:o,id:l})}),e.jsx(I,{type:"button",onClick:j,children:a({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})}),e.jsx(x,{paddingTop:6,children:e.jsx(u,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:E,dimension:y})})})]}),e.jsx(L.Error,{})]})})})}),e.jsx(m.Footer,{children:e.jsx(I,{onClick:f,variant:"tertiary",children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})},ze=Z(L.Input)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,ve=({onChangeLogo:a})=>{const{formatMessage:t}=v(),{localImage:i,setLocalImage:g,goToStep:s,onClose:o}=T("PendingLogoDialog"),l=()=>{g(void 0),s("upload")},r=()=>{i&&a(i),o()};return e.jsxs(e.Fragment,{children:[e.jsx(m.Body,{children:e.jsxs(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:[e.jsxs(b,{justifyContent:"space-between",paddingBottom:6,children:[e.jsxs(b,{direction:"column",alignItems:"flex-start",children:[e.jsx(u,{variant:"pi",fontWeight:"bold",children:t({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})}),e.jsx(u,{variant:"pi",textColor:"neutral500",children:t({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"})})]}),e.jsx(I,{onClick:l,variant:"secondary",children:t({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"})})]}),e.jsx(x,{maxWidth:"18rem",children:i?.url?e.jsx(Re,{asset:i}):null})]})}),e.jsxs(m.Footer,{children:[e.jsx(m.Close,{children:e.jsx(I,{onClick:o,variant:"tertiary",children:t({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})})}),e.jsx(I,{onClick:r,children:t({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"})})]})]})},Re=({asset:a})=>{const{formatMessage:t}=v();return e.jsxs(re,{children:[e.jsx(de,{children:e.jsx(ce,{size:"S",src:a.url})}),e.jsxs(ge,{children:[e.jsxs(ue,{children:[e.jsx(pe,{children:a.name}),e.jsx(me,{children:`${a.ext?.toUpperCase()} - ${a.width}✕${a.height}`})]}),e.jsx(he,{children:t({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"})})]})]})},Le=()=>null,We=()=>{const{trackUsage:a}=X(),{formatMessage:t}=v(),{logos:i,updateProjectSettings:g}=J("ApplicationInfoPage"),[s,o]=h.useState({menu:i.menu,auth:i.auth}),{settings:l}=Q(fe),r=w("ApplicationInfoPage",n=>n.communityEdition),d=w("ApplicationInfoPage",n=>n.latestStrapiReleaseTag),f=w("ApplicationInfoPage",n=>n.nodeVersion),c=w("ApplicationInfoPage",n=>n.shouldUpdateStrapi),M=w("ApplicationInfoPage",n=>n.strapiVersion),j=Y(Le,async()=>(await xe(()=>import("./AdminSeatInfo-CfbjPdSS-jdO-bOt4.js"),__vite__mapDeps([0,1,2,3]))).AdminSeatInfoEE),{allowedActions:{canRead:p,canUpdate:S}}=q(l?l["project-settings"]:{}),C=n=>{n.preventDefault(),g({authLogo:s.auth.custom??null,menuLogo:s.menu.custom??null})},D=n=>k=>{k===null&&a("didClickResetLogo",{logo:n}),o(B=>({...B,[n]:{...B[n],custom:k}}))};if(h.useEffect(()=>{o({menu:i.menu,auth:i.auth})},[i]),!j)return null;const G=s.auth.custom===i.auth.custom&&s.menu.custom===i.menu.custom;return e.jsxs(F.Root,{children:[e.jsx(P.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:t({id:"Settings.application.header",defaultMessage:"Application"})})}),e.jsx(P.Main,{children:e.jsxs("form",{onSubmit:C,children:[e.jsx(F.Header,{title:t({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:t({id:"Settings.application.description",defaultMessage:"Administration panel’s global information"}),primaryAction:S&&e.jsx(I,{disabled:G,type:"submit",startIcon:e.jsx(ee,{}),children:t({id:"global.save",defaultMessage:"Save"})})}),e.jsx(F.Content,{children:e.jsxs(b,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsxs(b,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[e.jsx(u,{variant:"delta",tag:"h3",children:t({id:"global.details",defaultMessage:"Details"})}),e.jsxs(z.Root,{gap:5,tag:"dl",children:[e.jsxs(z.Item,{col:6,s:12,direction:"column",alignItems:"start",children:[e.jsx(u,{variant:"sigma",textColor:"neutral600",tag:"dt",children:t({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})}),e.jsxs(b,{gap:3,direction:"column",alignItems:"start",tag:"dd",children:[e.jsxs(u,{children:["v",M]}),c&&e.jsx(U,{href:`https://github.com/strapi/strapi/releases/tag/${d}`,endIcon:e.jsx(_,{}),children:t({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})})]})]}),e.jsxs(z.Item,{col:6,s:12,direction:"column",alignItems:"start",children:[e.jsx(u,{variant:"sigma",textColor:"neutral600",tag:"dt",children:t({id:"Settings.application.edition-title",defaultMessage:"current plan"})}),e.jsxs(b,{gap:3,direction:"column",alignItems:"start",tag:"dd",children:[e.jsx(u,{children:t({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:r})}),e.jsx(U,{href:"https://strapi.io/pricing-self-hosted",endIcon:e.jsx(_,{}),children:t({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})})]})]}),e.jsxs(z.Item,{col:6,s:12,direction:"column",alignItems:"start",children:[e.jsx(u,{variant:"sigma",textColor:"neutral600",tag:"dt",children:t({id:"Settings.application.node-version",defaultMessage:"node version"})}),e.jsx(u,{tag:"dd",children:f})]}),e.jsx(j,{})]})]}),p&&e.jsxs(x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[e.jsx(u,{variant:"delta",tag:"h3",children:t({id:"Settings.application.customization",defaultMessage:"Customization"})}),e.jsx(u,{variant:"pi",textColor:"neutral600",children:t({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}×{dimension}, Max file size: {size}KB"},{dimension:y,size:E})}),e.jsxs(z.Root,{paddingTop:4,gap:4,children:[e.jsx(z.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(V,{canUpdate:S,customLogo:s.menu.custom,defaultLogo:s.menu.default,hint:t({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:t({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:D("menu")})}),e.jsx(z.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(V,{canUpdate:S,customLogo:s.auth.custom,defaultLogo:s.auth.default,hint:t({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:t({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:D("auth")})})]})]})]})})]})})]})};export{We as ApplicationInfoPage};
