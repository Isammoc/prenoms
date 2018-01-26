import { ServiceItem, VoteServiceState } from './vote.service.domain';

export class VoteService {
  newVote(state: VoteServiceState): ReadonlyArray<ServiceItem> {
    const possible = state.filter((item) => !item.veto);

    const a = possible
        .reduce((result, current) => {
            if (current.lesser.length + current.better.length < result.lesser.length + result.better.length) {
                return current;
            } else if (
                current.lesser.length + current.better.length === result.lesser.length + result.better.length
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
            && a.lesser.indexOf(item.id) === -1
            && a.better.indexOf(item.id) === -1
        ).reduce((result, current) => {
            if (current.lesser.length + current.better.length < result.lesser.length + result.better.length) {
                return current;
            } else if (
                current.lesser.length + current.better.length === result.lesser.length + result.better.length
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