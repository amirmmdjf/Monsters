import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import CardList from './components/card-list/card-list-component.jsx';
import SerachBox from './components/search-box/search-box.component';
import "./App.css";


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

    componentDidMount() {
       fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response) => Response.json())
        .then((users) => 
          this.setState(() => {
              return{monsters: users}
        })
    );
  }
    onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();    
        this.setState(() => {
            return {searchField};
        }, 
    );
  } 

  render() {
    console.log("render from AppJS");
    const{monsters, searchField } = this.state;
    const{onSearchChange} = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    
    return  (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>


    <SerachBox 
    className="monsters-search-box"
    onChangeHandler={onSearchChange} 
    placeholder="Search Monster"
    />
    <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;