import './App.css';
import binary from './test'
// import Questions from './Components/Questions';
// import Result from './Components/Result';
import { useState } from 'react';
import Students from './Components/Students';

function App() {
  
  // const [step, setStep ] = useState(0);
  // const [correct, setCorrect] = useState(0);
  // const question = binary[step];

  // const onClickVariant = (index)=> {
  //   (index===question.correct)&& setCorrect(prevState => prevState+1);
  //   setStep(prevState => prevState+1)

  // }

  return (
    <div className="App">
      {/* Test */}
      {/* <header><h1>Двійкове кодування</h1></header>  
      {
        step !== binary.length ? <Questions step = {step} question = {question} onClickVariant = {onClickVariant}/> :<Result correct = {correct}/>  
      } */}
      {/* SudentsList */}
      <Students />
         
    </div>
  );
}

export default App;
