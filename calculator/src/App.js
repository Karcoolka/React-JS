import CalculatorForm from "./calculator/CalculatorForm";
import './App.css';

const title = "React kalkulačka";

 const App = () => {

  return (
    <div className="App">
      <h1>{title}</h1>
      <CalculatorForm />
    </div>
  );
}
export default App;
