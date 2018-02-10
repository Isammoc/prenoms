import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { reject, vote } from './vote.action';

import VoteComponent from './vote.component';

import RootState from '../domain/RootState';
import Item from './item/voteItem.domain';

const mapStateToProps = (state: RootState) => {
    return {
        a: state.vote!.itemA,
        b: state.vote!.itemB
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        onReject: (item: Item) => dispatch(reject(item.id)),
        onSelect: (item: Item) => dispatch(vote(item.id)),
    };
};

const VoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VoteComponent);

export default VoteContainer;