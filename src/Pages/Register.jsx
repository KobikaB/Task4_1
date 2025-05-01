import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 h-full bg-gray-100 flex justify-center items-center">
        <div className="bg-white w-120 h-110 p-3 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-4">Register</h2>
          <form className="flex flex-col items-center gap-5  ">
            <div className="flex flex-col gap-3 justify-center items-center mt-10" >
            <input
              type="text"
              placeholder="Name"
              className="p-2 w-80 border-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border-2 w-80 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border-2 w-80 rounded"
            />

<input
              type="conform password"
              placeholder="Conform Password"
              className="p-2 border-2 w-80 rounded"
            />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 w-30  rounded hover:bg-blue-400"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:text-blue-950">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Image/image2.jpeg')" }}
      ></div>
    </div>
  );
};

export default Register;
