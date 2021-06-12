import React from 'react'
import { toast } from 'react-toastify'
import { IconK7 } from './icons'

export const ToastUtilsSendToast = (payload) => {

    const JSX = () => (
        <div className="toast-share">
            <img
                src={IconK7}
                alt="icon-k7"
                height={30}
            />
            {payload}
        </div>
    )

    toast (<JSX/>)

}

