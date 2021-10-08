import _ from 'lodash';
import {createContext, useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IThresholdElicitationContext from './IThresholdElicitationContext';
import {
  calculateInputValuesByCriterion,
  calculateReferenceChangeRatio,
  getInitialValidity
} from './ThresholdElicitationUtil';
import {TThresholdChangeDirection} from './TThresholdChangeDirection';

export const ThresholdElicitationContext =
  createContext<IThresholdElicitationContext>(
    {} as IThresholdElicitationContext
  );

export function ThresholdElicitationContextProviderComponent({
  children
}: {
  children: any;
}) {
  const {criteria, pvfs, getCriterion, stepSizesByCriterion} =
    useContext(ElicitationContext);

  const [direction, setDirection] = useState<TThresholdChangeDirection>();
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);
  const [
    equivalentChangeForReferenceCriterion,
    setEquivalentChangeForReferenceCriterion
  ] = useState<number>();
  const [mostImportantCriterionId, setMostImportantCriterionId] =
    useState<string>();
  const [preferences, setPreferences] = useState<
    Record<string, IExactSwingRatio>
  >({});
  const [inputValuesByCriterion, setInputValuesByCriterion] =
    useState<Record<string, number>>();

  const [valueValidityByCriterionId, setValueValidityByCriterionId] = useState<
    Record<string, boolean>
  >(getInitialValidity(criteria));
  const [isInvalidReferenceValue, setIsInvalidReferenceValue] =
    useState<boolean>(false);

  useEffect(() => {
    if (mostImportantCriterionId) {
      setEquivalentChangeForReferenceCriterion(
        stepSizesByCriterion[mostImportantCriterionId]
      );
    }
  }, [mostImportantCriterionId, stepSizesByCriterion]);

  useEffect(() => {
    if (mostImportantCriterionId && equivalentChangeForReferenceCriterion) {
      const otherCriteria = _.reject(criteria, [
        'id',
        mostImportantCriterionId
      ]);
      const referenceChangeRatio = calculateReferenceChangeRatio(
        equivalentChangeForReferenceCriterion,
        pvfs[mostImportantCriterionId].range
      );

      const newInputValues = calculateInputValuesByCriterion(
        otherCriteria,
        referenceChangeRatio,
        pvfs,
        stepSizesByCriterion
      );

      setInputValuesByCriterion(newInputValues);
    }
  }, [
    criteria,
    equivalentChangeForReferenceCriterion,
    mostImportantCriterionId,
    pvfs,
    stepSizesByCriterion
  ]);

  function setCriterionInputValue(criterionId: string, value: number): void {
    const newInputValues = {
      ..._.cloneDeep(inputValuesByCriterion),
      [criterionId]: value
    };
    setInputValuesByCriterion(newInputValues);
  }

  function getInputValueForCriterion(criterionId: string): number {
    return inputValuesByCriterion[criterionId];
  }

  function setIsValidValue(criterionId: string, validity: boolean) {
    const newValidity: Record<string, boolean> = {
      ...valueValidityByCriterionId,
      [criterionId]: validity
    };
    setValueValidityByCriterionId(newValidity);
    setIsSaveButtonDisabled(hasInvalidValue(newValidity));
  }

  function hasInvalidValue(validityById: Record<string, boolean>) {
    return _.some(validityById, (validity) => !validity);
  }

  return (
    <ThresholdElicitationContext.Provider
      value={{
        direction,
        mostImportantCriterionId,
        preferences,
        equivalentChangeForReferenceCriterion,
        inputValuesByCriterion,
        isSaveButtonDisabled,
        isInvalidReferenceValue,
        setDirection,
        setIsSaveButtonDisabled,
        setIsValidValue,
        setMostImportantCriterionId,
        setPreferences,
        setEquivalentChangeForReferenceCriterion,
        setCriterionInputValue,
        getInputValueForCriterion,
        setIsInvalidReferenceValue
      }}
    >
      {children}
    </ThresholdElicitationContext.Provider>
  );
}
