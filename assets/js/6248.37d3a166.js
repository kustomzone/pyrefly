"use strict";
(self["webpackChunknew_website"] = self["webpackChunknew_website"] || []).push([[6248],{

/***/ 16248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TryPyre2)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@monaco-editor/react/dist/index.mjs + 11 modules
var dist = __webpack_require__(68553);
// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__(32992);
;// ./src/try-pyre2/TryPyre2.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TryPyre2_module = ({"tryEditorConfig":"tryEditorConfig_Bkqa","tryEditorConfigInputCell":"tryEditorConfigInputCell_Ka7y","tryEditorConfigLabelCell":"tryEditorConfigLabelCell_MSJe","tryEditorConfigLabel":"tryEditorConfigLabel_T3Va","resetBanner":"resetBanner_DRfj","tryEditor":"tryEditor_uaey","codeEditorContainer":"codeEditorContainer_RVB7","shareButton":"shareButton_eTkx","shareButtonText":"shareButtonText_cSra","shareButtonCopied":"shareButtonCopied_kCab","copySuccess":"copySuccess_T3gl","buttonText":"buttonText_RZSd","results":"results_FNre","resultsToolbar":"resultsToolbar_CrSQ","resultsContainer":"resultsContainer_CGW1","resultBody":"resultBody_V266","tabs":"tabs_u867","tab":"tab_a7pb","version":"version_TzBo","versionWarning":"versionWarning_gdOw","selectedTab":"selectedTab_xnhj","loader":"loader_Z7Ct","sk-bouncedelay":"sk-bouncedelay_nuzq","bounce1":"bounce1_NjUp","bounce2":"bounce2_SM41","errors":"errors_bNYi","msgHighlight":"msgHighlight__Bsa","msgType":"msgType_a5Tw","refinedValueDecoration":"refinedValueDecoration_xkkD","errorMessageError":"errorMessageError_Eust"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/try-pyre2/TryPyre2Results.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function ErrorMessage(_ref){let{error,goToDef}=_ref;// This logic is meant to be an exact match of how we output errors in the cli defined here:
// - https://fburl.com/code/e9lqk0h2
// - https://fburl.com/code/hwhe60zt
// TODO (T217247871): expose full error message from Pyre2 binary and use it directly here instead of duplicating the logic
const{startLineNumber,startColumn,endLineNumber,endColumn}=error;let rangeStr;if(startLineNumber===endLineNumber){if(startColumn===endColumn){rangeStr=`${startLineNumber}:${startColumn}`;}else{rangeStr=`${startLineNumber}:${startColumn}-${endColumn}`;}}else{rangeStr=`${startLineNumber}:${startColumn}-${endLineNumber}:${endColumn}`;}const message=`${rangeStr}: [${error.kind}] ${error.message}`;return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:TryPyre2_module.msgType,onClick:()=>goToDef(startLineNumber,startColumn,endLineNumber,endColumn),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:TryPyre2_module.errorMessageError,children:"ERROR "}),message]});}function TryPyre2Results(_ref2){let{loading,goToDef,errors,internalError}=_ref2;const activeToolbarTab='errors';return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TryPyre2_module.resultsContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:TryPyre2_module.resultsToolbar,children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:TryPyre2_module.tabs,children:/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:(0,clsx_m["default"])(TryPyre2_module.tab,activeToolbarTab==='errors'&&TryPyre2_module.selectedTab),children:"Errors"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TryPyre2_module.results,children:[loading&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TryPyre2_module.loader,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:TryPyre2_module.bounce1}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:TryPyre2_module.bounce2}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{})]})}),!loading&&activeToolbarTab==='errors'&&/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{className:(0,clsx_m["default"])(TryPyre2_module.resultBody,TryPyre2_module.errors),children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{children:internalError?/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:["Pyrefly encountered an internal error: ",internalError,"."]}):errors===undefined||errors===null?/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Pyrefly failed to fetch errors."}):errors?.length===0?/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"No errors!"}):errors.map((error,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorMessage,{error:error,goToDef:goToDef},i)},i))})})]})]});}
// EXTERNAL MODULE: include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.main.js + 4 modules
var editor_main = __webpack_require__(84138);
;// ./src/try-pyre2/configured-monaco.ts
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */const defaultAutoCompleteFunctionForMonaco=(_line,_column)=>{throw'not implemented';};const autoCompleteFunctionsForMonaco=new Map();function setAutoCompleteFunction(model,f){autoCompleteFunctionsForMonaco.set(model,f);}const defaultGetDefFunctionForMonaco=(_l,_c)=>null;const getDefFunctionsForMonaco=new Map();function setGetDefFunction(model,f){getDefFunctionsForMonaco.set(model,f);}const defaultHoverFunctionForMonaco=(_l,_c)=>null;const hoverFunctionsForMonaco=new Map();function setHoverFunctionForMonaco(model,f){hoverFunctionsForMonaco.set(model,f);}const defaultInlayHintFunctionForMonaco=()=>[];const inlayHintFunctionsForMonaco=new Map();function setInlayHintFunctionForMonaco(model,f){inlayHintFunctionsForMonaco.set(model,f);}editor_main.languages.register({id:'python',extensions:['.py'],aliases:['Python']});editor_main.languages.registerCompletionItemProvider('python',{triggerCharacters:['.','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','[','"',"'"],provideCompletionItems(model,position){try{const f=autoCompleteFunctionsForMonaco.get(model)??defaultAutoCompleteFunctionForMonaco;const result=f(position.lineNumber,position.column);return{suggestions:result.map(r=>({...r,insertText:r.label.toString()}))};}catch(e){console.error(e);return null;}}});editor_main.languages.registerDefinitionProvider('python',{provideDefinition(model,position){try{const f=getDefFunctionsForMonaco.get(model)??defaultGetDefFunctionForMonaco;const range=f(position.lineNumber,position.column);return range!=null?{uri:model.uri,range}:null;}catch(e){console.error(e);return null;}}});editor_main.languages.registerHoverProvider('python',{provideHover(model,position){const f=hoverFunctionsForMonaco.get(model)??defaultHoverFunctionForMonaco;const result=f(position.lineNumber,position.column);return result;}});editor_main.languages.registerInlayHintsProvider('python',{provideInlayHints(model){const f=inlayHintFunctionsForMonaco.get(model)??defaultInlayHintFunctionForMonaco;const hints=f();return{hints,dispose:()=>{}};}});// Monaco editor types are now properly handled
dist/* loader */.wG.config({monaco: editor_main});
;// ./src/try-pyre2/TryPyre2.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */const DEFAULT_PYTHON_PROGRAM=`
from typing import *

def test(x: int):
  return f"{x}"

# reveal_type will produce a type error that tells you the type Pyrefly has
# computed for the return (in this case, str)
reveal_type(test(42))
`.trimStart();// Import type for Pyre2 State
const pyre2WasmUninitializedPromise=typeof window!=='undefined'?__webpack_require__.e(/* import() */ 930).then(__webpack_require__.bind(__webpack_require__, 50930)):new Promise(_resolve=>{});const pyre2WasmInitializedPromise=pyre2WasmUninitializedPromise.then(async mod=>{await mod.default();return mod;}).catch(e=>console.log(e));function TryPyre2(_ref){let{sampleFilename,isCodeSnippet=false,codeSample=DEFAULT_PYTHON_PROGRAM,showErrorPanel=true}=_ref;const editorRef=(0,react.useRef)(null);const[errors,setErrors]=(0,react.useState)([]);const[internalError,setInternalError]=(0,react.useState)('');const[loading,setLoading]=(0,react.useState)(true);const[pyreService,setPyreService]=(0,react.useState)(null);const[editorHeightforCodeSnippet,setEditorHeightforCodeSnippet]=(0,react.useState)(null);const[model,setModel]=(0,react.useState)(null);const[isCopied,setIsCopied]=(0,react.useState)(false);// Only run for initial render, and not on subsequent updates
(0,react.useEffect)(()=>{setLoading(true);pyre2WasmInitializedPromise.then(pyre2=>{setPyreService(new pyre2.State());setLoading(false);setInternalError('');}).catch(e=>{setLoading(false);setInternalError(JSON.stringify(e));});},[]);// Need to add createModel handler in case monaco model was not created at mount time
editor_main.editor.onDidCreateModel(model=>{const curModel=fetchCurMonacoModelAndTriggerUpdate(sampleFilename);setModel(curModel);forceRecheck();});// Recheck when pyre service or model changes
(0,react.useEffect)(()=>{forceRecheck();},[pyreService,model]);function forceRecheck(){if(model==null||pyreService==null)return;const value=model.getValue();setAutoCompleteFunction(model,(l,c)=>pyreService.autoComplete(l,c));setGetDefFunction(model,(l,c)=>pyreService.gotoDefinition(l,c));setHoverFunctionForMonaco(model,(l,c)=>pyreService.queryType(l,c));setInlayHintFunctionForMonaco(model,()=>pyreService.inlayHint());// typecheck on edit
try{pyreService.updateSource(model.getValue());const errors=pyreService.getErrors();editor_main.editor.setModelMarkers(model,'default',mapPyreflyErrorsToMarkerData(errors));setInternalError('');setErrors(errors);}catch(e){console.error(e);setInternalError(JSON.stringify(e));setErrors([]);}}function onEditorMount(editor){const model=fetchCurMonacoModelAndTriggerUpdate(sampleFilename);setModel(model);if(isCodeSnippet){setEditorHeightforCodeSnippet(Math.max(50,editor.getContentHeight()));}editorRef.current=editor;}const handleGoToDefFromErrors=(startLineNumber,startColumn,endLineNumber,endColumn)=>{const editor=editorRef.current;if(editor===null){return;}const range={startLineNumber,startColumn,endLineNumber,endColumn};editor.revealRange(range);editor.setSelection(range);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TryPyre2_module.tryEditor,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TryPyre2_module.codeEditorContainer,children:[getPyre2Editor(isCodeSnippet,sampleFilename,codeSample,forceRecheck,onEditorMount,editorHeightforCodeSnippet),!isCodeSnippet&&/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:(0,clsx_m["default"])(TryPyre2_module.shareButton,isCopied&&TryPyre2_module.shareButtonCopied),onClick:()=>copyToClipboard(setIsCopied),"aria-label":"share URL button",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:TryPyre2_module.shareButtonText,children:isCopied?'✓ URL Copied!':'📋 Share URL'})})]}),showErrorPanel&&/*#__PURE__*/(0,jsx_runtime.jsx)(TryPyre2Results,{loading:loading,goToDef:handleGoToDefFromErrors,errors:errors,internalError:internalError})]});}function updateURL(code){const compressed=lz_string.compressToEncodedURIComponent(code);const newURL=`${window.location.pathname}?code=${compressed}`;window.history.replaceState({},'',newURL);}function copyToClipboard(setIsCopied){const currentURL=window.location.href;navigator.clipboard.writeText(currentURL).then(()=>{setIsCopied(true);setTimeout(()=>setIsCopied(false),2000);});}function getCodeFromURL(){if(typeof window==='undefined')return null;const params=new URLSearchParams(window.location.search);const code=params.get('code');return code?lz_string.decompressFromEncodedURIComponent(code):null;}function fetchCurMonacoModelAndTriggerUpdate(fileName){const model=editor_main.editor.getModels().filter(model=>model?.uri?.path===`/${fileName}`)[0];if(model==null){return null;}const codeFromUrl=getCodeFromURL();if(codeFromUrl!=null&&model!=null){model.setValue(codeFromUrl);}// Force update to trigger initial inlay hint
model.setValue(model.getValue());// Ensure tab size is correctly set
model.updateOptions({tabSize:4,insertSpaces:true});return model;}function isMobile(){return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);}function getPyre2Editor(isCodeSnippet,fileName,codeSample,forceRecheck,onEditorMount,editorHeightforCodeSnippet){if(isCodeSnippet){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.Ay,{defaultPath:fileName,defaultValue:codeSample,defaultLanguage:"python",theme:"vs-light",onChange:forceRecheck,onMount:onEditorMount,keepCurrentModel:true,height:editorHeightforCodeSnippet,options:{readOnly:isMobile(),minimap:{enabled:false},hover:{enabled:true,above:false},scrollBeyondLastLine:false,overviewRulerBorder:false}});}else{// TODO (T217559369): Instead of manually calculating the sandbox height, we should
// use flexbox behavior to make the sandbox height to be 75% of the screen
// This doesn't seem to work with the monaco editor currently.
const screenHeight=window.innerHeight;const navbarElement=document.querySelector('.navbar');// Replace with your navbar selector
const navbarHeight=navbarElement?.offsetHeight||0;const sandboxHeight=(screenHeight-navbarHeight)*75/100;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.Ay,{defaultPath:fileName,defaultValue:codeSample,defaultLanguage:"python",theme:"vs-light",onChange:value=>{forceRecheck();if(typeof value==='string'){updateURL(value);}},onMount:onEditorMount,keepCurrentModel:true,height:sandboxHeight,options:{minimap:{enabled:false},hover:{enabled:true,above:false},scrollBeyondLastLine:false,overviewRulerBorder:false}});}}/**
 * Maps PyreflyErrorMessage array to Monaco editor IMarkerData array
 */function mapPyreflyErrorsToMarkerData(errors){return errors.map(error=>({startLineNumber:error.startLineNumber,startColumn:error.startColumn,endLineNumber:error.endLineNumber,endColumn:error.endColumn,message:error.message,severity:error.severity}));}

/***/ })

}]);