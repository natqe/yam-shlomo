import React, { FunctionComponent, useState, useEffect } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import makeStyles from '@material-ui/styles/makeStyles'
import useTheme from '@material-ui/core/styles/useTheme'
import Bar from '../bar'
import Contact from './contact'

export class NavProps { }

const Nav: FunctionComponent<NavProps> = () => {
  const [value, setValue] = useState(0),
    theme = useTheme(),
    { selectedTab, tabs } = makeStyles({
      selectedTab: { color: theme.palette.secondary.light },
      tabs: {
        '& .MuiTabs-indicator': {
          height: `.625rem`,
          borderRadius: `.3125rem`
        }
      }
    })({})
  return <>
    <Bar backgroundColor="transparent" logoHidden className="margin-top-0.6" shadow={false}>
      <Tabs value={value} className={`margin-horizontal-2 ${tabs}`}>
        <Tab
          className={`fs-1.8 ${value === 0 ? selectedTab : ``}`}
          component="a"
          label="אודות"
          onClick={() => setValue(0)}
          disableRipple
        />
        <Tab
          className={`fs-1.8 ${value === 1 ? selectedTab : ``}`}
          component="a"
          label="יצירת קשר"
          onClick={() => setValue(1)}
          disableRipple
        />
      </Tabs>
    </Bar>
    <Contact open={value === 1} close={() => setValue(0)} />
  </>
}

export default Nav