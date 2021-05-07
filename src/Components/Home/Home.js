import { Link } from "react-router-dom";
import "./Home.css";


export default function Home() {
const audio = new Audio("/Sounds/sm64_mario_lets_go.wav");
    const startapp = () => {
        audio.play();
  }

  const hover = new Audio("/Sounds/Klick.mp3");
    const startKlickapp = () => {
        hover.play();
    }

    return(
        <div className="homescreen" >
            <h1>Amiibo Searcher</h1>
            <div className="screen-logo" >
                <img id="amiibo-logo" src="/Images/logo.png" />
                <img id="mario" src="/Images/mario.png"/>
            </div>
            <Link to="/searchresults" style={{textDecoration: 'none', color: "white"}} onClick={startapp} onMouseOver={startKlickapp}>
                Enter
            </Link>
        </div>
    )
}