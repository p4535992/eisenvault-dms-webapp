(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(c){var h="()[]{}''\"\"";var g="[]{}";var i=/\s/;var f=c.Pos;c.defineOption("autoCloseBrackets",false,function(j,o,k){if(k!=c.Init&&k){j.removeKeyMap("autoCloseBrackets")}if(!o){return}var m=h,l=g;if(typeof o=="string"){m=o}else{if(typeof o=="object"){if(o.pairs!=null){m=o.pairs}if(o.explode!=null){l=o.explode}}}var n=b(m);if(l){n.Enter=a(l)}j.addKeyMap(n)});function d(j,l){var k=j.getRange(f(l.line,l.ch-1),f(l.line,l.ch+1));return k.length==2?k:null}function e(j,p,n){var k=j.getLine(p.line);var m=j.getTokenAt(p);if(/\bstring2?\b/.test(m.type)){return false}var o=new c.StringStream(k.slice(0,p.ch)+n+k.slice(p.ch),4);o.pos=o.start=m.start;for(;;){var l=j.getMode().token(o,m.state);if(o.pos>=p.ch+1){return/\bstring2?\b/.test(l)}o.start=o.pos}}function b(l){var m={name:"autoCloseBrackets",Backspace:function(n){if(n.getOption("disableInput")){return c.Pass}var o=n.listSelections();for(var p=0;p<o.length;p++){if(!o[p].empty()){return c.Pass}var q=d(n,o[p].head);if(!q||l.indexOf(q)%2!=0){return c.Pass}}for(var p=o.length-1;p>=0;p--){var r=o[p].head;n.replaceRange("",f(r.line,r.ch-1),f(r.line,r.ch+1))}}};var k="";for(var j=0;j<l.length;j+=2){(function(o,n){if(o!=n){k+=n}m["'"+o+"'"]=function(p){if(p.getOption("disableInput")){return c.Pass}var q=p.listSelections(),v,u;for(var t=0;t<q.length;t++){var r=q[t],w=r.head,s;var u=p.getRange(w,f(w.line,w.ch+1));if(!r.empty()){s="surround"}else{if(o==n&&u==n){if(p.getRange(w,f(w.line,w.ch+3))==o+o+o){s="skipThree"}else{s="skip"}}else{if(o==n&&w.ch>1&&p.getRange(f(w.line,w.ch-2),w)==o+o&&(w.ch<=2||p.getRange(f(w.line,w.ch-3),f(w.line,w.ch-2))!=o)){s="addFour"}else{if(o=='"'||o=="'"){if(!c.isWordChar(u)&&e(p,w,o)){s="both"}else{return c.Pass}}else{if(p.getLine(w.line).length==w.ch||k.indexOf(u)>=0||i.test(u)){s="both"}else{return c.Pass}}}}}if(!v){v=s}else{if(v!=s){return c.Pass}}}p.operation(function(){if(v=="skip"){p.execCommand("goCharRight")}else{if(v=="skipThree"){for(var y=0;y<3;y++){p.execCommand("goCharRight")}}else{if(v=="surround"){var x=p.getSelections();for(var y=0;y<x.length;y++){x[y]=o+x[y]+n}p.replaceSelections(x,"around")}else{if(v=="both"){p.replaceSelection(o+n,null);p.execCommand("goCharLeft")}else{if(v=="addFour"){p.replaceSelection(o+o+o+o,"before");p.execCommand("goCharRight")}}}}}})};if(o!=n){m["'"+n+"'"]=function(p){var q=p.listSelections();for(var s=0;s<q.length;s++){var r=q[s];if(!r.empty()||p.getRange(r.head,f(r.head.line,r.head.ch+1))!=n){return c.Pass}}p.execCommand("goCharRight")}}})(l.charAt(j),l.charAt(j+1))}return m}function a(j){return function(k){if(k.getOption("disableInput")){return c.Pass}var l=k.listSelections();for(var m=0;m<l.length;m++){if(!l[m].empty()){return c.Pass}var n=d(k,l[m].head);if(!n||j.indexOf(n)%2!=0){return c.Pass}}k.operation(function(){k.replaceSelection("\n\n",null);k.execCommand("goCharLeft");l=k.listSelections();for(var p=0;p<l.length;p++){var o=l[p].head.line;k.indentLine(o,null,true);k.indentLine(o+1,null,true)}})}}});