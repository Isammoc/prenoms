import * as React from 'react';

export const ErrorComponent: React.SFC<{}> = (props) => (
    <div style={{flex: 1}}>
        <p>Une erreur est survenue.</p>
        <p>Merci de rafraîchir l'application.</p>
    </div>
);
