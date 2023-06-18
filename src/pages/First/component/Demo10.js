import React from "react";
import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { Checkbox , FormControlLabel, FormLabel,
  FormControl, FormGroup } from '@mui/material'

export default function Demo10() {
  return (
    <UnitContent title={'Demo10'}>
      <Wrapper>
        <FormControl component="fieldset">
          <FormLabel component="legend">Label placement</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Checkbox />}
              label="Top"
              labelPlacement="top"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              label="Start"
              labelPlacement="start"
            />
            <FormControlLabel
              value="bottom"
              control={<Checkbox />}
              label="Bottom"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="End"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </Wrapper>
    </UnitContent>
  );
}

const Wrapper = styled('div')`

`
