import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";

interface CartState {
  cartItems: IProduct[];
}

// const [counter, setCounter] = useState(0)
const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    addItemToCartAction: (state, actionPayload: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(
        state.cartItems,
        actionPayload.payload
      );
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;

export default cartSlice.reducer;
