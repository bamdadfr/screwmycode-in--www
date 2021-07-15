import { useGoogleAnalytics } from './use-google-analytics'
import { useFirefoxOnly } from './use-firefox-only'

/**
 * @function
 * @name useApp
 */
export function useApp () {

    useGoogleAnalytics ()

    useFirefoxOnly ()

}
