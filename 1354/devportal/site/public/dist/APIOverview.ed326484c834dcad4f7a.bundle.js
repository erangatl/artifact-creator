(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{1131:function(e,t){e.exports=function(e,t,a,n){var s=new Blob(void 0!==n?[n,e]:[e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(s,t);else{var i=window.URL.createObjectURL(s),o=document.createElement("a");o.style.display="none",o.href=i,o.setAttribute("download",t),void 0===o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i)}}},1291:function(e,t,a){"use strict";var n=a(1),s=a.n(n),i=a(45),o=a.n(i),r=a(931),l=a(1301),c=a(1365),m=a(1372),d=a(1479),p=a.n(d),u=a(1055),g=a.n(u),h=a(259),b=a(951),E=a(260);a(942),a(9);function f(e){const{classes:t,doc:a,apiId:i,fullScreen:o,intl:r}=e,{api:d}=Object(n.useContext)(b.a),[u,f]=Object(n.useState)(""),[v,y]=Object(n.useState)(!1),w=new E.a,k=Settings.app.markdown.skipHtml;Object(n.useEffect)(()=>{if("MARKDOWN"!==a.sourceType&&"INLINE"!==a.sourceType||S(),"FILE"===a.sourceType){w.getFileForDocument(i,a.documentId).then(()=>{y(!0)}).catch(()=>{y(!1)})}},[e.doc]);const S=()=>{w.getInlineContentOfDocument(i,a.documentId).then(e=>{let t=e.text;Object.keys(d).map(e=>{let a=new RegExp("___"+e+"___","g");t=t.replace(a,d[e])}),f(t)}).catch(e=>{0})};return s.a.createElement(s.a.Fragment,null,!o&&s.a.createElement("div",{className:t.docBadge},a.type),a.summary&&s.a.createElement(l.a,{variant:"body1",className:t.docSummary},a.summary),"MARKDOWN"===a.sourceType&&s.a.createElement(p.a,{skipHtml:k,source:u}),"INLINE"===a.sourceType&&s.a.createElement(g.a,{html:u}),"URL"===a.sourceType&&s.a.createElement("a",{className:t.displayURL,href:a.sourceUrl,target:"_blank"},a.sourceUrl,s.a.createElement(c.a,{className:t.displayURLLink},"open_in_new")),"FILE"===a.sourceType&&s.a.createElement(m.a,{variant:"contained",color:"default",className:t.button,disabled:!v,onClick:()=>{w.getFileForDocument(i,a.documentId).then(e=>{((e,t)=>{let a="";const n=e.headers["content-disposition"];if(n&&-1!==n.indexOf("attachment")){const e=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(n);null!=e&&e[1]&&(a=e[1].replace(/['"]/g,""))}const s=e.headers["content-type"],i=new Blob([e.data],{type:s});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(i,a);else{const e=window.URL||window.webkitURL,t=e.createObjectURL(i);if(a){const e=document.createElement("a");void 0===e.download?window.location=t:(e.href=t,e.download=a,document.body.appendChild(e),e.click())}else window.location=t;setTimeout(()=>{e.revokeObjectURL(t)},100)}})(e,document)}).catch(e=>{0})}},s.a.createElement(h.a,{id:"Apis.Details.Documents.View.btn.download",defaultMessage:"Download"}),s.a.createElement(c.a,null,"arrow_downward")),"FILE"===a.sourceType&&!v&&s.a.createElement(l.a,{className:t.fileAvailability},s.a.createElement(h.a,{id:"Apis.Details.Documents.View.file.availability",defaultMessage:"No file available"})))}f.propTypes={classes:o.a.shape({}).isRequired,doc:o.a.shape({}).isRequired,apiId:o.a.string.isRequired,intl:o.a.shape({formatMessage:o.a.func}).isRequired,fullScreen:o.a.bool.isRequired},t.a=Object(h.d)(Object(r.a)(e=>({root:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},docTitle:{fontWeight:100,fontSize:50,color:e.palette.grey[500]},docBadge:{padding:e.spacing(1),background:e.palette.primary.main,position:"absolute",top:0,marginTop:-22,color:e.palette.getContrastText(e.palette.primary.main)},button:{padding:e.spacing(2),marginTop:e.spacing(2)},displayURL:{padding:e.spacing(2),marginTop:e.spacing(2),background:e.palette.grey[200],color:e.palette.getContrastText(e.palette.grey[200]),display:"flex"},displayURLLink:{paddingLeft:e.spacing(2)},docSummary:{marginTop:e.spacing(2),color:e.palette.text.primary},fileAvailability:{marginTop:e.spacing(1),marginLeft:e.spacing(.8)}}))(f))},1487:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(1372),o=a(1224),r=a(1399),l=a(1226),c=a(1365),m=a(1331),d=a(1389),p=a(1131),u=a.n(p),g=a(1314),h=a(1301),b=a(45),E=a.n(b),f=a(931),v=a(259),y=a(961),w=a(18),k=a(9),S=a(260);function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class C extends s.a.Component{constructor(e){super(e),x(this,"handleClick",(e,t)=>{const a=this.api_uuid,n=t;this.getSdkForApi(a,n)}),x(this,"handleChange",e=>{let t=this.state.sdkLanguages;t=t.filter(t=>-1!==t.toLowerCase().search(e.target.value.toLowerCase())),this.setState({items:t})}),x(this,"addDefaultSrc",e=>{e.target.src=k.app.context+"/site/public/images/sdks/default.svg"}),this.state={sdkLanguages:null,items:null};const{match:t,apiId:a}=this.props;this.api_uuid=t?t.params.apiUuid:a,this.filter_threshold=5,this.getSdkForApi=this.getSdkForApi.bind(this),this.handleClick=this.handleClick.bind(this),this.handleChange=this.handleChange.bind(this),this.addDefaultSrc=this.addDefaultSrc.bind(this)}componentDidMount(){const e=new S.a;if(null!=w.a.getUser()){e.getSdkLanguages().then(e=>{0!==e.obj.length?(this.setState({sdkLanguages:e.obj}),this.setState({items:e.obj})):this.setState({sdkLanguages:!1})}).catch(e=>{404===e.status&&this.setState({notFound:!0})})}}getSdkForApi(e,t){(new S.a).getSdk(e,t).then(e=>{const t=e.headers["content-disposition"].match(/filename="(.+)"/)[1],a=e.data;u()(a,t)}).catch(e=>{const t=e.status;404===t?this.setState({notFound:!0}):400===t?this.setState({badRequest:!0}):500===t&&this.setState({serverError:!0})})}render(){const e=this.state.items,{onlyIcons:t,intl:a,classes:n,theme:p}=this.props,{custom:{apiDetailPages:{onlyShowSdks:u}}}=p,b=e&&e.length>0&&u&&u.length>0?e.filter(e=>u.includes(e.toLowerCase())):e;return t?b&&s.a.createElement(s.a.Fragment,null,b.map((e,t)=>t<3&&s.a.createElement(d.a,{item:!0,xs:4,key:t},s.a.createElement(i.a,{onClick:t=>this.handleClick(t,e),style:{cursor:"pointer"},"aria-label":"Download "+e+" SDK"},s.a.createElement("img",{alt:e,src:k.app.context+"/site/public/images/sdks/"+new String(e)+".svg",style:{width:80,height:80,margin:10}}))))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:n.titleWrappper},s.a.createElement(h.a,{variant:"h4",component:"h2",className:n.titleSub},s.a.createElement(v.a,{id:"Apis.Details.Sdk.title",defaultMessage:"Software Development Kits (SDKs)"})),b&&this.state.sdkLanguages.length>=this.filter_threshold&&s.a.createElement(g.a,{variant:"outlined",id:"search",label:a.formatMessage({defaultMessage:"Search SDK",id:"Apis.Details.Sdk.search.sdk"}),type:"text",margin:"normal",name:"searchSdk",onChange:this.handleChange})),b?s.a.createElement(d.a,{container:!0,className:"tab-grid",spacing:0,className:n.gridRoot},s.a.createElement(d.a,{item:!0,xs:12,sm:6,md:9,lg:9,xl:10},s.a.createElement(d.a,{container:!0,justify:"flex-start",spacing:4},b.map((e,t)=>s.a.createElement(d.a,{key:t,item:!0,key:t},s.a.createElement("div",{style:{width:"auto",textAlign:"center",margin:"10px"}},s.a.createElement(o.a,{className:n.cardRoot},s.a.createElement("div",null,e.toString().toUpperCase()),s.a.createElement(m.a,null),s.a.createElement(l.a,{title:e.toString().toUpperCase(),src:k.app.context+"/site/public/images/sdks/"+new String(e)+".svg",classes:{root:n.cardTitle}},s.a.createElement("img",{alt:e,onError:this.addDefaultSrc,src:`${k.app.context}/site/public/images/sdks/${e}.svg`,style:{width:"100px",height:"100px",margin:"30px"}})),s.a.createElement(r.a,null,s.a.createElement(d.a,{container:!0,justify:"center"},s.a.createElement(i.a,{color:"secondary",onClick:t=>this.handleClick(t,e),"area-label":"Download "+e+" SDK"},s.a.createElement(c.a,null,"arrow_downward"),"Download")))))))))):s.a.createElement("div",{className:n.genericMessageWrapper},s.a.createElement(y.a,{type:"info",className:n.dialogContainer},s.a.createElement(h.a,{variant:"h5",component:"h3"},s.a.createElement(v.a,{id:"Apis.Details.Sdk.no.sdks",defaultMessage:"No SDKs"})),s.a.createElement(h.a,{component:"p"},s.a.createElement(v.a,{id:"Apis.Details.Sdk.no.sdks.content",defaultMessage:"No SDKs available for this API"})))))}}C.propTypes={classes:E.a.instanceOf(Object).isRequired},t.default=Object(v.d)(Object(f.a)(e=>({genericMessageWrapper:{margin:e.spacing(2)},titleSub:{marginLeft:e.spacing(3),paddingTop:e.spacing(2),paddingBottom:e.spacing(2),color:e.palette.getContrastText(e.palette.background.default)},gridRoot:{marginLeft:e.spacing(2)},titleWrappper:{display:"flex",alignItems:"center","& h4":{marginRight:e.spacing(1)}},cardTitle:{background:e.palette.grey[50]},cardRoot:{background:e.custom.apiDetailPages.sdkBackground}}),{withTheme:!0})(C))},2041:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(45),o=a.n(i),r=a(948),l=a.n(r),c=a(1301),m=a(1389),d=a(931),p=a(1498),u=a(1408),g=a(1409),h=a(407),b=a(1331),E=a(1323),f=a(1407),v=a(1372),y=a(942),w=a(259),k=a(260),S=a(18),x=a(1291),C=a(972),D=a(1216),O=a(9),A=a(951),T=a(1366),N=a(1502),R=a(51);function M(e){const{theme:t,method:a}=e;let n=t.custom.resourceChipColors?t.custom.resourceChipColors[a]:null,i="#000000";return n?i=t.palette.getContrastText(t.custom.resourceChipColors[a]):(console.log("Check the theme settings. The resourceChipColors is not populated properly"),n="#cccccc"),s.a.createElement(N.a,{label:a.toUpperCase(),style:{backgroundColor:n,color:i,height:20,margin:"5px"}})}M.propTypes={theme:o.a.shape({}).isRequired,method:o.a.string.isRequired};const I=Object(T.a)(M);class j extends s.a.Component{constructor(e){super(e),this.state={paths:null,swagger:{}},this.api=new k.a}componentDidMount(){const{api:e}=this.props;let t=null;(t=(new k.a).getSwaggerByAPIId(e.id)).then(e=>{void 0!==e.obj.paths&&this.setState({paths:e.obj.paths})}).catch(e=>{const t=e.status;if(404===t)this.setState({notFound:!0});else if(401===t){this.setState({isAuthorize:!1});const e=qs.stringify({reference:this.props.location.pathname});this.props.history.push({pathname:"/login",search:e})}})}render(){const{paths:e}=this.state;if(this.state.notFound)return s.a.createElement("div",null,"resource not found...");if(!e)return s.a.createElement("div",null,"loading...");const{classes:t}=this.props;return s.a.createElement("div",{className:t.root},s.a.createElement("div",{className:t.contentWrapper},Object.keys(e).map(a=>{const n=e[a];return s.a.createElement("div",{className:t.root,key:a},s.a.createElement(c.a,{className:t.heading,variant:"body1"},a),Object.keys(n).map(e=>R.a.HTTP_METHODS.includes(e)?s.a.createElement(I,{method:e,key:e}):null))})))}}j.contextType=A.a,j.propTypes={classes:o.a.object.isRequired,intl:o.a.shape({formatMessage:o.a.func}).isRequired};var L=Object(w.d)(Object(d.a)(e=>({root:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:10},heading:{marginRight:20,color:e.palette.getContrastText(e.custom.infoBar.sliderBackground)}}))(j)),B=a(1393),P=a(1396),F=a(1397);function _(e){const{theme:t,method:a}=e;let n=t.custom.operationChipColor?t.custom.operationChipColor[a]:null,i="#000000";return n?i=t.palette.getContrastText(t.custom.operationChipColor[a]):(console.log("Check the theme settings. The resourceChipColors is not populated properlly"),n="#cccccc"),s.a.createElement(N.a,{label:a,style:{backgroundColor:n,color:i,height:20}})}_.propTypes={theme:o.a.object.isRequired,method:o.a.object.isRequired};const q=Object(T.a)(_);class z extends s.a.Component{constructor(e){super(e),this.state={operations:null},this.api=new k.a}componentDidMount(){const{api:e}=this.props;this.setState({operations:e.operations})}render(){const{operations:e}=this.state;if(!e)return s.a.createElement("div",null,s.a.createElement(w.a,{id:"Apis.Details.Operations.notFound",defaultMessage:"Operations Not Found"}));const{classes:t}=this.props;return s.a.createElement(B.a,null,e&&0!==e.length&&e.map(e=>s.a.createElement(F.a,{style:{borderStyle:"hidden"},key:e.target+"_"+e.verb},s.a.createElement(P.a,null,s.a.createElement(c.a,{className:t.heading,component:"p",variant:"body1"},e.target)),s.a.createElement(P.a,null,s.a.createElement(q,{method:e.verb.toLowerCase()})))))}}z.propTypes={classes:o.a.object.isRequired,intl:o.a.shape({formatMessage:o.a.func}).isRequired};var U=Object(w.d)(Object(d.a)({root:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:10},heading:{marginRight:20}})(z)),W=a(2030),K=a(1487),H=a(266),$=a(1414),G=a(1325),J=a(1328),Q=a(1329),V=a(1330),Y=a(1365);function X(e){const[t,a]=Object(n.useState)([]),{apiId:i,setDocsCount:o}=e,r=Object(H.g)(),l=(e,t)=>t.length>e?t.substr(0,e-1)+"...":t;Object(n.useEffect)(()=>{(new k.a).getDocumentsByAPIId(i).then(e=>{e.obj.list.length>0&&(a(e.obj.list),o(e.obj.count))}).catch(e=>{const{status:t}=e;404===t&&Alert.error("Error occurred")})},[]);const{classes:d}=e;return 0===t.length?s.a.createElement(m.a,{container:!0,className:d.root,spacing:2},s.a.createElement(m.a,{item:!0,xs:12},s.a.createElement("div",{className:d.emptyBox},s.a.createElement(c.a,{variant:"body2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.documents.no.content",defaultMessage:"No Documents Available"}))))):t.length>0&&s.a.createElement(G.a,{component:"nav","aria-label":"Available documents",subheader:s.a.createElement($.a,{component:"div",id:"nested-list-subheader",className:d.listItemStyle},s.a.createElement(w.a,{id:"Apis.Details.Overview.documents.list.title.prefix",defaultMessage:"Showing "}),1===t.length&&s.a.createElement(s.a.Fragment,null,"1",s.a.createElement(w.a,{id:"Apis.Details.Overview.documents.list.title.sufix.document",defaultMessage:" Document"})),2===t.length&&s.a.createElement(s.a.Fragment,null,"2",s.a.createElement(w.a,{id:"Apis.Details.Overview.documents.list.title.sufix.documents",defaultMessage:" Documents"})),t.length>2&&s.a.createElement(s.a.Fragment,null,"3",s.a.createElement(w.a,{id:"Apis.Details.Overview.documents.list.title.sufix.documents.multiple",defaultMessage:" Documents out of "}),t.length)),className:d.listWrapper},t.map((e,t)=>t<=2&&s.a.createElement(J.a,{button:!0,onClick:()=>(e=>{r.push("/apis/"+i+"/documents/"+e)})(e.documentId),className:d.listItemStyle,key:e.name},s.a.createElement(Q.a,null,s.a.createElement(Y.a,null,"insert_drive_file")),s.a.createElement(V.a,{primary:e.name,secondary:l(100,e.summary)}))))}X.propTypes={classes:o.a.shape({}).isRequired,theme:o.a.shape({}).isRequired};var Z=Object(d.a)(e=>({root:{padding:e.spacing(3),maxWidth:e.custom.contentAreaWidth},iconClass:{marginRight:10,color:e.palette.secondary.main},boxBadge:{background:e.palette.grey.A400,color:e.palette.getContrastText(e.palette.grey.A400),fontSize:e.typography.h5.fontSize,padding:e.spacing(1),width:30,height:30,marginRight:20,textAlign:"center"},subscriptionBox:{paddingLeft:e.spacing(2)},linkStyle:{color:e.palette.getContrastText(e.palette.background.default),fontSize:e.typography.fontSize},subscriptionTop:{display:"flex",flexDirection:"row",alignItems:"center"},resourceWrapper:{height:192,overflow:"auto"},actionPanel:{justifyContent:"flex-start"},linkToTest:{textDecoration:"none"},emptyBox:{background:"#ffffff55",color:"#444",border:"solid 1px #fff",padding:e.spacing(2),marginTop:50},listWrapper:{padding:0,margin:0,width:"100%"},listItemStyle:{padding:0,marging:0}}),{withTheme:!0})(X);const ee=Object(d.a)({root:{borderBottom:"1px solid rgba(0,0,0,.125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"},alignItems:"center"},expanded:{}})(e=>s.a.createElement(g.a,e));function te(e){const{classes:t,theme:a}=e,{custom:{apiDetailPages:{showCredentials:i,showComments:o,showTryout:r,showDocuments:d,showSdks:g}}}=a,{api:T,subscribedApplications:N}=Object(n.useContext)(A.a),[R,M]=Object(n.useState)(0),[I,j]=Object(n.useState)(0),[B,P]=Object(n.useState)(null),F=T.securityScheme.includes("mutualssl")&&!T.securityScheme.includes("oauth2")&&!T.securityScheme.includes("api_key")&&!T.securityScheme.includes("basic_auth"),_=T.securityScheme.includes("basic_auth")&&!T.securityScheme.includes("oauth2")&&!T.securityScheme.includes("api_key");Object(n.useEffect)(()=>{(new k.a).getDocumentsByAPIId(T.id).then(e=>{const t=e.body.list.filter(e=>"_overview"===e.otherTypeName);t.length>0&&P(t[0])}).catch(e=>{const{status:t}=e;404===t&&y.a.error("Error occurred")})},[]);if(B)return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{className:t.paperWithDoc},s.a.createElement(x.a,{doc:B,apiId:T.id,fullScreen:!0})));const{titleIconColor:q}=a.custom.overview,{titleIconSize:z}=a.custom.overview,H=S.a.getUser();return s.a.createElement(m.a,{container:!0,className:t.root,spacing:2},!T.advertiseInfo.advertised&&i&&s.a.createElement(m.a,{item:!0,xs:12,lg:6},s.a.createElement(p.a,{defaultExpanded:!0},s.a.createElement(ee,{"aria-controls":"panelSubscriptions-content",id:"panelSubscriptions-header"},s.a.createElement(C.a,{strokeColor:q,className:t.iconClass,width:z,height:z,icon:"credentials"}),s.a.createElement(c.a,{className:t.heading,variant:"h6",component:"h2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.api.subscriptions",defaultMessage:"Subscriptions"}))),T.lifeCycleStatus&&"prototyped"===T.lifeCycleStatus.toLowerCase()?s.a.createElement(u.a,{classes:{root:t.noCredentialsRoot}},s.a.createElement(m.a,{container:!0,className:t.root,spacing:2},s.a.createElement(m.a,{item:!0,xs:12,className:t.marginTop},s.a.createElement("div",{className:t.emptyBox},s.a.createElement(c.a,{variant:"body2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.no.subscription.message",defaultMessage:"Subscriptions Are Not Allowed"})))))):s.a.createElement(u.a,{classes:{root:t.expansionRoot}},s.a.createElement(m.a,{container:!0,className:t.root,spacing:2},s.a.createElement(m.a,{item:!0,xs:12},s.a.createElement(c.a,{variant:"subtitle2",component:"h3"},s.a.createElement(w.a,{id:"Apis.Details.Overview.subscriptions.title",defaultMessage:"Subscriptions"})),s.a.createElement(c.a,{variant:"body2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.subscribe.info",defaultMessage:"Subscription enables you to receive access tokens and be authenticated to invoke this API."})),s.a.createElement(D.a,{display:"block",mt:2},s.a.createElement(m.a,{item:!0,xs:12},H?s.a.createElement(D.a,{display:"flex",flexDirection:"column",mr:2},s.a.createElement(v.a,{variant:"contained",color:"primary",size:"large",component:h.a,to:"/apis/"+T.id+"/credentials",disabled:!T.isSubscriptionAvailable||F||_},s.a.createElement(w.a,{id:"Apis.Details.Overview.subscribebtn.link",defaultMessage:"Subscribe"})),N&&s.a.createElement(c.a,{variant:"caption",component:"div"},0===N.length?s.a.createElement(w.a,{id:"Apis.Details.Overview.subscribe.count.zero",defaultMessage:"No application subscriptions."}):N.length,(F||_)&&s.a.createElement(m.a,{className:t.mutualsslMessage},s.a.createElement(c.a,{variant:"body2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.mutualssl.basicauth",defaultMessage:"Subscription is not required for Mutual SSL APIs or APIs with only Basic Authentication."})))," ",1===N.length&&s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{id:"Apis.Details.Overview.subscribe.count.singular",defaultMessage:"Application subscribed."})),N.length>1&&s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{id:"Apis.Details.Overview.subscribe.count.plural",defaultMessage:"Applications subscribed."})))):s.a.createElement(D.a,{display:"inline",mr:2},s.a.createElement(v.a,{variant:"contained",color:"primary",size:"large",disabled:!T.isSubscriptionAvailable,component:"a",href:O.app.context+"/services/configs"},s.a.createElement(w.a,{id:"Apis.Details.Overview.signin.subscribe.btn.link",defaultMessage:"Sign in to Subscribe"})))))))))),"WS"!==T.type&&r&&s.a.createElement(m.a,{item:!0,xs:12,lg:6},s.a.createElement(p.a,{defaultExpanded:!0},s.a.createElement(ee,{"aria-controls":"panelTryout-content",id:"paneltryout-header"},s.a.createElement(C.a,{strokeColor:q,className:t.iconClass,width:z,height:z,icon:"credentials"}),s.a.createElement(c.a,{id:"APIOperationTitle",className:t.heading,variant:"h6",component:"h2"},(e=>{switch(e){case"GRAPHQL":return s.a.createElement(w.a,{id:"Apis.Details.Overview.operations.title",defaultMessage:"Operations"});default:return s.a.createElement(w.a,{id:"Apis.Details.Overview.resources.title",defaultMessage:"Resources"})}})(T.type))),s.a.createElement(u.a,{className:t.resourceWrapper},((e,t)=>{switch(e){case"GRAPHQL":return s.a.createElement(U,{api:t});case"WS":return"";default:return s.a.createElement(L,{api:t})}})(T.type,T)),!T.advertiseInfo.advertised&&s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,null),s.a.createElement(f.a,{className:t.actionPanel},s.a.createElement(v.a,{id:"test",size:"small",color:"primary","aria-labelledby":"test APIOperationTitle",className:t.linkToTest,component:h.a,to:"/apis/"+T.id+"/test"},s.a.createElement(w.a,{id:"Apis.Details.Overview.resources.show.more",defaultMessage:"Test >>"})))))),!T.advertiseInfo.advertised&&s.a.createElement(s.a.Fragment,null,o&&s.a.createElement(m.a,{item:!0,xs:12,lg:6},s.a.createElement(p.a,{defaultExpanded:!0},s.a.createElement(ee,{"aria-controls":"panelComments-content",id:"panelComments-header"},s.a.createElement(C.a,{strokeColor:q,className:t.iconClass,width:z,height:z,icon:"comments"}),s.a.createElement(c.a,{id:"comments",className:t.heading,variant:"h6",component:"h2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.comments.title",defaultMessage:"Comments"})),s.a.createElement(c.a,{className:t.subheading}," "+(R>3?3:R)+" of "+R)),s.a.createElement(u.a,{classes:{root:l()({[t.noCommentRoot]:0===R},{[t.commentRoot]:0!==R})}},s.a.createElement(m.a,{container:!0,className:t.root,spacing:2},T&&s.a.createElement(m.a,{item:!0,xs:12},s.a.createElement(W.default,{apiId:T.id,showLatest:!0,isOverview:!0,setCount:M})),0===R&&s.a.createElement(m.a,{item:!0,xs:12},s.a.createElement("div",{className:t.emptyBox},s.a.createElement(c.a,{variant:"body2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.comments.no.content",defaultMessage:"No Comments Yet"})))))),s.a.createElement(b.a,null),s.a.createElement(f.a,{className:t.actionPanel},s.a.createElement(v.a,{id:"more","aria-labelledby":"more comments",size:"small",color:"primary",className:t.button,component:h.a,to:"/apis/"+T.id+"/comments"},s.a.createElement(w.a,{id:"Apis.Details.Overview.comments.show.more",defaultMessage:"Show More >>"}))))),"WS"!==T.type&&g&&s.a.createElement(m.a,{item:!0,xs:6},s.a.createElement(p.a,{defaultExpanded:!0},s.a.createElement(ee,{"aria-controls":"panelsdk-content",id:"panelsdk-header"},s.a.createElement(C.a,{strokeColor:q,className:t.iconClass,width:z,height:z,icon:"sdk"}),s.a.createElement(c.a,{id:"SDKGeneration",className:t.heading,variant:"h6",component:"h2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.sdk.generation.title",defaultMessage:"SDK Generation"}))),s.a.createElement(u.a,{className:t.resourceWrapper},s.a.createElement(m.a,{container:!0,className:t.root,spacing:2},T&&s.a.createElement(K.default,{apiId:T.id,onlyIcons:!0}),s.a.createElement(m.a,{item:!0,xs:12},s.a.createElement(c.a,null,s.a.createElement(w.a,{id:"Apis.Details.Overview.sdk.generation.description",defaultMessage:"If you want to create a software application\n                                                     to consume the subscribed APIs, you can generate client side\n                                                      SDK for a supported language/framework and use it as a start\n                                                       point to write the software application."}))))),s.a.createElement(b.a,null),s.a.createElement(f.a,{className:t.actionPanel},s.a.createElement(v.a,{id:"SDKMore",size:"small",color:"primary","aria-labelledby":"SDKMore SDKGeneration",className:t.linkToTest,component:h.a,to:"/apis/"+T.id+"/sdk"},s.a.createElement(w.a,{id:"Apis.Details.Overview.sdk.generation.show.more",defaultMessage:"Show More >>"})))))),d&&s.a.createElement(m.a,{item:!0,xs:12,lg:6},s.a.createElement(p.a,{defaultExpanded:!0},s.a.createElement(ee,{"aria-controls":"paneldocs-content",id:"paneldocs-header"},s.a.createElement(C.a,{strokeColor:q,className:t.iconClass,width:z,height:z,icon:"docs"}),s.a.createElement(c.a,{id:"Documents",className:t.heading,variant:"h6",component:"h2"},s.a.createElement(w.a,{id:"Apis.Details.Overview.documents.title",defaultMessage:"Documents"}))),s.a.createElement(u.a,{classes:{root:l()({[t.noDocumentRoot]:0===I})}},s.a.createElement(Z,{apiId:T.id,setDocsCount:j})),s.a.createElement(b.a,null),s.a.createElement(f.a,{className:t.actionPanel},s.a.createElement(v.a,{id:"DMore",size:"small",color:"primary","aria-labelledby":"DMore Documents",className:t.button,component:h.a,to:"/apis/"+T.id+"/documents"},s.a.createElement(w.a,{id:"Apis.Details.Overview.comments.show.more",defaultMessage:"Show More >>"}))))))}ee.muiName="ExpansionPanelSummary",te.propTypes={classes:o.a.instanceOf(Object).isRequired,theme:o.a.instanceOf(Object).isRequired};t.default=Object(d.a)(e=>({root:{padding:e.spacing(3),color:e.palette.getContrastText(e.palette.background.paper),margin:-1*e.spacing(0,2)},iconClass:{marginRight:10},boxBadge:{background:e.palette.grey.A400,fontSize:e.typography.h5.fontSize,padding:e.spacing(1),width:30,height:30,marginRight:20,textAlign:"center"},subscriptionBox:{paddingLeft:e.spacing(2)},linkStyle:{color:e.palette.getContrastText(e.palette.background.default),fontSize:e.typography.fontSize},subscriptionTop:{display:"flex",flexDirection:"row",alignItems:"center"},resourceWrapper:{height:192,overflow:"auto"},actionPanel:{justifyContent:"flex-start"},linkToTest:{textDecoration:"none"},button:{textDecoration:"none"},verticalSpace:{marginLeft:e.spacing(60)},subheading:{marginLeft:e.spacing(2),color:e.palette.getContrastText(e.palette.background.paper)},marginTop:{marginTop:e.spacing(8)},subsToApp:{marginTop:e.spacing(2)},expansionRoot:{minHeight:238},noCommentRoot:{backgroundImage:`url(${O.app.context+e.custom.overviewPage.commentsBackground})`,height:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:192},commentRoot:{height:"100%",minHeight:192},noDocumentRoot:{backgroundImage:`url(${O.app.context+e.custom.overviewPage.documentsBackground})`,height:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:192},noCredentialsRoot:{backgroundImage:`url(${O.app.context+e.custom.overviewPage.credentialsBackground})`,height:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:236},emptyBox:{background:e.custom.overview.noContentBackground,color:e.palette.getContrastText(e.custom.overview.noContentBackground),border:"solid 1px #fff",padding:e.spacing(2),"& span":{color:e.palette.getContrastText(e.custom.overview.noContentBackground)}},paper:{margin:e.spacing(2),padding:e.spacing(2)},paperWithDoc:{margin:e.spacing(2),padding:e.spacing(2),color:e.palette.getContrastText(e.palette.background.paper)},heading:{color:e.palette.getContrastText(e.palette.background.paper)},mutualsslMessage:{marginTop:e.spacing(2)}}),{withTheme:!0})(te)}}]);
//# sourceMappingURL=APIOverview.ed326484c834dcad4f7a.bundle.js.map