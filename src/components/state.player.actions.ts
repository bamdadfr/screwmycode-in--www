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
import { getDataFromAPI, isValidID } from './youtube.utils'

export const setStatePlayerSpeed = (payload: IStatePlayer['speed']): IStatePlayerActions => ({
    'type': SET_STATE_PLAYER_SPEED,
    payload,
})

export const setStatePlayerSrc = (payload: IStatePlayer['src']): IStatePlayerActions => ({
    'type': SET_STATE_PLAYER_SRC,
    payload,
})

export const setStatePlayerTitle = (payload: IStatePlayer['title']): IStatePlayerActions => ({
    'type': SET_STATE_PLAYER_TITLE,
    payload,
})

export const setStatePlayerIsPlaying = (payload: IStatePlayer['isPlaying']): IStatePlayerActions => ({
    'type': SET_STATE_PLAYER_IS_PLAYING,
    payload,
})

export const setStatePlayerIsLoading = (payload: IStatePlayer['isLoading']): IStatePlayerActions => ({
    'type': SET_STATE_PLAYER_IS_LOADING,
    payload,
})

export const setStatePlayerInit = (): any => ({
    'type': SET_STATE_PLAYER_INIT,
})

export const setStatePlayerData = (id: string): any => {

    return async (dispatch: any): Promise<any> => {

        if (isValidID (id)) {
            
            const response = await getDataFromAPI (id)
    
            dispatch ({
                'type': SET_STATE_PLAYER_DATA,
                'payload': response,
            })
        
        } else {

            dispatch ({
                'type': SET_STATE_PLAYER_DATA,
                'payload': {
                    'success': false,
                },
            })
        
        }
    
    }

}