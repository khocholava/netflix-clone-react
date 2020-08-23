import React from 'react';
import './App.css';
import {Row} from "./Components/Row/Row";
import {requests} from "./request";
import {Banner} from "./Components/Banner/Banner";
import {Nav} from "./Components/Nav/Nav";

function App() {
    return (
        <div className="app">
            <Nav/>
            {/*Banner*/}
            <Banner/>
            <Row
                isLargeRow
                title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}/>
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}/>
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}/>
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}/>
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}/>
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}/>
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}/>
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}

export default App;
