import React from 'react'

import './Header.scss'

const Wobbly = ({text}) => (
  <>
    {text.split('').map((letter, i) => (
      <span
        key={i}
        className={letter === ' ' ? 'logo-space' : 'logo-letter'}
        style={{'--i': i}}>
        {letter}
      </span>
    ))}
  </>
)

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo" aria-label="Conker's Bad Fur Day Decomp">
        <span className="logo-conkers" aria-hidden="true"><Wobbly text="Conker's" /></span>
        <span className="logo-bfd" aria-hidden="true"><Wobbly text="Bad Fur Day" /></span>
        <span className="logo-stamp" aria-hidden="true">Decomp</span>
      </h1>
      <p className="header-tagline speech-bubble">
        Decompiling the N64 classic back into C, one function at a time!
      </p>
    </header>
  )
}
