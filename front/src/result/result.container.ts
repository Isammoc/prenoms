import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchResult } from './result.action';

import { ResultComponent } from './result.component';

import App from '../app/app.domain';

const mapStateToProps = (state: App) => {
    return {
        result: state.result,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<App>) => {
    return {
        onLoad: () => dispatch(fetchResult()),
    };
};

const ResultContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultComponent);

export default ResultContainer;
