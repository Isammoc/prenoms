import * as Immutable from 'immutable';

export class OneResult {
    readonly during: boolean;
    readonly best: Immutable.List<string>;

    // tslint:disable-next-line:no-any
    public static of(json: any) {
        return new OneResult(json.during, Immutable.List.of(...json.best));
    }

    constructor(during: boolean, best: Immutable.List<string>) {
        this.during = during;
        this.best = best;
    }
}

export default class Result {
    readonly mother: OneResult;
    readonly father: OneResult;

    // tslint:disable-next-line:no-any
    public static of(json: any) {
        return new Result(OneResult.of(json.mother), OneResult.of(json.father));
    }

    constructor(mother: OneResult, father: OneResult) {
        this.mother = mother;
        this.father = father;
    }
}
