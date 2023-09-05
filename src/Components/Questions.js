import React from 'react'
import './Questions.css'

const Questions = ({question , onClickVariant}) => {
  return (
    <div>
        <div className="progress">
            <div style={{ width: '20%' }} className="progress__inner"></div>
        </div>    
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
    </div>
  )
}

export default Questions