import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Logo } from "./Logo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-row flex-nowrap justify-evenly">
        <span className="transition-[filter] duration-300 hover:drop-shadow-[0_0_2rem_#646cffaa]">
          <Logo href="https://vite.dev" src={viteLogo} alt="Vite logo" />
        </span>
        <span className="transition-[filter] duration-300 hover:drop-shadow-[0_0_2rem_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]">
          <Logo href="https://react.dev" src={reactLogo} alt="React logo" />
        </span>
      </div >
      <h1 className="my-8 font-bold">Vite + React</h1>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-neutral-300">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
