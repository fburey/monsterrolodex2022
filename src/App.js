import { Component } from 'react';

import logo from './logo.svg';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  return(
    <div className="App">
    <h1 className="app-title">Monster Rolodex</h1>
    {/* <SearchBox
    className = 'monsters-search-box'
    placeholder = 'search monsters'
    onChangeHandler = {onSearchChange}/>        
    <CardList monsters = {filteredMonsters}/> */}
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

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters:users};
//     }));

//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });
//   };

//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((item) => {
//       return item.name.toLowerCase().includes(searchField);
//     });

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
