import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default ({
  player, setUrl, setId, setTitle, setLoading,
}) => {
  const parseId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      return match[2]
    }
    return 'error'
  }
  const askUrl = (Id) => {
    setLoading(true)
    const url = `http://localhost:5000/youtube/${Id}`
    axios.get(url).then((r) => {
      setTitle(r.data.title)
      setUrl(r.data.url)
      setLoading(false)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (parseId(e.target[0].value) !== 'error' && parseId(e.target[0].value) !== player.id) {
      e.target[0].blur()
      setId(parseId(e.target[0].value))
    } else {
      console.log('Error: Input URL incorrect.')
    }
  }

  // console.log("Loading", player.loading)

  React.useEffect(() => {
    if (player.id !== null) {
      askUrl(player.id)
    }
  }, [player.id])

  if (player.loading) {
    return (
      <React.Fragment>
        <div className="form">
          loading...
        </div>
      </React.Fragment>
    )
  }

  if (!player.loading && player.url !== null) {
    return (
      <Redirect to="/player" />
    )
  }

  console.log('Form render')
  return (
    <React.Fragment>
      <form onSubmit={e => handleSubmit(e)}>

        <div className="form">
          <input type="text" />
        </div>

        <div className="form">
          <input type="submit" value="submit" />
        </div>

      </form>
    </React.Fragment>
  )
}
