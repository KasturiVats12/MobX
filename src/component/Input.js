import React from 'react'
import { useStore } from './Counter'

function Input() {
  const {counterIncrement, counter} = useStore()
  return (
    <div>Counter:{counter}</div>
  )
}

export default Input