import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Avatar from '@mui/material/Avatar';


const Input = styled('input')({
    display: 'none',
  });

function MUI() {
  return (
    <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <hr />
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <hr />
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
        Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
        Link
        </Button>
        <hr />
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
        Success
        </Button>
        <Button variant="outlined" color="error">
        Error
        </Button>
        <hr />
        <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
            Upload
        </Button>
        </label>
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
        </IconButton>
        </label>
        <hr />
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
        <hr />
        <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
        <hr />
      
    </div>
  )
}

export default MUI