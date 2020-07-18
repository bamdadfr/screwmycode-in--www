// TODO: remove player and setstate (extend)
export interface IPlayerControlsProps {
    init: number,
    speedCallback: any,
    player: any,
    setStatePlayerSpeed: any,
}

export interface IPlayerControlsElementsPercent {
    speed: number,
}

export interface IPlayerControlsElementsSemiTone extends IPlayerControlsElementsPercent {
    
}