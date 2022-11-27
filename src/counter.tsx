import React from "react";

class Counter extends React.Component {
    render() {
      return (
        <>
          <h2 id="counter">0</h2>
          <table id="counterbuttons">
            <tr>
              <td>
                <button
                  id="increment"
                  onClick={() => {
                    const counter = document.getElementById("counter");
                    const maxClicks = 99;
  
                    if (counter) {
                      if (parseInt(counter.innerHTML) < maxClicks) {
                        counter.innerHTML = (
                          parseInt(counter.innerHTML) + 1
                        ).toString();
                      } else {
                        counter.innerHTML =
                          "🎉 " + (maxClicks + 1).toString() + " 🎉";
                        counter.style.color = "green";
                        setTimeout(() => {
                          alert("you win!!!");
                        }, 10);
                      }
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
                      counter.style.color = "white";
                    }
                  }}
                >
                  Reset
                </button>
              </td>
            </tr>
          </table>
        </>
      );
    }
  }

  export default Counter;