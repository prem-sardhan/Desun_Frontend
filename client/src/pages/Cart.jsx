import { fetchCart } from "../Redux/games/action";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { deletCartItmes } from "../Redux/games/action";
import { CartCard } from "../components/CartCard";
import "../App.css"
export const Cart = () => {
    const Cart = useSelector((store) => store.gameData.cart);
    const dispatch = useDispatch();
    console.log(Cart.length);

    useEffect(() => {
      if (Cart?.length === 0) {
       
        dispatch(fetchCart());
      }
    }, [Cart?.length, dispatch]);

    const handleRemove = (id) => {
        console.log(id)
        dispatch(deletCartItmes(id));
    }
    console.log(Cart)
    return (
      <div className="gamepage">
        {Cart.map((e, i) => {
          return (
            <div key={i}>
              <CartCard
                title={e.title}
                image={e.image}
                      handleRemove={handleRemove}
                      id={e._id}
              />
            </div>
          );
        })}
      </div>
    );
}