import React from "react"
import { 
  createStyles, 
  makeStyles, 
  Theme, 
  TextField 
} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        minWidth: 350,
      },
    },
  })
)

interface ISearchInputProps {
  value: string
  handleChangeValue: (value: string) => void
}

const SearchInput: React.FC<ISearchInputProps> = ({
  value,
  handleChangeValue,
}) => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="outlined-basic" 
        label="Search" 
        variant="outlined" 
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
      />
    </form>
  )
}

export default SearchInput
