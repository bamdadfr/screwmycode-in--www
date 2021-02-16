import { ToastUtilsSendToast } from './toast-utils-send-toast'

export const PlayerUtilsCopyToClipboard = (speed) => {

    const el = document.createElement ('textarea')

    ToastUtilsSendToast ('copied to clipboard!')

    el.value = `https://${window.location.host}${window.location.pathname}?speed=${speed}`

    document.body.appendChild (el)

    el.select ()

    document.execCommand ('copy')

    document.body.removeChild (el)

}
