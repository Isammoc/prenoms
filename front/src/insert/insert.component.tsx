import * as React from 'react';

interface InsertProps {
    content: string;
    message?: string;
    showForce: boolean;
    force: boolean;
    onLoad: () => void;
    onChange: (content: string) => void;
    toggleForce: () => void;
    onSubmit: () => void;
}

function uniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

export class InsertComponent extends React.Component<InsertProps, {}> {
    render() {
        const props = this.props;
        const forceId = uniqueId();
        return (
            <div
                style={{
                    flex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                <label htmlFor="content">Quel prénom voulez-vous ajouter ?</label>
                {props.message && <p style={{ color: '#cc1c1c', fontSize: '.5em' }}>{props.message}</p>}
                <input
                    style={{ fontSize: '10vh' }}
                    type="text"
                    name="content"
                    onChange={(e) => props.onChange(e.target.value)}
                    value={props.content}
                />
                {props.showForce &&
                    <span>
                        <input
                            id={forceId}
                            type="checkbox"
                            name="force"
                            checked={props.force}
                            onChange={props.toggleForce}
                            style={{
                                width: '2em',
                                height: '2em',
                            }}
                        />
                        <label htmlFor={forceId}>J'enlève le véto !</label>
                    </span>
                }
                <div className="action">
                    <button
                        style={{
                            backgroundColor: '#4CAF50',
                            border: 'none',
                            color: 'white',
                            padding: '.5em .25em',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '8vh',
                            margin: '.4em',
                            cursor: 'pointer',
                        }}
                        type="submit"
                        onClick={(e) => { e.preventDefault(); props.onSubmit(); }}
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        );
    }
}
