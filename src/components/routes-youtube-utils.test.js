import { RoutesYoutubeUtilsGetDataFromAPI } from './routes-youtube-utils'

describe ('testing getDataFromAPI()', () => {

    it ('should succeed given UY6dvVeuzk4', async () => {

        const response = await RoutesYoutubeUtilsGetDataFromAPI ('UY6dvVeuzk4')

        expect (response).toBeDefined ()

        expect (response.success).toBeTruthy ()

    })

    it ('should fail given UY6dvSDuzK4', async () => {

        const response = await RoutesYoutubeUtilsGetDataFromAPI ('UY6dvSDuzK4')

        expect (response).toBeDefined ()

        expect (response.success).toBeFalsy ()

    })

    it ('should fail given 123', async () => {

        const response = await RoutesYoutubeUtilsGetDataFromAPI ('123')

        expect (response).toBeDefined ()

        expect (response.success).toBeFalsy ()

    })

})