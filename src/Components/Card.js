import React from "react"

class Card extends React.Component{
    state = {
        'show' : false
    }

    showAuthor = () => {
        if(this.state.show == true) {
            return (
                <span>the poster is : {this.props.poster}</span>
            )
        }
    }

    displayAuthor = () => {
        
        this.setState({ show :  ! this.state.show })
    }
    render(){
        return(
            <div className="col-md-4">
            <div className="card">
                <img src={this.props.path} height="200"></img>
                <div className="card-body">
                    <div className="card-text">
        <h3>{this.props.title}</h3>
        {this.showAuthor()}
                        <div className="row">
                            <button className="btn btn-outline-dark">View</button>
                            <button onClick={this.displayAuthor} className="btn btn-outline-danger">show author</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Card