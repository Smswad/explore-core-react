import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './todo'
import Counter from './counter'
import Batsman from './scoreboad'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div> */}

      {/* <Counter></Counter> */}
      <Batsman></Batsman>

      {/* <Person></Person>
      <Person></Person>
      <Person></Person> */}

      {/* <Device name="Redmi" company="Xiaomi"></Device>
      <Device name="Monitor" company="Hp"></Device>
      <Device name="GPU" company="Nvidia"></Device> */}
      {/* <div style={{ display: 'flex', gap: '5rem' }}>
        <Todo work="HW" time="2:30AM" Count="1" isDone={true}></Todo>
        <Todo work="Assignment" time="12:00AM" Count="2" isDone={false}></Todo>
        <Todo work="Quiz" time="1:30PM" Count="3"></Todo>
        <Todo work={null} time={null} Count="4"></Todo>
      </div> */}
    </>
  )
}

// function Person() {
//   const a = 18;
//   return (
//     <div>
//       <ul>
//         <li>kola</li>
//         <li>komola</li>
//       </ul>
//       <p>I am a person {a}</p>
//     </div>

//   );
// }

// function Device({ name, company }) { // Using destructuring
//   return (
//     <div style={{
//       border: '2px solid green',
//       borderRadius: '20px',
//       padding: '10px',
//       marginTop: '5px'
//     }}>
//       <h1>Device Name: {name}</h1>
//       <h3>Company Name: {company}</h3>
//     </div>
//   )
// }

export default App
