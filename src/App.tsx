import React, { useState } from 'react';
import './App.css';
import List from "./components/List"

interface IState {
  players: {
    name: string
    url: string
    position: string
    age: number
    club: string
    nation: string
    notes?: string
  }[]
}

function App() {

  const [players, setPlayer] = useState<IState["players"]>([
    {
      name: "Lionel Messi",
      url: "https://editorial.uefa.com/resources/026f-13d74cefe05a-09e682c0c3d1-1000/paris_saint-germain_v_manchester_city_group_a_-_uefa_champions_league.jpeg",
      position: "Attacker",
      age: 34,
      club: "PSG",
      nation: "Argentina",
      notes: "Best player ever?"
    },
])

  return (
    <div className="App">
      <h1>Football Dream Team</h1>
      <List players={ players }/>
    </div>
  );
}

export default App;
