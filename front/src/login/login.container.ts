import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { login } from './login.action';
import { LoginComponent } from './login.component';
import App from '../app/app.domain';

const mapStateToProps = (state: App) => {
    return {
    };
};

const mapDispatchToProps = (dispatch: Dispatch<App>) => {
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