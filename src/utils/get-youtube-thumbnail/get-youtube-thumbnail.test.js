import { getYoutubeThumbnail, prefix, suffix } from './get-youtube-thumbnail'

describe ('getYoutubeThumbnail', () => {

    describe ('success story', () => {

        const id = 'id'
        const response = getYoutubeThumbnail (id)

        it ('should return a string', () => {

            expect (typeof response).toBe ('string')

        })

        it ('should return expect value', () => {

            expect (response).toBe (prefix + id + suffix)
        
        })
    
    })

    describe ('arguments', () => {

        describe ('id', () => {

            it ('should throw when not a string', () => {

                const request = () => getYoutubeThumbnail (1)

                expect (request).toThrowError ()
            
            })
        
        })
    
    })

})