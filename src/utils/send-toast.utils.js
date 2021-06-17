import React from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'

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

