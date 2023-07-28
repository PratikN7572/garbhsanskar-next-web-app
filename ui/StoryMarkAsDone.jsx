"use client";
import React from 'react'
import MarkAsDone from './MarkAsDone';

const StoryMarkAsDone = () => {
    async function apiCall() {
        console.log('abc')
    
      }
  return (
    <MarkAsDone onClick={() => apiCall()} markIcon='fill-primary-pink' />
  )
}

export default StoryMarkAsDone