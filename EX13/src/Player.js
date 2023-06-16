import React from "react";
import { Card, Col, Container, Row } from 'react-materialize';
import { Link } from "react-router-dom";
import { Players } from "./shared/ListOfPlayers";
export default function player() {
  //   const[player, setPlayer]= useState([])
  return (
    <div className='container'>
      {Players.map((player) => (
        <div className='column'>
          <div className='card'>
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            {/* <button>Detail</button> */}
            <Link to={`detail/${player.id}`}>
              <p><button>Detail</button></p>
            </Link>

          </div>
        </div>
      ))}
    </div>

  )
}
<Container>
	<Row>
		Data.map(=(<Col><Card></Card></Col>))
</Row>
</Container>
