import { ColorTypes } from "../Types";
import { Button } from "./ui/Button";
import { registerSignInVar } from "../graphql/state";
import { RegisterSignInType } from "../Types";
import {ADD_USER} from '../graphql/userMutations'
import{ useMutation} from '@apollo/client'

export const Register = () => {



  return (
    <form onSubmit={() => null}>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-500 text-left py-2">
            Email address
          </label>
          <input
            className="border border-1 border-gray-300 p-2"
            type="text"
            id="username"
            value="temp"
            onChange={() => null}
          />
        </div>

        <div className="flex flex-col py-4">
          <label htmlFor="password" className="text-gray-500 text-left py-2">
            Password
          </label>
          <input
          required
            className="border border-1 border-gray-300 p-2"
            type="password"
            id="username"
            value="temp"
            onChange={() => null}
          />
        </div>

        <Button
          onClick={() => console.log("test")}
          text="Register"
          colorType={ColorTypes.DARK}
        />
        <div className="flex justify-between w-full items-center">
          <hr className="flex-grow border-t border-gray-400 mx-4" />
          <h5 className="text-gray-500">or</h5>
          <hr className="flex-grow border-t border-gray-400 mx-4" />
        </div>
        <Button
          onClick={() => registerSignInVar(RegisterSignInType.SIGNIN)}
          text="Sign In"
          colorType={ColorTypes.LIGHT}
        />
      </div>
    </form>
  );
};
