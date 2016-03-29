import React, { Component } from 'react';
import className from 'classnames';

let close = require('./../imgs/x.close.png');

require('!style!css!sass!./../sass/info.scss');

class Info extends Component {
	render() {
		let showInfo = className('pick-info', {
			'open': this.props.show
		})

		return (
			<div className={showInfo}>
				<img className="close" src={close} onClick={() => this.props.showInfo(false)}/>
				<div className="pick-title">The Tree of Life</div>
				<div className="block">
					<span className="bold">Root Border</span> - An extension of the "Tree of Life" that combines and intertwines world history.  Depicting everything as coming from the Earth. 
				</div>
				<div className="block">
					<span className="bold">Dendrites</span> - The branched projections of a neuron that act to propagate the electrochemical stimulation received from other neural cells to the cell body, or soma, of the neuron from which the dendrites project.  Here, the root border imitates the forms of dendrites.
				</div>
				<div className="block">
					<span className="bold">DNA Strand</span> - Deoxyribonucleic acid (DNA) is a molecule that encodes the genetic instructions used in the development and functioning of all known living organisms and many viruses. Along with RNA and proteins, DNA is one of the three major macromolecules essential for all known forms of life. Most DNA molecules are double-stranded helices, consisting of two long biopolymers of simpler units called nucleotides --each nucleotide is composed of a nucleobase (guanine, adenine, thymine, and cytosine), recorded using the letters G, A, T, and C.2) Root Border – An extension of the "Tree of Life" that combines and intertwines world history.  Depicting everything as coming from the Earth.
				</div>
				<div className="block">
					<span className="bold">Neptune</span> - The only planet discovered using mathematics rather than observation.  Neptune is shown here with its moon, Proteus. 
				</div>
				<div className="block">
					<span className="bold">Ishango Bones</span> - Are dark brown lengths of bone, from the fibula of a baboon. First thought to be a tally stick, but some scientists have suggested that the groupings of notches indicate a mathematical understanding that goes beyond counting. They are believed to be more than 20,000 years old.
				</div>
			</div>
		)
	}
}

export default Info;