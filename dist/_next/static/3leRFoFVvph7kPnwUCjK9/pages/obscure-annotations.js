(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Y3Hu:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/obscure-annotations",function(){var t=e("ujF6");return{page:t.default||t}}])},ujF6:function(t,n,e){"use strict";e.r(n);var o={};e.r(o),e.d(o,"load",function(){return b});var a=e("z3IF"),r=e("mXGw"),i=e.n(r),s=e("UrUy"),u=e.n(s),c=e("Rbzu"),l=e("R3/3"),d=e("OAWj"),f=e.n(d),p=e("0/K0"),v=null,h=new f.a,m=new f.a,g=function(t){var n=t.annotation;if(!I(n))return null;var e=document.createElement("div");return e.innerHTML='\n    <div class="PeekHole-Top"></div>\n    <div class="PeekHole-Bottom"></div>\n    <div class="PeekHole-Left"></div>\n    <div class="PeekHole-Right"></div>\n    <div class="PeekHole-TopLeft"></div>\n    <div class="PeekHole-TopRight"></div>\n    <div class="PeekHole-BottomLeft"></div>\n    <div class="PeekHole-BottomRight"></div>\n    <div class="PeekHole-Center"></div>\n  ',e.style.pointerEvents="all",e.onclick=function(){v.getSelectedAnnotation()||setTimeout(function(){return v.setSelectedAnnotation(n.id)},0)},{node:e,append:!0,onDisappear:function(){}}};function b(t){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark(function t(n){var e,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.load(Object(c.a)({},n,{toolbarItems:k(),styleSheets:["/obscure-annotations/static/style.css"],initialViewState:new p.a.ViewState({enableAnnotationToolbar:!1}),annotationTooltipCallback:S,customRenderers:{Annotation:g}}));case 2:(v=t.sent).addEventListener("viewState.currentPageIndex.change",y),v.addEventListener("annotations.delete",function(t){t.filter(I).forEach(function(t){return h.delete(t.pageIndex)}),t.filter(O).forEach(function(t){return m.delete(t.pageIndex)}),y()}),e=0;case 6:if(!(e<v.totalPageCount)){t.next=15;break}return t.next=9,v.getAnnotations(e);case 9:(o=t.sent).find(I)&&h.add(e),o.find(O)&&m.add(e);case 12:e++,t.next=6;break;case 15:return y(),T(),t.abrupt("return",v);case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}var A=["annotate","ink","highlighter","text-highlighter","ink-signature","image","stamp","note","text","line","arrow","rectangle","ellipse","polygon","polyline","print","search"];function k(){var t=p.a.defaultToolbarItems.filter(function(t){return!A.includes(t.type)});if(v){var n=v.viewState.currentPageIndex,e=h.has(n),o=m.has(n);e?t.push({type:"custom",title:"Remove Peek Hole Annotation",onPress:function(){return H(n)}}):t.push({type:"custom",title:"Add Peek Hole Annotation",onPress:function(){return function(t){return P.apply(this,arguments)}(n)},disabled:o}),o?t.push({type:"custom",title:"Remove Obscure Annotation",onPress:function(){return H(n)}}):t.push({type:"custom",title:"Add Obscure Annotation",onPress:function(){return function(t){return x.apply(this,arguments)}(n)},disabled:e})}return t}function y(){v.setToolbarItems(k())}function P(){return(P=Object(l.a)(u.a.mark(function t(n){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.createAnnotation(new p.a.Annotations.RectangleAnnotation({boundingBox:R(n),pageIndex:n,strokeColor:null,customData:{peekHole:!0}}));case 2:e=t.sent,v.setSelectedAnnotation(e),h.add(n),y();case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function x(){return(x=Object(l.a)(u.a.mark(function t(n){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.createAnnotation(new p.a.Annotations.RectangleAnnotation({boundingBox:R(n),pageIndex:n,strokeColor:p.a.Color.BLACK,fillColor:p.a.Color.BLACK,customData:{obscure:!0}}));case 2:e=t.sent,v.setSelectedAnnotation(e),m.add(n),y();case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function H(t){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getAnnotations(n);case 2:t.sent.filter(function(t){return I(t)||O(t)}).forEach(function(t){return v.deleteAnnotation(t.id)}),h.delete(n),m.delete(n),y();case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(t){var n=v.pageInfoForIndex(t);return new p.a.Geometry.Rect({top:n.height/2-50,left:n.width/2-100,width:200,height:100})}function I(t){return t instanceof p.a.Annotations.RectangleAnnotation&&!0===t.customData.peekHole}function O(t){return t instanceof p.a.Annotations.RectangleAnnotation&&!0===t.customData.obscure}function S(t){return[{type:"custom",title:"Delete",onPress:function(){confirm("Do you really want to delete the annotation?")&&v.deleteAnnotation(t.id)}}]}function T(){var t=!1;v.contentDocument.onmousedown=function(n){C(n.target,"PSPDFKit-Selection-Outline-Border")&&(t=!0),C(n.target,"PSPDFKit-Resize-Anchor")&&(t=!0)},v.contentDocument.onmouseup=function(){t=!1,v.contentDocument.body.removeAttribute("data-is-dragging-or-resizing","true")},v.contentDocument.onmousemove=function(n){1===n.buttons&&t&&v.contentDocument.body.setAttribute("data-is-dragging-or-resizing","true")}}function C(t,n){return"string"===typeof t.className.baseVal&&t.className.baseVal.split(" ").indexOf(n)>=0}var E=e("QIW7"),j=i.a.createElement;n.default=function(t){return j(E.a,Object(a.a)({key:"obscure-annotations",name:"obscure-annotations",title:"Obscure Annotations",hooks:o},t))}}},[["Y3Hu",1,0]]]);