import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { whoIam, AppAction } from '../actions';
import { Login } from '../component/Login';

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
    return {
        onMother: () => {dispatch(whoIam('Mother')); },
        onFather: () => {dispatch(whoIam('Father')); },
    };
};

const VisibleLogin = connect(
    null,
    mapDispatchToProps
)(Login);

export default VisibleLogin;