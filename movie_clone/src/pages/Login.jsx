import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="bg-[black]/[0.87] min-h-screen flex justify-center items-center ">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(email);
          console.log(pass);
        }}
        className="flex flex-col p-10 gap-10 text-xl rounded-lg text-white shadow-lg shadow-black"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            required
            type="email"
            className=" px-3 py-1 outline-none font-semibold rounded-md text-black"
            placeholder="abc@xyz.com"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            required
            type="password"
            className=" px-3 py-1 outline-none font-semibold rounded-md text-black"
            placeholder="Abc@123"
            name="password"
            onChange={(event) => {
              setPass(event.target.value);
            }}
          />
        </div>

        <button className="font-bold py-2 rounded-md bg-[black]/[0.4] hover:shadow-lg hover:shadow-black ">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
