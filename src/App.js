import React from 'react';
import Navbar from './NavBar'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesContainer from "./GamesConatiner"


const storedUser= window.localStorage.getItem("Power Cycle");

class App extends React.Component {

state = {
  games: [],
  user: {
    name: storedUser ? JSON.parse(storedUser).name : "",
    age: storedUser ? JSON.parse(storedUser).age : 0,
    id: storedUser ? JSON.parse(storedUser).id : 1
  }
  
}


handleLogout = () => {
  window.localStorage.clear();
  window.location = '/'
  
}

ChangeUser = (newUser) => {
  this.setState({
     user: newUser
   })
  
 }

// user obj instead?
componentDidMount() {
  fetch("http://localhost:3000/games")
  .then(resp => resp.json())
  .then(games => this.setState({ games}))
  
}


  


  render() {
    console.log(this.state.games)
    console.log(localStorage)
    return (
      <Router className="App">
        <div className="page">
        <h1>Power Cycle</h1>
        {storedUser && <h3>{this.state.user.name} is signed in</h3>}
        {this.state.user.name !== "" && <button onClick={this.handleLogout}>Logout</button>}
        <div>
        {this.state.user.name === "" && <Register changeUser={this.ChangeUser}/>}
        {this.state.user.name === "" && <Login changeUser={this.ChangeUser}/>}
        </div>
        
        <GamesContainer  games={this.state.games} user={this.state.user} />
        <Route exact path= '/login' component= {Login}/>
        
        <Route exact path='/register' component= {Register}/>
      </div>
      </Router>
      
     );
  }
  
}

export default App;
