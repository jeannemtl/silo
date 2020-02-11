import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header } from 'semantic-ui-react';

import profileImg from '../../../../assets/images/profile-img.png';
import profileOne from '../../../../assets/images/feed-img-three.png';
import profileTwo from '../../../../assets/images/feed-img-two.png';

const profileImgBg = {
  backgroundImage: 'url(' + profileImg + ')',
};
const profileOneBg = {
  backgroundImage: 'url(' + profileOne + ')',
};
const profileTwoBg = {
  backgroundImage: 'url(' + profileTwo + ')',
};

class ProfileTwo extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Segment basic className="vw noPadding overflowHidden">
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

          <Segment basic className="noPadding contentWrap">
            <Segment basic className="noPadding pTop1em">
              <Segment basic className="noMargin noPadding">
                <Grid columns="equal" verticalAlign="middle">
                  <Grid.Row columns={2} className="pTop0 pBottom0">
                    <Grid.Column width={12}>
                      <Segment
                        basic
                        className="vw70 bgCover noMargin noPadding textLeft"
                        style={profileImgBg}
                      >
                        <Segment basic padded>
                          <Header as="h1" className="gray">
                            Rachel Gilbert
                          </Header>
                        </Segment>
                        <Segment basic padded className="pTop10vh">
                          <Segment basic className="separator thunderBlue noPadding noMargin" />
                          <Header as="h5" className="gray noMargin">
                            10,980 FOLLOWERS
                          </Header>
                        </Segment>
                      </Segment>
                    </Grid.Column>

                    <Grid.Column width={4}>
                      <Segment
                        basic
                        className="squareM thunderLightestGray centerContent mBottom50"
                      >
                        <Icon name="arrow right" className="darkGray noMargin" />
                      </Segment>
                      <Segment basic className="squareM thunderBlue centerContent">
                        <Icon name="plus" className="white noMargin" />
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment basic className="noPadding">
                <Grid columns="equal" verticalAlign="middle">
                  <Grid.Row columns={2} className="pTop0 pBottom0">
                    <Grid.Column width={8} className="noPadding">
                      <Segment
                        basic
                        className="vh30 bgCover noMargin noPadding textLeft"
                        style={profileOneBg}
                      >
                        <Segment basic padded>
                          <Header as="h5" className="gray">
                            320
                          </Header>
                          <Header as="h5" className="gray noMargin">
                            SHOTS
                          </Header>
                        </Segment>
                      </Segment>
                    </Grid.Column>

                    <Grid.Column width={8} className="noPadding">
                      <Segment
                        basic
                        className="vh30 bgCover noMargin noPadding textLeft"
                        style={profileTwoBg}
                      >
                        <Segment basic padded>
                          <Header as="h5" className="gray">
                            1,980
                          </Header>
                          <Header as="h5" className="gray noMargin">
                            PROJECTS
                          </Header>
                        </Segment>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment basic className="noPadding">
                <Grid columns="equal" verticalAlign="middle">
                  <Grid.Row columns={2} className="noPadding pTop0">
                    <Grid.Column width={12}>
                      <Segment
                        basic
                        className="vw70 thunderLightestGray noMargin noPadding textLeft"
                      >
                        <Segment basic padded>
                          <Segment basic className="noMargin">
                            <Segment basic className="separator thunderBlue noPadding noMargin" />
                          </Segment>

                          <Segment basic className="noMargin">
                            <Header as="h5" className="mediumGray">
                              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
                              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
                              Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.{' '}
                            </Header>
                          </Segment>
                        </Segment>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column width={4} verticalAlign="bottom" className="noPadding">
                      <Segment basic>
                        <Segment basic className="squareM thunderLightestGray centerContent">
                          <Icon name="ellipsis vertical" className="darkGray noMargin" />
                        </Segment>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default ProfileTwo;
