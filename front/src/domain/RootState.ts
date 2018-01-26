import Item from './Item';
import { VoteServiceState } from '../service/vote.service.domain';

export default class RootState {
    readonly whoami: string | null;
    readonly vote: {
        itemA: Item,
        itemB: Item,
    } | null;
    readonly internal: VoteServiceState;
}
