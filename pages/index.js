import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

/* Import Components */
import NextButton from '../components/nextButton';
import Wrapper from '../components/wrapper';
import Header from '../components/header';



export default () => {
	const title = `Soupify / Souperb / Soupé`;

	return (
	  <div>
      <Header />
      <Wrapper>
	      <h1>{title}</h1>
	      <p>Click here to learn more <Link href="/about">About Us</Link></p>
	      <p>Fail <Link href="/asdas">here</Link></p>
        <NextButton linkText="Next" link="page1"></NextButton>
      </Wrapper>
	  </div>
	);
}
