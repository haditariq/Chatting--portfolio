import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { register } from "../redux/auth/actions";
import { Redirect } from "react-router-dom";
import bg from "../assets/images/Rectangle 6.png";
import nextIcon from "../assets/icons/next.png";
import '../assets/css/register.css';


function Register({ reduxRegister, isAuthenticated, loading, username, _id }) {
  const [user, setUsername] = useState("");
  const onSubmit = () => {
    reduxRegister({ username: user });
    setUsername("");
  };

  if (isAuthenticated) {
    return <Redirect to={"inbox"} />;
  }

  return (
    <div
      className={"register"}
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <h3 className={"register__label"}>Let's Register!!</h3>
      <form onSubmit={(e)=>e.preventDefault()} className={"register__form"}>
        <input
          type="text"
          className={"register__input"}
          name={"username"}
          onChange={e => setUsername(e.target.value)}
          value={user}
          placeholder={"Enter username to get registered"}
        />
        <button className={"register__registerBtn"} onClick={onSubmit}>
          <img src={nextIcon} alt="" className={"register__nextIcon"}/>
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.register.isAuthenticated,
  loading: state.register.loading,
  username: state.register.username,
  _id: state.register._id
});

export default connect(mapStateToProps, { reduxRegister: register })(Register);
