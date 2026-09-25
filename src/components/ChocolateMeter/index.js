import React from 'react'

import {GameNumber} from '../GameNumber'

import './ChocolateMeter.scss'

// Conker's health bar is made of chocolate - so is ours
export const ChocolateMeter = ({percent, chunks = 10, label, detail}) => {
  const perChunk = 100 / chunks

  return (
    <div className="chocolate-meter">
      <div className="hud-label">{label}</div>
      <div className="chocolate-meter-row">
        <div
          className="chocolate-bar"
          role="meter"
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Number(percent.toFixed(2))}>
          {Array.from({length: chunks}, (_, i) => {
            const fill = Math.min(Math.max((percent - i * perChunk) / perChunk, 0), 1)
            return (
              <span key={i} className="chocolate-chunk" style={{'--fill': fill}} />
            )
          })}
        </div>
        <div className="hud-number">
          <GameNumber text={percent.toFixed(2)} />
          <small><GameNumber text="%" /></small>
        </div>
      </div>
      {detail && <div className="hud-detail">{detail}</div>}
    </div>
  )
}
