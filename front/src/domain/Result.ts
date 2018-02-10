import * as Immutable from 'immutable';

class OneResult {
    readonly during: boolean;
    readonly best: Immutable.List<string>;

    constructor(during: boolean, best: Immutable.List<string>) {
        this.during = during;
        this.best = best;
    }
}

export default class Result {
    readonly mother: OneResult;
    readonly father: OneResult;

    constructor(mother: OneResult, father: OneResult) {
        this.mother = mother;
        this.father = father;
    }
}