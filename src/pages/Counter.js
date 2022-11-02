export default function Counter({ state, dispatch }) {
  return (
    <div className="counter--container">
      <h1>Counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        Set to 10
      </button>
      <button onClick={() => dispatch({ type: "incrementBy", payload: 10 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrementBy", payload: 10 })}>
        Decrement by 5
      </button>
    </div>
  );
}
