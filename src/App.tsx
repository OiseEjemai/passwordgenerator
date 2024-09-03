import React, { useRef } from 'react';

function App() {
  const passwordInputRef = useRef(null); // Create a ref

  function getRandomMixedText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if (passwordInputRef.current) {
      passwordInputRef.current.value = result; // Set the input value to the generated password
    }

    return result;
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1>Password generator</h1>
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id='passwordInput'
            ref={passwordInputRef} // Attach the ref to the input element
            readOnly
          />
        </div>
        <button className='rounded-full bg-blue-700 text-white p-2 items-center justify-center m-4' onClick={() => getRandomMixedText(15)}>Generate password</button>
      </div>
    </div>
  );
}

export default App;
