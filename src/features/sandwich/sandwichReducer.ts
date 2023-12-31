import Action from "./types/Action";
import SandwichState from "./types/SandwichState";
const initialState: SandwichState = {
  value: 'Sandwich:'
};
 export default function sandwichReducer(
  state: SandwichState = initialState,
  action: Action
): SandwichState {
    switch (action.type) {
        case 'sandwich/add':
          return { ...state, value: state.value + action.payload };
          case 'clear':
          return { ...state, value:  action.payload };
            default:
          return state;
};
}