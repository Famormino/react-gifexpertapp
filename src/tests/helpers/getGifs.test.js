import {getGifs} from '../../helpers/getGifs'

describe('Prubas con getGifs Fetch', () => {
    
    test('Debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('Samurai');
        expect( gifs.length).toBe( 10 )

    })

    test('Debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('');
        expect( gifs.length).toBe( 0 )

    })
    
})
