import React from "react";
import { Link } from 'react-router-dom'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../Header/Header";
import Footer from "../Footer/Footer.js";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Button from "../CustomButtons/Button";
import HeaderLinks from "..//Header/HeaderLinks";
import Parallax from "../Parallax/Parallax";

import styles from "../../assets/jss/material-kit-react/landingPage.js";

// Sections for this page
import ProductSection from "./ProductSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Landing(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Build website for your business with us.</h1>
              <h4>
                With our product you can build your website in no time. All you have to do is to have your feed ready for your website to show.
              </h4>
              <br />
              <Link to="/login">
                <Button
                  color="danger"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  Get Started
              </Button>
              </Link>

            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
