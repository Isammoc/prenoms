import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { login } from './login.action';
import { LoginComponent } from './login.component';
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

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export default LoginContainer;