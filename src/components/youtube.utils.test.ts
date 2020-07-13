import { getDataFromAPI } from './youtube.utils'

describe ('testing getDataFromAPI()', () => {

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

    it ('should fail given 123', async (): Promise<void> => {

        const response = await getDataFromAPI ('123')

        expect (response).toBeDefined ()

        expect (response.success).toBeFalsy ()
    
    })

})