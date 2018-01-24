import { Action } from 'redux';

export const WHOAMI = 'WHO_AM_I';

export interface WhoIAm extends Action {
    parent: string;
}

export type ParentAction = WhoIAm;
export default ParentAction;
