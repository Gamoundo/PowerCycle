import React from "react"
import Game from "./Game"

class GamesContainer extends React.Component {
    renderGames = () => {
      return (this.props.games.map((game) => {
         return (
            <Game 
            key={game.id}
            id={game.id}
            name={game.name}
            img={game.img}
            genre={game.genre}
            ersb={game.ersb}
            user={this.props.user}
            />
         )  
            
        })
        )
    } 

    render() {
        
        return (
            <div>
                {this.renderGames()}
            </div>
        )
    }
}

export default GamesContainer;