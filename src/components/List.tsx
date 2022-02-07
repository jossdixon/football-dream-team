import { prependOnceListener } from "process";
import React from "react";

interface IProps {
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

const List: React.FC<IProps> = ({ players }) => {

  const renderList = () => {
    return players.map((player) => {
      return (
      <li className="List">
        <div className="List-header">
          <img src={player.url} className="List-img" alt={player.name}/>
          <h2>{player.name}</h2>
        </div>
        <p>{player.position}</p>
        <p>{player.age} years old</p>
        <p>{player.club}</p>
        <p>{player.nation}</p>
        <p className="List-note">{player.notes}</p>
      </li>
      )
    })
  }

  return (
    <ul>
     { renderList() }
    </ul>
  )
}

export default List
