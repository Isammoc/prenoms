import Item from './Item';
import Result from './Result';

export default class RootState {
    readonly whoami: string | null;
    readonly vote: {
        itemA: Item,
        itemB: Item,
    } | null;
    readonly result: Result | null;
    readonly error: boolean;
    readonly pending: boolean;
    readonly where: string;
}
