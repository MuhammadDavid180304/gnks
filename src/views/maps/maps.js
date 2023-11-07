import { Grid } from '@mui/material';

// material-ui
import React from 'react';

// project imports
import { gridSpacing } from 'redux/constant';
import MapsComponent from './mapsComponents';

export default function maps() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item>
        <MapsComponent />
      </Grid>
    </Grid>
  );
}
