import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default ({
  player, setUrl, setId, setTitle, setLoading,
}) => {
  // parse the youtube ID from full URL
  const parseId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      return match[2]
    }
    return 'error'
  }

  // handling form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (parseId(e.target[0].value) !== 'error' && parseId(e.target[0].value) !== player.id) {
      e.target[0].blur()
      setId(parseId(e.target[0].value))
    } else {
      console.log('Error: Input URL incorrect.')
    }
  }

  // ask the raw URL to API whenever player.id changes
  React.useEffect(() => {
    if (player.id !== null) {
      setLoading(true)

      // async call to API
      const url = `http://localhost:5000/youtube/${player.id}`
      axios.get(url).then((r) => {
        setTitle(r.data.title)
        setUrl(r.data.url)
        setLoading(false)
      })
    }
  }, [player.id, setLoading, setUrl, setTitle])

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
