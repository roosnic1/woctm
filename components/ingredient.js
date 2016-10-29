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
        box: {
          backgroundColor: this.state.active ? 'red' : 'blue',
          display: 'flex',
          height: 50,
        },
        image: {
          height: 50,
          width: 50,
        },
        text: {

        }
      }

		return (
      <div style={styles.box} onClick={this.toggleActive.bind(this)}>
        <img style={styles.image} src={this.props.image} />
        <p>{this.props.text}</p>
      </div>
    )
	}
}
