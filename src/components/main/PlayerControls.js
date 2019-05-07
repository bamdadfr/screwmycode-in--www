import React from 'react'

export default function (props) {
  const { player, setSpeed } = props

  const percentRef = React.createRef()
  const toneRef = React.createRef()

  console.log('Controls render')
  return (
    <React.Fragment>
      <div className="controls">
        <div className="controls-item">
          percent
          <form onSubmit={e => console.log(e)}>
            <input
              disabled
              ref={percentRef}
              type="text"
              value={(player.speed * 100 - 100).toFixed(1)}
            />
          </form>
        </div>
        <div className="controls-item">
          semitone
          <form onSubmit={e => console.log(e)}>
            <input
              disabled
              ref={toneRef}
              type="text"
              value={(12 * (Math.log(player.speed) / Math.log(2))).toFixed(1)}
            />
          </form>
        </div>
      </div>
      <div className="controls-slider">
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.001"
          value={player.speed}
          onChange={e => setSpeed(e.target.value)}
        />
      </div>
    </React.Fragment>
  )
}
