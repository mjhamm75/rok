import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { highlightArea, clearCanvas } from './../utils/highlight.react.js';

class ImageMap extends Component {
	constructor(props) {
		super(props);
		this.resize = this.resize.bind(this);
		
		this.state = {
			canvasHeight: 'auto',
			canvasWidth: '100%',
			disableMouseOver: false,
			mapping: this.props.coords,
			originalMapping: this.props.coords
		}

		this.highlightAll = this.highlightAll.bind(this);
	}

	componentDidMount() {		
		var timer;
		var that = this;
		window.onresize = () => {
			clearTimeout(timer);
			timer = setTimeout(that.resize, 100);
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			mapping: newProps.coords,
			originalMapping: newProps.coords
		}, () => {
			this.resize()			
		})
	}

	calculateCoords(mapping, width, height, wPercent, hPercent) {
		let result = mapping.map(area => {
			let coords = area.coords.split(',').map((coord, i) => {
				if(i % 2 === 0) {
					return parseInt(((coord/width)*100)*wPercent);
				} else {
					return parseInt(((coord/height)*100)*hPercent);
				}
			}).join();
			return {
				id: area.id,
				amount: area.amount,
				coords: coords
			}
		})
		return result;
	}

	clear() {
		this.setState({
			disableMouseOver: false
		});
		clearCanvas(this.refs.canvas);
	}

	highlightArea(area) {
		highlightArea(area, this.refs.canvas);
	}

	highlightAll() {
		this.setState({
			disableMouseOver: true
		});
		[].slice.call(this.refs.map.children).forEach(area => {
			highlightArea(area, this.refs.canvas);
		})
	}

	mouseOver(e) {
		if(!this.state.disableMouseOver) {
			highlightArea(e.target, this.refs.canvas);			
		}
	}

	mouseOut() {
		if(!this.state.disableMouseOver) {
			clearCanvas(this.refs.canvas);			
		}
	}

	render() {
		var mappingName = `#${this.props.mappingName}`;
		var areas = this.renderArea();
		var wrapperStyle = {
			backgroundImage: `url(${this.props.source})`,
			backgroundSize: "contain",
			display: "block",
			height: this.state.canvasHeight + "px",
			padding: "0px",
			position: "relative",
			width: this.state.canvasWidth + "px"
		}

		var canvasStyle = {
			border: "0px",
			left: "0px",
			opacity: 1,
			top: "0px",
			padding: "0px",
			position: "absolute"
		}

		var imageStyle = {
			border: "0px",
			height: "auto",
			left: "0px",
			opacity: 0,
			padding: "0px",
			position: "absolute",
			top: "0px",
			width: "100%"
		}

		return (
			<div>
				<div style={wrapperStyle}>
					<canvas ref="canvas" width={this.state.canvasWidth} height={this.state.canvasHeight} style={canvasStyle}></canvas>
					<img ref="image" onLoad={this.resize} style={imageStyle} src={this.props.source} alt="Missing" useMap="woody" />
				</div>
				<map ref="map" name="#woody">
					{areas}
				</map>
			</div>
		)
	}

	renderArea() {
		return this.state.mapping.map((area, i) => {
			return <area 
						style={{cursor: 'pointer'}}
						key={i} 
						id={area.id} 
						shape="poly" 
						coords={area.coords} 
						href=""  
						alt="" 
						title="" 
						onMouseOver={this.mouseOver.bind(this)} 
						onMouseOut={this.mouseOut.bind(this)} 
						onClick={this.selectArea.bind(this)}
						onTouchStart={this.selectArea.bind(this)}
						/>
		});
	}

	resize() {
		var image =  new Image();
		image.src = this.refs.image.src;
		let { height: fullHeight, width: fullWidth } = image;

		let { height: currentHeight, width: currentWidth } = this.refs.image;
		let wPercent = currentWidth/100,
			hPercent = currentHeight/100;
		let modifiedCoords = this.calculateCoords(this.state.originalMapping, fullWidth, fullHeight, wPercent, hPercent);

		this.setState({
			canvasHeight: currentHeight,
			canvasWidth: currentWidth,
			mapping: modifiedCoords
		});
	}

	selectArea(event) {
		event.preventDefault();
		let mouseDisabled = this.state.disableMouseOver;
		if(mouseDisabled) {
			this.setState({
				disableMouseOver: false
			});
			this.clear();
		} else {
			this.setState({
				disableMouseOver: true
			})
			highlightArea(event.target, this.refs.canvas);
			this.props.selectArea(event.target.id);
		}
		
	}
}

export default ImageMap;