import { getItem, setItem } from "../services/localStorageFuncs";
import { useState } from "react";
import { BsFillCartDashFill } from "react-icons/bs"
import "./Cart.css"
//backgroud da pagina é => #cbd5e0

const Cart = () => {
    const [data, setData] = useState(getItem("carrinhoYt") || [])

    const removeItem = (obj) => {
      const arrFilter = data.filter((e) => e.id !== obj.id)
      setData(arrFilter)
      setItem("carrinhoYt", arrFilter)
    }
    const subTotal = data.reduce((acc, cur) => acc + cur.price, 0)

   return(
    <div>
       <h3>{`Subtotal: $R$ ${subTotal}`}</h3>
       <div  className="cart">
        {data.map((e) => (
            <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title}/>
            <h4>{`R$ ${e.price}`}</h4>
            <button
             onClick={() => removeItem(e)}
            >
               <BsFillCartDashFill />
            </button>
            </div>
        ))}
       </div>
    </div>
   )
}

export default Cart;