import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Button, Icon, Grid, Header, Menu, Image } from 'semantic-ui-react';

import avatar from '../../../../assets/images/avatar.png';

import profileOne from '../../../../assets/images/feed-img-one.png';
import profileTwo from '../../../../assets/images/feed-img-five.png';
import profileThree from '../../../../assets/images/feed-img-two.png';
import profileFour from '../../../../assets/images/feed-img-three.png';

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

class ProfileOne extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'works' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Container className="white vh" textAlign="center">
        <Segment basic className="navbar absolute index3 fullWidth noMargin thunderLightestGray">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <Link to="/" className="darkGray">
                  <Icon name="align left" className="menuIcon" />
                </Link>
              </Grid.Column>
              <Grid.Column width={2} floated="right">
                <Link to="/" className="darkGray">
                  <Icon name="setting" />
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment
          basic
          className="fullWidth thunderLightestGray noMargin noPadding overflowHidden bgCover headerXLarge headerShapesSmall"
        >
          <Segment basic className="absolute fullWidth noMargin noPadding verticalAlign">
            <Segment basic className="noMargin noPadding avatar mXa">
              <Image src={avatar} className="mXa" />
            </Segment>
            <Header as="h1" className="gray">
              Rachel Gilbert
            </Header>
            <Header as="h5" className="mediumGray noMargin">
              <span className="blue">10,980</span>&nbsp; FOLLOWERS
            </Header>
          </Segment>
          <Segment basic className="absolute toBottom fullWidth">
            <Segment basic className="noPadding">
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column className="pRightHalf">
                    <Button primary>{'Follow'}</Button>
                  </Grid.Column>
                  <Grid.Column className="pLeftHalf">
                    <Button className="inverted blue">{'Message'}</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>
        </Segment>
        <Segment basic className="noMargin pTop0">
          <Segment basic className="noMargin pTop0">
            <Menu secondary className="thunderMenuInversed">
              <Menu.Item
                name="works"
                active={activeItem === 'works'}
                onClick={this.handleItemClick}
              >
                <Header as="h5" className="gray">
                  WORKS
                </Header>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item
                  name="clients"
                  active={activeItem === 'clients'}
                  onClick={this.handleItemClick}
                >
                  <Header as="h5" className="gray">
                    CLIENTS
                  </Header>
                </Menu.Item>
                <Menu.Item
                  name="info"
                  active={activeItem === 'info'}
                  onClick={this.handleItemClick}
                >
                  <Header as="h5" className="gray">
                    INFO
                  </Header>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>
          <Segment basic className="noMargin">
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={8}>
                  <Segment basic className="noMargin noPadding">
                    <Segment basic className="vh22 bgCover noMargin" style={profileOneBg} />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Segment basic className="noMargin noPadding">
                    <Segment basic className="vh22 bgCover noMargin" style={profileTwoBg} />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column width={8}>
                  <Segment basic className="noMargin noPadding">
                    <Segment basic className="vh22 bgCover noMargin" style={profileThreeBg} />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Segment basic className="noMargin noPadding">
                    <Segment basic className="vh22 bgCover noMargin" style={profileFourBg} />
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

export default ProfileOne;
