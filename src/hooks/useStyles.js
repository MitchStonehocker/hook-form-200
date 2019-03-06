// src/hooks/useStyles.js

import { makeStyles } from '@material-ui/styles'

// create a hook for classes objects
export const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '1px',
      width: '210px',
      //   minWidth: '200px',
      //   maxWidth: '450px',
      height: '110vh'
    },
    paper: {
      padding: theme.spacing.unit * 1
    },
    form: {
      marginTop: theme.spacing.unit * 1
    },
    input: {
      marginTop: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 1
    },
    select: {
      marginTop: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 1
    },
    formControl: {
      margin: '1px',
      width: '210px',
      marginTop: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 1
    }
  }),
  { withTheme: true }
)
