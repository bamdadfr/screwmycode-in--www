import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import IconK7Svg from '../../assets/icons/SCRW_KSET.svg'

export const sendToast = (payload: string): void => {

    const JSX = (): React.ReactElement => {

        return (
            <div className="toast-share">
                <img
                    src={IconK7Svg}
                    alt="icon-k7"
                    height={30}
                />
                {payload}
            </div>
        )

    }

    toast (<JSX />)

}

export default (): React.ReactElement => {

    return <ToastContainer />

}