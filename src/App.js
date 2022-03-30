import { useState } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('a'); //[value, setValue]
  const [monsters, setMonsters] = useState([]); //[value, setValue]
  console.log('render');

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));


  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((item) => {
    return item.name.toLowerCase().includes(searchField);
  });  

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
