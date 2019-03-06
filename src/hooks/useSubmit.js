// src/hooks/useSubmit.js

import { useState } from 'react'

// custom hook for form submit
export function useSubmit (inputs, success) {
  // set up the state for the error component
  const [errorItems, setErrorItems] = useState(null)

  // handle submit
  function handleSubmit (e) {
    e.preventDefault() // prevent page refresh

    // blur everything to validate again
    const errorItems = inputs.filter(input => !input.validate())
    setErrorItems(errorItems)
    if (errorItems && errorItems.length === 0) {
      success &&
        success(
          inputs.map(({ props: { name, value } }) => ({
            name,
            value
          }))
        )
    }
  }

  return {
    props: {
      onSubmit: handleSubmit
    },
    errorItems
  }
}
