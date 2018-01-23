import Item from './Item';

export default class RootState {
    readonly whoami: string | null;
    readonly vote: {
        itemA: Item,
        itemB: Item,
    };
}
