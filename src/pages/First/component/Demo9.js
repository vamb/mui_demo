import React from "react";
import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { Box, Checkbox , FormControlLabel, FormLabel,
  FormControl, FormGroup, FormHelperText } from '@mui/material'

export default function Demo9() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <UnitContent title={'Demo9'}>
      <Wrapper>
        <Box sx={{ display: 'flex' }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={jason} onChange={handleChange} name="jason" />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
          </FormControl>
          <FormControl
            required
            error={error}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormLabel component="legend">Pick two</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={jason} onChange={handleChange} name="jason" />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>You can display an error</FormHelperText>
          </FormControl>
        </Box>
      </Wrapper>
    </UnitContent>
  );
}

const Wrapper = styled('div')`

`
