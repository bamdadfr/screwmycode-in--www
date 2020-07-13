import { getDataFromAPI } from './youtube.utils'

describe ('testing getDataFromAPI()', () => {

    // valid id but unavailable video
    // https://www.youtube.com/watch?v=UY6dISDVeuz

    it ('should succeed given UY6dvVeuzk4', async (): Promise<void> => {

        const response = await getDataFromAPI ('UY6dvVeuzk4')

        expect (response).toBeDefined ()
        
        expect (response.success).toBeTruthy ()
        
    })
    
    it ('should fail given UY6dvSDuzK4', async (): Promise<void> => {
        
        const response = await getDataFromAPI ('UY6dvSDuzK4')

        expect (response).toBeDefined ()

        expect (response.success).toBeFalsy ()
    
    })

})