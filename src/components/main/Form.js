import React from 'react'
import styled from 'styled-components'

export default function () {
  return (
    <React.Fragment>
      <div className="flex ma0 pa0 bg-transparent">
        <div className="w-50 ml2 ma0 pa0">
          <InputYoutube
            type="text"
            value="https://www.youtube.com/watch?v=1000"
            className="w-100 ma0 pa0 b--transparent bg-transparent"
          />
        </div>

        <div className="w-10 ma0 pa0 ml2">
          <InputSubmit
            type="submit"
            value="process"
            className="w-100 normal input-reset ba b--black-80 bg-transparent pointer f6 dib"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

const InputYoutube = styled.input`
  font-size: 1rem;
  padding: 5px 0 5px 2px;
  border-bottom: 1px solid #000411;
  
  color: #000411;
  background-color: inherit;

  :hover, :focus {
    background-color: #160c28;
    color: #efcb68;
  }
`

const InputSubmit = styled.input`
  font-size: 1rem;
  font-weight: 400;
  width: 100px;
  padding: 5px 10px 7px 10px;
  border-radius: 2px;

  border-color: #000411;
  color: #000411;
  background-color: inherit;

  :hover {
    background-color: #160c28;
    border-color: #efcb68;
    color: #efcb68;
  }
`
