import {
    IStatePlayer,
    IStatePlayerActions,
    SET_STATE_PLAYER_SPEED,
    SET_STATE_PLAYER_SRC,
    SET_STATE_PLAYER_TITLE,
    SET_STATE_PLAYER_IS_PLAYING,
    SET_STATE_PLAYER_DATA,
    SET_STATE_PLAYER_IS_LOADING,
    SET_STATE_PLAYER_INIT,
} from './state.player.types'

const init: IStatePlayer = {
    'speed': 1,
    'src': undefined,
    'title': undefined,
    'isPlaying': false,
    'isLoading': true,
    'isError': false,
}

export const playerReducer = (
    state = init,
    action: IStatePlayerActions,
): IStatePlayer => {

    switch (action.type) {

        case SET_STATE_PLAYER_INIT:
            return init
            
        case SET_STATE_PLAYER_SPEED:
            if (action.payload <= 0.5) action.payload = 0.5
                
            if (action.payload >= 1.5) action.payload = 1.5
                
            return {
                ...state,
                'speed': action.payload,
            }
                
        case SET_STATE_PLAYER_SRC:
            return {
                ...state,
                'src': action.payload,
            }
                    
        case SET_STATE_PLAYER_TITLE:
            return {
                ...state,
                'title': action.payload,
            }
                        
        case SET_STATE_PLAYER_IS_PLAYING:
            return {
                ...state,
                'isPlaying': action.payload,
            }
                            
        case SET_STATE_PLAYER_DATA:
                                
            if (action.payload.success) {

                return {
                    ...state,
                    'isLoading': false,
                    'title': action.payload.title,
                    'src': action.payload.url,
                }
                
            } else {
                
                return {
                    ...state,
                    'isError': true,
                }
            
            }

        case SET_STATE_PLAYER_IS_LOADING:
            return {
                ...state,
                'isLoading': action.payload,
            }

        default:
            return state
    
    }

}