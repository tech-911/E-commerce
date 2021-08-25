import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import "./cart-icon.styles.scss";
import {connect} from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps=(dispatch)=>(
    {
        toggleCartHidden: ()=>dispatch(toggleCartHidden())

    }
)

export default connect(null, mapDispatchToProps)(CartIcon);
