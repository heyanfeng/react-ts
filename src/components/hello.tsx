import React from 'react';
import '../App.css';

export interface Props {
    name: string;
}

export default class Hello extends React.Component<Props, object> {
    render() {
        const { name } = this.props;

        return (
            <div className="app">hello {name}</div>
        )
    }
}