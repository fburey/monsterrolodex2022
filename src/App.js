import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render');
  // Que los datos se cargen una vez
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      setMonsters(users);
      console.log('effect in monsters');
    });
  },[]);

  //Que los datos de los monsters filtrados se actualice
  // cuando el campo de busqueda cambien o cuando
  // monsters cambie.
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log('effect in newFilteredMonsters');
  },[monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const titleFieldString = event.target.value.toLowerCase();
    setTitle(titleFieldString);
  };

  return(
    <div className="App">
    <h1 className="app-title">{title}</h1>
    <SearchBox
    className = 'monsters-search-box'
    placeholder = 'search monsters'
    onChangeHandler = {onSearchChange}/>        
    <br/>
    <SearchBox
    className = 'title-search-box'
    placeholder = 'set title'
    onChangeHandler = {onTitleChange}/>     
    <CardList monsters = {filteredMonsters}/>
  </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField:''
//     };
//   }


//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;


//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//         className = 'monsters-search-box'
//         placeholder = 'search monsters'
//         onChangeHandler = {onSearchChange}/>        
//         <CardList monsters = {filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
