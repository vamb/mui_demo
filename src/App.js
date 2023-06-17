import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import styled from 'styled-components'
import First from "./pages/First";

function App() {
  const [ pageSize, setPageSize ] = useState({ width: document.body.scrollWidth, height: document.body.scrollHeight })
  const [ activeKey, setActiveKey ] = useState('/firstPage')

  const handleResize=()=>{
    const isClient = typeof window === 'object'
    if(!isClient){
      return
    }
    setPageSize({width: document.body.scrollWidth, height: document.body.scrollHeight})
  }

  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize)
    setActiveKey(window.location.pathname)
    return ()=> {
      window.removeEventListener('resize', handleResize)
      localStorage.clear()
    }
  },[])

  const checkActive = (availableKey, currentKey) =>{
    return availableKey === currentKey? 'router-unit-active': 'router-unit'
  }

  return (
    <MainWrapper className="App">
      <Router>
        <div className={'router-common'}>
          <div className={checkActive(activeKey, '/firstPage')}>
            <Link
              to={'/first'} title={'First'}
              onClick={()=>setActiveKey('/first')}
            >First</Link>
            <div className={'bottom-mark'} />
          </div>
        </div>
        <div className={'page-content'} style={{width: `${pageSize.width}px`, padding: '20px'}}>
          <div className={'content-shield'} style={{width: `${pageSize.width}px`, padding: '20px'}}>
            <Route path="/first" exact component={First} />
          </div>
        </div>
      </Router>
    </MainWrapper>
  );
}

const MainWrapper = styled('div')`
  width: 100%;
  .router-common {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    width: 95%;
    border-bottom: 1px solid #0000000f;
    a {
      text-decoration: none;
    }
    .router-unit-active  {
      margin-right: 15px;
      position: relative;
      a:visited {
        color: #1890ff;
      }
      a:link {
        color: #1890ff;
      }
      .bottom-mark {
        position: absolute;
        width: 100%;
        height: 2px;
        background: #1890ff;
        bottom: -10px;
      }
    }
    .router-unit  {
      margin-right: 15px;
      a:visited {
        color: #000;
      }
      a:link {
        color: #000;
      }
      .bottom-mark {
        display: none;
      }
    }
  }
  .page-content {
    box-sizing: border-box;
    background: #0000000f;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-shield {
    background: #fff;
    border-radius: 10px;
    border: 1px solid #000;
  }
`

export default App;
