import * as React from 'react';
import Result from './result.domain';
import { OneResult } from './result.domain';

interface OneResultProps {
    result: OneResult;
    img: string;
}

const OneResultComponent: React.SFC<OneResultProps> = (props) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <img style={{ flex: 1 }} src={props.img} />
        <span style={{ }} >{props.result ? (props.result.during ? 'En cours' : 'Final') : undefined}</span>
        <div style={{ flex: 10, display: 'flex', flexDirection: 'column', fontSize: '5vh' }}>
            {props.result.best.map((name) => (<span key={name} style={{ flex: 1 }}>{name}</span>))}
        </div>
    </div>
);

interface ResultProps {
    result: Result;
    onLoad: () => void;
}

const fatherImg = require('../login/father.svg');
const motherImg = require('../login/mother.svg');

export class ResultComponent extends React.Component<ResultProps, {}> {
    componentWillMount() {
        this.props.onLoad();
    }

    render() {
        const props = this.props;
        if (props.result) {
            return (
                <div style={{ flex: 20, display: 'flex' }}>
                    <OneResultComponent result={props.result.father} img={fatherImg} />
                    <OneResultComponent result={props.result.mother} img={motherImg} />
                </div>
            );
        } else {
            return (<div />);
        }
    }
}
