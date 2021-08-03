import { getMyComputedStyle } from './get-my-computed-style'

const element = document.createElement ('div')

element.style = 'width: 20px'

describe ('getMyComputedStyle', () => {

    describe ('success story', () => {

        const response = getMyComputedStyle (element, 'width')

        it ('should return a string', () => {

            expect (typeof response).toBe ('string')

        })

        it ('should return the expect value', () => {

            expect (response).toBe ('20')

        })

    })

    describe ('arguments', () => {

        describe ('element', () => {

            it ('should throw if not an HTMLElement', () => {

                const request = () => getMyComputedStyle (1, 'width')

                expect (request).toThrowError ()
            
            })

        })

        describe ('property', () => {

            it ('should throw if not a number', () => {

                const request = () => getMyComputedStyle (element, 1)

                expect (request).toThrowError ()
            
            })

            it ('should throw if property is empty', () => {

                const request = () => getMyComputedStyle (element, 'height')

                expect (request).toThrowError ()

            })
        
        })
    
    })

})