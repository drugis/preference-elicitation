(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@material-ui/core"), require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("help-popup"), require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["@material-ui/core", "@material-ui/core/Button", "@material-ui/core/ButtonGroup", "@material-ui/core/Grid", "@material-ui/core/Paper", "@material-ui/core/Radio", "@material-ui/core/RadioGroup", "@material-ui/core/Slider", "@material-ui/core/Table", "@material-ui/core/TableBody", "@material-ui/core/TableCell", "@material-ui/core/TableHead", "@material-ui/core/TableRow", "@material-ui/core/Tooltip", "@material-ui/core/Typography", "help-popup", "react", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@material-ui/core"), require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("help-popup"), require("react"), require("lodash")) : factory(root["@material-ui/core"], root["@material-ui/core/Button"], root["@material-ui/core/ButtonGroup"], root["@material-ui/core/Grid"], root["@material-ui/core/Paper"], root["@material-ui/core/Radio"], root["@material-ui/core/RadioGroup"], root["@material-ui/core/Slider"], root["@material-ui/core/Table"], root["@material-ui/core/TableBody"], root["@material-ui/core/TableCell"], root["@material-ui/core/TableHead"], root["@material-ui/core/TableRow"], root["@material-ui/core/Tooltip"], root["@material-ui/core/Typography"], root["help-popup"], root["react"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__material_ui_core__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ButtonGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Table__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableBody__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableCell__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableHead__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableRow__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tooltip__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__, __WEBPACK_EXTERNAL_MODULE_help_popup__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CriterionChoice/CriterionChoice.tsx":
/*!*************************************************!*\
  !*** ./src/CriterionChoice/CriterionChoice.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const core_1 = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
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
    const label = (react_1.default.createElement(react_1.default.Fragment, null,
        `${pvf.direction} `,
        react_1.default.createElement(Tooltip_1.default, { disableHoverListener: !criterion.description, title: criterion.description ? criterion.description : '' },
            react_1.default.createElement("span", { id: `criterion-option-${criterion.id}`, className: "criterion-title" }, criterion.title)),
        ` from ${worst} to ${best}`));
    return (react_1.default.createElement(core_1.FormControlLabel, { id: `ranking-choice-${criterion.id}`, control: react_1.default.createElement(Radio_1.default, { value: criterion.id, color: "primary" }), label: label }));
}
exports.default = CriterionChoice;


/***/ }),

/***/ "./src/CriterionSituation/CriterionSituation.tsx":
/*!*******************************************************!*\
  !*** ./src/CriterionSituation/CriterionSituation.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const core_1 = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
const Tooltip_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const util_1 = __webpack_require__(/*! src/Util/util */ "./src/Util/util.ts");
function CriterionSituation({ criterion, displayValue }) {
    const { showPercentages } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    return (react_1.default.createElement("ul", null,
        react_1.default.createElement("li", { id: `situation-${criterion.id}` },
            react_1.default.createElement(core_1.Typography, null,
                react_1.default.createElement(Tooltip_1.default, { disableHoverListener: !criterion.description, title: criterion.description ? criterion.description : '' },
                    react_1.default.createElement("span", { id: `situation-title-${criterion.id}`, className: "criterion-title" }, `${criterion.title}: `)),
                react_1.default.createElement("span", { id: `situation-value-${criterion.id}` }, `${displayValue} ${util_1.getUnitLabel(criterion.dataSources[0].unitOfMeasurement, showPercentages)}`)))));
}
exports.default = CriterionSituation;


/***/ }),

/***/ "./src/ElicitationContext/ElicitationContext.tsx":
/*!*******************************************************!*\
  !*** ./src/ElicitationContext/ElicitationContext.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
function ElicitationContextProviderComponent({ elicitationMethod, criteria, showPercentages, previousCallback, pvfs, cancelCallback, saveCallback, template, stepSizesByCriterion, children }) {
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
            stepSizesByCriterion,
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
const help_popup_1 = __webpack_require__(/*! help-popup */ "help-popup");
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
                react_1.default.createElement(Typography_1.default, null,
                    "Step ",
                    currentStep,
                    " of 2")))));
}
exports.default = ImpreciseSwingWeighting;


/***/ }),

/***/ "./src/MatchingElicitation/MatchingButtons/MatchingButtons.tsx":
/*!*********************************************************************!*\
  !*** ./src/MatchingElicitation/MatchingButtons/MatchingButtons.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    return (react_1.default.createElement(ButtonGroup_1.default, { size: "small" },
        cancelCallback ? (react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "secondary", variant: "contained", onClick: cancel }, "Cancel")) : (react_1.default.createElement(react_1.default.Fragment, null)),
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
const help_popup_1 = __webpack_require__(/*! help-popup */ "help-popup");
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
                react_1.default.createElement(Typography_1.default, null,
                    "Step ",
                    currentStep,
                    " of ",
                    totalSteps)))));
}
exports.default = MatchingElicitation;


/***/ }),

/***/ "./src/MatchingElicitation/MatchingSetImportance/MatchingSetImportance.tsx":
/*!*********************************************************************************!*\
  !*** ./src/MatchingElicitation/MatchingSetImportance/MatchingSetImportance.tsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, id: "matching-statement" },
            react_1.default.createElement(Typography_1.default, { dangerouslySetInnerHTML: { __html: statement } })),
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
    const { currentStep, setIsNextDisabled, mostImportantCriterionId, setPreference, showPercentages, pvfs, getCriterion, stepSizesByCriterion } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const mostImportantCriterion = getCriterion(mostImportantCriterionId);
    const pvf = pvfs[mostImportantCriterionId];
    const worstValue = util_1.getWorst(pvf, false);
    const stepSize = stepSizesByCriterion[mostImportantCriterionId];
    const minSliderValue = pvf.range[0] === worstValue ? pvf.range[0] + stepSize : pvf.range[0];
    const maxSliderValue = pvf.range[1] === worstValue ? pvf.range[1] - stepSize : pvf.range[1];
    const unitType = mostImportantCriterion.dataSources[0].unitOfMeasurement.type;
    const usePercentage = showPercentages && util_1.canBePercentage(unitType);
    const [sliderValue, setSliderValue] = react_1.useState(util_1.getBest(pvfs[mostImportantCriterionId], usePercentage));
    react_1.useEffect(() => {
        const sliderValue = util_1.getBest(pvf, false);
        setSliderValue(sliderValue);
        setPreference(currentCriterionId, MatchingUtil_1.calculateImportance(sliderValue, pvf));
    }, [currentStep]);
    function handleSliderChanged(event, newValue) {
        setSliderValue(newValue);
        setIsNextDisabled(util_1.default(newValue) === worstValue);
        setPreference(currentCriterionId, MatchingUtil_1.calculateImportance(newValue, pvf));
    }
    function displayValue() {
        return usePercentage
            ? util_1.default(sliderValue * 100)
            : util_1.default(sliderValue);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        displayValue(),
        react_1.default.createElement(Slider_1.default, { id: "matching-slider", value: sliderValue, min: minSliderValue, max: maxSliderValue, onChange: handleSliderChanged, step: stepSize })));
}
exports.default = MatchingSlider;


/***/ }),

/***/ "./src/MatchingUtil/MatchingUtil.ts":
/*!******************************************!*\
  !*** ./src/MatchingUtil/MatchingUtil.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const help_popup_1 = __webpack_require__(/*! help-popup */ "help-popup");
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
                react_1.default.createElement(Typography_1.default, null,
                    "Step ",
                    currentStep,
                    " of 2")))));
}
exports.default = PreciseSwingWeighting;


/***/ }),

/***/ "./src/PreferenceElicitation/PreferenceElicitation.tsx":
/*!*************************************************************!*\
  !*** ./src/PreferenceElicitation/PreferenceElicitation.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
const help_popup_1 = __webpack_require__(/*! help-popup */ "help-popup");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const ImpreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! src/ImpreciseSwingElicitation/ImpreciseSwingWeighting */ "./src/ImpreciseSwingElicitation/ImpreciseSwingWeighting.tsx"));
const MatchingElicitation_1 = __importDefault(__webpack_require__(/*! src/MatchingElicitation/MatchingElicitation */ "./src/MatchingElicitation/MatchingElicitation.tsx"));
const PreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! src/PreciseSwingElicitation/PreciseSwingWeighting */ "./src/PreciseSwingElicitation/PreciseSwingWeighting.tsx"));
const RankingElicitation_1 = __importDefault(__webpack_require__(/*! src/RankingElicitation/RankingElicitation */ "./src/RankingElicitation/RankingElicitation.tsx"));
const ElicitationContext_1 = __webpack_require__(/*! ../ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
function PreferenceElicitation({ criteria, elicitationMethod, manualHost, manualLexicon, manualPath, previousCallback, pvfs, showPercentages, stepSizesByCriterion, cancelCallback, saveCallback, template }) {
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
    return (react_1.default.createElement(ElicitationContext_1.ElicitationContextProviderComponent, { previousCallback: previousCallback, criteria: criteria, elicitationMethod: elicitationMethod, showPercentages: showPercentages, pvfs: pvfs, cancelCallback: cancelCallback, saveCallback: saveCallback, template: template, stepSizesByCriterion: stepSizesByCriterion },
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
    return (react_1.default.createElement(ButtonGroup_1.default, { size: "small" },
        cancelCallback ? (react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "secondary", variant: "contained", onClick: cancel }, "Cancel")) : (react_1.default.createElement(react_1.default.Fragment, null)),
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
const help_popup_1 = __webpack_require__(/*! help-popup */ "help-popup");
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
                react_1.default.createElement(Typography_1.default, null,
                    "Step ",
                    currentStep,
                    " of ",
                    totalSteps)))));
}
exports.default = RankingElicitation;


/***/ }),

/***/ "./src/RankingElicitation/RankingSituation/RankingSituation.tsx":
/*!**********************************************************************!*\
  !*** ./src/RankingElicitation/RankingSituation/RankingSituation.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    return (react_1.default.createElement(ButtonGroup_1.default, { size: "small" },
        cancelCallback ? (react_1.default.createElement(Button_1.default, { id: "cancel-button", color: "secondary", variant: "contained", onClick: cancel }, "Cancel")) : (react_1.default.createElement(react_1.default.Fragment, null)),
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
const core_1 = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
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
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, id: `${elicitationMethod}-swing-statement` },
            react_1.default.createElement(core_1.Typography, { dangerouslySetInnerHTML: { __html: statement } })),
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

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core__;

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__;

/***/ }),

/***/ "@material-ui/core/ButtonGroup":
/*!************************************************!*\
  !*** external "@material-ui/core/ButtonGroup" ***!
  \************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_ButtonGroup__;

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__;

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__;

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__;

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__;

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__;

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Table__;

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableBody__;

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableCell__;

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableHead__;

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableRow__;

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tooltip__;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__;

/***/ }),

/***/ "help-popup":
/*!*****************************!*\
  !*** external "help-popup" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_help_popup__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/***/ ((module) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdTbGlkZXIvSW1wcmVjaXNlU3dpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1dlaWdodGluZy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nQnV0dG9ucy9NYXRjaGluZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ0VsaWNpdGF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2V0SW1wb3J0YW5jZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nU2V0SW1wb3J0YW5jZS9NYXRjaGluZ1NsaWRlci9NYXRjaGluZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ1V0aWwvTWF0Y2hpbmdVdGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1NsaWRlci9QcmVjaXNlU3dpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nV2VpZ2h0aW5nLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdCdXR0b25zL1JhbmtpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nQ2hvaWNlcy9SYW5raW5nQ2hvaWNlcy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0VsaWNpdGF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nU2l0dWF0aW9uL1JhbmtpbmdTaXR1YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ0J1dHRvbnMvU3dpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nU2V0V2VpZ2h0cy9PdmVydmlld1RhYmxlL0NyaXRlcmlvbk92ZXJ2aWV3L0NyaXRlcmlvbk92ZXJ2aWV3LnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nU2V0V2VpZ2h0cy9PdmVydmlld1RhYmxlL092ZXJ2aWV3VGFibGUudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL1N3aW5nU2V0V2VpZ2h0cy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1V0aWwvU3dpbmdVdGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvVXRpbC91dGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJoZWxwLXBvcHVwXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIixcInJvb3RcIjpcIl9cIn0iLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLGlGQUFtRDtBQUNuRCwrR0FBNEM7QUFDNUMscUhBQWdEO0FBQ2hELHdFQUF3QztBQUN4QyxxSkFBNkU7QUFFN0UsOEVBQThDO0FBQzlDLDZFQUErQztBQUUvQyxTQUF3QixlQUFlLENBQUMsRUFBQyxTQUFTLEVBQTBCO0lBQzFFLE1BQU0sRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLEdBQUcsa0JBQVUsQ0FBQyx1Q0FBa0IsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDakUsTUFBTSxhQUFhLEdBQUcsZUFBZSxJQUFJLHNCQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsTUFBTSxLQUFLLEdBQUcsZUFBUSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMzQyxNQUFNLElBQUksR0FBRyxjQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sS0FBSyxHQUFnQixDQUN6QjtRQUNHLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRztRQUNwQiw4QkFBQyxpQkFBTyxJQUNO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Q0FBLG9EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwiaGVscC1wb3B1cFwiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBtYXRlcmlhbC11aS9jb3JlXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiwgXCJoZWxwLXBvcHVwXCIsIFwicmVhY3RcIiwgXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJoZWxwLXBvcHVwXCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIikpIDogZmFjdG9yeShyb290W1wiQG1hdGVyaWFsLXVpL2NvcmVcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXSwgcm9vdFtcImhlbHAtcG9wdXBcIl0sIHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcIl9cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbkdyb3VwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfR3JpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BhcGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9SYWRpb0dyb3VwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfU2xpZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUJvZHlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUNlbGxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZVJvd19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1Rvb2x0aXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfaGVscF9wb3B1cF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbG9kYXNoX18pIHtcbnJldHVybiAiLCJpbXBvcnQge0Zvcm1Db250cm9sTGFiZWx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2V9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IHtnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnLi4vVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uQ2hvaWNlKHtjcml0ZXJpb259OiB7Y3JpdGVyaW9uOiBJQ3JpdGVyaW9ufSkge1xuICBjb25zdCB7cHZmcywgc2hvd1BlcmNlbnRhZ2VzfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgcHZmID0gcHZmc1tjcml0ZXJpb24uaWRdO1xuICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG4gIGNvbnN0IHdvcnN0ID0gZ2V0V29yc3QocHZmLCB1c2VQZXJjZW50YWdlKTtcbiAgY29uc3QgYmVzdCA9IGdldEJlc3QocHZmLCB1c2VQZXJjZW50YWdlKTtcblxuICBjb25zdCBsYWJlbDogSlNYLkVsZW1lbnQgPSAoXG4gICAgPD5cbiAgICAgIHtgJHtwdmYuZGlyZWN0aW9ufSBgfVxuICAgICAgPFRvb2x0aXBcbiAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBpZD17YGNyaXRlcmlvbi1vcHRpb24tJHtjcml0ZXJpb24uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIlxuICAgICAgICA+XG4gICAgICAgICAge2NyaXRlcmlvbi50aXRsZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICAge2AgZnJvbSAke3dvcnN0fSB0byAke2Jlc3R9YH1cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICBpZD17YHJhbmtpbmctY2hvaWNlLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICBjb250cm9sPXs8UmFkaW8gdmFsdWU9e2NyaXRlcmlvbi5pZH0gY29sb3I9XCJwcmltYXJ5XCIgLz59XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Z2V0VW5pdExhYmVsfSBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uU2l0dWF0aW9uKHtcbiAgY3JpdGVyaW9uLFxuICBkaXNwbGF5VmFsdWVcbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xuICBkaXNwbGF5VmFsdWU6IG51bWJlcjtcbn0pIHtcbiAgY29uc3Qge3Nob3dQZXJjZW50YWdlc30gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8bGkgaWQ9e2BzaXR1YXRpb24tJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBkaXNhYmxlSG92ZXJMaXN0ZW5lcj17IWNyaXRlcmlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBpZD17YHNpdHVhdGlvbi10aXRsZS0ke2NyaXRlcmlvbi5pZH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIlxuICAgICAgICAgICAgPntgJHtjcml0ZXJpb24udGl0bGV9OiBgfTwvc3Bhbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGlkPXtgc2l0dWF0aW9uLXZhbHVlLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICAgICAgPntgJHtkaXNwbGF5VmFsdWV9ICR7Z2V0VW5pdExhYmVsKFxuICAgICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgICAgICAgKX1gfTwvc3Bhbj5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge2FkZFJhbmtpbmd9IGZyb20gJ3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbCc7XG5pbXBvcnQge1xuICBidWlsZEluaXRpYWxJbXByZWNpc2VQcmVmZXJlbmNlcyxcbiAgYnVpbGRJbml0aWFsUHJlY2lzZVByZWZlcmVuY2VzXG59IGZyb20gJ3NyYy9Td2luZ1V0aWwvU3dpbmdVdGlsJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJy4uL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJRXhhY3RTd2luZ1JhdGlvIGZyb20gJy4uL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnLi4vSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5pbXBvcnQge1RFbGljaXRhdGlvbk1ldGhvZH0gZnJvbSAnLi4vVHlwZXMvVEVsaWNpdGF0aW9uTWV0aG9kJztcbmltcG9ydCBJRWxpY2l0YXRpb25Db250ZXh0IGZyb20gJy4vSUVsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBFbGljaXRhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PElFbGljaXRhdGlvbkNvbnRleHQ+KFxuICB7fSBhcyBJRWxpY2l0YXRpb25Db250ZXh0XG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gRWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnQoe1xuICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgY3JpdGVyaWEsXG4gIHNob3dQZXJjZW50YWdlcyxcbiAgcHJldmlvdXNDYWxsYmFjayxcbiAgcHZmcyxcbiAgY2FuY2VsQ2FsbGJhY2ssXG4gIHNhdmVDYWxsYmFjayxcbiAgdGVtcGxhdGUsXG4gIHN0ZXBTaXplc0J5Q3JpdGVyaW9uLFxuICBjaGlsZHJlblxufToge1xuICBlbGljaXRhdGlvbk1ldGhvZDogVEVsaWNpdGF0aW9uTWV0aG9kO1xuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdO1xuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW47XG4gIHByZXZpb3VzQ2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xuICBwdmZzOiBSZWNvcmQ8c3RyaW5nLCBUUHZmPjtcbiAgY2FuY2VsQ2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xuICBzYXZlQ2FsbGJhY2s6IChcbiAgICBwcmVmZXJlbmNlczogSUV4YWN0U3dpbmdSYXRpb1tdIHwgSVJhdGlvQm91bmRDb25zdHJhaW50W10gfCBJUmFua2luZ1tdXG4gICkgPT4gdm9pZDtcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIHN0ZXBTaXplc0J5Q3JpdGVyaW9uOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xuICBjaGlsZHJlbjogYW55O1xufSk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2lzTmV4dERpc2FibGVkLCBzZXRJc05leHREaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkXSA9XG4gICAgdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtwcmVmZXJlbmNlcywgc2V0UHJlZmVyZW5jZXNdID0gdXNlU3RhdGU8XG4gICAgUmVjb3JkPHN0cmluZywgSUV4YWN0U3dpbmdSYXRpbz4gfCBSZWNvcmQ8c3RyaW5nLCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQ+XG4gID4oe30pO1xuICBjb25zdCBbcmFua2luZ3MsIHNldFJhbmtpbmdzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPj4oe30pO1xuXG4gIGZ1bmN0aW9uIHNldFJhbmtpbmcoY3JpdGVyaW9uSWQ6IHN0cmluZywgcmFuazogbnVtYmVyKSB7XG4gICAgY29uc3QgdXBkYXRlZFJhbmtpbmdzID0gYWRkUmFua2luZyhyYW5raW5ncywgY3JpdGVyaW9uSWQsIHJhbmspO1xuICAgIHNldFJhbmtpbmdzKHVwZGF0ZWRSYW5raW5ncyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uQW5kUHJlZmVyZW5jZXMoY3JpdGVyaW9uSWQ6IHN0cmluZykge1xuICAgIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ3ByZWNpc2UnKSB7XG4gICAgICBzZXRQcmVmZXJlbmNlcyhidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoY3JpdGVyaWEsIGNyaXRlcmlvbklkKSk7XG4gICAgfSBlbHNlIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ2ltcHJlY2lzZScpIHtcbiAgICAgIHNldFByZWZlcmVuY2VzKGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKGNyaXRlcmlhLCBjcml0ZXJpb25JZCkpO1xuICAgIH1cbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQoY3JpdGVyaW9uSWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJlZmVyZW5jZShjcml0ZXJpb25JZDogc3RyaW5nLCBhbnN3ZXI6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCB1cGRhdGVkUHJlZmVyZW5jZXMgPSBfLmNsb25lRGVlcChwcmVmZXJlbmNlcyk7XG4gICAgY29uc3QgcHJlZmVyZW5jZTogSUV4YWN0U3dpbmdSYXRpbyA9IHtcbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICAgIHR5cGU6ICdleGFjdCBzd2luZycsXG4gICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uSWRdLFxuICAgICAgcmF0aW86IDEwMCAvIGFuc3dlclxuICAgIH07XG4gICAgdXBkYXRlZFByZWZlcmVuY2VzW2NyaXRlcmlvbklkXSA9IHByZWZlcmVuY2U7XG4gICAgc2V0UHJlZmVyZW5jZXModXBkYXRlZFByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEJvdW5kUHJlZmVyZW5jZShcbiAgICBjcml0ZXJpb25JZDogc3RyaW5nLFxuICAgIGFuc3dlcjogW251bWJlciwgbnVtYmVyXVxuICApOiB2b2lkIHtcbiAgICBsZXQgdXBkYXRlZFByZWZlcmVuY2VzID0gXy5jbG9uZURlZXAocHJlZmVyZW5jZXMpO1xuICAgIGNvbnN0IHByZWZlcmVuY2U6IElSYXRpb0JvdW5kQ29uc3RyYWludCA9IHtcbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAnaW1wcmVjaXNlJyxcbiAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uSWRdLFxuICAgICAgYm91bmRzOiBbMTAwIC8gYW5zd2VyWzFdLCAxMDAgLyBhbnN3ZXJbMF1dXG4gICAgfTtcbiAgICB1cGRhdGVkUHJlZmVyZW5jZXNbY3JpdGVyaW9uSWRdID0gcHJlZmVyZW5jZTtcbiAgICBzZXRQcmVmZXJlbmNlcyh1cGRhdGVkUHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3JpdGVyaW9uKGlkOiBzdHJpbmcpOiBJQ3JpdGVyaW9uIHtcbiAgICByZXR1cm4gXy5maW5kKGNyaXRlcmlhLCBbJ2lkJywgaWRdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVsaWNpdGF0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY3VycmVudFN0ZXAsXG4gICAgICAgIGlzTmV4dERpc2FibGVkLFxuICAgICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICAgICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgICAgICBwdmZzLFxuICAgICAgICBjcml0ZXJpYSxcbiAgICAgICAgcmFua2luZ3MsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICBzdGVwU2l6ZXNCeUNyaXRlcmlvbixcbiAgICAgICAgZ2V0Q3JpdGVyaW9uLFxuICAgICAgICBwcmV2aW91c0NhbGxiYWNrLFxuICAgICAgICBzZXRDdXJyZW50U3RlcCxcbiAgICAgICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbkFuZFByZWZlcmVuY2VzLFxuICAgICAgICBzZXRQcmVmZXJlbmNlLFxuICAgICAgICBzZXRCb3VuZFByZWZlcmVuY2UsXG4gICAgICAgIHNldFByZWZlcmVuY2VzLFxuICAgICAgICBjYW5jZWxDYWxsYmFjayxcbiAgICAgICAgc2F2ZUNhbGxiYWNrLFxuICAgICAgICBzZXRSYW5raW5nXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VsaWNpdGF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzIGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXByZWNpc2VTd2luZ1NsaWRlcih7XG4gIGNyaXRlcmlvblxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG59KSB7XG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGU8W251bWJlciwgbnVtYmVyXT4oWzEsIDEwMF0pO1xuICBjb25zdCB7c2V0Qm91bmRQcmVmZXJlbmNlLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJvdW5kUHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIHNsaWRlclZhbHVlKTtcbiAgfSwgW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IFtudW1iZXIsIG51bWJlcl1cbiAgKSB7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIHNldEJvdW5kUHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA9PT0gY3JpdGVyaW9uLmlkXG4gICAgICA/ICcxMDAlJ1xuICAgICAgOiBgJHtzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZVswXSl9IC0gJHtzaWduaWZpY2FudERpZ2l0cyhcbiAgICAgICAgICBzbGlkZXJWYWx1ZVsxXVxuICAgICAgICApfSVgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlbmRlclZhbHVlKCl9XG4gICAgICA8U2xpZGVyXG4gICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cbiAgICAgICAgbWluPXsxfVxuICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZWR9XG4gICAgICAgIHN0ZXA9ezF9XG4gICAgICAgIGRpc2FibGVkPXttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQgPT09IGNyaXRlcmlvbi5pZH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7SW5saW5lSGVscH0gZnJvbSAnaGVscC1wb3B1cCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IE1vc3RJbXBvcnRhbnRDaG9pY2UgZnJvbSAnLi4vTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlJztcbmltcG9ydCBTd2luZ0J1dHRvbnMgZnJvbSAnLi4vU3dpbmdCdXR0b25zL1N3aW5nQnV0dG9ucyc7XG5pbXBvcnQgU3dpbmdTZXRXZWlnaHRzIGZyb20gJy4uL1N3aW5nU2V0V2VpZ2h0cy9Td2luZ1NldFdlaWdodHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXByZWNpc2VTd2luZ1dlaWdodGluZygpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInN3aW5nLXdlaWdodGluZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICA8SW5saW5lSGVscCBoZWxwSWQ9XCJpbXByZWNpc2Utc3dpbmctd2VpZ2h0aW5nXCI+XG4gICAgICAgICAgICBJbXByZWNpc2Ugc3dpbmcgd2VpZ2h0aW5nXG4gICAgICAgICAgPC9JbmxpbmVIZWxwPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMSA/IDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+IDogPFN3aW5nU2V0V2VpZ2h0cyAvPn1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8U3dpbmdCdXR0b25zIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+U3RlcCB7Y3VycmVudFN0ZXB9IG9mIDI8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nQnV0dG9ucygpIHtcbiAgY29uc3Qge1xuICAgIHByZXZpb3VzQ2FsbGJhY2ssXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgY3JpdGVyaWEsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuICAgIG1hdGNoaW5nTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2F2ZUJ1dHRvbmNsaWNrKCk6IHZvaWQge1xuICAgIHNhdmVDYWxsYmFjayhPYmplY3QudmFsdWVzKHByZWZlcmVuY2VzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaGluZ05leHQoKTogdm9pZCB7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGFzdFN0ZXAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwID09PSBfLnNpemUoY3JpdGVyaWEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDEpIHtcbiAgICAgIHByZXZpb3VzQ2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNOZXh0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKTogdm9pZCB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwIHNpemU9XCJzbWFsbFwiPlxuICAgICAge2NhbmNlbENhbGxiYWNrID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgICA+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwicHJldmlvdXMtYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNDbGlja31cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGRpc2FibGVkPXshcHJldmlvdXNDYWxsYmFjayAmJiBjdXJyZW50U3RlcCA9PT0gMX1cbiAgICAgID5cbiAgICAgICAgUHJldmlvdXNcbiAgICAgIDwvQnV0dG9uPlxuICAgICAge2lzTGFzdFN0ZXAoKSA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwic2F2ZS1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVCdXR0b25jbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJuZXh0LWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dEJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHtJbmxpbmVIZWxwfSBmcm9tICdoZWxwLXBvcHVwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IE1vc3RJbXBvcnRhbnRDaG9pY2UgZnJvbSAnLi4vTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlJztcbmltcG9ydCBNYXRjaGluZ0J1dHRvbnMgZnJvbSAnLi9NYXRjaGluZ0J1dHRvbnMvTWF0Y2hpbmdCdXR0b25zJztcbmltcG9ydCBNYXRjaGluZ1NldEltcG9ydGFuY2UgZnJvbSAnLi9NYXRjaGluZ1NldEltcG9ydGFuY2UvTWF0Y2hpbmdTZXRJbXBvcnRhbmNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdFbGljaXRhdGlvbigpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBfLnNpemUoY3JpdGVyaWEpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibWF0Y2hpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgPElubGluZUhlbHAgaGVscElkPVwibWF0Y2hpbmdcIj5NYXRjaGluZzwvSW5saW5lSGVscD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgPyAoXG4gICAgICAgICAgPE1vc3RJbXBvcnRhbnRDaG9pY2UgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TWF0Y2hpbmdTZXRJbXBvcnRhbmNlIC8+XG4gICAgICAgICl9XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPE1hdGNoaW5nQnV0dG9ucyAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgU3RlcCB7Y3VycmVudFN0ZXB9IG9mIHt0b3RhbFN0ZXBzfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge1xuICBnZXRDdXJyZW50Q3JpdGVyaW9uLFxuICBnZXRNYXRjaGluZ1N0YXRlbWVudFxufSBmcm9tICdzcmMvTWF0Y2hpbmdVdGlsL01hdGNoaW5nVXRpbCc7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZX0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQge2dldEJlc3QsIGdldFdvcnN0fSBmcm9tICcuLi8uLi9VdGlsL3V0aWwnO1xuaW1wb3J0IE1hdGNoaW5nU2xpZGVyIGZyb20gJy4vTWF0Y2hpbmdTbGlkZXIvTWF0Y2hpbmdTbGlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ1NldEltcG9ydGFuY2UoKSB7XG4gIGNvbnN0IHtcbiAgICBwdmZzLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgY3VycmVudFN0ZXAsXG4gICAgZ2V0Q3JpdGVyaW9uLFxuICAgIGNyaXRlcmlhLFxuICAgIHRlbXBsYXRlXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgbW9zdEltcG9ydGFudENyaXRlcmlvbiA9IGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpO1xuICBjb25zdCBtb3N0SW1wb3J0YW50VW5pdFR5cGUgPVxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcblxuICBjb25zdCBjdXJyZW50Q3JpdGVyaW9uID0gZ2V0Q3VycmVudENyaXRlcmlvbihcbiAgICBjcml0ZXJpYSxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgY3VycmVudFN0ZXBcbiAgKTtcbiAgY29uc3QgY3VycmVudFVuaXRUeXBlID1cbiAgICBjdXJyZW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG5cbiAgY29uc3QgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uID1cbiAgICBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKG1vc3RJbXBvcnRhbnRVbml0VHlwZSk7XG5cbiAgY29uc3QgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uID1cbiAgICBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKGN1cnJlbnRVbml0VHlwZSk7XG5cbiAgY29uc3QgW3N0YXRlbWVudCwgc2V0U3RhdGVtZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgZ2V0TWF0Y2hpbmdTdGF0ZW1lbnQoXG4gICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLFxuICAgICAgY3VycmVudENyaXRlcmlvbixcbiAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvbixcbiAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbixcbiAgICAgIHB2ZnMsXG4gICAgICB0ZW1wbGF0ZVxuICAgIClcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXRlbWVudChcbiAgICAgIGdldE1hdGNoaW5nU3RhdGVtZW50KFxuICAgICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLFxuICAgICAgICBjdXJyZW50Q3JpdGVyaW9uLFxuICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb24sXG4gICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbixcbiAgICAgICAgcHZmcyxcbiAgICAgICAgdGVtcGxhdGVcbiAgICAgIClcbiAgICApO1xuICB9LCBbc2hvd1BlcmNlbnRhZ2VzLCB0ZW1wbGF0ZSwgbW9zdEltcG9ydGFudENyaXRlcmlvbiwgY3VycmVudENyaXRlcmlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntgVHJhZGUtb2ZmIGJldHdlZW4gJHttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLnRpdGxlfSBhbmQgJHtjdXJyZW50Q3JpdGVyaW9uLnRpdGxlfWB9PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGlkPVwibWF0Y2hpbmctc3RhdGVtZW50XCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdGF0ZW1lbnR9fT48L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPkNyaXRlcmlvbjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QWx0ZXJuYXRpdmUgQTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QWx0ZXJuYXRpdmUgQjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGlkPVwibW9zdC1pbXBvcnRhbnQtY3JpdGVyaW9uXCI+XG4gICAgICAgICAgICAgICAge21vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGV9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgaWQ9XCJtb3N0LWltcG9ydGFudC13b3JzdFwiPlxuICAgICAgICAgICAgICAgIHtnZXRXb3JzdChcbiAgICAgICAgICAgICAgICAgIHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgaWQ9XCJtYXRjaGluZy1jZWxsXCI+XG4gICAgICAgICAgICAgICAgPE1hdGNoaW5nU2xpZGVyIGN1cnJlbnRDcml0ZXJpb25JZD17Y3VycmVudENyaXRlcmlvbi5pZH0gLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGlkPVwidHJhZGUtb2ZmLWNyaXRlcmlvblwiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50Q3JpdGVyaW9uLnRpdGxlfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGlkPVwidHJhZGUtb2ZmLWJlc3RcIj5cbiAgICAgICAgICAgICAgICB7Z2V0QmVzdChcbiAgICAgICAgICAgICAgICAgIHB2ZnNbY3VycmVudENyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgICAgICAgICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb25cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGlkPVwidHJhZGUtb2ZmLXdvcnN0XCI+XG4gICAgICAgICAgICAgICAge2dldFdvcnN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtjYWxjdWxhdGVJbXBvcnRhbmNlfSBmcm9tICdzcmMvTWF0Y2hpbmdVdGlsL01hdGNoaW5nVXRpbCc7XG5pbXBvcnQgc2lnbmlmaWNhbnREaWdpdHMsIHtcbiAgY2FuQmVQZXJjZW50YWdlLFxuICBnZXRCZXN0LFxuICBnZXRXb3JzdFxufSBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdTbGlkZXIoe1xuICBjdXJyZW50Q3JpdGVyaW9uSWRcbn06IHtcbiAgY3VycmVudENyaXRlcmlvbklkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHtcbiAgICBjdXJyZW50U3RlcCxcbiAgICBzZXRJc05leHREaXNhYmxlZCxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0UHJlZmVyZW5jZSxcbiAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgcHZmcyxcbiAgICBnZXRDcml0ZXJpb24sXG4gICAgc3RlcFNpemVzQnlDcml0ZXJpb25cbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uID0gZ2V0Q3JpdGVyaW9uKG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCk7XG4gIGNvbnN0IHB2ZiA9IHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXTtcbiAgY29uc3Qgd29yc3RWYWx1ZSA9IGdldFdvcnN0KHB2ZiwgZmFsc2UpO1xuICBjb25zdCBzdGVwU2l6ZSA9IHN0ZXBTaXplc0J5Q3JpdGVyaW9uW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF07XG4gIGNvbnN0IG1pblNsaWRlclZhbHVlID1cbiAgICBwdmYucmFuZ2VbMF0gPT09IHdvcnN0VmFsdWUgPyBwdmYucmFuZ2VbMF0gKyBzdGVwU2l6ZSA6IHB2Zi5yYW5nZVswXTtcbiAgY29uc3QgbWF4U2xpZGVyVmFsdWUgPVxuICAgIHB2Zi5yYW5nZVsxXSA9PT0gd29yc3RWYWx1ZSA/IHB2Zi5yYW5nZVsxXSAtIHN0ZXBTaXplIDogcHZmLnJhbmdlWzFdO1xuXG4gIGNvbnN0IHVuaXRUeXBlID0gbW9zdEltcG9ydGFudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG5cbiAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KFxuICAgIGdldEJlc3QocHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdLCB1c2VQZXJjZW50YWdlKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyVmFsdWUgPSBnZXRCZXN0KHB2ZiwgZmFsc2UpO1xuICAgIHNldFNsaWRlclZhbHVlKHNsaWRlclZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGN1cnJlbnRDcml0ZXJpb25JZCwgY2FsY3VsYXRlSW1wb3J0YW5jZShzbGlkZXJWYWx1ZSwgcHZmKSk7XG4gIH0sIFtjdXJyZW50U3RlcF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IG51bWJlclxuICApIHtcbiAgICBzZXRTbGlkZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoc2lnbmlmaWNhbnREaWdpdHMobmV3VmFsdWUpID09PSB3b3JzdFZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGN1cnJlbnRDcml0ZXJpb25JZCwgY2FsY3VsYXRlSW1wb3J0YW5jZShuZXdWYWx1ZSwgcHZmKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHVzZVBlcmNlbnRhZ2VcbiAgICAgID8gc2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWUgKiAxMDApXG4gICAgICA6IHNpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkaXNwbGF5VmFsdWUoKX1cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgaWQ9XCJtYXRjaGluZy1zbGlkZXJcIlxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17bWluU2xpZGVyVmFsdWV9XG4gICAgICAgIG1heD17bWF4U2xpZGVyVmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXtzdGVwU2l6ZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7SUxpbmVhclB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JTGluZWFyUHZmJztcbmltcG9ydCB7SVBpZWNlV2lzZUxpbmVhclB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JUGllY2VXaXNlTGluZWFyUHZmJztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCB7VFB2ZkRpcmVjdGlvbn0gZnJvbSAnc3JjL1R5cGVzL1B2ZlR5cGVzJztcbmltcG9ydCB7Z2V0QmVzdCwgZ2V0VW5pdExhYmVsLCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BVENISU5HX1RFTVBMQVRFID1cbiAgJ0hvdyBtdWNoIGJldHRlciBzaG91bGQgJWNyaXRlcmlvbjElIG1pbmltYWxseSBiZWNvbWUgdG8ganVzdGlmeSB0aGUgd29yc2VuaW5nIG9mICVjcml0ZXJpb24yJT8nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF0Y2hpbmdTdGF0ZW1lbnQoXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb246IElDcml0ZXJpb24sXG4gIGN1cnJlbnRDcml0ZXJpb246IElDcml0ZXJpb24sXG4gIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvbjogYm9vbGVhbixcbiAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uOiBib29sZWFuLFxuICBwdmZzOiBSZWNvcmQ8c3RyaW5nLCBUUHZmPixcbiAgdGVtcGxhdGU/OiBzdHJpbmdcbik6IHN0cmluZyB7XG4gIGNvbnN0IG1hdGNoaW5nVGVtcGxhdGUgPSB0ZW1wbGF0ZSA/IHRlbXBsYXRlIDogREVGQVVMVF9NQVRDSElOR19URU1QTEFURTtcbiAgcmV0dXJuIG1hdGNoaW5nVGVtcGxhdGVcbiAgICAucmVwbGFjZSgvJWNyaXRlcmlvbjElL2dpLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLnRpdGxlKVxuICAgIC5yZXBsYWNlKFxuICAgICAgLyV1bml0MSUvZ2ksXG4gICAgICBnZXRVbml0TGFiZWwoXG4gICAgICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQsXG4gICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvblxuICAgICAgKVxuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC8ld29yc3QxJS9naSxcbiAgICAgIFN0cmluZyhcbiAgICAgICAgZ2V0V29yc3QoXG4gICAgICAgICAgcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb25cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICAucmVwbGFjZShcbiAgICAgIC8lYmVzdDElL2dpLFxuICAgICAgU3RyaW5nKFxuICAgICAgICBnZXRCZXN0KFxuICAgICAgICAgIHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgLnJlcGxhY2UoLyVjcml0ZXJpb24yJS9naSwgY3VycmVudENyaXRlcmlvbi50aXRsZSlcbiAgICAucmVwbGFjZShcbiAgICAgIC8ldW5pdDIlL2dpLFxuICAgICAgZ2V0VW5pdExhYmVsKFxuICAgICAgICBjdXJyZW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb25cbiAgICAgIClcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvJXdvcnN0MiUvZ2ksXG4gICAgICBTdHJpbmcoXG4gICAgICAgIGdldFdvcnN0KHB2ZnNbY3VycmVudENyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbilcbiAgICAgIClcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvJWJlc3QyJS9naSxcbiAgICAgIFN0cmluZyhcbiAgICAgICAgZ2V0QmVzdChwdmZzW2N1cnJlbnRDcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb24pXG4gICAgICApXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZVN0ZXBTaXplKFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXTogW1xuICBudW1iZXIsXG4gIG51bWJlclxuXSk6IG51bWJlciB7XG4gIGNvbnN0IGludGVydmFsID0gdXBwZXJCb3VuZCAtIGxvd2VyQm91bmQ7XG4gIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChpbnRlcnZhbCkpO1xuICByZXR1cm4gTWF0aC5wb3coMTAsIG1hZ25pdHVkZSAtIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW1wb3J0YW5jZShzbGlkZXJWYWx1ZTogbnVtYmVyLCBwdmY6IFRQdmYpOiBudW1iZXIge1xuICBpZiAoaXNQaWVjZVdpc2VMaW5lYXJQdmYocHZmKSkge1xuICAgIHJldHVybiBjYWxjdWxhdGVQaWVjZXdpc2VJbXBvcnRhbmNlKHNsaWRlclZhbHVlLCBwdmYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYWxjdWxhdGVMaW5lYXJJbXBvcnRhbmNlKHNsaWRlclZhbHVlLCBwdmYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGllY2VXaXNlTGluZWFyUHZmKHB2ZjogVFB2Zik6IHB2ZiBpcyBJUGllY2VXaXNlTGluZWFyUHZmIHtcbiAgcmV0dXJuICdjdXRvZmZzJyBpbiBwdmY7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUxpbmVhckltcG9ydGFuY2UoXG4gIHNsaWRlclZhbHVlOiBudW1iZXIsXG4gIHtyYW5nZTogW2xvd2VyQm91bmQsIHVwcGVyQm91bmRdLCBkaXJlY3Rpb259OiBJTGluZWFyUHZmXG4pOiBudW1iZXIge1xuICBjb25zdCByZWJhc2VkID1cbiAgICBkaXJlY3Rpb24gPT09ICdkZWNyZWFzaW5nJ1xuICAgICAgPyB1cHBlckJvdW5kIC0gc2xpZGVyVmFsdWVcbiAgICAgIDogc2xpZGVyVmFsdWUgLSBsb3dlckJvdW5kO1xuICByZXR1cm4gKHJlYmFzZWQgLyBNYXRoLmFicyhsb3dlckJvdW5kIC0gdXBwZXJCb3VuZCkpICogMTAwO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVQaWVjZXdpc2VJbXBvcnRhbmNlKFxuICB2YWx1ZTogbnVtYmVyLFxuICBwdmY6IElQaWVjZVdpc2VMaW5lYXJQdmZcbik6IG51bWJlciB7XG4gIGNvbnN0IHtcbiAgICBjdXRvZmZzLFxuICAgIHJhbmdlOiBbbG93ZXJCb3VuZCwgdXBwZXJCb3VuZF0sXG4gICAgZGlyZWN0aW9uXG4gIH0gPSBwdmY7XG4gIGNvbnN0IGN1dG9mZnNXaXRoQm91bmRzID0gW2xvd2VyQm91bmQsIC4uLmN1dG9mZnMsIHVwcGVyQm91bmRdO1xuICBjb25zdCB2YWx1ZXNXaXRoQm91bmRzID1cbiAgICBkaXJlY3Rpb24gPT09ICdpbmNyZWFzaW5nJ1xuICAgICAgPyBbMCwgMC4yNSwgMC41LCAwLjc1LCAxXVxuICAgICAgOiBbMSwgMC43NSwgMC41LCAwLjI1LCAwXTtcbiAgY29uc3QgZXhhY3RDdXRvZmZJZHggPSBfLmZpbmRJbmRleChcbiAgICBjdXRvZmZzV2l0aEJvdW5kcyxcbiAgICAoeDogbnVtYmVyKTogYm9vbGVhbiA9PiB4ID09PSB2YWx1ZVxuICApO1xuICBpZiAoZXhhY3RDdXRvZmZJZHggIT09IC0xKSB7XG4gICAgcmV0dXJuIHZhbHVlc1dpdGhCb3VuZHNbZXhhY3RDdXRvZmZJZHhdICogMTAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWYWx1ZShcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGN1dG9mZnNXaXRoQm91bmRzLFxuICAgICAgICB2YWx1ZXNXaXRoQm91bmRzLFxuICAgICAgICBkaXJlY3Rpb25cbiAgICAgICkgKiAxMDBcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZhbHVlKFxuICB2YWx1ZTogbnVtYmVyLFxuICBjdXRvZmZzV2l0aEJvdW5kczogbnVtYmVyW10sXG4gIHZhbHVlc1dpdGhCb3VuZHM6IG51bWJlcltdLFxuICBkaXJlY3Rpb246IFRQdmZEaXJlY3Rpb25cbik6IG51bWJlciB7XG4gIGNvbnN0IGxhcmdlckN1dG9mZklkeCA9IF8uZmluZEluZGV4KFxuICAgIGN1dG9mZnNXaXRoQm91bmRzLFxuICAgICh4OiBudW1iZXIpOiBib29sZWFuID0+IHggPiB2YWx1ZVxuICApO1xuICBjb25zdCBbbG93ZXJDdXRPZmYsIHVwcGVyQ3V0T2ZmXSA9IFtcbiAgICBjdXRvZmZzV2l0aEJvdW5kc1tsYXJnZXJDdXRvZmZJZHggLSAxXSxcbiAgICBjdXRvZmZzV2l0aEJvdW5kc1tsYXJnZXJDdXRvZmZJZHhdXG4gIF07XG5cbiAgY29uc3QgcmViYXNlZCA9IHZhbHVlIC0gbG93ZXJDdXRPZmY7XG4gIGNvbnN0IHJhdGlvT2ZRdWFydGlsZSA9IHJlYmFzZWQgLyAodXBwZXJDdXRPZmYgLSBsb3dlckN1dE9mZik7XG4gIGNvbnN0IHF1YXJ0aWxlVmFsdWUgPSB2YWx1ZXNXaXRoQm91bmRzW2xhcmdlckN1dG9mZklkeCAtIDFdO1xuICBpZiAoZGlyZWN0aW9uID09PSAnaW5jcmVhc2luZycpIHtcbiAgICByZXR1cm4gcXVhcnRpbGVWYWx1ZSArIDAuMjUgKiByYXRpb09mUXVhcnRpbGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHF1YXJ0aWxlVmFsdWUgLSAwLjI1ICogcmF0aW9PZlF1YXJ0aWxlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q3JpdGVyaW9uKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgY3VycmVudFN0ZXA6IG51bWJlclxuKTogSUNyaXRlcmlvbiB7XG4gIHJldHVybiBfLnJlamVjdChjcml0ZXJpYSwgKGNyaXRlcmlvbjogSUNyaXRlcmlvbikgPT4ge1xuICAgIHJldHVybiBjcml0ZXJpb24uaWQgPT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDtcbiAgfSlbY3VycmVudFN0ZXAgLSAyXTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDaGFuZ2VFdmVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZSwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IENyaXRlcmlvbkNob2ljZSBmcm9tICcuLi9Dcml0ZXJpb25DaG9pY2UvQ3JpdGVyaW9uQ2hvaWNlJztcbmltcG9ydCBDcml0ZXJpb25TaXR1YXRpb24gZnJvbSAnLi4vQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vc3RJbXBvcnRhbnRDaG9pY2UoKSB7XG4gIGNvbnN0IHtcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBwdmZzLFxuICAgIGNyaXRlcmlhXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldElzTmV4dERpc2FibGVkKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICAgICAgICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENyaXRlcmlvblNpdHVhdGlvblxuICAgICAgICAgICAga2V5PXtjcml0ZXJpb24uaWR9XG4gICAgICAgICAgICBjcml0ZXJpb249e2NyaXRlcmlvbn1cbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZT17Z2V0V29yc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDcml0ZXJpb25DaG9pY2VzKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvbkNob2ljZSBrZXk9e2NyaXRlcmlvbi5pZH0gY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkdpdmVuIHRoZSBmb2xsb3dpbmcgc2l0dWF0aW9uOjwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge3JlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKX1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpbXByb3ZlbWVudHMgaXMgbW9zdCBpbXBvcnRhbnQ/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICBuYW1lPVwibW9zdC1pbXBvcnRhbnQtY3JpdGVyaW9uLXJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17bW9zdEltcG9ydGFudENyaXRlcmlvbklkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb259XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyQ3JpdGVyaW9uQ2hvaWNlcygpfVxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgc2lnbmlmaWNhbnREaWdpdHMgZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWNpc2VTd2luZ1NsaWRlcih7XG4gIGNyaXRlcmlvblxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG59KSB7XG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyPigxMDApO1xuICBjb25zdCB7c2V0UHJlZmVyZW5jZSwgbW9zdEltcG9ydGFudENyaXRlcmlvbklkfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgc2xpZGVyVmFsdWUpO1xuICB9LCBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2xpZGVyQ2hhbmdlZChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PixcbiAgICBuZXdWYWx1ZTogbnVtYmVyXG4gICkge1xuICAgIHNldFNsaWRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgbmV3VmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3NpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlKX1cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgaWQ9e2Bzd2luZy1zbGlkZXItJHtjcml0ZXJpb24uaWR9YH1cbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBtaW49ezF9XG4gICAgICAgIG1heD17MTAwfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlZH1cbiAgICAgICAgc3RlcD17MX1cbiAgICAgICAgZGlzYWJsZWQ9e21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA9PT0gY3JpdGVyaW9uLmlkfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHtJbmxpbmVIZWxwfSBmcm9tICdoZWxwLXBvcHVwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgTW9zdEltcG9ydGFudENob2ljZSBmcm9tICcuLi9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UnO1xuaW1wb3J0IFN3aW5nQnV0dG9ucyBmcm9tICcuLi9Td2luZ0J1dHRvbnMvU3dpbmdCdXR0b25zJztcbmltcG9ydCBTd2luZ1NldFdlaWdodHMgZnJvbSAnLi4vU3dpbmdTZXRXZWlnaHRzL1N3aW5nU2V0V2VpZ2h0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWNpc2VTd2luZ1dlaWdodGluZygpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInN3aW5nLXdlaWdodGluZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICA8SW5saW5lSGVscCBoZWxwSWQ9XCJzd2luZy13ZWlnaHRpbmdcIj5cbiAgICAgICAgICAgIFByZWNpc2Ugc3dpbmcgd2VpZ2h0aW5nXG4gICAgICAgICAgPC9JbmxpbmVIZWxwPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMSA/IDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+IDogPFN3aW5nU2V0V2VpZ2h0cyAvPn1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8U3dpbmdCdXR0b25zIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+U3RlcCB7Y3VycmVudFN0ZXB9IG9mIDI8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQge0JveCwgR3JpZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHtIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50LCBJSGVscEluZm99IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbXByZWNpc2VTd2luZ1dlaWdodGluZyBmcm9tICdzcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1dlaWdodGluZyc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElFeGFjdFN3aW5nUmF0aW8gZnJvbSAnc3JjL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmF0aW9Cb3VuZENvbnN0cmFpbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuaW1wb3J0IE1hdGNoaW5nRWxpY2l0YXRpb24gZnJvbSAnc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdFbGljaXRhdGlvbic7XG5pbXBvcnQgUHJlY2lzZVN3aW5nV2VpZ2h0aW5nIGZyb20gJ3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdXZWlnaHRpbmcnO1xuaW1wb3J0IFJhbmtpbmdFbGljaXRhdGlvbiBmcm9tICdzcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdFbGljaXRhdGlvbic7XG5pbXBvcnQge1RFbGljaXRhdGlvbk1ldGhvZH0gZnJvbSAnc3JjL1R5cGVzL1RFbGljaXRhdGlvbk1ldGhvZCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50fSBmcm9tICcuLi9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlZmVyZW5jZUVsaWNpdGF0aW9uKHtcbiAgY3JpdGVyaWEsXG4gIGVsaWNpdGF0aW9uTWV0aG9kLFxuICBtYW51YWxIb3N0LFxuICBtYW51YWxMZXhpY29uLFxuICBtYW51YWxQYXRoLFxuICBwcmV2aW91c0NhbGxiYWNrLFxuICBwdmZzLFxuICBzaG93UGVyY2VudGFnZXMsXG4gIHN0ZXBTaXplc0J5Q3JpdGVyaW9uLFxuICBjYW5jZWxDYWxsYmFjayxcbiAgc2F2ZUNhbGxiYWNrLFxuICB0ZW1wbGF0ZVxufToge1xuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdO1xuICBlbGljaXRhdGlvbk1ldGhvZDogVEVsaWNpdGF0aW9uTWV0aG9kO1xuICBtYW51YWxIb3N0OiBzdHJpbmc7XG4gIG1hbnVhbExleGljb246IFJlY29yZDxzdHJpbmcsIElIZWxwSW5mbz47XG4gIG1hbnVhbFBhdGg6IHN0cmluZztcbiAgcHJldmlvdXNDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHB2ZnM6IFJlY29yZDxzdHJpbmcsIFRQdmY+O1xuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW47XG4gIHN0ZXBTaXplc0J5Q3JpdGVyaW9uOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xuICBjYW5jZWxDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHNhdmVDYWxsYmFjazogKFxuICAgIHByZWZlcmVuY2VzOiBJRXhhY3RTd2luZ1JhdGlvW10gfCBJUmF0aW9Cb3VuZENvbnN0cmFpbnRbXSB8IElSYW5raW5nW11cbiAgKSA9PiB2b2lkO1xuICB0ZW1wbGF0ZT86IHN0cmluZztcbn0pOiBKU1guRWxlbWVudCB7XG4gIGZ1bmN0aW9uIHJlbmRlckVsaWNpdGF0aW9uKFxuICAgIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2RcbiAgKTogSlNYLkVsZW1lbnQge1xuICAgIHN3aXRjaCAoZWxpY2l0YXRpb25NZXRob2QpIHtcbiAgICAgIGNhc2UgJ3ByZWNpc2UnOlxuICAgICAgICByZXR1cm4gPFByZWNpc2VTd2luZ1dlaWdodGluZyAvPjtcbiAgICAgIGNhc2UgJ2ltcHJlY2lzZSc6XG4gICAgICAgIHJldHVybiA8SW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcgLz47XG4gICAgICBjYXNlICdtYXRjaGluZyc6XG4gICAgICAgIHJldHVybiA8TWF0Y2hpbmdFbGljaXRhdGlvbiAvPjtcbiAgICAgIGNhc2UgJ3JhbmtpbmcnOlxuICAgICAgICByZXR1cm4gPFJhbmtpbmdFbGljaXRhdGlvbiAvPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudFxuICAgICAgcHJldmlvdXNDYWxsYmFjaz17cHJldmlvdXNDYWxsYmFja31cbiAgICAgIGNyaXRlcmlhPXtjcml0ZXJpYX1cbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kPXtlbGljaXRhdGlvbk1ldGhvZH1cbiAgICAgIHNob3dQZXJjZW50YWdlcz17c2hvd1BlcmNlbnRhZ2VzfVxuICAgICAgcHZmcz17cHZmc31cbiAgICAgIGNhbmNlbENhbGxiYWNrPXtjYW5jZWxDYWxsYmFja31cbiAgICAgIHNhdmVDYWxsYmFjaz17c2F2ZUNhbGxiYWNrfVxuICAgICAgdGVtcGxhdGU9e3RlbXBsYXRlfVxuICAgICAgc3RlcFNpemVzQnlDcml0ZXJpb249e3N0ZXBTaXplc0J5Q3JpdGVyaW9ufVxuICAgID5cbiAgICAgIDxIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50XG4gICAgICAgIGxleGljb249e21hbnVhbExleGljb259XG4gICAgICAgIGhvc3Q9e21hbnVhbEhvc3R9XG4gICAgICAgIHBhdGg9e21hbnVhbFBhdGh9XG4gICAgICA+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgY29tcG9uZW50PXtCb3h9IG10PXsyfT5cbiAgICAgICAgICB7cmVuZGVyRWxpY2l0YXRpb24oZWxpY2l0YXRpb25NZXRob2QpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0hlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnQ+XG4gICAgPC9FbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudD5cbiAgKTtcbn1cbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJUmFua2luZ0Fuc3dlciBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nQW5zd2VyJztcbmltcG9ydCB7XG4gIGFzc2lnbk1pc3NpbmdSYW5raW5ncyxcbiAgYnVpbGRSYW5raW5nUHJlZmVyZW5jZXMsXG4gIGZpbmRDcml0ZXJpb25JZEZvclJhbmssXG4gIFVOUkFOS0VEXG59IGZyb20gJ3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdCdXR0b25zKHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZCxcbiAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZFxufToge1xuICBzZWxlY3RlZENyaXRlcmlvbklkOiBzdHJpbmc7XG4gIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQ6IChjcml0ZXJpb25JZDogc3RyaW5nKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCB7XG4gICAgcHJldmlvdXNDYWxsYmFjayxcbiAgICBjdXJyZW50U3RlcCxcbiAgICBzZXRSYW5raW5nLFxuICAgIHNldEN1cnJlbnRTdGVwLFxuICAgIHJhbmtpbmdzLFxuICAgIGNyaXRlcmlhLFxuICAgIGNhbmNlbENhbGxiYWNrLFxuICAgIHNhdmVDYWxsYmFja1xuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpIHtcbiAgICBzZXRSYW5raW5nKHNlbGVjdGVkQ3JpdGVyaW9uSWQsIGN1cnJlbnRTdGVwKTtcbiAgICBzZXRTZWxlY3RlZENyaXRlcmlvbklkKCcnKTtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2F2ZUJ1dHRvbkNsaWNrKCkge1xuICAgIGNvbnN0IGZpbmlzaGVkUmFua2luZ3M6IFJlY29yZDxcbiAgICAgIHN0cmluZyxcbiAgICAgIElSYW5raW5nQW5zd2VyXG4gICAgPiA9IGFzc2lnbk1pc3NpbmdSYW5raW5ncyhcbiAgICAgIHJhbmtpbmdzLFxuICAgICAgc2VsZWN0ZWRDcml0ZXJpb25JZCxcbiAgICAgIGN1cnJlbnRTdGVwLFxuICAgICAgY3JpdGVyaWFcbiAgICApO1xuICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYnVpbGRSYW5raW5nUHJlZmVyZW5jZXMoXy50b0FycmF5KGZpbmlzaGVkUmFua2luZ3MpKTtcbiAgICBzYXZlQ2FsbGJhY2socHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNDbGljaygpIHtcbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDEpIHtcbiAgICAgIHByZXZpb3VzQ2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1cnJlbnRTdGVwICE9PSAxKSB7XG4gICAgICAgIHJlbW92ZVJhbmtGcm9tQ3JpdGVyaW9uKCk7XG4gICAgICB9XG4gICAgICBzZXRTZWxlY3RlZENyaXRlcmlvbklkKCcnKTtcbiAgICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUmFua0Zyb21Dcml0ZXJpb24oKSB7XG4gICAgY29uc3QgbG9va3VwUmFuayA9IGN1cnJlbnRTdGVwIC0gMTtcbiAgICBjb25zdCBjcml0ZXJpb25JZCA9IGZpbmRDcml0ZXJpb25JZEZvclJhbmsoY3JpdGVyaWEsIHJhbmtpbmdzLCBsb29rdXBSYW5rKTtcbiAgICBzZXRSYW5raW5nKGNyaXRlcmlvbklkLCBVTlJBTktFRCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xhc3RTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50U3RlcCA9PT0gXy5zaXplKGNyaXRlcmlhKSAtIDE7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwIHNpemU9XCJzbWFsbFwiPlxuICAgICAge2NhbmNlbENhbGxiYWNrID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgICA+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwicHJldmlvdXMtYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNDbGlja31cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGRpc2FibGVkPXshcHJldmlvdXNDYWxsYmFjayAmJiBjdXJyZW50U3RlcCA9PT0gMX1cbiAgICAgID5cbiAgICAgICAgUHJldmlvdXNcbiAgICAgIDwvQnV0dG9uPlxuICAgICAge2lzTGFzdFN0ZXAoKSA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwic2F2ZS1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJuZXh0LWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dEJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDaGFuZ2VFdmVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge1VOUkFOS0VEfSBmcm9tICdzcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwnO1xuaW1wb3J0IENyaXRlcmlvbkNob2ljZSBmcm9tICcuLi8uLi9Dcml0ZXJpb25DaG9pY2UvQ3JpdGVyaW9uQ2hvaWNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFua2luZ0Nob2ljZXMoe1xuICBzZWxlY3RlZENyaXRlcmlvbklkLFxuICBoYW5kbGVTZWxlY3Rpb25cbn06IHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nO1xuICBoYW5kbGVTZWxlY3Rpb246IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IHtyYW5raW5ncywgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCBmaWx0ZXJlZENyaXRlcmlhID0gXy5maWx0ZXIoXG4gICAgY3JpdGVyaWEsXG4gICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IGJvb2xlYW4gPT5cbiAgICAgICFyYW5raW5nc1tjcml0ZXJpb24uaWRdIHx8IHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0ucmFuayA9PT0gVU5SQU5LRURcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGltcHJvdmVtZW50cyBpcyBtb3N0IGltcG9ydGFudD9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgIG5hbWU9XCJyYW5raW5nLWNyaXRlcmlvbi1yYWRpb1wiXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm1hcChmaWx0ZXJlZENyaXRlcmlhLCAoY3JpdGVyaW9uKSA9PiAoXG4gICAgICAgICAgICA8Q3JpdGVyaW9uQ2hvaWNlIGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHtJbmxpbmVIZWxwfSBmcm9tICdoZWxwLXBvcHVwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDaGFuZ2VFdmVudCwgdXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgUmFua2luZ0J1dHRvbnMgZnJvbSAnLi9SYW5raW5nQnV0dG9ucy9SYW5raW5nQnV0dG9ucyc7XG5pbXBvcnQgUmFua2luZ0Nob2ljZXMgZnJvbSAnLi9SYW5raW5nQ2hvaWNlcy9SYW5raW5nQ2hvaWNlcyc7XG5pbXBvcnQgUmFua2luZ1NpdHVhdGlvbiBmcm9tICcuL1JhbmtpbmdTaXR1YXRpb24vUmFua2luZ1NpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdFbGljaXRhdGlvbigpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ3JpdGVyaW9uSWQsIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7Y3VycmVudFN0ZXAsIGNyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IF8uc2l6ZShjcml0ZXJpYSkgLSAxO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZENyaXRlcmlvbklkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInJhbmtpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgPElubGluZUhlbHAgaGVscElkPVwicmFua2luZ1wiPlJhbmtpbmc8L0lubGluZUhlbHA+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhbmtpbmdTaXR1YXRpb24gLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhbmtpbmdDaG9pY2VzXG4gICAgICAgICAgaGFuZGxlU2VsZWN0aW9uPXtoYW5kbGVTZWxlY3Rpb259XG4gICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpb25JZD17c2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8UmFua2luZ0J1dHRvbnNcbiAgICAgICAgICBzZWxlY3RlZENyaXRlcmlvbklkPXtzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQ9e3NldFNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2Yge3RvdGFsU3RlcHN9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7VU5SQU5LRUR9IGZyb20gJ3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbCc7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZSwgZ2V0QmVzdCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IENyaXRlcmlvblNpdHVhdGlvbiBmcm9tICcuLi8uLi9Dcml0ZXJpb25TaXR1YXRpb24vQ3JpdGVyaW9uU2l0dWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFua2luZ1NpdHVhdGlvbigpIHtcbiAgY29uc3Qge3JhbmtpbmdzLCBzaG93UGVyY2VudGFnZXMsIHB2ZnMsIGNyaXRlcmlhfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWVUb0Rpc3BsYXkoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKSB7XG4gICAgY29uc3QgdW5pdFR5cGUgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG4gICAgcmV0dXJuICFyYW5raW5nc1tjcml0ZXJpb24uaWRdIHx8IHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0ucmFuayA9PT0gVU5SQU5LRURcbiAgICAgID8gZ2V0V29yc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKVxuICAgICAgOiBnZXRCZXN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvblNpdHVhdGlvblxuICAgICAgICAgIGtleT17Y3JpdGVyaW9uLmlkfVxuICAgICAgICAgIGNyaXRlcmlvbj17Y3JpdGVyaW9ufVxuICAgICAgICAgIGRpc3BsYXlWYWx1ZT17Z2V0VmFsdWVUb0Rpc3BsYXkoY3JpdGVyaW9uKX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+R2l2ZW4gdGhlIGZvbGxvd2luZyBzaXR1YXRpb246PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7cmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElSYW5raW5nIGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhbmtpbmcnO1xuaW1wb3J0IElSYW5raW5nQW5zd2VyIGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhbmtpbmdBbnN3ZXInO1xuXG5leHBvcnQgY29uc3QgVU5SQU5LRUQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZENyaXRlcmlvbklkRm9yUmFuayhcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXSxcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPixcbiAgcmFuazogbnVtYmVyXG4pOiBzdHJpbmcge1xuICByZXR1cm4gXy5maW5kKFxuICAgIGNyaXRlcmlhLFxuICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBib29sZWFuID0+XG4gICAgICByYW5raW5nc1tjcml0ZXJpb24uaWRdICYmIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0ucmFuayA9PT0gcmFua1xuICApLmlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduTWlzc2luZ1JhbmtpbmdzKFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICBzZWxlY3RlZENyaXRlcmlvbklkOiBzdHJpbmcsXG4gIHJhbms6IG51bWJlcixcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXVxuKTogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+IHtcbiAgY29uc3QgaW50ZXJtZWRpYXRlUmFua2luZ3MgPSBhZGRSYW5raW5nKHJhbmtpbmdzLCBzZWxlY3RlZENyaXRlcmlvbklkLCByYW5rKTtcbiAgY29uc3QgbGFzdENyaXRlcmlvbklkID0gZmluZENyaXRlcmlvbklkV2l0aG91dFJhbmtpbmcoXG4gICAgY3JpdGVyaWEsXG4gICAgaW50ZXJtZWRpYXRlUmFua2luZ3NcbiAgKTtcbiAgcmV0dXJuIGFkZFJhbmtpbmcoaW50ZXJtZWRpYXRlUmFua2luZ3MsIGxhc3RDcml0ZXJpb25JZCwgcmFuayArIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUmFua2luZyhcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPixcbiAgY3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgcmFuazogbnVtYmVyXG4pOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4ge1xuICBsZXQgdXBkYXRlZFJhbmtpbmdzID0gXy5jbG9uZURlZXAocmFua2luZ3MpO1xuICBjb25zdCBuZXdSYW5raW5nOiBJUmFua2luZ0Fuc3dlciA9IHtcbiAgICBjcml0ZXJpb25JZDogY3JpdGVyaW9uSWQsXG4gICAgcmFuazogcmFua1xuICB9O1xuICB1cGRhdGVkUmFua2luZ3NbY3JpdGVyaW9uSWRdID0gbmV3UmFua2luZztcbiAgcmV0dXJuIHVwZGF0ZWRSYW5raW5ncztcbn1cblxuZnVuY3Rpb24gZmluZENyaXRlcmlvbklkV2l0aG91dFJhbmtpbmcoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj5cbik6IHN0cmluZyB7XG4gIHJldHVybiBfLmZpbmQoXG4gICAgY3JpdGVyaWEsXG4gICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IGJvb2xlYW4gPT5cbiAgICAgIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICApLmlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSYW5raW5nUHJlZmVyZW5jZXMoYW5zd2VyczogSVJhbmtpbmdBbnN3ZXJbXSk6IElSYW5raW5nW10ge1xuICBjb25zdCBzb3J0ZWRBbnN3ZXJzOiBJUmFua2luZ0Fuc3dlcltdID0gXy5zb3J0QnkoYW5zd2VycywgJ3JhbmsnKTtcbiAgcmV0dXJuIF8ucmVkdWNlKFxuICAgIHNvcnRlZEFuc3dlcnMsXG4gICAgKGFjY3VtOiBJUmFua2luZ1tdLCBhbnN3ZXI6IElSYW5raW5nQW5zd2VyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGlkeCA9PT0gYW5zd2Vycy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBhY2N1bTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhbmtpbmc6IElSYW5raW5nID0ge1xuICAgICAgICBlbGljaXRhdGlvbk1ldGhvZDogJ3JhbmtpbmcnLFxuICAgICAgICB0eXBlOiAnb3JkaW5hbCcsXG4gICAgICAgIGNyaXRlcmlhOiBbYW5zd2VyLmNyaXRlcmlvbklkLCBzb3J0ZWRBbnN3ZXJzW2lkeCArIDFdLmNyaXRlcmlvbklkXVxuICAgICAgfTtcbiAgICAgIGFjY3VtLnB1c2gocmFua2luZyk7XG4gICAgICByZXR1cm4gYWNjdW07XG4gICAgfSxcbiAgICBbXVxuICApO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aW5nQnV0dG9ucygpIHtcbiAgY29uc3Qge1xuICAgIHByZXZpb3VzQ2FsbGJhY2ssXG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCkge1xuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMSkge1xuICAgICAgcHJldmlvdXNDYWxsYmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBjYW5jZWxDYWxsYmFjaygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2F2ZUJ1dHRvbkNsaWNrKCkge1xuICAgIHNhdmVDYWxsYmFjayhPYmplY3QudmFsdWVzKHByZWZlcmVuY2VzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xhc3RTdGVwKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcCA9PT0gMjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwIHNpemU9XCJzbWFsbFwiPlxuICAgICAge2NhbmNlbENhbGxiYWNrID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgICA+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwicHJldmlvdXMtYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNDbGlja31cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGRpc2FibGVkPXshcHJldmlvdXNDYWxsYmFjayAmJiBjdXJyZW50U3RlcCA9PT0gMX1cbiAgICAgID5cbiAgICAgICAgUHJldmlvdXNcbiAgICAgIDwvQnV0dG9uPlxuICAgICAge2lzTGFzdFN0ZXAoKSA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwic2F2ZS1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJuZXh0LWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dEJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgKTtcbn1cbiIsImltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSW1wcmVjaXNlU3dpbmdTbGlkZXIgZnJvbSAnc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdTbGlkZXIvSW1wcmVjaXNlU3dpbmdTbGlkZXInO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBQcmVjaXNlU3dpbmdTbGlkZXIgZnJvbSAnc3JjL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1NsaWRlci9QcmVjaXNlU3dpbmdTbGlkZXInO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2UsIGdldEJlc3QsIGdldFVuaXRMYWJlbCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcml0ZXJpb25PdmVydmlldyh7XG4gIGNyaXRlcmlvblxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG59KSB7XG4gIGNvbnN0IHtwdmZzLCBzaG93UGVyY2VudGFnZXMsIGVsaWNpdGF0aW9uTWV0aG9kfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG4gIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcblxuICBmdW5jdGlvbiByZW5kZXJTd2luZ1NsaWRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgaWYgKGVsaWNpdGF0aW9uTWV0aG9kID09PSAncHJlY2lzZScpIHtcbiAgICAgIHJldHVybiA8UHJlY2lzZVN3aW5nU2xpZGVyIGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPjtcbiAgICB9IGVsc2UgaWYgKGVsaWNpdGF0aW9uTWV0aG9kID09PSAnaW1wcmVjaXNlJykge1xuICAgICAgcmV0dXJuIDxJbXByZWNpc2VTd2luZ1NsaWRlciBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVSb3cga2V5PXtjcml0ZXJpb24uaWR9PlxuICAgICAgPFRhYmxlQ2VsbCBpZD17YGNyaXRlcmlvbi10aXRsZS0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBkaXNhYmxlSG92ZXJMaXN0ZW5lcj17IWNyaXRlcmlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICB0aXRsZT17Y3JpdGVyaW9uLmRlc2NyaXB0aW9uID8gY3JpdGVyaW9uLmRlc2NyaXB0aW9uIDogJyd9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIj57Y3JpdGVyaW9uLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGlkPXtgdW5pdC0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgICAge2dldFVuaXRMYWJlbChcbiAgICAgICAgICBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQsXG4gICAgICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgICAgICl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBpZD17YHdvcnN0LSR7Y3JpdGVyaW9uLmlkfWB9PlxuICAgICAgICB7Z2V0V29yc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKX1cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGlkPXtgYmVzdC0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgICAge2dldEJlc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKX1cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyZW5kZXJTd2luZ1NsaWRlcigpfTwvVGFibGVDZWxsPlxuICAgIDwvVGFibGVSb3c+XG4gICk7XG59XG4iLCJpbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBDcml0ZXJpb25PdmVydmlldyBmcm9tICcuL0NyaXRlcmlvbk92ZXJ2aWV3L0NyaXRlcmlvbk92ZXJ2aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3ZlcnZpZXdUYWJsZSgpIHtcbiAgY29uc3Qge2NyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiByZW5kZXJDcml0ZXJpb25PdmVydmlld3MoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uT3ZlcnZpZXcga2V5PXtjcml0ZXJpb24uaWR9IGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPlxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cbiAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVDZWxsPkNyaXRlcmlvbjwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGw+VW5pdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5Xb3JzdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5CZXN0PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkltcG9ydGFuY2U8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgPFRhYmxlQm9keT57cmVuZGVyQ3JpdGVyaW9uT3ZlcnZpZXdzKCl9PC9UYWJsZUJvZHk+XG4gICAgPC9UYWJsZT5cbiAgKTtcbn1cbiIsImltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtnZXRTd2luZ1N0YXRlbWVudH0gZnJvbSAnc3JjL1N3aW5nVXRpbC9Td2luZ1V0aWwnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2V9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IE92ZXJ2aWV3VGFibGUgZnJvbSAnLi9PdmVydmlld1RhYmxlL092ZXJ2aWV3VGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2luZ1NldFdlaWdodHMoKSB7XG4gIGNvbnN0IHtcbiAgICBwdmZzLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgZWxpY2l0YXRpb25NZXRob2QsXG4gICAgZ2V0Q3JpdGVyaW9uLFxuICAgIHRlbXBsYXRlXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgY3JpdGVyaW9uID0gZ2V0Q3JpdGVyaW9uKG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCk7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPVxuICAgIHNob3dQZXJjZW50YWdlcyAmJlxuICAgIGNhbkJlUGVyY2VudGFnZShjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZSk7XG5cbiAgY29uc3QgW3N0YXRlbWVudCwgc2V0U3RhdGVtZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgZ2V0U3dpbmdTdGF0ZW1lbnQoY3JpdGVyaW9uLCBwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UsIHRlbXBsYXRlKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGVtZW50KFxuICAgICAgZ2V0U3dpbmdTdGF0ZW1lbnQoY3JpdGVyaW9uLCBwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UsIHRlbXBsYXRlKVxuICAgICk7XG4gIH0sIFtzaG93UGVyY2VudGFnZXMsIHRlbXBsYXRlLCBjcml0ZXJpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGlkPXtgJHtlbGljaXRhdGlvbk1ldGhvZH0tc3dpbmctc3RhdGVtZW50YH0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdGF0ZW1lbnR9fT48L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxPdmVydmlld1RhYmxlIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSUV4YWN0U3dpbmdSYXRpbyBmcm9tICdzcmMvSW50ZXJmYWNlL0lFeGFjdFN3aW5nUmF0aW8nO1xuaW1wb3J0IElSYXRpb0JvdW5kQ29uc3RyYWludCBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge2dldEJlc3QsIGdldFVuaXRMYWJlbCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFID1cbiAgXCJZb3UndmUgaW5kaWNhdGVkIHRoYXQgaW1wcm92aW5nICVjcml0ZXJpb24xJSBmcm9tICV3b3JzdDElICV1bml0MSUgdG8gJWJlc3QxJSAldW5pdDElIGlzIHRoZSBtb3N0IGltcG9ydGFudCAoaS5lLiBpdCBoYXMgMTAwJSBpbXBvcnRhbmNlKS4gTm93IGluZGljYXRlIHRoZSByZWxhdGl2ZSBpbXBvcnRhbmNlIChpbiAlKSB0byB0aGlzIGltcHJvdmVtZW50IG9mIGVhY2ggb3RoZXIgY3JpdGVyaW9uJ3MgaW1wcm92ZW1lbnQgdXNpbmcgdGhlIHNsaWRlcnMgYmVsb3cuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nXG4pOiBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5maWx0ZXIoXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgICBjcml0ZXJpb24uaWQgIT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICAgIClcbiAgICAubWFwKChjcml0ZXJpb246IElDcml0ZXJpb24pOiBbc3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvXSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uLmlkXSxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdwcmVjaXNlJyxcbiAgICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgICAgcmF0aW86IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gW2NyaXRlcmlvbi5pZCwgcHJlZmVyZW5jZV07XG4gICAgfSlcbiAgICAuZnJvbVBhaXJzKClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZ1xuKTogUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5yZWplY3QoWydpZCcsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pXG4gICAgLmtleUJ5KCdpZCcpXG4gICAgLm1hcFZhbHVlcyhcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPT4ge1xuICAgICAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICAgICAgYm91bmRzOiBbMSwgMTAwXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZTtcbiAgICAgIH1cbiAgICApXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTd2luZ1N0YXRlbWVudChcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uLFxuICBwdmY6IFRQdmYsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW4sXG4gIHRlbXBsYXRlPzogc3RyaW5nXG4pOiBzdHJpbmcge1xuICBjb25zdCB1bml0ID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50O1xuICBjb25zdCBsYWJlbCA9IGdldFVuaXRMYWJlbCh1bml0LCB1c2VQZXJjZW50YWdlKTtcbiAgY29uc3Qgc3dpbmdUZW1wbGF0ZSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiBERUZBVUxUX1BSRUNJU0VfVEVNUExBVEU7XG4gIHJldHVybiBzd2luZ1RlbXBsYXRlXG4gICAgLnJlcGxhY2UoLyVjcml0ZXJpb24xJS9naSwgY3JpdGVyaW9uLnRpdGxlKVxuICAgIC5yZXBsYWNlKC8ldW5pdDElL2dpLCBsYWJlbClcbiAgICAucmVwbGFjZSgvJXdvcnN0MSUvZ2ksIFN0cmluZyhnZXRXb3JzdChwdmYsIHVzZVBlcmNlbnRhZ2UpKSlcbiAgICAucmVwbGFjZSgvJWJlc3QxJS9naSwgU3RyaW5nKGdldEJlc3QocHZmLCB1c2VQZXJjZW50YWdlKSkpO1xufVxuIiwiaW1wb3J0IElVbml0T2ZNZWFzdXJlbWVudCwge1xuICBVbml0T2ZNZWFzdXJlbWVudFR5cGVcbn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JVW5pdE9mTWVhc3VyZW1lbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlOiBVbml0T2ZNZWFzdXJlbWVudFR5cGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIHVuaXRUeXBlID09PSAncGVyY2VudGFnZScgfHwgdW5pdFR5cGUgPT09ICdkZWNpbWFsJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlc3QocHZmOiBUUHZmLCB1c2VQZXJjZW50YWdlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzaWduaWZpY2FudERpZ2l0cyhcbiAgICBpc0luY3JlYXNpbmcocHZmKSA/IHB2Zi5yYW5nZVsxXSA6IHB2Zi5yYW5nZVswXVxuICApO1xuICByZXR1cm4gZ2V0UGVyY2VudGlmaWVkVmFsdWUodmFsdWUsIHVzZVBlcmNlbnRhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29yc3QocHZmOiBUUHZmLCB1c2VQZXJjZW50YWdlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzaWduaWZpY2FudERpZ2l0cyhcbiAgICBpc0luY3JlYXNpbmcocHZmKSA/IHB2Zi5yYW5nZVswXSA6IHB2Zi5yYW5nZVsxXVxuICApO1xuICByZXR1cm4gZ2V0UGVyY2VudGlmaWVkVmFsdWUodmFsdWUsIHVzZVBlcmNlbnRhZ2UpO1xufVxuXG5mdW5jdGlvbiBpc0luY3JlYXNpbmcocHZmOiBUUHZmKTogYm9vbGVhbiB7XG4gIHJldHVybiBwdmYuZGlyZWN0aW9uID09PSAnaW5jcmVhc2luZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25pZmljYW50RGlnaXRzKHg6IG51bWJlciwgcHJlY2lzaW9uPzogbnVtYmVyKSB7XG4gIGlmIChwcmVjaXNpb24gIT09IDAgJiYgIXByZWNpc2lvbikge1xuICAgIHByZWNpc2lvbiA9IDM7XG4gIH1cbiAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsIHx8IGlzTmFOKHgpKSB7XG4gICAgdGhyb3cgJ2F0dGVtcHQgdG8gYXBwbHkgc2lnbmlmaWNhbnQgZGlnaXRzIHRvIG5vbi1udW1lcmljIHZhbHVlJztcbiAgfSBlbHNlIGlmICh4ID09PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSBpZiAoeCA+IDEgfHwgeCA8IC0xKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHgudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoeC50b1ByZWNpc2lvbihwcmVjaXNpb24pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudGlmaWVkVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW5cbik6IG51bWJlciB7XG4gIGlmICh1c2VQZXJjZW50YWdlKSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKSAqIDEwMCk7IC8vMiBzaWdkaXRzIHRvIGVuc3VyZSB0aGUgcHJlY2lzaW9uIHN0YXlzIHRoZSBzYW1lXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdExhYmVsKFxuICB1bml0OiBJVW5pdE9mTWVhc3VyZW1lbnQsXG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgaWYgKHNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdkZWNpbWFsJykge1xuICAgIHJldHVybiAnJSc7XG4gIH0gZWxzZSBpZiAoIXNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5pdC5sYWJlbDtcbiAgfVxufVxuIiwiaW1wb3J0IFByZWZlcmVuY2VFbGljaXRhdGlvbiBmcm9tICcuL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24nO1xuXG5leHBvcnQge1ByZWZlcmVuY2VFbGljaXRhdGlvbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbkdyb3VwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0dyaWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUGFwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9TbGlkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVCb2R5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQ2VsbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVSb3dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVG9vbHRpcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2hlbHBfcG9wdXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbG9kYXNoX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=