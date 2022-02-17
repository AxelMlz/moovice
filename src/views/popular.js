import React, { Component } from 'react'
import Card from '../component/card';

export default class popular extends Component {
    constructor() {
        super();
        this.state = {
            movies : [],
        }
    }

    componentDidMount() {
        // this.state.movies.push("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2")
        // console.log(this.state.movies)
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2`)
        .then((res) => res.json())
        .then((res) => { 
            this.setState({movies:res})
            console.log(this.state.movies);
        })  



    }
  render() {
       return (
      <div>
    <h1>popular</h1>
{this.state.movies.map((film )=> { 
    while (i < 20){ 
       return <Card
         jacket = {`https://image.tmdb.org/t/p/w300/${this.state.movies.poster_path}`} 
         title = {film.original_title}
         YearOfRelease = {this.state.movies.release_date}
         Synopsis = {this.state.movies.overview}/>
         }return null
       })}
      </div>
     
  
   
      
    )
  }

}