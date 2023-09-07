import React from 'react'
import './Questions.css'
import binary from '../test'

const Questions = ({step, question , onClickVariant}) => {
  const percent = Math.round(step/binary.length*100);
  return (
    <div>
        
        <div className='questions'>
            <h3>{question.title}</h3>
            <ul>
            {
              question.variants.map(
                (text, index) => <li key = {text} onClick={() => onClickVariant(index)}>{text}</li>
              )
            }
            </ul>        
        </div>
        <div className="progress">
            <div style={{ width: `${percent}%` }} className="progress__inner"></div>
        </div>    
    </div>
  )
}

export default Questions