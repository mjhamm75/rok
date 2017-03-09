import React, { Component } from 'react';

import s from './Copywrite.css';

export default function Copywrite({show}) {
	var style = !show ? {
		display: 'none'
	} : null;
	return (
		<div style={style} className={s.copywrite}>
			© 2016 Roots Media, LLC, & Holdman Studios, LLC, All Rights Reserved.
		</div>
	)
}
