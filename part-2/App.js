//const today = new Date();
//3 tweets

const App = () => (
  <div>
    <Tweet
      name="John Smith"
      username="JJ23Smith"
      date={new Date()} //check
      message="hello this is my first"
    />
    <Tweet
      name="Egg Shells"
      username="eggstar99"
      date={new Date()}
      message="Today I will eat eggs"
    />
    <Tweet
      name="Manny Smith"
      username="Rain02849"
      date={new Date()}
      message="Football is the best"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
