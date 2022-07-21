import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      marginBottom: theme.spacing(.5),
    },
  },
  faButton: {
    fontFamily: "IRANSans !important"
  },
  enButton: {
    fontFamily: "Muli !important"
  }
}));