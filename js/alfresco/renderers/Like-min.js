define(["dojo/_base/declare","alfresco/renderers/Toggle","alfresco/services/_RatingsServiceTopicMixin","dojo/text!./templates/Like.html","dojo/_base/lang","dojo/html"],function(f,h,b,i,c,g){return f([h,b],{i18nRequirements:[{i18nFile:"./i18n/Like.properties"}],cssRequirements:[{cssFile:"./css/Like.css"}],templateString:i,onLabel:"",offLabel:"like.add.label",onTooltip:"like.remove.tooltip",offTooltip:"like.add.tooltip",toggleClass:"like",postMixInProperties:function a(){this.toggleOnTopic=(this.toggleOnTopic!=null)?this.toggleOnTopic:this.addRatingTopic;this.toggleOnSuccessTopic=(this.toggleOnSuccessTopic!=null)?this.toggleOnSuccessTopic:this.addRatingSuccessTopic;this.toggleOnFailureTopic=(this.toggleOnFailureTopic!=null)?this.toggleOnFailureTopic:this.addRatingFailureTopic;this.toggleOffTopic=(this.toggleOffTopic!=null)?this.toggleOffTopic:this.removeRatingTopic;this.toggleOffSuccessTopic=(this.toggleOffSuccessTopic!=null)?this.toggleOffSuccessTopic:this.removeRatingSuccessTopic;this.toggleOffFailureTopic=(this.toggleOffFailureTopic!=null)?this.toggleOffFailureTopic:this.removeRatingFailureTopic;this.inherited(arguments);this.likeCount=c.getObject(this.likeCountProperty,false,this.currentItem);if(this.likeCount==null){this.likeCount=0}},likeCountProperty:"likes.totalLikes",propertyToRender:"likes.isLiked",onToggleOnSuccess:function e(j){this.inherited(arguments);g.set(this.countNode,j.response.data.ratingsCount.toString())},onToggleOffSuccess:function d(j){this.inherited(arguments);g.set(this.countNode,j.response.data.ratingsCount.toString())}})});