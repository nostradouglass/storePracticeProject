import { ColorTypes } from "../Types";
import { Button } from "./ui/Button";
import { registerSignInVar } from "../graphql/state"
import { RegisterSignInType } from "../Types";
import React, { useState } from "react";

export const SignIn = () => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [rememberChecked, setRememberedChecked] = useState(false)

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitForm}>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-500 text-left py-2">Username or email address</label>
          <input 
          className="border border-1 border-gray-300 p-2" 
          type="text" id="username" 
          value={userName} 
          onChange={e => setUserName(e.target.value)} />
        </div>

        <div className="flex flex-col py-4">
          <label htmlFor="password" className="text-gray-500 text-left py-2">Password</label>
          <input 
          className="border border-1 border-gray-300 p-2" 
          type="text" id="username" 
          value={password}
          onChange={e => setPassword(e.target.value)} />
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

    <Button onClick={() => console.log("test")} text="Sign In" colorType={ColorTypes.DARK} />
    <div className="flex justify-between w-full items-center">
      <hr className="flex-grow border-t border-gray-400 mx-4" />
      <h5 className="text-gray-500">or</h5>
      <hr className="flex-grow border-t border-gray-400 mx-4" />
    </div>
    <Button onClick={() => registerSignInVar(RegisterSignInType.REGISTER)} text="Create an Account" colorType={ColorTypes.LIGHT} />
      </div>
    </form>
  );
};
