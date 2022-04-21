import { useEffect, useState } from "react";
import SongTable from "./Components/SongTable/SongTable";

import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

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

  // {console.log("songs in return", songs)}
  // {songs.map((song) => song.title)}

  // let result = objArray.map(({ foo }) => foo)
  // let result = objArray.map(a => a.foo);

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 style={{ margin: "1em" }}>MusicShare</h3>
        <div className="col-md-6">
          <div className="border-box">
            <SongTable songs={songs} />
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

{
  /* <div className="App">
  {console.log("songs in return", songs)}
  {songs.map((song) => song.title)}
</div>; */
}
