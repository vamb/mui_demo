import React from 'react'
import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { Button, ButtonGroup, Stack } from '@mui/material'

const Demo4 =()=> {

  return (
    <UnitContent title={'Demo4 btnGroup'}>
      <Wrapper>
        <Stack direction="row" spacing={1}>
          <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </div>
        </Stack>
        <Stack direction="row" spacing={1}>
          <div>
            <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </div>
        </Stack>
        <Stack direction="row" spacing={1}>
          <div>
            <ButtonGroup color="secondary" variant="text" aria-label="text button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </div>
        </Stack>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  & > :not(:last-child)::after {
    content: '|';
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`

export default Demo4
