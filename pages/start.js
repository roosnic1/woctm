import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AppHeader from '../components/appHeader'

export default () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <AppHeader>{title}</AppHeader>
      <p>Click here to learn more <Link href="/about">About Us</Link></p>
      <p>Fail <Link href="/asdas">here</Link></p>
    </div>
  );
}
