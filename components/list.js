import React from 'react'

export default class List extends React.Component {
  render(){
    return (
      <ul>
        {this.props.children.map(item => <li>{item}</li>)}
      </ul>
    )
  }
}
