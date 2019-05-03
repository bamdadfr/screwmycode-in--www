import React from 'react'

import Main from './Main'

export default () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <header className="page-header">
          screwmycode.in
        </header>
        <main className="page-main">
          <Main />
        </main>
        <footer className="page-footer">
          Footer
        </footer>
      </div>
    </React.Fragment>
  )
}
