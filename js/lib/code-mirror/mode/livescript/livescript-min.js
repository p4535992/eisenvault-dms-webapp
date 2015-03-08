(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(c){c.defineMode("livescript",function(){var m=function(u,q){var t=q.next||"start";if(t){q.next=q.next;var p=h[t];if(p.splice){for(var s=0;s<p.length;++s){var o=p[s],n;if(o.regex&&(n=u.match(o.regex))){q.next=o.next||q.next;return o.token}}u.next();return"error"}if(u.match(o=h[t])){if(o.regex&&u.match(o.regex)){q.next=o.next;return o.token}else{u.next();return"error"}}}u.next();return"error"};var i={startState:function(){return{next:"start",lastToken:null}},token:function(p,o){while(p.pos==p.start){var n=m(p,o)}o.lastToken={style:n,indent:p.indentation(),content:p.current()};return n.replace(/\./g," ")},indent:function(o){var n=o.lastToken.indent;if(o.lastToken.content.match(b)){n+=2}return n}};return i});var g="(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*";var b=RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*"+g+")?))\\s*$");var l="(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))";var j={token:"string",regex:".+"};var h={start:[{token:"comment.doc",regex:"/\\*",next:"comment"},{token:"comment",regex:"#.*"},{token:"keyword",regex:"(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)"+l},{token:"constant.language",regex:"(?:true|false|yes|no|on|off|null|void|undefined)"+l},{token:"invalid.illegal",regex:"(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)"+l},{token:"language.support.class",regex:"(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)"+l},{token:"language.support.function",regex:"(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)"+l},{token:"variable.language",regex:"(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)"+l},{token:"identifier",regex:g+"\\s*:(?![:=])"},{token:"variable",regex:g},{token:"keyword.operator",regex:"(?:\\.{3}|\\s+\\?)"},{token:"keyword.variable",regex:"(?:@+|::|\\.\\.)",next:"key"},{token:"keyword.operator",regex:"\\.\\s*",next:"key"},{token:"string",regex:"\\\\\\S[^\\s,;)}\\]]*"},{token:"string.doc",regex:"'''",next:"qdoc"},{token:"string.doc",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string",regex:"<\\[",next:"words"},{token:"string.regex",regex:"//",next:"heregex"},{token:"string.regex",regex:"\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",next:"key"},{token:"constant.numeric",regex:"(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"},{token:"lparen",regex:"[({[]"},{token:"rparen",regex:"[)}\\]]",next:"key"},{token:"keyword.operator",regex:"\\S+"},{token:"text",regex:"\\s+"}],heregex:[{token:"string.regex",regex:".*?//[gimy$?]{0,4}",next:"start"},{token:"string.regex",regex:"\\s*#{"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",regex:"\\S+"}],key:[{token:"keyword.operator",regex:"[.?@!]+"},{token:"identifier",regex:g,next:"start"},{token:"text",regex:"",next:"start"}],comment:[{token:"comment.doc",regex:".*?\\*/",next:"start"},{token:"comment.doc",regex:".+"}],qdoc:[{token:"string",regex:".*?'''",next:"key"},j],qqdoc:[{token:"string",regex:'.*?"""',next:"key"},j],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"key"},j],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"key"},j],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"key"},j],words:[{token:"string",regex:".*?\\]>",next:"key"},j]};for(var k in h){var a=h[k];if(a.splice){for(var e=0,f=a.length;e<f;++e){var d=a[e];if(typeof d.regex==="string"){h[k][e].regex=new RegExp("^"+d.regex)}}}else{if(typeof d.regex==="string"){h[k].regex=new RegExp("^"+a.regex)}}}c.defineMIME("text/x-livescript","livescript")});