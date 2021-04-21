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
    return (react_1.default.createElement(ButtonGroup_1.default, null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdTbGlkZXIvSW1wcmVjaXNlU3dpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1dlaWdodGluZy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nQnV0dG9ucy9NYXRjaGluZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ0VsaWNpdGF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2V0SW1wb3J0YW5jZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nU2V0SW1wb3J0YW5jZS9NYXRjaGluZ1NsaWRlci9NYXRjaGluZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ1V0aWwvTWF0Y2hpbmdVdGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1NsaWRlci9QcmVjaXNlU3dpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nV2VpZ2h0aW5nLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdCdXR0b25zL1JhbmtpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nQ2hvaWNlcy9SYW5raW5nQ2hvaWNlcy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0VsaWNpdGF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nU2l0dWF0aW9uL1JhbmtpbmdTaXR1YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ0J1dHRvbnMvU3dpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nU2V0V2VpZ2h0cy9PdmVydmlld1RhYmxlL0NyaXRlcmlvbk92ZXJ2aWV3L0NyaXRlcmlvbk92ZXJ2aWV3LnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nU2V0V2VpZ2h0cy9PdmVydmlld1RhYmxlL092ZXJ2aWV3VGFibGUudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL1N3aW5nU2V0V2VpZ2h0cy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1V0aWwvU3dpbmdVdGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvVXRpbC91dGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJoZWxwLXBvcHVwXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIixcInJvb3RcIjpcIl9cIn0iLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLCtHQUE0QztBQUM1QyxxSEFBZ0Q7QUFDaEQsd0VBQXdDO0FBQ3hDLHFKQUE2RTtBQUU3RSw4RUFBOEM7QUFDOUMsNkVBQStDO0FBRS9DLFNBQXdCLGVBQWUsQ0FBQyxFQUFDLFNBQVMsRUFBMEI7SUFDMUUsTUFBTSxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsR0FBRyxrQkFBVSxDQUFDLHVDQUFrQixDQUFDLENBQUM7SUFDL0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUNqRSxNQUFNLGFBQWEsR0FBRyxlQUFlLElBQUksc0JBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxNQUFNLEtBQUssR0FBRyxlQUFRLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sSUFBSSxHQUFHLGNBQU8sQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUNMLHlDQUFPLEVBQUUsRUFBRSxrQkFBa0IsU0FBUyxDQUFDLEVBQUUsRUFBRTtRQUN6Qyw4QkFBQyxlQUFLLElBQUMsS0FBSyxFQUFFLFNB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O0FDQUEsMEU7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwiaGVscC1wb3B1cFwiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBtYXRlcmlhbC11aS9jb3JlXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiwgXCJoZWxwLXBvcHVwXCIsIFwicmVhY3RcIiwgXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJoZWxwLXBvcHVwXCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIikpIDogZmFjdG9yeShyb290W1wiQG1hdGVyaWFsLXVpL2NvcmVcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXSwgcm9vdFtcImhlbHAtcG9wdXBcIl0sIHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcIl9cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbkdyb3VwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfR3JpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BhcGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9SYWRpb0dyb3VwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfU2xpZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUJvZHlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUNlbGxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZVJvd19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1Rvb2x0aXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfaGVscF9wb3B1cF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbG9kYXNoX18pIHtcbnJldHVybiAiLCJpbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlfSBmcm9tICdzcmMvVXRpbC91dGlsJztcbmltcG9ydCB7Z2V0QmVzdCwgZ2V0V29yc3R9IGZyb20gJy4uL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyaXRlcmlvbkNob2ljZSh7Y3JpdGVyaW9ufToge2NyaXRlcmlvbjogSUNyaXRlcmlvbn0pIHtcbiAgY29uc3Qge3B2ZnMsIHNob3dQZXJjZW50YWdlc30gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHB2ZiA9IHB2ZnNbY3JpdGVyaW9uLmlkXTtcbiAgY29uc3QgdW5pdFR5cGUgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuICBjb25zdCB3b3JzdCA9IGdldFdvcnN0KHB2ZiwgdXNlUGVyY2VudGFnZSk7XG4gIGNvbnN0IGJlc3QgPSBnZXRCZXN0KHB2ZiwgdXNlUGVyY2VudGFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgaWQ9e2ByYW5raW5nLWNob2ljZS0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgIDxSYWRpbyB2YWx1ZT17Y3JpdGVyaW9uLmlkfSAvPlxuICAgICAge3B2Zi5kaXJlY3Rpb259eycgJ31cbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICB0aXRsZT17Y3JpdGVyaW9uLmRlc2NyaXB0aW9uID8gY3JpdGVyaW9uLmRlc2NyaXB0aW9uIDogJyd9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgaWQ9e2Bjcml0ZXJpb24tb3B0aW9uLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjcml0ZXJpb24udGl0bGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICAgIHtgIGZyb20gJHt3b3JzdH0gdG8gJHtiZXN0fWB9XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cbiIsImltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge2dldFVuaXRMYWJlbH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyaXRlcmlvblNpdHVhdGlvbih7XG4gIGNyaXRlcmlvbixcbiAgZGlzcGxheVZhbHVlXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbiAgZGlzcGxheVZhbHVlOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHtzaG93UGVyY2VudGFnZXN9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAgPGxpIGlkPXtgc2l0dWF0aW9uLSR7Y3JpdGVyaW9uLmlkfWB9PlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBpZD17YHNpdHVhdGlvbi10aXRsZS0ke2NyaXRlcmlvbi5pZH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3JpdGVyaW9uLnRpdGxlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA6IDxzcGFuIGlkPXtgc2l0dWF0aW9uLXZhbHVlLSR7Y3JpdGVyaW9uLmlkfWB9PntkaXNwbGF5VmFsdWV9PC9zcGFuPnsnICd9XG4gICAgICAgIHtnZXRVbml0TGFiZWwoXG4gICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgICApfVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge2FkZFJhbmtpbmd9IGZyb20gJ3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbCc7XG5pbXBvcnQge1xuICBidWlsZEluaXRpYWxJbXByZWNpc2VQcmVmZXJlbmNlcyxcbiAgYnVpbGRJbml0aWFsUHJlY2lzZVByZWZlcmVuY2VzXG59IGZyb20gJ3NyYy9Td2luZ1V0aWwvU3dpbmdVdGlsJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJy4uL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJRXhhY3RTd2luZ1JhdGlvIGZyb20gJy4uL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnLi4vSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5pbXBvcnQge1RFbGljaXRhdGlvbk1ldGhvZH0gZnJvbSAnLi4vVHlwZXMvVEVsaWNpdGF0aW9uTWV0aG9kJztcbmltcG9ydCBJRWxpY2l0YXRpb25Db250ZXh0IGZyb20gJy4vSUVsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBFbGljaXRhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PElFbGljaXRhdGlvbkNvbnRleHQ+KFxuICB7fSBhcyBJRWxpY2l0YXRpb25Db250ZXh0XG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gRWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnQoe1xuICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgY3JpdGVyaWEsXG4gIHNob3dQZXJjZW50YWdlcyxcbiAgcHJldmlvdXNDYWxsYmFjayxcbiAgcHZmcyxcbiAgY2FuY2VsQ2FsbGJhY2ssXG4gIHNhdmVDYWxsYmFjayxcbiAgdGVtcGxhdGUsXG4gIGNoaWxkcmVuXG59OiB7XG4gIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2Q7XG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW107XG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhbjtcbiAgcHJldmlvdXNDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHB2ZnM6IFJlY29yZDxzdHJpbmcsIFRQdmY+O1xuICBjYW5jZWxDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHNhdmVDYWxsYmFjazogKFxuICAgIHByZWZlcmVuY2VzOiBJRXhhY3RTd2luZ1JhdGlvW10gfCBJUmF0aW9Cb3VuZENvbnN0cmFpbnRbXSB8IElSYW5raW5nW11cbiAgKSA9PiB2b2lkO1xuICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgY2hpbGRyZW46IGFueTtcbn0pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc05leHREaXNhYmxlZCwgc2V0SXNOZXh0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkXG4gIF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3ByZWZlcmVuY2VzLCBzZXRQcmVmZXJlbmNlc10gPSB1c2VTdGF0ZTxcbiAgICBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB8IFJlY29yZDxzdHJpbmcsIElSYXRpb0JvdW5kQ29uc3RyYWludD5cbiAgPih7fSk7XG4gIGNvbnN0IFtyYW5raW5ncywgc2V0UmFua2luZ3NdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+Pih7fSk7XG5cbiAgZnVuY3Rpb24gc2V0UmFua2luZyhjcml0ZXJpb25JZDogc3RyaW5nLCByYW5rOiBudW1iZXIpIHtcbiAgICBjb25zdCB1cGRhdGVkUmFua2luZ3MgPSBhZGRSYW5raW5nKHJhbmtpbmdzLCBjcml0ZXJpb25JZCwgcmFuayk7XG4gICAgc2V0UmFua2luZ3ModXBkYXRlZFJhbmtpbmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25BbmRQcmVmZXJlbmNlcyhjcml0ZXJpb25JZDogc3RyaW5nKSB7XG4gICAgaWYgKGVsaWNpdGF0aW9uTWV0aG9kID09PSAncHJlY2lzZScpIHtcbiAgICAgIHNldFByZWZlcmVuY2VzKGJ1aWxkSW5pdGlhbFByZWNpc2VQcmVmZXJlbmNlcyhjcml0ZXJpYSwgY3JpdGVyaW9uSWQpKTtcbiAgICB9IGVsc2UgaWYgKGVsaWNpdGF0aW9uTWV0aG9kID09PSAnaW1wcmVjaXNlJykge1xuICAgICAgc2V0UHJlZmVyZW5jZXMoYnVpbGRJbml0aWFsSW1wcmVjaXNlUHJlZmVyZW5jZXMoY3JpdGVyaWEsIGNyaXRlcmlvbklkKSk7XG4gICAgfVxuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZChjcml0ZXJpb25JZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQcmVmZXJlbmNlKGNyaXRlcmlvbklkOiBzdHJpbmcsIGFuc3dlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IHVwZGF0ZWRQcmVmZXJlbmNlcyA9IF8uY2xvbmVEZWVwKHByZWZlcmVuY2VzKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgZWxpY2l0YXRpb25NZXRob2Q6IGVsaWNpdGF0aW9uTWV0aG9kLFxuICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgIGNyaXRlcmlhOiBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkLCBjcml0ZXJpb25JZF0sXG4gICAgICByYXRpbzogMTAwIC8gYW5zd2VyXG4gICAgfTtcbiAgICB1cGRhdGVkUHJlZmVyZW5jZXNbY3JpdGVyaW9uSWRdID0gcHJlZmVyZW5jZTtcbiAgICBzZXRQcmVmZXJlbmNlcyh1cGRhdGVkUHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Qm91bmRQcmVmZXJlbmNlKFxuICAgIGNyaXRlcmlvbklkOiBzdHJpbmcsXG4gICAgYW5zd2VyOiBbbnVtYmVyLCBudW1iZXJdXG4gICk6IHZvaWQge1xuICAgIGxldCB1cGRhdGVkUHJlZmVyZW5jZXMgPSBfLmNsb25lRGVlcChwcmVmZXJlbmNlcyk7XG4gICAgY29uc3QgcHJlZmVyZW5jZTogSVJhdGlvQm91bmRDb25zdHJhaW50ID0ge1xuICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgdHlwZTogJ3JhdGlvIGJvdW5kJyxcbiAgICAgIGNyaXRlcmlhOiBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkLCBjcml0ZXJpb25JZF0sXG4gICAgICBib3VuZHM6IFsxMDAgLyBhbnN3ZXJbMV0sIDEwMCAvIGFuc3dlclswXV1cbiAgICB9O1xuICAgIHVwZGF0ZWRQcmVmZXJlbmNlc1tjcml0ZXJpb25JZF0gPSBwcmVmZXJlbmNlO1xuICAgIHNldFByZWZlcmVuY2VzKHVwZGF0ZWRQcmVmZXJlbmNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDcml0ZXJpb24oaWQ6IHN0cmluZyk6IElDcml0ZXJpb24ge1xuICAgIHJldHVybiBfLmZpbmQoY3JpdGVyaWEsIFsnaWQnLCBpZF0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWxpY2l0YXRpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjdXJyZW50U3RlcCxcbiAgICAgICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIGVsaWNpdGF0aW9uTWV0aG9kLFxuICAgICAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgICAgIHB2ZnMsXG4gICAgICAgIGNyaXRlcmlhLFxuICAgICAgICByYW5raW5ncyxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIGdldENyaXRlcmlvbixcbiAgICAgICAgcHJldmlvdXNDYWxsYmFjayxcbiAgICAgICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgICAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25BbmRQcmVmZXJlbmNlcyxcbiAgICAgICAgc2V0UHJlZmVyZW5jZSxcbiAgICAgICAgc2V0Qm91bmRQcmVmZXJlbmNlLFxuICAgICAgICBzZXRQcmVmZXJlbmNlcyxcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgICAgIHNhdmVDYWxsYmFjayxcbiAgICAgICAgc2V0UmFua2luZ1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9FbGljaXRhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBzaWduaWZpY2FudERpZ2l0cyBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wcmVjaXNlU3dpbmdTbGlkZXIoe1xuICBjcml0ZXJpb25cbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xufSkge1xuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPFtudW1iZXIsIG51bWJlcl0+KFsxLCAxMDBdKTtcbiAgY29uc3Qge3NldEJvdW5kUHJlZmVyZW5jZSwgbW9zdEltcG9ydGFudENyaXRlcmlvbklkfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCb3VuZFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBzbGlkZXJWYWx1ZSk7XG4gIH0sIFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTbGlkZXJDaGFuZ2VkKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LFxuICAgIG5ld1ZhbHVlOiBbbnVtYmVyLCBudW1iZXJdXG4gICkge1xuICAgIHNldFNsaWRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRCb3VuZFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBuZXdWYWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQgPT09IGNyaXRlcmlvbi5pZFxuICAgICAgPyAnMTAwJSdcbiAgICAgIDogYCR7c2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWVbMF0pfSAtICR7c2lnbmlmaWNhbnREaWdpdHMoXG4gICAgICAgICAgc2xpZGVyVmFsdWVbMV1cbiAgICAgICAgKX0lYDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZW5kZXJWYWx1ZSgpfVxuICAgICAgPFNsaWRlclxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17MX1cbiAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICBkaXNhYmxlZD17bW9zdEltcG9ydGFudENyaXRlcmlvbklkID09PSBjcml0ZXJpb24uaWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge0lubGluZUhlbHB9IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgU3dpbmdCdXR0b25zIGZyb20gJy4uL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMnO1xuaW1wb3J0IFN3aW5nU2V0V2VpZ2h0cyBmcm9tICcuLi9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcoKSB7XG4gIGNvbnN0IHtjdXJyZW50U3RlcH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJzd2luZy13ZWlnaHRpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgPElubGluZUhlbHAgaGVscElkPVwiaW1wcmVjaXNlLXN3aW5nLXdlaWdodGluZ1wiPlxuICAgICAgICAgICAgSW1wcmVjaXNlIHN3aW5nIHdlaWdodGluZ1xuICAgICAgICAgIDwvSW5saW5lSGVscD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgPyA8TW9zdEltcG9ydGFudENob2ljZSAvPiA6IDxTd2luZ1NldFdlaWdodHMgLz59XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPFN3aW5nQnV0dG9ucyAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiAyXG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nQnV0dG9ucygpIHtcbiAgY29uc3Qge1xuICAgIHByZXZpb3VzQ2FsbGJhY2ssXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgY3JpdGVyaWEsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuICAgIG1hdGNoaW5nTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2F2ZUJ1dHRvbmNsaWNrKCk6IHZvaWQge1xuICAgIHNhdmVDYWxsYmFjayhPYmplY3QudmFsdWVzKHByZWZlcmVuY2VzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaGluZ05leHQoKTogdm9pZCB7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGFzdFN0ZXAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwID09PSBfLnNpemUoY3JpdGVyaWEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDEpIHtcbiAgICAgIHByZXZpb3VzQ2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNOZXh0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKTogdm9pZCB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwPlxuICAgICAge2NhbmNlbENhbGxiYWNrID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgICA+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwicHJldmlvdXMtYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNDbGlja31cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGRpc2FibGVkPXshcHJldmlvdXNDYWxsYmFjayAmJiBjdXJyZW50U3RlcCA9PT0gMX1cbiAgICAgID5cbiAgICAgICAgUHJldmlvdXNcbiAgICAgIDwvQnV0dG9uPlxuICAgICAge2lzTGFzdFN0ZXAoKSA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwic2F2ZS1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVCdXR0b25jbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJuZXh0LWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dEJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHtJbmxpbmVIZWxwfSBmcm9tICdoZWxwLXBvcHVwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IE1vc3RJbXBvcnRhbnRDaG9pY2UgZnJvbSAnLi4vTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlJztcbmltcG9ydCBNYXRjaGluZ0J1dHRvbnMgZnJvbSAnLi9NYXRjaGluZ0J1dHRvbnMvTWF0Y2hpbmdCdXR0b25zJztcbmltcG9ydCBNYXRjaGluZ1NldEltcG9ydGFuY2UgZnJvbSAnLi9NYXRjaGluZ1NldEltcG9ydGFuY2UvTWF0Y2hpbmdTZXRJbXBvcnRhbmNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdFbGljaXRhdGlvbigpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBfLnNpemUoY3JpdGVyaWEpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibWF0Y2hpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgPElubGluZUhlbHAgaGVscElkPVwibWF0Y2hpbmdcIj5NYXRjaGluZzwvSW5saW5lSGVscD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgPyAoXG4gICAgICAgICAgPE1vc3RJbXBvcnRhbnRDaG9pY2UgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TWF0Y2hpbmdTZXRJbXBvcnRhbmNlIC8+XG4gICAgICAgICl9XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPE1hdGNoaW5nQnV0dG9ucyAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiB7dG90YWxTdGVwc31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge1xuICBnZXRDdXJyZW50Q3JpdGVyaW9uLFxuICBnZXRNYXRjaGluZ1N0YXRlbWVudFxufSBmcm9tICdzcmMvTWF0Y2hpbmdVdGlsL01hdGNoaW5nVXRpbCc7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZX0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQge2dldEJlc3QsIGdldFdvcnN0fSBmcm9tICcuLi8uLi9VdGlsL3V0aWwnO1xuaW1wb3J0IE1hdGNoaW5nU2xpZGVyIGZyb20gJy4vTWF0Y2hpbmdTbGlkZXIvTWF0Y2hpbmdTbGlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ1NldEltcG9ydGFuY2UoKSB7XG4gIGNvbnN0IHtcbiAgICBwdmZzLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgY3VycmVudFN0ZXAsXG4gICAgZ2V0Q3JpdGVyaW9uLFxuICAgIGNyaXRlcmlhLFxuICAgIHRlbXBsYXRlXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgbW9zdEltcG9ydGFudENyaXRlcmlvbiA9IGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpO1xuICBjb25zdCBtb3N0SW1wb3J0YW50VW5pdFR5cGUgPVxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcblxuICBjb25zdCBjdXJyZW50Q3JpdGVyaW9uID0gZ2V0Q3VycmVudENyaXRlcmlvbihcbiAgICBjcml0ZXJpYSxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgY3VycmVudFN0ZXBcbiAgKTtcbiAgY29uc3QgY3VycmVudFVuaXRUeXBlID1cbiAgICBjdXJyZW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG5cbiAgY29uc3QgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uID1cbiAgICBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKG1vc3RJbXBvcnRhbnRVbml0VHlwZSk7XG5cbiAgY29uc3QgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uID1cbiAgICBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKGN1cnJlbnRVbml0VHlwZSk7XG5cbiAgY29uc3QgW3N0YXRlbWVudCwgc2V0U3RhdGVtZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgZ2V0TWF0Y2hpbmdTdGF0ZW1lbnQoXG4gICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLFxuICAgICAgY3VycmVudENyaXRlcmlvbixcbiAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvbixcbiAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbixcbiAgICAgIHB2ZnMsXG4gICAgICB0ZW1wbGF0ZVxuICAgIClcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXRlbWVudChcbiAgICAgIGdldE1hdGNoaW5nU3RhdGVtZW50KFxuICAgICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLFxuICAgICAgICBjdXJyZW50Q3JpdGVyaW9uLFxuICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb24sXG4gICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbixcbiAgICAgICAgcHZmcyxcbiAgICAgICAgdGVtcGxhdGVcbiAgICAgIClcbiAgICApO1xuICB9LCBbc2hvd1BlcmNlbnRhZ2VzLCB0ZW1wbGF0ZSwgbW9zdEltcG9ydGFudENyaXRlcmlvbiwgY3VycmVudENyaXRlcmlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntgVHJhZGUtb2ZmIGJldHdlZW4gJHttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLnRpdGxlfSBhbmQgJHtjdXJyZW50Q3JpdGVyaW9uLnRpdGxlfWB9PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWRcbiAgICAgICAgaXRlbVxuICAgICAgICB4cz17MTJ9XG4gICAgICAgIGlkPVwibWF0Y2hpbmctc3RhdGVtZW50XCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN0YXRlbWVudH19XG4gICAgICAvPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Dcml0ZXJpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkFsdGVybmF0aXZlIEE8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkFsdGVybmF0aXZlIEI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBpZD1cIm1vc3QtaW1wb3J0YW50LWNyaXRlcmlvblwiPlxuICAgICAgICAgICAgICAgIHttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLnRpdGxlfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGlkPVwibW9zdC1pbXBvcnRhbnQtd29yc3RcIj5cbiAgICAgICAgICAgICAgICB7Z2V0V29yc3QoXG4gICAgICAgICAgICAgICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sXG4gICAgICAgICAgICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb25cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGlkPVwibWF0Y2hpbmctY2VsbFwiPlxuICAgICAgICAgICAgICAgIDxNYXRjaGluZ1NsaWRlciBjdXJyZW50Q3JpdGVyaW9uSWQ9e2N1cnJlbnRDcml0ZXJpb24uaWR9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBpZD1cInRyYWRlLW9mZi1jcml0ZXJpb25cIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVudENyaXRlcmlvbi50aXRsZX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBpZD1cInRyYWRlLW9mZi1iZXN0XCI+XG4gICAgICAgICAgICAgICAge2dldEJlc3QoXG4gICAgICAgICAgICAgICAgICBwdmZzW2N1cnJlbnRDcml0ZXJpb24uaWRdLFxuICAgICAgICAgICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBpZD1cInRyYWRlLW9mZi13b3JzdFwiPlxuICAgICAgICAgICAgICAgIHtnZXRXb3JzdChcbiAgICAgICAgICAgICAgICAgIHB2ZnNbY3VycmVudENyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgICAgICAgICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb25cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCB7XG4gIGNhbGN1bGF0ZUltcG9ydGFuY2UsXG4gIGRldGVybWluZVN0ZXBTaXplXG59IGZyb20gJ3NyYy9NYXRjaGluZ1V0aWwvTWF0Y2hpbmdVdGlsJztcbmltcG9ydCBzaWduaWZpY2FudERpZ2l0cywge1xuICBjYW5CZVBlcmNlbnRhZ2UsXG4gIGdldEJlc3QsXG4gIGdldFdvcnN0XG59IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ1NsaWRlcih7XG4gIGN1cnJlbnRDcml0ZXJpb25JZFxufToge1xuICBjdXJyZW50Q3JpdGVyaW9uSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBzZXRQcmVmZXJlbmNlLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBwdmZzLFxuICAgIGdldENyaXRlcmlvblxuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IG1vc3RJbXBvcnRhbnRDcml0ZXJpb24gPSBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKTtcbiAgY29uc3QgcHZmID0gcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdO1xuXG4gIGNvbnN0IHVuaXRUeXBlID0gbW9zdEltcG9ydGFudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG5cbiAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KFxuICAgIGdldEJlc3QocHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdLCB1c2VQZXJjZW50YWdlKVxuICApO1xuICBjb25zdCBbc3RlcFNpemVdID0gdXNlU3RhdGU8bnVtYmVyPihkZXRlcm1pbmVTdGVwU2l6ZShwdmYucmFuZ2UpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlclZhbHVlID0gZ2V0QmVzdChwdmYsIGZhbHNlKTtcbiAgICBzZXRTbGlkZXJWYWx1ZShzbGlkZXJWYWx1ZSk7XG4gICAgc2V0UHJlZmVyZW5jZShjdXJyZW50Q3JpdGVyaW9uSWQsIGNhbGN1bGF0ZUltcG9ydGFuY2Uoc2xpZGVyVmFsdWUsIHB2ZikpO1xuICB9LCBbY3VycmVudFN0ZXBdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTbGlkZXJDaGFuZ2VkKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LFxuICAgIG5ld1ZhbHVlOiBudW1iZXJcbiAgKSB7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIHNldElzTmV4dERpc2FibGVkKFxuICAgICAgc2lnbmlmaWNhbnREaWdpdHMobmV3VmFsdWUpID09PVxuICAgICAgICBnZXRXb3JzdChwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb24uaWRdLCBmYWxzZSlcbiAgICApO1xuICAgIHNldFByZWZlcmVuY2UoY3VycmVudENyaXRlcmlvbklkLCBjYWxjdWxhdGVJbXBvcnRhbmNlKG5ld1ZhbHVlLCBwdmYpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdXNlUGVyY2VudGFnZVxuICAgICAgPyBzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZSAqIDEwMClcbiAgICAgIDogc2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2Rpc3BsYXlWYWx1ZSgpfVxuICAgICAgPFNsaWRlclxuICAgICAgICBpZD1cIm1hdGNoaW5nLXNsaWRlclwiXG4gICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cbiAgICAgICAgbWluPXtwdmYucmFuZ2VbMF19XG4gICAgICAgIG1heD17cHZmLnJhbmdlWzFdfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlZH1cbiAgICAgICAgc3RlcD17c3RlcFNpemV9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge0lMaW5lYXJQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvSUxpbmVhclB2Zic7XG5pbXBvcnQge0lQaWVjZVdpc2VMaW5lYXJQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvSVBpZWNlV2lzZUxpbmVhclB2Zic7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge1RQdmZEaXJlY3Rpb259IGZyb20gJ3NyYy9UeXBlcy9QdmZUeXBlcyc7XG5pbXBvcnQge2dldEJlc3QsIGdldFVuaXRMYWJlbCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVRDSElOR19URU1QTEFURSA9XG4gICdIb3cgbXVjaCBiZXR0ZXIgc2hvdWxkICVjcml0ZXJpb24xJSBtaW5pbWFsbHkgYmVjb21lIHRvIGp1c3RpZnkgdGhlIHdvcnNlbmluZyBvZiAlY3JpdGVyaW9uMiU/JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hdGNoaW5nU3RhdGVtZW50KFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uOiBJQ3JpdGVyaW9uLFxuICBjdXJyZW50Q3JpdGVyaW9uOiBJQ3JpdGVyaW9uLFxuICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb246IGJvb2xlYW4sXG4gIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbjogYm9vbGVhbixcbiAgcHZmczogUmVjb3JkPHN0cmluZywgVFB2Zj4sXG4gIHRlbXBsYXRlPzogc3RyaW5nXG4pOiBzdHJpbmcge1xuICBjb25zdCBtYXRjaGluZ1RlbXBsYXRlID0gdGVtcGxhdGUgPyB0ZW1wbGF0ZSA6IERFRkFVTFRfTUFUQ0hJTkdfVEVNUExBVEU7XG4gIHJldHVybiBtYXRjaGluZ1RlbXBsYXRlXG4gICAgLnJlcGxhY2UoLyVjcml0ZXJpb24xJS9naSwgbW9zdEltcG9ydGFudENyaXRlcmlvbi50aXRsZSlcbiAgICAucmVwbGFjZShcbiAgICAgIC8ldW5pdDElL2dpLFxuICAgICAgZ2V0VW5pdExhYmVsKFxuICAgICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb25cbiAgICAgIClcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvJXdvcnN0MSUvZ2ksXG4gICAgICBTdHJpbmcoXG4gICAgICAgIGdldFdvcnN0KFxuICAgICAgICAgIHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgLnJlcGxhY2UoXG4gICAgICAvJWJlc3QxJS9naSxcbiAgICAgIFN0cmluZyhcbiAgICAgICAgZ2V0QmVzdChcbiAgICAgICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb24uaWRdLFxuICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvblxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIC5yZXBsYWNlKC8lY3JpdGVyaW9uMiUvZ2ksIGN1cnJlbnRDcml0ZXJpb24udGl0bGUpXG4gICAgLnJlcGxhY2UoXG4gICAgICAvJXVuaXQyJS9naSxcbiAgICAgIGdldFVuaXRMYWJlbChcbiAgICAgICAgY3VycmVudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudCxcbiAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uXG4gICAgICApXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgLyV3b3JzdDIlL2dpLFxuICAgICAgU3RyaW5nKFxuICAgICAgICBnZXRXb3JzdChwdmZzW2N1cnJlbnRDcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb24pXG4gICAgICApXG4gICAgKVxuICAgIC5yZXBsYWNlKFxuICAgICAgLyViZXN0MiUvZ2ksXG4gICAgICBTdHJpbmcoXG4gICAgICAgIGdldEJlc3QocHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uKVxuICAgICAgKVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVTdGVwU2l6ZShbbG93ZXJCb3VuZCwgdXBwZXJCb3VuZF06IFtcbiAgbnVtYmVyLFxuICBudW1iZXJcbl0pOiBudW1iZXIge1xuICBjb25zdCBpbnRlcnZhbCA9IHVwcGVyQm91bmQgLSBsb3dlckJvdW5kO1xuICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAoaW50ZXJ2YWwpKTtcbiAgcmV0dXJuIE1hdGgucG93KDEwLCBtYWduaXR1ZGUgLSAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUltcG9ydGFuY2Uoc2xpZGVyVmFsdWU6IG51bWJlciwgcHZmOiBUUHZmKTogbnVtYmVyIHtcbiAgaWYgKGlzUGllY2VXaXNlTGluZWFyUHZmKHB2ZikpIHtcbiAgICByZXR1cm4gY2FsY3VsYXRlUGllY2V3aXNlSW1wb3J0YW5jZShzbGlkZXJWYWx1ZSwgcHZmKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2FsY3VsYXRlTGluZWFySW1wb3J0YW5jZShzbGlkZXJWYWx1ZSwgcHZmKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1BpZWNlV2lzZUxpbmVhclB2ZihwdmY6IFRQdmYpOiBwdmYgaXMgSVBpZWNlV2lzZUxpbmVhclB2ZiB7XG4gIHJldHVybiAnY3V0b2ZmcycgaW4gcHZmO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVMaW5lYXJJbXBvcnRhbmNlKFxuICBzbGlkZXJWYWx1ZTogbnVtYmVyLFxuICB7cmFuZ2U6IFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXSwgZGlyZWN0aW9ufTogSUxpbmVhclB2ZlxuKTogbnVtYmVyIHtcbiAgY29uc3QgcmViYXNlZCA9XG4gICAgZGlyZWN0aW9uID09PSAnZGVjcmVhc2luZydcbiAgICAgID8gdXBwZXJCb3VuZCAtIHNsaWRlclZhbHVlXG4gICAgICA6IHNsaWRlclZhbHVlIC0gbG93ZXJCb3VuZDtcbiAgcmV0dXJuIChyZWJhc2VkIC8gTWF0aC5hYnMobG93ZXJCb3VuZCAtIHVwcGVyQm91bmQpKSAqIDEwMDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUGllY2V3aXNlSW1wb3J0YW5jZShcbiAgdmFsdWU6IG51bWJlcixcbiAgcHZmOiBJUGllY2VXaXNlTGluZWFyUHZmXG4pOiBudW1iZXIge1xuICBjb25zdCB7XG4gICAgY3V0b2ZmcyxcbiAgICByYW5nZTogW2xvd2VyQm91bmQsIHVwcGVyQm91bmRdLFxuICAgIGRpcmVjdGlvblxuICB9ID0gcHZmO1xuICBjb25zdCBjdXRvZmZzV2l0aEJvdW5kcyA9IFtsb3dlckJvdW5kLCAuLi5jdXRvZmZzLCB1cHBlckJvdW5kXTtcbiAgY29uc3QgdmFsdWVzV2l0aEJvdW5kcyA9XG4gICAgZGlyZWN0aW9uID09PSAnaW5jcmVhc2luZydcbiAgICAgID8gWzAsIDAuMjUsIDAuNSwgMC43NSwgMV1cbiAgICAgIDogWzEsIDAuNzUsIDAuNSwgMC4yNSwgMF07XG4gIGNvbnN0IGV4YWN0Q3V0b2ZmSWR4ID0gXy5maW5kSW5kZXgoXG4gICAgY3V0b2Zmc1dpdGhCb3VuZHMsXG4gICAgKHg6IG51bWJlcik6IGJvb2xlYW4gPT4geCA9PT0gdmFsdWVcbiAgKTtcbiAgaWYgKGV4YWN0Q3V0b2ZmSWR4ICE9PSAtMSkge1xuICAgIHJldHVybiB2YWx1ZXNXaXRoQm91bmRzW2V4YWN0Q3V0b2ZmSWR4XSAqIDEwMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmFsdWUoXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjdXRvZmZzV2l0aEJvdW5kcyxcbiAgICAgICAgdmFsdWVzV2l0aEJvdW5kcyxcbiAgICAgICAgZGlyZWN0aW9uXG4gICAgICApICogMTAwXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWYWx1ZShcbiAgdmFsdWU6IG51bWJlcixcbiAgY3V0b2Zmc1dpdGhCb3VuZHM6IG51bWJlcltdLFxuICB2YWx1ZXNXaXRoQm91bmRzOiBudW1iZXJbXSxcbiAgZGlyZWN0aW9uOiBUUHZmRGlyZWN0aW9uXG4pOiBudW1iZXIge1xuICBjb25zdCBsYXJnZXJDdXRvZmZJZHggPSBfLmZpbmRJbmRleChcbiAgICBjdXRvZmZzV2l0aEJvdW5kcyxcbiAgICAoeDogbnVtYmVyKTogYm9vbGVhbiA9PiB4ID4gdmFsdWVcbiAgKTtcbiAgY29uc3QgW2xvd2VyQ3V0T2ZmLCB1cHBlckN1dE9mZl0gPSBbXG4gICAgY3V0b2Zmc1dpdGhCb3VuZHNbbGFyZ2VyQ3V0b2ZmSWR4IC0gMV0sXG4gICAgY3V0b2Zmc1dpdGhCb3VuZHNbbGFyZ2VyQ3V0b2ZmSWR4XVxuICBdO1xuXG4gIGNvbnN0IHJlYmFzZWQgPSB2YWx1ZSAtIGxvd2VyQ3V0T2ZmO1xuICBjb25zdCByYXRpb09mUXVhcnRpbGUgPSByZWJhc2VkIC8gKHVwcGVyQ3V0T2ZmIC0gbG93ZXJDdXRPZmYpO1xuICBjb25zdCBxdWFydGlsZVZhbHVlID0gdmFsdWVzV2l0aEJvdW5kc1tsYXJnZXJDdXRvZmZJZHggLSAxXTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2luY3JlYXNpbmcnKSB7XG4gICAgcmV0dXJuIHF1YXJ0aWxlVmFsdWUgKyAwLjI1ICogcmF0aW9PZlF1YXJ0aWxlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBxdWFydGlsZVZhbHVlIC0gMC4yNSAqIHJhdGlvT2ZRdWFydGlsZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudENyaXRlcmlvbihcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXSxcbiAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkOiBzdHJpbmcsXG4gIGN1cnJlbnRTdGVwOiBudW1iZXJcbik6IElDcml0ZXJpb24ge1xuICByZXR1cm4gXy5yZWplY3QoY3JpdGVyaWEsIChjcml0ZXJpb246IElDcml0ZXJpb24pID0+IHtcbiAgICByZXR1cm4gY3JpdGVyaW9uLmlkID09PSBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ7XG4gIH0pW2N1cnJlbnRTdGVwIC0gMl07XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnQsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2UsIGdldFdvcnN0fSBmcm9tICdzcmMvVXRpbC91dGlsJztcbmltcG9ydCBDcml0ZXJpb25DaG9pY2UgZnJvbSAnLi4vQ3JpdGVyaW9uQ2hvaWNlL0NyaXRlcmlvbkNob2ljZSc7XG5pbXBvcnQgQ3JpdGVyaW9uU2l0dWF0aW9uIGZyb20gJy4uL0NyaXRlcmlvblNpdHVhdGlvbi9Dcml0ZXJpb25TaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3N0SW1wb3J0YW50Q2hvaWNlKCkge1xuICBjb25zdCB7XG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBzZXRJc05leHREaXNhYmxlZCxcbiAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgcHZmcyxcbiAgICBjcml0ZXJpYVxuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRJc05leHREaXNhYmxlZChmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgdW5pdFR5cGUgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgICAgICAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDcml0ZXJpb25TaXR1YXRpb25cbiAgICAgICAgICAgIGtleT17Y3JpdGVyaW9uLmlkfVxuICAgICAgICAgICAgY3JpdGVyaW9uPXtjcml0ZXJpb259XG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU9e2dldFdvcnN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uQ2hvaWNlcygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiAoXG4gICAgICAgIDxDcml0ZXJpb25DaG9pY2Uga2V5PXtjcml0ZXJpb24uaWR9IGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPlxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5HaXZlbiB0aGUgZm9sbG93aW5nIHNpdHVhdGlvbjo8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtyZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCl9XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaW1wcm92ZW1lbnRzIGlzIG1vc3QgaW1wb3J0YW50P1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgbmFtZT1cIm1vc3QtaW1wb3J0YW50LWNyaXRlcmlvbi1yYWRpb1wiXG4gICAgICAgICAgdmFsdWU9e21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge3JlbmRlckNyaXRlcmlvbkNob2ljZXMoKX1cbiAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzIGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmVjaXNlU3dpbmdTbGlkZXIoe1xuICBjcml0ZXJpb25cbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xufSkge1xuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPG51bWJlcj4oMTAwKTtcbiAgY29uc3Qge3NldFByZWZlcmVuY2UsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZH0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIHNsaWRlclZhbHVlKTtcbiAgfSwgW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IG51bWJlclxuICApIHtcbiAgICBzZXRTbGlkZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgc2V0UHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZSl9XG4gICAgICA8U2xpZGVyXG4gICAgICAgIGlkPXtgc3dpbmctc2xpZGVyLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cbiAgICAgICAgbWluPXsxfVxuICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZWR9XG4gICAgICAgIHN0ZXA9ezF9XG4gICAgICAgIGRpc2FibGVkPXttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQgPT09IGNyaXRlcmlvbi5pZH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7SW5saW5lSGVscH0gZnJvbSAnaGVscC1wb3B1cCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IE1vc3RJbXBvcnRhbnRDaG9pY2UgZnJvbSAnLi4vTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlJztcbmltcG9ydCBTd2luZ0J1dHRvbnMgZnJvbSAnLi4vU3dpbmdCdXR0b25zL1N3aW5nQnV0dG9ucyc7XG5pbXBvcnQgU3dpbmdTZXRXZWlnaHRzIGZyb20gJy4uL1N3aW5nU2V0V2VpZ2h0cy9Td2luZ1NldFdlaWdodHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmVjaXNlU3dpbmdXZWlnaHRpbmcoKSB7XG4gIGNvbnN0IHtjdXJyZW50U3RlcH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJzd2luZy13ZWlnaHRpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgPElubGluZUhlbHAgaGVscElkPVwic3dpbmctd2VpZ2h0aW5nXCI+XG4gICAgICAgICAgICBQcmVjaXNlIHN3aW5nIHdlaWdodGluZ1xuICAgICAgICAgIDwvSW5saW5lSGVscD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgPyA8TW9zdEltcG9ydGFudENob2ljZSAvPiA6IDxTd2luZ1NldFdlaWdodHMgLz59XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPFN3aW5nQnV0dG9ucyAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiAyXG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQge0JveCwgR3JpZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHtIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50LCBJSGVscEluZm99IGZyb20gJ2hlbHAtcG9wdXAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbXByZWNpc2VTd2luZ1dlaWdodGluZyBmcm9tICdzcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1dlaWdodGluZyc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElFeGFjdFN3aW5nUmF0aW8gZnJvbSAnc3JjL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmF0aW9Cb3VuZENvbnN0cmFpbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuaW1wb3J0IE1hdGNoaW5nRWxpY2l0YXRpb24gZnJvbSAnc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdFbGljaXRhdGlvbic7XG5pbXBvcnQgUHJlY2lzZVN3aW5nV2VpZ2h0aW5nIGZyb20gJ3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdXZWlnaHRpbmcnO1xuaW1wb3J0IFJhbmtpbmdFbGljaXRhdGlvbiBmcm9tICdzcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdFbGljaXRhdGlvbic7XG5pbXBvcnQge1RFbGljaXRhdGlvbk1ldGhvZH0gZnJvbSAnc3JjL1R5cGVzL1RFbGljaXRhdGlvbk1ldGhvZCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50fSBmcm9tICcuLi9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlZmVyZW5jZUVsaWNpdGF0aW9uKHtcbiAgY3JpdGVyaWEsXG4gIGVsaWNpdGF0aW9uTWV0aG9kLFxuICBtYW51YWxIb3N0LFxuICBtYW51YWxMZXhpY29uLFxuICBtYW51YWxQYXRoLFxuICBwcmV2aW91c0NhbGxiYWNrLFxuICBwdmZzLFxuICBzaG93UGVyY2VudGFnZXMsXG4gIGNhbmNlbENhbGxiYWNrLFxuICBzYXZlQ2FsbGJhY2ssXG4gIHRlbXBsYXRlXG59OiB7XG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW107XG4gIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2Q7XG4gIG1hbnVhbEhvc3Q6IHN0cmluZztcbiAgbWFudWFsTGV4aWNvbjogUmVjb3JkPHN0cmluZywgSUhlbHBJbmZvPjtcbiAgbWFudWFsUGF0aDogc3RyaW5nO1xuICBwcmV2aW91c0NhbGxiYWNrPzogKCkgPT4gdm9pZDtcbiAgcHZmczogUmVjb3JkPHN0cmluZywgVFB2Zj47XG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhbjtcbiAgY2FuY2VsQ2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xuICBzYXZlQ2FsbGJhY2s6IChcbiAgICBwcmVmZXJlbmNlczogSUV4YWN0U3dpbmdSYXRpb1tdIHwgSVJhdGlvQm91bmRDb25zdHJhaW50W10gfCBJUmFua2luZ1tdXG4gICkgPT4gdm9pZDtcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG59KTogSlNYLkVsZW1lbnQge1xuICBmdW5jdGlvbiByZW5kZXJFbGljaXRhdGlvbihcbiAgICBlbGljaXRhdGlvbk1ldGhvZDogVEVsaWNpdGF0aW9uTWV0aG9kXG4gICk6IEpTWC5FbGVtZW50IHtcbiAgICBzd2l0Y2ggKGVsaWNpdGF0aW9uTWV0aG9kKSB7XG4gICAgICBjYXNlICdwcmVjaXNlJzpcbiAgICAgICAgcmV0dXJuIDxQcmVjaXNlU3dpbmdXZWlnaHRpbmcgLz47XG4gICAgICBjYXNlICdpbXByZWNpc2UnOlxuICAgICAgICByZXR1cm4gPEltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nIC8+O1xuICAgICAgY2FzZSAnbWF0Y2hpbmcnOlxuICAgICAgICByZXR1cm4gPE1hdGNoaW5nRWxpY2l0YXRpb24gLz47XG4gICAgICBjYXNlICdyYW5raW5nJzpcbiAgICAgICAgcmV0dXJuIDxSYW5raW5nRWxpY2l0YXRpb24gLz47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnRcbiAgICAgIHByZXZpb3VzQ2FsbGJhY2s9e3ByZXZpb3VzQ2FsbGJhY2t9XG4gICAgICBjcml0ZXJpYT17Y3JpdGVyaWF9XG4gICAgICBlbGljaXRhdGlvbk1ldGhvZD17ZWxpY2l0YXRpb25NZXRob2R9XG4gICAgICBzaG93UGVyY2VudGFnZXM9e3Nob3dQZXJjZW50YWdlc31cbiAgICAgIHB2ZnM9e3B2ZnN9XG4gICAgICBjYW5jZWxDYWxsYmFjaz17Y2FuY2VsQ2FsbGJhY2t9XG4gICAgICBzYXZlQ2FsbGJhY2s9e3NhdmVDYWxsYmFja31cbiAgICAgIHRlbXBsYXRlPXt0ZW1wbGF0ZX1cbiAgICA+XG4gICAgICA8SGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudFxuICAgICAgICBsZXhpY29uPXttYW51YWxMZXhpY29ufVxuICAgICAgICBob3N0PXttYW51YWxIb3N0fVxuICAgICAgICBwYXRoPXttYW51YWxQYXRofVxuICAgICAgPlxuICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGNvbXBvbmVudD17Qm94fSBtdD17Mn0+XG4gICAgICAgICAge3JlbmRlckVsaWNpdGF0aW9uKGVsaWNpdGF0aW9uTWV0aG9kKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9IZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50PlxuICAgIDwvRWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQge1xuICBhc3NpZ25NaXNzaW5nUmFua2luZ3MsXG4gIGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzLFxuICBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rLFxuICBVTlJBTktFRFxufSBmcm9tICdzcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQnV0dG9ucyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWRcbn06IHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nO1xuICBzZXRTZWxlY3RlZENyaXRlcmlvbklkOiAoY3JpdGVyaW9uSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge1xuICAgIHByZXZpb3VzQ2FsbGJhY2ssXG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0UmFua2luZyxcbiAgICBzZXRDdXJyZW50U3RlcCxcbiAgICByYW5raW5ncyxcbiAgICBjcml0ZXJpYSxcbiAgICBjYW5jZWxDYWxsYmFjayxcbiAgICBzYXZlQ2FsbGJhY2tcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKSB7XG4gICAgc2V0UmFua2luZyhzZWxlY3RlZENyaXRlcmlvbklkLCBjdXJyZW50U3RlcCk7XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZCgnJyk7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCBmaW5pc2hlZFJhbmtpbmdzOiBSZWNvcmQ8XG4gICAgICBzdHJpbmcsXG4gICAgICBJUmFua2luZ0Fuc3dlclxuICAgID4gPSBhc3NpZ25NaXNzaW5nUmFua2luZ3MoXG4gICAgICByYW5raW5ncyxcbiAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gICAgICBjdXJyZW50U3RlcCxcbiAgICAgIGNyaXRlcmlhXG4gICAgKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzKF8udG9BcnJheShmaW5pc2hlZFJhbmtpbmdzKSk7XG4gICAgc2F2ZUNhbGxiYWNrKHByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzQ2xpY2soKSB7XG4gICAgaWYgKGN1cnJlbnRTdGVwID09PSAxKSB7XG4gICAgICBwcmV2aW91c0NhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50U3RlcCAhPT0gMSkge1xuICAgICAgICByZW1vdmVSYW5rRnJvbUNyaXRlcmlvbigpO1xuICAgICAgfVxuICAgICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZCgnJyk7XG4gICAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVJhbmtGcm9tQ3JpdGVyaW9uKCkge1xuICAgIGNvbnN0IGxvb2t1cFJhbmsgPSBjdXJyZW50U3RlcCAtIDE7XG4gICAgY29uc3QgY3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKGNyaXRlcmlhLCByYW5raW5ncywgbG9va3VwUmFuayk7XG4gICAgc2V0UmFua2luZyhjcml0ZXJpb25JZCwgVU5SQU5LRUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IF8uc2l6ZShjcml0ZXJpYSkgLSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIHtjYW5jZWxDYWxsYmFjayA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgICAgPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cInByZXZpb3VzLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzQ2xpY2t9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBkaXNhYmxlZD17IXByZXZpb3VzQ2FsbGJhY2sgJiYgY3VycmVudFN0ZXAgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpc0xhc3RTdGVwKCkgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnQsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtVTlJBTktFRH0gZnJvbSAnc3JjL1JhbmtpbmdVdGlsL1JhbmtpbmdVdGlsJztcbmltcG9ydCBDcml0ZXJpb25DaG9pY2UgZnJvbSAnLi4vLi4vQ3JpdGVyaW9uQ2hvaWNlL0NyaXRlcmlvbkNob2ljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdDaG9pY2VzKHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZCxcbiAgaGFuZGxlU2VsZWN0aW9uXG59OiB7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQ6IHN0cmluZztcbiAgaGFuZGxlU2VsZWN0aW9uOiAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xufSkge1xuICBjb25zdCB7cmFua2luZ3MsIGNyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgZmlsdGVyZWRDcml0ZXJpYSA9IF8uZmlsdGVyKFxuICAgIGNyaXRlcmlhLFxuICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBib29sZWFuID0+XG4gICAgICAhcmFua2luZ3NbY3JpdGVyaW9uLmlkXSB8fCByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpbXByb3ZlbWVudHMgaXMgbW9zdCBpbXBvcnRhbnQ/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICBuYW1lPVwicmFua2luZy1jcml0ZXJpb24tcmFkaW9cIlxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb259XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5tYXAoZmlsdGVyZWRDcml0ZXJpYSwgKGNyaXRlcmlvbikgPT4gKFxuICAgICAgICAgICAgPENyaXRlcmlvbkNob2ljZSBrZXk9e2NyaXRlcmlvbi5pZH0gY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7SW5saW5lSGVscH0gZnJvbSAnaGVscC1wb3B1cCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IFJhbmtpbmdCdXR0b25zIGZyb20gJy4vUmFua2luZ0J1dHRvbnMvUmFua2luZ0J1dHRvbnMnO1xuaW1wb3J0IFJhbmtpbmdDaG9pY2VzIGZyb20gJy4vUmFua2luZ0Nob2ljZXMvUmFua2luZ0Nob2ljZXMnO1xuaW1wb3J0IFJhbmtpbmdTaXR1YXRpb24gZnJvbSAnLi9SYW5raW5nU2l0dWF0aW9uL1JhbmtpbmdTaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nRWxpY2l0YXRpb24oKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENyaXRlcmlvbklkLCBzZXRTZWxlY3RlZENyaXRlcmlvbklkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qge2N1cnJlbnRTdGVwLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBfLnNpemUoY3JpdGVyaWEpIC0gMTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24oZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJyYW5raW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIDxJbmxpbmVIZWxwIGhlbHBJZD1cInJhbmtpbmdcIj5SYW5raW5nPC9JbmxpbmVIZWxwPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYW5raW5nU2l0dWF0aW9uIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYW5raW5nQ2hvaWNlc1xuICAgICAgICAgIGhhbmRsZVNlbGVjdGlvbj17aGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQ9e3NlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPFJhbmtpbmdCdXR0b25zXG4gICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpb25JZD17c2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBzZXRTZWxlY3RlZENyaXRlcmlvbklkPXtzZXRTZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiB7dG90YWxTdGVwc31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge1VOUkFOS0VEfSBmcm9tICdzcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2UsIGdldEJlc3QsIGdldFdvcnN0fSBmcm9tICdzcmMvVXRpbC91dGlsJztcbmltcG9ydCBDcml0ZXJpb25TaXR1YXRpb24gZnJvbSAnLi4vLi4vQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdTaXR1YXRpb24oKSB7XG4gIGNvbnN0IHtyYW5raW5ncywgc2hvd1BlcmNlbnRhZ2VzLCBwdmZzLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlVG9EaXNwbGF5KGNyaXRlcmlvbjogSUNyaXRlcmlvbikge1xuICAgIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gICAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuICAgIHJldHVybiAhcmFua2luZ3NbY3JpdGVyaW9uLmlkXSB8fCByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICAgICA/IGdldFdvcnN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSlcbiAgICAgIDogZ2V0QmVzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiAoXG4gICAgICAgIDxDcml0ZXJpb25TaXR1YXRpb25cbiAgICAgICAgICBrZXk9e2NyaXRlcmlvbi5pZH1cbiAgICAgICAgICBjcml0ZXJpb249e2NyaXRlcmlvbn1cbiAgICAgICAgICBkaXNwbGF5VmFsdWU9e2dldFZhbHVlVG9EaXNwbGF5KGNyaXRlcmlvbil9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkdpdmVuIHRoZSBmb2xsb3dpbmcgc2l0dWF0aW9uOjwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge3JlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmFua2luZ0Fuc3dlciBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nQW5zd2VyJztcblxuZXhwb3J0IGNvbnN0IFVOUkFOS0VEID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDcml0ZXJpb25JZEZvclJhbmsoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIHJhbms6IG51bWJlclxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIF8uZmluZChcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgcmFua2luZ3NbY3JpdGVyaW9uLmlkXSAmJiByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IHJhbmtcbiAgKS5pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbk1pc3NpbmdSYW5raW5ncyhcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPixcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nLFxuICByYW5rOiBudW1iZXIsXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW11cbik6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPiB7XG4gIGNvbnN0IGludGVybWVkaWF0ZVJhbmtpbmdzID0gYWRkUmFua2luZyhyYW5raW5ncywgc2VsZWN0ZWRDcml0ZXJpb25JZCwgcmFuayk7XG4gIGNvbnN0IGxhc3RDcml0ZXJpb25JZCA9IGZpbmRDcml0ZXJpb25JZFdpdGhvdXRSYW5raW5nKFxuICAgIGNyaXRlcmlhLFxuICAgIGludGVybWVkaWF0ZVJhbmtpbmdzXG4gICk7XG4gIHJldHVybiBhZGRSYW5raW5nKGludGVybWVkaWF0ZVJhbmtpbmdzLCBsYXN0Q3JpdGVyaW9uSWQsIHJhbmsgKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJhbmtpbmcoXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIGNyaXRlcmlvbklkOiBzdHJpbmcsXG4gIHJhbms6IG51bWJlclxuKTogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+IHtcbiAgbGV0IHVwZGF0ZWRSYW5raW5ncyA9IF8uY2xvbmVEZWVwKHJhbmtpbmdzKTtcbiAgY29uc3QgbmV3UmFua2luZzogSVJhbmtpbmdBbnN3ZXIgPSB7XG4gICAgY3JpdGVyaW9uSWQ6IGNyaXRlcmlvbklkLFxuICAgIHJhbms6IHJhbmtcbiAgfTtcbiAgdXBkYXRlZFJhbmtpbmdzW2NyaXRlcmlvbklkXSA9IG5ld1Jhbmtpbmc7XG4gIHJldHVybiB1cGRhdGVkUmFua2luZ3M7XG59XG5cbmZ1bmN0aW9uIGZpbmRDcml0ZXJpb25JZFdpdGhvdXRSYW5raW5nKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+XG4pOiBzdHJpbmcge1xuICByZXR1cm4gXy5maW5kKFxuICAgIGNyaXRlcmlhLFxuICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBib29sZWFuID0+XG4gICAgICByYW5raW5nc1tjcml0ZXJpb24uaWRdID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0ucmFuayA9PT0gVU5SQU5LRURcbiAgKS5pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzKGFuc3dlcnM6IElSYW5raW5nQW5zd2VyW10pOiBJUmFua2luZ1tdIHtcbiAgY29uc3Qgc29ydGVkQW5zd2VyczogSVJhbmtpbmdBbnN3ZXJbXSA9IF8uc29ydEJ5KGFuc3dlcnMsICdyYW5rJyk7XG4gIHJldHVybiBfLnJlZHVjZShcbiAgICBzb3J0ZWRBbnN3ZXJzLFxuICAgIChhY2N1bTogSVJhbmtpbmdbXSwgYW5zd2VyOiBJUmFua2luZ0Fuc3dlciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpZHggPT09IGFuc3dlcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm4gYWNjdW07XG4gICAgICB9XG4gICAgICBjb25zdCByYW5raW5nOiBJUmFua2luZyA9IHtcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdyYW5raW5nJyxcbiAgICAgICAgdHlwZTogJ29yZGluYWwnLFxuICAgICAgICBjcml0ZXJpYTogW2Fuc3dlci5jcml0ZXJpb25JZCwgc29ydGVkQW5zd2Vyc1tpZHggKyAxXS5jcml0ZXJpb25JZF1cbiAgICAgIH07XG4gICAgICBhY2N1bS5wdXNoKHJhbmtpbmcpO1xuICAgICAgcmV0dXJuIGFjY3VtO1xuICAgIH0sXG4gICAgW11cbiAgKTtcbn1cbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2luZ0J1dHRvbnMoKSB7XG4gIGNvbnN0IHtcbiAgICBwcmV2aW91c0NhbGxiYWNrLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldEN1cnJlbnRTdGVwLFxuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIHByZWZlcmVuY2VzLFxuICAgIGNhbmNlbENhbGxiYWNrLFxuICAgIHNhdmVDYWxsYmFja1xuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpIHtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNDbGljaygpIHtcbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDEpIHtcbiAgICAgIHByZXZpb3VzQ2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25DbGljaygpIHtcbiAgICBzYXZlQ2FsbGJhY2soT2JqZWN0LnZhbHVlcyhwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IDI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIHtjYW5jZWxDYWxsYmFjayA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgICAgPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cInByZXZpb3VzLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzQ2xpY2t9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBkaXNhYmxlZD17IXByZXZpb3VzQ2FsbGJhY2sgJiYgY3VycmVudFN0ZXAgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpc0xhc3RTdGVwKCkgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IEltcHJlY2lzZVN3aW5nU2xpZGVyIGZyb20gJ3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nU2xpZGVyL0ltcHJlY2lzZVN3aW5nU2xpZGVyJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgUHJlY2lzZVN3aW5nU2xpZGVyIGZyb20gJ3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdTbGlkZXIvUHJlY2lzZVN3aW5nU2xpZGVyJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRCZXN0LCBnZXRVbml0TGFiZWwsIGdldFdvcnN0fSBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uT3ZlcnZpZXcoe1xuICBjcml0ZXJpb25cbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xufSkge1xuICBjb25zdCB7cHZmcywgc2hvd1BlcmNlbnRhZ2VzLCBlbGljaXRhdGlvbk1ldGhvZH0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyU3dpbmdTbGlkZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ3ByZWNpc2UnKSB7XG4gICAgICByZXR1cm4gPFByZWNpc2VTd2luZ1NsaWRlciBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz47XG4gICAgfSBlbHNlIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ2ltcHJlY2lzZScpIHtcbiAgICAgIHJldHVybiA8SW1wcmVjaXNlU3dpbmdTbGlkZXIgY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlUm93IGtleT17Y3JpdGVyaW9uLmlkfT5cbiAgICAgIDxUYWJsZUNlbGwgaWQ9e2Bjcml0ZXJpb24tdGl0bGUtJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgdGl0bGU9e2NyaXRlcmlvbi5kZXNjcmlwdGlvbiA/IGNyaXRlcmlvbi5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCI+e2NyaXRlcmlvbi50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbCBpZD17YHVuaXQtJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIHtnZXRVbml0TGFiZWwoXG4gICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgICApfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgaWQ9e2B3b3JzdC0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgICAge2dldFdvcnN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBpZD17YGJlc3QtJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIHtnZXRCZXN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cmVuZGVyU3dpbmdTbGlkZXIoKX08L1RhYmxlQ2VsbD5cbiAgICA8L1RhYmxlUm93PlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgQ3JpdGVyaW9uT3ZlcnZpZXcgZnJvbSAnLi9Dcml0ZXJpb25PdmVydmlldy9Dcml0ZXJpb25PdmVydmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VGFibGUoKSB7XG4gIGNvbnN0IHtjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uT3ZlcnZpZXdzKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvbk92ZXJ2aWV3IGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XG4gICAgICA8VGFibGVIZWFkPlxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbD5Dcml0ZXJpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPlVuaXQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+V29yc3Q8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QmVzdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JbXBvcnRhbmNlPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlSGVhZD5cbiAgICAgIDxUYWJsZUJvZHk+e3JlbmRlckNyaXRlcmlvbk92ZXJ2aWV3cygpfTwvVGFibGVCb2R5PlxuICAgIDwvVGFibGU+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge2dldFN3aW5nU3RhdGVtZW50fSBmcm9tICdzcmMvU3dpbmdVdGlsL1N3aW5nVXRpbCc7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZX0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgT3ZlcnZpZXdUYWJsZSBmcm9tICcuL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aW5nU2V0V2VpZ2h0cygpIHtcbiAgY29uc3Qge1xuICAgIHB2ZnMsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICBnZXRDcml0ZXJpb24sXG4gICAgdGVtcGxhdGVcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBjcml0ZXJpb24gPSBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9XG4gICAgc2hvd1BlcmNlbnRhZ2VzICYmXG4gICAgY2FuQmVQZXJjZW50YWdlKGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlKTtcblxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBnZXRTd2luZ1N0YXRlbWVudChjcml0ZXJpb24sIHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSwgdGVtcGxhdGUpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGF0ZW1lbnQoXG4gICAgICBnZXRTd2luZ1N0YXRlbWVudChjcml0ZXJpb24sIHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSwgdGVtcGxhdGUpXG4gICAgKTtcbiAgfSwgW3Nob3dQZXJjZW50YWdlcywgdGVtcGxhdGUsIGNyaXRlcmlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZFxuICAgICAgICBpdGVtXG4gICAgICAgIHhzPXsxMn1cbiAgICAgICAgaWQ9e2Ake2VsaWNpdGF0aW9uTWV0aG9kfS1zd2luZy1zdGF0ZW1lbnRgfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc3RhdGVtZW50fX1cbiAgICAgIC8+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxPdmVydmlld1RhYmxlIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSUV4YWN0U3dpbmdSYXRpbyBmcm9tICdzcmMvSW50ZXJmYWNlL0lFeGFjdFN3aW5nUmF0aW8nO1xuaW1wb3J0IElSYXRpb0JvdW5kQ29uc3RyYWludCBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge2dldEJlc3QsIGdldFVuaXRMYWJlbCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFID1cbiAgXCJZb3UndmUgaW5kaWNhdGVkIHRoYXQgaW1wcm92aW5nICVjcml0ZXJpb24xJSBmcm9tICV3b3JzdDElICV1bml0MSUgdG8gJWJlc3QxJSAldW5pdDElIGlzIHRoZSBtb3N0IGltcG9ydGFudCAoaS5lLiBpdCBoYXMgMTAwJSBpbXBvcnRhbmNlKS4gTm93IGluZGljYXRlIHRoZSByZWxhdGl2ZSBpbXBvcnRhbmNlIChpbiAlKSB0byB0aGlzIGltcHJvdmVtZW50IG9mIGVhY2ggb3RoZXIgY3JpdGVyaW9uJ3MgaW1wcm92ZW1lbnQgdXNpbmcgdGhlIHNsaWRlcnMgYmVsb3cuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nXG4pOiBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5maWx0ZXIoXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgICBjcml0ZXJpb24uaWQgIT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICAgIClcbiAgICAubWFwKChjcml0ZXJpb246IElDcml0ZXJpb24pOiBbc3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvXSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uLmlkXSxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdwcmVjaXNlJyxcbiAgICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgICAgcmF0aW86IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gW2NyaXRlcmlvbi5pZCwgcHJlZmVyZW5jZV07XG4gICAgfSlcbiAgICAuZnJvbVBhaXJzKClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZ1xuKTogUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5yZWplY3QoWydpZCcsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pXG4gICAgLmtleUJ5KCdpZCcpXG4gICAgLm1hcFZhbHVlcyhcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPT4ge1xuICAgICAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICAgICAgYm91bmRzOiBbMSwgMTAwXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZTtcbiAgICAgIH1cbiAgICApXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTd2luZ1N0YXRlbWVudChcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uLFxuICBwdmY6IFRQdmYsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW4sXG4gIHRlbXBsYXRlPzogc3RyaW5nXG4pOiBzdHJpbmcge1xuICBjb25zdCB1bml0ID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50O1xuICBjb25zdCBsYWJlbCA9IGdldFVuaXRMYWJlbCh1bml0LCB1c2VQZXJjZW50YWdlKTtcbiAgY29uc3Qgc3dpbmdUZW1wbGF0ZSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiBERUZBVUxUX1BSRUNJU0VfVEVNUExBVEU7XG4gIHJldHVybiBzd2luZ1RlbXBsYXRlXG4gICAgLnJlcGxhY2UoLyVjcml0ZXJpb24xJS9naSwgY3JpdGVyaW9uLnRpdGxlKVxuICAgIC5yZXBsYWNlKC8ldW5pdDElL2dpLCBsYWJlbClcbiAgICAucmVwbGFjZSgvJXdvcnN0MSUvZ2ksIFN0cmluZyhnZXRXb3JzdChwdmYsIHVzZVBlcmNlbnRhZ2UpKSlcbiAgICAucmVwbGFjZSgvJWJlc3QxJS9naSwgU3RyaW5nKGdldEJlc3QocHZmLCB1c2VQZXJjZW50YWdlKSkpO1xufVxuIiwiaW1wb3J0IElVbml0T2ZNZWFzdXJlbWVudCwge1xuICBVbml0T2ZNZWFzdXJlbWVudFR5cGVcbn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JVW5pdE9mTWVhc3VyZW1lbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlOiBVbml0T2ZNZWFzdXJlbWVudFR5cGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIHVuaXRUeXBlID09PSAncGVyY2VudGFnZScgfHwgdW5pdFR5cGUgPT09ICdkZWNpbWFsJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlc3QocHZmOiBUUHZmLCB1c2VQZXJjZW50YWdlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzaWduaWZpY2FudERpZ2l0cyhcbiAgICBpc0luY3JlYXNpbmcocHZmKSA/IHB2Zi5yYW5nZVsxXSA6IHB2Zi5yYW5nZVswXVxuICApO1xuICByZXR1cm4gZ2V0UGVyY2VudGlmaWVkVmFsdWUodmFsdWUsIHVzZVBlcmNlbnRhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29yc3QocHZmOiBUUHZmLCB1c2VQZXJjZW50YWdlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzaWduaWZpY2FudERpZ2l0cyhcbiAgICBpc0luY3JlYXNpbmcocHZmKSA/IHB2Zi5yYW5nZVswXSA6IHB2Zi5yYW5nZVsxXVxuICApO1xuICByZXR1cm4gZ2V0UGVyY2VudGlmaWVkVmFsdWUodmFsdWUsIHVzZVBlcmNlbnRhZ2UpO1xufVxuXG5mdW5jdGlvbiBpc0luY3JlYXNpbmcocHZmOiBUUHZmKTogYm9vbGVhbiB7XG4gIHJldHVybiBwdmYuZGlyZWN0aW9uID09PSAnaW5jcmVhc2luZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25pZmljYW50RGlnaXRzKHg6IG51bWJlciwgcHJlY2lzaW9uPzogbnVtYmVyKSB7XG4gIGlmIChwcmVjaXNpb24gIT09IDAgJiYgIXByZWNpc2lvbikge1xuICAgIHByZWNpc2lvbiA9IDM7XG4gIH1cbiAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsIHx8IGlzTmFOKHgpKSB7XG4gICAgdGhyb3cgJ2F0dGVtcHQgdG8gYXBwbHkgc2lnbmlmaWNhbnQgZGlnaXRzIHRvIG5vbi1udW1lcmljIHZhbHVlJztcbiAgfSBlbHNlIGlmICh4ID09PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSBpZiAoeCA+IDEgfHwgeCA8IC0xKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHgudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoeC50b1ByZWNpc2lvbihwcmVjaXNpb24pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudGlmaWVkVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW5cbik6IG51bWJlciB7XG4gIGlmICh1c2VQZXJjZW50YWdlKSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKSAqIDEwMCk7IC8vMiBzaWdkaXRzIHRvIGVuc3VyZSB0aGUgcHJlY2lzaW9uIHN0YXlzIHRoZSBzYW1lXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdExhYmVsKFxuICB1bml0OiBJVW5pdE9mTWVhc3VyZW1lbnQsXG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgaWYgKHNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdkZWNpbWFsJykge1xuICAgIHJldHVybiAnJSc7XG4gIH0gZWxzZSBpZiAoIXNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5pdC5sYWJlbDtcbiAgfVxufVxuIiwiaW1wb3J0IFByZWZlcmVuY2VFbGljaXRhdGlvbiBmcm9tICcuL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24nO1xuXG5leHBvcnQge1ByZWZlcmVuY2VFbGljaXRhdGlvbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbkdyb3VwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0dyaWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUGFwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9TbGlkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVCb2R5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQ2VsbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVSb3dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVG9vbHRpcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2hlbHBfcG9wdXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbG9kYXNoX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=