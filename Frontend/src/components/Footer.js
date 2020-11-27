import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#616161',
        padding: 40
    }
});

const Footer = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Container alignItems="center">
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
                        md={3}
                        align="center"
                    >
                        <Typography variant="h6">Logo</Typography>

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={3}
                        align="center"
                    >
                        <Typography variant="h6">Data</Typography>

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={3}
                        align="center"
                    >
                        <Typography variant="h6">Contact</Typography>

                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={3}
                        align="center"
                    >
                        <Typography variant="h6">Made with Quicksite</Typography>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;