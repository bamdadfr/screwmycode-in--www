import { useGoogleAnalytics } from './use-google-analytics'
import { useFirefoxOnly } from './use-firefox-only'

/**
 * @description exclusive use for next.js _app.js
 */
export function useApp () {

    useGoogleAnalytics ()

    useFirefoxOnly ()

}
