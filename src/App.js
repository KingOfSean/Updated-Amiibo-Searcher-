import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Components/Home/Home';
import Details from "./Components/Details/Details";
import SearchResults from "./Components/Search/SearchResults";
import React, { useState, useEffect } from "react";





// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it



export default function App () {
  const [amiibos, setAmiibos] = useState([]);
  const [searchString, setSearchString] = useState('mario');
  const [lastSearch, setLastSearch] = useState("");
  const [results, setResults] = useState(false)


  const getAmiibos = async () => {
    // const url = `https://www.amiiboapi.com/api/amiibo?character=${searchString}`;
    try{
      const res = await fetch(`https://www.amiiboapi.com/api/amiibo?character=${searchString}`);
      const data = await res.json();
      setAmiibos(data.amiibo); // i have the amiibo array
      setLastSearch(searchString);
      setSearchString("");
    } catch (error) {
      console.log(error);
    }
  };
  


  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getAmiibos(searchString);
  }


  useEffect(() => {
    getAmiibos(searchString);
  }, [])
  
  console.log(amiibos);

  const audio = new Audio("/Sounds/switch-sound.mp3");
    const start = () => {
    audio.play();
    }

    const hover = new Audio("/Sounds/Klick.mp3");
    const startKlick = () => {
    hover.play();
    }

  const audioapp = new Audio("/Sounds/sm64_mario_lets_go.wav");
    const startapp = () => {
      audioapp.play();
  }

  const hoverapp = new Audio("/Sounds/Klick.mp3");
    const startKlickapp = () => {
        hoverapp.play();
    }

  return (
    <div className="app">
        <nav>
          <div className="nav-container">
            <Link to="/" onClick={start} >
              <img src="/Images/logo2.png" />
              <h1>Amiibo Searcher</h1>
            </Link>
            <h2>{lastSearch}</h2>
            <img className="gif" src="/Logo/mario.gif" alt="oh no!"/>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/searchresults" render={() => <SearchResults amiibos={amiibos} searchString={searchString} handleSubmit={handleSubmit} handleChange={handleChange}/>}/>
          <Route path="/amiibo/:tail" render={routerProps => {
            console.log(routerProps);
            const amiibo = [...amiibos].filter(
              (a) => a.tail === routerProps.match.params.tail
            );
              return <Details {...routerProps} amiibo={amiibo[0]} />
          }} />
        </Switch>
      <footer>
        <img src="./Logo/nintendologo.png" height="50px" />
        <p>By: Sean King</p>
      </footer>
    </div>
  )
}