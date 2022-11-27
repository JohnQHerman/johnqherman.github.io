import "./App.css";
import Background from "./background";
import Counter from "./counter";
import UserButton from "./fetchuser";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Background />
      <Header />
      <main>
        <Counter />
        <p />
        <UserButton />
        <div id="user"></div>
      </main>

      <footer> Build Date: 2022-11-27</footer>
    </div>
  );
}

export default App;
