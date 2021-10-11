import React from "react";
import ReactFacebookLogin from "react-facebook-login";
export default function FacebookLogin(props) {
  const onResponse = resp => {
    console.log(resp);
  };
  return (
    <ReactFacebookLogin
      appId="<Your App ID>" // we created this, remember?
      autoLoad={true}
      fields="name,email,picture"
      callback={onResponse}
      onFailure={onResponse}
    />
  );
}