import React from 'react'
import Link from 'next/link'
import cowsay from 'cowsay-browser'
import Tile from '../components/tile'

export default () => (
  <div>
    <h1>Weli suppe findsch geil?</h1>
    <Tile href="/klar">Klar</Tile>
    <Tile href="/bruehe">Brühe</Tile>
    <Tile href="/nudlae">Nudlä</Tile>
  </div>
)
