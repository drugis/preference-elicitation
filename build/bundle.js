(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@material-ui/core"), require("@material-ui/core/Box"), require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Popover"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["@material-ui/core", "@material-ui/core/Box", "@material-ui/core/Button", "@material-ui/core/ButtonGroup", "@material-ui/core/Grid", "@material-ui/core/Paper", "@material-ui/core/Popover", "@material-ui/core/Radio", "@material-ui/core/RadioGroup", "@material-ui/core/Slider", "@material-ui/core/Table", "@material-ui/core/TableBody", "@material-ui/core/TableCell", "@material-ui/core/TableHead", "@material-ui/core/TableRow", "@material-ui/core/Tooltip", "@material-ui/core/Typography", "react", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@material-ui/core"), require("@material-ui/core/Box"), require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Popover"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("react"), require("lodash")) : factory(root["@material-ui/core"], root["@material-ui/core/Box"], root["@material-ui/core/Button"], root["@material-ui/core/ButtonGroup"], root["@material-ui/core/Grid"], root["@material-ui/core/Paper"], root["@material-ui/core/Popover"], root["@material-ui/core/Radio"], root["@material-ui/core/RadioGroup"], root["@material-ui/core/Slider"], root["@material-ui/core/Table"], root["@material-ui/core/TableBody"], root["@material-ui/core/TableCell"], root["@material-ui/core/TableHead"], root["@material-ui/core/TableRow"], root["@material-ui/core/Tooltip"], root["@material-ui/core/Typography"], root["react"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__material_ui_core__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Box__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ButtonGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Popover__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Table__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableBody__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableCell__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableHead__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableRow__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tooltip__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/help-popup/build/bundle.js":
/*!*************************************************!*\
  !*** ./node_modules/help-popup/build/bundle.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

!function(e,t){if(true)module.exports=t(__webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box"),__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"),__webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover"),__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"),__webpack_require__(/*! react */ "react"));else { var n, r; }}(self,(function(e,t,r,n,o){return(()=>{"use strict";var i={299:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.HelpContextProviderComponent=t.HelpContext=void 0;const a=i(r(297));t.HelpContext=a.createContext({}),t.HelpContextProviderComponent=function({host:e,path:r,lexicon:n,children:o}){return a.default.createElement(t.HelpContext.Provider,{value:{getHelpInfo:function(e){return n[e]?n[e]:{title:"unknown",link:"unknown",text:"unknown"}},baseUrl:e+r}},o)}},244:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=a(r(658)),l=a(r(720)),c=a(r(280)),f=a(r(740)),p=i(r(297)),d=r(299);t.default=function({helpId:e,children:t}){const[r,n]=p.useState(),[o,i]=p.useState(),[a,s]=p.useState(),[m,x]=p.useState(null),{getHelpInfo:h,baseUrl:v}=p.useContext(d.HelpContext);return p.useEffect((()=>{const{title:t,text:r,link:o}=h(e);n(t),i(r),s(v+o)})),p.default.createElement(p.default.Fragment,null,p.default.createElement("span",{onClick:function(e){x(e.currentTarget)},style:{textDecoration:"underline",textDecorationStyle:"dashed",cursor:"help",alignItems:"center"}},t),p.default.createElement(c.default,{open:!!m,onClose:function(){x(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},anchorEl:m},p.default.createElement(l.default,{container:!0,component:u.default,p:2,maxWidth:"300px"},p.default.createElement(l.default,{item:!0,xs:12,style:{marginBottom:"10px"}},p.default.createElement(f.default,{variant:"h5"},r)),p.default.createElement(l.default,{item:!0,xs:12},o),p.default.createElement(l.default,{item:!0,xs:12},p.default.createElement("a",{href:a,target:"_blank"},"View in manual")))))}},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InlineHelp=t.HelpContextProviderComponent=void 0;const o=r(299);Object.defineProperty(t,"HelpContextProviderComponent",{enumerable:!0,get:function(){return o.HelpContextProviderComponent}});const i=n(r(244));t.InlineHelp=i.default},658:t=>{t.exports=e},720:e=>{e.exports=t},280:e=>{e.exports=r},740:e=>{e.exports=n},297:e=>{e.exports=o}},a={};return function e(t){if(a[t])return a[t].exports;var r=a[t]={exports:{}};return i[t].call(r.exports,r,r.exports,e),r.exports}(607)})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0lubGluZUhlbHAvSW5saW5lSGVscC50c3giLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiIiwid2VicGFjazovL2hlbHAtcG9wdXAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiYSIsImkiLCJzZWxmIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjU4X18iLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183MjBfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI4MF9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzQwX18iLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yOTdfXyIsIkhlbHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImhvc3QiLCJwYXRoIiwibGV4aWNvbiIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImdldEhlbHBJbmZvIiwiaWQiLCJ0aXRsZSIsImxpbmsiLCJ0ZXh0IiwiYmFzZVVybCIsImhlbHBJZCIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJzZXRUZXh0Iiwic2V0TGluayIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0Iiwib25DbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0RGVjb3JhdGlvblN0eWxlIiwiY3Vyc29yIiwiYWxpZ25JdGVtcyIsIm9wZW4iLCJvbkNsb3NlIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNmb3JtT3JpZ2luIiwiY29udGFpbmVyIiwiY29tcG9uZW50IiwicCIsIm1heFdpZHRoIiwiaXRlbSIsInhzIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImhyZWYiLCJ0YXJnZXQiLCJIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50IiwiSW5saW5lSGVscCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0EsRUFBTUMsR0FDaEQsR0FBc0IsaUJBQVpDLFNBQTBDLGlCQUFYQyxPQUN4Q0EsT0FBT0QsUUFBVUQsRUFBUUcsUUFBUSx5QkFBMEJBLFFBQVEsMEJBQTJCQSxRQUFRLDZCQUE4QkEsUUFBUSxnQ0FBaUNBLFFBQVEsZUFDakwsR0FBcUIsbUJBQVhDLFFBQXlCQSxPQUFPQyxJQUM5Q0QsT0FBTyxDQUFDLHdCQUF5Qix5QkFBMEIsNEJBQTZCLCtCQUFnQyxTQUFVSixPQUM5SCxDQUNKLElBQUlNLEVBQXVCLGlCQUFaTCxRQUF1QkQsRUFBUUcsUUFBUSx5QkFBMEJBLFFBQVEsMEJBQTJCQSxRQUFRLDZCQUE4QkEsUUFBUSxnQ0FBaUNBLFFBQVEsVUFBWUgsRUFBUUQsRUFBSyx5QkFBMEJBLEVBQUssMEJBQTJCQSxFQUFLLDZCQUE4QkEsRUFBSyxnQ0FBaUNBLEVBQVksT0FDbFgsSUFBSSxJQUFJUSxLQUFLRCxHQUF1QixpQkFBWkwsUUFBdUJBLFFBQVVGLEdBQU1RLEdBQUtELEVBQUVDLElBUHhFLENBU0dDLE1BQU0sU0FBU0MsRUFBa0NDLEVBQWtDQyxFQUFrQ0MsRUFBa0NDLEdBQzFKLE0sZ3JCQ1ZBLGtCQUlhLEVBQUFDLFlBQWMsRUFBQUMsY0FBNEIsSUFFdkQseUNBQTZDLEtBQzNDQyxFQUFJLEtBQ0pDLEVBQUksUUFDSkMsRUFBTyxTQUNQQyxJQWVBLE9BQ0Usd0JBQUMsRUFBQUwsWUFBWU0sU0FBUSxDQUFDQyxNQUFPLENBQUNDLFlBVGhDLFNBQXFCQyxHQUNuQixPQUFJTCxFQUFRSyxHQUNITCxFQUFRSyxHQUVSLENBQUNDLE1BQU8sVUFBV0MsS0FBTSxVQUFXQyxLQUFNLFlBS1JDLFFBQVNYLEVBQU9DLElBQ3hERSxLLGtyQkMzQlAsa0JBQ0EsWUFDQSxZQUVBLFlBQ0EsWUFDQSxTQUVBLG9CQUFtQyxPQUNqQ1MsRUFBTSxTQUNOVCxJQUtBLE1BQU9LLEVBQU9LLEdBQVksRUFBQUMsWUFDbkJKLEVBQU1LLEdBQVcsRUFBQUQsWUFDakJMLEVBQU1PLEdBQVcsRUFBQUYsWUFDakJHLEVBQVVDLEdBQWUsRUFBQUosU0FBbUMsT0FFN0QsWUFBQ1IsRUFBVyxRQUFFSyxHQUFXLEVBQUFRLFdBQVcsRUFBQXJCLGFBd0IxQyxPQXRCQSxFQUFBc0IsV0FBVSxLQUNSLE1BQU0sTUFBQ1osRUFBSyxLQUFFRSxFQUFJLEtBQUVELEdBQVFILEVBQVlNLEdBQ3hDQyxFQUFTTCxHQUNUTyxFQUFRTCxHQUNSTSxFQUFRTCxFQUFVRixNQW1CbEIsZ0RBQ0UsZ0NBQU1ZLFFBakJWLFNBQXFCQyxHQUNuQkosRUFBWUksRUFBTUMsZ0JBZ0JZQyxNQVRILENBQzNCQyxlQUFnQixZQUNoQkMsb0JBQXFCLFNBQ3JCQyxPQUFRLE9BQ1JDLFdBQVksV0FNUHpCLEdBRUgsd0JBQUMsVUFBTyxDQUNOMEIsT0FBUVosRUFDUmEsUUFsQk4sV0FDRVosRUFBWSxPQWtCUmEsYUFBYyxDQUFDQyxTQUFVLFNBQVVDLFdBQVksVUFDL0NDLGdCQUFpQixDQUNmRixTQUFVLE1BQ1ZDLFdBQVksVUFFZGhCLFNBQVVBLEdBRVYsd0JBQUMsVUFBSSxDQUFDa0IsV0FBUyxFQUFDQyxVQUFXLFVBQUtDLEVBQUcsRUFBR0MsU0FBUyxTQUM3Qyx3QkFBQyxVQUFJLENBQUNDLE1BQUksRUFBQ0MsR0FBSSxHQUFJaEIsTUFBTyxDQUFDaUIsYUFBYyxTQUN2Qyx3QkFBQyxVQUFVLENBQUNDLFFBQVEsTUFBTWxDLElBRTVCLHdCQUFDLFVBQUksQ0FBQytCLE1BQUksRUFBQ0MsR0FBSSxJQUNaOUIsR0FFSCx3QkFBQyxVQUFJLENBQUM2QixNQUFJLEVBQUNDLEdBQUksSUFDYiw2QkFBR0csS0FBTWxDLEVBQU1tQyxPQUFPLFVBQVEsd0IsNE1DbkUxQyxlQUlRLDRGQUpBLEVBQUFDLGdDQUNSLGtCQUdzQyxFQUFBQyxXQUgvQixXLFFDRFA1RCxFQUFPRCxRQUFVUSxHLFFDQWpCUCxFQUFPRCxRQUFVUyxHLFFDQWpCUixFQUFPRCxRQUFVVSxHLFFDQWpCVCxFQUFPRCxRQUFVVyxHLFFDQWpCVixFQUFPRCxRQUFVWSxJQ0Nia0QsRUFBMkIsRyxPQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsR0FBR0YsRUFBeUJFLEdBQzNCLE9BQU9GLEVBQXlCRSxHQUFVaEUsUUFHM0MsSUFBSUMsRUFBUzZELEVBQXlCRSxHQUFZLENBR2pEaEUsUUFBUyxJQU9WLE9BSEFpRSxFQUFvQkQsR0FBVUUsS0FBS2pFLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVMrRCxHQUdwRTlELEVBQU9ELFFDakJXK0QsQ0FBb0IsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiwgXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwicmVhY3RcIikpIDogZmFjdG9yeShyb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCJdLCByb290W1wicmVhY3RcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjU4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzcyMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yODBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzQwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI5N19fKSB7XG5yZXR1cm4gIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElIZWxwQ29udGV4dCBmcm9tICcuLi9JbnRlcmZhY2VzL0lIZWxwQ29udGV4dCc7XG5pbXBvcnQgSUhlbHBJbmZvIGZyb20gJy4uL0ludGVyZmFjZXMvSUhlbHBJbmZvJztcblxuZXhwb3J0IGNvbnN0IEhlbHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJSGVscENvbnRleHQ+KHt9IGFzIElIZWxwQ29udGV4dCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50KHtcbiAgaG9zdCxcbiAgcGF0aCxcbiAgbGV4aWNvbixcbiAgY2hpbGRyZW5cbn06IHtcbiAgaG9zdDogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG4gIGxleGljb246IFJlY29yZDxzdHJpbmcsIElIZWxwSW5mbz47XG4gIGNoaWxkcmVuOiBhbnk7XG59KSB7XG4gIGZ1bmN0aW9uIGdldEhlbHBJbmZvKGlkOiBzdHJpbmcpOiBJSGVscEluZm8ge1xuICAgIGlmIChsZXhpY29uW2lkXSkge1xuICAgICAgcmV0dXJuIGxleGljb25baWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge3RpdGxlOiAndW5rbm93bicsIGxpbms6ICd1bmtub3duJywgdGV4dDogJ3Vua25vd24nfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWxwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2dldEhlbHBJbmZvLCBiYXNlVXJsOiBob3N0ICsgcGF0aH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVscENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xuaW1wb3J0IHtDU1NQcm9wZXJ0aWVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBSZWFjdCwge01vdXNlRXZlbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SGVscENvbnRleHR9IGZyb20gJy4uL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5saW5lSGVscCh7XG4gIGhlbHBJZCxcbiAgY2hpbGRyZW5cbn06IHtcbiAgaGVscElkOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBhbnk7XG59KSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZTxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHtnZXRIZWxwSW5mbywgYmFzZVVybH0gPSB1c2VDb250ZXh0KEhlbHBDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgbGlua30gPSBnZXRIZWxwSW5mbyhoZWxwSWQpO1xuICAgIHNldFRpdGxlKHRpdGxlKTtcbiAgICBzZXRUZXh0KHRleHQpO1xuICAgIHNldExpbmsoYmFzZVVybCArIGxpbmspO1xuICB9KTtcblxuICBmdW5jdGlvbiBvcGVuUG9wb3ZlcihldmVudDogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wb3ZlcigpIHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfVxuXG4gIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiAnZGFzaGVkJyxcbiAgICBjdXJzb3I6ICdoZWxwJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e29wZW5Qb3BvdmVyfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3NwYW4+XG4gICAgICA8UG9wb3ZlclxuICAgICAgICBvcGVuPXshIWFuY2hvckVsfVxuICAgICAgICBvbkNsb3NlPXtjbG9zZVBvcG92ZXJ9XG4gICAgICAgIGFuY2hvck9yaWdpbj17e3ZlcnRpY2FsOiAnY2VudGVyJywgaG9yaXpvbnRhbDogJ2NlbnRlcid9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcidcbiAgICAgICAgfX1cbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PXtCb3h9IHA9ezJ9IG1heFdpZHRoPVwiMzAwcHhcIj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxMHB4J319PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBWaWV3IGluIG1hbnVhbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHtIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50fSBmcm9tICcuL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0JztcbmltcG9ydCBJbmxpbmVIZWxwIGZyb20gJy4vSW5saW5lSGVscC9JbmxpbmVIZWxwJztcbmltcG9ydCBJSGVscEluZm8gZnJvbSAnLi9JbnRlcmZhY2VzL0lIZWxwSW5mbyc7XG5cbmV4cG9ydCB7SGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudCwgSW5saW5lSGVscCwgSUhlbHBJbmZvfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjU4X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183MjBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI4MF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzQwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yOTdfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

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
function ElicitationContextProviderComponent({ elicitationMethod, criteria, showPercentages, pvfs, cancelCallback, saveCallback, children }) {
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
            getCriterion,
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
    const { isNextDisabled, setIsNextDisabled, currentStep, setCurrentStep, preferences, criteria, cancelCallback, saveCallback } = react_1.useContext(ElicitationContext_1.ElicitationContext);
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
        setIsNextDisabled(false);
        setCurrentStep(currentStep - 1);
    }
    function cancel() {
        cancelCallback();
    }
    return (react_1.default.createElement(ButtonGroup_1.default, null,
        react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "primary", variant: "contained", onClick: cancel }, "Cancel"),
        react_1.default.createElement(Button_1.default, { id: "previous-button", onClick: handlePreviousClick, color: "primary", variant: "contained", disabled: currentStep === 1 }, "Previous"),
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
    const { pvfs, showPercentages, mostImportantCriterionId, currentStep, getCriterion, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const mostImportantCriterion = getCriterion(mostImportantCriterionId);
    const mostImportantUnitType = mostImportantCriterion.dataSources[0].unitOfMeasurement.type;
    const currentCriterion = MatchingUtil_1.getCurrentCriterion(criteria, mostImportantCriterionId, currentStep);
    const currentUnitType = currentCriterion.dataSources[0].unitOfMeasurement.type;
    const statement = MatchingUtil_1.getMatchingStatement(mostImportantCriterion, currentCriterion);
    const usePercentagesForMostImportantCriterion = showPercentages && util_1.canBePercentage(mostImportantUnitType);
    const usePercentagesForCurrentCriterion = showPercentages && util_1.canBePercentage(currentUnitType);
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
                        react_1.default.createElement(TableCell_1.default, null, mostImportantCriterion.title),
                        react_1.default.createElement(TableCell_1.default, { align: "center" }, util_2.getWorst(pvfs[mostImportantCriterionId], usePercentagesForMostImportantCriterion)),
                        react_1.default.createElement(TableCell_1.default, { align: "center", id: "matching-cell" },
                            react_1.default.createElement(MatchingSlider_1.default, { currentCriterionId: currentCriterion.id }))),
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, currentCriterion.title),
                        react_1.default.createElement(TableCell_1.default, { align: "center" }, util_2.getBest(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion)),
                        react_1.default.createElement(TableCell_1.default, { align: "center" }, util_2.getWorst(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion))))))));
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
exports.DEFAULT_MATCHING_TEMPLATE = 'How much better should %criterion1% minimally become to justify the worsening of %criterion2%?';
function getMatchingStatement(mostImportantCriterion, currentCriterion) {
    return exports.DEFAULT_MATCHING_TEMPLATE.replace(/%criterion1%/gi, mostImportantCriterion.title).replace(/%criterion2%/gi, currentCriterion.title);
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
        react_1.default.createElement(Slider_1.default, { value: sliderValue, min: 1, max: 100, onChange: handleSliderChanged, step: 1, disabled: mostImportantCriterionId === criterion.id })));
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
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const ImpreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! src/ImpreciseSwingElicitation/ImpreciseSwingWeighting */ "./src/ImpreciseSwingElicitation/ImpreciseSwingWeighting.tsx"));
const MatchingElicitation_1 = __importDefault(__webpack_require__(/*! src/MatchingElicitation/MatchingElicitation */ "./src/MatchingElicitation/MatchingElicitation.tsx"));
const PreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! src/PreciseSwingElicitation/PreciseSwingWeighting */ "./src/PreciseSwingElicitation/PreciseSwingWeighting.tsx"));
const RankingElicitation_1 = __importDefault(__webpack_require__(/*! src/RankingElicitation/RankingElicitation */ "./src/RankingElicitation/RankingElicitation.tsx"));
const ElicitationContext_1 = __webpack_require__(/*! ../ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
function PreferenceElicitation({ elicitationMethod, criteria, pvfs, showPercentages, cancelCallback, saveCallback }) {
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
    return (react_1.default.createElement(ElicitationContext_1.ElicitationContextProviderComponent, { criteria: criteria, elicitationMethod: elicitationMethod, showPercentages: showPercentages, pvfs: pvfs, cancelCallback: cancelCallback, saveCallback: saveCallback },
        react_1.default.createElement(core_1.Grid, { container: true, justify: "center", component: core_1.Box, mt: 2 }, renderElicitation(elicitationMethod))));
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
    const { currentStep, setRanking, setCurrentStep, rankings, criteria, cancelCallback, saveCallback } = react_1.useContext(ElicitationContext_1.ElicitationContext);
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
        if (currentStep !== 1) {
            removeRankFromCriterion();
        }
        setSelectedCriterionId('');
        setCurrentStep(currentStep - 1);
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
        react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "primary", variant: "contained", onClick: cancel }, "Cancel"),
        react_1.default.createElement(Button_1.default, { id: "previous-button", onClick: handlePreviousClick, color: "primary", variant: "contained", disabled: currentStep === 1 }, "Previous"),
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
    const { currentStep, setCurrentStep, isNextDisabled, preferences, cancelCallback, saveCallback } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function handleNextButtonClick() {
        setCurrentStep(currentStep + 1);
    }
    function handlePreviousClick() {
        setCurrentStep(currentStep - 1);
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
        react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "primary", variant: "contained", onClick: cancel }, "Cancel"),
        react_1.default.createElement(Button_1.default, { id: "previous-button", onClick: handlePreviousClick, color: "primary", variant: "contained", disabled: currentStep === 1 }, "Previous"),
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
        react_1.default.createElement(TableCell_1.default, null,
            react_1.default.createElement(Tooltip_1.default, { disableHoverListener: !criterion.description, title: criterion.description ? criterion.description : '' },
                react_1.default.createElement("span", { className: "criterion-title" }, criterion.title))),
        react_1.default.createElement(TableCell_1.default, null, util_1.getUnitLabel(criterion.dataSources[0].unitOfMeasurement, showPercentages)),
        react_1.default.createElement(TableCell_1.default, { align: "center" }, util_1.getWorst(pvfs[criterion.id], usePercentage)),
        react_1.default.createElement(TableCell_1.default, { align: "center" }, util_1.getBest(pvfs[criterion.id], usePercentage)),
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
const OverviewTable_1 = __importDefault(__webpack_require__(/*! ./OverviewTable/OverviewTable */ "./src/SwingSetWeights/OverviewTable/OverviewTable.tsx"));
function SwingSetWeights() {
    const { pvfs, showPercentages, mostImportantCriterionId, elicitationMethod, getCriterion } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const [statement, setStatement] = react_1.useState(SwingUtil_1.getSwingStatement(getCriterion(mostImportantCriterionId), pvfs[mostImportantCriterionId], showPercentages));
    react_1.useEffect(() => {
        setStatement(SwingUtil_1.getSwingStatement(getCriterion(mostImportantCriterionId), pvfs[mostImportantCriterionId], showPercentages));
    }, [showPercentages]);
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
function getSwingStatement(criterion, pvf, showPercentages) {
    const unit = criterion.dataSources[0].unitOfMeasurement;
    const label = util_1.getUnitLabel(unit, showPercentages);
    const usePercentage = showPercentages && util_1.canBePercentage(unit.type);
    return exports.DEFAULT_PRECISE_TEMPLATE.replace(/%criterion1%/gi, criterion.title)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vbm9kZV9tb2R1bGVzL2hlbHAtcG9wdXAvYnVpbGQvYnVuZGxlLmpzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvQ3JpdGVyaW9uQ2hvaWNlL0NyaXRlcmlvbkNob2ljZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Dcml0ZXJpb25TaXR1YXRpb24vQ3JpdGVyaW9uU2l0dWF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1NsaWRlci9JbXByZWNpc2VTd2luZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdCdXR0b25zL01hdGNoaW5nQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ1NldEltcG9ydGFuY2UvTWF0Y2hpbmdTZXRJbXBvcnRhbmNlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2xpZGVyL01hdGNoaW5nU2xpZGVyLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nU2xpZGVyL1ByZWNpc2VTd2luZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdXZWlnaHRpbmcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlZmVyZW5jZUVsaWNpdGF0aW9uL1ByZWZlcmVuY2VFbGljaXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0J1dHRvbnMvUmFua2luZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdDaG9pY2VzL1JhbmtpbmdDaG9pY2VzLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdTaXR1YXRpb24vUmFua2luZ1NpdHVhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbC50cyIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL092ZXJ2aWV3VGFibGUvQ3JpdGVyaW9uT3ZlcnZpZXcvQ3JpdGVyaW9uT3ZlcnZpZXcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nVXRpbC9Td2luZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9VdGlsL3V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIixcInJvb3RcIjpcIl9cIn0iLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkEsZUFBZSxHQUFHLElBQWlELGtCQUFrQixtQkFBTyxDQUFDLG9EQUF1QixFQUFFLG1CQUFPLENBQUMsc0RBQXdCLEVBQUUsbUJBQU8sQ0FBQyw0REFBMkIsRUFBRSxtQkFBTyxDQUFDLGtFQUE4QixFQUFFLG1CQUFPLENBQUMsb0JBQU8sR0FBRyxLQUFLLGFBQWdqQixDQUFDLDJCQUEyQixZQUFZLGFBQWEsT0FBTyxvQkFBb0IsbUVBQW1FLDZDQUE2Qyw2QkFBNkIsYUFBYSxFQUFFLG1CQUFtQiw0QkFBNEIsZ0VBQWdFLG1DQUFtQyxzQkFBc0IsRUFBRSxlQUFlLFlBQVkseUNBQXlDLDRCQUE0QixTQUFTLDZGQUE2RixpQkFBaUIsc0NBQXNDLFNBQVMsc0RBQXNELGtCQUFrQixnQ0FBZ0MsMkNBQTJDLG1DQUFtQyxFQUFFLHVEQUF1RCxPQUFPLHdCQUF3QixrQkFBa0IsK0NBQStDLGNBQWMsS0FBSyxxQkFBcUIsbUVBQW1FLDZDQUE2Qyw2QkFBNkIsYUFBYSxFQUFFLG1CQUFtQiw0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OztBQ0FBLG9EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBtYXRlcmlhbC11aS9jb3JlXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIsIFwicmVhY3RcIiwgXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIikpIDogZmFjdG9yeShyb290W1wiQG1hdGVyaWFsLXVpL2NvcmVcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIl0sIHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcIl9cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0JveF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbkdyb3VwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfR3JpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BhcGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUG9wb3Zlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1JhZGlvX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9Hcm91cF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1NsaWRlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVCb2R5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVDZWxsX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVIZWFkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVSb3dfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9Ub29sdGlwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVHlwb2dyYXBoeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbG9kYXNoX18pIHtcbnJldHVybiAiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIikscmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIikscmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIikscmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIikscmVxdWlyZShcInJlYWN0XCIpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIsXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIsXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIsXCJyZWFjdFwiXSx0KTtlbHNle3ZhciByPVwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3QocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSxyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSxyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSxyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSxyZXF1aXJlKFwicmVhY3RcIikpOnQoZVtcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiXSxlW1wiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiXSxlW1wiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiXSxlW1wiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXSxlLnJlYWN0KTtmb3IodmFyIG4gaW4gcikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtuXT1yW25dfX0oc2VsZiwoZnVuY3Rpb24oZSx0LHIsbixvKXtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgaT17Mjk5OmZ1bmN0aW9uKGUsdCxyKXt2YXIgbj10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LHIsbil7dm9pZCAwPT09biYmKG49ciksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtyXX19KX06ZnVuY3Rpb24oZSx0LHIsbil7dm9pZCAwPT09biYmKG49ciksZVtuXT10W3JdfSksbz10aGlzJiZ0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdHx8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSl9OmZ1bmN0aW9uKGUsdCl7ZS5kZWZhdWx0PXR9KSxpPXRoaXMmJnRoaXMuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIHIgaW4gZSlcImRlZmF1bHRcIiE9PXImJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiZuKHQsZSxyKTtyZXR1cm4gbyh0LGUpLHR9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuSGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudD10LkhlbHBDb250ZXh0PXZvaWQgMDtjb25zdCBhPWkocigyOTcpKTt0LkhlbHBDb250ZXh0PWEuY3JlYXRlQ29udGV4dCh7fSksdC5IZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50PWZ1bmN0aW9uKHtob3N0OmUscGF0aDpyLGxleGljb246bixjaGlsZHJlbjpvfSl7cmV0dXJuIGEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHQuSGVscENvbnRleHQuUHJvdmlkZXIse3ZhbHVlOntnZXRIZWxwSW5mbzpmdW5jdGlvbihlKXtyZXR1cm4gbltlXT9uW2VdOnt0aXRsZTpcInVua25vd25cIixsaW5rOlwidW5rbm93blwiLHRleHQ6XCJ1bmtub3duXCJ9fSxiYXNlVXJsOmUrcn19LG8pfX0sMjQ0OmZ1bmN0aW9uKGUsdCxyKXt2YXIgbj10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LHIsbil7dm9pZCAwPT09biYmKG49ciksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtyXX19KX06ZnVuY3Rpb24oZSx0LHIsbil7dm9pZCAwPT09biYmKG49ciksZVtuXT10W3JdfSksbz10aGlzJiZ0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdHx8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSl9OmZ1bmN0aW9uKGUsdCl7ZS5kZWZhdWx0PXR9KSxpPXRoaXMmJnRoaXMuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIHIgaW4gZSlcImRlZmF1bHRcIiE9PXImJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiZuKHQsZSxyKTtyZXR1cm4gbyh0LGUpLHR9LGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3QgdT1hKHIoNjU4KSksbD1hKHIoNzIwKSksYz1hKHIoMjgwKSksZj1hKHIoNzQwKSkscD1pKHIoMjk3KSksZD1yKDI5OSk7dC5kZWZhdWx0PWZ1bmN0aW9uKHtoZWxwSWQ6ZSxjaGlsZHJlbjp0fSl7Y29uc3RbcixuXT1wLnVzZVN0YXRlKCksW28saV09cC51c2VTdGF0ZSgpLFthLHNdPXAudXNlU3RhdGUoKSxbbSx4XT1wLnVzZVN0YXRlKG51bGwpLHtnZXRIZWxwSW5mbzpoLGJhc2VVcmw6dn09cC51c2VDb250ZXh0KGQuSGVscENvbnRleHQpO3JldHVybiBwLnVzZUVmZmVjdCgoKCk9Pntjb25zdHt0aXRsZTp0LHRleHQ6cixsaW5rOm99PWgoZSk7bih0KSxpKHIpLHModitvKX0pKSxwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwLmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7b25DbGljazpmdW5jdGlvbihlKXt4KGUuY3VycmVudFRhcmdldCl9LHN0eWxlOnt0ZXh0RGVjb3JhdGlvbjpcInVuZGVybGluZVwiLHRleHREZWNvcmF0aW9uU3R5bGU6XCJkYXNoZWRcIixjdXJzb3I6XCJoZWxwXCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0sdCkscC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYy5kZWZhdWx0LHtvcGVuOiEhbSxvbkNsb3NlOmZ1bmN0aW9uKCl7eChudWxsKX0sYW5jaG9yT3JpZ2luOnt2ZXJ0aWNhbDpcImNlbnRlclwiLGhvcml6b250YWw6XCJjZW50ZXJcIn0sdHJhbnNmb3JtT3JpZ2luOnt2ZXJ0aWNhbDpcInRvcFwiLGhvcml6b250YWw6XCJjZW50ZXJcIn0sYW5jaG9yRWw6bX0scC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobC5kZWZhdWx0LHtjb250YWluZXI6ITAsY29tcG9uZW50OnUuZGVmYXVsdCxwOjIsbWF4V2lkdGg6XCIzMDBweFwifSxwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChsLmRlZmF1bHQse2l0ZW06ITAseHM6MTIsc3R5bGU6e21hcmdpbkJvdHRvbTpcIjEwcHhcIn19LHAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGYuZGVmYXVsdCx7dmFyaWFudDpcImg1XCJ9LHIpKSxwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChsLmRlZmF1bHQse2l0ZW06ITAseHM6MTJ9LG8pLHAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGwuZGVmYXVsdCx7aXRlbTohMCx4czoxMn0scC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6YSx0YXJnZXQ6XCJfYmxhbmtcIn0sXCJWaWV3IGluIG1hbnVhbFwiKSkpKSl9fSw2MDc6ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuSW5saW5lSGVscD10LkhlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnQ9dm9pZCAwO2NvbnN0IG89cigyOTkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiSGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBvLkhlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnR9fSk7Y29uc3QgaT1uKHIoMjQ0KSk7dC5JbmxpbmVIZWxwPWkuZGVmYXVsdH0sNjU4OnQ9Pnt0LmV4cG9ydHM9ZX0sNzIwOmU9PntlLmV4cG9ydHM9dH0sMjgwOmU9PntlLmV4cG9ydHM9cn0sNzQwOmU9PntlLmV4cG9ydHM9bn0sMjk3OmU9PntlLmV4cG9ydHM9b319LGE9e307cmV0dXJuIGZ1bmN0aW9uIGUodCl7aWYoYVt0XSlyZXR1cm4gYVt0XS5leHBvcnRzO3ZhciByPWFbdF09e2V4cG9ydHM6e319O3JldHVybiBpW3RdLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGUpLHIuZXhwb3J0c30oNjA3KX0pKCl9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlvWld4d0xYQnZjSFZ3TDNkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSW5kbFluQmhZMnM2THk5b1pXeHdMWEJ2Y0hWd0x5NHZjM0pqTDBobGJIQkRiMjUwWlhoMEwwaGxiSEJEYjI1MFpYaDBMblJ6ZUNJc0luZGxZbkJoWTJzNkx5OW9aV3h3TFhCdmNIVndMeTR2YzNKakwwbHViR2x1WlVobGJIQXZTVzVzYVc1bFNHVnNjQzUwYzNnaUxDSjNaV0p3WVdOck9pOHZhR1ZzY0Mxd2IzQjFjQzh1TDNOeVl5OXBibVJsZUM1MGN5SXNJbmRsWW5CaFkyczZMeTlvWld4d0xYQnZjSFZ3TDJWNGRHVnlibUZzSUZ3aVFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlFtOTRYQ0lpTENKM1pXSndZV05yT2k4dmFHVnNjQzF3YjNCMWNDOWxlSFJsY201aGJDQmNJa0J0WVhSbGNtbGhiQzExYVM5amIzSmxMMGR5YVdSY0lpSXNJbmRsWW5CaFkyczZMeTlvWld4d0xYQnZjSFZ3TDJWNGRHVnlibUZzSUZ3aVFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlVHOXdiM1psY2x3aUlpd2lkMlZpY0dGamF6b3ZMMmhsYkhBdGNHOXdkWEF2WlhoMFpYSnVZV3dnWENKQWJXRjBaWEpwWVd3dGRXa3ZZMjl5WlM5VWVYQnZaM0poY0doNVhDSWlMQ0ozWldKd1lXTnJPaTh2YUdWc2NDMXdiM0IxY0M5bGVIUmxjbTVoYkNCY0luSmxZV04wWENJaUxDSjNaV0p3WVdOck9pOHZhR1ZzY0Mxd2IzQjFjQzkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0lzSW5kbFluQmhZMnM2THk5b1pXeHdMWEJ2Y0hWd0wzZGxZbkJoWTJzdmMzUmhjblIxY0NKZExDSnVZVzFsY3lJNld5SnliMjkwSWl3aVptRmpkRzl5ZVNJc0ltVjRjRzl5ZEhNaUxDSnRiMlIxYkdVaUxDSnlaWEYxYVhKbElpd2laR1ZtYVc1bElpd2lZVzFrSWl3aVlTSXNJbWtpTENKelpXeG1JaXdpWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTmpVNFgxOGlMQ0pmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMTgzTWpCZlh5SXNJbDlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZYekk0TUY5Zklpd2lYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWZOelF3WDE4aUxDSmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgxOHlPVGRmWHlJc0lraGxiSEJEYjI1MFpYaDBJaXdpWTNKbFlYUmxRMjl1ZEdWNGRDSXNJbWh2YzNRaUxDSndZWFJvSWl3aWJHVjRhV052YmlJc0ltTm9hV3hrY21WdUlpd2lVSEp2ZG1sa1pYSWlMQ0oyWVd4MVpTSXNJbWRsZEVobGJIQkpibVp2SWl3aWFXUWlMQ0owYVhSc1pTSXNJbXhwYm1zaUxDSjBaWGgwSWl3aVltRnpaVlZ5YkNJc0ltaGxiSEJKWkNJc0luTmxkRlJwZEd4bElpd2lkWE5sVTNSaGRHVWlMQ0p6WlhSVVpYaDBJaXdpYzJWMFRHbHVheUlzSW1GdVkyaHZja1ZzSWl3aWMyVjBRVzVqYUc5eVJXd2lMQ0oxYzJWRGIyNTBaWGgwSWl3aWRYTmxSV1ptWldOMElpd2liMjVEYkdsamF5SXNJbVYyWlc1MElpd2lZM1Z5Y21WdWRGUmhjbWRsZENJc0luTjBlV3hsSWl3aWRHVjRkRVJsWTI5eVlYUnBiMjRpTENKMFpYaDBSR1ZqYjNKaGRHbHZibE4wZVd4bElpd2lZM1Z5YzI5eUlpd2lZV3hwWjI1SmRHVnRjeUlzSW05d1pXNGlMQ0p2YmtOc2IzTmxJaXdpWVc1amFHOXlUM0pwWjJsdUlpd2lkbVZ5ZEdsallXd2lMQ0pvYjNKcGVtOXVkR0ZzSWl3aWRISmhibk5tYjNKdFQzSnBaMmx1SWl3aVkyOXVkR0ZwYm1WeUlpd2lZMjl0Y0c5dVpXNTBJaXdpY0NJc0ltMWhlRmRwWkhSb0lpd2lhWFJsYlNJc0luaHpJaXdpYldGeVoybHVRbTkwZEc5dElpd2lkbUZ5YVdGdWRDSXNJbWh5WldZaUxDSjBZWEpuWlhRaUxDSklaV3h3UTI5dWRHVjRkRkJ5YjNacFpHVnlRMjl0Y0c5dVpXNTBJaXdpU1c1c2FXNWxTR1ZzY0NJc0lsOWZkMlZpY0dGamExOXRiMlIxYkdWZlkyRmphR1ZmWHlJc0lsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOGlMQ0p0YjJSMWJHVkpaQ0lzSWw5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4aUxDSmpZV3hzSWwwc0ltMWhjSEJwYm1keklqb2lRMEZCUVN4VFFVRXlRMEVzUlVGQlRVTXNSMEZEYUVRc1IwRkJjMElzYVVKQlFWcERMRk5CUVRCRExHbENRVUZZUXl4UFFVTjRRMEVzVDBGQlQwUXNVVUZCVlVRc1JVRkJVVWNzVVVGQlVTeDVRa0ZCTUVKQkxGRkJRVkVzTUVKQlFUSkNRU3hSUVVGUkxEWkNRVUU0UWtFc1VVRkJVU3huUTBGQmFVTkJMRkZCUVZFc1pVRkRha3dzUjBGQmNVSXNiVUpCUVZoRExGRkJRWGxDUVN4UFFVRlBReXhKUVVNNVEwUXNUMEZCVHl4RFFVRkRMSGRDUVVGNVFpeDVRa0ZCTUVJc05FSkJRVFpDTEN0Q1FVRm5ReXhUUVVGVlNpeFBRVU01U0N4RFFVTktMRWxCUVVsTkxFVkJRWFZDTEdsQ1FVRmFUQ3hSUVVGMVFrUXNSVUZCVVVjc1VVRkJVU3g1UWtGQk1FSkJMRkZCUVZFc01FSkJRVEpDUVN4UlFVRlJMRFpDUVVFNFFrRXNVVUZCVVN4blEwRkJhVU5CTEZGQlFWRXNWVUZCV1Vnc1JVRkJVVVFzUlVGQlN5eDVRa0ZCTUVKQkxFVkJRVXNzTUVKQlFUSkNRU3hGUVVGTExEWkNRVUU0UWtFc1JVRkJTeXhuUTBGQmFVTkJMRVZCUVZrc1QwRkRiRmdzU1VGQlNTeEpRVUZKVVN4TFFVRkxSQ3hIUVVGMVFpeHBRa0ZCV2t3c1VVRkJkVUpCTEZGQlFWVkdMRWRCUVUxUkxFZEJRVXRFTEVWQlFVVkRMRWxCVUhoRkxFTkJVMGRETEUxQlFVMHNVMEZCVTBNc1JVRkJhME5ETEVWQlFXdERReXhGUVVGclEwTXNSVUZCYTBORExFZEJRekZLTEUwc1ozSkNRMVpCTEd0Q1FVbGhMRVZCUVVGRExGbEJRV01zUlVGQlFVTXNZMEZCTkVJc1NVRkZka1FzZVVOQlFUWkRMRXRCUXpORFF5eEZRVUZKTEV0QlEwcERMRVZCUVVrc1VVRkRTa01zUlVGQlR5eFRRVU5RUXl4SlFXVkJMRTlCUTBVc2QwSkJRVU1zUlVGQlFVd3NXVUZCV1Uwc1UwRkJVU3hEUVVGRFF5eE5RVUZQTEVOQlFVTkRMRmxCVkdoRExGTkJRWEZDUXl4SFFVTnVRaXhQUVVGSlRDeEZRVUZSU3l4SFFVTklUQ3hGUVVGUlN5eEhRVVZTTEVOQlFVTkRMRTFCUVU4c1ZVRkJWME1zUzBGQlRTeFZRVUZYUXl4TFFVRk5MRmxCUzFKRExGRkJRVk5ZTEVWQlFVOURMRWxCUTNoRVJTeExMR3R5UWtNelFsQXNhMEpCUTBFc1dVRkRRU3haUVVWQkxGbEJRMEVzV1VGRFFTeFRRVVZCTEc5Q1FVRnRReXhQUVVOcVExTXNSVUZCVFN4VFFVTk9WQ3hKUVV0QkxFMUJRVTlMTEVWQlFVOUxMRWRCUVZrc1JVRkJRVU1zV1VGRGJrSktMRVZCUVUxTExFZEJRVmNzUlVGQlFVUXNXVUZEYWtKTUxFVkJRVTFQTEVkQlFWY3NSVUZCUVVZc1dVRkRha0pITEVWQlFWVkRMRWRCUVdVc1JVRkJRVW9zVTBGQmJVTXNUMEZGTjBRc1dVRkJRMUlzUlVGQlZ5eFJRVUZGU3l4SFFVRlhMRVZCUVVGUkxGZEJRVmNzUlVGQlFYSkNMR0ZCZDBJeFF5eFBRWFJDUVN4RlFVRkJjMElzVjBGQlZTeExRVU5TTEUxQlFVMHNUVUZCUTFvc1JVRkJTeXhMUVVGRlJTeEZRVUZKTEV0QlFVVkVMRWRCUVZGSUxFVkJRVmxOTEVkQlEzaERReXhGUVVGVFRDeEhRVU5VVHl4RlFVRlJUQ3hIUVVOU1RTeEZRVUZSVEN4RlFVRlZSaXhOUVcxQ2JFSXNaMFJCUTBVc1owTkJRVTFaTEZGQmFrSldMRk5CUVhGQ1F5eEhRVU51UWtvc1JVRkJXVWtzUlVGQlRVTXNaMEpCWjBKWlF5eE5RVlJJTEVOQlF6TkNReXhsUVVGblFpeFpRVU5vUWtNc2IwSkJRWEZDTEZOQlEzSkNReXhQUVVGUkxFOUJRMUpETEZkQlFWa3NWMEZOVUhwQ0xFZEJSVWdzZDBKQlFVTXNWVUZCVHl4RFFVTk9NRUlzVDBGQlVWb3NSVUZEVW1Fc1VVRnNRazRzVjBGRFJWb3NSVUZCV1N4UFFXdENVbUVzWVVGQll5eERRVUZEUXl4VFFVRlZMRk5CUVZWRExGZEJRVmtzVlVGREwwTkRMR2RDUVVGcFFpeERRVU5tUml4VFFVRlZMRTFCUTFaRExGZEJRVmtzVlVGRlpHaENMRk5CUVZWQkxFZEJSVllzZDBKQlFVTXNWVUZCU1N4RFFVRkRhMElzVjBGQlV5eEZRVUZEUXl4VlFVRlhMRlZCUVV0RExFVkJRVWNzUlVGQlIwTXNVMEZCVXl4VFFVTTNReXgzUWtGQlF5eFZRVUZKTEVOQlFVTkRMRTFCUVVrc1JVRkJRME1zUjBGQlNTeEhRVUZKYUVJc1RVRkJUeXhEUVVGRGFVSXNZVUZCWXl4VFFVTjJReXgzUWtGQlF5eFZRVUZWTEVOQlFVTkRMRkZCUVZFc1RVRkJUV3hETEVsQlJUVkNMSGRDUVVGRExGVkJRVWtzUTBGQlF5dENMRTFCUVVrc1JVRkJRME1zUjBGQlNTeEpRVU5hT1VJc1IwRkZTQ3gzUWtGQlF5eFZRVUZKTEVOQlFVTTJRaXhOUVVGSkxFVkJRVU5ETEVkQlFVa3NTVUZEWWl3MlFrRkJSMGNzUzBGQlRXeERMRVZCUVUxdFF5eFBRVUZQTEZWQlFWRXNkMElzTkUxRGJrVXhReXhsUVVsUkxEUkdRVXBCTEVWQlFVRkRMR2REUVVOU0xHdENRVWR6UXl4RlFVRkJReXhYUVVndlFpeFhMRkZEUkZBMVJDeEZRVUZQUkN4UlFVRlZVU3hITEZGRFFXcENVQ3hGUVVGUFJDeFJRVUZWVXl4SExGRkRRV3BDVWl4RlFVRlBSQ3hSUVVGVlZTeEhMRkZEUVdwQ1ZDeEZRVUZQUkN4UlFVRlZWeXhITEZGRFFXcENWaXhGUVVGUFJDeFJRVUZWV1N4SlEwTmlhMFFzUlVGQk1rSXNSeXhQUVVjdlFpeFRRVUZUUXl4RlFVRnZRa01zUjBGRk5VSXNSMEZCUjBZc1JVRkJlVUpGTEVkQlF6TkNMRTlCUVU5R0xFVkJRWGxDUlN4SFFVRlZhRVVzVVVGSE0wTXNTVUZCU1VNc1JVRkJVelpFTEVWQlFYbENSU3hIUVVGWkxFTkJSMnBFYUVVc1VVRkJVeXhKUVU5V0xFOUJTRUZwUlN4RlFVRnZRa1FzUjBGQlZVVXNTMEZCUzJwRkxFVkJRVTlFTEZGQlFWTkRMRVZCUVZGQkxFVkJRVTlFTEZGQlFWTXJSQ3hIUVVkd1JUbEVMRVZCUVU5RUxGRkRha0pYSzBRc1EwRkJiMElzVFNJc0ltWnBiR1VpT2lKaWRXNWtiR1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLSEpsY1hWcGNtVW9YQ0pBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlDYjNoY0lpa3NJSEpsY1hWcGNtVW9YQ0pBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlIY21sa1hDSXBMQ0J5WlhGMWFYSmxLRndpUUcxaGRHVnlhV0ZzTFhWcEwyTnZjbVV2VUc5d2IzWmxjbHdpS1N3Z2NtVnhkV2x5WlNoY0lrQnRZWFJsY21saGJDMTFhUzlqYjNKbEwxUjVjRzluY21Gd2FIbGNJaWtzSUhKbGNYVnBjbVVvWENKeVpXRmpkRndpS1NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWENKQWJXRjBaWEpwWVd3dGRXa3ZZMjl5WlM5Q2IzaGNJaXdnWENKQWJXRjBaWEpwWVd3dGRXa3ZZMjl5WlM5SGNtbGtYQ0lzSUZ3aVFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlVHOXdiM1psY2x3aUxDQmNJa0J0WVhSbGNtbGhiQzExYVM5amIzSmxMMVI1Y0c5bmNtRndhSGxjSWl3Z1hDSnlaV0ZqZEZ3aVhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdlMXh1WEhSY2RIWmhjaUJoSUQwZ2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklEOGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lRRzFoZEdWeWFXRnNMWFZwTDJOdmNtVXZRbTk0WENJcExDQnlaWEYxYVhKbEtGd2lRRzFoZEdWeWFXRnNMWFZwTDJOdmNtVXZSM0pwWkZ3aUtTd2djbVZ4ZFdseVpTaGNJa0J0WVhSbGNtbGhiQzExYVM5amIzSmxMMUJ2Y0c5MlpYSmNJaWtzSUhKbGNYVnBjbVVvWENKQWJXRjBaWEpwWVd3dGRXa3ZZMjl5WlM5VWVYQnZaM0poY0doNVhDSXBMQ0J5WlhGMWFYSmxLRndpY21WaFkzUmNJaWtwSURvZ1ptRmpkRzl5ZVNoeWIyOTBXMXdpUUcxaGRHVnlhV0ZzTFhWcEwyTnZjbVV2UW05NFhDSmRMQ0J5YjI5MFcxd2lRRzFoZEdWeWFXRnNMWFZwTDJOdmNtVXZSM0pwWkZ3aVhTd2djbTl2ZEZ0Y0lrQnRZWFJsY21saGJDMTFhUzlqYjNKbEwxQnZjRzkyWlhKY0lsMHNJSEp2YjNSYlhDSkFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOVVlWEJ2WjNKaGNHaDVYQ0pkTENCeWIyOTBXMXdpY21WaFkzUmNJbDBwTzF4dVhIUmNkR1p2Y2loMllYSWdhU0JwYmlCaEtTQW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JRDhnWlhod2IzSjBjeUE2SUhKdmIzUXBXMmxkSUQwZ1lWdHBYVHRjYmx4MGZWeHVmU2tvYzJWc1ppd2dablZ1WTNScGIyNG9YMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWZOalU0WDE4c0lGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlh6Y3lNRjlmTENCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDE4eU9EQmZYeXdnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTnpRd1gxOHNJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZYekk1TjE5ZktTQjdYRzV5WlhSMWNtNGdJaXdpYVcxd2IzSjBJRkpsWVdOMExDQjdZM0psWVhSbFEyOXVkR1Y0ZEgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJRWxJWld4d1EyOXVkR1Y0ZENCbWNtOXRJQ2N1TGk5SmJuUmxjbVpoWTJWekwwbElaV3h3UTI5dWRHVjRkQ2M3WEc1cGJYQnZjblFnU1VobGJIQkpibVp2SUdaeWIyMGdKeTR1TDBsdWRHVnlabUZqWlhNdlNVaGxiSEJKYm1adkp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElFaGxiSEJEYjI1MFpYaDBJRDBnWTNKbFlYUmxRMjl1ZEdWNGREeEpTR1ZzY0VOdmJuUmxlSFErS0h0OUlHRnpJRWxJWld4d1EyOXVkR1Y0ZENrN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQklaV3h3UTI5dWRHVjRkRkJ5YjNacFpHVnlRMjl0Y0c5dVpXNTBLSHRjYmlBZ2FHOXpkQ3hjYmlBZ2NHRjBhQ3hjYmlBZ2JHVjRhV052Yml4Y2JpQWdZMmhwYkdSeVpXNWNibjA2SUh0Y2JpQWdhRzl6ZERvZ2MzUnlhVzVuTzF4dUlDQndZWFJvT2lCemRISnBibWM3WEc0Z0lHeGxlR2xqYjI0NklGSmxZMjl5WkR4emRISnBibWNzSUVsSVpXeHdTVzVtYno0N1hHNGdJR05vYVd4a2NtVnVPaUJoYm5rN1hHNTlLU0I3WEc0Z0lHWjFibU4wYVc5dUlHZGxkRWhsYkhCSmJtWnZLR2xrT2lCemRISnBibWNwT2lCSlNHVnNjRWx1Wm04Z2UxeHVJQ0FnSUdsbUlDaHNaWGhwWTI5dVcybGtYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR3hsZUdsamIyNWJhV1JkTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2UzUnBkR3hsT2lBbmRXNXJibTkzYmljc0lHeHBibXM2SUNkMWJtdHViM2R1Snl3Z2RHVjRkRG9nSjNWdWEyNXZkMjRuZlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhJWld4d1EyOXVkR1Y0ZEM1UWNtOTJhV1JsY2lCMllXeDFaVDE3ZTJkbGRFaGxiSEJKYm1adkxDQmlZWE5sVlhKc09pQm9iM04wSUNzZ2NHRjBhSDE5UGx4dUlDQWdJQ0FnZTJOb2FXeGtjbVZ1ZlZ4dUlDQWdJRHd2U0dWc2NFTnZiblJsZUhRdVVISnZkbWxrWlhJK1hHNGdJQ2s3WEc1OVhHNGlMQ0pwYlhCdmNuUWdRbTk0SUdaeWIyMGdKMEJ0WVhSbGNtbGhiQzExYVM5amIzSmxMMEp2ZUNjN1hHNXBiWEJ2Y25RZ1IzSnBaQ0JtY205dElDZEFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOUhjbWxrSnp0Y2JtbHRjRzl5ZENCUWIzQnZkbVZ5SUdaeWIyMGdKMEJ0WVhSbGNtbGhiQzExYVM5amIzSmxMMUJ2Y0c5MlpYSW5PMXh1YVcxd2IzSjBJSHREVTFOUWNtOXdaWEowYVdWemZTQm1jbTl0SUNkQWJXRjBaWEpwWVd3dGRXa3ZZMjl5WlM5emRIbHNaWE12ZDJsMGFGTjBlV3hsY3ljN1hHNXBiWEJ2Y25RZ1ZIbHdiMmR5WVhCb2VTQm1jbTl0SUNkQWJXRjBaWEpwWVd3dGRXa3ZZMjl5WlM5VWVYQnZaM0poY0doNUp6dGNibWx0Y0c5eWRDQlNaV0ZqZEN3Z2UwMXZkWE5sUlhabGJuUXNJSFZ6WlVOdmJuUmxlSFFzSUhWelpVVm1abVZqZEN3Z2RYTmxVM1JoZEdWOUlHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3U0dWc2NFTnZiblJsZUhSOUlHWnliMjBnSnk0dUwwaGxiSEJEYjI1MFpYaDBMMGhsYkhCRGIyNTBaWGgwSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1NXNXNhVzVsU0dWc2NDaDdYRzRnSUdobGJIQkpaQ3hjYmlBZ1kyaHBiR1J5Wlc1Y2JuMDZJSHRjYmlBZ2FHVnNjRWxrT2lCemRISnBibWM3WEc0Z0lHTm9hV3hrY21WdU9pQmhibms3WEc1OUtTQjdYRzRnSUdOdmJuTjBJRnQwYVhSc1pTd2djMlYwVkdsMGJHVmRJRDBnZFhObFUzUmhkR1U4YzNSeWFXNW5QaWdwTzF4dUlDQmpiMjV6ZENCYmRHVjRkQ3dnYzJWMFZHVjRkRjBnUFNCMWMyVlRkR0YwWlR4emRISnBibWMrS0NrN1hHNGdJR052Ym5OMElGdHNhVzVyTENCelpYUk1hVzVyWFNBOUlIVnpaVk4wWVhSbFBITjBjbWx1Wno0b0tUdGNiaUFnWTI5dWMzUWdXMkZ1WTJodmNrVnNMQ0J6WlhSQmJtTm9iM0pGYkYwZ1BTQjFjMlZUZEdGMFpUeElWRTFNUW5WMGRHOXVSV3hsYldWdWRDQjhJRzUxYkd3K0tHNTFiR3dwTzF4dVhHNGdJR052Ym5OMElIdG5aWFJJWld4d1NXNW1ieXdnWW1GelpWVnliSDBnUFNCMWMyVkRiMjUwWlhoMEtFaGxiSEJEYjI1MFpYaDBLVHRjYmx4dUlDQjFjMlZGWm1abFkzUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSHQwYVhSc1pTd2dkR1Y0ZEN3Z2JHbHVhMzBnUFNCblpYUklaV3h3U1c1bWJ5aG9aV3h3U1dRcE8xeHVJQ0FnSUhObGRGUnBkR3hsS0hScGRHeGxLVHRjYmlBZ0lDQnpaWFJVWlhoMEtIUmxlSFFwTzF4dUlDQWdJSE5sZEV4cGJtc29ZbUZ6WlZWeWJDQXJJR3hwYm1zcE8xeHVJQ0I5S1R0Y2JseHVJQ0JtZFc1amRHbHZiaUJ2Y0dWdVVHOXdiM1psY2lobGRtVnVkRG9nVFc5MWMyVkZkbVZ1ZER4SVZFMU1RblYwZEc5dVJXeGxiV1Z1ZEQ0cElIdGNiaUFnSUNCelpYUkJibU5vYjNKRmJDaGxkbVZ1ZEM1amRYSnlaVzUwVkdGeVoyVjBLVHRjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUdOc2IzTmxVRzl3YjNabGNpZ3BJSHRjYmlBZ0lDQnpaWFJCYm1Ob2IzSkZiQ2h1ZFd4c0tUdGNiaUFnZlZ4dVhHNGdJR052Ym5OMElITjBlV3hsT2lCRFUxTlFjbTl3WlhKMGFXVnpJRDBnZTF4dUlDQWdJSFJsZUhSRVpXTnZjbUYwYVc5dU9pQW5kVzVrWlhKc2FXNWxKeXhjYmlBZ0lDQjBaWGgwUkdWamIzSmhkR2x2YmxOMGVXeGxPaUFuWkdGemFHVmtKeXhjYmlBZ0lDQmpkWEp6YjNJNklDZG9aV3h3Snl4Y2JpQWdJQ0JoYkdsbmJrbDBaVzF6T2lBblkyVnVkR1Z5SjF4dUlDQjlPMXh1WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEQ1Y2JpQWdJQ0FnSUR4emNHRnVJRzl1UTJ4cFkyczllMjl3Wlc1UWIzQnZkbVZ5ZlNCemRIbHNaVDE3YzNSNWJHVjlQbHh1SUNBZ0lDQWdJQ0I3WTJocGJHUnlaVzU5WEc0Z0lDQWdJQ0E4TDNOd1lXNCtYRzRnSUNBZ0lDQThVRzl3YjNabGNseHVJQ0FnSUNBZ0lDQnZjR1Z1UFhzaElXRnVZMmh2Y2tWc2ZWeHVJQ0FnSUNBZ0lDQnZia05zYjNObFBYdGpiRzl6WlZCdmNHOTJaWEo5WEc0Z0lDQWdJQ0FnSUdGdVkyaHZjazl5YVdkcGJqMTdlM1psY25ScFkyRnNPaUFuWTJWdWRHVnlKeXdnYUc5eWFYcHZiblJoYkRvZ0oyTmxiblJsY2lkOWZWeHVJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMVBjbWxuYVc0OWUzdGNiaUFnSUNBZ0lDQWdJQ0IyWlhKMGFXTmhiRG9nSjNSdmNDY3NYRzRnSUNBZ0lDQWdJQ0FnYUc5eWFYcHZiblJoYkRvZ0oyTmxiblJsY2lkY2JpQWdJQ0FnSUNBZ2ZYMWNiaUFnSUNBZ0lDQWdZVzVqYUc5eVJXdzllMkZ1WTJodmNrVnNmVnh1SUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0E4UjNKcFpDQmpiMjUwWVdsdVpYSWdZMjl0Y0c5dVpXNTBQWHRDYjNoOUlIQTlleko5SUcxaGVGZHBaSFJvUFZ3aU16QXdjSGhjSWo1Y2JpQWdJQ0FnSUNBZ0lDQThSM0pwWkNCcGRHVnRJSGh6UFhzeE1uMGdjM1I1YkdVOWUzdHRZWEpuYVc1Q2IzUjBiMjA2SUNjeE1IQjRKMzE5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQRlI1Y0c5bmNtRndhSGtnZG1GeWFXRnVkRDFjSW1nMVhDSStlM1JwZEd4bGZUd3ZWSGx3YjJkeVlYQm9lVDVjYmlBZ0lDQWdJQ0FnSUNBOEwwZHlhV1ErWEc0Z0lDQWdJQ0FnSUNBZ1BFZHlhV1FnYVhSbGJTQjRjejE3TVRKOVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZTNSbGVIUjlYRzRnSUNBZ0lDQWdJQ0FnUEM5SGNtbGtQbHh1SUNBZ0lDQWdJQ0FnSUR4SGNtbGtJR2wwWlcwZ2VITTllekV5ZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhoSUdoeVpXWTllMnhwYm10OUlIUmhjbWRsZEQxY0lsOWliR0Z1YTF3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCV2FXVjNJR2x1SUcxaGJuVmhiRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOWhQbHh1SUNBZ0lDQWdJQ0FnSUR3dlIzSnBaRDVjYmlBZ0lDQWdJQ0FnUEM5SGNtbGtQbHh1SUNBZ0lDQWdQQzlRYjNCdmRtVnlQbHh1SUNBZ0lEd3ZQbHh1SUNBcE8xeHVmVnh1SWl3aWFXMXdiM0owSUh0SVpXeHdRMjl1ZEdWNGRGQnliM1pwWkdWeVEyOXRjRzl1Wlc1MGZTQm1jbTl0SUNjdUwwaGxiSEJEYjI1MFpYaDBMMGhsYkhCRGIyNTBaWGgwSnp0Y2JtbHRjRzl5ZENCSmJteHBibVZJWld4d0lHWnliMjBnSnk0dlNXNXNhVzVsU0dWc2NDOUpibXhwYm1WSVpXeHdKenRjYm1sdGNHOXlkQ0JKU0dWc2NFbHVabThnWm5KdmJTQW5MaTlKYm5SbGNtWmhZMlZ6TDBsSVpXeHdTVzVtYnljN1hHNWNibVY0Y0c5eWRDQjdTR1ZzY0VOdmJuUmxlSFJRY205MmFXUmxja052YlhCdmJtVnVkQ3dnU1c1c2FXNWxTR1ZzY0N3Z1NVaGxiSEJKYm1admZUdGNiaUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTmpVNFgxODdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMTgzTWpCZlh6c2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZYekk0TUY5Zk95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWZOelF3WDE4N0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgxOHlPVGRmWHpzaUxDSXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzUyWVhJZ1gxOTNaV0p3WVdOclgyMXZaSFZzWlY5allXTm9aVjlmSUQwZ2UzMDdYRzVjYmk4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzVtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dVhIUnBaaWhmWDNkbFluQmhZMnRmYlc5a2RXeGxYMk5oWTJobFgxOWJiVzlrZFd4bFNXUmRLU0I3WEc1Y2RGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXRiMlIxYkdWZlkyRmphR1ZmWDF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JseDBmVnh1WEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1WEhSMllYSWdiVzlrZFd4bElEMGdYMTkzWldKd1lXTnJYMjF2WkhWc1pWOWpZV05vWlY5ZlcyMXZaSFZzWlVsa1hTQTlJSHRjYmx4MFhIUXZMeUJ1YnlCdGIyUjFiR1V1YVdRZ2JtVmxaR1ZrWEc1Y2RGeDBMeThnYm04Z2JXOWtkV3hsTG14dllXUmxaQ0J1WldWa1pXUmNibHgwWEhSbGVIQnZjblJ6T2lCN2ZWeHVYSFI5TzF4dVhHNWNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dVhIUmZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1WEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzU5WEc1Y2JpSXNJaTh2SUhOMFlYSjBkWEJjYmk4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVMeThnVkdocGN5QmxiblJ5ZVNCdGIyUjFiR1VnYVhNZ2NtVm1aWEpsYm1ObFpDQmllU0J2ZEdobGNpQnRiMlIxYkdWeklITnZJR2wwSUdOaGJpZDBJR0psSUdsdWJHbHVaV1JjYm5aaGNpQmZYM2RsWW5CaFkydGZaWGh3YjNKMGMxOWZJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnMk1EY3BPMXh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsImltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2V9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IHtnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnLi4vVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uQ2hvaWNlKHtjcml0ZXJpb259OiB7Y3JpdGVyaW9uOiBJQ3JpdGVyaW9ufSkge1xuICBjb25zdCB7cHZmcywgc2hvd1BlcmNlbnRhZ2VzfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgcHZmID0gcHZmc1tjcml0ZXJpb24uaWRdO1xuICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG4gIGNvbnN0IHdvcnN0ID0gZ2V0V29yc3QocHZmLCB1c2VQZXJjZW50YWdlKTtcbiAgY29uc3QgYmVzdCA9IGdldEJlc3QocHZmLCB1c2VQZXJjZW50YWdlKTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbCBpZD17YHJhbmtpbmctY2hvaWNlLSR7Y3JpdGVyaW9uLmlkfWB9PlxuICAgICAgPFJhZGlvIHZhbHVlPXtjcml0ZXJpb24uaWR9IC8+XG4gICAgICB7cHZmLmRpcmVjdGlvbn17JyAnfVxuICAgICAgPFRvb2x0aXBcbiAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBpZD17YGNyaXRlcmlvbi1vcHRpb24tJHtjcml0ZXJpb24uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIlxuICAgICAgICA+XG4gICAgICAgICAge2NyaXRlcmlvbi50aXRsZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICAge2AgZnJvbSAke3dvcnN0fSB0byAke2Jlc3R9YH1cbiAgICA8L2xhYmVsPlxuICApO1xufVxuIiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Z2V0VW5pdExhYmVsfSBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uU2l0dWF0aW9uKHtcbiAgY3JpdGVyaW9uLFxuICBkaXNwbGF5VmFsdWVcbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xuICBkaXNwbGF5VmFsdWU6IG51bWJlcjtcbn0pIHtcbiAgY29uc3Qge3Nob3dQZXJjZW50YWdlc30gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8bGkgaWQ9e2BzaXR1YXRpb24tJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgdGl0bGU9e2NyaXRlcmlvbi5kZXNjcmlwdGlvbiA/IGNyaXRlcmlvbi5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGlkPXtgc2l0dWF0aW9uLXRpdGxlLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjcml0ZXJpb24udGl0bGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDogPHNwYW4gaWQ9e2BzaXR1YXRpb24tdmFsdWUtJHtjcml0ZXJpb24uaWR9YH0+e2Rpc3BsYXlWYWx1ZX08L3NwYW4+eycgJ31cbiAgICAgICAge2dldFVuaXRMYWJlbChcbiAgICAgICAgICBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQsXG4gICAgICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgICAgICl9XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmFua2luZ0Fuc3dlciBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nQW5zd2VyJztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCB7YWRkUmFua2luZ30gZnJvbSAnc3JjL1JhbmtpbmdVdGlsL1JhbmtpbmdVdGlsJztcbmltcG9ydCB7XG4gIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzLFxuICBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXNcbn0gZnJvbSAnc3JjL1N3aW5nVXRpbC9Td2luZ1V0aWwnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnLi4vSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElFeGFjdFN3aW5nUmF0aW8gZnJvbSAnLi4vSW50ZXJmYWNlL0lFeGFjdFN3aW5nUmF0aW8nO1xuaW1wb3J0IElSYXRpb0JvdW5kQ29uc3RyYWludCBmcm9tICcuLi9JbnRlcmZhY2UvSVJhdGlvQm91bmRDb25zdHJhaW50JztcbmltcG9ydCB7VEVsaWNpdGF0aW9uTWV0aG9kfSBmcm9tICcuLi9UeXBlcy9URWxpY2l0YXRpb25NZXRob2QnO1xuaW1wb3J0IElFbGljaXRhdGlvbkNvbnRleHQgZnJvbSAnLi9JRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGNvbnN0IEVsaWNpdGF0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUVsaWNpdGF0aW9uQ29udGV4dD4oXG4gIHt9IGFzIElFbGljaXRhdGlvbkNvbnRleHRcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudCh7XG4gIGVsaWNpdGF0aW9uTWV0aG9kLFxuICBjcml0ZXJpYSxcbiAgc2hvd1BlcmNlbnRhZ2VzLFxuICBwdmZzLFxuICBjYW5jZWxDYWxsYmFjayxcbiAgc2F2ZUNhbGxiYWNrLFxuICBjaGlsZHJlblxufToge1xuICBlbGljaXRhdGlvbk1ldGhvZDogVEVsaWNpdGF0aW9uTWV0aG9kO1xuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdO1xuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW47XG4gIHB2ZnM6IFJlY29yZDxzdHJpbmcsIFRQdmY+O1xuICBjYW5jZWxDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgc2F2ZUNhbGxiYWNrOiAoXG4gICAgcHJlZmVyZW5jZXM6IElFeGFjdFN3aW5nUmF0aW9bXSB8IElSYXRpb0JvdW5kQ29uc3RyYWludFtdIHwgSVJhbmtpbmdbXVxuICApID0+IHZvaWQ7XG4gIGNoaWxkcmVuOiBhbnk7XG59KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaXNOZXh0RGlzYWJsZWQsIHNldElzTmV4dERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICBdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtwcmVmZXJlbmNlcywgc2V0UHJlZmVyZW5jZXNdID0gdXNlU3RhdGU8XG4gICAgUmVjb3JkPHN0cmluZywgSUV4YWN0U3dpbmdSYXRpbz4gfCBSZWNvcmQ8c3RyaW5nLCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQ+XG4gID4oe30pO1xuICBjb25zdCBbcmFua2luZ3MsIHNldFJhbmtpbmdzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPj4oe30pO1xuXG4gIGZ1bmN0aW9uIHNldFJhbmtpbmcoY3JpdGVyaW9uSWQ6IHN0cmluZywgcmFuazogbnVtYmVyKSB7XG4gICAgY29uc3QgdXBkYXRlZFJhbmtpbmdzID0gYWRkUmFua2luZyhyYW5raW5ncywgY3JpdGVyaW9uSWQsIHJhbmspO1xuICAgIHNldFJhbmtpbmdzKHVwZGF0ZWRSYW5raW5ncyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uQW5kUHJlZmVyZW5jZXMoY3JpdGVyaW9uSWQ6IHN0cmluZykge1xuICAgIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ3ByZWNpc2UnKSB7XG4gICAgICBzZXRQcmVmZXJlbmNlcyhidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoY3JpdGVyaWEsIGNyaXRlcmlvbklkKSk7XG4gICAgfSBlbHNlIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ2ltcHJlY2lzZScpIHtcbiAgICAgIHNldFByZWZlcmVuY2VzKGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKGNyaXRlcmlhLCBjcml0ZXJpb25JZCkpO1xuICAgIH1cbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQoY3JpdGVyaW9uSWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJlZmVyZW5jZShjcml0ZXJpb25JZDogc3RyaW5nLCBhbnN3ZXI6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCB1cGRhdGVkUHJlZmVyZW5jZXMgPSBfLmNsb25lRGVlcChwcmVmZXJlbmNlcyk7XG4gICAgY29uc3QgcHJlZmVyZW5jZTogSUV4YWN0U3dpbmdSYXRpbyA9IHtcbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICAgIHR5cGU6ICdleGFjdCBzd2luZycsXG4gICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uSWRdLFxuICAgICAgcmF0aW86IDEwMCAvIGFuc3dlclxuICAgIH07XG4gICAgdXBkYXRlZFByZWZlcmVuY2VzW2NyaXRlcmlvbklkXSA9IHByZWZlcmVuY2U7XG4gICAgc2V0UHJlZmVyZW5jZXModXBkYXRlZFByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEJvdW5kUHJlZmVyZW5jZShcbiAgICBjcml0ZXJpb25JZDogc3RyaW5nLFxuICAgIGFuc3dlcjogW251bWJlciwgbnVtYmVyXVxuICApOiB2b2lkIHtcbiAgICBsZXQgdXBkYXRlZFByZWZlcmVuY2VzID0gXy5jbG9uZURlZXAocHJlZmVyZW5jZXMpO1xuICAgIGNvbnN0IHByZWZlcmVuY2U6IElSYXRpb0JvdW5kQ29uc3RyYWludCA9IHtcbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAnaW1wcmVjaXNlJyxcbiAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uSWRdLFxuICAgICAgYm91bmRzOiBbMTAwIC8gYW5zd2VyWzFdLCAxMDAgLyBhbnN3ZXJbMF1dXG4gICAgfTtcbiAgICB1cGRhdGVkUHJlZmVyZW5jZXNbY3JpdGVyaW9uSWRdID0gcHJlZmVyZW5jZTtcbiAgICBzZXRQcmVmZXJlbmNlcyh1cGRhdGVkUHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3JpdGVyaW9uKGlkOiBzdHJpbmcpOiBJQ3JpdGVyaW9uIHtcbiAgICByZXR1cm4gXy5maW5kKGNyaXRlcmlhLCBbJ2lkJywgaWRdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVsaWNpdGF0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY3VycmVudFN0ZXAsXG4gICAgICAgIGlzTmV4dERpc2FibGVkLFxuICAgICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICAgICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgICAgICBwdmZzLFxuICAgICAgICBjcml0ZXJpYSxcbiAgICAgICAgcmFua2luZ3MsXG4gICAgICAgIGdldENyaXRlcmlvbixcbiAgICAgICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgICAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25BbmRQcmVmZXJlbmNlcyxcbiAgICAgICAgc2V0UHJlZmVyZW5jZSxcbiAgICAgICAgc2V0Qm91bmRQcmVmZXJlbmNlLFxuICAgICAgICBzZXRQcmVmZXJlbmNlcyxcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgICAgIHNhdmVDYWxsYmFjayxcbiAgICAgICAgc2V0UmFua2luZ1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9FbGljaXRhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBzaWduaWZpY2FudERpZ2l0cyBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wcmVjaXNlU3dpbmdTbGlkZXIoe1xuICBjcml0ZXJpb25cbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xufSkge1xuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPFtudW1iZXIsIG51bWJlcl0+KFsxLCAxMDBdKTtcbiAgY29uc3Qge3NldEJvdW5kUHJlZmVyZW5jZSwgbW9zdEltcG9ydGFudENyaXRlcmlvbklkfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCb3VuZFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBzbGlkZXJWYWx1ZSk7XG4gIH0sIFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTbGlkZXJDaGFuZ2VkKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LFxuICAgIG5ld1ZhbHVlOiBbbnVtYmVyLCBudW1iZXJdXG4gICkge1xuICAgIHNldFNsaWRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRCb3VuZFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBuZXdWYWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQgPT09IGNyaXRlcmlvbi5pZFxuICAgICAgPyAnMTAwJSdcbiAgICAgIDogYCR7c2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWVbMF0pfSAtICR7c2lnbmlmaWNhbnREaWdpdHMoXG4gICAgICAgICAgc2xpZGVyVmFsdWVbMV1cbiAgICAgICAgKX0lYDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZW5kZXJWYWx1ZSgpfVxuICAgICAgPFNsaWRlclxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17MX1cbiAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICBkaXNhYmxlZD17bW9zdEltcG9ydGFudENyaXRlcmlvbklkID09PSBjcml0ZXJpb24uaWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge0lubGluZUhlbHB9IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgU3dpbmdCdXR0b25zIGZyb20gJy4uL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMnO1xuaW1wb3J0IFN3aW5nU2V0V2VpZ2h0cyBmcm9tICcuLi9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcoKSB7XG4gIGNvbnN0IHtjdXJyZW50U3RlcH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJzd2luZy13ZWlnaHRpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgPElubGluZUhlbHAgaGVscElkPVwiaW1wcmVjaXNlLXN3aW5nLXdlaWdodGluZ1wiPlxuICAgICAgICAgICAgSW1wcmVjaXNlIHN3aW5nIHdlaWdodGluZ1xuICAgICAgICAgIDwvSW5saW5lSGVscD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgPyA8TW9zdEltcG9ydGFudENob2ljZSAvPiA6IDxTd2luZ1NldFdlaWdodHMgLz59XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPFN3aW5nQnV0dG9ucyAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiAyXG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nQnV0dG9ucygpIHtcbiAgY29uc3Qge1xuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldEN1cnJlbnRTdGVwLFxuICAgIHByZWZlcmVuY2VzLFxuICAgIGNyaXRlcmlhLFxuICAgIGNhbmNlbENhbGxiYWNrLFxuICAgIHNhdmVDYWxsYmFja1xuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICBtYXRjaGluZ05leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25jbGljaygpOiB2b2lkIHtcbiAgICBzYXZlQ2FsbGJhY2soT2JqZWN0LnZhbHVlcyhwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hpbmdOZXh0KCk6IHZvaWQge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xhc3RTdGVwKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcCA9PT0gXy5zaXplKGNyaXRlcmlhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzQ2xpY2soKTogdm9pZCB7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoZmFsc2UpO1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKTogdm9pZCB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgPlxuICAgICAgICBDYW5jZWxcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cInByZXZpb3VzLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzQ2xpY2t9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpc0xhc3RTdGVwKCkgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQnV0dG9uY2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7SW5saW5lSGVscH0gZnJvbSAnaGVscC1wb3B1cCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgTWF0Y2hpbmdCdXR0b25zIGZyb20gJy4vTWF0Y2hpbmdCdXR0b25zL01hdGNoaW5nQnV0dG9ucyc7XG5pbXBvcnQgTWF0Y2hpbmdTZXRJbXBvcnRhbmNlIGZyb20gJy4vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2V0SW1wb3J0YW5jZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nRWxpY2l0YXRpb24oKSB7XG4gIGNvbnN0IHtjdXJyZW50U3RlcCwgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCB0b3RhbFN0ZXBzID0gXy5zaXplKGNyaXRlcmlhKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1hdGNoaW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIDxJbmxpbmVIZWxwIGhlbHBJZD1cIm1hdGNoaW5nXCI+TWF0Y2hpbmc8L0lubGluZUhlbHA+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSAxID8gKFxuICAgICAgICAgIDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE1hdGNoaW5nU2V0SW1wb3J0YW5jZSAvPlxuICAgICAgICApfVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxNYXRjaGluZ0J1dHRvbnMgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2Yge3RvdGFsU3RlcHN9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtcbiAgZ2V0Q3VycmVudENyaXRlcmlvbixcbiAgZ2V0TWF0Y2hpbmdTdGF0ZW1lbnRcbn0gZnJvbSAnc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2V9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IHtnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnLi4vLi4vVXRpbC91dGlsJztcbmltcG9ydCBNYXRjaGluZ1NsaWRlciBmcm9tICcuL01hdGNoaW5nU2xpZGVyL01hdGNoaW5nU2xpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdTZXRJbXBvcnRhbmNlKCkge1xuICBjb25zdCB7XG4gICAgcHZmcyxcbiAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIGdldENyaXRlcmlvbixcbiAgICBjcml0ZXJpYVxuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IG1vc3RJbXBvcnRhbnRDcml0ZXJpb24gPSBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKTtcbiAgY29uc3QgbW9zdEltcG9ydGFudFVuaXRUeXBlID1cbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG5cbiAgY29uc3QgY3VycmVudENyaXRlcmlvbiA9IGdldEN1cnJlbnRDcml0ZXJpb24oXG4gICAgY3JpdGVyaWEsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIGN1cnJlbnRTdGVwXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRVbml0VHlwZSA9XG4gICAgY3VycmVudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCBzdGF0ZW1lbnQgPSBnZXRNYXRjaGluZ1N0YXRlbWVudChcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLFxuICAgIGN1cnJlbnRDcml0ZXJpb25cbiAgKTtcblxuICBjb25zdCB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb24gPVxuICAgIHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UobW9zdEltcG9ydGFudFVuaXRUeXBlKTtcblxuICBjb25zdCB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb24gPVxuICAgIHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UoY3VycmVudFVuaXRUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57YFRyYWRlLW9mZiBiZXR3ZWVuICR7bW9zdEltcG9ydGFudENyaXRlcmlvbi50aXRsZX0gYW5kICR7Y3VycmVudENyaXRlcmlvbi50aXRsZX1gfTwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkXG4gICAgICAgIGl0ZW1cbiAgICAgICAgeHM9ezEyfVxuICAgICAgICBpZD1cIm1hdGNoaW5nLXN0YXRlbWVudFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdGF0ZW1lbnR9fVxuICAgICAgLz5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q3JpdGVyaW9uPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BbHRlcm5hdGl2ZSBBPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BbHRlcm5hdGl2ZSBCPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e21vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7Z2V0V29yc3QoXG4gICAgICAgICAgICAgICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sXG4gICAgICAgICAgICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb25cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGlkPVwibWF0Y2hpbmctY2VsbFwiPlxuICAgICAgICAgICAgICAgIDxNYXRjaGluZ1NsaWRlciBjdXJyZW50Q3JpdGVyaW9uSWQ9e2N1cnJlbnRDcml0ZXJpb24uaWR9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57Y3VycmVudENyaXRlcmlvbi50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtnZXRCZXN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge2dldFdvcnN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlSW1wb3J0YW5jZSxcbiAgZGV0ZXJtaW5lU3RlcFNpemVcbn0gZnJvbSAnc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwnO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzLCB7XG4gIGNhbkJlUGVyY2VudGFnZSxcbiAgZ2V0QmVzdCxcbiAgZ2V0V29yc3Rcbn0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nU2xpZGVyKHtcbiAgY3VycmVudENyaXRlcmlvbklkXG59OiB7XG4gIGN1cnJlbnRDcml0ZXJpb25JZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldFByZWZlcmVuY2UsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIHB2ZnMsXG4gICAgZ2V0Q3JpdGVyaW9uXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgbW9zdEltcG9ydGFudENyaXRlcmlvbiA9IGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpO1xuICBjb25zdCBwdmYgPSBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF07XG5cbiAgY29uc3QgdW5pdFR5cGUgPSBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcblxuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPG51bWJlcj4oXG4gICAgZ2V0QmVzdChwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sIHVzZVBlcmNlbnRhZ2UpXG4gICk7XG4gIGNvbnN0IFtzdGVwU2l6ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KGRldGVybWluZVN0ZXBTaXplKHB2Zi5yYW5nZSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyVmFsdWUgPSBnZXRCZXN0KHB2ZiwgZmFsc2UpO1xuICAgIHNldFNsaWRlclZhbHVlKHNsaWRlclZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGN1cnJlbnRDcml0ZXJpb25JZCwgY2FsY3VsYXRlSW1wb3J0YW5jZShzbGlkZXJWYWx1ZSwgcHZmKSk7XG4gIH0sIFtjdXJyZW50U3RlcF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IG51bWJlclxuICApIHtcbiAgICBzZXRTbGlkZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoXG4gICAgICBzaWduaWZpY2FudERpZ2l0cyhuZXdWYWx1ZSkgPT09XG4gICAgICAgIGdldFdvcnN0KHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbi5pZF0sIGZhbHNlKVxuICAgICk7XG4gICAgc2V0UHJlZmVyZW5jZShjdXJyZW50Q3JpdGVyaW9uSWQsIGNhbGN1bGF0ZUltcG9ydGFuY2UobmV3VmFsdWUsIHB2ZikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB1c2VQZXJjZW50YWdlXG4gICAgICA/IHNpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlICogMTAwKVxuICAgICAgOiBzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGlzcGxheVZhbHVlKCl9XG4gICAgICA8U2xpZGVyXG4gICAgICAgIGlkPVwibWF0Y2hpbmctc2xpZGVyXCJcbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBtaW49e3B2Zi5yYW5nZVswXX1cbiAgICAgICAgbWF4PXtwdmYucmFuZ2VbMV19XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXtzdGVwU2l6ZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7SUxpbmVhclB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JTGluZWFyUHZmJztcbmltcG9ydCB7SVBpZWNlV2lzZUxpbmVhclB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JUGllY2VXaXNlTGluZWFyUHZmJztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCB7VFB2ZkRpcmVjdGlvbn0gZnJvbSAnc3JjL1R5cGVzL1B2ZlR5cGVzJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFUQ0hJTkdfVEVNUExBVEUgPVxuICAnSG93IG11Y2ggYmV0dGVyIHNob3VsZCAlY3JpdGVyaW9uMSUgbWluaW1hbGx5IGJlY29tZSB0byBqdXN0aWZ5IHRoZSB3b3JzZW5pbmcgb2YgJWNyaXRlcmlvbjIlPyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXRjaGluZ1N0YXRlbWVudChcbiAgbW9zdEltcG9ydGFudENyaXRlcmlvbjogSUNyaXRlcmlvbixcbiAgY3VycmVudENyaXRlcmlvbjogSUNyaXRlcmlvblxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIERFRkFVTFRfTUFUQ0hJTkdfVEVNUExBVEUucmVwbGFjZShcbiAgICAvJWNyaXRlcmlvbjElL2dpLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGVcbiAgKS5yZXBsYWNlKC8lY3JpdGVyaW9uMiUvZ2ksIGN1cnJlbnRDcml0ZXJpb24udGl0bGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lU3RlcFNpemUoW2xvd2VyQm91bmQsIHVwcGVyQm91bmRdOiBbXG4gIG51bWJlcixcbiAgbnVtYmVyXG5dKTogbnVtYmVyIHtcbiAgY29uc3QgaW50ZXJ2YWwgPSB1cHBlckJvdW5kIC0gbG93ZXJCb3VuZDtcbiAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKGludGVydmFsKSk7XG4gIHJldHVybiBNYXRoLnBvdygxMCwgbWFnbml0dWRlIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbXBvcnRhbmNlKHNsaWRlclZhbHVlOiBudW1iZXIsIHB2ZjogVFB2Zik6IG51bWJlciB7XG4gIGlmIChpc1BpZWNlV2lzZUxpbmVhclB2ZihwdmYpKSB7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVBpZWNld2lzZUltcG9ydGFuY2Uoc2xpZGVyVmFsdWUsIHB2Zik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZUxpbmVhckltcG9ydGFuY2Uoc2xpZGVyVmFsdWUsIHB2Zik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQaWVjZVdpc2VMaW5lYXJQdmYocHZmOiBUUHZmKTogcHZmIGlzIElQaWVjZVdpc2VMaW5lYXJQdmYge1xuICByZXR1cm4gJ2N1dG9mZnMnIGluIHB2Zjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTGluZWFySW1wb3J0YW5jZShcbiAgc2xpZGVyVmFsdWU6IG51bWJlcixcbiAge3JhbmdlOiBbbG93ZXJCb3VuZCwgdXBwZXJCb3VuZF0sIGRpcmVjdGlvbn06IElMaW5lYXJQdmZcbik6IG51bWJlciB7XG4gIGNvbnN0IHJlYmFzZWQgPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2RlY3JlYXNpbmcnXG4gICAgICA/IHVwcGVyQm91bmQgLSBzbGlkZXJWYWx1ZVxuICAgICAgOiBzbGlkZXJWYWx1ZSAtIGxvd2VyQm91bmQ7XG4gIHJldHVybiAocmViYXNlZCAvIE1hdGguYWJzKGxvd2VyQm91bmQgLSB1cHBlckJvdW5kKSkgKiAxMDA7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBpZWNld2lzZUltcG9ydGFuY2UoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHB2ZjogSVBpZWNlV2lzZUxpbmVhclB2ZlxuKTogbnVtYmVyIHtcbiAgY29uc3Qge1xuICAgIGN1dG9mZnMsXG4gICAgcmFuZ2U6IFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXSxcbiAgICBkaXJlY3Rpb25cbiAgfSA9IHB2ZjtcbiAgY29uc3QgY3V0b2Zmc1dpdGhCb3VuZHMgPSBbbG93ZXJCb3VuZCwgLi4uY3V0b2ZmcywgdXBwZXJCb3VuZF07XG4gIGNvbnN0IHZhbHVlc1dpdGhCb3VuZHMgPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2luY3JlYXNpbmcnXG4gICAgICA/IFswLCAwLjI1LCAwLjUsIDAuNzUsIDFdXG4gICAgICA6IFsxLCAwLjc1LCAwLjUsIDAuMjUsIDBdO1xuICBjb25zdCBleGFjdEN1dG9mZklkeCA9IF8uZmluZEluZGV4KFxuICAgIGN1dG9mZnNXaXRoQm91bmRzLFxuICAgICh4OiBudW1iZXIpOiBib29sZWFuID0+IHggPT09IHZhbHVlXG4gICk7XG4gIGlmIChleGFjdEN1dG9mZklkeCAhPT0gLTEpIHtcbiAgICByZXR1cm4gdmFsdWVzV2l0aEJvdW5kc1tleGFjdEN1dG9mZklkeF0gKiAxMDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZhbHVlKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY3V0b2Zmc1dpdGhCb3VuZHMsXG4gICAgICAgIHZhbHVlc1dpdGhCb3VuZHMsXG4gICAgICAgIGRpcmVjdGlvblxuICAgICAgKSAqIDEwMFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIGN1dG9mZnNXaXRoQm91bmRzOiBudW1iZXJbXSxcbiAgdmFsdWVzV2l0aEJvdW5kczogbnVtYmVyW10sXG4gIGRpcmVjdGlvbjogVFB2ZkRpcmVjdGlvblxuKTogbnVtYmVyIHtcbiAgY29uc3QgbGFyZ2VyQ3V0b2ZmSWR4ID0gXy5maW5kSW5kZXgoXG4gICAgY3V0b2Zmc1dpdGhCb3VuZHMsXG4gICAgKHg6IG51bWJlcik6IGJvb2xlYW4gPT4geCA+IHZhbHVlXG4gICk7XG4gIGNvbnN0IFtsb3dlckN1dE9mZiwgdXBwZXJDdXRPZmZdID0gW1xuICAgIGN1dG9mZnNXaXRoQm91bmRzW2xhcmdlckN1dG9mZklkeCAtIDFdLFxuICAgIGN1dG9mZnNXaXRoQm91bmRzW2xhcmdlckN1dG9mZklkeF1cbiAgXTtcblxuICBjb25zdCByZWJhc2VkID0gdmFsdWUgLSBsb3dlckN1dE9mZjtcbiAgY29uc3QgcmF0aW9PZlF1YXJ0aWxlID0gcmViYXNlZCAvICh1cHBlckN1dE9mZiAtIGxvd2VyQ3V0T2ZmKTtcbiAgY29uc3QgcXVhcnRpbGVWYWx1ZSA9IHZhbHVlc1dpdGhCb3VuZHNbbGFyZ2VyQ3V0b2ZmSWR4IC0gMV07XG4gIGlmIChkaXJlY3Rpb24gPT09ICdpbmNyZWFzaW5nJykge1xuICAgIHJldHVybiBxdWFydGlsZVZhbHVlICsgMC4yNSAqIHJhdGlvT2ZRdWFydGlsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcXVhcnRpbGVWYWx1ZSAtIDAuMjUgKiByYXRpb09mUXVhcnRpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRDcml0ZXJpb24oXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nLFxuICBjdXJyZW50U3RlcDogbnVtYmVyXG4pOiBJQ3JpdGVyaW9uIHtcbiAgcmV0dXJuIF8ucmVqZWN0KGNyaXRlcmlhLCAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKSA9PiB7XG4gICAgcmV0dXJuIGNyaXRlcmlvbi5pZCA9PT0gbW9zdEltcG9ydGFudENyaXRlcmlvbklkO1xuICB9KVtjdXJyZW50U3RlcCAtIDJdO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uQ2hvaWNlIGZyb20gJy4uL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UnO1xuaW1wb3J0IENyaXRlcmlvblNpdHVhdGlvbiBmcm9tICcuLi9Dcml0ZXJpb25TaXR1YXRpb24vQ3JpdGVyaW9uU2l0dWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9zdEltcG9ydGFudENob2ljZSgpIHtcbiAgY29uc3Qge1xuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIHB2ZnMsXG4gICAgY3JpdGVyaWFcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24oZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gICAgICAgIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q3JpdGVyaW9uU2l0dWF0aW9uXG4gICAgICAgICAgICBrZXk9e2NyaXRlcmlvbi5pZH1cbiAgICAgICAgICAgIGNyaXRlcmlvbj17Y3JpdGVyaW9ufVxuICAgICAgICAgICAgZGlzcGxheVZhbHVlPXtnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvbkNob2ljZXMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uQ2hvaWNlIGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+R2l2ZW4gdGhlIGZvbGxvd2luZyBzaXR1YXRpb246PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7cmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpfVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGltcHJvdmVtZW50cyBpcyBtb3N0IGltcG9ydGFudD9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgIG5hbWU9XCJtb3N0LWltcG9ydGFudC1jcml0ZXJpb24tcmFkaW9cIlxuICAgICAgICAgIHZhbHVlPXttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDcml0ZXJpb25DaG9pY2VzKCl9XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBzaWduaWZpY2FudERpZ2l0cyBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlY2lzZVN3aW5nU2xpZGVyKHtcbiAgY3JpdGVyaW9uXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbn0pIHtcbiAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEwMCk7XG4gIGNvbnN0IHtzZXRQcmVmZXJlbmNlLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBzbGlkZXJWYWx1ZSk7XG4gIH0sIFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTbGlkZXJDaGFuZ2VkKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LFxuICAgIG5ld1ZhbHVlOiBudW1iZXJcbiAgKSB7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIHNldFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBuZXdWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWUpfVxuICAgICAgPFNsaWRlclxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17MX1cbiAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICBkaXNhYmxlZD17bW9zdEltcG9ydGFudENyaXRlcmlvbklkID09PSBjcml0ZXJpb24uaWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge0lubGluZUhlbHB9IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgU3dpbmdCdXR0b25zIGZyb20gJy4uL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMnO1xuaW1wb3J0IFN3aW5nU2V0V2VpZ2h0cyBmcm9tICcuLi9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlY2lzZVN3aW5nV2VpZ2h0aW5nKCkge1xuICBjb25zdCB7Y3VycmVudFN0ZXB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwic3dpbmctd2VpZ2h0aW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIDxJbmxpbmVIZWxwIGhlbHBJZD1cInN3aW5nLXdlaWdodGluZ1wiPlxuICAgICAgICAgICAgUHJlY2lzZSBzd2luZyB3ZWlnaHRpbmdcbiAgICAgICAgICA8L0lubGluZUhlbHA+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSAxID8gPE1vc3RJbXBvcnRhbnRDaG9pY2UgLz4gOiA8U3dpbmdTZXRXZWlnaHRzIC8+fVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxTd2luZ0J1dHRvbnMgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2YgMlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IHtCb3gsIEdyaWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcgZnJvbSAnc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJRXhhY3RTd2luZ1JhdGlvIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUV4YWN0U3dpbmdSYXRpbyc7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhdGlvQm91bmRDb25zdHJhaW50IGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhdGlvQm91bmRDb25zdHJhaW50JztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCBNYXRjaGluZ0VsaWNpdGF0aW9uIGZyb20gJ3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nRWxpY2l0YXRpb24nO1xuaW1wb3J0IFByZWNpc2VTd2luZ1dlaWdodGluZyBmcm9tICdzcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nV2VpZ2h0aW5nJztcbmltcG9ydCBSYW5raW5nRWxpY2l0YXRpb24gZnJvbSAnc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nRWxpY2l0YXRpb24nO1xuaW1wb3J0IHtURWxpY2l0YXRpb25NZXRob2R9IGZyb20gJ3NyYy9UeXBlcy9URWxpY2l0YXRpb25NZXRob2QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudH0gZnJvbSAnLi4vRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWZlcmVuY2VFbGljaXRhdGlvbih7XG4gIGVsaWNpdGF0aW9uTWV0aG9kLFxuICBjcml0ZXJpYSxcbiAgcHZmcyxcbiAgc2hvd1BlcmNlbnRhZ2VzLFxuICBjYW5jZWxDYWxsYmFjayxcbiAgc2F2ZUNhbGxiYWNrXG59OiB7XG4gIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2Q7XG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW107XG4gIHB2ZnM6IFJlY29yZDxzdHJpbmcsIFRQdmY+O1xuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW47XG4gIGNhbmNlbENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBzYXZlQ2FsbGJhY2s6IChcbiAgICBwcmVmZXJlbmNlczogSUV4YWN0U3dpbmdSYXRpb1tdIHwgSVJhdGlvQm91bmRDb25zdHJhaW50W10gfCBJUmFua2luZ1tdXG4gICkgPT4gdm9pZDtcbn0pOiBKU1guRWxlbWVudCB7XG4gIGZ1bmN0aW9uIHJlbmRlckVsaWNpdGF0aW9uKFxuICAgIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2RcbiAgKTogSlNYLkVsZW1lbnQge1xuICAgIHN3aXRjaCAoZWxpY2l0YXRpb25NZXRob2QpIHtcbiAgICAgIGNhc2UgJ3ByZWNpc2UnOlxuICAgICAgICByZXR1cm4gPFByZWNpc2VTd2luZ1dlaWdodGluZyAvPjtcbiAgICAgIGNhc2UgJ2ltcHJlY2lzZSc6XG4gICAgICAgIHJldHVybiA8SW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcgLz47XG4gICAgICBjYXNlICdtYXRjaGluZyc6XG4gICAgICAgIHJldHVybiA8TWF0Y2hpbmdFbGljaXRhdGlvbiAvPjtcbiAgICAgIGNhc2UgJ3JhbmtpbmcnOlxuICAgICAgICByZXR1cm4gPFJhbmtpbmdFbGljaXRhdGlvbiAvPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudFxuICAgICAgY3JpdGVyaWE9e2NyaXRlcmlhfVxuICAgICAgZWxpY2l0YXRpb25NZXRob2Q9e2VsaWNpdGF0aW9uTWV0aG9kfVxuICAgICAgc2hvd1BlcmNlbnRhZ2VzPXtzaG93UGVyY2VudGFnZXN9XG4gICAgICBwdmZzPXtwdmZzfVxuICAgICAgY2FuY2VsQ2FsbGJhY2s9e2NhbmNlbENhbGxiYWNrfVxuICAgICAgc2F2ZUNhbGxiYWNrPXtzYXZlQ2FsbGJhY2t9XG4gICAgPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBjb21wb25lbnQ9e0JveH0gbXQ9ezJ9PlxuICAgICAgICB7cmVuZGVyRWxpY2l0YXRpb24oZWxpY2l0YXRpb25NZXRob2QpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvRWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQge1xuICBhc3NpZ25NaXNzaW5nUmFua2luZ3MsXG4gIGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzLFxuICBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rLFxuICBVTlJBTktFRFxufSBmcm9tICdzcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQnV0dG9ucyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWRcbn06IHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nO1xuICBzZXRTZWxlY3RlZENyaXRlcmlvbklkOiAoY3JpdGVyaW9uSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldFJhbmtpbmcsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgcmFua2luZ3MsXG4gICAgY3JpdGVyaWEsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIHNldFJhbmtpbmcoc2VsZWN0ZWRDcml0ZXJpb25JZCwgY3VycmVudFN0ZXApO1xuICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQoJycpO1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3QgZmluaXNoZWRSYW5raW5nczogUmVjb3JkPFxuICAgICAgc3RyaW5nLFxuICAgICAgSVJhbmtpbmdBbnN3ZXJcbiAgICA+ID0gYXNzaWduTWlzc2luZ1JhbmtpbmdzKFxuICAgICAgcmFua2luZ3MsXG4gICAgICBzZWxlY3RlZENyaXRlcmlvbklkLFxuICAgICAgY3VycmVudFN0ZXAsXG4gICAgICBjcml0ZXJpYVxuICAgICk7XG4gICAgY29uc3QgcHJlZmVyZW5jZXMgPSBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyhfLnRvQXJyYXkoZmluaXNoZWRSYW5raW5ncykpO1xuICAgIHNhdmVDYWxsYmFjayhwcmVmZXJlbmNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCkge1xuICAgIGlmIChjdXJyZW50U3RlcCAhPT0gMSkge1xuICAgICAgcmVtb3ZlUmFua0Zyb21Dcml0ZXJpb24oKTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZCgnJyk7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVJhbmtGcm9tQ3JpdGVyaW9uKCkge1xuICAgIGNvbnN0IGxvb2t1cFJhbmsgPSBjdXJyZW50U3RlcCAtIDE7XG4gICAgY29uc3QgY3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKGNyaXRlcmlhLCByYW5raW5ncywgbG9va3VwUmFuayk7XG4gICAgc2V0UmFua2luZyhjcml0ZXJpb25JZCwgVU5SQU5LRUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IF8uc2l6ZShjcml0ZXJpYSkgLSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgID5cbiAgICAgICAgQ2FuY2VsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJwcmV2aW91cy1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0NsaWNrfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7VU5SQU5LRUR9IGZyb20gJ3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uQ2hvaWNlIGZyb20gJy4uLy4uL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQ2hvaWNlcyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIGhhbmRsZVNlbGVjdGlvblxufToge1xuICBzZWxlY3RlZENyaXRlcmlvbklkOiBzdHJpbmc7XG4gIGhhbmRsZVNlbGVjdGlvbjogKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge3JhbmtpbmdzLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IGZpbHRlcmVkQ3JpdGVyaWEgPSBfLmZpbHRlcihcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgIXJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gfHwgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaW1wcm92ZW1lbnRzIGlzIG1vc3QgaW1wb3J0YW50P1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgbmFtZT1cInJhbmtpbmctY3JpdGVyaW9uLXJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge18ubWFwKGZpbHRlcmVkQ3JpdGVyaWEsIChjcml0ZXJpb24pID0+IChcbiAgICAgICAgICAgIDxDcml0ZXJpb25DaG9pY2Uga2V5PXtjcml0ZXJpb24uaWR9IGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge0lubGluZUhlbHB9IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBSYW5raW5nQnV0dG9ucyBmcm9tICcuL1JhbmtpbmdCdXR0b25zL1JhbmtpbmdCdXR0b25zJztcbmltcG9ydCBSYW5raW5nQ2hvaWNlcyBmcm9tICcuL1JhbmtpbmdDaG9pY2VzL1JhbmtpbmdDaG9pY2VzJztcbmltcG9ydCBSYW5raW5nU2l0dWF0aW9uIGZyb20gJy4vUmFua2luZ1NpdHVhdGlvbi9SYW5raW5nU2l0dWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFua2luZ0VsaWNpdGF0aW9uKCkge1xuICBjb25zdCBbc2VsZWN0ZWRDcml0ZXJpb25JZCwgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHtjdXJyZW50U3RlcCwgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCB0b3RhbFN0ZXBzID0gXy5zaXplKGNyaXRlcmlhKSAtIDE7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwicmFua2luZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICA8SW5saW5lSGVscCBoZWxwSWQ9XCJyYW5raW5nXCI+UmFua2luZzwvSW5saW5lSGVscD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFua2luZ1NpdHVhdGlvbiAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFua2luZ0Nob2ljZXNcbiAgICAgICAgICBoYW5kbGVTZWxlY3Rpb249e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgICBzZWxlY3RlZENyaXRlcmlvbklkPXtzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxSYW5raW5nQnV0dG9uc1xuICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQ9e3NlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZD17c2V0U2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2Yge3RvdGFsU3RlcHN9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtVTlJBTktFRH0gZnJvbSAnc3JjL1JhbmtpbmdVdGlsL1JhbmtpbmdVdGlsJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uU2l0dWF0aW9uIGZyb20gJy4uLy4uL0NyaXRlcmlvblNpdHVhdGlvbi9Dcml0ZXJpb25TaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nU2l0dWF0aW9uKCkge1xuICBjb25zdCB7cmFua2luZ3MsIHNob3dQZXJjZW50YWdlcywgcHZmcywgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZVRvRGlzcGxheShjcml0ZXJpb246IElDcml0ZXJpb24pIHtcbiAgICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICAgIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcbiAgICByZXR1cm4gIXJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gfHwgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICAgICAgPyBnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpXG4gICAgICA6IGdldEJlc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uU2l0dWF0aW9uXG4gICAgICAgICAga2V5PXtjcml0ZXJpb24uaWR9XG4gICAgICAgICAgY3JpdGVyaW9uPXtjcml0ZXJpb259XG4gICAgICAgICAgZGlzcGxheVZhbHVlPXtnZXRWYWx1ZVRvRGlzcGxheShjcml0ZXJpb24pfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5HaXZlbiB0aGUgZm9sbG93aW5nIHNpdHVhdGlvbjo8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtyZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5cbmV4cG9ydCBjb25zdCBVTlJBTktFRCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICByYW5rOiBudW1iZXJcbik6IHN0cmluZyB7XG4gIHJldHVybiBfLmZpbmQoXG4gICAgY3JpdGVyaWEsXG4gICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IGJvb2xlYW4gPT5cbiAgICAgIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gJiYgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSByYW5rXG4gICkuaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25NaXNzaW5nUmFua2luZ3MoXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgcmFuazogbnVtYmVyLFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdXG4pOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4ge1xuICBjb25zdCBpbnRlcm1lZGlhdGVSYW5raW5ncyA9IGFkZFJhbmtpbmcocmFua2luZ3MsIHNlbGVjdGVkQ3JpdGVyaW9uSWQsIHJhbmspO1xuICBjb25zdCBsYXN0Q3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRXaXRob3V0UmFua2luZyhcbiAgICBjcml0ZXJpYSxcbiAgICBpbnRlcm1lZGlhdGVSYW5raW5nc1xuICApO1xuICByZXR1cm4gYWRkUmFua2luZyhpbnRlcm1lZGlhdGVSYW5raW5ncywgbGFzdENyaXRlcmlvbklkLCByYW5rICsgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSYW5raW5nKFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICBjcml0ZXJpb25JZDogc3RyaW5nLFxuICByYW5rOiBudW1iZXJcbik6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPiB7XG4gIGxldCB1cGRhdGVkUmFua2luZ3MgPSBfLmNsb25lRGVlcChyYW5raW5ncyk7XG4gIGNvbnN0IG5ld1Jhbmtpbmc6IElSYW5raW5nQW5zd2VyID0ge1xuICAgIGNyaXRlcmlvbklkOiBjcml0ZXJpb25JZCxcbiAgICByYW5rOiByYW5rXG4gIH07XG4gIHVwZGF0ZWRSYW5raW5nc1tjcml0ZXJpb25JZF0gPSBuZXdSYW5raW5nO1xuICByZXR1cm4gdXBkYXRlZFJhbmtpbmdzO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3JpdGVyaW9uSWRXaXRob3V0UmFua2luZyhcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXSxcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPlxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIF8uZmluZChcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgcmFua2luZ3NbY3JpdGVyaW9uLmlkXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICkuaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyhhbnN3ZXJzOiBJUmFua2luZ0Fuc3dlcltdKTogSVJhbmtpbmdbXSB7XG4gIGNvbnN0IHNvcnRlZEFuc3dlcnM6IElSYW5raW5nQW5zd2VyW10gPSBfLnNvcnRCeShhbnN3ZXJzLCAncmFuaycpO1xuICByZXR1cm4gXy5yZWR1Y2UoXG4gICAgc29ydGVkQW5zd2VycyxcbiAgICAoYWNjdW06IElSYW5raW5nW10sIGFuc3dlcjogSVJhbmtpbmdBbnN3ZXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSBhbnN3ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgICAgfVxuICAgICAgY29uc3QgcmFua2luZzogSVJhbmtpbmcgPSB7XG4gICAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAncmFua2luZycsXG4gICAgICAgIHR5cGU6ICdvcmRpbmFsJyxcbiAgICAgICAgY3JpdGVyaWE6IFthbnN3ZXIuY3JpdGVyaW9uSWQsIHNvcnRlZEFuc3dlcnNbaWR4ICsgMV0uY3JpdGVyaW9uSWRdXG4gICAgICB9O1xuICAgICAgYWNjdW0ucHVzaChyYW5raW5nKTtcbiAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpbmdCdXR0b25zKCkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCkge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25DbGljaygpIHtcbiAgICBzYXZlQ2FsbGJhY2soT2JqZWN0LnZhbHVlcyhwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IDI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgID5cbiAgICAgICAgQ2FuY2VsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJwcmV2aW91cy1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0NsaWNrfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJbXByZWNpc2VTd2luZ1NsaWRlciBmcm9tICdzcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1NsaWRlci9JbXByZWNpc2VTd2luZ1NsaWRlcic7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IFByZWNpc2VTd2luZ1NsaWRlciBmcm9tICdzcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nU2xpZGVyL1ByZWNpc2VTd2luZ1NsaWRlcic7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZSwgZ2V0QmVzdCwgZ2V0VW5pdExhYmVsLCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyaXRlcmlvbk92ZXJ2aWV3KHtcbiAgY3JpdGVyaW9uXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbn0pIHtcbiAgY29uc3Qge3B2ZnMsIHNob3dQZXJjZW50YWdlcywgZWxpY2l0YXRpb25NZXRob2R9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcbiAgY29uc3QgdW5pdFR5cGUgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlclN3aW5nU2xpZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdwcmVjaXNlJykge1xuICAgICAgcmV0dXJuIDxQcmVjaXNlU3dpbmdTbGlkZXIgY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+O1xuICAgIH0gZWxzZSBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdpbXByZWNpc2UnKSB7XG4gICAgICByZXR1cm4gPEltcHJlY2lzZVN3aW5nU2xpZGVyIGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUYWJsZVJvdyBrZXk9e2NyaXRlcmlvbi5pZH0+XG4gICAgICA8VGFibGVDZWxsPlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNyaXRlcmlvbi10aXRsZVwiPntjcml0ZXJpb24udGl0bGV9PC9zcGFuPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgIHtnZXRVbml0TGFiZWwoXG4gICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgICApfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtnZXRCZXN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cmVuZGVyU3dpbmdTbGlkZXIoKX08L1RhYmxlQ2VsbD5cbiAgICA8L1RhYmxlUm93PlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgQ3JpdGVyaW9uT3ZlcnZpZXcgZnJvbSAnLi9Dcml0ZXJpb25PdmVydmlldy9Dcml0ZXJpb25PdmVydmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VGFibGUoKSB7XG4gIGNvbnN0IHtjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uT3ZlcnZpZXdzKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvbk92ZXJ2aWV3IGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XG4gICAgICA8VGFibGVIZWFkPlxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbD5Dcml0ZXJpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPlVuaXQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+V29yc3Q8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QmVzdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JbXBvcnRhbmNlPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlSGVhZD5cbiAgICAgIDxUYWJsZUJvZHk+e3JlbmRlckNyaXRlcmlvbk92ZXJ2aWV3cygpfTwvVGFibGVCb2R5PlxuICAgIDwvVGFibGU+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge2dldFN3aW5nU3RhdGVtZW50fSBmcm9tICdzcmMvU3dpbmdVdGlsL1N3aW5nVXRpbCc7XG5pbXBvcnQgT3ZlcnZpZXdUYWJsZSBmcm9tICcuL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aW5nU2V0V2VpZ2h0cygpIHtcbiAgY29uc3Qge1xuICAgIHB2ZnMsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICBnZXRDcml0ZXJpb25cbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBnZXRTd2luZ1N0YXRlbWVudChcbiAgICAgIGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpLFxuICAgICAgcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdLFxuICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGVtZW50KFxuICAgICAgZ2V0U3dpbmdTdGF0ZW1lbnQoXG4gICAgICAgIGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpLFxuICAgICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sXG4gICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgKVxuICAgICk7XG4gIH0sIFtzaG93UGVyY2VudGFnZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWRcbiAgICAgICAgaXRlbVxuICAgICAgICB4cz17MTJ9XG4gICAgICAgIGlkPXtgJHtlbGljaXRhdGlvbk1ldGhvZH0tc3dpbmctc3RhdGVtZW50YH1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN0YXRlbWVudH19XG4gICAgICAvPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8T3ZlcnZpZXdUYWJsZSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElFeGFjdFN3aW5nUmF0aW8gZnJvbSAnc3JjL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmF0aW9Cb3VuZENvbnN0cmFpbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2UsIGdldEJlc3QsIGdldFVuaXRMYWJlbCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFID1cbiAgXCJZb3UndmUgaW5kaWNhdGVkIHRoYXQgaW1wcm92aW5nICVjcml0ZXJpb24xJSBmcm9tICV3b3JzdDElICV1bml0MSUgdG8gJWJlc3QxJSAldW5pdDElIGlzIHRoZSBtb3N0IGltcG9ydGFudCAoaS5lLiBpdCBoYXMgMTAwJSBpbXBvcnRhbmNlKS4gTm93IGluZGljYXRlIHRoZSByZWxhdGl2ZSBpbXBvcnRhbmNlIChpbiAlKSB0byB0aGlzIGltcHJvdmVtZW50IG9mIGVhY2ggb3RoZXIgY3JpdGVyaW9uJ3MgaW1wcm92ZW1lbnQgdXNpbmcgdGhlIHNsaWRlcnMgYmVsb3cuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nXG4pOiBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5maWx0ZXIoXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgICBjcml0ZXJpb24uaWQgIT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICAgIClcbiAgICAubWFwKChjcml0ZXJpb246IElDcml0ZXJpb24pOiBbc3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvXSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uLmlkXSxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdwcmVjaXNlJyxcbiAgICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgICAgcmF0aW86IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gW2NyaXRlcmlvbi5pZCwgcHJlZmVyZW5jZV07XG4gICAgfSlcbiAgICAuZnJvbVBhaXJzKClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZ1xuKTogUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5yZWplY3QoWydpZCcsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pXG4gICAgLmtleUJ5KCdpZCcpXG4gICAgLm1hcFZhbHVlcyhcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPT4ge1xuICAgICAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICAgICAgYm91bmRzOiBbMSwgMTAwXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZTtcbiAgICAgIH1cbiAgICApXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTd2luZ1N0YXRlbWVudChcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uLFxuICBwdmY6IFRQdmYsXG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgY29uc3QgdW5pdCA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudDtcbiAgY29uc3QgbGFiZWwgPSBnZXRVbml0TGFiZWwodW5pdCwgc2hvd1BlcmNlbnRhZ2VzKTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdC50eXBlKTtcbiAgcmV0dXJuIERFRkFVTFRfUFJFQ0lTRV9URU1QTEFURS5yZXBsYWNlKC8lY3JpdGVyaW9uMSUvZ2ksIGNyaXRlcmlvbi50aXRsZSlcbiAgICAucmVwbGFjZSgvJXVuaXQxJS9naSwgbGFiZWwpXG4gICAgLnJlcGxhY2UoLyV3b3JzdDElL2dpLCBTdHJpbmcoZ2V0V29yc3QocHZmLCB1c2VQZXJjZW50YWdlKSkpXG4gICAgLnJlcGxhY2UoLyViZXN0MSUvZ2ksIFN0cmluZyhnZXRCZXN0KHB2ZiwgdXNlUGVyY2VudGFnZSkpKTtcbn1cbiIsImltcG9ydCBJVW5pdE9mTWVhc3VyZW1lbnQsIHtcbiAgVW5pdE9mTWVhc3VyZW1lbnRUeXBlXG59IGZyb20gJ3NyYy9JbnRlcmZhY2UvSVVuaXRPZk1lYXN1cmVtZW50JztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZTogVW5pdE9mTWVhc3VyZW1lbnRUeXBlKTogYm9vbGVhbiB7XG4gIHJldHVybiB1bml0VHlwZSA9PT0gJ3BlcmNlbnRhZ2UnIHx8IHVuaXRUeXBlID09PSAnZGVjaW1hbCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXN0KHB2ZjogVFB2ZiwgdXNlUGVyY2VudGFnZTogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IHZhbHVlID0gc2lnbmlmaWNhbnREaWdpdHMoXG4gICAgaXNJbmNyZWFzaW5nKHB2ZikgPyBwdmYucmFuZ2VbMV0gOiBwdmYucmFuZ2VbMF1cbiAgKTtcbiAgcmV0dXJuIGdldFBlcmNlbnRpZmllZFZhbHVlKHZhbHVlLCB1c2VQZXJjZW50YWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcnN0KHB2ZjogVFB2ZiwgdXNlUGVyY2VudGFnZTogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IHZhbHVlID0gc2lnbmlmaWNhbnREaWdpdHMoXG4gICAgaXNJbmNyZWFzaW5nKHB2ZikgPyBwdmYucmFuZ2VbMF0gOiBwdmYucmFuZ2VbMV1cbiAgKTtcbiAgcmV0dXJuIGdldFBlcmNlbnRpZmllZFZhbHVlKHZhbHVlLCB1c2VQZXJjZW50YWdlKTtcbn1cblxuZnVuY3Rpb24gaXNJbmNyZWFzaW5nKHB2ZjogVFB2Zik6IGJvb2xlYW4ge1xuICByZXR1cm4gcHZmLmRpcmVjdGlvbiA9PT0gJ2luY3JlYXNpbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWduaWZpY2FudERpZ2l0cyh4OiBudW1iZXIsIHByZWNpc2lvbj86IG51bWJlcikge1xuICBpZiAocHJlY2lzaW9uICE9PSAwICYmICFwcmVjaXNpb24pIHtcbiAgICBwcmVjaXNpb24gPSAzO1xuICB9XG4gIGlmICh4ID09PSB1bmRlZmluZWQgfHwgeCA9PT0gbnVsbCB8fCBpc05hTih4KSkge1xuICAgIHRocm93ICdhdHRlbXB0IHRvIGFwcGx5IHNpZ25pZmljYW50IGRpZ2l0cyB0byBub24tbnVtZXJpYyB2YWx1ZSc7XG4gIH0gZWxzZSBpZiAoeCA9PT0gMCkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2UgaWYgKHggPiAxIHx8IHggPCAtMSkge1xuICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh4LnRvRml4ZWQocHJlY2lzaW9uKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHgudG9QcmVjaXNpb24ocHJlY2lzaW9uKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcmNlbnRpZmllZFZhbHVlKFxuICB2YWx1ZTogbnVtYmVyLFxuICB1c2VQZXJjZW50YWdlOiBib29sZWFuXG4pOiBudW1iZXIge1xuICBpZiAodXNlUGVyY2VudGFnZSkge1xuICAgIHJldHVybiBzaWduaWZpY2FudERpZ2l0cyhzaWduaWZpY2FudERpZ2l0cyh2YWx1ZSkgKiAxMDApOyAvLzIgc2lnZGl0cyB0byBlbnN1cmUgdGhlIHByZWNpc2lvbiBzdGF5cyB0aGUgc2FtZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBzaWduaWZpY2FudERpZ2l0cyh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXRMYWJlbChcbiAgdW5pdDogSVVuaXRPZk1lYXN1cmVtZW50LFxuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIGlmIChzaG93UGVyY2VudGFnZXMgJiYgdW5pdC50eXBlID09PSAnZGVjaW1hbCcpIHtcbiAgICByZXR1cm4gJyUnO1xuICB9IGVsc2UgaWYgKCFzaG93UGVyY2VudGFnZXMgJiYgdW5pdC50eXBlID09PSAncGVyY2VudGFnZScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuaXQubGFiZWw7XG4gIH1cbn1cbiIsImltcG9ydCBQcmVmZXJlbmNlRWxpY2l0YXRpb24gZnJvbSAnLi9QcmVmZXJlbmNlRWxpY2l0YXRpb24vUHJlZmVyZW5jZUVsaWNpdGF0aW9uJztcblxuZXhwb3J0IHtQcmVmZXJlbmNlRWxpY2l0YXRpb259O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0JveF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9CdXR0b25fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uR3JvdXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfR3JpZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9QYXBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9Qb3BvdmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1JhZGlvX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1JhZGlvR3JvdXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfU2xpZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQm9keV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUNlbGxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVIZWFkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlUm93X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1Rvb2x0aXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVHlwb2dyYXBoeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sb2Rhc2hfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==