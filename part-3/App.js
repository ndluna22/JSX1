const App = () => (
  <div>
    <Person name="John Smith" age={30} hobbies={["cooking", "drawing"]} />
    <Person name="Egg Shells" age={17} hobbies={["soccer", "swimming"]} />
    <Person name="Manny Smith" age={21} hobbies={["running", "music"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
