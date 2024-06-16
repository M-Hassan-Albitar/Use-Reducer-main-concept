import { useReducer } from "react";
import "./App.css";
import { data } from "./data";
import { CLEAR_ALL, DELETE_PERSON, RESET } from "./reducer";
import reducer from "./reducer";

function App() {
  const initData = {
    persons: data,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(reducer, initData);

  const handleClear = () => {
    dispatch({ type: CLEAR_ALL });
  };

  const handleReset = () => {
    dispatch({ type: RESET });
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_PERSON, payload: { id } });
  };

  return (
    <>
      <h2>USE REDUCER</h2>

      {state.persons.map((person) => {
        return (
          <div key={person.id}>
            <h5> {person.name} </h5>
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </div>
        );
      })}

      {state.persons.length <= 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : (
        <button onClick={handleClear}>Clear All</button>
      )}
    </>
  );
}

export default App;
