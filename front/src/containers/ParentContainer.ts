import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { whoIam } from '../actions/creators';
import { ParentComponent } from '../component/ParentComponent';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onMother: () => {dispatch(whoIam('Mother')); },
        onFather: () => {dispatch(whoIam('Father')); },
    };
};

const ParentContainer = connect(
    null,
    mapDispatchToProps
)(ParentComponent);

export default ParentContainer;