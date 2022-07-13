import React from "react";

function Account() {
  return (
    <div className="account">
      <div className="account__container">
        <div className="account__title">
          <h1>Your Account</h1>
        </div>
        <div className="account__section">
          <div className="account_username"></div>
          <div className="account__email"></div>
          <div className="account__address"></div>
          <div className="account__password"></div>
        </div>
        <div className="account__section"></div>
        <div className="account__section"></div>
      </div>
    </div>
  );
}

export default Account;
