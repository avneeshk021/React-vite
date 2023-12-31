import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char); // yaha password me value append ho rhi hai
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 60);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  //here we use useEffect
  useEffect(() => {
    passwordGenerater();
  }, [length, numberAllowed, charAllowed, passwordGenerater]);
  return (
    <>
      <div className=" align-content: center items-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center">
        <h1 className="text-white text-center my-3">Password Fetcher</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 mb-2"
            placeholder="Pasword"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor=""> Length : {length}</label>
          </div>

          {/* length checkbox */}

          <div className="flex item-center gap-x-1">
            {/*  yaha niche call back fire kiya hai 
          
          */}
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>

          {/* charcter checkbox */}

          <div className="flex item-center gap-x-1">
            {/*  yaha niche call back fire kiya hai 
          
          */}
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
