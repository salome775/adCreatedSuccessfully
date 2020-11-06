import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DottedButton from "./DottedButton";
import FillterButton from "./FiltterButton";

const useStyles = makeStyles({
  contain: {
    width: "659px",
    height: "695px",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    paddingTop: 30,
  },
  h6: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 1.21,
    color: "#00000",
    paddingTop: 10
  },
  txt: {
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: 1.42,
    color: "#5d5d5d",
    marginBottom: 40,
    paddingTop: 5
  },
  media: {
    height: 22.9,
    width: 22.9,
    position: 'relative',
    left: '48%',
  },
  divider: {
    marginBottom: 30
  },
  view: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 1.21,
    letterSpacing: "normal",
    color: "#898989",
    marginRight: 13
  },
  button_fc: {
    width: 130,
    height: 38,
    borderStyle: "dotted",
    border: "solid 2px #ff4e00",
    borderRadius: "46px",
    backgroundColor: "#ffffff",
    fontSize: "12",
    fontWeight: 500,
    color: "#ff4e00",
    lineHeight: 2.67,
    marginRight: 13,
    boxShadow: 'none',
    textTransform: 'lowercase',
    "&:hover":{
        background: 'none'
    }
  },
  button_gl: {
    width: 120,
    height: 38,
    borderRadius: "46px",
    borderStyle: "dotted",
    border: "solid 2px #afafaf",
    backgroundColor: "#ffffff",
    fontSize: "12",
    fontWeight: 500,
    lineHeight: 2.67,
    color: "#536a8b",
    marginRight: 13,
    boxShadow: 'none',
    textTransform: 'lowercase',
    "&:hover":{
      background: 'none'
  }
  },
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
  div_2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  filter:{
    height: 9.7,
    width: 17.9,
    objectFut: 'contain',
    marginRight: 5
  },
  img:{
    width: 10,
    height: 10,
    objectFut: 'contain',
  },
  object: {
    width: 22,
    height: 22,
    borderRadius: 22,
    border: "solid 1px #d7d7d7",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 10
  },
  card: {
    width:331,
    height: 330,
    borderRadius: 6,
    border: 'solid 1px #d9d9d9',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'red',
    marginTop: 60,
    marginLeft: 160  
  },
  picture: {
    width: 262,
    height: 197,
    objectFit: 'contain',
    borderRadius: 16
  },
  subtitle1: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.21,
    color: "#000000",
    textAlign: 'left',
    marginTop: 20
  },
  subtitle2: {
    width: 225,
    height: 31,
    textAlign: 'left',
    fontWeight: 'bold',
    lineHeight: 1.42,
    fontSize: 12,
    color: '#6981a8',
    marginTop: 3
  },
});

export default function SimpleContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Typography component="div" className={classes.contain}>
          <CardMedia
            className={classes.media}
            image="../svg/correct.svg"
            title="correct"
          />
          <Typography className={classes.h6}>
            Ad Created Successfully
          </Typography>
          <Typography className={classes.txt}>
            Finished Process ad created. You can stop any time.
          </Typography>
          <Divider className={classes.divider} />
          <Typography component="div" className={classes.div_2}>
            <Typography className={classes.view}>Ad VIsual View:</Typography>
            <Button 
                variant="contained"
                className={classes.button_fc}
            >
            <Typography className={classes.object}>
              <CardMedia
                  className={classes.img}
                  image="../img/Image 7.jpg"
                  title="facebook"
                  />
            </Typography>
                Facebook
            </Button>
            {/* <Button
                variant="contained"
                className={classes.button_gl}
            >
              <Typography className={classes.object}>
                <CardMedia
                    className={classes.img}
                    image="../img/Image 8.jpg"
                    title="google"
                    />
              </Typography>
                Google
            </Button> */}
            <DottedButton  label='Google' borderColor='#ff4e00' />


            {/* <Button
                variant="contained" 
                className={classes.select}>
                  <CardMedia
                  className={classes.filter}
                  image="../svg/filter (2).svg"
                  title="filter"
                  />
                Select Device
            </Button> */}

            <FillterButton label="select" borderColor='#ff4e00' />

            


          </Typography>
          <Divider className={classes.divider} />
            <Grid  className={classes.card}>
              <Grid>
                  <CardMedia
                      className={classes.picture}
                      image="../img/Image 10.jpg"
                      title="filter"
                    />
                    <Typography className={classes.subtitle1}>5G უკვე საქართველოშია!</Typography>
                    <Typography className={classes.subtitle2}>გიფიქრია როგორ შეიძლება შეიქმანს საყოველთაო ჯანდაცვა?</Typography>
              </Grid>
            </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
