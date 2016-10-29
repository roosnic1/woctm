import React from 'react';
import css from 'next/css'

const style = {
  padding: '18px',
  borderBottom: '1px solid #ccc',
  background: 'green',
  color: '#f0f0f0',
  fontSize: '18px',
  fontWeight: 'bold',
  textAlign: 'center'
};

export default class Tile extends React.Component {
  render(){

    return (
      <div className={css(style)}>
        {this.props.children}
      </div>
    )
  }
}
