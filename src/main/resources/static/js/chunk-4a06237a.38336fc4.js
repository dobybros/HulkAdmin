(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4a06237a"],{"71d2":function(t,i,n){"use strict";var e=n("9fa6");n.n(e).a},"9fa6":function(t,i,n){},d55d:function(t,i,n){"use strict";n.r(i);var e=n("1487"),s=n.n(e),h=(n("fb1d"),n("a481"),n("3b2b"),n("28a5"),function(t){var h=["__dataHolder_",[Math.random(),Math.random(),Math.random(),Math.random()].join("_").replace(/[^0-9]/g,"_"),"_"].join("_"),r={},a=0;return t=(t=function(t,i,n){var e;for((e=new function(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed".split(","),extra_liners:"head,body,/html".split(","),in_array:function(t,i){for(var n=0;n<i.length;n++)if(t===i[n])return!0;return!1}},this.get_content=function(){for(var t="",i=[],n=!1;"<"!==this.input.charAt(this.pos);){if(this.pos>=this.input.length)return i.length?i.join(""):["","TK_EOF"];if(t=this.input.charAt(this.pos),this.pos++,this.line_char_count++,this.Utils.in_array(t,this.Utils.whitespace))i.length&&(n=!0),this.line_char_count--;else{if(n){if(this.line_char_count>=this.max_char){i.push("\n");for(var e=0;e<this.indent_level;e++)i.push(this.indent_string);this.line_char_count=0}else i.push(" "),this.line_char_count++;n=!1}i.push(t)}}return i.length?i.join(""):""},this.get_script=function(){var t="",i=[],n=new RegExp("<\/script>","igm");n.lastIndex=this.pos;for(var e=n.exec(this.input),s=e?e.index:this.input.length;this.pos<s;){if(this.pos>=this.input.length)return i.length?i.join(""):["","TK_EOF"];t=this.input.charAt(this.pos),this.pos++,i.push(t)}return i.length?i.join(""):""},this.record_tag=function(t){this.tags[t+"count"]?this.tags[t+"count"]++:this.tags[t+"count"]=1,this.tags[t+this.tags[t+"count"]]=this.indent_level,this.tags[t+this.tags[t+"count"]+"parent"]=this.tags.parent,this.tags.parent=t+this.tags[t+"count"]},this.retrieve_tag=function(t){if(this.tags[t+"count"]){for(var i=this.tags.parent;i&&t+this.tags[t+"count"]!==i;)i=this.tags[i+"parent"];i&&(this.indent_level=this.tags[t+this.tags[t+"count"]],this.tags.parent=this.tags[i+"parent"]),delete this.tags[t+this.tags[t+"count"]+"parent"],delete this.tags[t+this.tags[t+"count"]],1==this.tags[t+"count"]?delete this.tags[t+"count"]:this.tags[t+"count"]--}},this.get_tag=function(){var t="",i=[],n=!1;do{if(this.pos>=this.input.length)return i.length?i.join(""):["","TK_EOF"];t=this.input.charAt(this.pos),this.pos++,this.line_char_count++,this.Utils.in_array(t,this.Utils.whitespace)?(n=!0,this.line_char_count--):("'"!==t&&'"'!==t||i[1]&&"!"===i[1]||(t+=this.get_unformatted(t),n=!0),"="===t&&(n=!1),i.length&&"="!==i[i.length-1]&&">"!==t&&n&&(this.line_char_count>=this.max_char?(this.print_newline(!1,i),this.line_char_count=0):(i.push(" "),this.line_char_count++),n=!1),i.push(t))}while(">"!==t);var e,s=i.join("");e=-1!=s.indexOf(" ")?s.indexOf(" "):s.indexOf(">");var h=s.substring(1,e).toLowerCase();if("/"===s.charAt(s.length-2)||this.Utils.in_array(h,this.Utils.single_token))this.tag_type="SINGLE";else if("script"===h)this.record_tag(h),this.tag_type="SCRIPT";else if("style"===h)this.record_tag(h),this.tag_type="STYLE";else if("!"===h.charAt(0))if(-1!=h.indexOf("[if")){if(-1!=s.indexOf("!IE")){var r=this.get_unformatted("--\x3e",s);i.push(r)}this.tag_type="START"}else-1!=h.indexOf("[endif")?(this.tag_type="END",this.unindent()):(r=-1!=h.indexOf("[cdata[")?this.get_unformatted("]]>",s):this.get_unformatted("--\x3e",s),i.push(r),this.tag_type="SINGLE");else"/"===h.charAt(0)?(this.retrieve_tag(h.substring(1)),this.tag_type="END"):(this.record_tag(h),this.tag_type="START"),this.Utils.in_array(h,this.Utils.extra_liners)&&this.print_newline(!0,this.output);return i.join("")},this.get_unformatted=function(t,i){if(i&&-1!=i.indexOf(t))return"";var n="",e="",s=!0;do{if(n=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(n,this.Utils.whitespace)){if(!s){this.line_char_count--;continue}if("\n"===n||"\r"===n){e+="\n";for(var h=0;h<this.indent_level;h++)e+=this.indent_string;s=!1,this.line_char_count=0;continue}}e+=n,this.line_char_count++,s=!0}while(-1==e.indexOf(t));return e},this.get_token=function(){var t;if("TK_TAG_SCRIPT"!==this.last_token)return"CONTENT"===this.current_mode?"string"!=typeof(t=this.get_content())?t:[t,"TK_CONTENT"]:"TAG"===this.current_mode?"string"!=typeof(t=this.get_tag())?t:[t,"TK_TAG_"+this.tag_type]:void 0;var i=this.get_script();return"string"!=typeof i?i:[i,"TK_CONTENT"]},this.printer=function(t,i,n,e){this.input=t||"",this.output=[],this.indent_character=i||" ",this.indent_string="",this.indent_size=n||2,this.indent_level=0,this.max_char=e||70;for(var s=this.line_char_count=0;s<this.indent_size;s++)this.indent_string+=this.indent_character;this.print_newline=function(t,i){if(this.line_char_count=0,i&&i.length){if(!t)for(;this.Utils.in_array(i[i.length-1],this.Utils.whitespace);)i.pop();i.push("\n");for(var n=0;n<this.indent_level;n++)i.push(this.indent_string)}},this.print_token=function(t){this.output.push(t)},this.indent=function(){this.indent_level++},this.unindent=function(){0<this.indent_level&&this.indent_level--}},this}).printer(t,n,i);;){var s=e.get_token();if(e.token_text=s[0],e.token_type=s[1],"TK_EOF"===e.token_type)break;switch(e.token_type){case"TK_TAG_START":case"TK_TAG_SCRIPT":case"TK_TAG_STYLE":e.print_newline(!1,e.output),e.print_token(e.token_text),e.indent(),e.current_mode="CONTENT";break;case"TK_TAG_END":e.print_newline(!0,e.output),e.print_token(e.token_text),e.current_mode="CONTENT";break;case"TK_TAG_SINGLE":e.print_newline(!1,e.output),e.print_token(e.token_text),e.current_mode="CONTENT";break;case"TK_CONTENT":""!==e.token_text&&(e.print_newline(!1,e.output),e.print_token(e.token_text)),e.current_mode="TAG"}e.last_token=e.token_type,e.last_text=e.token_text}return e.output.join("")}(t=t.replace(/(\")(data:[^\"]*)(\")/g,function(t,i,n,e){var s=h+a++;return r[s]=n,i+s+e}),2," ")).replace(new RegExp(h+"[0-9]+","g"),function(t){return r[t]})}),r={name:"d2-highlight",props:{code:{type:String,required:!1,default:""},formatHtml:{type:Boolean,required:!1,default:!1},lang:{type:String,required:!1,default:""}},data:function(){return{highlightHTML:""}},mounted:function(){this.highlight()},watch:{code:function(){this.highlight()}},methods:{highlight:function(){var t=this.formatHtml?h(this.code):this.code;this.highlightHTML=s.a.highlightAuto(t,[this.lang,"html","javascript","json","css","scss","less"]).value}}},a=(n("71d2"),n("2877")),o=function(t){t.options.__source="src/components/d2-highlight/index.vue"},_=Object(a.a)(r,function(){var t=this,i=t.$createElement;return(t._self._c||i)("pre",{staticClass:"d2-highlight hljs",domProps:{innerHTML:t._s(t.highlightHTML)}})},[],!1,null,"7606670d",null);"function"==typeof o&&o(_);i.default=_.exports}}]);