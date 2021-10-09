import React from "react";
import ReactGoogleLogin from "react-google-login";
export default function GoogleLogin(props) {
  const onResponse = resp => {
    console.log(resp);
  };
  return (
    <ReactGoogleLogin
      clientId="697695797906-ukaq2dopmir83pbin3avb1csjs8setit.apps.googleusercontent.com" // We created this earlier, remember?
      buttonText="Login with Google"
      onSuccess={onResponse}
      onFailure={onResponse}
    />
  );
}