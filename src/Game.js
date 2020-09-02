import React from "react"

class Game extends React.Component {
    state = {
        reviews: []
    }
    
    renderButtons = () => {
        if (this.props.user !== " ") {
           return (
               <div>
                   <button> Delete</button>
            <button> Write a Review</button>
               </div>
            
           ) 
        }
    }
    
    render() {
        return (
            <div className="game" >
                <div>
                <h3>{this.props.name}</h3>
                <img style={{'height': "300px", "width": "248px"}} src={this.props.img} alt={this.props.name} />
                {this.renderButtons()}
                </div>
                
    
            </div>
        )
    }
    
}

export default Game;