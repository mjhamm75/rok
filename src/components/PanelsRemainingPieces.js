import React, { Component } from 'react';
import {
  getPanelsInfo,
  purchaseAll
} from '../actions/GlassActions';
import { connect } from 'react-redux';
import Skylight from './ReactSkylight';
import classnames from 'classnames';

import s from './PanelsRemainingPieces.css';

class PanelsRemainingPieces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelTitle: null,
      purchaserRequiredError: false
    }
    props.dispatch(getPanelsInfo());
  }

  showPurchaseAllModal(title) {
    this.setState({
      panelTitle: title
    }, () => this.refs.purchaseAll.show());
  }

  renderPanels(panels) {
    return Object.entries(panels).sort().map(
      ([key, value], index) => {
        return (
          <tr key={index}>
            <td>{key}</td>
            <td>{value.unpurchasedPieces}</td>
            <td>{value.totalPieces - value.unpurchasedPieces}</td>
            <td>{value.unpurchasedAmount}</td>
            <td>
              <a
                className={s.button}
                onClick={() => this.showPurchaseAllModal(key)}
              >Purchase All</a></td>
          </tr>
        )
      }
    );
  }

  purchaseAll() {
    var title = this.state.panelTitle;
    var purchaser = this.refs.purchaserName.value;
    if(!purchaser) {
      this.setState({
        purchaserRequiredError: true
      })
    } else {
      this.props.dispatch(purchaseAll(title, purchaser));
      this.refs.purchaseAll.hide();


    }
  }

  render() {
    var labelClassName = classnames({
      [s.error] : this.state.purchaserRequiredError
    });
    var inputClassName = classnames(s.input, {
      [s.error] : this.state.purchaserRequiredError
    });
    var errorClassName = classnames(s.hide, {
      [s.show] : this.state.purchaserRequiredError,
      [s.error] : this.state.purchaserRequiredError
    });

    if(!this.props.panels) {
      return null;
    } else {
      this.renderPanels(this.props.panels);
      return (
        <div>
          <div className={s.panels}>
            <table>
              <thead>
                <tr>
                  <th>Panel</th>
                  <th>Unpurchased Pieces</th>
                  <th>Purchased Pieces</th>
                  <th>Remaining Cost</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderPanels(this.props.panels)}
              </tbody>
            </table>
            <Skylight
              marginTop="-4500px"
              height="300px"
              title={`Panel ${this.state.panelTitle}`}
              width="450px"
              ref="purchaseAll"
              hideOnOverlayClicked>
              <div className={s.skylight}>
                <div>This will be very difficult to undo.  Please make sure You are ready to pull this whole panel off the market.</div>
                <div className={s.field}>
                  <div className={s.purchaserName}>
                    <label className={labelClassName}>Purchaser Name</label>
                    <input ref="purchaserName" className={s.input}/>
                  </div>
                  <div className={errorClassName}>
                    <div>Purchaser name required</div>
                  </div>
                </div>
                <div className={s.buttonContainer}>
                  <a
                    className={s.button}
                    onClick={this.purchaseAll.bind(this)}>Purchase Now</a>
                </div>
              </div>
            </Skylight>
          </div>
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
