import React from "react";
import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { Button, Stack, Box } from '@mui/material';
import { Delete, Send } from '@mui/icons-material'

const Demo2 = () => {
  return (
    <UnitContent title={'Demo1'}>
      <Wrapper>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <div>
            <Button size="small">Small</Button>
          </div>
          <div>
            <Button size="medium">Medium</Button>
          </div>
          <div>
            <Button size="large">Large</Button>
          </div>
        </Stack>
        <Stack direction="row" spacing={2}>
          <div>
            <Button variant="outlined" size="small">Small</Button>
          </div>
          <div>
            <Button variant="outlined" size="medium">Medium</Button>
          </div>
          <div>
            <Button variant="outlined" size="large">Large</Button>
          </div>
        </Stack>
        <Stack direction="row" spacing={2}>
          <div>
            <Button variant="contained" size="small">Small</Button>
          </div>
          <div>
            <Button variant="contained" size="medium">Medium</Button>
          </div>
          <div>
            <Button variant="contained" size="large">Large</Button>
          </div>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Delete />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<Send />}>
            Send
          </Button>
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

export default Demo2
