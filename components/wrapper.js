import React from 'react'
import Link from 'next/link'

export default class Wrapper extends React.Component {

	render () {
  	return (
  	  <div className="testClass">
  	  	{this.props.children}
  	  </div>
  	);
  }
}