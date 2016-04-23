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
      svg: null,
      color: 'blue'
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
    let color = this.state.color === 'blue' ? 'hover' : 'hover-red'
    el.setAttribute('class', color);
  }

  onHoverOutListItem(id) {
    let el = document.querySelectorAll(`[id='${id}']`)[0];
    el.setAttribute('class', '');
  }

  sortById(a, b) {
    if(a.path_id > b.path_id) return 1;
    if(a.path_id < b.path_id) return -1;
    if(a.path_id = b.path_id) return 1;
    return
  }

  renderPaths(paths) {
    return paths.sort(this.sortById).map((path, index) => {
      return (
        <li
          key={path.path_id}
          className="flexPath"
          onMouseOut={this.onHoverOutListItem.bind(this, path.path_id)}
          onMouseOver={this.onHoverListItem.bind(this, path.path_id)}
        >
          <div>{path.path_id}</div>
          <input
            value={path.amount}
            ref={path.path_id}
          />
        </li>
      )
    })
  }

  render() {
    let Svg = mapping[this.state.svg];
    return (
      <div className="value-glass">
        <div className="radios">
          <label>Highlight Color</label>
          <br/>
          <input
            checked={this.state.color === 'blue'}
            name="color"
            onChange={this.updateColor.bind(this, 'blue')}
            type="radio"
            value="blue"
          /><span>Blue</span>
          <input
            checked={this.state.color === 'red'}
            name="color"
            onChange={this.updateColor.bind(this, 'red')}
            type="radio"
            value="red"
          /><span>Red</span>
        </div>
        <ul className="svg-list">
          {this.renderSvgs()}
        </ul>
        <div className="resize">
          <Svg />
        </div>
        <ul className="path-list flex">
          {this.renderPaths(this.props.paths)}
        </ul>
        <button onClick={this.saveAmounts.bind(this)}>Save Amounts</button>
      </div>
    )
  }

  updateColor(color) {
    this.setState({
      color: color
    })
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
