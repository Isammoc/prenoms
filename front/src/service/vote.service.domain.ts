import * as Immutable from 'immutable';

export type VoteServiceState = Array<ServiceItem>;

export class ServiceItem {
    readonly id: number;
    readonly value: string;
    readonly better: Immutable.Set<number>;
    readonly lesser: Immutable.Set<number>;
    readonly veto: boolean;

    constructor(
        id: number,
        value: string,
        better: Immutable.Set<number>,
        lesser: Immutable.Set<number>,
        veto: boolean
    ) {
        this.id = id;
        this.value = value;
        this.better = better;
        this.lesser = lesser;
        this.veto = veto;
    }
}
