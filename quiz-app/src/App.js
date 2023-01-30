import './App.css';
import questions from './questions';
import Answer from './components/Answer';
import Question from './components/Question'
import { useState } from 'react';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [over, setOver] = useState(false)
  const [score, setScore] = useState(0)



  function handleClick(isCorrect) {

    if (isCorrect) {
      setScore(score + 1)
    }

    let nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setOver(true)
    }

  }

  const { questionText, answerOptions } = questions[currentQuestion];


  return (
    <div className="App">
      <div className="container">
        {
        over ? (<h1>Your score is {score} out of {questions.length}</h1>) :
          
          (<div>
            <Question questionNo={currentQuestion + 1} question={questionText} />
            {
              answerOptions.map((answerOption, index) => {
                return (<Answer onClick={() => handleClick(answerOption.isCorrect)} key={index} answer={answerOption.answerText} />)
              })
            }
          </div>)

        }
      </div>
    </div>
  );
}

export default App;
