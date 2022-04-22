import { useEffect, useState } from "react";
import SongTable from "./Components/SongTable/SongTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  function findSongs(searchTerm) {
    songs.filter(searchTerm);
  }

  // pass setSearchTerm into SearchBar component as props
  // call it inside SearchBar using props
  // use addNewEntry from weight tracker as example

  useEffect(() => {
    console.log("songs in useEffect", songs);
    makeGetRequest();
  }, []);

  async function makeGetRequest() {
    let response = await axios.get(
      "http://www.devcodecampmusiclibrary.com/api/music"
    );
    console.log("response", response.data);
    setSongs(response.data);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 style={{ margin: "1em" }}>MusicShare</h3>
        <div className="col-md-6">
          <div className="border-box">
            <SongTable songs={songs} />
            <SearchBar newSearch={findSongs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// let songs = ['hello']
// songs = [.......]
// setSongs([......])
