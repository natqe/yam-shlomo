import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import StylesProvider from '@material-ui/styles/StylesProvider'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import jssPreset from '@material-ui/styles/jssPreset'
import { create } from 'jss'
import rtl from 'jss-rtl'
import React, { FunctionComponent } from 'react'

const
  jss = create({ plugins: [...jssPreset().plugins, rtl()] }),
  theme = createMuiTheme({
    direction: 'rtl',
    palette: {
      primary: {
        light: `#4a6370`,
        dark: `#00131e`,
        main: `#203945`,
        // contrastText: `#ffc746`
      },
      secondary: {
        light: `#ffc746`,
        dark: `#a26900`,
        main: `#D99703`,
        contrastText: `#00131e`
      },
      common: { black: `#212121` }
    },
    zIndex: {
      mobileStepper: 1,
      // speedDial: 1050,
      appBar: 1051,
      drawer: 1052,
      modal: 1053,
      snackbar: 1054,
      tooltip: 1055
    }
  })

const AppProviders: FunctionComponent = ({ children }) => {
  return <StylesProvider jss={jss}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </StylesProvider>
}

export default AppProviders