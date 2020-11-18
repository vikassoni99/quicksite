import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import InfoArea from "../InfoArea/InfoArea";

import styles from "../../assets/jss/material-kit-react/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our product</h2>
          <h5 className={classes.description}>
            We have an effient tool which keeps your website stand out in the market with dynamic changes at your fingertips.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fast and Dynamic"
              description="It is as fast as sending text messages. Just update data and your website is updated at the same time."
              icon={DynamicFeedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Ease of Use"
              description="Our customers can easily update their website details through our user friendly admin panel."
              icon={VerifiedUserIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Support Team"
              description="Our support team is available to guide and assist you on how to use our product."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
