import {useEffect, useState} from "react";


import axios from "axios";


function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    makeGetRequest();
  },
  [])
 
  async function makeGetRequest(){
    let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
    console.log("response", response.data);
  }






  return (
    <div className="App">

    </div>
  );
}

export default App;
