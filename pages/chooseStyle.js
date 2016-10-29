import React from 'react'
import Link from 'next/link'
import cowsay from 'cowsay-browser'
import Tile from '../components/tile'
import AppHeader from '../components/appHeader'

export default () => (
  <div>
    <AppHeader>Weli suppe findsch geil?</AppHeader>
    <Tile href="/klar">Klar</Tile>
    <Tile href="/bruehe">Brühe</Tile>
    <Tile href="/nudlae">Nudlä</Tile>
  </div>
)
