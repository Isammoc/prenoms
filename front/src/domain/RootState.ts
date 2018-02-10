import Item from '../vote/item/voteItem.domain';
import Result from '../result/result.domain';

export default class RootState {
    readonly login: string | null;
    readonly vote: {
        itemA: Item,
        itemB: Item,
    } | null;
    readonly result: Result | null;
    readonly error: boolean;
    readonly pending: boolean;
    readonly where: string;
}
