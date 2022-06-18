import React from 'react'
import { MovieResponseSchema } from './MovieSchema';
// import {FcLikePlaceholder} from 'react-icons/fc'

type Props = {
   movie:  MovieResponseSchema
}
export default function MovieCard(props: Props) {
    const { movie } = props
    return (
       
        <div className="container">
            {/* <span><FcLikePlaceholder fontSize='1.5rem' /></span> */}
            <img src={ movie?.posterUrl?? "https://picsum.photos/200"} alt="poster" />
            <p>{movie?.name}</p>
        </div>
    );
}
