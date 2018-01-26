export type VoteServiceState = Array<ServiceItem>;

export class ServiceItem {
    readonly id: number;
    readonly value: string;
    readonly better: ReadonlySet<number>;
    readonly lesser: ReadonlySet<number>;
    readonly veto: boolean;

    constructor(
        id: number,
        value: string,
        better: ReadonlySet<number>,
        lesser: ReadonlySet<number>,
        veto: boolean
    ) {
        this.id = id;
        this.value = value;
        this.better = better;
        this.lesser = lesser;
        this.veto = veto;
    }
}
