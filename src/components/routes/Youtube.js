import React from 'react'
import axios from 'axios'

import Player from '../player/Player'

export default function (props) {
  const { match } = props

  const [isLoading, setIsLoading] = React.useState(true)
  const [playerTitle, setPlayerTitle] = React.useState(null)
  const [playerSrc, setPlayerSrc] = React.useState(null)

  // ask the raw URL to API whenever player.id changes
  React.useEffect(() => {
    setIsLoading(true)
    const url = `http://localhost:5000/youtube/${match.params.id}`
    axios.get(url).then((r) => {
      setPlayerTitle(r.data.title)
      setPlayerSrc(r.data.url)
      setIsLoading(false)
    })
  }, [match.params.id])

  console.log('isLoading', isLoading)

  if (isLoading) {
    return (
      <React.Fragment>
        <div className="player">
          loading...
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Player
        title={playerTitle}
        src={playerSrc}
      />
    </React.Fragment>
  )
}
