import{d as N,aJ as H,ap as Y,u as O,bZ as Q,r as m,j as e,P as k,eC as T,b8 as D,b as G,ck as U,B as w,F as y,au as q,T as _,I as E,bi as K,eY as A,cH as V,bV as Z,cj as J,aO as X,eL as ee,fg as te,s as se,cn as ne,co as ae,cp as ie,cq as re,a4 as oe,bw as P,n as le,cl as ce,Y as ue,q as de,c3 as pe,fb as ge,fh as he,fi as fe,cu as me,eF as ye,eQ as Te}from"./strapi-eHtn4eBx.js";import{C as xe}from"./CardDragPreview-DOxamsuj-DvNMKlTc.js";import{F as je,L as Le,D as be}from"./Relations-DinMQJ4B-DF8d96M2.js";import{u as v,a as Se}from"./hooks-E5u1mcgM-m3DDbO_2.js";import{I as S}from"./useDragAndDrop-DJ6jqvZN-CHh7Gjdy.js";import{u as Ce}from"./useDragLayer-BC8S9e80.js";import"./relations-Boc5Y9kX-DtowGUTH.js";import"./getEmptyImage-CjqolaH3.js";function Ie(s,a,n){if(!s||!a||!n)return{display:"none"};const{x:t,y:p}=n;return{transform:`translate(${t}px, ${p}px)`}}const we=({renderItem:s})=>{const{itemType:a,isDragging:n,item:t,initialOffset:p,currentOffset:l,mouseOffset:g}=Ce(i=>({item:i.getItem(),itemType:i.getItemType(),initialOffset:i.getInitialSourceClientOffset(),currentOffset:i.getSourceClientOffset(),isDragging:i.isDragging(),mouseOffset:i.getClientOffset()}));return n?e.jsx(w,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:e.jsx(w,{style:Ie(p,l,g),children:s({type:a,item:t})})}):null},Me=({displayedValue:s})=>e.jsxs(y,{background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:3,padding:3,width:"30rem",children:[e.jsx(De,{type:"button",children:e.jsxs(y,{gap:6,children:[e.jsx(ke,{alignItems:"center",justifyContent:"center",background:"neutral200",height:"3.2rem",width:"3.2rem",children:e.jsx(q,{})}),e.jsx(y,{maxWidth:"15rem",children:e.jsx(_,{textColor:"neutral700",ellipsis:!0,children:s})})]})}),e.jsxs(y,{gap:2,children:[e.jsx(E,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(K,{})}),e.jsx(E,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(A,{})})]})]}),ke=N(y)`
  border-radius: 50%;

  svg {
    height: 0.6rem;
    width: 1.1rem;
    > path {
      fill: ${({theme:s})=>s.colors.neutral600};
    }
  }
`,De=N.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`,Ee=({status:s,displayedValue:a,width:n})=>e.jsx(w,{style:{width:n},children:e.jsxs(y,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderWidth:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:4,children:[e.jsxs(je,{gap:1,children:[e.jsx(E,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(A,{})}),e.jsxs(y,{width:"100%",minWidth:0,justifyContent:"space-between",children:[e.jsx(w,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4,children:e.jsx(Le,{href:"",children:e.jsx(_,{textColor:"primary600",ellipsis:!0,children:a})})}),s?e.jsx(V,{status:s}):null]})]}),e.jsx(be,{type:"button",children:e.jsx(Z,{width:"12px"})})]})}),Pe=N(J)`
  div {
    width: inherit;
    span:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: inherit;
    }
  }
`,ve=()=>{const[s,a]=m.useState(""),[{query:n}]=X(),{formatMessage:t,locale:p}=O(),l=v(o=>o["content-manager"].app.collectionTypeLinks),g=v(o=>o["content-manager"].app.singleTypeLinks),{schemas:i}=ee(),{startsWith:r}=te(p,{sensitivity:"base"}),c=se(p,{sensitivity:"base"}),x=m.useMemo(()=>[{id:"collectionTypes",title:t({id:T("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"}),searchable:!0,links:l},{id:"singleTypes",title:t({id:T("components.LeftMenu.single-types"),defaultMessage:"Single Types"}),searchable:!0,links:g}].map(o=>({...o,links:o.links.filter(u=>r(u.title,s)).sort((u,j)=>c.compare(u.title,j.title)).map(u=>({...u,title:t({id:u.title,defaultMessage:u.title})}))})),[l,s,g,r,t,c]),d=()=>{a("")},h=({target:{value:o}})=>{a(o)},C=t({id:T("header.name"),defaultMessage:"Content Manager"}),M=o=>{const j=!!i.find(L=>L.uid===o.uid)?.pluginOptions?.i18n?.localized;if(n.plugins&&"i18n"in n.plugins){const{i18n:L,...I}=n.plugins;return j?{i18n:L,...I}:I}return n.plugins};return e.jsxs(ne,{"aria-label":C,children:[e.jsx(ae,{label:C,searchable:!0,value:s,onChange:h,onClear:d,searchLabel:t({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),e.jsx(ie,{children:x.map(o=>e.jsx(re,{label:o.title,badgeLabel:o.links.length.toString(),children:o.links.map(u=>e.jsx(Pe,{tag:oe,to:{pathname:u.to,search:P.stringify({...P.parse(u.search??""),plugins:M(u)})},width:"100%",children:u.title},u.uid))},o.id))})]})},{MUTATE_COLLECTION_TYPES_LINKS:Ne,MUTATE_SINGLE_TYPES_LINKS:Oe}=Te,Fe=()=>{const{toggleNotification:s}=le(),a=Se(),n=ce("useContentManagerInitData",d=>d.runHookWaterfall),{notifyStatus:t}=ue(),{formatMessage:p}=O(),{_unstableFormatAPIError:l}=de(T),g=pe("useContentManagerInitData",d=>d.checkUserHasPermissions),i=v(d=>d["content-manager"].app),r=ge(void 0,{refetchOnMountOrArgChange:!0});m.useEffect(()=>{r.data&&t(p({id:T("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}))},[p,r.data,t]),m.useEffect(()=>{r.error&&s({type:"danger",message:l(r.error)})},[l,r.error,s]);const c=he();m.useEffect(()=>{c.error&&s({type:"danger",message:l(c.error)})},[l,c.error,s]);const x=async(d,h,C,M)=>{const{collectionType:o,singleType:u}=h.reduce((f,b)=>(f[b.kind].push(b),f),{collectionType:[],singleType:[]}),j=F(o,"collectionTypes",M),L=F(u,"singleTypes"),I=await Promise.all(j.map(({permissions:f})=>g(f))),R=j.filter((f,b)=>I[b].length>0),$=await Promise.all(L.map(({permissions:f})=>g(f))),z=L.filter((f,b)=>$[b].length>0),{ctLinks:B}=n(Ne,{ctLinks:R,models:h}),{stLinks:W}=n(Oe,{stLinks:z,models:h});a(fe({authorizedCollectionTypeLinks:B,authorizedSingleTypeLinks:W,components:d,contentTypeSchemas:h,fieldSizes:C}))};return m.useEffect(()=>{r.data&&c.data&&x(r.data.components,r.data.contentTypes,r.data.fieldSizes,c.data)},[r.data,c.data]),{...i}},F=(s,a,n=[])=>s.filter(t=>t.isDisplayed).map(t=>{const p=[{action:"plugin::content-manager.explorer.create",subject:t.uid},{action:"plugin::content-manager.explorer.read",subject:t.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:t.uid}],g=a==="collectionTypes"?p:l,i=n.find(({uid:c})=>c===t.uid);let r=null;if(i){const c={page:1,pageSize:i.settings.pageSize,sort:`${i.settings.defaultSortBy}:${i.settings.defaultSortOrder}`};r=P.stringify(c,{encode:!1})}return{permissions:g,search:r,kind:t.kind,title:t.info.displayName,to:`/content-manager/${t.kind==="collectionType"?me:ye}/${t.uid}`,uid:t.uid,name:t.uid,isDisplayed:t.isDisplayed}}),Qe=()=>{const s=H("/content-manager/:kind/:uid/*"),{isLoading:a,collectionTypeLinks:n,models:t,singleTypeLinks:p}=Fe(),l=[...n,...p].sort((d,h)=>d.title.localeCompare(h.title)),{pathname:g}=Y(),{formatMessage:i}=O(),r=Q("Layout",d=>d.startSection),c=m.useRef(r);if(m.useEffect(()=>{c.current&&c.current("contentManager")},[]),a)return e.jsxs(e.Fragment,{children:[e.jsx(k.Title,{children:i({id:T("plugin.name"),defaultMessage:"Content Manager"})}),e.jsx(k.Loading,{})]});const x=t.filter(({isDisplayed:d})=>d);return l.length===0&&x.length>0&&g!=="/content-manager/403"?e.jsx(D,{to:"/403"}):x.length===0&&g!=="/no-content-types"?e.jsx(D,{to:"/no-content-types"}):!s&&l.length>0?e.jsx(D,{to:{pathname:l[0].to,search:l[0].search??""},replace:!0}):e.jsxs(e.Fragment,{children:[e.jsx(k.Title,{children:i({id:T("plugin.name"),defaultMessage:"Content Manager"})}),e.jsxs(G.Root,{sideNav:e.jsx(ve,{}),children:[e.jsx(we,{renderItem:_e}),e.jsx(U,{})]})]})};function _e({type:s,item:a}){if(!s||s&&typeof s!="string")return null;const[n]=s.split("_");switch(n){case S.EDIT_FIELD:case S.FIELD:return e.jsx(xe,{label:a.label});case S.COMPONENT:case S.DYNAMIC_ZONE:return e.jsx(Me,{displayedValue:a.displayedValue});case S.RELATION:return e.jsx(Ee,{...a});default:return null}}export{Qe as Layout};
