// import './App.css'
import data from './data.json'
import HeroCard from './components/HeroCard'
import TimeCard from './components/TimeCard'

function App() {
  return (
    <div className="App py-20">
      <HeroCard />
      {data.map((data, index) => {
        return <TimeCard key={index} title={data.title} />
      })}
    </div>
  )
}

export default App
