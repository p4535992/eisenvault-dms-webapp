define(["dojo/_base/declare","alfresco/core/Core","dojo/_base/lang","dojo/dom-class"],function(c,f,h,e){return c([f],{filterTopic:null,postCreate:function b(){if(this.filterTopic!=null){this.alfSubscribe(this.filterTopic,h.hitch(this,"filter"))}this.inherited(arguments)},filter:function d(i){this.inherited(arguments)},hide:function a(){e.add(this.domNode,"hidden")},show:function g(){e.remove(this.domNode,"hidden")}})});