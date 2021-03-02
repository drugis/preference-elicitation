(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@material-ui/core"), require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["@material-ui/core", "@material-ui/core/Button", "@material-ui/core/ButtonGroup", "@material-ui/core/Grid", "@material-ui/core/Paper", "@material-ui/core/Radio", "@material-ui/core/RadioGroup", "@material-ui/core/Slider", "@material-ui/core/Table", "@material-ui/core/TableBody", "@material-ui/core/TableCell", "@material-ui/core/TableHead", "@material-ui/core/TableRow", "@material-ui/core/Tooltip", "@material-ui/core/Typography", "react", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@material-ui/core"), require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("react"), require("lodash")) : factory(root["@material-ui/core"], root["@material-ui/core/Button"], root["@material-ui/core/ButtonGroup"], root["@material-ui/core/Grid"], root["@material-ui/core/Paper"], root["@material-ui/core/Radio"], root["@material-ui/core/RadioGroup"], root["@material-ui/core/Slider"], root["@material-ui/core/Table"], root["@material-ui/core/TableBody"], root["@material-ui/core/TableCell"], root["@material-ui/core/TableHead"], root["@material-ui/core/TableRow"], root["@material-ui/core/Tooltip"], root["@material-ui/core/Typography"], root["react"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__material_ui_core__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ButtonGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Table__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableBody__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableCell__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableHead__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableRow__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tooltip__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
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
// import InlineHelp from 'app/ts/InlineHelp/InlineHelp';
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
                "Imprecise swing weighting",
                ' ')),
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
// import InlineHelp from 'app/ts/InlineHelp/InlineHelp';
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
            react_1.default.createElement(Typography_1.default, { id: "matching-title-header", variant: "h4" }, "Matching ")),
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
        react_1.default.createElement(Slider_1.default, { value: sliderValue, min: 1, max: 100, onChange: handleSliderChanged, step: 1, disabled: mostImportantCriterionId === criterion.id })));
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
// import InlineHelp from 'app/ts/InlineHelp/InlineHelp'; //FIXME
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const MostImportantChoice_1 = __importDefault(__webpack_require__(/*! ../MostImportantChoice/MostImportantChoice */ "./src/MostImportantChoice/MostImportantChoice.tsx"));
const SwingButtons_1 = __importDefault(__webpack_require__(/*! ../SwingButtons/SwingButtons */ "./src/SwingButtons/SwingButtons.tsx"));
const SwingSetWeights_1 = __importDefault(__webpack_require__(/*! ../SwingSetWeights/SwingSetWeights */ "./src/SwingSetWeights/SwingSetWeights.tsx"));
function PreciseSwingWeighting() {
    const { currentStep } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 4, sm: 12, md: 9, component: Paper_1.default },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Typography_1.default, { id: "swing-weighting-title-header", variant: "h4" }, "Precise swing weighting ")),
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
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const ImpreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! src/ImpreciseSwingElicitation/ImpreciseSwingWeighting */ "./src/ImpreciseSwingElicitation/ImpreciseSwingWeighting.tsx"));
const MatchingElicitation_1 = __importDefault(__webpack_require__(/*! src/MatchingElicitation/MatchingElicitation */ "./src/MatchingElicitation/MatchingElicitation.tsx"));
const PreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! src/PreciseSwingElicitation/PreciseSwingWeighting */ "./src/PreciseSwingElicitation/PreciseSwingWeighting.tsx"));
const RankingElicitation_1 = __importDefault(__webpack_require__(/*! src/RankingElicitation/RankingElicitation */ "./src/RankingElicitation/RankingElicitation.tsx"));
const ElicitationContext_1 = __webpack_require__(/*! ../ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
function PreferenceElicitation({ elicitationMethod, criteria, showPercentages, pvfs, cancelCallback, saveCallback }) {
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
// import InlineHelp from 'app/ts/InlineHelp/InlineHelp';
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
            react_1.default.createElement(Typography_1.default, { id: "ranking-title-header", variant: "h4" }, "Ranking ")),
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
    if (x === undefined || x === null || isNaN(x)) {
        throw 'attempt to apply significant digits to non-numeric value';
    }
    else if (precision !== 0 && !precision) {
        precision = 3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdTbGlkZXIvSW1wcmVjaXNlU3dpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1dlaWdodGluZy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nQnV0dG9ucy9NYXRjaGluZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ0VsaWNpdGF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2V0SW1wb3J0YW5jZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nU2V0SW1wb3J0YW5jZS9NYXRjaGluZ1NsaWRlci9NYXRjaGluZ1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ1V0aWwvTWF0Y2hpbmdVdGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1NsaWRlci9QcmVjaXNlU3dpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nV2VpZ2h0aW5nLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdCdXR0b25zL1JhbmtpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nQ2hvaWNlcy9SYW5raW5nQ2hvaWNlcy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0VsaWNpdGF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nU2l0dWF0aW9uL1JhbmtpbmdTaXR1YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ0J1dHRvbnMvU3dpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nU2V0V2VpZ2h0cy9PdmVydmlld1RhYmxlL0NyaXRlcmlvbk92ZXJ2aWV3L0NyaXRlcmlvbk92ZXJ2aWV3LnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nU2V0V2VpZ2h0cy9PdmVydmlld1RhYmxlL092ZXJ2aWV3VGFibGUudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL1N3aW5nU2V0V2VpZ2h0cy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1V0aWwvU3dpbmdVdGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvVXRpbC91dGlsLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCIsXCJyb290XCI6XCJfXCJ9Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSwrR0FBNEM7QUFDNUMscUhBQWdEO0FBQ2hELHdFQUF3QztBQUN4QyxxSkFBNkU7QUFFN0UsOEVBQThDO0FBQzlDLDZFQUErQztBQUUvQyxTQUF3QixlQUFlLENBQUMsRUFBQyxTQUFTLEVBQTBCO0lBQzFFLE1BQU0sRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLEdBQUcsa0JBQVUsQ0FBQyx1Q0FBa0IsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDakUsTUFBTSxhQUFhLEdBQUcsZUFBZSxJQUFJLHNCQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsTUFBTSxLQUFLLEdBQUcsZUFBUSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMzQyxNQUFNLElBQUksR0FBRyxjQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRXpDLE9BQU8sQ0FDTCx5Q0FBTyxFQUFFLEVBQUUsa0JBQWtCLFNBQVMsQ0FBQyxFQUFFLEVBQUU7UUFDekMsOEJBQUMsZUFBSyxJQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxHQUFJO1FBQzdCLEdBQUcsQ0FBQyxTQUFTO1FBQUUsR0FBRztRQUNuQiw4QkFB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O0FBRTFFLGdDQUZELCtCQUFxQixDQUVDOzs7Ozs7Ozs7OztBQ0Y3QiwrRDs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQG1hdGVyaWFsLXVpL2NvcmVcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiLCBcInJlYWN0XCIsIFwibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIikpIDogZmFjdG9yeShyb290W1wiQG1hdGVyaWFsLXVpL2NvcmVcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXSwgcm9vdFtcInJlYWN0XCJdLCByb290W1wiX1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uR3JvdXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9HcmlkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUGFwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9SYWRpb19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1JhZGlvR3JvdXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9TbGlkZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQm9keV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQ2VsbF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlSGVhZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlUm93X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVG9vbHRpcF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1R5cG9ncmFwaHlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fKSB7XG5yZXR1cm4gIiwiaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZX0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQge2dldEJlc3QsIGdldFdvcnN0fSBmcm9tICcuLi9VdGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcml0ZXJpb25DaG9pY2Uoe2NyaXRlcmlvbn06IHtjcml0ZXJpb246IElDcml0ZXJpb259KSB7XG4gIGNvbnN0IHtwdmZzLCBzaG93UGVyY2VudGFnZXN9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCBwdmYgPSBwdmZzW2NyaXRlcmlvbi5pZF07XG4gIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcbiAgY29uc3Qgd29yc3QgPSBnZXRXb3JzdChwdmYsIHVzZVBlcmNlbnRhZ2UpO1xuICBjb25zdCBiZXN0ID0gZ2V0QmVzdChwdmYsIHVzZVBlcmNlbnRhZ2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGlkPXtgcmFua2luZy1jaG9pY2UtJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICA8UmFkaW8gdmFsdWU9e2NyaXRlcmlvbi5pZH0gLz5cbiAgICAgIHtwdmYuZGlyZWN0aW9ufXsnICd9XG4gICAgICA8VG9vbHRpcFxuICAgICAgICBkaXNhYmxlSG92ZXJMaXN0ZW5lcj17IWNyaXRlcmlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgdGl0bGU9e2NyaXRlcmlvbi5kZXNjcmlwdGlvbiA/IGNyaXRlcmlvbi5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGlkPXtgY3JpdGVyaW9uLW9wdGlvbi0ke2NyaXRlcmlvbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyaXRlcmlvbi10aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7Y3JpdGVyaW9uLnRpdGxlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgICB7YCBmcm9tICR7d29yc3R9IHRvICR7YmVzdH1gfVxuICAgIDwvbGFiZWw+XG4gICk7XG59XG4iLCJpbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtnZXRVbml0TGFiZWx9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcml0ZXJpb25TaXR1YXRpb24oe1xuICBjcml0ZXJpb24sXG4gIGRpc3BsYXlWYWx1ZVxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG4gIGRpc3BsYXlWYWx1ZTogbnVtYmVyO1xufSkge1xuICBjb25zdCB7c2hvd1BlcmNlbnRhZ2VzfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIDxsaSBpZD17YHNpdHVhdGlvbi0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBkaXNhYmxlSG92ZXJMaXN0ZW5lcj17IWNyaXRlcmlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICB0aXRsZT17Y3JpdGVyaW9uLmRlc2NyaXB0aW9uID8gY3JpdGVyaW9uLmRlc2NyaXB0aW9uIDogJyd9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgaWQ9e2BzaXR1YXRpb24tdGl0bGUtJHtjcml0ZXJpb24uaWR9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyaXRlcmlvbi10aXRsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NyaXRlcmlvbi50aXRsZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgOiA8c3BhbiBpZD17YHNpdHVhdGlvbi12YWx1ZS0ke2NyaXRlcmlvbi5pZH1gfT57ZGlzcGxheVZhbHVlfTwvc3Bhbj57JyAnfVxuICAgICAgICB7Z2V0VW5pdExhYmVsKFxuICAgICAgICAgIGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudCxcbiAgICAgICAgICBzaG93UGVyY2VudGFnZXNcbiAgICAgICAgKX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElSYW5raW5nIGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhbmtpbmcnO1xuaW1wb3J0IElSYW5raW5nQW5zd2VyIGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhbmtpbmdBbnN3ZXInO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuaW1wb3J0IHthZGRSYW5raW5nfSBmcm9tICdzcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwnO1xuaW1wb3J0IHtcbiAgYnVpbGRJbml0aWFsSW1wcmVjaXNlUHJlZmVyZW5jZXMsXG4gIGJ1aWxkSW5pdGlhbFByZWNpc2VQcmVmZXJlbmNlc1xufSBmcm9tICdzcmMvU3dpbmdVdGlsL1N3aW5nVXRpbCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICcuLi9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSUV4YWN0U3dpbmdSYXRpbyBmcm9tICcuLi9JbnRlcmZhY2UvSUV4YWN0U3dpbmdSYXRpbyc7XG5pbXBvcnQgSVJhdGlvQm91bmRDb25zdHJhaW50IGZyb20gJy4uL0ludGVyZmFjZS9JUmF0aW9Cb3VuZENvbnN0cmFpbnQnO1xuaW1wb3J0IHtURWxpY2l0YXRpb25NZXRob2R9IGZyb20gJy4uL1R5cGVzL1RFbGljaXRhdGlvbk1ldGhvZCc7XG5pbXBvcnQgSUVsaWNpdGF0aW9uQ29udGV4dCBmcm9tICcuL0lFbGljaXRhdGlvbkNvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgRWxpY2l0YXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxJRWxpY2l0YXRpb25Db250ZXh0PihcbiAge30gYXMgSUVsaWNpdGF0aW9uQ29udGV4dFxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50KHtcbiAgZWxpY2l0YXRpb25NZXRob2QsXG4gIGNyaXRlcmlhLFxuICBzaG93UGVyY2VudGFnZXMsXG4gIHB2ZnMsXG4gIGNhbmNlbENhbGxiYWNrLFxuICBzYXZlQ2FsbGJhY2ssXG4gIGNoaWxkcmVuXG59OiB7XG4gIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2Q7XG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW107XG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhbjtcbiAgcHZmczogUmVjb3JkPHN0cmluZywgVFB2Zj47XG4gIGNhbmNlbENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBzYXZlQ2FsbGJhY2s6IChcbiAgICBwcmVmZXJlbmNlczogSUV4YWN0U3dpbmdSYXRpb1tdIHwgSVJhdGlvQm91bmRDb25zdHJhaW50W10gfCBJUmFua2luZ1tdXG4gICkgPT4gdm9pZDtcbiAgY2hpbGRyZW46IGFueTtcbn0pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc05leHREaXNhYmxlZCwgc2V0SXNOZXh0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkXG4gIF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3ByZWZlcmVuY2VzLCBzZXRQcmVmZXJlbmNlc10gPSB1c2VTdGF0ZTxcbiAgICBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB8IFJlY29yZDxzdHJpbmcsIElSYXRpb0JvdW5kQ29uc3RyYWludD5cbiAgPih7fSk7XG4gIGNvbnN0IFtyYW5raW5ncywgc2V0UmFua2luZ3NdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+Pih7fSk7XG5cbiAgZnVuY3Rpb24gc2V0UmFua2luZyhjcml0ZXJpb25JZDogc3RyaW5nLCByYW5rOiBudW1iZXIpIHtcbiAgICBjb25zdCB1cGRhdGVkUmFua2luZ3MgPSBhZGRSYW5raW5nKHJhbmtpbmdzLCBjcml0ZXJpb25JZCwgcmFuayk7XG4gICAgc2V0UmFua2luZ3ModXBkYXRlZFJhbmtpbmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25BbmRQcmVmZXJlbmNlcyhjcml0ZXJpb25JZDogc3RyaW5nKSB7XG4gICAgaWYgKGVsaWNpdGF0aW9uTWV0aG9kID09PSAncHJlY2lzZScpIHtcbiAgICAgIHNldFByZWZlcmVuY2VzKGJ1aWxkSW5pdGlhbFByZWNpc2VQcmVmZXJlbmNlcyhjcml0ZXJpYSwgY3JpdGVyaW9uSWQpKTtcbiAgICB9IGVsc2UgaWYgKGVsaWNpdGF0aW9uTWV0aG9kID09PSAnaW1wcmVjaXNlJykge1xuICAgICAgc2V0UHJlZmVyZW5jZXMoYnVpbGRJbml0aWFsSW1wcmVjaXNlUHJlZmVyZW5jZXMoY3JpdGVyaWEsIGNyaXRlcmlvbklkKSk7XG4gICAgfVxuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZChjcml0ZXJpb25JZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQcmVmZXJlbmNlKGNyaXRlcmlvbklkOiBzdHJpbmcsIGFuc3dlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IHVwZGF0ZWRQcmVmZXJlbmNlcyA9IF8uY2xvbmVEZWVwKHByZWZlcmVuY2VzKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgZWxpY2l0YXRpb25NZXRob2Q6IGVsaWNpdGF0aW9uTWV0aG9kLFxuICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgIGNyaXRlcmlhOiBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkLCBjcml0ZXJpb25JZF0sXG4gICAgICByYXRpbzogMTAwIC8gYW5zd2VyXG4gICAgfTtcbiAgICB1cGRhdGVkUHJlZmVyZW5jZXNbY3JpdGVyaW9uSWRdID0gcHJlZmVyZW5jZTtcbiAgICBzZXRQcmVmZXJlbmNlcyh1cGRhdGVkUHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Qm91bmRQcmVmZXJlbmNlKFxuICAgIGNyaXRlcmlvbklkOiBzdHJpbmcsXG4gICAgYW5zd2VyOiBbbnVtYmVyLCBudW1iZXJdXG4gICk6IHZvaWQge1xuICAgIGxldCB1cGRhdGVkUHJlZmVyZW5jZXMgPSBfLmNsb25lRGVlcChwcmVmZXJlbmNlcyk7XG4gICAgY29uc3QgcHJlZmVyZW5jZTogSVJhdGlvQm91bmRDb25zdHJhaW50ID0ge1xuICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgdHlwZTogJ3JhdGlvIGJvdW5kJyxcbiAgICAgIGNyaXRlcmlhOiBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkLCBjcml0ZXJpb25JZF0sXG4gICAgICBib3VuZHM6IFsxMDAgLyBhbnN3ZXJbMV0sIDEwMCAvIGFuc3dlclswXV1cbiAgICB9O1xuICAgIHVwZGF0ZWRQcmVmZXJlbmNlc1tjcml0ZXJpb25JZF0gPSBwcmVmZXJlbmNlO1xuICAgIHNldFByZWZlcmVuY2VzKHVwZGF0ZWRQcmVmZXJlbmNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDcml0ZXJpb24oaWQ6IHN0cmluZyk6IElDcml0ZXJpb24ge1xuICAgIHJldHVybiBfLmZpbmQoY3JpdGVyaWEsIFsnaWQnLCBpZF0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWxpY2l0YXRpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjdXJyZW50U3RlcCxcbiAgICAgICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIGVsaWNpdGF0aW9uTWV0aG9kLFxuICAgICAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgICAgIHB2ZnMsXG4gICAgICAgIGNyaXRlcmlhLFxuICAgICAgICByYW5raW5ncyxcbiAgICAgICAgZ2V0Q3JpdGVyaW9uLFxuICAgICAgICBzZXRDdXJyZW50U3RlcCxcbiAgICAgICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbkFuZFByZWZlcmVuY2VzLFxuICAgICAgICBzZXRQcmVmZXJlbmNlLFxuICAgICAgICBzZXRCb3VuZFByZWZlcmVuY2UsXG4gICAgICAgIHNldFByZWZlcmVuY2VzLFxuICAgICAgICBjYW5jZWxDYWxsYmFjayxcbiAgICAgICAgc2F2ZUNhbGxiYWNrLFxuICAgICAgICBzZXRSYW5raW5nXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VsaWNpdGF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzIGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXByZWNpc2VTd2luZ1NsaWRlcih7XG4gIGNyaXRlcmlvblxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG59KSB7XG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGU8W251bWJlciwgbnVtYmVyXT4oWzEsIDEwMF0pO1xuICBjb25zdCB7c2V0Qm91bmRQcmVmZXJlbmNlLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJvdW5kUHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIHNsaWRlclZhbHVlKTtcbiAgfSwgW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IFtudW1iZXIsIG51bWJlcl1cbiAgKSB7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIHNldEJvdW5kUHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA9PT0gY3JpdGVyaW9uLmlkXG4gICAgICA/ICcxMDAlJ1xuICAgICAgOiBgJHtzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZVswXSl9IC0gJHtzaWduaWZpY2FudERpZ2l0cyhcbiAgICAgICAgICBzbGlkZXJWYWx1ZVsxXVxuICAgICAgICApfSVgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlbmRlclZhbHVlKCl9XG4gICAgICA8U2xpZGVyXG4gICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cbiAgICAgICAgbWluPXsxfVxuICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZWR9XG4gICAgICAgIHN0ZXA9ezF9XG4gICAgICAgIGRpc2FibGVkPXttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQgPT09IGNyaXRlcmlvbi5pZH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5Jztcbi8vIGltcG9ydCBJbmxpbmVIZWxwIGZyb20gJ2FwcC90cy9JbmxpbmVIZWxwL0lubGluZUhlbHAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgU3dpbmdCdXR0b25zIGZyb20gJy4uL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMnO1xuaW1wb3J0IFN3aW5nU2V0V2VpZ2h0cyBmcm9tICcuLi9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcoKSB7XG4gIGNvbnN0IHtjdXJyZW50U3RlcH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJzd2luZy13ZWlnaHRpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgSW1wcmVjaXNlIHN3aW5nIHdlaWdodGluZ3snICd9XG4gICAgICAgICAgey8qPElubGluZUhlbHAgaGVscElkPVwic3dpbmctd2VpZ2h0aW5nXCIgLz4qL31cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgPyA8TW9zdEltcG9ydGFudENob2ljZSAvPiA6IDxTd2luZ1NldFdlaWdodHMgLz59XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPFN3aW5nQnV0dG9ucyAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiAyXG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nQnV0dG9ucygpIHtcbiAgY29uc3Qge1xuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldEN1cnJlbnRTdGVwLFxuICAgIHByZWZlcmVuY2VzLFxuICAgIGNyaXRlcmlhLFxuICAgIGNhbmNlbENhbGxiYWNrLFxuICAgIHNhdmVDYWxsYmFja1xuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICBtYXRjaGluZ05leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25jbGljaygpOiB2b2lkIHtcbiAgICBzYXZlQ2FsbGJhY2soT2JqZWN0LnZhbHVlcyhwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hpbmdOZXh0KCk6IHZvaWQge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xhc3RTdGVwKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcCA9PT0gXy5zaXplKGNyaXRlcmlhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzQ2xpY2soKTogdm9pZCB7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoZmFsc2UpO1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKTogdm9pZCB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgPlxuICAgICAgICBDYW5jZWxcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cInByZXZpb3VzLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzQ2xpY2t9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpc0xhc3RTdGVwKCkgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQnV0dG9uY2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5Jztcbi8vIGltcG9ydCBJbmxpbmVIZWxwIGZyb20gJ2FwcC90cy9JbmxpbmVIZWxwL0lubGluZUhlbHAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgTW9zdEltcG9ydGFudENob2ljZSBmcm9tICcuLi9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UnO1xuaW1wb3J0IE1hdGNoaW5nQnV0dG9ucyBmcm9tICcuL01hdGNoaW5nQnV0dG9ucy9NYXRjaGluZ0J1dHRvbnMnO1xuaW1wb3J0IE1hdGNoaW5nU2V0SW1wb3J0YW5jZSBmcm9tICcuL01hdGNoaW5nU2V0SW1wb3J0YW5jZS9NYXRjaGluZ1NldEltcG9ydGFuY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ0VsaWNpdGF0aW9uKCkge1xuICBjb25zdCB7Y3VycmVudFN0ZXAsIGNyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IF8uc2l6ZShjcml0ZXJpYSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtYXRjaGluZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICBNYXRjaGluZyB7Lyo8SW5saW5lSGVscCBoZWxwSWQ9XCJtYXRjaGluZ1wiIC8+Ki99XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSAxID8gKFxuICAgICAgICAgIDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE1hdGNoaW5nU2V0SW1wb3J0YW5jZSAvPlxuICAgICAgICApfVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxNYXRjaGluZ0J1dHRvbnMgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2Yge3RvdGFsU3RlcHN9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtcbiAgZ2V0Q3VycmVudENyaXRlcmlvbixcbiAgZ2V0TWF0Y2hpbmdTdGF0ZW1lbnRcbn0gZnJvbSAnc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2V9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuaW1wb3J0IHtnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnLi4vLi4vVXRpbC91dGlsJztcbmltcG9ydCBNYXRjaGluZ1NsaWRlciBmcm9tICcuL01hdGNoaW5nU2xpZGVyL01hdGNoaW5nU2xpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdTZXRJbXBvcnRhbmNlKCkge1xuICBjb25zdCB7XG4gICAgcHZmcyxcbiAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIGdldENyaXRlcmlvbixcbiAgICBjcml0ZXJpYVxuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IG1vc3RJbXBvcnRhbnRDcml0ZXJpb24gPSBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKTtcbiAgY29uc3QgbW9zdEltcG9ydGFudFVuaXRUeXBlID1cbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG5cbiAgY29uc3QgY3VycmVudENyaXRlcmlvbiA9IGdldEN1cnJlbnRDcml0ZXJpb24oXG4gICAgY3JpdGVyaWEsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIGN1cnJlbnRTdGVwXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRVbml0VHlwZSA9XG4gICAgY3VycmVudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCBzdGF0ZW1lbnQgPSBnZXRNYXRjaGluZ1N0YXRlbWVudChcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLFxuICAgIGN1cnJlbnRDcml0ZXJpb25cbiAgKTtcblxuICBjb25zdCB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb24gPVxuICAgIHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UobW9zdEltcG9ydGFudFVuaXRUeXBlKTtcblxuICBjb25zdCB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb24gPVxuICAgIHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UoY3VycmVudFVuaXRUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57YFRyYWRlLW9mZiBiZXR3ZWVuICR7bW9zdEltcG9ydGFudENyaXRlcmlvbi50aXRsZX0gYW5kICR7Y3VycmVudENyaXRlcmlvbi50aXRsZX1gfTwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkXG4gICAgICAgIGl0ZW1cbiAgICAgICAgeHM9ezEyfVxuICAgICAgICBpZD1cIm1hdGNoaW5nLXN0YXRlbWVudFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdGF0ZW1lbnR9fVxuICAgICAgLz5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q3JpdGVyaW9uPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BbHRlcm5hdGl2ZSBBPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BbHRlcm5hdGl2ZSBCPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e21vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7Z2V0V29yc3QoXG4gICAgICAgICAgICAgICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sXG4gICAgICAgICAgICAgICAgICB1c2VQZXJjZW50YWdlc0Zvck1vc3RJbXBvcnRhbnRDcml0ZXJpb25cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGlkPVwibWF0Y2hpbmctY2VsbFwiPlxuICAgICAgICAgICAgICAgIDxNYXRjaGluZ1NsaWRlciBjdXJyZW50Q3JpdGVyaW9uSWQ9e2N1cnJlbnRDcml0ZXJpb24uaWR9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57Y3VycmVudENyaXRlcmlvbi50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtnZXRCZXN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge2dldFdvcnN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1tjdXJyZW50Q3JpdGVyaW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlSW1wb3J0YW5jZSxcbiAgZGV0ZXJtaW5lU3RlcFNpemVcbn0gZnJvbSAnc3JjL01hdGNoaW5nVXRpbC9NYXRjaGluZ1V0aWwnO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzLCB7XG4gIGNhbkJlUGVyY2VudGFnZSxcbiAgZ2V0QmVzdCxcbiAgZ2V0V29yc3Rcbn0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nU2xpZGVyKHtcbiAgY3VycmVudENyaXRlcmlvbklkXG59OiB7XG4gIGN1cnJlbnRDcml0ZXJpb25JZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldFByZWZlcmVuY2UsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIHB2ZnMsXG4gICAgZ2V0Q3JpdGVyaW9uXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgbW9zdEltcG9ydGFudENyaXRlcmlvbiA9IGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpO1xuICBjb25zdCBwdmYgPSBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF07XG5cbiAgY29uc3QgdW5pdFR5cGUgPSBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcblxuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPG51bWJlcj4oXG4gICAgZ2V0QmVzdChwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sIHVzZVBlcmNlbnRhZ2UpXG4gICk7XG4gIGNvbnN0IFtzdGVwU2l6ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KGRldGVybWluZVN0ZXBTaXplKHB2Zi5yYW5nZSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyVmFsdWUgPSBnZXRCZXN0KHB2ZiwgZmFsc2UpO1xuICAgIHNldFNsaWRlclZhbHVlKHNsaWRlclZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGN1cnJlbnRDcml0ZXJpb25JZCwgY2FsY3VsYXRlSW1wb3J0YW5jZShzbGlkZXJWYWx1ZSwgcHZmKSk7XG4gIH0sIFtjdXJyZW50U3RlcF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IG51bWJlclxuICApIHtcbiAgICBzZXRTbGlkZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoXG4gICAgICBzaWduaWZpY2FudERpZ2l0cyhuZXdWYWx1ZSkgPT09XG4gICAgICAgIGdldFdvcnN0KHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbi5pZF0sIGZhbHNlKVxuICAgICk7XG4gICAgc2V0UHJlZmVyZW5jZShjdXJyZW50Q3JpdGVyaW9uSWQsIGNhbGN1bGF0ZUltcG9ydGFuY2UobmV3VmFsdWUsIHB2ZikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB1c2VQZXJjZW50YWdlXG4gICAgICA/IHNpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlICogMTAwKVxuICAgICAgOiBzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGlzcGxheVZhbHVlKCl9XG4gICAgICA8U2xpZGVyXG4gICAgICAgIGlkPVwibWF0Y2hpbmctc2xpZGVyXCJcbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBtaW49e3B2Zi5yYW5nZVswXX1cbiAgICAgICAgbWF4PXtwdmYucmFuZ2VbMV19XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXtzdGVwU2l6ZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7SUxpbmVhclB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JTGluZWFyUHZmJztcbmltcG9ydCB7SVBpZWNlV2lzZUxpbmVhclB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9JUGllY2VXaXNlTGluZWFyUHZmJztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCB7VFB2ZkRpcmVjdGlvbn0gZnJvbSAnc3JjL1R5cGVzL1B2ZlR5cGVzJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFUQ0hJTkdfVEVNUExBVEUgPVxuICAnSG93IG11Y2ggYmV0dGVyIHNob3VsZCAlY3JpdGVyaW9uMSUgbWluaW1hbGx5IGJlY29tZSB0byBqdXN0aWZ5IHRoZSB3b3JzZW5pbmcgb2YgJWNyaXRlcmlvbjIlPyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXRjaGluZ1N0YXRlbWVudChcbiAgbW9zdEltcG9ydGFudENyaXRlcmlvbjogSUNyaXRlcmlvbixcbiAgY3VycmVudENyaXRlcmlvbjogSUNyaXRlcmlvblxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIERFRkFVTFRfTUFUQ0hJTkdfVEVNUExBVEUucmVwbGFjZShcbiAgICAvJWNyaXRlcmlvbjElL2dpLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGVcbiAgKS5yZXBsYWNlKC8lY3JpdGVyaW9uMiUvZ2ksIGN1cnJlbnRDcml0ZXJpb24udGl0bGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lU3RlcFNpemUoW2xvd2VyQm91bmQsIHVwcGVyQm91bmRdOiBbXG4gIG51bWJlcixcbiAgbnVtYmVyXG5dKTogbnVtYmVyIHtcbiAgY29uc3QgaW50ZXJ2YWwgPSB1cHBlckJvdW5kIC0gbG93ZXJCb3VuZDtcbiAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKGludGVydmFsKSk7XG4gIHJldHVybiBNYXRoLnBvdygxMCwgbWFnbml0dWRlIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbXBvcnRhbmNlKHNsaWRlclZhbHVlOiBudW1iZXIsIHB2ZjogVFB2Zik6IG51bWJlciB7XG4gIGlmIChpc1BpZWNlV2lzZUxpbmVhclB2ZihwdmYpKSB7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVBpZWNld2lzZUltcG9ydGFuY2Uoc2xpZGVyVmFsdWUsIHB2Zik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZUxpbmVhckltcG9ydGFuY2Uoc2xpZGVyVmFsdWUsIHB2Zik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQaWVjZVdpc2VMaW5lYXJQdmYocHZmOiBUUHZmKTogcHZmIGlzIElQaWVjZVdpc2VMaW5lYXJQdmYge1xuICByZXR1cm4gJ2N1dG9mZnMnIGluIHB2Zjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTGluZWFySW1wb3J0YW5jZShcbiAgc2xpZGVyVmFsdWU6IG51bWJlcixcbiAge3JhbmdlOiBbbG93ZXJCb3VuZCwgdXBwZXJCb3VuZF0sIGRpcmVjdGlvbn06IElMaW5lYXJQdmZcbik6IG51bWJlciB7XG4gIGNvbnN0IHJlYmFzZWQgPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2RlY3JlYXNpbmcnXG4gICAgICA/IHVwcGVyQm91bmQgLSBzbGlkZXJWYWx1ZVxuICAgICAgOiBzbGlkZXJWYWx1ZSAtIGxvd2VyQm91bmQ7XG4gIHJldHVybiAocmViYXNlZCAvIE1hdGguYWJzKGxvd2VyQm91bmQgLSB1cHBlckJvdW5kKSkgKiAxMDA7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBpZWNld2lzZUltcG9ydGFuY2UoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHB2ZjogSVBpZWNlV2lzZUxpbmVhclB2ZlxuKTogbnVtYmVyIHtcbiAgY29uc3Qge1xuICAgIGN1dG9mZnMsXG4gICAgcmFuZ2U6IFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXSxcbiAgICBkaXJlY3Rpb25cbiAgfSA9IHB2ZjtcbiAgY29uc3QgY3V0b2Zmc1dpdGhCb3VuZHMgPSBbbG93ZXJCb3VuZCwgLi4uY3V0b2ZmcywgdXBwZXJCb3VuZF07XG4gIGNvbnN0IHZhbHVlc1dpdGhCb3VuZHMgPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2luY3JlYXNpbmcnXG4gICAgICA/IFswLCAwLjI1LCAwLjUsIDAuNzUsIDFdXG4gICAgICA6IFsxLCAwLjc1LCAwLjUsIDAuMjUsIDBdO1xuICBjb25zdCBleGFjdEN1dG9mZklkeCA9IF8uZmluZEluZGV4KFxuICAgIGN1dG9mZnNXaXRoQm91bmRzLFxuICAgICh4OiBudW1iZXIpOiBib29sZWFuID0+IHggPT09IHZhbHVlXG4gICk7XG4gIGlmIChleGFjdEN1dG9mZklkeCAhPT0gLTEpIHtcbiAgICByZXR1cm4gdmFsdWVzV2l0aEJvdW5kc1tleGFjdEN1dG9mZklkeF0gKiAxMDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZhbHVlKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY3V0b2Zmc1dpdGhCb3VuZHMsXG4gICAgICAgIHZhbHVlc1dpdGhCb3VuZHMsXG4gICAgICAgIGRpcmVjdGlvblxuICAgICAgKSAqIDEwMFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIGN1dG9mZnNXaXRoQm91bmRzOiBudW1iZXJbXSxcbiAgdmFsdWVzV2l0aEJvdW5kczogbnVtYmVyW10sXG4gIGRpcmVjdGlvbjogVFB2ZkRpcmVjdGlvblxuKTogbnVtYmVyIHtcbiAgY29uc3QgbGFyZ2VyQ3V0b2ZmSWR4ID0gXy5maW5kSW5kZXgoXG4gICAgY3V0b2Zmc1dpdGhCb3VuZHMsXG4gICAgKHg6IG51bWJlcik6IGJvb2xlYW4gPT4geCA+IHZhbHVlXG4gICk7XG4gIGNvbnN0IFtsb3dlckN1dE9mZiwgdXBwZXJDdXRPZmZdID0gW1xuICAgIGN1dG9mZnNXaXRoQm91bmRzW2xhcmdlckN1dG9mZklkeCAtIDFdLFxuICAgIGN1dG9mZnNXaXRoQm91bmRzW2xhcmdlckN1dG9mZklkeF1cbiAgXTtcblxuICBjb25zdCByZWJhc2VkID0gdmFsdWUgLSBsb3dlckN1dE9mZjtcbiAgY29uc3QgcmF0aW9PZlF1YXJ0aWxlID0gcmViYXNlZCAvICh1cHBlckN1dE9mZiAtIGxvd2VyQ3V0T2ZmKTtcbiAgY29uc3QgcXVhcnRpbGVWYWx1ZSA9IHZhbHVlc1dpdGhCb3VuZHNbbGFyZ2VyQ3V0b2ZmSWR4IC0gMV07XG4gIGlmIChkaXJlY3Rpb24gPT09ICdpbmNyZWFzaW5nJykge1xuICAgIHJldHVybiBxdWFydGlsZVZhbHVlICsgMC4yNSAqIHJhdGlvT2ZRdWFydGlsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcXVhcnRpbGVWYWx1ZSAtIDAuMjUgKiByYXRpb09mUXVhcnRpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRDcml0ZXJpb24oXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nLFxuICBjdXJyZW50U3RlcDogbnVtYmVyXG4pOiBJQ3JpdGVyaW9uIHtcbiAgcmV0dXJuIF8ucmVqZWN0KGNyaXRlcmlhLCAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKSA9PiB7XG4gICAgcmV0dXJuIGNyaXRlcmlvbi5pZCA9PT0gbW9zdEltcG9ydGFudENyaXRlcmlvbklkO1xuICB9KVtjdXJyZW50U3RlcCAtIDJdO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uQ2hvaWNlIGZyb20gJy4uL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UnO1xuaW1wb3J0IENyaXRlcmlvblNpdHVhdGlvbiBmcm9tICcuLi9Dcml0ZXJpb25TaXR1YXRpb24vQ3JpdGVyaW9uU2l0dWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9zdEltcG9ydGFudENob2ljZSgpIHtcbiAgY29uc3Qge1xuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIHB2ZnMsXG4gICAgY3JpdGVyaWFcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24oZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0SXNOZXh0RGlzYWJsZWQoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gICAgICAgIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q3JpdGVyaW9uU2l0dWF0aW9uXG4gICAgICAgICAgICBrZXk9e2NyaXRlcmlvbi5pZH1cbiAgICAgICAgICAgIGNyaXRlcmlvbj17Y3JpdGVyaW9ufVxuICAgICAgICAgICAgZGlzcGxheVZhbHVlPXtnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvbkNob2ljZXMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uQ2hvaWNlIGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+R2l2ZW4gdGhlIGZvbGxvd2luZyBzaXR1YXRpb246PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7cmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpfVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGltcHJvdmVtZW50cyBpcyBtb3N0IGltcG9ydGFudD9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgIG5hbWU9XCJtb3N0LWltcG9ydGFudC1jcml0ZXJpb24tcmFkaW9cIlxuICAgICAgICAgIHZhbHVlPXttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDcml0ZXJpb25DaG9pY2VzKCl9XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBzaWduaWZpY2FudERpZ2l0cyBmcm9tICdzcmMvVXRpbC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlY2lzZVN3aW5nU2xpZGVyKHtcbiAgY3JpdGVyaW9uXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbn0pIHtcbiAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEwMCk7XG4gIGNvbnN0IHtzZXRQcmVmZXJlbmNlLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWR9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBzbGlkZXJWYWx1ZSk7XG4gIH0sIFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTbGlkZXJDaGFuZ2VkKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LFxuICAgIG5ld1ZhbHVlOiBudW1iZXJcbiAgKSB7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIHNldFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBuZXdWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWUpfVxuICAgICAgPFNsaWRlclxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17MX1cbiAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICBkaXNhYmxlZD17bW9zdEltcG9ydGFudENyaXRlcmlvbklkID09PSBjcml0ZXJpb24uaWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG4vLyBpbXBvcnQgSW5saW5lSGVscCBmcm9tICdhcHAvdHMvSW5saW5lSGVscC9JbmxpbmVIZWxwJzsgLy9GSVhNRVxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgU3dpbmdCdXR0b25zIGZyb20gJy4uL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMnO1xuaW1wb3J0IFN3aW5nU2V0V2VpZ2h0cyBmcm9tICcuLi9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlY2lzZVN3aW5nV2VpZ2h0aW5nKCkge1xuICBjb25zdCB7Y3VycmVudFN0ZXB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwic3dpbmctd2VpZ2h0aW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIFByZWNpc2Ugc3dpbmcgd2VpZ2h0aW5nIHsvKjxJbmxpbmVIZWxwIGhlbHBJZD1cInN3aW5nLXdlaWdodGluZ1wiIC8+Ki99XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSAxID8gPE1vc3RJbXBvcnRhbnRDaG9pY2UgLz4gOiA8U3dpbmdTZXRXZWlnaHRzIC8+fVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxTd2luZ0J1dHRvbnMgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2YgMlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IHtCb3gsIEdyaWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcgZnJvbSAnc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJRXhhY3RTd2luZ1JhdGlvIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUV4YWN0U3dpbmdSYXRpbyc7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhdGlvQm91bmRDb25zdHJhaW50IGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhdGlvQm91bmRDb25zdHJhaW50JztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCBNYXRjaGluZ0VsaWNpdGF0aW9uIGZyb20gJ3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nRWxpY2l0YXRpb24nO1xuaW1wb3J0IFByZWNpc2VTd2luZ1dlaWdodGluZyBmcm9tICdzcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nV2VpZ2h0aW5nJztcbmltcG9ydCBSYW5raW5nRWxpY2l0YXRpb24gZnJvbSAnc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nRWxpY2l0YXRpb24nO1xuaW1wb3J0IHtURWxpY2l0YXRpb25NZXRob2R9IGZyb20gJ3NyYy9UeXBlcy9URWxpY2l0YXRpb25NZXRob2QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudH0gZnJvbSAnLi4vRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWZlcmVuY2VFbGljaXRhdGlvbih7XG4gIGVsaWNpdGF0aW9uTWV0aG9kLFxuICBjcml0ZXJpYSxcbiAgc2hvd1BlcmNlbnRhZ2VzLFxuICBwdmZzLFxuICBjYW5jZWxDYWxsYmFjayxcbiAgc2F2ZUNhbGxiYWNrXG59OiB7XG4gIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2Q7XG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW107XG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhbjtcbiAgcHZmczogUmVjb3JkPHN0cmluZywgVFB2Zj47XG4gIGNhbmNlbENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBzYXZlQ2FsbGJhY2s6IChcbiAgICBwcmVmZXJlbmNlczogSUV4YWN0U3dpbmdSYXRpb1tdIHwgSVJhdGlvQm91bmRDb25zdHJhaW50W10gfCBJUmFua2luZ1tdXG4gICkgPT4gdm9pZDtcbn0pOiBKU1guRWxlbWVudCB7XG4gIGZ1bmN0aW9uIHJlbmRlckVsaWNpdGF0aW9uKFxuICAgIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2RcbiAgKTogSlNYLkVsZW1lbnQge1xuICAgIHN3aXRjaCAoZWxpY2l0YXRpb25NZXRob2QpIHtcbiAgICAgIGNhc2UgJ3ByZWNpc2UnOlxuICAgICAgICByZXR1cm4gPFByZWNpc2VTd2luZ1dlaWdodGluZyAvPjtcbiAgICAgIGNhc2UgJ2ltcHJlY2lzZSc6XG4gICAgICAgIHJldHVybiA8SW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcgLz47XG4gICAgICBjYXNlICdtYXRjaGluZyc6XG4gICAgICAgIHJldHVybiA8TWF0Y2hpbmdFbGljaXRhdGlvbiAvPjtcbiAgICAgIGNhc2UgJ3JhbmtpbmcnOlxuICAgICAgICByZXR1cm4gPFJhbmtpbmdFbGljaXRhdGlvbiAvPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudFxuICAgICAgY3JpdGVyaWE9e2NyaXRlcmlhfVxuICAgICAgZWxpY2l0YXRpb25NZXRob2Q9e2VsaWNpdGF0aW9uTWV0aG9kfVxuICAgICAgc2hvd1BlcmNlbnRhZ2VzPXtzaG93UGVyY2VudGFnZXN9XG4gICAgICBwdmZzPXtwdmZzfVxuICAgICAgY2FuY2VsQ2FsbGJhY2s9e2NhbmNlbENhbGxiYWNrfVxuICAgICAgc2F2ZUNhbGxiYWNrPXtzYXZlQ2FsbGJhY2t9XG4gICAgPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBjb21wb25lbnQ9e0JveH0gbXQ9ezJ9PlxuICAgICAgICB7cmVuZGVyRWxpY2l0YXRpb24oZWxpY2l0YXRpb25NZXRob2QpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvRWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQge1xuICBhc3NpZ25NaXNzaW5nUmFua2luZ3MsXG4gIGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzLFxuICBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rLFxuICBVTlJBTktFRFxufSBmcm9tICdzcmMvUmFua2luZ1V0aWwvUmFua2luZ1V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQnV0dG9ucyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWRcbn06IHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nO1xuICBzZXRTZWxlY3RlZENyaXRlcmlvbklkOiAoY3JpdGVyaW9uSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldFJhbmtpbmcsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgcmFua2luZ3MsXG4gICAgY3JpdGVyaWEsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIHNldFJhbmtpbmcoc2VsZWN0ZWRDcml0ZXJpb25JZCwgY3VycmVudFN0ZXApO1xuICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQoJycpO1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3QgZmluaXNoZWRSYW5raW5nczogUmVjb3JkPFxuICAgICAgc3RyaW5nLFxuICAgICAgSVJhbmtpbmdBbnN3ZXJcbiAgICA+ID0gYXNzaWduTWlzc2luZ1JhbmtpbmdzKFxuICAgICAgcmFua2luZ3MsXG4gICAgICBzZWxlY3RlZENyaXRlcmlvbklkLFxuICAgICAgY3VycmVudFN0ZXAsXG4gICAgICBjcml0ZXJpYVxuICAgICk7XG4gICAgY29uc3QgcHJlZmVyZW5jZXMgPSBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyhfLnRvQXJyYXkoZmluaXNoZWRSYW5raW5ncykpO1xuICAgIHNhdmVDYWxsYmFjayhwcmVmZXJlbmNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCkge1xuICAgIGlmIChjdXJyZW50U3RlcCAhPT0gMSkge1xuICAgICAgcmVtb3ZlUmFua0Zyb21Dcml0ZXJpb24oKTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZCgnJyk7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVJhbmtGcm9tQ3JpdGVyaW9uKCkge1xuICAgIGNvbnN0IGxvb2t1cFJhbmsgPSBjdXJyZW50U3RlcCAtIDE7XG4gICAgY29uc3QgY3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKGNyaXRlcmlhLCByYW5raW5ncywgbG9va3VwUmFuayk7XG4gICAgc2V0UmFua2luZyhjcml0ZXJpb25JZCwgVU5SQU5LRUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IF8uc2l6ZShjcml0ZXJpYSkgLSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgID5cbiAgICAgICAgQ2FuY2VsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJwcmV2aW91cy1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0NsaWNrfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7VU5SQU5LRUR9IGZyb20gJ3NyYy9SYW5raW5nVXRpbC9SYW5raW5nVXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uQ2hvaWNlIGZyb20gJy4uLy4uL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQ2hvaWNlcyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIGhhbmRsZVNlbGVjdGlvblxufToge1xuICBzZWxlY3RlZENyaXRlcmlvbklkOiBzdHJpbmc7XG4gIGhhbmRsZVNlbGVjdGlvbjogKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge3JhbmtpbmdzLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IGZpbHRlcmVkQ3JpdGVyaWEgPSBfLmZpbHRlcihcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgIXJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gfHwgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaW1wcm92ZW1lbnRzIGlzIG1vc3QgaW1wb3J0YW50P1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgbmFtZT1cInJhbmtpbmctY3JpdGVyaW9uLXJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge18ubWFwKGZpbHRlcmVkQ3JpdGVyaWEsIChjcml0ZXJpb24pID0+IChcbiAgICAgICAgICAgIDxDcml0ZXJpb25DaG9pY2Uga2V5PXtjcml0ZXJpb24uaWR9IGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG4vLyBpbXBvcnQgSW5saW5lSGVscCBmcm9tICdhcHAvdHMvSW5saW5lSGVscC9JbmxpbmVIZWxwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDaGFuZ2VFdmVudCwgdXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgUmFua2luZ0J1dHRvbnMgZnJvbSAnLi9SYW5raW5nQnV0dG9ucy9SYW5raW5nQnV0dG9ucyc7XG5pbXBvcnQgUmFua2luZ0Nob2ljZXMgZnJvbSAnLi9SYW5raW5nQ2hvaWNlcy9SYW5raW5nQ2hvaWNlcyc7XG5pbXBvcnQgUmFua2luZ1NpdHVhdGlvbiBmcm9tICcuL1JhbmtpbmdTaXR1YXRpb24vUmFua2luZ1NpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdFbGljaXRhdGlvbigpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ3JpdGVyaW9uSWQsIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7Y3VycmVudFN0ZXAsIGNyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IF8uc2l6ZShjcml0ZXJpYSkgLSAxO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZENyaXRlcmlvbklkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInJhbmtpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgUmFua2luZyB7Lyo8SW5saW5lSGVscCBoZWxwSWQ9XCJyYW5raW5nXCIgLz4qL31cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFua2luZ1NpdHVhdGlvbiAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFua2luZ0Nob2ljZXNcbiAgICAgICAgICBoYW5kbGVTZWxlY3Rpb249e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgICBzZWxlY3RlZENyaXRlcmlvbklkPXtzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxSYW5raW5nQnV0dG9uc1xuICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQ9e3NlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZD17c2V0U2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2Yge3RvdGFsU3RlcHN9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IHtVTlJBTktFRH0gZnJvbSAnc3JjL1JhbmtpbmdVdGlsL1JhbmtpbmdVdGlsJztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRCZXN0LCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5pbXBvcnQgQ3JpdGVyaW9uU2l0dWF0aW9uIGZyb20gJy4uLy4uL0NyaXRlcmlvblNpdHVhdGlvbi9Dcml0ZXJpb25TaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nU2l0dWF0aW9uKCkge1xuICBjb25zdCB7cmFua2luZ3MsIHNob3dQZXJjZW50YWdlcywgcHZmcywgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZVRvRGlzcGxheShjcml0ZXJpb246IElDcml0ZXJpb24pIHtcbiAgICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICAgIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcbiAgICByZXR1cm4gIXJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gfHwgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICAgICAgPyBnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpXG4gICAgICA6IGdldEJlc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uU2l0dWF0aW9uXG4gICAgICAgICAga2V5PXtjcml0ZXJpb24uaWR9XG4gICAgICAgICAgY3JpdGVyaW9uPXtjcml0ZXJpb259XG4gICAgICAgICAgZGlzcGxheVZhbHVlPXtnZXRWYWx1ZVRvRGlzcGxheShjcml0ZXJpb24pfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5HaXZlbiB0aGUgZm9sbG93aW5nIHNpdHVhdGlvbjo8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtyZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5cbmV4cG9ydCBjb25zdCBVTlJBTktFRCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICByYW5rOiBudW1iZXJcbik6IHN0cmluZyB7XG4gIHJldHVybiBfLmZpbmQoXG4gICAgY3JpdGVyaWEsXG4gICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IGJvb2xlYW4gPT5cbiAgICAgIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gJiYgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSByYW5rXG4gICkuaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25NaXNzaW5nUmFua2luZ3MoXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgcmFuazogbnVtYmVyLFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdXG4pOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4ge1xuICBjb25zdCBpbnRlcm1lZGlhdGVSYW5raW5ncyA9IGFkZFJhbmtpbmcocmFua2luZ3MsIHNlbGVjdGVkQ3JpdGVyaW9uSWQsIHJhbmspO1xuICBjb25zdCBsYXN0Q3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRXaXRob3V0UmFua2luZyhcbiAgICBjcml0ZXJpYSxcbiAgICBpbnRlcm1lZGlhdGVSYW5raW5nc1xuICApO1xuICByZXR1cm4gYWRkUmFua2luZyhpbnRlcm1lZGlhdGVSYW5raW5ncywgbGFzdENyaXRlcmlvbklkLCByYW5rICsgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSYW5raW5nKFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICBjcml0ZXJpb25JZDogc3RyaW5nLFxuICByYW5rOiBudW1iZXJcbik6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPiB7XG4gIGxldCB1cGRhdGVkUmFua2luZ3MgPSBfLmNsb25lRGVlcChyYW5raW5ncyk7XG4gIGNvbnN0IG5ld1Jhbmtpbmc6IElSYW5raW5nQW5zd2VyID0ge1xuICAgIGNyaXRlcmlvbklkOiBjcml0ZXJpb25JZCxcbiAgICByYW5rOiByYW5rXG4gIH07XG4gIHVwZGF0ZWRSYW5raW5nc1tjcml0ZXJpb25JZF0gPSBuZXdSYW5raW5nO1xuICByZXR1cm4gdXBkYXRlZFJhbmtpbmdzO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3JpdGVyaW9uSWRXaXRob3V0UmFua2luZyhcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXSxcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPlxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIF8uZmluZChcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgcmFua2luZ3NbY3JpdGVyaW9uLmlkXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICkuaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyhhbnN3ZXJzOiBJUmFua2luZ0Fuc3dlcltdKTogSVJhbmtpbmdbXSB7XG4gIGNvbnN0IHNvcnRlZEFuc3dlcnM6IElSYW5raW5nQW5zd2VyW10gPSBfLnNvcnRCeShhbnN3ZXJzLCAncmFuaycpO1xuICByZXR1cm4gXy5yZWR1Y2UoXG4gICAgc29ydGVkQW5zd2VycyxcbiAgICAoYWNjdW06IElSYW5raW5nW10sIGFuc3dlcjogSVJhbmtpbmdBbnN3ZXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSBhbnN3ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgICAgfVxuICAgICAgY29uc3QgcmFua2luZzogSVJhbmtpbmcgPSB7XG4gICAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAncmFua2luZycsXG4gICAgICAgIHR5cGU6ICdvcmRpbmFsJyxcbiAgICAgICAgY3JpdGVyaWE6IFthbnN3ZXIuY3JpdGVyaW9uSWQsIHNvcnRlZEFuc3dlcnNbaWR4ICsgMV0uY3JpdGVyaW9uSWRdXG4gICAgICB9O1xuICAgICAgYWNjdW0ucHVzaChyYW5raW5nKTtcbiAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpbmdCdXR0b25zKCkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCkge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25DbGljaygpIHtcbiAgICBzYXZlQ2FsbGJhY2soT2JqZWN0LnZhbHVlcyhwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IDI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgID5cbiAgICAgICAgQ2FuY2VsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJwcmV2aW91cy1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0NsaWNrfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJbXByZWNpc2VTd2luZ1NsaWRlciBmcm9tICdzcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1NsaWRlci9JbXByZWNpc2VTd2luZ1NsaWRlcic7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IFByZWNpc2VTd2luZ1NsaWRlciBmcm9tICdzcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nU2xpZGVyL1ByZWNpc2VTd2luZ1NsaWRlcic7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZSwgZ2V0QmVzdCwgZ2V0VW5pdExhYmVsLCBnZXRXb3JzdH0gZnJvbSAnc3JjL1V0aWwvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyaXRlcmlvbk92ZXJ2aWV3KHtcbiAgY3JpdGVyaW9uXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbn0pIHtcbiAgY29uc3Qge3B2ZnMsIHNob3dQZXJjZW50YWdlcywgZWxpY2l0YXRpb25NZXRob2R9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcbiAgY29uc3QgdW5pdFR5cGUgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlclN3aW5nU2xpZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdwcmVjaXNlJykge1xuICAgICAgcmV0dXJuIDxQcmVjaXNlU3dpbmdTbGlkZXIgY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+O1xuICAgIH0gZWxzZSBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdpbXByZWNpc2UnKSB7XG4gICAgICByZXR1cm4gPEltcHJlY2lzZVN3aW5nU2xpZGVyIGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUYWJsZVJvdyBrZXk9e2NyaXRlcmlvbi5pZH0+XG4gICAgICA8VGFibGVDZWxsPlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNyaXRlcmlvbi10aXRsZVwiPntjcml0ZXJpb24udGl0bGV9PC9zcGFuPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgIHtnZXRVbml0TGFiZWwoXG4gICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgICApfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtnZXRCZXN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cmVuZGVyU3dpbmdTbGlkZXIoKX08L1RhYmxlQ2VsbD5cbiAgICA8L1RhYmxlUm93PlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgQ3JpdGVyaW9uT3ZlcnZpZXcgZnJvbSAnLi9Dcml0ZXJpb25PdmVydmlldy9Dcml0ZXJpb25PdmVydmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VGFibGUoKSB7XG4gIGNvbnN0IHtjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uT3ZlcnZpZXdzKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvbk92ZXJ2aWV3IGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XG4gICAgICA8VGFibGVIZWFkPlxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbD5Dcml0ZXJpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPlVuaXQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+V29yc3Q8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QmVzdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JbXBvcnRhbmNlPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlSGVhZD5cbiAgICAgIDxUYWJsZUJvZHk+e3JlbmRlckNyaXRlcmlvbk92ZXJ2aWV3cygpfTwvVGFibGVCb2R5PlxuICAgIDwvVGFibGU+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge2dldFN3aW5nU3RhdGVtZW50fSBmcm9tICdzcmMvU3dpbmdVdGlsL1N3aW5nVXRpbCc7XG5pbXBvcnQgT3ZlcnZpZXdUYWJsZSBmcm9tICcuL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aW5nU2V0V2VpZ2h0cygpIHtcbiAgY29uc3Qge1xuICAgIHB2ZnMsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICBnZXRDcml0ZXJpb25cbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBnZXRTd2luZ1N0YXRlbWVudChcbiAgICAgIGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpLFxuICAgICAgcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdLFxuICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGVtZW50KFxuICAgICAgZ2V0U3dpbmdTdGF0ZW1lbnQoXG4gICAgICAgIGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpLFxuICAgICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sXG4gICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgKVxuICAgICk7XG4gIH0sIFtzaG93UGVyY2VudGFnZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWRcbiAgICAgICAgaXRlbVxuICAgICAgICB4cz17MTJ9XG4gICAgICAgIGlkPXtgJHtlbGljaXRhdGlvbk1ldGhvZH0tc3dpbmctc3RhdGVtZW50YH1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN0YXRlbWVudH19XG4gICAgICAvPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8T3ZlcnZpZXdUYWJsZSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElFeGFjdFN3aW5nUmF0aW8gZnJvbSAnc3JjL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmF0aW9Cb3VuZENvbnN0cmFpbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2UsIGdldEJlc3QsIGdldFVuaXRMYWJlbCwgZ2V0V29yc3R9IGZyb20gJ3NyYy9VdGlsL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFID1cbiAgXCJZb3UndmUgaW5kaWNhdGVkIHRoYXQgaW1wcm92aW5nICVjcml0ZXJpb24xJSBmcm9tICV3b3JzdDElICV1bml0MSUgdG8gJWJlc3QxJSAldW5pdDElIGlzIHRoZSBtb3N0IGltcG9ydGFudCAoaS5lLiBpdCBoYXMgMTAwJSBpbXBvcnRhbmNlKS4gTm93IGluZGljYXRlIHRoZSByZWxhdGl2ZSBpbXBvcnRhbmNlIChpbiAlKSB0byB0aGlzIGltcHJvdmVtZW50IG9mIGVhY2ggb3RoZXIgY3JpdGVyaW9uJ3MgaW1wcm92ZW1lbnQgdXNpbmcgdGhlIHNsaWRlcnMgYmVsb3cuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nXG4pOiBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5maWx0ZXIoXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgICBjcml0ZXJpb24uaWQgIT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICAgIClcbiAgICAubWFwKChjcml0ZXJpb246IElDcml0ZXJpb24pOiBbc3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvXSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uLmlkXSxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdwcmVjaXNlJyxcbiAgICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgICAgcmF0aW86IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gW2NyaXRlcmlvbi5pZCwgcHJlZmVyZW5jZV07XG4gICAgfSlcbiAgICAuZnJvbVBhaXJzKClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZ1xuKTogUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5yZWplY3QoWydpZCcsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pXG4gICAgLmtleUJ5KCdpZCcpXG4gICAgLm1hcFZhbHVlcyhcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPT4ge1xuICAgICAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICAgICAgYm91bmRzOiBbMSwgMTAwXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZTtcbiAgICAgIH1cbiAgICApXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTd2luZ1N0YXRlbWVudChcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uLFxuICBwdmY6IFRQdmYsXG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgY29uc3QgdW5pdCA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudDtcbiAgY29uc3QgbGFiZWwgPSBnZXRVbml0TGFiZWwodW5pdCwgc2hvd1BlcmNlbnRhZ2VzKTtcbiAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdC50eXBlKTtcbiAgcmV0dXJuIERFRkFVTFRfUFJFQ0lTRV9URU1QTEFURS5yZXBsYWNlKC8lY3JpdGVyaW9uMSUvZ2ksIGNyaXRlcmlvbi50aXRsZSlcbiAgICAucmVwbGFjZSgvJXVuaXQxJS9naSwgbGFiZWwpXG4gICAgLnJlcGxhY2UoLyV3b3JzdDElL2dpLCBTdHJpbmcoZ2V0V29yc3QocHZmLCB1c2VQZXJjZW50YWdlKSkpXG4gICAgLnJlcGxhY2UoLyViZXN0MSUvZ2ksIFN0cmluZyhnZXRCZXN0KHB2ZiwgdXNlUGVyY2VudGFnZSkpKTtcbn1cbiIsImltcG9ydCBJVW5pdE9mTWVhc3VyZW1lbnQsIHtcbiAgVW5pdE9mTWVhc3VyZW1lbnRUeXBlXG59IGZyb20gJ3NyYy9JbnRlcmZhY2UvSVVuaXRPZk1lYXN1cmVtZW50JztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZTogVW5pdE9mTWVhc3VyZW1lbnRUeXBlKTogYm9vbGVhbiB7XG4gIHJldHVybiB1bml0VHlwZSA9PT0gJ3BlcmNlbnRhZ2UnIHx8IHVuaXRUeXBlID09PSAnZGVjaW1hbCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXN0KHB2ZjogVFB2ZiwgdXNlUGVyY2VudGFnZTogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IHZhbHVlID0gc2lnbmlmaWNhbnREaWdpdHMoXG4gICAgaXNJbmNyZWFzaW5nKHB2ZikgPyBwdmYucmFuZ2VbMV0gOiBwdmYucmFuZ2VbMF1cbiAgKTtcbiAgcmV0dXJuIGdldFBlcmNlbnRpZmllZFZhbHVlKHZhbHVlLCB1c2VQZXJjZW50YWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcnN0KHB2ZjogVFB2ZiwgdXNlUGVyY2VudGFnZTogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IHZhbHVlID0gc2lnbmlmaWNhbnREaWdpdHMoXG4gICAgaXNJbmNyZWFzaW5nKHB2ZikgPyBwdmYucmFuZ2VbMF0gOiBwdmYucmFuZ2VbMV1cbiAgKTtcbiAgcmV0dXJuIGdldFBlcmNlbnRpZmllZFZhbHVlKHZhbHVlLCB1c2VQZXJjZW50YWdlKTtcbn1cblxuZnVuY3Rpb24gaXNJbmNyZWFzaW5nKHB2ZjogVFB2Zik6IGJvb2xlYW4ge1xuICByZXR1cm4gcHZmLmRpcmVjdGlvbiA9PT0gJ2luY3JlYXNpbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWduaWZpY2FudERpZ2l0cyh4OiBudW1iZXIsIHByZWNpc2lvbj86IG51bWJlcikge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkIHx8IHggPT09IG51bGwgfHwgaXNOYU4oeCkpIHtcbiAgICB0aHJvdyAnYXR0ZW1wdCB0byBhcHBseSBzaWduaWZpY2FudCBkaWdpdHMgdG8gbm9uLW51bWVyaWMgdmFsdWUnO1xuICB9IGVsc2UgaWYgKHByZWNpc2lvbiAhPT0gMCAmJiAhcHJlY2lzaW9uKSB7XG4gICAgcHJlY2lzaW9uID0gMztcbiAgfSBlbHNlIGlmICh4ID09PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSBpZiAoeCA+IDEgfHwgeCA8IC0xKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHgudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoeC50b1ByZWNpc2lvbihwcmVjaXNpb24pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudGlmaWVkVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW5cbik6IG51bWJlciB7XG4gIGlmICh1c2VQZXJjZW50YWdlKSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKSAqIDEwMCk7IC8vMiBzaWdkaXRzIHRvIGVuc3VyZSB0aGUgcHJlY2lzaW9uIHN0YXlzIHRoZSBzYW1lXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdExhYmVsKFxuICB1bml0OiBJVW5pdE9mTWVhc3VyZW1lbnQsXG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgaWYgKHNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdkZWNpbWFsJykge1xuICAgIHJldHVybiAnJSc7XG4gIH0gZWxzZSBpZiAoIXNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5pdC5sYWJlbDtcbiAgfVxufVxuIiwiaW1wb3J0IFByZWZlcmVuY2VFbGljaXRhdGlvbiBmcm9tICcuL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24nO1xuXG5leHBvcnQge1ByZWZlcmVuY2VFbGljaXRhdGlvbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbkdyb3VwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0dyaWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUGFwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9TbGlkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVCb2R5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQ2VsbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVSb3dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVG9vbHRpcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9