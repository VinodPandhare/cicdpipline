"use strict";var __createBinding=exports&&exports.__createBinding||(Object.create?function(o,m,k,k2){k2===void 0&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){k2===void 0&&(k2=k),o[k2]=m[k]}),__exportStar=exports&&exports.__exportStar||function(m,exports2){for(var p in m)p!=="default"&&!Object.prototype.hasOwnProperty.call(exports2,p)&&__createBinding(exports2,m,p)};Object.defineProperty(exports,"__esModule",{value:!0});var _noFold;exports.TokenAuthorizer=void 0,Object.defineProperty(exports,_noFold="TokenAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./lambda").TokenAuthorizer}),exports.RequestAuthorizer=void 0,Object.defineProperty(exports,_noFold="RequestAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./lambda").RequestAuthorizer}),exports.IdentitySource=void 0,Object.defineProperty(exports,_noFold="IdentitySource",{enumerable:!0,configurable:!0,get:()=>require("./identity-source").IdentitySource}),exports.CognitoUserPoolsAuthorizer=void 0,Object.defineProperty(exports,_noFold="CognitoUserPoolsAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./cognito").CognitoUserPoolsAuthorizer});