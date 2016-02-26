import React from 'react';
import classNames from 'classnames';

require('!style!css!sass!./../sass/overlay.scss');

export default ({src, showOverlay}) => {
	let style = classNames(
		'overlay',
		'overlay-scale',
		{
			'open': showOverlay
		}
	)

	return (
		<div className={style}>
			<button type="button" className="overlay-close">Close</button>

		</div>
	)
}


// <img className={style} src={src}/>