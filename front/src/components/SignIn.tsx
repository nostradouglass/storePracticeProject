import { ColorTypes } from "../Types";
import { Button } from "./ui/Button";

export const SignIn = () => {
  return (
    <form onSubmit={() => null}>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-500 text-left">Username or email address</label>
          <input className="border border-1 border-gray-300 p-2" type="text" id="username" value="temp" onChange={() => null} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-500 text-left">Password</label>
          <input className="border border-1 border-gray-300 p-2" type="text" id="username" value="temp" onChange={() => null} />
        </div>
      
        <div className="flex justify-between mt-4">
            <div className="flex content-center">
            <input type="checkbox" checked /><h4>Remember Me</h4>
            </div>
            <div>Lost your password?</div>
        </div>

    <Button text="Sign In" colorType={ColorTypes.DARK} />
    <Button text="Create an Account" colorType={ColorTypes.LIGHT} />
      </div>
    </form>
  );
};
