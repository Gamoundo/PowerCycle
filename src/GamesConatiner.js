import React from "react"
import Game from "./Game"

class GamesContainer extends React.Component {
    
    state = {
        reviews: [],
        show: false

    }
    
        setReviews = (updatedReviev) => {
           const newReviews = this.state.reviews.map((review) => {
                if (review.id === updatedReviev.id) {
                    return updatedReviev
                } else {
                    return review
                }

            })
            this.setState({reviews: newReviews})
        }



    componentDidMount() {
        fetch("http://localhost:3000/reviews")
  .then(resp => resp.json())
  .then(reviews => this.setState({ reviews}))
    }
    
    handleShow = (e) => {
        e.preventDefault();
        this.setState({ show: !this.state.show})
    }


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
            reviews={this.state.reviews}
            handleShow={this.handleShow}
            show={this.state.show}
            setReviews={this.setReviews}
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