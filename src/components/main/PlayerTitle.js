import React from 'react'

export default function ({ player }) {
  React.useEffect(() => {
    //
  }, [player.title])

  const emptyDiv = () => <React.Fragment>&nbsp;</React.Fragment>

  console.log('Title render')
  return (
    <React.Fragment>
      <div className="player-title">
        {player.title ? player.title : emptyDiv()}
      </div>
    </React.Fragment>
  )
}
