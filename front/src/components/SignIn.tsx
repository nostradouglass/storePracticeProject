import { ColorTypes } from "../Types";
import { Button } from "./ui/Button";
import {
  registerSignInVar,
  isSignedIn,
  signInModalOpenVar
} from "../graphql/state";
import { RegisterSignInType } from "../Types";
import { LOGIN_USER } from "../graphql/userQueries";
import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberChecked, setRememberedChecked] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

  const [loginUser, { loading, error, data }] = useLazyQuery(LOGIN_USER);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({ variables: { email: email, password: password } }).then(
      (data) => {
        if (data.error) {
          console.log(data.error);
          setIsLoginError(true);
          return;
        }
        localStorage.setItem("user", JSON.stringify(data.data.login))
        isSignedIn(true);
        signInModalOpenVar(false);
        setIsLoginError(false);
      }
    );
  };

  return (
    <form onSubmit={submitForm}>
      <div className="flex flex-col w-full">
        <h3
          className={
            isLoginError
              ? "border-2 border-red-500 my-2 px-4 py-2 rounded-xl text-red-500"
              : "hidden"
          }
        >
          Error Signing in
        </h3>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-500 text-left py-2">
            Email address
          </label>
          <input
            className="border border-1 border-gray-300 p-2"
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col py-4">
          <label htmlFor="password" className="text-gray-500 text-left py-2">
            Password
          </label>
          <input
            className="border border-1 border-gray-300 p-2"
            type="password"
            id="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              className="mx-1"
              type="checkbox"
              checked={rememberChecked}
              onChange={() => setRememberedChecked(!rememberChecked)}
            />
            <h4 className="ml-2">Remember Me</h4>
          </div>
          <div>Lost your password?</div>
        </div>

        <Button text="Sign In" colorType={ColorTypes.DARK}>
          <input type="submit" value="Submit" />
        </Button>
        <div className="flex justify-between w-full items-center">
          <hr className="flex-grow border-t border-gray-400 mx-4" />
          <h5 className="text-gray-500">or</h5>
          <hr className="flex-grow border-t border-gray-400 mx-4" />
        </div>
        <Button
          onClick={() => registerSignInVar(RegisterSignInType.REGISTER)}
          text="Create an Account"
          colorType={ColorTypes.LIGHT}
        />
      </div>
    </form>
  );
};
