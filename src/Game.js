import React from "react"
import Review from "./Review"

class Game extends React.Component {
    state = {
        reviews: this.props.reviews.filter( review => {
            return review.game_id === this.props.id
        }),
        show: false
    }
    
    handleShow = (e) => {
        // e.preventDefault();
        this.setState({ show: !this.state.show})
    }
    
    
    
    renderButtons = () => {
        if (this.props.user !== " ") {
           return (
               <div>
                   
            <button> Write a Review</button>
               </div>
            
           ) 
        }
    }


    renderReviews = () => {
        return (this.state.reviews.map((review) => {
            console.log(review)
            return (
               
              <Review
              key={review.id}
              id={review.id}
              rating={review.rating}
              body={review.body}
              
              />
           )  
              
          })
          )
      } 
    
    render() {
        console.log(this.props.show)
        return (
            <div  className="game" >
                <div>
                <h3>{this.props.name}</h3>
                <img style={{'height': "300px", "width": "248px"}} src={this.props.img} alt={this.props.name} onClick={this.handleShow}/>
                {this.renderButtons()}
                {this.state.show && this.state.reviews.length > 0 && this.renderReviews()}
                
                
                </div>
                
    
            </div>
        )
    }
    
}

export default Game;