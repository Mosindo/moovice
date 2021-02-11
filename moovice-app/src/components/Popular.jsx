import React from 'react';
import Card from './Card';
class Popular extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            movies:[],
        }
    }



    // searchMovie = (number) =>{
    // fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=efd8a07427b2c721a89376dbc34799dd")
    // .then(response => response.json())
    // .then(movieList => {
    //     this.setState({
    //         movies:movieList,
    //         name : movieList.results[number].title,
    //         id : movieList.results[number].id,
    //     })
    //     .catch(error => alert("error"))
    //     console.log(this.state.movies)
    // })
    
    // }
    
    onChange=(e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }

    componentDidMount () {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=efd8a07427b2c721a89376dbc34799dd")
            .then(response => response.json())
            .then(moviesList => {
                this.setState({
                    movies: moviesList.results
                })
                console.log("movies:",this.state.movies)
            }).catch(error => alert("error"))
    }


    render() {
        return (

            <div className="d-flex flex-wrap justify-content-center">
               {this.state.movies.map((listMovies)=>{
                   {console.log(listMovies)}
                   return (
                       
                     <Card title={listMovies.title} img={listMovies.poster_path}></Card>
                   )
               })}
            </div>
            
        )
    }

}

export default Popular;
