import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header } from 'semantic-ui-react';

import profileOne from '../../../../assets/images/feed-img-one.png';
import profileTwo from '../../../../assets/images/feed-img-three.png';
import profileThree from '../../../../assets/images/feed-img-two.png';
import profileFour from '../../../../assets/images/feed-img-four.png';
import profileFive from '../../../../assets/images/feed-img-six.png';
import profileSix from '../../../../assets/images/feed-img-seven.png';

const profileOneBg = {
  backgroundImage: 'url(' + profileOne + ')',
};
const profileTwoBg = {
  backgroundImage: 'url(' + profileTwo + ')',
};
const profileThreeBg = {
  backgroundImage: 'url(' + profileThree + ')',
};
const profileFourBg = {
  backgroundImage: 'url(' + profileFour + ')',
};
const profileFiveBg = {
  backgroundImage: 'url(' + profileFive + ')',
};
const profileSixBg = {
  backgroundImage: 'url(' + profileSix + ')',
};

class ProfileThree extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Segment basic className="thunderDarkGray navbar absolute index3 fullWidth noMargin">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Row columns={3}>
              <Grid.Column width={2}>
                <Link to="/" className="white">
                  <Icon name="align left" className="menuIcon" />
                </Link>
              </Grid.Column>
              <Grid.Column width={12} className="centerContent">
                <Header as="h5" className="white">
                  PROFILE
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

        <Segment basic className="noMargin noPadding contentWrap bgDoubleGray">
          <Segment basic className="noMargin noPadding pTop1em">
            <Segment basic padded className="textLeft">
              <Header as="h1" className="gray">
                Rachel Gilbert
              </Header>
              <Segment basic className="separator thunderBlue noPadding noMargin" />
            </Segment>
            <Segment basic className="noMargin">
              <Segment basic className="thunderWhite">
                <Segment basic className="noMargin textLeft">
                  <Grid columns="equal" verticalAlign="middle">
                    <Grid.Row columns={2}>
                      <Grid.Column width={8}>
                        <Header as="h5" className="darkGray">
                          320 SHOTS
                        </Header>
                      </Grid.Column>
                      <Grid.Column width={2} floated="right">
                        <Link to="/" className="darkGray">
                          <Icon name="arrow right" />
                        </Link>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Segment basic className="noMargin">
                  <Grid columns="equal" verticalAlign="middle">
                    <Grid.Row columns={3}>
                      <Grid.Column>
                        <Segment
                          basic
                          className="squareLg bgCover noMargin noPadding textLeft"
                          style={profileOneBg}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Segment
                          basic
                          className="squareLg bgCover noMargin noPadding textLeft"
                          style={profileTwoBg}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Segment
                          basic
                          className="squareLg bgCover noMargin noPadding textLeft"
                          style={profileThreeBg}
                        />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                      <Grid.Column>
                        <Segment
                          basic
                          className="squareLg bgCover noMargin noPadding textLeft"
                          style={profileFourBg}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Segment
                          basic
                          className="squareLg bgCover noMargin noPadding textLeft"
                          style={profileFiveBg}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Segment
                          basic
                          className="squareLg bgCover noMargin noPadding textLeft"
                          style={profileSixBg}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Segment>
            </Segment>
            <Segment basic className="noMargin textLeft">
              <Grid columns="equal" verticalAlign="middle">
                <Grid.Row columns={1} className="noPadding">
                  <Grid.Column width={10}>
                    <Segment basic padded className="noMargin">
                      <Header as="h5" className="mediumGray">
                        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper
                        bibendum bibendum.
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} className="noPadding">
                  <Grid.Column width={4} floated="right">
                    <Segment basic>
                      <Segment basic className="squareM thunderGold centerContent">
                        <Icon name="plus" className="white" />
                      </Segment>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default ProfileThree;
