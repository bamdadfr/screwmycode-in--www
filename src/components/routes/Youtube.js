import React from 'react'

import Player from '../player/Player'

export default function (props) {
  const { match } = props

  const [isLoading, setIsLoading] = React.useState(true)
  const [playerTitle, setPlayerTitle] = React.useState(null)
  const [playerSrc, setPlayerSrc] = React.useState(null)

  // ask the raw URL to API whenever player.id changes
  React.useEffect(() => {
    setIsLoading(true)
    // const url = `http://localhost:5000/youtube/${match.params.id}`
    const url = `https://api.screwmycode.in/youtube/${match.params.id}`

    fetch(url)
      .then(r => r.text())
      .then((data) => {
        const json = JSON.parse(data)
        setPlayerTitle(json.title)
        setPlayerSrc(json.url)
        setIsLoading(false)
      })
  }, [match.params.id])

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
