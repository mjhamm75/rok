import React from 'react';
require('!style!css!sass!./skylight.scss');

class SkyLight extends React.Component {

  constructor(props){
    super(props);
    this.state = { isVisible: false };
  }

  componentWillUpdate(nextProps, nextState) {
      if (nextState.isVisible && !this.state.isVisible && this.props.beforeOpen) {
          this.props.beforeOpen();
      }

      if (!nextState.isVisible && this.state.isVisible && this.props.beforeClose) {
          this.props.beforeClose();
      }
  }

  componentDidUpdate(prevProps, prevState) {
      if (!prevState.isVisible && this.state.isVisible && this.props.afterOpen) {
          this.props.afterOpen();
      }

      if (prevState.isVisible && !this.state.isVisible && this.props.afterClose) {
          this.props.afterClose();
      }
  }

  show() {
      this.setState({isVisible: true});
  }

  hide() {
      this.setState({isVisible: false});
  }

  onOverlayClicked() {
    if(this.props.hideOnOverlayClicked) {
      this.hide();
      if(this.props.onOverlayClicked) {
        this.props.onOverlayClicked();
      }
    }

    if(this.props.onOverlayClicked) {
      this.props.onOverlayClicked();
    }
 }

  render() {
    var overlay;
    var dialogStyles = {};
    var overlayStyles = {};

    if (this.state.isVisible) {
        overlayStyles = {
          display : 'block'
        };
        dialogStyles = {
          display: 'block'
        };
    } else {
        overlayStyles = {
          display : 'none'
        };
        dialogStyles = {
          display: 'none'
        };
    }

    if (this.props.showOverlay) {
        overlay = (<div onClick={() => this.onOverlayClicked()} style={overlayStyles} className="overlay-styles"></div>);
    }

    let style = {};
    if (this.props.width) {
      dialogStyles.width = this.props.width;
    }
    if (this.props.marginTop) {
      dialogStyles.marginTop = this.props.marginTop;
    }


    return (
        <div className="skylight-wrapper">
            <div style={dialogStyles} className="dialog-styles" >
              <a onClick={() => this.hide()} role="button" className="close-button" >&times;</a>
              <h2 className="title">{this.props.title}</h2>
              {this.props.children}
            </div>
            {overlay}
        </div>
    )
  }
}

SkyLight.displayName = 'SkyLight';

SkyLight.propTypes = {
  afterClose: React.PropTypes.func,
  afterOpen: React.PropTypes.func,
  beforeClose: React.PropTypes.func,
  beforeOpen: React.PropTypes.func,
  closeButtonStyle: React.PropTypes.object,
  dialogStyles: React.PropTypes.object,
  hideOnOverlayClicked: React.PropTypes.bool,
  onOverlayClicked: React.PropTypes.func,
  overlayStyles: React.PropTypes.object,
  showOverlay: React.PropTypes.bool,
  title: React.PropTypes.string,
  titleStyle: React.PropTypes.object
};

SkyLight.defaultProps = {
  title: '',
  showOverlay: true,
  hideOnOverlayClicked: false
};

export default SkyLight;
