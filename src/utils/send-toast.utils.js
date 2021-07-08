import React from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'

/**
 * @function
 * @name SendToastUtils
 * @description wrapper for sending toast notifications
 * @param {React.ReactNode} payload - some HTML|JSX to render
 * @returns {void}
 */
export function SendToastUtils (payload) {

    toast (
        <>
            <div className="toast-share">
                <Image src="/icons/SCRW_KSET.svg" height={30} width={30}/>
                {payload}
            </div>
        </>,
    )

}

