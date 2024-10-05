import './App.css'
import Accordian from './Components/Accoordian/Accordian'
import RandomColor from './Components/RandomColor/RandomColor'
import Rating from './Components/Rating/Rating'

function App() {

  return (
    <>
    <Accordian />     
    <RandomColor/>
    <Rating numofstar={5} />
    </>
  )
}

export default App
