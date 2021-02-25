import { ChangeEvent } from 'react';
export default function RankingChoices({ selectedCriterionId, handleSelection }: {
    selectedCriterionId: string;
    handleSelection: (event: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element;
