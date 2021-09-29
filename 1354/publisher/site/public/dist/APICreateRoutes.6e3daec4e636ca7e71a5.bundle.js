(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{3733:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(53),o=a(52),c=a(17),l=a.n(c),s=a(671),p=a(508),u=a(1315),m=a(13),d=a(1316),f=a(123),E=a(530),g=a(1449),h=a(518),b=a(595),P=a(702),v=a(510);function y(e){const{title:t,children:a}=e;return r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12}),r.a.createElement(u.a,{item:!0,sm:0,md:3}),r.a.createElement(u.a,{item:!0,sm:12,md:6},r.a.createElement(u.a,{container:!0,spacing:5},r.a.createElement(u.a,{item:!0,md:12},t),r.a.createElement(u.a,{item:!0,xs:12,md:12},r.a.createElement(v.a,{elevation:0},a)))))}y.propTypes={title:l.a.element.isRequired,children:l.a.element.isRequired};var A=a(1434),C=a(1453),O=a(1413),w=a(1450),x=a(1967),I=a(506),j=a(644),S=a.n(j),D=a(621),L=a(1686);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach(function(t){M(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function M(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const T=Object(I.a)(e=>({mandatoryStar:{color:e.palette.error.main,marginLeft:e.spacing(.1)},helperTextContext:{"& p":{textOverflow:"ellipsis",width:400,display:"block",whiteSpace:"nowrap",overflow:"hidden"}},endpointValidChip:{color:"green",border:"1px solid green"},endpointInvalidChip:{color:"#ffd53a",border:"1px solid #ffd53a"},endpointErrorChip:{color:"red",border:"1px solid red"},iconButton:{padding:e.spacing(1)},iconButtonValid:{padding:e.spacing(1),color:S.a[500]}}));function R(e){let{context:t,version:a}=e,n="{context}/{version}";return t&&(n=t,t.indexOf("{version}")<0&&(n=t+"/{version}")),a&&(n=n.replace("{version}",a)),n}function F(e){const{onChange:t,onValidate:a,api:i,isAPIProduct:o,isWebSocket:c}=e,l=T(),[s,d]=Object(n.useState)({}),[f,E]=Object(n.useState)(),[b,P]=Object(n.useState)(""),[v,y]=Object(n.useState)(!1),[I,j]=Object(n.useState)(!1);Object(n.useEffect)(()=>{a(Boolean(i.name)&&(o||Boolean(i.version))&&Boolean(i.context)&&Boolean(i.policies))},[]);const S=e=>{let t=Object.entries(e).length>0&&Object.entries(e).map(e=>{let[,t]=e;return null==t}).reduce((e,t)=>e&&t);t=t&&Boolean(i.name)&&(o||Boolean(i.version))&&Boolean(i.context)&&(!o||null===e.policy),a(t,s),d(e)};function V(e,t){switch(e){case"name":{const a=D.a.apiName.required().validate(t,{abortEarly:!1}).error;null===a?D.a.apiParameter.validate(e+":"+t).then(e=>{e.body.list.length>0&&t.toLowerCase()===e.body.list[0].name.toLowerCase()?S(k({},s,{name:{details:[{message:"Name "+t+" already exists"}]}})):S(k({},s,{name:a}))}):S(k({},s,{name:a}));break}case"context":{const a=D.a.apiContext.required().validate(t,{abortEarly:!1}).error,n=t.includes("/")?t:"/"+t;null===a?D.a.apiParameter.validate(e+":"+n).then(e=>{e.body.list.length>0&&function(e,t){const a=e.includes("/")?e.toLowerCase():"/"+e.toLowerCase();return a==="/"+t.toLowerCase().slice(t.toLowerCase().lastIndexOf("/")+1)||a===t.toLowerCase()}(t,e.body.list[0].context)?S(k({},s,{context:{details:[{message:n+" context already exists"}]}})):S(k({},s,{context:a,version:null}))}):S(k({},s,{context:a}));break}case"version":{const e=D.a.apiVersion.required().validate(t).error;if(null===e){const a=i.context.includes("/")?i.context+"/"+t:"/"+i.context+"/"+t;D.a.apiParameter.validate("context:"+i.context+"/"+t).then(n=>{n.body.list.length>0&&(void 0!==n.body.list[0].version&&n.body.list[0].version.toLowerCase()===t.toLowerCase()||"1.0.0"===t)?S(k({},s,{version:{message:a+" context with version already exists"}})):S(k({},s,{version:e}))})}else S(k({},s,{version:e}));break}case"policies":{const e=t&&t.length>0;S(k({},s,{policy:e||!o?null:{message:"Need to select at least one policy to create an API Product"}}));break}}}return r.a.createElement(u.a,{item:!0,md:11},r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(A.a,{autoFocus:!0,fullWidth:!0,id:"api-name",error:Boolean(s.name),label:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{id:"Apis.Create.Components.DefaultAPIForm.name",defaultMessage:"Name"}),r.a.createElement("sup",{className:l.mandatoryStar},"*")),helperText:s.name&&s.name.details.map((e,t)=>r.a.createElement("div",{style:{marginTop:0!==t&&"10px"}},e.message)),value:i.name,name:"name",onChange:t,InputProps:{id:"itest-id-apiname-input",onBlur:e=>{let{target:{value:t}}=e;V("name",t)}},InputLabelProps:{for:"itest-id-apiname-input"},margin:"normal",variant:"outlined"}),r.a.createElement(u.a,{container:!0,spacing:2},o?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{item:!0,md:12},r.a.createElement(A.a,{fullWidth:!0,id:"context",error:Boolean(s.context),label:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{id:"Apis.Create.Components.DefaultAPIForm.api.product.context",defaultMessage:"Context"}),r.a.createElement("sup",{className:l.mandatoryStar},"*")),name:"context",value:i.context,onChange:t,InputProps:{onBlur:e=>{let{target:{value:t}}=e;V("context",t)}},helperText:s.context&&s.context.details.map((e,t)=>r.a.createElement("div",{style:{marginTop:0!==t&&"10px"}},e.message))||"API Product will be exposed in ".concat(R(i)," context at the gateway"),margin:"normal",variant:"outlined"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{item:!0,md:8,xs:6},r.a.createElement(A.a,{fullWidth:!0,id:"context",error:Boolean(s.context),label:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{id:"Apis.Create.Components.DefaultAPIForm.api.context",defaultMessage:"Context"}),r.a.createElement("sup",{className:l.mandatoryStar},"*")),name:"context",value:i.context,onChange:t,InputProps:{id:"itest-id-apicontext-input",onBlur:e=>{let{target:{value:t}}=e;V("context",t)}},InputLabelProps:{for:"itest-id-apicontext-input"},helperText:s.context&&s.context.details.map((e,t)=>r.a.createElement("div",{style:{marginTop:0!==t&&"10px"}},e.message))||"API will be exposed in ".concat(R(i)," context at the gateway"),classes:{root:l.helperTextContext},margin:"normal",variant:"outlined"})),r.a.createElement(u.a,{item:!0,md:4,xs:6},r.a.createElement(A.a,{fullWidth:!0,id:"version",error:Boolean(s.version),label:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{id:"Apis.Create.Components.DefaultAPIForm.version",defaultMessage:"Version"}),r.a.createElement("sup",{className:l.mandatoryStar},"*")),name:"version",value:i.version,onChange:t,InputProps:{id:"itest-id-apiversion-input",onBlur:e=>{let{target:{value:t}}=e;V("version",t)}},InputLabelProps:{for:"itest-id-apiversion-input"},helperText:s.version&&s.version.message,margin:"normal",variant:"outlined"})))),!o&&r.a.createElement(A.a,{fullWidth:!0,id:"itest-id-apiendpoint-input",label:"Endpoint",name:"endpoint",value:i.endpoint,onChange:t,helperText:s.endpointURL&&r.a.createElement("span",null,"Enter a valid",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://tools.ietf.org/html/rfc3986"},"RFC 3986")," ","URI"),error:Boolean(s.endpointURL),margin:"normal",variant:"outlined",InputProps:{endAdornment:r.a.createElement(C.a,{position:"end"},b&&r.a.createElement(x.a,{label:b,className:f?l.endpointValidChip:((e,t,a)=>e?t:a)(I,l.endpointErrorChip,l.endpointInvalidChip),variant:"outlined"}),!c&&r.a.createElement(O.a,{className:f?l.iconButtonValid:l.iconButton,"aria-label":"TestEndpoint",onClick:()=>(function(e){y(!0),(new h.a).testEndpoint(e).then(e=>{null!==e.body.error?(P(e.body.error),j(!0)):(P(e.body.statusCode+" "+e.body.statusMessage),j(!1)),e.body.statusCode>=200&&e.body.statusCode<300?(E(!0),j(!1)):E(!1)}).finally(()=>{y(!1)})})(i.endpoint),disabled:v},v?r.a.createElement(g.a,{size:20}):r.a.createElement(w.a,null,"check_circle")))}}),r.a.createElement(L.a,{policies:i.policies,isAPIProduct:o,onChange:t,validate:V,isValid:s.policies})),r.a.createElement(u.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center"},r.a.createElement(u.a,{item:!0},r.a.createElement(p.a,{variant:"caption",display:"block",gutterBottom:!0},r.a.createElement("sup",{style:{color:"red"}},"*")," ","Mandatory fields"))))}F.defaultProps={onValidate:()=>{},api:{},isWebSocket:!1},F.propTypes={api:l.a.shape({}),isAPIProduct:l.a.shape({}).isRequired,isWebSocket:l.a.shape({}),onChange:l.a.func.isRequired,onValidate:l.a.func};var W=a(614),B=a(69);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function G(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function N(e){const{isWebSocket:t,isAPIProduct:a,history:i,intl:o}=e,{settings:c}=Object(b.c)(),[l,s]=Object(n.useState)(null),[v,A]=Object(n.useState)(),[C,O]=Object(n.useState)(!1);const[w,x]=Object(n.useReducer)(function(e,t){const{action:a,value:n}=t;switch(a){case"name":case"version":case"endpoint":case"context":case"policies":case"isFormValid":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){G(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{[a]:n});default:return e}},{formValidity:!1}),I=w.endpoint&&w.policies&&0!==w.policies.length,j=!(w.name&&w.version&&w.context)||v||C;function S(){A(!0);const{name:e,version:n,context:r,endpoint:o,policies:l}=w;let p;const u={name:e,version:n,context:r,policies:l};if(o&&(u.endpointConfig={endpoint_type:"http",sandbox_endpoints:{url:o},production_endpoints:{url:o}}),u.gatewayEnvironments=c.environment.map(e=>e.name),t&&(u.type="WS"),a){p=new W.a(u).saveProduct(u).then(e=>(E.a.info("API Product created successfully"),i.push("/api-products/".concat(e.id,"/overview")),e)).catch(e=>{if(e.response)E.a.error(e.response.body.description),s(e.response.body);else{const e="Something went wrong while adding the API Product";E.a.error(e),s(e)}console.error(e)})}else{p=new h.a(u).save().then(e=>(E.a.info("API created successfully"),e)).catch(e=>{if(e.response)E.a.error(e.response.body.description),s(e.response.body);else{const e="Something went wrong while adding the API";E.a.error(e),s(e)}console.error(e),O(!1)}).finally(()=>{A(!1)})}return p.finally(()=>A(!1))}let D=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h5",component:"h1"},r.a.createElement(m.a,{id:"Apis.Create.Default.APICreateDefault.api.heading",defaultMessage:"Create an API"})),r.a.createElement(p.a,{variant:"caption"},r.a.createElement(m.a,{id:"Apis.Create.Default.APICreateDefault.api.sub.heading",defaultMessage:"Create an API by providing a Name, a Version, a Context, Backend Endpoint(s) (optional), and Business Plans (optional)."})));return a?D=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h5",component:"h1"},r.a.createElement(m.a,{id:"Apis.Create.Default.APICreateDefault.apiProduct.heading",defaultMessage:"Create an API Product"})),r.a.createElement(p.a,{variant:"caption"},r.a.createElement(m.a,{id:"Apis.Create.Default.APICreateDefault.apiProduct.sub.heading",defaultMessage:"Create an API Product by providing a Name, a Context, and Business Plans (optional)."}))):t&&(D=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h5",component:"h1"},r.a.createElement(m.a,{id:"Apis.Create.Default.APICreateDefault.webSocket.heading",defaultMessage:"Create a WebSocket API"})),r.a.createElement(p.a,{variant:"caption"},r.a.createElement(m.a,{id:"Apis.Create.Default.APICreateDefault.webSocket.sub.heading",defaultMessage:"Create a WebSocket API by providing a Name, a Context, and Business Plans (optional)."})))),r.a.createElement(y,{title:D},r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3},l&&r.a.createElement(u.a,{item:!0,xs:11},r.a.createElement(P.a,{onClose:()=>s(null),disableActions:!0,dense:!0,paperProps:{elevation:1},type:"error",message:l})),r.a.createElement(u.a,{item:!0,xs:12}),r.a.createElement(u.a,{item:!0,md:1,xs:0}),r.a.createElement(u.a,{item:!0,md:11,xs:12},r.a.createElement(F,{onValidate:function(e){x({action:"isFormValid",value:e})},onChange:function(e){const{name:t,value:a}=e.target;x({action:t,value:a})},api:w,isAPIProduct:a,isWebSocket:t})),r.a.createElement(u.a,{item:!0,md:1,xs:0}),r.a.createElement(u.a,{item:!0,md:11,xs:12},r.a.createElement(u.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2},r.a.createElement(u.a,{item:!0},r.a.createElement(d.a,{variant:"contained",color:"primary",disabled:j||!w.isFormValid,onClick:function(){S().then(e=>{i.push("/apis/".concat(e.id,"/overview"))})}},"Create"," ",v&&!C&&r.a.createElement(g.a,{size:24}))),!B.a.isNotPublisher()&&r.a.createElement(u.a,{item:!0},r.a.createElement(d.a,{id:"itest-id-apicreatedefault-createnpublish",variant:"contained",color:"primary",disabled:!I||j||!w.isFormValid,onClick:function(){O(!0),S().then(e=>e.publish().then(t=>{const{workflowStatus:a}=t.body;a===N.WORKFLOW_STATUS.CREATED?E.a.info(o.formatMessage({id:"Apis.Create.Default.APICreateDefault.success.publishStatus",defaultMessage:"Lifecycle state change request has been sent"})):E.a.info(o.formatMessage({id:"Apis.Create.Default.APICreateDefault.success.otherStatus",defaultMessage:"API updated successfully"})),i.push("/apis/".concat(e.id,"/overview"))}).catch(e=>{if(e.response)E.a.error(e.response.body.description),s(e.response.body);else{const e="Something went wrong while publishing the API";E.a.error(o.formatMessage({id:"Apis.Create.Default.APICreateDefault.error.errorMessage",defaultMessage:e})),s(e)}console.error(e)}).finally(()=>{O(!1)}))}},!C&&"Create & Publish",C&&r.a.createElement(g.a,{size:24}),v&&C&&"Creating API . . .",!v&&C&&"Publishing API . . .")),r.a.createElement(u.a,{item:!0},r.a.createElement(f.b,{to:"/apis/"},r.a.createElement(d.a,{variant:"text"},r.a.createElement(m.a,{id:"Apis.Create.Default.APICreateDefault.cancel",defaultMessage:"Cancel"}))))))))}N.defaultProps={isWebSocket:!1,isAPIProduct:!1},N.WORKFLOW_STATUS={CREATED:"CREATED"},N.propTypes={history:l.a.shape({push:l.a.func}).isRequired,isAPIProduct:l.a.shape({}),isWebSocket:l.a.shape({}),intl:l.a.shape({formatMessage:l.a.func}).isRequired};var q=Object(i.withRouter)(Object(m.d)(N)),_=a(504),z=a(1496),U=a(1493),J=a(1494);function $(e){const{title:t,children:a}=e;return r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,sm:12,md:12}),r.a.createElement(u.a,{item:!0,sm:0,md:2}),r.a.createElement(u.a,{item:!0,sm:12,md:8},r.a.createElement(u.a,{container:!0,spacing:5},r.a.createElement(u.a,{item:!0,md:12},t),r.a.createElement(u.a,{item:!0,md:12},r.a.createElement(v.a,{elevation:0},a)))),r.a.createElement(u.a,{item:!0,sm:0,md:2}))}$.propTypes={title:l.a.element.isRequired,children:l.a.element.isRequired};var K=a(1964);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach(function(t){Y(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Z=Object(I.a)(e=>({Paper:{height:"40px"},saveButton:{padding:"0px 0px 0px 10px"},titleWrapper:{display:"flex",flexDirection:"row",alignItems:"center",paddingBottom:e.spacing(2)},buttonWrapper:{marginTop:e.spacing(4)},alternativeLabel:{marginTop:e.spacing(1)}}));function ee(e){const{history:t}=e,[a,i]=Object(n.useState)(0),[o,c]=Object(n.useState)([]),{settings:l}=Object(b.c)(),s=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h5",component:"h1"},r.a.createElement(m.a,{id:"Apis.Create.APIProduct.APIProductCreateWrapper.heading",defaultMessage:"Create an API Product"})),r.a.createElement(p.a,{variant:"caption"},r.a.createElement(m.a,{id:"Apis.Create.APIProduct.APIProductCreateWrapper.sub.heading",defaultMessage:"Create an API Product by providing a Name, a Context, Resources, and Business Plans (optional)."})));const[h,P]=Object(n.useReducer)(function(e,t){const{action:a,value:n}=t;switch(a){case"type":case"name":case"context":case"version":case"policies":case"isFormValid":case"apiResources":return X({},e,{[a]:n});case"preSetAPI":return X({},e,{name:n.name.replace(/[&\/\\#,+()$~%.'":*?<>{}\s]/g,""),context:n.context});default:return e}},{type:"ApiProductCreateWrapper",inputValue:"",formValidity:!1});const[v,y]=Object(n.useState)(),[A,C]=Object(n.useState)(),O=Z(),w=[r.a.createElement(m.a,{variant:"caption",id:"Apis.Create.APIProduct.APIProductCreateWrapper.defineProvide",defaultMessage:"Define API Product"}),r.a.createElement(m.a,{variant:"caption",id:"Apis.Create.APIProduct.APIProductCreateWrapper.resources",defaultMessage:"Add Resources"})];return r.a.createElement(r.a.Fragment,null,r.a.createElement($,{title:s},r.a.createElement(_.a,null,0===a&&r.a.createElement(z.a,{alternativeLabel:!0,activeStep:0},w.map(e=>r.a.createElement(U.a,{key:e},r.a.createElement(J.a,{className:O.alternativeLabel},e)))),1===a&&r.a.createElement(z.a,{alternativeLabel:!0,activeStep:1},w.map(e=>r.a.createElement(U.a,{key:e},r.a.createElement(J.a,null,e))))),r.a.createElement(u.a,{container:!0,spacing:2},0===a&&r.a.createElement(u.a,{item:!0,md:12}),0===a&&r.a.createElement(u.a,{item:!0,md:1}),r.a.createElement(u.a,{item:!0,md:0===a?11:12},0===a&&r.a.createElement(F,{onValidate:function(e){P({action:"isFormValid",value:e})},onChange:function(e){const{name:t,value:a}=e.target;P({action:t,value:a})},api:h,isAPIProduct:!0}),1===a&&r.a.createElement(K.a,{apiResources:o,setApiResources:c,isStateCreate:!0,api:h})),0===a&&r.a.createElement(u.a,{item:!0,md:1}),r.a.createElement(u.a,{item:!0,md:9},r.a.createElement(u.a,{className:1===a&&O.saveButton,container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2},r.a.createElement(u.a,{item:!0},1===a&&r.a.createElement(d.a,{onClick:()=>i(e=>e-1)},r.a.createElement(m.a,{id:"Apis.Create.APIProduct.APIProductCreateWrapper.back",defaultMessage:"Back"})),0===a&&r.a.createElement(f.b,{to:"/apis/"},r.a.createElement(d.a,null,r.a.createElement(m.a,{id:"Apis.Create.APIProduct.APIProductCreateWrapper.cancel",defaultMessage:"Cancel"})))),r.a.createElement(u.a,{item:!0},1===a&&r.a.createElement(d.a,{variant:"contained",color:"primary",disabled:!h.isFormValid||v||0===o.length,onClick:()=>{y(!0);const{name:e,context:a,policies:n}=h,r={name:e,context:a,policies:n,apis:o,state:"CREATED"};r.gatewayEnvironments=l.environment.map(e=>e.name),r.transport=["http","https"],new W.a(r).saveProduct(r).then(e=>{E.a.info("API Product created successfully"),t.push("/api-products/".concat(e.id,"/overview"))}).catch(e=>{e.response?E.a.error(e.response.body.description):E.a.error("Something went wrong while adding the API Product")}).finally(()=>y(!1))}},r.a.createElement(m.a,{id:"Apis.Create.APIProduct.APIProductCreateWrapper.create",defaultMessage:"Create"}),v&&r.a.createElement(g.a,{size:24}))),r.a.createElement(u.a,{item:!0},1===a&&r.a.createElement(d.a,{variant:"contained",color:"primary",disabled:!h.isFormValid||A||0===o.length,onClick:()=>{C(!0);const{name:e,context:a,policies:n}=h,r={name:e,context:a,policies:n,apis:o};r.gatewayEnvironments=l.environment.map(e=>e.name),r.transport=["http","https"],new W.a(r).saveProduct(r).then(e=>{E.a.info("API Product created successfully"),t.push("/api-products/".concat(e.id,"/overview"))}).catch(e=>{e.response?E.a.error(e.response.body.description):E.a.error("Something went wrong while adding the API Product")}).finally(()=>C(!1))}},r.a.createElement(m.a,{id:"Apis.Create.APIProduct.APIProductCreateWrapper.publish",defaultMessage:"Create & Publish"}),A&&r.a.createElement(g.a,{size:24})),0===a&&r.a.createElement(d.a,{onClick:()=>i(e=>e+1),variant:"contained",color:"primary",disabled:!h.isFormValid},r.a.createElement(m.a,{id:"Apis.Create.APIProduct.APIProductCreateWrapper.next",defaultMessage:"Next"}))))))))}ee.propTypes={history:l.a.shape({push:l.a.func}).isRequired};var te=a(1761);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(a,!0).forEach(function(t){re(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function re(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ie(e){const[t,a]=Object(n.useState)(0),{history:i}=e,{settings:o}=Object(b.c)();const[c,l]=Object(n.useReducer)(function(e,t){const{action:a,value:n}=t;switch(a){case"type":case"inputValue":case"name":case"version":case"endpoint":case"context":case"policies":case"isFormValid":return ne({},e,{[a]:n});case"inputType":return ne({},e,{[a]:n,inputValue:"url"===n?"":null});case"preSetAPI":return ne({},e,{name:n.name.replace(/[&\/\\#,+()$~%.'":*?<>{}\s]/g,""),version:n.version,context:n.context,endpoint:n.endpoints&&n.endpoints[0]});default:return e}},{type:"ApiCreateOpenAPI",inputType:"url",inputValue:"",formValidity:!1});function s(e){l({action:"isFormValid",value:e})}const[P,v]=Object(n.useState)();return r.a.createElement(y,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h5"},r.a.createElement(m.a,{id:"Apis.Create.OpenAPI.ApiCreateOpenAPI.heading",defaultMessage:"Create an API using an OpenAPI definition."})),r.a.createElement(p.a,{variant:"caption"},r.a.createElement(m.a,{id:"Apis.Create.OpenAPI.ApiCreateOpenAPI.sub.heading",defaultMessage:"Create an API using an existing OpenAPI definition file or URL."})))},r.a.createElement(_.a,null,r.a.createElement(z.a,{alternativeLabel:!0,activeStep:0},r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(m.a,{id:"Apis.Create.OpenAPI.ApiCreateOpenAPI.wizard.one",defaultMessage:"Provide OpenAPI"}))),r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(m.a,{id:"Apis.Create.OpenAPI.ApiCreateOpenAPI.wizard.two",defaultMessage:"Create API"}))))),r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12}),r.a.createElement(u.a,{item:!0,xs:1}),r.a.createElement(u.a,{item:!0,xs:11},0===t&&r.a.createElement(te.a,{onValidate:s,apiInputs:c,inputsDispatcher:l}),1===t&&r.a.createElement(F,{onValidate:s,onChange:function(e){const{name:t,value:a}=e.target;l({action:t,value:a})},api:c,isAPIProduct:!1})),r.a.createElement(u.a,{item:!0,xs:1}),r.a.createElement(u.a,{item:!0,xs:11},r.a.createElement(u.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2},r.a.createElement(u.a,{item:!0},0===t&&r.a.createElement(f.b,{to:"/apis/"},r.a.createElement(d.a,null,r.a.createElement(m.a,{id:"Apis.Create.OpenAPI.ApiCreateOpenAPI.cancel",defaultMessage:"Cancel"}))),1===t&&r.a.createElement(d.a,{onClick:()=>a(e=>e-1)},"Back")),r.a.createElement(u.a,{item:!0},0===t&&r.a.createElement(d.a,{onClick:()=>a(e=>e+1),variant:"contained",color:"primary",disabled:!c.isFormValid},"Next"),1===t&&r.a.createElement(d.a,{variant:"contained",color:"primary",disabled:!c.isFormValid||P,onClick:function(){v(!0);const{name:e,version:t,context:a,endpoint:n,policies:r,inputValue:l,inputType:s}=c,p={name:e,version:t,context:a,policies:r};n&&(p.endpointConfig={endpoint_type:"http",sandbox_endpoints:{url:n},production_endpoints:{url:n}}),p.gatewayEnvironments=Array.isArray(o.environment)&&o.environment.length>0?[o.environment[0].name]:[];const u=new h.a(p);("file"===s?u.importOpenAPIByFile(l):u.importOpenAPIByUrl(l)).then(e=>{E.a.info("API created successfully"),i.push("/apis/".concat(e.id,"/overview"))}).catch(e=>{e.response?E.a.error(e.response.body.description):E.a.error("Something went wrong while adding the API"),console.error(e)}).finally(()=>v(!1))}},"Create"," ",P&&r.a.createElement(g.a,{size:24})))))))}ie.propTypes={history:l.a.shape({push:l.a.func}).isRequired};var oe=a(1760),ce=a(1759);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach(function(t){pe(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function pe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ue(e){const[t,a]=Object(n.useState)(0),{history:i}=e,{settings:o}=Object(b.c)();const[c,l]=Object(n.useReducer)(function(e,t){const{action:a,value:n}=t;switch(a){case"type":case"inputValue":case"name":case"version":case"endpoint":case"context":case"policies":case"isFormValid":return se({},e,{[a]:n});case"inputType":return se({},e,{[a]:n,inputValue:"url"===n?"":null});default:return e}},{type:"SOAP",inputType:"url",inputValue:"",formValidity:!1,mode:"create"});function s(e){l({action:"isFormValid",value:e})}const[h,P]=Object(n.useState)();return r.a.createElement(y,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h5"},r.a.createElement(m.a,{id:"Apis.Create.WSDL.ApiCreateWSDL.heading",defaultMessage:"Expose a SOAP Service as a REST API"})),r.a.createElement(p.a,{variant:"caption"},r.a.createElement(m.a,{id:"Apis.Create.WSDL.ApiCreateWSDL.sub.heading",defaultMessage:"Expose an existing SOAP service as a REST API by importing the WSDL of the SOAP service."})))},r.a.createElement(_.a,null,r.a.createElement(z.a,{alternativeLabel:!0,activeStep:t},r.a.createElement(U.a,null,r.a.createElement(J.a,null,"Provide WSDL")),r.a.createElement(U.a,null,r.a.createElement(J.a,null,"Create API")))),r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,md:12}),r.a.createElement(u.a,{item:!0,md:1}),r.a.createElement(u.a,{item:!0,md:11},0===t&&r.a.createElement(ce.a,{onValidate:s,apiInputs:c,inputsDispatcher:l}),1===t&&r.a.createElement(F,{onValidate:s,onChange:function(e){const{name:t,value:a}=e.target;l({action:t,value:a})},api:c,isAPIProduct:!1})),r.a.createElement(u.a,{item:!0,md:1}),r.a.createElement(u.a,{item:!0,md:9},r.a.createElement(u.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2},r.a.createElement(u.a,{item:!0},0===t&&r.a.createElement(f.b,{to:"/apis/"},r.a.createElement(d.a,null,r.a.createElement(m.a,{id:"Apis.Create.OpenAPI.ApiCreateOpenAPI.cancel",defaultMessage:"Cancel"}))),1===t&&r.a.createElement(d.a,{onClick:()=>a(e=>e-1)},"Back")),r.a.createElement(u.a,{item:!0},0===t&&r.a.createElement(d.a,{onClick:()=>a(e=>e+1),variant:"contained",color:"primary",disabled:!c.isFormValid},"Next"),1===t&&r.a.createElement(d.a,{variant:"contained",color:"primary",disabled:!c.isFormValid||h,onClick:function(){P(!0);const{name:e,version:t,context:a,endpoint:n,policies:r,type:l}=c,s={name:e,version:t,context:a,policies:r};let p;n&&(s.endpointConfig={endpoint_type:"SOAPTOREST"===l?"address":"http",sandbox_endpoints:{type:"SOAPTOREST"===l?"address":void 0,url:n},production_endpoints:{type:"SOAPTOREST"===l?"address":void 0,url:n}}),s.gatewayEnvironments=o.environment.map(e=>e.name),(p="url"===c.inputType?oe.a.importByUrl(c.inputValue,s,c.type):oe.a.importByFileOrArchive(c.inputValue,s,c.type)).then(e=>{E.a.info("API created successfully"),i.push("/apis/".concat(e.id,"/overview"))}).catch(e=>{e.response?E.a.error(e.response.body.description):E.a.error("Something went wrong while adding the API"),console.error(e)}).finally(()=>P(!1))}},"Create"," ",h&&r.a.createElement(g.a,{size:24})))))))}ue.propTypes={history:l.a.shape({push:l.a.func}).isRequired};var me=a(1762);function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(a,!0).forEach(function(t){Ee(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ge(e){const[t,a]=Object(n.useState)(0),{history:i}=e,{settings:o}=Object(b.c)();const[c,l]=Object(n.useReducer)(function(e,t){const{action:a,value:n}=t;switch(a){case"type":case"inputValue":case"name":case"version":case"endpoint":case"context":case"policies":case"isFormValid":return fe({},e,{[a]:n});case"inputType":return fe({},e,{[a]:n,inputValue:"url"===n?"":null});case"graphQLInfo":return fe({},e,{[a]:n});case"preSetAPI":return fe({},e,{name:n.name.replace(/[&\/\\#,+()$~%.'":*?<>{}\s]/g,""),version:n.version,context:n.context});default:return e}},{type:"ApiCreateGraphQL",inputType:"file",inputValue:"",formValidity:!1});function s(e){l({action:"isFormValid",value:e})}const[P,v]=Object(n.useState)();return r.a.createElement(y,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h5"},r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.heading",defaultMessage:"Create an API using a GraphQL SDL definition"})),r.a.createElement(p.a,{variant:"caption"},r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.sub.heading",defaultMessage:"Create an API by importing an existing GraphQL SDL definition."})))},r.a.createElement(_.a,null,0===t&&r.a.createElement(z.a,{alternativeLabel:!0,activeStep:0},r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.wizard.one",defaultMessage:"Provide GraphQL"}))),r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.wizard.two",defaultMessage:"Create API"})))),1===t&&r.a.createElement(z.a,{alternativeLabel:!0,activeStep:1},r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.wizard.one",defaultMessage:"Provide GraphQL"}))),r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.wizard.two",defaultMessage:"Create API"}))))),r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,md:12}),r.a.createElement(u.a,{item:!0,md:1}),r.a.createElement(u.a,{item:!0,md:11},0===t&&r.a.createElement(me.a,{onValidate:s,apiInputs:c,inputsDispatcher:l}),1===t&&r.a.createElement(F,{onValidate:s,onChange:function(e){const{name:t,value:a}=e.target;l({action:t,value:a})},api:c,isAPIProduct:!1})),r.a.createElement(u.a,{item:!0,md:1}),r.a.createElement(u.a,{item:!0,md:9},r.a.createElement(u.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2},r.a.createElement(u.a,{item:!0},0===t&&r.a.createElement(f.b,{to:"/apis/"},r.a.createElement(d.a,null,r.a.createElement(m.a,{id:"Apis.Create.OpenAPI.ApiCreateOpenAPI.cancel",defaultMessage:"Cancel"}))),1===t&&r.a.createElement(d.a,{onClick:()=>a(e=>e-1)},r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.back",defaultMessage:"Back"}))),r.a.createElement(u.a,{item:!0},0===t&&r.a.createElement(d.a,{onClick:()=>a(e=>e+1),variant:"contained",color:"primary",disabled:!c.isFormValid},r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.next",defaultMessage:"Next"})),1===t&&r.a.createElement(d.a,{variant:"contained",color:"primary",disabled:!c.isFormValid||P,onClick:function(){v(!0);const{name:e,version:t,context:a,endpoint:n,policies:r,implementationType:l,inputValue:s,graphQLInfo:{operations:p}}=c,u={name:e,version:t,context:a,policies:r,operations:p};n&&(u.endpointConfig={endpoint_type:"http",sandbox_endpoints:{url:n},production_endpoints:{url:n}}),u.gatewayEnvironments=Array.isArray(o.environment)&&o.environment.length>0?[o.environment[0].name]:[];const m=new h.a(u),d={additionalProperties:JSON.stringify(u),implementationType:l,file:"file",file:s};m.importGraphQL(d).then(t=>{const a=t.obj.id;E.a.info("".concat(e," API created successfully")),i.push("/apis/".concat(a,"/overview"))}).catch(e=>{e.response?E.a.error(e.response.body.description):E.a.error("Something went wrong while adding the API"),console.error(e)}).finally(()=>v(!1))}},r.a.createElement(m.a,{id:"Apis.Create.GraphQL.ApiCreateGraphQL.create",defaultMessage:"Create"})," ",P&&r.a.createElement(g.a,{size:24})))))))}ge.propTypes={history:l.a.shape({push:l.a.func}).isRequired};var he=()=>r.a.createElement(q,{isWebSocket:!0});function be(e){const{classes:t}=e;return r.a.createElement("div",{className:t.content},r.a.createElement(i.Switch,null,r.a.createElement(i.Route,{path:"/apis/create/rest",component:q}),r.a.createElement(i.Route,{path:"/api-products/create",component:ee}),r.a.createElement(i.Route,{path:"/apis/create/graphQL",component:ge}),r.a.createElement(i.Route,{path:"/apis/create/openapi",component:ie}),r.a.createElement(i.Route,{path:"/apis/create/wsdl",component:ue}),r.a.createElement(i.Route,{path:"/apis/create/ws",component:he}),r.a.createElement(i.Route,{component:s.a})))}be.propTypes={classes:l.a.shape({content:l.a.string}).isRequired};t.default=Object(o.a)({content:{flexGrow:1}})(be)}}]);
//# sourceMappingURL=APICreateRoutes.6e3daec4e636ca7e71a5.bundle.js.map