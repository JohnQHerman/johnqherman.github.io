import axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";

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
              ${user.location.state}, 
              ${user.location.country}, 
              ${user.location.postcode}`;

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
                      <p id="age">{user.dob.age}</p>
                    </td>
                  </tr>
                  <p id="email">{user.email}</p>
                  <p id="location">{location}</p>
                </div>
                <p />
                <pre id="json">{JSON.stringify(user, undefined, 2)}</pre>
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
