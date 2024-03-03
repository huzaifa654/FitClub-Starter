import React from 'react'
import './StratButton.css'
export default function StratButton({ type, text, bgColor }) {
    return (
        <div className={type ? 'Button' : 'unfill'}>
            <span className='strat-button'>{text}</span>
        </div>
    )
}
