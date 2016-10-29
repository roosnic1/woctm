import React from 'react';
import css from 'next/css'
import Link from 'next/link';

export default class Tile extends React.Component {
  render(){
    const style = {
      padding: '36px',
      'border-bottom': '1px solid #ccc'
    };

    return (
      <div className={css(style)}>
        <Link href={this.props.href}>{this.props.children}</Link>
      </div>
    )
  }
}
