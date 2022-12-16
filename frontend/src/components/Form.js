import { useState } from 'react';
import Axios from 'axios';

const Form = function () {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const sendData = () => {
    const data = {
      username: userName,
      email: email,
    };

    Axios.post('/createUser', data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
  };

  const handleSubmit = event => {
    // used to prevent default action when an event occurs
    // default action for submit event: data filled inside input elements will be sent to the url mentioned
    // in action attribute
    event.preventDefault();
    sendData();

    // resetting the value of input fields
    setUsername('');
    setEmail('');
  };

  return (
    <div className="mt-6">
      <h1 className="text-4xl font-semibold text-center">Create User</h1>

      <form
        className="my-12 flex flex-col items-center gap-10"
        action=""
        method="get"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-start gap-2">
            <label className="text-lg" htmlFor="username">
              Username
            </label>

            <input
              className="bg-[#FAF9FA] border border-gray-300 rounded px-3 py-2.5 w-72 focus:outline-[#656EF5]"
              type="text"
              name="username"
              id="username"
              value={userName}
              onChange={event => setUsername(event.target.value)}
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-lg" htmlFor="email">
              Email
            </label>

            <input
              className="bg-[#FAF9FA] border border-gray-300 rounded px-3 py-2.5 w-72 focus:outline-[#656EF5]"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-[#656EF5] text-lg text-white px-8 py-2 rounded cursor-pointer transition hover:opacity-90"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
