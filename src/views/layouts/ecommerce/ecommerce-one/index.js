import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Image, Icon, Grid, Header } from 'semantic-ui-react';

import headerImg from '../../../../assets/images/pattern-shapes.png';
import productOne from '../../../../assets/images/ecommerce-product-one.png';
import productTwo from '../../../../assets/images/ecommerce-product-two.png';
import productThree from '../../../../assets/images/ecommerce-product-three.png';

const productOneBg = {
  backgroundImage: 'url(' + productOne + ')',
};
const productTwoBg = {
  backgroundImage: 'url(' + productTwo + ')',
};
const productThreeBg = {
  backgroundImage: 'url(' + productThree + ')',
};

class EcommerceOne extends Component {
  render() {
    return (
      <Container className="white vh" textAlign="center">
        <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Row columns={1}>
              <Grid.Column width={2}>
                <Link to="/" className="white">
                  <Icon name="align left" className="menuIcon" />
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment
          basic
          className="fullWidth thunderBlue noMargin noPadding overflowHidden headerMedium"
        >
          <Segment basic className="absolute fullWidth noMargin noPadding verticalAlign">
            <Header as="h1" className="white">
              THUNDER
            </Header>
            <Segment basic className="separator thunderWhite noPadding mXa" />
            <Header as="h5" className="white noMargin">
              NEW UI KIT
            </Header>
          </Segment>
          <Image src={headerImg} size="medium" className="mXa" />
        </Segment>
        <Segment basic className="noMargin noPadding">
          <Segment basic className="noMargin noPadding vh22 bgCover" style={productOneBg} />
          <Segment basic className="noMargin noPadding vh22 bgCover" style={productTwoBg} />
          <Segment basic className="noMargin noPadding vh22 bgCover" style={productThreeBg} />
        </Segment>
      </Container>
    );
  }
}

export default EcommerceOne;
