import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core'
import ProductCard from '../Card/ProductCard';

const Products = (props) => {
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
                        Our Products
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    align="center">
                    <Typography
                        variant="h5"
                        color="textSecondary">
                        What we provides to our customers.
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={2}>
                <Grid
                    item>
                    <ProductCard />
                </Grid>
                <Grid
                    item>
                    <ProductCard />
                </Grid>
                <Grid
                    item>
                    <ProductCard />
                </Grid>
            </Grid>

        </Container>
    );
}

export default Products;
