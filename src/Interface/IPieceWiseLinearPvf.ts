import IPvf from './TPvf';

export interface IPieceWiseLinearPvf extends IPvf {
  type: 'piecewise-linear';
  cutoffs: number[];
  values: number[];
}
