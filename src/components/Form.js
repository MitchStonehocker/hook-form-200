// src/components/form.js

import React, { useState } from 'react'

import { useTheme } from '@material-ui/styles'
import {
  Grid,
  Paper,
  Button,
  Typography,
  FormControl,
  Select,
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormHelperText,
  Table,
  TableRow,
  TableCell,
  TextField,
  TableBody,
  TableHead
} from '@material-ui/core'
import { useInput } from '../hooks/useInput'
import { useSubmit } from '../hooks/useSubmit'
import { useStyles } from '../hooks/useStyles'
import { useDate } from '../hooks/useDater'
import { useTime } from '../hooks/useTimer'
import { usePos } from '../hooks/useMouse'
import { useScroll, useSize } from '../hooks/useWindow'

import { validations } from '../utilities/validations.js'

export default function Form () {
  // use of hooks to bring classes style sheet in (usually done with HOC) and access the theme
  const classes = useStyles()
  const theme = useTheme()
  // custom hooks using both useState and useEffect
  const time = useTime()
  const date = useDate()
  const pos = usePos()
  const scroll = useScroll()
  const size = useSize()

  const usaStates = ['CA', 'NJ', 'NY', 'WI']
  const selectUSStateLabelWidth = 75

  function handleValidation (value, regex) {
    if (value && regex && value.match(regex)) return true
    return false
  }

  const email = useInput('Email', '', handleValidation, validations.EMAIL)
  const quantity = useInput(
    'Quantity',
    '',
    handleValidation,
    validations.INTEGER
  )
  const price = useInput('Price', '', handleValidation, validations.REAL)
  const stateArbv = useInput(
    'USA State',
    '',
    handleValidation,
    validations.USA_STATE_ABRV
  )

  // the data we're going to submit, just using a hook to display
  const [data, setData] = useState(null)
  function handleSuccess (data) {
    console.log('>>>-Form-handleSuccess-data->', data)
    // we're just setting the state here, but typically this could
    // be disptched to global state and/or sent to the db server and/or
    // construct the url for api useFetch
    setData(data)
  }

  // pass in array of hooks to validate onSubmit (that's where the data is)
  const submit = useSubmit([email, quantity, price, stateArbv], handleSuccess)

  return (
    <Grid
      container
      alignContent='stretch'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Paper className={classes.paper}>
        <Typography variant='h4'>NearForm Hooks Demo</Typography>
        <Typography color='primary'>
          Theme Hook (primary color): {theme.palette.primary.main}
        </Typography>
        <Typography>Date Hook: {date}</Typography>
        <Typography>Time Hook: {time}</Typography>
        <Typography>
          Mouse Position Hook: {pos.x}, {pos.y}
        </Typography>
        <Typography>
          Window Size Hook: {size.width}, {size.height}
        </Typography>
        <Typography>
          Window Scroll Hook: {scroll.top}, {scroll.left}
        </Typography>
        <Typography variant='h5'>Input and Form Submit Hooks</Typography>
        <form className={classes.form} {...submit.props}>
          <div className={classes.input}>
            <TextField label='Email' variant='outlined' {...email.props} />
            {email.props.error && (
              <Typography variant='body1' color='error'>
                Invalid Email address
              </Typography>
            )}
          </div>
          <div className={classes.input}>
            <TextField
              label='Quantity'
              variant='outlined'
              {...quantity.props}
            />
            {quantity.props.error && (
              <Typography variant='body1' color='error'>
                Invalid quantity
              </Typography>
            )}
          </div>
          <div className={classes.input}>
            <TextField label='Price' variant='outlined' {...price.props} />
            {price.props.error && (
              <Typography variant='body1' color='error'>
                Invalid price
              </Typography>
            )}
          </div>

          <div className={classes.select}>
            <FormControl
              variant='outlined'
              required
              className={classes.formControl}
            >
              <InputLabel htmlFor='outlined-usState-simple'>
                US State
              </InputLabel>
              <Select
                {...stateArbv.props}
                input={
                  <OutlinedInput
                    labelWidth={selectUSStateLabelWidth}
                    name='usState'
                    id='outlined-usState-simple'
                  />
                }
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {usaStates.map(usaState => (
                  <MenuItem key={usaState} value={usaState}>
                    {usaState}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>* Required</FormHelperText>
            </FormControl>
          </div>

          <Button type='submit' color='primary' variant='contained'>
            Submit
          </Button>
          {submit.errorItems && submit.errorItems.length > 0 && (
            <Typography variant='body1' color='error'>
              {`Please fix ${submit.errorItems && submit.errorItems.length} form
            field error(s)`}
            </Typography>
          )}
        </form>
        {data && (
          <div>
            <hr />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Input Field</TableCell>
                  <TableCell>Validated Input</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={`form-${index}`}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Paper>
    </Grid>
  )
}
