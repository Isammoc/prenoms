import { ServiceItem, VoteServiceState } from './vote.service.domain';

export class VoteService {
  newVote(state: VoteServiceState): ReadonlyArray<ServiceItem> {
    const possible = state.filter((item) => !item.veto);

    const a = possible
        .reduce((result, current) => {
            if (current.lesser.size + current.better.size < result.lesser.size + result.better.size) {
                return current;
            } else if (
                current.lesser.size + current.better.size === result.lesser.size + result.better.size
                && current.id < result.id
            ) {
                return current;
            } else {
                return result;
            }
        });

    const b = possible
        .filter((item) => 
            item.id !== a.id
            && !a.lesser.has(item.id)
            && !a.better.has(item.id)
        ).reduce((result, current) => {
            if (current.lesser.size + current.better.size < result.lesser.size + result.better.size) {
                return current;
            } else if (
                current.lesser.size + current.better.size === result.lesser.size + result.better.size
                && current.id < result.id
            ) {
                return current;
            } else {
                return result;
            }
        });
    return [a, b];
  }
}

const voteService = new VoteService();
export default voteService;