(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{3727:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(53),s=a(13),c=a(17),r=a.n(c),l=a(52),d=a(1316),p=a(1425),u=a(1413),m=a(508),f=a(1458),E=a(1450),b=a(510),C=a(1893),h=a(3428),g=a(3429),O=a.n(g),w=a(518),S=a(614),T=a(530),N=a(521),j=a(69),y=a(1449);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function A(e){return o.a.createElement(f.a,D({direction:"up"},e))}function x(e){const{intl:t,apiType:a,showAtOnce:i,history:c,docId:r}=e,{api:l,isAPIProduct:f}=Object(n.useContext)(N.c),[g,D]=Object(n.useState)(i),[x,I]=Object(n.useState)(C.EditorState.createEmpty()),[v,M]=Object(n.useState)(!1),P=()=>{if(g||k(),g&&i){const e="/".concat(f?"api-products":"apis","/").concat(l.id,"/documents");c.push(e)}D(!g)},k=()=>{(f?new S.a:new w.a).getInlineContentOfDocument(l.id,r).then(e=>{const t=Object(C.convertFromHTML)(e.text),a=C.ContentState.createFromBlockArray(t.contentBlocks,t.entityMap);I(C.EditorState.createWithContent(a))}).catch(e=>{const{status:t}=e;404===t&&this.setState({apiNotFound:!0})})},{classes:R,docName:q}=e;return o.a.createElement("div",null,o.a.createElement(d.a,{onClick:P,disabled:Object(j.b)(["apim:api_create","apim:api_publish"],l),"aria-label":"Edit Content of "+q},o.a.createElement(E.a,null,"description"),o.a.createElement(s.a,{id:"Apis.Details.Documents.TextEditor.edit.content",defaultMessage:"Edit Content"})),o.a.createElement(p.a,{fullScreen:!0,open:g,onClose:P,TransitionComponent:A},o.a.createElement(b.a,{square:!0,className:R.popupHeader},o.a.createElement(u.a,{color:"inherit",onClick:P,"aria-label":"Close"},o.a.createElement(E.a,null,"close")),o.a.createElement(m.a,{variant:"h4",className:R.docName},o.a.createElement(s.a,{id:"Apis.Details.Documents.TextEditor.edit.content.of",defaultMessage:"Edit Content of"})," ",'"',q,'"'),o.a.createElement(d.a,{className:R.button,variant:"contained",disabled:v,color:"primary",onClick:()=>{const e=f?new S.a:new w.a;M(!0);const a=O()(Object(C.convertToRaw)(x.getCurrentContent()));e.addInlineContentToDocument(l.id,r,"INLINE",a).then(e=>{T.a.info("".concat(e.obj.name," ").concat(t.formatMessage({id:"Apis.Details.Documents.TextEditor.update.success.message",defaultMessage:"updated successfully."}))),P(),M(!1)}).catch(e=>{T.a.error("".concat(e," ").concat(t.formatMessage({id:"Apis.Details.Documents.TextEditor.update.error.message",defaultMessage:"update failed."}))),M(!1)})}},o.a.createElement(s.a,{id:"Apis.Details.Documents.TextEditor.update.content.button",defaultMessage:"Update Content"}),v&&o.a.createElement(y.a,{size:24})),o.a.createElement(d.a,{className:R.button,onClick:P},o.a.createElement(s.a,{id:"Apis.Details.Documents.TextEditor.cancel.button",defaultMessage:"Cancel"}))),o.a.createElement("div",{className:R.splitWrapper},o.a.createElement(h.Editor,{editorState:x,wrapperClassName:"draftjs-wrapper",editorClassName:"draftjs-editor",onEditorStateChange:e=>{I(e)}}))))}x.propTypes={classes:r.a.shape({}).isRequired,docId:r.a.string.isRequired,apiType:r.a.oneOf([w.a.CONSTS.API,w.a.CONSTS.APIProduct]).isRequired,intl:r.a.shape({}).isRequired,showAtOnce:r.a.bool.isRequired,api:r.a.shape({id:r.a.string,apiType:r.a.oneOf([w.a.CONSTS.API,w.a.CONSTS.APIProduct])}).isRequired},t.default=Object(s.d)(Object(i.withRouter)(Object(l.a)({appBar:{position:"relative"},flex:{flex:1},popupHeader:{display:"flex",flexDirection:"row",alignItems:"center"},splitWrapper:{padding:0},docName:{alignItems:"center",display:"flex"},button:{height:30,marginLeft:30}})(x)))}}]);
//# sourceMappingURL=ListingTextEditor.cafe2ec4bbce08ef933a.bundle.js.map