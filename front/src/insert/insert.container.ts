import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import App from '../app/app.domain';
import { InsertComponent } from './insert.component';
import { initInsert, contentChange, submit, toggleForce, InsertState } from './insert.duck';

const insertState = (state: App) => state.insert;

const mapStateToProps = (state: InsertState) => {
    if (state.message) {
        return {
            content: state.content,
            message: state.message,
            showForce: state.displayForce,
            force: state.force
        };
    } else {
        return {
            content: state.content,
            showForce: state.displayForce,
            force: state.force
        };
    }
};

const InsertContainer = connect(
    (state: App) => mapStateToProps(insertState(state)),
    (dispatch: Dispatch<App>) => {
        return {
            onLoad: () => { dispatch(initInsert()); },
            onChange: (content: string) => { dispatch(contentChange(content)); },
            onSubmit: () => { dispatch(submit()); },
            toggleForce: () => { dispatch(toggleForce()); },
        };
    }
)(InsertComponent);

export default InsertContainer;
