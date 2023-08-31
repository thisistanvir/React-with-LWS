import ClockList from "./components/ClockList"

function App() {

  const quantities = [1,2,3]
  return (
    <div>
      <ClockList quantity={quantities} />
    </div>
  )

}

export default App
