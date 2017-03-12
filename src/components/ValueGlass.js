import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPathInfo,
  retrieveSvg,
  saveAmounts
} from '../actions/GlassActions';
import Spinner from 'react-spinkit';
import Skylight from './ReactSkylight';
import { getSvgs } from '../actions/GlassActions';

import s from './ValueGlass.css';
require('!style!css!sass!./../styles/hover.scss');

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
    this.props.dispatch(retrieveSvg(title));
  }

  renderSvgs() {
    return this.props.svgs.map((svg, index) => {
      return (
        <li
          className={s.svgListItem}
          key={index}
          onClick={this.getSvgAndPaths.bind(this, svg.title)}
        >
          {svg.title}
        </li>
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

  componentWillReceiveProps(newProps) {
    if(newProps.popup) {
      this.refs.success.show();
    } else {
      if(this.refs.success) {
        this.refs.success.hide();
      }
    }
  }

  renderPaths(paths) {
    return paths.sort(this.sortById).map((path, index) => {
      return (
        <li
          key={path.path_id}
          className={s.flexPath}
          onMouseOut={this.onHoverOutListItem.bind(this, path.path_id)}
          onMouseOver={this.onHoverListItem.bind(this, path.path_id)}
        >
          <div className={s.pathId}>{path.path_id}</div>
          <input
            value={path.amount}
            ref={path.path_id}
            onChange={this.updateInput.bind(this, path.path_id)}
          />
        </li>
      )
    })
  }

  updateInput(id, e) {
    this.props.paths[id - 1].amount = e.currentTarget.value
    this.forceUpdate();
  }

  render() {
    let showSpinner = !this.props.showSpinner ? ({
      display: 'none'
    }) : null;
    return (
      <div className={s.valueGlass}>
        <div>
          <label>Highlight Color</label>
          <br/>
          <div className={s.radios}>
            <input
              className={s.radioInput}
              checked={this.state.color === 'blue'}
              name="color"
              onChange={this.updateColor.bind(this, 'blue')}
              type="radio"
              value="blue"
            />
            <span className={s.radioLabel}>Blue</span>
            <input
              className={s.radioInput}
              checked={this.state.color === 'red'}
              name="color"
              onChange={this.updateColor.bind(this, 'red')}
              type="radio"
              value="red"
            />
            <span className={s.radioLabel}>Red</span>
          </div>
        </div>
        <ul className={s.svgList}>
          {this.renderSvgs()}
        </ul>
        <div className={s.resize}>
          <div dangerouslySetInnerHTML={{__html: this.props.svg}}></div>
        </div>
        <ul className={s.pathList}>
          {this.renderPaths(this.props.paths)}
        </ul>
        <Skylight
					ref="success"
          hideCloseButton={true}
          title="Success" />
        <Spinner style={showSpinner} spinnerName='three-bounce' />
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
    popup: state.popup,
    paths: state.paths,
    svg: state.svgMapping,
    svgs: state.svgs,
    showSpinner: state.spinner
  }
}

export default connect(mapStateToProps)(ValueGlass);
