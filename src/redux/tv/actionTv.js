import {BUY_TV} from "./type";

const buyTv = (quantity) => {
  return {
    type: BUY_TV,
    payload: quantity ?? 1
  }
}

export default buyTv;
