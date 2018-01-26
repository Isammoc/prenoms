import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppAction } from '../actions';
import App from '../App';
import RootState from '../domain/RootState';

const mapStateToProps = (state: RootState) => {
  return {
    logged: state.whoami !== null,
    hasVote: state.vote !== null,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
  return {};
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;