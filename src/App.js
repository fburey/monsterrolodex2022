import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('a'); //[value, setValue]
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    });
    
    setFilteredMonsters(newFilteredMonsters);
    console.log('effect is firing');
  },[monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  
  return(
    <div className="App">
    <h1 className="app-title">Monster Rolodex</h1>
    <SearchBox
    className = 'monsters-search-box'
    placeholder = 'search monsters'
    onChangeHandler = {onSearchChange}/>        

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
