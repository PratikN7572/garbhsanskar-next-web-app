"use client"
import React from 'react'
import MarkAsDone from './MarkAsDone'

const DearMomMarkAsDone = () => {
    const apiCall = () => {
        console.log('api called')
    }
  return (
    <MarkAsDone onClick={() => apiCall()} markIcon='fill-primary-pink' />
  )
}

export default DearMomMarkAsDone