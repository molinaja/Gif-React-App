import { useState } from 'react'
import AddCategory from './Components/AddCategory'

function App() {
  const [categories, setCategories] = useState(['One punch', 'Dragon Ball', 'Fullmetal Alchemist'])

  const onAddCategory = (value) => {


    setCategories(
      (cat) => [
        value, ...cat
      ]
    );
    //setCategories( ['NuevaCat', ...categories])

  }

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewCategory={ (value) => onAddCategory(value) }
      //onAddCategories={setCategories}
      />
      <ol>
        {
          categories.map(
            (category) => {
              return <li key={category}>{category}</li>
            }
          )
        }
      </ol>
    </>
  )
}

export default App
