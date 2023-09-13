import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';
//import {GifGrid}  from './Components/GifGrid';
//import {AddCategory}  from './Components/AddCategory';


function App() {

  const [categories, setCategories] = useState(['Saitama'])
  const [errorMsn, setErrorMsn] = useState('');

  const onAddCategory = (value) => {

    if (categories.includes(value)) {

      setErrorMsn('Categoria ya incluida.')
      return;

    }

    setCategories(
      (cat) => [
        value, ...cat
      ]
    );

  }

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)}
        onErrorMsn={(value) => setErrorMsn(value)} />

      <a>{errorMsn}</a>

      {
        categories.map(
          (category) => (
            <GifGrid key={category} category={category} />
          )
        )
      }

    </>
  )
}

export default App
