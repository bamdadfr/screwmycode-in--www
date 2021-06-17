import React from 'react'
import { Icon } from '@iconify/react'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import questionCircleOutlined from '@iconify/icons-ant-design/question-circle-outlined'
import toggleOn from '@iconify/icons-bi/toggle-on'
import toggleOff from '@iconify/icons-bi/toggle-off'

export const IconRepeat = () => <Icon icon={repeatOff}/>

export const IconQuestion = () => <Icon icon={questionCircleOutlined}/>

export const IconToggle = {
    'On': () => <Icon icon={toggleOn}/>,
    'Off': () => <Icon icon={toggleOff}/>,
}
