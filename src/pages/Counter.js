export default function Counter({ state, dispatch }) {
  return (
    <div className="counter--container">
      <h1>Counter</h1>
      <p>Count: {state.count}</p>
      <input onChange={(e) => dispatch({ type: "set", valued: e })} />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
