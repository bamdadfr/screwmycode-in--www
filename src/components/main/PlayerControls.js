import React from 'react'

export default function (props) {
  const { player, setSpeed } = props

  const percentRef = React.createRef()
  const toneRef = React.createRef()

  const percentToSpeed = percent => (Number(percent) + 100) / 100
  const speedToPercent = speed => (Number(speed) * 100 - 100).toFixed(1)
  const toneToSpeed = tone => 2 ** (tone / 12)
  const speedToTone = speed => (12 * (Math.log(speed) / Math.log(2)).toFixed(1))

  const dispatchSpeed = (s) => {
    if (s >= 0.5 && s <= 1.5) {
      if (s !== player.speed) {
        percentRef.current.blur()
        setSpeed(s)
      }
    }
  }

  const submitPercent = (e) => {
    e.preventDefault()
    const s = percentToSpeed(e.target[0].value)
    dispatchSpeed(s)
  }

  const submitTone = (e) => {
    e.preventDefault()
    const s = toneToSpeed(e.target[0].value)
    dispatchSpeed(s)
  }

  // Refresh DOM
  React.useEffect(() => {
    if (percentRef.current.value !== player.speed) {
      percentRef.current.value = speedToPercent(player.speed)
      toneRef.current.value = speedToTone(player.speed)
    }
  }, [player.speed])

  console.log('Controls render')
  return (
    <React.Fragment>
      <div className="controls">
        <div className="controls-item">
          percent
          <form onSubmit={e => submitPercent(e)}>
            <input
              ref={percentRef}
              type="number"
              min="-50"
              max="50"
            />
          </form>
        </div>
        <div className="controls-item">
          semitone
          <form onSubmit={e => submitTone(e)}>
            <input
              ref={toneRef}
              type="number"
              min="-6"
              max="6"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
