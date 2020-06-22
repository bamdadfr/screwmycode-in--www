import React from 'react'

export default (): React.ReactElement => (
    <>
        <div className="controls">
            <div>
                available only for firefox
            </div>
        </div>

        <div className="controls">
            <div className="firefox">
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.mozilla.org/en-US/firefox/download/thanks/"
                >
                    download here
                </a>
            </div>

        </div>
    </>
)
