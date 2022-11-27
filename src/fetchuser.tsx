import axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";

class JSONButton extends React.Component {
  render() {
    return (
      <button
        id="jsonbutton"
        onClick={() => {
          const json = document.getElementById("json");
          const jsonbutton = document.getElementById("jsonbutton");
          if (json && jsonbutton) {
            if (json.style.display === "none") {
              json.style.display = "block";
              jsonbutton.innerHTML = "Hide JSON";
            } else {
              json.style.display = "none";
              jsonbutton.innerHTML = "Show JSON";
            }
          }
        }}
      >
        Show JSON
      </button>
    );
  }
}

class UserButton extends React.Component {
  render() {
    return (
      <button
        id="userbutton"
        onClick={() => {
          axios.get("https://randomuser.me/api").then((r) => {
            const user = r.data.results[0];
            const userbutton = document.getElementById("userbutton");
            if (userbutton) {
              userbutton.innerHTML = "New User";
            }

            const location = `${user.location.street.number} 
              ${user.location.street.name}, 
              ${user.location.city}, 
              ${user.location.state} 
              ${user.location.postcode}
              ${user.location.country}`;

            ReactDOM.render(
              <>
                <div id="userinfo">
                  <img src={user.picture.large} alt="" id="userpic" />
                  <tr>
                    <td>
                      <h2>
                        {user.name.first} {user.name.last}
                      </h2>
                    </td>
                    <td>
                      <p id="age">, {user.dob.age}</p>
                    </td>
                  </tr>
                  <p id="email">{user.email}</p>
                  <p id="location">{location}</p>
                </div>
                <p />
                <JSONButton />

                <div
                  id="json"
                  style={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "monospace",
                    textAlign: "left",
                    fontSize: "0.8rem",
                    display: "none",
                  }}
                >
                  {JSON.stringify(user, null, 2)}
                </div>
              </>,
              document.getElementById("user")
            );
          });
        }}
      >
        Get User
      </button>
    );
  }
}

export default UserButton;
