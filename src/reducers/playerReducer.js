export const types = {
  SET_PLAYING: 'PLAYER/SET_PLAYING',
  SET_SPEED: 'PLAYER/SET_SPEED',
  SET_TRACK_ALBUM_ARTWORK: 'PLAYER/SET_TRACK_ALBUM_ARTWORK',
  SET_TRACK_ALBUM_ID: 'PLAYER/SET_TRACK_ALBUM_ID',
  SET_TRACK_ALBUM_NAME: 'PLAYER/SET_TRACK_ALBUM_NAME',
  SET_TRACK_ID: 'PLAYER/SET_TRACK_ID',
  SET_TRACKS: 'PLAYER/SET_TRACKS',
  SET_TRACKS_CURSOR: 'PLAYER/SET_TRACKS_CURSOR',
}

export const actions = {
  setPlaying: id => ({
    type: types.SET_PLAYING,
    payload: id,
  }),
  setSpeed: speed => ({
    type: types.SET_SPEED,
    payload: speed,
  }),
  setTrackAlbumArtwork: artwork => ({
    type: types.SET_TRACK_ALBUM_ARTWORK,
    payload: artwork,
  }),
  setTrackAlbumId: id => ({
    type: types.SET_TRACK_ALBUM_ID,
    payload: id,
  }),
  setTrackAlbumName: name => ({
    type: types.SET_TRACK_ALBUM_NAME,
    payload: name,
  }),
  setTrackId: id => ({
    type: types.SET_TRACK_ID,
    payload: id,
  }),
  setTracks: album => ({
    type: types.SET_TRACKS,
    payload: album,
  }),
  setTracksCursor: cursor => ({
    type: types.SET_TRACKS_CURSOR,
    payload: cursor,
  }),
}

export const initState = {
  playing: false, // former 'state'
  speed: 1,
  track: {
    id: null, // integer
    album: {
      name: null, // string
      id: null, // integer
      artwork: null, // string
    },
  },
  tracks: {
    cursor: 0,
    items: null, // array
  },
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_PLAYING:
      return {
        ...state,
        playing: action.payload,
      }
    case types.SET_SPEED:
      return {
        ...state,
        speed: action.payload,
      }
    case types.SET_TRACK_ID:
      return {
        ...state,
        track: {
          ...state.track,
          id: action.payload,
        },
      }
    case types.SET_TRACK_ALBUM_ID:
      return {
        ...state,
        track: {
          ...state.track,
          album: {
            ...state.track.album,
            id: action.payload,
          },
        },
      }
    case types.SET_TRACK_ALBUM_NAME:
      return {
        ...state,
        track: {
          ...state.track,
          album: {
            ...state.track.album,
            name: action.payload,
          },
        },
      }
    case types.SET_TRACK_ALBUM_ARTWORK:
      return {
        ...state,
        track: {
          ...state.track,
          album: {
            ...state.track.album,
            artwork: action.payload,
          },
        },
      }
    case types.SET_TRACKS:
      return {
        ...state,
        tracks: {
          ...state.tracks,
          items: action.payload,
        },
      }
    case types.SET_TRACKS_CURSOR:
      return {
        ...state,
        tracks: {
          ...state.tracks,
          cursor: action.payload,
        },
      }
    default:
      return state
  }
}
