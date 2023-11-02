import { Grid } from '@mui/material';

// material-ui
import React from 'react';

// project imports
import { gridSpacing } from 'redux/constant';

export default function maps() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item>Maps Page</Grid>
    </Grid>
  );
}
