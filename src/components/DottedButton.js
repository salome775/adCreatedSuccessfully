
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React, { useState } from 'react';

const useStyles = makeStyles({

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
        "&:hover": {
            background: 'none'
        }
    },

    img: {
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

});

export default function DottedButton(props) {
    const classes = useStyles();
    const [state, setState] = useState(false);


    return (
        <>
            <Button onClick={() => !state ? setState(true) : setState(false)}
            style={state ? {borderColor:props.borderColor} : null}
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
                {props.label}
            </Button>
        </>
    );

    // return (
    //     <>
    //         <Button
    //         style={props.borderColor ? {borderColor:props.borderColor} : null}
    //             variant="contained"
    //             className={classes.button_gl}
    //         >
    //             <Typography className={classes.object}>
    //                 <CardMedia
    //                     className={classes.img}
    //                     image="../img/Image 8.jpg"
    //                     title="google"
    //                 />
    //             </Typography>
    //             {props.label}
    //         </Button>
    //     </>

    // const classes = useStyles();
    // const [state, setState] = useState(false);
    // return (
    //     <>
    //         <Button onClick={() => !state ? setState(true) : setState(false)}
    //         style={state ? {borderColor:props.borderColor} : null}
    //             variant="contained"
    //             className={classes.button_gl}
    //         >
    //             <Typography className={classes.object}>
    //                 <CardMedia
    //                     className={classes.img}
    //                     image="../img/Image 8.jpg"
    //                     title="google"
    //                 />
    //             </Typography>
    //             {props.label}
    //         </Button>
    //     </>
    // );
}
