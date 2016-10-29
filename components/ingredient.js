import React from 'react'
import css from 'next/css'

export default class Ingredient extends React.Component {

  constructor() {
    super();
    this.state = {
      active : true,
    }
  }

  toggleActive() {
    this.setState({
      active: !this.state.active,
    })
  }

	render () {
    let styles = {
      backgroundColor: this.state.active ? 'red' : 'blue',
      display: 'flex',
      width: 200,
      heigh: 'auto',
    }

		return (
      <div style={styles} onClick={this.toggleActive.bind(this)}>
        <img src={this.props.image} />
        <p>{this.props.text}</p>
      </div>
    )
	}
}
