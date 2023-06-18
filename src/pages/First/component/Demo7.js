import React from "react";
import styled from "@emotion/styled";
import UnitContent from "../../component/UnitContent";
import { Checkbox, FormGroup, FormControlLabel, Stack } from '@mui/material'
import { pink } from '@mui/material/colors';
import { FavoriteBorder, BookmarkBorder, Bookmark, Favorite } from '@mui/icons-material'

const BookmarkBorderIcon = BookmarkBorder
const BookmarkIcon = Bookmark
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Demo7 =()=> {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <UnitContent title={'Demo7'}>
      <Wrapper>
        <Stack direction="row" spacing={1}>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} />
          <Checkbox {...label} disabled />
          <Checkbox {...label} disabled checked />
        </Stack>
        <Stack direction="row" spacing={1}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Checkbox {...label} defaultChecked size="small" />
          <Checkbox {...label} defaultChecked />
          <Checkbox
            {...label}
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} defaultChecked color="secondary" />
          <Checkbox {...label} defaultChecked color="success" />
          <Checkbox {...label} defaultChecked color="default" />
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
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

export default Demo7
