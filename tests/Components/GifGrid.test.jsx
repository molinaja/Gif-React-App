import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

jest.mock('../../src/Hooks/useFetchGifs');

describe('Prueba del componente <GifGrid />', () => {

    const category = 'Goku';

    test('Debe mostrar el loading inicial', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isloading: true
        })

        render(<GifGrid key={category} category={category} />)

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));



    });

    test('Debe mostrar los items de la imagenes cargadas con useFetchGifs', () => {

        const gifs = [
            {
                id: 'A'
                , title: 'Goku'
                , url: 'www.123.com'
            },
            {
                id: 'B'
                , title: 'Gojo'
                , url: 'www.456.com'
            },
            {
                id: 'C'
                , title: 'Trunks'
                , url: 'www.789.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isloading: true
        })

        render(<GifGrid key={category} category={category} />)
        //screen.debug();

        expect( screen.getAllByRole('img').length ).toEqual(3);

    })

})  