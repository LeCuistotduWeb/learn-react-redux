import {BUY_PHONE} from "./type";

const buyPhone = (quantity) => {
  return {
    type: BUY_PHONE,
    payload: quantity ?? 1
  }
}

export default buyPhone;
