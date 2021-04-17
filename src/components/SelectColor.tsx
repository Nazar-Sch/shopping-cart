import React from "react"
import {
  createStyles,
  makeStyles, 
  Theme,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
    },
  })
)

interface ISelectColor {
  colors: string[]
  value: string
  handleChangeValue: (value: string) => void
}

const SelectColor: React.FC<ISelectColor> = ({
  colors,
  value,
  handleChangeValue,
}) => {
  const classes = useStyles()

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={(e) => handleChangeValue(e.target.value as string)}
        label="Color"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {colors.map((color) => (
          <MenuItem value={color}>{color}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectColor
