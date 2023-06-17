import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { Button } from '@mui/material';
import React from "react";

const Demo2 = () => {
  return (
    <UnitContent title={'Demo1'}>
      <Wrapper>
        <div>
          <Button variant="contained">Hello World</Button>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: warp;
  gap: 10px;
`

export default Demo2
