(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{UVGR:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/permissions",function(){var t=e("xo/1");return{page:t.default||t}}])},"xo/1":function(t,n,e){"use strict";e.r(n);var o={};e.r(o),e.d(o,"load",function(){return b});var a=e("z3IF"),r=e("mXGw"),i=e.n(r),s=e("UrUy"),l=e.n(s),u=e("R3/3"),c=e("Rbzu"),d=e("0/K0");function b(t){var n=null,e=function(t){return"Current User"===t.creatorName},o=[d.a.Annotations.TextAnnotation],a=d.a.defaultToolbarItems;a.push(function t(a){return{type:"custom",title:"editableAnnotationTypes"===a?"Text Annotations Editable":"Annotations By Current User Editable",onPress:function(){"editableAnnotationTypes"===a?(a="isEditableAnnotation",n.setIsEditableAnnotation(e)):(a="editableAnnotationTypes",n.setEditableAnnotationTypes(o));var r=d.a.defaultToolbarItems;r.push(t(a)),n.setToolbarItems(r)}}}("isEditableAnnotation"));var r=Object(c.a)({},t,{isEditableAnnotation:e,toolbarItems:a});return d.a.load(r).then(function(){var t=Object(u.a)(l.a.mark(function t(e){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,console.log("PSPDFKit for Web successfully loaded!!",n),t.next=4,n.getAnnotations(0);case 4:return t.sent.size<=1&&(n.createAnnotation(new d.a.Annotations.TextAnnotation({pageIndex:0,boundingBox:new d.a.Geometry.Rect({width:150,height:150,top:350,left:350}),text:"Annotation created by current user",font:"Helvetica",isBold:!0,horizontalAlign:"center",verticalAlign:"center",backgroundColor:d.a.Color.BLUE,fontColor:d.a.Color.WHITE,creatorName:"Current User"})),n.createAnnotation(new d.a.Annotations.TextAnnotation({pageIndex:0,boundingBox:new d.a.Geometry.Rect({width:150,height:150,top:550,left:350}),text:"Annotation from another user",font:"Helvetica",isBold:!0,horizontalAlign:"center",verticalAlign:"center",backgroundColor:d.a.Color.BLACK,fontColor:d.a.Color.WHITE,creatorName:"Other User"}))),n.setAnnotationCreatorName("Current User"),t.abrupt("return",n);case 8:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}())}var f=e("QIW7"),p=i.a.createElement;n.default=function(t){return p(f.a,Object(a.a)({key:"permissions",name:"permissions",title:"Permissions",hooks:o},t))}}},[["UVGR",1,0]]]);