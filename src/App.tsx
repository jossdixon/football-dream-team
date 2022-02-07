import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [player, setPlayer] = useState([
    {
      name: "Lionel Messi",
      url: "https://editorial.uefa.com/resources/026f-13d74cefe05a-09e682c0c3d1-1000/paris_saint-germain_v_manchester_city_group_a_-_uefa_champions_league.jpeg",
      position: "Attacker",
      age: 34,
      team: "PSG",
      nationality: "Argentina",
      notes: ""
    },
    {
      name: "Édouard Mendy",
      url: "https://e0.365dm.com/21/12/768x432/skysports-edouard-mendy-chelsea_5604133.jpg?20211204160327",
      position: "Goalkeeper",
      age: 29,
      team: "Chelsea",
      nationality: "Senegal",
      notes: ""
    }
])

  return (
    <div className="App">
      <h1>Football Dream Team</h1>
    </div>
  );
}

export default App;
