(function(){Alfresco.DataLoader=function d(e){return Alfresco.DataLoader.superclass.constructor.call(this,"Alfresco.DataLoader",e,["button"])};YAHOO.extend(Alfresco.DataLoader,Alfresco.component.Base,{options:{url:null,eventName:null,eventData:null,failureMessageKey:"message.failure.workflow",failureTitleKey:"message.failure",useProxy:true},onReady:function b(){var e=encodeURI(Alfresco.util.combinePaths(this.options.useProxy?Alfresco.constants.PROXY_URI:"",this.options.url));Alfresco.util.Ajax.jsonGet({method:"GET",url:e,successCallback:{fn:this._getDataSuccess,scope:this},failureCallback:{fn:this._getDataFailure,scope:this}})},_getDataSuccess:function c(e){if(e.json!==undefined){var f=e.json;if(this.options.eventData){f=Alfresco.util.findValueByDotNotation(f,this.options.eventData,null)}if(f){YAHOO.Bubbling.fire(this.options.eventName,f)}else{Alfresco.util.PopupManager.displayPrompt({title:this.msg(this.options.failureTitleKey),text:this.msg(this.options.failureMessageKey,Alfresco.constants.USERNAME),modal:true})}}},_getDataFailure:function a(e){Alfresco.util.PopupManager.displayPrompt({title:this.msg(this.options.failureTitleKey),text:this.msg(this.options.failureMessageKey,Alfresco.constants.USERNAME),modal:true})}})})();