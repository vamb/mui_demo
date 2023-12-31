import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import FirstConstant from "./FirstConstant";
import { Tabs, Tab, Typography, Box } from '@mui/material'
import Demo1 from "./component/Demo1";
import Demo2 from './component/Demo2'
import Demo3 from './component/Demo3'
import Demo4 from './component/Demo4'
import Demo5 from "./component/Demo5";
import Demo6 from './component/Demo6'
import Demo7 from './component/Demo7'
import Demo8 from './component/Demo8'
import Demo9 from './component/Demo9'
import Demo10 from "./component/Demo10";

const TabPanel =(props)=> {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const FirstPage = () => {
  const [ activeKey, setActiveKey ] = useState(1)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(FirstConstant.STORE_KEY, key)
  }

  useEffect(()=>{
    const storeKey = localStorage.getItem(FirstConstant.STORE_KEY)
    if(storeKey) {
      updateActiveKey(storeKey)
    }
    return ()=> {
      localStorage.removeItem(FirstConstant.STORE_KEY)
    }
  },[])

  return (
    <Wrapper>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeKey}
            aria-label="basic tabs example"
            onChange={(event, newValue)=>{
              updateActiveKey(newValue)
            }}
          >
            {
              FirstConstant.TAB_LIST.map((item, idx)=>{
                return (
                  <Tab
                    label={item.label}
                    key={`mui-first-tabs-opt-${idx}`}
                    id={`simple-tab-${idx}`}
                  />
                )
              })
            }
          </Tabs>
        </Box>
        <TabPanel value={activeKey} key={`mui-first-tabPanel-opt-${0}`} index={0}>
          <Demo1 />
        </TabPanel>
        <TabPanel value={activeKey} key={`mui-first-tabPanel-opt-${1}`} index={1}>
          <Demo2 />
          <Demo3 />
          <Demo4 />
          <Demo5 />
          <Demo6 />
        </TabPanel>
        <TabPanel value={activeKey} key={`mui-first-tabPanel-opt-${2}`} index={2}>
          <Demo7 />
          <Demo8 />
          <Demo9 />
          <Demo10 />
        </TabPanel>
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default FirstPage
