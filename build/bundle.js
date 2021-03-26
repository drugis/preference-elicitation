(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@material-ui/core"), require("@material-ui/core/Box"), require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Popover"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("@material-ui/icons/Help"), require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["@material-ui/core", "@material-ui/core/Box", "@material-ui/core/Button", "@material-ui/core/ButtonGroup", "@material-ui/core/Grid", "@material-ui/core/Paper", "@material-ui/core/Popover", "@material-ui/core/Radio", "@material-ui/core/RadioGroup", "@material-ui/core/Slider", "@material-ui/core/Table", "@material-ui/core/TableBody", "@material-ui/core/TableCell", "@material-ui/core/TableHead", "@material-ui/core/TableRow", "@material-ui/core/Tooltip", "@material-ui/core/Typography", "@material-ui/icons/Help", "react", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@material-ui/core"), require("@material-ui/core/Box"), require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Popover"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("@material-ui/icons/Help"), require("react"), require("lodash")) : factory(root["@material-ui/core"], root["@material-ui/core/Box"], root["@material-ui/core/Button"], root["@material-ui/core/ButtonGroup"], root["@material-ui/core/Grid"], root["@material-ui/core/Paper"], root["@material-ui/core/Popover"], root["@material-ui/core/Radio"], root["@material-ui/core/RadioGroup"], root["@material-ui/core/Slider"], root["@material-ui/core/Table"], root["@material-ui/core/TableBody"], root["@material-ui/core/TableCell"], root["@material-ui/core/TableHead"], root["@material-ui/core/TableRow"], root["@material-ui/core/Tooltip"], root["@material-ui/core/Typography"], root["@material-ui/icons/Help"], root["react"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__material_ui_core__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Box__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ButtonGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Popover__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Table__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableBody__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableCell__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableHead__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableRow__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tooltip__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__, __WEBPACK_EXTERNAL_MODULE__material_ui_icons_Help__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/help-popup/build/bundle.js":
/*!*************************************************!*\
  !*** ./node_modules/help-popup/build/bundle.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

!function(e,t){if(true)module.exports=t(__webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box"),__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"),__webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover"),__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"),__webpack_require__(/*! @material-ui/icons/Help */ "@material-ui/icons/Help"),__webpack_require__(/*! react */ "react"));else { var n, r; }}(self,(function(e,t,r,n,o,i){return(()=>{"use strict";var a={299:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.HelpContextProviderComponent=t.HelpContext=void 0;const a=i(r(297));t.HelpContext=a.createContext({}),t.HelpContextProviderComponent=function({host:e,path:r,lexicon:n,children:o}){return a.default.createElement(t.HelpContext.Provider,{value:{getHelpInfo:function(e){return n[e]?n[e]:{title:"unknown",link:"unknown",text:"unknown"}},baseUrl:e+r}},o)}},244:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(r(658)),u=a(r(720)),c=a(r(280)),f=a(r(740)),s=i(r(297)),d=r(299);t.default=function({helpId:e,omitQuestionMark:t,children:r}){const[n,o]=s.useState(),[i,a]=s.useState(),[p,m]=s.useState(),[x,h]=s.useState(null),{getHelpInfo:v,baseUrl:_}=s.useContext(d.HelpContext);return s.useEffect((()=>{const{title:t,text:r,link:n}=v(e);o(t),a(r),m(_+n)})),s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{onClick:function(e){h(e.currentTarget)},style:{textDecoration:"underline",textDecorationStyle:"dashed",textDecorationThickness:"1px",textDecorationColor:"darkgray",cursor:"help",alignItems:"center"}},r),t?s.default.createElement(s.default.Fragment,null):s.default.createElement("sup",{style:{color:"darkgray"}},"?"),s.default.createElement(c.default,{open:!!x,onClose:function(){h(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},anchorEl:x},s.default.createElement(u.default,{container:!0,component:l.default,p:2,maxWidth:"300px"},s.default.createElement(u.default,{item:!0,xs:12,style:{marginBottom:"10px"}},s.default.createElement(f.default,{variant:"h5"},n)),s.default.createElement(u.default,{item:!0,xs:12},i),s.default.createElement(u.default,{item:!0,xs:12},s.default.createElement("a",{href:p,target:"_blank"},"View in manual")))))}},784:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(191)),i=n(r(297)),a=n(r(244));t.default=function({helpId:e}){return i.default.createElement(a.default,{helpId:e,omitQuestionMark:!0},i.default.createElement(o.default,{fontSize:"small",style:{marginTop:"5px"}}))}},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InlineQuestionMark=t.InlineHelp=t.HelpContextProviderComponent=void 0;const o=r(299);Object.defineProperty(t,"HelpContextProviderComponent",{enumerable:!0,get:function(){return o.HelpContextProviderComponent}});const i=n(r(244));t.InlineHelp=i.default;const a=n(r(784));t.InlineQuestionMark=a.default},658:t=>{t.exports=e},720:e=>{e.exports=t},280:e=>{e.exports=r},740:e=>{e.exports=n},191:e=>{e.exports=o},297:e=>{e.exports=i}},l={};return function e(t){if(l[t])return l[t].exports;var r=l[t]={exports:{}};return a[t].call(r.exports,r,r.exports,e),r.exports}(607)})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0lubGluZUhlbHAvSW5saW5lSGVscC50c3giLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC8uL3NyYy9JbmxpbmVRdWVzdGlvbk1hcmsvSW5saW5lUXVlc3Rpb25NYXJrLnRzeCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2hlbHAtcG9wdXAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovL2hlbHAtcG9wdXAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hlbHBcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlbHAtcG9wdXAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJhIiwiaSIsInNlbGYiLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX182NThfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzcyMF9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMjgwX18iLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183NDBfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzE5MV9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMjk3X18iLCJIZWxwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJob3N0IiwicGF0aCIsImxleGljb24iLCJjaGlsZHJlbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJnZXRIZWxwSW5mbyIsImlkIiwidGl0bGUiLCJsaW5rIiwidGV4dCIsImJhc2VVcmwiLCJoZWxwSWQiLCJvbWl0UXVlc3Rpb25NYXJrIiwic2V0VGl0bGUiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJzZXRMaW5rIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Iiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHREZWNvcmF0aW9uU3R5bGUiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJjdXJzb3IiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJvcGVuIiwib25DbG9zZSIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zZm9ybU9yaWdpbiIsImNvbnRhaW5lciIsImNvbXBvbmVudCIsInAiLCJtYXhXaWR0aCIsIml0ZW0iLCJ4cyIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJocmVmIiwidGFyZ2V0IiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50IiwiSW5saW5lSGVscCIsIklubGluZVF1ZXN0aW9uTWFyayIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIl0sIm1hcHBpbmdzIjoiQ0FBQSxT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LE9BQUNwQyxJQUMxQyxPQUNFLHdCQUFDLFVBQVUsQ0FBQ0EsT0FBUUEsRUFBUUMsa0JBQWtCLEdBQzVDLHdCQUFDLFVBQUksQ0FBQ29DLFNBQVMsUUFBUXhCLE1BQU8sQ0FBQ3lCLFVBQVcsWSxpT0NQaEQsZUFNRSw0RkFOTSxFQUFBQyxnQ0FDUixrQkFNRSxFQUFBQyxXQU5LLFVBQ1Asa0JBT0UsRUFBQUMsbUJBUEssVyxRQ0ZQcEUsRUFBT0QsUUFBVVEsRyxRQ0FqQlAsRUFBT0QsUUFBVVMsRyxRQ0FqQlIsRUFBT0QsUUFBVVUsRyxRQ0FqQlQsRUFBT0QsUUFBVVcsRyxRQ0FqQlYsRUFBT0QsUUFBVVksRyxRQ0FqQlgsRUFBT0QsUUFBVWEsSUNDYnlELEVBQTJCLEcsT0FHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLEdBQUdGLEVBQXlCRSxHQUMzQixPQUFPRixFQUF5QkUsR0FBVXhFLFFBRzNDLElBQUlDLEVBQVNxRSxFQUF5QkUsR0FBWSxDQUdqRHhFLFFBQVMsSUFPVixPQUhBeUUsRUFBb0JELEdBQVVFLEtBQUt6RSxFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTdUUsR0FHcEV0RSxFQUFPRCxRQ2pCV3VFLENBQW9CLE0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hlbHBcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiLCBcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCJdLCByb290W1wicmVhY3RcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjU4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzcyMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yODBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzQwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzE5MV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yOTdfXykge1xucmV0dXJuICIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJSGVscENvbnRleHQgZnJvbSAnLi4vSW50ZXJmYWNlcy9JSGVscENvbnRleHQnO1xuaW1wb3J0IElIZWxwSW5mbyBmcm9tICcuLi9JbnRlcmZhY2VzL0lIZWxwSW5mbyc7XG5cbmV4cG9ydCBjb25zdCBIZWxwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUhlbHBDb250ZXh0Pih7fSBhcyBJSGVscENvbnRleHQpO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudCh7XG4gIGhvc3QsXG4gIHBhdGgsXG4gIGxleGljb24sXG4gIGNoaWxkcmVuXG59OiB7XG4gIGhvc3Q6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBsZXhpY29uOiBSZWNvcmQ8c3RyaW5nLCBJSGVscEluZm8+O1xuICBjaGlsZHJlbjogYW55O1xufSkge1xuICBmdW5jdGlvbiBnZXRIZWxwSW5mbyhpZDogc3RyaW5nKTogSUhlbHBJbmZvIHtcbiAgICBpZiAobGV4aWNvbltpZF0pIHtcbiAgICAgIHJldHVybiBsZXhpY29uW2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt0aXRsZTogJ3Vua25vd24nLCBsaW5rOiAndW5rbm93bicsIHRleHQ6ICd1bmtub3duJ307XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVscENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tnZXRIZWxwSW5mbywgYmFzZVVybDogaG9zdCArIHBhdGh9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0hlbHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcbmltcG9ydCB7Q1NTUHJvcGVydGllc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUmVhY3QsIHtNb3VzZUV2ZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0hlbHBDb250ZXh0fSBmcm9tICcuLi9IZWxwQ29udGV4dC9IZWxwQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElubGluZUhlbHAoe1xuICBoZWxwSWQsXG4gIG9taXRRdWVzdGlvbk1hcmssXG4gIGNoaWxkcmVuXG59OiB7XG4gIGhlbHBJZDogc3RyaW5nO1xuICBvbWl0UXVlc3Rpb25NYXJrPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IGFueTtcbn0pIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3Qge2dldEhlbHBJbmZvLCBiYXNlVXJsfSA9IHVzZUNvbnRleHQoSGVscENvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge3RpdGxlLCB0ZXh0LCBsaW5rfSA9IGdldEhlbHBJbmZvKGhlbHBJZCk7XG4gICAgc2V0VGl0bGUodGl0bGUpO1xuICAgIHNldFRleHQodGV4dCk7XG4gICAgc2V0TGluayhiYXNlVXJsICsgbGluayk7XG4gIH0pO1xuXG4gIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiAnZGFzaGVkJyxcbiAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogJzFweCcsXG4gICAgdGV4dERlY29yYXRpb25Db2xvcjogJ2RhcmtncmF5JyxcbiAgICBjdXJzb3I6ICdoZWxwJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIG9wZW5Qb3BvdmVyKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VQb3BvdmVyKCkge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUXVlc3Rpb25NYXJrKCk6IEpTWC5FbGVtZW50IHtcbiAgICBpZiAob21pdFF1ZXN0aW9uTWFyaykge1xuICAgICAgcmV0dXJuIDw+PC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPHN1cCBzdHlsZT17e2NvbG9yOiAnZGFya2dyYXknfX0+Pzwvc3VwPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBvbkNsaWNrPXtvcGVuUG9wb3Zlcn0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9zcGFuPlxuICAgICAge3JlbmRlclF1ZXN0aW9uTWFyaygpfVxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgb3Blbj17ISFhbmNob3JFbH1cbiAgICAgICAgb25DbG9zZT17Y2xvc2VQb3BvdmVyfVxuICAgICAgICBhbmNob3JPcmlnaW49e3t2ZXJ0aWNhbDogJ2NlbnRlcicsIGhvcml6b250YWw6ICdjZW50ZXInfX1cbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInXG4gICAgICAgIH19XG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgID5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbXBvbmVudD17Qm94fSBwPXsyfSBtYXhXaWR0aD1cIjMwMHB4XCI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTBweCd9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgVmlldyBpbiBtYW51YWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBIZWxwIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5saW5lSGVscCBmcm9tICdzcmMvSW5saW5lSGVscC9JbmxpbmVIZWxwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5saW5lUXVlc3Rpb25NYXJrKHtoZWxwSWR9OiB7aGVscElkOiBzdHJpbmd9KSB7XG4gIHJldHVybiAoXG4gICAgPElubGluZUhlbHAgaGVscElkPXtoZWxwSWR9IG9taXRRdWVzdGlvbk1hcms9e3RydWV9PlxuICAgICAgPEhlbHAgZm9udFNpemU9XCJzbWFsbFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnNXB4J319IC8+XG4gICAgPC9JbmxpbmVIZWxwPlxuICApO1xufVxuIiwiaW1wb3J0IHtIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50fSBmcm9tICcuL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0JztcbmltcG9ydCBJbmxpbmVIZWxwIGZyb20gJy4vSW5saW5lSGVscC9JbmxpbmVIZWxwJztcbmltcG9ydCBJbmxpbmVRdWVzdGlvbk1hcmsgZnJvbSAnLi9JbmxpbmVRdWVzdGlvbk1hcmsvSW5saW5lUXVlc3Rpb25NYXJrJztcbmltcG9ydCBJSGVscEluZm8gZnJvbSAnLi9JbnRlcmZhY2VzL0lIZWxwSW5mbyc7XG5cbmV4cG9ydCB7XG4gIEhlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnQsXG4gIElubGluZUhlbHAsXG4gIElIZWxwSW5mbyxcbiAgSW5saW5lUXVlc3Rpb25NYXJrXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX182NThfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzcyMF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMjgwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183NDBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzE5MV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMjk3X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/CriterionChoice/CriterionChoice.tsx":
/*!*************************************************!*\
  !*** ./src/CriterionChoice/CriterionChoice.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Radio_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio"));
const Tooltip_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
const util_2 = __webpack_require__(/*! ../Util/util */ "./src/Util/util.ts");
function CriterionChoice({ criterion }) {
    const { pvfs, showPercentages } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const pvf = pvfs[criterion.id];
    const unitType = criterion.dataSources[0].unitOfMeasurement.type;
    const usePercentage = showPercentages && util_1.canBePercentage(unitType);
    const worst = util_2.getWorst(pvf, usePercentage);
    const best = util_2.getBest(pvf, usePercentage);
    return (react_1.default.createElement("label", { id: `ranking-choice-${criterion.id}` },
        react_1.default.createElement(Radio_1.default, { value: criterion.id }),
        pvf.direction,
        ' ',
        react_1.default.createElement(Tooltip_1.default, { disableHoverListener: !criterion.description, title: criterion.description ? criterion.description : '' },
            react_1.default.createElement("span", { id: `criterion-option-${criterion.id}`, className: "criterion-title" }, criterion.title)),
        ` from ${worst} to ${best}`));
}
exports.default = CriterionChoice;


/***/ }),

/***/ "./src/CriterionSituation/CriterionSituation.tsx":
/*!*******************************************************!*\
  !*** ./src/CriterionSituation/CriterionSituation.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Tooltip_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
function CriterionSituation({ criterion, displayValue }) {
    const { showPercentages } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    return (react_1.default.createElement("ul", null,
        react_1.default.createElement("li", { id: `situation-${criterion.id}` },
            react_1.default.createElement(Tooltip_1.default, { disableHoverListener: !criterion.description, title: criterion.description ? criterion.description : '' },
                react_1.default.createElement("span", { id: `situation-title-${criterion.id}`, className: "criterion-title" }, criterion.title)),
            ": ",
            react_1.default.createElement("span", { id: `situation-value-${criterion.id}` }, displayValue),
            ' ',
            util_1.getUnitLabel(criterion.dataSources[0].unitOfMeasurement, showPercentages))));
}
exports.default = CriterionSituation;


/***/ }),

/***/ "./src/ElicitationContext/ElicitationContext.tsx":
/*!*******************************************************!*\
  !*** ./src/ElicitationContext/ElicitationContext.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElicitationContextProviderComponent = exports.ElicitationContext = void 0;
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const RankingUtil_1 = __webpack_require__(/*! src/RankingUtil/RankingUtil */ "./src/RankingUtil/RankingUtil.ts");
const SwingUtil_1 = __webpack_require__(/*! src/SwingUtil/SwingUtil */ "./src/SwingUtil/SwingUtil.ts");
exports.ElicitationContext = react_1.createContext({});
function ElicitationContextProviderComponent({ elicitationMethod, criteria, showPercentages, previousCallback, pvfs, cancelCallback, saveCallback, template, children }) {
    const [currentStep, setCurrentStep] = react_1.useState(1);
    const [isNextDisabled, setIsNextDisabled] = react_1.useState(true);
    const [mostImportantCriterionId, setMostImportantCriterionId] = react_1.useState('');
    const [preferences, setPreferences] = react_1.useState({});
    const [rankings, setRankings] = react_1.useState({});
    function setRanking(criterionId, rank) {
        const updatedRankings = RankingUtil_1.addRanking(rankings, criterionId, rank);
        setRankings(updatedRankings);
    }
    function setMostImportantCriterionAndPreferences(criterionId) {
        if (elicitationMethod === 'precise') {
            setPreferences(SwingUtil_1.buildInitialPrecisePreferences(criteria, criterionId));
        }
        else if (elicitationMethod === 'imprecise') {
            setPreferences(SwingUtil_1.buildInitialImprecisePreferences(criteria, criterionId));
        }
        setMostImportantCriterionId(criterionId);
    }
    function setPreference(criterionId, answer) {
        let updatedPreferences = lodash_1.default.cloneDeep(preferences);
        const preference = {
            elicitationMethod: elicitationMethod,
            type: 'exact swing',
            criteria: [mostImportantCriterionId, criterionId],
            ratio: 100 / answer
        };
        updatedPreferences[criterionId] = preference;
        setPreferences(updatedPreferences);
    }
    function setBoundPreference(criterionId, answer) {
        let updatedPreferences = lodash_1.default.cloneDeep(preferences);
        const preference = {
            elicitationMethod: 'imprecise',
            type: 'ratio bound',
            criteria: [mostImportantCriterionId, criterionId],
            bounds: [100 / answer[1], 100 / answer[0]]
        };
        updatedPreferences[criterionId] = preference;
        setPreferences(updatedPreferences);
    }
    function getCriterion(id) {
        return lodash_1.default.find(criteria, ['id', id]);
    }
    return (react_1.default.createElement(exports.ElicitationContext.Provider, { value: {
            currentStep,
            isNextDisabled,
            mostImportantCriterionId,
            preferences,
            elicitationMethod,
            showPercentages,
            pvfs,
            criteria,
            rankings,
            template,
            getCriterion,
            previousCallback,
            setCurrentStep,
            setIsNextDisabled,
            setMostImportantCriterionId: setMostImportantCriterionAndPreferences,
            setPreference,
            setBoundPreference,
            setPreferences,
            cancelCallback,
            saveCallback,
            setRanking
        } }, children));
}
exports.ElicitationContextProviderComponent = ElicitationContextProviderComponent;


/***/ }),

/***/ "./src/ImpreciseSwingElicitation/ImpreciseSwingSlider/ImpreciseSwingSlider.tsx":
/*!*************************************************************************************!*\
  !*** ./src/ImpreciseSwingElicitation/ImpreciseSwingSlider/ImpreciseSwingSlider.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Slider_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const util_1 = __importDefault(__webpack_require__(/*! src/Util/util */ "./src/Util/util.ts"));
function ImpreciseSwingSlider({ criterion }) {
    const [sliderValue, setSliderValue] = react_1.useState([1, 100]);
    const { setBoundPreference, mostImportantCriterionId } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    react_1.useEffect(() => {
        setBoundPreference(criterion.id, sliderValue);
    }, [mostImportantCriterionId]);
    function handleSliderChanged(event, newValue) {
        setSliderValue(newValue);
        setBoundPreference(criterion.id, newValue);
    }
    function renderValue() {
        return mostImportantCriterionId === criterion.id
            ? '100%'
            : `${util_1.default(sliderValue[0])} - ${util_1.default(sliderValue[1])}%`;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        renderValue(),
        react_1.default.createElement(Slider_1.default, { value: sliderValue, min: 1, max: 100, onChange: handleSliderChanged, step: 1, disabled: mostImportantCriterionId === criterion.id })));
}
exports.default = ImpreciseSwingSlider;


/***/ }),

/***/ "./src/ImpreciseSwingElicitation/ImpreciseSwingWeighting.tsx":
/*!*******************************************************************!*\
  !*** ./src/ImpreciseSwingElicitation/ImpreciseSwingWeighting.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const help_popup_1 = __webpack_require__(/*! help-popup */ "./node_modules/help-popup/build/bundle.js");
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const MostImportantChoice_1 = __importDefault(__webpack_require__(/*! ../MostImportantChoice/MostImportantChoice */ "./src/MostImportantChoice/MostImportantChoice.tsx"));
const SwingButtons_1 = __importDefault(__webpack_require__(/*! ../SwingButtons/SwingButtons */ "./src/SwingButtons/SwingButtons.tsx"));
const SwingSetWeights_1 = __importDefault(__webpack_require__(/*! ../SwingSetWeights/SwingSetWeights */ "./src/SwingSetWeights/SwingSetWeights.tsx"));
function ImpreciseSwingWeighting() {
    const { currentStep } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 4, sm: 12, md: 9, component: Paper_1.default },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { id: "swing-weighting-title-header", variant: "h4" },
                react_1.default.createElement(help_popup_1.InlineHelp, { helpId: "imprecise-swing-weighting" }, "Imprecise swing weighting"))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 }, currentStep === 1 ? react_1.default.createElement(MostImportantChoice_1.default, null) : react_1.default.createElement(SwingSetWeights_1.default, null)),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 9 },
            react_1.default.createElement(SwingButtons_1.default, null)),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 3, container: true, alignItems: "center", justify: "flex-end" },
            react_1.default.createElement(Grid_1.default, { item: true, id: "step-counter" },
                "Step ",
                currentStep,
                " of 2"))));
}
exports.default = ImpreciseSwingWeighting;


/***/ }),

/***/ "./src/MatchingElicitation/MatchingButtons/MatchingButtons.tsx":
/*!*********************************************************************!*\
  !*** ./src/MatchingElicitation/MatchingButtons/MatchingButtons.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button"));
const ButtonGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
function MatchingButtons() {
    const { previousCallback, isNextDisabled, setIsNextDisabled, currentStep, setCurrentStep, preferences, criteria, cancelCallback, saveCallback } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function handleNextButtonClick() {
        matchingNext();
    }
    function handleSaveButtonclick() {
        saveCallback(Object.values(preferences));
    }
    function matchingNext() {
        setCurrentStep(currentStep + 1);
    }
    function isLastStep() {
        return currentStep === lodash_1.default.size(criteria);
    }
    function handlePreviousClick() {
        if (currentStep === 1) {
            previousCallback();
        }
        else {
            setIsNextDisabled(false);
            setCurrentStep(currentStep - 1);
        }
    }
    function cancel() {
        cancelCallback();
    }
    return (react_1.default.createElement(ButtonGroup_1.default, null,
        react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "secondary", variant: "contained", onClick: cancel }, "Cancel"),
        react_1.default.createElement(Button_1.default, { id: "previous-button", onClick: handlePreviousClick, color: "primary", variant: "contained", disabled: !previousCallback && currentStep === 1 }, "Previous"),
        isLastStep() ? (react_1.default.createElement(Button_1.default, { disabled: isNextDisabled, color: "primary", id: "save-button", variant: "contained", onClick: handleSaveButtonclick }, "Save")) : (react_1.default.createElement(Button_1.default, { disabled: isNextDisabled, color: "primary", id: "next-button", variant: "contained", onClick: handleNextButtonClick }, "Next"))));
}
exports.default = MatchingButtons;


/***/ }),

/***/ "./src/MatchingElicitation/MatchingElicitation.tsx":
/*!*********************************************************!*\
  !*** ./src/MatchingElicitation/MatchingElicitation.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const help_popup_1 = __webpack_require__(/*! help-popup */ "./node_modules/help-popup/build/bundle.js");
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const MostImportantChoice_1 = __importDefault(__webpack_require__(/*! ../MostImportantChoice/MostImportantChoice */ "./src/MostImportantChoice/MostImportantChoice.tsx"));
const MatchingButtons_1 = __importDefault(__webpack_require__(/*! ./MatchingButtons/MatchingButtons */ "./src/MatchingElicitation/MatchingButtons/MatchingButtons.tsx"));
const MatchingSetImportance_1 = __importDefault(__webpack_require__(/*! ./MatchingSetImportance/MatchingSetImportance */ "./src/MatchingElicitation/MatchingSetImportance/MatchingSetImportance.tsx"));
function MatchingElicitation() {
    const { currentStep, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const totalSteps = lodash_1.default.size(criteria);
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 4, sm: 12, md: 9, component: Paper_1.default },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { id: "matching-title-header", variant: "h4" },
                react_1.default.createElement(help_popup_1.InlineHelp, { helpId: "matching" }, "Matching"))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 }, currentStep === 1 ? (react_1.default.createElement(MostImportantChoice_1.default, null)) : (react_1.default.createElement(MatchingSetImportance_1.default, null))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 9 },
            react_1.default.createElement(MatchingButtons_1.default, null)),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 3, container: true, alignItems: "center", justify: "flex-end" },
            react_1.default.createElement(Grid_1.default, { item: true, id: "step-counter" },
                "Step ",
                currentStep,
                " of ",
                totalSteps))));
}
exports.default = MatchingElicitation;


/***/ }),

/***/ "./src/MatchingElicitation/MatchingSetImportance/MatchingSetImportance.tsx":
/*!*********************************************************************************!*\
  !*** ./src/MatchingElicitation/MatchingSetImportance/MatchingSetImportance.tsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const Table_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table"));
const TableBody_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody"));
const TableCell_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell"));
const TableHead_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead"));
const TableRow_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const MatchingUtil_1 = __webpack_require__(/*! src/MatchingUtil/MatchingUtil */ "./src/MatchingUtil/MatchingUtil.ts");
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
const util_2 = __webpack_require__(/*! ../../Util/util */ "./src/Util/util.ts");
const MatchingSlider_1 = __importDefault(__webpack_require__(/*! ./MatchingSlider/MatchingSlider */ "./src/MatchingElicitation/MatchingSetImportance/MatchingSlider/MatchingSlider.tsx"));
function MatchingSetImportance() {
    const { pvfs, showPercentages, mostImportantCriterionId, currentStep, getCriterion, criteria, template } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const mostImportantCriterion = getCriterion(mostImportantCriterionId);
    const mostImportantUnitType = mostImportantCriterion.dataSources[0].unitOfMeasurement.type;
    const currentCriterion = MatchingUtil_1.getCurrentCriterion(criteria, mostImportantCriterionId, currentStep);
    const currentUnitType = currentCriterion.dataSources[0].unitOfMeasurement.type;
    const usePercentagesForMostImportantCriterion = showPercentages && util_1.canBePercentage(mostImportantUnitType);
    const usePercentagesForCurrentCriterion = showPercentages && util_1.canBePercentage(currentUnitType);
    const [statement, setStatement] = react_1.useState(MatchingUtil_1.getMatchingStatement(mostImportantCriterion, currentCriterion, usePercentagesForMostImportantCriterion, usePercentagesForCurrentCriterion, pvfs, template));
    react_1.useEffect(() => {
        setStatement(MatchingUtil_1.getMatchingStatement(mostImportantCriterion, currentCriterion, usePercentagesForMostImportantCriterion, usePercentagesForCurrentCriterion, pvfs, template));
    }, [showPercentages, template, mostImportantCriterion, currentCriterion]);
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 2 },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { variant: "h6" }, `Trade-off between ${mostImportantCriterion.title} and ${currentCriterion.title}`)),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, id: "matching-statement", dangerouslySetInnerHTML: { __html: statement } }),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Table_1.default, { size: "small" },
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, "Criterion"),
                        react_1.default.createElement(TableCell_1.default, { align: "center" }, "Alternative A"),
                        react_1.default.createElement(TableCell_1.default, { align: "center" }, "Alternative B"))),
                react_1.default.createElement(TableBody_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, { id: "most-important-criterion" }, mostImportantCriterion.title),
                        react_1.default.createElement(TableCell_1.default, { align: "center", id: "most-important-worst" }, util_2.getWorst(pvfs[mostImportantCriterionId], usePercentagesForMostImportantCriterion)),
                        react_1.default.createElement(TableCell_1.default, { align: "center", id: "matching-cell" },
                            react_1.default.createElement(MatchingSlider_1.default, { currentCriterionId: currentCriterion.id }))),
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, { id: "trade-off-criterion" }, currentCriterion.title),
                        react_1.default.createElement(TableCell_1.default, { align: "center", id: "trade-off-best" }, util_2.getBest(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion)),
                        react_1.default.createElement(TableCell_1.default, { align: "center", id: "trade-off-worst" }, util_2.getWorst(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion))))))));
}
exports.default = MatchingSetImportance;


/***/ }),

/***/ "./src/MatchingElicitation/MatchingSetImportance/MatchingSlider/MatchingSlider.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/MatchingElicitation/MatchingSetImportance/MatchingSlider/MatchingSlider.tsx ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Slider_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const MatchingUtil_1 = __webpack_require__(/*! src/MatchingUtil/MatchingUtil */ "./src/MatchingUtil/MatchingUtil.ts");
const util_1 = __importStar(__webpack_require__(/*! src/Util/util */ "./src/Util/util.ts"));
function MatchingSlider({ currentCriterionId }) {
    const { currentStep, setIsNextDisabled, mostImportantCriterionId, setPreference, showPercentages, pvfs, getCriterion } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const mostImportantCriterion = getCriterion(mostImportantCriterionId);
    const pvf = pvfs[mostImportantCriterionId];
    const unitType = mostImportantCriterion.dataSources[0].unitOfMeasurement.type;
    const usePercentage = showPercentages && util_1.canBePercentage(unitType);
    const [sliderValue, setSliderValue] = react_1.useState(util_1.getBest(pvfs[mostImportantCriterionId], usePercentage));
    const [stepSize] = react_1.useState(MatchingUtil_1.determineStepSize(pvf.range));
    react_1.useEffect(() => {
        const sliderValue = util_1.getBest(pvf, false);
        setSliderValue(sliderValue);
        setPreference(currentCriterionId, MatchingUtil_1.calculateImportance(sliderValue, pvf));
    }, [currentStep]);
    function handleSliderChanged(event, newValue) {
        setSliderValue(newValue);
        setIsNextDisabled(util_1.default(newValue) ===
            util_1.getWorst(pvfs[mostImportantCriterion.id], false));
        setPreference(currentCriterionId, MatchingUtil_1.calculateImportance(newValue, pvf));
    }
    function displayValue() {
        return usePercentage
            ? util_1.default(sliderValue * 100)
            : util_1.default(sliderValue);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        displayValue(),
        react_1.default.createElement(Slider_1.default, { id: "matching-slider", value: sliderValue, min: pvf.range[0], max: pvf.range[1], onChange: handleSliderChanged, step: stepSize })));
}
exports.default = MatchingSlider;


/***/ }),

/***/ "./src/MatchingUtil/MatchingUtil.ts":
/*!******************************************!*\
  !*** ./src/MatchingUtil/MatchingUtil.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCurrentCriterion = exports.calculateImportance = exports.determineStepSize = exports.getMatchingStatement = exports.DEFAULT_MATCHING_TEMPLATE = void 0;
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
exports.DEFAULT_MATCHING_TEMPLATE = 'How much better should %criterion1% minimally become to justify the worsening of %criterion2%?';
function getMatchingStatement(mostImportantCriterion, currentCriterion, usePercentagesForMostImportantCriterion, usePercentagesForCurrentCriterion, pvfs, template) {
    const matchingTemplate = template ? template : exports.DEFAULT_MATCHING_TEMPLATE;
    return matchingTemplate
        .replace(/%criterion1%/gi, mostImportantCriterion.title)
        .replace(/%unit1%/gi, util_1.getUnitLabel(mostImportantCriterion.dataSources[0].unitOfMeasurement, usePercentagesForMostImportantCriterion))
        .replace(/%worst1%/gi, String(util_1.getWorst(pvfs[mostImportantCriterion.id], usePercentagesForMostImportantCriterion)))
        .replace(/%best1%/gi, String(util_1.getBest(pvfs[mostImportantCriterion.id], usePercentagesForMostImportantCriterion)))
        .replace(/%criterion2%/gi, currentCriterion.title)
        .replace(/%unit2%/gi, util_1.getUnitLabel(currentCriterion.dataSources[0].unitOfMeasurement, usePercentagesForCurrentCriterion))
        .replace(/%worst2%/gi, String(util_1.getWorst(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion)))
        .replace(/%best2%/gi, String(util_1.getBest(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion)));
}
exports.getMatchingStatement = getMatchingStatement;
function determineStepSize([lowerBound, upperBound]) {
    const interval = upperBound - lowerBound;
    const magnitude = Math.floor(Math.log10(interval));
    return Math.pow(10, magnitude - 1);
}
exports.determineStepSize = determineStepSize;
function calculateImportance(sliderValue, pvf) {
    if (isPieceWiseLinearPvf(pvf)) {
        return calculatePiecewiseImportance(sliderValue, pvf);
    }
    else {
        return calculateLinearImportance(sliderValue, pvf);
    }
}
exports.calculateImportance = calculateImportance;
function isPieceWiseLinearPvf(pvf) {
    return 'cutoffs' in pvf;
}
function calculateLinearImportance(sliderValue, { range: [lowerBound, upperBound], direction }) {
    const rebased = direction === 'decreasing'
        ? upperBound - sliderValue
        : sliderValue - lowerBound;
    return (rebased / Math.abs(lowerBound - upperBound)) * 100;
}
function calculatePiecewiseImportance(value, pvf) {
    const { cutoffs, range: [lowerBound, upperBound], direction } = pvf;
    const cutoffsWithBounds = [lowerBound, ...cutoffs, upperBound];
    const valuesWithBounds = direction === 'increasing'
        ? [0, 0.25, 0.5, 0.75, 1]
        : [1, 0.75, 0.5, 0.25, 0];
    const exactCutoffIdx = lodash_1.default.findIndex(cutoffsWithBounds, (x) => x === value);
    if (exactCutoffIdx !== -1) {
        return valuesWithBounds[exactCutoffIdx] * 100;
    }
    else {
        return (calculateIntermediateValue(value, cutoffsWithBounds, valuesWithBounds, direction) * 100);
    }
}
function calculateIntermediateValue(value, cutoffsWithBounds, valuesWithBounds, direction) {
    const largerCutoffIdx = lodash_1.default.findIndex(cutoffsWithBounds, (x) => x > value);
    const [lowerCutOff, upperCutOff] = [
        cutoffsWithBounds[largerCutoffIdx - 1],
        cutoffsWithBounds[largerCutoffIdx]
    ];
    const rebased = value - lowerCutOff;
    const ratioOfQuartile = rebased / (upperCutOff - lowerCutOff);
    const quartileValue = valuesWithBounds[largerCutoffIdx - 1];
    if (direction === 'increasing') {
        return quartileValue + 0.25 * ratioOfQuartile;
    }
    else {
        return quartileValue - 0.25 * ratioOfQuartile;
    }
}
function getCurrentCriterion(criteria, mostImportantCriterionId, currentStep) {
    return lodash_1.default.reject(criteria, (criterion) => {
        return criterion.id === mostImportantCriterionId;
    })[currentStep - 2];
}
exports.getCurrentCriterion = getCurrentCriterion;


/***/ }),

/***/ "./src/MostImportantChoice/MostImportantChoice.tsx":
/*!*********************************************************!*\
  !*** ./src/MostImportantChoice/MostImportantChoice.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const RadioGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
const CriterionChoice_1 = __importDefault(__webpack_require__(/*! ../CriterionChoice/CriterionChoice */ "./src/CriterionChoice/CriterionChoice.tsx"));
const CriterionSituation_1 = __importDefault(__webpack_require__(/*! ../CriterionSituation/CriterionSituation */ "./src/CriterionSituation/CriterionSituation.tsx"));
function MostImportantChoice() {
    const { mostImportantCriterionId, setMostImportantCriterionId, setIsNextDisabled, showPercentages, pvfs, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function handleSelection(event) {
        setMostImportantCriterionId(event.target.value);
        setIsNextDisabled(false);
    }
    function renderCriterionSituations() {
        return lodash_1.default.map(criteria, (criterion) => {
            const unitType = criterion.dataSources[0].unitOfMeasurement.type;
            const usePercentage = showPercentages && util_1.canBePercentage(unitType);
            return (react_1.default.createElement(CriterionSituation_1.default, { key: criterion.id, criterion: criterion, displayValue: util_1.getWorst(pvfs[criterion.id], usePercentage) }));
        });
    }
    function renderCriterionChoices() {
        return lodash_1.default.map(criteria, (criterion) => (react_1.default.createElement(CriterionChoice_1.default, { key: criterion.id, criterion: criterion })));
    }
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { variant: "h6" }, "Given the following situation:")),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 }, renderCriterionSituations()),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { variant: "h6" }, "Which of the following improvements is most important?")),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(RadioGroup_1.default, { name: "most-important-criterion-radio", value: mostImportantCriterionId, onChange: handleSelection }, renderCriterionChoices()))));
}
exports.default = MostImportantChoice;


/***/ }),

/***/ "./src/PreciseSwingElicitation/PreciseSwingSlider/PreciseSwingSlider.tsx":
/*!*******************************************************************************!*\
  !*** ./src/PreciseSwingElicitation/PreciseSwingSlider/PreciseSwingSlider.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Slider_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const util_1 = __importDefault(__webpack_require__(/*! src/Util/util */ "./src/Util/util.ts"));
function PreciseSwingSlider({ criterion }) {
    const [sliderValue, setSliderValue] = react_1.useState(100);
    const { setPreference, mostImportantCriterionId } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    react_1.useEffect(() => {
        setPreference(criterion.id, sliderValue);
    }, [mostImportantCriterionId]);
    function handleSliderChanged(event, newValue) {
        setSliderValue(newValue);
        setPreference(criterion.id, newValue);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        util_1.default(sliderValue),
        react_1.default.createElement(Slider_1.default, { id: `swing-slider-${criterion.id}`, value: sliderValue, min: 1, max: 100, onChange: handleSliderChanged, step: 1, disabled: mostImportantCriterionId === criterion.id })));
}
exports.default = PreciseSwingSlider;


/***/ }),

/***/ "./src/PreciseSwingElicitation/PreciseSwingWeighting.tsx":
/*!***************************************************************!*\
  !*** ./src/PreciseSwingElicitation/PreciseSwingWeighting.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const help_popup_1 = __webpack_require__(/*! help-popup */ "./node_modules/help-popup/build/bundle.js");
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const MostImportantChoice_1 = __importDefault(__webpack_require__(/*! ../MostImportantChoice/MostImportantChoice */ "./src/MostImportantChoice/MostImportantChoice.tsx"));
const SwingButtons_1 = __importDefault(__webpack_require__(/*! ../SwingButtons/SwingButtons */ "./src/SwingButtons/SwingButtons.tsx"));
const SwingSetWeights_1 = __importDefault(__webpack_require__(/*! ../SwingSetWeights/SwingSetWeights */ "./src/SwingSetWeights/SwingSetWeights.tsx"));
function PreciseSwingWeighting() {
    const { currentStep } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 4, sm: 12, md: 9, component: Paper_1.default },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { id: "swing-weighting-title-header", variant: "h4" },
                react_1.default.createElement(help_popup_1.InlineHelp, { helpId: "swing-weighting" }, "Precise swing weighting"))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 }, currentStep === 1 ? react_1.default.createElement(MostImportantChoice_1.default, null) : react_1.default.createElement(SwingSetWeights_1.default, null)),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 9 },
            react_1.default.createElement(SwingButtons_1.default, null)),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 3, container: true, alignItems: "center", justify: "flex-end" },
            react_1.default.createElement(Grid_1.default, { item: true, id: "step-counter" },
                "Step ",
                currentStep,
                " of 2"))));
}
exports.default = PreciseSwingWeighting;


/***/ }),

/***/ "./src/PreferenceElicitation/PreferenceElicitation.tsx":
/*!*************************************************************!*\
  !*** ./src/PreferenceElicitation/PreferenceElicitation.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
const help_popup_1 = __webpack_require__(/*! help-popup */ "./node_modules/help-popup/build/bundle.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const ImpreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! src/ImpreciseSwingElicitation/ImpreciseSwingWeighting */ "./src/ImpreciseSwingElicitation/ImpreciseSwingWeighting.tsx"));
const MatchingElicitation_1 = __importDefault(__webpack_require__(/*! src/MatchingElicitation/MatchingElicitation */ "./src/MatchingElicitation/MatchingElicitation.tsx"));
const PreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! src/PreciseSwingElicitation/PreciseSwingWeighting */ "./src/PreciseSwingElicitation/PreciseSwingWeighting.tsx"));
const RankingElicitation_1 = __importDefault(__webpack_require__(/*! src/RankingElicitation/RankingElicitation */ "./src/RankingElicitation/RankingElicitation.tsx"));
const ElicitationContext_1 = __webpack_require__(/*! ../ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
function PreferenceElicitation({ criteria, elicitationMethod, manualHost, manualLexicon, manualPath, previousCallback, pvfs, showPercentages, cancelCallback, saveCallback, template }) {
    function renderElicitation(elicitationMethod) {
        switch (elicitationMethod) {
            case 'precise':
                return react_1.default.createElement(PreciseSwingWeighting_1.default, null);
            case 'imprecise':
                return react_1.default.createElement(ImpreciseSwingWeighting_1.default, null);
            case 'matching':
                return react_1.default.createElement(MatchingElicitation_1.default, null);
            case 'ranking':
                return react_1.default.createElement(RankingElicitation_1.default, null);
        }
    }
    return (react_1.default.createElement(ElicitationContext_1.ElicitationContextProviderComponent, { previousCallback: previousCallback, criteria: criteria, elicitationMethod: elicitationMethod, showPercentages: showPercentages, pvfs: pvfs, cancelCallback: cancelCallback, saveCallback: saveCallback, template: template },
        react_1.default.createElement(help_popup_1.HelpContextProviderComponent, { lexicon: manualLexicon, host: manualHost, path: manualPath },
            react_1.default.createElement(core_1.Grid, { container: true, justify: "center", component: core_1.Box, mt: 2 }, renderElicitation(elicitationMethod)))));
}
exports.default = PreferenceElicitation;


/***/ }),

/***/ "./src/RankingElicitation/RankingButtons/RankingButtons.tsx":
/*!******************************************************************!*\
  !*** ./src/RankingElicitation/RankingButtons/RankingButtons.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button"));
const ButtonGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const RankingUtil_1 = __webpack_require__(/*! src/RankingUtil/RankingUtil */ "./src/RankingUtil/RankingUtil.ts");
function RankingButtons({ selectedCriterionId, setSelectedCriterionId }) {
    const { previousCallback, currentStep, setRanking, setCurrentStep, rankings, criteria, cancelCallback, saveCallback } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function handleNextButtonClick() {
        setRanking(selectedCriterionId, currentStep);
        setSelectedCriterionId('');
        setCurrentStep(currentStep + 1);
    }
    function handleSaveButtonClick() {
        const finishedRankings = RankingUtil_1.assignMissingRankings(rankings, selectedCriterionId, currentStep, criteria);
        const preferences = RankingUtil_1.buildRankingPreferences(lodash_1.default.toArray(finishedRankings));
        saveCallback(preferences);
    }
    function handlePreviousClick() {
        if (currentStep === 1) {
            previousCallback();
        }
        else {
            if (currentStep !== 1) {
                removeRankFromCriterion();
            }
            setSelectedCriterionId('');
            setCurrentStep(currentStep - 1);
        }
    }
    function removeRankFromCriterion() {
        const lookupRank = currentStep - 1;
        const criterionId = RankingUtil_1.findCriterionIdForRank(criteria, rankings, lookupRank);
        setRanking(criterionId, RankingUtil_1.UNRANKED);
    }
    function isLastStep() {
        return currentStep === lodash_1.default.size(criteria) - 1;
    }
    function cancel() {
        cancelCallback();
    }
    return (react_1.default.createElement(ButtonGroup_1.default, null,
        react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "secondary", variant: "contained", onClick: cancel }, "Cancel"),
        react_1.default.createElement(Button_1.default, { id: "previous-button", onClick: handlePreviousClick, color: "primary", variant: "contained", disabled: !previousCallback && currentStep === 1 }, "Previous"),
        isLastStep() ? (react_1.default.createElement(Button_1.default, { disabled: !selectedCriterionId, color: "primary", id: "save-button", variant: "contained", onClick: handleSaveButtonClick }, "Save")) : (react_1.default.createElement(Button_1.default, { disabled: !selectedCriterionId, color: "primary", id: "next-button", variant: "contained", onClick: handleNextButtonClick }, "Next"))));
}
exports.default = RankingButtons;


/***/ }),

/***/ "./src/RankingElicitation/RankingChoices/RankingChoices.tsx":
/*!******************************************************************!*\
  !*** ./src/RankingElicitation/RankingChoices/RankingChoices.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const RadioGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const RankingUtil_1 = __webpack_require__(/*! src/RankingUtil/RankingUtil */ "./src/RankingUtil/RankingUtil.ts");
const CriterionChoice_1 = __importDefault(__webpack_require__(/*! ../../CriterionChoice/CriterionChoice */ "./src/CriterionChoice/CriterionChoice.tsx"));
function RankingChoices({ selectedCriterionId, handleSelection }) {
    const { rankings, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const filteredCriteria = lodash_1.default.filter(criteria, (criterion) => !rankings[criterion.id] || rankings[criterion.id].rank === RankingUtil_1.UNRANKED);
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 2 },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { variant: "h6" }, "Which of the following improvements is most important?")),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(RadioGroup_1.default, { name: "ranking-criterion-radio", value: selectedCriterionId, onChange: handleSelection }, lodash_1.default.map(filteredCriteria, (criterion) => (react_1.default.createElement(CriterionChoice_1.default, { key: criterion.id, criterion: criterion })))))));
}
exports.default = RankingChoices;


/***/ }),

/***/ "./src/RankingElicitation/RankingElicitation.tsx":
/*!*******************************************************!*\
  !*** ./src/RankingElicitation/RankingElicitation.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const help_popup_1 = __webpack_require__(/*! help-popup */ "./node_modules/help-popup/build/bundle.js");
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const RankingButtons_1 = __importDefault(__webpack_require__(/*! ./RankingButtons/RankingButtons */ "./src/RankingElicitation/RankingButtons/RankingButtons.tsx"));
const RankingChoices_1 = __importDefault(__webpack_require__(/*! ./RankingChoices/RankingChoices */ "./src/RankingElicitation/RankingChoices/RankingChoices.tsx"));
const RankingSituation_1 = __importDefault(__webpack_require__(/*! ./RankingSituation/RankingSituation */ "./src/RankingElicitation/RankingSituation/RankingSituation.tsx"));
function RankingElicitation() {
    const [selectedCriterionId, setSelectedCriterionId] = react_1.useState('');
    const { currentStep, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const totalSteps = lodash_1.default.size(criteria) - 1;
    function handleSelection(event) {
        setSelectedCriterionId(event.target.value);
    }
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 4, sm: 12, md: 9, component: Paper_1.default },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { id: "ranking-title-header", variant: "h4" },
                react_1.default.createElement(help_popup_1.InlineHelp, { helpId: "ranking" }, "Ranking"))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(RankingSituation_1.default, null)),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(RankingChoices_1.default, { handleSelection: handleSelection, selectedCriterionId: selectedCriterionId })),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 9 },
            react_1.default.createElement(RankingButtons_1.default, { selectedCriterionId: selectedCriterionId, setSelectedCriterionId: setSelectedCriterionId })),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 3, container: true, alignItems: "center", justify: "flex-end" },
            react_1.default.createElement(Grid_1.default, { item: true, id: "step-counter" },
                "Step ",
                currentStep,
                " of ",
                totalSteps))));
}
exports.default = RankingElicitation;


/***/ }),

/***/ "./src/RankingElicitation/RankingSituation/RankingSituation.tsx":
/*!**********************************************************************!*\
  !*** ./src/RankingElicitation/RankingSituation/RankingSituation.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const RankingUtil_1 = __webpack_require__(/*! src/RankingUtil/RankingUtil */ "./src/RankingUtil/RankingUtil.ts");
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
const CriterionSituation_1 = __importDefault(__webpack_require__(/*! ../../CriterionSituation/CriterionSituation */ "./src/CriterionSituation/CriterionSituation.tsx"));
function RankingSituation() {
    const { rankings, showPercentages, pvfs, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function getValueToDisplay(criterion) {
        const unitType = criterion.dataSources[0].unitOfMeasurement.type;
        const usePercentage = showPercentages && util_1.canBePercentage(unitType);
        return !rankings[criterion.id] || rankings[criterion.id].rank === RankingUtil_1.UNRANKED
            ? util_1.getWorst(pvfs[criterion.id], usePercentage)
            : util_1.getBest(pvfs[criterion.id], usePercentage);
    }
    function renderCriterionSituations() {
        return lodash_1.default.map(criteria, (criterion) => (react_1.default.createElement(CriterionSituation_1.default, { key: criterion.id, criterion: criterion, displayValue: getValueToDisplay(criterion) })));
    }
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 2 },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { variant: "h6" }, "Given the following situation:")),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 }, renderCriterionSituations())));
}
exports.default = RankingSituation;


/***/ }),

/***/ "./src/RankingUtil/RankingUtil.ts":
/*!****************************************!*\
  !*** ./src/RankingUtil/RankingUtil.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildRankingPreferences = exports.addRanking = exports.assignMissingRankings = exports.findCriterionIdForRank = exports.UNRANKED = void 0;
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
exports.UNRANKED = 0;
function findCriterionIdForRank(criteria, rankings, rank) {
    return lodash_1.default.find(criteria, (criterion) => rankings[criterion.id] && rankings[criterion.id].rank === rank).id;
}
exports.findCriterionIdForRank = findCriterionIdForRank;
function assignMissingRankings(rankings, selectedCriterionId, rank, criteria) {
    const intermediateRankings = addRanking(rankings, selectedCriterionId, rank);
    const lastCriterionId = findCriterionIdWithoutRanking(criteria, intermediateRankings);
    return addRanking(intermediateRankings, lastCriterionId, rank + 1);
}
exports.assignMissingRankings = assignMissingRankings;
function addRanking(rankings, criterionId, rank) {
    let updatedRankings = lodash_1.default.cloneDeep(rankings);
    const newRanking = {
        criterionId: criterionId,
        rank: rank
    };
    updatedRankings[criterionId] = newRanking;
    return updatedRankings;
}
exports.addRanking = addRanking;
function findCriterionIdWithoutRanking(criteria, rankings) {
    return lodash_1.default.find(criteria, (criterion) => rankings[criterion.id] === undefined ||
        rankings[criterion.id].rank === exports.UNRANKED).id;
}
function buildRankingPreferences(answers) {
    const sortedAnswers = lodash_1.default.sortBy(answers, 'rank');
    return lodash_1.default.reduce(sortedAnswers, (accum, answer, idx) => {
        if (idx === answers.length - 1) {
            return accum;
        }
        const ranking = {
            elicitationMethod: 'ranking',
            type: 'ordinal',
            criteria: [answer.criterionId, sortedAnswers[idx + 1].criterionId]
        };
        accum.push(ranking);
        return accum;
    }, []);
}
exports.buildRankingPreferences = buildRankingPreferences;


/***/ }),

/***/ "./src/SwingButtons/SwingButtons.tsx":
/*!*******************************************!*\
  !*** ./src/SwingButtons/SwingButtons.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button"));
const ButtonGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
function SwingButtons() {
    const { previousCallback, currentStep, setCurrentStep, isNextDisabled, preferences, cancelCallback, saveCallback } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function handleNextButtonClick() {
        setCurrentStep(currentStep + 1);
    }
    function handlePreviousClick() {
        if (currentStep === 1) {
            previousCallback();
        }
        else {
            setCurrentStep(currentStep - 1);
        }
    }
    function cancel() {
        cancelCallback();
    }
    function handleSaveButtonClick() {
        saveCallback(Object.values(preferences));
    }
    function isLastStep() {
        return currentStep === 2;
    }
    return (react_1.default.createElement(ButtonGroup_1.default, null,
        react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "secondary", variant: "contained", onClick: cancel }, "Cancel"),
        react_1.default.createElement(Button_1.default, { id: "previous-button", onClick: handlePreviousClick, color: "primary", variant: "contained", disabled: !previousCallback && currentStep === 1 }, "Previous"),
        isLastStep() ? (react_1.default.createElement(Button_1.default, { disabled: isNextDisabled, color: "primary", id: "save-button", variant: "contained", onClick: handleSaveButtonClick }, "Save")) : (react_1.default.createElement(Button_1.default, { disabled: isNextDisabled, color: "primary", id: "next-button", variant: "contained", onClick: handleNextButtonClick }, "Next"))));
}
exports.default = SwingButtons;


/***/ }),

/***/ "./src/SwingSetWeights/OverviewTable/CriterionOverview/CriterionOverview.tsx":
/*!***********************************************************************************!*\
  !*** ./src/SwingSetWeights/OverviewTable/CriterionOverview/CriterionOverview.tsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const TableCell_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell"));
const TableRow_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow"));
const Tooltip_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const ImpreciseSwingSlider_1 = __importDefault(__webpack_require__(/*! src/ImpreciseSwingElicitation/ImpreciseSwingSlider/ImpreciseSwingSlider */ "./src/ImpreciseSwingElicitation/ImpreciseSwingSlider/ImpreciseSwingSlider.tsx"));
const PreciseSwingSlider_1 = __importDefault(__webpack_require__(/*! src/PreciseSwingElicitation/PreciseSwingSlider/PreciseSwingSlider */ "./src/PreciseSwingElicitation/PreciseSwingSlider/PreciseSwingSlider.tsx"));
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
function CriterionOverview({ criterion }) {
    const { pvfs, showPercentages, elicitationMethod } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const unitType = criterion.dataSources[0].unitOfMeasurement.type;
    const usePercentage = showPercentages && util_1.canBePercentage(unitType);
    function renderSwingSlider() {
        if (elicitationMethod === 'precise') {
            return react_1.default.createElement(PreciseSwingSlider_1.default, { criterion: criterion });
        }
        else if (elicitationMethod === 'imprecise') {
            return react_1.default.createElement(ImpreciseSwingSlider_1.default, { criterion: criterion });
        }
    }
    return (react_1.default.createElement(TableRow_1.default, { key: criterion.id },
        react_1.default.createElement(TableCell_1.default, { id: `criterion-title-${criterion.id}` },
            react_1.default.createElement(Tooltip_1.default, { disableHoverListener: !criterion.description, title: criterion.description ? criterion.description : '' },
                react_1.default.createElement("span", { className: "criterion-title" }, criterion.title))),
        react_1.default.createElement(TableCell_1.default, { id: `unit-${criterion.id}` }, util_1.getUnitLabel(criterion.dataSources[0].unitOfMeasurement, showPercentages)),
        react_1.default.createElement(TableCell_1.default, { align: "center", id: `worst-${criterion.id}` }, util_1.getWorst(pvfs[criterion.id], usePercentage)),
        react_1.default.createElement(TableCell_1.default, { align: "center", id: `best-${criterion.id}` }, util_1.getBest(pvfs[criterion.id], usePercentage)),
        react_1.default.createElement(TableCell_1.default, { align: "center" }, renderSwingSlider())));
}
exports.default = CriterionOverview;


/***/ }),

/***/ "./src/SwingSetWeights/OverviewTable/OverviewTable.tsx":
/*!*************************************************************!*\
  !*** ./src/SwingSetWeights/OverviewTable/OverviewTable.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Table_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table"));
const TableBody_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody"));
const TableCell_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell"));
const TableHead_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead"));
const TableRow_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const CriterionOverview_1 = __importDefault(__webpack_require__(/*! ./CriterionOverview/CriterionOverview */ "./src/SwingSetWeights/OverviewTable/CriterionOverview/CriterionOverview.tsx"));
function OverviewTable() {
    const { criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function renderCriterionOverviews() {
        return lodash_1.default.map(criteria, (criterion) => (react_1.default.createElement(CriterionOverview_1.default, { key: criterion.id, criterion: criterion })));
    }
    return (react_1.default.createElement(Table_1.default, { size: "small" },
        react_1.default.createElement(TableHead_1.default, null,
            react_1.default.createElement(TableRow_1.default, null,
                react_1.default.createElement(TableCell_1.default, null, "Criterion"),
                react_1.default.createElement(TableCell_1.default, null, "Unit"),
                react_1.default.createElement(TableCell_1.default, { align: "center" }, "Worst"),
                react_1.default.createElement(TableCell_1.default, { align: "center" }, "Best"),
                react_1.default.createElement(TableCell_1.default, { align: "center" }, "Importance"))),
        react_1.default.createElement(TableBody_1.default, null, renderCriterionOverviews())));
}
exports.default = OverviewTable;


/***/ }),

/***/ "./src/SwingSetWeights/SwingSetWeights.tsx":
/*!*************************************************!*\
  !*** ./src/SwingSetWeights/SwingSetWeights.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const SwingUtil_1 = __webpack_require__(/*! src/SwingUtil/SwingUtil */ "./src/SwingUtil/SwingUtil.ts");
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
const OverviewTable_1 = __importDefault(__webpack_require__(/*! ./OverviewTable/OverviewTable */ "./src/SwingSetWeights/OverviewTable/OverviewTable.tsx"));
function SwingSetWeights() {
    const { pvfs, showPercentages, mostImportantCriterionId, elicitationMethod, getCriterion, template } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const criterion = getCriterion(mostImportantCriterionId);
    const usePercentage = showPercentages &&
        util_1.canBePercentage(criterion.dataSources[0].unitOfMeasurement.type);
    const [statement, setStatement] = react_1.useState(SwingUtil_1.getSwingStatement(criterion, pvfs[criterion.id], usePercentage, template));
    react_1.useEffect(() => {
        setStatement(SwingUtil_1.getSwingStatement(criterion, pvfs[criterion.id], usePercentage, template));
    }, [showPercentages, template, criterion]);
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 2 },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, id: `${elicitationMethod}-swing-statement`, dangerouslySetInnerHTML: { __html: statement } }),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(OverviewTable_1.default, null))));
}
exports.default = SwingSetWeights;


/***/ }),

/***/ "./src/SwingUtil/SwingUtil.ts":
/*!************************************!*\
  !*** ./src/SwingUtil/SwingUtil.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSwingStatement = exports.buildInitialImprecisePreferences = exports.buildInitialPrecisePreferences = exports.DEFAULT_PRECISE_TEMPLATE = void 0;
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
exports.DEFAULT_PRECISE_TEMPLATE = "You've indicated that improving %criterion1% from %worst1% %unit1% to %best1% %unit1% is the most important (i.e. it has 100% importance). Now indicate the relative importance (in %) to this improvement of each other criterion's improvement using the sliders below.";
function buildInitialPrecisePreferences(criteria, mostImportantCriterionId) {
    return lodash_1.default(criteria)
        .filter((criterion) => criterion.id !== mostImportantCriterionId)
        .map((criterion) => {
        const preference = {
            criteria: [mostImportantCriterionId, criterion.id],
            elicitationMethod: 'precise',
            type: 'exact swing',
            ratio: 1
        };
        return [criterion.id, preference];
    })
        .fromPairs()
        .value();
}
exports.buildInitialPrecisePreferences = buildInitialPrecisePreferences;
function buildInitialImprecisePreferences(criteria, mostImportantCriterionId) {
    return lodash_1.default(criteria)
        .reject(['id', mostImportantCriterionId])
        .keyBy('id')
        .mapValues((criterion) => {
        const preference = {
            criteria: [mostImportantCriterionId, criterion.id],
            elicitationMethod: 'imprecise',
            type: 'ratio bound',
            bounds: [1, 100]
        };
        return preference;
    })
        .value();
}
exports.buildInitialImprecisePreferences = buildInitialImprecisePreferences;
function getSwingStatement(criterion, pvf, usePercentage, template) {
    const unit = criterion.dataSources[0].unitOfMeasurement;
    const label = util_1.getUnitLabel(unit, usePercentage);
    const swingTemplate = template ? template : exports.DEFAULT_PRECISE_TEMPLATE;
    return swingTemplate
        .replace(/%criterion1%/gi, criterion.title)
        .replace(/%unit1%/gi, label)
        .replace(/%worst1%/gi, String(util_1.getWorst(pvf, usePercentage)))
        .replace(/%best1%/gi, String(util_1.getBest(pvf, usePercentage)));
}
exports.getSwingStatement = getSwingStatement;


/***/ }),

/***/ "./src/Util/util.ts":
/*!**************************!*\
  !*** ./src/Util/util.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUnitLabel = exports.getPercentifiedValue = exports.getWorst = exports.getBest = exports.canBePercentage = void 0;
function canBePercentage(unitType) {
    return unitType === 'percentage' || unitType === 'decimal';
}
exports.canBePercentage = canBePercentage;
function getBest(pvf, usePercentage) {
    const value = significantDigits(isIncreasing(pvf) ? pvf.range[1] : pvf.range[0]);
    return getPercentifiedValue(value, usePercentage);
}
exports.getBest = getBest;
function getWorst(pvf, usePercentage) {
    const value = significantDigits(isIncreasing(pvf) ? pvf.range[0] : pvf.range[1]);
    return getPercentifiedValue(value, usePercentage);
}
exports.getWorst = getWorst;
function isIncreasing(pvf) {
    return pvf.direction === 'increasing';
}
function significantDigits(x, precision) {
    if (precision !== 0 && !precision) {
        precision = 3;
    }
    if (x === undefined || x === null || isNaN(x)) {
        throw 'attempt to apply significant digits to non-numeric value';
    }
    else if (x === 0) {
        return x;
    }
    else if (x > 1 || x < -1) {
        return Number.parseFloat(x.toFixed(precision));
    }
    else {
        return Number.parseFloat(x.toPrecision(precision));
    }
}
exports.default = significantDigits;
function getPercentifiedValue(value, usePercentage) {
    if (usePercentage) {
        return significantDigits(significantDigits(value) * 100); //2 sigdits to ensure the precision stays the same
    }
    else {
        return significantDigits(value);
    }
}
exports.getPercentifiedValue = getPercentifiedValue;
function getUnitLabel(unit, showPercentages) {
    if (showPercentages && unit.type === 'decimal') {
        return '%';
    }
    else if (!showPercentages && unit.type === 'percentage') {
        return '';
    }
    else {
        return unit.label;
    }
}
exports.getUnitLabel = getUnitLabel;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PreferenceElicitation = void 0;
const PreferenceElicitation_1 = __importDefault(__webpack_require__(/*! ./PreferenceElicitation/PreferenceElicitation */ "./src/PreferenceElicitation/PreferenceElicitation.tsx"));
exports.PreferenceElicitation = PreferenceElicitation_1.default;


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core__;

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Box__;

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__;

/***/ }),

/***/ "@material-ui/core/ButtonGroup":
/*!************************************************!*\
  !*** external "@material-ui/core/ButtonGroup" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_ButtonGroup__;

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__;

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__;

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Popover__;

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__;

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__;

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__;

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Table__;

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableBody__;

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableCell__;

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableHead__;

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableRow__;

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tooltip__;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__;

/***/ }),

/***/ "@material-ui/icons/Help":
/*!******************************************!*\
  !*** external "@material-ui/icons/Help" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_icons_Help__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vbm9kZV9tb2R1bGVzL2hlbHAtcG9wdXAvYnVpbGQvYnVuZGxlLmpzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvQ3JpdGVyaW9uQ2hvaWNlL0NyaXRlcmlvbkNob2ljZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Dcml0ZXJpb25TaXR1YXRpb24vQ3JpdGVyaW9uU2l0dWF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1NsaWRlci9JbXByZWNpc2VTd2luZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdCdXR0b25zL01hdGNoaW5nQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ1NldEltcG9ydGFuY2UvTWF0Y2hpbmdTZXRJbXBvcnRhbmNlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2xpZGVyL01hdGNoaW5nU2xpZGVyLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nU2xpZGVyL1ByZWNpc2VTd2luZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdXZWlnaHRpbmcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlZmVyZW5jZUVsaWNpdGF0aW9uL1ByZWZlcmVuY2VFbGljaXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0J1dHRvbnMvUmFua2luZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdDaG9pY2VzL1JhbmtpbmdDaG9pY2VzLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdTaXR1YXRpb24vUmFua2luZ1NpdHVhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbC50cyIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL092ZXJ2aWV3VGFibGUvQ3JpdGVyaW9uT3ZlcnZpZXcvQ3JpdGVyaW9uT3ZlcnZpZXcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nVXRpbC9Td2luZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9VdGlsL3V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIixcInJvb3RcIjpcIl9cIn0iLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkEsZUFBZSxHQUFHLElBQWlELGtCQUFrQixtQkFBTyxDQUFDLG9EQUF1QixFQUFFLG1CQUFPLENBQUMsc0RBQXdCLEVBQUUsbUJBQU8sQ0FBQyw0REFBMkIsRUFBRSxtQkFBTyxDQUFDLGtFQUE4QixFQUFFLG1CQUFPLENBQUMsd0RBQXlCLEVBQUUsbUJBQU8sQ0FBQyxvQkFBTyxHQUFHLEtBQUssYUFBMG9CLENBQUMsNkJBQTZCLFlBQVksYUFBYSxPQUFPLG9CQUFvQixtRUFBbUUsNkNBQTZDLDZCQUE2QixhQUFhLEVBQUUsbUJBQW1CLDRCQUE0QixnRUFBZ0UsbUNBQW1DLHNCQUFzQixFQUFFLGVBQWUsWUFBWSx5Q0FBeUMsNEJBQTRCLFNBQVMsNkZBQTZGLGlCQUFpQixzQ0FBc0MsU0FBUyxzREFBc0Qsa0JBQWtCLGdDQUFnQywyQ0FBMkMsbUNBQW1D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ZSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQzlDLE9BQU8sR0FBRyxDQUFDO0tBQ1o7U0FBTSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1FBQ3pELE9BQU8sRUFBRSxDQUFDO0tBQ1g7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjtBQUNILENBQUM7QUFYRCxvQ0FXQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVELG1MQUFrRjtBQUUxRSxnQ0FGRCwrQkFBcUIsQ0FFQzs7Ozs7Ozs7Ozs7O0FDRjdCLCtEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQG1hdGVyaWFsLXVpL2NvcmVcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiLCBcInJlYWN0XCIsIFwibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIikpIDogZmFjdG9yeShyb290W1wiQG1hdGVyaWFsLXVpL2NvcmVcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiXSwgcm9vdFtcInJlYWN0XCJdLCByb290W1wiX1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQm94X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uR3JvdXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9HcmlkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUGFwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9Qb3BvdmVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9SYWRpb0dyb3VwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfU2xpZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUJvZHlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUNlbGxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZVJvd19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1Rvb2x0aXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2ljb25zX0hlbHBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fKSB7XG5yZXR1cm4gIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpLHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpLHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiKSxyZXF1aXJlKFwicmVhY3RcIikpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIixcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIixcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIixcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIixcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIsXCJyZWFjdFwiXSx0KTtlbHNle3ZhciByPVwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3QocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSxyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSxyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSxyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSxyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hlbHBcIikscmVxdWlyZShcInJlYWN0XCIpKTp0KGVbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIl0sZVtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sZVtcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIl0sZVtcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIl0sZVtcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCJdLGUucmVhY3QpO2Zvcih2YXIgbiBpbiByKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW25dPXJbbl19fShzZWxmLChmdW5jdGlvbihlLHQscixuLG8saSl7cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9ezI5OTpmdW5jdGlvbihlLHQscil7dmFyIG49dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPXIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4se2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbcl19fSl9OmZ1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPXIpLGVbbl09dFtyXX0pLG89dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pfTpmdW5jdGlvbihlLHQpe2UuZGVmYXVsdD10fSksaT10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciByIGluIGUpXCJkZWZhdWx0XCIhPT1yJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmbih0LGUscik7cmV0dXJuIG8odCxlKSx0fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkhlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnQ9dC5IZWxwQ29udGV4dD12b2lkIDA7Y29uc3QgYT1pKHIoMjk3KSk7dC5IZWxwQ29udGV4dD1hLmNyZWF0ZUNvbnRleHQoe30pLHQuSGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudD1mdW5jdGlvbih7aG9zdDplLHBhdGg6cixsZXhpY29uOm4sY2hpbGRyZW46b30pe3JldHVybiBhLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0LkhlbHBDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTp7Z2V0SGVscEluZm86ZnVuY3Rpb24oZSl7cmV0dXJuIG5bZV0/bltlXTp7dGl0bGU6XCJ1bmtub3duXCIsbGluazpcInVua25vd25cIix0ZXh0OlwidW5rbm93blwifX0sYmFzZVVybDplK3J9fSxvKX19LDI0NDpmdW5jdGlvbihlLHQscil7dmFyIG49dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPXIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4se2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbcl19fSl9OmZ1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPXIpLGVbbl09dFtyXX0pLG89dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pfTpmdW5jdGlvbihlLHQpe2UuZGVmYXVsdD10fSksaT10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciByIGluIGUpXCJkZWZhdWx0XCIhPT1yJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmbih0LGUscik7cmV0dXJuIG8odCxlKSx0fSxhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGw9YShyKDY1OCkpLHU9YShyKDcyMCkpLGM9YShyKDI4MCkpLGY9YShyKDc0MCkpLHM9aShyKDI5NykpLGQ9cigyOTkpO3QuZGVmYXVsdD1mdW5jdGlvbih7aGVscElkOmUsb21pdFF1ZXN0aW9uTWFyazp0LGNoaWxkcmVuOnJ9KXtjb25zdFtuLG9dPXMudXNlU3RhdGUoKSxbaSxhXT1zLnVzZVN0YXRlKCksW3AsbV09cy51c2VTdGF0ZSgpLFt4LGhdPXMudXNlU3RhdGUobnVsbCkse2dldEhlbHBJbmZvOnYsYmFzZVVybDpffT1zLnVzZUNvbnRleHQoZC5IZWxwQ29udGV4dCk7cmV0dXJuIHMudXNlRWZmZWN0KCgoKT0+e2NvbnN0e3RpdGxlOnQsdGV4dDpyLGxpbms6bn09dihlKTtvKHQpLGEociksbShfK24pfSkpLHMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHMuZGVmYXVsdC5GcmFnbWVudCxudWxsLHMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtvbkNsaWNrOmZ1bmN0aW9uKGUpe2goZS5jdXJyZW50VGFyZ2V0KX0sc3R5bGU6e3RleHREZWNvcmF0aW9uOlwidW5kZXJsaW5lXCIsdGV4dERlY29yYXRpb25TdHlsZTpcImRhc2hlZFwiLHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOlwiMXB4XCIsdGV4dERlY29yYXRpb25Db2xvcjpcImRhcmtncmF5XCIsY3Vyc29yOlwiaGVscFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19LHIpLHQ/cy5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocy5kZWZhdWx0LkZyYWdtZW50LG51bGwpOnMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3VwXCIse3N0eWxlOntjb2xvcjpcImRhcmtncmF5XCJ9fSxcIj9cIikscy5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYy5kZWZhdWx0LHtvcGVuOiEheCxvbkNsb3NlOmZ1bmN0aW9uKCl7aChudWxsKX0sYW5jaG9yT3JpZ2luOnt2ZXJ0aWNhbDpcImNlbnRlclwiLGhvcml6b250YWw6XCJjZW50ZXJcIn0sdHJhbnNmb3JtT3JpZ2luOnt2ZXJ0aWNhbDpcInRvcFwiLGhvcml6b250YWw6XCJjZW50ZXJcIn0sYW5jaG9yRWw6eH0scy5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodS5kZWZhdWx0LHtjb250YWluZXI6ITAsY29tcG9uZW50OmwuZGVmYXVsdCxwOjIsbWF4V2lkdGg6XCIzMDBweFwifSxzLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh1LmRlZmF1bHQse2l0ZW06ITAseHM6MTIsc3R5bGU6e21hcmdpbkJvdHRvbTpcIjEwcHhcIn19LHMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGYuZGVmYXVsdCx7dmFyaWFudDpcImg1XCJ9LG4pKSxzLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh1LmRlZmF1bHQse2l0ZW06ITAseHM6MTJ9LGkpLHMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHUuZGVmYXVsdCx7aXRlbTohMCx4czoxMn0scy5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6cCx0YXJnZXQ6XCJfYmxhbmtcIn0sXCJWaWV3IGluIG1hbnVhbFwiKSkpKSl9fSw3ODQ6ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG89bihyKDE5MSkpLGk9bihyKDI5NykpLGE9bihyKDI0NCkpO3QuZGVmYXVsdD1mdW5jdGlvbih7aGVscElkOmV9KXtyZXR1cm4gaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYS5kZWZhdWx0LHtoZWxwSWQ6ZSxvbWl0UXVlc3Rpb25NYXJrOiEwfSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChvLmRlZmF1bHQse2ZvbnRTaXplOlwic21hbGxcIixzdHlsZTp7bWFyZ2luVG9wOlwiNXB4XCJ9fSkpfX0sNjA3OmZ1bmN0aW9uKGUsdCxyKXt2YXIgbj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LklubGluZVF1ZXN0aW9uTWFyaz10LklubGluZUhlbHA9dC5IZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50PXZvaWQgMDtjb25zdCBvPXIoMjk5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIkhlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gby5IZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50fX0pO2NvbnN0IGk9bihyKDI0NCkpO3QuSW5saW5lSGVscD1pLmRlZmF1bHQ7Y29uc3QgYT1uKHIoNzg0KSk7dC5JbmxpbmVRdWVzdGlvbk1hcms9YS5kZWZhdWx0fSw2NTg6dD0+e3QuZXhwb3J0cz1lfSw3MjA6ZT0+e2UuZXhwb3J0cz10fSwyODA6ZT0+e2UuZXhwb3J0cz1yfSw3NDA6ZT0+e2UuZXhwb3J0cz1ufSwxOTE6ZT0+e2UuZXhwb3J0cz1vfSwyOTc6ZT0+e2UuZXhwb3J0cz1pfX0sbD17fTtyZXR1cm4gZnVuY3Rpb24gZSh0KXtpZihsW3RdKXJldHVybiBsW3RdLmV4cG9ydHM7dmFyIHI9bFt0XT17ZXhwb3J0czp7fX07cmV0dXJuIGFbdF0uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsZSksci5leHBvcnRzfSg2MDcpfSkoKX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OW9aV3h3TFhCdmNIVndMM2RsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJbmRsWW5CaFkyczZMeTlvWld4d0xYQnZjSFZ3THk0dmMzSmpMMGhsYkhCRGIyNTBaWGgwTDBobGJIQkRiMjUwWlhoMExuUnplQ0lzSW5kbFluQmhZMnM2THk5b1pXeHdMWEJ2Y0hWd0x5NHZjM0pqTDBsdWJHbHVaVWhsYkhBdlNXNXNhVzVsU0dWc2NDNTBjM2dpTENKM1pXSndZV05yT2k4dmFHVnNjQzF3YjNCMWNDOHVMM055WXk5SmJteHBibVZSZFdWemRHbHZiazFoY21zdlNXNXNhVzVsVVhWbGMzUnBiMjVOWVhKckxuUnplQ0lzSW5kbFluQmhZMnM2THk5b1pXeHdMWEJ2Y0hWd0x5NHZjM0pqTDJsdVpHVjRMblJ6SWl3aWQyVmljR0ZqYXpvdkwyaGxiSEF0Y0c5d2RYQXZaWGgwWlhKdVlXd2dYQ0pBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlDYjNoY0lpSXNJbmRsWW5CaFkyczZMeTlvWld4d0xYQnZjSFZ3TDJWNGRHVnlibUZzSUZ3aVFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlIzSnBaRndpSWl3aWQyVmljR0ZqYXpvdkwyaGxiSEF0Y0c5d2RYQXZaWGgwWlhKdVlXd2dYQ0pBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlRYjNCdmRtVnlYQ0lpTENKM1pXSndZV05yT2k4dmFHVnNjQzF3YjNCMWNDOWxlSFJsY201aGJDQmNJa0J0WVhSbGNtbGhiQzExYVM5amIzSmxMMVI1Y0c5bmNtRndhSGxjSWlJc0luZGxZbkJoWTJzNkx5OW9aV3h3TFhCdmNIVndMMlY0ZEdWeWJtRnNJRndpUUcxaGRHVnlhV0ZzTFhWcEwybGpiMjV6TDBobGJIQmNJaUlzSW5kbFluQmhZMnM2THk5b1pXeHdMWEJ2Y0hWd0wyVjRkR1Z5Ym1Gc0lGd2ljbVZoWTNSY0lpSXNJbmRsWW5CaFkyczZMeTlvWld4d0xYQnZjSFZ3TDNkbFluQmhZMnN2WW05dmRITjBjbUZ3SWl3aWQyVmljR0ZqYXpvdkwyaGxiSEF0Y0c5d2RYQXZkMlZpY0dGamF5OXpkR0Z5ZEhWd0lsMHNJbTVoYldWeklqcGJJbkp2YjNRaUxDSm1ZV04wYjNKNUlpd2laWGh3YjNKMGN5SXNJbTF2WkhWc1pTSXNJbkpsY1hWcGNtVWlMQ0prWldacGJtVWlMQ0poYldRaUxDSmhJaXdpYVNJc0luTmxiR1lpTENKZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDE4Mk5UaGZYeUlzSWw5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWHpjeU1GOWZJaXdpWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTWpnd1gxOGlMQ0pmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMTgzTkRCZlh5SXNJbDlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZYekU1TVY5Zklpd2lYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWZNamszWDE4aUxDSklaV3h3UTI5dWRHVjRkQ0lzSW1OeVpXRjBaVU52Ym5SbGVIUWlMQ0pvYjNOMElpd2ljR0YwYUNJc0lteGxlR2xqYjI0aUxDSmphR2xzWkhKbGJpSXNJbEJ5YjNacFpHVnlJaXdpZG1Gc2RXVWlMQ0puWlhSSVpXeHdTVzVtYnlJc0ltbGtJaXdpZEdsMGJHVWlMQ0pzYVc1cklpd2lkR1Y0ZENJc0ltSmhjMlZWY213aUxDSm9aV3h3U1dRaUxDSnZiV2wwVVhWbGMzUnBiMjVOWVhKcklpd2ljMlYwVkdsMGJHVWlMQ0oxYzJWVGRHRjBaU0lzSW5ObGRGUmxlSFFpTENKelpYUk1hVzVySWl3aVlXNWphRzl5Uld3aUxDSnpaWFJCYm1Ob2IzSkZiQ0lzSW5WelpVTnZiblJsZUhRaUxDSjFjMlZGWm1abFkzUWlMQ0p2YmtOc2FXTnJJaXdpWlhabGJuUWlMQ0pqZFhKeVpXNTBWR0Z5WjJWMElpd2ljM1I1YkdVaUxDSjBaWGgwUkdWamIzSmhkR2x2YmlJc0luUmxlSFJFWldOdmNtRjBhVzl1VTNSNWJHVWlMQ0owWlhoMFJHVmpiM0poZEdsdmJsUm9hV05yYm1WemN5SXNJblJsZUhSRVpXTnZjbUYwYVc5dVEyOXNiM0lpTENKamRYSnpiM0lpTENKaGJHbG5ia2wwWlcxeklpd2lZMjlzYjNJaUxDSnZjR1Z1SWl3aWIyNURiRzl6WlNJc0ltRnVZMmh2Y2s5eWFXZHBiaUlzSW5abGNuUnBZMkZzSWl3aWFHOXlhWHB2Ym5SaGJDSXNJblJ5WVc1elptOXliVTl5YVdkcGJpSXNJbU52Ym5SaGFXNWxjaUlzSW1OdmJYQnZibVZ1ZENJc0luQWlMQ0p0WVhoWGFXUjBhQ0lzSW1sMFpXMGlMQ0o0Y3lJc0ltMWhjbWRwYmtKdmRIUnZiU0lzSW5aaGNtbGhiblFpTENKb2NtVm1JaXdpZEdGeVoyVjBJaXdpWm05dWRGTnBlbVVpTENKdFlYSm5hVzVVYjNBaUxDSklaV3h3UTI5dWRHVjRkRkJ5YjNacFpHVnlRMjl0Y0c5dVpXNTBJaXdpU1c1c2FXNWxTR1ZzY0NJc0lrbHViR2x1WlZGMVpYTjBhVzl1VFdGeWF5SXNJbDlmZDJWaWNHRmphMTl0YjJSMWJHVmZZMkZqYUdWZlh5SXNJbDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThpTENKdGIyUjFiR1ZKWkNJc0lsOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOGlMQ0pqWVd4c0lsMHNJbTFoY0hCcGJtZHpJam9pUTBGQlFTeFRRVUV5UTBFc1JVRkJUVU1zUjBGRGFFUXNSMEZCYzBJc2FVSkJRVnBETEZOQlFUQkRMR2xDUVVGWVF5eFBRVU40UTBFc1QwRkJUMFFzVVVGQlZVUXNSVUZCVVVjc1VVRkJVU3g1UWtGQk1FSkJMRkZCUVZFc01FSkJRVEpDUVN4UlFVRlJMRFpDUVVFNFFrRXNVVUZCVVN4blEwRkJhVU5CTEZGQlFWRXNNa0pCUVRSQ1FTeFJRVUZSTEdWQlEzSk9MRWRCUVhGQ0xHMUNRVUZZUXl4UlFVRjVRa0VzVDBGQlQwTXNTVUZET1VORUxFOUJRVThzUTBGQlF5eDNRa0ZCZVVJc2VVSkJRVEJDTERSQ1FVRTJRaXdyUWtGQlowTXNNRUpCUVRKQ0xGTkJRVlZLTEU5QlEzcEtMRU5CUTBvc1NVRkJTVTBzUlVGQmRVSXNhVUpCUVZwTUxGRkJRWFZDUkN4RlFVRlJSeXhSUVVGUkxIbENRVUV3UWtFc1VVRkJVU3d3UWtGQk1rSkJMRkZCUVZFc05rSkJRVGhDUVN4UlFVRlJMR2REUVVGcFEwRXNVVUZCVVN3eVFrRkJORUpCTEZGQlFWRXNWVUZCV1Vnc1JVRkJVVVFzUlVGQlN5eDVRa0ZCTUVKQkxFVkJRVXNzTUVKQlFUSkNRU3hGUVVGTExEWkNRVUU0UWtFc1JVRkJTeXhuUTBGQmFVTkJMRVZCUVVzc01rSkJRVFJDUVN4RlFVRlpMRTlCUTNaaUxFbEJRVWtzU1VGQlNWRXNTMEZCUzBRc1IwRkJkVUlzYVVKQlFWcE1MRkZCUVhWQ1FTeFJRVUZWUml4SFFVRk5VU3hIUVVGTFJDeEZRVUZGUXl4SlFWQjRSU3hEUVZOSFF5eE5RVUZOTEZOQlFWTkRMRVZCUVd0RFF5eEZRVUZyUTBNc1JVRkJhME5ETEVWQlFXdERReXhGUVVGclEwTXNSMEZETlV3c1RTeG5ja0pEVmtFc2EwSkJTV0VzUlVGQlFVTXNXVUZCWXl4RlFVRkJReXhqUVVFMFFpeEpRVVYyUkN4NVEwRkJOa01zUzBGRE0wTkRMRVZCUVVrc1MwRkRTa01zUlVGQlNTeFJRVU5LUXl4RlFVRlBMRk5CUTFCRExFbEJaVUVzVDBGRFJTeDNRa0ZCUXl4RlFVRkJUQ3haUVVGWlRTeFRRVUZSTEVOQlFVTkRMRTFCUVU4c1EwRkJRME1zV1VGVWFFTXNVMEZCY1VKRExFZEJRMjVDTEU5QlFVbE1MRVZCUVZGTExFZEJRMGhNTEVWQlFWRkxMRWRCUlZJc1EwRkJRME1zVFVGQlR5eFZRVUZYUXl4TFFVRk5MRlZCUVZkRExFdEJRVTBzV1VGTFVrTXNVVUZCVTFnc1JVRkJUME1zU1VGRGVFUkZMRXNzYTNKQ1F6TkNVQ3hyUWtGRFFTeFpRVU5CTEZsQlJVRXNXVUZEUVN4WlFVTkJMRk5CUlVFc2IwSkJRVzFETEU5QlEycERVeXhGUVVGTkxHbENRVU5PUXl4RlFVRm5RaXhUUVVOb1FsWXNTVUZOUVN4TlFVRlBTeXhGUVVGUFRTeEhRVUZaTEVWQlFVRkRMRmxCUTI1Q1RDeEZRVUZOVFN4SFFVRlhMRVZCUVVGRUxGbEJRMnBDVGl4RlFVRk5VU3hIUVVGWExFVkJRVUZHTEZsQlEycENSeXhGUVVGVlF5eEhRVUZsTEVWQlFVRktMRk5CUVcxRExFOUJSVGRFTEZsQlFVTlVMRVZCUVZjc1VVRkJSVXNzUjBGQlZ5eEZRVUZCVXl4WFFVRlhMRVZCUVVGMFFpeGhRV3RETVVNc1QwRm9RMEVzUlVGQlFYVkNMRmRCUVZVc1MwRkRVaXhOUVVGTkxFMUJRVU5pTEVWQlFVc3NTMEZCUlVVc1JVRkJTU3hMUVVGRlJDeEhRVUZSU0N4RlFVRlpUU3hIUVVONFEwVXNSVUZCVTA0c1IwRkRWRkVzUlVGQlVVNHNSMEZEVWs4c1JVRkJVVTRzUlVGQlZVWXNUVUUyUW14Q0xHZEVRVU5GTEdkRFFVRk5ZU3hSUVd4Q1ZpeFRRVUZ4UWtNc1IwRkRia0pLTEVWQlFWbEpMRVZCUVUxRExHZENRV2xDV1VNc1RVRXpRa2dzUTBGRE0wSkRMR1ZCUVdkQ0xGbEJRMmhDUXl4dlFrRkJjVUlzVTBGRGNrSkRMSGRDUVVGNVFpeE5RVU42UWtNc2IwSkJRWEZDTEZkQlEzSkNReXhQUVVGUkxFOUJRMUpETEZkQlFWa3NWMEZ6UWxBMVFpeEhRVlpFVlN4RlFVTkxMR2xFUVVWQkxDdENRVUZMV1N4TlFVRlBMRU5CUVVOUExFMUJRVThzWVVGQlZ5eExRVlYwUXl4M1FrRkJReXhWUVVGUExFTkJRMDVETEU5QlFWRm1MRVZCUTFKblFpeFJRWEJDVGl4WFFVTkZaaXhGUVVGWkxFOUJiMEpTWjBJc1lVRkJZeXhEUVVGRFF5eFRRVUZWTEZOQlFWVkRMRmRCUVZrc1ZVRkRMME5ETEdkQ1FVRnBRaXhEUVVObVJpeFRRVUZWTEUxQlExWkRMRmRCUVZrc1ZVRkZaRzVDTEZOQlFWVkJMRWRCUlZZc2QwSkJRVU1zVlVGQlNTeERRVUZEY1VJc1YwRkJVeXhGUVVGRFF5eFZRVUZYTEZWQlFVdERMRVZCUVVjc1JVRkJSME1zVTBGQlV5eFRRVU0zUXl4M1FrRkJReXhWUVVGSkxFTkJRVU5ETEUxQlFVa3NSVUZCUTBNc1IwRkJTU3hIUVVGSmJrSXNUVUZCVHl4RFFVRkRiMElzWVVGQll5eFRRVU4yUXl4M1FrRkJReXhWUVVGVkxFTkJRVU5ETEZGQlFWRXNUVUZCVFhSRExFbEJSVFZDTEhkQ1FVRkRMRlZCUVVrc1EwRkJRMjFETEUxQlFVa3NSVUZCUTBNc1IwRkJTU3hKUVVOYWJFTXNSMEZGU0N4M1FrRkJReXhWUVVGSkxFTkJRVU5wUXl4TlFVRkpMRVZCUVVORExFZEJRVWtzU1VGRFlpdzJRa0ZCUjBjc1MwRkJUWFJETEVWQlFVMTFReXhQUVVGUExGVkJRVkVzZDBJc2VVcERhRVl4UXl4clFrRkRRU3haUVVOQkxGbEJSVUVzYjBKQlFUSkRMRTlCUVVOd1F5eEpRVU14UXl4UFFVTkZMSGRDUVVGRExGVkJRVlVzUTBGQlEwRXNUMEZCVVVFc1JVRkJVVU1zYTBKQlFXdENMRWRCUXpWRExIZENRVUZETEZWQlFVa3NRMEZCUTI5RExGTkJRVk1zVVVGQlVYaENMRTFCUVU4c1EwRkJRM2xDTEZWQlFWY3NXU3hwVDBOUWFFUXNaVUZOUlN3MFJrRk9UU3hGUVVGQlF5eG5RMEZEVWl4clFrRk5SU3hGUVVGQlF5eFhRVTVMTEZWQlExQXNhMEpCVDBVc1JVRkJRVU1zYlVKQlVFc3NWeXhSUTBaUWNFVXNSVUZCVDBRc1VVRkJWVkVzUnl4UlEwRnFRbEFzUlVGQlQwUXNVVUZCVlZNc1J5eFJRMEZxUWxJc1JVRkJUMFFzVVVGQlZWVXNSeXhSUTBGcVFsUXNSVUZCVDBRc1VVRkJWVmNzUnl4UlEwRnFRbFlzUlVGQlQwUXNVVUZCVlZrc1J5eFJRMEZxUWxnc1JVRkJUMFFzVVVGQlZXRXNTVU5EWW5sRUxFVkJRVEpDTEVjc1QwRkhMMElzVTBGQlUwTXNSVUZCYjBKRExFZEJSVFZDTEVkQlFVZEdMRVZCUVhsQ1JTeEhRVU16UWl4UFFVRlBSaXhGUVVGNVFrVXNSMEZCVlhoRkxGRkJSek5ETEVsQlFVbERMRVZCUVZOeFJTeEZRVUY1UWtVc1IwRkJXU3hEUVVkcVJIaEZMRkZCUVZNc1NVRlBWaXhQUVVoQmVVVXNSVUZCYjBKRUxFZEJRVlZGTEV0QlFVdDZSU3hGUVVGUFJDeFJRVUZUUXl4RlFVRlJRU3hGUVVGUFJDeFJRVUZUZFVVc1IwRkhjRVYwUlN4RlFVRlBSQ3hSUTJwQ1YzVkZMRU5CUVc5Q0xFMGlMQ0ptYVd4bElqb2lZblZ1Wkd4bExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNoeVpYRjFhWEpsS0Z3aVFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlFtOTRYQ0lwTENCeVpYRjFhWEpsS0Z3aVFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlIzSnBaRndpS1N3Z2NtVnhkV2x5WlNoY0lrQnRZWFJsY21saGJDMTFhUzlqYjNKbEwxQnZjRzkyWlhKY0lpa3NJSEpsY1hWcGNtVW9YQ0pBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlVZVhCdlozSmhjR2g1WENJcExDQnlaWEYxYVhKbEtGd2lRRzFoZEdWeWFXRnNMWFZwTDJsamIyNXpMMGhsYkhCY0lpa3NJSEpsY1hWcGNtVW9YQ0p5WldGamRGd2lLU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYQ0pBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlDYjNoY0lpd2dYQ0pBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlIY21sa1hDSXNJRndpUUcxaGRHVnlhV0ZzTFhWcEwyTnZjbVV2VUc5d2IzWmxjbHdpTENCY0lrQnRZWFJsY21saGJDMTFhUzlqYjNKbEwxUjVjRzluY21Gd2FIbGNJaXdnWENKQWJXRjBaWEpwWVd3dGRXa3ZhV052Ym5NdlNHVnNjRndpTENCY0luSmxZV04wWENKZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQjdYRzVjZEZ4MGRtRnlJR0VnUFNCMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ1B5Qm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSkFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOUNiM2hjSWlrc0lISmxjWFZwY21Vb1hDSkFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOUhjbWxrWENJcExDQnlaWEYxYVhKbEtGd2lRRzFoZEdWeWFXRnNMWFZwTDJOdmNtVXZVRzl3YjNabGNsd2lLU3dnY21WeGRXbHlaU2hjSWtCdFlYUmxjbWxoYkMxMWFTOWpiM0psTDFSNWNHOW5jbUZ3YUhsY0lpa3NJSEpsY1hWcGNtVW9YQ0pBYldGMFpYSnBZV3d0ZFdrdmFXTnZibk12U0dWc2NGd2lLU3dnY21WeGRXbHlaU2hjSW5KbFlXTjBYQ0lwS1NBNklHWmhZM1J2Y25rb2NtOXZkRnRjSWtCdFlYUmxjbWxoYkMxMWFTOWpiM0psTDBKdmVGd2lYU3dnY205dmRGdGNJa0J0WVhSbGNtbGhiQzExYVM5amIzSmxMMGR5YVdSY0lsMHNJSEp2YjNSYlhDSkFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOVFiM0J2ZG1WeVhDSmRMQ0J5YjI5MFcxd2lRRzFoZEdWeWFXRnNMWFZwTDJOdmNtVXZWSGx3YjJkeVlYQm9lVndpWFN3Z2NtOXZkRnRjSWtCdFlYUmxjbWxoYkMxMWFTOXBZMjl1Y3k5SVpXeHdYQ0pkTENCeWIyOTBXMXdpY21WaFkzUmNJbDBwTzF4dVhIUmNkR1p2Y2loMllYSWdhU0JwYmlCaEtTQW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JRDhnWlhod2IzSjBjeUE2SUhKdmIzUXBXMmxkSUQwZ1lWdHBYVHRjYmx4MGZWeHVmU2tvYzJWc1ppd2dablZ1WTNScGIyNG9YMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWZOalU0WDE4c0lGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlh6Y3lNRjlmTENCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDE4eU9EQmZYeXdnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTnpRd1gxOHNJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZYekU1TVY5ZkxDQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgxOHlPVGRmWHlrZ2UxeHVjbVYwZFhKdUlDSXNJbWx0Y0c5eWRDQlNaV0ZqZEN3Z2UyTnlaV0YwWlVOdmJuUmxlSFI5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQkpTR1ZzY0VOdmJuUmxlSFFnWm5KdmJTQW5MaTR2U1c1MFpYSm1ZV05sY3k5SlNHVnNjRU52Ym5SbGVIUW5PMXh1YVcxd2IzSjBJRWxJWld4d1NXNW1ieUJtY205dElDY3VMaTlKYm5SbGNtWmhZMlZ6TDBsSVpXeHdTVzVtYnljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCSVpXeHdRMjl1ZEdWNGRDQTlJR055WldGMFpVTnZiblJsZUhROFNVaGxiSEJEYjI1MFpYaDBQaWg3ZlNCaGN5QkpTR1ZzY0VOdmJuUmxlSFFwTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1NHVnNjRU52Ym5SbGVIUlFjbTkyYVdSbGNrTnZiWEJ2Ym1WdWRDaDdYRzRnSUdodmMzUXNYRzRnSUhCaGRHZ3NYRzRnSUd4bGVHbGpiMjRzWEc0Z0lHTm9hV3hrY21WdVhHNTlPaUI3WEc0Z0lHaHZjM1E2SUhOMGNtbHVaenRjYmlBZ2NHRjBhRG9nYzNSeWFXNW5PMXh1SUNCc1pYaHBZMjl1T2lCU1pXTnZjbVE4YzNSeWFXNW5MQ0JKU0dWc2NFbHVabTgrTzF4dUlDQmphR2xzWkhKbGJqb2dZVzU1TzF4dWZTa2dlMXh1SUNCbWRXNWpkR2x2YmlCblpYUklaV3h3U1c1bWJ5aHBaRG9nYzNSeWFXNW5LVG9nU1VobGJIQkpibVp2SUh0Y2JpQWdJQ0JwWmlBb2JHVjRhV052Ymx0cFpGMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnNaWGhwWTI5dVcybGtYVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUh0MGFYUnNaVG9nSjNWdWEyNXZkMjRuTENCc2FXNXJPaUFuZFc1cmJtOTNiaWNzSUhSbGVIUTZJQ2QxYm10dWIzZHVKMzA3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThTR1ZzY0VOdmJuUmxlSFF1VUhKdmRtbGtaWElnZG1Gc2RXVTllM3RuWlhSSVpXeHdTVzVtYnl3Z1ltRnpaVlZ5YkRvZ2FHOXpkQ0FySUhCaGRHaDlmVDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxibjFjYmlBZ0lDQThMMGhsYkhCRGIyNTBaWGgwTGxCeWIzWnBaR1Z5UGx4dUlDQXBPMXh1ZlZ4dUlpd2lhVzF3YjNKMElFSnZlQ0JtY205dElDZEFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOUNiM2duTzF4dWFXMXdiM0owSUVkeWFXUWdabkp2YlNBblFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlIzSnBaQ2M3WEc1cGJYQnZjblFnVUc5d2IzWmxjaUJtY205dElDZEFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOVFiM0J2ZG1WeUp6dGNibWx0Y0c5eWRDQjdRMU5UVUhKdmNHVnlkR2xsYzMwZ1puSnZiU0FuUUcxaGRHVnlhV0ZzTFhWcEwyTnZjbVV2YzNSNWJHVnpMM2RwZEdoVGRIbHNaWE1uTzF4dWFXMXdiM0owSUZSNWNHOW5jbUZ3YUhrZ1puSnZiU0FuUUcxaGRHVnlhV0ZzTFhWcEwyTnZjbVV2Vkhsd2IyZHlZWEJvZVNjN1hHNXBiWEJ2Y25RZ1VtVmhZM1FzSUh0TmIzVnpaVVYyWlc1MExDQjFjMlZEYjI1MFpYaDBMQ0IxYzJWRlptWmxZM1FzSUhWelpWTjBZWFJsZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdlMGhsYkhCRGIyNTBaWGgwZlNCbWNtOXRJQ2N1TGk5SVpXeHdRMjl1ZEdWNGRDOUlaV3h3UTI5dWRHVjRkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUVsdWJHbHVaVWhsYkhBb2UxeHVJQ0JvWld4d1NXUXNYRzRnSUc5dGFYUlJkV1Z6ZEdsdmJrMWhjbXNzWEc0Z0lHTm9hV3hrY21WdVhHNTlPaUI3WEc0Z0lHaGxiSEJKWkRvZ2MzUnlhVzVuTzF4dUlDQnZiV2wwVVhWbGMzUnBiMjVOWVhKclB6b2dZbTl2YkdWaGJqdGNiaUFnWTJocGJHUnlaVzQ2SUdGdWVUdGNibjBwSUh0Y2JpQWdZMjl1YzNRZ1czUnBkR3hsTENCelpYUlVhWFJzWlYwZ1BTQjFjMlZUZEdGMFpUeHpkSEpwYm1jK0tDazdYRzRnSUdOdmJuTjBJRnQwWlhoMExDQnpaWFJVWlhoMFhTQTlJSFZ6WlZOMFlYUmxQSE4wY21sdVp6NG9LVHRjYmlBZ1kyOXVjM1FnVzJ4cGJtc3NJSE5sZEV4cGJtdGRJRDBnZFhObFUzUmhkR1U4YzNSeWFXNW5QaWdwTzF4dUlDQmpiMjV6ZENCYllXNWphRzl5Uld3c0lITmxkRUZ1WTJodmNrVnNYU0E5SUhWelpWTjBZWFJsUEVoVVRVeENkWFIwYjI1RmJHVnRaVzUwSUh3Z2JuVnNiRDRvYm5Wc2JDazdYRzVjYmlBZ1kyOXVjM1FnZTJkbGRFaGxiSEJKYm1adkxDQmlZWE5sVlhKc2ZTQTlJSFZ6WlVOdmJuUmxlSFFvU0dWc2NFTnZiblJsZUhRcE8xeHVYRzRnSUhWelpVVm1abVZqZENnb0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2UzUnBkR3hsTENCMFpYaDBMQ0JzYVc1cmZTQTlJR2RsZEVobGJIQkpibVp2S0dobGJIQkpaQ2s3WEc0Z0lDQWdjMlYwVkdsMGJHVW9kR2wwYkdVcE8xeHVJQ0FnSUhObGRGUmxlSFFvZEdWNGRDazdYRzRnSUNBZ2MyVjBUR2x1YXloaVlYTmxWWEpzSUNzZ2JHbHVheWs3WEc0Z0lIMHBPMXh1WEc0Z0lHTnZibk4wSUhOMGVXeGxPaUJEVTFOUWNtOXdaWEowYVdWeklEMGdlMXh1SUNBZ0lIUmxlSFJFWldOdmNtRjBhVzl1T2lBbmRXNWtaWEpzYVc1bEp5eGNiaUFnSUNCMFpYaDBSR1ZqYjNKaGRHbHZibE4wZVd4bE9pQW5aR0Z6YUdWa0p5eGNiaUFnSUNCMFpYaDBSR1ZqYjNKaGRHbHZibFJvYVdOcmJtVnpjem9nSnpGd2VDY3NYRzRnSUNBZ2RHVjRkRVJsWTI5eVlYUnBiMjVEYjJ4dmNqb2dKMlJoY210bmNtRjVKeXhjYmlBZ0lDQmpkWEp6YjNJNklDZG9aV3h3Snl4Y2JpQWdJQ0JoYkdsbmJrbDBaVzF6T2lBblkyVnVkR1Z5SjF4dUlDQjlPMXh1WEc0Z0lHWjFibU4wYVc5dUlHOXdaVzVRYjNCdmRtVnlLR1YyWlc1ME9pQk5iM1Z6WlVWMlpXNTBQRWhVVFV4Q2RYUjBiMjVGYkdWdFpXNTBQaWtnZTF4dUlDQWdJSE5sZEVGdVkyaHZja1ZzS0dWMlpXNTBMbU4xY25KbGJuUlVZWEpuWlhRcE8xeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdZMnh2YzJWUWIzQnZkbVZ5S0NrZ2UxeHVJQ0FnSUhObGRFRnVZMmh2Y2tWc0tHNTFiR3dwTzF4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2NtVnVaR1Z5VVhWbGMzUnBiMjVOWVhKcktDazZJRXBUV0M1RmJHVnRaVzUwSUh0Y2JpQWdJQ0JwWmlBb2IyMXBkRkYxWlhOMGFXOXVUV0Z5YXlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUR3K1BDOCtPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnUEhOMWNDQnpkSGxzWlQxN2UyTnZiRzl5T2lBblpHRnlhMmR5WVhrbmZYMCtQend2YzNWd1BqdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR3K1hHNGdJQ0FnSUNBOGMzQmhiaUJ2YmtOc2FXTnJQWHR2Y0dWdVVHOXdiM1psY24wZ2MzUjViR1U5ZTNOMGVXeGxmVDVjYmlBZ0lDQWdJQ0FnZTJOb2FXeGtjbVZ1ZlZ4dUlDQWdJQ0FnUEM5emNHRnVQbHh1SUNBZ0lDQWdlM0psYm1SbGNsRjFaWE4wYVc5dVRXRnlheWdwZlZ4dUlDQWdJQ0FnUEZCdmNHOTJaWEpjYmlBZ0lDQWdJQ0FnYjNCbGJqMTdJU0ZoYm1Ob2IzSkZiSDFjYmlBZ0lDQWdJQ0FnYjI1RGJHOXpaVDE3WTJ4dmMyVlFiM0J2ZG1WeWZWeHVJQ0FnSUNBZ0lDQmhibU5vYjNKUGNtbG5hVzQ5ZTN0MlpYSjBhV05oYkRvZ0oyTmxiblJsY2ljc0lHaHZjbWw2YjI1MFlXdzZJQ2RqWlc1MFpYSW5mWDFjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVQWHQ3WEc0Z0lDQWdJQ0FnSUNBZ2RtVnlkR2xqWVd3NklDZDBiM0FuTEZ4dUlDQWdJQ0FnSUNBZ0lHaHZjbWw2YjI1MFlXdzZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJSDE5WEc0Z0lDQWdJQ0FnSUdGdVkyaHZja1ZzUFh0aGJtTm9iM0pGYkgxY2JpQWdJQ0FnSUQ1Y2JpQWdJQ0FnSUNBZ1BFZHlhV1FnWTI5dWRHRnBibVZ5SUdOdmJYQnZibVZ1ZEQxN1FtOTRmU0J3UFhzeWZTQnRZWGhYYVdSMGFEMWNJak13TUhCNFhDSStYRzRnSUNBZ0lDQWdJQ0FnUEVkeWFXUWdhWFJsYlNCNGN6MTdNVEo5SUhOMGVXeGxQWHQ3YldGeVoybHVRbTkwZEc5dE9pQW5NVEJ3ZUNkOWZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4VWVYQnZaM0poY0doNUlIWmhjbWxoYm5ROVhDSm9OVndpUG50MGFYUnNaWDA4TDFSNWNHOW5jbUZ3YUhrK1hHNGdJQ0FnSUNBZ0lDQWdQQzlIY21sa1BseHVJQ0FnSUNBZ0lDQWdJRHhIY21sa0lHbDBaVzBnZUhNOWV6RXlmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lIdDBaWGgwZlZ4dUlDQWdJQ0FnSUNBZ0lEd3ZSM0pwWkQ1Y2JpQWdJQ0FnSUNBZ0lDQThSM0pwWkNCcGRHVnRJSGh6UFhzeE1uMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFh0c2FXNXJmU0IwWVhKblpYUTlYQ0pmWW14aGJtdGNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdWbWxsZHlCcGJpQnRZVzUxWVd4Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WVQ1Y2JpQWdJQ0FnSUNBZ0lDQThMMGR5YVdRK1hHNGdJQ0FnSUNBZ0lEd3ZSM0pwWkQ1Y2JpQWdJQ0FnSUR3dlVHOXdiM1psY2o1Y2JpQWdJQ0E4THo1Y2JpQWdLVHRjYm4xY2JpSXNJbWx0Y0c5eWRDQklaV3h3SUdaeWIyMGdKMEJ0WVhSbGNtbGhiQzExYVM5cFkyOXVjeTlJWld4d0p6dGNibWx0Y0c5eWRDQlNaV0ZqZENCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdTVzVzYVc1bFNHVnNjQ0JtY205dElDZHpjbU12U1c1c2FXNWxTR1ZzY0M5SmJteHBibVZJWld4d0p6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdTVzVzYVc1bFVYVmxjM1JwYjI1TllYSnJLSHRvWld4d1NXUjlPaUI3YUdWc2NFbGtPaUJ6ZEhKcGJtZDlLU0I3WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEVsdWJHbHVaVWhsYkhBZ2FHVnNjRWxrUFh0b1pXeHdTV1I5SUc5dGFYUlJkV1Z6ZEdsdmJrMWhjbXM5ZTNSeWRXVjlQbHh1SUNBZ0lDQWdQRWhsYkhBZ1ptOXVkRk5wZW1VOVhDSnpiV0ZzYkZ3aUlITjBlV3hsUFh0N2JXRnlaMmx1Vkc5d09pQW5OWEI0SjMxOUlDOCtYRzRnSUNBZ1BDOUpibXhwYm1WSVpXeHdQbHh1SUNBcE8xeHVmVnh1SWl3aWFXMXdiM0owSUh0SVpXeHdRMjl1ZEdWNGRGQnliM1pwWkdWeVEyOXRjRzl1Wlc1MGZTQm1jbTl0SUNjdUwwaGxiSEJEYjI1MFpYaDBMMGhsYkhCRGIyNTBaWGgwSnp0Y2JtbHRjRzl5ZENCSmJteHBibVZJWld4d0lHWnliMjBnSnk0dlNXNXNhVzVsU0dWc2NDOUpibXhwYm1WSVpXeHdKenRjYm1sdGNHOXlkQ0JKYm14cGJtVlJkV1Z6ZEdsdmJrMWhjbXNnWm5KdmJTQW5MaTlKYm14cGJtVlJkV1Z6ZEdsdmJrMWhjbXN2U1c1c2FXNWxVWFZsYzNScGIyNU5ZWEpySnp0Y2JtbHRjRzl5ZENCSlNHVnNjRWx1Wm04Z1puSnZiU0FuTGk5SmJuUmxjbVpoWTJWekwwbElaV3h3U1c1bWJ5YzdYRzVjYm1WNGNHOXlkQ0I3WEc0Z0lFaGxiSEJEYjI1MFpYaDBVSEp2ZG1sa1pYSkRiMjF3YjI1bGJuUXNYRzRnSUVsdWJHbHVaVWhsYkhBc1hHNGdJRWxJWld4d1NXNW1ieXhjYmlBZ1NXNXNhVzVsVVhWbGMzUnBiMjVOWVhKclhHNTlPMXh1SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDE4Mk5UaGZYenNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWHpjeU1GOWZPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTWpnd1gxODdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMTgzTkRCZlh6c2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZYekU1TVY5Zk95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWZNamszWDE4N0lpd2lMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1ZG1GeUlGOWZkMlZpY0dGamExOXRiMlIxYkdWZlkyRmphR1ZmWHlBOUlIdDlPMXh1WEc0dkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1Wm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JseDBhV1lvWDE5M1pXSndZV05yWDIxdlpIVnNaVjlqWVdOb1pWOWZXMjF2WkhWc1pVbGtYU2tnZTF4dVhIUmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZiVzlrZFd4bFgyTmhZMmhsWDE5YmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNWNkSDFjYmx4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmx4MGRtRnlJRzF2WkhWc1pTQTlJRjlmZDJWaWNHRmphMTl0YjJSMWJHVmZZMkZqYUdWZlgxdHRiMlIxYkdWSlpGMGdQU0I3WEc1Y2RGeDBMeThnYm04Z2JXOWtkV3hsTG1sa0lHNWxaV1JsWkZ4dVhIUmNkQzh2SUc1dklHMXZaSFZzWlM1c2IyRmtaV1FnYm1WbFpHVmtYRzVjZEZ4MFpYaHdiM0owY3pvZ2UzMWNibHgwZlR0Y2JseHVYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JseDBYMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNibHgwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmx4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1ZlZ4dVhHNGlMQ0l2THlCemRHRnlkSFZ3WEc0dkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaTh2SUZSb2FYTWdaVzUwY25rZ2JXOWtkV3hsSUdseklISmxabVZ5Wlc1alpXUWdZbmtnYjNSb1pYSWdiVzlrZFd4bGN5QnpieUJwZENCallXNG5kQ0JpWlNCcGJteHBibVZrWEc1MllYSWdYMTkzWldKd1lXTnJYMlY0Y0c5eWRITmZYeUE5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b05qQTNLVHRjYmlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsImltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2V9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IHtnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnLi4vVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uQ2hvaWNlKHtjcml0ZXJpb259OiB7Y3JpdGVyaW9uOiBJQ3JpdGVyaW9ufSkge1xuICBjb25zdCB7cHZmcywgc2hvd1BlcmNlbnRhZ2VzfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgcHZmID0gcHZmc1tjcml0ZXJpb24uaWRdO1xuICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG4gIGNvbnN0IHdvcnN0ID0gZ2V0V29yc3QocHZmLCB1c2VQZXJjZW50YWdlKTtcbiAgY29uc3QgYmVzdCA9IGdldEJlc3QocHZmLCB1c2VQZXJjZW50YWdlKTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbCBpZD17YHJhbmtpbmctY2hvaWNlLSR7Y3JpdGVyaW9uLmlkfWB9PlxuICAgICAgPFJhZGlvIHZhbHVlPXtjcml0ZXJpb24uaWR9IC8+XG4gICAgICB7cHZmLmRpcmVjdGlvbn17JyAnfVxuICAgICAgPFRvb2x0aXBcbiAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBpZD17YGNyaXRlcmlvbi1vcHRpb24tJHtjcml0ZXJpb24uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIlxuICAgICAgICA+XG4gICAgICAgICAge2NyaXRlcmlvbi50aXRsZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICAge2AgZnJvbSAke3dvcnN0fSB0byAke2Jlc3R9YH1cbiAgICA8L2xhYmVsPlxuICApO1xufVxuIiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Z2V0VW5pdExhYmVsfSBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uU2l0dWF0aW9uKHtcbiAgY3JpdGVyaW9uLFxuICBkaXNwbGF5VmFsdWVcbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xuICBkaXNwbGF5VmFsdWU6IG51bWJlcjtcbn0pIHtcbiAgY29uc3Qge3Nob3dQZXJjZW50YWdlc30gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8bGkgaWQ9e2BzaXR1YXRpb24tJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgdGl0bGU9e2NyaXRlcmlvbi5kZXNjcmlwdGlvbiA/IGNyaXRlcmlvbi5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGlkPXtgc2l0dWF0aW9uLXRpdGxlLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjcml0ZXJpb24udGl0bGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDogPHNwYW4gaWQ9e2BzaXR1YXRpb24tdmFsdWUtJHtjcml0ZXJpb24uaWR9YH0+e2Rpc3BsYXlWYWx1ZX08L3NwYW4+eycgJ31cbiAgICAgICAge2dldFVuaXRMYWJlbChcbiAgICAgICAgICBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQsXG4gICAgICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgICAgICl9XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmFua2luZ0Fuc3dlciBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nQW5zd2VyJztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCB7YWRkUmFua2luZ30gZnJvbSAnc3JjL1JhbmtpbmdVdGlsL1JhbmtpbmdVdGlsJztcbmltcG9ydCB7XG4gIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzLFxuICBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXNcbn0gZnJvbSAnc3JjL1N3aW5nVXRpbC9Td2luZ1V0aWwnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnLi4vSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElFeGFjdFN3aW5nUmF0aW8gZnJvbSAnLi4vSW50ZXJmYWNlL0lFeGFjdFN3aW5nUmF0aW8nO1xuaW1wb3J0IElSYXRpb0JvdW5kQ29uc3RyYWludCBmcm9tICcuLi9JbnRlcmZhY2UvSVJhdGlvQm91bmRDb25zdHJhaW50JztcbmltcG9ydCB7VEVsaWNpdGF0aW9uTWV0aG9kfSBmcm9tICcuLi9UeXBlcy9URWxpY2l0YXRpb25NZXRob2QnO1xuaW1wb3J0IElFbGljaXRhdGlvbkNvbnRleHQgZnJvbSAnLi9JRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGNvbnN0IEVsaWNpdGF0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUVsaWNpdGF0aW9uQ29udGV4dD4oXG4gIHt9IGFzIElFbGljaXRhdGlvbkNvbnRleHRcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudCh7XG4gIGVsaWNpdGF0aW9uTWV0aG9kLFxuICBjcml0ZXJpYSxcbiAgc2hvd1BlcmNlbnRhZ2VzLFxuICBwcmV2aW91c0NhbGxiYWNrLFxuICBwdmZzLFxuICBjYW5jZWxDYWxsYmFjayxcbiAgc2F2ZUNhbGxiYWNrLFxuICB0ZW1wbGF0ZSxcbiAgY2hpbGRyZW5cbn06IHtcbiAgZWxpY2l0YXRpb25NZXRob2Q6IFRFbGljaXRhdGlvbk1ldGhvZDtcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXTtcbiAgc2hvd1BlcmNlbnRhZ2VzOiBib29sZWFuO1xuICBwcmV2aW91c0NhbGxiYWNrPzogKCkgPT4gdm9pZDtcbiAgcHZmczogUmVjb3JkPHN0cmluZywgVFB2Zj47XG4gIGNhbmNlbENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBzYXZlQ2FsbGJhY2s6IChcbiAgICBwcmVmZXJlbmNlczogSUV4YWN0U3dpbmdSYXRpb1tdIHwgSVJhdGlvQm91bmRDb25zdHJhaW50W10gfCBJUmFua2luZ1tdXG4gICkgPT4gdm9pZDtcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBhbnk7XG59KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaXNOZXh0RGlzYWJsZWQsIHNldElzTmV4dERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICBdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtwcmVmZXJlbmNlcywgc2V0UHJlZmVyZW5jZXNdID0gdXNlU3RhdGU8XG4gICAgUmVjb3JkPHN0cmluZywgSUV4YWN0U3dpbmdSYXRpbz4gfCBSZWNvcmQ8c3RyaW5nLCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQ+XG4gID4oe30pO1xuICBjb25zdCBbcmFua2luZ3MsIHNldFJhbmtpbmdzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPj4oe30pO1xuXG4gIGZ1bmN0aW9uIHNldFJhbmtpbmcoY3JpdGVyaW9uSWQ6IHN0cmluZywgcmFuazogbnVtYmVyKSB7XG4gICAgY29uc3QgdXBkYXRlZFJhbmtpbmdzID0gYWRkUmFua2luZyhyYW5raW5ncywgY3JpdGVyaW9uSWQsIHJhbmspO1xuICAgIHNldFJhbmtpbmdzKHVwZGF0ZWRSYW5raW5ncyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uQW5kUHJlZmVyZW5jZXMoY3JpdGVyaW9uSWQ6IHN0cmluZykge1xuICAgIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ3ByZWNpc2UnKSB7XG4gICAgICBzZXRQcmVmZXJlbmNlcyhidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoY3JpdGVyaWEsIGNyaXRlcmlvbklkKSk7XG4gICAgfSBlbHNlIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ2ltcHJlY2lzZScpIHtcbiAgICAgIHNldFByZWZlcmVuY2VzKGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKGNyaXRlcmlhLCBjcml0ZXJpb25JZCkpO1xuICAgIH1cbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQoY3JpdGVyaW9uSWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJlZmVyZW5jZShjcml0ZXJpb25JZDogc3RyaW5nLCBhbnN3ZXI6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCB1cGRhdGVkUHJlZmVyZW5jZXMgPSBfLmNsb25lRGVlcChwcmVmZXJlbmNlcyk7XG4gICAgY29uc3QgcHJlZmVyZW5jZTogSUV4YWN0U3dpbmdSYXRpbyA9IHtcbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICAgIHR5cGU6ICdleGFjdCBzd2luZycsXG4gICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uSWRdLFxuICAgICAgcmF0aW86IDEwMCAvIGFuc3dlclxuICAgIH07XG4gICAgdXBkYXRlZFByZWZlcmVuY2VzW2NyaXRlcmlvbklkXSA9IHByZWZlcmVuY2U7XG4gICAgc2V0UHJlZmVyZW5jZXModXBkYXRlZFByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEJvdW5kUHJlZmVyZW5jZShcbiAgICBjcml0ZXJpb25JZDogc3RyaW5nLFxuICAgIGFuc3dlcjogW251bWJlciwgbnVtYmVyXVxuICApOiB2b2lkIHtcbiAgICBsZXQgdXBkYXRlZFByZWZlcmVuY2VzID0gXy5jbG9uZURlZXAocHJlZmVyZW5jZXMpO1xuICAgIGNvbnN0IHByZWZlcmVuY2U6IElSYXRpb0JvdW5kQ29uc3RyYWludCA9IHtcbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAnaW1wcmVjaXNlJyxcbiAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uSWRdLFxuICAgICAgYm91bmRzOiBbMTAwIC8gYW5zd2VyWzFdLCAxMDAgLyBhbnN3ZXJbMF1dXG4gICAgfTtcbiAgICB1cGRhdGVkUHJlZmVyZW5jZXNbY3JpdGVyaW9uSWRdID0gcHJlZmVyZW5jZTtcbiAgICBzZXRQcmVmZXJlbmNlcyh1cGRhdGVkUHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3JpdGVyaW9uKGlkOiBzdHJpbmcpOiBJQ3JpdGVyaW9uIHtcbiAgICByZXR1cm4gXy5maW5kKGNyaXRlcmlhLCBbJ2lkJywgaWRdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVsaWNpdGF0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY3VycmVudFN0ZXAsXG4gICAgICAgIGlzTmV4dERpc2FibGVkLFxuICAgICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICAgICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgICAgICBwdmZzLFxuICAgICAgICBjcml0ZXJpYSxcbiAgICAgICAgcmFua2luZ3MsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICBnZXRDcml0ZXJpb24sXG4gICAgICAgIHByZXZpb3VzQ2FsbGJhY2ssXG4gICAgICAgIHNldEN1cnJlbnRTdGVwLFxuICAgICAgICBzZXRJc05leHREaXNhYmxlZCxcbiAgICAgICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkOiBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uQW5kUHJlZmVyZW5jZXMsXG4gICAgICAgIHNldFByZWZlcmVuY2UsXG4gICAgICAgIHNldEJvdW5kUHJlZmVyZW5jZSxcbiAgICAgICAgc2V0UHJlZmVyZW5jZXMsXG4gICAgICAgIGNhbmNlbENhbGxiYWNrLFxuICAgICAgICBzYXZlQ2FsbGJhY2ssXG4gICAgICAgIHNldFJhbmtpbmdcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWxpY2l0YXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgc2lnbmlmaWNhbnREaWdpdHMgZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltcHJlY2lzZVN3aW5nU2xpZGVyKHtcbiAgY3JpdGVyaW9uXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbn0pIHtcbiAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZTxbbnVtYmVyLCBudW1iZXJdPihbMSwgMTAwXSk7XG4gIGNvbnN0IHtzZXRCb3VuZFByZWZlcmVuY2UsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZH0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Qm91bmRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgc2xpZGVyVmFsdWUpO1xuICB9LCBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2xpZGVyQ2hhbmdlZChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PixcbiAgICBuZXdWYWx1ZTogW251bWJlciwgbnVtYmVyXVxuICApIHtcbiAgICBzZXRTbGlkZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgc2V0Qm91bmRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgbmV3VmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9zdEltcG9ydGFudENyaXRlcmlvbklkID09PSBjcml0ZXJpb24uaWRcbiAgICAgID8gJzEwMCUnXG4gICAgICA6IGAke3NpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlWzBdKX0gLSAke3NpZ25pZmljYW50RGlnaXRzKFxuICAgICAgICAgIHNsaWRlclZhbHVlWzFdXG4gICAgICAgICl9JWA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVuZGVyVmFsdWUoKX1cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBtaW49ezF9XG4gICAgICAgIG1heD17MTAwfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlZH1cbiAgICAgICAgc3RlcD17MX1cbiAgICAgICAgZGlzYWJsZWQ9e21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA9PT0gY3JpdGVyaW9uLmlkfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHtJbmxpbmVIZWxwfSBmcm9tICdoZWxwLXBvcHVwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgTW9zdEltcG9ydGFudENob2ljZSBmcm9tICcuLi9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UnO1xuaW1wb3J0IFN3aW5nQnV0dG9ucyBmcm9tICcuLi9Td2luZ0J1dHRvbnMvU3dpbmdCdXR0b25zJztcbmltcG9ydCBTd2luZ1NldFdlaWdodHMgZnJvbSAnLi4vU3dpbmdTZXRXZWlnaHRzL1N3aW5nU2V0V2VpZ2h0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nKCkge1xuICBjb25zdCB7Y3VycmVudFN0ZXB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwic3dpbmctd2VpZ2h0aW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIDxJbmxpbmVIZWxwIGhlbHBJZD1cImltcHJlY2lzZS1zd2luZy13ZWlnaHRpbmdcIj5cbiAgICAgICAgICAgIEltcHJlY2lzZSBzd2luZyB3ZWlnaHRpbmdcbiAgICAgICAgICA8L0lubGluZUhlbHA+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSAxID8gPE1vc3RJbXBvcnRhbnRDaG9pY2UgLz4gOiA8U3dpbmdTZXRXZWlnaHRzIC8+fVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxTd2luZ0J1dHRvbnMgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2YgMlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ0J1dHRvbnMoKSB7XG4gIGNvbnN0IHtcbiAgICBwcmV2aW91c0NhbGxiYWNrLFxuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldEN1cnJlbnRTdGVwLFxuICAgIHByZWZlcmVuY2VzLFxuICAgIGNyaXRlcmlhLFxuICAgIGNhbmNlbENhbGxiYWNrLFxuICAgIHNhdmVDYWxsYmFja1xuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICBtYXRjaGluZ05leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25jbGljaygpOiB2b2lkIHtcbiAgICBzYXZlQ2FsbGJhY2soT2JqZWN0LnZhbHVlcyhwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hpbmdOZXh0KCk6IHZvaWQge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xhc3RTdGVwKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcCA9PT0gXy5zaXplKGNyaXRlcmlhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKGN1cnJlbnRTdGVwID09PSAxKSB7XG4gICAgICBwcmV2aW91c0NhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzTmV4dERpc2FibGVkKGZhbHNlKTtcbiAgICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCk6IHZvaWQge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgPlxuICAgICAgICBDYW5jZWxcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cInByZXZpb3VzLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzQ2xpY2t9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBkaXNhYmxlZD17IXByZXZpb3VzQ2FsbGJhY2sgJiYgY3VycmVudFN0ZXAgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpc0xhc3RTdGVwKCkgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQnV0dG9uY2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7SW5saW5lSGVscH0gZnJvbSAnaGVscC1wb3B1cCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgTWF0Y2hpbmdCdXR0b25zIGZyb20gJy4vTWF0Y2hpbmdCdXR0b25zL01hdGNoaW5nQnV0dG9ucyc7XG5pbXBvcnQgTWF0Y2hpbmdTZXRJbXBvcnRhbmNlIGZyb20gJy4vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2V0SW1wb3J0YW5jZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nRWxpY2l0YXRpb24oKSB7XG4gIGNvbnN0IHtjdXJyZW50U3RlcCwgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCB0b3RhbFN0ZXBzID0gXy5zaXplKGNyaXRlcmlhKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1hdGNoaW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIDxJbmxpbmVIZWxwIGhlbHBJZD1cIm1hdGNoaW5nXCI+TWF0Y2hpbmc8L0lubGluZUhlbHA+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSAxID8gKFxuICAgICAgICAgIDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE1hdGNoaW5nU2V0SW1wb3J0YW5jZSAvPlxuICAgICAgICApfVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxNYXRjaGluZ0J1dHRvbnMgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2Yge3RvdGFsU3RlcHN9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtcbiAgZ2V0Q3VycmVudENyaXRlcmlvbixcbiAgZ2V0TWF0Y2hpbmdTdGF0ZW1lbnRcbn0gZnJvbSAnc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2V9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IHtnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnLi4vLi4vVXRpbC91dGlsJztcbmltcG9ydCBNYXRjaGluZ1NsaWRlciBmcm9tICcuL01hdGNoaW5nU2xpZGVyL01hdGNoaW5nU2xpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdTZXRJbXBvcnRhbmNlKCkge1xuICBjb25zdCB7XG4gICAgcHZmcyxcbiAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIGdldENyaXRlcmlvbixcbiAgICBjcml0ZXJpYSxcbiAgICB0ZW1wbGF0ZVxuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IG1vc3RJbXBvcnRhbnRDcml0ZXJpb24gPSBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKTtcbiAgY29uc3QgbW9zdEltcG9ydGFudFVuaXRUeXBlID1cbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG5cbiAgY29uc3QgY3VycmVudENyaXRlcmlvbiA9IGdldEN1cnJlbnRDcml0ZXJpb24oXG4gICAgY3JpdGVyaWEsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIGN1cnJlbnRTdGVwXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRVbml0VHlwZSA9XG4gICAgY3VycmVudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuXG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvbiA9XG4gICAgc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZShtb3N0SW1wb3J0YW50VW5pdFR5cGUpO1xuXG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbiA9XG4gICAgc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZShjdXJyZW50VW5pdFR5cGUpO1xuXG4gIGNvbnN0IFtzdGF0ZW1lbnQsIHNldFN0YXRlbWVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFxuICAgIGdldE1hdGNoaW5nU3RhdGVtZW50KFxuICAgICAgbW9zdEltcG9ydGFudENyaXRlcmlvbixcbiAgICAgIGN1cnJlbnRDcml0ZXJpb24sXG4gICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb24sXG4gICAgICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb24sXG4gICAgICBwdmZzLFxuICAgICAgdGVtcGxhdGVcbiAgICApXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGF0ZW1lbnQoXG4gICAgICBnZXRNYXRjaGluZ1N0YXRlbWVudChcbiAgICAgICAgbW9zdEltcG9ydGFudENyaXRlcmlvbixcbiAgICAgICAgY3VycmVudENyaXRlcmlvbixcbiAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uLFxuICAgICAgICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb24sXG4gICAgICAgIHB2ZnMsXG4gICAgICAgIHRlbXBsYXRlXG4gICAgICApXG4gICAgKTtcbiAgfSwgW3Nob3dQZXJjZW50YWdlcywgdGVtcGxhdGUsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24sIGN1cnJlbnRDcml0ZXJpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57YFRyYWRlLW9mZiBiZXR3ZWVuICR7bW9zdEltcG9ydGFudENyaXRlcmlvbi50aXRsZX0gYW5kICR7Y3VycmVudENyaXRlcmlvbi50aXRsZX1gfTwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkXG4gICAgICAgIGl0ZW1cbiAgICAgICAgeHM9ezEyfVxuICAgICAgICBpZD1cIm1hdGNoaW5nLXN0YXRlbWVudFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdGF0ZW1lbnR9fVxuICAgICAgLz5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q3JpdGVyaW9uPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BbHRlcm5hdGl2ZSBBPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BbHRlcm5hdGl2ZSBCPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgaWQ9XCJtb3N0LWltcG9ydGFudC1jcml0ZXJpb25cIj5cbiAgICAgICAgICAgICAgICB7bW9zdEltcG9ydGFudENyaXRlcmlvbi50aXRsZX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBpZD1cIm1vc3QtaW1wb3J0YW50LXdvcnN0XCI+XG4gICAgICAgICAgICAgICAge2dldFdvcnN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdLFxuICAgICAgICAgICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBpZD1cIm1hdGNoaW5nLWNlbGxcIj5cbiAgICAgICAgICAgICAgICA8TWF0Y2hpbmdTbGlkZXIgY3VycmVudENyaXRlcmlvbklkPXtjdXJyZW50Q3JpdGVyaW9uLmlkfSAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgaWQ9XCJ0cmFkZS1vZmYtY3JpdGVyaW9uXCI+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRDcml0ZXJpb24udGl0bGV9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgaWQ9XCJ0cmFkZS1vZmYtYmVzdFwiPlxuICAgICAgICAgICAgICAgIHtnZXRCZXN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgaWQ9XCJ0cmFkZS1vZmYtd29yc3RcIj5cbiAgICAgICAgICAgICAgICB7Z2V0V29yc3QoXG4gICAgICAgICAgICAgICAgICBwdmZzW2N1cnJlbnRDcml0ZXJpb24uaWRdLFxuICAgICAgICAgICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge1xuICBjYWxjdWxhdGVJbXBvcnRhbmNlLFxuICBkZXRlcm1pbmVTdGVwU2l6ZVxufSBmcm9tICdzcmMvTWF0Y2hpbmdVdGlsL01hdGNoaW5nVXRpbCc7XG5pbXBvcnQgc2lnbmlmaWNhbnREaWdpdHMsIHtcbiAgY2FuQmVQZXJjZW50YWdlLFxuICBnZXRCZXN0LFxuICBnZXRXb3JzdFxufSBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdTbGlkZXIoe1xuICBjdXJyZW50Q3JpdGVyaW9uSWRcbn06IHtcbiAgY3VycmVudENyaXRlcmlvbklkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHtcbiAgICBjdXJyZW50U3RlcCxcbiAgICBzZXRJc05leHREaXNhYmxlZCxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0UHJlZmVyZW5jZSxcbiAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgcHZmcyxcbiAgICBnZXRDcml0ZXJpb25cbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uID0gZ2V0Q3JpdGVyaW9uKG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCk7XG4gIGNvbnN0IHB2ZiA9IHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXTtcblxuICBjb25zdCB1bml0VHlwZSA9IG1vc3RJbXBvcnRhbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuXG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyPihcbiAgICBnZXRCZXN0KHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSwgdXNlUGVyY2VudGFnZSlcbiAgKTtcbiAgY29uc3QgW3N0ZXBTaXplXSA9IHVzZVN0YXRlPG51bWJlcj4oZGV0ZXJtaW5lU3RlcFNpemUocHZmLnJhbmdlKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzbGlkZXJWYWx1ZSA9IGdldEJlc3QocHZmLCBmYWxzZSk7XG4gICAgc2V0U2xpZGVyVmFsdWUoc2xpZGVyVmFsdWUpO1xuICAgIHNldFByZWZlcmVuY2UoY3VycmVudENyaXRlcmlvbklkLCBjYWxjdWxhdGVJbXBvcnRhbmNlKHNsaWRlclZhbHVlLCBwdmYpKTtcbiAgfSwgW2N1cnJlbnRTdGVwXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2xpZGVyQ2hhbmdlZChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PixcbiAgICBuZXdWYWx1ZTogbnVtYmVyXG4gICkge1xuICAgIHNldFNsaWRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRJc05leHREaXNhYmxlZChcbiAgICAgIHNpZ25pZmljYW50RGlnaXRzKG5ld1ZhbHVlKSA9PT1cbiAgICAgICAgZ2V0V29yc3QocHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmlkXSwgZmFsc2UpXG4gICAgKTtcbiAgICBzZXRQcmVmZXJlbmNlKGN1cnJlbnRDcml0ZXJpb25JZCwgY2FsY3VsYXRlSW1wb3J0YW5jZShuZXdWYWx1ZSwgcHZmKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHVzZVBlcmNlbnRhZ2VcbiAgICAgID8gc2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWUgKiAxMDApXG4gICAgICA6IHNpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkaXNwbGF5VmFsdWUoKX1cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgaWQ9XCJtYXRjaGluZy1zbGlkZXJcIlxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17cHZmLnJhbmdlWzBdfVxuICAgICAgICBtYXg9e3B2Zi5yYW5nZVsxXX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZWR9XG4gICAgICAgIHN0ZXA9e3N0ZXBTaXplfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtJTGluZWFyUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL0lMaW5lYXJQdmYnO1xuaW1wb3J0IHtJUGllY2VXaXNlTGluZWFyUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL0lQaWVjZVdpc2VMaW5lYXJQdmYnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuaW1wb3J0IHtUUHZmRGlyZWN0aW9ufSBmcm9tICdzcmMvVHlwZXMvUHZmVHlwZXMnO1xuaW1wb3J0IHtnZXRCZXN0LCBnZXRVbml0TGFiZWwsIGdldFdvcnN0fSBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFUQ0hJTkdfVEVNUExBVEUgPVxuICAnSG93IG11Y2ggYmV0dGVyIHNob3VsZCAlY3JpdGVyaW9uMSUgbWluaW1hbGx5IGJlY29tZSB0byBqdXN0aWZ5IHRoZSB3b3JzZW5pbmcgb2YgJWNyaXRlcmlvbjIlPyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXRjaGluZ1N0YXRlbWVudChcbiAgbW9zdEltcG9ydGFudENyaXRlcmlvbjogSUNyaXRlcmlvbixcbiAgY3VycmVudENyaXRlcmlvbjogSUNyaXRlcmlvbixcbiAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uOiBib29sZWFuLFxuICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb246IGJvb2xlYW4sXG4gIHB2ZnM6IFJlY29yZDxzdHJpbmcsIFRQdmY+LFxuICB0ZW1wbGF0ZT86IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgY29uc3QgbWF0Y2hpbmdUZW1wbGF0ZSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiBERUZBVUxUX01BVENISU5HX1RFTVBMQVRFO1xuICByZXR1cm4gbWF0Y2hpbmdUZW1wbGF0ZVxuICAgIC5yZXBsYWNlKC8lY3JpdGVyaW9uMSUvZ2ksIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGUpXG4gICAgLnJlcGxhY2UoXG4gICAgICAvJXVuaXQxJS9naSxcbiAgICAgIGdldFVuaXRMYWJlbChcbiAgICAgICAgbW9zdEltcG9ydGFudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudCxcbiAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uXG4gICAgICApXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgLyV3b3JzdDElL2dpLFxuICAgICAgU3RyaW5nKFxuICAgICAgICBnZXRXb3JzdChcbiAgICAgICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb24uaWRdLFxuICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvblxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgLyViZXN0MSUvZ2ksXG4gICAgICBTdHJpbmcoXG4gICAgICAgIGdldEJlc3QoXG4gICAgICAgICAgcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb25cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICAucmVwbGFjZSgvJWNyaXRlcmlvbjIlL2dpLCBjdXJyZW50Q3JpdGVyaW9uLnRpdGxlKVxuICAgIC5yZXBsYWNlKFxuICAgICAgLyV1bml0MiUvZ2ksXG4gICAgICBnZXRVbml0TGFiZWwoXG4gICAgICAgIGN1cnJlbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQsXG4gICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgKVxuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC8ld29yc3QyJS9naSxcbiAgICAgIFN0cmluZyhcbiAgICAgICAgZ2V0V29yc3QocHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uKVxuICAgICAgKVxuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC8lYmVzdDIlL2dpLFxuICAgICAgU3RyaW5nKFxuICAgICAgICBnZXRCZXN0KHB2ZnNbY3VycmVudENyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbilcbiAgICAgIClcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lU3RlcFNpemUoW2xvd2VyQm91bmQsIHVwcGVyQm91bmRdOiBbXG4gIG51bWJlcixcbiAgbnVtYmVyXG5dKTogbnVtYmVyIHtcbiAgY29uc3QgaW50ZXJ2YWwgPSB1cHBlckJvdW5kIC0gbG93ZXJCb3VuZDtcbiAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKGludGVydmFsKSk7XG4gIHJldHVybiBNYXRoLnBvdygxMCwgbWFnbml0dWRlIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbXBvcnRhbmNlKHNsaWRlclZhbHVlOiBudW1iZXIsIHB2ZjogVFB2Zik6IG51bWJlciB7XG4gIGlmIChpc1BpZWNlV2lzZUxpbmVhclB2ZihwdmYpKSB7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVBpZWNld2lzZUltcG9ydGFuY2Uoc2xpZGVyVmFsdWUsIHB2Zik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZUxpbmVhckltcG9ydGFuY2Uoc2xpZGVyVmFsdWUsIHB2Zik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQaWVjZVdpc2VMaW5lYXJQdmYocHZmOiBUUHZmKTogcHZmIGlzIElQaWVjZVdpc2VMaW5lYXJQdmYge1xuICByZXR1cm4gJ2N1dG9mZnMnIGluIHB2Zjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTGluZWFySW1wb3J0YW5jZShcbiAgc2xpZGVyVmFsdWU6IG51bWJlcixcbiAge3JhbmdlOiBbbG93ZXJCb3VuZCwgdXBwZXJCb3VuZF0sIGRpcmVjdGlvbn06IElMaW5lYXJQdmZcbik6IG51bWJlciB7XG4gIGNvbnN0IHJlYmFzZWQgPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2RlY3JlYXNpbmcnXG4gICAgICA/IHVwcGVyQm91bmQgLSBzbGlkZXJWYWx1ZVxuICAgICAgOiBzbGlkZXJWYWx1ZSAtIGxvd2VyQm91bmQ7XG4gIHJldHVybiAocmViYXNlZCAvIE1hdGguYWJzKGxvd2VyQm91bmQgLSB1cHBlckJvdW5kKSkgKiAxMDA7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBpZWNld2lzZUltcG9ydGFuY2UoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHB2ZjogSVBpZWNlV2lzZUxpbmVhclB2ZlxuKTogbnVtYmVyIHtcbiAgY29uc3Qge1xuICAgIGN1dG9mZnMsXG4gICAgcmFuZ2U6IFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXSxcbiAgICBkaXJlY3Rpb25cbiAgfSA9IHB2ZjtcbiAgY29uc3QgY3V0b2Zmc1dpdGhCb3VuZHMgPSBbbG93ZXJCb3VuZCwgLi4uY3V0b2ZmcywgdXBwZXJCb3VuZF07XG4gIGNvbnN0IHZhbHVlc1dpdGhCb3VuZHMgPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2luY3JlYXNpbmcnXG4gICAgICA/IFswLCAwLjI1LCAwLjUsIDAuNzUsIDFdXG4gICAgICA6IFsxLCAwLjc1LCAwLjUsIDAuMjUsIDBdO1xuICBjb25zdCBleGFjdEN1dG9mZklkeCA9IF8uZmluZEluZGV4KFxuICAgIGN1dG9mZnNXaXRoQm91bmRzLFxuICAgICh4OiBudW1iZXIpOiBib29sZWFuID0+IHggPT09IHZhbHVlXG4gICk7XG4gIGlmIChleGFjdEN1dG9mZklkeCAhPT0gLTEpIHtcbiAgICByZXR1cm4gdmFsdWVzV2l0aEJvdW5kc1tleGFjdEN1dG9mZklkeF0gKiAxMDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZhbHVlKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY3V0b2Zmc1dpdGhCb3VuZHMsXG4gICAgICAgIHZhbHVlc1dpdGhCb3VuZHMsXG4gICAgICAgIGRpcmVjdGlvblxuICAgICAgKSAqIDEwMFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIGN1dG9mZnNXaXRoQm91bmRzOiBudW1iZXJbXSxcbiAgdmFsdWVzV2l0aEJvdW5kczogbnVtYmVyW10sXG4gIGRpcmVjdGlvbjogVFB2ZkRpcmVjdGlvblxuKTogbnVtYmVyIHtcbiAgY29uc3QgbGFyZ2VyQ3V0b2ZmSWR4ID0gXy5maW5kSW5kZXgoXG4gICAgY3V0b2Zmc1dpdGhCb3VuZHMsXG4gICAgKHg6IG51bWJlcik6IGJvb2xlYW4gPT4geCA+IHZhbHVlXG4gICk7XG4gIGNvbnN0IFtsb3dlckN1dE9mZiwgdXBwZXJDdXRPZmZdID0gW1xuICAgIGN1dG9mZnNXaXRoQm91bmRzW2xhcmdlckN1dG9mZklkeCAtIDFdLFxuICAgIGN1dG9mZnNXaXRoQm91bmRzW2xhcmdlckN1dG9mZklkeF1cbiAgXTtcblxuICBjb25zdCByZWJhc2VkID0gdmFsdWUgLSBsb3dlckN1dE9mZjtcbiAgY29uc3QgcmF0aW9PZlF1YXJ0aWxlID0gcmViYXNlZCAvICh1cHBlckN1dE9mZiAtIGxvd2VyQ3V0T2ZmKTtcbiAgY29uc3QgcXVhcnRpbGVWYWx1ZSA9IHZhbHVlc1dpdGhCb3VuZHNbbGFyZ2VyQ3V0b2ZmSWR4IC0gMV07XG4gIGlmIChkaXJlY3Rpb24gPT09ICdpbmNyZWFzaW5nJykge1xuICAgIHJldHVybiBxdWFydGlsZVZhbHVlICsgMC4yNSAqIHJhdGlvT2ZRdWFydGlsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcXVhcnRpbGVWYWx1ZSAtIDAuMjUgKiByYXRpb09mUXVhcnRpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRDcml0ZXJpb24oXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nLFxuICBjdXJyZW50U3RlcDogbnVtYmVyXG4pOiBJQ3JpdGVyaW9uIHtcbiAgcmV0dXJuIF8ucmVqZWN0KGNyaXRlcmlhLCAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKSA9PiB7XG4gICAgcmV0dXJuIGNyaXRlcmlvbi5pZCA9PT0gbW9zdEltcG9ydGFudENyaXRlcmlvbklkO1xuICB9KVtjdXJyZW50U3RlcCAtIDJdO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uQ2hvaWNlIGZyb20gJy4uL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UnO1xuaW1wb3J0IENyaXRlcmlvblNpdHVhdGlvbiBmcm9tICcuLi9Dcml0ZXJpb25TaXR1YXRpb24vQ3JpdGVyaW9uU2l0dWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9zdEltcG9ydGFudENob2ljZSgpIHtcbiAgY29uc3Qge1xuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIHB2ZnMsXG4gICAgY3JpdGVyaWFcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24oZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gICAgICAgIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q3JpdGVyaW9uU2l0dWF0aW9uXG4gICAgICAgICAgICBrZXk9e2NyaXRlcmlvbi5pZH1cbiAgICAgICAgICAgIGNyaXRlcmlvbj17Y3JpdGVyaW9ufVxuICAgICAgICAgICAgZGlzcGxheVZhbHVlPXtnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvbkNob2ljZXMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uQ2hvaWNlIGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+R2l2ZW4gdGhlIGZvbGxvd2luZyBzaXR1YXRpb246PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7cmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpfVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGltcHJvdmVtZW50cyBpcyBtb3N0IGltcG9ydGFudD9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgIG5hbWU9XCJtb3N0LWltcG9ydGFudC1jcml0ZXJpb24tcmFkaW9cIlxuICAgICAgICAgIHZhbHVlPXttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDcml0ZXJpb25DaG9pY2VzKCl9XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBzaWduaWZpY2FudERpZ2l0cyBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlY2lzZVN3aW5nU2xpZGVyKHtcbiAgY3JpdGVyaW9uXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbn0pIHtcbiAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEwMCk7XG4gIGNvbnN0IHtzZXRQcmVmZXJlbmNlLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBzbGlkZXJWYWx1ZSk7XG4gIH0sIFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTbGlkZXJDaGFuZ2VkKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LFxuICAgIG5ld1ZhbHVlOiBudW1iZXJcbiAgKSB7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIHNldFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBuZXdWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWUpfVxuICAgICAgPFNsaWRlclxuICAgICAgICBpZD17YHN3aW5nLXNsaWRlci0ke2NyaXRlcmlvbi5pZH1gfVxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17MX1cbiAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICBkaXNhYmxlZD17bW9zdEltcG9ydGFudENyaXRlcmlvbklkID09PSBjcml0ZXJpb24uaWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge0lubGluZUhlbHB9IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgU3dpbmdCdXR0b25zIGZyb20gJy4uL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMnO1xuaW1wb3J0IFN3aW5nU2V0V2VpZ2h0cyBmcm9tICcuLi9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlY2lzZVN3aW5nV2VpZ2h0aW5nKCkge1xuICBjb25zdCB7Y3VycmVudFN0ZXB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwic3dpbmctd2VpZ2h0aW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIDxJbmxpbmVIZWxwIGhlbHBJZD1cInN3aW5nLXdlaWdodGluZ1wiPlxuICAgICAgICAgICAgUHJlY2lzZSBzd2luZyB3ZWlnaHRpbmdcbiAgICAgICAgICA8L0lubGluZUhlbHA+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSAxID8gPE1vc3RJbXBvcnRhbnRDaG9pY2UgLz4gOiA8U3dpbmdTZXRXZWlnaHRzIC8+fVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxTd2luZ0J1dHRvbnMgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2YgMlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IHtCb3gsIEdyaWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7SGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudCwgSUhlbHBJbmZvfSBmcm9tICdoZWxwLXBvcHVwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcgZnJvbSAnc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJRXhhY3RTd2luZ1JhdGlvIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUV4YWN0U3dpbmdSYXRpbyc7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhdGlvQm91bmRDb25zdHJhaW50IGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhdGlvQm91bmRDb25zdHJhaW50JztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCBNYXRjaGluZ0VsaWNpdGF0aW9uIGZyb20gJ3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nRWxpY2l0YXRpb24nO1xuaW1wb3J0IFByZWNpc2VTd2luZ1dlaWdodGluZyBmcm9tICdzcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nV2VpZ2h0aW5nJztcbmltcG9ydCBSYW5raW5nRWxpY2l0YXRpb24gZnJvbSAnc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nRWxpY2l0YXRpb24nO1xuaW1wb3J0IHtURWxpY2l0YXRpb25NZXRob2R9IGZyb20gJ3NyYy9UeXBlcy9URWxpY2l0YXRpb25NZXRob2QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudH0gZnJvbSAnLi4vRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWZlcmVuY2VFbGljaXRhdGlvbih7XG4gIGNyaXRlcmlhLFxuICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgbWFudWFsSG9zdCxcbiAgbWFudWFsTGV4aWNvbixcbiAgbWFudWFsUGF0aCxcbiAgcHJldmlvdXNDYWxsYmFjayxcbiAgcHZmcyxcbiAgc2hvd1BlcmNlbnRhZ2VzLFxuICBjYW5jZWxDYWxsYmFjayxcbiAgc2F2ZUNhbGxiYWNrLFxuICB0ZW1wbGF0ZVxufToge1xuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdO1xuICBlbGljaXRhdGlvbk1ldGhvZDogVEVsaWNpdGF0aW9uTWV0aG9kO1xuICBtYW51YWxIb3N0OiBzdHJpbmc7XG4gIG1hbnVhbExleGljb246IFJlY29yZDxzdHJpbmcsIElIZWxwSW5mbz47XG4gIG1hbnVhbFBhdGg6IHN0cmluZztcbiAgcHJldmlvdXNDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHB2ZnM6IFJlY29yZDxzdHJpbmcsIFRQdmY+O1xuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW47XG4gIGNhbmNlbENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBzYXZlQ2FsbGJhY2s6IChcbiAgICBwcmVmZXJlbmNlczogSUV4YWN0U3dpbmdSYXRpb1tdIHwgSVJhdGlvQm91bmRDb25zdHJhaW50W10gfCBJUmFua2luZ1tdXG4gICkgPT4gdm9pZDtcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG59KTogSlNYLkVsZW1lbnQge1xuICBmdW5jdGlvbiByZW5kZXJFbGljaXRhdGlvbihcbiAgICBlbGljaXRhdGlvbk1ldGhvZDogVEVsaWNpdGF0aW9uTWV0aG9kXG4gICk6IEpTWC5FbGVtZW50IHtcbiAgICBzd2l0Y2ggKGVsaWNpdGF0aW9uTWV0aG9kKSB7XG4gICAgICBjYXNlICdwcmVjaXNlJzpcbiAgICAgICAgcmV0dXJuIDxQcmVjaXNlU3dpbmdXZWlnaHRpbmcgLz47XG4gICAgICBjYXNlICdpbXByZWNpc2UnOlxuICAgICAgICByZXR1cm4gPEltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nIC8+O1xuICAgICAgY2FzZSAnbWF0Y2hpbmcnOlxuICAgICAgICByZXR1cm4gPE1hdGNoaW5nRWxpY2l0YXRpb24gLz47XG4gICAgICBjYXNlICdyYW5raW5nJzpcbiAgICAgICAgcmV0dXJuIDxSYW5raW5nRWxpY2l0YXRpb24gLz47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnRcbiAgICAgIHByZXZpb3VzQ2FsbGJhY2s9e3ByZXZpb3VzQ2FsbGJhY2t9XG4gICAgICBjcml0ZXJpYT17Y3JpdGVyaWF9XG4gICAgICBlbGljaXRhdGlvbk1ldGhvZD17ZWxpY2l0YXRpb25NZXRob2R9XG4gICAgICBzaG93UGVyY2VudGFnZXM9e3Nob3dQZXJjZW50YWdlc31cbiAgICAgIHB2ZnM9e3B2ZnN9XG4gICAgICBjYW5jZWxDYWxsYmFjaz17Y2FuY2VsQ2FsbGJhY2t9XG4gICAgICBzYXZlQ2FsbGJhY2s9e3NhdmVDYWxsYmFja31cbiAgICAgIHRlbXBsYXRlPXt0ZW1wbGF0ZX1cbiAgICA+XG4gICAgICA8SGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudFxuICAgICAgICBsZXhpY29uPXttYW51YWxMZXhpY29ufVxuICAgICAgICBob3N0PXttYW51YWxIb3N0fVxuICAgICAgICBwYXRoPXttYW51YWxQYXRofVxuICAgICAgPlxuICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGNvbXBvbmVudD17Qm94fSBtdD17Mn0+XG4gICAgICAgICAge3JlbmRlckVsaWNpdGF0aW9uKGVsaWNpdGF0aW9uTWV0aG9kKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9IZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50PlxuICAgIDwvRWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQge1xuICBhc3NpZ25NaXNzaW5nUmFua2luZ3MsXG4gIGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzLFxuICBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rLFxuICBVTlJBTktFRFxufSBmcm9tICdzcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQnV0dG9ucyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWRcbn06IHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nO1xuICBzZXRTZWxlY3RlZENyaXRlcmlvbklkOiAoY3JpdGVyaW9uSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge1xuICAgIHByZXZpb3VzQ2FsbGJhY2ssXG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0UmFua2luZyxcbiAgICBzZXRDdXJyZW50U3RlcCxcbiAgICByYW5raW5ncyxcbiAgICBjcml0ZXJpYSxcbiAgICBjYW5jZWxDYWxsYmFjayxcbiAgICBzYXZlQ2FsbGJhY2tcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKSB7XG4gICAgc2V0UmFua2luZyhzZWxlY3RlZENyaXRlcmlvbklkLCBjdXJyZW50U3RlcCk7XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZCgnJyk7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCBmaW5pc2hlZFJhbmtpbmdzOiBSZWNvcmQ8XG4gICAgICBzdHJpbmcsXG4gICAgICBJUmFua2luZ0Fuc3dlclxuICAgID4gPSBhc3NpZ25NaXNzaW5nUmFua2luZ3MoXG4gICAgICByYW5raW5ncyxcbiAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gICAgICBjdXJyZW50U3RlcCxcbiAgICAgIGNyaXRlcmlhXG4gICAgKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzKF8udG9BcnJheShmaW5pc2hlZFJhbmtpbmdzKSk7XG4gICAgc2F2ZUNhbGxiYWNrKHByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzQ2xpY2soKSB7XG4gICAgaWYgKGN1cnJlbnRTdGVwID09PSAxKSB7XG4gICAgICBwcmV2aW91c0NhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50U3RlcCAhPT0gMSkge1xuICAgICAgICByZW1vdmVSYW5rRnJvbUNyaXRlcmlvbigpO1xuICAgICAgfVxuICAgICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZCgnJyk7XG4gICAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVJhbmtGcm9tQ3JpdGVyaW9uKCkge1xuICAgIGNvbnN0IGxvb2t1cFJhbmsgPSBjdXJyZW50U3RlcCAtIDE7XG4gICAgY29uc3QgY3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKGNyaXRlcmlhLCByYW5raW5ncywgbG9va3VwUmFuayk7XG4gICAgc2V0UmFua2luZyhjcml0ZXJpb25JZCwgVU5SQU5LRUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IF8uc2l6ZShjcml0ZXJpYSkgLSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgPlxuICAgICAgICBDYW5jZWxcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cInByZXZpb3VzLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzQ2xpY2t9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBkaXNhYmxlZD17IXByZXZpb3VzQ2FsbGJhY2sgJiYgY3VycmVudFN0ZXAgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpc0xhc3RTdGVwKCkgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnQsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtVTlJBTktFRH0gZnJvbSAnc3JjL1JhbmtpbmdVdGlsL1JhbmtpbmdVdGlsJztcbmltcG9ydCBDcml0ZXJpb25DaG9pY2UgZnJvbSAnLi4vLi4vQ3JpdGVyaW9uQ2hvaWNlL0NyaXRlcmlvbkNob2ljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdDaG9pY2VzKHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZCxcbiAgaGFuZGxlU2VsZWN0aW9uXG59OiB7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQ6IHN0cmluZztcbiAgaGFuZGxlU2VsZWN0aW9uOiAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xufSkge1xuICBjb25zdCB7cmFua2luZ3MsIGNyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgZmlsdGVyZWRDcml0ZXJpYSA9IF8uZmlsdGVyKFxuICAgIGNyaXRlcmlhLFxuICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBib29sZWFuID0+XG4gICAgICAhcmFua2luZ3NbY3JpdGVyaW9uLmlkXSB8fCByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpbXByb3ZlbWVudHMgaXMgbW9zdCBpbXBvcnRhbnQ/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICBuYW1lPVwicmFua2luZy1jcml0ZXJpb24tcmFkaW9cIlxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb259XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5tYXAoZmlsdGVyZWRDcml0ZXJpYSwgKGNyaXRlcmlvbikgPT4gKFxuICAgICAgICAgICAgPENyaXRlcmlvbkNob2ljZSBrZXk9e2NyaXRlcmlvbi5pZH0gY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7SW5saW5lSGVscH0gZnJvbSAnaGVscC1wb3B1cCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IFJhbmtpbmdCdXR0b25zIGZyb20gJy4vUmFua2luZ0J1dHRvbnMvUmFua2luZ0J1dHRvbnMnO1xuaW1wb3J0IFJhbmtpbmdDaG9pY2VzIGZyb20gJy4vUmFua2luZ0Nob2ljZXMvUmFua2luZ0Nob2ljZXMnO1xuaW1wb3J0IFJhbmtpbmdTaXR1YXRpb24gZnJvbSAnLi9SYW5raW5nU2l0dWF0aW9uL1JhbmtpbmdTaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nRWxpY2l0YXRpb24oKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENyaXRlcmlvbklkLCBzZXRTZWxlY3RlZENyaXRlcmlvbklkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qge2N1cnJlbnRTdGVwLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBfLnNpemUoY3JpdGVyaWEpIC0gMTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24oZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJyYW5raW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIDxJbmxpbmVIZWxwIGhlbHBJZD1cInJhbmtpbmdcIj5SYW5raW5nPC9JbmxpbmVIZWxwPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYW5raW5nU2l0dWF0aW9uIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYW5raW5nQ2hvaWNlc1xuICAgICAgICAgIGhhbmRsZVNlbGVjdGlvbj17aGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQ9e3NlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPFJhbmtpbmdCdXR0b25zXG4gICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpb25JZD17c2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBzZXRTZWxlY3RlZENyaXRlcmlvbklkPXtzZXRTZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiB7dG90YWxTdGVwc31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge1VOUkFOS0VEfSBmcm9tICdzcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2UsIGdldEJlc3QsIGdldFdvcnN0fSBmcm9tICdzcmMvVXRpbC91dGlsJztcbmltcG9ydCBDcml0ZXJpb25TaXR1YXRpb24gZnJvbSAnLi4vLi4vQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdTaXR1YXRpb24oKSB7XG4gIGNvbnN0IHtyYW5raW5ncywgc2hvd1BlcmNlbnRhZ2VzLCBwdmZzLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlVG9EaXNwbGF5KGNyaXRlcmlvbjogSUNyaXRlcmlvbikge1xuICAgIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gICAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuICAgIHJldHVybiAhcmFua2luZ3NbY3JpdGVyaW9uLmlkXSB8fCByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICAgICA/IGdldFdvcnN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSlcbiAgICAgIDogZ2V0QmVzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiAoXG4gICAgICAgIDxDcml0ZXJpb25TaXR1YXRpb25cbiAgICAgICAgICBrZXk9e2NyaXRlcmlvbi5pZH1cbiAgICAgICAgICBjcml0ZXJpb249e2NyaXRlcmlvbn1cbiAgICAgICAgICBkaXNwbGF5VmFsdWU9e2dldFZhbHVlVG9EaXNwbGF5KGNyaXRlcmlvbil9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkdpdmVuIHRoZSBmb2xsb3dpbmcgc2l0dWF0aW9uOjwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge3JlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmFua2luZ0Fuc3dlciBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nQW5zd2VyJztcblxuZXhwb3J0IGNvbnN0IFVOUkFOS0VEID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDcml0ZXJpb25JZEZvclJhbmsoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIHJhbms6IG51bWJlclxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIF8uZmluZChcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgcmFua2luZ3NbY3JpdGVyaW9uLmlkXSAmJiByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IHJhbmtcbiAgKS5pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbk1pc3NpbmdSYW5raW5ncyhcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPixcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nLFxuICByYW5rOiBudW1iZXIsXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW11cbik6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPiB7XG4gIGNvbnN0IGludGVybWVkaWF0ZVJhbmtpbmdzID0gYWRkUmFua2luZyhyYW5raW5ncywgc2VsZWN0ZWRDcml0ZXJpb25JZCwgcmFuayk7XG4gIGNvbnN0IGxhc3RDcml0ZXJpb25JZCA9IGZpbmRDcml0ZXJpb25JZFdpdGhvdXRSYW5raW5nKFxuICAgIGNyaXRlcmlhLFxuICAgIGludGVybWVkaWF0ZVJhbmtpbmdzXG4gICk7XG4gIHJldHVybiBhZGRSYW5raW5nKGludGVybWVkaWF0ZVJhbmtpbmdzLCBsYXN0Q3JpdGVyaW9uSWQsIHJhbmsgKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJhbmtpbmcoXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIGNyaXRlcmlvbklkOiBzdHJpbmcsXG4gIHJhbms6IG51bWJlclxuKTogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+IHtcbiAgbGV0IHVwZGF0ZWRSYW5raW5ncyA9IF8uY2xvbmVEZWVwKHJhbmtpbmdzKTtcbiAgY29uc3QgbmV3UmFua2luZzogSVJhbmtpbmdBbnN3ZXIgPSB7XG4gICAgY3JpdGVyaW9uSWQ6IGNyaXRlcmlvbklkLFxuICAgIHJhbms6IHJhbmtcbiAgfTtcbiAgdXBkYXRlZFJhbmtpbmdzW2NyaXRlcmlvbklkXSA9IG5ld1Jhbmtpbmc7XG4gIHJldHVybiB1cGRhdGVkUmFua2luZ3M7XG59XG5cbmZ1bmN0aW9uIGZpbmRDcml0ZXJpb25JZFdpdGhvdXRSYW5raW5nKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+XG4pOiBzdHJpbmcge1xuICByZXR1cm4gXy5maW5kKFxuICAgIGNyaXRlcmlhLFxuICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBib29sZWFuID0+XG4gICAgICByYW5raW5nc1tjcml0ZXJpb24uaWRdID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0ucmFuayA9PT0gVU5SQU5LRURcbiAgKS5pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzKGFuc3dlcnM6IElSYW5raW5nQW5zd2VyW10pOiBJUmFua2luZ1tdIHtcbiAgY29uc3Qgc29ydGVkQW5zd2VyczogSVJhbmtpbmdBbnN3ZXJbXSA9IF8uc29ydEJ5KGFuc3dlcnMsICdyYW5rJyk7XG4gIHJldHVybiBfLnJlZHVjZShcbiAgICBzb3J0ZWRBbnN3ZXJzLFxuICAgIChhY2N1bTogSVJhbmtpbmdbXSwgYW5zd2VyOiBJUmFua2luZ0Fuc3dlciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpZHggPT09IGFuc3dlcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm4gYWNjdW07XG4gICAgICB9XG4gICAgICBjb25zdCByYW5raW5nOiBJUmFua2luZyA9IHtcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdyYW5raW5nJyxcbiAgICAgICAgdHlwZTogJ29yZGluYWwnLFxuICAgICAgICBjcml0ZXJpYTogW2Fuc3dlci5jcml0ZXJpb25JZCwgc29ydGVkQW5zd2Vyc1tpZHggKyAxXS5jcml0ZXJpb25JZF1cbiAgICAgIH07XG4gICAgICBhY2N1bS5wdXNoKHJhbmtpbmcpO1xuICAgICAgcmV0dXJuIGFjY3VtO1xuICAgIH0sXG4gICAgW11cbiAgKTtcbn1cbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2luZ0J1dHRvbnMoKSB7XG4gIGNvbnN0IHtcbiAgICBwcmV2aW91c0NhbGxiYWNrLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldEN1cnJlbnRTdGVwLFxuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIHByZWZlcmVuY2VzLFxuICAgIGNhbmNlbENhbGxiYWNrLFxuICAgIHNhdmVDYWxsYmFja1xuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpIHtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNDbGljaygpIHtcbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDEpIHtcbiAgICAgIHByZXZpb3VzQ2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25DbGljaygpIHtcbiAgICBzYXZlQ2FsbGJhY2soT2JqZWN0LnZhbHVlcyhwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IDI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgPlxuICAgICAgICBDYW5jZWxcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cInByZXZpb3VzLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzQ2xpY2t9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBkaXNhYmxlZD17IXByZXZpb3VzQ2FsbGJhY2sgJiYgY3VycmVudFN0ZXAgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpc0xhc3RTdGVwKCkgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IEltcHJlY2lzZVN3aW5nU2xpZGVyIGZyb20gJ3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nU2xpZGVyL0ltcHJlY2lzZVN3aW5nU2xpZGVyJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgUHJlY2lzZVN3aW5nU2xpZGVyIGZyb20gJ3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdTbGlkZXIvUHJlY2lzZVN3aW5nU2xpZGVyJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRCZXN0LCBnZXRVbml0TGFiZWwsIGdldFdvcnN0fSBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uT3ZlcnZpZXcoe1xuICBjcml0ZXJpb25cbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xufSkge1xuICBjb25zdCB7cHZmcywgc2hvd1BlcmNlbnRhZ2VzLCBlbGljaXRhdGlvbk1ldGhvZH0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyU3dpbmdTbGlkZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ3ByZWNpc2UnKSB7XG4gICAgICByZXR1cm4gPFByZWNpc2VTd2luZ1NsaWRlciBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz47XG4gICAgfSBlbHNlIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ2ltcHJlY2lzZScpIHtcbiAgICAgIHJldHVybiA8SW1wcmVjaXNlU3dpbmdTbGlkZXIgY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlUm93IGtleT17Y3JpdGVyaW9uLmlkfT5cbiAgICAgIDxUYWJsZUNlbGwgaWQ9e2Bjcml0ZXJpb24tdGl0bGUtJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgdGl0bGU9e2NyaXRlcmlvbi5kZXNjcmlwdGlvbiA/IGNyaXRlcmlvbi5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCI+e2NyaXRlcmlvbi50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbCBpZD17YHVuaXQtJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIHtnZXRVbml0TGFiZWwoXG4gICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgICApfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgaWQ9e2B3b3JzdC0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgICAge2dldFdvcnN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBpZD17YGJlc3QtJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIHtnZXRCZXN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cmVuZGVyU3dpbmdTbGlkZXIoKX08L1RhYmxlQ2VsbD5cbiAgICA8L1RhYmxlUm93PlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgQ3JpdGVyaW9uT3ZlcnZpZXcgZnJvbSAnLi9Dcml0ZXJpb25PdmVydmlldy9Dcml0ZXJpb25PdmVydmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VGFibGUoKSB7XG4gIGNvbnN0IHtjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uT3ZlcnZpZXdzKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvbk92ZXJ2aWV3IGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XG4gICAgICA8VGFibGVIZWFkPlxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbD5Dcml0ZXJpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPlVuaXQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+V29yc3Q8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QmVzdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JbXBvcnRhbmNlPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlSGVhZD5cbiAgICAgIDxUYWJsZUJvZHk+e3JlbmRlckNyaXRlcmlvbk92ZXJ2aWV3cygpfTwvVGFibGVCb2R5PlxuICAgIDwvVGFibGU+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge2dldFN3aW5nU3RhdGVtZW50fSBmcm9tICdzcmMvU3dpbmdVdGlsL1N3aW5nVXRpbCc7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZX0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgT3ZlcnZpZXdUYWJsZSBmcm9tICcuL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aW5nU2V0V2VpZ2h0cygpIHtcbiAgY29uc3Qge1xuICAgIHB2ZnMsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICBnZXRDcml0ZXJpb24sXG4gICAgdGVtcGxhdGVcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBjcml0ZXJpb24gPSBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9XG4gICAgc2hvd1BlcmNlbnRhZ2VzICYmXG4gICAgY2FuQmVQZXJjZW50YWdlKGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlKTtcblxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBnZXRTd2luZ1N0YXRlbWVudChjcml0ZXJpb24sIHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSwgdGVtcGxhdGUpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGF0ZW1lbnQoXG4gICAgICBnZXRTd2luZ1N0YXRlbWVudChjcml0ZXJpb24sIHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSwgdGVtcGxhdGUpXG4gICAgKTtcbiAgfSwgW3Nob3dQZXJjZW50YWdlcywgdGVtcGxhdGUsIGNyaXRlcmlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZFxuICAgICAgICBpdGVtXG4gICAgICAgIHhzPXsxMn1cbiAgICAgICAgaWQ9e2Ake2VsaWNpdGF0aW9uTWV0aG9kfS1zd2luZy1zdGF0ZW1lbnRgfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc3RhdGVtZW50fX1cbiAgICAgIC8+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxPdmVydmlld1RhYmxlIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSUV4YWN0U3dpbmdSYXRpbyBmcm9tICdzcmMvSW50ZXJmYWNlL0lFeGFjdFN3aW5nUmF0aW8nO1xuaW1wb3J0IElSYXRpb0JvdW5kQ29uc3RyYWludCBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge2dldEJlc3QsIGdldFVuaXRMYWJlbCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFID1cbiAgXCJZb3UndmUgaW5kaWNhdGVkIHRoYXQgaW1wcm92aW5nICVjcml0ZXJpb24xJSBmcm9tICV3b3JzdDElICV1bml0MSUgdG8gJWJlc3QxJSAldW5pdDElIGlzIHRoZSBtb3N0IGltcG9ydGFudCAoaS5lLiBpdCBoYXMgMTAwJSBpbXBvcnRhbmNlKS4gTm93IGluZGljYXRlIHRoZSByZWxhdGl2ZSBpbXBvcnRhbmNlIChpbiAlKSB0byB0aGlzIGltcHJvdmVtZW50IG9mIGVhY2ggb3RoZXIgY3JpdGVyaW9uJ3MgaW1wcm92ZW1lbnQgdXNpbmcgdGhlIHNsaWRlcnMgYmVsb3cuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nXG4pOiBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5maWx0ZXIoXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgICBjcml0ZXJpb24uaWQgIT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICAgIClcbiAgICAubWFwKChjcml0ZXJpb246IElDcml0ZXJpb24pOiBbc3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvXSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uLmlkXSxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdwcmVjaXNlJyxcbiAgICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgICAgcmF0aW86IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gW2NyaXRlcmlvbi5pZCwgcHJlZmVyZW5jZV07XG4gICAgfSlcbiAgICAuZnJvbVBhaXJzKClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZ1xuKTogUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5yZWplY3QoWydpZCcsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pXG4gICAgLmtleUJ5KCdpZCcpXG4gICAgLm1hcFZhbHVlcyhcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPT4ge1xuICAgICAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICAgICAgYm91bmRzOiBbMSwgMTAwXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZTtcbiAgICAgIH1cbiAgICApXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTd2luZ1N0YXRlbWVudChcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uLFxuICBwdmY6IFRQdmYsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW4sXG4gIHRlbXBsYXRlPzogc3RyaW5nXG4pOiBzdHJpbmcge1xuICBjb25zdCB1bml0ID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50O1xuICBjb25zdCBsYWJlbCA9IGdldFVuaXRMYWJlbCh1bml0LCB1c2VQZXJjZW50YWdlKTtcbiAgY29uc3Qgc3dpbmdUZW1wbGF0ZSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiBERUZBVUxUX1BSRUNJU0VfVEVNUExBVEU7XG4gIHJldHVybiBzd2luZ1RlbXBsYXRlXG4gICAgLnJlcGxhY2UoLyVjcml0ZXJpb24xJS9naSwgY3JpdGVyaW9uLnRpdGxlKVxuICAgIC5yZXBsYWNlKC8ldW5pdDElL2dpLCBsYWJlbClcbiAgICAucmVwbGFjZSgvJXdvcnN0MSUvZ2ksIFN0cmluZyhnZXRXb3JzdChwdmYsIHVzZVBlcmNlbnRhZ2UpKSlcbiAgICAucmVwbGFjZSgvJWJlc3QxJS9naSwgU3RyaW5nKGdldEJlc3QocHZmLCB1c2VQZXJjZW50YWdlKSkpO1xufVxuIiwiaW1wb3J0IElVbml0T2ZNZWFzdXJlbWVudCwge1xuICBVbml0T2ZNZWFzdXJlbWVudFR5cGVcbn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JVW5pdE9mTWVhc3VyZW1lbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlOiBVbml0T2ZNZWFzdXJlbWVudFR5cGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIHVuaXRUeXBlID09PSAncGVyY2VudGFnZScgfHwgdW5pdFR5cGUgPT09ICdkZWNpbWFsJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlc3QocHZmOiBUUHZmLCB1c2VQZXJjZW50YWdlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzaWduaWZpY2FudERpZ2l0cyhcbiAgICBpc0luY3JlYXNpbmcocHZmKSA/IHB2Zi5yYW5nZVsxXSA6IHB2Zi5yYW5nZVswXVxuICApO1xuICByZXR1cm4gZ2V0UGVyY2VudGlmaWVkVmFsdWUodmFsdWUsIHVzZVBlcmNlbnRhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29yc3QocHZmOiBUUHZmLCB1c2VQZXJjZW50YWdlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzaWduaWZpY2FudERpZ2l0cyhcbiAgICBpc0luY3JlYXNpbmcocHZmKSA/IHB2Zi5yYW5nZVswXSA6IHB2Zi5yYW5nZVsxXVxuICApO1xuICByZXR1cm4gZ2V0UGVyY2VudGlmaWVkVmFsdWUodmFsdWUsIHVzZVBlcmNlbnRhZ2UpO1xufVxuXG5mdW5jdGlvbiBpc0luY3JlYXNpbmcocHZmOiBUUHZmKTogYm9vbGVhbiB7XG4gIHJldHVybiBwdmYuZGlyZWN0aW9uID09PSAnaW5jcmVhc2luZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25pZmljYW50RGlnaXRzKHg6IG51bWJlciwgcHJlY2lzaW9uPzogbnVtYmVyKSB7XG4gIGlmIChwcmVjaXNpb24gIT09IDAgJiYgIXByZWNpc2lvbikge1xuICAgIHByZWNpc2lvbiA9IDM7XG4gIH1cbiAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsIHx8IGlzTmFOKHgpKSB7XG4gICAgdGhyb3cgJ2F0dGVtcHQgdG8gYXBwbHkgc2lnbmlmaWNhbnQgZGlnaXRzIHRvIG5vbi1udW1lcmljIHZhbHVlJztcbiAgfSBlbHNlIGlmICh4ID09PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSBpZiAoeCA+IDEgfHwgeCA8IC0xKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHgudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoeC50b1ByZWNpc2lvbihwcmVjaXNpb24pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudGlmaWVkVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW5cbik6IG51bWJlciB7XG4gIGlmICh1c2VQZXJjZW50YWdlKSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKSAqIDEwMCk7IC8vMiBzaWdkaXRzIHRvIGVuc3VyZSB0aGUgcHJlY2lzaW9uIHN0YXlzIHRoZSBzYW1lXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdExhYmVsKFxuICB1bml0OiBJVW5pdE9mTWVhc3VyZW1lbnQsXG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgaWYgKHNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdkZWNpbWFsJykge1xuICAgIHJldHVybiAnJSc7XG4gIH0gZWxzZSBpZiAoIXNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5pdC5sYWJlbDtcbiAgfVxufVxuIiwiaW1wb3J0IFByZWZlcmVuY2VFbGljaXRhdGlvbiBmcm9tICcuL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24nO1xuXG5leHBvcnQge1ByZWZlcmVuY2VFbGljaXRhdGlvbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQm94X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9CdXR0b25Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9HcmlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BhcGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BvcG92ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9TbGlkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVCb2R5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQ2VsbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVSb3dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVG9vbHRpcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9pY29uc19IZWxwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9