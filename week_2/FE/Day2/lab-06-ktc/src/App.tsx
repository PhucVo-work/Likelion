import "./App.css";
import CountDownTimer from "./Components/CountDownTimer";
import SimpleCaculator from "./Components/SimpleCaculator";
import SimpleRandom from "./Components/SimpleRandom";
import SimpleToDoList from "./Components/SimpleToDoList";
import TemperatureConvert from "./Components/TemperatureConvert";

function App() {
  return (
    <div className="flex flex-col items-center justify-center p-3">
      <SimpleCaculator />
      <CountDownTimer/>
      <SimpleRandom/>
      <TemperatureConvert/>
      <SimpleToDoList/>
    </div>
  );
}

export default App;
