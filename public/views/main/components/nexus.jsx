import React, { Component } from 'react';
import Sections from './nexus/sections.jsx';
import NexusStore from './stores/nexusStore.jsx';
import LateralPanel from './standars/panelLateral.jsx';

export default class Nexus extends Component {
    constructor() {
        super();
        this.state = this.getState();
        this.onChange = this.onChange.bind(this);
    }

    getState() {
        return NexusStore.getState();
    }

    componentDidMount() {
        NexusStore.listen(this.onChange);
    }

    componentWillUnmount() {
        NexusStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div id="meloContainer" className="main-melo">
                <Sections 
                    sectionClass={ this.state.sectionClass } 
                    textType={ this.state.textType }>
                </Sections>

                <LateralPanel classLateralIcons={ this.state.classLateralIcons }>
                </LateralPanel>
            </div>
        )
    }
};
