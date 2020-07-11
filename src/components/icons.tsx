import React, { ReactElement } from 'react'
import { Icon } from '@iconify/react'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import questionCircleOutlined from '@iconify/icons-ant-design/question-circle-outlined'
import toggleOn from '@iconify/icons-bi/toggle-on'
import toggleOff from '@iconify/icons-bi/toggle-off'
// custom icons
import IconChampSVG from './icons/SCRW_CHAMP.svg'
import IconK7SVG from './icons/SCRW_KSET.svg'
import IconShareSVG from './icons/SCRW_SHARE.svg'
import IconShareTextSVG from './icons/SCRW_SHARE_TXT.svg'

export const IconChamp = IconChampSVG

export const IconK7 = IconK7SVG

export const IconShare = IconShareSVG

export const IconShareText = IconShareTextSVG

export const IconRepeat = (): ReactElement => <Icon icon={repeatOff} />

export const IconQuestion = (): ReactElement => <Icon icon={questionCircleOutlined} />

export const IconToggle = {
    'on': (): ReactElement => <Icon icon={toggleOn} />,
    'off': (): ReactElement => <Icon icon={toggleOff} />,
}