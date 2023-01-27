import InputField from "./InputField";
import { useState } from "react";

type Props = {
  modalSwitchHandler: () => void;
};

const Login = ({ modalSwitchHandler }: Props) => {
  const [auth, setAuth] = useState(true);

  const handleSignUp = () => {
    setAuth(!auth);
  };

  return (
    <div className="flex flex-col justify-center">
      <button
        className="absolute top-1 right-2 rounded-full px-2 font-semibold text-slate-700 hover:text-red-500 justify-center"
        onClick={modalSwitchHandler}
      >
        x
      </button>
      <InputField id="username" label="Username" type="text" />
      <InputField id="password" label="Password" type="password" />
      <button className="mt-7 px-3 py-2 rounded-full bg-gray-300 uppercase font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 text-sm hover:from-cyan-500 hover:to-blue-500">
        {auth ? "Login" : "Sign Up"}
      </button>
      <div className="flex flex-col justify-center">
        <p className="flex justify-center mt-7 text-sm">
          or {auth ? "sign up" : "log in"} using
        </p>
        <button
          className="flex justify-center mt-2 font-semibold uppercase hover:text-slate-600"
          onClick={handleSignUp}
        >
          {auth ? "Sign up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
