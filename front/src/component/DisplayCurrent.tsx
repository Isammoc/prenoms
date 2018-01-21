import * as React from 'react';

import Item from '../service/Item';

import DisplayFullItem from './DisplayFullItem';

interface CurrentProps {
    items: ReadonlyArray<Item>;
}

export default class DisplayCurrent extends React.Component<CurrentProps, {}> {
    render() {
        let vetoed = this.props.items.filter((item) => item.veto);
        let remaining = this.props.items.filter((item) => !item.veto).sort((a, b) => {
            if (a.lesser.length > b.lesser.length ) {
                return -1;
            } else if (a.lesser.length < b.lesser.length) {
                return 1;
            } else {
                return a.better.length - b.better.length;
            }
        });
        return (
            <div className="Current">
                <div className="remaining">
                    {remaining.map((item) => (
                        <DisplayFullItem item={item} key={item.id}/>
                    ))}
                </div>
                <hr />
                <div className="vetoed">
                    {vetoed.map((item) => (
                        <DisplayFullItem item={item} key={item.id}/>
                    ))}
                </div>
            </div>
        );
    }
}