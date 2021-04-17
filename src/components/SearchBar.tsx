import React from "react"
import { makeStyles, Grid } from "@material-ui/core"

import SearchInput from "./SearchInput"
import SelectColor from "./SelectColor"

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
})

interface ISearchProps {
  searchValue: string
  colors: string[]
  selectedColor: string
  handleChangeSearchValue: (value: string) => void
  handleChangeColorValue: (value: string) => void
}

const SearchBar: React.FC<ISearchProps> = ({
  searchValue,
  colors,
  selectedColor,
  handleChangeSearchValue,
  handleChangeColorValue,
}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={6} className={classes.root}>
      <Grid item>
        <SearchInput
          value={searchValue}
          handleChangeValue={handleChangeSearchValue}
        />
      </Grid>
      <Grid item>
        <SelectColor
          colors={colors}
          handleChangeValue={handleChangeColorValue}
          value={selectedColor}
        />
      </Grid>
    </Grid>
  )
}

export default SearchBar
