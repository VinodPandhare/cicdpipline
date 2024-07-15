"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stringContainsNumberTokens=exports.extractTokenDouble=exports.createTokenDouble=exports.unresolved=exports.containsListTokenElement=exports.NullConcat=exports.regexQuote=exports.TokenString=exports.STRINGIFIED_NUMBER_PATTERN=exports.VALID_KEY_CHARS=exports.END_TOKEN_MARKER=exports.BEGIN_LIST_TOKEN_MARKER=exports.BEGIN_STRING_TOKEN_MARKER=void 0;var string_fragments_1=()=>{var tmp=require("../string-fragments");return string_fragments_1=()=>tmp,tmp},token_1=()=>{var tmp=require("../token");return token_1=()=>tmp,tmp};exports.BEGIN_STRING_TOKEN_MARKER="${Token[",exports.BEGIN_LIST_TOKEN_MARKER="#{Token[",exports.END_TOKEN_MARKER="]}",exports.VALID_KEY_CHARS="a-zA-Z0-9:._-";const QUOTED_BEGIN_STRING_TOKEN_MARKER=regexQuote(exports.BEGIN_STRING_TOKEN_MARKER),QUOTED_BEGIN_LIST_TOKEN_MARKER=regexQuote(exports.BEGIN_LIST_TOKEN_MARKER),QUOTED_END_TOKEN_MARKER=regexQuote(exports.END_TOKEN_MARKER);exports.STRINGIFIED_NUMBER_PATTERN="-1\\.\\d{10,16}e\\+289";const STRING_TOKEN_REGEX=new RegExp(`${QUOTED_BEGIN_STRING_TOKEN_MARKER}([${exports.VALID_KEY_CHARS}]+)${QUOTED_END_TOKEN_MARKER}|(${exports.STRINGIFIED_NUMBER_PATTERN})`,"g"),LIST_TOKEN_REGEX=new RegExp(`${QUOTED_BEGIN_LIST_TOKEN_MARKER}([${exports.VALID_KEY_CHARS}]+)${QUOTED_END_TOKEN_MARKER}`,"g");class TokenString{static forString(s){return new TokenString(s,STRING_TOKEN_REGEX)}static forListToken(s){return new TokenString(s,LIST_TOKEN_REGEX)}constructor(str,re){this.str=str,this.re=re}split(lookup){const ret=new(string_fragments_1()).TokenizedStringFragments;let rest=0;this.re.lastIndex=0;let m=this.re.exec(this.str);for(;m;)m.index>rest&&ret.addLiteral(this.str.substring(rest,m.index)),ret.addToken(lookup(m[1]??m[2])),rest=this.re.lastIndex,m=this.re.exec(this.str);return rest<this.str.length&&ret.addLiteral(this.str.substring(rest)),ret}test(){return this.re.lastIndex=0,this.re.test(this.str)}}exports.TokenString=TokenString;function regexQuote(s){return s.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}exports.regexQuote=regexQuote;class NullConcat{join(_left,_right){}}exports.NullConcat=NullConcat;function containsListTokenElement(xs){return xs.some(x=>typeof x=="string"&&TokenString.forListToken(x).test())}exports.containsListTokenElement=containsListTokenElement;function unresolved(obj){return typeof obj=="string"?TokenString.forString(obj).test():typeof obj=="number"?extractTokenDouble(obj)!==void 0:Array.isArray(obj)&&obj.length===1?typeof obj[0]=="string"&&TokenString.forListToken(obj[0]).test():(0,token_1().isResolvableObject)(obj)}exports.unresolved=unresolved;const DOUBLE_TOKEN_MARKER_BITS=-67174400,MAX_ENCODABLE_INTEGER=Math.pow(2,48)-1,BITS32=Math.pow(2,32);function createTokenDouble(x){if(Math.floor(x)!==x||x<0)throw new Error("Can only encode positive integers");if(x>MAX_ENCODABLE_INTEGER)throw new Error(`Got an index too large to encode: ${x}`);const buf=new ArrayBuffer(8),ints=new Uint32Array(buf);return ints[0]=x&4294967295,ints[1]=shr32(x)&65535|DOUBLE_TOKEN_MARKER_BITS,new Float64Array(buf)[0]}exports.createTokenDouble=createTokenDouble;function shr32(x){return Math.floor(x/BITS32)}function shl32(x){return x*BITS32}function extractTokenDouble(encoded){const buf=new ArrayBuffer(8);new Float64Array(buf)[0]=encoded;const ints=new Uint32Array(buf);if((ints[1]&4294901760)===DOUBLE_TOKEN_MARKER_BITS)return ints[0]+shl32(ints[1]&65535)}exports.extractTokenDouble=extractTokenDouble;const STRINGIFIED_NUMBER_REGEX=new RegExp(exports.STRINGIFIED_NUMBER_PATTERN);function stringContainsNumberTokens(x){return!!x.match(STRINGIFIED_NUMBER_REGEX)}exports.stringContainsNumberTokens=stringContainsNumberTokens;
