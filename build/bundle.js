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
        react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "primary", variant: "contained", onClick: cancel }, "Cancel"),
        react_1.default.createElement(Button_1.default, { id: "previous-button", onClick: handlePreviousClick, color: "secondary", variant: "contained", disabled: !previousCallback && currentStep === 1 }, "Previous"),
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
    }, [showPercentages]);
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
        react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "primary", variant: "contained", onClick: cancel }, "Cancel"),
        react_1.default.createElement(Button_1.default, { id: "previous-button", onClick: handlePreviousClick, color: "secondary", variant: "contained", disabled: !previousCallback && currentStep === 1 }, "Previous"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vbm9kZV9tb2R1bGVzL2hlbHAtcG9wdXAvYnVpbGQvYnVuZGxlLmpzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvQ3JpdGVyaW9uQ2hvaWNlL0NyaXRlcmlvbkNob2ljZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Dcml0ZXJpb25TaXR1YXRpb24vQ3JpdGVyaW9uU2l0dWF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1NsaWRlci9JbXByZWNpc2VTd2luZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdCdXR0b25zL01hdGNoaW5nQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ1NldEltcG9ydGFuY2UvTWF0Y2hpbmdTZXRJbXBvcnRhbmNlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2xpZGVyL01hdGNoaW5nU2xpZGVyLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nU2xpZGVyL1ByZWNpc2VTd2luZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdXZWlnaHRpbmcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlZmVyZW5jZUVsaWNpdGF0aW9uL1ByZWZlcmVuY2VFbGljaXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0J1dHRvbnMvUmFua2luZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdDaG9pY2VzL1JhbmtpbmdDaG9pY2VzLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdTaXR1YXRpb24vUmFua2luZ1NpdHVhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbC50cyIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL092ZXJ2aWV3VGFibGUvQ3JpdGVyaW9uT3ZlcnZpZXcvQ3JpdGVyaW9uT3ZlcnZpZXcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nVXRpbC9Td2luZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9VdGlsL3V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIixcInJvb3RcIjpcIl9cIn0iLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkEsZUFBZSxHQUFHLElBQWlELGtCQUFrQixtQkFBTyxDQUFDLG9EQUF1QixFQUFFLG1CQUFPLENBQUMsc0RBQXdCLEVBQUUsbUJBQU8sQ0FBQyw0REFBMkIsRUFBRSxtQkFBTyxDQUFDLGtFQUE4QixFQUFFLG1CQUFPLENBQUMsb0JBQU8sR0FBRyxLQUFLLGFBQWdqQixDQUFDLDJCQUEyQixZQUFZLGFBQWEsT0FBTyxvQkFBb0IsbUVBQW1FLDZDQUE2Qyw2QkFBNkIsYUFBYSxFQUFFLG1CQUFtQiw0QkFBNEIsZ0VBQWdFLG1DQUFtQyxzQkFBc0IsRUFBRSxlQUFlLFlBQVkseUNBQXlDLDRCQUE0QixTQUFTLDZGQUE2RixpQkFBaUIsc0NBQXNDLFNBQVMsc0RBQXNELGtCQUFrQixnQ0FBZ0MsMkNBQTJDLG1DQUFtQyxFQUFFLHVEQUF1RCxPQUFPLHdCQUF3QixrQkFBa0IsK0NBQStDLGNBQWMsS0FBSyxxQkFBcUIsbUVBQW1FLDZDQUE2Qyw2QkFBNkIsYUFBYSxFQUFFLG1CQUFtQiw0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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAbWF0ZXJpYWwtdWkvY29yZVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiLCBcInJlYWN0XCIsIFwibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibG9kYXNoXCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCJdLCByb290W1wicmVhY3RcIl0sIHJvb3RbXCJfXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9Cb3hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9CdXR0b25fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9CdXR0b25Hcm91cF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0dyaWRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9QYXBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BvcG92ZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9SYWRpb19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1JhZGlvR3JvdXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9TbGlkZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQm9keV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQ2VsbF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlSGVhZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlUm93X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVG9vbHRpcF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1R5cG9ncmFwaHlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fKSB7XG5yZXR1cm4gIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpLHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpLHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiLFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiLFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiLFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiLFwicmVhY3RcIl0sdCk7ZWxzZXt2YXIgcj1cIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz90KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIikscmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIikscmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIikscmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIikscmVxdWlyZShcInJlYWN0XCIpKTp0KGVbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIl0sZVtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sZVtcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIl0sZVtcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIl0sZS5yZWFjdCk7Zm9yKHZhciBuIGluIHIpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbbl09cltuXX19KHNlbGYsKGZ1bmN0aW9uKGUsdCxyLG4sbyl7cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9ezI5OTpmdW5jdGlvbihlLHQscil7dmFyIG49dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPXIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4se2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbcl19fSl9OmZ1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPXIpLGVbbl09dFtyXX0pLG89dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pfTpmdW5jdGlvbihlLHQpe2UuZGVmYXVsdD10fSksaT10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciByIGluIGUpXCJkZWZhdWx0XCIhPT1yJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmbih0LGUscik7cmV0dXJuIG8odCxlKSx0fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkhlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnQ9dC5IZWxwQ29udGV4dD12b2lkIDA7Y29uc3QgYT1pKHIoMjk3KSk7dC5IZWxwQ29udGV4dD1hLmNyZWF0ZUNvbnRleHQoe30pLHQuSGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudD1mdW5jdGlvbih7aG9zdDplLHBhdGg6cixsZXhpY29uOm4sY2hpbGRyZW46b30pe3JldHVybiBhLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0LkhlbHBDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTp7Z2V0SGVscEluZm86ZnVuY3Rpb24oZSl7cmV0dXJuIG5bZV0/bltlXTp7dGl0bGU6XCJ1bmtub3duXCIsbGluazpcInVua25vd25cIix0ZXh0OlwidW5rbm93blwifX0sYmFzZVVybDplK3J9fSxvKX19LDI0NDpmdW5jdGlvbihlLHQscil7dmFyIG49dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPXIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4se2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbcl19fSl9OmZ1bmN0aW9uKGUsdCxyLG4pe3ZvaWQgMD09PW4mJihuPXIpLGVbbl09dFtyXX0pLG89dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pfTpmdW5jdGlvbihlLHQpe2UuZGVmYXVsdD10fSksaT10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciByIGluIGUpXCJkZWZhdWx0XCIhPT1yJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmbih0LGUscik7cmV0dXJuIG8odCxlKSx0fSxhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IHU9YShyKDY1OCkpLGw9YShyKDcyMCkpLGM9YShyKDI4MCkpLGY9YShyKDc0MCkpLHA9aShyKDI5NykpLGQ9cigyOTkpO3QuZGVmYXVsdD1mdW5jdGlvbih7aGVscElkOmUsY2hpbGRyZW46dH0pe2NvbnN0W3Isbl09cC51c2VTdGF0ZSgpLFtvLGldPXAudXNlU3RhdGUoKSxbYSxzXT1wLnVzZVN0YXRlKCksW20seF09cC51c2VTdGF0ZShudWxsKSx7Z2V0SGVscEluZm86aCxiYXNlVXJsOnZ9PXAudXNlQ29udGV4dChkLkhlbHBDb250ZXh0KTtyZXR1cm4gcC51c2VFZmZlY3QoKCgpPT57Y29uc3R7dGl0bGU6dCx0ZXh0OnIsbGluazpvfT1oKGUpO24odCksaShyKSxzKHYrbyl9KSkscC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocC5kZWZhdWx0LkZyYWdtZW50LG51bGwscC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse29uQ2xpY2s6ZnVuY3Rpb24oZSl7eChlLmN1cnJlbnRUYXJnZXQpfSxzdHlsZTp7dGV4dERlY29yYXRpb246XCJ1bmRlcmxpbmVcIix0ZXh0RGVjb3JhdGlvblN0eWxlOlwiZGFzaGVkXCIsY3Vyc29yOlwiaGVscFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19LHQpLHAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGMuZGVmYXVsdCx7b3BlbjohIW0sb25DbG9zZTpmdW5jdGlvbigpe3gobnVsbCl9LGFuY2hvck9yaWdpbjp7dmVydGljYWw6XCJjZW50ZXJcIixob3Jpem9udGFsOlwiY2VudGVyXCJ9LHRyYW5zZm9ybU9yaWdpbjp7dmVydGljYWw6XCJ0b3BcIixob3Jpem9udGFsOlwiY2VudGVyXCJ9LGFuY2hvckVsOm19LHAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGwuZGVmYXVsdCx7Y29udGFpbmVyOiEwLGNvbXBvbmVudDp1LmRlZmF1bHQscDoyLG1heFdpZHRoOlwiMzAwcHhcIn0scC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobC5kZWZhdWx0LHtpdGVtOiEwLHhzOjEyLHN0eWxlOnttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fSxwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChmLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNVwifSxyKSkscC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobC5kZWZhdWx0LHtpdGVtOiEwLHhzOjEyfSxvKSxwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChsLmRlZmF1bHQse2l0ZW06ITAseHM6MTJ9LHAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOmEsdGFyZ2V0OlwiX2JsYW5rXCJ9LFwiVmlldyBpbiBtYW51YWxcIikpKSkpfX0sNjA3OmZ1bmN0aW9uKGUsdCxyKXt2YXIgbj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LklubGluZUhlbHA9dC5IZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50PXZvaWQgMDtjb25zdCBvPXIoMjk5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIkhlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gby5IZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50fX0pO2NvbnN0IGk9bihyKDI0NCkpO3QuSW5saW5lSGVscD1pLmRlZmF1bHR9LDY1ODp0PT57dC5leHBvcnRzPWV9LDcyMDplPT57ZS5leHBvcnRzPXR9LDI4MDplPT57ZS5leHBvcnRzPXJ9LDc0MDplPT57ZS5leHBvcnRzPW59LDI5NzplPT57ZS5leHBvcnRzPW99fSxhPXt9O3JldHVybiBmdW5jdGlvbiBlKHQpe2lmKGFbdF0pcmV0dXJuIGFbdF0uZXhwb3J0czt2YXIgcj1hW3RdPXtleHBvcnRzOnt9fTtyZXR1cm4gaVt0XS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxlKSxyLmV4cG9ydHN9KDYwNyl9KSgpfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5b1pXeHdMWEJ2Y0hWd0wzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OW9aV3h3TFhCdmNIVndMeTR2YzNKakwwaGxiSEJEYjI1MFpYaDBMMGhsYkhCRGIyNTBaWGgwTG5SemVDSXNJbmRsWW5CaFkyczZMeTlvWld4d0xYQnZjSFZ3THk0dmMzSmpMMGx1YkdsdVpVaGxiSEF2U1c1c2FXNWxTR1ZzY0M1MGMzZ2lMQ0ozWldKd1lXTnJPaTh2YUdWc2NDMXdiM0IxY0M4dUwzTnlZeTlwYm1SbGVDNTBjeUlzSW5kbFluQmhZMnM2THk5b1pXeHdMWEJ2Y0hWd0wyVjRkR1Z5Ym1Gc0lGd2lRRzFoZEdWeWFXRnNMWFZwTDJOdmNtVXZRbTk0WENJaUxDSjNaV0p3WVdOck9pOHZhR1ZzY0Mxd2IzQjFjQzlsZUhSbGNtNWhiQ0JjSWtCdFlYUmxjbWxoYkMxMWFTOWpiM0psTDBkeWFXUmNJaUlzSW5kbFluQmhZMnM2THk5b1pXeHdMWEJ2Y0hWd0wyVjRkR1Z5Ym1Gc0lGd2lRRzFoZEdWeWFXRnNMWFZwTDJOdmNtVXZVRzl3YjNabGNsd2lJaXdpZDJWaWNHRmphem92TDJobGJIQXRjRzl3ZFhBdlpYaDBaWEp1WVd3Z1hDSkFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOVVlWEJ2WjNKaGNHaDVYQ0lpTENKM1pXSndZV05yT2k4dmFHVnNjQzF3YjNCMWNDOWxlSFJsY201aGJDQmNJbkpsWVdOMFhDSWlMQ0ozWldKd1lXTnJPaTh2YUdWc2NDMXdiM0IxY0M5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NJc0luZGxZbkJoWTJzNkx5OW9aV3h3TFhCdmNIVndMM2RsWW5CaFkyc3ZjM1JoY25SMWNDSmRMQ0p1WVcxbGN5STZXeUp5YjI5MElpd2labUZqZEc5eWVTSXNJbVY0Y0c5eWRITWlMQ0p0YjJSMWJHVWlMQ0p5WlhGMWFYSmxJaXdpWkdWbWFXNWxJaXdpWVcxa0lpd2lZU0lzSW1raUxDSnpaV3htSWl3aVgxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5Zk5qVTRYMThpTENKZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDE4M01qQmZYeUlzSWw5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWHpJNE1GOWZJaXdpWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTnpRd1gxOGlMQ0pmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMTh5T1RkZlh5SXNJa2hsYkhCRGIyNTBaWGgwSWl3aVkzSmxZWFJsUTI5dWRHVjRkQ0lzSW1odmMzUWlMQ0p3WVhSb0lpd2liR1Y0YVdOdmJpSXNJbU5vYVd4a2NtVnVJaXdpVUhKdmRtbGtaWElpTENKMllXeDFaU0lzSW1kbGRFaGxiSEJKYm1adklpd2lhV1FpTENKMGFYUnNaU0lzSW14cGJtc2lMQ0owWlhoMElpd2lZbUZ6WlZWeWJDSXNJbWhsYkhCSlpDSXNJbk5sZEZScGRHeGxJaXdpZFhObFUzUmhkR1VpTENKelpYUlVaWGgwSWl3aWMyVjBUR2x1YXlJc0ltRnVZMmh2Y2tWc0lpd2ljMlYwUVc1amFHOXlSV3dpTENKMWMyVkRiMjUwWlhoMElpd2lkWE5sUldabVpXTjBJaXdpYjI1RGJHbGpheUlzSW1WMlpXNTBJaXdpWTNWeWNtVnVkRlJoY21kbGRDSXNJbk4wZVd4bElpd2lkR1Y0ZEVSbFkyOXlZWFJwYjI0aUxDSjBaWGgwUkdWamIzSmhkR2x2YmxOMGVXeGxJaXdpWTNWeWMyOXlJaXdpWVd4cFoyNUpkR1Z0Y3lJc0ltOXdaVzRpTENKdmJrTnNiM05sSWl3aVlXNWphRzl5VDNKcFoybHVJaXdpZG1WeWRHbGpZV3dpTENKb2IzSnBlbTl1ZEdGc0lpd2lkSEpoYm5ObWIzSnRUM0pwWjJsdUlpd2lZMjl1ZEdGcGJtVnlJaXdpWTI5dGNHOXVaVzUwSWl3aWNDSXNJbTFoZUZkcFpIUm9JaXdpYVhSbGJTSXNJbmh6SWl3aWJXRnlaMmx1UW05MGRHOXRJaXdpZG1GeWFXRnVkQ0lzSW1oeVpXWWlMQ0owWVhKblpYUWlMQ0pJWld4d1EyOXVkR1Y0ZEZCeWIzWnBaR1Z5UTI5dGNHOXVaVzUwSWl3aVNXNXNhVzVsU0dWc2NDSXNJbDlmZDJWaWNHRmphMTl0YjJSMWJHVmZZMkZqYUdWZlh5SXNJbDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThpTENKdGIyUjFiR1ZKWkNJc0lsOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOGlMQ0pqWVd4c0lsMHNJbTFoY0hCcGJtZHpJam9pUTBGQlFTeFRRVUV5UTBFc1JVRkJUVU1zUjBGRGFFUXNSMEZCYzBJc2FVSkJRVnBETEZOQlFUQkRMR2xDUVVGWVF5eFBRVU40UTBFc1QwRkJUMFFzVVVGQlZVUXNSVUZCVVVjc1VVRkJVU3g1UWtGQk1FSkJMRkZCUVZFc01FSkJRVEpDUVN4UlFVRlJMRFpDUVVFNFFrRXNVVUZCVVN4blEwRkJhVU5CTEZGQlFWRXNaVUZEYWt3c1IwRkJjVUlzYlVKQlFWaERMRkZCUVhsQ1FTeFBRVUZQUXl4SlFVTTVRMFFzVDBGQlR5eERRVUZETEhkQ1FVRjVRaXg1UWtGQk1FSXNORUpCUVRaQ0xDdENRVUZuUXl4VFFVRlZTaXhQUVVNNVNDeERRVU5LTEVsQlFVbE5MRVZCUVhWQ0xHbENRVUZhVEN4UlFVRjFRa1FzUlVGQlVVY3NVVUZCVVN4NVFrRkJNRUpCTEZGQlFWRXNNRUpCUVRKQ1FTeFJRVUZSTERaQ1FVRTRRa0VzVVVGQlVTeG5RMEZCYVVOQkxGRkJRVkVzVlVGQldVZ3NSVUZCVVVRc1JVRkJTeXg1UWtGQk1FSkJMRVZCUVVzc01FSkJRVEpDUVN4RlFVRkxMRFpDUVVFNFFrRXNSVUZCU3l4blEwRkJhVU5CTEVWQlFWa3NUMEZEYkZnc1NVRkJTU3hKUVVGSlVTeExRVUZMUkN4SFFVRjFRaXhwUWtGQldrd3NVVUZCZFVKQkxGRkJRVlZHTEVkQlFVMVJMRWRCUVV0RUxFVkJRVVZETEVsQlVIaEZMRU5CVTBkRExFMUJRVTBzVTBGQlUwTXNSVUZCYTBORExFVkJRV3REUXl4RlFVRnJRME1zUlVGQmEwTkRMRWRCUXpGS0xFMHNaM0pDUTFaQkxHdENRVWxoTEVWQlFVRkRMRmxCUVdNc1JVRkJRVU1zWTBGQk5FSXNTVUZGZGtRc2VVTkJRVFpETEV0QlF6TkRReXhGUVVGSkxFdEJRMHBETEVWQlFVa3NVVUZEU2tNc1JVRkJUeXhUUVVOUVF5eEpRV1ZCTEU5QlEwVXNkMEpCUVVNc1JVRkJRVXdzV1VGQldVMHNVMEZCVVN4RFFVRkRReXhOUVVGUExFTkJRVU5ETEZsQlZHaERMRk5CUVhGQ1F5eEhRVU51UWl4UFFVRkpUQ3hGUVVGUlN5eEhRVU5JVEN4RlFVRlJTeXhIUVVWU0xFTkJRVU5ETEUxQlFVOHNWVUZCVjBNc1MwRkJUU3hWUVVGWFF5eExRVUZOTEZsQlMxSkRMRkZCUVZOWUxFVkJRVTlETEVsQlEzaEVSU3hMTEd0eVFrTXpRbEFzYTBKQlEwRXNXVUZEUVN4WlFVVkJMRmxCUTBFc1dVRkRRU3hUUVVWQkxHOUNRVUZ0UXl4UFFVTnFRMU1zUlVGQlRTeFRRVU5PVkN4SlFVdEJMRTFCUVU5TExFVkJRVTlMTEVkQlFWa3NSVUZCUVVNc1dVRkRia0pLTEVWQlFVMUxMRWRCUVZjc1JVRkJRVVFzV1VGRGFrSk1MRVZCUVUxUExFZEJRVmNzUlVGQlFVWXNXVUZEYWtKSExFVkJRVlZETEVkQlFXVXNSVUZCUVVvc1UwRkJiVU1zVDBGRk4wUXNXVUZCUTFJc1JVRkJWeXhSUVVGRlN5eEhRVUZYTEVWQlFVRlJMRmRCUVZjc1JVRkJRWEpDTEdGQmQwSXhReXhQUVhSQ1FTeEZRVUZCYzBJc1YwRkJWU3hMUVVOU0xFMUJRVTBzVFVGQlExb3NSVUZCU3l4TFFVRkZSU3hGUVVGSkxFdEJRVVZFTEVkQlFWRklMRVZCUVZsTkxFZEJRM2hEUXl4RlFVRlRUQ3hIUVVOVVR5eEZRVUZSVEN4SFFVTlNUU3hGUVVGUlRDeEZRVUZWUml4TlFXMUNiRUlzWjBSQlEwVXNaME5CUVUxWkxGRkJha0pXTEZOQlFYRkNReXhIUVVOdVFrb3NSVUZCV1Vrc1JVRkJUVU1zWjBKQlowSlpReXhOUVZSSUxFTkJRek5DUXl4bFFVRm5RaXhaUVVOb1FrTXNiMEpCUVhGQ0xGTkJRM0pDUXl4UFFVRlJMRTlCUTFKRExGZEJRVmtzVjBGTlVIcENMRWRCUlVnc2QwSkJRVU1zVlVGQlR5eERRVU5PTUVJc1QwRkJVVm9zUlVGRFVtRXNVVUZzUWs0c1YwRkRSVm9zUlVGQldTeFBRV3RDVW1Fc1lVRkJZeXhEUVVGRFF5eFRRVUZWTEZOQlFWVkRMRmRCUVZrc1ZVRkRMME5ETEdkQ1FVRnBRaXhEUVVObVJpeFRRVUZWTEUxQlExWkRMRmRCUVZrc1ZVRkZaR2hDTEZOQlFWVkJMRWRCUlZZc2QwSkJRVU1zVlVGQlNTeERRVUZEYTBJc1YwRkJVeXhGUVVGRFF5eFZRVUZYTEZWQlFVdERMRVZCUVVjc1JVRkJSME1zVTBGQlV5eFRRVU0zUXl4M1FrRkJReXhWUVVGSkxFTkJRVU5ETEUxQlFVa3NSVUZCUTBNc1IwRkJTU3hIUVVGSmFFSXNUVUZCVHl4RFFVRkRhVUlzWVVGQll5eFRRVU4yUXl4M1FrRkJReXhWUVVGVkxFTkJRVU5ETEZGQlFWRXNUVUZCVFd4RExFbEJSVFZDTEhkQ1FVRkRMRlZCUVVrc1EwRkJReXRDTEUxQlFVa3NSVUZCUTBNc1IwRkJTU3hKUVVOYU9VSXNSMEZGU0N4M1FrRkJReXhWUVVGSkxFTkJRVU0yUWl4TlFVRkpMRVZCUVVORExFZEJRVWtzU1VGRFlpdzJRa0ZCUjBjc1MwRkJUV3hETEVWQlFVMXRReXhQUVVGUExGVkJRVkVzZDBJc05FMURia1V4UXl4bFFVbFJMRFJHUVVwQkxFVkJRVUZETEdkRFFVTlNMR3RDUVVkelF5eEZRVUZCUXl4WFFVZ3ZRaXhYTEZGRFJGQTFSQ3hGUVVGUFJDeFJRVUZWVVN4SExGRkRRV3BDVUN4RlFVRlBSQ3hSUVVGVlV5eEhMRkZEUVdwQ1VpeEZRVUZQUkN4UlFVRlZWU3hITEZGRFFXcENWQ3hGUVVGUFJDeFJRVUZWVnl4SExGRkRRV3BDVml4RlFVRlBSQ3hSUVVGVldTeEpRME5pYTBRc1JVRkJNa0lzUnl4UFFVY3ZRaXhUUVVGVFF5eEZRVUZ2UWtNc1IwRkZOVUlzUjBGQlIwWXNSVUZCZVVKRkxFZEJRek5DTEU5QlFVOUdMRVZCUVhsQ1JTeEhRVUZWYUVVc1VVRkhNME1zU1VGQlNVTXNSVUZCVXpaRUxFVkJRWGxDUlN4SFFVRlpMRU5CUjJwRWFFVXNVVUZCVXl4SlFVOVdMRTlCU0VGcFJTeEZRVUZ2UWtRc1IwRkJWVVVzUzBGQlMycEZMRVZCUVU5RUxGRkJRVk5ETEVWQlFWRkJMRVZCUVU5RUxGRkJRVk1yUkN4SFFVZHdSVGxFTEVWQlFVOUVMRkZEYWtKWEswUXNRMEZCYjBJc1RTSXNJbVpwYkdVaU9pSmlkVzVrYkdVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKQWJXRjBaWEpwWVd3dGRXa3ZZMjl5WlM5Q2IzaGNJaWtzSUhKbGNYVnBjbVVvWENKQWJXRjBaWEpwWVd3dGRXa3ZZMjl5WlM5SGNtbGtYQ0lwTENCeVpYRjFhWEpsS0Z3aVFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlVHOXdiM1psY2x3aUtTd2djbVZ4ZFdseVpTaGNJa0J0WVhSbGNtbGhiQzExYVM5amIzSmxMMVI1Y0c5bmNtRndhSGxjSWlrc0lISmxjWFZwY21Vb1hDSnlaV0ZqZEZ3aUtTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhDSkFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOUNiM2hjSWl3Z1hDSkFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOUhjbWxrWENJc0lGd2lRRzFoZEdWeWFXRnNMWFZwTDJOdmNtVXZVRzl3YjNabGNsd2lMQ0JjSWtCdFlYUmxjbWxoYkMxMWFTOWpiM0psTDFSNWNHOW5jbUZ3YUhsY0lpd2dYQ0p5WldGamRGd2lYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnZTF4dVhIUmNkSFpoY2lCaElEMGdkSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JRDhnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpUUcxaGRHVnlhV0ZzTFhWcEwyTnZjbVV2UW05NFhDSXBMQ0J5WlhGMWFYSmxLRndpUUcxaGRHVnlhV0ZzTFhWcEwyTnZjbVV2UjNKcFpGd2lLU3dnY21WeGRXbHlaU2hjSWtCdFlYUmxjbWxoYkMxMWFTOWpiM0psTDFCdmNHOTJaWEpjSWlrc0lISmxjWFZwY21Vb1hDSkFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOVVlWEJ2WjNKaGNHaDVYQ0lwTENCeVpYRjFhWEpsS0Z3aWNtVmhZM1JjSWlrcElEb2dabUZqZEc5eWVTaHliMjkwVzF3aVFHMWhkR1Z5YVdGc0xYVnBMMk52Y21VdlFtOTRYQ0pkTENCeWIyOTBXMXdpUUcxaGRHVnlhV0ZzTFhWcEwyTnZjbVV2UjNKcFpGd2lYU3dnY205dmRGdGNJa0J0WVhSbGNtbGhiQzExYVM5amIzSmxMMUJ2Y0c5MlpYSmNJbDBzSUhKdmIzUmJYQ0pBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlVZVhCdlozSmhjR2g1WENKZExDQnliMjkwVzF3aWNtVmhZM1JjSWwwcE8xeHVYSFJjZEdadmNpaDJZWElnYVNCcGJpQmhLU0FvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUQ4Z1pYaHdiM0owY3lBNklISnZiM1FwVzJsZElEMGdZVnRwWFR0Y2JseDBmVnh1ZlNrb2MyVnNaaXdnWm5WdVkzUnBiMjRvWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTmpVNFgxOHNJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZYemN5TUY5ZkxDQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgxOHlPREJmWHl3Z1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5Zk56UXdYMThzSUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWHpJNU4xOWZLU0I3WEc1eVpYUjFjbTRnSWl3aWFXMXdiM0owSUZKbFlXTjBMQ0I3WTNKbFlYUmxRMjl1ZEdWNGRIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUVsSVpXeHdRMjl1ZEdWNGRDQm1jbTl0SUNjdUxpOUpiblJsY21aaFkyVnpMMGxJWld4d1EyOXVkR1Y0ZENjN1hHNXBiWEJ2Y25RZ1NVaGxiSEJKYm1adklHWnliMjBnSnk0dUwwbHVkR1Z5Wm1GalpYTXZTVWhsYkhCSmJtWnZKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRWhsYkhCRGIyNTBaWGgwSUQwZ1kzSmxZWFJsUTI5dWRHVjRkRHhKU0dWc2NFTnZiblJsZUhRK0tIdDlJR0Z6SUVsSVpXeHdRMjl1ZEdWNGRDazdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJJWld4d1EyOXVkR1Y0ZEZCeWIzWnBaR1Z5UTI5dGNHOXVaVzUwS0h0Y2JpQWdhRzl6ZEN4Y2JpQWdjR0YwYUN4Y2JpQWdiR1Y0YVdOdmJpeGNiaUFnWTJocGJHUnlaVzVjYm4wNklIdGNiaUFnYUc5emREb2djM1J5YVc1bk8xeHVJQ0J3WVhSb09pQnpkSEpwYm1jN1hHNGdJR3hsZUdsamIyNDZJRkpsWTI5eVpEeHpkSEpwYm1jc0lFbElaV3h3U1c1bWJ6NDdYRzRnSUdOb2FXeGtjbVZ1T2lCaGJuazdYRzU5S1NCN1hHNGdJR1oxYm1OMGFXOXVJR2RsZEVobGJIQkpibVp2S0dsa09pQnpkSEpwYm1jcE9pQkpTR1ZzY0VsdVptOGdlMXh1SUNBZ0lHbG1JQ2hzWlhocFkyOXVXMmxrWFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUd4bGVHbGpiMjViYVdSZE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdlM1JwZEd4bE9pQW5kVzVyYm05M2JpY3NJR3hwYm1zNklDZDFibXR1YjNkdUp5d2dkR1Y0ZERvZ0ozVnVhMjV2ZDI0bmZUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4SVpXeHdRMjl1ZEdWNGRDNVFjbTkyYVdSbGNpQjJZV3gxWlQxN2UyZGxkRWhsYkhCSmJtWnZMQ0JpWVhObFZYSnNPaUJvYjNOMElDc2djR0YwYUgxOVBseHVJQ0FnSUNBZ2UyTm9hV3hrY21WdWZWeHVJQ0FnSUR3dlNHVnNjRU52Ym5SbGVIUXVVSEp2ZG1sa1pYSStYRzRnSUNrN1hHNTlYRzRpTENKcGJYQnZjblFnUW05NElHWnliMjBnSjBCdFlYUmxjbWxoYkMxMWFTOWpiM0psTDBKdmVDYzdYRzVwYlhCdmNuUWdSM0pwWkNCbWNtOXRJQ2RBYldGMFpYSnBZV3d0ZFdrdlkyOXlaUzlIY21sa0p6dGNibWx0Y0c5eWRDQlFiM0J2ZG1WeUlHWnliMjBnSjBCdFlYUmxjbWxoYkMxMWFTOWpiM0psTDFCdmNHOTJaWEluTzF4dWFXMXdiM0owSUh0RFUxTlFjbTl3WlhKMGFXVnpmU0JtY205dElDZEFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOXpkSGxzWlhNdmQybDBhRk4wZVd4bGN5YzdYRzVwYlhCdmNuUWdWSGx3YjJkeVlYQm9lU0JtY205dElDZEFiV0YwWlhKcFlXd3RkV2t2WTI5eVpTOVVlWEJ2WjNKaGNHaDVKenRjYm1sdGNHOXlkQ0JTWldGamRDd2dlMDF2ZFhObFJYWmxiblFzSUhWelpVTnZiblJsZUhRc0lIVnpaVVZtWm1WamRDd2dkWE5sVTNSaGRHVjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN1NHVnNjRU52Ym5SbGVIUjlJR1p5YjIwZ0p5NHVMMGhsYkhCRGIyNTBaWGgwTDBobGJIQkRiMjUwWlhoMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdTVzVzYVc1bFNHVnNjQ2g3WEc0Z0lHaGxiSEJKWkN4Y2JpQWdZMmhwYkdSeVpXNWNibjA2SUh0Y2JpQWdhR1ZzY0Vsa09pQnpkSEpwYm1jN1hHNGdJR05vYVd4a2NtVnVPaUJoYm5rN1hHNTlLU0I3WEc0Z0lHTnZibk4wSUZ0MGFYUnNaU3dnYzJWMFZHbDBiR1ZkSUQwZ2RYTmxVM1JoZEdVOGMzUnlhVzVuUGlncE8xeHVJQ0JqYjI1emRDQmJkR1Y0ZEN3Z2MyVjBWR1Y0ZEYwZ1BTQjFjMlZUZEdGMFpUeHpkSEpwYm1jK0tDazdYRzRnSUdOdmJuTjBJRnRzYVc1ckxDQnpaWFJNYVc1clhTQTlJSFZ6WlZOMFlYUmxQSE4wY21sdVp6NG9LVHRjYmlBZ1kyOXVjM1FnVzJGdVkyaHZja1ZzTENCelpYUkJibU5vYjNKRmJGMGdQU0IxYzJWVGRHRjBaVHhJVkUxTVFuVjBkRzl1Uld4bGJXVnVkQ0I4SUc1MWJHdytLRzUxYkd3cE8xeHVYRzRnSUdOdmJuTjBJSHRuWlhSSVpXeHdTVzVtYnl3Z1ltRnpaVlZ5YkgwZ1BTQjFjMlZEYjI1MFpYaDBLRWhsYkhCRGIyNTBaWGgwS1R0Y2JseHVJQ0IxYzJWRlptWmxZM1FvS0NrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUh0MGFYUnNaU3dnZEdWNGRDd2diR2x1YTMwZ1BTQm5aWFJJWld4d1NXNW1ieWhvWld4d1NXUXBPMXh1SUNBZ0lITmxkRlJwZEd4bEtIUnBkR3hsS1R0Y2JpQWdJQ0J6WlhSVVpYaDBLSFJsZUhRcE8xeHVJQ0FnSUhObGRFeHBibXNvWW1GelpWVnliQ0FySUd4cGJtc3BPMXh1SUNCOUtUdGNibHh1SUNCbWRXNWpkR2x2YmlCdmNHVnVVRzl3YjNabGNpaGxkbVZ1ZERvZ1RXOTFjMlZGZG1WdWREeElWRTFNUW5WMGRHOXVSV3hsYldWdWRENHBJSHRjYmlBZ0lDQnpaWFJCYm1Ob2IzSkZiQ2hsZG1WdWRDNWpkWEp5Wlc1MFZHRnlaMlYwS1R0Y2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlHTnNiM05sVUc5d2IzWmxjaWdwSUh0Y2JpQWdJQ0J6WlhSQmJtTm9iM0pGYkNodWRXeHNLVHRjYmlBZ2ZWeHVYRzRnSUdOdmJuTjBJSE4wZVd4bE9pQkRVMU5RY205d1pYSjBhV1Z6SUQwZ2UxeHVJQ0FnSUhSbGVIUkVaV052Y21GMGFXOXVPaUFuZFc1a1pYSnNhVzVsSnl4Y2JpQWdJQ0IwWlhoMFJHVmpiM0poZEdsdmJsTjBlV3hsT2lBblpHRnphR1ZrSnl4Y2JpQWdJQ0JqZFhKemIzSTZJQ2RvWld4d0p5eGNiaUFnSUNCaGJHbG5ia2wwWlcxek9pQW5ZMlZ1ZEdWeUoxeHVJQ0I5TzF4dVhHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BENWNiaUFnSUNBZ0lEeHpjR0Z1SUc5dVEyeHBZMnM5ZTI5d1pXNVFiM0J2ZG1WeWZTQnpkSGxzWlQxN2MzUjViR1Y5UGx4dUlDQWdJQ0FnSUNCN1kyaHBiR1J5Wlc1OVhHNGdJQ0FnSUNBOEwzTndZVzQrWEc0Z0lDQWdJQ0E4VUc5d2IzWmxjbHh1SUNBZ0lDQWdJQ0J2Y0dWdVBYc2hJV0Z1WTJodmNrVnNmVnh1SUNBZ0lDQWdJQ0J2YmtOc2IzTmxQWHRqYkc5elpWQnZjRzkyWlhKOVhHNGdJQ0FnSUNBZ0lHRnVZMmh2Y2s5eWFXZHBiajE3ZTNabGNuUnBZMkZzT2lBblkyVnVkR1Z5Snl3Z2FHOXlhWHB2Ym5SaGJEb2dKMk5sYm5SbGNpZDlmVnh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTFQY21sbmFXNDllM3RjYmlBZ0lDQWdJQ0FnSUNCMlpYSjBhV05oYkRvZ0ozUnZjQ2NzWEc0Z0lDQWdJQ0FnSUNBZ2FHOXlhWHB2Ym5SaGJEb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdmWDFjYmlBZ0lDQWdJQ0FnWVc1amFHOXlSV3c5ZTJGdVkyaHZja1ZzZlZ4dUlDQWdJQ0FnUGx4dUlDQWdJQ0FnSUNBOFIzSnBaQ0JqYjI1MFlXbHVaWElnWTI5dGNHOXVaVzUwUFh0Q2IzaDlJSEE5ZXpKOUlHMWhlRmRwWkhSb1BWd2lNekF3Y0hoY0lqNWNiaUFnSUNBZ0lDQWdJQ0E4UjNKcFpDQnBkR1Z0SUhoelBYc3hNbjBnYzNSNWJHVTllM3R0WVhKbmFXNUNiM1IwYjIwNklDY3hNSEI0SjMxOVBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEZSNWNHOW5jbUZ3YUhrZ2RtRnlhV0Z1ZEQxY0ltZzFYQ0krZTNScGRHeGxmVHd2Vkhsd2IyZHlZWEJvZVQ1Y2JpQWdJQ0FnSUNBZ0lDQThMMGR5YVdRK1hHNGdJQ0FnSUNBZ0lDQWdQRWR5YVdRZ2FYUmxiU0I0Y3oxN01USjlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2UzUmxlSFI5WEc0Z0lDQWdJQ0FnSUNBZ1BDOUhjbWxrUGx4dUlDQWdJQ0FnSUNBZ0lEeEhjbWxrSUdsMFpXMGdlSE05ZXpFeWZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5ZTJ4cGJtdDlJSFJoY21kbGREMWNJbDlpYkdGdWExd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQldhV1YzSUdsdUlHMWhiblZoYkZ4dUlDQWdJQ0FnSUNBZ0lDQWdQQzloUGx4dUlDQWdJQ0FnSUNBZ0lEd3ZSM0pwWkQ1Y2JpQWdJQ0FnSUNBZ1BDOUhjbWxrUGx4dUlDQWdJQ0FnUEM5UWIzQnZkbVZ5UGx4dUlDQWdJRHd2UGx4dUlDQXBPMXh1ZlZ4dUlpd2lhVzF3YjNKMElIdElaV3h3UTI5dWRHVjRkRkJ5YjNacFpHVnlRMjl0Y0c5dVpXNTBmU0JtY205dElDY3VMMGhsYkhCRGIyNTBaWGgwTDBobGJIQkRiMjUwWlhoMEp6dGNibWx0Y0c5eWRDQkpibXhwYm1WSVpXeHdJR1p5YjIwZ0p5NHZTVzVzYVc1bFNHVnNjQzlKYm14cGJtVklaV3h3Snp0Y2JtbHRjRzl5ZENCSlNHVnNjRWx1Wm04Z1puSnZiU0FuTGk5SmJuUmxjbVpoWTJWekwwbElaV3h3U1c1bWJ5YzdYRzVjYm1WNGNHOXlkQ0I3U0dWc2NFTnZiblJsZUhSUWNtOTJhV1JsY2tOdmJYQnZibVZ1ZEN3Z1NXNXNhVzVsU0dWc2NDd2dTVWhsYkhCSmJtWnZmVHRjYmlJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5Zk5qVTRYMTg3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDE4M01qQmZYenNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWHpJNE1GOWZPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlmTnpRd1gxODdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMTh5T1RkZlh6c2lMQ0l2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc1MllYSWdYMTkzWldKd1lXTnJYMjF2WkhWc1pWOWpZV05vWlY5ZklEMGdlMzA3WEc1Y2JpOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc1bWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVYSFJwWmloZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsWDJOaFkyaGxYMTliYlc5a2RXeGxTV1JkS1NCN1hHNWNkRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl0YjJSMWJHVmZZMkZqYUdWZlgxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNibHgwZlZ4dVhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dVhIUjJZWElnYlc5a2RXeGxJRDBnWDE5M1pXSndZV05yWDIxdlpIVnNaVjlqWVdOb1pWOWZXMjF2WkhWc1pVbGtYU0E5SUh0Y2JseDBYSFF2THlCdWJ5QnRiMlIxYkdVdWFXUWdibVZsWkdWa1hHNWNkRngwTHk4Z2JtOGdiVzlrZFd4bExteHZZV1JsWkNCdVpXVmtaV1JjYmx4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1WEhSOU8xeHVYRzVjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVYSFJmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmVzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1WEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dVhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc1OVhHNWNiaUlzSWk4dklITjBZWEowZFhCY2JpOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1THk4Z1ZHaHBjeUJsYm5SeWVTQnRiMlIxYkdVZ2FYTWdjbVZtWlhKbGJtTmxaQ0JpZVNCdmRHaGxjaUJ0YjJSMWJHVnpJSE52SUdsMElHTmhiaWQwSUdKbElHbHViR2x1WldSY2JuWmhjaUJmWDNkbFluQmhZMnRmWlhod2IzSjBjMTlmSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5ZzJNRGNwTzF4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlfSBmcm9tICdzcmMvVXRpbC91dGlsJztcbmltcG9ydCB7Z2V0QmVzdCwgZ2V0V29yc3R9IGZyb20gJy4uL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyaXRlcmlvbkNob2ljZSh7Y3JpdGVyaW9ufToge2NyaXRlcmlvbjogSUNyaXRlcmlvbn0pIHtcbiAgY29uc3Qge3B2ZnMsIHNob3dQZXJjZW50YWdlc30gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHB2ZiA9IHB2ZnNbY3JpdGVyaW9uLmlkXTtcbiAgY29uc3QgdW5pdFR5cGUgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuICBjb25zdCB3b3JzdCA9IGdldFdvcnN0KHB2ZiwgdXNlUGVyY2VudGFnZSk7XG4gIGNvbnN0IGJlc3QgPSBnZXRCZXN0KHB2ZiwgdXNlUGVyY2VudGFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgaWQ9e2ByYW5raW5nLWNob2ljZS0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgIDxSYWRpbyB2YWx1ZT17Y3JpdGVyaW9uLmlkfSAvPlxuICAgICAge3B2Zi5kaXJlY3Rpb259eycgJ31cbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICB0aXRsZT17Y3JpdGVyaW9uLmRlc2NyaXB0aW9uID8gY3JpdGVyaW9uLmRlc2NyaXB0aW9uIDogJyd9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgaWQ9e2Bjcml0ZXJpb24tb3B0aW9uLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjcml0ZXJpb24udGl0bGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICAgIHtgIGZyb20gJHt3b3JzdH0gdG8gJHtiZXN0fWB9XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cbiIsImltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge2dldFVuaXRMYWJlbH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyaXRlcmlvblNpdHVhdGlvbih7XG4gIGNyaXRlcmlvbixcbiAgZGlzcGxheVZhbHVlXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbiAgZGlzcGxheVZhbHVlOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHtzaG93UGVyY2VudGFnZXN9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAgPGxpIGlkPXtgc2l0dWF0aW9uLSR7Y3JpdGVyaW9uLmlkfWB9PlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBpZD17YHNpdHVhdGlvbi10aXRsZS0ke2NyaXRlcmlvbi5pZH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3JpdGVyaW9uLnRpdGxlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA6IDxzcGFuIGlkPXtgc2l0dWF0aW9uLXZhbHVlLSR7Y3JpdGVyaW9uLmlkfWB9PntkaXNwbGF5VmFsdWV9PC9zcGFuPnsnICd9XG4gICAgICAgIHtnZXRVbml0TGFiZWwoXG4gICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgICApfVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge2FkZFJhbmtpbmd9IGZyb20gJ3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbCc7XG5pbXBvcnQge1xuICBidWlsZEluaXRpYWxJbXByZWNpc2VQcmVmZXJlbmNlcyxcbiAgYnVpbGRJbml0aWFsUHJlY2lzZVByZWZlcmVuY2VzXG59IGZyb20gJ3NyYy9Td2luZ1V0aWwvU3dpbmdVdGlsJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJy4uL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJRXhhY3RTd2luZ1JhdGlvIGZyb20gJy4uL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnLi4vSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5pbXBvcnQge1RFbGljaXRhdGlvbk1ldGhvZH0gZnJvbSAnLi4vVHlwZXMvVEVsaWNpdGF0aW9uTWV0aG9kJztcbmltcG9ydCBJRWxpY2l0YXRpb25Db250ZXh0IGZyb20gJy4vSUVsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBFbGljaXRhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PElFbGljaXRhdGlvbkNvbnRleHQ+KFxuICB7fSBhcyBJRWxpY2l0YXRpb25Db250ZXh0XG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gRWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnQoe1xuICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgY3JpdGVyaWEsXG4gIHNob3dQZXJjZW50YWdlcyxcbiAgcHJldmlvdXNDYWxsYmFjayxcbiAgcHZmcyxcbiAgY2FuY2VsQ2FsbGJhY2ssXG4gIHNhdmVDYWxsYmFjayxcbiAgdGVtcGxhdGUsXG4gIGNoaWxkcmVuXG59OiB7XG4gIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2Q7XG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW107XG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhbjtcbiAgcHJldmlvdXNDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHB2ZnM6IFJlY29yZDxzdHJpbmcsIFRQdmY+O1xuICBjYW5jZWxDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgc2F2ZUNhbGxiYWNrOiAoXG4gICAgcHJlZmVyZW5jZXM6IElFeGFjdFN3aW5nUmF0aW9bXSB8IElSYXRpb0JvdW5kQ29uc3RyYWludFtdIHwgSVJhbmtpbmdbXVxuICApID0+IHZvaWQ7XG4gIHRlbXBsYXRlPzogc3RyaW5nO1xuICBjaGlsZHJlbjogYW55O1xufSk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2lzTmV4dERpc2FibGVkLCBzZXRJc05leHREaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW1xuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRcbiAgXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbcHJlZmVyZW5jZXMsIHNldFByZWZlcmVuY2VzXSA9IHVzZVN0YXRlPFxuICAgIFJlY29yZDxzdHJpbmcsIElFeGFjdFN3aW5nUmF0aW8+IHwgUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PlxuICA+KHt9KTtcbiAgY29uc3QgW3JhbmtpbmdzLCBzZXRSYW5raW5nc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4+KHt9KTtcblxuICBmdW5jdGlvbiBzZXRSYW5raW5nKGNyaXRlcmlvbklkOiBzdHJpbmcsIHJhbms6IG51bWJlcikge1xuICAgIGNvbnN0IHVwZGF0ZWRSYW5raW5ncyA9IGFkZFJhbmtpbmcocmFua2luZ3MsIGNyaXRlcmlvbklkLCByYW5rKTtcbiAgICBzZXRSYW5raW5ncyh1cGRhdGVkUmFua2luZ3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbkFuZFByZWZlcmVuY2VzKGNyaXRlcmlvbklkOiBzdHJpbmcpIHtcbiAgICBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdwcmVjaXNlJykge1xuICAgICAgc2V0UHJlZmVyZW5jZXMoYnVpbGRJbml0aWFsUHJlY2lzZVByZWZlcmVuY2VzKGNyaXRlcmlhLCBjcml0ZXJpb25JZCkpO1xuICAgIH0gZWxzZSBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdpbXByZWNpc2UnKSB7XG4gICAgICBzZXRQcmVmZXJlbmNlcyhidWlsZEluaXRpYWxJbXByZWNpc2VQcmVmZXJlbmNlcyhjcml0ZXJpYSwgY3JpdGVyaW9uSWQpKTtcbiAgICB9XG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkKGNyaXRlcmlvbklkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByZWZlcmVuY2UoY3JpdGVyaW9uSWQ6IHN0cmluZywgYW5zd2VyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgdXBkYXRlZFByZWZlcmVuY2VzID0gXy5jbG9uZURlZXAocHJlZmVyZW5jZXMpO1xuICAgIGNvbnN0IHByZWZlcmVuY2U6IElFeGFjdFN3aW5nUmF0aW8gPSB7XG4gICAgICBlbGljaXRhdGlvbk1ldGhvZDogZWxpY2l0YXRpb25NZXRob2QsXG4gICAgICB0eXBlOiAnZXhhY3Qgc3dpbmcnLFxuICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbklkXSxcbiAgICAgIHJhdGlvOiAxMDAgLyBhbnN3ZXJcbiAgICB9O1xuICAgIHVwZGF0ZWRQcmVmZXJlbmNlc1tjcml0ZXJpb25JZF0gPSBwcmVmZXJlbmNlO1xuICAgIHNldFByZWZlcmVuY2VzKHVwZGF0ZWRQcmVmZXJlbmNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRCb3VuZFByZWZlcmVuY2UoXG4gICAgY3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgICBhbnN3ZXI6IFtudW1iZXIsIG51bWJlcl1cbiAgKTogdm9pZCB7XG4gICAgbGV0IHVwZGF0ZWRQcmVmZXJlbmNlcyA9IF8uY2xvbmVEZWVwKHByZWZlcmVuY2VzKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICBlbGljaXRhdGlvbk1ldGhvZDogJ2ltcHJlY2lzZScsXG4gICAgICB0eXBlOiAncmF0aW8gYm91bmQnLFxuICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbklkXSxcbiAgICAgIGJvdW5kczogWzEwMCAvIGFuc3dlclsxXSwgMTAwIC8gYW5zd2VyWzBdXVxuICAgIH07XG4gICAgdXBkYXRlZFByZWZlcmVuY2VzW2NyaXRlcmlvbklkXSA9IHByZWZlcmVuY2U7XG4gICAgc2V0UHJlZmVyZW5jZXModXBkYXRlZFByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENyaXRlcmlvbihpZDogc3RyaW5nKTogSUNyaXRlcmlvbiB7XG4gICAgcmV0dXJuIF8uZmluZChjcml0ZXJpYSwgWydpZCcsIGlkXSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbGljaXRhdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGN1cnJlbnRTdGVwLFxuICAgICAgICBpc05leHREaXNhYmxlZCxcbiAgICAgICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgICAgICBwcmVmZXJlbmNlcyxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2QsXG4gICAgICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICAgICAgcHZmcyxcbiAgICAgICAgY3JpdGVyaWEsXG4gICAgICAgIHJhbmtpbmdzLFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgZ2V0Q3JpdGVyaW9uLFxuICAgICAgICBwcmV2aW91c0NhbGxiYWNrLFxuICAgICAgICBzZXRDdXJyZW50U3RlcCxcbiAgICAgICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbkFuZFByZWZlcmVuY2VzLFxuICAgICAgICBzZXRQcmVmZXJlbmNlLFxuICAgICAgICBzZXRCb3VuZFByZWZlcmVuY2UsXG4gICAgICAgIHNldFByZWZlcmVuY2VzLFxuICAgICAgICBjYW5jZWxDYWxsYmFjayxcbiAgICAgICAgc2F2ZUNhbGxiYWNrLFxuICAgICAgICBzZXRSYW5raW5nXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VsaWNpdGF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzIGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXByZWNpc2VTd2luZ1NsaWRlcih7XG4gIGNyaXRlcmlvblxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG59KSB7XG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGU8W251bWJlciwgbnVtYmVyXT4oWzEsIDEwMF0pO1xuICBjb25zdCB7c2V0Qm91bmRQcmVmZXJlbmNlLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJvdW5kUHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIHNsaWRlclZhbHVlKTtcbiAgfSwgW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IFtudW1iZXIsIG51bWJlcl1cbiAgKSB7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIHNldEJvdW5kUHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA9PT0gY3JpdGVyaW9uLmlkXG4gICAgICA/ICcxMDAlJ1xuICAgICAgOiBgJHtzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZVswXSl9IC0gJHtzaWduaWZpY2FudERpZ2l0cyhcbiAgICAgICAgICBzbGlkZXJWYWx1ZVsxXVxuICAgICAgICApfSVgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlbmRlclZhbHVlKCl9XG4gICAgICA8U2xpZGVyXG4gICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cbiAgICAgICAgbWluPXsxfVxuICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZWR9XG4gICAgICAgIHN0ZXA9ezF9XG4gICAgICAgIGRpc2FibGVkPXttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQgPT09IGNyaXRlcmlvbi5pZH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7SW5saW5lSGVscH0gZnJvbSAnaGVscC1wb3B1cCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IE1vc3RJbXBvcnRhbnRDaG9pY2UgZnJvbSAnLi4vTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlJztcbmltcG9ydCBTd2luZ0J1dHRvbnMgZnJvbSAnLi4vU3dpbmdCdXR0b25zL1N3aW5nQnV0dG9ucyc7XG5pbXBvcnQgU3dpbmdTZXRXZWlnaHRzIGZyb20gJy4uL1N3aW5nU2V0V2VpZ2h0cy9Td2luZ1NldFdlaWdodHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXByZWNpc2VTd2luZ1dlaWdodGluZygpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInN3aW5nLXdlaWdodGluZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICA8SW5saW5lSGVscCBoZWxwSWQ9XCJpbXByZWNpc2Utc3dpbmctd2VpZ2h0aW5nXCI+XG4gICAgICAgICAgICBJbXByZWNpc2Ugc3dpbmcgd2VpZ2h0aW5nXG4gICAgICAgICAgPC9JbmxpbmVIZWxwPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMSA/IDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+IDogPFN3aW5nU2V0V2VpZ2h0cyAvPn1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8U3dpbmdCdXR0b25zIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgU3RlcCB7Y3VycmVudFN0ZXB9IG9mIDJcbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdCdXR0b25zKCkge1xuICBjb25zdCB7XG4gICAgcHJldmlvdXNDYWxsYmFjayxcbiAgICBpc05leHREaXNhYmxlZCxcbiAgICBzZXRJc05leHREaXNhYmxlZCxcbiAgICBjdXJyZW50U3RlcCxcbiAgICBzZXRDdXJyZW50U3RlcCxcbiAgICBwcmVmZXJlbmNlcyxcbiAgICBjcml0ZXJpYSxcbiAgICBjYW5jZWxDYWxsYmFjayxcbiAgICBzYXZlQ2FsbGJhY2tcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgbWF0Y2hpbmdOZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlQnV0dG9uY2xpY2soKTogdm9pZCB7XG4gICAgc2F2ZUNhbGxiYWNrKE9iamVjdC52YWx1ZXMocHJlZmVyZW5jZXMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoaW5nTmV4dCgpOiB2b2lkIHtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IF8uc2l6ZShjcml0ZXJpYSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCk6IHZvaWQge1xuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMSkge1xuICAgICAgcHJldmlvdXNDYWxsYmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc05leHREaXNhYmxlZChmYWxzZSk7XG4gICAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpOiB2b2lkIHtcbiAgICBjYW5jZWxDYWxsYmFjaygpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBvbkNsaWNrPXtjYW5jZWx9XG4gICAgICA+XG4gICAgICAgIENhbmNlbFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwicHJldmlvdXMtYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNDbGlja31cbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFwcmV2aW91c0NhbGxiYWNrICYmIGN1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbmNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge0lubGluZUhlbHB9IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgTW9zdEltcG9ydGFudENob2ljZSBmcm9tICcuLi9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UnO1xuaW1wb3J0IE1hdGNoaW5nQnV0dG9ucyBmcm9tICcuL01hdGNoaW5nQnV0dG9ucy9NYXRjaGluZ0J1dHRvbnMnO1xuaW1wb3J0IE1hdGNoaW5nU2V0SW1wb3J0YW5jZSBmcm9tICcuL01hdGNoaW5nU2V0SW1wb3J0YW5jZS9NYXRjaGluZ1NldEltcG9ydGFuY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ0VsaWNpdGF0aW9uKCkge1xuICBjb25zdCB7Y3VycmVudFN0ZXAsIGNyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IF8uc2l6ZShjcml0ZXJpYSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtYXRjaGluZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICA8SW5saW5lSGVscCBoZWxwSWQ9XCJtYXRjaGluZ1wiPk1hdGNoaW5nPC9JbmxpbmVIZWxwPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMSA/IChcbiAgICAgICAgICA8TW9zdEltcG9ydGFudENob2ljZSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxNYXRjaGluZ1NldEltcG9ydGFuY2UgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8TWF0Y2hpbmdCdXR0b25zIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgU3RlcCB7Y3VycmVudFN0ZXB9IG9mIHt0b3RhbFN0ZXBzfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCB7XG4gIGdldEN1cnJlbnRDcml0ZXJpb24sXG4gIGdldE1hdGNoaW5nU3RhdGVtZW50XG59IGZyb20gJ3NyYy9NYXRjaGluZ1V0aWwvTWF0Y2hpbmdVdGlsJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlfSBmcm9tICdzcmMvVXRpbC91dGlsJztcbmltcG9ydCB7Z2V0QmVzdCwgZ2V0V29yc3R9IGZyb20gJy4uLy4uL1V0aWwvdXRpbCc7XG5pbXBvcnQgTWF0Y2hpbmdTbGlkZXIgZnJvbSAnLi9NYXRjaGluZ1NsaWRlci9NYXRjaGluZ1NsaWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nU2V0SW1wb3J0YW5jZSgpIHtcbiAgY29uc3Qge1xuICAgIHB2ZnMsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBjdXJyZW50U3RlcCxcbiAgICBnZXRDcml0ZXJpb24sXG4gICAgY3JpdGVyaWEsXG4gICAgdGVtcGxhdGVcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uID0gZ2V0Q3JpdGVyaW9uKG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCk7XG4gIGNvbnN0IG1vc3RJbXBvcnRhbnRVbml0VHlwZSA9XG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuXG4gIGNvbnN0IGN1cnJlbnRDcml0ZXJpb24gPSBnZXRDdXJyZW50Q3JpdGVyaW9uKFxuICAgIGNyaXRlcmlhLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBjdXJyZW50U3RlcFxuICApO1xuICBjb25zdCBjdXJyZW50VW5pdFR5cGUgPVxuICAgIGN1cnJlbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcblxuICBjb25zdCB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb24gPVxuICAgIHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UobW9zdEltcG9ydGFudFVuaXRUeXBlKTtcblxuICBjb25zdCB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb24gPVxuICAgIHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UoY3VycmVudFVuaXRUeXBlKTtcblxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBnZXRNYXRjaGluZ1N0YXRlbWVudChcbiAgICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24sXG4gICAgICBjdXJyZW50Q3JpdGVyaW9uLFxuICAgICAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uLFxuICAgICAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uLFxuICAgICAgcHZmcyxcbiAgICAgIHRlbXBsYXRlXG4gICAgKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGVtZW50KFxuICAgICAgZ2V0TWF0Y2hpbmdTdGF0ZW1lbnQoXG4gICAgICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24sXG4gICAgICAgIGN1cnJlbnRDcml0ZXJpb24sXG4gICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvbixcbiAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uLFxuICAgICAgICBwdmZzLFxuICAgICAgICB0ZW1wbGF0ZVxuICAgICAgKVxuICAgICk7XG4gIH0sIFtzaG93UGVyY2VudGFnZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57YFRyYWRlLW9mZiBiZXR3ZWVuICR7bW9zdEltcG9ydGFudENyaXRlcmlvbi50aXRsZX0gYW5kICR7Y3VycmVudENyaXRlcmlvbi50aXRsZX1gfTwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkXG4gICAgICAgIGl0ZW1cbiAgICAgICAgeHM9ezEyfVxuICAgICAgICBpZD1cIm1hdGNoaW5nLXN0YXRlbWVudFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdGF0ZW1lbnR9fVxuICAgICAgLz5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q3JpdGVyaW9uPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BbHRlcm5hdGl2ZSBBPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BbHRlcm5hdGl2ZSBCPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e21vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7Z2V0V29yc3QoXG4gICAgICAgICAgICAgICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sXG4gICAgICAgICAgICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb25cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGlkPVwibWF0Y2hpbmctY2VsbFwiPlxuICAgICAgICAgICAgICAgIDxNYXRjaGluZ1NsaWRlciBjdXJyZW50Q3JpdGVyaW9uSWQ9e2N1cnJlbnRDcml0ZXJpb24uaWR9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57Y3VycmVudENyaXRlcmlvbi50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtnZXRCZXN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge2dldFdvcnN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlSW1wb3J0YW5jZSxcbiAgZGV0ZXJtaW5lU3RlcFNpemVcbn0gZnJvbSAnc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwnO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzLCB7XG4gIGNhbkJlUGVyY2VudGFnZSxcbiAgZ2V0QmVzdCxcbiAgZ2V0V29yc3Rcbn0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nU2xpZGVyKHtcbiAgY3VycmVudENyaXRlcmlvbklkXG59OiB7XG4gIGN1cnJlbnRDcml0ZXJpb25JZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldFByZWZlcmVuY2UsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIHB2ZnMsXG4gICAgZ2V0Q3JpdGVyaW9uXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgbW9zdEltcG9ydGFudENyaXRlcmlvbiA9IGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpO1xuICBjb25zdCBwdmYgPSBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF07XG5cbiAgY29uc3QgdW5pdFR5cGUgPSBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcblxuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPG51bWJlcj4oXG4gICAgZ2V0QmVzdChwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sIHVzZVBlcmNlbnRhZ2UpXG4gICk7XG4gIGNvbnN0IFtzdGVwU2l6ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KGRldGVybWluZVN0ZXBTaXplKHB2Zi5yYW5nZSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyVmFsdWUgPSBnZXRCZXN0KHB2ZiwgZmFsc2UpO1xuICAgIHNldFNsaWRlclZhbHVlKHNsaWRlclZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGN1cnJlbnRDcml0ZXJpb25JZCwgY2FsY3VsYXRlSW1wb3J0YW5jZShzbGlkZXJWYWx1ZSwgcHZmKSk7XG4gIH0sIFtjdXJyZW50U3RlcF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IG51bWJlclxuICApIHtcbiAgICBzZXRTbGlkZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoXG4gICAgICBzaWduaWZpY2FudERpZ2l0cyhuZXdWYWx1ZSkgPT09XG4gICAgICAgIGdldFdvcnN0KHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbi5pZF0sIGZhbHNlKVxuICAgICk7XG4gICAgc2V0UHJlZmVyZW5jZShjdXJyZW50Q3JpdGVyaW9uSWQsIGNhbGN1bGF0ZUltcG9ydGFuY2UobmV3VmFsdWUsIHB2ZikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB1c2VQZXJjZW50YWdlXG4gICAgICA/IHNpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlICogMTAwKVxuICAgICAgOiBzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGlzcGxheVZhbHVlKCl9XG4gICAgICA8U2xpZGVyXG4gICAgICAgIGlkPVwibWF0Y2hpbmctc2xpZGVyXCJcbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBtaW49e3B2Zi5yYW5nZVswXX1cbiAgICAgICAgbWF4PXtwdmYucmFuZ2VbMV19XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXtzdGVwU2l6ZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7SUxpbmVhclB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JTGluZWFyUHZmJztcbmltcG9ydCB7SVBpZWNlV2lzZUxpbmVhclB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JUGllY2VXaXNlTGluZWFyUHZmJztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCB7VFB2ZkRpcmVjdGlvbn0gZnJvbSAnc3JjL1R5cGVzL1B2ZlR5cGVzJztcbmltcG9ydCB7Z2V0QmVzdCwgZ2V0VW5pdExhYmVsLCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BVENISU5HX1RFTVBMQVRFID1cbiAgJ0hvdyBtdWNoIGJldHRlciBzaG91bGQgJWNyaXRlcmlvbjElIG1pbmltYWxseSBiZWNvbWUgdG8ganVzdGlmeSB0aGUgd29yc2VuaW5nIG9mICVjcml0ZXJpb24yJT8nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF0Y2hpbmdTdGF0ZW1lbnQoXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb246IElDcml0ZXJpb24sXG4gIGN1cnJlbnRDcml0ZXJpb246IElDcml0ZXJpb24sXG4gIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvbjogYm9vbGVhbixcbiAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uOiBib29sZWFuLFxuICBwdmZzOiBSZWNvcmQ8c3RyaW5nLCBUUHZmPixcbiAgdGVtcGxhdGU/OiBzdHJpbmdcbik6IHN0cmluZyB7XG4gIGNvbnN0IG1hdGNoaW5nVGVtcGxhdGUgPSB0ZW1wbGF0ZSA/IHRlbXBsYXRlIDogREVGQVVMVF9NQVRDSElOR19URU1QTEFURTtcbiAgcmV0dXJuIG1hdGNoaW5nVGVtcGxhdGVcbiAgICAucmVwbGFjZSgvJWNyaXRlcmlvbjElL2dpLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLnRpdGxlKVxuICAgIC5yZXBsYWNlKFxuICAgICAgLyV1bml0MSUvZ2ksXG4gICAgICBnZXRVbml0TGFiZWwoXG4gICAgICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQsXG4gICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvblxuICAgICAgKVxuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC8ld29yc3QxJS9naSxcbiAgICAgIFN0cmluZyhcbiAgICAgICAgZ2V0V29yc3QoXG4gICAgICAgICAgcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb25cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC8lYmVzdDElL2dpLFxuICAgICAgU3RyaW5nKFxuICAgICAgICBnZXRCZXN0KFxuICAgICAgICAgIHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgLnJlcGxhY2UoLyVjcml0ZXJpb24yJS9naSwgY3VycmVudENyaXRlcmlvbi50aXRsZSlcbiAgICAucmVwbGFjZShcbiAgICAgIC8ldW5pdDIlL2dpLFxuICAgICAgZ2V0VW5pdExhYmVsKFxuICAgICAgICBjdXJyZW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb25cbiAgICAgIClcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvJXdvcnN0MiUvZ2ksXG4gICAgICBTdHJpbmcoXG4gICAgICAgIGdldFdvcnN0KHB2ZnNbY3VycmVudENyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbilcbiAgICAgIClcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvJWJlc3QyJS9naSxcbiAgICAgIFN0cmluZyhcbiAgICAgICAgZ2V0QmVzdChwdmZzW2N1cnJlbnRDcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb24pXG4gICAgICApXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZVN0ZXBTaXplKFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXTogW1xuICBudW1iZXIsXG4gIG51bWJlclxuXSk6IG51bWJlciB7XG4gIGNvbnN0IGludGVydmFsID0gdXBwZXJCb3VuZCAtIGxvd2VyQm91bmQ7XG4gIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChpbnRlcnZhbCkpO1xuICByZXR1cm4gTWF0aC5wb3coMTAsIG1hZ25pdHVkZSAtIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW1wb3J0YW5jZShzbGlkZXJWYWx1ZTogbnVtYmVyLCBwdmY6IFRQdmYpOiBudW1iZXIge1xuICBpZiAoaXNQaWVjZVdpc2VMaW5lYXJQdmYocHZmKSkge1xuICAgIHJldHVybiBjYWxjdWxhdGVQaWVjZXdpc2VJbXBvcnRhbmNlKHNsaWRlclZhbHVlLCBwdmYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYWxjdWxhdGVMaW5lYXJJbXBvcnRhbmNlKHNsaWRlclZhbHVlLCBwdmYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGllY2VXaXNlTGluZWFyUHZmKHB2ZjogVFB2Zik6IHB2ZiBpcyBJUGllY2VXaXNlTGluZWFyUHZmIHtcbiAgcmV0dXJuICdjdXRvZmZzJyBpbiBwdmY7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUxpbmVhckltcG9ydGFuY2UoXG4gIHNsaWRlclZhbHVlOiBudW1iZXIsXG4gIHtyYW5nZTogW2xvd2VyQm91bmQsIHVwcGVyQm91bmRdLCBkaXJlY3Rpb259OiBJTGluZWFyUHZmXG4pOiBudW1iZXIge1xuICBjb25zdCByZWJhc2VkID1cbiAgICBkaXJlY3Rpb24gPT09ICdkZWNyZWFzaW5nJ1xuICAgICAgPyB1cHBlckJvdW5kIC0gc2xpZGVyVmFsdWVcbiAgICAgIDogc2xpZGVyVmFsdWUgLSBsb3dlckJvdW5kO1xuICByZXR1cm4gKHJlYmFzZWQgLyBNYXRoLmFicyhsb3dlckJvdW5kIC0gdXBwZXJCb3VuZCkpICogMTAwO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVQaWVjZXdpc2VJbXBvcnRhbmNlKFxuICB2YWx1ZTogbnVtYmVyLFxuICBwdmY6IElQaWVjZVdpc2VMaW5lYXJQdmZcbik6IG51bWJlciB7XG4gIGNvbnN0IHtcbiAgICBjdXRvZmZzLFxuICAgIHJhbmdlOiBbbG93ZXJCb3VuZCwgdXBwZXJCb3VuZF0sXG4gICAgZGlyZWN0aW9uXG4gIH0gPSBwdmY7XG4gIGNvbnN0IGN1dG9mZnNXaXRoQm91bmRzID0gW2xvd2VyQm91bmQsIC4uLmN1dG9mZnMsIHVwcGVyQm91bmRdO1xuICBjb25zdCB2YWx1ZXNXaXRoQm91bmRzID1cbiAgICBkaXJlY3Rpb24gPT09ICdpbmNyZWFzaW5nJ1xuICAgICAgPyBbMCwgMC4yNSwgMC41LCAwLjc1LCAxXVxuICAgICAgOiBbMSwgMC43NSwgMC41LCAwLjI1LCAwXTtcbiAgY29uc3QgZXhhY3RDdXRvZmZJZHggPSBfLmZpbmRJbmRleChcbiAgICBjdXRvZmZzV2l0aEJvdW5kcyxcbiAgICAoeDogbnVtYmVyKTogYm9vbGVhbiA9PiB4ID09PSB2YWx1ZVxuICApO1xuICBpZiAoZXhhY3RDdXRvZmZJZHggIT09IC0xKSB7XG4gICAgcmV0dXJuIHZhbHVlc1dpdGhCb3VuZHNbZXhhY3RDdXRvZmZJZHhdICogMTAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWYWx1ZShcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGN1dG9mZnNXaXRoQm91bmRzLFxuICAgICAgICB2YWx1ZXNXaXRoQm91bmRzLFxuICAgICAgICBkaXJlY3Rpb25cbiAgICAgICkgKiAxMDBcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZhbHVlKFxuICB2YWx1ZTogbnVtYmVyLFxuICBjdXRvZmZzV2l0aEJvdW5kczogbnVtYmVyW10sXG4gIHZhbHVlc1dpdGhCb3VuZHM6IG51bWJlcltdLFxuICBkaXJlY3Rpb246IFRQdmZEaXJlY3Rpb25cbik6IG51bWJlciB7XG4gIGNvbnN0IGxhcmdlckN1dG9mZklkeCA9IF8uZmluZEluZGV4KFxuICAgIGN1dG9mZnNXaXRoQm91bmRzLFxuICAgICh4OiBudW1iZXIpOiBib29sZWFuID0+IHggPiB2YWx1ZVxuICApO1xuICBjb25zdCBbbG93ZXJDdXRPZmYsIHVwcGVyQ3V0T2ZmXSA9IFtcbiAgICBjdXRvZmZzV2l0aEJvdW5kc1tsYXJnZXJDdXRvZmZJZHggLSAxXSxcbiAgICBjdXRvZmZzV2l0aEJvdW5kc1tsYXJnZXJDdXRvZmZJZHhdXG4gIF07XG5cbiAgY29uc3QgcmViYXNlZCA9IHZhbHVlIC0gbG93ZXJDdXRPZmY7XG4gIGNvbnN0IHJhdGlvT2ZRdWFydGlsZSA9IHJlYmFzZWQgLyAodXBwZXJDdXRPZmYgLSBsb3dlckN1dE9mZik7XG4gIGNvbnN0IHF1YXJ0aWxlVmFsdWUgPSB2YWx1ZXNXaXRoQm91bmRzW2xhcmdlckN1dG9mZklkeCAtIDFdO1xuICBpZiAoZGlyZWN0aW9uID09PSAnaW5jcmVhc2luZycpIHtcbiAgICByZXR1cm4gcXVhcnRpbGVWYWx1ZSArIDAuMjUgKiByYXRpb09mUXVhcnRpbGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHF1YXJ0aWxlVmFsdWUgLSAwLjI1ICogcmF0aW9PZlF1YXJ0aWxlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q3JpdGVyaW9uKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgY3VycmVudFN0ZXA6IG51bWJlclxuKTogSUNyaXRlcmlvbiB7XG4gIHJldHVybiBfLnJlamVjdChjcml0ZXJpYSwgKGNyaXRlcmlvbjogSUNyaXRlcmlvbikgPT4ge1xuICAgIHJldHVybiBjcml0ZXJpb24uaWQgPT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDtcbiAgfSlbY3VycmVudFN0ZXAgLSAyXTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDaGFuZ2VFdmVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZSwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IENyaXRlcmlvbkNob2ljZSBmcm9tICcuLi9Dcml0ZXJpb25DaG9pY2UvQ3JpdGVyaW9uQ2hvaWNlJztcbmltcG9ydCBDcml0ZXJpb25TaXR1YXRpb24gZnJvbSAnLi4vQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vc3RJbXBvcnRhbnRDaG9pY2UoKSB7XG4gIGNvbnN0IHtcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBwdmZzLFxuICAgIGNyaXRlcmlhXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldElzTmV4dERpc2FibGVkKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICAgICAgICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENyaXRlcmlvblNpdHVhdGlvblxuICAgICAgICAgICAga2V5PXtjcml0ZXJpb24uaWR9XG4gICAgICAgICAgICBjcml0ZXJpb249e2NyaXRlcmlvbn1cbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZT17Z2V0V29yc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDcml0ZXJpb25DaG9pY2VzKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvbkNob2ljZSBrZXk9e2NyaXRlcmlvbi5pZH0gY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkdpdmVuIHRoZSBmb2xsb3dpbmcgc2l0dWF0aW9uOjwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge3JlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKX1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpbXByb3ZlbWVudHMgaXMgbW9zdCBpbXBvcnRhbnQ/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICBuYW1lPVwibW9zdC1pbXBvcnRhbnQtY3JpdGVyaW9uLXJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17bW9zdEltcG9ydGFudENyaXRlcmlvbklkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb259XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyQ3JpdGVyaW9uQ2hvaWNlcygpfVxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgc2lnbmlmaWNhbnREaWdpdHMgZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWNpc2VTd2luZ1NsaWRlcih7XG4gIGNyaXRlcmlvblxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG59KSB7XG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyPigxMDApO1xuICBjb25zdCB7c2V0UHJlZmVyZW5jZSwgbW9zdEltcG9ydGFudENyaXRlcmlvbklkfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgc2xpZGVyVmFsdWUpO1xuICB9LCBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2xpZGVyQ2hhbmdlZChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PixcbiAgICBuZXdWYWx1ZTogbnVtYmVyXG4gICkge1xuICAgIHNldFNsaWRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgbmV3VmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3NpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlKX1cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBtaW49ezF9XG4gICAgICAgIG1heD17MTAwfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlZH1cbiAgICAgICAgc3RlcD17MX1cbiAgICAgICAgZGlzYWJsZWQ9e21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA9PT0gY3JpdGVyaW9uLmlkfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHtJbmxpbmVIZWxwfSBmcm9tICdoZWxwLXBvcHVwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgTW9zdEltcG9ydGFudENob2ljZSBmcm9tICcuLi9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UnO1xuaW1wb3J0IFN3aW5nQnV0dG9ucyBmcm9tICcuLi9Td2luZ0J1dHRvbnMvU3dpbmdCdXR0b25zJztcbmltcG9ydCBTd2luZ1NldFdlaWdodHMgZnJvbSAnLi4vU3dpbmdTZXRXZWlnaHRzL1N3aW5nU2V0V2VpZ2h0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWNpc2VTd2luZ1dlaWdodGluZygpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInN3aW5nLXdlaWdodGluZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICA8SW5saW5lSGVscCBoZWxwSWQ9XCJzd2luZy13ZWlnaHRpbmdcIj5cbiAgICAgICAgICAgIFByZWNpc2Ugc3dpbmcgd2VpZ2h0aW5nXG4gICAgICAgICAgPC9JbmxpbmVIZWxwPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMSA/IDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+IDogPFN3aW5nU2V0V2VpZ2h0cyAvPn1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8U3dpbmdCdXR0b25zIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgU3RlcCB7Y3VycmVudFN0ZXB9IG9mIDJcbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCB7Qm94LCBHcmlkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge0hlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnQsIElIZWxwSW5mb30gZnJvbSAnaGVscC1wb3B1cCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nIGZyb20gJ3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSUV4YWN0U3dpbmdSYXRpbyBmcm9tICdzcmMvSW50ZXJmYWNlL0lFeGFjdFN3aW5nUmF0aW8nO1xuaW1wb3J0IElSYW5raW5nIGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhbmtpbmcnO1xuaW1wb3J0IElSYXRpb0JvdW5kQ29uc3RyYWludCBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQgTWF0Y2hpbmdFbGljaXRhdGlvbiBmcm9tICdzcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ0VsaWNpdGF0aW9uJztcbmltcG9ydCBQcmVjaXNlU3dpbmdXZWlnaHRpbmcgZnJvbSAnc3JjL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1dlaWdodGluZyc7XG5pbXBvcnQgUmFua2luZ0VsaWNpdGF0aW9uIGZyb20gJ3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0VsaWNpdGF0aW9uJztcbmltcG9ydCB7VEVsaWNpdGF0aW9uTWV0aG9kfSBmcm9tICdzcmMvVHlwZXMvVEVsaWNpdGF0aW9uTWV0aG9kJztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnR9IGZyb20gJy4uL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmVmZXJlbmNlRWxpY2l0YXRpb24oe1xuICBjcml0ZXJpYSxcbiAgZWxpY2l0YXRpb25NZXRob2QsXG4gIG1hbnVhbEhvc3QsXG4gIG1hbnVhbExleGljb24sXG4gIG1hbnVhbFBhdGgsXG4gIHByZXZpb3VzQ2FsbGJhY2ssXG4gIHB2ZnMsXG4gIHNob3dQZXJjZW50YWdlcyxcbiAgY2FuY2VsQ2FsbGJhY2ssXG4gIHNhdmVDYWxsYmFjayxcbiAgdGVtcGxhdGVcbn06IHtcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXTtcbiAgZWxpY2l0YXRpb25NZXRob2Q6IFRFbGljaXRhdGlvbk1ldGhvZDtcbiAgbWFudWFsSG9zdDogc3RyaW5nO1xuICBtYW51YWxMZXhpY29uOiBSZWNvcmQ8c3RyaW5nLCBJSGVscEluZm8+O1xuICBtYW51YWxQYXRoOiBzdHJpbmc7XG4gIHByZXZpb3VzQ2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xuICBwdmZzOiBSZWNvcmQ8c3RyaW5nLCBUUHZmPjtcbiAgc2hvd1BlcmNlbnRhZ2VzOiBib29sZWFuO1xuICBjYW5jZWxDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgc2F2ZUNhbGxiYWNrOiAoXG4gICAgcHJlZmVyZW5jZXM6IElFeGFjdFN3aW5nUmF0aW9bXSB8IElSYXRpb0JvdW5kQ29uc3RyYWludFtdIHwgSVJhbmtpbmdbXVxuICApID0+IHZvaWQ7XG4gIHRlbXBsYXRlPzogc3RyaW5nO1xufSk6IEpTWC5FbGVtZW50IHtcbiAgZnVuY3Rpb24gcmVuZGVyRWxpY2l0YXRpb24oXG4gICAgZWxpY2l0YXRpb25NZXRob2Q6IFRFbGljaXRhdGlvbk1ldGhvZFxuICApOiBKU1guRWxlbWVudCB7XG4gICAgc3dpdGNoIChlbGljaXRhdGlvbk1ldGhvZCkge1xuICAgICAgY2FzZSAncHJlY2lzZSc6XG4gICAgICAgIHJldHVybiA8UHJlY2lzZVN3aW5nV2VpZ2h0aW5nIC8+O1xuICAgICAgY2FzZSAnaW1wcmVjaXNlJzpcbiAgICAgICAgcmV0dXJuIDxJbXByZWNpc2VTd2luZ1dlaWdodGluZyAvPjtcbiAgICAgIGNhc2UgJ21hdGNoaW5nJzpcbiAgICAgICAgcmV0dXJuIDxNYXRjaGluZ0VsaWNpdGF0aW9uIC8+O1xuICAgICAgY2FzZSAncmFua2luZyc6XG4gICAgICAgIHJldHVybiA8UmFua2luZ0VsaWNpdGF0aW9uIC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50XG4gICAgICBwcmV2aW91c0NhbGxiYWNrPXtwcmV2aW91c0NhbGxiYWNrfVxuICAgICAgY3JpdGVyaWE9e2NyaXRlcmlhfVxuICAgICAgZWxpY2l0YXRpb25NZXRob2Q9e2VsaWNpdGF0aW9uTWV0aG9kfVxuICAgICAgc2hvd1BlcmNlbnRhZ2VzPXtzaG93UGVyY2VudGFnZXN9XG4gICAgICBwdmZzPXtwdmZzfVxuICAgICAgY2FuY2VsQ2FsbGJhY2s9e2NhbmNlbENhbGxiYWNrfVxuICAgICAgc2F2ZUNhbGxiYWNrPXtzYXZlQ2FsbGJhY2t9XG4gICAgICB0ZW1wbGF0ZT17dGVtcGxhdGV9XG4gICAgPlxuICAgICAgPEhlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnRcbiAgICAgICAgbGV4aWNvbj17bWFudWFsTGV4aWNvbn1cbiAgICAgICAgaG9zdD17bWFudWFsSG9zdH1cbiAgICAgICAgcGF0aD17bWFudWFsUGF0aH1cbiAgICAgID5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBjb21wb25lbnQ9e0JveH0gbXQ9ezJ9PlxuICAgICAgICAgIHtyZW5kZXJFbGljaXRhdGlvbihlbGljaXRhdGlvbk1ldGhvZCl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvSGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudD5cbiAgICA8L0VsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50PlxuICApO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElSYW5raW5nQW5zd2VyIGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhbmtpbmdBbnN3ZXInO1xuaW1wb3J0IHtcbiAgYXNzaWduTWlzc2luZ1JhbmtpbmdzLFxuICBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyxcbiAgZmluZENyaXRlcmlvbklkRm9yUmFuayxcbiAgVU5SQU5LRURcbn0gZnJvbSAnc3JjL1JhbmtpbmdVdGlsL1JhbmtpbmdVdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFua2luZ0J1dHRvbnMoe1xuICBzZWxlY3RlZENyaXRlcmlvbklkLFxuICBzZXRTZWxlY3RlZENyaXRlcmlvbklkXG59OiB7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQ6IHN0cmluZztcbiAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZDogKGNyaXRlcmlvbklkOiBzdHJpbmcpID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IHtcbiAgICBwcmV2aW91c0NhbGxiYWNrLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldFJhbmtpbmcsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgcmFua2luZ3MsXG4gICAgY3JpdGVyaWEsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIHNldFJhbmtpbmcoc2VsZWN0ZWRDcml0ZXJpb25JZCwgY3VycmVudFN0ZXApO1xuICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQoJycpO1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3QgZmluaXNoZWRSYW5raW5nczogUmVjb3JkPFxuICAgICAgc3RyaW5nLFxuICAgICAgSVJhbmtpbmdBbnN3ZXJcbiAgICA+ID0gYXNzaWduTWlzc2luZ1JhbmtpbmdzKFxuICAgICAgcmFua2luZ3MsXG4gICAgICBzZWxlY3RlZENyaXRlcmlvbklkLFxuICAgICAgY3VycmVudFN0ZXAsXG4gICAgICBjcml0ZXJpYVxuICAgICk7XG4gICAgY29uc3QgcHJlZmVyZW5jZXMgPSBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyhfLnRvQXJyYXkoZmluaXNoZWRSYW5raW5ncykpO1xuICAgIHNhdmVDYWxsYmFjayhwcmVmZXJlbmNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCkge1xuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMSkge1xuICAgICAgcHJldmlvdXNDYWxsYmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3VycmVudFN0ZXAgIT09IDEpIHtcbiAgICAgICAgcmVtb3ZlUmFua0Zyb21Dcml0ZXJpb24oKTtcbiAgICAgIH1cbiAgICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQoJycpO1xuICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVSYW5rRnJvbUNyaXRlcmlvbigpIHtcbiAgICBjb25zdCBsb29rdXBSYW5rID0gY3VycmVudFN0ZXAgLSAxO1xuICAgIGNvbnN0IGNyaXRlcmlvbklkID0gZmluZENyaXRlcmlvbklkRm9yUmFuayhjcml0ZXJpYSwgcmFua2luZ3MsIGxvb2t1cFJhbmspO1xuICAgIHNldFJhbmtpbmcoY3JpdGVyaW9uSWQsIFVOUkFOS0VEKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGFzdFN0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwID09PSBfLnNpemUoY3JpdGVyaWEpIC0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBjYW5jZWxDYWxsYmFjaygpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBvbkNsaWNrPXtjYW5jZWx9XG4gICAgICA+XG4gICAgICAgIENhbmNlbFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwicHJldmlvdXMtYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNDbGlja31cbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFwcmV2aW91c0NhbGxiYWNrICYmIGN1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7VU5SQU5LRUR9IGZyb20gJ3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uQ2hvaWNlIGZyb20gJy4uLy4uL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQ2hvaWNlcyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIGhhbmRsZVNlbGVjdGlvblxufToge1xuICBzZWxlY3RlZENyaXRlcmlvbklkOiBzdHJpbmc7XG4gIGhhbmRsZVNlbGVjdGlvbjogKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge3JhbmtpbmdzLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IGZpbHRlcmVkQ3JpdGVyaWEgPSBfLmZpbHRlcihcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgIXJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gfHwgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaW1wcm92ZW1lbnRzIGlzIG1vc3QgaW1wb3J0YW50P1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgbmFtZT1cInJhbmtpbmctY3JpdGVyaW9uLXJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge18ubWFwKGZpbHRlcmVkQ3JpdGVyaWEsIChjcml0ZXJpb24pID0+IChcbiAgICAgICAgICAgIDxDcml0ZXJpb25DaG9pY2Uga2V5PXtjcml0ZXJpb24uaWR9IGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge0lubGluZUhlbHB9IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBSYW5raW5nQnV0dG9ucyBmcm9tICcuL1JhbmtpbmdCdXR0b25zL1JhbmtpbmdCdXR0b25zJztcbmltcG9ydCBSYW5raW5nQ2hvaWNlcyBmcm9tICcuL1JhbmtpbmdDaG9pY2VzL1JhbmtpbmdDaG9pY2VzJztcbmltcG9ydCBSYW5raW5nU2l0dWF0aW9uIGZyb20gJy4vUmFua2luZ1NpdHVhdGlvbi9SYW5raW5nU2l0dWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFua2luZ0VsaWNpdGF0aW9uKCkge1xuICBjb25zdCBbc2VsZWN0ZWRDcml0ZXJpb25JZCwgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHtjdXJyZW50U3RlcCwgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCB0b3RhbFN0ZXBzID0gXy5zaXplKGNyaXRlcmlhKSAtIDE7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwicmFua2luZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICA8SW5saW5lSGVscCBoZWxwSWQ9XCJyYW5raW5nXCI+UmFua2luZzwvSW5saW5lSGVscD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFua2luZ1NpdHVhdGlvbiAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFua2luZ0Nob2ljZXNcbiAgICAgICAgICBoYW5kbGVTZWxlY3Rpb249e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgICBzZWxlY3RlZENyaXRlcmlvbklkPXtzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxSYW5raW5nQnV0dG9uc1xuICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQ9e3NlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZD17c2V0U2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2Yge3RvdGFsU3RlcHN9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtVTlJBTktFRH0gZnJvbSAnc3JjL1JhbmtpbmdVdGlsL1JhbmtpbmdVdGlsJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uU2l0dWF0aW9uIGZyb20gJy4uLy4uL0NyaXRlcmlvblNpdHVhdGlvbi9Dcml0ZXJpb25TaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nU2l0dWF0aW9uKCkge1xuICBjb25zdCB7cmFua2luZ3MsIHNob3dQZXJjZW50YWdlcywgcHZmcywgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZVRvRGlzcGxheShjcml0ZXJpb246IElDcml0ZXJpb24pIHtcbiAgICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICAgIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcbiAgICByZXR1cm4gIXJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gfHwgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICAgICAgPyBnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpXG4gICAgICA6IGdldEJlc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uU2l0dWF0aW9uXG4gICAgICAgICAga2V5PXtjcml0ZXJpb24uaWR9XG4gICAgICAgICAgY3JpdGVyaW9uPXtjcml0ZXJpb259XG4gICAgICAgICAgZGlzcGxheVZhbHVlPXtnZXRWYWx1ZVRvRGlzcGxheShjcml0ZXJpb24pfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5HaXZlbiB0aGUgZm9sbG93aW5nIHNpdHVhdGlvbjo8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtyZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5cbmV4cG9ydCBjb25zdCBVTlJBTktFRCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICByYW5rOiBudW1iZXJcbik6IHN0cmluZyB7XG4gIHJldHVybiBfLmZpbmQoXG4gICAgY3JpdGVyaWEsXG4gICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IGJvb2xlYW4gPT5cbiAgICAgIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gJiYgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSByYW5rXG4gICkuaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25NaXNzaW5nUmFua2luZ3MoXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgcmFuazogbnVtYmVyLFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdXG4pOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4ge1xuICBjb25zdCBpbnRlcm1lZGlhdGVSYW5raW5ncyA9IGFkZFJhbmtpbmcocmFua2luZ3MsIHNlbGVjdGVkQ3JpdGVyaW9uSWQsIHJhbmspO1xuICBjb25zdCBsYXN0Q3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRXaXRob3V0UmFua2luZyhcbiAgICBjcml0ZXJpYSxcbiAgICBpbnRlcm1lZGlhdGVSYW5raW5nc1xuICApO1xuICByZXR1cm4gYWRkUmFua2luZyhpbnRlcm1lZGlhdGVSYW5raW5ncywgbGFzdENyaXRlcmlvbklkLCByYW5rICsgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSYW5raW5nKFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICBjcml0ZXJpb25JZDogc3RyaW5nLFxuICByYW5rOiBudW1iZXJcbik6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPiB7XG4gIGxldCB1cGRhdGVkUmFua2luZ3MgPSBfLmNsb25lRGVlcChyYW5raW5ncyk7XG4gIGNvbnN0IG5ld1Jhbmtpbmc6IElSYW5raW5nQW5zd2VyID0ge1xuICAgIGNyaXRlcmlvbklkOiBjcml0ZXJpb25JZCxcbiAgICByYW5rOiByYW5rXG4gIH07XG4gIHVwZGF0ZWRSYW5raW5nc1tjcml0ZXJpb25JZF0gPSBuZXdSYW5raW5nO1xuICByZXR1cm4gdXBkYXRlZFJhbmtpbmdzO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3JpdGVyaW9uSWRXaXRob3V0UmFua2luZyhcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXSxcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPlxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIF8uZmluZChcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgcmFua2luZ3NbY3JpdGVyaW9uLmlkXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICkuaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyhhbnN3ZXJzOiBJUmFua2luZ0Fuc3dlcltdKTogSVJhbmtpbmdbXSB7XG4gIGNvbnN0IHNvcnRlZEFuc3dlcnM6IElSYW5raW5nQW5zd2VyW10gPSBfLnNvcnRCeShhbnN3ZXJzLCAncmFuaycpO1xuICByZXR1cm4gXy5yZWR1Y2UoXG4gICAgc29ydGVkQW5zd2VycyxcbiAgICAoYWNjdW06IElSYW5raW5nW10sIGFuc3dlcjogSVJhbmtpbmdBbnN3ZXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSBhbnN3ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgICAgfVxuICAgICAgY29uc3QgcmFua2luZzogSVJhbmtpbmcgPSB7XG4gICAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAncmFua2luZycsXG4gICAgICAgIHR5cGU6ICdvcmRpbmFsJyxcbiAgICAgICAgY3JpdGVyaWE6IFthbnN3ZXIuY3JpdGVyaW9uSWQsIHNvcnRlZEFuc3dlcnNbaWR4ICsgMV0uY3JpdGVyaW9uSWRdXG4gICAgICB9O1xuICAgICAgYWNjdW0ucHVzaChyYW5raW5nKTtcbiAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpbmdCdXR0b25zKCkge1xuICBjb25zdCB7XG4gICAgcHJldmlvdXNDYWxsYmFjayxcbiAgICBjdXJyZW50U3RlcCxcbiAgICBzZXRDdXJyZW50U3RlcCxcbiAgICBpc05leHREaXNhYmxlZCxcbiAgICBwcmVmZXJlbmNlcyxcbiAgICBjYW5jZWxDYWxsYmFjayxcbiAgICBzYXZlQ2FsbGJhY2tcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKSB7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzQ2xpY2soKSB7XG4gICAgaWYgKGN1cnJlbnRTdGVwID09PSAxKSB7XG4gICAgICBwcmV2aW91c0NhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlQnV0dG9uQ2xpY2soKSB7XG4gICAgc2F2ZUNhbGxiYWNrKE9iamVjdC52YWx1ZXMocHJlZmVyZW5jZXMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGFzdFN0ZXAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwID09PSAyO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgID5cbiAgICAgICAgQ2FuY2VsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJwcmV2aW91cy1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0NsaWNrfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFwcmV2aW91c0NhbGxiYWNrICYmIGN1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJbXByZWNpc2VTd2luZ1NsaWRlciBmcm9tICdzcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1NsaWRlci9JbXByZWNpc2VTd2luZ1NsaWRlcic7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IFByZWNpc2VTd2luZ1NsaWRlciBmcm9tICdzcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nU2xpZGVyL1ByZWNpc2VTd2luZ1NsaWRlcic7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZSwgZ2V0QmVzdCwgZ2V0VW5pdExhYmVsLCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyaXRlcmlvbk92ZXJ2aWV3KHtcbiAgY3JpdGVyaW9uXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbn0pIHtcbiAgY29uc3Qge3B2ZnMsIHNob3dQZXJjZW50YWdlcywgZWxpY2l0YXRpb25NZXRob2R9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcbiAgY29uc3QgdW5pdFR5cGUgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlclN3aW5nU2xpZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdwcmVjaXNlJykge1xuICAgICAgcmV0dXJuIDxQcmVjaXNlU3dpbmdTbGlkZXIgY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+O1xuICAgIH0gZWxzZSBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdpbXByZWNpc2UnKSB7XG4gICAgICByZXR1cm4gPEltcHJlY2lzZVN3aW5nU2xpZGVyIGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUYWJsZVJvdyBrZXk9e2NyaXRlcmlvbi5pZH0+XG4gICAgICA8VGFibGVDZWxsPlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNyaXRlcmlvbi10aXRsZVwiPntjcml0ZXJpb24udGl0bGV9PC9zcGFuPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgIHtnZXRVbml0TGFiZWwoXG4gICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgICApfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtnZXRCZXN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cmVuZGVyU3dpbmdTbGlkZXIoKX08L1RhYmxlQ2VsbD5cbiAgICA8L1RhYmxlUm93PlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgQ3JpdGVyaW9uT3ZlcnZpZXcgZnJvbSAnLi9Dcml0ZXJpb25PdmVydmlldy9Dcml0ZXJpb25PdmVydmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VGFibGUoKSB7XG4gIGNvbnN0IHtjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uT3ZlcnZpZXdzKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvbk92ZXJ2aWV3IGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XG4gICAgICA8VGFibGVIZWFkPlxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbD5Dcml0ZXJpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPlVuaXQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+V29yc3Q8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QmVzdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JbXBvcnRhbmNlPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlSGVhZD5cbiAgICAgIDxUYWJsZUJvZHk+e3JlbmRlckNyaXRlcmlvbk92ZXJ2aWV3cygpfTwvVGFibGVCb2R5PlxuICAgIDwvVGFibGU+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge2dldFN3aW5nU3RhdGVtZW50fSBmcm9tICdzcmMvU3dpbmdVdGlsL1N3aW5nVXRpbCc7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZX0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgT3ZlcnZpZXdUYWJsZSBmcm9tICcuL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aW5nU2V0V2VpZ2h0cygpIHtcbiAgY29uc3Qge1xuICAgIHB2ZnMsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICBnZXRDcml0ZXJpb24sXG4gICAgdGVtcGxhdGVcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBjcml0ZXJpb24gPSBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9XG4gICAgc2hvd1BlcmNlbnRhZ2VzICYmXG4gICAgY2FuQmVQZXJjZW50YWdlKGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlKTtcblxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBnZXRTd2luZ1N0YXRlbWVudChjcml0ZXJpb24sIHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSwgdGVtcGxhdGUpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGF0ZW1lbnQoXG4gICAgICBnZXRTd2luZ1N0YXRlbWVudChjcml0ZXJpb24sIHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSwgdGVtcGxhdGUpXG4gICAgKTtcbiAgfSwgW3Nob3dQZXJjZW50YWdlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZFxuICAgICAgICBpdGVtXG4gICAgICAgIHhzPXsxMn1cbiAgICAgICAgaWQ9e2Ake2VsaWNpdGF0aW9uTWV0aG9kfS1zd2luZy1zdGF0ZW1lbnRgfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc3RhdGVtZW50fX1cbiAgICAgIC8+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxPdmVydmlld1RhYmxlIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSUV4YWN0U3dpbmdSYXRpbyBmcm9tICdzcmMvSW50ZXJmYWNlL0lFeGFjdFN3aW5nUmF0aW8nO1xuaW1wb3J0IElSYXRpb0JvdW5kQ29uc3RyYWludCBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge2dldEJlc3QsIGdldFVuaXRMYWJlbCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFID1cbiAgXCJZb3UndmUgaW5kaWNhdGVkIHRoYXQgaW1wcm92aW5nICVjcml0ZXJpb24xJSBmcm9tICV3b3JzdDElICV1bml0MSUgdG8gJWJlc3QxJSAldW5pdDElIGlzIHRoZSBtb3N0IGltcG9ydGFudCAoaS5lLiBpdCBoYXMgMTAwJSBpbXBvcnRhbmNlKS4gTm93IGluZGljYXRlIHRoZSByZWxhdGl2ZSBpbXBvcnRhbmNlIChpbiAlKSB0byB0aGlzIGltcHJvdmVtZW50IG9mIGVhY2ggb3RoZXIgY3JpdGVyaW9uJ3MgaW1wcm92ZW1lbnQgdXNpbmcgdGhlIHNsaWRlcnMgYmVsb3cuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nXG4pOiBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5maWx0ZXIoXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgICBjcml0ZXJpb24uaWQgIT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICAgIClcbiAgICAubWFwKChjcml0ZXJpb246IElDcml0ZXJpb24pOiBbc3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvXSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uLmlkXSxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdwcmVjaXNlJyxcbiAgICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgICAgcmF0aW86IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gW2NyaXRlcmlvbi5pZCwgcHJlZmVyZW5jZV07XG4gICAgfSlcbiAgICAuZnJvbVBhaXJzKClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZ1xuKTogUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5yZWplY3QoWydpZCcsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pXG4gICAgLmtleUJ5KCdpZCcpXG4gICAgLm1hcFZhbHVlcyhcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPT4ge1xuICAgICAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICAgICAgYm91bmRzOiBbMSwgMTAwXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZTtcbiAgICAgIH1cbiAgICApXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTd2luZ1N0YXRlbWVudChcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uLFxuICBwdmY6IFRQdmYsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW4sXG4gIHRlbXBsYXRlPzogc3RyaW5nXG4pOiBzdHJpbmcge1xuICBjb25zdCB1bml0ID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50O1xuICBjb25zdCBsYWJlbCA9IGdldFVuaXRMYWJlbCh1bml0LCB1c2VQZXJjZW50YWdlKTtcbiAgY29uc3Qgc3dpbmdUZW1wbGF0ZSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiBERUZBVUxUX1BSRUNJU0VfVEVNUExBVEU7XG4gIHJldHVybiBzd2luZ1RlbXBsYXRlXG4gICAgLnJlcGxhY2UoLyVjcml0ZXJpb24xJS9naSwgY3JpdGVyaW9uLnRpdGxlKVxuICAgIC5yZXBsYWNlKC8ldW5pdDElL2dpLCBsYWJlbClcbiAgICAucmVwbGFjZSgvJXdvcnN0MSUvZ2ksIFN0cmluZyhnZXRXb3JzdChwdmYsIHVzZVBlcmNlbnRhZ2UpKSlcbiAgICAucmVwbGFjZSgvJWJlc3QxJS9naSwgU3RyaW5nKGdldEJlc3QocHZmLCB1c2VQZXJjZW50YWdlKSkpO1xufVxuIiwiaW1wb3J0IElVbml0T2ZNZWFzdXJlbWVudCwge1xuICBVbml0T2ZNZWFzdXJlbWVudFR5cGVcbn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JVW5pdE9mTWVhc3VyZW1lbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlOiBVbml0T2ZNZWFzdXJlbWVudFR5cGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIHVuaXRUeXBlID09PSAncGVyY2VudGFnZScgfHwgdW5pdFR5cGUgPT09ICdkZWNpbWFsJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlc3QocHZmOiBUUHZmLCB1c2VQZXJjZW50YWdlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzaWduaWZpY2FudERpZ2l0cyhcbiAgICBpc0luY3JlYXNpbmcocHZmKSA/IHB2Zi5yYW5nZVsxXSA6IHB2Zi5yYW5nZVswXVxuICApO1xuICByZXR1cm4gZ2V0UGVyY2VudGlmaWVkVmFsdWUodmFsdWUsIHVzZVBlcmNlbnRhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29yc3QocHZmOiBUUHZmLCB1c2VQZXJjZW50YWdlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzaWduaWZpY2FudERpZ2l0cyhcbiAgICBpc0luY3JlYXNpbmcocHZmKSA/IHB2Zi5yYW5nZVswXSA6IHB2Zi5yYW5nZVsxXVxuICApO1xuICByZXR1cm4gZ2V0UGVyY2VudGlmaWVkVmFsdWUodmFsdWUsIHVzZVBlcmNlbnRhZ2UpO1xufVxuXG5mdW5jdGlvbiBpc0luY3JlYXNpbmcocHZmOiBUUHZmKTogYm9vbGVhbiB7XG4gIHJldHVybiBwdmYuZGlyZWN0aW9uID09PSAnaW5jcmVhc2luZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25pZmljYW50RGlnaXRzKHg6IG51bWJlciwgcHJlY2lzaW9uPzogbnVtYmVyKSB7XG4gIGlmIChwcmVjaXNpb24gIT09IDAgJiYgIXByZWNpc2lvbikge1xuICAgIHByZWNpc2lvbiA9IDM7XG4gIH1cbiAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsIHx8IGlzTmFOKHgpKSB7XG4gICAgdGhyb3cgJ2F0dGVtcHQgdG8gYXBwbHkgc2lnbmlmaWNhbnQgZGlnaXRzIHRvIG5vbi1udW1lcmljIHZhbHVlJztcbiAgfSBlbHNlIGlmICh4ID09PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSBpZiAoeCA+IDEgfHwgeCA8IC0xKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHgudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoeC50b1ByZWNpc2lvbihwcmVjaXNpb24pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudGlmaWVkVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW5cbik6IG51bWJlciB7XG4gIGlmICh1c2VQZXJjZW50YWdlKSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKSAqIDEwMCk7IC8vMiBzaWdkaXRzIHRvIGVuc3VyZSB0aGUgcHJlY2lzaW9uIHN0YXlzIHRoZSBzYW1lXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdExhYmVsKFxuICB1bml0OiBJVW5pdE9mTWVhc3VyZW1lbnQsXG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgaWYgKHNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdkZWNpbWFsJykge1xuICAgIHJldHVybiAnJSc7XG4gIH0gZWxzZSBpZiAoIXNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5pdC5sYWJlbDtcbiAgfVxufVxuIiwiaW1wb3J0IFByZWZlcmVuY2VFbGljaXRhdGlvbiBmcm9tICcuL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24nO1xuXG5leHBvcnQge1ByZWZlcmVuY2VFbGljaXRhdGlvbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQm94X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9CdXR0b25Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9HcmlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BhcGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BvcG92ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9TbGlkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVCb2R5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQ2VsbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVSb3dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVG9vbHRpcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9