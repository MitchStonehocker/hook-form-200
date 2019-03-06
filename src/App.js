import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Form from './components/Form'

import './App.css'

// create our material ui theme using up to date typography variables
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>header</header>
        <Form />
        <footer className='App-footer'>footer</footer>
      </div>
    </ThemeProvider>
  )
}
