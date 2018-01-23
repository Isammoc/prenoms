import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { whoIam, AppAction } from '../actions';
import { ParentComponent } from '../component/ParentComponent';

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
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