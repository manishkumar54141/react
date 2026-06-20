import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
          const [length,setLength]=useState(8);
          const [numberAllowed,setNumberAllowed]=useState(false);
          const [charAllowed,setCharAllowed]=useState(false);
          const [password,setPassword]=useState("");
          const refR=useRef(null);

          const passGenerator=useCallback(
                      ()=>{
                           let pass="";
                           let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                           if(numberAllowed) str+="0123456789";
                           if(charAllowed) str+="!@#$%^&*()_+-=[]{}|;:',.<>?/";

                           for(let i=1;i<=length;i++){
                               let char=Math.floor(Math.random()*str.length);
                               pass+=str[char];
                           }
                           setPassword(pass);
                      }
              ,[length,numberAllowed,charAllowed]);
          
          const  passWordCopy=useCallback(()=>{
                 refR.current?.select();
                 refR.current?.setSelectionRange(0,999);
                 window.navigator.clipboard.writeText(password);
          },[password]);

            useEffect(()=>{
                         passGenerator();
            },[length,numberAllowed,charAllowed,passGenerator]);
          return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
              <div className="w-full max-w-xl bg-slate-800 rounded-2xl shadow-2xl p-6">
                <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">
                  Password Generator
                </h1>

                <div className="flex gap-3 mb-6">
                  <input
                    
                    type="text"
                    value={password}
                    readOnly
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-700 text-white outline-none border border-slate-600"
                    ref={refR}
                  />

                  <button className="px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition" onClick={passWordCopy}>
                    Copy
                  </button>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-2">
                      <span>Password Length</span>
                      <span className="text-orange-400 font-semibold">
                        {length}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      className="w-full accent-orange-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex flex-wrap gap-6 pt-2">
                    <label className="flex items-center gap-2 text-slate-200 cursor-pointer">
                      <input
                        id="numberAllowed"
                        type="checkbox"
                        checked={numberAllowed}
                        onChange={() => setNumberAllowed((prev) => !prev)}
                        className="w-4 h-4 accent-orange-500"
                      />
                      Include Numbers
                    </label>

                    <label className="flex items-center gap-2 text-slate-200 cursor-pointer">
                      <input
                        id="charAllowed"
                        type="checkbox"
                        checked={charAllowed}
                        onChange={() => setCharAllowed((prev) => !prev)}
                        className="w-4 h-4 accent-orange-500"
                      />
                      Include Symbols
                    </label>
                  </div>
                </div>
              </div>
            </div>
);
}

export default App
