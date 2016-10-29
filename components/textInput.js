import React from 'react'

export default class TextInput extends React.Component {
  render(){
    const style = {
      width: '100%',
      border: '0px solid transparent',
      borderBottom: '1px solid #ccc',
      boxSizing: 'border-box',
      padding: '6px'
    };

    return (
      <input type="text" style={style} />
    )
  }
}
