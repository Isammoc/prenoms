import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppAction } from '../actions';
import AppComponent from './app.component';
import App from './app.domain';

const mapStateToProps = (state: App) => {
  return {
    logged: state.login !== null,
    hasVote: state.vote !== null,
    error: state.error,
    pending: state.pending,
    where: state.page,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
  return {};
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default AppContainer;