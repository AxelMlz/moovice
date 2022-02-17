import React, { Component } from 'react'
import Card from '../component/card';

export default class popular extends Component {
    constructor() {
        super();
        this.state = {
            movies : [],
        }
    }

    // componentDidMount() {
    //     // this.state.movies.push("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2")
    //     // console.log(this.state.movies)
    //     fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2`)
    //     .then((res) => res.json())
    //     .then((res) => { 
    //       this.setState((prevState)=>{
    //           return{
    //             movies : [...prevState.movies, ...res.results]
    //           }
    //       })
    //     }) .then(console.log(this.state.movies)) } 
    componentDidMount() {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d213053b4412c4badf1b0e0e9e5bda2`
      )
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            movies : res.results,
          })
          .then(console.log(res.results))
          );
}
   
  render() {
       return (
      <div>
    <h1>popular</h1>
{this.state.movies.map((movie) =>{ 
       return (<Card key={movie.id}
         poster = {`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
         title = {movie.original_title}
         yearOfRelease = {movie.release_date}
         synopsis = {movie.overview}/>)
          })}    
      </div>
       )}

}