import React from 'react'
import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { Button, Autocomplete, TextField } from '@mui/material';
import FirstConstant from "../FirstConstant";

const Demo1 = () =>{

  return (
    <UnitContent title={'Demo1'}>
      <Wrapper>
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={FirstConstant.top100Films}
            sx={{ width: 300 }}
            renderInput={(params) =>(
              <TextField {...params} label="Movie" />
            )}
          />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`

export default Demo1
