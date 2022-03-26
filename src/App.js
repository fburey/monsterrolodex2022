import { Component } from 'react';

import logo from './logo.svg';
import CardList from './components/card-list/card-list.component.jsx';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    };
  }

  componentDidMount(){
    console.log('componentDidMount from App'); 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters:users};
    }));

  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return {searchField};
    });
  };

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input className='search-box' 
          type='search' placeholder='search monsters'
          onChange={onSearchChange}
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
