import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core'
import ServicesCard from '../Card/ServicesCard';

const Services = (props) => {
    return (
        <Container
            alignItems="center">
            <Grid
                container
                spacing={1}
                direction="column"
                justify="center"
                alignItems="center">

                <Grid
                    item
                    xs={12}
                    align="center">
                    <Typography
                        variant="h3">
                        Our Services
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    align="center">
                    <Typography
                        variant="h5"
                        color="textSecondary">
                        What we offers to our customers.
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={2}>
                <Grid
                    item
                    align="center">
                    <ServicesCard />
                </Grid>
                <Grid
                    item
                    align="center">
                    <ServicesCard />
                </Grid>
                <Grid
                    item
                    align="center">
                    <ServicesCard />
                </Grid>
            </Grid>

        </Container>
    );
}

export default Services;
