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
const ElicitationUtil_1 = __webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
const ElicitationUtil_2 = __webpack_require__(/*! ../ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
function CriterionChoice({ criterion }) {
    const { pvfs, showPercentages } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const pvf = pvfs[criterion.id];
    const unitType = criterion.dataSources[0].unitOfMeasurement.type;
    const usePercentage = showPercentages && ElicitationUtil_1.canBePercentage(unitType);
    return (react_1.default.createElement("label", { id: `ranking-choice-${criterion.id}` },
        react_1.default.createElement(Radio_1.default, { value: criterion.id }),
        `${pvf.direction} `,
        react_1.default.createElement(Tooltip_1.default, { disableHoverListener: !criterion.description, title: criterion.description ? criterion.description : '' },
            react_1.default.createElement("span", { id: `criterion-option-${criterion.id}`, className: "criterion-title" }, criterion.title)),
        ` from ${ElicitationUtil_2.getWorst(pvf, usePercentage)} to ${ElicitationUtil_2.getBest(pvf, usePercentage)}`));
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
const ElicitationUtil_1 = __webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
function CriterionSituation({ criterion, displayValue }) {
    const { showPercentages } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    return (react_1.default.createElement("ul", null,
        react_1.default.createElement("li", { id: `situation-${criterion.id}` },
            react_1.default.createElement(Tooltip_1.default, { disableHoverListener: !criterion.description, title: criterion.description ? criterion.description : '' },
                react_1.default.createElement("span", { id: `situation-title-${criterion.id}`, className: "criterion-title" }, criterion.title)),
            ": ",
            react_1.default.createElement("span", { id: `situation-value-${criterion.id}` }, displayValue),
            ' ',
            ElicitationUtil_1.getUnitLabel(criterion.dataSources[0].unitOfMeasurement, showPercentages))));
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
const ElicitationUtil_1 = __webpack_require__(/*! ../ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
exports.ElicitationContext = react_1.createContext({});
function ElicitationContextProviderComponent({ elicitationMethod, criteria, showPercentages, pvfs, cancelCallback, saveCallback, children }) {
    const [currentStep, setCurrentStep] = react_1.useState(1);
    const [isNextDisabled, setIsNextDisabled] = react_1.useState(true);
    const [mostImportantCriterionId, setMostImportantCriterionId] = react_1.useState();
    const [preferences, setPreferences] = react_1.useState({});
    const [rankings, setRankings] = react_1.useState({});
    function setRanking(criterionId, rank) {
        const updatedRankings = ElicitationUtil_1.addRanking(rankings, criterionId, rank);
        setRankings(updatedRankings);
    }
    function setMostImportantCriterionAndPreferences(criterionId) {
        if (elicitationMethod === 'precise') {
            setPreferences(ElicitationUtil_1.buildInitialPrecisePreferences(criteria, criterionId));
        }
        else if (elicitationMethod === 'imprecise') {
            setPreferences(ElicitationUtil_1.buildInitialImprecisePreferences(criteria, criterionId));
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

/***/ "./src/ElicitationUtil/ElicitationUtil.ts":
/*!************************************************!*\
  !*** ./src/ElicitationUtil/ElicitationUtil.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildRankingPreferences = exports.addRanking = exports.assignMissingRankings = exports.findCriterionIdForRank = exports.getCurrentCriterion = exports.calculateImportance = exports.determineStepSize = exports.getMatchingStatement = exports.getSwingStatement = exports.getUnitLabel = exports.getPercentifiedValue = exports.getWorst = exports.getBest = exports.canBePercentage = exports.buildInitialImprecisePreferences = exports.buildInitialPrecisePreferences = void 0;
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
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
        .map((criterion) => {
        const preference = {
            criteria: [mostImportantCriterionId, criterion.id],
            elicitationMethod: 'imprecise',
            type: 'ratio bound',
            bounds: [1, 100]
        };
        return [criterion.id, preference];
    })
        .fromPairs()
        .value();
}
exports.buildInitialImprecisePreferences = buildInitialImprecisePreferences;
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
    if (precision !== 0 && !precision) {
        precision = 3;
    }
    if (x === 0) {
        return x;
    }
    if (x > 1 || x < -1) {
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
function getSwingStatement(criterion, pvf, showPercentages) {
    const unit = criterion.dataSources[0].unitOfMeasurement;
    const label = getUnitLabel(unit, showPercentages);
    const usePercentage = showPercentages && canBePercentage(unit.type);
    return constants_1.DEFAULT_PRECISE_TEMPLATE.replace(/%criterion1%/gi, criterion.title)
        .replace(/%unit1%/gi, label)
        .replace(/%worst1%/gi, String(getWorst(pvf, usePercentage)))
        .replace(/%best1%/gi, String(getBest(pvf, usePercentage)));
}
exports.getSwingStatement = getSwingStatement;
function getMatchingStatement(mostImportantCriterion, currentCriterion) {
    return constants_1.DEFAULT_MATCHING_TEMPLATE.replace(/%criterion1%/gi, mostImportantCriterion.title).replace(/%criterion2%/gi, currentCriterion.title);
}
exports.getMatchingStatement = getMatchingStatement;
function determineStepSize([lowerBound, upperBound]) {
    const interval = upperBound - lowerBound;
    const magnitude = Math.floor(Math.log10(interval));
    return Math.pow(10, magnitude - 1);
}
exports.determineStepSize = determineStepSize;
function calculateImportance(sliderValue, { range: [lowerBound, upperBound], direction }) {
    const rebased = direction === 'decreasing'
        ? upperBound - sliderValue
        : sliderValue - lowerBound;
    const importance = (rebased / Math.abs(lowerBound - upperBound)) * 100;
    return importance;
}
exports.calculateImportance = calculateImportance;
function getCurrentCriterion(criteria, mostImportantCriterionId, currentStep) {
    return lodash_1.default.reject(criteria, (criterion) => {
        return criterion.id === mostImportantCriterionId;
    })[currentStep - 2];
}
exports.getCurrentCriterion = getCurrentCriterion;
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
        rankings[criterion.id].rank === constants_1.UNRANKED).id;
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
const ElicitationUtil_1 = __importDefault(__webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts"));
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
            : `${ElicitationUtil_1.default(sliderValue[0])} - ${ElicitationUtil_1.default(sliderValue[1])}%`;
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
const ElicitationUtil_1 = __webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
const ElicitationUtil_2 = __webpack_require__(/*! ../../ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
const MatchingSlider_1 = __importDefault(__webpack_require__(/*! ./MatchingSlider/MatchingSlider */ "./src/MatchingElicitation/MatchingSetImportance/MatchingSlider/MatchingSlider.tsx"));
function MatchingSetImportance() {
    const { pvfs, showPercentages, mostImportantCriterionId, currentStep, getCriterion, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const mostImportantCriterion = getCriterion(mostImportantCriterionId);
    const mostImportantUnitType = mostImportantCriterion.dataSources[0].unitOfMeasurement.type;
    const currentCriterion = ElicitationUtil_2.getCurrentCriterion(criteria, mostImportantCriterionId, currentStep);
    const currentUnitType = currentCriterion.dataSources[0].unitOfMeasurement.type;
    const statement = ElicitationUtil_2.getMatchingStatement(mostImportantCriterion, currentCriterion);
    const usePercentagesForMostImportantCriterion = showPercentages && ElicitationUtil_1.canBePercentage(mostImportantUnitType);
    const usePercentagesForCurrentCriterion = showPercentages && ElicitationUtil_1.canBePercentage(currentUnitType);
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
                        react_1.default.createElement(TableCell_1.default, { align: "center" }, ElicitationUtil_2.getWorst(pvfs[mostImportantCriterionId], usePercentagesForMostImportantCriterion)),
                        react_1.default.createElement(TableCell_1.default, { align: "center", id: "matching-cell" },
                            react_1.default.createElement(MatchingSlider_1.default, { currentCriterionId: currentCriterion.id }))),
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, currentCriterion.title),
                        react_1.default.createElement(TableCell_1.default, { align: "center" }, ElicitationUtil_2.getBest(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion)),
                        react_1.default.createElement(TableCell_1.default, { align: "center" }, ElicitationUtil_2.getWorst(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion))))))));
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
const ElicitationUtil_1 = __importStar(__webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts"));
function MatchingSlider({ currentCriterionId }) {
    const { currentStep, setIsNextDisabled, mostImportantCriterionId, setPreference, showPercentages, pvfs, getCriterion } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const mostImportantCriterion = getCriterion(mostImportantCriterionId);
    const pvf = pvfs[mostImportantCriterionId];
    const unitType = mostImportantCriterion.dataSources[0].unitOfMeasurement.type;
    const usePercentage = showPercentages && ElicitationUtil_1.canBePercentage(unitType);
    const [sliderValue, setSliderValue] = react_1.useState(ElicitationUtil_1.getBest(pvfs[mostImportantCriterionId], usePercentage));
    const [stepSize, setStepSize] = react_1.useState();
    react_1.useEffect(() => {
        const sliderValue = ElicitationUtil_1.getBest(pvf, false);
        setSliderValue(sliderValue);
        setPreference(currentCriterionId, ElicitationUtil_1.calculateImportance(sliderValue, pvf));
    }, [currentStep]);
    react_1.useEffect(() => {
        setStepSize(ElicitationUtil_1.determineStepSize(pvf.range));
    }, []);
    function handleSliderChanged(event, newValue) {
        setSliderValue(newValue);
        setIsNextDisabled(ElicitationUtil_1.default(newValue) ===
            ElicitationUtil_1.getWorst(pvfs[mostImportantCriterion.id], false));
        setPreference(currentCriterionId, ElicitationUtil_1.calculateImportance(newValue, pvf));
    }
    function displayValue() {
        return usePercentage
            ? ElicitationUtil_1.default(sliderValue * 100)
            : ElicitationUtil_1.default(sliderValue);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        displayValue(),
        react_1.default.createElement(Slider_1.default, { id: "matching-slider", value: sliderValue, min: pvf.range[0], max: pvf.range[1], onChange: handleSliderChanged, step: stepSize })));
}
exports.default = MatchingSlider;


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
const ElicitationUtil_1 = __webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
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
            const usePercentage = showPercentages && ElicitationUtil_1.canBePercentage(unitType);
            return (react_1.default.createElement(CriterionSituation_1.default, { key: criterion.id, criterion: criterion, displayValue: ElicitationUtil_1.getWorst(pvfs[criterion.id], usePercentage) }));
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
            react_1.default.createElement(RadioGroup_1.default, { name: "most-important-criterion-radio", value: mostImportantCriterionId ? mostImportantCriterionId : '', onChange: handleSelection }, renderCriterionChoices()))));
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
const ElicitationUtil_1 = __importDefault(__webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts"));
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
        ElicitationUtil_1.default(sliderValue),
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
    return (react_1.default.createElement(ElicitationContext_1.ElicitationContextProviderComponent, { criteria: criteria, elicitationMethod: 'precise', showPercentages: showPercentages, pvfs: pvfs, cancelCallback: cancelCallback, saveCallback: saveCallback },
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
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const ElicitationUtil_1 = __webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
function RankingButtons({ selectedCriterionId, setSelectedCriterionId }) {
    const { currentStep, setRanking, setCurrentStep, rankings, criteria, cancelCallback, saveCallback } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function handleNextButtonClick() {
        setRanking(selectedCriterionId, currentStep);
        setSelectedCriterionId('');
        setCurrentStep(currentStep + 1);
    }
    function handleSaveButtonClick() {
        const finishedRankings = ElicitationUtil_1.assignMissingRankings(rankings, selectedCriterionId, currentStep, criteria);
        const preferences = ElicitationUtil_1.buildRankingPreferences(lodash_1.default.toArray(finishedRankings));
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
        const criterionId = ElicitationUtil_1.findCriterionIdForRank(criteria, rankings, lookupRank);
        setRanking(criterionId, constants_1.UNRANKED);
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
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const CriterionChoice_1 = __importDefault(__webpack_require__(/*! ../../CriterionChoice/CriterionChoice */ "./src/CriterionChoice/CriterionChoice.tsx"));
function RankingChoices({ selectedCriterionId, handleSelection }) {
    const { rankings, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const filteredCriteria = lodash_1.default.filter(criteria, (criterion) => !rankings[criterion.id] || rankings[criterion.id].rank === constants_1.UNRANKED);
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
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const ElicitationContext_1 = __webpack_require__(/*! src/ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
const ElicitationUtil_1 = __webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
const CriterionSituation_1 = __importDefault(__webpack_require__(/*! ../../CriterionSituation/CriterionSituation */ "./src/CriterionSituation/CriterionSituation.tsx"));
function RankingSituation() {
    const { rankings, showPercentages, pvfs, criteria } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    function getValueToDisplay(criterion) {
        const unitType = criterion.dataSources[0].unitOfMeasurement.type;
        const usePercentage = showPercentages && ElicitationUtil_1.canBePercentage(unitType);
        return !rankings[criterion.id] || rankings[criterion.id].rank === constants_1.UNRANKED
            ? ElicitationUtil_1.getWorst(pvfs[criterion.id], usePercentage)
            : ElicitationUtil_1.getBest(pvfs[criterion.id], usePercentage);
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
const ElicitationUtil_1 = __webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
const ImpreciseSwingSlider_1 = __importDefault(__webpack_require__(/*! src/ImpreciseSwingElicitation/ImpreciseSwingSlider/ImpreciseSwingSlider */ "./src/ImpreciseSwingElicitation/ImpreciseSwingSlider/ImpreciseSwingSlider.tsx"));
const PreciseSwingSlider_1 = __importDefault(__webpack_require__(/*! src/PreciseSwingElicitation/PreciseSwingSlider/PreciseSwingSlider */ "./src/PreciseSwingElicitation/PreciseSwingSlider/PreciseSwingSlider.tsx"));
function CriterionOverview({ criterion }) {
    const { pvfs, showPercentages, elicitationMethod } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const unitType = criterion.dataSources[0].unitOfMeasurement.type;
    const usePercentage = showPercentages && ElicitationUtil_1.canBePercentage(unitType);
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
        react_1.default.createElement(TableCell_1.default, null, ElicitationUtil_1.getUnitLabel(criterion.dataSources[0].unitOfMeasurement, showPercentages)),
        react_1.default.createElement(TableCell_1.default, { align: "center" }, ElicitationUtil_1.getWorst(pvfs[criterion.id], usePercentage)),
        react_1.default.createElement(TableCell_1.default, { align: "center" }, ElicitationUtil_1.getBest(pvfs[criterion.id], usePercentage)),
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
const ElicitationUtil_1 = __webpack_require__(/*! src/ElicitationUtil/ElicitationUtil */ "./src/ElicitationUtil/ElicitationUtil.ts");
const OverviewTable_1 = __importDefault(__webpack_require__(/*! ./OverviewTable/OverviewTable */ "./src/SwingSetWeights/OverviewTable/OverviewTable.tsx"));
function SwingSetWeights() {
    const { pvfs, showPercentages, mostImportantCriterionId, elicitationMethod, getCriterion } = react_1.useContext(ElicitationContext_1.ElicitationContext);
    const [statement, setStatement] = react_1.useState(ElicitationUtil_1.getSwingStatement(getCriterion(mostImportantCriterionId), pvfs[mostImportantCriterionId], showPercentages));
    react_1.useEffect(() => {
        setStatement(ElicitationUtil_1.getSwingStatement(getCriterion(mostImportantCriterionId), pvfs[mostImportantCriterionId], showPercentages));
    }, [showPercentages]);
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, spacing: 2 },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, id: `${elicitationMethod}-swing-statement`, dangerouslySetInnerHTML: { __html: statement } }),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(OverviewTable_1.default, null))));
}
exports.default = SwingSetWeights;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_FINISH_SURVEY_MESSAGE = exports.DEFAULT_INTRODUCTION = exports.DEFAULT_IDENTIFICATION_QUESTION = exports.DEFAULT_MATCHING_TEMPLATE = exports.DEFAULT_PRECISE_TEMPLATE = exports.UNRANKED = void 0;
exports.UNRANKED = 0;
exports.DEFAULT_PRECISE_TEMPLATE = "You've indicated that improving %criterion1% from %worst1% %unit1% to %best1% %unit1% is the most important (i.e. it has 100% importance). Now indicate the relative importance (in %) to this improvement of each other criterion's improvement using the sliders below.";
exports.DEFAULT_MATCHING_TEMPLATE = 'How much better should %criterion1% minimally become to justify the worsening of %criterion2%?';
exports.DEFAULT_IDENTIFICATION_QUESTION = 'Please enter your name or an indentifier for your response for this survey:';
exports.DEFAULT_INTRODUCTION = 'Please fill in this survey.';
exports.DEFAULT_FINISH_SURVEY_MESSAGE = 'Thank you for taking this survey! Your response has been recorded. You can now safely close the window.';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nU2xpZGVyL0ltcHJlY2lzZVN3aW5nU2xpZGVyLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ0J1dHRvbnMvTWF0Y2hpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdFbGljaXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nU2V0SW1wb3J0YW5jZS9NYXRjaGluZ1NldEltcG9ydGFuY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ1NldEltcG9ydGFuY2UvTWF0Y2hpbmdTbGlkZXIvTWF0Y2hpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1NsaWRlci9QcmVjaXNlU3dpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nV2VpZ2h0aW5nLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWZlcmVuY2VFbGljaXRhdGlvbi9QcmVmZXJlbmNlRWxpY2l0YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdCdXR0b25zL1JhbmtpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nQ2hvaWNlcy9SYW5raW5nQ2hvaWNlcy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0VsaWNpdGF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nU2l0dWF0aW9uL1JhbmtpbmdTaXR1YXRpb24udHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdCdXR0b25zL1N3aW5nQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1NldFdlaWdodHMvT3ZlcnZpZXdUYWJsZS9Dcml0ZXJpb25PdmVydmlldy9Dcml0ZXJpb25PdmVydmlldy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1NldFdlaWdodHMvT3ZlcnZpZXdUYWJsZS9PdmVydmlld1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nU2V0V2VpZ2h0cy9Td2luZ1NldFdlaWdodHMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCIsXCJyb290XCI6XCJfXCJ9Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi93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Q0FDUixDQUFDO0FBQ0osQ0FBQztBQXhDRCxrQ0F3Q0M7Ozs7Ozs7Ozs7Ozs7O0FDOUNZLGdCQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRWIsZ0NBQXdCLEdBQ25DLDJRQUEyUSxDQUFDO0FBRWpRLGlDQUF5QixHQUNwQyxnR0FBZ0csQ0FBQztBQUV0Rix1Q0FBK0IsR0FDMUMsNkVBQTZFLENBQUM7QUFFbkUsNEJBQW9CLEdBQUcsNkJBQTZCLENBQUM7QUFFckQscUNBQTZCLEdBQ3hDLHlHQUF5RyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q1RyxtTEFBa0Y7QUFFMUUsZ0NBRkQsK0JBQXFCLENBRUM7Ozs7Ozs7Ozs7O0FDRjdCLCtEOzs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAbWF0ZXJpYWwtdWkvY29yZVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIsIFwicmVhY3RcIiwgXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImxvZGFzaFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZVwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCJdLCByb290W1wicmVhY3RcIl0sIHJvb3RbXCJfXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9CdXR0b25fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9CdXR0b25Hcm91cF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0dyaWRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9QYXBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1JhZGlvX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9Hcm91cF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1NsaWRlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVCb2R5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVDZWxsX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVIZWFkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVSb3dfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9Ub29sdGlwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVHlwb2dyYXBoeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbG9kYXNoX18pIHtcbnJldHVybiAiLCJpbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2V9IGZyb20gJ3NyYy9FbGljaXRhdGlvblV0aWwvRWxpY2l0YXRpb25VdGlsJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQge2dldEJlc3QsIGdldFdvcnN0fSBmcm9tICcuLi9FbGljaXRhdGlvblV0aWwvRWxpY2l0YXRpb25VdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uQ2hvaWNlKHtjcml0ZXJpb259OiB7Y3JpdGVyaW9uOiBJQ3JpdGVyaW9ufSkge1xuICBjb25zdCB7cHZmcywgc2hvd1BlcmNlbnRhZ2VzfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgcHZmID0gcHZmc1tjcml0ZXJpb24uaWRdO1xuICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgaWQ9e2ByYW5raW5nLWNob2ljZS0ke2NyaXRlcmlvbi5pZH1gfT5cbiAgICAgIDxSYWRpbyB2YWx1ZT17Y3JpdGVyaW9uLmlkfSAvPlxuICAgICAge2Ake3B2Zi5kaXJlY3Rpb259IGB9XG4gICAgICA8VG9vbHRpcFxuICAgICAgICBkaXNhYmxlSG92ZXJMaXN0ZW5lcj17IWNyaXRlcmlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgdGl0bGU9e2NyaXRlcmlvbi5kZXNjcmlwdGlvbiA/IGNyaXRlcmlvbi5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGlkPXtgY3JpdGVyaW9uLW9wdGlvbi0ke2NyaXRlcmlvbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyaXRlcmlvbi10aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7Y3JpdGVyaW9uLnRpdGxlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgICB7YCBmcm9tICR7Z2V0V29yc3QocHZmLCB1c2VQZXJjZW50YWdlKX0gdG8gJHtnZXRCZXN0KFxuICAgICAgICBwdmYsXG4gICAgICAgIHVzZVBlcmNlbnRhZ2VcbiAgICAgICl9YH1cbiAgICA8L2xhYmVsPlxuICApO1xufVxuIiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtnZXRVbml0TGFiZWx9IGZyb20gJ3NyYy9FbGljaXRhdGlvblV0aWwvRWxpY2l0YXRpb25VdGlsJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyaXRlcmlvblNpdHVhdGlvbih7XG4gIGNyaXRlcmlvbixcbiAgZGlzcGxheVZhbHVlXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbiAgZGlzcGxheVZhbHVlOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHtzaG93UGVyY2VudGFnZXN9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAgPGxpIGlkPXtgc2l0dWF0aW9uLSR7Y3JpdGVyaW9uLmlkfWB9PlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHRpdGxlPXtjcml0ZXJpb24uZGVzY3JpcHRpb24gPyBjcml0ZXJpb24uZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBpZD17YHNpdHVhdGlvbi10aXRsZS0ke2NyaXRlcmlvbi5pZH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3JpdGVyaW9uLnRpdGxlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA6IDxzcGFuIGlkPXtgc2l0dWF0aW9uLXZhbHVlLSR7Y3JpdGVyaW9uLmlkfWB9PntkaXNwbGF5VmFsdWV9PC9zcGFuPnsnICd9XG4gICAgICAgIHtnZXRVbml0TGFiZWwoXG4gICAgICAgICAgY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LFxuICAgICAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgICAgICApfVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQge1xuICBhZGRSYW5raW5nLFxuICBidWlsZEluaXRpYWxJbXByZWNpc2VQcmVmZXJlbmNlcyxcbiAgYnVpbGRJbml0aWFsUHJlY2lzZVByZWZlcmVuY2VzXG59IGZyb20gJy4uL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnLi4vSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElFeGFjdFN3aW5nUmF0aW8gZnJvbSAnLi4vSW50ZXJmYWNlL0lFeGFjdFN3aW5nUmF0aW8nO1xuaW1wb3J0IElSYXRpb0JvdW5kQ29uc3RyYWludCBmcm9tICcuLi9JbnRlcmZhY2UvSVJhdGlvQm91bmRDb25zdHJhaW50JztcbmltcG9ydCB7VEVsaWNpdGF0aW9uTWV0aG9kfSBmcm9tICcuLi9UeXBlcy9URWxpY2l0YXRpb25NZXRob2QnO1xuaW1wb3J0IElFbGljaXRhdGlvbkNvbnRleHQgZnJvbSAnLi9JRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGNvbnN0IEVsaWNpdGF0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUVsaWNpdGF0aW9uQ29udGV4dD4oXG4gIHt9IGFzIElFbGljaXRhdGlvbkNvbnRleHRcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudCh7XG4gIGVsaWNpdGF0aW9uTWV0aG9kLFxuICBjcml0ZXJpYSxcbiAgc2hvd1BlcmNlbnRhZ2VzLFxuICBwdmZzLFxuICBjYW5jZWxDYWxsYmFjayxcbiAgc2F2ZUNhbGxiYWNrLFxuICBjaGlsZHJlblxufToge1xuICBlbGljaXRhdGlvbk1ldGhvZDogVEVsaWNpdGF0aW9uTWV0aG9kO1xuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdO1xuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW47XG4gIHB2ZnM6IFJlY29yZDxzdHJpbmcsIFRQdmY+O1xuICBjYW5jZWxDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgc2F2ZUNhbGxiYWNrOiAoXG4gICAgcHJlZmVyZW5jZXM6IElFeGFjdFN3aW5nUmF0aW9bXSB8IElSYXRpb0JvdW5kQ29uc3RyYWludFtdIHwgSVJhbmtpbmdbXVxuICApID0+IHZvaWQ7XG4gIGNoaWxkcmVuOiBhbnk7XG59KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaXNOZXh0RGlzYWJsZWQsIHNldElzTmV4dERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICBdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbcHJlZmVyZW5jZXMsIHNldFByZWZlcmVuY2VzXSA9IHVzZVN0YXRlPFxuICAgIFJlY29yZDxzdHJpbmcsIElFeGFjdFN3aW5nUmF0aW8+IHwgUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PlxuICA+KHt9KTtcbiAgY29uc3QgW3JhbmtpbmdzLCBzZXRSYW5raW5nc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4+KHt9KTtcblxuICBmdW5jdGlvbiBzZXRSYW5raW5nKGNyaXRlcmlvbklkOiBzdHJpbmcsIHJhbms6IG51bWJlcikge1xuICAgIGNvbnN0IHVwZGF0ZWRSYW5raW5ncyA9IGFkZFJhbmtpbmcocmFua2luZ3MsIGNyaXRlcmlvbklkLCByYW5rKTtcbiAgICBzZXRSYW5raW5ncyh1cGRhdGVkUmFua2luZ3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbkFuZFByZWZlcmVuY2VzKGNyaXRlcmlvbklkOiBzdHJpbmcpIHtcbiAgICBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdwcmVjaXNlJykge1xuICAgICAgc2V0UHJlZmVyZW5jZXMoYnVpbGRJbml0aWFsUHJlY2lzZVByZWZlcmVuY2VzKGNyaXRlcmlhLCBjcml0ZXJpb25JZCkpO1xuICAgIH0gZWxzZSBpZiAoZWxpY2l0YXRpb25NZXRob2QgPT09ICdpbXByZWNpc2UnKSB7XG4gICAgICBzZXRQcmVmZXJlbmNlcyhidWlsZEluaXRpYWxJbXByZWNpc2VQcmVmZXJlbmNlcyhjcml0ZXJpYSwgY3JpdGVyaW9uSWQpKTtcbiAgICB9XG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkKGNyaXRlcmlvbklkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByZWZlcmVuY2UoY3JpdGVyaW9uSWQ6IHN0cmluZywgYW5zd2VyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgdXBkYXRlZFByZWZlcmVuY2VzID0gXy5jbG9uZURlZXAocHJlZmVyZW5jZXMpO1xuICAgIGNvbnN0IHByZWZlcmVuY2U6IElFeGFjdFN3aW5nUmF0aW8gPSB7XG4gICAgICBlbGljaXRhdGlvbk1ldGhvZDogZWxpY2l0YXRpb25NZXRob2QsXG4gICAgICB0eXBlOiAnZXhhY3Qgc3dpbmcnLFxuICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbklkXSxcbiAgICAgIHJhdGlvOiAxMDAgLyBhbnN3ZXJcbiAgICB9O1xuICAgIHVwZGF0ZWRQcmVmZXJlbmNlc1tjcml0ZXJpb25JZF0gPSBwcmVmZXJlbmNlO1xuICAgIHNldFByZWZlcmVuY2VzKHVwZGF0ZWRQcmVmZXJlbmNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRCb3VuZFByZWZlcmVuY2UoXG4gICAgY3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgICBhbnN3ZXI6IFtudW1iZXIsIG51bWJlcl1cbiAgKTogdm9pZCB7XG4gICAgbGV0IHVwZGF0ZWRQcmVmZXJlbmNlcyA9IF8uY2xvbmVEZWVwKHByZWZlcmVuY2VzKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICBlbGljaXRhdGlvbk1ldGhvZDogJ2ltcHJlY2lzZScsXG4gICAgICB0eXBlOiAncmF0aW8gYm91bmQnLFxuICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbklkXSxcbiAgICAgIGJvdW5kczogWzEwMCAvIGFuc3dlclsxXSwgMTAwIC8gYW5zd2VyWzBdXVxuICAgIH07XG4gICAgdXBkYXRlZFByZWZlcmVuY2VzW2NyaXRlcmlvbklkXSA9IHByZWZlcmVuY2U7XG4gICAgc2V0UHJlZmVyZW5jZXModXBkYXRlZFByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENyaXRlcmlvbihpZDogc3RyaW5nKTogSUNyaXRlcmlvbiB7XG4gICAgcmV0dXJuIF8uZmluZChjcml0ZXJpYSwgWydpZCcsIGlkXSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbGljaXRhdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGN1cnJlbnRTdGVwLFxuICAgICAgICBpc05leHREaXNhYmxlZCxcbiAgICAgICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgICAgICBwcmVmZXJlbmNlcyxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2QsXG4gICAgICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICAgICAgcHZmcyxcbiAgICAgICAgY3JpdGVyaWEsXG4gICAgICAgIHJhbmtpbmdzLFxuICAgICAgICBnZXRDcml0ZXJpb24sXG4gICAgICAgIHNldEN1cnJlbnRTdGVwLFxuICAgICAgICBzZXRJc05leHREaXNhYmxlZCxcbiAgICAgICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkOiBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uQW5kUHJlZmVyZW5jZXMsXG4gICAgICAgIHNldFByZWZlcmVuY2UsXG4gICAgICAgIHNldEJvdW5kUHJlZmVyZW5jZSxcbiAgICAgICAgc2V0UHJlZmVyZW5jZXMsXG4gICAgICAgIGNhbmNlbENhbGxiYWNrLFxuICAgICAgICBzYXZlQ2FsbGJhY2ssXG4gICAgICAgIHNldFJhbmtpbmdcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWxpY2l0YXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIERFRkFVTFRfTUFUQ0hJTkdfVEVNUExBVEUsXG4gIERFRkFVTFRfUFJFQ0lTRV9URU1QTEFURSxcbiAgVU5SQU5LRURcbn0gZnJvbSAnc3JjL2NvbnN0YW50cyc7XG5pbXBvcnQgSVJhbmtpbmcgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZyc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5pbXBvcnQgSVVuaXRPZk1lYXN1cmVtZW50LCB7XG4gIFVuaXRPZk1lYXN1cmVtZW50VHlwZVxufSBmcm9tICdzcmMvSW50ZXJmYWNlL0lVbml0T2ZNZWFzdXJlbWVudCc7XG5pbXBvcnQge1RQdmZ9IGZyb20gJ3NyYy9JbnRlcmZhY2UvVFB2Zic7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICcuLi9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSUV4YWN0U3dpbmdSYXRpbyBmcm9tICcuLi9JbnRlcmZhY2UvSUV4YWN0U3dpbmdSYXRpbyc7XG5pbXBvcnQgSVJhdGlvQm91bmRDb25zdHJhaW50IGZyb20gJy4uL0ludGVyZmFjZS9JUmF0aW9Cb3VuZENvbnN0cmFpbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRJbml0aWFsUHJlY2lzZVByZWZlcmVuY2VzKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZ1xuKTogUmVjb3JkPHN0cmluZywgSUV4YWN0U3dpbmdSYXRpbz4ge1xuICByZXR1cm4gXyhjcml0ZXJpYSlcbiAgICAuZmlsdGVyKFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IGJvb2xlYW4gPT5cbiAgICAgICAgY3JpdGVyaW9uLmlkICE9PSBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRcbiAgICApXG4gICAgLm1hcCgoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogW3N0cmluZywgSUV4YWN0U3dpbmdSYXRpb10gPT4ge1xuICAgICAgY29uc3QgcHJlZmVyZW5jZTogSUV4YWN0U3dpbmdSYXRpbyA9IHtcbiAgICAgICAgY3JpdGVyaWE6IFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsIGNyaXRlcmlvbi5pZF0sXG4gICAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAncHJlY2lzZScsXG4gICAgICAgIHR5cGU6ICdleGFjdCBzd2luZycsXG4gICAgICAgIHJhdGlvOiAxXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFtjcml0ZXJpb24uaWQsIHByZWZlcmVuY2VdO1xuICAgIH0pXG4gICAgLmZyb21QYWlycygpXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxJbXByZWNpc2VQcmVmZXJlbmNlcyhcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXSxcbiAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkOiBzdHJpbmdcbik6IFJlY29yZDxzdHJpbmcsIElSYXRpb0JvdW5kQ29uc3RyYWludD4ge1xuICByZXR1cm4gXyhjcml0ZXJpYSlcbiAgICAucmVqZWN0KFsnaWQnLCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdKVxuICAgIC5tYXAoKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IFtzdHJpbmcsIElSYXRpb0JvdW5kQ29uc3RyYWludF0gPT4ge1xuICAgICAgY29uc3QgcHJlZmVyZW5jZTogSVJhdGlvQm91bmRDb25zdHJhaW50ID0ge1xuICAgICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uLmlkXSxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdpbXByZWNpc2UnLFxuICAgICAgICB0eXBlOiAncmF0aW8gYm91bmQnLFxuICAgICAgICBib3VuZHM6IFsxLCAxMDBdXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFtjcml0ZXJpb24uaWQsIHByZWZlcmVuY2VdO1xuICAgIH0pXG4gICAgLmZyb21QYWlycygpXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGU6IFVuaXRPZk1lYXN1cmVtZW50VHlwZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdW5pdFR5cGUgPT09ICdwZXJjZW50YWdlJyB8fCB1bml0VHlwZSA9PT0gJ2RlY2ltYWwnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmVzdChwdmY6IFRQdmYsIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW4pOiBudW1iZXIge1xuICBjb25zdCB2YWx1ZSA9IHNpZ25pZmljYW50RGlnaXRzKFxuICAgIGlzSW5jcmVhc2luZyhwdmYpID8gcHZmLnJhbmdlWzFdIDogcHZmLnJhbmdlWzBdXG4gICk7XG4gIHJldHVybiBnZXRQZXJjZW50aWZpZWRWYWx1ZSh2YWx1ZSwgdXNlUGVyY2VudGFnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JzdChwdmY6IFRQdmYsIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW4pOiBudW1iZXIge1xuICBjb25zdCB2YWx1ZSA9IHNpZ25pZmljYW50RGlnaXRzKFxuICAgIGlzSW5jcmVhc2luZyhwdmYpID8gcHZmLnJhbmdlWzBdIDogcHZmLnJhbmdlWzFdXG4gICk7XG4gIHJldHVybiBnZXRQZXJjZW50aWZpZWRWYWx1ZSh2YWx1ZSwgdXNlUGVyY2VudGFnZSk7XG59XG5cbmZ1bmN0aW9uIGlzSW5jcmVhc2luZyhwdmY6IFRQdmYpOiBib29sZWFuIHtcbiAgcmV0dXJuIHB2Zi5kaXJlY3Rpb24gPT09ICdpbmNyZWFzaW5nJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lnbmlmaWNhbnREaWdpdHMoeDogbnVtYmVyLCBwcmVjaXNpb24/OiBudW1iZXIpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsIHx8IGlzTmFOKHgpKSB7XG4gICAgdGhyb3cgJ2F0dGVtcHQgdG8gYXBwbHkgc2lnbmlmaWNhbnQgZGlnaXRzIHRvIG5vbi1udW1lcmljIHZhbHVlJztcbiAgfVxuICBpZiAocHJlY2lzaW9uICE9PSAwICYmICFwcmVjaXNpb24pIHtcbiAgICBwcmVjaXNpb24gPSAzO1xuICB9XG4gIGlmICh4ID09PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgaWYgKHggPiAxIHx8IHggPCAtMSkge1xuICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh4LnRvRml4ZWQocHJlY2lzaW9uKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHgudG9QcmVjaXNpb24ocHJlY2lzaW9uKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcmNlbnRpZmllZFZhbHVlKFxuICB2YWx1ZTogbnVtYmVyLFxuICB1c2VQZXJjZW50YWdlOiBib29sZWFuXG4pOiBudW1iZXIge1xuICBpZiAodXNlUGVyY2VudGFnZSkge1xuICAgIHJldHVybiBzaWduaWZpY2FudERpZ2l0cyhzaWduaWZpY2FudERpZ2l0cyh2YWx1ZSkgKiAxMDApOyAvLzIgc2lnZGl0cyB0byBlbnN1cmUgdGhlIHByZWNpc2lvbiBzdGF5cyB0aGUgc2FtZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBzaWduaWZpY2FudERpZ2l0cyh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXRMYWJlbChcbiAgdW5pdDogSVVuaXRPZk1lYXN1cmVtZW50LFxuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIGlmIChzaG93UGVyY2VudGFnZXMgJiYgdW5pdC50eXBlID09PSAnZGVjaW1hbCcpIHtcbiAgICByZXR1cm4gJyUnO1xuICB9IGVsc2UgaWYgKCFzaG93UGVyY2VudGFnZXMgJiYgdW5pdC50eXBlID09PSAncGVyY2VudGFnZScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuaXQubGFiZWw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN3aW5nU3RhdGVtZW50KFxuICBjcml0ZXJpb246IElDcml0ZXJpb24sXG4gIHB2ZjogVFB2ZixcbiAgc2hvd1BlcmNlbnRhZ2VzOiBib29sZWFuXG4pOiBzdHJpbmcge1xuICBjb25zdCB1bml0ID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50O1xuICBjb25zdCBsYWJlbCA9IGdldFVuaXRMYWJlbCh1bml0LCBzaG93UGVyY2VudGFnZXMpO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0LnR5cGUpO1xuICByZXR1cm4gREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFLnJlcGxhY2UoLyVjcml0ZXJpb24xJS9naSwgY3JpdGVyaW9uLnRpdGxlKVxuICAgIC5yZXBsYWNlKC8ldW5pdDElL2dpLCBsYWJlbClcbiAgICAucmVwbGFjZSgvJXdvcnN0MSUvZ2ksIFN0cmluZyhnZXRXb3JzdChwdmYsIHVzZVBlcmNlbnRhZ2UpKSlcbiAgICAucmVwbGFjZSgvJWJlc3QxJS9naSwgU3RyaW5nKGdldEJlc3QocHZmLCB1c2VQZXJjZW50YWdlKSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF0Y2hpbmdTdGF0ZW1lbnQoXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb246IElDcml0ZXJpb24sXG4gIGN1cnJlbnRDcml0ZXJpb246IElDcml0ZXJpb25cbik6IHN0cmluZyB7XG4gIHJldHVybiBERUZBVUxUX01BVENISU5HX1RFTVBMQVRFLnJlcGxhY2UoXG4gICAgLyVjcml0ZXJpb24xJS9naSxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLnRpdGxlXG4gICkucmVwbGFjZSgvJWNyaXRlcmlvbjIlL2dpLCBjdXJyZW50Q3JpdGVyaW9uLnRpdGxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZVN0ZXBTaXplKFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXTogW1xuICBudW1iZXIsXG4gIG51bWJlclxuXSk6IG51bWJlciB7XG4gIGNvbnN0IGludGVydmFsID0gdXBwZXJCb3VuZCAtIGxvd2VyQm91bmQ7XG4gIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChpbnRlcnZhbCkpO1xuICByZXR1cm4gTWF0aC5wb3coMTAsIG1hZ25pdHVkZSAtIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW1wb3J0YW5jZShcbiAgc2xpZGVyVmFsdWU6IG51bWJlcixcbiAge3JhbmdlOiBbbG93ZXJCb3VuZCwgdXBwZXJCb3VuZF0sIGRpcmVjdGlvbn06IFRQdmZcbik6IG51bWJlciB7XG4gIGNvbnN0IHJlYmFzZWQgPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2RlY3JlYXNpbmcnXG4gICAgICA/IHVwcGVyQm91bmQgLSBzbGlkZXJWYWx1ZVxuICAgICAgOiBzbGlkZXJWYWx1ZSAtIGxvd2VyQm91bmQ7XG4gIGNvbnN0IGltcG9ydGFuY2UgPSAocmViYXNlZCAvIE1hdGguYWJzKGxvd2VyQm91bmQgLSB1cHBlckJvdW5kKSkgKiAxMDA7XG4gIHJldHVybiBpbXBvcnRhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudENyaXRlcmlvbihcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXSxcbiAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkOiBzdHJpbmcsXG4gIGN1cnJlbnRTdGVwOiBudW1iZXJcbik6IElDcml0ZXJpb24ge1xuICByZXR1cm4gXy5yZWplY3QoY3JpdGVyaWEsIChjcml0ZXJpb246IElDcml0ZXJpb24pID0+IHtcbiAgICByZXR1cm4gY3JpdGVyaW9uLmlkID09PSBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ7XG4gIH0pW2N1cnJlbnRTdGVwIC0gMl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICByYW5rOiBudW1iZXJcbik6IHN0cmluZyB7XG4gIHJldHVybiBfLmZpbmQoXG4gICAgY3JpdGVyaWEsXG4gICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IGJvb2xlYW4gPT5cbiAgICAgIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gJiYgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSByYW5rXG4gICkuaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25NaXNzaW5nUmFua2luZ3MoXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgcmFuazogbnVtYmVyLFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdXG4pOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4ge1xuICBjb25zdCBpbnRlcm1lZGlhdGVSYW5raW5ncyA9IGFkZFJhbmtpbmcocmFua2luZ3MsIHNlbGVjdGVkQ3JpdGVyaW9uSWQsIHJhbmspO1xuICBjb25zdCBsYXN0Q3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRXaXRob3V0UmFua2luZyhcbiAgICBjcml0ZXJpYSxcbiAgICBpbnRlcm1lZGlhdGVSYW5raW5nc1xuICApO1xuICByZXR1cm4gYWRkUmFua2luZyhpbnRlcm1lZGlhdGVSYW5raW5ncywgbGFzdENyaXRlcmlvbklkLCByYW5rICsgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSYW5raW5nKFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+LFxuICBjcml0ZXJpb25JZDogc3RyaW5nLFxuICByYW5rOiBudW1iZXJcbik6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPiB7XG4gIGxldCB1cGRhdGVkUmFua2luZ3MgPSBfLmNsb25lRGVlcChyYW5raW5ncyk7XG4gIGNvbnN0IG5ld1Jhbmtpbmc6IElSYW5raW5nQW5zd2VyID0ge1xuICAgIGNyaXRlcmlvbklkOiBjcml0ZXJpb25JZCxcbiAgICByYW5rOiByYW5rXG4gIH07XG4gIHVwZGF0ZWRSYW5raW5nc1tjcml0ZXJpb25JZF0gPSBuZXdSYW5raW5nO1xuICByZXR1cm4gdXBkYXRlZFJhbmtpbmdzO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3JpdGVyaW9uSWRXaXRob3V0UmFua2luZyhcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXSxcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPlxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIF8uZmluZChcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgcmFua2luZ3NbY3JpdGVyaW9uLmlkXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICkuaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyhhbnN3ZXJzOiBJUmFua2luZ0Fuc3dlcltdKTogSVJhbmtpbmdbXSB7XG4gIGNvbnN0IHNvcnRlZEFuc3dlcnM6IElSYW5raW5nQW5zd2VyW10gPSBfLnNvcnRCeShhbnN3ZXJzLCAncmFuaycpO1xuICByZXR1cm4gXy5yZWR1Y2UoXG4gICAgc29ydGVkQW5zd2VycyxcbiAgICAoYWNjdW06IElSYW5raW5nW10sIGFuc3dlcjogSVJhbmtpbmdBbnN3ZXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSBhbnN3ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgICAgfVxuICAgICAgY29uc3QgcmFua2luZzogSVJhbmtpbmcgPSB7XG4gICAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAncmFua2luZycsXG4gICAgICAgIHR5cGU6ICdvcmRpbmFsJyxcbiAgICAgICAgY3JpdGVyaWE6IFthbnN3ZXIuY3JpdGVyaW9uSWQsIHNvcnRlZEFuc3dlcnNbaWR4ICsgMV0uY3JpdGVyaW9uSWRdXG4gICAgICB9O1xuICAgICAgYWNjdW0ucHVzaChyYW5raW5nKTtcbiAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzIGZyb20gJ3NyYy9FbGljaXRhdGlvblV0aWwvRWxpY2l0YXRpb25VdGlsJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltcHJlY2lzZVN3aW5nU2xpZGVyKHtcbiAgY3JpdGVyaW9uXG59OiB7XG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbjtcbn0pIHtcbiAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZTxbbnVtYmVyLCBudW1iZXJdPihbMSwgMTAwXSk7XG4gIGNvbnN0IHtzZXRCb3VuZFByZWZlcmVuY2UsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZH0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Qm91bmRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgc2xpZGVyVmFsdWUpO1xuICB9LCBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2xpZGVyQ2hhbmdlZChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PixcbiAgICBuZXdWYWx1ZTogW251bWJlciwgbnVtYmVyXVxuICApIHtcbiAgICBzZXRTbGlkZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgc2V0Qm91bmRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgbmV3VmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9zdEltcG9ydGFudENyaXRlcmlvbklkID09PSBjcml0ZXJpb24uaWRcbiAgICAgID8gJzEwMCUnXG4gICAgICA6IGAke3NpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlWzBdKX0gLSAke3NpZ25pZmljYW50RGlnaXRzKFxuICAgICAgICAgIHNsaWRlclZhbHVlWzFdXG4gICAgICAgICl9JWA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVuZGVyVmFsdWUoKX1cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBtaW49ezF9XG4gICAgICAgIG1heD17MTAwfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlZH1cbiAgICAgICAgc3RlcD17MX1cbiAgICAgICAgZGlzYWJsZWQ9e21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA9PT0gY3JpdGVyaW9uLmlkfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuLy8gaW1wb3J0IElubGluZUhlbHAgZnJvbSAnYXBwL3RzL0lubGluZUhlbHAvSW5saW5lSGVscCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IE1vc3RJbXBvcnRhbnRDaG9pY2UgZnJvbSAnLi4vTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlJztcbmltcG9ydCBTd2luZ0J1dHRvbnMgZnJvbSAnLi4vU3dpbmdCdXR0b25zL1N3aW5nQnV0dG9ucyc7XG5pbXBvcnQgU3dpbmdTZXRXZWlnaHRzIGZyb20gJy4uL1N3aW5nU2V0V2VpZ2h0cy9Td2luZ1NldFdlaWdodHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXByZWNpc2VTd2luZ1dlaWdodGluZygpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInN3aW5nLXdlaWdodGluZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICBJbXByZWNpc2Ugc3dpbmcgd2VpZ2h0aW5neycgJ31cbiAgICAgICAgICB7Lyo8SW5saW5lSGVscCBoZWxwSWQ9XCJzd2luZy13ZWlnaHRpbmdcIiAvPiovfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMSA/IDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+IDogPFN3aW5nU2V0V2VpZ2h0cyAvPn1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8U3dpbmdCdXR0b25zIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgU3RlcCB7Y3VycmVudFN0ZXB9IG9mIDJcbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdCdXR0b25zKCkge1xuICBjb25zdCB7XG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgY3JpdGVyaWEsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuICAgIG1hdGNoaW5nTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2F2ZUJ1dHRvbmNsaWNrKCk6IHZvaWQge1xuICAgIHNhdmVDYWxsYmFjayhPYmplY3QudmFsdWVzKHByZWZlcmVuY2VzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaGluZ05leHQoKTogdm9pZCB7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGFzdFN0ZXAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwID09PSBfLnNpemUoY3JpdGVyaWEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNDbGljaygpOiB2b2lkIHtcbiAgICBzZXRJc05leHREaXNhYmxlZChmYWxzZSk7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpOiB2b2lkIHtcbiAgICBjYW5jZWxDYWxsYmFjaygpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBvbkNsaWNrPXtjYW5jZWx9XG4gICAgICA+XG4gICAgICAgIENhbmNlbFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwicHJldmlvdXMtYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNDbGlja31cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gMX1cbiAgICAgID5cbiAgICAgICAgUHJldmlvdXNcbiAgICAgIDwvQnV0dG9uPlxuICAgICAge2lzTGFzdFN0ZXAoKSA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwic2F2ZS1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVCdXR0b25jbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJuZXh0LWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dEJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuLy8gaW1wb3J0IElubGluZUhlbHAgZnJvbSAnYXBwL3RzL0lubGluZUhlbHAvSW5saW5lSGVscCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBNb3N0SW1wb3J0YW50Q2hvaWNlIGZyb20gJy4uL01vc3RJbXBvcnRhbnRDaG9pY2UvTW9zdEltcG9ydGFudENob2ljZSc7XG5pbXBvcnQgTWF0Y2hpbmdCdXR0b25zIGZyb20gJy4vTWF0Y2hpbmdCdXR0b25zL01hdGNoaW5nQnV0dG9ucyc7XG5pbXBvcnQgTWF0Y2hpbmdTZXRJbXBvcnRhbmNlIGZyb20gJy4vTWF0Y2hpbmdTZXRJbXBvcnRhbmNlL01hdGNoaW5nU2V0SW1wb3J0YW5jZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nRWxpY2l0YXRpb24oKSB7XG4gIGNvbnN0IHtjdXJyZW50U3RlcCwgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCB0b3RhbFN0ZXBzID0gXy5zaXplKGNyaXRlcmlhKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1hdGNoaW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIE1hdGNoaW5nIHsvKjxJbmxpbmVIZWxwIGhlbHBJZD1cIm1hdGNoaW5nXCIgLz4qL31cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgPyAoXG4gICAgICAgICAgPE1vc3RJbXBvcnRhbnRDaG9pY2UgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TWF0Y2hpbmdTZXRJbXBvcnRhbmNlIC8+XG4gICAgICAgICl9XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPE1hdGNoaW5nQnV0dG9ucyAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiB7dG90YWxTdGVwc31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZX0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IHtcbiAgZ2V0QmVzdCxcbiAgZ2V0Q3VycmVudENyaXRlcmlvbixcbiAgZ2V0TWF0Y2hpbmdTdGF0ZW1lbnQsXG4gIGdldFdvcnN0XG59IGZyb20gJy4uLy4uL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IE1hdGNoaW5nU2xpZGVyIGZyb20gJy4vTWF0Y2hpbmdTbGlkZXIvTWF0Y2hpbmdTbGlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ1NldEltcG9ydGFuY2UoKSB7XG4gIGNvbnN0IHtcbiAgICBwdmZzLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgY3VycmVudFN0ZXAsXG4gICAgZ2V0Q3JpdGVyaW9uLFxuICAgIGNyaXRlcmlhXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgbW9zdEltcG9ydGFudENyaXRlcmlvbiA9IGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpO1xuICBjb25zdCBtb3N0SW1wb3J0YW50VW5pdFR5cGUgPVxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcblxuICBjb25zdCBjdXJyZW50Q3JpdGVyaW9uID0gZ2V0Q3VycmVudENyaXRlcmlvbihcbiAgICBjcml0ZXJpYSxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgY3VycmVudFN0ZXBcbiAgKTtcbiAgY29uc3QgY3VycmVudFVuaXRUeXBlID1cbiAgICBjdXJyZW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHN0YXRlbWVudCA9IGdldE1hdGNoaW5nU3RhdGVtZW50KFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24sXG4gICAgY3VycmVudENyaXRlcmlvblxuICApO1xuXG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvbiA9XG4gICAgc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZShtb3N0SW1wb3J0YW50VW5pdFR5cGUpO1xuXG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2VzRm9yQ3VycmVudENyaXRlcmlvbiA9XG4gICAgc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZShjdXJyZW50VW5pdFR5cGUpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntgVHJhZGUtb2ZmIGJldHdlZW4gJHttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLnRpdGxlfSBhbmQgJHtjdXJyZW50Q3JpdGVyaW9uLnRpdGxlfWB9PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWRcbiAgICAgICAgaXRlbVxuICAgICAgICB4cz17MTJ9XG4gICAgICAgIGlkPVwibWF0Y2hpbmctc3RhdGVtZW50XCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN0YXRlbWVudH19XG4gICAgICAvPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Dcml0ZXJpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkFsdGVybmF0aXZlIEE8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkFsdGVybmF0aXZlIEI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57bW9zdEltcG9ydGFudENyaXRlcmlvbi50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtnZXRXb3JzdChcbiAgICAgICAgICAgICAgICAgIHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSxcbiAgICAgICAgICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzRm9yTW9zdEltcG9ydGFudENyaXRlcmlvblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgaWQ9XCJtYXRjaGluZy1jZWxsXCI+XG4gICAgICAgICAgICAgICAgPE1hdGNoaW5nU2xpZGVyIGN1cnJlbnRDcml0ZXJpb25JZD17Y3VycmVudENyaXRlcmlvbi5pZH0gLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntjdXJyZW50Q3JpdGVyaW9uLnRpdGxlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge2dldEJlc3QoXG4gICAgICAgICAgICAgICAgICBwdmZzW2N1cnJlbnRDcml0ZXJpb24uaWRdLFxuICAgICAgICAgICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7Z2V0V29yc3QoXG4gICAgICAgICAgICAgICAgICBwdmZzW2N1cnJlbnRDcml0ZXJpb24uaWRdLFxuICAgICAgICAgICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgc2lnbmlmaWNhbnREaWdpdHMsIHtcbiAgY2FsY3VsYXRlSW1wb3J0YW5jZSxcbiAgY2FuQmVQZXJjZW50YWdlLFxuICBkZXRlcm1pbmVTdGVwU2l6ZSxcbiAgZ2V0QmVzdCxcbiAgZ2V0V29yc3Rcbn0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ1NsaWRlcih7XG4gIGN1cnJlbnRDcml0ZXJpb25JZFxufToge1xuICBjdXJyZW50Q3JpdGVyaW9uSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBzZXRQcmVmZXJlbmNlLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBwdmZzLFxuICAgIGdldENyaXRlcmlvblxuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IG1vc3RJbXBvcnRhbnRDcml0ZXJpb24gPSBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKTtcbiAgY29uc3QgcHZmID0gcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdO1xuXG4gIGNvbnN0IHVuaXRUeXBlID0gbW9zdEltcG9ydGFudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG5cbiAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KFxuICAgIGdldEJlc3QocHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdLCB1c2VQZXJjZW50YWdlKVxuICApO1xuICBjb25zdCBbc3RlcFNpemUsIHNldFN0ZXBTaXplXSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlclZhbHVlID0gZ2V0QmVzdChwdmYsIGZhbHNlKTtcbiAgICBzZXRTbGlkZXJWYWx1ZShzbGlkZXJWYWx1ZSk7XG4gICAgc2V0UHJlZmVyZW5jZShjdXJyZW50Q3JpdGVyaW9uSWQsIGNhbGN1bGF0ZUltcG9ydGFuY2Uoc2xpZGVyVmFsdWUsIHB2ZikpO1xuICB9LCBbY3VycmVudFN0ZXBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0ZXBTaXplKGRldGVybWluZVN0ZXBTaXplKHB2Zi5yYW5nZSkpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2xpZGVyQ2hhbmdlZChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PixcbiAgICBuZXdWYWx1ZTogbnVtYmVyXG4gICkge1xuICAgIHNldFNsaWRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRJc05leHREaXNhYmxlZChcbiAgICAgIHNpZ25pZmljYW50RGlnaXRzKG5ld1ZhbHVlKSA9PT1cbiAgICAgICAgZ2V0V29yc3QocHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmlkXSwgZmFsc2UpXG4gICAgKTtcbiAgICBzZXRQcmVmZXJlbmNlKGN1cnJlbnRDcml0ZXJpb25JZCwgY2FsY3VsYXRlSW1wb3J0YW5jZShuZXdWYWx1ZSwgcHZmKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHVzZVBlcmNlbnRhZ2VcbiAgICAgID8gc2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWUgKiAxMDApXG4gICAgICA6IHNpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkaXNwbGF5VmFsdWUoKX1cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgaWQ9XCJtYXRjaGluZy1zbGlkZXJcIlxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17cHZmLnJhbmdlWzBdfVxuICAgICAgICBtYXg9e3B2Zi5yYW5nZVsxXX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZWR9XG4gICAgICAgIHN0ZXA9e3N0ZXBTaXplfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDaGFuZ2VFdmVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlLCBnZXRXb3JzdH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBDcml0ZXJpb25DaG9pY2UgZnJvbSAnLi4vQ3JpdGVyaW9uQ2hvaWNlL0NyaXRlcmlvbkNob2ljZSc7XG5pbXBvcnQgQ3JpdGVyaW9uU2l0dWF0aW9uIGZyb20gJy4uL0NyaXRlcmlvblNpdHVhdGlvbi9Dcml0ZXJpb25TaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3N0SW1wb3J0YW50Q2hvaWNlKCkge1xuICBjb25zdCB7XG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBzZXRJc05leHREaXNhYmxlZCxcbiAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgcHZmcyxcbiAgICBjcml0ZXJpYVxuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRJc05leHREaXNhYmxlZChmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgdW5pdFR5cGUgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgICAgICAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDcml0ZXJpb25TaXR1YXRpb25cbiAgICAgICAgICAgIGtleT17Y3JpdGVyaW9uLmlkfVxuICAgICAgICAgICAgY3JpdGVyaW9uPXtjcml0ZXJpb259XG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU9e2dldFdvcnN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uQ2hvaWNlcygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiAoXG4gICAgICAgIDxDcml0ZXJpb25DaG9pY2Uga2V5PXtjcml0ZXJpb24uaWR9IGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPlxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5HaXZlbiB0aGUgZm9sbG93aW5nIHNpdHVhdGlvbjo8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtyZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCl9XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaW1wcm92ZW1lbnRzIGlzIG1vc3QgaW1wb3J0YW50P1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgbmFtZT1cIm1vc3QtaW1wb3J0YW50LWNyaXRlcmlvbi1yYWRpb1wiXG4gICAgICAgICAgdmFsdWU9e21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA/IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA6ICcnfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb259XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyQ3JpdGVyaW9uQ2hvaWNlcygpfVxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBzaWduaWZpY2FudERpZ2l0cyBmcm9tICdzcmMvRWxpY2l0YXRpb25VdGlsL0VsaWNpdGF0aW9uVXRpbCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmVjaXNlU3dpbmdTbGlkZXIoe1xuICBjcml0ZXJpb25cbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xufSkge1xuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPG51bWJlcj4oMTAwKTtcbiAgY29uc3Qge3NldFByZWZlcmVuY2UsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZH0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIHNsaWRlclZhbHVlKTtcbiAgfSwgW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaWRlckNoYW5nZWQoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sXG4gICAgbmV3VmFsdWU6IG51bWJlclxuICApIHtcbiAgICBzZXRTbGlkZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgc2V0UHJlZmVyZW5jZShjcml0ZXJpb24uaWQsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZSl9XG4gICAgICA8U2xpZGVyXG4gICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cbiAgICAgICAgbWluPXsxfVxuICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZWR9XG4gICAgICAgIHN0ZXA9ezF9XG4gICAgICAgIGRpc2FibGVkPXttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQgPT09IGNyaXRlcmlvbi5pZH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5Jztcbi8vIGltcG9ydCBJbmxpbmVIZWxwIGZyb20gJ2FwcC90cy9JbmxpbmVIZWxwL0lubGluZUhlbHAnOyAvL0ZJWE1FXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IE1vc3RJbXBvcnRhbnRDaG9pY2UgZnJvbSAnLi4vTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlJztcbmltcG9ydCBTd2luZ0J1dHRvbnMgZnJvbSAnLi4vU3dpbmdCdXR0b25zL1N3aW5nQnV0dG9ucyc7XG5pbXBvcnQgU3dpbmdTZXRXZWlnaHRzIGZyb20gJy4uL1N3aW5nU2V0V2VpZ2h0cy9Td2luZ1NldFdlaWdodHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmVjaXNlU3dpbmdXZWlnaHRpbmcoKSB7XG4gIGNvbnN0IHtjdXJyZW50U3RlcH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJzd2luZy13ZWlnaHRpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgUHJlY2lzZSBzd2luZyB3ZWlnaHRpbmcgey8qPElubGluZUhlbHAgaGVscElkPVwic3dpbmctd2VpZ2h0aW5nXCIgLz4qL31cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgPyA8TW9zdEltcG9ydGFudENob2ljZSAvPiA6IDxTd2luZ1NldFdlaWdodHMgLz59XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPFN3aW5nQnV0dG9ucyAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17M30gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPEdyaWQgaXRlbSBpZD1cInN0ZXAtY291bnRlclwiPlxuICAgICAgICAgIFN0ZXAge2N1cnJlbnRTdGVwfSBvZiAyXG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQge0JveCwgR3JpZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbXByZWNpc2VTd2luZ1dlaWdodGluZyBmcm9tICdzcmMvSW1wcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9JbXByZWNpc2VTd2luZ1dlaWdodGluZyc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IElFeGFjdFN3aW5nUmF0aW8gZnJvbSAnc3JjL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmF0aW9Cb3VuZENvbnN0cmFpbnQnO1xuaW1wb3J0IHtUUHZmfSBmcm9tICdzcmMvSW50ZXJmYWNlL1RQdmYnO1xuaW1wb3J0IE1hdGNoaW5nRWxpY2l0YXRpb24gZnJvbSAnc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdFbGljaXRhdGlvbic7XG5pbXBvcnQgUHJlY2lzZVN3aW5nV2VpZ2h0aW5nIGZyb20gJ3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdXZWlnaHRpbmcnO1xuaW1wb3J0IFJhbmtpbmdFbGljaXRhdGlvbiBmcm9tICdzcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdFbGljaXRhdGlvbic7XG5pbXBvcnQge1RFbGljaXRhdGlvbk1ldGhvZH0gZnJvbSAnc3JjL1R5cGVzL1RFbGljaXRhdGlvbk1ldGhvZCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50fSBmcm9tICcuLi9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlZmVyZW5jZUVsaWNpdGF0aW9uKHtcbiAgZWxpY2l0YXRpb25NZXRob2QsXG4gIGNyaXRlcmlhLFxuICBzaG93UGVyY2VudGFnZXMsXG4gIHB2ZnMsXG4gIGNhbmNlbENhbGxiYWNrLFxuICBzYXZlQ2FsbGJhY2tcbn06IHtcbiAgZWxpY2l0YXRpb25NZXRob2Q6IFRFbGljaXRhdGlvbk1ldGhvZDtcbiAgY3JpdGVyaWE6IElDcml0ZXJpb25bXTtcbiAgc2hvd1BlcmNlbnRhZ2VzOiBib29sZWFuO1xuICBwdmZzOiBSZWNvcmQ8c3RyaW5nLCBUUHZmPjtcbiAgY2FuY2VsQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gIHNhdmVDYWxsYmFjazogKFxuICAgIHByZWZlcmVuY2VzOiBJRXhhY3RTd2luZ1JhdGlvW10gfCBJUmF0aW9Cb3VuZENvbnN0cmFpbnRbXSB8IElSYW5raW5nW11cbiAgKSA9PiB2b2lkO1xufSk6IEpTWC5FbGVtZW50IHtcbiAgZnVuY3Rpb24gcmVuZGVyRWxpY2l0YXRpb24oXG4gICAgZWxpY2l0YXRpb25NZXRob2Q6IFRFbGljaXRhdGlvbk1ldGhvZFxuICApOiBKU1guRWxlbWVudCB7XG4gICAgc3dpdGNoIChlbGljaXRhdGlvbk1ldGhvZCkge1xuICAgICAgY2FzZSAncHJlY2lzZSc6XG4gICAgICAgIHJldHVybiA8UHJlY2lzZVN3aW5nV2VpZ2h0aW5nIC8+O1xuICAgICAgY2FzZSAnaW1wcmVjaXNlJzpcbiAgICAgICAgcmV0dXJuIDxJbXByZWNpc2VTd2luZ1dlaWdodGluZyAvPjtcbiAgICAgIGNhc2UgJ21hdGNoaW5nJzpcbiAgICAgICAgcmV0dXJuIDxNYXRjaGluZ0VsaWNpdGF0aW9uIC8+O1xuICAgICAgY2FzZSAncmFua2luZyc6XG4gICAgICAgIHJldHVybiA8UmFua2luZ0VsaWNpdGF0aW9uIC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50XG4gICAgICBjcml0ZXJpYT17Y3JpdGVyaWF9XG4gICAgICBlbGljaXRhdGlvbk1ldGhvZD17J3ByZWNpc2UnfVxuICAgICAgc2hvd1BlcmNlbnRhZ2VzPXtzaG93UGVyY2VudGFnZXN9XG4gICAgICBwdmZzPXtwdmZzfVxuICAgICAgY2FuY2VsQ2FsbGJhY2s9e2NhbmNlbENhbGxiYWNrfVxuICAgICAgc2F2ZUNhbGxiYWNrPXtzYXZlQ2FsbGJhY2t9XG4gICAgPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBjb21wb25lbnQ9e0JveH0gbXQ9ezJ9PlxuICAgICAgICB7cmVuZGVyRWxpY2l0YXRpb24oZWxpY2l0YXRpb25NZXRob2QpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvRWxpY2l0YXRpb25Db250ZXh0UHJvdmlkZXJDb21wb25lbnQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VU5SQU5LRUR9IGZyb20gJ3NyYy9jb25zdGFudHMnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCB7XG4gIGFzc2lnbk1pc3NpbmdSYW5raW5ncyxcbiAgYnVpbGRSYW5raW5nUHJlZmVyZW5jZXMsXG4gIGZpbmRDcml0ZXJpb25JZEZvclJhbmtcbn0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IElSYW5raW5nQW5zd2VyIGZyb20gJ3NyYy9JbnRlcmZhY2UvSVJhbmtpbmdBbnN3ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQnV0dG9ucyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWRcbn06IHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nO1xuICBzZXRTZWxlY3RlZENyaXRlcmlvbklkOiAoY3JpdGVyaW9uSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldFJhbmtpbmcsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgcmFua2luZ3MsXG4gICAgY3JpdGVyaWEsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIHNldFJhbmtpbmcoc2VsZWN0ZWRDcml0ZXJpb25JZCwgY3VycmVudFN0ZXApO1xuICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQoJycpO1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3QgZmluaXNoZWRSYW5raW5nczogUmVjb3JkPFxuICAgICAgc3RyaW5nLFxuICAgICAgSVJhbmtpbmdBbnN3ZXJcbiAgICA+ID0gYXNzaWduTWlzc2luZ1JhbmtpbmdzKFxuICAgICAgcmFua2luZ3MsXG4gICAgICBzZWxlY3RlZENyaXRlcmlvbklkLFxuICAgICAgY3VycmVudFN0ZXAsXG4gICAgICBjcml0ZXJpYVxuICAgICk7XG4gICAgY29uc3QgcHJlZmVyZW5jZXMgPSBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyhfLnRvQXJyYXkoZmluaXNoZWRSYW5raW5ncykpO1xuICAgIHNhdmVDYWxsYmFjayhwcmVmZXJlbmNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCkge1xuICAgIGlmIChjdXJyZW50U3RlcCAhPT0gMSkge1xuICAgICAgcmVtb3ZlUmFua0Zyb21Dcml0ZXJpb24oKTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZCgnJyk7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVJhbmtGcm9tQ3JpdGVyaW9uKCkge1xuICAgIGNvbnN0IGxvb2t1cFJhbmsgPSBjdXJyZW50U3RlcCAtIDE7XG4gICAgY29uc3QgY3JpdGVyaW9uSWQgPSBmaW5kQ3JpdGVyaW9uSWRGb3JSYW5rKGNyaXRlcmlhLCByYW5raW5ncywgbG9va3VwUmFuayk7XG4gICAgc2V0UmFua2luZyhjcml0ZXJpb25JZCwgVU5SQU5LRUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IF8uc2l6ZShjcml0ZXJpYSkgLSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgID5cbiAgICAgICAgQ2FuY2VsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJwcmV2aW91cy1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0NsaWNrfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1VOUkFOS0VEfSBmcm9tICdzcmMvY29uc3RhbnRzJztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IENyaXRlcmlvbkNob2ljZSBmcm9tICcuLi8uLi9Dcml0ZXJpb25DaG9pY2UvQ3JpdGVyaW9uQ2hvaWNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFua2luZ0Nob2ljZXMoe1xuICBzZWxlY3RlZENyaXRlcmlvbklkLFxuICBoYW5kbGVTZWxlY3Rpb25cbn06IHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nO1xuICBoYW5kbGVTZWxlY3Rpb246IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IHtyYW5raW5ncywgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCBmaWx0ZXJlZENyaXRlcmlhID0gXy5maWx0ZXIoXG4gICAgY3JpdGVyaWEsXG4gICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IGJvb2xlYW4gPT5cbiAgICAgICFyYW5raW5nc1tjcml0ZXJpb24uaWRdIHx8IHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0ucmFuayA9PT0gVU5SQU5LRURcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGltcHJvdmVtZW50cyBpcyBtb3N0IGltcG9ydGFudD9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgIG5hbWU9XCJyYW5raW5nLWNyaXRlcmlvbi1yYWRpb1wiXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm1hcChmaWx0ZXJlZENyaXRlcmlhLCAoY3JpdGVyaW9uKSA9PiAoXG4gICAgICAgICAgICA8Q3JpdGVyaW9uQ2hvaWNlIGtleT17Y3JpdGVyaW9uLmlkfSBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuLy8gaW1wb3J0IElubGluZUhlbHAgZnJvbSAnYXBwL3RzL0lubGluZUhlbHAvSW5saW5lSGVscCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IFJhbmtpbmdCdXR0b25zIGZyb20gJy4vUmFua2luZ0J1dHRvbnMvUmFua2luZ0J1dHRvbnMnO1xuaW1wb3J0IFJhbmtpbmdDaG9pY2VzIGZyb20gJy4vUmFua2luZ0Nob2ljZXMvUmFua2luZ0Nob2ljZXMnO1xuaW1wb3J0IFJhbmtpbmdTaXR1YXRpb24gZnJvbSAnLi9SYW5raW5nU2l0dWF0aW9uL1JhbmtpbmdTaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nRWxpY2l0YXRpb24oKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENyaXRlcmlvbklkLCBzZXRTZWxlY3RlZENyaXRlcmlvbklkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qge2N1cnJlbnRTdGVwLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBfLnNpemUoY3JpdGVyaWEpIC0gMTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24oZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXs0fSBzbT17MTJ9IG1kPXs5fSBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJyYW5raW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIFJhbmtpbmcgey8qPElubGluZUhlbHAgaGVscElkPVwicmFua2luZ1wiIC8+Ki99XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhbmtpbmdTaXR1YXRpb24gLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhbmtpbmdDaG9pY2VzXG4gICAgICAgICAgaGFuZGxlU2VsZWN0aW9uPXtoYW5kbGVTZWxlY3Rpb259XG4gICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpb25JZD17c2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8UmFua2luZ0J1dHRvbnNcbiAgICAgICAgICBzZWxlY3RlZENyaXRlcmlvbklkPXtzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAgIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQ9e3NldFNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgU3RlcCB7Y3VycmVudFN0ZXB9IG9mIHt0b3RhbFN0ZXBzfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1VOUkFOS0VEfSBmcm9tICdzcmMvY29uc3RhbnRzJztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge1xuICBjYW5CZVBlcmNlbnRhZ2UsXG4gIGdldEJlc3QsXG4gIGdldFdvcnN0XG59IGZyb20gJ3NyYy9FbGljaXRhdGlvblV0aWwvRWxpY2l0YXRpb25VdGlsJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgQ3JpdGVyaW9uU2l0dWF0aW9uIGZyb20gJy4uLy4uL0NyaXRlcmlvblNpdHVhdGlvbi9Dcml0ZXJpb25TaXR1YXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nU2l0dWF0aW9uKCkge1xuICBjb25zdCB7cmFua2luZ3MsIHNob3dQZXJjZW50YWdlcywgcHZmcywgY3JpdGVyaWF9ID0gdXNlQ29udGV4dChcbiAgICBFbGljaXRhdGlvbkNvbnRleHRcbiAgKTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZVRvRGlzcGxheShjcml0ZXJpb246IElDcml0ZXJpb24pIHtcbiAgICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICAgIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcbiAgICByZXR1cm4gIXJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gfHwgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICAgICAgPyBnZXRXb3JzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpXG4gICAgICA6IGdldEJlc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uU2l0dWF0aW9uXG4gICAgICAgICAga2V5PXtjcml0ZXJpb24uaWR9XG4gICAgICAgICAgY3JpdGVyaW9uPXtjcml0ZXJpb259XG4gICAgICAgICAgZGlzcGxheVZhbHVlPXtnZXRWYWx1ZVRvRGlzcGxheShjcml0ZXJpb24pfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5HaXZlbiB0aGUgZm9sbG93aW5nIHNpdHVhdGlvbjo8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtyZW5kZXJDcml0ZXJpb25TaXR1YXRpb25zKCl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aW5nQnV0dG9ucygpIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTdGVwLFxuICAgIHNldEN1cnJlbnRTdGVwLFxuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIHByZWZlcmVuY2VzLFxuICAgIGNhbmNlbENhbGxiYWNrLFxuICAgIHNhdmVDYWxsYmFja1xuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpIHtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNDbGljaygpIHtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlQnV0dG9uQ2xpY2soKSB7XG4gICAgc2F2ZUNhbGxiYWNrKE9iamVjdC52YWx1ZXMocHJlZmVyZW5jZXMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGFzdFN0ZXAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwID09PSAyO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBvbkNsaWNrPXtjYW5jZWx9XG4gICAgICA+XG4gICAgICAgIENhbmNlbFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwicHJldmlvdXMtYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNDbGlja31cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gMX1cbiAgICAgID5cbiAgICAgICAgUHJldmlvdXNcbiAgICAgIDwvQnV0dG9uPlxuICAgICAge2lzTGFzdFN0ZXAoKSA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwic2F2ZS1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJuZXh0LWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dEJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgKTtcbn1cbiIsImltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge1xuICBjYW5CZVBlcmNlbnRhZ2UsXG4gIGdldEJlc3QsXG4gIGdldFVuaXRMYWJlbCxcbiAgZ2V0V29yc3Rcbn0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IEltcHJlY2lzZVN3aW5nU2xpZGVyIGZyb20gJ3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nU2xpZGVyL0ltcHJlY2lzZVN3aW5nU2xpZGVyJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgUHJlY2lzZVN3aW5nU2xpZGVyIGZyb20gJ3NyYy9QcmVjaXNlU3dpbmdFbGljaXRhdGlvbi9QcmVjaXNlU3dpbmdTbGlkZXIvUHJlY2lzZVN3aW5nU2xpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uT3ZlcnZpZXcoe1xuICBjcml0ZXJpb25cbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xufSkge1xuICBjb25zdCB7cHZmcywgc2hvd1BlcmNlbnRhZ2VzLCBlbGljaXRhdGlvbk1ldGhvZH0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyU3dpbmdTbGlkZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ3ByZWNpc2UnKSB7XG4gICAgICByZXR1cm4gPFByZWNpc2VTd2luZ1NsaWRlciBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz47XG4gICAgfSBlbHNlIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ2ltcHJlY2lzZScpIHtcbiAgICAgIHJldHVybiA8SW1wcmVjaXNlU3dpbmdTbGlkZXIgY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlUm93IGtleT17Y3JpdGVyaW9uLmlkfT5cbiAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgdGl0bGU9e2NyaXRlcmlvbi5kZXNjcmlwdGlvbiA/IGNyaXRlcmlvbi5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCI+e2NyaXRlcmlvbi50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAge2dldFVuaXRMYWJlbChcbiAgICAgICAgICBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQsXG4gICAgICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgICAgICl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAge2dldFdvcnN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSl9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAge2dldEJlc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKX1cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyZW5kZXJTd2luZ1NsaWRlcigpfTwvVGFibGVDZWxsPlxuICAgIDwvVGFibGVSb3c+XG4gICk7XG59XG4iLCJpbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBDcml0ZXJpb25PdmVydmlldyBmcm9tICcuL0NyaXRlcmlvbk92ZXJ2aWV3L0NyaXRlcmlvbk92ZXJ2aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3ZlcnZpZXdUYWJsZSgpIHtcbiAgY29uc3Qge2NyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiByZW5kZXJDcml0ZXJpb25PdmVydmlld3MoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4gKFxuICAgICAgICA8Q3JpdGVyaW9uT3ZlcnZpZXcga2V5PXtjcml0ZXJpb24uaWR9IGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPlxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cbiAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVDZWxsPkNyaXRlcmlvbjwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGw+VW5pdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5Xb3JzdDwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5CZXN0PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkltcG9ydGFuY2U8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgPFRhYmxlQm9keT57cmVuZGVyQ3JpdGVyaW9uT3ZlcnZpZXdzKCl9PC9UYWJsZUJvZHk+XG4gICAgPC9UYWJsZT5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCB7Z2V0U3dpbmdTdGF0ZW1lbnR9IGZyb20gJ3NyYy9FbGljaXRhdGlvblV0aWwvRWxpY2l0YXRpb25VdGlsJztcbmltcG9ydCBPdmVydmlld1RhYmxlIGZyb20gJy4vT3ZlcnZpZXdUYWJsZS9PdmVydmlld1RhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpbmdTZXRXZWlnaHRzKCkge1xuICBjb25zdCB7XG4gICAgcHZmcyxcbiAgICBzaG93UGVyY2VudGFnZXMsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIGVsaWNpdGF0aW9uTWV0aG9kLFxuICAgIGdldENyaXRlcmlvblxuICB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IFtzdGF0ZW1lbnQsIHNldFN0YXRlbWVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFxuICAgIGdldFN3aW5nU3RhdGVtZW50KFxuICAgICAgZ2V0Q3JpdGVyaW9uKG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCksXG4gICAgICBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sXG4gICAgICBzaG93UGVyY2VudGFnZXNcbiAgICApXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGF0ZW1lbnQoXG4gICAgICBnZXRTd2luZ1N0YXRlbWVudChcbiAgICAgICAgZ2V0Q3JpdGVyaW9uKG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCksXG4gICAgICAgIHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSxcbiAgICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgICApXG4gICAgKTtcbiAgfSwgW3Nob3dQZXJjZW50YWdlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZFxuICAgICAgICBpdGVtXG4gICAgICAgIHhzPXsxMn1cbiAgICAgICAgaWQ9e2Ake2VsaWNpdGF0aW9uTWV0aG9kfS1zd2luZy1zdGF0ZW1lbnRgfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc3RhdGVtZW50fX1cbiAgICAgIC8+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxPdmVydmlld1RhYmxlIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiZXhwb3J0IGNvbnN0IFVOUkFOS0VEID0gMDtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJFQ0lTRV9URU1QTEFURSA9XG4gIFwiWW91J3ZlIGluZGljYXRlZCB0aGF0IGltcHJvdmluZyAlY3JpdGVyaW9uMSUgZnJvbSAld29yc3QxJSAldW5pdDElIHRvICViZXN0MSUgJXVuaXQxJSBpcyB0aGUgbW9zdCBpbXBvcnRhbnQgKGkuZS4gaXQgaGFzIDEwMCUgaW1wb3J0YW5jZSkuIE5vdyBpbmRpY2F0ZSB0aGUgcmVsYXRpdmUgaW1wb3J0YW5jZSAoaW4gJSkgdG8gdGhpcyBpbXByb3ZlbWVudCBvZiBlYWNoIG90aGVyIGNyaXRlcmlvbidzIGltcHJvdmVtZW50IHVzaW5nIHRoZSBzbGlkZXJzIGJlbG93LlwiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVRDSElOR19URU1QTEFURSA9XG4gICdIb3cgbXVjaCBiZXR0ZXIgc2hvdWxkICVjcml0ZXJpb24xJSBtaW5pbWFsbHkgYmVjb21lIHRvIGp1c3RpZnkgdGhlIHdvcnNlbmluZyBvZiAlY3JpdGVyaW9uMiU/JztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSURFTlRJRklDQVRJT05fUVVFU1RJT04gPVxuICAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZSBvciBhbiBpbmRlbnRpZmllciBmb3IgeW91ciByZXNwb25zZSBmb3IgdGhpcyBzdXJ2ZXk6JztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5UUk9EVUNUSU9OID0gJ1BsZWFzZSBmaWxsIGluIHRoaXMgc3VydmV5Lic7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZJTklTSF9TVVJWRVlfTUVTU0FHRSA9XG4gICdUaGFuayB5b3UgZm9yIHRha2luZyB0aGlzIHN1cnZleSEgWW91ciByZXNwb25zZSBoYXMgYmVlbiByZWNvcmRlZC4gWW91IGNhbiBub3cgc2FmZWx5IGNsb3NlIHRoZSB3aW5kb3cuJztcbiIsImltcG9ydCBQcmVmZXJlbmNlRWxpY2l0YXRpb24gZnJvbSAnLi9QcmVmZXJlbmNlRWxpY2l0YXRpb24vUHJlZmVyZW5jZUVsaWNpdGF0aW9uJztcblxuZXhwb3J0IHtQcmVmZXJlbmNlRWxpY2l0YXRpb259O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9CdXR0b25Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9HcmlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BhcGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1JhZGlvX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1JhZGlvR3JvdXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfU2xpZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQm9keV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUNlbGxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVIZWFkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlUm93X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1Rvb2x0aXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVHlwb2dyYXBoeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sb2Rhc2hfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==