import { GetGif } from "../../src/helpers/getGif";


describe('Pruebas en getGif.js', () => { 

    test('Debe retornar un arreglo de gifs, minimo uno con la estructura basica', async() => { 

        const gifs = await  GetGif('Goku');
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual(
            {
                id: expect.any(String),
                title:expect.any(String),
                url:expect.any(String),
            }
        )

     });

});