import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

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
  handleChangeValue: (value: any) => void
}

const SelectColor: React.FC<ISelectColor> = ({
  colors,
  value,
  handleChangeValue,
}) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChangeValue(event.target.value as string)
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
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
    </div>
  )
}

export default SelectColor
