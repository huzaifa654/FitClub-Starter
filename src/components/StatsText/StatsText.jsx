import React from 'react'
import './StatsText.css'

export default function StatsText({ text, subtext }) {
    return (
        <div className='Stats-text'>
            <span>{text}</span>
            <span className='subText'>{subtext}</span>


        </div>
    )
}
