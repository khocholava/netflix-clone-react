import React, {useEffect, useState} from 'react'
import {instance} from "../../axios";
import {requests} from "../../request";
import {imageBaseUrl} from "../Row/Row";
import './Banner.css'

export const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)]
            )
        }

        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${imageBaseUrl}/${movie?.backdrop_path})`,
            backgroundPosition: 'center center'
        }}>
            <div className="banner-contents">
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.originalName}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fade-bottom"></div>
        </header>
    )
}