import React from 'react'
import Link from 'next/link'
import cowsay from 'cowsay-browser'
import List from '../components/list'
import AppHeader from '../components/appHeader'

export default () => (
  <div>
    <AppHeader>About</AppHeader>
    <h1>About Us</h1>
    <pre>{ cowsay.say({ text: 'Hello My Name is.' }) }</pre>
    <List>
      <div>Hans</div>
      <div>Frunzli</div>
    </List>
  </div>
)
