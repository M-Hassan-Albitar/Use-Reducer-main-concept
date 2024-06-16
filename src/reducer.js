import { data } from "./data";

export const CLEAR_ALL = "clear_all";
export const RESET = "reset";
export const DELETE_PERSON = "delete_person";

const reducer = (currentState, action) => {
  if (action.type === CLEAR_ALL) {
    return { ...currentState, persons: [] };
  }
  if (action.type === RESET) {
    return { ...currentState, persons: data };
  }

  if (action.type === DELETE_PERSON) {
    const newArr = currentState.persons.filter(
      (p) => p.id !== action.payload.id
    );
    // console.log(currentState);
    return { ...currentState, persons: newArr };
  }
};

export default reducer;
