import {React,} from 'react'
import "./Subtotal.css"
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import {useHistory} from "react-router-dom"
import Button from "@material-ui/core/Button"
import CurrencyFormat from "react-currency-format";
function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className = "subtotal">
           <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       <Button variant = "contained" color = "primary">Proceed to Checkout</Button>
        </div>
    )
}

export default Subtotal
