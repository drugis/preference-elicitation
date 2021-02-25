import { TPvfDirection } from 'src/Types/PvfTypes';
import { ILinearPvf } from './ILinearPvf';
import { IPieceWiseLinearPvf } from './IPieceWiseLinearPvf';
export declare type TPvf = ILinearPvf | IPieceWiseLinearPvf;
export default interface IPvf {
    direction: TPvfDirection;
    range: [number, number];
}
