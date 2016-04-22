import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPathInfo, saveAmounts } from '../actions/GlassActions';
import mapping from '../mappings/mapping.js';

import { getSvgs } from '../actions/GlassActions';
require('!style!css!sass!./../sass/value-glass.scss');

class ValueGlass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svg: null
    }
    props.dispatch(getSvgs());
  }

  getSvgAndPaths(title) {
    this.setState({
      svg: title
    })
    this.props.dispatch(getPathInfo(title));
  }

  renderSvgs() {
    return this.props.svgs.map((svg, index) => {
      return (
          <li key={index} onClick={this.getSvgAndPaths.bind(this, svg.title)}>{svg.title}</li>
      )
    });
  }

  onHoverListItem(id) {
    let el = document.querySelectorAll(`[id='${id}']`)[0];
    el.setAttribute('class', 'hover');
  }

  onHoverOutListItem(id) {
    let el = document.querySelectorAll(`[id='${id}']`)[0];
    el.setAttribute('class', '');
  }

  renderPaths(paths) {
    return paths.map((path, index) => {
      return (
        <li
          key={path.path_id}
          className="flexPath"
          onMouseOut={this.onHoverOutListItem.bind(this, path.path_id)}
          onMouseOver={this.onHoverListItem.bind(this, path.path_id)}
        >
          <div>{path.path_id}</div>
          <input
            defaultValue={path.amount}
            ref={path.path_id}
          />
        </li>
      )
    })
  }

  render() {
    console.log(mapping)
    let Svg = mapping[this.state.svg];
    return (
      <div className="value-glass">
        <ul className="list">
          {this.renderSvgs()}
        </ul>
        <div className="resize">
          <Svg />
        </div>
        <ul className="list flex">
          {this.renderPaths(this.props.paths)}
        </ul>
        <button onClick={this.saveAmounts.bind(this)}>Save Amounts</button>
      </div>
    )
  }

  saveAmounts() {
    var that = this;
    let pathsWithAmount = this.props.paths.map(path => {
      return {
        path_id: path.path_id,
        amount: that.refs[path.path_id].value
      }
    })
    this.props.dispatch(saveAmounts(this.state.svg, pathsWithAmount));
  }
}

function mapStateToProps(state) {
  return {
    paths: state.paths,
    svgs: state.svgs
  }
}

export default connect(mapStateToProps)(ValueGlass);
