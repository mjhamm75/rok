import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSvgs } from '../actions/GlassActions';

class ValueGlass extends Component {
  constructor(props) {
    super(props);
    props.dispatch(getSvgs());
  }

  renderSvgs() {
    return this.props.svgs.map(svg => {
      return <li>{svg.title}</li>
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
