export type VoteServiceState = Array<ServiceItem>;

export class ServiceItem {
    readonly id: number;
    readonly value: string;
    readonly better: ReadonlyArray<number>;
    readonly lesser: ReadonlyArray<number>;
    readonly veto: boolean;

    constructor(
        id: number,
        value: string,
        better: ReadonlyArray<number>,
        lesser: ReadonlyArray<number>,
        veto: boolean
    ) {
        this.id = id;
        this.value = value;
        this.better = better;
        this.lesser = lesser;
        this.veto = veto;
    }
}
