import React, { Component } from 'react'
import styled from 'styled-components';


 class card extends React.Component {
    constructor(){
        super();
        this.state = {
            poster:"",
            title:"",
            synopsis:"",
            yearOfRelease:"",
        }
    }
    componentDidMount(){
    this.setState({ poster: "https://www.pngall.com/wp-content/uploads/1/Film-High-Quahty-PNG.png"}) 
    }

  render() {
    return (
      <div>
      
         <img src={this.props.poster} alt="poster of the movie"/> 
           
              <h3>{this.props.title}</h3>
              <h3>{this.props.yearOfRelease}</h3>
              <p>{this.props.synopsis}</p>
       
      </div>
    )
  }
}

export default card