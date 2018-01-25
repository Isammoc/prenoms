import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { reject, vote, firstVote } from '../actions/vote';

import VoteComponent from '../component/VoteComponent';

import RootState from '../domain/RootState';
import Item from '../domain/Item';

const mapStateToProps = (state: RootState) => {
    return {
        a: state.vote.itemA,
        b: state.vote.itemB
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        onReject: (item: Item) => dispatch(reject(item.id)),
        onSelect: (item: Item) => dispatch(vote(item.id)),
        onLoad: () => { dispatch(firstVote()); }
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VoteComponent);

export default AppContainer;