import React, { FunctionComponent } from 'react'
import AppProviders from './context'
import Header from './header'
import Main from './main'
import CssBaseline from '@material-ui/core/CssBaseline'
import GoTop from './goTop'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

export class AppProps { }

const App: FunctionComponent<AppProps> = () => {
  return <>
    <CssBaseline />
    <AppProviders>
      <Header />
      <Main />
      <GoTop/>
    </AppProviders>
  </>
}

export default App