// src/hooks/useInput.js

import { useState } from 'react'

export function useInput (name, defaultValue, validate, regex) {
  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState(null)

  function handleChange (e) {
    setValue(e.target.value)
    setError(null) // hide error on input
  }

  function handleBlur () {
    handleValidate()
  }

  function handleValidate () {
    const valid = validate && validate(value, regex)
    setError(!valid)
    return valid
  }

  return {
    props: {
      name,
      value,
      onChange: handleChange,
      onBlur: handleBlur,
      error
    },
    validate: handleValidate
  }
}
