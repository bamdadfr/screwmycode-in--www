export const types = {
  SET_IS_PLAYING: 'SET_IS_PLAYING',
  SET_SPEED: 'SET_SPEED',
  SET_URL: 'SET_URL',
  SET_TITLE: 'SET_TITLE',
}

export const actions = {
  setIsPlaying: status => ({
    type: types.SET_PLAYING,
    payload: status,
  }),
  setSpeed: speed => ({
    type: types.SET_SPEED,
    payload: speed,
  }),
  setUrl: url => ({
    type: types.SET_URL,
    payload: url,
  }),
  setTitle: title => ({
    type: types.SET_TITLE,
    payload: title,
  }),
}

export const initState = {
  isPlaying: false, // former 'state'
  speed: 1,
  url: null, // will contain string
  title: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_IS_PLAYING:
      return {
        ...state,
        playing: action.payload,
      }
    case types.SET_SPEED:
      return {
        ...state,
        speed: action.payload,
      }
    case types.SET_URL:
      return {
        ...state,
        url: action.payload,
        isPlaying: true,
      }
    case types.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      }
    default:
      return state
  }
}
