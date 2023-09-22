import React from 'react';
import LoginSvg from '@/public/icons/login_logo.svg';
import '@/styles/languageSection.css';
import Languages from './Languages';

const LanguageSection = () => {
  return (
    <div className='p-4'>
        <LoginSvg className="w-28 h-24"/>
        <h3 className='language_title'>"Empowering Your Pregnancy Journey, Step by Glowing Step"</h3>
            <h4 className='language_desc'>“Choose Your Preferred Language, and Feel Free to Adjust It Anytime to Suit Your Journey."</h4>
            <div className='grid grid-cols-2 gap-1 justify-items-stretch pt-4'>
                <Languages title="ગુજરાતી" /> 
                <Languages title="ગુજરાતી" /> 
                <Languages title="ગુજરાતી" /> 
                <Languages title="ગુજરાતી" /> 
            </div>
    </div>
  )
}

export default LanguageSection