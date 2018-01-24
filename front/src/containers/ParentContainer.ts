import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { ParentComponent } from '../component/ParentComponent';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onMother: () => {dispatch(login('Mother')); },
        onFather: () => {dispatch(login('Father')); },
    };
};

const ParentContainer = connect(
    null,
    mapDispatchToProps
)(ParentComponent);

export default ParentContainer;