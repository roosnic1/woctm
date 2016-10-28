import React from 'react'
import Head from 'next/head'
import Link from 'next/link'



export default () => {
	const title = `Soupify / Souperb / Soupé`;

	return (
	  <div>
	    <Head>
	      <meta name="viewport" content="width=device-width, initial-scale=1" />
	      <title>{title}</title>
	    </Head>
	    <h1>{title}</h1>
	    <p>Click here to learn more <Link href="/about">About Us</Link></p>
	    <p>Fail <Link href="/asdas">here</Link></p>
	  </div>
	);
}