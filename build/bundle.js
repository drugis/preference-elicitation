(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["@material-ui/core/Button", "@material-ui/core/ButtonGroup", "@material-ui/core/Grid", "@material-ui/core/Paper", "@material-ui/core/Radio", "@material-ui/core/RadioGroup", "@material-ui/core/Slider", "@material-ui/core/Table", "@material-ui/core/TableBody", "@material-ui/core/TableCell", "@material-ui/core/TableHead", "@material-ui/core/TableRow", "@material-ui/core/Tooltip", "@material-ui/core/Typography", "react", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@material-ui/core/Button"), require("@material-ui/core/ButtonGroup"), require("@material-ui/core/Grid"), require("@material-ui/core/Paper"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableHead"), require("@material-ui/core/TableRow"), require("@material-ui/core/Tooltip"), require("@material-ui/core/Typography"), require("react"), require("lodash")) : factory(root["@material-ui/core/Button"], root["@material-ui/core/ButtonGroup"], root["@material-ui/core/Grid"], root["@material-ui/core/Paper"], root["@material-ui/core/Radio"], root["@material-ui/core/RadioGroup"], root["@material-ui/core/Slider"], root["@material-ui/core/Table"], root["@material-ui/core/TableBody"], root["@material-ui/core/TableCell"], root["@material-ui/core/TableHead"], root["@material-ui/core/TableRow"], root["@material-ui/core/Tooltip"], root["@material-ui/core/Typography"], root["react"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ButtonGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Table__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableBody__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableCell__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableHead__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TableRow__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tooltip__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
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
exports.RankingElicitation = exports.MatchingElicitation = exports.ImpreciseSwingWeighting = exports.PreciseSwingWeighting = exports.ElicitationContextProviderComponent = void 0;
const ElicitationContext_1 = __webpack_require__(/*! ./ElicitationContext/ElicitationContext */ "./src/ElicitationContext/ElicitationContext.tsx");
Object.defineProperty(exports, "ElicitationContextProviderComponent", ({ enumerable: true, get: function () { return ElicitationContext_1.ElicitationContextProviderComponent; } }));
const ImpreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! ./ImpreciseSwingElicitation/ImpreciseSwingWeighting */ "./src/ImpreciseSwingElicitation/ImpreciseSwingWeighting.tsx"));
exports.ImpreciseSwingWeighting = ImpreciseSwingWeighting_1.default;
const MatchingElicitation_1 = __importDefault(__webpack_require__(/*! ./MatchingElicitation/MatchingElicitation */ "./src/MatchingElicitation/MatchingElicitation.tsx"));
exports.MatchingElicitation = MatchingElicitation_1.default;
const PreciseSwingWeighting_1 = __importDefault(__webpack_require__(/*! ./PreciseSwingElicitation/PreciseSwingWeighting */ "./src/PreciseSwingElicitation/PreciseSwingWeighting.tsx"));
exports.PreciseSwingWeighting = PreciseSwingWeighting_1.default;
const RankingElicitation_1 = __importDefault(__webpack_require__(/*! ./RankingElicitation/RankingElicitation */ "./src/RankingElicitation/RankingElicitation.tsx"));
exports.RankingElicitation = RankingElicitation_1.default;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwudHMiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9JbXByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL0ltcHJlY2lzZVN3aW5nU2xpZGVyL0ltcHJlY2lzZVN3aW5nU2xpZGVyLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ0J1dHRvbnMvTWF0Y2hpbmdCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL01hdGNoaW5nRWxpY2l0YXRpb24vTWF0Y2hpbmdFbGljaXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nU2V0SW1wb3J0YW5jZS9NYXRjaGluZ1NldEltcG9ydGFuY2UudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTWF0Y2hpbmdFbGljaXRhdGlvbi9NYXRjaGluZ1NldEltcG9ydGFuY2UvTWF0Y2hpbmdTbGlkZXIvTWF0Y2hpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1NsaWRlci9QcmVjaXNlU3dpbmdTbGlkZXIudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vUHJlY2lzZVN3aW5nV2VpZ2h0aW5nLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1JhbmtpbmdFbGljaXRhdGlvbi9SYW5raW5nQnV0dG9ucy9SYW5raW5nQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ0Nob2ljZXMvUmFua2luZ0Nob2ljZXMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdFbGljaXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9SYW5raW5nRWxpY2l0YXRpb24vUmFua2luZ1NpdHVhdGlvbi9SYW5raW5nU2l0dWF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL1N3aW5nQnV0dG9ucy9Td2luZ0J1dHRvbnMudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL092ZXJ2aWV3VGFibGUvQ3JpdGVyaW9uT3ZlcnZpZXcvQ3JpdGVyaW9uT3ZlcnZpZXcudHN4Iiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vLi9zcmMvU3dpbmdTZXRXZWlnaHRzL092ZXJ2aWV3VGFibGUvT3ZlcnZpZXdUYWJsZS50c3giLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi8uL3NyYy9Td2luZ1NldFdlaWdodHMvU3dpbmdTZXRXZWlnaHRzLnRzeCIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIiLCJ3ZWJwYWNrOi8vcHJlZmVyZW5jZS1lbGljaXRhdGlvbi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwiLFwicm9vdFwiOlwiX1wifSIsIndlYnBhY2s6Ly9wcmVmZXJlbmNlLWVsaWNpdGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByZWZlcmVuY2UtZWxpY2l0YXRpb24vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsK0dBQTRDO0FBQzVDLHFI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Ozs7OztBQzlDWSxnQkFBUSxHQUFHLENBQUMsQ0FBQztBQUViLGdDQUF3QixHQUNuQywyUUFBMlEsQ0FBQztBQUVqUSxpQ0FBeUIsR0FDcEMsZ0dBQWdHLENBQUM7QUFFdEYsdUNBQStCLEdBQzFDLDZFQUE2RSxDQUFDO0FBRW5FLDRCQUFvQixHQUFHLDZCQUE2QixDQUFDO0FBRXJELHFDQUE2QixHQUN4Qyx5R0FBeUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkNUcsbUpBQTRGO0FBTzFGLHFIQVBNLHdEQUFtQyxRQU9OO0FBTnJDLGlNQUEwRjtBQVF4RixrQ0FSSyxpQ0FBdUIsQ0FRTDtBQVB6Qix5S0FBNEU7QUFRMUUsOEJBUkssNkJBQW1CLENBUUw7QUFQckIsdUxBQW9GO0FBS2xGLGdDQUxLLCtCQUFxQixDQUtMO0FBSnZCLG9LQUF5RTtBQU92RSw2QkFQSyw0QkFBa0IsQ0FPTDs7Ozs7Ozs7Ozs7QUNYcEIsc0U7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiwgXCJyZWFjdFwiLCBcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImxvZGFzaFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXSwgcm9vdFtcInJlYWN0XCJdLCByb290W1wiX1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbkdyb3VwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfR3JpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BhcGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9SYWRpb0dyb3VwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfU2xpZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUJvZHlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUNlbGxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZVJvd19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1Rvb2x0aXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sb2Rhc2hfXykge1xucmV0dXJuICIsImltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge2NhbkJlUGVyY2VudGFnZX0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCB7Z2V0QmVzdCwgZ2V0V29yc3R9IGZyb20gJy4uL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcml0ZXJpb25DaG9pY2Uoe2NyaXRlcmlvbn06IHtjcml0ZXJpb246IElDcml0ZXJpb259KSB7XG4gIGNvbnN0IHtwdmZzLCBzaG93UGVyY2VudGFnZXN9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuICBjb25zdCBwdmYgPSBwdmZzW2NyaXRlcmlvbi5pZF07XG4gIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbCBpZD17YHJhbmtpbmctY2hvaWNlLSR7Y3JpdGVyaW9uLmlkfWB9PlxuICAgICAgPFJhZGlvIHZhbHVlPXtjcml0ZXJpb24uaWR9IC8+XG4gICAgICB7YCR7cHZmLmRpcmVjdGlvbn0gYH1cbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshY3JpdGVyaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICB0aXRsZT17Y3JpdGVyaW9uLmRlc2NyaXB0aW9uID8gY3JpdGVyaW9uLmRlc2NyaXB0aW9uIDogJyd9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgaWQ9e2Bjcml0ZXJpb24tb3B0aW9uLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3JpdGVyaW9uLXRpdGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjcml0ZXJpb24udGl0bGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICAgIHtgIGZyb20gJHtnZXRXb3JzdChwdmYsIHVzZVBlcmNlbnRhZ2UpfSB0byAke2dldEJlc3QoXG4gICAgICAgIHB2ZixcbiAgICAgICAgdXNlUGVyY2VudGFnZVxuICAgICAgKX1gfVxuICAgIDwvbGFiZWw+XG4gICk7XG59XG4iLCJpbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQge2dldFVuaXRMYWJlbH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JpdGVyaW9uU2l0dWF0aW9uKHtcbiAgY3JpdGVyaW9uLFxuICBkaXNwbGF5VmFsdWVcbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xuICBkaXNwbGF5VmFsdWU6IG51bWJlcjtcbn0pIHtcbiAgY29uc3Qge3Nob3dQZXJjZW50YWdlc30gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8bGkgaWQ9e2BzaXR1YXRpb24tJHtjcml0ZXJpb24uaWR9YH0+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgZGlzYWJsZUhvdmVyTGlzdGVuZXI9eyFjcml0ZXJpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgdGl0bGU9e2NyaXRlcmlvbi5kZXNjcmlwdGlvbiA/IGNyaXRlcmlvbi5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGlkPXtgc2l0dWF0aW9uLXRpdGxlLSR7Y3JpdGVyaW9uLmlkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjcml0ZXJpb24udGl0bGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDogPHNwYW4gaWQ9e2BzaXR1YXRpb24tdmFsdWUtJHtjcml0ZXJpb24uaWR9YH0+e2Rpc3BsYXlWYWx1ZX08L3NwYW4+eycgJ31cbiAgICAgICAge2dldFVuaXRMYWJlbChcbiAgICAgICAgICBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQsXG4gICAgICAgICAgc2hvd1BlcmNlbnRhZ2VzXG4gICAgICAgICl9XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmFua2luZ0Fuc3dlciBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nQW5zd2VyJztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCB7XG4gIGFkZFJhbmtpbmcsXG4gIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzLFxuICBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXNcbn0gZnJvbSAnLi4vRWxpY2l0YXRpb25VdGlsL0VsaWNpdGF0aW9uVXRpbCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICcuLi9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgSUV4YWN0U3dpbmdSYXRpbyBmcm9tICcuLi9JbnRlcmZhY2UvSUV4YWN0U3dpbmdSYXRpbyc7XG5pbXBvcnQgSVJhdGlvQm91bmRDb25zdHJhaW50IGZyb20gJy4uL0ludGVyZmFjZS9JUmF0aW9Cb3VuZENvbnN0cmFpbnQnO1xuaW1wb3J0IHtURWxpY2l0YXRpb25NZXRob2R9IGZyb20gJy4uL1R5cGVzL1RFbGljaXRhdGlvbk1ldGhvZCc7XG5pbXBvcnQgSUVsaWNpdGF0aW9uQ29udGV4dCBmcm9tICcuL0lFbGljaXRhdGlvbkNvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgRWxpY2l0YXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxJRWxpY2l0YXRpb25Db250ZXh0PihcbiAge30gYXMgSUVsaWNpdGF0aW9uQ29udGV4dFxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50KHtcbiAgZWxpY2l0YXRpb25NZXRob2QsXG4gIGNyaXRlcmlhLFxuICBzaG93UGVyY2VudGFnZXMsXG4gIHB2ZnMsXG4gIGNhbmNlbENhbGxiYWNrLFxuICBzYXZlQ2FsbGJhY2ssXG4gIGNoaWxkcmVuXG59OiB7XG4gIGVsaWNpdGF0aW9uTWV0aG9kOiBURWxpY2l0YXRpb25NZXRob2Q7XG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW107XG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhbjtcbiAgcHZmczogUmVjb3JkPHN0cmluZywgVFB2Zj47XG4gIGNhbmNlbENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBzYXZlQ2FsbGJhY2s6IChcbiAgICBwcmVmZXJlbmNlczogSUV4YWN0U3dpbmdSYXRpb1tdIHwgSVJhdGlvQm91bmRDb25zdHJhaW50W10gfCBJUmFua2luZ1tdXG4gICkgPT4gdm9pZDtcbiAgY2hpbGRyZW46IGFueTtcbn0pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc05leHREaXNhYmxlZCwgc2V0SXNOZXh0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkXG4gIF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtwcmVmZXJlbmNlcywgc2V0UHJlZmVyZW5jZXNdID0gdXNlU3RhdGU8XG4gICAgUmVjb3JkPHN0cmluZywgSUV4YWN0U3dpbmdSYXRpbz4gfCBSZWNvcmQ8c3RyaW5nLCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQ+XG4gID4oe30pO1xuICBjb25zdCBbcmFua2luZ3MsIHNldFJhbmtpbmdzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPj4oe30pO1xuXG4gIGZ1bmN0aW9uIHNldFJhbmtpbmcoY3JpdGVyaW9uSWQ6IHN0cmluZywgcmFuazogbnVtYmVyKSB7XG4gICAgY29uc3QgdXBkYXRlZFJhbmtpbmdzID0gYWRkUmFua2luZyhyYW5raW5ncywgY3JpdGVyaW9uSWQsIHJhbmspO1xuICAgIHNldFJhbmtpbmdzKHVwZGF0ZWRSYW5raW5ncyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uQW5kUHJlZmVyZW5jZXMoY3JpdGVyaW9uSWQ6IHN0cmluZykge1xuICAgIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ3ByZWNpc2UnKSB7XG4gICAgICBzZXRQcmVmZXJlbmNlcyhidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoY3JpdGVyaWEsIGNyaXRlcmlvbklkKSk7XG4gICAgfSBlbHNlIGlmIChlbGljaXRhdGlvbk1ldGhvZCA9PT0gJ2ltcHJlY2lzZScpIHtcbiAgICAgIHNldFByZWZlcmVuY2VzKGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKGNyaXRlcmlhLCBjcml0ZXJpb25JZCkpO1xuICAgIH1cbiAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQoY3JpdGVyaW9uSWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJlZmVyZW5jZShjcml0ZXJpb25JZDogc3RyaW5nLCBhbnN3ZXI6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCB1cGRhdGVkUHJlZmVyZW5jZXMgPSBfLmNsb25lRGVlcChwcmVmZXJlbmNlcyk7XG4gICAgY29uc3QgcHJlZmVyZW5jZTogSUV4YWN0U3dpbmdSYXRpbyA9IHtcbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICAgIHR5cGU6ICdleGFjdCBzd2luZycsXG4gICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uSWRdLFxuICAgICAgcmF0aW86IDEwMCAvIGFuc3dlclxuICAgIH07XG4gICAgdXBkYXRlZFByZWZlcmVuY2VzW2NyaXRlcmlvbklkXSA9IHByZWZlcmVuY2U7XG4gICAgc2V0UHJlZmVyZW5jZXModXBkYXRlZFByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEJvdW5kUHJlZmVyZW5jZShcbiAgICBjcml0ZXJpb25JZDogc3RyaW5nLFxuICAgIGFuc3dlcjogW251bWJlciwgbnVtYmVyXVxuICApOiB2b2lkIHtcbiAgICBsZXQgdXBkYXRlZFByZWZlcmVuY2VzID0gXy5jbG9uZURlZXAocHJlZmVyZW5jZXMpO1xuICAgIGNvbnN0IHByZWZlcmVuY2U6IElSYXRpb0JvdW5kQ29uc3RyYWludCA9IHtcbiAgICAgIGVsaWNpdGF0aW9uTWV0aG9kOiAnaW1wcmVjaXNlJyxcbiAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uSWRdLFxuICAgICAgYm91bmRzOiBbMTAwIC8gYW5zd2VyWzFdLCAxMDAgLyBhbnN3ZXJbMF1dXG4gICAgfTtcbiAgICB1cGRhdGVkUHJlZmVyZW5jZXNbY3JpdGVyaW9uSWRdID0gcHJlZmVyZW5jZTtcbiAgICBzZXRQcmVmZXJlbmNlcyh1cGRhdGVkUHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3JpdGVyaW9uKGlkOiBzdHJpbmcpOiBJQ3JpdGVyaW9uIHtcbiAgICByZXR1cm4gXy5maW5kKGNyaXRlcmlhLCBbJ2lkJywgaWRdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVsaWNpdGF0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY3VycmVudFN0ZXAsXG4gICAgICAgIGlzTmV4dERpc2FibGVkLFxuICAgICAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICBlbGljaXRhdGlvbk1ldGhvZCxcbiAgICAgICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgICAgICBwdmZzLFxuICAgICAgICBjcml0ZXJpYSxcbiAgICAgICAgcmFua2luZ3MsXG4gICAgICAgIGdldENyaXRlcmlvbixcbiAgICAgICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgICAgICBzZXRNb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25BbmRQcmVmZXJlbmNlcyxcbiAgICAgICAgc2V0UHJlZmVyZW5jZSxcbiAgICAgICAgc2V0Qm91bmRQcmVmZXJlbmNlLFxuICAgICAgICBzZXRQcmVmZXJlbmNlcyxcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgICAgIHNhdmVDYWxsYmFjayxcbiAgICAgICAgc2V0UmFua2luZ1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9FbGljaXRhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9NQVRDSElOR19URU1QTEFURSxcbiAgREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFLFxuICBVTlJBTktFRFxufSBmcm9tICdzcmMvY29uc3RhbnRzJztcbmltcG9ydCBJUmFua2luZyBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nJztcbmltcG9ydCBJUmFua2luZ0Fuc3dlciBmcm9tICdzcmMvSW50ZXJmYWNlL0lSYW5raW5nQW5zd2VyJztcbmltcG9ydCBJVW5pdE9mTWVhc3VyZW1lbnQsIHtcbiAgVW5pdE9mTWVhc3VyZW1lbnRUeXBlXG59IGZyb20gJ3NyYy9JbnRlcmZhY2UvSVVuaXRPZk1lYXN1cmVtZW50JztcbmltcG9ydCB7VFB2Zn0gZnJvbSAnc3JjL0ludGVyZmFjZS9UUHZmJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJy4uL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBJRXhhY3RTd2luZ1JhdGlvIGZyb20gJy4uL0ludGVyZmFjZS9JRXhhY3RTd2luZ1JhdGlvJztcbmltcG9ydCBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgZnJvbSAnLi4vSW50ZXJmYWNlL0lSYXRpb0JvdW5kQ29uc3RyYWludCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxQcmVjaXNlUHJlZmVyZW5jZXMoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDogc3RyaW5nXG4pOiBSZWNvcmQ8c3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvPiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5maWx0ZXIoXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgICBjcml0ZXJpb24uaWQgIT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZFxuICAgIClcbiAgICAubWFwKChjcml0ZXJpb246IElDcml0ZXJpb24pOiBbc3RyaW5nLCBJRXhhY3RTd2luZ1JhdGlvXSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlOiBJRXhhY3RTd2luZ1JhdGlvID0ge1xuICAgICAgICBjcml0ZXJpYTogW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCwgY3JpdGVyaW9uLmlkXSxcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdwcmVjaXNlJyxcbiAgICAgICAgdHlwZTogJ2V4YWN0IHN3aW5nJyxcbiAgICAgICAgcmF0aW86IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gW2NyaXRlcmlvbi5pZCwgcHJlZmVyZW5jZV07XG4gICAgfSlcbiAgICAuZnJvbVBhaXJzKClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5pdGlhbEltcHJlY2lzZVByZWZlcmVuY2VzKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZ1xuKTogUmVjb3JkPHN0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50PiB7XG4gIHJldHVybiBfKGNyaXRlcmlhKVxuICAgIC5yZWplY3QoWydpZCcsIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0pXG4gICAgLm1hcCgoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogW3N0cmluZywgSVJhdGlvQm91bmRDb25zdHJhaW50XSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlOiBJUmF0aW9Cb3VuZENvbnN0cmFpbnQgPSB7XG4gICAgICAgIGNyaXRlcmlhOiBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkLCBjcml0ZXJpb24uaWRdLFxuICAgICAgICBlbGljaXRhdGlvbk1ldGhvZDogJ2ltcHJlY2lzZScsXG4gICAgICAgIHR5cGU6ICdyYXRpbyBib3VuZCcsXG4gICAgICAgIGJvdW5kczogWzEsIDEwMF1cbiAgICAgIH07XG4gICAgICByZXR1cm4gW2NyaXRlcmlvbi5pZCwgcHJlZmVyZW5jZV07XG4gICAgfSlcbiAgICAuZnJvbVBhaXJzKClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZTogVW5pdE9mTWVhc3VyZW1lbnRUeXBlKTogYm9vbGVhbiB7XG4gIHJldHVybiB1bml0VHlwZSA9PT0gJ3BlcmNlbnRhZ2UnIHx8IHVuaXRUeXBlID09PSAnZGVjaW1hbCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXN0KHB2ZjogVFB2ZiwgdXNlUGVyY2VudGFnZTogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IHZhbHVlID0gc2lnbmlmaWNhbnREaWdpdHMoXG4gICAgaXNJbmNyZWFzaW5nKHB2ZikgPyBwdmYucmFuZ2VbMV0gOiBwdmYucmFuZ2VbMF1cbiAgKTtcbiAgcmV0dXJuIGdldFBlcmNlbnRpZmllZFZhbHVlKHZhbHVlLCB1c2VQZXJjZW50YWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcnN0KHB2ZjogVFB2ZiwgdXNlUGVyY2VudGFnZTogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IHZhbHVlID0gc2lnbmlmaWNhbnREaWdpdHMoXG4gICAgaXNJbmNyZWFzaW5nKHB2ZikgPyBwdmYucmFuZ2VbMF0gOiBwdmYucmFuZ2VbMV1cbiAgKTtcbiAgcmV0dXJuIGdldFBlcmNlbnRpZmllZFZhbHVlKHZhbHVlLCB1c2VQZXJjZW50YWdlKTtcbn1cblxuZnVuY3Rpb24gaXNJbmNyZWFzaW5nKHB2ZjogVFB2Zik6IGJvb2xlYW4ge1xuICByZXR1cm4gcHZmLmRpcmVjdGlvbiA9PT0gJ2luY3JlYXNpbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWduaWZpY2FudERpZ2l0cyh4OiBudW1iZXIsIHByZWNpc2lvbj86IG51bWJlcikge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkIHx8IHggPT09IG51bGwgfHwgaXNOYU4oeCkpIHtcbiAgICB0aHJvdyAnYXR0ZW1wdCB0byBhcHBseSBzaWduaWZpY2FudCBkaWdpdHMgdG8gbm9uLW51bWVyaWMgdmFsdWUnO1xuICB9XG4gIGlmIChwcmVjaXNpb24gIT09IDAgJiYgIXByZWNpc2lvbikge1xuICAgIHByZWNpc2lvbiA9IDM7XG4gIH1cbiAgaWYgKHggPT09IDApIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICBpZiAoeCA+IDEgfHwgeCA8IC0xKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHgudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoeC50b1ByZWNpc2lvbihwcmVjaXNpb24pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudGlmaWVkVmFsdWUoXG4gIHZhbHVlOiBudW1iZXIsXG4gIHVzZVBlcmNlbnRhZ2U6IGJvb2xlYW5cbik6IG51bWJlciB7XG4gIGlmICh1c2VQZXJjZW50YWdlKSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKSAqIDEwMCk7IC8vMiBzaWdkaXRzIHRvIGVuc3VyZSB0aGUgcHJlY2lzaW9uIHN0YXlzIHRoZSBzYW1lXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNpZ25pZmljYW50RGlnaXRzKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdExhYmVsKFxuICB1bml0OiBJVW5pdE9mTWVhc3VyZW1lbnQsXG4gIHNob3dQZXJjZW50YWdlczogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgaWYgKHNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdkZWNpbWFsJykge1xuICAgIHJldHVybiAnJSc7XG4gIH0gZWxzZSBpZiAoIXNob3dQZXJjZW50YWdlcyAmJiB1bml0LnR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5pdC5sYWJlbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3dpbmdTdGF0ZW1lbnQoXG4gIGNyaXRlcmlvbjogSUNyaXRlcmlvbixcbiAgcHZmOiBUUHZmLFxuICBzaG93UGVyY2VudGFnZXM6IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIGNvbnN0IHVuaXQgPSBjcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQ7XG4gIGNvbnN0IGxhYmVsID0gZ2V0VW5pdExhYmVsKHVuaXQsIHNob3dQZXJjZW50YWdlcyk7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXQudHlwZSk7XG4gIHJldHVybiBERUZBVUxUX1BSRUNJU0VfVEVNUExBVEUucmVwbGFjZSgvJWNyaXRlcmlvbjElL2dpLCBjcml0ZXJpb24udGl0bGUpXG4gICAgLnJlcGxhY2UoLyV1bml0MSUvZ2ksIGxhYmVsKVxuICAgIC5yZXBsYWNlKC8ld29yc3QxJS9naSwgU3RyaW5nKGdldFdvcnN0KHB2ZiwgdXNlUGVyY2VudGFnZSkpKVxuICAgIC5yZXBsYWNlKC8lYmVzdDElL2dpLCBTdHJpbmcoZ2V0QmVzdChwdmYsIHVzZVBlcmNlbnRhZ2UpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXRjaGluZ1N0YXRlbWVudChcbiAgbW9zdEltcG9ydGFudENyaXRlcmlvbjogSUNyaXRlcmlvbixcbiAgY3VycmVudENyaXRlcmlvbjogSUNyaXRlcmlvblxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIERFRkFVTFRfTUFUQ0hJTkdfVEVNUExBVEUucmVwbGFjZShcbiAgICAvJWNyaXRlcmlvbjElL2dpLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGVcbiAgKS5yZXBsYWNlKC8lY3JpdGVyaW9uMiUvZ2ksIGN1cnJlbnRDcml0ZXJpb24udGl0bGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lU3RlcFNpemUoW2xvd2VyQm91bmQsIHVwcGVyQm91bmRdOiBbXG4gIG51bWJlcixcbiAgbnVtYmVyXG5dKTogbnVtYmVyIHtcbiAgY29uc3QgaW50ZXJ2YWwgPSB1cHBlckJvdW5kIC0gbG93ZXJCb3VuZDtcbiAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKGludGVydmFsKSk7XG4gIHJldHVybiBNYXRoLnBvdygxMCwgbWFnbml0dWRlIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbXBvcnRhbmNlKFxuICBzbGlkZXJWYWx1ZTogbnVtYmVyLFxuICB7cmFuZ2U6IFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXSwgZGlyZWN0aW9ufTogVFB2ZlxuKTogbnVtYmVyIHtcbiAgY29uc3QgcmViYXNlZCA9XG4gICAgZGlyZWN0aW9uID09PSAnZGVjcmVhc2luZydcbiAgICAgID8gdXBwZXJCb3VuZCAtIHNsaWRlclZhbHVlXG4gICAgICA6IHNsaWRlclZhbHVlIC0gbG93ZXJCb3VuZDtcbiAgY29uc3QgaW1wb3J0YW5jZSA9IChyZWJhc2VkIC8gTWF0aC5hYnMobG93ZXJCb3VuZCAtIHVwcGVyQm91bmQpKSAqIDEwMDtcbiAgcmV0dXJuIGltcG9ydGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q3JpdGVyaW9uKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQ6IHN0cmluZyxcbiAgY3VycmVudFN0ZXA6IG51bWJlclxuKTogSUNyaXRlcmlvbiB7XG4gIHJldHVybiBfLnJlamVjdChjcml0ZXJpYSwgKGNyaXRlcmlvbjogSUNyaXRlcmlvbikgPT4ge1xuICAgIHJldHVybiBjcml0ZXJpb24uaWQgPT09IG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZDtcbiAgfSlbY3VycmVudFN0ZXAgLSAyXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDcml0ZXJpb25JZEZvclJhbmsoXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW10sXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIHJhbms6IG51bWJlclxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIF8uZmluZChcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgcmFua2luZ3NbY3JpdGVyaW9uLmlkXSAmJiByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IHJhbmtcbiAgKS5pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbk1pc3NpbmdSYW5raW5ncyhcbiAgcmFua2luZ3M6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPixcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZDogc3RyaW5nLFxuICByYW5rOiBudW1iZXIsXG4gIGNyaXRlcmlhOiBJQ3JpdGVyaW9uW11cbik6IFJlY29yZDxzdHJpbmcsIElSYW5raW5nQW5zd2VyPiB7XG4gIGNvbnN0IGludGVybWVkaWF0ZVJhbmtpbmdzID0gYWRkUmFua2luZyhyYW5raW5ncywgc2VsZWN0ZWRDcml0ZXJpb25JZCwgcmFuayk7XG4gIGNvbnN0IGxhc3RDcml0ZXJpb25JZCA9IGZpbmRDcml0ZXJpb25JZFdpdGhvdXRSYW5raW5nKFxuICAgIGNyaXRlcmlhLFxuICAgIGludGVybWVkaWF0ZVJhbmtpbmdzXG4gICk7XG4gIHJldHVybiBhZGRSYW5raW5nKGludGVybWVkaWF0ZVJhbmtpbmdzLCBsYXN0Q3JpdGVyaW9uSWQsIHJhbmsgKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJhbmtpbmcoXG4gIHJhbmtpbmdzOiBSZWNvcmQ8c3RyaW5nLCBJUmFua2luZ0Fuc3dlcj4sXG4gIGNyaXRlcmlvbklkOiBzdHJpbmcsXG4gIHJhbms6IG51bWJlclxuKTogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+IHtcbiAgbGV0IHVwZGF0ZWRSYW5raW5ncyA9IF8uY2xvbmVEZWVwKHJhbmtpbmdzKTtcbiAgY29uc3QgbmV3UmFua2luZzogSVJhbmtpbmdBbnN3ZXIgPSB7XG4gICAgY3JpdGVyaW9uSWQ6IGNyaXRlcmlvbklkLFxuICAgIHJhbms6IHJhbmtcbiAgfTtcbiAgdXBkYXRlZFJhbmtpbmdzW2NyaXRlcmlvbklkXSA9IG5ld1Jhbmtpbmc7XG4gIHJldHVybiB1cGRhdGVkUmFua2luZ3M7XG59XG5cbmZ1bmN0aW9uIGZpbmRDcml0ZXJpb25JZFdpdGhvdXRSYW5raW5nKFxuICBjcml0ZXJpYTogSUNyaXRlcmlvbltdLFxuICByYW5raW5nczogUmVjb3JkPHN0cmluZywgSVJhbmtpbmdBbnN3ZXI+XG4pOiBzdHJpbmcge1xuICByZXR1cm4gXy5maW5kKFxuICAgIGNyaXRlcmlhLFxuICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBib29sZWFuID0+XG4gICAgICByYW5raW5nc1tjcml0ZXJpb24uaWRdID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHJhbmtpbmdzW2NyaXRlcmlvbi5pZF0ucmFuayA9PT0gVU5SQU5LRURcbiAgKS5pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzKGFuc3dlcnM6IElSYW5raW5nQW5zd2VyW10pOiBJUmFua2luZ1tdIHtcbiAgY29uc3Qgc29ydGVkQW5zd2VyczogSVJhbmtpbmdBbnN3ZXJbXSA9IF8uc29ydEJ5KGFuc3dlcnMsICdyYW5rJyk7XG4gIHJldHVybiBfLnJlZHVjZShcbiAgICBzb3J0ZWRBbnN3ZXJzLFxuICAgIChhY2N1bTogSVJhbmtpbmdbXSwgYW5zd2VyOiBJUmFua2luZ0Fuc3dlciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpZHggPT09IGFuc3dlcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm4gYWNjdW07XG4gICAgICB9XG4gICAgICBjb25zdCByYW5raW5nOiBJUmFua2luZyA9IHtcbiAgICAgICAgZWxpY2l0YXRpb25NZXRob2Q6ICdyYW5raW5nJyxcbiAgICAgICAgdHlwZTogJ29yZGluYWwnLFxuICAgICAgICBjcml0ZXJpYTogW2Fuc3dlci5jcml0ZXJpb25JZCwgc29ydGVkQW5zd2Vyc1tpZHggKyAxXS5jcml0ZXJpb25JZF1cbiAgICAgIH07XG4gICAgICBhY2N1bS5wdXNoKHJhbmtpbmcpO1xuICAgICAgcmV0dXJuIGFjY3VtO1xuICAgIH0sXG4gICAgW11cbiAgKTtcbn1cbiIsImltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgc2lnbmlmaWNhbnREaWdpdHMgZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wcmVjaXNlU3dpbmdTbGlkZXIoe1xuICBjcml0ZXJpb25cbn06IHtcbiAgY3JpdGVyaW9uOiBJQ3JpdGVyaW9uO1xufSkge1xuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPFtudW1iZXIsIG51bWJlcl0+KFsxLCAxMDBdKTtcbiAgY29uc3Qge3NldEJvdW5kUHJlZmVyZW5jZSwgbW9zdEltcG9ydGFudENyaXRlcmlvbklkfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCb3VuZFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBzbGlkZXJWYWx1ZSk7XG4gIH0sIFttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTbGlkZXJDaGFuZ2VkKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LFxuICAgIG5ld1ZhbHVlOiBbbnVtYmVyLCBudW1iZXJdXG4gICkge1xuICAgIHNldFNsaWRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRCb3VuZFByZWZlcmVuY2UoY3JpdGVyaW9uLmlkLCBuZXdWYWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQgPT09IGNyaXRlcmlvbi5pZFxuICAgICAgPyAnMTAwJSdcbiAgICAgIDogYCR7c2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWVbMF0pfSAtICR7c2lnbmlmaWNhbnREaWdpdHMoXG4gICAgICAgICAgc2xpZGVyVmFsdWVbMV1cbiAgICAgICAgKX0lYDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZW5kZXJWYWx1ZSgpfVxuICAgICAgPFNsaWRlclxuICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XG4gICAgICAgIG1pbj17MX1cbiAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2VkfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICBkaXNhYmxlZD17bW9zdEltcG9ydGFudENyaXRlcmlvbklkID09PSBjcml0ZXJpb24uaWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG4vLyBpbXBvcnQgSW5saW5lSGVscCBmcm9tICdhcHAvdHMvSW5saW5lSGVscC9JbmxpbmVIZWxwJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgTW9zdEltcG9ydGFudENob2ljZSBmcm9tICcuLi9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UnO1xuaW1wb3J0IFN3aW5nQnV0dG9ucyBmcm9tICcuLi9Td2luZ0J1dHRvbnMvU3dpbmdCdXR0b25zJztcbmltcG9ydCBTd2luZ1NldFdlaWdodHMgZnJvbSAnLi4vU3dpbmdTZXRXZWlnaHRzL1N3aW5nU2V0V2VpZ2h0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nKCkge1xuICBjb25zdCB7Y3VycmVudFN0ZXB9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwic3dpbmctd2VpZ2h0aW5nLXRpdGxlLWhlYWRlclwiIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIEltcHJlY2lzZSBzd2luZyB3ZWlnaHRpbmd7JyAnfVxuICAgICAgICAgIHsvKjxJbmxpbmVIZWxwIGhlbHBJZD1cInN3aW5nLXdlaWdodGluZ1wiIC8+Ki99XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSAxID8gPE1vc3RJbXBvcnRhbnRDaG9pY2UgLz4gOiA8U3dpbmdTZXRXZWlnaHRzIC8+fVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxTd2luZ0J1dHRvbnMgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2YgMlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGluZ0J1dHRvbnMoKSB7XG4gIGNvbnN0IHtcbiAgICBpc05leHREaXNhYmxlZCxcbiAgICBzZXRJc05leHREaXNhYmxlZCxcbiAgICBjdXJyZW50U3RlcCxcbiAgICBzZXRDdXJyZW50U3RlcCxcbiAgICBwcmVmZXJlbmNlcyxcbiAgICBjcml0ZXJpYSxcbiAgICBjYW5jZWxDYWxsYmFjayxcbiAgICBzYXZlQ2FsbGJhY2tcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgbWF0Y2hpbmdOZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlQnV0dG9uY2xpY2soKTogdm9pZCB7XG4gICAgc2F2ZUNhbGxiYWNrKE9iamVjdC52YWx1ZXMocHJlZmVyZW5jZXMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoaW5nTmV4dCgpOiB2b2lkIHtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IF8uc2l6ZShjcml0ZXJpYSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCk6IHZvaWQge1xuICAgIHNldElzTmV4dERpc2FibGVkKGZhbHNlKTtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCk6IHZvaWQge1xuICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgID5cbiAgICAgICAgQ2FuY2VsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJwcmV2aW91cy1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0NsaWNrfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbmNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG4vLyBpbXBvcnQgSW5saW5lSGVscCBmcm9tICdhcHAvdHMvSW5saW5lSGVscC9JbmxpbmVIZWxwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IE1vc3RJbXBvcnRhbnRDaG9pY2UgZnJvbSAnLi4vTW9zdEltcG9ydGFudENob2ljZS9Nb3N0SW1wb3J0YW50Q2hvaWNlJztcbmltcG9ydCBNYXRjaGluZ0J1dHRvbnMgZnJvbSAnLi9NYXRjaGluZ0J1dHRvbnMvTWF0Y2hpbmdCdXR0b25zJztcbmltcG9ydCBNYXRjaGluZ1NldEltcG9ydGFuY2UgZnJvbSAnLi9NYXRjaGluZ1NldEltcG9ydGFuY2UvTWF0Y2hpbmdTZXRJbXBvcnRhbmNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hpbmdFbGljaXRhdGlvbigpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBfLnNpemUoY3JpdGVyaWEpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17NH0gc209ezEyfSBtZD17OX0gY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibWF0Y2hpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgTWF0Y2hpbmcgey8qPElubGluZUhlbHAgaGVscElkPVwibWF0Y2hpbmdcIiAvPiovfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMSA/IChcbiAgICAgICAgICA8TW9zdEltcG9ydGFudENob2ljZSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxNYXRjaGluZ1NldEltcG9ydGFuY2UgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8TWF0Y2hpbmdCdXR0b25zIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgU3RlcCB7Y3VycmVudFN0ZXB9IG9mIHt0b3RhbFN0ZXBzfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCB7Y2FuQmVQZXJjZW50YWdlfSBmcm9tICdzcmMvRWxpY2l0YXRpb25VdGlsL0VsaWNpdGF0aW9uVXRpbCc7XG5pbXBvcnQge1xuICBnZXRCZXN0LFxuICBnZXRDdXJyZW50Q3JpdGVyaW9uLFxuICBnZXRNYXRjaGluZ1N0YXRlbWVudCxcbiAgZ2V0V29yc3Rcbn0gZnJvbSAnLi4vLi4vRWxpY2l0YXRpb25VdGlsL0VsaWNpdGF0aW9uVXRpbCc7XG5pbXBvcnQgTWF0Y2hpbmdTbGlkZXIgZnJvbSAnLi9NYXRjaGluZ1NsaWRlci9NYXRjaGluZ1NsaWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nU2V0SW1wb3J0YW5jZSgpIHtcbiAgY29uc3Qge1xuICAgIHB2ZnMsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBjdXJyZW50U3RlcCxcbiAgICBnZXRDcml0ZXJpb24sXG4gICAgY3JpdGVyaWFcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBjb25zdCBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uID0gZ2V0Q3JpdGVyaW9uKG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCk7XG4gIGNvbnN0IG1vc3RJbXBvcnRhbnRVbml0VHlwZSA9XG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuXG4gIGNvbnN0IGN1cnJlbnRDcml0ZXJpb24gPSBnZXRDdXJyZW50Q3JpdGVyaW9uKFxuICAgIGNyaXRlcmlhLFxuICAgIG1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCxcbiAgICBjdXJyZW50U3RlcFxuICApO1xuICBjb25zdCBjdXJyZW50VW5pdFR5cGUgPVxuICAgIGN1cnJlbnRDcml0ZXJpb24uZGF0YVNvdXJjZXNbMF0udW5pdE9mTWVhc3VyZW1lbnQudHlwZTtcbiAgY29uc3Qgc3RhdGVtZW50ID0gZ2V0TWF0Y2hpbmdTdGF0ZW1lbnQoXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbixcbiAgICBjdXJyZW50Q3JpdGVyaW9uXG4gICk7XG5cbiAgY29uc3QgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uID1cbiAgICBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKG1vc3RJbXBvcnRhbnRVbml0VHlwZSk7XG5cbiAgY29uc3QgdXNlUGVyY2VudGFnZXNGb3JDdXJyZW50Q3JpdGVyaW9uID1cbiAgICBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKGN1cnJlbnRVbml0VHlwZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2BUcmFkZS1vZmYgYmV0d2VlbiAke21vc3RJbXBvcnRhbnRDcml0ZXJpb24udGl0bGV9IGFuZCAke2N1cnJlbnRDcml0ZXJpb24udGl0bGV9YH08L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZFxuICAgICAgICBpdGVtXG4gICAgICAgIHhzPXsxMn1cbiAgICAgICAgaWQ9XCJtYXRjaGluZy1zdGF0ZW1lbnRcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc3RhdGVtZW50fX1cbiAgICAgIC8+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPkNyaXRlcmlvbjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QWx0ZXJuYXRpdmUgQTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QWx0ZXJuYXRpdmUgQjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPnttb3N0SW1wb3J0YW50Q3JpdGVyaW9uLnRpdGxlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge2dldFdvcnN0KFxuICAgICAgICAgICAgICAgICAgcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdLFxuICAgICAgICAgICAgICAgICAgdXNlUGVyY2VudGFnZXNGb3JNb3N0SW1wb3J0YW50Q3JpdGVyaW9uXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBpZD1cIm1hdGNoaW5nLWNlbGxcIj5cbiAgICAgICAgICAgICAgICA8TWF0Y2hpbmdTbGlkZXIgY3VycmVudENyaXRlcmlvbklkPXtjdXJyZW50Q3JpdGVyaW9uLmlkfSAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2N1cnJlbnRDcml0ZXJpb24udGl0bGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7Z2V0QmVzdChcbiAgICAgICAgICAgICAgICAgIHB2ZnNbY3VycmVudENyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgICAgICAgICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb25cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtnZXRXb3JzdChcbiAgICAgICAgICAgICAgICAgIHB2ZnNbY3VycmVudENyaXRlcmlvbi5pZF0sXG4gICAgICAgICAgICAgICAgICB1c2VQZXJjZW50YWdlc0ZvckN1cnJlbnRDcml0ZXJpb25cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBzaWduaWZpY2FudERpZ2l0cywge1xuICBjYWxjdWxhdGVJbXBvcnRhbmNlLFxuICBjYW5CZVBlcmNlbnRhZ2UsXG4gIGRldGVybWluZVN0ZXBTaXplLFxuICBnZXRCZXN0LFxuICBnZXRXb3JzdFxufSBmcm9tICdzcmMvRWxpY2l0YXRpb25VdGlsL0VsaWNpdGF0aW9uVXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoaW5nU2xpZGVyKHtcbiAgY3VycmVudENyaXRlcmlvbklkXG59OiB7XG4gIGN1cnJlbnRDcml0ZXJpb25JZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0SXNOZXh0RGlzYWJsZWQsXG4gICAgbW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldFByZWZlcmVuY2UsXG4gICAgc2hvd1BlcmNlbnRhZ2VzLFxuICAgIHB2ZnMsXG4gICAgZ2V0Q3JpdGVyaW9uXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgbW9zdEltcG9ydGFudENyaXRlcmlvbiA9IGdldENyaXRlcmlvbihtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQpO1xuICBjb25zdCBwdmYgPSBwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF07XG5cbiAgY29uc3QgdW5pdFR5cGUgPSBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcblxuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlPG51bWJlcj4oXG4gICAgZ2V0QmVzdChwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZF0sIHVzZVBlcmNlbnRhZ2UpXG4gICk7XG4gIGNvbnN0IFtzdGVwU2l6ZSwgc2V0U3RlcFNpemVdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyVmFsdWUgPSBnZXRCZXN0KHB2ZiwgZmFsc2UpO1xuICAgIHNldFNsaWRlclZhbHVlKHNsaWRlclZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGN1cnJlbnRDcml0ZXJpb25JZCwgY2FsY3VsYXRlSW1wb3J0YW5jZShzbGlkZXJWYWx1ZSwgcHZmKSk7XG4gIH0sIFtjdXJyZW50U3RlcF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RlcFNpemUoZGV0ZXJtaW5lU3RlcFNpemUocHZmLnJhbmdlKSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTbGlkZXJDaGFuZ2VkKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LFxuICAgIG5ld1ZhbHVlOiBudW1iZXJcbiAgKSB7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIHNldElzTmV4dERpc2FibGVkKFxuICAgICAgc2lnbmlmaWNhbnREaWdpdHMobmV3VmFsdWUpID09PVxuICAgICAgICBnZXRXb3JzdChwdmZzW21vc3RJbXBvcnRhbnRDcml0ZXJpb24uaWRdLCBmYWxzZSlcbiAgICApO1xuICAgIHNldFByZWZlcmVuY2UoY3VycmVudENyaXRlcmlvbklkLCBjYWxjdWxhdGVJbXBvcnRhbmNlKG5ld1ZhbHVlLCBwdmYpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdXNlUGVyY2VudGFnZVxuICAgICAgPyBzaWduaWZpY2FudERpZ2l0cyhzbGlkZXJWYWx1ZSAqIDEwMClcbiAgICAgIDogc2lnbmlmaWNhbnREaWdpdHMoc2xpZGVyVmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2Rpc3BsYXlWYWx1ZSgpfVxuICAgICAgPFNsaWRlclxuICAgICAgICBpZD1cIm1hdGNoaW5nLXNsaWRlclwiXG4gICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cbiAgICAgICAgbWluPXtwdmYucmFuZ2VbMF19XG4gICAgICAgIG1heD17cHZmLnJhbmdlWzFdfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlZH1cbiAgICAgICAgc3RlcD17c3RlcFNpemV9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtjYW5CZVBlcmNlbnRhZ2UsIGdldFdvcnN0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25VdGlsL0VsaWNpdGF0aW9uVXRpbCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IENyaXRlcmlvbkNob2ljZSBmcm9tICcuLi9Dcml0ZXJpb25DaG9pY2UvQ3JpdGVyaW9uQ2hvaWNlJztcbmltcG9ydCBDcml0ZXJpb25TaXR1YXRpb24gZnJvbSAnLi4vQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vc3RJbXBvcnRhbnRDaG9pY2UoKSB7XG4gIGNvbnN0IHtcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgc2V0TW9zdEltcG9ydGFudENyaXRlcmlvbklkLFxuICAgIHNldElzTmV4dERpc2FibGVkLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBwdmZzLFxuICAgIGNyaXRlcmlhXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHNldE1vc3RJbXBvcnRhbnRDcml0ZXJpb25JZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldElzTmV4dERpc2FibGVkKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgY3JpdGVyaWEsXG4gICAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogSlNYLkVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB1bml0VHlwZSA9IGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudC50eXBlO1xuICAgICAgICBjb25zdCB1c2VQZXJjZW50YWdlID0gc2hvd1BlcmNlbnRhZ2VzICYmIGNhbkJlUGVyY2VudGFnZSh1bml0VHlwZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENyaXRlcmlvblNpdHVhdGlvblxuICAgICAgICAgICAga2V5PXtjcml0ZXJpb24uaWR9XG4gICAgICAgICAgICBjcml0ZXJpb249e2NyaXRlcmlvbn1cbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZT17Z2V0V29yc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDcml0ZXJpb25DaG9pY2VzKCk6IEpTWC5FbGVtZW50W10ge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIGNyaXRlcmlhLFxuICAgICAgKGNyaXRlcmlvbjogSUNyaXRlcmlvbik6IEpTWC5FbGVtZW50ID0+IChcbiAgICAgICAgPENyaXRlcmlvbkNob2ljZSBrZXk9e2NyaXRlcmlvbi5pZH0gY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkdpdmVuIHRoZSBmb2xsb3dpbmcgc2l0dWF0aW9uOjwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge3JlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKX1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpbXByb3ZlbWVudHMgaXMgbW9zdCBpbXBvcnRhbnQ/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICBuYW1lPVwibW9zdC1pbXBvcnRhbnQtY3JpdGVyaW9uLXJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17bW9zdEltcG9ydGFudENyaXRlcmlvbklkID8gbW9zdEltcG9ydGFudENyaXRlcmlvbklkIDogJyd9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDcml0ZXJpb25DaG9pY2VzKCl9XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHNpZ25pZmljYW50RGlnaXRzIGZyb20gJ3NyYy9FbGljaXRhdGlvblV0aWwvRWxpY2l0YXRpb25VdGlsJztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWNpc2VTd2luZ1NsaWRlcih7XG4gIGNyaXRlcmlvblxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG59KSB7XG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyPigxMDApO1xuICBjb25zdCB7c2V0UHJlZmVyZW5jZSwgbW9zdEltcG9ydGFudENyaXRlcmlvbklkfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgc2xpZGVyVmFsdWUpO1xuICB9LCBbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2xpZGVyQ2hhbmdlZChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PixcbiAgICBuZXdWYWx1ZTogbnVtYmVyXG4gICkge1xuICAgIHNldFNsaWRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRQcmVmZXJlbmNlKGNyaXRlcmlvbi5pZCwgbmV3VmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3NpZ25pZmljYW50RGlnaXRzKHNsaWRlclZhbHVlKX1cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBtaW49ezF9XG4gICAgICAgIG1heD17MTAwfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlZH1cbiAgICAgICAgc3RlcD17MX1cbiAgICAgICAgZGlzYWJsZWQ9e21vc3RJbXBvcnRhbnRDcml0ZXJpb25JZCA9PT0gY3JpdGVyaW9uLmlkfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuLy8gaW1wb3J0IElubGluZUhlbHAgZnJvbSAnYXBwL3RzL0lubGluZUhlbHAvSW5saW5lSGVscCc7IC8vRklYTUVcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgTW9zdEltcG9ydGFudENob2ljZSBmcm9tICcuLi9Nb3N0SW1wb3J0YW50Q2hvaWNlL01vc3RJbXBvcnRhbnRDaG9pY2UnO1xuaW1wb3J0IFN3aW5nQnV0dG9ucyBmcm9tICcuLi9Td2luZ0J1dHRvbnMvU3dpbmdCdXR0b25zJztcbmltcG9ydCBTd2luZ1NldFdlaWdodHMgZnJvbSAnLi4vU3dpbmdTZXRXZWlnaHRzL1N3aW5nU2V0V2VpZ2h0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWNpc2VTd2luZ1dlaWdodGluZygpIHtcbiAgY29uc3Qge2N1cnJlbnRTdGVwfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInN3aW5nLXdlaWdodGluZy10aXRsZS1oZWFkZXJcIiB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICBQcmVjaXNlIHN3aW5nIHdlaWdodGluZyB7Lyo8SW5saW5lSGVscCBoZWxwSWQ9XCJzd2luZy13ZWlnaHRpbmdcIiAvPiovfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMSA/IDxNb3N0SW1wb3J0YW50Q2hvaWNlIC8+IDogPFN3aW5nU2V0V2VpZ2h0cyAvPn1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxuICAgICAgICA8U3dpbmdCdXR0b25zIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfSBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8R3JpZCBpdGVtIGlkPVwic3RlcC1jb3VudGVyXCI+XG4gICAgICAgICAgU3RlcCB7Y3VycmVudFN0ZXB9IG9mIDJcbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtVTlJBTktFRH0gZnJvbSAnc3JjL2NvbnN0YW50cyc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtcbiAgYXNzaWduTWlzc2luZ1JhbmtpbmdzLFxuICBidWlsZFJhbmtpbmdQcmVmZXJlbmNlcyxcbiAgZmluZENyaXRlcmlvbklkRm9yUmFua1xufSBmcm9tICdzcmMvRWxpY2l0YXRpb25VdGlsL0VsaWNpdGF0aW9uVXRpbCc7XG5pbXBvcnQgSVJhbmtpbmdBbnN3ZXIgZnJvbSAnc3JjL0ludGVyZmFjZS9JUmFua2luZ0Fuc3dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdCdXR0b25zKHtcbiAgc2VsZWN0ZWRDcml0ZXJpb25JZCxcbiAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZFxufToge1xuICBzZWxlY3RlZENyaXRlcmlvbklkOiBzdHJpbmc7XG4gIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWQ6IChjcml0ZXJpb25JZDogc3RyaW5nKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0UmFua2luZyxcbiAgICBzZXRDdXJyZW50U3RlcCxcbiAgICByYW5raW5ncyxcbiAgICBjcml0ZXJpYSxcbiAgICBjYW5jZWxDYWxsYmFjayxcbiAgICBzYXZlQ2FsbGJhY2tcbiAgfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKSB7XG4gICAgc2V0UmFua2luZyhzZWxlY3RlZENyaXRlcmlvbklkLCBjdXJyZW50U3RlcCk7XG4gICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZCgnJyk7XG4gICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCBmaW5pc2hlZFJhbmtpbmdzOiBSZWNvcmQ8XG4gICAgICBzdHJpbmcsXG4gICAgICBJUmFua2luZ0Fuc3dlclxuICAgID4gPSBhc3NpZ25NaXNzaW5nUmFua2luZ3MoXG4gICAgICByYW5raW5ncyxcbiAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gICAgICBjdXJyZW50U3RlcCxcbiAgICAgIGNyaXRlcmlhXG4gICAgKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGJ1aWxkUmFua2luZ1ByZWZlcmVuY2VzKF8udG9BcnJheShmaW5pc2hlZFJhbmtpbmdzKSk7XG4gICAgc2F2ZUNhbGxiYWNrKHByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXZpb3VzQ2xpY2soKSB7XG4gICAgaWYgKGN1cnJlbnRTdGVwICE9PSAxKSB7XG4gICAgICByZW1vdmVSYW5rRnJvbUNyaXRlcmlvbigpO1xuICAgIH1cbiAgICBzZXRTZWxlY3RlZENyaXRlcmlvbklkKCcnKTtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUmFua0Zyb21Dcml0ZXJpb24oKSB7XG4gICAgY29uc3QgbG9va3VwUmFuayA9IGN1cnJlbnRTdGVwIC0gMTtcbiAgICBjb25zdCBjcml0ZXJpb25JZCA9IGZpbmRDcml0ZXJpb25JZEZvclJhbmsoY3JpdGVyaWEsIHJhbmtpbmdzLCBsb29rdXBSYW5rKTtcbiAgICBzZXRSYW5raW5nKGNyaXRlcmlvbklkLCBVTlJBTktFRCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xhc3RTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50U3RlcCA9PT0gXy5zaXplKGNyaXRlcmlhKSAtIDE7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgPlxuICAgICAgICBDYW5jZWxcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD1cInByZXZpb3VzLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzQ2xpY2t9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpc0xhc3RTdGVwKCkgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnQsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VU5SQU5LRUR9IGZyb20gJ3NyYy9jb25zdGFudHMnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJQ3JpdGVyaW9uIGZyb20gJ3NyYy9JbnRlcmZhY2UvSUNyaXRlcmlvbic7XG5pbXBvcnQgQ3JpdGVyaW9uQ2hvaWNlIGZyb20gJy4uLy4uL0NyaXRlcmlvbkNob2ljZS9Dcml0ZXJpb25DaG9pY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5raW5nQ2hvaWNlcyh7XG4gIHNlbGVjdGVkQ3JpdGVyaW9uSWQsXG4gIGhhbmRsZVNlbGVjdGlvblxufToge1xuICBzZWxlY3RlZENyaXRlcmlvbklkOiBzdHJpbmc7XG4gIGhhbmRsZVNlbGVjdGlvbjogKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qge3JhbmtpbmdzLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG4gIGNvbnN0IGZpbHRlcmVkQ3JpdGVyaWEgPSBfLmZpbHRlcihcbiAgICBjcml0ZXJpYSxcbiAgICAoY3JpdGVyaW9uOiBJQ3JpdGVyaW9uKTogYm9vbGVhbiA9PlxuICAgICAgIXJhbmtpbmdzW2NyaXRlcmlvbi5pZF0gfHwgcmFua2luZ3NbY3JpdGVyaW9uLmlkXS5yYW5rID09PSBVTlJBTktFRFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaW1wcm92ZW1lbnRzIGlzIG1vc3QgaW1wb3J0YW50P1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgbmFtZT1cInJhbmtpbmctY3JpdGVyaW9uLXJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge18ubWFwKGZpbHRlcmVkQ3JpdGVyaWEsIChjcml0ZXJpb24pID0+IChcbiAgICAgICAgICAgIDxDcml0ZXJpb25DaG9pY2Uga2V5PXtjcml0ZXJpb24uaWR9IGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG4vLyBpbXBvcnQgSW5saW5lSGVscCBmcm9tICdhcHAvdHMvSW5saW5lSGVscC9JbmxpbmVIZWxwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDaGFuZ2VFdmVudCwgdXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgUmFua2luZ0J1dHRvbnMgZnJvbSAnLi9SYW5raW5nQnV0dG9ucy9SYW5raW5nQnV0dG9ucyc7XG5pbXBvcnQgUmFua2luZ0Nob2ljZXMgZnJvbSAnLi9SYW5raW5nQ2hvaWNlcy9SYW5raW5nQ2hvaWNlcyc7XG5pbXBvcnQgUmFua2luZ1NpdHVhdGlvbiBmcm9tICcuL1JhbmtpbmdTaXR1YXRpb24vUmFua2luZ1NpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdFbGljaXRhdGlvbigpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ3JpdGVyaW9uSWQsIHNldFNlbGVjdGVkQ3JpdGVyaW9uSWRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7Y3VycmVudFN0ZXAsIGNyaXRlcmlhfSA9IHVzZUNvbnRleHQoRWxpY2l0YXRpb25Db250ZXh0KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IF8uc2l6ZShjcml0ZXJpYSkgLSAxO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZENyaXRlcmlvbklkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezR9IHNtPXsxMn0gbWQ9ezl9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInJhbmtpbmctdGl0bGUtaGVhZGVyXCIgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgUmFua2luZyB7Lyo8SW5saW5lSGVscCBoZWxwSWQ9XCJyYW5raW5nXCIgLz4qL31cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFua2luZ1NpdHVhdGlvbiAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8UmFua2luZ0Nob2ljZXNcbiAgICAgICAgICBoYW5kbGVTZWxlY3Rpb249e2hhbmRsZVNlbGVjdGlvbn1cbiAgICAgICAgICBzZWxlY3RlZENyaXRlcmlvbklkPXtzZWxlY3RlZENyaXRlcmlvbklkfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgIDxSYW5raW5nQnV0dG9uc1xuICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaW9uSWQ9e3NlbGVjdGVkQ3JpdGVyaW9uSWR9XG4gICAgICAgICAgc2V0U2VsZWN0ZWRDcml0ZXJpb25JZD17c2V0U2VsZWN0ZWRDcml0ZXJpb25JZH1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0gaWQ9XCJzdGVwLWNvdW50ZXJcIj5cbiAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2Yge3RvdGFsU3RlcHN9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VU5SQU5LRUR9IGZyb20gJ3NyYy9jb25zdGFudHMnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCB7XG4gIGNhbkJlUGVyY2VudGFnZSxcbiAgZ2V0QmVzdCxcbiAgZ2V0V29yc3Rcbn0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBDcml0ZXJpb25TaXR1YXRpb24gZnJvbSAnLi4vLi4vQ3JpdGVyaW9uU2l0dWF0aW9uL0NyaXRlcmlvblNpdHVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtpbmdTaXR1YXRpb24oKSB7XG4gIGNvbnN0IHtyYW5raW5ncywgc2hvd1BlcmNlbnRhZ2VzLCBwdmZzLCBjcml0ZXJpYX0gPSB1c2VDb250ZXh0KFxuICAgIEVsaWNpdGF0aW9uQ29udGV4dFxuICApO1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlVG9EaXNwbGF5KGNyaXRlcmlvbjogSUNyaXRlcmlvbikge1xuICAgIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gICAgY29uc3QgdXNlUGVyY2VudGFnZSA9IHNob3dQZXJjZW50YWdlcyAmJiBjYW5CZVBlcmNlbnRhZ2UodW5pdFR5cGUpO1xuICAgIHJldHVybiAhcmFua2luZ3NbY3JpdGVyaW9uLmlkXSB8fCByYW5raW5nc1tjcml0ZXJpb24uaWRdLnJhbmsgPT09IFVOUkFOS0VEXG4gICAgICA/IGdldFdvcnN0KHB2ZnNbY3JpdGVyaW9uLmlkXSwgdXNlUGVyY2VudGFnZSlcbiAgICAgIDogZ2V0QmVzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ3JpdGVyaW9uU2l0dWF0aW9ucygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiAoXG4gICAgICAgIDxDcml0ZXJpb25TaXR1YXRpb25cbiAgICAgICAgICBrZXk9e2NyaXRlcmlvbi5pZH1cbiAgICAgICAgICBjcml0ZXJpb249e2NyaXRlcmlvbn1cbiAgICAgICAgICBkaXNwbGF5VmFsdWU9e2dldFZhbHVlVG9EaXNwbGF5KGNyaXRlcmlvbil9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkdpdmVuIHRoZSBmb2xsb3dpbmcgc2l0dWF0aW9uOjwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAge3JlbmRlckNyaXRlcmlvblNpdHVhdGlvbnMoKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpbmdCdXR0b25zKCkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFN0ZXAsXG4gICAgc2V0Q3VycmVudFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgc2F2ZUNhbGxiYWNrXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c0NsaWNrKCkge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNhdmVCdXR0b25DbGljaygpIHtcbiAgICBzYXZlQ2FsbGJhY2soT2JqZWN0LnZhbHVlcyhwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXN0U3RlcCgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXAgPT09IDI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbH1cbiAgICAgID5cbiAgICAgICAgQ2FuY2VsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJwcmV2aW91cy1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0NsaWNrfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAxfVxuICAgICAgPlxuICAgICAgICBQcmV2aW91c1xuICAgICAgPC9CdXR0b24+XG4gICAgICB7aXNMYXN0U3RlcCgpID8gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUJ1dHRvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpZD1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHR9IGZyb20gJ3NyYy9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCB7XG4gIGNhbkJlUGVyY2VudGFnZSxcbiAgZ2V0QmVzdCxcbiAgZ2V0VW5pdExhYmVsLFxuICBnZXRXb3JzdFxufSBmcm9tICdzcmMvRWxpY2l0YXRpb25VdGlsL0VsaWNpdGF0aW9uVXRpbCc7XG5pbXBvcnQgSW1wcmVjaXNlU3dpbmdTbGlkZXIgZnJvbSAnc3JjL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdTbGlkZXIvSW1wcmVjaXNlU3dpbmdTbGlkZXInO1xuaW1wb3J0IElDcml0ZXJpb24gZnJvbSAnc3JjL0ludGVyZmFjZS9JQ3JpdGVyaW9uJztcbmltcG9ydCBQcmVjaXNlU3dpbmdTbGlkZXIgZnJvbSAnc3JjL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1NsaWRlci9QcmVjaXNlU3dpbmdTbGlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcml0ZXJpb25PdmVydmlldyh7XG4gIGNyaXRlcmlvblxufToge1xuICBjcml0ZXJpb246IElDcml0ZXJpb247XG59KSB7XG4gIGNvbnN0IHtwdmZzLCBzaG93UGVyY2VudGFnZXMsIGVsaWNpdGF0aW9uTWV0aG9kfSA9IHVzZUNvbnRleHQoXG4gICAgRWxpY2l0YXRpb25Db250ZXh0XG4gICk7XG4gIGNvbnN0IHVuaXRUeXBlID0gY3JpdGVyaW9uLmRhdGFTb3VyY2VzWzBdLnVuaXRPZk1lYXN1cmVtZW50LnR5cGU7XG4gIGNvbnN0IHVzZVBlcmNlbnRhZ2UgPSBzaG93UGVyY2VudGFnZXMgJiYgY2FuQmVQZXJjZW50YWdlKHVuaXRUeXBlKTtcblxuICBmdW5jdGlvbiByZW5kZXJTd2luZ1NsaWRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgaWYgKGVsaWNpdGF0aW9uTWV0aG9kID09PSAncHJlY2lzZScpIHtcbiAgICAgIHJldHVybiA8UHJlY2lzZVN3aW5nU2xpZGVyIGNyaXRlcmlvbj17Y3JpdGVyaW9ufSAvPjtcbiAgICB9IGVsc2UgaWYgKGVsaWNpdGF0aW9uTWV0aG9kID09PSAnaW1wcmVjaXNlJykge1xuICAgICAgcmV0dXJuIDxJbXByZWNpc2VTd2luZ1NsaWRlciBjcml0ZXJpb249e2NyaXRlcmlvbn0gLz47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVSb3cga2V5PXtjcml0ZXJpb24uaWR9PlxuICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBkaXNhYmxlSG92ZXJMaXN0ZW5lcj17IWNyaXRlcmlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICB0aXRsZT17Y3JpdGVyaW9uLmRlc2NyaXB0aW9uID8gY3JpdGVyaW9uLmRlc2NyaXB0aW9uIDogJyd9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcml0ZXJpb24tdGl0bGVcIj57Y3JpdGVyaW9uLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPlxuICAgICAgICB7Z2V0VW5pdExhYmVsKFxuICAgICAgICAgIGNyaXRlcmlvbi5kYXRhU291cmNlc1swXS51bml0T2ZNZWFzdXJlbWVudCxcbiAgICAgICAgICBzaG93UGVyY2VudGFnZXNcbiAgICAgICAgKX1cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7Z2V0V29yc3QocHZmc1tjcml0ZXJpb24uaWRdLCB1c2VQZXJjZW50YWdlKX1cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7Z2V0QmVzdChwdmZzW2NyaXRlcmlvbi5pZF0sIHVzZVBlcmNlbnRhZ2UpfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3JlbmRlclN3aW5nU2xpZGVyKCl9PC9UYWJsZUNlbGw+XG4gICAgPC9UYWJsZVJvdz5cbiAgKTtcbn1cbiIsImltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWxpY2l0YXRpb25Db250ZXh0fSBmcm9tICdzcmMvRWxpY2l0YXRpb25Db250ZXh0L0VsaWNpdGF0aW9uQ29udGV4dCc7XG5pbXBvcnQgSUNyaXRlcmlvbiBmcm9tICdzcmMvSW50ZXJmYWNlL0lDcml0ZXJpb24nO1xuaW1wb3J0IENyaXRlcmlvbk92ZXJ2aWV3IGZyb20gJy4vQ3JpdGVyaW9uT3ZlcnZpZXcvQ3JpdGVyaW9uT3ZlcnZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdmVydmlld1RhYmxlKCkge1xuICBjb25zdCB7Y3JpdGVyaWF9ID0gdXNlQ29udGV4dChFbGljaXRhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNyaXRlcmlvbk92ZXJ2aWV3cygpOiBKU1guRWxlbWVudFtdIHtcbiAgICByZXR1cm4gXy5tYXAoXG4gICAgICBjcml0ZXJpYSxcbiAgICAgIChjcml0ZXJpb246IElDcml0ZXJpb24pOiBKU1guRWxlbWVudCA9PiAoXG4gICAgICAgIDxDcml0ZXJpb25PdmVydmlldyBrZXk9e2NyaXRlcmlvbi5pZH0gY3JpdGVyaW9uPXtjcml0ZXJpb259IC8+XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxuICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUNlbGw+Q3JpdGVyaW9uPC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbD5Vbml0PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPldvcnN0PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkJlc3Q8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+SW1wb3J0YW5jZTwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICA8VGFibGVCb2R5PntyZW5kZXJDcml0ZXJpb25PdmVydmlld3MoKX08L1RhYmxlQm9keT5cbiAgICA8L1RhYmxlPlxuICApO1xufVxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VsaWNpdGF0aW9uQ29udGV4dH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uQ29udGV4dC9FbGljaXRhdGlvbkNvbnRleHQnO1xuaW1wb3J0IHtnZXRTd2luZ1N0YXRlbWVudH0gZnJvbSAnc3JjL0VsaWNpdGF0aW9uVXRpbC9FbGljaXRhdGlvblV0aWwnO1xuaW1wb3J0IE92ZXJ2aWV3VGFibGUgZnJvbSAnLi9PdmVydmlld1RhYmxlL092ZXJ2aWV3VGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2luZ1NldFdlaWdodHMoKSB7XG4gIGNvbnN0IHtcbiAgICBwdmZzLFxuICAgIHNob3dQZXJjZW50YWdlcyxcbiAgICBtb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWQsXG4gICAgZWxpY2l0YXRpb25NZXRob2QsXG4gICAgZ2V0Q3JpdGVyaW9uXG4gIH0gPSB1c2VDb250ZXh0KEVsaWNpdGF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgW3N0YXRlbWVudCwgc2V0U3RhdGVtZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgZ2V0U3dpbmdTdGF0ZW1lbnQoXG4gICAgICBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKSxcbiAgICAgIHB2ZnNbbW9zdEltcG9ydGFudENyaXRlcmlvbklkXSxcbiAgICAgIHNob3dQZXJjZW50YWdlc1xuICAgIClcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXRlbWVudChcbiAgICAgIGdldFN3aW5nU3RhdGVtZW50KFxuICAgICAgICBnZXRDcml0ZXJpb24obW9zdEltcG9ydGFudENyaXRlcmlvbklkKSxcbiAgICAgICAgcHZmc1ttb3N0SW1wb3J0YW50Q3JpdGVyaW9uSWRdLFxuICAgICAgICBzaG93UGVyY2VudGFnZXNcbiAgICAgIClcbiAgICApO1xuICB9LCBbc2hvd1BlcmNlbnRhZ2VzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkXG4gICAgICAgIGl0ZW1cbiAgICAgICAgeHM9ezEyfVxuICAgICAgICBpZD17YCR7ZWxpY2l0YXRpb25NZXRob2R9LXN3aW5nLXN0YXRlbWVudGB9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdGF0ZW1lbnR9fVxuICAgICAgLz5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPE92ZXJ2aWV3VGFibGUgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgVU5SQU5LRUQgPSAwO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUkVDSVNFX1RFTVBMQVRFID1cbiAgXCJZb3UndmUgaW5kaWNhdGVkIHRoYXQgaW1wcm92aW5nICVjcml0ZXJpb24xJSBmcm9tICV3b3JzdDElICV1bml0MSUgdG8gJWJlc3QxJSAldW5pdDElIGlzIHRoZSBtb3N0IGltcG9ydGFudCAoaS5lLiBpdCBoYXMgMTAwJSBpbXBvcnRhbmNlKS4gTm93IGluZGljYXRlIHRoZSByZWxhdGl2ZSBpbXBvcnRhbmNlIChpbiAlKSB0byB0aGlzIGltcHJvdmVtZW50IG9mIGVhY2ggb3RoZXIgY3JpdGVyaW9uJ3MgaW1wcm92ZW1lbnQgdXNpbmcgdGhlIHNsaWRlcnMgYmVsb3cuXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BVENISU5HX1RFTVBMQVRFID1cbiAgJ0hvdyBtdWNoIGJldHRlciBzaG91bGQgJWNyaXRlcmlvbjElIG1pbmltYWxseSBiZWNvbWUgdG8ganVzdGlmeSB0aGUgd29yc2VuaW5nIG9mICVjcml0ZXJpb24yJT8nO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9JREVOVElGSUNBVElPTl9RVUVTVElPTiA9XG4gICdQbGVhc2UgZW50ZXIgeW91ciBuYW1lIG9yIGFuIGluZGVudGlmaWVyIGZvciB5b3VyIHJlc3BvbnNlIGZvciB0aGlzIHN1cnZleTonO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTlRST0RVQ1RJT04gPSAnUGxlYXNlIGZpbGwgaW4gdGhpcyBzdXJ2ZXkuJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRklOSVNIX1NVUlZFWV9NRVNTQUdFID1cbiAgJ1RoYW5rIHlvdSBmb3IgdGFraW5nIHRoaXMgc3VydmV5ISBZb3VyIHJlc3BvbnNlIGhhcyBiZWVuIHJlY29yZGVkLiBZb3UgY2FuIG5vdyBzYWZlbHkgY2xvc2UgdGhlIHdpbmRvdy4nO1xuIiwiaW1wb3J0IHtFbGljaXRhdGlvbkNvbnRleHRQcm92aWRlckNvbXBvbmVudH0gZnJvbSAnLi9FbGljaXRhdGlvbkNvbnRleHQvRWxpY2l0YXRpb25Db250ZXh0JztcbmltcG9ydCBJbXByZWNpc2VTd2luZ1dlaWdodGluZyBmcm9tICcuL0ltcHJlY2lzZVN3aW5nRWxpY2l0YXRpb24vSW1wcmVjaXNlU3dpbmdXZWlnaHRpbmcnO1xuaW1wb3J0IE1hdGNoaW5nRWxpY2l0YXRpb24gZnJvbSAnLi9NYXRjaGluZ0VsaWNpdGF0aW9uL01hdGNoaW5nRWxpY2l0YXRpb24nO1xuaW1wb3J0IFByZWNpc2VTd2luZ1dlaWdodGluZyBmcm9tICcuL1ByZWNpc2VTd2luZ0VsaWNpdGF0aW9uL1ByZWNpc2VTd2luZ1dlaWdodGluZyc7XG5pbXBvcnQgUmFua2luZ0VsaWNpdGF0aW9uIGZyb20gJy4vUmFua2luZ0VsaWNpdGF0aW9uL1JhbmtpbmdFbGljaXRhdGlvbic7XG5cbmV4cG9ydCB7XG4gIEVsaWNpdGF0aW9uQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50LFxuICBQcmVjaXNlU3dpbmdXZWlnaHRpbmcsXG4gIEltcHJlY2lzZVN3aW5nV2VpZ2h0aW5nLFxuICBNYXRjaGluZ0VsaWNpdGF0aW9uLFxuICBSYW5raW5nRWxpY2l0YXRpb25cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQnV0dG9uX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0J1dHRvbkdyb3VwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0dyaWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUGFwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUmFkaW9Hcm91cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9TbGlkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVCb2R5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1RhYmxlQ2VsbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UYWJsZUhlYWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVGFibGVSb3dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfVG9vbHRpcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xvZGFzaF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9