import * as React from 'react';

const spinner = require('./spinner.gif');

export const PendingComponent: React.SFC<{}> = (props) => (
    <div
        style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 10000,
        }}
    >
        <img style={{ marginTop: '50vh', transform: 'translateY(-50%)'}} src={spinner} />
    </div>
);
