import React from "react"
import { 
  createStyles, 
  makeStyles, 
  Theme, 
  Input
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
      <Input 
        id="outlined-basic" 
        data-testid="Search"
        placeholder="Search"
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
      />
    </form>
  )
}

export default SearchInput
