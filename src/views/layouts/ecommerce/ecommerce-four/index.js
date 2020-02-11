import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header } from 'semantic-ui-react';
import Slider from 'react-slick';

import productFive from '../../../../assets/images/ecommerce-product-five.png';
import productTwo from '../../../../assets/images/ecommerce-product-two.png';
import productOne from '../../../../assets/images/ecommerce-product-one.png';

const productFiveBg = {
  backgroundImage: 'url(' + productFive + ')',
};
const productTwoBg = {
  backgroundImage: 'url(' + productTwo + ')',
};
const productOneBg = {
  backgroundImage: 'url(' + productOne + ')',
};

class EcommerceFour extends Component {
  constructor(props) {
    super(props);
    this.onTabPress = this.onTabPress.bind(this);

    this.state = {
      activeTab: 'new',
    };
  }

  onTabPress(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <Container className="vh white" textAlign="center">
        <Segment basic className="vh vw noPadding noMargin bgCover">
          <Segment basic className="navbar absolute index3 fullWidth noMargin thunderLightestGray">
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={3}>
                <Grid.Column width={2}>
                  <Link to="/" className="darkGray">
                    <Icon name="arrow left" />
                  </Link>
                </Grid.Column>
                <Grid.Column width={12} className="centerContent">
                  <Header as="h5">ECOMMERCE</Header>
                </Grid.Column>
                <Grid.Column width={2} floated="right">
                  <Link to="/" className="darkGray">
                    <Icon name="plus" />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment basic className="noMargin noPadding contentWrap thunderLightestGray">
            <Segment basic className="noMargin noPadding pBottom5vh">
              <Slider centerMode="true" centerPadding="0" className="tabsSlider" arrows={false}>
                <Segment
                  basic
                  className="noMargin textLeft mRight5"
                  onClick={() => this.onTabPress('new')}
                >
                  <Header as="h2" className="darkGray">
                    NEW
                  </Header>
                  <Segment basic className="separator thunderBlue noMargin noPadding" />
                </Segment>
                <Segment
                  basic
                  className="noMargin textLeft mRight5"
                  onClick={() => this.onTabPress('popular')}
                >
                  <Header as="h2" className="darkGray">
                    POPULAR
                  </Header>
                  <Segment basic className="separator thunderBlue noMargin noPadding" />
                </Segment>
                <Segment
                  basic
                  className="noMargin textLeft mRight5"
                  onClick={() => this.onTabPress('trendy')}
                >
                  <Header as="h2" className="darkGray">
                    TRENDY
                  </Header>
                  <Segment basic className="separator thunderBlue noMargin noPadding" />
                </Segment>
              </Slider>
            </Segment>
          </Segment>

          {this.state.activeTab === 'new' ? (
            <Segment basic>
              <Segment basic className="noMargin">
                <Segment basic className="vh45 bgCover" style={productFiveBg} />
              </Segment>
              <Segment basic className="noMargin">
                <Segment basic className="vh45 bgCover" style={productFiveBg} />
              </Segment>
            </Segment>
          ) : null}

          {this.state.activeTab === 'popular' ? (
            <Segment basic>
              <Segment basic className="noMargin">
                <Segment basic className="vh45 bgCover" style={productTwoBg} />
              </Segment>
              <Segment basic className="noMargin">
                <Segment basic className="vh45 bgCover" style={productTwoBg} />
              </Segment>
            </Segment>
          ) : null}

          {this.state.activeTab === 'trendy' ? (
            <Segment basic>
              <Segment basic className="noMargin">
                <Segment basic className="vh45 bgCover" style={productOneBg} />
              </Segment>
              <Segment basic className="noMargin">
                <Segment basic className="vh45 bgCover" style={productOneBg} />
              </Segment>
            </Segment>
          ) : null}
        </Segment>
      </Container>
    );
  }
}

export default EcommerceFour;
