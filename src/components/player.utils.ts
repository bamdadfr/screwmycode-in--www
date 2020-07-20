import { sendToast } from './toast.utils'

export const copyToClipboard = (audio: HTMLAudioElement|null): void => {

    if (audio === null) return

    const el = document.createElement ('textarea')

    sendToast ('copied to clipboard!')

    el.value = `https://${window.location.host}${window.location.pathname}?speed=${audio.playbackRate}`

    document.body.appendChild (el)

    el.select ()

    document.execCommand ('copy')

    document.body.removeChild (el)

}
