import React from "react";
import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { IconButton, Stack } from "@mui/material";
import { Delete, Alarm, AddShoppingCart, Fingerprint } from '@mui/icons-material'

const DeleteIcon = Delete
const AlarmIcon = Alarm
const AddShoppingCartIcon = AddShoppingCart

const Demo3 = () => {
  return (
    <UnitContent title={'Demo3'}>
      <Wrapper>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint />
          </IconButton>
          <IconButton aria-label="fingerprint" color="success">
            <Fingerprint />
          </IconButton>
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

export default Demo3
