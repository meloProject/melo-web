import React, { Component } from 'react';
import Swittcher from './../standars/swittcher.js';

import SectionType from './sectionType.jsx';
import SectionContact from './sectionContact.jsx';
import SectionLink from './sectionLink.jsx';

export default class Sections extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        Swittcher.init();
    }

    render() {
        return (
        <div className="main-nexus" id="swittcher">
            <SectionType textType={ this.props.textType } />
            <SectionContact sectionClass={ this.props.sectionClass  }/>
            <SectionLink qrcode={ this.props.qrcode } />
        </div>
        )
    }
};
