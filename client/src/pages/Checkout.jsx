
import { fetchCart } from "../Redux/games/action";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { CheckoutCard } from "../components/CheckoutCard";


export const Checkout = () => {
     const Cart = useSelector((store) => store.gameData.cart);
     const dispatch = useDispatch();
     console.log(Cart.length);

     useEffect(() => {
       if (Cart?.length === 0) {
         dispatch(fetchCart());
       }
     }, [Cart?.length, dispatch]);
    
    
    return (
      <div className="gamepage1">
        {Cart.map((e, i) => {
          return (
            <div key={i}>
              <CheckoutCard title={e.title} image={e.image} />
            </div>
          );
        })}
      </div>
    );
}