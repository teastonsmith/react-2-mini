import React, { Component } from 'react';
// ./node_modules/

export default class ColorChanger extends Component {
	render(props) {
		return (
			<select
				className='dropDownContainer'
				onChange={e => this.props.update(e.target.value)}
				disabled={this.props.allowEdit === false}>
				<option value='black'> Black </option>
				<option value='blue'> Blue </option>
				<option value='green'> Green </option>
			</select>
		);
	}
}
