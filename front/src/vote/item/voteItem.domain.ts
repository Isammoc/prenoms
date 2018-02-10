export default class Item {
    readonly id: number;
    readonly value: string;
    readonly vetoable: boolean;

    constructor(
        id: number,
        value: string,
        vetoable: boolean
    ) {
        this.id = id;
        this.value = value;
        this.vetoable = vetoable;
    }
}