import React from 'react'
import Link from 'next/link'
import cowsay from 'cowsay-browser'


export default () => (
  <div>
    <h1>About Us</h1>
    <pre>{ cowsay.say({ text: 'Hello My Name is.' }) }</pre>
  </div>
)