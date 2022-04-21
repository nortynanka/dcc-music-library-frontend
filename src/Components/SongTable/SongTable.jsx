import React from "react";

const SongTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Song</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>

      <tbody>
        {props.songs.map((song, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.releaseDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SongTable;
