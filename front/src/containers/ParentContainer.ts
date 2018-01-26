import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { login } from '../actions/login.action';
import { ParentComponent } from '../component/ParentComponent';
import RootState from '../domain/RootState';

const mapStateToProps = (state: RootState) => {
    return {
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        onMother: () => {dispatch(login('Mother')); },
        onFather: () => {dispatch(login('Father')); },
    };
};

const ParentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ParentComponent);

export default ParentContainer;