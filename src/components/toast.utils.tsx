import React, { ReactElement } from 'react'
import { toast } from 'react-toastify'
import { IconK7 } from './icons'

export const sendToast = (payload: string): void => {

    const JSX = (): ReactElement => {

        return (
            <div className="toast-share">
                <img
                    src={IconK7}
                    alt="icon-k7"
                    height={30}
                />
                {payload}
            </div>
        )

    }

    toast (<JSX />)

}

