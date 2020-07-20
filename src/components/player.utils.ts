import { sendToast } from './toast.utils'

export const copyToClipboard = (speed: number): void => {

    const el = document.createElement ('textarea')

    sendToast ('copied to clipboard!')

    el.value = `https://${window.location.host}${window.location.pathname}?speed=${speed}`

    document.body.appendChild (el)

    el.select ()

    document.execCommand ('copy')

    document.body.removeChild (el)

}
