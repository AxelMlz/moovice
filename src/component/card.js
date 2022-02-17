import React, { Component } from 'react'

export default class card extends Component {
    constructor(){
        super();
        this.state = {
            jacket:"",
            title:"",
            yearOfRelease:"",
            synopsis:"",
        }
    }
    componentDidMount(){
    this.setState({ jacket: "https://www.pngall.com/wp-content/uploads/1/Film-High-Quahty-PNG.png"}) 
    }
  render() {
    return (
      <div>
      
         <img src={this.props.jacket} alt="movie jacket" />
           
              <h3>{this.props.title}</h3>
              <h3>{this.props.yearOfRelease}</h3>
              <p>{this.props.synopsis}</p>
       
      </div>
    )
  }
}
