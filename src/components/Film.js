import React, {Component} from 'react';

class Film extends Component{
    url = this.props.url;
      
   render(){
      
      return(
         <>
         <p><a href="www.google.com">{this.props.name}</a></p>
         <p>URL: {this.props.url}</p>
         </>
      );
   }
   

}

export default Film;