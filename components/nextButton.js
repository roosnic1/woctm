import React from 'react'
import Link from 'next/link'

export default class NextButton extends React.Component {

	render () {
    const style = {
      position: 'fixed',
      bottom: 0,
      height: '30px',
      background: 'grey',
      width: '100%',
      'text-align': 'center',
      'line-height': '30px',
    };

		return (
			<Link href={this.props.link} >
				<div style={style}>{this.props.linkText}</div>
			</Link>
		)
	}
}