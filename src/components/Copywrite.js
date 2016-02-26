import React, { Component } from 'react';

require('!style!css!sass!./../sass/copywrite.scss');

export default function Copywrite({show}) {
	var style = !show ? {
		display: 'none'
	} : null;
	return (
		<div style={style} className="copywrite">
			© 2016 Roots Media, LLC, & Holdman Studios, LLC, All Rights Reserved.
		</div>
	)
}