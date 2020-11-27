import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 316,
        maxWidth: 316,
        border: 0
    },
    title: {
        fontSize: 14,
    },
    media: {
        height: 340,
        paddingTop: '56.25%', // 16:9
        borderRadius: 16
    },
    Content: {
        fontSize: 16,
    }
});

export default function SimpleCard() {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://cdn2.vectorstock.com/i/1000x1000/95/86/customer-service-flat-icons-vector-10729586.jpg"
                title="Service Img"
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    Name
                </Typography>
                <Typography className={classes.Content} variant="body2" color="textSecondary" component="p">
                    Well meaning and kindly.well meaning and kindly.well meaning and
                    kindly.well meaning and kindly.well meaning and kindly.
                </Typography>
            </CardContent>
        </Card>
    );
}