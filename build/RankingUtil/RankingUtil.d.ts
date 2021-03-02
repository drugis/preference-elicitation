import ICriterion from 'src/Interface/ICriterion';
import IRanking from 'src/Interface/IRanking';
import IRankingAnswer from 'src/Interface/IRankingAnswer';
export declare const UNRANKED = 0;
export declare function findCriterionIdForRank(criteria: ICriterion[], rankings: Record<string, IRankingAnswer>, rank: number): string;
export declare function assignMissingRankings(rankings: Record<string, IRankingAnswer>, selectedCriterionId: string, rank: number, criteria: ICriterion[]): Record<string, IRankingAnswer>;
export declare function addRanking(rankings: Record<string, IRankingAnswer>, criterionId: string, rank: number): Record<string, IRankingAnswer>;
export declare function buildRankingPreferences(answers: IRankingAnswer[]): IRanking[];
