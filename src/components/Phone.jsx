import React, {useState} from 'react';
import buyPhone from "../redux/phone/actionPhone";
import {useDispatch, useSelector} from "react-redux";
import QuantitySelector from "./ui/QuantitySelector";

const Phone = () => {

  const phones = useSelector((state)=>state.phone.phones)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="product">
      <img src="/tile-wide.png" alt=""/>
      <div>
        Téléphone
        <p>disponibilité <span id="countPhone">{phones}</span></p>
        <QuantitySelector min={2} max={10} value={quantity} onChange={setQuantity}/>
        <button id="buyPhone" onClick={() => dispatch(buyPhone(quantity))}>Acheter</button>
      </div>
    </div>
  );
}

export default Phone;



// import React from 'react';
// import { connect } from 'react-redux'
// import buyPhone from "../redux/phone/actionPhone";
//
// const Phone = ({phones, buyPhone}) => {
//
//   return (
//     <div className="product">
//       <img src="/tile-wide.png" alt=""/>
//       <div>
//         Téléphone
//         <p>disponibilité <span id="countPhone">{phones}</span></p>
//         <button id="buyPhone" onClick={() => buyPhone()}>Acheter</button>
//       </div>
//     </div>
//   );
// }
//
// const mapStateToProps = (state) => {
//   return {
//     phones: state.phones
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyPhone: () => dispatch(buyPhone())
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Phone);
