tinymce.PluginManager.add("autolink",function(d){var a;d.on("keydown",function(g){if(g.keyCode==13){return c(d)}});if(tinymce.Env.ie){d.on("focus",function(){if(!a){a=true;try{d.execCommand("AutoUrlDetect",false,true)}catch(g){}}});return}d.on("keypress",function(g){if(g.which==41){return e(d)}});d.on("keyup",function(g){if(g.keyCode==32){return b(d)}});function e(g){f(g,-1,"(",true)}function b(g){f(g,0,"",true)}function c(g){f(g,-1,"",false)}function f(o,j,h){var g,l,i,s,p,r,m,k,n;g=o.selection.getRng(true).cloneRange();if(g.startOffset<5){k=g.endContainer.previousSibling;if(!k){if(!g.endContainer.firstChild||!g.endContainer.firstChild.nextSibling){return}k=g.endContainer.firstChild.nextSibling}n=k.length;g.setStart(k,n);g.setEnd(k,n);if(g.endOffset<5){return}l=g.endOffset;s=k}else{s=g.endContainer;if(s.nodeType!=3&&s.firstChild){while(s.nodeType!=3&&s.firstChild){s=s.firstChild}if(s.nodeType==3){g.setStart(s,0);g.setEnd(s,s.nodeValue.length)}}if(g.endOffset==1){l=2}else{l=g.endOffset-1-j}}i=l;do{g.setStart(s,l>=2?l-2:0);g.setEnd(s,l>=1?l-1:0);l-=1}while(g.toString()!=" "&&g.toString()!==""&&g.toString().charCodeAt(0)!=160&&(l-2)>=0&&g.toString()!=h);if(g.toString()==h||g.toString().charCodeAt(0)==160){g.setStart(s,l);g.setEnd(s,i);l+=1}else{if(g.startOffset===0){g.setStart(s,0);g.setEnd(s,i)}else{g.setStart(s,l);g.setEnd(s,i)}}r=g.toString();if(r.charAt(r.length-1)=="."){g.setEnd(s,i-1)}r=g.toString();m=r.match(/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i);if(m){if(m[1]=="www."){m[1]="http://www."}else{if(/@$/.test(m[1])&&!/^mailto:/.test(m[1])){m[1]="mailto:"+m[1]}}p=o.selection.getBookmark();o.selection.setRng(g);o.execCommand("createlink",false,m[1]+m[2]);o.selection.moveToBookmark(p);o.nodeChanged();if(tinymce.Env.webkit){o.selection.collapse(false);var q=Math.min(s.length,i+1);g.setStart(s,q);g.setEnd(s,q);o.selection.setRng(g)}}}});