import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { register } from "../redux/auth/actions";
import { Redirect } from "react-router-dom";
function Register({ reduxRegister, isAuthenticated, loading, username, _id }) {
  const [user, setUsername] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    reduxRegister({ username: user });
    setUsername("");
  };

  if (isAuthenticated) {
    return <Redirect to={"inbox"} />;
  }

  return (
    <div className={"register"}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className={"register__input"}
          name={"username"}
          onChange={e => setUsername(e.target.value)}
          value={user}
        />
        <input type="submit" />
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
