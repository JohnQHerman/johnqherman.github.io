import "./App.css";
import UserButton from "./userbutton";

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <div id="background">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="background.jpg"
          id="background"
        >
          <source src="background.webm" type="video/webm" />
          <source src="background.mp4" type="video/mp4" />
        </video>
        <img src="" alt="" id="fallback" />
      </div>

      <header>
        <h1>John Q. Herman 🦝</h1>
      </header>

      <main>
        <div id="mainpara">
          <p>
            ----------------------------------------------------------------------
          </p>
          <p>
            Hi! This is the skeleton of my personal website. Don't expect much
            else here until I learn more about and build more with TypeScipt
            React :)
          </p>
          <p>-----------------------------------</p>
        </div>

        <h2 id="counter">0</h2>

        <table id="counterbuttons">
          <tr>
            <td>
              <button
                id="increment"
                onClick={() => {
                  const counter = document.getElementById("counter");
                  if (counter) {
                    counter.innerHTML = (
                      parseInt(counter.innerHTML) + 1
                    ).toString();
                  }
                }}
              >
                Increment
              </button>
            </td>

            <td>
              <button
                id="reset"
                onClick={() => {
                  const counter = document.getElementById("counter");
                  if (counter) {
                    counter.innerHTML = "0";
                  }
                }}
              >
                Reset
              </button>
            </td>
          </tr>
        </table>

        <></>

        <UserButton />

        <div id="user"></div>
      </main>

      <footer> Build Date: 2022-11-26</footer>
    </div>
  );
}

export default App;

// q: what is the terminal command to get all dependencies in package-lock.json?
//
