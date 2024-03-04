import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import StatsText from '../StatsText/StatsText'
import StratButton from '../StratButton/StratButton'
import HeroImage from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import CustomButton from '../CustomButton/CustomButton'

export default function Hero() {
    return (
        <div className="Hero">
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div className="para">
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                <div className='StatsText'>
                    <StatsText text={"+ 140"} subtext={"expert coaches"} />
                    <StatsText text={"+ 978"} subtext={"members joined"} />
                    <StatsText text={"+ 50"} subtext={"fitness programs"} />
                </div>
                <div className='botton'>
                    <StratButton text={"Get Strated"} type={true} />
                    <StratButton text={"Learn More"} />
                </div>

            </div>
            <div className="right-h">
                <CustomButton text={"Join Now"} />
                <div className='heartConatiner'>
                    <img src={Heart} alt="" className='heart' />
                    <span className='heartRate'>Heart Rate</span>
                    <span className='rate'> 116 bpm</span>
                </div>
                <img src={HeroImage} alt="" className='HeroImage' />
                <img src={hero_image_back} alt="" className='hero_image_back' />
                <div className="Calories">
                    <img src={Calories} alt="" className='Calories-image' />
                    <div className='Calories-text'>
                        <span className='cal1'>Calories Burned</span>
                        <span className='cal2'>220 kcl</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
