export default function Search({ handleSubmit, handleChange, searchString }) {
    
    const audio = new Audio("/Sounds/coinsound.mp3");
    const start = () => {
      audio.play();
    }
      return(
          <form onSubmit={handleSubmit} className="form-horizontal">
              <input
                  placeholder="Search"
                  type="text"
                  name='searchString'
                  required
                  onChange={handleChange}
                  value={searchString}
        />
        <button onClick={start} type="submit">
          <img src="/Images/guessbox.png" height="50px" width="50px" />
        </button>
      </form>
      
      )
  }