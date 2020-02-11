import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Card } from 'semantic-ui-react';

import productOne from '../../../../assets/images/ecommerce-product-one.png';
import productTwo from '../../../../assets/images/ecommerce-product-two.png';
import productFour from '../../../../assets/images/ecommerce-product-four.png';
import productFive from '../../../../assets/images/ecommerce-product-five.png';
import productSix from '../../../../assets/images/ecommerce-product-six.png';

const productOneBg = {
  backgroundImage: 'url(' + productOne + ')',
};
const productTwoBg = {
  backgroundImage: 'url(' + productTwo + ')',
};
const productFourBg = {
  backgroundImage: 'url(' + productFour + ')',
};
const productFiveBg = {
  backgroundImage: 'url(' + productFive + ')',
};
const productSixBg = {
  backgroundImage: 'url(' + productSix + ')',
};

class EcommerceThree extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Segment basic className="vw noPadding noMargin bgCover thunderLightestGray">
          <Segment basic className="thunderDarkGray navbar absolute index3 fullWidth noMargin ">
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={3}>
                <Grid.Column width={2}>
                  <Link to="/" className="white">
                    <Icon name="align left" className="menuIcon" />
                  </Link>
                </Grid.Column>
                <Grid.Column width={12} className="centerContent">
                  <Header as="h5" className="white">
                    ECOMMERCE
                  </Header>
                </Grid.Column>
                <Grid.Column width={2} floated="right">
                  <Link to="/" className="white">
                    <Icon name="search" />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment basic className="noMargin contentWrap">
            <Segment basic className="noMargin noPadding masonry">
              <Segment basic className="noMargin noPadding masonryItem">
                <Card>
                  <Segment basic className="vh35 bgCover noMargin" style={productTwoBg} />
                  <Card.Content>
                    <Card.Description>
                      <Header as="h6" className="lightGray noMargin textLeft">
                        <span className="gray">$ 45.00</span> Habita
                      </Header>
                      <Segment basic className="noPadding textRight">
                        <span className="gold mRightHalf">&#9679;</span>
                        <span className="blue mLeftHalf mRightHalf">&#9679;</span>
                        <span className="lightestGray mLeftHalf">&#9679;</span>
                      </Segment>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Segment>
              <Segment basic className="noMargin noPadding masonryItem">
                <Card>
                  <Segment basic className="vh35 bgCover noMargin" style={productSixBg} />
                  <Card.Content>
                    <Card.Description>
                      <Header as="h6" className="lightGray noMargin textLeft">
                        <span className="gray">$ 45.00</span> Habita
                      </Header>
                      <Segment basic className="noPadding textRight">
                        <span className="blue mRightHalf">&#9679;</span>
                        <span className="gold mLeftHalf">&#9679;</span>
                      </Segment>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Segment>

              <Segment basic className="noMargin noPadding masonryItem">
                <Card>
                  <Segment basic className="vh22 bgCover noMargin" style={productFourBg} />
                  <Card.Content>
                    <Card.Description>
                      <Header as="h6" className="lightGray noMargin textLeft">
                        <span className="gray">$ 45.00</span> Habita
                      </Header>
                      <Segment basic className="noPadding textRight">
                        <span className="blue mRightHalf">&#9679;</span>
                        <span className="gold mLeftHalf">&#9679;</span>
                      </Segment>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Segment>

              <Segment basic className="noMargin noPadding masonryItem">
                <Card>
                  <Segment basic className="vh22 bgCover noMargin" style={productFiveBg} />
                  <Card.Content>
                    <Card.Description>
                      <Header as="h6" className="lightGray noMargin textLeft">
                        <span className="gray">$ 45.00</span> Habita
                      </Header>
                      <Segment basic className="noPadding textRight">
                        <span className="gold mRightHalf">&#9679;</span>
                        <span className="lightestGray mLeftHalf">&#9679;</span>
                      </Segment>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Segment>

              <Segment basic className="noMargin noPadding masonryItem">
                <Card>
                  <Segment basic className="vh22 bgCover noMargin" style={productOneBg} />
                  <Card.Content>
                    <Card.Description>
                      <Header as="h6" className="lightGray noMargin textLeft">
                        <span className="gray">$ 45.00</span> Habita
                      </Header>
                      <Segment basic className="noPadding textRight">
                        <span className="lightestGray">&#9679;</span>
                      </Segment>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Segment>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default EcommerceThree;
