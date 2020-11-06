import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DottedButton from "./DottedButton";


const useStyles = makeStyles({
    select: {
      width: 163,
      height: 38,
      borderRadius: "19px",
      backgroundColor: "#2c7df0",
      fontSize: "14",
      fontWeight: 700,
      color: "#ffffff",
      lineHeight: 2.29,
      boxShadow: 'none',
      textTransform: 'lowercase',
    },
    filter: {
      height: 9.7,
      width: 17.9,
      objectFut: 'contain',
      marginRight: 5
  
  }
});

  
export default function FillterButton(props) {
    const classes = useStyles();

    return (
        <>
           <Button
                variant="contained" 
                className={classes.select}>
                  <CardMedia
                  className={classes.filter}
                  image="../svg/filter (2).svg"
                  title="filter"
                  />
                Select Device
            </Button>
        </>
    );
}
