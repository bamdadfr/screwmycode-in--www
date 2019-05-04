import React from 'react'
import styled from 'styled-components'
import WordArt from 'react-wordart'

export default function () {
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
          <Input
            className="input-reset b w-100 ba tc f1 b--transparent bg-transparent"
            type="text"
            value={'-18,3'}
          />
        </div>
        <div className="w-40 ma0 pa0">
          <Input
            id="name"
            className="input-reset b w-100 ba tc f1 b--transparent bg-transparent"
            type="text"
            value="10.0"
            aria-describedby="name-desc"
          />
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
  
  :hover, :focus {
    color: #efcb68;
    background-color: #160c28;
  }
`

