import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Card } from 'semantic-ui-react';
import Slider from 'react-slick';

import productTwo from '../../../../assets/images/ecommerce-product-two.png';

const productTwoBg = {
  backgroundImage: 'url(' + productTwo + ')',
};

class EcommerceTwo extends Component {
  render() {
    return (
      <Container className="vh" textAlign="center">
        <Segment
          basic
          className="vh vw noPadding noMargin bgCover overflowHidden"
          style={productTwoBg}
        >
          <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={3}>
                <Grid.Column width={2}>
                  <Link to="/" className="darkGray">
                    <Icon name="align left" className="menuIcon" />
                  </Link>
                </Grid.Column>
                <Grid.Column width={12} className="centerContent">
                  <Header as="h5">ECOMMERCE</Header>
                </Grid.Column>
                <Grid.Column width={2} floated="right">
                  <Link to="/" className="darkGray">
                    <Icon name="block layout" />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment basic className="noMargin noPadding contentWrap">
            <Slider centerMode="true" centerPadding="0">
              <Segment basic>
                <Card className="mXa">
                  <Segment basic className="vh75 bgCover noMargin" style={productTwoBg}>
                    <Segment
                      basic
                      floated="right"
                      className="noMargin noPadding squareXs thunderGold centerContent"
                    >
                      <Icon name="plus" className="white noMargin" />
                    </Segment>
                  </Segment>

                  <Card.Content>
                    <Card.Description>
                      <Grid columns="equal" verticalAlign="middle">
                        <Grid.Row columns={2}>
                          <Grid.Column width={8}>
                            <Header as="h5" className="lightGray noMargin textLeft">
                              <span className="gray">$ 45.00</span> HABITA
                            </Header>
                          </Grid.Column>
                          <Grid.Column width={2} floated="right">
                            <Icon name="ellipsis vertical" className="darkGray noMargin" />
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Segment>
            </Slider>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default EcommerceTwo;
