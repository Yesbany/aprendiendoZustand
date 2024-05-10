import './App.css'
import {useStore} from './globalState/StateGlobal'

function App() {
  const count= useStore(state => state.count)
  const increment= useStore(state => state.increment)
  const decrement= useStore(state => state.decrement)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </>
  )
}

export default App
