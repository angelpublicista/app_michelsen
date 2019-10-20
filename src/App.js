import React, {Component} from 'react';
//import logo from './logo.svg';
import './css/style.css';
import Header from './components/Header';
import Menu_lateral from './components/Menu-lateral';
import { users } from './users.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users
    }
  }
  
  render(){
    const user = this.state.users[1];

    return (
      <div className="app-container">
         <Header name="Texto" avatar={user.avatar} user={user.name} />
         <Menu_lateral />
         <div className="content-area" id="content-area"></div>
      </div>
    );
  }
}

export default App;
