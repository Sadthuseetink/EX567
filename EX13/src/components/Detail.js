import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { data } from "../components/share/ListOfPlayers";
const Detail = () => {
    const userName = useParams();
  const player = data.find(obj => {
    return obj.id == userName.id;
  });
   let cost = player.cost.toLocaleString();

  return (
    <div className='container'>
            <div className='product-card'>

                <div className='product-tumb'>
                    <span className='badge'>{player.name}</span>
                    <img className='hinh1' src={`../${player.img}`} alt='' />

                </div>
                <div className='product-details'>
                    <h2 >{player.club}</h2>
                    <div className='product-price'>Market value: € {cost}</div>
                    <p>{player.info}</p>
                    <div className='product-bottom-details'></div>
                </div>
            </div>
        </div>


  )
}

export default Detail
