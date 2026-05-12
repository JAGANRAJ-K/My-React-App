import React from 'react'

const Form1 = () => {
    //! handleInputChange function
  let handleInputChange = () => {};

  //! handleSubmit function
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully✅");
  };

  return (
    <div className="w-full min-h-screen bg-slate-800 text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-5xl font-bold p-4 text-center">
        Form Handling in React
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-8 w-full max-w-md rounded-xl mt-10 shadow-2xl"
      >
        <div className="w-full flex flex-col p-2 gap-2 mb-2">
          <label htmlFor="" className="text-xl font-semibold text-gray-700">
            Username
          </label>
          <input
            type="email"
            className="outline-none border border-gray-800 px-3 py-2 rounded-lg w-full"
          />
        </div>

        <div className="w-full flex flex-col p-2 gap-2 mb-4">
          <label htmlFor="" className="text-xl font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="outline-none border border-gray-800 px-3 py-2 rounded-lg w-full"
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <button className="bg-blue-600 text-white font-semibold w-full py-2 rounded-lg text-lg cursor-pointer hover:bg-blue-700 duration-200">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form1