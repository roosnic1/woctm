import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <h1>Hi. I'm mobile-ready!</h1>
    <p>Click here to learn more <Link href="/about">About Us</Link></p>
  </div>
)