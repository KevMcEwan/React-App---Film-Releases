import React, {Component} from 'react';
import Film from './Film';
import '../index.css';

class FilmList extends Component{
   render(){
      const films = this.props.films.map((film, index) => {
         return(
            <Film
               key={index}
               name={film.name}
               url={film.url}
            >
            </Film>
         );
      });
      
      return (
         <ul>
            {films}
         </ul>
      );
   }

}

export default FilmList;