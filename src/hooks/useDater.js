// src/hooks/dater.js

import { useState, useEffect } from 'react'

export function useDate () {
  // set up our time state variable, mutator and initialize
  const [date, setDate] = useState(new Date().toDateString())

  // dater callback handler
  function tick () {
    setDate(new Date().toDateString())
  }

  useEffect(
    // same as componentDidMount and componentDidUpdate
    () => {
      // set up dater to callback to tick, setting to 1000ms to call
      // multiple times between renders
      const dater = setInterval(tick, 1000)
      return () => clearInterval(dater) // same as componentWillUnmount
    },
    [date] // only re-render if time changed (prevent unnecessary re-renders)
  )

  return date
}
