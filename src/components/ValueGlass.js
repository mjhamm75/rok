import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSvgs } from '../actions/GlassActions';
require('!style!css!sass!./../sass/value-glass.scss');

class ValueGlass extends Component {
  constructor(props) {
    super(props);
    props.dispatch(getSvgs());
  }

  showPaths() {
    debugger;
  }

  renderSvgs() {
    return this.props.svgs.map((svg, index) => {
      return (
          <li key={index} onClick={this.showPaths.bind(this)}>{svg.title}</li>
      )
    });
  }

  render() {
    return (
      <ul>
        {this.renderSvgs()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    svgs: state.svgs
  }
}

export default connect(mapStateToProps)(ValueGlass);
