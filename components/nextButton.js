import React from 'react'
import Link from 'next/link'
import css from 'next/css'

export default class NextButton extends React.Component {

  goToLink(link) {
    this.props.url.pushTo(link);
  }

  createLinks(links) {
    const test = {
      flexGrow: 1
    }

    return (
      links.map((link) => <div className={css(test)} onClick={this.goToLink.bind(this,link.url)}>{link.text}</div>)
    )
  };

	render () {
    const style = {
      position: 'fixed',
      bottom: 0,
      height: '30px',
      background: 'grey',
      width: '100%',
      textAlign: 'center',
      lineHeight: '30px',
      color: 'black',
      display: 'flex'
    };

		return (
      <div className={css(style)}>
        {this.createLinks([{url:'next',text:'next'},{url:'online',text:'online'}])}
      </div>
		)
	}
}
