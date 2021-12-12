import React, {useState} from 'react';
import buyTv from "../redux/tv/actionTv";
import {useDispatch, useSelector} from "react-redux";
import QuantitySelector from "./ui/QuantitySelector";

const Tv = () => {

  const tv = useSelector((state)=>state.television.tv)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="product">
      <img src="/tile-wide.png" alt=""/>
      <div>
        Tv
        <p>disponibilité <span id="countTv">{tv}</span></p>
        <QuantitySelector min={1} max={2} value={quantity} onChange={setQuantity}/>
        <button id="buyTv" onClick={() => dispatch(buyTv(quantity))}>Acheter</button>
      </div>
    </div>
  );
}

export default Tv;



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
