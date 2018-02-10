import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { navigateToResult, navigateToVote, PAGE_RESULT, PAGE_VOTE } from './navigation.action';
import { NavigationComponent } from './navigation.component';
import App from '../app/app.domain';

const mapStateToProps = (state: App) => {
    return {
        current: state.page,
        canVote: state.vote !== null,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<App>) => {
    return {
        navigate: (page: string) => {
            switch (page) {
                case PAGE_RESULT:
                    dispatch(navigateToResult());
                    break;
                case PAGE_VOTE:
                default:
                    dispatch(navigateToVote());
            }
        },
    };
};

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationComponent);

export default NavigationContainer;