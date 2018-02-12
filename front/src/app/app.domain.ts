import Item from '../vote/item/voteItem.domain';
import Result from '../result/result.domain';
import { InsertState } from '../insert/insert.duck';

export default class App {
    readonly login: string | null;
    readonly vote: {
        itemA: Item,
        itemB: Item,
    } | null;
    readonly result: Result | null;
    readonly error: boolean;
    readonly pending: boolean;
    readonly page: string;
    readonly insert: InsertState;
}
