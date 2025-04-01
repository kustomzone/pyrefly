"use strict";
(self["webpackChunknew_website"] = self["webpackChunknew_website"] || []).push([[3872,6107],{

/***/ 32855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xk: () => (/* binding */ props)
/* harmony export */ });
/* unused harmony exports attrs, create, createTheme, defineVars, firstThatWorks, keyframes, legacyMerge, types */
var styleq={};var hasRequiredStyleq;function requireStyleq(){if(hasRequiredStyleq)return styleq;hasRequiredStyleq=1;Object.defineProperty(styleq,"__esModule",{value:true});styleq.styleq=void 0;var cache=new WeakMap();var compiledKey='$$css';function createStyleq(options){var disableCache;var disableMix;var transform;if(options!=null){disableCache=options.disableCache===true;disableMix=options.disableMix===true;transform=options.transform;}return function styleq(){var definedProperties=[];var className='';var inlineStyle=null;var debugString='';var nextCache=disableCache?null:cache;var styles=new Array(arguments.length);for(var i=0;i<arguments.length;i++){styles[i]=arguments[i];}while(styles.length>0){var possibleStyle=styles.pop();if(possibleStyle==null||possibleStyle===false){continue;}if(Array.isArray(possibleStyle)){for(var _i=0;_i<possibleStyle.length;_i++){styles.push(possibleStyle[_i]);}continue;}var style=transform!=null?transform(possibleStyle):possibleStyle;if(style.$$css!=null){var classNameChunk='';if(nextCache!=null&&nextCache.has(style)){var cacheEntry=nextCache.get(style);if(cacheEntry!=null){classNameChunk=cacheEntry[0];debugString=cacheEntry[2];definedProperties.push.apply(definedProperties,cacheEntry[1]);nextCache=cacheEntry[3];}}else{var definedPropertiesChunk=[];for(var prop in style){var value=style[prop];if(prop===compiledKey){var compiledKeyValue=style[prop];if(compiledKeyValue!==true){debugString=debugString?compiledKeyValue+'; '+debugString:compiledKeyValue;}continue;}if(typeof value==='string'||value===null){if(!definedProperties.includes(prop)){definedProperties.push(prop);if(nextCache!=null){definedPropertiesChunk.push(prop);}if(typeof value==='string'){classNameChunk+=classNameChunk?' '+value:value;}}}else{console.error("styleq: ".concat(prop," typeof ").concat(String(value)," is not \"string\" or \"null\"."));}}if(nextCache!=null){var weakMap=new WeakMap();nextCache.set(style,[classNameChunk,definedPropertiesChunk,debugString,weakMap]);nextCache=weakMap;}}if(classNameChunk){className=className?classNameChunk+' '+className:classNameChunk;}}else{if(disableMix){if(inlineStyle==null){inlineStyle={};}inlineStyle=Object.assign({},style,inlineStyle);}else{var subStyle=null;for(var _prop in style){var _value=style[_prop];if(_value!==undefined){if(!definedProperties.includes(_prop)){if(_value!=null){if(inlineStyle==null){inlineStyle={};}if(subStyle==null){subStyle={};}subStyle[_prop]=_value;}definedProperties.push(_prop);nextCache=null;}}}if(subStyle!=null){inlineStyle=Object.assign(subStyle,inlineStyle);}}}}var styleProps=[className,inlineStyle,debugString];return styleProps;};}var styleq$1=styleq.styleq=createStyleq();styleq$1.factory=createStyleq;return styleq;}var styleqExports=requireStyleq();const errorForFn=name=>new Error(`Unexpected 'stylex.${name}' call at runtime. Styles must be compiled by '@stylexjs/babel-plugin'.`);const errorForType=key=>errorForFn(`types.${key}`);function attrs(){const{className,'data-style-src':dataStyleSrc,style}=props(...arguments);const result={};if(className!=null&&className!==''){result.class=className;}if(style!=null&&Object.keys(style).length>0){result.style=Object.keys(style).map(key=>`${key}:${style[key]};`).join('');}if(dataStyleSrc!=null&&dataStyleSrc!==''){result['data-style-src']=dataStyleSrc;}return result;}const create=function stylexCreate(_styles){throw errorForFn('create');};const createTheme=(_baseTokens,_overrides)=>{throw errorForFn('createTheme');};const defineVars=function stylexDefineVars(_styles){throw errorForFn('defineVars');};const firstThatWorks=function(){throw errorForFn('firstThatWorks');};const keyframes=_keyframes=>{throw errorForFn('keyframes');};function props(){for(var _len=arguments.length,styles=new Array(_len),_key=0;_key<_len;_key++){styles[_key]=arguments[_key];}const[className,style,dataStyleSrc]=styleqExports.styleq(styles);const result={};if(className!=null&&className!==''){result.className=className;}if(style!=null&&Object.keys(style).length>0){result.style=style;}if(dataStyleSrc!=null&&dataStyleSrc!==''){result['data-style-src']=dataStyleSrc;}return result;}const types={angle:_v=>{throw errorForType('angle');},color:_v=>{throw errorForType('color');},url:_v=>{throw errorForType('url');},image:_v=>{throw errorForType('image');},integer:_v=>{throw errorForType('integer');},lengthPercentage:_v=>{throw errorForType('lengthPercentage');},length:_v=>{throw errorForType('length');},percentage:_v=>{throw errorForType('percentage');},number:_v=>{throw errorForType('number');},resolution:_v=>{throw errorForType('resolution');},time:_v=>{throw errorForType('time');},transformFunction:_v=>{throw errorForType('transformFunction');},transformList:_v=>{throw errorForType('transformList');}};function _legacyMerge(){for(var _len2=arguments.length,styles=new Array(_len2),_key2=0;_key2<_len2;_key2++){styles[_key2]=arguments[_key2];}const[className]=styleqExports.styleq(styles);return className;}_legacyMerge.attrs=attrs;_legacyMerge.create=create;_legacyMerge.createTheme=createTheme;_legacyMerge.defineVars=defineVars;_legacyMerge.firstThatWorks=firstThatWorks;_legacyMerge.keyframes=keyframes;_legacyMerge.props=props;_legacyMerge.types=types;const legacyMerge=(/* unused pure expression or super */ null && (_legacyMerge));

/***/ }),

/***/ 46107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84515);
/* harmony import */ var _newLandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73872);
/* harmony import */ var _components_landing_page_landingPageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68168);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40797);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */// This import serves no runtime purposes, but we import it to force webpack to run babel on it,
// so we can test whether babel can handle newer syntax.
function Home(){const{siteConfig}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__["default"])();// TODO (T218370640): replace current landing page with new landing page
return  false?/*#__PURE__*/0:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"Pyrefly: A Static Type Checker for Python",description:siteConfig.description,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_landing_page_landingPageHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{})});}

/***/ }),

/***/ 68168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ LandingPageHeader)
});

// EXTERNAL MODULE: ./node_modules/@stylexjs/stylex/lib/es/stylex.mjs
var stylex = __webpack_require__(32855);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/components/landing-page/firefly.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function Firefly(){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{...{className:"x3ct3a4 x16rqkct x19fix8x x170jfvy x1fsd2vl xg01cxk x10l6tqk x15sbw6u x4rx2xt x470at9 xzhg0zl xvxyf3w x1sqp6r9 x1sqc0ei"}});}const leftright="x1dalks7-B";const leftright2="xj6dno5-B";const updown="x1wd39ne-B";const updown2="x1q89cpx-B";const blinking="x17ga5y3-B";
;// ./src/components/landing-page/landingPageHeader.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function LandingPageHeader(){return/*#__PURE__*/(0,jsx_runtime.jsx)("header",{...{className:"x1qpwmzg xh8yej3 x6s0dn4 x1n2onr6 xb3r6kr x1eqz52 xiuzu7u xvmahel x8x9d4c xack27t x1159mfc x98rzlu"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("h1",{...{className:"x2b8uid x1unp1qu x1hpjnmm x119si65 x10egjwc x11yrx7q x1gqkl6o x6w6hho xybw3dt x183widm x1p1d97 x1viv3kb"},children:["pyrefly",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"."})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{...{className:"x117nqv4 x2b8uid xyi6m4r x12xc60p x1s3a40q x364lue x1yzo15c xoprfo3 xl8vnt6 xhz9g18 x1p1d97 x1qgppyl"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"https://github.com/facebook/pyrefly/milestone/1",...{className:"x14qql8p x1bvjpef xdnqva9 x1pz6rqt xddl0ns"},children:"Coming soon"}),": A faster Python type checker written in Rust"]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Firefly,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Firefly,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Firefly,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Firefly,{})]})]})});}

/***/ }),

/***/ 73872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NewLandingPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 62 modules
var Layout = __webpack_require__(84515);
// EXTERNAL MODULE: ./node_modules/@stylexjs/stylex/lib/es/stylex.mjs
var stylex = __webpack_require__(32855);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/components/landing-page/PerformanceComparisonButton.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function PerformanceComparisonButton(_ref){let{project,selectedProject,setSelectedProject}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{...{0:{className:"x174zr50 x12oqio5 x82gj7t xjbqb8w xp1ujoc x1ypdohk x1ng1d19"},1:{className:"x174zr50 x12oqio5 x82gj7t x1ypdohk x1ng1d19 x1e1ffwq x1awj2ng"}}[!!(selectedProject===project)<<0],onClick:()=>setSelectedProject(project),children:project});}
;// ./src/components/landing-page/ProgressBar.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function ProgressBar(_ref){let{durationInSeconds,maxDurationInSeconds}=_ref;// Calculate the relative percentage width based on the maximum duration
const relativeWidth=durationInSeconds/maxDurationInSeconds*100;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{...{className:"x18t7k3x x174e0gf xh8yej3 xb3r6kr"},style:{height:'100%',width:`${relativeWidth}%`},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{...{className:"x5yr21d x1e1ffwq x1pjcqnp x1hae8bu x10e4vud x1esw782"},style:{animationDuration:`${durationInSeconds}s`}})});}const fillUpKeyframes="x16mh4a0-B";
;// ./src/components/landing-page/PerformanceComparisonTypes.ts
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */let Project=/*#__PURE__*/function(Project){Project["INSTAGRAM"]="Instagram";Project["PYTORCH"]="PyTorch";Project["EXAMPLE"]="Example";return Project;}({});let TypeChecker=/*#__PURE__*/function(TypeChecker){TypeChecker["PYREFLY"]="Pyrefly";TypeChecker["PYRIGHT"]="Pyright";TypeChecker["MYPY"]="MyPy";TypeChecker["PYTYPE"]="Pytype";TypeChecker["PYRE1"]="Pyre1";return TypeChecker;}({});
;// ./src/components/landing-page/PerformanceComparisonChart.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function PerformanceComparisonChart(_ref){let{project}=_ref;const data=getData(project);// Calculate the maximum duration for scaling
const maxDuration=Math.max(...data.map(item=>item.durationInSeconds));return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:data.map((typechecker,index)=>/*#__PURE__*/(0,react.createElement)("div",{...stylex/* props */.xk(styles.barContainer,index!==data.length-1?{marginBottom:20}:null),key:index},/*#__PURE__*/(0,jsx_runtime.jsx)("span",{...{className:"x1rg5ohu xwsyq91 xrostsh"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:typechecker.typechecker})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{...{className:"x1iyjqo2 x1wh8b8d"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(ProgressBar,{durationInSeconds:typechecker.durationInSeconds,maxDurationInSeconds:maxDuration})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{...{className:"x8x9d4c"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:`${typechecker.durationInSeconds}s`})})))},project);}const styles={barContainer:{flex:"x98rzlu",flexGrow:null,flexShrink:null,flexBasis:null,display:"x78zum5",flexDirection:"x1q0g3np",$$css:true}};function getData(project){const filteredData=performanceComparsionChartData.filter(data=>data.project===project).map(data=>data.data);if(filteredData.length===0){throw new Error(`No data found for project ${project}`);}return filteredData[0];}const performanceComparsionChartData=[{project:Project.PYTORCH,data:[{typechecker:TypeChecker.PYREFLY,durationInSeconds:0.5},{typechecker:TypeChecker.MYPY,durationInSeconds:8},{typechecker:TypeChecker.PYRIGHT,durationInSeconds:5},{typechecker:TypeChecker.PYTYPE,durationInSeconds:12},{typechecker:TypeChecker.PYRE1,durationInSeconds:15}]},{project:Project.INSTAGRAM,data:[{typechecker:TypeChecker.PYREFLY,durationInSeconds:2},{typechecker:TypeChecker.MYPY,durationInSeconds:50},{typechecker:TypeChecker.PYRIGHT,durationInSeconds:20},{typechecker:TypeChecker.PYTYPE,durationInSeconds:40},{typechecker:TypeChecker.PYRE1,durationInSeconds:40}]},{project:Project.EXAMPLE,data:[{typechecker:TypeChecker.PYREFLY,durationInSeconds:2},{typechecker:TypeChecker.MYPY,durationInSeconds:10},{typechecker:TypeChecker.PYRIGHT,durationInSeconds:5},{typechecker:TypeChecker.PYTYPE,durationInSeconds:12},{typechecker:TypeChecker.PYRE1,durationInSeconds:12}]}];
;// ./src/components/landing-page/PerformanceComparisonChartSection.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function PerformanceComparisonChartSection(){const[selectedProject,setSelectedProject]=(0,react.useState)(Project.PYTORCH);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{...{className:"x1kylzug x1m3ak92 x4er351 xjdnhkh x18mflkt"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{...{className:"x78zum5 xl56j7k x8fetqu x1t84w78"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(PerformanceComparisonButton,{project:Project.PYTORCH,selectedProject:selectedProject,setSelectedProject:setSelectedProject}),/*#__PURE__*/(0,jsx_runtime.jsx)(PerformanceComparisonButton,{project:Project.INSTAGRAM,selectedProject:selectedProject,setSelectedProject:setSelectedProject}),/*#__PURE__*/(0,jsx_runtime.jsx)(PerformanceComparisonButton,{project:Project.EXAMPLE,selectedProject:selectedProject,setSelectedProject:setSelectedProject})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{...{className:"xnxx81d"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(PerformanceComparisonChart,{project:selectedProject})})]});}
;// ./src/components/landing-page/quoteCard.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function QuoteCard(_ref){let{quote,author,project}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{...{className:"xr6jg0x"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{...{className:"x1hptrd9 x1dbl2gt x1nhhxel x1k4tb9n"},children:quote}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{...{className:"x78zum5 xdt5ytf xvh977a"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:author}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:project})]})]});}
;// ./src/components/landing-page/quotesGrid.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function QuotesGrid(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{...{className:"xrvj5dj x1wlfl8j x1h4iudz x38r6qz"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(QuoteCard,{quote:"Pyre and Lint are hands down the most important investments Instagram has made into engineering productivity for our Python codebase. We could not have maintained our product dev velocity with so many people working in the codebase, all while serving 2 billion active users, without the safety and security of static analysis.",author:"<TO BE ADDED>",project:"Instagram Leadership"}),/*#__PURE__*/(0,jsx_runtime.jsx)(QuoteCard,{quote:"The enhanced type system and clear error messages have made our codebase more maintainable and easier to debug.",author:"<TO BE ADDED>",project:"core Contributor, PyTorch"}),/*#__PURE__*/(0,jsx_runtime.jsx)(QuoteCard,{quote:"As an early adopter, I'm impressed by Pyrefly's extensibility and the active community support. It's the future of Python type checking.",author:"<TO BE ADDED>",project:"<Open Source Project Name - TO BE ADDED>"})]});}
;// ./src/components/landing-page/whyPyreflyGridItem.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function WhyPyreflyGridItem(_ref){let{title,content}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{...{className:"xis3749"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{...{className:"x1hptrd9 x1dbl2gt xat24cr"},children:content})]});}
;// ./src/components/landing-page/whyPyrefly.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function WhyPyrefly(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{...{className:"xrvj5dj x1wlfl8j x1h4iudz x1uvg6xi xenpy2t"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(WhyPyreflyGridItem,{title:"Scale with Confidence",content:"Lightning fast, Pyrefly can process 1.8 million lines of code in a second!"}),/*#__PURE__*/(0,jsx_runtime.jsx)(WhyPyreflyGridItem,{title:"Developer Delight",content:" Write better code, faster, and with confidence using your favorite editor supported by the Pyrefly IDE."}),/*#__PURE__*/(0,jsx_runtime.jsx)(WhyPyreflyGridItem,{title:"Easy Onboarding",content:" Seamless transition from existing typechecker configurations to Pyrefly to get started!"}),/*#__PURE__*/(0,jsx_runtime.jsx)(WhyPyreflyGridItem,{title:"Codebase clarity",content:"Improve code readability and maintainability with precise type annotations."}),/*#__PURE__*/(0,jsx_runtime.jsx)(WhyPyreflyGridItem,{title:"Tooling for Improving Types",content:"Use the tools packaged with Pyrefly to elevate your typing coverage from 0 to 100."}),/*#__PURE__*/(0,jsx_runtime.jsx)(WhyPyreflyGridItem,{title:"Fully featured",content:"Follows the typing standards introduced in PEPs 484, 526, 612, along with being a typechecker that is being actively developed on and constantly improving."})]});}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
;// ./src/components/landing-page/featureDecorationsStyles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const featureDecorationsStyles_module = ({"featureDecoration":"featureDecoration_nit8","featureDecorationRise":"featureDecorationRise_HnYE","featureDecorationDrop":"featureDecorationDrop_1G5Z"});
;// ./src/components/landing-page/landingPageSection.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function LandingPageSection(_ref){let{title,child,isFirstSection=false,isLastSection=false,hasBrownBackground=false}=_ref;const backgroundColor=hasBrownBackground?'var(--color-background)':'var(--color-text)';return/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{...stylex/* props */.xk(landingPageSection_styles.section,isLastSection?landingPageSection_styles.lastSection:null,{background:backgroundColor}),children:[!isFirstSection&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m["default"])(featureDecorationsStyles_module.featureDecoration,featureDecorationsStyles_module.featureDecorationRise),style:{color:backgroundColor}}),!isLastSection&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m["default"])(featureDecorationsStyles_module.featureDecoration,featureDecorationsStyles_module.featureDecorationDrop),style:{color:backgroundColor}}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{...stylex/* props */.xk(landingPageSection_styles.sectionTitle,hasBrownBackground?{color:'var(--color-text)'}:null),children:title}),child]})]});}const landingPageSection_styles={section:{flex:"x98rzlu",flexGrow:null,flexShrink:null,flexBasis:null,position:"x1n2onr6",paddingBlock:"xqp6ajr",paddingTop:null,paddingBottom:null,$$css:true},lastSection:{paddingBottom:"xbaz6xv",$$css:true},sectionTitle:{fontSize:"x8cw2a4",marginTop:"x1cl2iem",$$css:true}};
// EXTERNAL MODULE: ./src/components/landing-page/landingPageHeader.tsx + 1 modules
var landingPageHeader = __webpack_require__(68168);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(40797);
;// ./src/pages/newLandingPage.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */// This import serves no runtime purposes, but we import it to force webpack to run babel on it,
// so we can test whether babel can handle newer syntax.
function NewLandingPage(){const{siteConfig}=(0,useDocusaurusContext["default"])();// TODO: update content and improve css
return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"Pyrefly: A Static Type Checker for Python",description:siteConfig.description,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(landingPageHeader/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(LandingPageSection,{title:"Why Pyrefly",child:/*#__PURE__*/(0,jsx_runtime.jsx)(WhyPyrefly,{}),isFirstSection:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(LandingPageSection,{title:"Performance Comparison",child:/*#__PURE__*/(0,jsx_runtime.jsx)(PerformanceComparisonChartSection,{}),hasBrownBackground:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(LandingPageSection,{title:"What People Say About Pyrefly",child:/*#__PURE__*/(0,jsx_runtime.jsx)(QuotesGrid,{}),isLastSection:true})]});}

/***/ })

}]);