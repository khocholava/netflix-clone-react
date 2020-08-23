import React, {useEffect, useState} from 'react'
import './Row.css'
import {instance} from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
export const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'

export const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])

    const handleClick = movie => {
        if(trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(err => console.log(err))
        }
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>
                {movies.map(movie => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`row-poster ${isLargeRow && 'row-poster-large'}`}
                        src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}