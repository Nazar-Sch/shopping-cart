import React from "react"

import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from "@material-ui/core/Grid"

const Loader: React.FC = () => {
  return (
    <Grid container justify="center">
      <Grid container justify="center" item xs={12} data-testid="loader">
        <CircularProgress />
      </Grid>
    </Grid>
  )
}

export default Loader
