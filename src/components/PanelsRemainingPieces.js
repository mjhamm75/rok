import React, { Component } from 'react';
import { getPanelsInfo } from '../actions/GlassActions';
import { connect } from 'react-redux';

import s from './PanelsRemainingPieces.css';

class PanelsRemainingPieces extends Component {
  constructor(props) {
    super(props);
    props.dispatch(getPanelsInfo());
  }

  renderPanels(panels) {
    return Object.entries(panels).map(
      ([key, value]) => {
        return (
          <tr>
            <td>{key}</td>
            <td>{value.count}</td>
            <td>{value.sum}</td>
          </tr>
        )
      }
    );
  }

  render() {
    if(!this.props.panels) {
      return null;
    } else {
      this.renderPanels(this.props.panels);
      return (
        <div className={s.panels}>
          <table>
            {this.renderPanels(this.props.panels)}
          </table>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
	return {
    panels: state.panels
	}
}
export default connect(mapStateToProps)(PanelsRemainingPieces);
