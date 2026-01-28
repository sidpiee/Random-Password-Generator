import React from "react";
export default function App() {
  const [length, setLength] = React.useState(8);
  const [numAllowed, setNumAllowed] = React.useState(false);
  const [charAllowed, setCharAllowed] = React.useState(false);
  const [pass, setPass] = React.useState("");

  React.useEffect(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";
    let newpass = "";
    for (let i = 1; i <= length; i++) {
      newpass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPass(newpass);
  }, [length, numAllowed, charAllowed]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-linear-to-br from-blue-950/80 to-violet-950">
      <div className="flex flex-col items-center justify-start w-auto h-40 p-10 border card bg-indigo-950 border-white/50 min-h-64 rounded-2xl">
        <h1 className="text-2xl font-bold text-white">
          Random Password generator
        </h1>
        <div className="flex m-5 overflow-hidden shadow rounded-2xl">
          <input
            type="text"
            className="w-full px-3 py-1 bg-white "
            value={pass}
          />
          <button className="bg-blue-300 text-black px-3 py-0.5 shrink-0 cursor-pointer">
            copy
          </button>
        </div>
        <div className="flex justify-start w-full gap-3 text-white">
          <input
            type="range"
            min={8}
            max={20}
            name=""
            id="length"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            readOnly
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className="flex justify-start w-full gap-3 text-white">
          <input type="checkbox" />
          <label htmlFor="Numbers">Numbers</label>
        </div>
        <div className="flex justify-start w-full gap-3 text-white">
          <input type="checkbox" />
          <label htmlFor="Numbers">Special characters</label>
        </div>
      </div>
    </div>
  );
}
