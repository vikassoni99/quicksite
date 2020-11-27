import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#616161'
    },
    imgGrid: {
        backgroundColor: '#fff'
    }
});

const AboutUs = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                backgroundColor="primary">

                <Grid
                    item
                    xs={12}
                    md={6}
                    align="center"
                    className={classes.imgGrid}>
                    <Image
                        src={`https://i.ibb.co/PFqypq7/campus-extra-about-us-image-2.png`}
                        aspectRatio={(16 / 9)}
                        disableSpinner
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                    align="center"
                >
                    <Typography variant="h2">AboutUs</Typography>
                    <Typography variant="h6" color="textSecondary">
                        We at BeEcofriendly believes in providing the best alternatives to the products which are harmful to our environment. We offer a wide range of products and our team also provides consultancy services to our customers.
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}

export default AboutUs;