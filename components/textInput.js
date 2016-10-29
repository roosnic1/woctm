import React from 'react'

export default class TextInput extends React.Component {
  render(){
    const style = {
      width: '100%',
      border: '0px solid transparent',
      'border-bottom': '1px solid #ccc',
      'box-sizing': 'border-box',
      padding: '6px'
    };

    return (
      <input type="text" style={style} />
    )
  }
}
