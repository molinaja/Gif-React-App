import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/Hooks/useFetchGifs"



describe('Prueba del hook useFetchGifs', () => { 

    test('Debe regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs( 'Goku' )  )
        const {images, isloading} = result.current;

        expect( images.length ).toBe( 0 );
        expect( isloading ).toBe( true )

     })

     test('Debe regresar images y cambiar el estado de cargado', async() => { 

        const { result } = renderHook( () => useFetchGifs( 'Goku' )  )      

        await waitFor(

            () =>  expect( result.current.images.length ).toBeGreaterThan( 0 )

        );

        const {images, isloading} = result.current;
        
        expect( images.length ).toBeGreaterThan( 0 );
        expect( isloading ).toBe( false )

      })

 })