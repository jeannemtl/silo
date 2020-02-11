import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Image } from 'semantic-ui-react';
import Slider from 'react-slick';

import avatar from '../../../../assets/images/avatar.png';

import feedOne from '../../../../assets/images/feed-img-one.png';
import feedTwo from '../../../../assets/images/feed-img-two.png';
import feedThree from '../../../../assets/images/feed-img-three.png';

const feedOneBg = {
  backgroundImage: 'url(' + feedOne + ')',
};
const feedTwoBg = {
  backgroundImage: 'url(' + feedTwo + ')',
};
const feedThreeBg = {
  backgroundImage: 'url(' + feedThree + ')',
};

class FeedOne extends Component {
  render() {
    return (
      <Container textAlign="center">
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
                  FEED
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

        <Segment basic className="noMargin noPadding contentWrap">
          <Segment basic className="noMargin noPadding">
            <Segment basic className="vh30 noPadding bgCover" style={feedOneBg}>
              <Segment basic className="fullHeight dFlex flexEnd">
                <Segment basic className="noMargin noPadding avatar">
                  <Image src={avatar} />
                </Segment>
              </Segment>
            </Segment>
            <Segment basic className="noMargin textLeft">
              <Header as="h5" className="mediumGray">
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper
                bibendum bibendum.
              </Header>
            </Segment>

            <Segment basic className="noMargin">
              <Segment basic className="noMargin borderTopLightGray" floated="right">
                <Header as="h5">
                  <span className="lightGray">
                    <Icon name="heart" className="lightGray" />2,435
                  </span>&nbsp;&nbsp;
                  <span className="lightGray">
                    <Icon name="comment" className="lightGray" />198
                  </span>
                </Header>
              </Segment>
            </Segment>
          </Segment>

          <Segment basic className="noPadding">
            <Segment basic className="noPadding noMargin">
              <Slider slidesToShow={2} className="vw" arrows={false}>
                <Segment basic className="vh30 noPadding bgCover" style={feedTwoBg}>
                  <Segment basic className="fullHeight dFlex flexEnd ">
                    <Segment basic className="noMargin noPadding avatar">
                      <Image src={avatar} />
                    </Segment>
                  </Segment>
                </Segment>
                <Segment basic className="vh30 noPadding bgCover" style={feedThreeBg} />
              </Slider>
            </Segment>
            <Segment basic className="noMargin textLeft">
              <Header as="h5" className="mediumGray">
                Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut
                laoreet soda.
              </Header>
            </Segment>

            <Segment basic className="noMargin">
              <Segment basic className="noMargin borderTopLightGray" floated="right">
                <Header as="h5">
                  <span className="lightGray">
                    <Icon name="heart" className="lightGray" />2,435
                  </span>&nbsp;&nbsp;
                  <span className="lightGray">
                    <Icon name="comment" className="lightGray" />198
                  </span>
                </Header>
              </Segment>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default FeedOne;
