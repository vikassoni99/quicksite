import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 316,
        maxWidth: 316
    },
    title: {
        fontSize: 14,
    },
    media: {
        height: 240,
        paddingTop: '56.25%', // 16:9
    },
    Price: {
        marginLeft: 8,
    },
    Action:{
        justifyContent:"space-between"
    }
});

export default function SimpleCard() {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://assets.ied.it/wp-content/uploads/sites/5/2018/02/1.jpg"
                title="Product Image"
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    Name
                </Typography>
                <Typography color="textSecondary">
                    Description
                </Typography>
            </CardContent>
            <CardActions className={classes.Action}>
                <Typography className={classes.Price} color="secondary" variant="h6" component="h2" >
                    450$
                </Typography>
                <Button  variant="contained" color="secondary" size="small">Enquiry Now</Button>
            </CardActions>
        </Card>
    );
}