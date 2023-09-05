import './App.css';
import binary from './test'
import Questions from './Components/Questions';
import Result from './Components/Result';
import { useState } from 'react';

function App() {
  const [step, setStep ] = useState(0);
  const question = binary[step];

  const onClickVariant = (index)=> {
    console.log (step, index);
    setStep(prevState => prevState+1)
  }

  return (
    <div className="App">
      <header><h1>Двійкове кодування</h1></header>  
      <Questions question = {question} onClickVariant = {onClickVariant}/>
      <Result/>     
    </div>
  );
}

export default App;
