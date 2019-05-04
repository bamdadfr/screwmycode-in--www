import React from 'react'
import styled from 'styled-components'

export default function (props) {
  const { player, setSpeed } = props

  const percentRef = React.createRef()
  const toneRef = React.createRef()

  const percentToSpeed = percent => (Number(percent) + 100) / 100
  const speedToPercent = speed => (Number(speed) * 100 - 100).toFixed(1)
  // const toneToSpeed = tones => Number(tones) / 12 + 1

  const toneToSpeed = tone => 2 ** (tone / 12)

  // 12 * ( log ( speed ) / log ( 2 ) )

  const speedToTone = speed => (12 * (Math.log(speed) / Math.log(2)).toFixed(1))

  // Wrong!!
  // const speedToTone = speed => ((Number(speed) - 1) * 12).toFixed(1)

  // const speedToTone = speed => {
  //   return null
  // }

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
      <div className="flex justify-around w-80">
        <InputLabel className="b w-40 f4 tl ttl">
          percent
        </InputLabel>
        <InputLabel className="b w-40 f4 tl ttl">
          semitone
        </InputLabel>
      </div>

      <div className="flex justify-around w-80">
        <div className="w-40 ma0 pa0">
          <form onSubmit={e => submitPercent(e)}>
            <Input
              ref={percentRef}
              className="input-reset b w-100 ba tc f1 b--transparent bg-transparent"
              type="number"
              min="-50"
              max="50"
            />
          </form>
        </div>
        <div className="w-40 ma0 pa0">
          <form onSubmit={e => submitTone(e)}>
            <Input
              ref={toneRef}
              className="input-reset b w-100 ba tc f1 b--transparent bg-transparent"
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

const InputLabel = styled.div`
  //background-color: palegreen;
  font-weight: 400;
  //padding-bottom: 15px;
  //border-bottom: 2px solid black;
`

const Input = styled.input`
  //background-color: palegoldenrod;
  font-weight: 400;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  
  :hover, :focus {
    color: #efcb68;
    background-color: #160c28;
  }
`
