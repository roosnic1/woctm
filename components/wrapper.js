import React from 'react'
import Link from 'next/link'
import css from 'next/css'

const style = css({
  margin: 0,
  padding: 0
});

export default class Wrapper extends React.Component {

	render () {
  	return (
  	  <div className={style}>
  	  	{this.props.children}
  	  </div>
  	);
  }
}