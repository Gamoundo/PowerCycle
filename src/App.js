import React from 'react';
import Navbar from './NavBar'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesContainer from "./GamesConatiner"


class App extends React.Component {

state = {
  games: [],
  name: " "
  
}
// user obj instead?
componentDidMount() {
  fetch("http://localhost:3000/games")
  .then(resp => resp.json())
  .then(games => this.setState({ games}))
  
}


  


  render() {
    console.log(this.state.games)
    return (
      <Router className="App">
        <div className="page">
        <h1>Power Cycle</h1>
        <div>
        <Register />
        <Login />
        </div>
        
        <GamesContainer  games={this.state.games} user={this.state.name} />
        <Route exact path= '/login' component= {Login}/>
        
        <Route exact path='/register' component= {Register}/>
      </div>
      </Router>
      
     );
  }
  
}

export default App;
