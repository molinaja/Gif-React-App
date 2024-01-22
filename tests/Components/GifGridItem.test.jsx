import { render, screen } from "@testing-library/react";
import { GifGridItem } from '../../src/Components/GifGridItem';

describe('Prueba en <GifGridItem/>', () => {

    const title = 'gifTitulo';
    const url = 'www.test.com';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();    

    });

    test('Validando imagen cargada src y alt', ()=>{

        render(<GifGridItem title={title} url={url} />);
        const {src , alt} = screen.getByRole('img');
        expect( src ).toBe( 'http://localhost/' + url );
        expect( alt ).toBe( title );

    });

    test('Debe mostrar el titulo del gif', ()=>{

        render(<GifGridItem title = { title } url = { url } />);
        expect(screen.getByText( title ) ).toBeTruthy();

    });

});