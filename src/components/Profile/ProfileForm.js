import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const dataDrunk = fetch(
      "https://drunkenslug.com?t=tvsearch&q=law and order&season=7&ep=12?key=c837787a25106484a4a9021eeb9a6ac8"
    );
    console.log(dataDrunk);
    const enteredPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC3l5x6Gb1vKsI0eZNjLIH-9nwM0KTlz2E",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //asuume it alwaus succed
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={newPasswordInputRef}
          minLength="7"
          type="password"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
