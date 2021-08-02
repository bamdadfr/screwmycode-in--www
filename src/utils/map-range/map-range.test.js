import { mapRange } from './map-range'

describe ('mapRange', () => {

    describe ('success story', () => {

        const response = mapRange (0.5, 0, 1, 0, 100)

        it ('should return a number', () => {

            expect (typeof response).toBe ('number')
        
        })

        it ('should return the expected value', () => {

            expect (response).toBe (50)
        
        })
    
    })

    describe ('arguments', () => {

        describe ('n', () => {

            const request = () => mapRange ('0.5', 0, 1, 0, 100)

            it ('should throw if not a number', () => {

                expect (request).toThrowError ()
            
            })
        
        })
    
        describe ('start1', () => {

            const request = () => mapRange (0.5, '0', 1, 0, 100)

            it ('should throw if not a number', () => {

                expect (request).toThrowError ()

            })

        })

        describe ('start2', () => {

            const request = () => mapRange (0.5, 0, '1', 0, 100)

            it ('should throw if not a number', () => {

                expect (request).toThrowError ()

            })

        })

        describe ('start2', () => {

            const request = () => mapRange (0.5, 0, 1, '0', 100)

            it ('should throw if not a number', () => {

                expect (request).toThrowError ()

            })

        })

        describe ('stop2', () => {

            const request = () => mapRange (0.5, 0, 1, 0, '100')

            it ('should throw if not a number', () => {

                expect (request).toThrowError ()

            })

        })

    })

})