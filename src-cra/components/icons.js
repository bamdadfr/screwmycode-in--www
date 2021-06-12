import React from 'react'
import { Icon } from '@iconify/react'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import questionCircleOutlined from '@iconify/icons-ant-design/question-circle-outlined'
import toggleOn from '@iconify/icons-bi/toggle-on'
import toggleOff from '@iconify/icons-bi/toggle-off'
import IconChampSVG from '../assets/icons/SCRW_CHAMP.svg'
import IconK7SVG from '../assets/icons/SCRW_KSET.svg'
import IconShareSVG from '../assets/icons/SCRW_SHARE.svg'
import IconShareTextSVG from '../assets/icons/SCRW_SHARE_TXT.svg'

export const IconRepeat = () => <Icon icon={repeatOff}/>

export const IconQuestion = () => <Icon icon={questionCircleOutlined}/>

export const IconToggle = {
    'On': () => <Icon icon={toggleOn}/>,
    'Off': () => <Icon icon={toggleOff}/>,
}

export const IconChamp = IconChampSVG

export const IconK7 = IconK7SVG

export const IconShare = IconShareSVG

export const IconShareText = IconShareTextSVG

