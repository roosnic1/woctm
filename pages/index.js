import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import TextInput from '../components/textInput';
import AppHeader from '../components/appHeader'

/* Import Components */
import NextButton from '../components/nextButton';
import Wrapper from '../components/wrapper';
import Header from '../components/header';

export default class extends React.Component {

  constructor (props) {
    super(props)
  }

	render () {
    const title = `Soupify / Souperb / Soupé`;

    return (
  	  <div>
        <Header />
        <Wrapper>
  	      <AppHeader>{title}</AppHeader>
          <TextInput></TextInput>
  	      <p>Click here to learn more <Link href="/about">About Us</Link></p>
  	      <p>Fail <Link href="/asdas">here</Link></p>
          <NextButton linkText="Next" link="page1" url={this.props.url}></NextButton>
        </Wrapper>
  	  </div>
  	);
  }
}
