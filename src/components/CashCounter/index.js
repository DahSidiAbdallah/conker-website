import React from 'react'

import './CashCounter.scss'

const fmt = n => n.toLocaleString('en-US')

// the wad-of-cash counter from the HUD
export const CashCounter = ({value, total, label}) => {
  return (
    <div className="cash-counter">
      <div className="hud-label">{label}</div>
      <div className="cash-counter-row">
        <span className="cash-wad" aria-hidden="true">
          <span className="cash-note" />
          <span className="cash-note" />
          <span className="cash-note">$</span>
        </span>
        <span className="hud-number">
          {fmt(value)}
          <span className="cash-total"> / {fmt(total)}</span>
        </span>
      </div>
    </div>
  )
}
