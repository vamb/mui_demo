import React from 'react'
import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { Box, Fab, Stack } from '@mui/material'
import { Add, Edit, Favorite, Navigation } from '@mui/icons-material'

const Demo5 = () => {

  return (
    <UnitContent title={'Demo5'} >
      <Wrapper>
        <Stack direction="row" spacing={1}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
              <Add />
            </Fab>
            <Fab color="secondary" aria-label="edit">
              <Edit />
            </Fab>
            <Fab variant="extended">
              <Favorite sx={{ mr: 1 }} />
              Navigate
            </Fab>
            <Fab disabled aria-label="like">
              <Navigation />
            </Fab>
          </Box>
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

export default Demo5
