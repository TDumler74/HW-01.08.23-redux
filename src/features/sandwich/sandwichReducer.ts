import Action from "./types/Action";
import SandwichState from "./types/SandwichState";
const initialState: SandwichState = {
  value: 'Sandwich'
};
 export default function sandwichReducer(
  state: SandwichState = initialState,
  action: Action
): SandwichState {
    switch (action.type) {
        case 'addBread':
          return { ...state, value: state.value + action.payload };
        case 'addCheese':
          return { ...state, value:state.value + action.payload };
          case 'addSalami':
            return { ...state, value:state.value + action.payload };
            case 'handleClear':
            return { ...state, value:  action.payload };
        default:
          return state;
};
}