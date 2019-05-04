import React from 'react'
import styled from 'styled-components'
import WordArt from 'react-wordart'

import Main from './Main'
import { FaRegPauseCircle, FaRegPlayCircle, FaRegStopCircle } from 'react-icons/fa'

export default () => {
  return (
    <React.Fragment>

      <article className="pb5">
        <header className="vh-100 mybg1 ph6 dt w-100">
          <div className="dtc v-mid cover">

            <div className="flex">

              <div className="w-60 ph0 ph2-m ph3-l mybg1">
                <div className="w-100 vh-75 bg-transparent">

                  <div className="pv4" />

                  <Title className="pl2 ma0 pa0">
                    screwmycode.in
                  </Title>

                  <div className="pv4" />

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

                </div>
              </div>

              <div className="w-40 ph0 ph2-m ph3-l bg-transparent">
                <div className="w-100 vh-75 bg-transparent">

                  <div className="pv5" />

                  <PlayingTrack className="normal ma0 lh-title">
                    IAM - Demain c'est loin
                  </PlayingTrack>

                  {/*<div className="pv" />*/}

                  {/*<Audio className="w-100" controls />*/}

                  <ProgressWrapper>
                    <ProgressBar />
                  </ProgressWrapper>

                  {/*<div className="pv2" />*/}

                  <AudioButton className="pr2">
                    <FaRegPlayCircle />
                  </AudioButton>
                  <AudioButton className="pr2">
                    <FaRegPauseCircle />
                  </AudioButton>
                  <AudioButton>
                    <FaRegStopCircle />
                  </AudioButton>

                  <div className="pv4" />

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

                </div>
              </div>

            </div>

          </div>

        </header>
      </article>

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

const Title = styled.h1`
  font-size: 5rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #000411;
  
  filter: blur(1px);
  
  // Scaling
  transform: scale(1, 1.1);
  -webkit-transform: scale(1, 1.1); /* Safari and Chrome */
  -moz-transform: scale(1, 1.1); /* Firefox */
  -ms-transform: scale(1, 1.1); /* IE 9+ */
  -o-transform: scale(1, 1.1); /* Opera */
  
`

const PlayingTrack = styled.h2`
  color: #000411;
  font-size: 1.33rem;
`

const Audio = styled.audio`
  //background-color: white;
  //color: white;
  //margin: 100px;
`

const ProgressWrapper = styled.div`
  width: 100%;
  height: 10px;
  background: white;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #000411;
  left: 0;
  position: absolute;
  top: 0;
  border-radius: 2px;
`

const AudioButton = styled.span`
  //background-color: #000411;
  font-size: 2rem;
  //color: #efcb68;
  padding-top: 0;
  
  //:hover {
  //}
`

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

const MyWordArt = styled(WordArt)`
  color: black;
`
