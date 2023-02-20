import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { AddToCart, FetchData } from "../Redux/games/action";



import { GameCard } from "../components/GameCard";
import "../App.css"
export const Game = () => {


     const Games = useSelector((store) => store.gameData.games);
    const dispatch = useDispatch();
    
 

     useEffect(() => {
       if (Games?.length === 0) {
         dispatch(FetchData());
       }
     }, [dispatch, Games?.length]);

   


    const handleAdd = (id) => {
        
       let x=  getSinglegame(id)
        
        x.then((e) => {
           dispatch(AddToCart(e))
       })
        
    }

    const getSinglegame = async (id) => {
        try {
            const response = await fetch(
              `https://gold-worried-cockroach.cyclic.app/game/${id}`
            );

            const res = await response.json()
       
            return res
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="gamepage">
      
      {Games.map((e, i) => {
        return (
          <div key={i}>
            <GameCard title={e.title} image={e.image} id={e._id} handleAdd={handleAdd} />
          </div>
        );
      })}
    </div>
  );
};
