export default class Item {
    readonly id: number;
    readonly value: string;
    readonly better: ReadonlyArray<string>;
    readonly lesser: ReadonlyArray<string>;
    readonly veto: boolean;

    constructor(
        id: number,
        value: string,
        better: ReadonlyArray<string>,
        lesser: ReadonlyArray<string>,
        veto: boolean
    ) {
        this.id = id;
        this.value = value;
        this.better = better;
        this.lesser = lesser;
        this.veto = veto;
    }
}