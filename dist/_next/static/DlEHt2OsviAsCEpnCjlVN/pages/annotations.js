(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{DFAO:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/annotations",function(){var n=e("G4es");return{page:n.default||n}}])},G4es:function(n,t,e){"use strict";e.r(t);var o={};e.r(o),e.d(o,"load",function(){return u});var a=e("z3IF"),i=e("mXGw"),r=e.n(i),s=e("UrUy"),c=e.n(s),d=e("R3/3"),l=e("0/K0");function u(n){return l.a.load(n).then(function(){var n=Object(d.a)(c.a.mark(function n(t){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.addEventListener("annotations.load",function(n){console.log("Annotations were loaded",n.toJS())}),t.addEventListener("annotations.change",function(){console.log("Something in the annotations has changed.")}),t.addEventListener("annotations.create",function(n){console.log("New annotations got created",n.toJS())}),t.addEventListener("annotations.update",function(n){console.log("Annotations got updated",n.toJS())}),t.addEventListener("annotations.delete",function(n){console.log("Annotations got deleted",n.toJS())}),n.next=7,t.getAnnotations(0);case 7:return n.sent.size<=1&&(w(t,new l.a.Annotations.InkAnnotation({pageIndex:1,boundingBox:new l.a.Geometry.Rect({width:150,height:50,top:50,left:50}),strokeColor:l.a.Color.WHITE,lines:l.a.Immutable.List([l.a.Immutable.List([new l.a.Geometry.DrawingPoint({x:50,y:50}),new l.a.Geometry.DrawingPoint({x:200,y:50})]),l.a.Immutable.List([new l.a.Geometry.DrawingPoint({x:50,y:75}),new l.a.Geometry.DrawingPoint({x:200,y:75})]),l.a.Immutable.List([new l.a.Geometry.DrawingPoint({x:50,y:100}),new l.a.Geometry.DrawingPoint({x:200,y:100})])])})),w(t,new l.a.Annotations.TextAnnotation({pageIndex:0,boundingBox:new l.a.Geometry.Rect({width:150,height:150,top:50,left:50}),text:"Welcome to\nPSPDFKit",font:"Helvetica",isBold:!0,horizontalAlign:"center",verticalAlign:"center",backgroundColor:l.a.Color.BLUE,fontColor:l.a.Color.WHITE})),w(t,new l.a.Annotations.EllipseAnnotation({pageIndex:0,boundingBox:new l.a.Geometry.Rect({left:390,top:380,width:120,height:120})})),w(t,new l.a.Annotations.HighlightAnnotation({pageIndex:0,boundingBox:new l.a.Geometry.Rect({left:30,top:424,width:223,height:83}),rects:l.a.Immutable.List([new l.a.Geometry.Rect({left:30,top:424,width:223,height:42}),new l.a.Geometry.Rect({left:30,top:465,width:122,height:42})])})),w(t,new l.a.Annotations.NoteAnnotation({pageIndex:0,text:"An example for a Note Annotation",boundingBox:new l.a.Geometry.Rect({left:500,top:20,width:30,height:40})}))),n.abrupt("return",t);case 10:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}())}function w(n,t){n.createAnnotation(t).then(n.ensureAnnotationSaved).then(function(n){console.log("Saved annotation with the ID",n.id)})}var g=e("QIW7"),h=r.a.createElement;t.default=function(n){return h(g.a,Object(a.a)({key:"annotations",name:"annotations",title:"Annotations",hooks:o},n))}}},[["DFAO",1,0]]]);