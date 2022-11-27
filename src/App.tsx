import "./App.css";
import Background from "./background";
import UserButton, { Counter } from "./userbuttons";

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Background />

      <header>
        <h1>john q. herman</h1>
      </header>

      <main>
        <h2 id="counter">0</h2>

        <Counter />

        <></>

        <UserButton />

        <div id="user"></div>
      </main>

      <footer> Build Date: 2022-11-27</footer>
    </div>
  );
}

export default App;
