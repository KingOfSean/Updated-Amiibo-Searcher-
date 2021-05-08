import { Link } from "react-router-dom";
import "./SearchResults.css";
import Search from "./Search"

export default function SearchResults({ amiibos, handleChange, handleSubmit, searchString }) {
    const audio = new Audio("/Sounds/switch-sound.mp3");
    const start = () => {
        audio.play();
  }
  
  const hover = new Audio("/Sounds/Klick.mp3");
    const startKlick = () => {
        hover.play();
  }

  const ohno = new Audio("/Sounds/ohno.wav");
    const startOhno = () => {
        ohno.play();
    }    

    if (amiibos === undefined) {
        return (
            <div>
                <Search/>
                <h1 className="error">No Amiibos Found!</h1>
                <img src="/Logo/undefined.png" height="417px" onLoad={startOhno} />
            </div>
        ) 
        
    }
    return(
        <div>
            <Search handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString}/> 
            <div className="gallery">
                {amiibos.map((amiibo, i) => {
                    return (
                        <div>
                            <Link to={`/amiibo/${amiibo.tail}`} onClick={start} onMouseOver={startKlick} > 
                                <img src={amiibo.image} alt={amiibo.image.tail}/>
                            </Link>
                            <p>{amiibo.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}