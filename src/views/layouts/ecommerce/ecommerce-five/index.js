import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Menu } from 'semantic-ui-react';

import productOne from '../../../../assets/images/ecommerce-product-one.png';
import productTwo from '../../../../assets/images/ecommerce-product-two.png';
import productThree from '../../../../assets/images/ecommerce-product-three.png';
import productFour from '../../../../assets/images/ecommerce-product-four.png';
import productFive from '../../../../assets/images/ecommerce-product-five.png';

const productOneBg = {
  backgroundImage: 'url(' + productOne + ')',
};
const productTwoBg = {
  backgroundImage: 'url(' + productTwo + ')',
};
const productThreeBg = {
  backgroundImage: 'url(' + productThree + ')',
};
const productFourBg = {
  backgroundImage: 'url(' + productFour + ')',
};
const productFiveBg = {
  backgroundImage: 'url(' + productFive + ')',
};

class EcommerceFive extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'popular' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Container textAlign="center">
        <Segment basic className="vw noPadding noMargin bgCover">
          <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
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
                    <Icon name="shopping bag" />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment
            basic
            className="fullWidth thunderDarkGray noMargin noPadding overflowHidden bgCover headerSmall headerShapesSmall"
          >
            <Segment basic className="absolute toBottom fullWidth pBottom0">
              <Menu secondary className="thunderMenu">
                <Menu.Item
                  name="popular"
                  active={activeItem === 'popular'}
                  onClick={this.handleItemClick}
                >
                  <Header as="h5" className="white">
                    POPULAR
                  </Header>
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item
                    name="new"
                    active={activeItem === 'new'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="white">
                      NEW
                    </Header>
                  </Menu.Item>
                  <Menu.Item
                    name="bestsell"
                    active={activeItem === 'bestsell'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="white">
                      BEST SELL
                    </Header>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Segment>
          </Segment>

          <Segment basic className="noMargin noPadding">
            <Grid columns="equal" verticalAlign="middle" className="noMargin">
              <Grid.Row columns={2} className="noPadding">
                <Grid.Column width={8} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment
                      basic
                      className="vh30 bgCover noMargin noPadding"
                      style={productFourBg}
                    />
                    <Segment basic padded className="absolute toBottom noMargin fullWidth">
                      <Grid columns="equal" verticalAlign="middle">
                        <Grid.Row columns={2}>
                          <Grid.Column width={4} className="noPadding">
                            <Link to="/" className="mediumGray">
                              <Icon name="heart" />
                            </Link>
                          </Grid.Column>
                          <Grid.Column width={8} floated="right">
                            <Header as="h6" className="gray noMargin textRight">
                              $ 45.00
                            </Header>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment
                      basic
                      className="vh30 bgCover noMargin noPadding"
                      style={productOneBg}
                    />
                    <Segment basic padded className="absolute toBottom noMargin fullWidth">
                      <Grid columns="equal" verticalAlign="middle">
                        <Grid.Row columns={2}>
                          <Grid.Column width={4} className="noPadding">
                            <Link to="/" className="mediumGray">
                              <Icon name="heart" />
                            </Link>
                          </Grid.Column>
                          <Grid.Column width={8} floated="right">
                            <Header as="h6" className="gray noMargin textRight">
                              $ 45.00
                            </Header>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={1} className="noPadding">
                <Grid.Column width={16} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment
                      basic
                      className="vh30 bgCover noMargin noPadding"
                      style={productTwoBg}
                    />
                    <Segment basic padded className="absolute toBottom noMargin fullWidth">
                      <Grid columns="equal" verticalAlign="middle">
                        <Grid.Row columns={2}>
                          <Grid.Column width={2} className="noPadding">
                            <Link to="/" className="mediumGray">
                              <Icon name="heart" />
                            </Link>
                          </Grid.Column>
                          <Grid.Column width={4} floated="right">
                            <Header as="h6" className="gray noMargin textRight">
                              $ 45.00
                            </Header>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2} className="noPadding">
                <Grid.Column width={8} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment
                      basic
                      className="vh30 bgCover noMargin noPadding"
                      style={productThreeBg}
                    />
                    <Segment basic padded className="absolute toBottom noMargin fullWidth">
                      <Grid columns="equal" verticalAlign="middle">
                        <Grid.Row columns={2}>
                          <Grid.Column width={4} className="noPadding">
                            <Link to="/" className="mediumGray">
                              <Icon name="heart" />
                            </Link>
                          </Grid.Column>
                          <Grid.Column width={8} floated="right">
                            <Header as="h6" className="gray noMargin textRight">
                              $ 45.00
                            </Header>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment
                      basic
                      className="vh30 bgCover noMargin noPadding"
                      style={productFiveBg}
                    />
                    <Segment basic padded className="absolute toBottom noMargin fullWidth">
                      <Grid columns="equal" verticalAlign="middle">
                        <Grid.Row columns={2}>
                          <Grid.Column width={4} className="noPadding">
                            <Link to="/" className="mediumGray">
                              <Icon name="heart" />
                            </Link>
                          </Grid.Column>
                          <Grid.Column width={8} floated="right">
                            <Header as="h6" className="gray noMargin textRight">
                              $ 45.00
                            </Header>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default EcommerceFive;
