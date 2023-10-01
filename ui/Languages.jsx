import React from 'react'
import '@/styles/languageSection.css';
const Languages = ({title}) => {
  return (
    <div className='language_wrapper'>
        <h4 className='language_select'>{title}</h4>
    </div>
  )
}

export default Languages