import React from 'react'

function Answer(props){
  return (
    <div className="answers">
          <button onClick= {props.onClick} className="ans">{props.answer}</button>
    </div>
  )
}

export default Answer;