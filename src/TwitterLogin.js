import React from "react";
import ReactTwitterLogin from "react-twitter-login";
export default function TwitterLogin() {
  const authHandler = (error, data) => {
    if (error) return console.error(error);
    console.log(data);
  };
  return (
    <ReactTwitterLogin
      authCallback={authHandler}
      consumerKey="<Consumer Key>" // We created this, remember?
      consumerSecret="<Consumer Secret>" // We created this, remember?
      callbackUrl="<Callback URL>" // You set this up in the twitter app settings, remember?
    />
  );
}