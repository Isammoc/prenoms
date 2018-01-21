import * as React from 'react';

import Item from '../service/Item';

interface DisplayFullItemProps {
    item: Item;
}

export default class DisplayFullItem extends React.Component<DisplayFullItemProps, {}> {
    render() {
        let display;
        
        if (this.props.item.veto) {
            display = (<p>{this.props.item.value}</p>);
        } else {
            display = (
                <p>
                    {this.props.item.value} (
                    <span title={this.props.item.lesser.join(' ')}>
                        {this.props.item.lesser.length}
                    </span>
                    /
                    <span title={this.props.item.better.join(' ')}>
                        {this.props.item.better.length}
                    </span>
                    )
                </p>
            );
        }
        return (
            <div className={'item ' + (this.props.item.veto ? 'vetoed' : '')}>
                {display}
            </div>
        );
    }
}
