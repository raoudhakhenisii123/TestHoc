import React from 'react'
import Withloading from './withloading'

const List =props=>{
return(
    <ul>
        {props.films.map ( film =>{ return(
        <li key={film.title}> {film.title}</li>)           
         } )}

    </ul>

)
}

export default Withloading(List);